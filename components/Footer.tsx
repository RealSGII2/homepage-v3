import Link from 'next/link';
import React, { createRef } from 'react';
import { contentWidth, styled } from 'styles/stitches';
import Box from './Box';
import HeroButton from './HeroButton';
import Text from './Text';

const FooterRoot = styled('footer', {
	backgroundColor: '$bgOverlay',
	padding: '1.5rem 0 3rem',
});

const Divider = styled('div', {
	width: '100%',
	height: 1,
	backgroundColor: '$border',

	margin: '2rem 0'
})

const FooterSection = styled('div', {
	display: 'flex',
	flexDirection: 'column',

	gap: '0.25rem',
})

const RootFooterLink = styled('a', {
	color: '$fgMuted',
	textDecoration: 'none',
	transition: 'color 135ms ease-out, top 400ms cubic-bezier(.2,.8,.41,1.25), left 400ms cubic-bezier(.2,.8,.41,1.25)',

	'&:hover': {
		color: '$fgDefault',
		cursor: 'pointer',
	},

	'&[style]': {
		padding: '3px 7px',
		backgroundColor: '$bgOverlay',
		borderRadius: 6,
	}
})

const getRandom = (max: number) => {
	return Math.floor(Math.random() * max)
}

const FooterLink = (props: React.AnchorHTMLAttributes<HTMLAnchorElement> & { special?: boolean }) => {
	const linkRef = createRef<HTMLAnchorElement>()
	
	const onHover = (e: MouseEvent) => {
		if (!linkRef.current || !props.special) return
		const link = linkRef.current
		const boundingBox = link.getBoundingClientRect()

		const x = boundingBox.left
		const y = boundingBox.top

		link.style.left = x + 'px'
		link.style.top = y + 'px'
		link.style.position = 'absolute'

		link.style.left = getRandom(document.body.clientWidth - boundingBox.width) + 'px'
		link.style.top = getRandom(document.body.clientHeight - 108 - boundingBox.height) + 108 + 'px'
	}
	
	return (
		<RootFooterLink {...props} data-no-global-style onMouseOver={onHover as any} onClick={() => alert('good job 👍')} ref={linkRef} />
	)
}

/** @type {React.FC} */
export default function Footer() {
	return (
		<FooterRoot>
			<Box centered as='section'>
				<Text.SmallTitle noMargin>
					William Wise
				</Text.SmallTitle>
				<Text.SmallerTitle noMargin css={{ color: '$fgMuted', marginTop: '0.5rem', marginBottom: '1rem' }}>
					@RealSGII2
				</Text.SmallerTitle>

				<Box row style={{ alignItems: 'center' }}>
					<HeroButton secondary small>
						<span>Get in contact</span>
					</HeroButton>

					<HeroButton tertiary icon>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							width='30'
						>
							<path
								d='M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z'
								fill='currentcolor'
							/>
						</svg>
					</HeroButton>
				</Box>
			</Box>

			<Divider />

			<Box row centered as='section' style={{ gap: '3rem' }}>
				<FooterSection>
					<b>About me</b>
					<FooterLink>
						About me
					</FooterLink>
					<FooterLink>
						Projects
					</FooterLink>
					<FooterLink>
						Uses
					</FooterLink>
				</FooterSection>
				<FooterSection>
					<b>Website</b>
					<FooterLink>
						View source
					</FooterLink>
					<FooterLink>
						Inspiration
					</FooterLink>
					<FooterLink>
						How it&apos;s built
					</FooterLink>
				</FooterSection>
				<FooterSection>
					<b>Hello there</b>
					<FooterLink special>
						Click me
					</FooterLink>
				</FooterSection>
			</Box>

			<Box centered as='section' style={{ marginTop: '2rem' }}>
				&copy; William Wise {new Date(Date.now()).getFullYear()}
			</Box>
		</FooterRoot>
	);
}
