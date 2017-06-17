import { Log } from './log';

export class Project {
    id: string;
    name: string;
    last_modified: Date;
    history: Log[];

    public latest(): Log {
        return Object.assign(new Log(), this.history.sort((a: Log, b: Log) => {
            return a.date.getTime() - b.date.getTime();
        })[0]);
    }
}
