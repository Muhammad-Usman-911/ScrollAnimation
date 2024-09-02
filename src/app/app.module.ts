import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollAnimationDirective } from './scroll-animation.directive';
import { BigPageComponent } from './big-page/big-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollAnimationDirective,
    BigPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
