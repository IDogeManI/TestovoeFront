import { CompanyDto } from './CompanyDto';

export class EmployeeDto {
  constructor(
    public id: number,
    public companyId: number,
    public company: CompanyDto,
    public firstName: string,
    public lastName: string,
    public title: string,
    public birthDate: string,
    public position: string
  ) {}
}
