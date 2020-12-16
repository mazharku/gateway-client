import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { GatewayServiceService } from '../gateway-service.service';
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  gateways: any;
  constructor( private service: GatewayServiceService,private router: Router) { }
 
  ngOnInit(): void {
    let resp= this.service.getAllGateway();
    resp.subscribe((data)=>this.gateways=data);
  }

  public viewConnectedDevices(gatewayId: String) {
    this.router.navigate(['devices', gatewayId]);
  }
  public deleteGateway(gatewayId: String) {
    let resp= this.service.deleteGateway(gatewayId);
    resp.subscribe(data => {
      console.log(data)
      this.ngOnInit();
    }, 
    error => console.log(error));
    
  }
}
