import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { EmployeeDto } from '../models/EmployeeDto';
import { HistoryDto } from '../models/HistoryDto';
import { NoteDto } from '../models/NoteDto';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(public http: RequestService) {}

  ngOnInit(): void {
    this.http.fetchCompanies();
  }
}
