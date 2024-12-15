import { Component, model, input, InputSignal } from '@angular/core';
import { DesignationEnum, Employee } from '../../../data/types';
import { Store } from '@ngrx/store';
import { updateEmployee } from '../../../store/employees.actions';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrl: './edit-details.component.scss'
})
export class EditDetailsComponent {
  constructor(private store: Store) {

  }
  employee: InputSignal<Employee | any> = input()
  editModalState = model(false);
  phone = '';
  email = '';
  designation = '';
  name = '';
  designations = Object.values(DesignationEnum);

  ngOnInit(): void {
    this.phone = this.employee().phone;
    this.email = this.employee().email;
    this.designation = this.employee().designation;
    this.name = this.employee().name;
  }
  onEditDetails() {
    this.store.dispatch(updateEmployee({
      employee: {
        id: this.employee().id,
        phone: this.phone,
        email: this.email,
        designation: this.designation as DesignationEnum,
        name: this.name,
        managerId: this.employee().managerId
      }
    }));
    this.editModalState.set(false)
  }
}
