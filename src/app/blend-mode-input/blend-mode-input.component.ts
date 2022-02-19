import { Component, forwardRef } from '@angular/core';

import { FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-blend-mode-input',
  templateUrl: './blend-mode-input.component.html',
  styleUrls: ['./blend-mode-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => BlendModeInputComponent)
    }
  ]
})
export class BlendModeInputComponent implements ControlValueAccessor {
  blendModeOptions = ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity'];

  form = new FormGroup({
    mode: new FormControl,
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