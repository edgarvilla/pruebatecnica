import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListDataService } from './services/list-data.service';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';


import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { HeadPageComponent } from './components/head-page/head-page.component';
import { FooterPageComponent } from './components/footer-page/footer-page.component';
import { NavigationPageComponent } from './components/navigation-page/navigation-page.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [	
    AppComponent, 
    HeadPageComponent, 
    FooterPageComponent,
    NavigationPageComponent,
    PostsComponent,
    FilterPipe
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [ListDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));