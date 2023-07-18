import { RequestService } from './../request.service';
import { Component, Input, OnInit } from '@angular/core';
import { EmployeeDto } from '../models/EmployeeDto';
import { CompanyDto } from '../models/CompanyDto';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  @Input() companyId: number;
  @Input() employee: EmployeeDto;
  employeeFirsName: string = '';
  employeeLastName: string = '';
  employeeTitle: string = '';
  employeeBirthDate: string = '';
  employeePosition: string = '';
  constructor(private http: RequestService) {
    this.companyId = 0;
    this.employee = new EmployeeDto(
      0,
      0,
      new CompanyDto(0, '', '', '', '', '', [], [], []),
      '',
      '',
      '',
      '',
      ''
    );
  }
  ngOnInit(): void {
    this.employeeFirsName = this.employee.firstName;
    this.employeeLastName = this.employee.lastName;
    this.employeeTitle = this.employee.title;
    this.employeeBirthDate = this.employee.birthDate;
    this.employeePosition = this.employee.position;
  }
  editMode: boolean = false;
  onSubmitEdit() {
    this.http.updateEmployee(
      this.companyId,
      new EmployeeDto(
        this.employee.id,
        this.companyId,
        new CompanyDto(0, '', '', '', '', '', [], [], []),
        this.employeeFirsName,
        this.employeeLastName,
        this.employeeTitle,
        this.employeeBirthDate,
        this.employeePosition
      )
    );
    setTimeout(() => {
      this.http.fetchCompanies();
    }, 1000);
    this.editMode = false;
  }
}
