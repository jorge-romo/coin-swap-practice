import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'

export default function CardInfo(){
	return (
		<Card sx={{ height: '60vh', pt:'5rem', textAlign: 'center'}}>
			<CardContent>
				<Avatar sx={{ bgcolor: 'lightgray', mx: 'auto'}}>N</Avatar>
				<Typography sx={{ fontSize: 14 }} color="text.secondary">
					Hint
				</Typography>
				<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
					You can choose any token on the list, if there is some missing you can try adding it by the contract address.
				</Typography>
				<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
					Contact Address
				</Typography>
			</CardContent>
		</Card>
	)
}