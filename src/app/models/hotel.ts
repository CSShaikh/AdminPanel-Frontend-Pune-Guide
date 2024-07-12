export class Hotel{
    id:number;
    hotelName:string;
    starRating:number;
    mobileNo:number;

    constructor(id:number=0,hotelName:string='',starRating:number=0,mobileNo:number=0){
        this.id=id;
        this.hotelName=hotelName;
        this.starRating=starRating;
        this.mobileNo=mobileNo;
    }
}