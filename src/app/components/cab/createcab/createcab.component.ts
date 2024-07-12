import { Component } from '@angular/core';
import { Cab } from '../../../models/cab';
import { CabService } from '../../../service/cab.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-createcab',
  templateUrl: './createcab.component.html',
  styleUrl: './createcab.component.css'
})
export class CreatecabComponent {

  constructor(private service:CabService,private router:Router) { }

  c=new Cab();

  onSubmit(){
    console.log("Save");
    this.save();
  }

  save(){
    console.log("inside the save method");
    this.service.add(this.c).subscribe();
    alert("Cab Created!")

  }

  back() {
    this.router.navigate(['/dashboard'])
    }
  
}
