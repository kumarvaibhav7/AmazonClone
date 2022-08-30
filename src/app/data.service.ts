import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseurl = "http://localhost:3000/";
  constructor(private http: HttpClient) { }
  getusersData() {
    return this.http.get(this.baseurl + "users");
  }
  getproductdata() {
    return this.http.get(this.baseurl + "products");
  }
  getcarousel() {
    return this.http.get(this.baseurl + "carousel");
  }
  addcart(product: any) {
    // const headers={'content-type':'application/json'};
    const prod = {
      id: product.id,
      quantity: product.quantity += 1,
      pname: product.pname,
      price: product.price,
      image: product.image,
      about: product.about,
      category: product.category
    };
    console.log(prod)
    // product={"id":"1"}+product;
    // console.log(product);
    // this.http.put(this.baseurl+"cart",product,{'headers':headers}).subscribe(res=>{
    //   console.log(res);
    // },
    // err=>{
    //   console.log(err);
    // })

    this.http.put<any>(this.baseurl + "products/" + product.id, prod).subscribe(data => {
      // console.log(data);
    },
      err => {
        console.log(err);
      })
  }
  getcart() {
    return this.http.get(this.baseurl + "products");
  }

  clearcart(cart:any){
    for(let i of cart){
      i.quantity=0;
      this.http.put<any>(this.baseurl + "products/" + i.id, i).subscribe(data => {
        // console.log(data);
      },
        err => {
          console.log(err);
        })
    }
    }
  

  removefromcart(localcart: any, product: any) {
    // const prod = {
    //   id: product.id,
    //   quantity: 0,
    //   pname: product.pname,
    //   price: product.price,
    //   image: product.image,
    //   about: product.about,
    //   category: product.category
    // };
    for (let i of localcart) {
      if (i.id === product.id) {
        i.quantity = 0;
      }
    }
    return localcart;
    // return this.http.put<any>(this.baseurl + "products/" + product.id, prod).subscribe(data => {
    //   console.log(data);
    // },
    //   err => {
    //     console.log(err);
    //   })
  }
  searchString: string = "";
  isUserFound: boolean | undefined;
  total: number = 0;
  savetojson(localarr: any) {
    for (let prod of localarr) {
      this.http.put<any>(this.baseurl + "products/" + prod.id, prod).subscribe(data => {
        // console.log(data);
      },
        err => {
          console.log(err);
        })
    }

  }
}
