import { Role } from "../_models/role";
import { AdminPermission } from "./AdminPermission";
import { PermissionBase } from "./PermissionBase";
import { SuperuserPermission } from "./SuperuserPermission";
import { UnknownPermission } from "./UnknownPermission";
import { UserPermission } from "./UserPermission";

export class PermissionsFactory {
    public static instance: PermissionBase;
    private constructor() {

    }

    public static getInstance() {
        if (this.instance) {
            return this.instance;
        } else {
            const role = localStorage.getItem('role');
            switch (role) {
                case Role.SUPERUSER:
                    this.instance = new SuperuserPermission();
                    break;
                case Role.ADMIN:
                    this.instance = new AdminPermission();
                    break;
                case Role.USER:
                    this.instance = new UserPermission();
                    break;
                case Role.UNKNOWN:
                    this.instance = new UnknownPermission();
                    break;
                default:
                    this.instance = new UnknownPermission();
                    break;
            }
        }

    }
}