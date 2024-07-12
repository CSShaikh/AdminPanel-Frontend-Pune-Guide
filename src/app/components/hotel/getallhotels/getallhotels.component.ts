import { Component } from '@angular/core';
import { HotelService } from '../../../service/hotel.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Hotel } from '../../../models/hotel';

@Component({
  selector: 'app-getallhotels',
  templateUrl: './getallhotels.component.html',
  styleUrl: './getallhotels.component.css'
})
export class GetallhotelsComponent {

  constructor(private service:HotelService, private router:Router){}

  public hotels:Observable<Hotel []>=of([]);

  ngOnInit(){
    console.log("Inside getAll Method");
    this.getAllHotel();
  }

  getAllHotel()
  {
    console.log("Inside getAll Method");
    this.hotels = this.service.getAllHotel();
  }

  deleteHotel(id:number)
    {
      console.log("Inside delete method")
        this.service.deleteHotel(id).subscribe((data)=>{
          console.log(data);
          this.getAllHotel();
        });
    }


  findHotel(id:number)
    {
        this.router.navigate(['searchHotel',id]);
    }


    updateHotel(id:number)
    {
      this.router.navigate(['updateHotel',id]);
    }

    back() {
      this.router.navigate(['/dashboard'])
      }
}
