import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnChanges {
  @Input('title') titleFromApp: string = '';
  @Input('activeUsers') activeUsers: {name: string, age: number}[] = [];
  @Output() onChildOutput = new EventEmitter<boolean>();

  isActive = false;
  inputValue = 'Hello';

 
  ngOnInit() {
    console.log('Navigation -> before initiated');
    
  }

  ngAfterViewInit(): void {
    console.log('Navigation -> After initiated');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Changes');
    console.log(changes);

  }

  handleClick(event: Event, ...args: number[]): void {
    this.isActive = !this.isActive;
    this.onChildOutput.emit(this.isActive)
  }
}
