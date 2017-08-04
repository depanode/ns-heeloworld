import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";

import { SideDrawerLocation, RadSideDrawer } from "nativescript-telerik-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-telerik-ui/sidedrawer/angular";

@Component({
    selector: "my-app",
    template: `
        <ActionBar title="My App" class="action-bar">
            <StackLayout orientation="horizontal"
                         ios:horizontalAlignment="center"
                         android:horizontalAlignment="left">
                <Button text="\uf0c9" class="font-awesome hamburger" (tap)="openDrawer()"></Button>
                <Label text="My App"  class="action-label"></Label>
                
            </StackLayout>
            <!--<ActionItem tap=""
                        ios.systemIcon="9" ios.position="left"
                        android.systemIcon="ic_menu_share" android.position="actionBar"></ActionItem>
            <ActionItem tap=""
                        ios.systemIcon="16" ios.position="right"
                        text="delete" android.position="popup"></ActionItem>-->
            <!--<NavigationButton android.systemIcon="ic_menu_share" (tap)="openDrawer()"></NavigationButton>-->
        </ActionBar>
        <RadSideDrawer [drawerLocation]="currentLocation" tkExampleTitle tkToggleNavButton>
            <StackLayout tkDrawerContent class="sideStackLayout">
                <StackLayout class="sideTitleStackLayout">
                    <Label text="Navigation Menu"></Label>
                </StackLayout>
                <StackLayout class="sideStackLayout">
                    <Label text="Dashboard" [nsRouterLink]="['/']" nsRouterLinkActive="active" class="sideLabel sideLightGrayLabel"></Label>
                    <Label text="Social" class="sideLabel"></Label>
                    <Label text="Promotions" class="sideLabel"></Label>
                    <Label text="Labels" class="sideLabel"></Label>
                    <Label text="Important" class="sideLabel"></Label>
                    <Label text="Starred" class="sideLabel"></Label>
                    <Label text="Sent Mail" class="sideLabel"></Label>
                    <Label text="About" [nsRouterLink]="['/about']" nsRouterLinkActive="active" class="sideLabel"></Label>
                </StackLayout>
            </StackLayout>
            <StackLayout tkMainContent>
                <router-outlet></router-outlet>
            </StackLayout>
        </RadSideDrawer>
        <!-- Your UI components go here -->
    `
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
