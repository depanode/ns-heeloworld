import { Component } from '@angular/core';

import { device } from 'platform';
import { android } from 'application';

@Component({
    moduleId: module.id,
    templateUrl: './app-dashboard.component.html',
    styleUrls: ['./app-dashboard.component.css']
})
export class AppDashboardComponent {

    deviceInfo;
    apps = [];

    constructor() {
        this.deviceInfo = {
            model: device.model,
            os: device.os,
            osVersion: device.osVersion
        };

        const context: android.content.Context = android.context;
        const pm: android.content.pm.PackageManager = context.getPackageManager();
        const apps: java.util.IList<android.content.pm.ApplicationInfo> = pm.getInstalledApplications(0);

        const length: number = apps.size();

        for(let i = 0; i < length; i++) {
            let app = apps.get(i);
            this.apps.push(pm.getApplicationLabel(app));
        }

        /*const launcher: android.content.pm.LauncherApps = context.getSystemService(context.getClass().LAUNCHER_APPS_SERVICE);
        console.log(context.LAUNCHER_APPS_SERVICE);*/

    }

    onAppTap(event) {
        console.log(event);
    }

}