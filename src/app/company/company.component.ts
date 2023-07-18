import { Component, Input, OnInit } from '@angular/core';
import { CompanyDto } from '../models/CompanyDto';
import { RequestService } from '../request.service';
import { EmployeeDto } from '../models/EmployeeDto';
import { NoteDto } from '../models/NoteDto';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {
  @Input() company: CompanyDto;
  companyName: string = '';
  companyAdress: string = '';
  companyCity: string = '';
  companyState: string = '';
  companyPhone: string = '';
  addedEmployeeFirsName: string = '';
  addedEmployeeLastName: string = '';
  addedEmployeeTitle: string = '';
  addedEmployeeBirthDate: string = '';
  addedEmployeePosition: string = '';
  addedNoteInvoiceNumber: number = 0;
  addedNoteEmployee: string = '';
  constructor(public http: RequestService) {
    this.company = new CompanyDto(0, '', '', '', '', '', [], [], []);
  }
  ngOnInit(): void {
    this.companyName = this.company.name;
    this.companyAdress = this.company.adress;
    this.companyCity = this.company.city;
    this.companyState = this.company.state;
    this.companyPhone = this.company.phone;
  }
  editMode: boolean = false;
  showDetails: boolean = false;
  employeeAddMode: boolean = false;
  noteAddMode: boolean = false;
  onSubmitEdit() {
    this.http.updateCompany(
      new CompanyDto(
        this.company.id,
        this.companyName,
        this.companyAdress,
        this.companyCity,
        this.companyState,
        this.companyPhone,
        [],
        [],
        []
      )
    );
    setTimeout(() => {
      this.http.fetchCompanies();
    }, 1000);
    this.editMode = false;
  }
  onSubmitEmployee() {
    this.http.createEmployee(
      this.company.id,
      new EmployeeDto(
        0,
        this.company.id,
        new CompanyDto(0, '', '', '', '', '', [], [], []),
        this.addedEmployeeFirsName,
        this.addedEmployeeLastName,
        this.addedEmployeeTitle,
        this.addedEmployeeBirthDate,
        this.addedEmployeePosition
      )
    );
    setTimeout(() => {
      this.http.fetchCompanies();
    }, 1000);
    this.employeeAddMode = false;
  }
  onSubmitNote() {
    this.http.createNote(
      this.company.id,
      new NoteDto(
        0,
        this.company.id,
        new CompanyDto(0, '', '', '', '', '', [], [], []),
        this.addedNoteInvoiceNumber,
        this.addedNoteEmployee
      )
    );
    setTimeout(() => {
      this.http.fetchCompanies();
    }, 1000);
    this.noteAddMode = false;
  }
}
