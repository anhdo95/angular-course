import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(ShoppingEditComponent) shoppingEditComponent: ShoppingEditComponent

  ngOnInit() {
  }

  ngAfterViewInit() {

  }
}
