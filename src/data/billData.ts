import { IBill } from '../interfaces';

export const billData: IBill = {
	id: '1',
	members: [
		{ id: '1', name: 'Yun' },
		{ id: '2', name: 'Diego' },
		{ id: '3', name: 'María' }
	],
	payments: [
		{
			id: '101',
			amount: 1200.0,
			name: 'Hotel',
			category: { id: '4', name: 'Lodging' },
			date: new Date(),
			method: { id: '2', name: 'Card' },
			involvedMembers: [
				{ id: '1', name: 'Yun' },
				{ id: '2', name: 'Diego' },
				{ id: '3', name: 'Maria' }
			]
		},
		{
			id: '102',
			amount: 500.0,
			name: 'Sushi',
			category: { id: '1', name: 'Food' },
			date: new Date(),
			method: { id: '2', name: 'Card' },
			involvedMembers: [
				{ id: '1', name: 'Yun' },
				{ id: '2', name: 'Diego' }
			]
		},
		{
			id: '103',
			amount: 600.0,
			name: 'Uber',
			category: { id: '3', name: 'Transportation' },
			date: new Date(),
			method: { id: '1', name: 'Cash' },
			involvedMembers: [
				{ id: '2', name: 'Diego' },
				{ id: '1', name: 'Maria' }
			]
		}
	]
};
