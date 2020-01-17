import { Observable } from 'rxjs';

export class AbstractsLink implements OnNavigationOut {

  onNavigationOut(): Observable<any> | any {

  }

}

export interface OnNavigationOut {
  onNavigationOut(...params: any[]): Observable<any> | any;
}
