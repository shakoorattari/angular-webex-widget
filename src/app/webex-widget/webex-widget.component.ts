import { Component, OnInit } from '@angular/core';

declare var webex: any;

@Component({
  selector: 'app-webex-widget',
  templateUrl: './webex-widget.component.html',
  styleUrls: ['./webex-widget.component.css']
})
export class WebexWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var el = document.createElement('script');
    el.onload = () => {

      var widgetEl = document.getElementById('my-webex-widget');

      webex.widget(widgetEl).spaceWidget({
        accessToken: 'ZWFhYzk1ZDAtZWNlZS00MTVhLWJmZjMtY2MxY2I5YWYwMTAwZTMyMzIwODItZmFj_PF84_3a3c279d-f61d-4690-9800-4020b8fd7511',
        destinationId: 'abuzzi@cisco.com',
        destinationType: 'email',
        spaceActivities: {"files":true,"meet":true,"message":true,"people":true},
        initialActivity: 'message',
        secondaryActivitiesFullWidth: false,
        composerActions: {"files":true,"meet":true,"message":true,"people":true}
      });


    };
    el.src = "https://code.s4d.io/widget-space/production/bundle.js";
    document.getElementsByTagName('head')[0].append(el);

  }

}
