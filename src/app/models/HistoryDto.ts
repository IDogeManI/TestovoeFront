import { CompanyDto } from './CompanyDto';

export class HistoryDto {
  constructor(
    public id: number,
    public companyId: number,
    public company: CompanyDto,
    public orderDate: string,
    public storeCity: string
  ) {}
}
