import { Metric } from './metric';

export class Log {
    date: Date;
    metrics: Metric[];
    comments: string;

    public metricNames(): string[] {
        return this.metrics.reduce(
            (previousValue, currentValue) => previousValue.concat(currentValue.name)
            , []
        );
    }

    public metricValues(): number[] {
        return this.metrics.reduce(
            (previousValue, currentValue) => previousValue.concat(currentValue.value)
            , []
        );
    }
}
