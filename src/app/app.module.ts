import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenubarComponent } from './component/menubar/menubar.component';
import { HomeComponent } from './component/home/home.component';
import { CardComponent } from './component/card/card.component';
import { TableComponent } from './component/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { FormdesignComponent } from './component/formdesign/formdesign.component';
import { PopupComponent } from './component/popup/popup.component';
import { UserdetailComponent } from './component/userdetail/userdetail.component';
import { CollateralMaintenanceComponent } from './component/collateral-maintenance/collateral-maintenance.component';
import { RprtsComponent } from './component/rprts/rprts.component';
import { SigninComponent } from './component/signin/signin.component';
import { Page404Component } from './component/page404/page404.component';
import { Page500Component } from './component/page500/page500.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { SignupComponent } from './component/signup/signup.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { AdminDashboardComponent } from './mainLayout/admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HomeComponent,
    CardComponent,
    TableComponent,
    FormdesignComponent,
    PopupComponent,
    UserdetailComponent,
    CollateralMaintenanceComponent,
    RprtsComponent,
    SigninComponent,
    Page404Component,
    Page500Component,
    ResetPasswordComponent,
    SignupComponent,
    ForgotPasswordComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
