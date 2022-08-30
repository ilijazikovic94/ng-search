import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input() data: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  convertDateFormat() {
    const dateval = new Date(this.data.first_release_date);
    return dateval.getDate() + '/' + ('0' + (dateval.getMonth() + 1)).substring(1, 3) + '/' + dateval.getFullYear();
  }
}
