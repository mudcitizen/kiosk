import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { compileComponentFromMetadata } from '@angular/compiler';
import { FinderComponent } from './components/finder/finder.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [ 
  {path: "finder", component: FinderComponent },
  { path: "", redirectTo: "/finder", pathMatch: "full" },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
