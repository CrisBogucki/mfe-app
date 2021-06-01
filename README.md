# mfe-app

MicroFrontEndApp

### Steps

Create [g]lobal [f]rame

- `ng new mfe-app --createApplication false`
- `ng config cli.packageManager yarn`
- `ng g application gframe --routing --style=scss`
- `ng g c home --project gframe`
  - add routing
    ```
    {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
    }
    ```
  - create html
    ```angular2html
    <h1>Welcome to gframe</h1>
    <router-outlet></router-outlet>
    ```
- `npm install -g yarn`
- `yarn install`

Create [l]ocal micro-app1

- `ng g application l-micro-app1 --routing --style=scss`
- `ng g m l-micro-app1 --routing --project=l-micro-app1`
  - add routing 
  ```
  {
    path: '',
    component: HomeComponent
  }
  ```
  - create html in app.conponent
  ```angular2html
  <h1>l-micro-app1 works!</h1>
  
  <a routerLink="/">Home by /</a> <br><br>
  <a routerLink="l-micro-app1">Home by l-micro-app1</a>
  <router-outlet></router-outlet>
  ```
- `ng g c home --project l-micro-app1`
  - create html in home
  ```angular2html
  <h1>Home in l-micro-app1 works!</h1>
  ```

Add Module Federation

- `ng add @angular-architects/module-federation --project gframe --port 4201` 
- `ng add @angular-architects/module-federation --project l-micro-app1 --port 4202`   
  only for node v^12 || 14
  
Add Webpack Config
- in package.json
  ```json
  "resolutions": {
  "webpack": "^5.4.0",
  "license-webpack-plugin": "2.3.17"
  },
  ```
  
