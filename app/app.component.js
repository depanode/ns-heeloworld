"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var sidedrawer_1 = require("nativescript-telerik-ui/sidedrawer");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentLocation = sidedrawer_1.SideDrawerLocation.Left;
        this.router.events.subscribe(function (e) {
            if (e instanceof router_1.NavigationEnd) {
                _this.drawer.closeDrawer();
            }
        });
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
    };
    AppComponent.prototype.openDrawer = function () {
        this.drawer.getIsOpen() ? this.drawer.closeDrawer() : this.drawer.showDrawer();
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild(angular_1.RadSideDrawerComponent),
    __metadata("design:type", angular_1.RadSideDrawerComponent)
], AppComponent.prototype, "drawerComponent", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n        <ActionBar title=\"My App\" class=\"action-bar\">\n            <StackLayout orientation=\"horizontal\"\n                         ios:horizontalAlignment=\"center\"\n                         android:horizontalAlignment=\"left\">\n                <Button text=\"\uF0C9\" class=\"font-awesome hamburger\" (tap)=\"openDrawer()\"></Button>\n                <Label text=\"My App\"  class=\"action-label\"></Label>\n                \n            </StackLayout>\n            <!--<ActionItem tap=\"\"\n                        ios.systemIcon=\"9\" ios.position=\"left\"\n                        android.systemIcon=\"ic_menu_share\" android.position=\"actionBar\"></ActionItem>\n            <ActionItem tap=\"\"\n                        ios.systemIcon=\"16\" ios.position=\"right\"\n                        text=\"delete\" android.position=\"popup\"></ActionItem>-->\n            <!--<NavigationButton android.systemIcon=\"ic_menu_share\" (tap)=\"openDrawer()\"></NavigationButton>-->\n        </ActionBar>\n        <RadSideDrawer [drawerLocation]=\"currentLocation\" tkExampleTitle tkToggleNavButton>\n            <StackLayout tkDrawerContent class=\"sideStackLayout\">\n                <StackLayout class=\"sideTitleStackLayout\">\n                    <Label text=\"Navigation Menu\"></Label>\n                </StackLayout>\n                <StackLayout class=\"sideStackLayout\">\n                    <Label text=\"Dashboard\" [nsRouterLink]=\"['/']\" nsRouterLinkActive=\"active\" class=\"sideLabel sideLightGrayLabel\"></Label>\n                    <Label text=\"Social\" class=\"sideLabel\"></Label>\n                    <Label text=\"Promotions\" class=\"sideLabel\"></Label>\n                    <Label text=\"Labels\" class=\"sideLabel\"></Label>\n                    <Label text=\"Important\" class=\"sideLabel\"></Label>\n                    <Label text=\"Starred\" class=\"sideLabel\"></Label>\n                    <Label text=\"Sent Mail\" class=\"sideLabel\"></Label>\n                    <Label text=\"About\" [nsRouterLink]=\"['/about']\" nsRouterLinkActive=\"active\" class=\"sideLabel\"></Label>\n                </StackLayout>\n            </StackLayout>\n            <StackLayout tkMainContent>\n                <router-outlet></router-outlet>\n            </StackLayout>\n        </RadSideDrawer>\n        <!-- Your UI components go here -->\n    "
    }),
    __metadata("design:paramtypes", [router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNEU7QUFDNUUsMENBQXNEO0FBRXRELGlFQUF1RjtBQUN2RixzRUFBb0Y7QUE0Q3BGLElBQWEsWUFBWTtJQU9yQixzQkFDWSxNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUUxQixDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLGVBQWUsR0FBRywrQkFBa0IsQ0FBQyxJQUFJLENBQUM7UUFFL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsQ0FBQztZQUMzQixFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksc0JBQWEsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLEtBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDOUIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHNDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO0lBQ2xELENBQUM7SUFFTSxpQ0FBVSxHQUFqQjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ25GLENBQUM7SUFHTCxtQkFBQztBQUFELENBQUMsQUEvQkQsSUErQkM7QUExQnNDO0lBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7OEJBQXlCLGdDQUFzQjtxREFBQztBQUx6RSxZQUFZO0lBMUN4QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLGswRUFzQ1Q7S0FDSixDQUFDO3FDQVNzQixlQUFNO0dBUmpCLFlBQVksQ0ErQnhCO0FBL0JZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge05hdmlnYXRpb25FbmQsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBTaWRlRHJhd2VyTG9jYXRpb24sIFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlclwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPEFjdGlvbkJhciB0aXRsZT1cIk15IEFwcFwiIGNsYXNzPVwiYWN0aW9uLWJhclwiPlxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgaW9zOmhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIGFuZHJvaWQ6aG9yaXpvbnRhbEFsaWdubWVudD1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJcXHVmMGM5XCIgY2xhc3M9XCJmb250LWF3ZXNvbWUgaGFtYnVyZ2VyXCIgKHRhcCk9XCJvcGVuRHJhd2VyKClcIj48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIk15IEFwcFwiICBjbGFzcz1cImFjdGlvbi1sYWJlbFwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgPCEtLTxBY3Rpb25JdGVtIHRhcD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpb3Muc3lzdGVtSWNvbj1cIjlcIiBpb3MucG9zaXRpb249XCJsZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZHJvaWQuc3lzdGVtSWNvbj1cImljX21lbnVfc2hhcmVcIiBhbmRyb2lkLnBvc2l0aW9uPVwiYWN0aW9uQmFyXCI+PC9BY3Rpb25JdGVtPlxuICAgICAgICAgICAgPEFjdGlvbkl0ZW0gdGFwPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlvcy5zeXN0ZW1JY29uPVwiMTZcIiBpb3MucG9zaXRpb249XCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiZGVsZXRlXCIgYW5kcm9pZC5wb3NpdGlvbj1cInBvcHVwXCI+PC9BY3Rpb25JdGVtPi0tPlxuICAgICAgICAgICAgPCEtLTxOYXZpZ2F0aW9uQnV0dG9uIGFuZHJvaWQuc3lzdGVtSWNvbj1cImljX21lbnVfc2hhcmVcIiAodGFwKT1cIm9wZW5EcmF3ZXIoKVwiPjwvTmF2aWdhdGlvbkJ1dHRvbj4tLT5cbiAgICAgICAgPC9BY3Rpb25CYXI+XG4gICAgICAgIDxSYWRTaWRlRHJhd2VyIFtkcmF3ZXJMb2NhdGlvbl09XCJjdXJyZW50TG9jYXRpb25cIiB0a0V4YW1wbGVUaXRsZSB0a1RvZ2dsZU5hdkJ1dHRvbj5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCB0a0RyYXdlckNvbnRlbnQgY2xhc3M9XCJzaWRlU3RhY2tMYXlvdXRcIj5cbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJzaWRlVGl0bGVTdGFja0xheW91dFwiPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIk5hdmlnYXRpb24gTWVudVwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJzaWRlU3RhY2tMYXlvdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJEYXNoYm9hcmRcIiBbbnNSb3V0ZXJMaW5rXT1cIlsnLyddXCIgbnNSb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCIgY2xhc3M9XCJzaWRlTGFiZWwgc2lkZUxpZ2h0R3JheUxhYmVsXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJTb2NpYWxcIiBjbGFzcz1cInNpZGVMYWJlbFwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiUHJvbW90aW9uc1wiIGNsYXNzPVwic2lkZUxhYmVsXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJMYWJlbHNcIiBjbGFzcz1cInNpZGVMYWJlbFwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiSW1wb3J0YW50XCIgY2xhc3M9XCJzaWRlTGFiZWxcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIlN0YXJyZWRcIiBjbGFzcz1cInNpZGVMYWJlbFwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiU2VudCBNYWlsXCIgY2xhc3M9XCJzaWRlTGFiZWxcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIkFib3V0XCIgW25zUm91dGVyTGlua109XCJbJy9hYm91dCddXCIgbnNSb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCIgY2xhc3M9XCJzaWRlTGFiZWxcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHRrTWFpbkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgPC9SYWRTaWRlRHJhd2VyPlxuICAgICAgICA8IS0tIFlvdXIgVUkgY29tcG9uZW50cyBnbyBoZXJlIC0tPlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblxuICAgIHByaXZhdGUgY3VycmVudExvY2F0aW9uIDogU2lkZURyYXdlckxvY2F0aW9uO1xuICAgIHByaXZhdGUgZHJhd2VyOiBSYWRTaWRlRHJhd2VyO1xuXG4gICAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TG9jYXRpb24gPSBTaWRlRHJhd2VyTG9jYXRpb24uTGVmdDtcblxuICAgICAgICB0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdlci5jbG9zZURyYXdlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlbkRyYXdlcigpIHtcbiAgICAgICAgdGhpcy5kcmF3ZXIuZ2V0SXNPcGVuKCkgPyB0aGlzLmRyYXdlci5jbG9zZURyYXdlcigpIDogdGhpcy5kcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cblxuXG59XG4iXX0=