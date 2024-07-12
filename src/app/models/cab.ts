export class Cab{
    id:number;
    carName:string;
    cabType:string;
    cabNo:string;
    placeId:number;

    constructor(id:number=0,carName:string="",cabType:string="",cabNo:string="",placeId:number=0){
        this.id=id;
        this.carName=carName;
        this.cabType=cabType;
        this.cabNo=cabNo;
        this.placeId=placeId;
    }
}