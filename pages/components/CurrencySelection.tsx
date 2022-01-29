import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText';
// import {defaultProps} from 'react';

interface SelectionProps {
	label: String,
	value: Number,
	sx: Object
};

export default function AmountInputField(props: SelectionProps) {
	const {label, value, sx} = props
	return (
		<FormControl sx={sx}>
			<InputLabel id="from-currency">{label}</InputLabel>
			<Select
				labelId="from-currency"
				id="from-currency-select"
				value={value ? value : null}
				label="From"
				size="small"
				// sx={{ height: 50}}
				// onChange={handleChange}
			>
				<MenuItem value={10}>
					<img src="/assets/icons/ethereum.svg" alt="Ether"/>
					Ether
				</MenuItem>
				<MenuItem value={20}>
					<img src="/assets/icons/avalanche.svg" alt="Aval" />
					Avalanche
				</MenuItem>
				<MenuItem value={30}>
					<img src="/assets/icons/polygon.svg" alt="Poly" />
					Polygon
				</MenuItem>
			</Select>
		</FormControl>
	)
}