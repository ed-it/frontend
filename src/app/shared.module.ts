import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SearchByPipe } from './shared/pipes/search-by';
import { ArraySortPipe } from './shared/pipes/sort';

@NgModule({
  imports: [BrowserModule],
  declarations: [SearchByPipe, ArraySortPipe],
  providers: [],
  exports: [SearchByPipe, ArraySortPipe]
})
export class SharedModule {}
