import * as React from 'react';
import type { NextPage } from 'next'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import AmountInputField from './components/AmountInputField';
import CurrencySelection from './components/CurrencySelection';
import CardInfo from './components/CardInfo';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


const Home: NextPage = () => {
	return (
		<Grid container style={{ maxHeight: '100vh', maxWidth: '100vw'}}>

			<Grid container direction="row" justifyContent="space-between" sx={{bgcolor: 'lightgray', height: "3rem"}}>
				<Grid item xs={2}>
					<Typography variant="h6" >
						Matisse
					</Typography>
				</Grid>
				<Grid container xs={2} direction="row">
					<Typography variant="body1">
						Address
					</Typography>
				</Grid>
			</Grid>

			<Grid
				container
				direction="column"
				alignItems="center"
				justifyContent="center"
				sx={{ mt: '2rem' }}
				>

				<Grid container xs={8}>
					<Box >
						<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
							<Tabs value={1} aria-label="basic tabs example">
								<Tab label="Item One" value={1}/>
								<Tab label="Item Two"  value={2}/>
							</Tabs>
						</Box>
						<Grid role="tabpanel" container sx={{ bgcolor: '#cfe8fc' }}>
							<Grid container direction="row" >
								<Grid container xs={8} sx={{ bgcolor: 'white', height: "60vh"}} >
									<Typography variant="h6" color="initial" sx={{p: 2}}>Select a toking to start swaping</Typography>
									<Grid container direction="row">
										<CurrencySelection />
										<AmountInputField />
										{/* <span>Max to use funding</span> */}
									</Grid>
									<Button variant="outlined">Outlined</Button>
									<Grid container direction="row">
										<CurrencySelection />
										<AmountInputField />
										{/* <span>Max to use funding</span> */}
									</Grid>
									<Button fullWidth variant="contained">Swap</Button>
								</Grid>
								<Grid item xs={4}>
									<CardInfo />
								</Grid>
							</Grid>
						</Grid>

						{/* <Grid container value={2} index={1}>
							Item Two
						</Grid> */}
					</Box>

				</Grid>

			</Grid>

		</Grid>
	)
}

export default Home
