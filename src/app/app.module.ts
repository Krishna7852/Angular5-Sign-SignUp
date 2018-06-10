import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { AuthComponent } from './auth/auth.component';
import { AuthModule } from './auth/auth.module';
import { AUTH_ROUTES } from './auth/auth.routes';
import { DashboardModule } from './dashboard/dashboard.module';
import { RegisterService } from './services/register.service';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule,
    RouterModule.forRoot(APP_ROUTES,{
      preloadingStrategy: PreloadAllModules
    }),
    FormsModule,
    DashboardModule,
    AppRoutingModule
  ],
  exports: [RouterModule],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
