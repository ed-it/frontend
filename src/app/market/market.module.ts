import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '../shared/shared.module';

// Containers
import { MarketContainerComponent } from './containers/market-container/market-container.component';

// Components
import { MarketToolbarComponent } from './components/market-toolbar/market-toolbar.component';
import { MarketCategoriesComponent } from './components/market-categories/market-categories.component';

// Pipes
import { MarketPipesModule } from './pipes/market-pipes.module';

const routes: Routes = [
  {
    path: 'market',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: MarketContainerComponent
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes), NgbModule.forRoot(), ReactiveFormsModule, MarketPipesModule],
  declarations: [MarketToolbarComponent, MarketCategoriesComponent, MarketContainerComponent]
})
export class MarketModule {}

// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { StoreModule } from '@ngrx/store';

// import { MarketRoutingModule } from './market-routes.module';

// import { MarketComponent } from './market.component';
// import { MarketToolbarComponent } from './market-toolbar/market-toolbar.component';
// import { MarketResolver } from './market.resolver';
// import { MarketApi } from './market-api.service';

// import { IsDisabledPipe } from './pipes/is-disabled';
// import { GetCommoditiesPipe } from './pipes/get-commodities';
// import { GoodBuyPipe } from './pipes/good-buy';
// import { BadSellPipe } from './pipes/bad-sell';
// import { ProfitPipe } from './pipes/profit';
// import { marketReducer } from './market-reducer';
// import { marketToolbarReducer } from './market-toolbar/market-toolbar.reducer';

// import { SharedModule } from '../shared/shared.module';

// @NgModule({
//   imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule, NgbModule.forRoot(), MarketRoutingModule],
//   declarations: [
//     IsDisabledPipe,
//     GoodBuyPipe,
//     BadSellPipe,
//     GetCommoditiesPipe,
//     ProfitPipe,
//     MarketComponent,
//     MarketToolbarComponent
//   ],
//   exports: [
//     IsDisabledPipe,
//     GoodBuyPipe,
//     BadSellPipe,
//     GetCommoditiesPipe,
//     ProfitPipe,
//     MarketComponent,
//     MarketToolbarComponent
//   ],
//   providers: [MarketApi, MarketResolver]
// })
// export class MarketModule {}
