import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-edit-chauffeur',
  templateUrl: './edit-chauffeur.component.html',
  styleUrls: ['./edit-chauffeur.component.css']
})
export class EditChauffeurComponent implements OnInit {
 data:any;
 alert:boolean=false;
 message?:any;
 status:any;
 files:any;
  constructor( private serv:ServiceService) { }

  ngOnInit(): void {
  }
  myForm:any=new FormGroup({
    name: new FormControl('', [Validators.required]),
    adress: new FormControl('', [Validators.required]),
    tel: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
  });
  get f(){
    return this.myForm.controls;
      }
  ajouterChauffeur(){
    console.log("aa");
    console.log(this.myForm);
    const formData=new FormData();
    formData.append('name', this.myForm.get('name')?.value);
    formData.append('adress', this.myForm.get('adress')?.value);
    formData.append('tel', this.myForm.get('tel')?.value);
    formData.append('email', this.myForm.get('email')?.value);
    formData.append('password', this.myForm.get('password')?.value);
    formData.append('image', this.files,this.files.name);
    this.serv.add(formData).subscribe(res=>{
      this.data=res;
      console.log(res);
      this.message=this.data.message;
      this.status=this.data.status;
      console.log(this.message);
    });

    this.alert=true;
      this.myForm.reset({})
  }
  closeAlert(){
    this.alert=false;
  }
  
  onFileChange(event:any){
    this.files=event.target.files[0];
    console.log(this.files);
  }
}
