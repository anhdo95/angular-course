import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  selectedFeature = 'recipes'

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

  onNavigate(selectedFeature) {
    this.selectedFeature = selectedFeature
  }
}
