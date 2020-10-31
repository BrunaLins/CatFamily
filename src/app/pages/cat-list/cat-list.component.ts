import { Component, OnInit } from '@angular/core';
import {CatService} from 'src/app/services/cat.service';
import {Cat} from 'src/app/models/Cat';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {
  gridTemplate: boolean = false;
  cats: Cat[] =[]; 
  displayedColumns : string[] = ['nom','age','race','vivant'];
  
  
  constructor(private catService:CatService) { 
    this.catService.getAll().subscribe(data=>{
      this.cats = data;
      console.log(this.cats);
    });
  }
  supprimer(id:number){
    this.catService.delete(id).then(()=>{
      this.cats =this.cats.filter(cat=>cat[id]=id);
    })
  }
  changeTemplate() {
    this.gridTemplate = !this.gridTemplate
  }
  ngOnInit(): void {
  }

}
