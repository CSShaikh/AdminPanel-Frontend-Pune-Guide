import { Component } from '@angular/core';
import { HotelService } from '../../../service/hotel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from '../../../models/hotel';

@Component({
  selector: 'app-updatehotel',
  templateUrl: './updatehotel.component.html',
  styleUrl: './updatehotel.component.css'
})
export class UpdatehotelComponent {
  constructor(private service:HotelService, private route:ActivatedRoute, private router:Router ){}

  hotel = new Hotel();
  id:number=0;

  ngOnInit():void{

    this.id=this.route.snapshot.params['id'];
    this.service.searchHotel(this.id).subscribe((data)=>{
      this.hotel=data;
    });
  }
  onSubmit()
  {
    this.updateHotel();
  }

  updateHotel()
  {
    this.service.updateHotel(this.hotel).subscribe((data)=>{
      console.log(data);
      this.goToList();
    });
  }

  goToList()
  {
    this.router.navigate(['get']);
  }
  back() {
    this.router.navigate(['/getHotel'])
    }
}
