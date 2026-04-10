import { Component } from '@angular/core';
import { TreeNodeComponent, TreeViewComponent } from 'marlin-web-ui';

@Component({
  selector: 'lib-navigator-core',
  imports: [TreeViewComponent, TreeNodeComponent],
  template: `
    <div>
      <p>navigator-core works!</p>
      <ul app-tree-view>
        <li app-tree-node>Wadup</li>
      </ul>
    </div>
  `,
  styles: ``,
})
export class NavigatorCoreComponent {}
