import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";

@Component({
  selector: "app-user-cart",
  templateUrl: "./user-cart.component.html",
  styleUrls: ["./user-cart.component.scss"]
})
export class UserCartComponent implements OnInit {
  cart_list: Array<any> = [];

  constructor(public common: CommonService) {}

  ngOnInit() {}

  ngDoCheck() {
    this.cart_list = this.common.cart_item_list;
  }

  removeFromCart(item: any) {
    this.common.cart_value -= 1;
    let item_index;
    for (let index in this.common.cart_item_list) {
      if (this.common.cart_item_list[index] == item["id"]) {
        item_index = index;
      }
    }
    this.common.cart_item_list.splice(item_index, 1);
  }
}
