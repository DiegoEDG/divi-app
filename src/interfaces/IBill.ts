export interface IBill {
	id: string;
	members: IMember[];
	payments: IPayment[];
}
export interface IMember {
	id: string;
	name: string;
}
export interface IPayment {
	id: string;
	amount: number;
	name: string;
	category: ICategory;
	date: Date;
	method: IMethod;
	involvedMembers: IMember[];
}
export interface ICategory {
	id: string;
	name: string;
}
export interface IMethod {
	id: string;
	name: string;
}
