export class Place {  

    id: number=0;
    name: string="";
    description: string="";
    price: number=0;
    location: string="";
    openDays: string="";
    openTime: string="";
    image: Uint8Array // For image upload
  
    // constructor( name: string, description: string, price: number, location: string, openDays: string, openTime: string, image: File) {
    //   this.name = name;
    //   this.description = description;
    //   this.price = price;
    //   this.location = location;
    //   this.openDays = openDays;
    //   this.openTime = openTime;
    //   this.image = image;
    // }

    constructor(image:File){
      this.image = new Uint8Array();
    }
  }
  