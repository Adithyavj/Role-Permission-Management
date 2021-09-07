import { PermissionType } from "../_models/permissionType";
import { Resource } from "../_models/resource";
import { Permission } from "./Permission";
import { PermissionBase } from "./PermissionBase";

export class UserPermission extends PermissionBase {
    constructor() {
        super();
        this.permissions = [
            new Permission(Resource.BILL, [
                PermissionType.READ,
                PermissionType.ORDER
            ]),
            new Permission(Resource.PASTA, [
                PermissionType.READ,
                PermissionType.ORDER
            ]),
            new Permission(Resource.PIZZA, [
                PermissionType.READ,
                PermissionType.ORDER
            ])
        ];
    }

}