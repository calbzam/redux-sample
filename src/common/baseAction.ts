export interface BaseAction {
    type: string;
    payload: any;
    meta?: any;
}