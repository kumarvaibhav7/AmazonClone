import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit,AfterViewInit {
  constructor(public dataservice: DataService,private router:Router,private route:ActivatedRoute) { }
  check: boolean | undefined;
  // products:any|undefined;
  // carousel:any|undefined;
  Url:any|undefined
  ngOnInit(): void {
    // this.dataservice.getproductdata().subscribe((data) =>{this.products=data;});
    // this.dataservice.getcarousel().subscribe((data1)=>{this.carousel=data1});
    // this.Url=this.route.url;
    // console.log(this.Url[0]);
  }
  ngAfterViewInit(): void {
    this.loadcarousel();
  }

  loadcarousel(){
    this.router.navigate([this.route.snapshot.pathFromRoot[1].url[0].path+'/home']);
  }
  canlogout() {
      this.check = confirm('Are you sure you want to log out?');
      if (this.check) {
        this.dataservice.isUserFound = false;
        this.dataservice.searchString="";
        this.router.navigateByUrl('');
      }
    }
  }



