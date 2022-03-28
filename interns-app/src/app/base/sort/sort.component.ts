import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
  
  @Output() emitSelectedSort= new EventEmitter<string>();

    options:string[]=["Ascending","Descending"];
    selected:string;

  constructor() { }

  ngOnInit(): void {
  }

  selectSort(option:string) {
    this.emitSelectedSort.emit(option);
  }

}
