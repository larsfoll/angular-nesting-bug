import { Component } from '@angular/core';
// import { NavigatorCoreComponent } from 'navigator-core';
import { TreeNodeComponent, TreeViewComponent } from 'navigator-lib';
import { AppTreeViewComponent } from './tree-view/tree-view.component';
import { AppTreeNodeComponent } from './tree-node/tree-node.component';

@Component({
  selector: 'app-root',
  imports: [
    // NavigatorCoreComponent,
    TreeNodeComponent,
    TreeViewComponent,
    AppTreeViewComponent,
    AppTreeNodeComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'navigator-app';
}
