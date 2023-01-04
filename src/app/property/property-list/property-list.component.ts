import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties?: Array<IProperty>;
  p2:any;
  SellRent=1;
  constructor(private housingService: ApiService,private route:ActivatedRoute) {}

  ngOnInit() {
    if(this.route.snapshot.url.toString()){
      this.SellRent=2;
    };
    this.housingService.getAllProperties().subscribe(
      data => {
          this.p2= data;
          this.properties=this.p2.filter((property:IProperty)=>property.SellRent==this.SellRent)
          console.log(data);
      }, error => {
          // console.log('httperror:');
          console.log(error);
      }
  );
  }
}
