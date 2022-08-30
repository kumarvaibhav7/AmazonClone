import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {


  showArrows = true;
  showIndicators = false;
  carousel: any | undefined;
  carouselimages: string[] = [];
  products: any | undefined;
  categories: string[] = [];

  constructor(config: NgbCarouselConfig, private route: ActivatedRoute, private dataservice:DataService) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
  }

  ngOnInit(): void {
    this.carousel = this.route.snapshot.data['carouselimage'];
    for (let i = 0; i < this.carousel.length; i++) {
      this.carouselimages.push(this.carousel[i].image);
    }
    this.products = this.route.snapshot.data['productdata'];
    for (let i = 0; i < this.products.length; i++) {
      if (this.categories.includes(this.products[i].category)) {
        continue;
      }
      console.log(this.products)
      this.categories.push(this.products[i].category);
    }
    console.log(this.categories);
  }
  // ngOnChanges(): void {
  //   // for (let i of this.products) {
  //   //   this.images.push(i.image);
  //   // }
  //   console.log(this.carousel)
  // }
  addtocart(product:any)
  {
    this.dataservice.addcart(product);
    alert(product.pname+" added in cart.");
  }



}
