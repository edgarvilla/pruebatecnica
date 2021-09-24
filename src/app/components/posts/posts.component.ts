import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormularioPrueba } from 'src/app/models/formulario-prueba';
import { ListDataService } from 'src/app/services/list-data.service';

import {  takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers:  [ ListDataService ]
})
export class PostsComponent implements OnInit, OnDestroy {

  filterpost = '';
  posts: FormularioPrueba[] =[];

  destroy$: Subject<boolean> = new Subject<boolean>();


  constructor(private service:ListDataService) { }

  ngOnInit() {

    this.service.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((data: any[])=>{
      //console.log(data);
      this.posts = data;
    })  

  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
