import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface RateData {
  id: number;
  first_release_date: number;
  name: string;
  rating: number;
  summary: string;
}

@Injectable()
export class HomeService {
  constructor(private http: HttpClient) {}

  getFilterData(keyword: string, score: string, order_by: string) {
    return this.http.get<RateData[]>(
      'https://public.connectnow.org.uk/applicant-test/'
    );
  }
}
