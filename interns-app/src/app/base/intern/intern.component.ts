import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Intern } from 'src/app/intern';
import { InternService } from '../services/intern.service';

@Component({
  selector: 'app-intern',
  templateUrl: './intern.component.html',
  styleUrls: ['./intern.component.scss']
})
export class InternComponent implements OnInit,OnChanges {

  interns : Intern[];
  id:string;
  editMode:boolean=false;
  name:string;
  age:string;
  dateOfBirth:string;

  constructor(private internService:InternService) { }

  ngOnInit(): void {
    this.internService.getInterns().subscribe((interns:Intern[])=> {this.interns=interns;});
  }

  ngOnChanges(){
    if(this.interns)
    {
      this.internService.getInterns().subscribe((interns: Intern[])=>{this.interns=interns;});
    }
  }

  DeleteIntern(internId:string)
  {
    this.internService.deleteIntern(internId).subscribe(()=>
    {this.internService.getInterns().subscribe((interns: Intern[])=>{this.interns=interns;});}
    );
    console.log("Intern has been deleted!");
  }

}
