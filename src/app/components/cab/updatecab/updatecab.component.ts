import { Component } from '@angular/core';
import { CabService } from '../../../service/cab.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cab } from '../../../models/cab';

@Component({
  selector: 'app-updatecab',
  templateUrl: './updatecab.component.html',
  styleUrl: './updatecab.component.css'
})
export class UpdatecabComponent {
  constructor(private service:CabService, private route:ActivatedRoute, private router:Router ){}

  cab = new Cab();
  id:number=0;

  ngOnInit():void{

    this.id=this.route.snapshot.params['id'];
    this.service.searchCab(this.id).subscribe((data)=>{
      this.cab=data;
    });
  }
  onSubmit()
  {
    this.updateCab();
  }

  updateCab()
  {
    this.service.updateCab(this.cab).subscribe((data)=>{
      console.log(data);
      this.goToList();
    });
  }

  goToList()
  {
    this.router.navigate(['get']);
  }
  back() {
    this.router.navigate(['/get'])
    }
}
