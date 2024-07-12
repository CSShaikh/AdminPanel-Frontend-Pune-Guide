import { Component } from '@angular/core';
import { Cab } from '../../../models/cab';
import { CabService } from '../../../service/cab.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-searchcab',
  templateUrl: './searchcab.component.html',
  styleUrl: './searchcab.component.css'
})
export class SearchcabComponent {

  constructor(private service:CabService, private route:ActivatedRoute, private router:Router){}

  cab:Cab = new Cab();
  id:number=0;
  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.service.searchCab(this.id).subscribe((data)=>{
      this.cab=data;
    })
  }

  back() {
    this.router.navigate(['/get'])
    }
}
