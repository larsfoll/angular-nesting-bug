import * as i0 from '@angular/core';
import { Component } from '@angular/core';

class TreeViewComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: TreeViewComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.20", type: TreeViewComponent, isStandalone: true, selector: "ul[lib-tree-view]", ngImport: i0, template: "<ng-content />\n", styles: [":host{>li{outline:1px solid red}}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: TreeViewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ul[lib-tree-view]', template: "<ng-content />\n", styles: [":host{>li{outline:1px solid red}}\n"] }]
        }] });

class TreeNodeComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: TreeNodeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.20", type: TreeNodeComponent, isStandalone: true, selector: "li[lib-tree-node]", ngImport: i0, template: "<ng-content />\n", styles: [":host{list-style-type:upper-alpha}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: TreeNodeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'li[lib-tree-node]', template: "<ng-content />\n", styles: [":host{list-style-type:upper-alpha}\n"] }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { TreeNodeComponent, TreeViewComponent };
//# sourceMappingURL=navigator-lib.mjs.map
