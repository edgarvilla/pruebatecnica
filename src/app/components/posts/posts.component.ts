import { Component, OnInit } from '@angular/core';
import { ListDataService } from 'src/app/services/list-data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers:  [ ListDataService ]
})
export class PostsComponent implements OnInit {

  filterpost = '';

 posts : {
  id: number;
  titulo: string;
  description: string;
  autor: string;
  email: string;
  palabras_clave: string;
  created_at: string;
  updated_at: string;
  }[] =[];
  
  constructor(private service:ListDataService) { 
    this.posts = service.getListData();

  }

  ngOnInit() {

  }

}
