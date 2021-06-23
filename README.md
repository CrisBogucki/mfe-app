# mfe-app

Project of Concept micro frontend application 

## Table Of Contents

* [Create monorepo](#create-monorepo)
* [Create g-frame](#create-gframe)
* [Create l-app1](#create-lapp1)
* [Add Module Federation](#add-mod-fed)
* [Add Webpack Config in package.json](#add-webpack-config-in-packagejson)
### Create monorepo <a name="create-monorepo"></a>
  `ng new mfe-app --createApplication false`
  
  `ng config cli.packageManager yarn`

### Create g-frame <a name="create-gframe"></a>
  `ng g application gframe --routing --style=scss`
  
  `ng g c home --project gframe`

Add routing
  ```json5
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    }
  ```

Create html
  ```angular2html
    <h1>Welcome in Angular MFE G-Frame</h1>
    <router-outlet></router-outlet>
  ```

### Create l-app1 <a name="create-lapp1"></a>
  `ng g application l-app1 --routing --style=scss`
  
  `ng g c home --project l-app1` 
  
  `ng g m l-app1 --routing --project=l-app1`
  
  `ng g c home --project l-app1`

Add routing in LApp1RoutingModule 
  ```json5
    {
      path: '',
      component: HomeComponent
    }
  ```
  
Add routing in 
  ```json5
    {
      path:'',
      component: HomeComponent,
      pathMatch: 'full'
    },
    {
      path: 'l-app1',
      loadChildren: () => import("./l-app1/l-app1.module").then((m) => m.LApp1Module),
    },
  ```

Create html in app.component
  ```angular2html
    <h1>MFE 1 </h1><br>
    <a routerLink="/">Home</a><br>
    <a routerLink="/l-app1">L-App1</a>
    <router-outlet></router-outlet>
  ```

### Add Module Federation <a name="add-mod-fed"></a>
  `ng add @angular-architects/module-federation --project gframe --port 4200` 
  
  `ng add @angular-architects/module-federation --project l-app1 --port 4201`   
  
  only for node v^12 || 14
  
### Add Webpack Config in package.json <a name="add-webpack-config-in-packagejson"></a>
  ```json5
    "resolutions" : {
    "webpack": "5.27.2"
    "license-webpack-plugin": "2.3.17"
    }
  ```

### Add webpack config
in g-frame
```json5
  remotes: { "lApp1": "lApp1@http://localhost:4201/lApp1remoteEntry.js"}
```
```json5
  //add decl.d.ts in gframe/src/app
  declare module 'lApp1/LApp1Module'
```

in l-app1
```json5
  name: "lApp1",
  filename: "lApp1remoteEntry.js",
  exposes: {'./LApp1Module': './projects/l-app1/src/app/l-app1/l-app1.module.ts'}
```


  
