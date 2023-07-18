import { EmployeeDto } from './EmployeeDto';
import { HistoryDto } from './HistoryDto';
import { NoteDto } from './NoteDto';

export class CompanyDto {
  constructor(
    public id: number,
    public name: string,
    public adress: string,
    public city: string,
    public state: string,
    public phone: string,
    public employees: EmployeeDto[],
    public histories: HistoryDto[],
    public notes: NoteDto[]
  ) {}
}
