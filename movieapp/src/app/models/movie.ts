import { RunningTimes } from "./running-times";

export interface Movie {

    title: string;
    year: number;
    director : string;
    cast: string;
    runningTimes: RunningTimes;
}
