import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphViewComponent } from './components/org-graph/graph-view/graph-view.component';
import { GridViewComponent } from './components/org-grid/grid-view/grid-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'graph-view', pathMatch: 'full' },
  { path: 'graph-view', component: GraphViewComponent },
  { path: 'grid-view', component: GridViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
