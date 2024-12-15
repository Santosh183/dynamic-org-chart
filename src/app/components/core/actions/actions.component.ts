import { Component, input, InputSignal } from '@angular/core';
import { Employee } from '../../../data/types';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.scss'
})
export class ActionsComponent {
  showAddModal = false;
  showChangeManagerModal = false;
  showDeleteModal = false;
  showEditModal = false;
  employee: InputSignal<Employee | any> = input()
}
