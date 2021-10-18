import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwnersServiceService } from 'src/app/shared/owners.service';
import { FormControl, Validators, FormGroup, FormArray } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  owner: any;
  myForm: FormGroup | any;
  flag: any;

  constructor(
    private ownerService: OwnersServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.flag = false;
    let id;
    this.activatedRoute.params.subscribe((res) => {
      id = res['id'];
      this.ownerService.getOwner(id).subscribe((data) => {
      this.owner = data;
      });
    });
  }

  createFormGroup() {
    this.myForm = new FormGroup({
      id: new FormControl(this.owner.id, Validators.required),
      aLastName: new FormControl(this.owner.aLastName, Validators.required),
      aFirstName: new FormControl(this.owner.aFirstName, Validators.required),
      aMiddleName: new FormControl(this.owner.aMiddleName, Validators.required),
      aCars: new FormArray([]),
    });
  }

  log() {
    this.flag = true;
    this.createFormGroup();
    this.createFormsArray(this.owner.aCars.length);
  }

  get cars(): FormArray {
    return this.myForm.get('aCars') as FormArray;
  }

  createFormsArray(num: any) {
    for (let i = 0; i < num; i++) {
      this.cars.push(
        new FormGroup({
          number: new FormControl(this.owner.aCars[i].number, [
            RxwebValidators.unique(),
            Validators.pattern('[A-Z]{2}\\d{4}[A-Z]{2}'),
            Validators.required,
          ]),
          manufacturer: new FormControl(
            this.owner.aCars[i].manufacturer,
            Validators.required
          ),
          model: new FormControl(
            this.owner.aCars[i].model,
            Validators.required
          ),
          year: new FormControl(this.owner.aCars[i].year, [Validators.min(1990),Validators.required, Validators.pattern('\\d{4}')]),
        })
      );
    }
  }

  onSubmit() {
    this.ownerService.editOwner(this.myForm.value).subscribe((response) => {});
    this.router.navigate(['main']);
  }

  deleteCar(index: any) {
    this.owner.aCars.splice(index, 1);
    this.cars.removeAt(index);
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
        number: new FormControl('', [
          Validators.pattern('[A-Z]{2}\\d{4}[A-Z]{2}'),
          Validators.required,
          RxwebValidators.unique(),
        ]),
        manufacturer: new FormControl('', Validators.required),
        model: new FormControl('', Validators.required),
        year: new FormControl('', [Validators.min(1990),Validators.required, Validators.pattern('\\d{4}')]),
      })
    );
  }
}
