import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient ) {}


  private baseUrl='http://localhost:8000/api/';
  public add(form:any){
    const header=new HttpHeaders;
    return this.http.post<any>(this.baseUrl+'add/',form)}

    public getChauffeurs(){return this.http.get(this.baseUrl+'show')}
    public deleteChauffeurs(id:any){return this.http.get(this.baseUrl+'delete/'+id)}
}
