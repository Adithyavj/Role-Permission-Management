import { Injectable } from '@angular/core';
import { PermissionBase } from '../_classes/PermissionBase';
import { PermissionsFactory } from '../_classes/PermissionsFactory';
import { PermissionType } from '../_models/permissionType';
import { Role } from '../_models/role';

@Injectable({
  providedIn: 'root'
})
export class PermissionManagerService {
  private permissions: PermissionBase;

  constructor() { }

  // receives a permission type as parameter, iterates the user’s permissions and returns true if found.
  isGranted(permission: PermissionType) {
    const permissions = PermissionsFactory.getInstance().permissions;
    for (let perm of permissions) {
      if (perm === permission) {
        return true;
      }
    }
    return false;
  }

  // demand a permission manager instance.
  authAs(role: Role) {
    localStorage.setItem('role',
      (role === null) ? Role.UNKNOWN : role
    );
    this.permissions = PermissionsFactory.getInstance();
  }
}
