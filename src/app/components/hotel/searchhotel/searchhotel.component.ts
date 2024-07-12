import { Component } from '@angular/core';
import { HotelService } from '../../../service/hotel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from '../../../models/hotel';

@Component({
  selector: 'app-searchhotel',
  templateUrl: './searchhotel.component.html',
  styleUrl: './searchhotel.component.css'
})
export class SearchhotelComponent {

  constructor(private service:HotelService, private route:ActivatedRoute,private router:Router){}

  hotel:Hotel = new Hotel();
  id:number=0;
  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.service.searchHotel(this.id).subscribe((data)=>{
      this.hotel=data;
    })
  }

  back() {
    this.router.navigate(['/getHotel'])
    }
}
