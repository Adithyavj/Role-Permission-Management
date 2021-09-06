import { PermissionType } from "../_models/permissionType";
import { PermissionBase } from "./PermissionBase";

export class UserPermission extends PermissionBase {
    constructor() {
        super();
        this.permissions = [
            PermissionType.READ,
        ];
    }

}