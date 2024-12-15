import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/core/header/header.component';
import '@cds/core/icon/register.js';
import { addTextIcon, ClarityIcons, ellipsisVerticalIcon, pencilIcon, tableIcon, trashIcon, twoWayArrowsIcon, usersIcon } from '@cds/core/icon';
import { GraphViewComponent } from './components/org-graph/graph-view/graph-view.component';
import { GridViewComponent } from './components/org-grid/grid-view/grid-view.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { getEmplpoyeesReducer } from './store/employees.reducer';
import { ActionsComponent } from './components/core/actions/actions.component';
import { AddReporteeComponent } from './components/core/add-reportee/add-reportee.component';
import { FormsModule } from '@angular/forms';

ClarityIcons.addIcons(
  tableIcon, usersIcon, trashIcon,
  twoWayArrowsIcon, pencilIcon, addTextIcon,
  ellipsisVerticalIcon
);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GraphViewComponent,
    GridViewComponent,
    ActionsComponent,
    AddReporteeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ClarityModule,
    AppRoutingModule,
    StoreModule.forRoot({ employees: getEmplpoyeesReducer }, {}),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
