import { Employee } from '../data/types';
import { initialData } from '../data/initial-data';


export class LocalStorageService {
  constructor() { }
  dataKey = 'employeeData';

  getEmployees(): Employee[] {
    let employees = localStorage.getItem(this.dataKey);
    if (employees) {
      return JSON.parse(employees);
    } else {
      this.setEmployees(initialData);
      return initialData;
    }
  }

  setEmployees(employees: Employee[]): void {
    localStorage.setItem(this.dataKey, JSON.stringify(employees))
  }

  resetEmployeeData() {
    this.setEmployees(initialData);
  }


}
