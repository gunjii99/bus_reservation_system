import { SearchdataService } from '../searchdata.service'; 

import { Component, OnInit } from '@angular/core'; 
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { LoginService } from '../login.service';
import { HttpClient } from '@angular/common/http'; 
import { Router } from '@angular/router';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-unauthticket',
  templateUrl: './unauthticket.component.html',
  styleUrls: ['./unauthticket.component.css']
})
export class UnauthticketComponent implements OnInit {
  currentDate:any;
  BusNo:string;
  BusName:string;
  Source_:string;
  Destination:string;
  NoOfSeats:string;
  StartTime:string;
  EndTime:string;
  ViaStop:string;
  PerSeatCost:string;
  seats:string;
  username:string;
  total:string;
  userdetails:any;
  fullname:string;
  emp:string;
  TicketType:string;
  fname:string;
  lname:string;
  EmailId:string;
  StartDate:string;
  constructor(private service1:SearchdataService,private loginservice:LoginService,private http:HttpClient,private router:Router) { }

  



  ngOnInit(): void {


    //this.displayuser();
    
    this.currentDate=new Date();
    this.BusNo = sessionStorage.getItem('BusNo');
    this.BusName=sessionStorage.getItem('BusName');
    this.Source_=sessionStorage.getItem('Source_');
    this.Destination=sessionStorage.getItem('Destination');
    this.StartTime=sessionStorage.getItem('StartTime');
    this.EndTime=sessionStorage.getItem('EndTime');
    this.ViaStop=sessionStorage.getItem('ViaStop');
    this.seats=JSON.parse(sessionStorage.getItem('seats'));
    //this.username=sessionStorage.getItem('username');
    this.PerSeatCost=sessionStorage.getItem('PerSeatCost');
    this.total=JSON.parse(sessionStorage.getItem('count'));
    this.fname=sessionStorage.getItem('fname');
    this.lname=sessionStorage.getItem('lname');
    this.TicketType=sessionStorage.getItem('TicketType');
    this.EmailId=sessionStorage.getItem('EmailId');
    this.StartDate=sessionStorage.getItem('DOT');
    this.unauthsearchdata(this.Source_,this.Destination,this.StartDate,this.StartTime,this.total,this.EmailId);
  }

  unauthsearchdata(Source_B,Destination_B,StartDate,StartTime,TravelFare,EmailId) {  
    debugger;  
     this.service1.unauthsearchdata(Source_B,Destination_B,StartDate,StartTime,TravelFare,EmailId).subscribe((res: any) => {  
         this.emp=res;
         console.log(this.emp);     
     })  
   }

   
  feedback()
  {
    this.router.navigate(['/feedback']);
  }


  generatePDF(action = 'open') {
    let docDefinition = {
      content: [
        {
          text: 'BOOK BUS',
          fontSize: 16,
          alignment: 'center',
          color: '#047886'
        },
        {
          text: 'TICKET (UNAUTHORIZED USER)',
          fontSize: 20,
          bold: true,
          alignment: 'center',
          decoration: 'underline',
          color: 'skyblue'
        },
        {
          text: 'Customer Details',
          style: 'sectionHeader'
        },
        {
          columns: [
            [
              {
                text: this.fname +' ' +this.lname,
                bold:true
              },
              { text: "Departure:"+this.StartTime },
              {text: "Arrival:"+this.EndTime},
              { text: "Source:"+ this.Source_ },
              { text: "Destination:"+ this.Destination }
            ],
            [
              {
                text: `Date: ${new Date().toLocaleString()}`,
                alignment: 'right'
              },
              { 
                text: `Bill No :  ${this.emp.slice(-1)}`,
                alignment: 'right'
              }
            ]
          ]
        },
        {
          text: 'Order Details',
          style: 'sectionHeader'
        },
        {
          table: {
            headerRows: 1,
            widths: ['*', 'auto', 'auto', 'auto'],
            body: [
              ['BusName', 'Price Per Seat', 'Seats No', 'Amount'],
             ([this.BusName, this.PerSeatCost, this.seats, (this.total)]),
              [{text: 'Total Amount', colSpan: 3}, {}, {}, this.total]
            ]
          }
        },
        {
          text: 'Additional Details',
          style: 'sectionHeader'
        },
        {
            text: this.BusName,
            margin: [0, 0 ,0, 15]          
        },
        {
          columns: [
            [{ qr: `${this.username}`, fit: '50' }],
            [{ text: 'Thank you for choosing BookBus', alignment: 'right', italics: true}],
          ]
        },
        {
          text: 'Terms and Conditions',
          style: 'sectionHeader'
        },
        {
            ul: [
              'All passengers shall be advised to download Arogya Setu app on their mobile devices.',
              'Please wear your face mask at all times while travel.',
               'Use the hand sanitizers that are available.',
              'Please consider your fellow passengers and maintain social distancing.'
            ],
        }
      ],
      styles: {
        sectionHeader: {
          bold: true,
          decoration: 'underline',
          fontSize: 14,
          margin: [0, 15,0, 15]          
        }
      }
    };

    if(action==='download'){
      pdfMake.createPdf(docDefinition).download();
    }else if(action === 'print'){
      pdfMake.createPdf(docDefinition).print();      
    }else{
      pdfMake.createPdf(docDefinition).open();      
    }

  }

}
