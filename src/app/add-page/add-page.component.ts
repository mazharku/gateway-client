import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { DeviceListComponent } from '../device-list/device-list.component';
import { Gateway } from '../Gateway';
import { GatewayServiceService } from '../gateway-service.service';
import { Peripheral } from '../Peripheral';
@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {
  
   
  devices: Array<Peripheral> = [];;
  device: Peripheral = new Peripheral();
  gateway: Gateway= new Gateway();
  constructor(private route: ActivatedRoute, private service: GatewayServiceService,private router: Router) { }

  ngOnInit(): void {
    
  }

   public addDevice() {
    let device = new Peripheral();
    device = this.device;
    this.devices.push(device);
    this.ngOnInit();
   }
  onSubmit() {
    
    this.gateway.peripherals= this.devices;
    this.doAddGateway();   
    //this.gotoList(); 
  }

  public doAddGateway() {
    let resp= this.service.addGateway(this.gateway);
    resp.subscribe(data => {
      console.log(data)
      this.gateway = new Gateway();
      this.gotoList();
    }, 
    error => console.log(error));
  }
  gotoList() {
    this.router.navigate(['']);
  }
}
