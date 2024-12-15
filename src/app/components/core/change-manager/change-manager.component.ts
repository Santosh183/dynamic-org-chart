import { Component, input, InputSignal, model } from '@angular/core';
import { Employee } from '../../../data/types';
import { updateEmployee } from '../../../store/employees.actions';
import { selectEmployeesState } from '../../../store/employees.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-change-manager',
  templateUrl: './change-manager.component.html',
  styleUrl: './change-manager.component.scss'
})
export class ChangeManagerComponent {
  constructor(private store: Store) {

  }

  employee: InputSignal<Employee | any> = input()
  changeManagerModalState = model(false);
  potentialManagers: Employee[] | any;
  newManagerId: number = 0;

  // filter employee itself, his manager and his reportees as they can not be his managers
  ngOnInit(): void {
    this.store.select(selectEmployeesState).subscribe(
      (emps: Employee[] | any) => {
        const allReportees = emps.filter((e: Employee) => e.managerId === this.employee().id).map((e: Employee) => e.id);
        const prohibitedIds = [...allReportees, this.employee().id, this.employee().managerId]
        this.potentialManagers = emps.filter((emp: Employee) => !prohibitedIds.includes(emp.id));
      }
    );
  }
  onAddReportee() {

    this.store.dispatch(updateEmployee({
      employee: {
        ...this.employee(),
        managerId: this.newManagerId
      }
    }));
    this.changeManagerModalState.set(false)
  }
}
