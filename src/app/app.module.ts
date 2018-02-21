import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ProjectsModule } from './projects/projects.module';
import { ColaboratorsModule } from './colaborators/colaborators.module';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PageNotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ProjectsModule,
    ColaboratorsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule { }
