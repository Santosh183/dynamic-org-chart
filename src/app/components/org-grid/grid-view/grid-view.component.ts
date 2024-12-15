import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectEmployeesState } from '../../../store/employees.selectors';
import { Employee } from '../../../data/types';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrl: './grid-view.component.scss'
})
export class GridViewComponent implements OnInit {
  data: Employee[] | any;
  constructor(private store: Store) {
    this.data = [];
  }

  ngOnInit(): void {
    this.store.select(selectEmployeesState).subscribe(
      (emps) => {
        this.data = emps;
      }
    );
  }

}
