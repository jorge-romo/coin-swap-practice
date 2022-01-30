import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText';
// import {defaultProps} from 'react';

interface SelectionProps {
	label: String,
	value: String,
	setValue: React.Dispatch<React.SetStateAction<string>>,
	sx: Object
};

export default function AmountInputField(props: SelectionProps) {
	const {label, value, setValue, sx} = props
	function handleChange(e: SelectChangeEvent){
		const selectedValue = e.target.value
		setValue(selectedValue)
	}
	return (
		<FormControl sx={sx}>
			<InputLabel id="from-currency">{label}</InputLabel>
			<Select
				labelId="from-currency"
				id="from-currency-select"
				value={value}
				label="From"
				size="small"
				onChange={handleChange}
			>
				<MenuItem value="ETH">
					<img src="/assets/icons/ethereum.svg" alt="Ether"/>
					Ether
				</MenuItem>
				<MenuItem value="AVAX">
					<img src="/assets/icons/avalanche.svg" alt="Aval" />
					Avalanche
				</MenuItem>
				<MenuItem value="MATIC">
					<img src="/assets/icons/polygon.svg" alt="Poly" />
					Polygon
				</MenuItem>
			</Select>
		</FormControl>
	)
}