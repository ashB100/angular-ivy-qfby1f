import { Component, Input, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  form: FormGroup;

  get hsla() {
    return this.form.get('hsla');
  }
  get hue() {
    return this.hsla.value['hue'];
  }

  get saturation() {
    return this.hsla.value['saturation'];
  }

  get lightness() {
    return this.hsla.value['lightness'];
  }

  get opacity() {
    return this.hsla.value['opacity'];
  }
  
  @HostBinding('style.--user-selected-color') get hslaColor() {
    return `hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${this.opacity})`;
  }

  @HostBinding('style.--background-blend-mode') get backgroundBlendMode() {
    return this.form.get('backgroundBlendMode').value['mode'];
  }

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      hsla: fb.control({
        hue: 20,
        saturation: 100,
        lightness: 65,
        opacity: 0.5,
      }),
      backgroundBlendMode: fb.control({
        mode: 'hard-light'
      })
    });
  }
}
