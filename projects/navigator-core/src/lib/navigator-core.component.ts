import { Component } from '@angular/core';
import { TreeNodeComponent, TreeViewComponent } from 'navigator-lib';

@Component({
  selector: 'lib-navigator-core',
  imports: [TreeViewComponent, TreeNodeComponent],
  template: `
    <ul lib-tree-view>
      <li lib-tree-node><ng-content /></li>
    </ul>
  `,
})
export class NavigatorCoreComponent {}
