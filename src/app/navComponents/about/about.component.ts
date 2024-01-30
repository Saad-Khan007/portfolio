import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public show = true;
  window: any = window;
  public currentView: 'desktop' | 'tablet' | 'mobile' = 'desktop';

  constructor() { }

  ngOnInit(): void {
  }

}
