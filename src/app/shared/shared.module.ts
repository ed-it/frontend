import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SearchByPipe } from './pipes/search-by';
import { ArraySortPipe } from './pipes/array-sort';
import { ArrayReversePipe } from './pipes/array-reverse';
import { ArrayFromObjectKeysPipe } from './pipes/array-from-object-keys';

@NgModule({
  imports: [NgbModule.forRoot()],
  declarations: [SearchByPipe, ArraySortPipe, ArrayReversePipe, ArrayFromObjectKeysPipe],
  exports: [SearchByPipe, ArraySortPipe, ArrayReversePipe, ArrayFromObjectKeysPipe]
})
export class SharedModule {}
