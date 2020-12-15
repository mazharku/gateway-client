import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GatewayServiceService {

  constructor(private http: HttpClient) { }

  public getAllGateway(){
    return this.http.get("http://192.168.0.104:8080/api/v1/gateways");
  }

  public getDevicesByGatewayId(gatewayId: String) {
    return this.http.get("http://192.168.0.104:8080/api/v1/gateway/"+gatewayId+"/devices");
  }
}
