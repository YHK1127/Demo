import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import {MatCardModule} from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { AppService } from '../app-service';

@Component({
  selector: 'app-promotion-code',
  standalone:true,
  imports: [Navbar,MatCardModule,MatButton,MatPaginatorModule,MatTableModule],
  templateUrl: './promotion-code.html',
  styleUrl: './promotion-code.scss',
})
export class PromotionCode implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator)paginator!: MatPaginator;
  columns=['ID','Created By','Status','Created Date','Code Classification','Discount Code','Description','Discount Amount','Actions']
  constructor(private appService:AppService){}
   records = new MatTableDataSource<any>();
  ngOnInit() {
    // load data
    this.records.data = this.appService.data;
  }

  ngAfterViewInit() {
    // attach paginator AFTER view is created
    this.records.paginator = this.paginator;
  }
onEdit(e:any){
  
}
onDelete(e:any){
  this.records.data=this.records.data.filter(ele=>{
    return ele.ID!=e.ID;
  })
}
}
