import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider';

interface CardInfoProps{
	isValidTransaction: boolean,
	fromCurrency: string,
	toCurrency: string,
	toAmount: number,
	walletInfo: {address: string; walletConnected: boolean; },
	setWalletInfo: React.Dispatch<React.SetStateAction<{ address: string; walletConnected: boolean; }>>,
}


export default function CardInfo(props: CardInfoProps){
	const {isValidTransaction, fromCurrency, toCurrency, toAmount, walletInfo, setWalletInfo} = props

	function calculateMinimumValue(){
		return toAmount - 0.02
	}

	function handleConnectWalletClick() {
		// web3js for connecting wallet goes here
		setWalletInfo({
			address: "0x3452...3d27",
			walletConnected: true
		})
	}

	return (
		<Card sx={{ height: '60vh', pt:'4rem', textAlign: 'center', bgcolor: "#f3f6f4"}}>
			{isValidTransaction ? 
				<CardContent>
					<Avatar sx={{ bgcolor: 'gray', mx: 'auto', mb: 2, width: 70, height: 70}}> </Avatar>
					<Typography sx={{ fontSize: 14, fontWeight: 'bold', mb: 2 }} color="text.secondary">
						Transaction Details
					</Typography>
					<Grid container direction="row" justifyContent="space-between">
						<Typography sx={{ fontSize: 14 }} color="text.secondary">
							Liquidity Provider Fee
						</Typography>
						<Typography sx={{ fontSize: 14, fontWeight: 'semibold', mb: 2 }} color="text.secondary">
							0.0000005 {fromCurrency}
						</Typography>
					</Grid>
					<Grid container direction="row" justifyContent="space-between">
						<Typography sx={{ fontSize: 14 }} color="text.secondary">
							Price Impact
						</Typography>
						<Typography sx={{ fontSize: 14, fontWeight: 'semibold', mb: 2 }} color="text.secondary">
							0.00%
						</Typography>
					</Grid>
					<Grid container direction="row" justifyContent="space-between">
						<Typography sx={{ fontSize: 14 }} color="text.secondary">
							Allowed Slippage
						</Typography>
						<Typography sx={{ fontSize: 14, fontWeight: 'semibold', mb: 2 }} color="text.secondary">
							0.50%
						</Typography>
					</Grid>
					<Grid container direction="row" justifyContent="space-between">
						<Typography sx={{ fontSize: 14 }} color="text.secondary">
							Minimum Received
						</Typography>
						<Typography sx={{ fontSize: 14, fontWeight: 'semibold', mb: 2 }} color="text.secondary">
							{calculateMinimumValue()} {toCurrency}
						</Typography>
					</Grid>
					<Divider />
					<Typography sx={{ fontSize: 10 }} color="text.secondary">
						Output is estimated. you will receive at least 99.95 {toCurrency} or the transaction will revert.
					</Typography>
				</CardContent>
			:
				<CardContent>
					<Avatar sx={{ bgcolor: 'gray', mx: 'auto', mb: 2, width: 70, height: 70}}> </Avatar>
					<Typography sx={{ fontSize: 14, fontWeight: 'bold', mb: 2 }} color="text.secondary">
						Hint
					</Typography>
					<Typography sx={{ fontSize: 14, mb: 2 }} color="text.secondary" gutterBottom>
						You can choose any token on the list, if there is some missing you can try adding it by the contract address.
					</Typography>
					{walletInfo.walletConnected ? 
						<Typography sx={{ fontSize: 14, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
							Contract Address
						</Typography>
						:
						<Button onClick={handleConnectWalletClick}>Connect Wallet</Button>
					}
				</CardContent>
			}

		</Card>
	)
}