import { Component, forwardRef } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormGroup, FormControl, NG_VALUE_ACCESSOR, NgControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-hsla-input',
  templateUrl: './hsla-input.component.html',
  styleUrls: ['./hsla-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => HslaInputComponent)
    }
  ]
})
export class HslaInputComponent implements ControlValueAccessor {
  form: FormGroup = new FormGroup({
    hue: new FormControl,
    saturation: new FormControl,
    lightness: new FormControl,
    opacity: new FormControl
  });

  onTouched: () => void = () => {};

  writeValue(v: any) {
    this.form.setValue(v, { emitEvent: false });
  }

  registerOnChange(fn: (v: any) => void) {
    this.form.valueChanges.subscribe(fn);
  }

  setDisabledState(disabled: boolean) {
    disabled ? this.form.disable() : this.form.enable();
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }
}