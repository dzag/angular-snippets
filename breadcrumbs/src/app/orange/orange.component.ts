import { Component, forwardRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractsLink, OnNavigationOut } from './abstracts';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-orange',
  templateUrl: './orange.component.html',
  styleUrls: ['./orange.component.scss'],
  providers: [
    {
      provide: AbstractsLink,
      useExisting: forwardRef(() => OrangeComponent),
    },
  ],
})
export class OrangeComponent implements OnInit, OnNavigationOut {

  name = 'OrangeComponent';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    console.log('route', route);
  }

  ngOnInit() {
  }

  filter() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        test: (Math.random() * 100).toFixed(2),
      },
    });
  }

  onNavigationOut(): Observable<any> | any {
    return {
      newUrl: location.href,
    };
  }

}
