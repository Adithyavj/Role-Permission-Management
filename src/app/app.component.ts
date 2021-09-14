import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Role } from './_models/role';
import { PermissionManagerService } from './_services/permission-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public form: FormGroup;

  constructor(private permissionManagerService: PermissionManagerService, private fb: FormBuilder) {

  }
  
  ngOnInit(): void {
    this.permissionManagerService.authAs(localStorage.getItem('role') as Role);
    this.buildForm();
  }

  buildForm() {
    const currentRole = localStorage.getItem('role') === null
      ? Role.UNKNOWN
      : localStorage.getItem('role');

    this.form = this.fb.group({
      role: [currentRole, [Validators.required]]
    });
  }

  loginAs() {
    this.permissionManagerService.authAs(this.form.get('role').value as Role);
    location.reload();
  }

  getRole() {
    return localStorage.getItem('role');
  }
}
