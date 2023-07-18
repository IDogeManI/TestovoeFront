import { CompanyDto } from './CompanyDto';

export class NoteDto {
  constructor(
    public id: number,
    public companyId: number,
    public company: CompanyDto,
    public invoiceNumber: number,
    public employee: string
  ) {}
}
