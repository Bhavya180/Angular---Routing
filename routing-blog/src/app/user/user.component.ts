import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  userId:any;
  constructor(private route : ActivatedRoute){}

  ngOnInit(): void {
    console.warn("user id is", this.route.snapshot.paramMap.get('n'));
    this.userId = this.route.snapshot.paramMap.get('id');
  }
}
