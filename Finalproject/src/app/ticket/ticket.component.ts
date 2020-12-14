import { SearchdataService } from '../searchdata.service'; 

import { Component, OnInit } from '@angular/core'; 
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { LoginService } from '../login.service';
import { HttpClient } from '@angular/common/http'; 
import { Router } from '@angular/router';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
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
  constructor(private service1:SearchdataService,private loginservice:LoginService,private http:HttpClient,private router:Router) { }

  displayuser()
  {
    this.userdetails = this.service1.getuser(this.username).subscribe((data) =>
    {this.userdetails = data; 
      console.log(data)})
    console.log(this.userdetails);
  }



  ngOnInit(): void {


    this.displayuser();
    
    this.currentDate=new Date();
    this.BusNo = sessionStorage.getItem('BusNo');
    this.BusName=sessionStorage.getItem('BusName');
    this.Source_=sessionStorage.getItem('Source_');
    this.Destination=sessionStorage.getItem('Destination');
    this.StartTime=sessionStorage.getItem('StartTime');
    this.EndTime=sessionStorage.getItem('EndTime');
    this.ViaStop=sessionStorage.getItem('ViaStop');
    this.seats=JSON.parse(sessionStorage.getItem('seats'));
    this.username=sessionStorage.getItem('username');
    this.PerSeatCost=sessionStorage.getItem('PerSeatCost');
    this.total=JSON.parse(sessionStorage.getItem('count'));
    this.fullname=sessionStorage.getItem('fullname');
    this.TicketType=sessionStorage.getItem('TicketType');
    this.searchdata(this.username);
  }


  feedback()
  {
    this.router.navigate(['/feedback']);
  }


  searchdata(username) {  
    debugger;  
     this.service1.searchdata(username).subscribe((res: any) => {  
         this.emp=res;
         console.log(this.emp);     
     })  
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
          text: 'TICKET (AUTHORIZED USER)',
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
                text: this.fullname,
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
                text: `Bill No : ${this.emp.slice(-1)}`,
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
