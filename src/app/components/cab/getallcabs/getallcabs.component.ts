import { Component } from '@angular/core';
import { CabService } from '../../../service/cab.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Cab } from '../../../models/cab';

@Component({
  selector: 'app-getallcabs',
  templateUrl: './getallcabs.component.html',
  styleUrl: './getallcabs.component.css'
})
export class GetallcabsComponent {

  constructor(private service:CabService, private router:Router){}

  public cabs:Observable<Cab []>=of([]);

  ngOnInit(){
    console.log("Inside getAll Method");
    this.getAllCab();
  }

  getAllCab()
  {
    console.log("Inside getAll Method");
    this.cabs = this.service.getAllCab();
  }

  deleteCab(id:number)
    {
      console.log("Inside delete method")
        this.service.deleteCab(id).subscribe((data)=>{
          console.log(data);
          this.getAllCab();
        });
    }


  findCab(id:number)
    {
        this.router.navigate(['search',id]);
    }


    updateCab(id:number)
    {
      this.router.navigate(['update',id]);
    }

    back() {
      this.router.navigate(['/dashboard'])
      }
}
