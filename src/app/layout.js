import './globals.css'
import bg from '/public/bg.png'

export const metadata = {
	title: 'World Elephant Day 2024',
	description: 'TPXImpact x Reteti Elephants'
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<head>
				<title>World Elephant Day 2024</title>
				<link rel='stylesheet' href='https://use.typekit.net/keh3fmz.css' />
			</head>
			<body
				style={{
					backgroundImage: `url(${bg.src})`
				}}
			>
				{children}
			</body>
		</html>
	)
}
