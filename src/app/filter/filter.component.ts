import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'filter-component',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() keyword: string = '';
  @Output() keywordChange = new EventEmitter<string>();
  @Input() score: string = '';
  @Output() scoreChange = new EventEmitter<string>();
  @Input() order_by: string = '';
  @Output() order_byChange = new EventEmitter<string>();
  @Input() order_direction: boolean = false;
  @Output() order_directionChange = new EventEmitter<boolean>();
  
  status: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeOrderDirection(): void {
    this.status = !this.status;
    this.order_directionChange.emit(this.status);
  }

  changeKeyword(e: any): void {
    this.keywordChange.emit(e.target.value);
  }

  changeScore(e: any): void {
    this.scoreChange.emit(e.target.value);
  }

  changeOrder(e: any): void {
    this.order_byChange.emit(e.target.value);
  }
}
