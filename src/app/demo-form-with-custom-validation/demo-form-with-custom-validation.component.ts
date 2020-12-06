import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-demo-form-with-custom-validation',
  templateUrl: './demo-form-with-custom-validation.component.html',
  styleUrls: ['./demo-form-with-custom-validation.component.css']
})
export class DemoFormWithCustomValidationComponent implements OnInit {
myForm: FormGroup;
sku:AbstractControl
  constructor(fb: FormBuilder) {
    this.myForm=fb.group({
      sku:['',Validators.compose([
        Validators.required,this.skuValidator
      ])]
    }) 
this.sku=this.myForm.controls['sku'];
  }
skuValidator(control:FormControl): { [ s: string ] :boolean} {
if (!control.value.match(/^123/)){
  return {invalidSku:true};
}
}
onSubmit(value:string){
console.log("Your Value:",value)
}
  ngOnInit(): void {
  }

}
