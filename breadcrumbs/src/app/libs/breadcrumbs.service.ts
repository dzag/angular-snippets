import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { flatMap } from 'lodash';

@Injectable()
export class BreadcrumbsService {

  breadcrumbs = [];

  breadcrumbs2 = [];

  prevRoute: ActivatedRoute;
  lastBc: any;

  lastPath = '';
  lastParams: any = {};

  constructor() {
    console.log(this);
  }

  push(obj) {
    const { route: currentRoute, instance } = obj as { route: ActivatedRoute, [p: string]: any };

    const urlSegments = flatMap(currentRoute.pathFromRoot.map(r => r.snapshot.url));
    const path = urlSegments.map(u => u.path).join('/');

    this.breadcrumbs2.push({
      instance,
      name: instance.name,
      url: path,
    });

  }

  updateNameOf(instance, newName) {
    const found = this.breadcrumbs2.find(bc => bc.instance === instance);
    if (found) {
      found.name = newName;
    }
  }

  updateUrlOf(instance, newUrl) {
    const found = this.breadcrumbs2.find(bc => bc.instance === instance);
    if (found) {
      const { params, path } = this.getPathAndParams(newUrl);
      console.log(params,  path, newUrl);
      found.url = path;
      found.params = params;
    }
  }

  pop() {
    this.breadcrumbs.pop();
    this.breadcrumbs2.pop();
  }

  getPathAndParams(href: string) {
    const url = new URL(href);

    const params = {};
    url.searchParams.forEach((value, key) => params[key] = value);

    return {
      path: url.pathname,
      params,
    };
  }

}
