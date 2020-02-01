import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(public common: CommonService) {}

  cart_value: number = this.common.cart_value;

  ngDoCheck() {
    this.cart_value = this.common.cart_value;
  }

  ngOnInit() {}
}
