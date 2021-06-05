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
        guestToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InNoYWtvb3IiLCJzdWIiOiJzaGFrb29yIiwibmFtZSI6InNoYWtvb3IgdGVzdGluZyBhcCIsIm5iZiI6MTYyMjkwMjQyNSwiZXhwIjoxNjIzMTYxNjI1LCJpYXQiOjE2MjI5MDI0MjUsImlzcyI6IlkybHpZMjl6Y0dGeWF6b3ZMM1Z5YmpwVVJVRk5PbVYxTFdObGJuUnlZV3d0TVY5ckwwOVNSMEZPU1ZwQlZFbFBUaTh4TVRrMk9XVm1NUzFtWTJaa0xUUTRNV0V0WW1ZeVppMDRPVE5pTlRkak1EYzJNak0iLCJhdWQiOiJsbHZ1ZGZ2a3d2ZXB3a2Ruc253bXV1bHl2dHJhd3BwZiJ9._LRfWjHgwRx8gfk2PgPSEiREHMcB61AhgCH9qCW1rPM',
        destinationId: 'shakoor.hussain@deg.shj.ae',
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
