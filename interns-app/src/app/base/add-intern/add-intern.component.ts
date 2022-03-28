import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Intern } from 'src/app/intern';
import { InternService } from '../services/intern.service';

@Component({
  selector: 'app-add-intern',
  templateUrl: './add-intern.component.html',
  styleUrls: ['./add-intern.component.scss']
})
export class AddInternComponent implements OnInit {
  
  addMode:boolean;
  id:string;
  name:string;
  age:string;
  dateOfBirth:string;

  constructor(private internService: InternService,private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.params['id'];
    this.addMode = !this.id;
    let toEditIntern: Intern;

    if(!this.addMode)
    {this._activatedRoute.params.subscribe(parameter => 
      {
        this.internService.getIntern(parameter['id']).subscribe((intern:Intern)=>{
        toEditIntern=intern;
        toEditIntern.id= parameter['id'];
        this.name=toEditIntern.name;
        this.age=toEditIntern.age;
        this.dateOfBirth=toEditIntern.dateOfBirth;})
      }
     
    );}
    
  }

  EditIntern(internId)
  {
      let intern: Intern = { 
      name: this.name,
      age: this.age,
      dateOfBirth: this.dateOfBirth
    }
    this.internService.editIntern(internId,intern).subscribe();
    console.log(intern);
  }

  AddIntern()
  {
    const intern: Intern = {
      name: this.name,
 	    age: this.age,
      dateOfBirth: this.dateOfBirth
  };
  this.internService.addIntern(intern).subscribe();
  
}

}
