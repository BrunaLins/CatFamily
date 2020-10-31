import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from'@angular/forms';
import {CatService} from 'src/app/services/cat.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-catform',
  templateUrl: './catform.component.html',
  styleUrls: ['./catform.component.css']
})
export class CatformComponent implements OnInit {
  catForm:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private catService: CatService,
    private router: Router
  ) { 
    this.catForm = this.formBuilder.group({
      nom:[''],
      age:[''],
      race:[''],
      vivant:['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.catService.save(this.catForm.value).subscribe(()=>{
      this.router.navigate(['/cat-list'])
    });
  }
}





  

