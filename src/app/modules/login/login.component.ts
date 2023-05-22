import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isRegErrorMassage = '';
  submitClicked = false;
  validationMessages: any = {
    userName: {
      required: 'Email is required',
    },
    password: {
      required: 'Password is required',
    }
  };

  formError: any = {
    userName: '',
    password: ''
  }

  form: FormGroup = new FormGroup({
    userName: new FormControl(null, { validators: [Validators.required], updateOn: 'blur' }),
    password: new FormControl(null, { validators: [Validators.required], updateOn: 'blur' })
  });

  @Output() goToRegister: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
    this.validateForm();
  }

  onInputChange(event: any) {
    console.log(event);
  }

  validateForm(): void {
    this.form.valueChanges.subscribe(value => {
      for (let key in value) {
        if (this.form.get(key)?.errors) {
          const errors = this.form.get(key)?.errors ?? {};
          for (let val in errors) {
            if (errors[val] && this.form.get(key)?.invalid && this.form.get(key)?.dirty) {
              this.formError[key] = this.validationMessages[key][val]
            }
          }
        } else {
          this.formError[key] = ''
        }
      }
    }

    )
  }

}
