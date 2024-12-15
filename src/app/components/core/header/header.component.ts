import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { resetData } from '../../../store/employees.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private store: Store) {

  }

  resetData() {
    this.store.dispatch(resetData({ newEmployees: undefined }));
  }
}
