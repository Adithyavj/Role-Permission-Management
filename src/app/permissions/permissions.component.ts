import { Component, Input, OnInit } from '@angular/core';
import { PermissionType } from '../_models/permissionType';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {

  @Input() resource: string;
  constructor() { }

  ngOnInit(): void {
  }

  public permissionKeys() {
    return Object.keys(PermissionType);
  }

}
