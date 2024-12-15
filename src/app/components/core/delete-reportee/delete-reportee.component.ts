import { Component, model, input, InputSignal } from '@angular/core';
import { Employee } from '../../../data/types';
import { Store } from '@ngrx/store';
import { deleteEmployee } from '../../../store/employees.actions';

@Component({
  selector: 'app-delete-reportee',
  templateUrl: './delete-reportee.component.html',
  styleUrl: './delete-reportee.component.scss'
})
export class DeleteReporteeComponent {
  constructor(private store: Store) {

  }

  employee: InputSignal<Employee | any> = input()
  deleteModalState = model(false);
  ngOnInit(): void {
  }
  onDeleteEmployee() {
    this.store.dispatch(deleteEmployee({
      employee: this.employee()
    }));
    this.deleteModalState.set(false)
  }
}
