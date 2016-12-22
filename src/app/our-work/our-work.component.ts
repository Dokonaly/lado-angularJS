import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.css']
})
export class OurWorkComponent implements OnInit {
  private pics_count = 5;
  private i = 0;
  constructor() { }

  ngOnInit() {
  }

  next() {
    var self = this;
    if (self.i < self.pics_count -1) {
      self.i += 1;
    }
  }

  previous() {
    var self = this;
    if (self.i > 0) {
      self.i -= 1;
    }
  }

}
