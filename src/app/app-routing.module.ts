import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NtsplComponent } from './ntspl/ntspl.component';

const routes: Routes = [
  { path: '', redirectTo: '/ntspl', pathMatch: 'full' },
  { path: 'ntspl', component: NtsplComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
