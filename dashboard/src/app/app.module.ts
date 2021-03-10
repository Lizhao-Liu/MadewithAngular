import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ChartsModule} from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { HeadPageComponent } from './head-page/head-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    HeadPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
