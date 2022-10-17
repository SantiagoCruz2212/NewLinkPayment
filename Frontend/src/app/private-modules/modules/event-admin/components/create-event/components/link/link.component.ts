import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './view/link.component.html',
  styleUrls: ['./styles/link.component.scss']
})
export class LinkComponent implements OnInit {

  
  public CopyLabel : string = "Copiar enlace";
  public ClassCopyLabel : string = "copySpan";

  constructor() { }

  ngOnInit(): void {
  }
  copy(){
    this.ClassCopyLabel = " copySpan copiedSpan";
    this.CopyLabel = "Copiado";
    var temporal = document.createElement("input");
    temporal.setAttribute("value", (<HTMLSpanElement>document.getElementById('link')).innerHTML);
    document.body.appendChild(temporal);
    temporal.select();
    document.execCommand("copy");
    document.body.removeChild(temporal);
    setTimeout(() => {
      this.CopyLabel = "Copiar enlace";
      this.ClassCopyLabel = "copySpan";
    }, 3000);
  }
}
