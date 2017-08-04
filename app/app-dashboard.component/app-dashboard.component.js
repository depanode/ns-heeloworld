"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var application_1 = require("application");
var AppDashboardComponent = (function () {
    function AppDashboardComponent() {
        this.apps = [];
        this.deviceInfo = {
            model: platform_1.device.model,
            os: platform_1.device.os,
            osVersion: platform_1.device.osVersion
        };
        var context = application_1.android.context;
        var pm = context.getPackageManager();
        var apps = pm.getInstalledApplications(0);
        var length = apps.size();
        for (var i = 0; i < length; i++) {
            var app_1 = apps.get(i);
            this.apps.push(pm.getApplicationLabel(app_1));
        }
        //const launcher = context.getSystemService(context.getClass().LAUNCHER_APPS_SERVICE);
        console.log(context);
    }
    AppDashboardComponent.prototype.onAppTap = function (event) {
        console.log(event);
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWRhc2hib2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAtZGFzaGJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUUxQyxxQ0FBa0M7QUFDbEMsMkNBQXNDO0FBT3RDLElBQWEscUJBQXFCO0lBSzlCO1FBRkEsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUdOLElBQUksQ0FBQyxVQUFVLEdBQUc7WUFDZCxLQUFLLEVBQUUsaUJBQU0sQ0FBQyxLQUFLO1lBQ25CLEVBQUUsRUFBRSxpQkFBTSxDQUFDLEVBQUU7WUFDYixTQUFTLEVBQUUsaUJBQU0sQ0FBQyxTQUFTO1NBQzlCLENBQUM7UUFFRixJQUFNLE9BQU8sR0FBNEIscUJBQU8sQ0FBQyxPQUFPLENBQUM7UUFDekQsSUFBTSxFQUFFLEdBQXNDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzFFLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU1QyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFM0IsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM3QixJQUFJLEtBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hELENBQUM7UUFFRCxzRkFBc0Y7UUFDdEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUV6QixDQUFDO0lBRUQsd0NBQVEsR0FBUixVQUFTLEtBQUs7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFTCw0QkFBQztBQUFELENBQUMsQUFoQ0QsSUFnQ0M7QUFoQ1kscUJBQXFCO0lBTGpDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLGdDQUFnQztRQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztLQUMvQyxDQUFDOztHQUNXLHFCQUFxQixDQWdDakM7QUFoQ1ksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGRldmljZSB9IGZyb20gJ3BsYXRmb3JtJztcbmltcG9ydCB7IGFuZHJvaWQgfSBmcm9tICdhcHBsaWNhdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FwcC1kYXNoYm9hcmQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2FwcC1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFwcERhc2hib2FyZENvbXBvbmVudCB7XG5cbiAgICBkZXZpY2VJbmZvO1xuICAgIGFwcHMgPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRldmljZUluZm8gPSB7XG4gICAgICAgICAgICBtb2RlbDogZGV2aWNlLm1vZGVsLFxuICAgICAgICAgICAgb3M6IGRldmljZS5vcyxcbiAgICAgICAgICAgIG9zVmVyc2lvbjogZGV2aWNlLm9zVmVyc2lvblxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGNvbnRleHQ6IGFuZHJvaWQuY29udGVudC5Db250ZXh0ID0gYW5kcm9pZC5jb250ZXh0O1xuICAgICAgICBjb25zdCBwbTogYW5kcm9pZC5jb250ZW50LnBtLlBhY2thZ2VNYW5hZ2VyID0gY29udGV4dC5nZXRQYWNrYWdlTWFuYWdlcigpO1xuICAgICAgICBjb25zdCBhcHBzID0gcG0uZ2V0SW5zdGFsbGVkQXBwbGljYXRpb25zKDApO1xuXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGFwcHMuc2l6ZSgpO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGFwcCA9IGFwcHMuZ2V0KGkpO1xuICAgICAgICAgICAgdGhpcy5hcHBzLnB1c2gocG0uZ2V0QXBwbGljYXRpb25MYWJlbChhcHApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vY29uc3QgbGF1bmNoZXIgPSBjb250ZXh0LmdldFN5c3RlbVNlcnZpY2UoY29udGV4dC5nZXRDbGFzcygpLkxBVU5DSEVSX0FQUFNfU0VSVklDRSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGNvbnRleHQpO1xuXG4gICAgfVxuXG4gICAgb25BcHBUYXAoZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgIH1cblxufSJdfQ==