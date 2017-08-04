"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var application_1 = require("application");
var AppDashboardComponent = (function () {
    function AppDashboardComponent() {
        this.deviceInfo = {
            model: platform_1.device.model,
            os: platform_1.device.os,
            osVersion: platform_1.device.osVersion
        };
        var application = new application_1.AndroidApplication();
        var context = application.context;
        console.log(context);
    }
    return AppDashboardComponent;
}());
AppDashboardComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './app-dashboard.component.html',
        styleUrls: ['./app-dashboard.component.css']
    }),
    __metadata("design:paramtypes", [])
], AppDashboardComponent);
exports.AppDashboardComponent = AppDashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWRhc2hib2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAtZGFzaGJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUUxQyxxQ0FBNEQ7QUFDNUQsMkNBQWlEO0FBU2pELElBQWEscUJBQXFCO0lBSTlCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRztZQUNkLEtBQUssRUFBRSxpQkFBTSxDQUFDLEtBQUs7WUFDbkIsRUFBRSxFQUFFLGlCQUFNLENBQUMsRUFBRTtZQUNiLFNBQVMsRUFBRSxpQkFBTSxDQUFDLFNBQVM7U0FDOUIsQ0FBQztRQUVGLElBQU0sV0FBVyxHQUFHLElBQUksZ0NBQWtCLEVBQUUsQ0FBQztRQUM3QyxJQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVMLDRCQUFDO0FBQUQsQ0FBQyxBQWhCRCxJQWdCQztBQWhCWSxxQkFBcUI7SUFMakMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsZ0NBQWdDO1FBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO0tBQy9DLENBQUM7O0dBQ1cscUJBQXFCLENBZ0JqQztBQWhCWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUywgZGV2aWNlLCBzY3JlZW4gfSBmcm9tICdwbGF0Zm9ybSc7XG5pbXBvcnQgeyBBbmRyb2lkQXBwbGljYXRpb24gfSBmcm9tICdhcHBsaWNhdGlvbic7XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hcHAtZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9hcHAtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBEYXNoYm9hcmRDb21wb25lbnQge1xuXG4gICAgZGV2aWNlSW5mbztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRldmljZUluZm8gPSB7XG4gICAgICAgICAgICBtb2RlbDogZGV2aWNlLm1vZGVsLFxuICAgICAgICAgICAgb3M6IGRldmljZS5vcyxcbiAgICAgICAgICAgIG9zVmVyc2lvbjogZGV2aWNlLm9zVmVyc2lvblxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gbmV3IEFuZHJvaWRBcHBsaWNhdGlvbigpO1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gYXBwbGljYXRpb24uY29udGV4dDtcbiAgICAgICAgY29uc29sZS5sb2coY29udGV4dCk7XG4gICAgfVxuXG59Il19