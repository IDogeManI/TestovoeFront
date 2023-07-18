import { EmployeeDto } from './models/EmployeeDto';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompanyDto } from './models/CompanyDto';
import { NoteDto } from './models/NoteDto';
@Injectable({
  providedIn: 'root',
})
export class RequestService {
  public companies: CompanyDto[];
  public errorMessage: string;
  constructor(private httpClient: HttpClient) {
    this.companies = [];
    this.errorMessage = '';
  }
  fetchCompanies() {
    this.httpClient
      .get<CompanyDto[]>('https://localhost:7262/api/testovoe/companies')
      .subscribe({
        next: (res) => {
          this.companies = res;
        },
        error: (err) => {
          this.errorMessage = err.Message;
        },
      });
  }
  createCompany(company: CompanyDto) {
    this.httpClient
      .post<string>('https://localhost:7262/api/testovoe/companies', company)
      .subscribe({
        next: (res) => {},
        error: (err) => {
          this.errorMessage = err.Message;
        },
      });
  }
  updateCompany(company: CompanyDto) {
    this.httpClient
      .put<string>('https://localhost:7262/api/testovoe/companies', company)
      .subscribe({
        next: (res) => {},
        error: (err) => {
          this.errorMessage = err.Message;
        },
      });
  }
  createEmployee(companyId: number, employee: EmployeeDto) {
    employee.companyId = companyId;
    this.httpClient
      .post<string>('https://localhost:7262/api/testovoe/employees', employee)
      .subscribe({
        next: (res) => {},
        error: (err) => {
          this.errorMessage = err.Message;
        },
      });
  }
  updateEmployee(companyId: number, employee: EmployeeDto) {
    employee.companyId = companyId;
    this.httpClient
      .put<string>('https://localhost:7262/api/testovoe/employees', employee)
      .subscribe({
        next: (res) => {},
        error: (err) => {
          this.errorMessage = err.Message;
        },
      });
  }
  deleteEmployee(companyId: number, employee: EmployeeDto) {
    employee.companyId = companyId;
    this.httpClient
      .patch<string>('https://localhost:7262/api/testovoe/employees', employee)
      .subscribe({
        next: (res) => {},
        error: (err) => {
          this.errorMessage = err.Message;
        },
      });
  }
  createNote(companyId: number, note: NoteDto) {
    note.companyId = companyId;
    this.httpClient
      .post<string>('https://localhost:7262/api/testovoe/notes', note)
      .subscribe({
        next: (res) => {},
        error: (err) => {
          this.errorMessage = err.Message;
        },
      });
  }
  deleteNote(companyId: number, note: NoteDto) {
    note.companyId = companyId;
    this.httpClient
      .patch<string>('https://localhost:7262/api/testovoe/notes', note)
      .subscribe({
        next: (res) => {},
        error: (err) => {
          this.errorMessage = err.Message;
        },
      });
  }
}
