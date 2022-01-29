import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'


export default function AmountInputField() {
	return (
		<FormControl>
			<InputLabel id="from-currency">From</InputLabel>
			<Select
				labelId="from-currency"
				id="from-currency-select"
				value={10}
				label="From"
				// onChange={handleChange}
			>
				<MenuItem value={10}>Ten</MenuItem>
				<MenuItem value={20}>Twenty</MenuItem>
				<MenuItem value={30}>Thirty</MenuItem>
			</Select>
		</FormControl>
	)
}