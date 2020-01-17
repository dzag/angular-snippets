import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchComponentsDirective } from './watch-components.directive';
import { BreadcrumbsHostDirective } from './breadcrumbs-host.directive';
import { ProjectLinkWithHref } from './project-link.directive';

@NgModule({
  declarations: [
    WatchComponentsDirective,
    BreadcrumbsHostDirective,
    ProjectLinkWithHref,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    WatchComponentsDirective,
    BreadcrumbsHostDirective,
    ProjectLinkWithHref,
  ],
})
export class LibsModule {}
