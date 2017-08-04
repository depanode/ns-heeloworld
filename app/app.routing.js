"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_about_component_1 = require("./app-about.component");
var app_dashboard_component_1 = require("./app-dashboard.component");
var app_component_1 = require("./app.component");
exports.routes = [
    { path: "", component: app_component_1.AppComponent, children: [
            { path: "", component: app_dashboard_component_1.AppDashboardComponent },
            { path: "about", component: app_about_component_1.AppAboutComponent }
        ]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZEQUEwRDtBQUMxRCxxRUFBa0U7QUFDbEUsaURBQStDO0FBRWxDLFFBQUEsTUFBTSxHQUFHO0lBQ2xCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsNEJBQVksRUFBRSxRQUFRLEVBQUU7WUFDdkMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSwrQ0FBcUIsRUFBRTtZQUM5QyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVDQUFpQixFQUFFO1NBQ2xEO0tBQ0o7Q0FFSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwQWJvdXRDb21wb25lbnQgfSBmcm9tICcuL2FwcC1hYm91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtZGFzaGJvYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cbmV4cG9ydCBjb25zdCByb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IEFwcENvbXBvbmVudCwgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBBcHBEYXNoYm9hcmRDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogXCJhYm91dFwiLCBjb21wb25lbnQ6IEFwcEFib3V0Q29tcG9uZW50IH1cbiAgICAgICAgXVxuICAgIH1cblxuXTsiXX0=