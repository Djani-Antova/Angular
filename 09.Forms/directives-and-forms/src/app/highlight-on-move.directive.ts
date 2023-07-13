import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightOnMove]'
})
export class HighlightOnMoveDirective implements OnInit {

  constructor(private elRef: ElementRef) {    
    
  }
  ngOnInit(): void {
    console.log(this.elRef);
    this.elRef.nativeElement.style.backgroundColor = 'yellow'
  }

}
