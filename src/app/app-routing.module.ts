import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UserCartComponent } from "./user-cart/user-cart.component";
import { ItemDetailviewComponent } from "./item-detailview/item-detailview.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "user-cart", component: UserCartComponent },
  { path: "item-detailview", component: ItemDetailviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
