import { Component } from '@angular/core';
import { NavigatorCoreComponent } from 'navigator-core';

@Component({
  selector: 'app-root',
  imports: [NavigatorCoreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'navigator-app';
}
