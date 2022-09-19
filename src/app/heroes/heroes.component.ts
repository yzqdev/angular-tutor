import {Component, OnInit} from '@angular/core';
import {HEROES} from "../help-page/hero";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  title = "哈哈哈"
  heros = HEROES

  constructor() {
  }

  ngOnInit(): void {
  }

}
