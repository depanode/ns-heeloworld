import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";

import { SideDrawerLocation, RadSideDrawer } from "nativescript-telerik-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-telerik-ui/sidedrawer/angular";

@Component({
    moduleId: module.id,
    selector: "my-app",
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, AfterViewInit {

    private currentLocation : SideDrawerLocation;
    private drawer: RadSideDrawer;

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;

    constructor(
        private router: Router
    ) {
    }

    ngOnInit() {
        this.currentLocation = SideDrawerLocation.Left;

        this.router.events.subscribe((e) => {
            if (e instanceof NavigationEnd) {
                this.drawer.closeDrawer();
            }
        });
    }

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
    }

    public openDrawer() {
        this.drawer.getIsOpen() ? this.drawer.closeDrawer() : this.drawer.showDrawer();
    }


}
