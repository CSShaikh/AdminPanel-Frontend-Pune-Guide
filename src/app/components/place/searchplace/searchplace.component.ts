import { Component } from '@angular/core';
import { PlaceService } from '../../../service/place.service';
import { ActivatedRoute } from '@angular/router';
import { Place } from '../../../models/place';

@Component({
  selector: 'app-searchplace',
  templateUrl: './searchplace.component.html',
  styleUrl: './searchplace.component.css'
})
export class SearchplaceComponent {

  // constructor(private service:PlaceService, private route:ActivatedRoute){}

  // place = new Place();
  
  // id:number=0;
  // ngOnInit() {
  //   this.id=this.route.snapshot.params['id'];
  //   this.service.searchPlace(this.id).subscribe((data)=>{
  //     this.place=data;
  //   })
  // }

}
