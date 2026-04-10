import { Component } from '@angular/core';
import { NavigatorCoreComponent } from 'navigator-core';
import { TreeNodeComponent, TreeViewComponent } from 'marlin-web-ui';

@Component({
  selector: 'app-root',
  imports: [NavigatorCoreComponent, TreeNodeComponent, TreeViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'navigator-app';
}
