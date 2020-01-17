import { Directive, HostListener, Input, Optional } from '@angular/core';
import { AbstractsLink } from '../orange/abstracts';
import { ActivatedRoute, Router, RouterLinkWithHref } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { isObservable, of } from 'rxjs';
import { first } from 'rxjs/operators';
import { BreadcrumbsService } from './breadcrumbs.service';

const dumpAbstract: AbstractsLink = {
  onNavigationOut() {},
};

@Directive({ selector: 'a[projectLink],area[projectLink]' })
export class ProjectLinkWithHref extends RouterLinkWithHref {

  commands: any[] = [];

  constructor(
    @Optional() private abstractLink: AbstractsLink,
    @Optional() private service: BreadcrumbsService,
    private router: Router,
    private route: ActivatedRoute,
    private locationStrategy: LocationStrategy,
  ) {
    super(router, route, locationStrategy);

    console.log('abstractLink', abstractLink);
  }

  @Input()
  set projectLink(commands: any[] | string) {
    if (commands != null) {
      this.commands = Array.isArray(commands) ? commands : [commands];
    } else {
      this.commands = [];
    }
  }

  @HostListener('click', ['$event.button', '$event.ctrlKey', '$event.metaKey', '$event.shiftKey'])
  onClick(button: number, ctrlKey: boolean, metaKey: boolean, shiftKey: boolean): boolean {
    if (button !== 0 || ctrlKey || metaKey || shiftKey) {
      return true;
    }

    if (typeof this.target === 'string' && this.target !== '_self') {
      return true;
    }

    const extras = {
      skipLocationChange: attrBoolValue(this.skipLocationChange),
      replaceUrl: attrBoolValue(this.replaceUrl),
      state: this.state,
    };

    const result = this.abstract.onNavigationOut();
    const result$ = isObservable(result) ? result : of(result || null);

    result$
      .pipe(first())
      .subscribe((outResult) => {
        if (outResult) {
          this.service && this.service.updateUrlOf(this.abstract, outResult.newUrl);
        }
        this.router.navigateByUrl(this.urlTree, extras);
      });

    return false;
  }

  get abstract() {
    return this.abstractLink || dumpAbstract;
  }

}

function attrBoolValue(s: any): boolean {
  return s === '' || !!s;
}
