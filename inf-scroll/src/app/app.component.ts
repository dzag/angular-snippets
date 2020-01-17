import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { DataApi } from './data-api.service';
import { EventManager } from '@angular/platform-browser';
import { combineLatest, Subject } from 'rxjs';
import { exhaustMap, filter, map, pairwise } from 'rxjs/operators';

type Scrolls = Pick<Element, 'scrollTop' | 'scrollHeight' | 'clientHeight'>;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  items = [];

  nextPage = 1;

  scrollingEl$ = new Subject<Scrolls>();

  isScrollUp$ = this.scrollingEl$.pipe(
    pairwise(),
    map(([e1, e2]) => (e1.scrollTop - e2.scrollTop) > 0),
  );

  percent$ = this.scrollingEl$.pipe(
    map(scrolls => 1 - (scrolls.scrollTop / (scrolls.scrollHeight - scrolls.clientHeight))),
  );

  constructor(
    private dataApi: DataApi,
    private cdr: ChangeDetectorRef,
    private eventManager: EventManager,
    private ngZone: NgZone,
  ) {
  }

  ngOnInit(): void {
    this.isScrollUp$.subscribe((val) => console.log('is Up', val));

    this.scrollingEl$
      .pipe(
        filter(el => el.scrollTop === 0),
      ).subscribe(el => {
      if (el.scrollTop === 0) {
        this.ngZone.run(() => {
          document.scrollingElement.scrollTop = 10;
        });
      }
    });

    // this.ngZone.run(() => {
    combineLatest([
      this.isScrollUp$,
      this.percent$,
    ]).pipe(
      filter(([isUp, percent]) => isUp && percent > 0.99),
      exhaustMap(() => this.dataApi.getData(this.nextPage)),
    ).subscribe(items => {
      console.log('items', items);
      this.ngZone.run(() => {
        this.items = this.items.concat(items);
        this.nextPage++;
      });
    });
    // });

    this.ngZone.runOutsideAngular(() => {
      this.eventManager.addGlobalEventListener('document', 'scroll', evt => {
        const el$ = evt.target.scrollingElement;
        this.scrollingEl$.next({
          scrollTop: el$.scrollTop,
          scrollHeight: el$.scrollHeight,
          clientHeight: el$.clientHeight,
        });
      });
    });

    this.dataApi.getData(this.nextPage).subscribe(items => {
      this.items = items;
      this.cdr.detectChanges();
      this.nextPage++;
      scrollTo(0, document.scrollingElement.scrollHeight);
    });
  }

}
