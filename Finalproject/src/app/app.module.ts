import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; 

import { FormsModule } from '@angular/forms';
import{CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SearchdataComponent } from './searchdata/searchdata.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SeatsselectComponent } from './seatsselect/seatsselect.component';
import { ResetComponent } from './reset/reset.component';
import { ResetconfirmpgComponent } from './resetconfirmpg/resetconfirmpg.component';

import { PaymentComponent } from './payment/payment.component';
import { SearchComponent } from './search/search.component';
import { TicketComponent } from './ticket/ticket.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UnauthpaymentComponent } from './unauthpayment/unauthpayment.component';
import { UnauthticketComponent } from './unauthticket/unauthticket.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { BookingsComponent } from './bookings/bookings.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { EmailupdatemodalComponent } from './emailupdatemodal/emailupdatemodal.component';
import { AddressupdatemodalComponent } from './addressupdatemodal/addressupdatemodal.component';
import { ContactupdatemodalComponent } from './contactupdatemodal/contactupdatemodal.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { WalletComponent } from './wallet/wallet.component';
import { WalletupdatemodalComponent } from './walletupdatemodal/walletupdatemodal.component';
import {DatePipe} from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { FeedbacknewComponent } from './feedbacknew/feedbacknew.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { ViewBusComponent } from './view-bus/view-bus.component';
import { ViewMonthComponent } from './view-month/view-month.component';
import { TravelFrequentComponent } from './travel-frequent/travel-frequent.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RefundComponent } from './refund/refund.component';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    
    SearchdataComponent,
    LoginComponent,
    RegisterComponent,
    SeatsselectComponent,
    ResetComponent,
    ResetconfirmpgComponent,
    PaymentComponent,
    SearchComponent,
    TicketComponent,
    NotfoundComponent,
    UnauthpaymentComponent,
    UnauthticketComponent,
    UserdashboardComponent,
    BookingsComponent,
    UserprofileComponent,
    EmailupdatemodalComponent,
    AddressupdatemodalComponent,
    ContactupdatemodalComponent,
    ChangepasswordComponent,
    WalletComponent,
    WalletupdatemodalComponent,
    AdminHomeComponent,
    FeedbacknewComponent,
    AddBusComponent,
    ViewBusComponent,
    ViewMonthComponent,
    TravelFrequentComponent,
    AboutusComponent,
    RefundComponent,
    HomeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    CommonModule
  

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
