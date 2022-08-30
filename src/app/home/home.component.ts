import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  keyword: string = '';
  score: string = '';
  order_by: string = 'first_release_date';
  order_direction: boolean = false;
  data: Array<any> = [];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getFilterData(this.keyword, this.score, this.order_by)
      .subscribe((res) => {
        this.data = res;
      })
  }

  public changeKeyword(data: string) {
    this.keyword = data;
  }

  public changeScore(data: string) {
    this.score = data;
  }

  public changeOrderBy(data: string) {
    this.order_by = data;
  }

  public changeOrderDirection(data: boolean) {
    this.order_direction = data;
  }

  get filteredData() {
    let result = this.data;
    if (this.keyword) {
      result = result.filter(item => item.name.indexOf(this.keyword) > -1);
    }
    if (this.score) {
      result = result.filter(item => item.rating > this.score);
    }
    if (this.order_by) {
      result.sort((current, next) => {
        if (current[this.order_by] > next[this.order_by]) {
          return this.order_direction ? 1 : -1;
        }
        if (current[this.order_by] < next[this.order_by]) {
          return this.order_direction ? -1 : 1
        }
        return 0;
      });
    }
    return result;
  }

}
