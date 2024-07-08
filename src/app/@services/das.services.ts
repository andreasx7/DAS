import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root' // or you can specify a particular module
})
export class DasServices {
  private _projectApiEndpoint = environment.projectApiEndpoint

  constructor(private http: HttpClient,
  ) {

  }

  GetMembers(): Observable<any[]> {
    const _apiEndpoint = this._projectApiEndpoint + '/requests.php';
    return this.http.get<any[]>(_apiEndpoint);
  }

  getProjects(): Observable<any[]> {
    const _apiEndpoint = this._projectApiEndpoint + '/requests.php?action=getProjects';
    return this.http.get<any[]>(_apiEndpoint);
  }
}