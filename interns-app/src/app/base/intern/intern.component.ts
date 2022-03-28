import { Component, OnInit } from '@angular/core';
import { Intern } from 'src/app/intern';
import { InternService } from '../services/intern.service';

@Component({
  selector: 'app-intern',
  templateUrl: './intern.component.html',
  styleUrls: ['./intern.component.scss']
})
export class InternComponent implements OnInit {

  interns : Intern[];

  constructor(private internService:InternService) { }

  ngOnInit(): void {
    this.internService.getInterns().subscribe((interns:Intern[])=> {this.interns=interns;});
  }

}
