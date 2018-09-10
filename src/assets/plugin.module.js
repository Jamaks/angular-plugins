"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("@ngrx/store");
var core_1 = require("@angular/core");
var core_2 = require("@jam/core");
var PluginComponent = /** @class */ (function () {
    function PluginComponent(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    PluginComponent.prototype.increment = /**
     * @return {?}
     */
    function () {
        this.store.dispatch(core_2.incrementCartItem(1));
    };
    /**
     * @return {?}
     */
    PluginComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    PluginComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'lib-plugin',
                    template: "\n    <p>\n      plugin works!\n      <button (click)=\"increment()\"> increment from plugin! </button>\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    PluginComponent.ctorParameters = function () { return [
        { type: store_1.Store }
    ]; };
    return PluginComponent;
}());
exports.PluginComponent = PluginComponent;
if (false) {
    /** @type {?} */
    PluginComponent.prototype.store;
}
var PluginModule = /** @class */ (function () {
    function PluginModule() {
    }
    PluginModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [],
                    declarations: [PluginComponent],
                    exports: [PluginComponent]
                },] }
    ];
    return PluginModule;
}());
exports.PluginModule = PluginModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2luLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BqYW0vcGx1Z2luLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEscUNBQW9DO0FBQ3BDLHNDQUE0RDtBQUM1RCxrQ0FBd0Q7O0lBY3RELHlCQUFvQixLQUFzQjtRQUF0QixVQUFLLEdBQUwsS0FBSyxDQUFpQjtLQUFLOzs7O0lBQy9DLG1DQUFTOzs7SUFBVDtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLHdCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDM0M7Ozs7SUFDRCxrQ0FBUTs7O0lBQVI7S0FDQzs7Z0JBakJGLGdCQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSx1SEFLVDtpQkFFRjs7OztnQkFiUSxhQUFLOzswQkFBZDs7QUFjYSwwQ0FBZTs7Ozs7Ozs7O2dCQVkzQixlQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLEVBQ1I7b0JBQ0QsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDO29CQUMvQixPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7aUJBQzNCOzt1QkEvQkQ7O0FBZ0NhLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBOZ01vZHVsZSwgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwcFN0YXRlLCBpbmNyZW1lbnRDYXJ0SXRlbSB9IGZyb20gJ0BqYW0vY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1wbHVnaW4nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgcGx1Z2luIHdvcmtzIVxuICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiaW5jcmVtZW50KClcIj4gaW5jcmVtZW50IGZyb20gcGx1Z2luISA8L2J1dHRvbj5cbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgUGx1Z2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4pIHsgfVxuICBpbmNyZW1lbnQoKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChpbmNyZW1lbnRDYXJ0SXRlbSgxKSk7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUGx1Z2luQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1BsdWdpbkNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgUGx1Z2luTW9kdWxlIHsgfVxuIl19
