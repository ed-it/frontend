import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Injectable()
export class FilterBarService {
  page: number;

  limit: number;

  searchQuery: string;

  orderBy: string;

  order: string;

  constructor() {
    this.page = 1;
    this.limit = 50;
    this.searchQuery = '';
    this.orderBy = 'timestamp';
    this.order = 'ASC';
  }

  set(params) {
    for (let key in params) {
      this[key] = params[key];
    }
  }

  getParameters() {
    const { page, limit, searchQuery, orderBy, order } = this;
    return { page, limit, searchQuery, orderBy, order };
  }
}
