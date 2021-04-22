import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {

  size: any;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.size = this.usersService.size;
  }

  onChange() {
    this.usersService.setSize(+this.size);
  }

}
