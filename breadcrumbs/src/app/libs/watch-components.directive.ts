import { Directive } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreadcrumbsService } from './breadcrumbs.service';

@Directive({
  selector: 'router-outlet[appWatchComponents]',
})
export class WatchComponentsDirective {

  constructor(
    private outlet: RouterOutlet,
    private service: BreadcrumbsService,
  ) {
    this.outlet.activateEvents.subscribe(instance => {
      const route = this.outlet.activatedRoute;
      this.service.push({ instance, route });
    });

    this.outlet.deactivateEvents.subscribe(instance => {
      console.log('pop', instance);
      this.service.pop();
    });
  }

}

