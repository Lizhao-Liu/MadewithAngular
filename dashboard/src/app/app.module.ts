import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ChartsModule} from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { HeadPageComponent } from './head-page/head-page.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    HeadPageComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    PieChartComponent
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
