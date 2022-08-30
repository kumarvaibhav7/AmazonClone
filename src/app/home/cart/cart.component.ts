import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public route: ActivatedRoute, public dataservice: DataService, private router: Router) { }
  cart: any | undefined;
  ind: number = 0;

  // costcalculated = false;
  ngOnInit(): void {
    this.cart = this.route.snapshot.data['cartcontent'];
    // console.log(this.cart);
    // if (this.costcalculated == false) {
    this.calculatetotal();
    // this.productincart?.push({id:'1',name:'afs',quantity:1,cost:1442,image:"#"});
    // console.log(this.productincart?.filter());
  }
  // productincart:{id:any,name:any,quantity:any,base:any,cost:any,image:any}[]=[];
  temp: number = 0;
  calculatetotal() {
    this.dataservice.total = 0
    for (let i = 0; i < this.cart.length; i++) {
      this.temp = this.cart[i].quantity * this.cart[i].price;
      this.dataservice.total += this.temp;
    }
  }

  removecart(pro: any) {
    this.temp = pro.quantity * pro.price;
    this.dataservice.total -= this.temp;
    pro.quantity = 0;
    this.cart = this.dataservice.removefromcart(this.cart, pro);
    // this.dataservice.getcart().subscribe((data)=>this.cart=data);
    this.calculatetotal();
    // this.router.navigate([this.route.snapshot.pathFromRoot[1].url[0].path,'cart']);
    // this.reloadpage();
  }

  savecarttojson() {
    this.dataservice.savetojson(this.cart);
  }

}
