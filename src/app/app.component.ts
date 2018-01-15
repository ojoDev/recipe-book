import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Recipe Book';
  loadedFeature = 'recipes';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBUWkFkkebFh4EKbOUxR4IWB2SmRD-7skI',
      authDomain: 'ng-recipe-book-885ff.firebaseapp.com'
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
