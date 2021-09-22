import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HolaMundoComponent } from './components/hola-mundo.components';
import { PostsComponent } from './components/posts/posts.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { ListDataService } from './services/list-data.service';


@NgModule({
  declarations: [	
    AppComponent, 
    HolaMundoComponent, 
    PostsComponent,
    FilterPipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ListDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
