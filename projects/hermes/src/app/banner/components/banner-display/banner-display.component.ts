import { Component, OnInit, Input } from "@angular/core";
import { TypeOptions } from "@app/app/banner/models/banner.model";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Component({
  selector: "hm-banner-display",
  templateUrl: "./banner-display.component.html",
  styleUrls: ["./banner-display.component.scss"]
})
export class BannerDisplayComponent implements OnInit {
  @Input()
  type: string;
  @Input()
  link: string;
  @Input()
  area: string;

  typeOptions = TypeOptions;
  safeHtml: SafeHtml;

  constructor(private dom: DomSanitizer) {}

  ngOnInit() {
    let html = "";
    switch (this.type) {
      case this.typeOptions.youtube.id:
        let video = this.youtube_parser(this.link);
        html = `
        <iframe
          src="https://www.youtube.com/embed/${video}"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen></iframe>
        `;
        this.safeHtml = this.dom.bypassSecurityTrustHtml(html);
        break;
      case this.typeOptions.html5.id:
        let html5 = this.link;
        html = `
        <iframe
          src="${html5}"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen></iframe>
        `;
        this.safeHtml = this.dom.bypassSecurityTrustHtml(html);
        break;
    }
  }

  youtube_parser(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  }
}
