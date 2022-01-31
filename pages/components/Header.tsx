import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

interface HeaderProps{
	walletInfo: {address: string; walletConnected: boolean; },
	setWalletInfo: React.Dispatch<React.SetStateAction<{ address: string; walletConnected: boolean; }>>,
}

export default function header(props: HeaderProps) {
	const {walletInfo, setWalletInfo} = props

	const WalletIsConnected = () => {
		return (
			<Grid container xs={9} md={3} direction="row"  justifyContent="flex-end" alignItems="center" sx={{mt: 2}}>
				<Grid container xs={6} direction="row" justifyContent="space-between" alignItems="center"
					sx={{bgcolor: 'lightgray', p: 1}}>
					<img src="\assets\icons\ethereum.svg" alt="Etherum Logo" />
					<Typography variant="body1" sx={{ fontSize: 14}}>{walletInfo.address}</Typography>
				</Grid>
				<Grid sx={{px: 4 }}>
					<img src="\assets\icons\shutdown.svg" alt="Shutdown Logo" onClick={handleDisconnectWalletClick}/>
				</Grid>
			</Grid>
		)
	}

	const WalletIsNotConnected = () => {
		return (
			<Grid container xs={8} md={2} direction="row"  justifyContent="flex-end" alignItems="center" sx={{mt: 2, mr: 3}}>
				<Button variant="contained" onClick={handleConnectWalletClick} color="primary">Connect Wallet</Button>
			</Grid>
		)
	}

	function handleConnectWalletClick() {
		// web3js for connecting wallet goes here
		setWalletInfo({
			address: "0x3452...3d27",
			walletConnected: true
		})
	}

	function handleDisconnectWalletClick() {
		setWalletInfo({
			address: "",
			walletConnected: false
		})
	}

	return (
		<Grid container direction="row" justifyContent="space-between" alignItems='center' sx={{height: "3rem"}}>
			<Grid item xs={2} sx={{ pl: 2 }}>
				<img src="/assets/logo.svg" alt="Matisse" />
			</Grid>
			{walletInfo.walletConnected ? <WalletIsConnected /> : <WalletIsNotConnected/>}
		</Grid>
	)
}