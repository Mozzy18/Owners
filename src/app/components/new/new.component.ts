import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { OwnersServiceService } from 'src/app/shared/owners.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
  myForm: FormGroup | any;
  flag:boolean|any
  owner:any

  constructor(private router: Router, private ownerService:OwnersServiceService) {
     this.owner={
      id:undefined,
              aLastName: undefined,
              aFirstName: undefined,
              aMiddleName: undefined,
              aCars: [
                {
                  number: undefined,
                  manufacturer: undefined,
                  model: undefined,
                  year: undefined
                }
               ]

    
    }
  }

  ngOnInit(): void {}

  get cars(): FormArray {
    return this.myForm.get('aCars') as FormArray;
  }

  createFormGroup() {
    this.myForm = new FormGroup({
      id: new FormControl('', Validators.required),
      aLastName: new FormControl('', Validators.required),
      aFirstName: new FormControl('', Validators.required),
      aMiddleName: new FormControl('', Validators.required),
      aCars: new FormArray([]),
    });
  }

  createFormsArray(num: any) {
    for (let i = 0; i < num; i++) {
      this.cars.push(
        new FormGroup({
          number: new FormControl('', [
            Validators.pattern('[A-Z]{2}\\d{4}[A-Z]{2}'),
            Validators.required,
          ]),
          manufacturer: new FormControl('', Validators.required),
          model: new FormControl('', Validators.required),
          year: new FormControl('', [Validators.min(1990),Validators.required, Validators.pattern('\\d{4}')]),
        })
      );
    }
  }

  deleteCar(index:any){
    this.owner.aCars.splice(index,1)
    this.cars.removeAt(index)
  }

  log() {
    this.flag = true;
    this.createFormGroup();
    this.createFormsArray(this.owner.aCars.length);
  }

  addCar() {
    this.owner.aCars.push({
      number: undefined,
      manufacture: undefined,
      model: undefined,
      year: undefined,
    });
    this.cars.push(
      new FormGroup({
        number: new FormControl('',[Validators.pattern('[A-Z]{2}\\d{4}[A-Z]{2}'),Validators.required]),
        manufacturer: new FormControl('', Validators.required),
        model: new FormControl('', Validators.required),
        year: new FormControl('',[Validators.min(1990),Validators.required, Validators.pattern('\\d{4}')]),
      })
    );
  }

  onSubmit() {
    this.ownerService.createOwner(this.myForm.value).subscribe(res=>{})
    this.router.navigate(['main'])
  }
}
