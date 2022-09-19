import { Component, OnInit } from '@angular/core';
import {Hero} from "./hero";

@Component({
  selector: 'app-help-page',
  templateUrl: './help-page.component.html',
  styleUrls: ['./help-page.component.scss']
})
export class HelpPageComponent implements OnInit {
  hero:Hero={
    id: 1,
    name: 'Windstorm'
  }
  title='哈哈哈'
  constructor() { }

  ngOnInit(): void {
  }

}
