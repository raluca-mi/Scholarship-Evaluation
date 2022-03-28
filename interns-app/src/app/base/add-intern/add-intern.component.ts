import { Component, OnInit } from '@angular/core';
import { Intern } from 'src/app/intern';
import { InternService } from '../services/intern.service';

@Component({
  selector: 'app-add-intern',
  templateUrl: './add-intern.component.html',
  styleUrls: ['./add-intern.component.scss']
})
export class AddInternComponent implements OnInit {

  name:string;
  age:string;
  dateOfBirth:string;

  constructor(private internService: InternService) { }

  ngOnInit(): void {
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
