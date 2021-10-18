import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class OwnersServiceService {
   
    constructor(private http: HttpClient) { }
  
   getOwners() {
     return this.http.get('api/dB')
   }

   getOwner(idOwners:any) {
    return this.http.get('/api/dB/' +idOwners)
   }

   editOwner(owner:any){
    return this.http.put(`api/dB/`,owner)
   }

   deleteOwner(id:any){
    return this.http.delete(`api/dB/${id}`)
   }

   createOwner(owner:any){
    return this.http.post('api/dB', owner)
   }
    
  }