import { Injectable } from '@angular/core';
import { PermissionBase } from '../_classes/PermissionBase';
import { PermissionsFactory } from '../_classes/PermissionsFactory';
import { PermissionType } from '../_models/permissionType';
import { Resource } from '../_models/resource';
import { Role } from '../_models/role';

@Injectable({
  providedIn: 'root'
})
export class PermissionManagerService {
  private permissions: PermissionBase;

  constructor() {
    this.permissions = PermissionsFactory.getInstance();
   }

  // receives a permission type as parameter, iterates the user’s permissions and returns true if found.
  isGranted(resource: Resource, permission: PermissionType) {
    
    for (const res of this.permissions.permissions) {
      if (resource === res.resource) {
        for (const perm of res.permissions) {
          if (perm === permission) {
            return true;
          }
        }
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
