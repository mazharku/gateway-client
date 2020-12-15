import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { GatewayServiceService } from '../gateway-service.service';
@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {
  gatewayId: String;
  peripherals: any;

  constructor(private route: ActivatedRoute, private service: GatewayServiceService,private router: Router) { }
 
  ngOnInit(): void {
    this.gatewayId = this.route.snapshot.params['gatewayId'];
    let resp= this.service.getDevicesByGatewayId(this.gatewayId);
    resp.subscribe((data)=>this.peripherals=data);
    //this.getConnectedDevice(this.gatewayId);
  }
   
  public getConnectedDevice(id: String) {
    let resp= this.service.getDevicesByGatewayId(this.gatewayId);
    resp.subscribe((data)=>this.peripherals=data);
  }
}
