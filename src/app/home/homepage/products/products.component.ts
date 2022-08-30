import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private dataservice:DataService) { }
  products:any|undefined;
  carousel:any|undefined;
  ngOnInit(): void {
    this.dataservice.getproductdata().subscribe((data) =>{this.products=data});
    this.dataservice.getcarousel().subscribe((data1)=>{this.carousel=data1});
    // console.log(this.products);
  }

}
