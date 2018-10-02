import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "@app/app/auth/services/user.service";
import { Title } from "@angular/platform-browser";
import { environment } from "@app/environments/environment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  titleText: string = environment.title + " - Editor";

  buttonList = [
    { path: "article", icon: "art_track", text: "Bài viết" },
    { path: "tags", icon: "filter_list", text: "Tags và tìm kiếm" },
    { path: "prices", icon: "format_list_numbered", text: "Bảng giá" },
    { path: "banner", icon: "monetization_on", text: "Quảng cáo" },
    { path: "profile", icon: "account_circle", text: "Tài khoản" }
  ];

  constructor(
    public user: UserService,
    private router: Router,
    private title: Title
  ) {
    this.title.setTitle(this.titleText);
  }
}
