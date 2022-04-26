import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ThreeWayToggleComponent implements OnInit {
    idValue: any;
    switchtoggle: string;
    labelValue: string;
    toggleValue: EventEmitter<string>;
    constructor();
    ngOnInit(): void;
    onSelectionChange(value: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThreeWayToggleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThreeWayToggleComponent, "three-way-toggle", never, { "labelValue": "labelValue"; }, { "toggleValue": "toggleValue"; }, never, never>;
}
