import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HolaMundoComponent } from './components/hola-mundo.components';
import { PostsComponent } from './components/posts/posts.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListDataService } from './services/list-data.service';
import { DemoMaterialModule } from './modules/material/material-module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';
import { Pagination } from './modules/material/pagination';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@NgModule({
  declarations: [	
    AppComponent, 
    HolaMundoComponent, 
    PostsComponent,
    FilterPipe,
    Pagination
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  providers: [ListDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));