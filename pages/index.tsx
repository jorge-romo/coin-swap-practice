import * as React from 'react';
import type { NextPage } from 'next'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import AmountInputField from './components/AmountInputField';
import CurrencySelection from './components/CurrencySelection';
import CardInfo from './components/CardInfo';
import Header from './components/Header'
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { makeStyles } from '@mui/styles';
import { alertTitleClasses } from '@mui/material';

const pageStyles = makeStyles((theme) => ({
	parentContainer: {
		minHeight: '100vh',
		height: 'auto', 
		maxWidth: '100vw',
		backgroundImage: 'url(/assets/background.jpg)',
	}
}));

function a11yProps(index: number) {
	return {
	  id: `simple-tab-${index}`,
	  'aria-controls': `simple-tabpanel-${index}`,
	};
}

const Home: NextPage = () => {
	const classes = pageStyles()
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
		console.log(toCurrency)
		return walletInfo.walletConnected && fromFieldInfo.value > 0 && fromFieldInfo.isValidValue && toFieldInfo.value > 0 && toFieldInfo.isValidValue
		&& fromCurrency != '' && toCurrency != ''
	}

	function handleSwapClick(){
		alert("Swap Complete")
	}

	return (
		<Grid container
			alignItems="flex-start"
			className={classes.parentContainer} >
			
			<Header walletInfo={walletInfo} setWalletInfo={setWalletInfo}/>

			<Grid
				container
				direction="row"
				alignItems={{md: 'cetner', xs: 'flex-start'}}
				justifyContent="center"
				>

				<Grid container md={8} xs={11} sx={{minHeight: "60vh"}}>
					<Box>
						<TabContext value={tabValue}>
							<Grid container md={8} xs={12} sx={{ borderBottom: 1, borderColor: 'divider' }}>
								<TabList onChange={handleTabChange}
									indicatorColor="secondary"
									textColor="inherit"
									aria-label="full width tabs example"
									sx={{ width: "100%"}}>
									<Tab label="Swap" value="1" sx={{ width: "50%"}} {...a11yProps(1)}/>
									<Tab label="Pool"  value="2" sx={{ width: "50%"}} {...a11yProps(2)}/>
								</TabList>
							</Grid>

							<TabPanel value="1">
								<Grid container sx={{ bgcolor: '#cfe8fc', minWidth: '60vw', height: "60vh"}}>
									<Grid container direction="row" >
										<Grid container md={8} xs={12} sx={{ bgcolor: 'white'}} >
											<Typography color="initial" sx={{fontSize: {'md': 18, 'xs': 14}, fontWeight: {md:'regular', xs:'bold'}, p: 2}}>Select a toking to start swaping</Typography>
											<Grid container direction="row" sx={{ width: 'full'}}>
												<CurrencySelection label="from" sx={{width: "40%", m: 1}} value={fromCurrency} setValue={setFromCurrency}/>
												<AmountInputField fieldInfo={fromFieldInfo} setFieldInfo={setFromFieldInfo}/>
											</Grid>
											<Button onClick={handleToggleButton} sx={{mx: 'auto', mb: 4, mt:{xs: '2rem', md: '0'}, width:{xs: '4rem', md:'auto'}, height:{xs: '4rem', md: 'auto'}, bgcolor: "#1F6DC933"}}>
												<img src="\assets\icons\twoArrows.svg" alt="Toggle" />
											</Button>
											<Grid container direction="row">
												<CurrencySelection label="to" sx={{width: "40%", m: 1}} value={toCurrency} setValue={setToCurrency}/>
												<AmountInputField fieldInfo={toFieldInfo} setFieldInfo={setToFieldInfo}/>
											</Grid>
											<Button fullWidth variant="contained" onClick={handleSwapClick} sx={{height:{xs: '4rem', md: 'auto'}, position: {md:'relative', xs:'fixed'}, bottom: 0, left: 0, zIndex: {xs: 2, md: 1}}} disabled={!isValidTransaction() ? true: false}>Swap</Button>
										</Grid>
										<Grid item md={4} xs={12}>
											<CardInfo walletInfo={walletInfo} setWalletInfo={setWalletInfo} isValidTransaction={isValidTransaction()}
											fromCurrency={fromCurrency} toCurrency={toCurrency} toAmount={toFieldInfo.value}/>
										</Grid>
									</Grid>
								</Grid>
							</TabPanel>

							<TabPanel value="2">
								<Grid container xs={12} sx={{ bgcolor: 'white', width: {md: '60vw', 'xs': '80vw'} , height: "60vh"}}>
									
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
