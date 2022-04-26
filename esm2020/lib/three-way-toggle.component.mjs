import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
export class ThreeWayToggleComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhyZWUtd2F5LXRvZ2dsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy90aHJlZS13YXktdG9nZ2xlL3NyYy9saWIvdGhyZWUtd2F5LXRvZ2dsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQTZJbEcsTUFBTSxPQUFPLHVCQUF1QjtJQU1sQztRQUpBLGlCQUFZLEdBQVcsSUFBSSxDQUFDO1FBQ25CLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDdkIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBRW5DLENBQUM7SUFFakIsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELGlCQUFpQixDQUFDLEtBQVU7UUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzNDLENBQUM7O29IQWRVLHVCQUF1Qjt3R0FBdkIsdUJBQXVCLHVJQXpJeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUNUOzJGQXNHVSx1QkFBdUI7a0JBM0luQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQ1Q7b0JBQ0QsTUFBTSxFQUFFO3dCQUNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnR0Q7cUJBQ0E7b0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzBFQUlVLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0ksV0FBVztzQkFBcEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RocmVlLXdheS10b2dnbGUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS13cmFwXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICA8ZmllbGRzZXQgaWQ9XCJ7e2lkVmFsdWV9fVwiPlxuICAgICAgICAgICAgICA8bGFiZWw+e3tsYWJlbFZhbHVlfX08L2xhYmVsPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJlc3NlZC1iZ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzd2l0Y2gtdG9nZ2xlIHN3aXRjaC0zIHN3aXRjaC1jYW5keVwiIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmE6IHN3aXRjaHRvZ2dsZSA9PSAnbmEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB5ZXM6IHN3aXRjaHRvZ2dsZSA9PSAneWVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbm86IHN3aXRjaHRvZ2dsZSA9PSAnbm8nXG4gICAgICAgICAgICAgICAgICAgICAgICB9XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHJpLXN3aXRjaC13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5vXCIgbmFtZT1cInN0YXRlLXt7aWRWYWx1ZX19XCIgdmFsdWU9XCJub1wiIFtjaGVja2VkXT1cInN3aXRjaHRvZ2dsZSA9PT0gJ25vJ1wiIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJvblNlbGVjdGlvbkNoYW5nZSgnbm8nKVwiIFsobmdNb2RlbCldPVwic3dpdGNodG9nZ2xlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJub1wiIGNsYXNzPVwiZm9yLW5vXCI+PGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiPjwvaT48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHJpLXN3aXRjaC13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5hXCIgbmFtZT1cInN0YXRlLXt7aWRWYWx1ZX19XCIgdmFsdWU9XCJuYVwiIFtjaGVja2VkXT1cInN3aXRjaHRvZ2dsZSA9PT0gJ25hJ1wiIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD1cImNoZWNrZWRcIiAoY2hhbmdlKT1cIm9uU2VsZWN0aW9uQ2hhbmdlKCduYScpXCIgWyhuZ01vZGVsKV09XCJzd2l0Y2h0b2dnbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hXCI+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRyaS1zd2l0Y2gtd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJ5ZXNcIiBuYW1lPVwic3RhdGUte3tpZFZhbHVlfX1cIiB2YWx1ZT1cInllc1wiIFtjaGVja2VkXT1cInN3aXRjaHRvZ2dsZSA9PT0gJ3llcydcIiB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwib25TZWxlY3Rpb25DaGFuZ2UoJ3llcycpXCIgWyhuZ01vZGVsKV09XCJzd2l0Y2h0b2dnbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInllc1wiPjxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIj48L2k+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICBAaW1wb3J0IHVybChodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjYuMS9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MpO1xuXG4gICAgICAubm8ge1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzhmMmIyMzYxLCAjZmY0ZjZiZGUpO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbiAgICAgIH1cblxuICAgICAgLnllcyB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDFiZjAwY2MsICM5NmU5OTQpO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbiAgICAgIH1cblxuICAgICAgLm5hIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMWJmMDBjYywgI2ZmNGY2YmRlKTtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzMDBtcztcbiAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAzMDBtcztcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gICAgICB9XG5cbiAgICAgIC5wcmVzc2VkLWJnIHtcbiAgICAgICAgICBib3JkZXI6IGRvdWJsZSAzcHggI2JmYmZiZjI0O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHdoaXRlLCB3aGl0ZSksIGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNlN2U3ZTcsICNkZmRmZGYzMyk7XG4gICAgICAgICAgYmFja2dyb3VuZC1vcmlnaW46IGJvcmRlci1ib3g7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3gsIGJvcmRlci1ib3g7XG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDJweCA1cHggI2Q3ZDdkNztcbiAgICAgIH1cblxuICAgICAgLmZvcm0td3JhcCB7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIH1cblxuICAgICAgLnN3aXRjaC10b2dnbGUge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgfVxuXG4gICAgICAudHJpLXN3aXRjaC13cmFwLFxuICAgICAgLnByZXNzZWQtYmcge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAudHJpLXN3aXRjaC13cmFwIGlucHV0IHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgaGVpZ2h0OiAxLjJyZW07XG4gICAgICAgICAgd2lkdGg6IDEuMnJlbTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgfVxuXG4gICAgICAudHJpLXN3aXRjaC13cmFwIGxhYmVsIHtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAxLjJyZW07XG4gICAgICAgICAgd2lkdGg6IDEuMnJlbTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgfVxuXG4gICAgICAudHJpLXN3aXRjaC13cmFwIGxhYmVsIGkge1xuICAgICAgICAgIG9wYWNpdHk6IDAuMjtcbiAgICAgIH1cblxuICAgICAgLnRyaS1zd2l0Y2gtd3JhcCBpbnB1dDpjaGVja2VkfmxhYmVsIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICAgICAgfVxuXG4gICAgICAudHJpLXN3aXRjaC13cmFwIGlucHV0OmNoZWNrZWR+bGFiZWwgaSB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cblxuICAgICAgLnRyaS1zd2l0Y2gtd3JhcCBsYWJlbDphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgZmllbGRzZXQge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cblxuICAgICAgZmllbGRzZXQ+bGFiZWwge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgfVxuICBgXG4gIF0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgVGhyZWVXYXlUb2dnbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpZFZhbHVlOiBhbnk7XG4gIHN3aXRjaHRvZ2dsZTogc3RyaW5nID0gJ25hJztcbiAgQElucHV0KCkgbGFiZWxWYWx1ZTogc3RyaW5nID0gJyc7XG4gIEBPdXRwdXQoKSB0b2dnbGVWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pZFZhbHVlID0gdGhpcy5sYWJlbFZhbHVlLnJlcGxhY2UoL1xccy9nLCBcIlwiKS5yZXBsYWNlKFwiP1wiLCBcIlwiKTtcbiAgfVxuXG4gIG9uU2VsZWN0aW9uQ2hhbmdlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLnRvZ2dsZVZhbHVlLmVtaXQodGhpcy5zd2l0Y2h0b2dnbGUpO1xuICB9XG59XG4iXX0=