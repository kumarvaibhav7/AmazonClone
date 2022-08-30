import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  usersdata:any|undefined;
  signedin:any|undefined;
  isloaded:boolean=false;
  userid:string='';
  constructor(private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.usersdata=this.route.snapshot.data['userlist'];
    this.userid=String(Number(this.route.snapshot.pathFromRoot[1].url[0].path)-1);
    this.signedin=this.usersdata[this.userid];
    console.log(this.route.snapshot.pathFromRoot);
    // console.log(this.signedin);
  }
}
