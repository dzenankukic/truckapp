import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }
  isCheked: any;
  @Input() cardData:any;
  ngOnInit() {
    console.log(this.cardData);
    if(this.cardData?.checked == true) {
      this.isCheked = true;
    }
    else{
      this.isCheked = false;
    }
  }

}
