import { Component } from '@angular/core';
import { HotelService } from '../../../service/hotel.service';
import { Hotel } from '../../../models/hotel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createhotel',
  templateUrl: './createhotel.component.html',
  styleUrl: './createhotel.component.css'
})
export class CreatehotelComponent {

  constructor(private service:HotelService, private router:Router) { }

  h=new Hotel();

  onSubmit(){
    console.log("Save");
    this.save();
  }

  save(){
    console.log("inside the save method");
    this.service.createHotel(this.h).subscribe();
    alert("Hotel Created!")

  }

  back() {
    this.router.navigate(['/dashboard'])
    }
}
