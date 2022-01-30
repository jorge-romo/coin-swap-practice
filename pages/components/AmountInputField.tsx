import React from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormHelperText from '@mui/material/FormHelperText'

interface AmountInputFieldProps {
	sx: Object,
	fieldInfo: {
		value: number,
		isValidValue: boolean,
		errorMsg: string
	},
	setFieldInfo: React.Dispatch<React.SetStateAction<{
		value: number,
		isValidValue: boolean,
		errorMsg: string
	}>>,
}

export default function AmountInputField(props: AmountInputFieldProps) {
	const { sx, fieldInfo, setFieldInfo } = props

	function handleChange(e: React.ChangeEvent<HTMLInputElement>){
		const amount = Number(e.target.value)
		if (amount < 0){
			setFieldInfo({
				value: amount,
				isValidValue: false,
				errorMsg: "Number Must Be Positive"
			})
			return
		}
		if (amount > 0 && amount < 0.1){
			setFieldInfo({
				value: amount,
				isValidValue: false,
				errorMsg: "Minimum value is 0.1"
			})
			return
		}
		if (amount > 100){
			setFieldInfo({
				value: amount,
				isValidValue: false,
				errorMsg: "Maximum value is 100"
			})
			return	
		}
		// ran when input is confirmed to be valid
		setFieldInfo({
			value: amount,
			isValidValue: true,
			errorMsg: ""
		})

	}

	return (
		<Grid sx={sx}>
			<TextField id="outlined-basic" onChange={handleChange} value={fieldInfo.value} label="amount" variant="outlined" size="small" sx={{ width: '100%'}}
				type="number" error={!fieldInfo.isValidValue ? true : false} helperText={fieldInfo.errorMsg} />
			{/* <FormHelperText>Max to use all your funds</FormHelperText> */}
		</Grid>
	)
}