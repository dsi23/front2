import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ServiceService } from '../services/service.service';
@Component({
  selector: 'app-chauffeur',
  templateUrl: './chauffeur.component.html',
  styleUrls: ['./chauffeur.component.css']
})
export class ChauffeurComponent implements OnInit {
  chauffeurs:any;
  constructor( private serv:ServiceService) { }

  ngOnInit(): void {
    this.getChauf();
  }
getChauf(){
  this.serv.getChauffeurs().subscribe(
    res=>{
      console.log(res);
      this.chauffeurs=res;
      
    }
  )
}
  SuprimerChauffeur(id:any){
    console.log(id);
    this.serv.deleteChauffeurs(id).subscribe(
      
      res=>{
        console.log(res);
        this.getChauf();
        
      }
    )

  }

}
