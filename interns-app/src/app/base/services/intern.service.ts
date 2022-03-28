import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
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

  
  getIntern(internId: string)
  {
     return this.httpClient.get<Intern[]>(this.baseUrl, this.httpOptions).pipe(map((interns:Intern[])=>interns.find(intern => intern.id===internId)));
  }

  getInterns():Observable<Intern[]>
  {
    return this.httpClient.get<Intern[]>(this.baseUrl,this.httpOptions);
  }

  addIntern(intern: Intern)
  {
    return this.httpClient.post(this.baseUrl,intern, this.httpOptions);
  }

  editIntern(internId:string, intern: Intern) 
  {
    return this.httpClient.put(this.baseUrl + "/" + internId, intern ,this.httpOptions)
  }

  deleteIntern(internId:string)
  {
    return this.httpClient.delete(this.baseUrl+"/"+internId,this.httpOptions);
  }
}
