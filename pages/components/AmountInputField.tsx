import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormHelperText from '@mui/material/FormHelperText'

interface AmountInputFieldProps {
	sx: Object
}

export default function AmountInputField(props: AmountInputFieldProps) {
	const { sx} = props
	return (
		<Grid sx={sx}>
			<TextField id="outlined-basic" label="amount" variant="outlined" size="small" sx={{ width: '100%'}}/>
			{/* <FormHelperText>Max to use all your funds</FormHelperText> */}
		</Grid>
	)
}