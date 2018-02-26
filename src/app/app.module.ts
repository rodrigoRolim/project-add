import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AuthGuardService } from './shared/auth-guard.service';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ColaboratorsModule } from './colaborators/colaborators.module';
import { HttpErrorHandlerService } from './http-error-handler.service';
import { FooterComponent } from './footer/footer.component';
import { ProjectsModule } from './projects/projects.module';
import { AppRoutingModule } from './app-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PageNotFoundComponentComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ProjectsModule,
    ColaboratorsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MessageService, AuthGuardService, HttpErrorHandlerService],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule { }
