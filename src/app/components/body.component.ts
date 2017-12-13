import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: 'body.component.html'
})

export class BodyComponent {

  show:boolean = false;

  message:any = {
    text: "Un gran poder requiere una gran responsabilidad",
    author: "Ben Parker"
  }

  characters:string[] = ["Spiderman", "Venom", "Dr. Octopus"];

}
