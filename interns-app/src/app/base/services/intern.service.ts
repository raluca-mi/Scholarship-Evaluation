import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Intern } from 'src/app/intern';

@Injectable({
  providedIn: 'root'
})
export class InternService {
  
  readonly baseUrl = "https://localhost:44344/interns"
  readonly httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient) { }

  getInterns():Observable<Intern[]>
  {
    return this.httpClient.get<Intern[]>(this.baseUrl,this.httpOptions);
  }
}
