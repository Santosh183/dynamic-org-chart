import { Component, model, input, InputSignal } from '@angular/core';
import { DesignationEnum, Employee } from '../../../data/types';
import { Store } from '@ngrx/store';
import { ActionTypes, insertEmployee } from '../../../store/employees.actions';
import { selectEmployeesState } from '../../../store/employees.selectors';

@Component({
  selector: 'app-add-reportee',
  templateUrl: './add-reportee.component.html',
  styleUrl: './add-reportee.component.scss'
})
export class AddReporteeComponent {
  constructor(private store: Store) {

  }

  employees: Employee[] | any;
  manager: InputSignal<Employee | any> = input()
  modalState = model(false);
  phone = '';
  email = '';
  designation = '';
  name = '';
  designations = Object.values(DesignationEnum);

  ngOnInit(): void {
    this.store.select(selectEmployeesState).subscribe(
      (emps) => {
        this.employees = emps;
      }
    );
  }
  onAddReportee() {
    const highestId = Math.max.apply(null, this.employees.map((emp: Employee) => emp.id));
    this.store.dispatch(insertEmployee({
      employee: {
        id: highestId + 1,
        phone: this.phone,
        email: this.email,
        designation: this.designation as DesignationEnum,
        name: this.name,
        managerId: this.manager().id
      }
    }));
    this.modalState.set(false)
  }
}
