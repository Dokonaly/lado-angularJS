import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private active = {
    about: null,
    home: 'active',
    our_work: null,
    contact: null
  };
  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.router.url);
  }

  setActiveItem(name) {
    var self = this;
    Object.keys(self.active).forEach(function(key,index) {
      self.active[key] = null;
    });
    self.active[name] = 'active';
  }
}
