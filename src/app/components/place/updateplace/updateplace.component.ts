import { Component } from '@angular/core';
import { Place } from '../../../models/place';
import { PlaceService } from '../../../service/place.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateplace',
  templateUrl: './updateplace.component.html',
  styleUrl: './updateplace.component.css'
})
export class UpdateplaceComponent {
  // constructor(private service:PlaceService, private route:ActivatedRoute, private router:Router ){}

  // place = new Place();
  // id:number=0;

  // ngOnInit():void{

  //   this.id=this.route.snapshot.params['id'];
  //   this.service.searchPlace(this.id).subscribe((data)=>{
  //     this.place=data;
  //   });
  // }
  // onSubmit()
  // {
  //   this.updatePlace();
  // }

  // updatePlace()
  // {
  //   this.service.updatePlace(this.place).subscribe((data)=>{
  //     console.log(data);
  //     this.goToList();
  //   });
  // }

  // goToList()
  // {
  //   this.router.navigate(['get']);
  // }
}
