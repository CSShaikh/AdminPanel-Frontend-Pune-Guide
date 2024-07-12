import { Component } from '@angular/core';
import { PlaceService } from '../../../service/place.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Place } from '../../../models/place';

@Component({
  selector: 'app-getallplaces',
  templateUrl: './getallplaces.component.html',
  styleUrl: './getallplaces.component.css'
})
export class GetallplacesComponent {

  constructor(private service:PlaceService, private router:Router){}

  public places:Observable<Place []>=of([]);

  ngOnInit(){
    console.log("Inside getAll Method");
    this.getAllPlace();
  }

  getAllPlace()
  {
    console.log("Inside getAll Method");
    this.places = this.service.getAllPlace();
  }

  deletePlace(id:number)
    {
      console.log("Inside delete method")
        this.service.deletePlace(id).subscribe((data)=>{
          console.log(data);
          this.getAllPlace();
        });
    }


  findPlace(id:number)
    {
        this.router.navigate(['search',id]);
    }


    updatePlace(id:number)
    {
      this.router.navigate(['update',id]);
    }

    back() {
      this.router.navigate(['/dashboard'])
      }
}
