import { AfterContentInit, Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from './breadcrumbs.service';
import { NavigationStart, Router } from '@angular/router';
import { filter, skip } from 'rxjs/operators';
import { fromPairs } from 'lodash';

@Component({
  selector: 'bread-crumb-host',
  template: '<ng-content></ng-content>',
  providers: [
    BreadcrumbsService,
  ],
})
export class BreadcrumbsHostDirective implements OnInit, AfterContentInit {

  constructor(
    private service: BreadcrumbsService,
    private router: Router,
  ) {
    this.router.events
      .pipe(
        skip(1),
        filter(event => event instanceof NavigationStart)
      )
      .subscribe(event => {
        this.service.lastPath = location.pathname;
        console.log(location.search.substring(1));
        const searchParams = new URLSearchParams(location.search.substring(1));
        const params = {};
        searchParams.forEach((value, key) => {
          params[key] = value;
        });
        this.service.lastParams = params;
      });
  }

  get breadcrumbs() {
    return this.service.breadcrumbs;
  }

  get breadcrumbs2() {
    return this.service.breadcrumbs2;
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
  }


}
