import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";
import { ItemDetailviewComponent } from "../item-detailview/item-detailview.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(public common: CommonService) {}

  items: Array<any> = [
    {
      id: 1,
      item_name: "Nexas 48A",
      image: "assets/images/phone4.jpg",
      price: 12499
    },
    {
      id: 2,
      item_name: "Nexas 48A",
      image: "assets/images/phone4.jpg",
      price: 12499
    },
    {
      id: 3,
      item_name: "Nexas 48A",
      image: "assets/images/phone4.jpg",
      price: 12499
    },

    {
      id: 4,
      item_name: "Samsung Smart watch",
      image: "assets/images/watch2.jpg",
      price: 15499
    },

    {
      id: 5,
      item_name: "Mi watch with Android",
      image: "assets/images/watch3.jfif",
      price: 12499
    },

    {
      id: 6,
      item_name: "Mi watch with Android",
      image: "assets/images/watch2.jpg",
      price: 10499
    },

    {
      id: 7,
      item_name: "Philips Trimmer",
      image: "assets/images/trimmer1.jpg",
      price: 1500
    },

    {
      id: 8,
      item_name: "Nova Trimmer",
      image: "assets/images/trimmer2.jfif",
      price: 1400
    },

    {
      id: 9,
      item_name: "Panasonic Trimmer",
      image: "assets/images/trimmer3.jfif",
      price: 1350
    },
    {
      id: 10,
      item_name: "Samsung Series 4 80cm (32) HD Ready LED Smart TV",
      image: "assets/images/tv1.jpg",
      price: 25000
    },
    {
      id: 11,
      item_name: "Mi LED Smart TV 4A PRO 80 cm (32) with Android",
      image: "assets/images/tv3.jfif",
      price: 30000
    },
    {
      id: 12,
      item_name: "Onida LEB Smart Tv (32) inches",
      image: "assets/images/tv1.jpg",
      price: 32000
    },
    {
      id: 13,
      item_name: "Philips Headphones",
      image: "assets/images/headphones1.jfif",
      price: 2000
    },

    {
      id: 14,
      item_name: "Mpow 059 Headphones",
      image: "assets/images/headphones.jpg",
      price: 1400
    },

    {
      id: 15,
      item_name: "Noise free Headphones",
      image: "assets/images/headphones3.jfif",
      price: 3000
    },
    {
      id: 16,
      item_name: "Pubg Mobile Animal wolf",
      image: "assets/images/shirt.jpeg",
      price: 3000
    },
    {
      id: 17,
      item_name: "Pubg Team play",
      image: "assets/images/shirt2.jfif",
      price: 3000
    },
    {
      id: 18,
      item_name: "Jai Pubg",
      image: "assets/images/shirt3.jpg",
      price: 3000
    }
  ];
  ngOnInit() {}

  addToCart(item: any) {
    this.common.cart_value += 1;
    this.common.cart_item_list.push(item["id"]);
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

  detailed(item: any) {
    this.common.detail = item;
  }
}
