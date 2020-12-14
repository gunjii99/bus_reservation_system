export class AddBus{
    BusNo:string;
           NoOfSeats:number;
           Source_:string;
           Destination:string;
           ViaStop:string;
           StartTime:string;
           EndTime:string;
           PerSeatCost:number;
           BusType:boolean;
           BusName:string;
}

export class UpdateBus{
    NoOfSeats:number;
           Source_:string;
           Destination:string;
           ViaStop:string;
           StartTime:string;
           EndTime:string;
           PerSeatCost:number;
           BusType:boolean;
           BusName:string;
}