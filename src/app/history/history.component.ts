import { Component, Input } from '@angular/core';
import { HistoryDto } from '../models/HistoryDto';
import { CompanyDto } from '../models/CompanyDto';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent {
  @Input() history: HistoryDto;
  constructor() {
    this.history = new HistoryDto(
      0,
      0,
      new CompanyDto(0, '', '', '', '', '', [], [], []),
      '',
      ''
    );
  }
}
