import {loadRemoteModule} from "./federation-utils";
import {Routes} from "@angular/router";
import {routes} from "../app-routing.module";
// @ts-ignore
import MicroAppConfigJson from "./../../assets/microapp.config.json";

export function buildRoutes(): Routes {

  const microAppRoutes: Routes = MicroAppConfigJson.map((app) => ({
    path: app.routePath,
    loadChildren: () => loadRemoteModule({
      remoteEntryUrl: app.remote.entryUrl,
      remoteName: app.remote.name,
      exposedModule: app.remote.exposedModule
    }).then((m) => m[app.remote.exposedModule])
  }));

  return [...routes, ...microAppRoutes];
}
