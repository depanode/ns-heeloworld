import { Component } from '@angular/core';

import { isAndroid, isIOS, device, screen } from 'platform';
import { AndroidApplication } from 'application';



@Component({
    moduleId: module.id,
    templateUrl: './app-dashboard.component.html',
    styleUrls: ['./app-dashboard.component.css']
})
export class AppDashboardComponent {

    deviceInfo;

    constructor() {
        this.deviceInfo = {
            model: device.model,
            os: device.os,
            osVersion: device.osVersion
        };

        const application = new AndroidApplication();
        const context = application.context;
        console.log(context);
    }

}