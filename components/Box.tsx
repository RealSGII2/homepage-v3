import React from 'react';
import { styled, contentWidth } from 'styles/stitches';

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
			}
		}
	},
});

export default Box;
