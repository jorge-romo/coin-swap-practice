import * as React from 'react';
import type { NextPage } from 'next'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import AmountInputField from './components/AmountInputField';
import CurrencySelection from './components/CurrencySelection';
import CardInfo from './components/CardInfo';
import Header from './components/Header'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

// function TabPanel(props: TabPanelProps) {
// 	const { children, value, index, ...other } = props;
  
// 	return (
// 	  <div
// 		role="tabpanel"
// 		hidden={value !== index}
// 		id={`simple-tabpanel-${index}`}
// 		aria-labelledby={`simple-tab-${index}`}
// 		{...other}
// 	  >
// 		{value === index && (
// 			{children}
// 		//   <Box sx={{ p: 3 }}>
// 		// 	<Typography>{children}</Typography>
// 		//   </Box>
// 		)}
// 	  </div>
// 	);
//   }

function a11yProps(index: number) {
	return {
	  id: `simple-tab-${index}`,
	  'aria-controls': `simple-tabpanel-${index}`,
	};
}

const Home: NextPage = () => {
	const [tabValue, setTabValue] = React.useState("1");

	const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
		setTabValue(newValue);
	};

	return (
		<Grid container
			alignItems="flex-start"
			style={{ maxHeight: '100vh', minHeight: '100vh', maxWidth: '100vw', backgroundImage: 'url(/assets/background.jpg)'}}>
			
			<Header />

			<Grid
				container
				direction="column"
				alignItems="center"
				justifyContent="center"
				sx={{ }}
				>

				<Grid container xs={8} sx={{minHeight: "60vh"}}>
					<Box>
						<TabContext value={tabValue}>
							<Grid container xs={8} sx={{ borderBottom: 1, borderColor: 'divider' }}>
								<TabList onChange={handleTabChange}
									indicatorColor="secondary"
									textColor="inherit"
									aria-label="full width tabs example"
									sx={{ width: "100%"}}>
									<Tab label="Item One" value="1" sx={{ width: "50%"}} {...a11yProps(1)}/>
									<Tab label="Item Two"  value="2" sx={{ width: "50%"}} {...a11yProps(2)}/>
								</TabList>
							</Grid>

							<TabPanel value="1">
								<Grid container sx={{ bgcolor: '#cfe8fc', width: '60vw', height: "60vh"}}>
									<Grid container direction="row" >
										<Grid container xs={8} sx={{ bgcolor: 'white'}} >
											<Typography color="initial" sx={{fontSize: 18, fontWeight: 'semibold', p: 2}}>Select a toking to start swaping</Typography>
											<Grid container direction="row" sx={{ width: 'full'}}>
												<CurrencySelection label="from" sx={{width: "40%", m: 1}} value={10}/>
												<AmountInputField sx={{width: "55%", mt:1, mr: 1}}/>
											</Grid>
											<Button variant="outlined" sx={{mx: 'auto', mb: 4, bgcolro: "#1F6DC933"}}>
												<img src="\assets\icons\twoArrows.svg" alt="Swap" />
											</Button>
											<Grid container direction="row">
												<CurrencySelection label="to" sx={{width: "40%", m: 1}} value={0}/>
												<AmountInputField sx={{width: "55%", mt:1, mr: 1}}/>
											</Grid>
											<Button fullWidth variant="contained">Swap</Button>
										</Grid>
										<Grid item xs={4}>
											<CardInfo />
										</Grid>
									</Grid>
								</Grid>
							</TabPanel>

							<TabPanel value="2">
								<Grid container xs={12} sx={{ bgcolor: '#cfe8fc', width: '60vw', height: "60vh"}}>
									what ?
								</Grid>
							</TabPanel>
						</TabContext>
					</Box>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Home
