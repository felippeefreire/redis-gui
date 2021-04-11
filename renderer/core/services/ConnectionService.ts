import {IConnection} from "../interfaces/IConnection";

const connections = [
    {
        id: '1',
        name: 'example'
    }
];

export class ConnectionService {

    static list(): IConnection[] {
        return connections;
    }

    static async delete(connection: IConnection): Promise<void> {
    }
}
