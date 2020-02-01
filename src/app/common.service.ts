import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  constructor() {}
  cart_value: number = 0;
  cart_item_list: Array<any> = [];
  cart_item: any;
  detail: any;
}
