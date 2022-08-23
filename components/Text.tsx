import React from 'react';
import { styled, brandGradient } from 'styles/stitches';

const variantProps = {
	variants: {
		brandGradient: {
			true: {
				backgroundImage: brandGradient,
				backgroundSize: '100% 100%',
				width: 'fit-content',
				backgroundClip: 'text',
				'-webkit-background-clip': 'text',
				'-webkit-text-fill-color': 'transparent',
			},
		},
		noMargin: {
			true: {
				margin: 0,
				lineHeight: 1,
			}
		},
		halfWidth: {
			true: {
				maxWidth: '50%',
			}
		}
	},
};

const MediumTitle = styled('p', {
	fontSize: '3rem',
	fontWeight: 700,
	...variantProps,
});

const SmallTitle = styled('p', {
	fontSize: '1.5rem',
	fontWeight: 700,
	...variantProps,
});

const SmallerTitle = styled('p', {
	fontSize: '1.125rem',
	fontWeight: 700,
	...variantProps,
});

const HeroTitle = styled('p', {
	fontSize: '5rem',
	fontWeight: 700,
	...variantProps,
});

const HeroText = styled('p', {
	fontSize: '1.25rem',
	...variantProps,
});

const Text = { MediumTitle, SmallTitle, SmallerTitle, HeroTitle, HeroText };

export default Text;
