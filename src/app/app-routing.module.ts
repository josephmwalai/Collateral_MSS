import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CardComponent } from './component/card/card.component';
import { TableComponent } from './component/table/table.component';
import { FormdesignComponent } from './component/formdesign/formdesign.component';
import { CollateralMaintenanceComponent } from './component/collateral-maintenance/collateral-maintenance.component';
import { RprtsComponent } from './component/rprts/rprts.component';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { Page404Component } from './component/page404/page404.component';
import { Page500Component } from './component/page500/page500.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';


const routes: Routes = [
 
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: '', component: HomeComponent },
  { path: 'card', component: CardComponent },
  { path: 'table', component: TableComponent },
  { path: 'form', component: FormdesignComponent },
  { path: 'collateral-maintenance', component: CollateralMaintenanceComponent },
  { path: 'rprts', component: RprtsComponent },
  { path: 'page404', component: Page404Component },
  { path: 'page500', component: Page500Component },
  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
