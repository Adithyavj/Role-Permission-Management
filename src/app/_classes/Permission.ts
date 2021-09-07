import { PermissionType } from "../_models/permissionType";
import { Resource } from "../_models/resource";

export class Permission {
    public resource: Resource;
    public permissions: PermissionType[];

    constructor(resource: Resource, permissions: PermissionType[]) {
        this.resource = resource;
        this.permissions = permissions;
    }
}