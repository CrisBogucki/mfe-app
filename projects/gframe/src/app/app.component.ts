import {Component, OnInit} from '@angular/core';
// @ts-ignore
import MicroAppConfigJson from "./../assets/microapp.config.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'gframe';

  microApps = [];

  ngOnInit() {
    this.microApps = MicroAppConfigJson.map((app) => ({
        name: app.name,
        description: app.description,
        version: app.version,
        path: app.routePath
      })
    );
  }
}
