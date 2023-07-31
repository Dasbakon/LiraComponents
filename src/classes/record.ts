import { writable } from "svelte/store";

export class Record {
    readonly date: string;
    readonly value: number;
    readonly type: string;

    constructor(date: string, value: number, type: string) {
        this.date = date;
        this.value = value;
        this.type = type;
    }
}

export const records = writable<Record[]>([]);