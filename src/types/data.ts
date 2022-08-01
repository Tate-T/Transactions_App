export interface ITransaction{
    id: number;
    name?: string;
    status?: string;
    type?: string;
    amount?: number;
    action?: boolean;
    isSelected?: boolean
}

export type Filter = string;

//   {ISelect};