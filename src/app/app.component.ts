import { Component } from '@angular/core';
import { StocksService, StockInterface } from './services/stocks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  stocks: Array<StockInterface> = [];

  constructor(service: StocksService) {
    // @ts-ignore
    service.load(['AAPL'])
      .subscribe(stocks => this.stocks = stocks);
  }
}
