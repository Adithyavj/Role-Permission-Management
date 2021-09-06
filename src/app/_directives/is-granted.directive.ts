import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { PermissionType } from '../_models/permissionType';
import { PermissionManagerService } from '../_services/permission-manager.service';

@Directive({
  selector: '[appIsGranted]'
})
export class IsGrantedDirective {

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private permissionManagerService: PermissionManagerService) { }

  @Input() set appIsGranted(permission: PermissionType) {
    this.isGranted(permission);
  }

  isGranted(permission: PermissionType) {
    if (this.permissionManagerService.isGranted(permission)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

}
