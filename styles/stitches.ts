import { createStitches } from '@stitches/react';

export const scrollFactor = `var(--scroll-factor, 1)`;
export const viewportScrollFactor = `var(--scroll-factor-viewport, 1)`;

export const contentWidth = 1280;

export const brandGradient =
	'linear-gradient(to bottom left, $brandYellow, $brandGreen 37.5%, $brandBlue);';

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
			bgOverlayRGB: '47, 53, 66',

			fgDefault: '#adbac7',
			fgMuted: '#768390',

			border: '#444c56',
			borderRGB: '68, 76, 86',

			brandBlue: '#6abfd3',
			brandGreen: '#b6e2c5',
			brandYellow: '#e4f7bd',
		},
		fonts: {
			default: "'Titillium Web', sans-serif",
		},
	},
});

const backgroundOutKeyframes = keyframes({
	from: {
		opacity: `calc(0.25 * ${viewportScrollFactor})`,
	},
	to: {
		opacity: 0,
	},
});

const backgroundInKeyframes = keyframes({
	from: {
		opacity: 0,
	},
	to: {
		opacity: `calc(0.25 * ${viewportScrollFactor})`,
	},
});

export const globalStyles = globalCss({
	'@import':
		"url('https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600;1,700&display=swap')",

	'html, body': {
		width: '100%',
		height: '100%',

		padding: 0,
		margin: 0,

		overflow: 'hidden',
	},

	body: {
		backgroundColor: '$bgDefault',
		fontFamily: '$default',

		color: '$fgDefault',
		colorScheme: 'dark',

		overflowY: 'auto',

		'&::before, &::after': {
			content: '',
			position: 'absolute',

			top: 0,
			left: 0,
			right: 0,
			bottom: 0,

			zIndex: -1,

			transform: `translateY(calc((1 - ${viewportScrollFactor}) * -180px))`,

			animation: `350ms forwards`,
		},

		'&::before': {
			backgroundImage: "url('/trees.jpeg')",
			backgroundPosition: 'left',
			animationName: backgroundInKeyframes,
			opacity: `calc(0.25 * ${viewportScrollFactor})`,
		},

		'&::after': {
			backgroundImage: 'var(--custom-background)',
			backgroundPosition: 'center center',
			animationName: backgroundOutKeyframes,
		},
	},

	'html[data-show-custom-background] body': {
		'&::before': {
			animationName: backgroundOutKeyframes,
		},
		'&::after': {
			animationName: backgroundInKeyframes,
		},
	},

	'*': {
		fontFamily: 'inherit',
		boxSizing: 'border-box',
		'-webkit-tap-highlight-color': 'transparent',
	},

	// 'a:not([data-no-global-style])': {
	// 	color: '$brand',
	// 	textDecoration: 'none',

	// 	boxShadow: '0 2px $colors$brandSubtle',
	// },

	'::selection': {
		backgroundColor: '$brandDefault',
		backgroundImage: brandGradient,
		color: '$bgDefault',
	},
});
