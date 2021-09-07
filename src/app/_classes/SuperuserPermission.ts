import { PermissionType } from "../_models/permissionType";
import { Resource } from "../_models/resource";
import { Permission } from "./Permission";
import { PermissionBase } from "./PermissionBase";

export class SuperuserPermission extends PermissionBase {
    constructor() {
        super();
        this.permissions = [
            new Permission(Resource.BILL, [
                PermissionType.CREATE, PermissionType.READ,
                PermissionType.UPDATE, PermissionType.DELETE,
                PermissionType.OTHER, PermissionType.ORDER
            ]),
            new Permission(Resource.PASTA, [
                PermissionType.CREATE, PermissionType.READ,
                PermissionType.UPDATE, PermissionType.DELETE,
                PermissionType.OTHER, PermissionType.ORDER
            ]),
            new Permission(Resource.PIZZA, [
                PermissionType.CREATE, PermissionType.READ,
                PermissionType.UPDATE, PermissionType.DELETE,
                PermissionType.OTHER, PermissionType.ORDER
            ]),
        ];
    }

}