import * as i0 from '@angular/core';
import { EventEmitter, Component, ViewEncapsulation, Input, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';

class ThreeWayToggleComponent {
    constructor() {
        this.switchtoggle = 'na';
        this.labelValue = '';
        this.toggleValue = new EventEmitter();
    }
    ngOnInit() {
        this.idValue = this.labelValue.replace(/\s/g, "").replace("?", "");
    }
    onSelectionChange(value) {
        this.toggleValue.emit(this.switchtoggle);
    }
}
ThreeWayToggleComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.4", ngImport: i0, type: ThreeWayToggleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ThreeWayToggleComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.4", type: ThreeWayToggleComponent, selector: "three-way-toggle", inputs: { labelValue: "labelValue" }, outputs: { toggleValue: "toggleValue" }, ngImport: i0, template: `
    <ng-container>
      <div class="form-wrap">
        <div class="form-group">
          <form>
            <fieldset id="{{idValue}}">
              <label>{{labelValue}}</label>
              <div class="pressed-bg">
                <div class="switch-toggle switch-3 switch-candy" [ngClass]="{
                          na: switchtoggle == 'na',
                          yes: switchtoggle == 'yes',
                          no: switchtoggle == 'no'
                        }">
                  <div class="tri-switch-wrap">
                    <input id="no" name="state-{{idValue}}" value="no" [checked]="switchtoggle === 'no'" type="radio"
                      (change)="onSelectionChange('no')" [(ngModel)]="switchtoggle">
                    <label for="no" class="for-no"><i class="fa fa-check"></i></label>
                  </div>
                  <div class="tri-switch-wrap">
                    <input id="na" name="state-{{idValue}}" value="na" [checked]="switchtoggle === 'na'" type="radio"
                      checked="checked" (change)="onSelectionChange('na')" [(ngModel)]="switchtoggle">
                    <label for="na"></label>
                  </div>
                  <div class="tri-switch-wrap">
                    <input id="yes" name="state-{{idValue}}" value="yes" [checked]="switchtoggle === 'yes'" type="radio"
                      (change)="onSelectionChange('yes')" [(ngModel)]="switchtoggle">
                    <label for="yes"><i class="fa fa-times"></i></label>
                  </div>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </ng-container>
  `, isInline: true, styles: ["@import\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css\";.no{background-image:linear-gradient(to right,#8f2b2361,#ff4f6bde);transition:all .3s}.yes{background-image:linear-gradient(to right,#01bf00cc,#96e994);transition:all .3s}.na{background-image:linear-gradient(to right,#01bf00cc,#ff4f6bde);transition:all .3s}.pressed-bg{border:double 3px #bfbfbf24;border-radius:50px;background-image:linear-gradient(white,white),linear-gradient(to bottom,#e7e7e7,#dfdfdf33);background-origin:border-box;display:inline-block;background-clip:content-box,border-box;box-shadow:inset 2px 2px 5px #d7d7d7}.form-wrap{padding:20px}.switch-toggle{display:inline-flex;border-radius:50px;padding:2px}.tri-switch-wrap,.pressed-bg{position:relative;display:inline-flex;align-items:center}.tri-switch-wrap input{cursor:pointer;height:1.2rem;width:1.2rem;position:absolute;opacity:0;z-index:1}.tri-switch-wrap label{top:0;height:1.2rem;width:1.2rem;border-radius:50%;display:flex;align-items:center;justify-content:space-evenly}.tri-switch-wrap label i{opacity:.2}.tri-switch-wrap input:checked~label{background-color:#f7f7f7}.tri-switch-wrap input:checked~label i{opacity:0}.tri-switch-wrap label:after{content:\"\";position:absolute;display:none}fieldset{display:inline-block}fieldset>label{display:inline-block;background:none}\n"], directives: [{ type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.RadioControlValueAccessor, selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]", inputs: ["name", "formControlName", "value"] }, { type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.4", ngImport: i0, type: ThreeWayToggleComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'three-way-toggle',
                    template: `
    <ng-container>
      <div class="form-wrap">
        <div class="form-group">
          <form>
            <fieldset id="{{idValue}}">
              <label>{{labelValue}}</label>
              <div class="pressed-bg">
                <div class="switch-toggle switch-3 switch-candy" [ngClass]="{
                          na: switchtoggle == 'na',
                          yes: switchtoggle == 'yes',
                          no: switchtoggle == 'no'
                        }">
                  <div class="tri-switch-wrap">
                    <input id="no" name="state-{{idValue}}" value="no" [checked]="switchtoggle === 'no'" type="radio"
                      (change)="onSelectionChange('no')" [(ngModel)]="switchtoggle">
                    <label for="no" class="for-no"><i class="fa fa-check"></i></label>
                  </div>
                  <div class="tri-switch-wrap">
                    <input id="na" name="state-{{idValue}}" value="na" [checked]="switchtoggle === 'na'" type="radio"
                      checked="checked" (change)="onSelectionChange('na')" [(ngModel)]="switchtoggle">
                    <label for="na"></label>
                  </div>
                  <div class="tri-switch-wrap">
                    <input id="yes" name="state-{{idValue}}" value="yes" [checked]="switchtoggle === 'yes'" type="radio"
                      (change)="onSelectionChange('yes')" [(ngModel)]="switchtoggle">
                    <label for="yes"><i class="fa fa-times"></i></label>
                  </div>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </ng-container>
  `,
                    styles: [
                        `
      @import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css);

      .no {
          background-image: linear-gradient(to right, #8f2b2361, #ff4f6bde);
          -webkit-transition: all 300ms;
          -moz-transition: all 300ms;
          transition: all 300ms;
      }

      .yes {
          background-image: linear-gradient(to right, #01bf00cc, #96e994);
          -webkit-transition: all 300ms;
          -moz-transition: all 300ms;
          transition: all 300ms;
      }

      .na {
          background-image: linear-gradient(to right, #01bf00cc, #ff4f6bde);
          -webkit-transition: all 300ms;
          -moz-transition: all 300ms;
          transition: all 300ms;
      }

      .pressed-bg {
          border: double 3px #bfbfbf24;
          border-radius: 50px;
          background-image: linear-gradient(white, white), linear-gradient(to bottom, #e7e7e7, #dfdfdf33);
          background-origin: border-box;
          display: inline-block;
          background-clip: content-box, border-box;
          box-shadow: inset 2px 2px 5px #d7d7d7;
      }

      .form-wrap {
          padding: 20px;
      }

      .switch-toggle {
          display: inline-flex;
          border-radius: 50px;
          padding: 2px;
      }

      .tri-switch-wrap,
      .pressed-bg {
          position: relative;
          display: inline-flex;
          align-items: center;
      }

      .tri-switch-wrap input {
          cursor: pointer;
          height: 1.2rem;
          width: 1.2rem;
          position: absolute;
          opacity: 0;
          z-index: 1;
      }

      .tri-switch-wrap label {
          top: 0;
          height: 1.2rem;
          width: 1.2rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
      }

      .tri-switch-wrap label i {
          opacity: 0.2;
      }

      .tri-switch-wrap input:checked~label {
          background-color: #f7f7f7;
      }

      .tri-switch-wrap input:checked~label i {
          opacity: 0;
      }

      .tri-switch-wrap label:after {
          content: "";
          position: absolute;
          display: none;
      }

      fieldset {
          display: inline-block;
      }

      fieldset>label {
          display: inline-block;
          background: none;
      }
  `
                    ],
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { labelValue: [{
                type: Input
            }], toggleValue: [{
                type: Output
            }] } });

class ThreeWayToggleModule {
}
ThreeWayToggleModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.4", ngImport: i0, type: ThreeWayToggleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ThreeWayToggleModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.4", ngImport: i0, type: ThreeWayToggleModule, declarations: [ThreeWayToggleComponent], imports: [CommonModule,
        FormsModule], exports: [ThreeWayToggleComponent] });
ThreeWayToggleModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.4", ngImport: i0, type: ThreeWayToggleModule, imports: [[
            CommonModule,
            FormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.4", ngImport: i0, type: ThreeWayToggleModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ThreeWayToggleComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule
                    ],
                    exports: [
                        ThreeWayToggleComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of three-way-toggle
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ThreeWayToggleComponent, ThreeWayToggleModule };
//# sourceMappingURL=three-way-toggle.mjs.map
