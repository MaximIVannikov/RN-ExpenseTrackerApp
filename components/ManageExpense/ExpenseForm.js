import { View, StyleSheet, Text, Alert } from "react-native";
import { useState } from "react";
import Input from "./Input";
import Button from "../UI/Button";
import { getFormatedDate } from "../../util/date";
import { GlobalStyles } from "../../constants/styles";

function ExpenseForm ({submitButtonLabel, onCancel, onSubmit, defaultValues}) {
    
    const [inputs, setInputs] = useState({
        amount: {
            value: defaultValues ? defaultValues.amount.toString() : '',
            // isValid: defaultValues ? true : false,
            // isValid: !!defaultValues,
            isValid: true,
        },
        date:
        {
            value: defaultValues ? getFormatedDate(defaultValues.date) : '',
            // isValid: defaultValues ? true : false,
            // isValid: !!defaultValues,
            isValid: true,
        },
         
        description: {
            value: defaultValues ? defaultValues.description : '',
            // isValid: defaultValues ? true : false,
            // isValid: !!defaultValues,
            isValid: true,
        } 
    });
        
    function inputChangedHandler(inputIdentifier ,enteredAmount) {
        setInputs((curInputs) => {
            return {
                ...curInputs,
                [inputIdentifier]: {value: enteredAmount, isValid: true},
            };
        });
    }
    
    function submitHandler() {
        const expenseData = {
            amount: +inputs.amount.value,
            date: new Date(inputs.date.value),
            description: inputs.description.value,
        };
        const isAmountValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const isDateValid = expenseData.date.toString() !== 'Invalid Date'; 
        const isDescriptionValid = expenseData.description.trim().length > 0;
        
        if(!isAmountValid || !isDateValid || !isDescriptionValid) {
            // show error
            // Alert.alert('Invalid input', 'Please check your input values');
            setInputs((curInputs) => {
                return {
                    amount: {value: curInputs.amount.value, isValid: isAmountValid},
                    date: {value: curInputs.date.value, isValid: isDateValid},
                    description: {value: curInputs.description.value, isValid: isDescriptionValid},
                };
            })
            return;
        }
        
        onSubmit(expenseData);
    }
    
    function cancelHandler() {
        setInputValues({
            amount: '',
            date: '',
            description: '',
        });
    }
    
    const formIsInvalid = !inputs.amount.isValid || !inputs.date.isValid || !inputs.description.isValid;
   
    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
            
                <Input label="Amount" style={styles.rowInput} invalid={!inputs.amount.isValid} textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: inputChangedHandler.bind(this, 'amount'),
                    placeholder: 'Amount',
                    value: inputs.amount.value,
                    
                }} />
                <Input label="Date" style={styles.rowInput} invalid={!inputs.date.isValid} textInputConfig={{
                    placeholder: 'YYY-MM-DD',
                    maxLength: 10,
                    onChangeText: inputChangedHandler.bind(this, 'date'),
                    value: inputs.date.value,
                }} />
            
            </View>
            
            <Input label="Description" invalid={!inputs.description.isValid} textInputConfig={{
                multiline: true,
                onChangeText: inputChangedHandler.bind(this, 'description'),
                // placeholder: 'Description',
                value: inputs.description.value,
                // autoCapitalize: 'none',
                // autoCorrect: false,
            }} />
            
            {formIsInvalid && <Text style={styles.errorText}>Invalid input values - please check your entered data!</Text>}
            <View style={styles.buttons}>
				<Button style={styles.button} mode='flat' onPress={onCancel}>
					Cancel
				</Button>
				<Button style={styles.button} onPress={submitHandler}>
					{submitButtonLabel}
				</Button>
			</View>
        
        
        </View>
    )
}

export default ExpenseForm;

const styles = StyleSheet.create({
    form: {
        marginTop: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center',
    },
    inputsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rowInput: {
        flex: 1,
    },
    
    buttons: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		minWidth: 120,
		marginHorizontal: 8,
	},
    errorText: {
        textAlign: 'center',
        color: GlobalStyles.colors.error500,
        margin: 8,
    }
    
})