import { RowDataPacket } from "./node_modules/mysql2/index";

export interface Usuario extends RowDataPacket {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
}