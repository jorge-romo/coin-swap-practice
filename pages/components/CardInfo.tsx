import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'

export default function CardInfo(){
	return (
		<Card sx={{ height: '60vh', pt:'4rem', textAlign: 'center'}}>
			<CardContent>
				<Avatar sx={{ bgcolor: 'gray', mx: 'auto', mb: 2, width: 70, height: 70}}> </Avatar>
				<Typography sx={{ fontSize: 14, fontWeight: 'bold', mb: 2 }} color="text.secondary">
					Hint
				</Typography>
				<Typography sx={{ fontSize: 14, mb: 2 }} color="text.secondary" gutterBottom>
					You can choose any token on the list, if there is some missing you can try adding it by the contract address.
				</Typography>
				<Typography sx={{ fontSize: 14, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
					Contact Address
				</Typography>
			</CardContent>
		</Card>
	)
}