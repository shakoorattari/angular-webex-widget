import { Component, OnInit } from '@angular/core';

declare var webex: any;
declare var jwt: any;
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
        guestToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InNvbnkiLCJzdWIiOiJzb255IiwibmFtZSI6InNvbnkgZ3Vlc3QgdXNlciIsIm5iZiI6MTYyMzI3MTQwNCwiZXhwIjoxNjIzNTMwNjA0LCJpYXQiOjE2MjMyNzE0MDQsImlzcyI6IlkybHpZMjl6Y0dGeWF6b3ZMM1Z5YmpwVVJVRk5PblZ6TFhkbGMzUXRNbDl5TDA5U1IwRk9TVnBCVkVsUFRpOW1OMlZoT0dKaE15MDBNV1U1TFRRNFl6VXRZVEE0WlMwME1tTTJNMlZtTlRWbFlUQSIsImF1ZCI6InB6cW1kZnZrd3ZlcHdrZG5zbndtdXVseXZ0cnR2cW1wIn0.7gPykOAbHmFQNAF1vI1CbzECKpDjwCZcYk-NkizpKlk',
        destinationId: 'https://meet95.webex.com/meet95/j.php?MTID=m7f7dd707a0d66eb6429218ad52fcf5ae',
        destinationType: 'sip',
        spaceActivities: { "files": true, "meet": true, "message": true, "people": true },
        initialActivity: 'meet',
        secondaryActivitiesFullWidth: true,
        composerActions: { "files": true, "meet": true, "message": true, "people": true },
      });


    };
    el.src = "https://code.s4d.io/widget-space/production/bundle.js";
    document.getElementsByTagName('head')[0].append(el);

  }

}
