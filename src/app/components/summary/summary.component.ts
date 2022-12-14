import { Component, Input } from '@angular/core';

@Component({
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {

  @Input() stock: any;

  isPositive() {
    return (this.stock && this.stock.change > 0);
  }

  isNegative() {
    return (this.stock && this.stock.change < 0);
  }
}
