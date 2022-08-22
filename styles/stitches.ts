import { createStitches } from '@stitches/react';

export const {
	styled,
	css,
	globalCss,
	keyframes,
	getCssText,
	theme,
	createTheme,
	prefix,
} = createStitches({
	theme: {
		colors: {
			brandDefault: '#99d5cb',
			brandMuted: 'rgba(153, 213, 203, 0.4)',
			brandSubtle: 'rgba(153, 213, 203, 0.2)',

			bgDefault: '#252a34',
			bgOverlay: '#2f3542',

			fgDefault: '#adbac7',
			fgMuted: '#768390',

			border: '#444c56',

			brandBlue: '#6abfd3',
			brandGreen: '#b6e2c5',
			brandYellow: '#e4f7bd',
		},
	},
});

export const globalStyles = globalCss({
	'html, body': {
		width: '100%',
		height: '100%',

		padding: 0,
		margin: 0,

		overflow: 'hidden',
	},

	body: {
		backgroundColor: '$bgDefault',
		fontFamily: '',

		color: '$fgDefault',
		colorScheme: 'dark',

		overflowY: 'auto',

		'&::before': {
			content: '',
			position: 'absolute',

			top: 0,
			left: 0,
			right: 0,
			bottom: 0,

			backgroundImage: '/trees.jpeg',
			backgroundPosition: 'left',

			zIndex: -1,

			opacity: 0.25,
		},
	},

	'*': {
		fontFamily: 'inherit',
		boxSizing: 'border-box',
		'-webkit-tap-highlight-color': 'transparent',
	},

	a: {
		color: '$brand',
		textDecoration: 'none',

		boxShadow: '0 2px $colors$brandSubtle',
	},
});
