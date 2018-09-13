"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("@ngrx/store");
var core_1 = require("@angular/core");
var core_2 = require("@jam/core");
var material_1 = require("@angular/material");
var PluginComponent = /** @class */ (function () {
    function PluginComponent(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    PluginComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.store.dispatch(core_2.addLinksToolbar({
            title: 'Plugin one',
            route: 'one'
        }));
    };
    /**
     * @return {?}
     */
    PluginComponent.prototype.increment = /**
     * @return {?}
     */
    function () {
        this.store.dispatch(core_2.incrementCartItem(1));
    };
    PluginComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'lib-plugin',
                    template: "\n    <p>\n      plugin works!\n      <button mat-button (click)=\"increment()\"> increment from plugin! </button>\n    </p>\n  "
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
var router_1 = require("@angular/router");
/** @type {?} */
exports.pluginRoutes = [
    {
        path: 'a',
        component: PluginComponent
    }
];
var PluginRoutingModule = /** @class */ (function () {
    function PluginRoutingModule() {
    }
    PluginRoutingModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        router_1.RouterModule.forChild(exports.pluginRoutes)
                    ]
                },] }
    ];
    return PluginRoutingModule;
}());
exports.PluginRoutingModule = PluginRoutingModule;
var PluginModule = /** @class */ (function () {
    function PluginModule() {
    }
    PluginModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        PluginRoutingModule,
                        material_1.MatButtonModule
                    ],
                    declarations: [PluginComponent],
                    exports: [PluginComponent],
                    entryComponents: [PluginComponent]
                },] }
    ];
    return PluginModule;
}());
exports.PluginModule = PluginModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2luLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BqYW0vcGx1Z2luLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEscUNBQW9DO0FBQ3BDLHNDQUE0RDtBQUM1RCxrQ0FBeUU7QUFDekUsOENBQW9EOztJQWNsRCx5QkFBb0IsS0FBc0I7UUFBdEIsVUFBSyxHQUFMLEtBQUssQ0FBaUI7S0FBSzs7OztJQUMvQyxrQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxzQkFBZSxDQUFDO1lBQ2xDLEtBQUssRUFBRSxZQUFZO1lBQ25CLEtBQUssRUFBRSxLQUFLO1NBQ2IsQ0FBQyxDQUFDLENBQUM7S0FDTDs7OztJQUNELG1DQUFTOzs7SUFBVDtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLHdCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDM0M7O2dCQXJCRixnQkFBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsa0lBS1Q7aUJBRUY7Ozs7Z0JBZFEsYUFBSzs7MEJBQWQ7O0FBZWEsMENBQWU7Ozs7O0FBYzVCLDBDQUF1RDs7QUFFMUMsUUFBQSxZQUFZLEdBQVc7SUFDbEM7UUFDRSxJQUFJLEVBQUUsS0FBSztRQUNYLFNBQVMsRUFBRSxlQUFlO0tBQzNCO0NBQ0Y7Ozs7O2dCQUVBLGVBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AscUJBQVksQ0FBQyxRQUFRLENBQ25CLG9CQUFZLENBQ2I7cUJBQ0Y7aUJBQ0Y7OzhCQTVDRDs7QUE2Q2Esa0RBQW1COzs7OztnQkFHL0IsZUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxtQkFBbUI7d0JBQ25CLDBCQUFlO3FCQUNoQjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUM7b0JBQy9CLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQztvQkFDMUIsZUFBZSxFQUFFLENBQUMsZUFBZSxDQUFDO2lCQUNuQzs7dUJBeEREOztBQXlEYSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXBwU3RhdGUsIGluY3JlbWVudENhcnRJdGVtLCBhZGRMaW5rc1Rvb2xiYXIgfSBmcm9tICdAamFtL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1wbHVnaW4nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8cD5cclxuICAgICAgcGx1Z2luIHdvcmtzIVxyXG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cImluY3JlbWVudCgpXCI+IGluY3JlbWVudCBmcm9tIHBsdWdpbiEgPC9idXR0b24+XHJcbiAgICA8L3A+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQbHVnaW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4pIHsgfVxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhZGRMaW5rc1Rvb2xiYXIoe1xyXG4gICAgICB0aXRsZTogJ1BsdWdpbiBvbmUnLFxyXG4gICAgICByb3V0ZTogJ29uZSdcclxuICAgIH0pKTtcclxuICB9XHJcbiAgaW5jcmVtZW50KCkge1xyXG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChpbmNyZW1lbnRDYXJ0SXRlbSgxKSk7XHJcbiAgfVxyXG59XHJcblxyXG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5leHBvcnQgY29uc3QgcGx1Z2luUm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogJ29uZScsXHJcbiAgICBjb21wb25lbnQ6IFBsdWdpbkNvbXBvbmVudFxyXG4gIH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFxyXG4gICAgICBwbHVnaW5Sb3V0ZXNcclxuICAgIClcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQbHVnaW5Sb3V0aW5nTW9kdWxlIHsgfVxyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgUGx1Z2luUm91dGluZ01vZHVsZSxcclxuICAgIE1hdEJ1dHRvbk1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbUGx1Z2luQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbUGx1Z2luQ29tcG9uZW50XSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtQbHVnaW5Db21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQbHVnaW5Nb2R1bGUgeyB9XHJcbiJdfQ==
