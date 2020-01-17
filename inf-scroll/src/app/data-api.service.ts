import { Injectable } from '@angular/core';
import { asapScheduler, scheduled, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataApi {

  constructor() { }

  getData(page = 1) {
    return timer(1000).pipe(
      map(() =>
        Array.from({ length: 100 })
          .map((v, index) => ({ id: index + 1 + ((page - 1) * 100) }))
      ),
      switchMap(items => scheduled([items], asapScheduler))
    );
  }

}
