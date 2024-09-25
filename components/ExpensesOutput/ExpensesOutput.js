import { View, StyleSheet } from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from '../../constants/styles';

const DUMMY_EXPENSES = [
	{
		id: 'e1',
		description: 'A pair of shoes',
		amount: 59.99,
		date: new Date('2024-08-20'),
	},
	{
		id: 'e2',
		description: 'Mobile Phone',
		amount: 1000,
		date: new Date('2023-10-15'),
	},
	{
		id: 'e3',
		description: 'Notebook',
		amount: 1399.99,
		date: new Date('2023-11-10'),
	},
	{
		id: 'e4',
		description: 'Chair',
		amount: 559.29,
		date: new Date('2024-09-17'),
	},
	{
		id: 'e5',
		description: 'House',
		amount: 413636.4,
		date: new Date('2024-09-27'),
	},
];

function ExpensesOutput({ expenses, expensesPeriod }) {
	return (
		<View style={styles.container}>
			<ExpensesSummary periodName={expensesPeriod} expenses={DUMMY_EXPENSES} />
			<ExpensesList expenses={DUMMY_EXPENSES} />
		</View>
	);
}

export default ExpensesOutput;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 24,
		paddingTop: 24,
		paddingBottom: 0,
		backgroundColor: GlobalStyles.colors.primary700,
	},
});
