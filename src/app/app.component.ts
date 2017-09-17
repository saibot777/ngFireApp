import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  connected: FirebaseObjectObservable<any>;

  constructor(private af: AngularFireDatabase) {
    this.af.object(`connected`)
      .subscribe(console.log);
  }
}
