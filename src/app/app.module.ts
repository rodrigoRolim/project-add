import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ProjectsModule } from './projects/projects.module';
import { ColaboratorsModule } from './colaborators/colaborators.module';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AuthGuardService } from './shared/auth-guard.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorHandlerService } from './http-error-handler.service';

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
