import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-carsdata',
  templateUrl: './carsdata.component.html',
  styleUrls: ['./carsdata.component.css']
})
export class CarsdataComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
   fetchData=()=>{
    this.myapi.viewcarsdata().subscribe(
      (data)=>{
        this.carsData=data
      }
    )
   }

  carsData:any={}
  ngOnInit(): void {
  }

}
