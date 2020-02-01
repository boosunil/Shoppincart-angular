import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";

@Component({
  selector: "app-item-detailview",
  templateUrl: "./item-detailview.component.html",
  styleUrls: ["./item-detailview.component.scss"]
})
export class ItemDetailviewComponent implements OnInit {
  constructor(public common: CommonService) {}
  ngOnInit() {}

  item = this.common.detail;
}
