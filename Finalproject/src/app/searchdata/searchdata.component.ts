import { Component, EventEmitter, Input, OnInit } from '@angular/core';  
import { Router } from '@angular/router';
import { SearchdataService } from '../searchdata.service';  
@Component({  
  selector: 'app-searchdata',  
  templateUrl: './searchdata.component.html',  
  styleUrls: ['./searchdata.component.css']  
})  
export class SearchdataComponent implements OnInit {  
  isShowDiv = true;
  constructor(private searchdataService:SearchdataService,private router:Router) { }  
  model : any={};    
  emp:any;  
  source1:any;
  destination1:any;
  username:any;

  ngOnInit(): void {  
    this.username = sessionStorage.getItem('username');
    const Source_=sessionStorage.getItem('Source');
    const Destination=sessionStorage.getItem('Destination');
    this.source1=sessionStorage.getItem('Source');
    this.destination1=sessionStorage.getItem('Destination');
    this.searchdata(Source_,Destination);
     
  }  
  showdata()  
  {  
    this.searchdataService.showdata().subscribe((res: any) => {  
      this.emp=res;   
      console.log(this.emp);   
  })  
  }  
  searchdata(Source_,Destination) {   
    this.searchdataService.searhhdata(Source_,Destination).subscribe((res: any) => {  
            
        this.emp=res;
        console.log(this.emp);     
    })  
  }


  bookseat(BusNo,BusName,Source_,Destination,NoOfSeats,StartTime,EndTime,ViaStop,PerSeatCost)
  {
   // this.router.navigate(['/seatselect']);
    console.log(BusNo,BusName,Source_,Destination,NoOfSeats,StartTime,EndTime,ViaStop,PerSeatCost);
    sessionStorage.setItem('BusNo',BusNo);
    sessionStorage.setItem('BusName',BusName);
    sessionStorage.setItem('Source_',Source_);
    sessionStorage.setItem('Destination',Destination);
    sessionStorage.setItem('NoOfSeats',NoOfSeats);
    sessionStorage.setItem('StartTime',StartTime);
    sessionStorage.setItem('EndTime',EndTime);
    sessionStorage.setItem('ViaStop',ViaStop);
    sessionStorage.setItem('PerSeatCost',PerSeatCost);
    this.router.navigate(['/seatselect']);
  }
}