import React, { createRef } from 'react';
import { brandGradient, keyframes, styled } from 'styles/stitches';

const scaleInKeyframes = keyframes({
	from: {
		transform: 'none',
	},

	'25%': {
		transform: 'scale(1.125)',
	},

	to: {
		transform: 'scale(1.075)',
	},
});

const scaleOutKeyframes = keyframes({
	from: {
		transform: 'scale(1.075)',
	},

	to: {
		transform: 'none',
	},
});

const RootHeroButton = styled('button', {
	outline: 0,
	overflow: 'hidden',

	cursor: 'pointer',

	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	borderRadius: 99,
	border: 'none',

	backgroundColor: '$brandDefault',
	backgroundImage: brandGradient,

	height: 52,
	padding: '0 2rem',

	color: '$bgDefault',
	fontSize: '1.125rem',
	fontWeight: 700,
	textDecoration: 'none',

	animation: `${scaleOutKeyframes} 175ms ease forwards`,

	'& *': {
		color: 'inherit',
	},

	'& > *': {
		transition: '175ms ease',
		display: 'inline-block',
	},

	'&:hover': {
		// transform: 'scale(1.1)',
		animation: `${scaleInKeyframes} 2000ms ease forwards`,

		'& > *': {
			transform: 'scale(0.9375)',
			transition: '400ms ease',
		},
	},

	'&:focus': {
		boxShadow: '0 0 0 3px $colors$brandMuted',
	},

	'&::before': {
		content: '',
		position: 'absolute',
		display: 'block',

		zIndex: 0,
		width: 0,
		height: 0,

		top: 'var(--top)',
		left: 'var(--left)',

		borderRadius: '50%',
		backgroundColor: 'rgba(37, 42, 52, 0.15)',

		transform: 'translate(-50%, -50%)',
		transition: '250ms ease-out',
		transitionProperty: 'width, padding-top',
	},

	'&:hover::before': {
		width: '225%',
		paddingTop: '225%',
	},

	variants: {
		secondary: {
			true: {
				border: 'solid 1px transparent',

				color: '$fgDefault',
				backgroundColor: 'rgba(173, 186, 199, 0.1)',
				backgroundImage: 'none',

				'&::before': {
					backgroundColor: 'rgba(173, 186, 199, 0.1)',
				},

				'&:focus': {
					border: 'solid 1px rgba(173, 186, 199, 0.8)',
					boxShadow: '0 0 0 3px rgba(173, 186, 199, 0.4)',
				},
			},
		},
		tertiary: {
			true: {
				border: 'solid 1px transparent',

				color: '$fgDefault',
				backgroundColor: 'transparent',
				backgroundImage: 'none',

				'&::before': {
					backgroundColor: 'rgba(173, 186, 199, 0.1)',
				},

				'&:focus': {
					border: 'solid 1px rgba(173, 186, 199, 0.8)',
					boxShadow: '0 0 0 3px rgba(173, 186, 199, 0.4)',
				},
			},
		},
		small: {
			true: {
				height: 40,
				padding: '0 1.5rem',

				fontSize: '1rem',
			},
		},
	},
});

/** @type {typeof(RootHeroButton)} */
export default function HeroButton(props: any) {
	const buttonRef = createRef<HTMLButtonElement>();

	const mouseChange = (event: MouseEvent) => {
		if (!buttonRef.current) return;

		const boundingBox = buttonRef.current.getBoundingClientRect();
		const diameter = Math.max(
			buttonRef.current.clientWidth,
			buttonRef.current.clientHeight
		);

		const top = `${event.clientY - boundingBox.top}px`;
		const left = `${event.clientX - boundingBox.left}px`;

		buttonRef.current.setAttribute(
			'style',
			`--top: ${top}; --left: ${left};`
		);
	};

	return (
		<RootHeroButton
			{...props}
			ref={buttonRef}
			onMouseOver={mouseChange}
			onMouseOut={mouseChange}
		/>
	);
}
