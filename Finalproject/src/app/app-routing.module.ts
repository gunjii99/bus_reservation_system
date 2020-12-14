import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddBusComponent } from './add-bus/add-bus.component';

import { AddressupdatemodalComponent } from './addressupdatemodal/addressupdatemodal.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { BookingsComponent } from './bookings/bookings.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ContactupdatemodalComponent } from './contactupdatemodal/contactupdatemodal.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EmailupdatemodalComponent } from './emailupdatemodal/emailupdatemodal.component';
import { FeedbacknewComponent } from './feedbacknew/feedbacknew.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PaymentComponent } from './payment/payment.component';
import { RefundComponent } from './refund/refund.component';
import { RegisterComponent } from './register/register.component';
import { ResetComponent } from './reset/reset.component';
import { ResetconfirmpgComponent } from './resetconfirmpg/resetconfirmpg.component';
import { SearchComponent } from './search/search.component';

import { SearchdataComponent } from './searchdata/searchdata.component';
import { SeatsselectComponent } from './seatsselect/seatsselect.component';
import { TicketComponent } from './ticket/ticket.component';
import { TravelFrequentComponent } from './travel-frequent/travel-frequent.component';
import { UnauthpaymentComponent } from './unauthpayment/unauthpayment.component';
import { UnauthticketComponent } from './unauthticket/unauthticket.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ViewBusComponent } from './view-bus/view-bus.component';
import { ViewMonthComponent } from './view-month/view-month.component';
import { WalletComponent } from './wallet/wallet.component';
import { WalletupdatemodalComponent } from './walletupdatemodal/walletupdatemodal.component';

const routes: Routes = [
  
 
  {path:'searchdata',component:SearchdataComponent},
  {path:'home',component:HomeComponent},
  {path:'unauthpayment',component:UnauthpaymentComponent},
  {path:'unauthticket',component:UnauthticketComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'feedback',component:FeedbacknewComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'search',component:SearchComponent},
  {path:'ticket',component:TicketComponent},
  {path:'',redirectTo: '/search',pathMatch:'full'},
  {path:'login',component:LoginComponent},
    {path:'userdashboard',component:UserdashboardComponent,children:[{
      path:'',
      redirectTo: 'userprofile',
      pathMatch: 'full' 
    },
    {path:'userprofile', component: UserprofileComponent},
    {path:'bookings', component: BookingsComponent},
    {path:'changepassword', component: ChangepasswordComponent},
    {path:'wallet', component: WalletComponent},
    {path:'walletupdatemodal', component:WalletupdatemodalComponent},
    {path:'emailupdatemodal', component:EmailupdatemodalComponent},
    {path:'contactupdatemodal', component:ContactupdatemodalComponent},
    {path:'addressupdatemodal', component:AddressupdatemodalComponent},
    {path:'refund', component:RefundComponent}]},
  {path:'register',component:RegisterComponent},
  {path:'adminhome',component:AdminHomeComponent,children:[{
    path:'',
    redirectTo:'viewbus',
    pathMatch:'full'
  },
  {path:'addbus',component:AddBusComponent},
  {path:'viewbus',component:ViewBusComponent},
  {path:'viewmonth',component:ViewMonthComponent},
  {path:'travelfrequent',component:TravelFrequentComponent},
  ]},
  {path:'feedback',component:FeedbacknewComponent},
  {path:'resetpassword',component:ResetComponent},
  {path:'seatselect',component:SeatsselectComponent},
  
  {path:'reset',component:ResetComponent},
  {path:'payment',component:PaymentComponent},
  {path:'userdashboard',component:UserdashboardComponent},
  {path:'**',component:NotfoundComponent},

  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
