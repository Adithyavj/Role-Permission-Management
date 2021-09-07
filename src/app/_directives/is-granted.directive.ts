import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { PermissionType } from '../_models/permissionType';
import { Resource } from '../_models/resource';
import { PermissionManagerService } from '../_services/permission-manager.service';

@Directive({
  selector: '[appIsGranted]'
})
export class IsGrantedDirective {

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private permissionManagerService: PermissionManagerService) { }

  @Input() set appIsGranted(permission: Array<string>) {
    this.isGranted(
      permission[0] as Resource,
      permission[1] as PermissionType
    );
  }

  isGranted(resource: Resource, permission: PermissionType) {
    if (this.permissionManagerService.isGranted(resource, permission)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

}
