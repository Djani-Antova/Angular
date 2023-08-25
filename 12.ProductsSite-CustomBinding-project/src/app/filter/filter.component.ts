import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
      
  }
  @Input() all: Number = 0;
  @Input() masculine: Number = 0;
  @Input() feminine: Number = 0;

}
