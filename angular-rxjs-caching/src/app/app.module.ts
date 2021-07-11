import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DetailsViewComponent } from './details-view/details-view.component';
import { ImagesViewComponent } from './images-view/images-view.component';

@NgModule({
  declarations: [AppComponent, DetailsViewComponent, ImagesViewComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
