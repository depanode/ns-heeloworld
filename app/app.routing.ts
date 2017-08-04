import { AppAboutComponent } from './app-about.component';
import { AppDashboardComponent } from './app-dashboard.component';
import { AppComponent } from "./app.component";

export const routes = [
    { path: "", component: AppComponent, children: [
            { path: "", component: AppDashboardComponent },
            { path: "about", component: AppAboutComponent }
        ]
    }

];