import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-size-editor',
  templateUrl: './font-size-editor.component.html',
  styleUrls: ['./font-size-editor.component.css']
})
export class FontSizeEditorComponent implements OnInit {
  fontSize = 16;
  onChange(event) {
    this.fontSize = event.target.value;
  }
  constructor() { }

  ngOnInit() {
  }

}
