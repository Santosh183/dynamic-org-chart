import { Component, input } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.scss'
})
export class ActionsComponent {
  showAddModal = false;
  employee = input();

}
