import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'



export default function header() {
	return (
		<Grid container direction="row" justifyContent="space-between" alignItems='center' sx={{height: "3rem"}}>
			<Grid item xs={2} sx={{ pl: 2 }}>
				<img src="/assets/logo.svg" alt="Matisse" />
			</Grid>
			<Grid container xs={3} direction="row"  justifyContent="flex-end" alignItems="center" sx={{mt: 2}}>
				<Grid container xs={6} direction="row" justifyContent="space-between" alignItems="center"
					sx={{bgcolor: 'lightgray', p: 1}}>
					<img src="\assets\icons\ethereum.svg" alt="Etherum Logo" />
					<Typography variant="body1" sx={{ fontSize: 14}}>0x3452...3d27</Typography>
				</Grid>
				<Grid sx={{px: 4 }}>
					<img src="\assets\icons\shutdown.svg" alt="Shutdown Logo" />
				</Grid>
			</Grid>
		</Grid>
	)
}