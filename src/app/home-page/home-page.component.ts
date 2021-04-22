import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [UsersService]
})
export class HomePageComponent implements OnInit {

  users : any = [];
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.users = this.usersService.users
  }

}
