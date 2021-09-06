import { PermissionType } from "../_models/permissionType";
import { PermissionBase } from "./PermissionBase";

export class UnknownPermission extends PermissionBase {
    constructor() {
        super();
        this.permissions = [
            PermissionType.CREATE, PermissionType.READ,
            PermissionType.UPDATE
        ];
    }

}