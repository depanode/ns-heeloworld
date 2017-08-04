import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { NativeScriptUISideDrawerModule } from 'nativescript-telerik-ui/sidedrawer/angular';

import { AppComponent } from "./app.component";
import { AppAboutComponent } from './app-about.component';
import { AppDashboardComponent } from './app-dashboard.component';
import { routes } from './app.routing'

@NgModule({
  declarations: [
      AppComponent,
      AppAboutComponent,
      AppDashboardComponent
  ],
  bootstrap: [AppComponent],
  imports: [
      NativeScriptModule,
      NativeScriptUISideDrawerModule,
      NativeScriptRouterModule,
      NativeScriptRouterModule.forRoot(routes)
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
