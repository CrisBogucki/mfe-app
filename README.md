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
    ```html
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
- `ng g c home --project l-micro-app1`
