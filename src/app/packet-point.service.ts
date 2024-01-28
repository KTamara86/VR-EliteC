import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PacketPointService {

  constructor(private http:HttpClient) { 
  }

  
  getPacketPointList(){
    return this.http.get('https://cdn.foxpost.hu/apms.json')
  }
  
}
