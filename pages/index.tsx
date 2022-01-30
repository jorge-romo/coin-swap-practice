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


function a11yProps(index: number) {
	return {
	  id: `simple-tab-${index}`,
	  'aria-controls': `simple-tabpanel-${index}`,
	};
}

const Home: NextPage = () => {
	const [tabValue, setTabValue] = React.useState("1");
	const [walletInfo, setWalletInfo] = React.useState({address: '', walletConnected: false});
	const [fromFieldInfo, setFromFieldInfo] = React.useState({
		value: 0,
		isValidValue: true,
		errorMsg: ""
	});
	const [toFieldInfo, setToFieldInfo] = React.useState({
		value: 0,
		isValidValue: true,
		errorMsg: ""
	});
	const [fromCurrency, setFromCurrency] = React.useState("ETH")
	const [toCurrency, setToCurrency] = React.useState("")

	const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
		setTabValue(newValue);
	};

	function handleToggleButton(){
		if (fromFieldInfo.isValidValue && toFieldInfo.isValidValue){
			console.log("entered condition")
			const fromValue = fromFieldInfo.value
			const toValue = toFieldInfo.value
			setFromFieldInfo({
				value: toValue,
				isValidValue: true,
				errorMsg: ""
			})
			setToFieldInfo({
				value: fromValue,
				isValidValue: true,
				errorMsg: ""
			})
		}
	}

	function isValidTransaction(){
		return walletInfo.walletConnected && fromFieldInfo.value > 0 && fromFieldInfo.isValidValue && toFieldInfo.value > 0 && toFieldInfo.isValidValue
		&& fromCurrency != '0' && toCurrency != '0'
	}

	return (
		<Grid container
			alignItems="flex-start"
			style={{ maxHeight: '100vh', minHeight: '100vh', maxWidth: '100vw', backgroundImage: 'url(/assets/background.jpg)'}}>
			
			<Header walletInfo={walletInfo} setWalletInfo={setWalletInfo}/>

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
												<CurrencySelection label="from" sx={{width: "40%", m: 1}} value={fromCurrency} setValue={setFromCurrency}/>
												<AmountInputField sx={{width: "55%", mt:1, mr: 1}} fieldInfo={fromFieldInfo} setFieldInfo={setFromFieldInfo}/>
											</Grid>
											<Button variant="outlined" onClick={handleToggleButton} sx={{mx: 'auto', mb: 4, bgcolro: "#1F6DC933"}}>
												<img src="\assets\icons\twoArrows.svg" alt="Swap" />
											</Button>
											<Grid container direction="row">
												<CurrencySelection label="to" sx={{width: "40%", m: 1}} value={toCurrency} setValue={setToCurrency}/>
												<AmountInputField sx={{width: "55%", mt:1, mr: 1}} fieldInfo={toFieldInfo} setFieldInfo={setToFieldInfo}/>
											</Grid>
											<Button fullWidth variant="contained" disabled={!isValidTransaction() ? true: false}>Swap</Button>
										</Grid>
										<Grid item xs={4}>
											<CardInfo walletInfo={walletInfo} setWalletInfo={setWalletInfo} isValidTransaction={isValidTransaction()}
											fromCurrency={fromCurrency} toCurrency={toCurrency} toAmount={toFieldInfo.value}/>
										</Grid>
									</Grid>
								</Grid>
							</TabPanel>

							<TabPanel value="2">
								<Grid container xs={12} sx={{ bgcolor: 'white', width: '60vw', height: "60vh"}}>
									
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
