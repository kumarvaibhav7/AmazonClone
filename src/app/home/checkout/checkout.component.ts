import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private route:ActivatedRoute,public dataservice:DataService, private router:Router) { }
  usersdata:any|undefined;
  cart:any|undefined;
  currentuser:any|undefined;
  ngOnInit(): void {
    this.usersdata=this.route.snapshot.data['user'];
    this.cart=this.route.snapshot.data['cartdata'];
    for(let i of this.usersdata){
      if(i.id===this.route.snapshot.pathFromRoot[1].url[0].path)
      {
        this.currentuser=i;
      }
    }
   }
   pflag:boolean=false;
   paymentflag()
   {
    this.pflag=!this.pflag;
    setTimeout(()=>{
      this.router.navigate(['/'+this.route.snapshot.pathFromRoot[1].url[0].path+'/home']);
      this.pflag=false;
      window.alert("Payment Completed");
      this.dataservice.clearcart(this.cart);
    },10000)
   }
}
