import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

selectIndex = 1;



  ngOnInit(): void {
    this.showDivs(this.selectIndex)
  }


  selectNextSlide(index:number):void {
    
    console.log(index)
// this.selectIndex
this.showDivs(this.selectIndex += index);
  }

  showDivs(n:number) {
    var i;
    var x = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    if (n > x.length) {this.selectIndex = 1}
    if (n < 1) {this.selectIndex = x.length}
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    x[this.selectIndex-1].style.display = "block";  
  }

}
