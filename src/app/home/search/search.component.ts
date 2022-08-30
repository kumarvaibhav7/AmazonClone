import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute, public dataservice: DataService) { }
  products: any | undefined;
  ngOnInit(): void {
    this.products = this.route.snapshot.data['productsdata'];
    console.log(this.products);
  }
  addtocart(product: any) {
    // this.userid=this.route.snapshot.pathFromRoot[1].url[0].path;
    this.dataservice.addcart(product);
    window.alert(product.pname + " added to cart.")
    console.log(product);
  }


}
