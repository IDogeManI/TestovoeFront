import { Component, Input } from '@angular/core';
import { NoteDto } from '../models/NoteDto';
import { CompanyDto } from '../models/CompanyDto';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent {
  @Input() note: NoteDto;
  constructor() {
    this.note = new NoteDto(
      0,
      0,
      new CompanyDto(0, '', '', '', '', '', [], [], []),
      0,
      ''
    );
  }
}
