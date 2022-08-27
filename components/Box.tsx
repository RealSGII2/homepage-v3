import { CSS } from '@stitches/react';
import React from 'react';
import { styled, contentWidth } from 'styles/stitches';

const baseNoteStyles: CSS = {
	padding: '1rem 1.5rem',
	fontSize: 18,

	borderRadius: 8,

	'& *': {
		margin: '0',
	},

	'& > p:first-child + .remark-highlight': {
		marginTop: '0.5rem',
	},

	'& > .remark-highlight': {
		marginLeft: '-1.5rem',
		marginRight: '-1.5rem',
		marginBottom: '-1rem',

		borderRadius: 'inherit',
		borderTopLeftRadius: 0,
		borderTopRightRadius: 0,

		'& pre': {
			padding: '1rem 1.5rem 1.5rem',
			borderRadius: 'inherit',
		},
	},
};

const Box = styled('div', {
	variants: {
		background: {
			true: {
				backgroundColor: '$bgDefault',
			},
		},
		borderTop: {
			true: {
				borderTop: 'solid 1px $colors$border',
			},
		},
		centered: {
			true: {
				width: '100%',
				maxWidth: contentWidth,

				margin: '0 auto',
				padding: '0 3rem',
			},
		},
		row: {
			true: {
				display: 'flex',
				gap: '1rem',
			},
		},
		col: {
			true: {
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
			},
		},
		centerContent: {
			true: {
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			},
		},
		blogDisplay: {
			true: {
				backgroundColor: '$bgDefault',
				borderRadius: 8,
				padding: '2rem',
			},
		},
		note: {
			default: {
				backgroundColor: 'rgba(153, 213, 203, 0.1)',

				'& > p:first-child strong': {
					color: '$brandDefault',
				},

				...baseNoteStyles,
			},
			red: {
				backgroundColor: 'rgba(255, 123, 123, 0.1)',

				'& > p:first-child strong': {
					color: '#d59999',
				},

				...baseNoteStyles,
			},
		},
		hasFooter: {
			true: {
				borderBottomLeftRadius: 0,
				borderBottomRightRadius: 0,

				'& + *': {
					borderTopLeftRadius: '0!important',
					borderTopRightRadius: '0!important',
				},
			},
		},
		hasHeader: {
			true: {
				borderTopLeftRadius: '0!important',
				borderTopRightRadius: '0!important',
			},
		},
	},
});

export default Box;
