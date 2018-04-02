import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { entryComponents } from './app.factory'
import { RouterModule } from '@angular/router'
import { appRoutes } from './app.routes'

@NgModule({
  declarations: [...Object.values(entryComponents)],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [...Object.values(entryComponents)]
})
export class AppModule { }
