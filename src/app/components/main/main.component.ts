import { Component, OnInit } from '@angular/core';
import { OwnersServiceService } from 'src/app/shared/owners.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  owners: any;
  constructor(private ownService: OwnersServiceService) {}

  ngOnInit(): void {
    this.ownService.getOwners().subscribe((res) => (this.owners = res));
  }

  deleteOwner(id: any) {
    this.ownService.deleteOwner(id).subscribe((res) => console.log(res));
    this.ownService.getOwners().subscribe((res) => (this.owners = res));
  }
}
