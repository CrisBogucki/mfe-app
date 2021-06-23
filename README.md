# mfe-app

Project of Concept micro application 

## Table Of Contents

* [Create monorepo](#create-monorepo)
* [Create g-frame as shell](#create-gframe)
* [Create first mfe1](#create-first-mfe1)

### Create monorepo <a name="create-monorepo"></a>
  - `ng new mfe-app --createApplication false`
  - `ng config cli.packageManager yarn`

### Create g-frame as shell <a name="create-gframe"></a>
  - `ng g application gframe --routing --style=scss`
  - `ng g c home --project gframe`
  - add routing
    ```json5
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    }
    ```
  - create html
    ```angular2html
    <h1>Welcome in Angular MFE G-Frame</h1>
    <router-outlet></router-outlet>
    ```
  
### Create first mfe1 <a name="create-first-mfe1"></a>
  - `ng g application l-app1 --routing --style=scss`
  - `ng g c home --project l-app1` 
  - `ng g m l-app1 --routing --project=l-app1`
  - `ng g c home --project l-app1`
  - add routing in module 
  ```
  {
    path: '',
    component: HomeComponent
  }
  ```

  - create html in app.conponent
  ```angular2html
  <h1>l-mfe1 works!</h1>
  
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

- `ng add @angular-architects/module-federation --project gframe --port 4200` 
- `ng add @angular-architects/module-federation --project l-app1 --port 4201`   
  only for node v^12 || 14
  
Add Webpack Config
- in package.json
  ```json
  "resolutions": {
  "webpack": "5.27.2"
  "license-webpack-plugin": "2.3.17"
  },
  ```
  
