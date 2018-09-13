import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-dynamic-pages',
  templateUrl: './dynamic-pages.component.html',
  styleUrls: ['./dynamic-pages.component.css']
})
export class DynamicPagesComponent implements OnInit {

  @ViewChild('content',  { read: ViewContainerRef })
  public content: ViewContainerRef;

  constructor() { }

  ngOnInit() {
  }

}
