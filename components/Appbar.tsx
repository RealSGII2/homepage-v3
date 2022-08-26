import Link from 'next/link';
import React from 'react';
import { contentWidth, keyframes, styled } from 'styles/stitches';
import HeroButton from './HeroButton';

const scrollFactor = 'var(--scroll-factor, 1)';

const fadeFlashKeyframes = keyframes({
	'30%': {
		opacity: 1,
	},
	'50%': {
		opacity: 0.5,
	},
	'70%': {
		opacity: 1,
	},
});

const jumpKeyframes = keyframes({
	from: {
		transform: 'scale(1)',
	},
	'20%': {
		transform: 'scale(0.9)',
	},
	'50%': {
		transform: 'scale(1.1)',
	},
	'70%': {
		transform: 'scale(1)',
	},
});

const spinKeyframes = keyframes({
	from: {
		transform: 'rotate(0deg)',
	},
	to: {
		transform: 'rotate(360deg)',
	},
});

const AppbarRoot = styled('nav', {
	position: 'sticky',
	height: `calc(64px + 44px * ${scrollFactor})`,

	display: 'flex',
	alignItems: 'flex-end',

	zIndex: 50,

	top: 0,
	left: 0,
	right: 0,

	borderBottom: `solid 1px rgb($colors$borderRGB, calc(1 - ${scrollFactor}))`,
	backgroundColor: `rgb($bgOverlayRGB, calc(0.75 * (1 - ${scrollFactor})))`,
	backdropFilter: `blur(calc(12px * (1 - ${scrollFactor})))`,

	'html[data-show-custom-background] & section > section:nth-child(2)': {
		backgroundColor: `rgba($bgOverlayRGB, calc(0.75 * ${scrollFactor}))`,

		padding: '0.25rem 0.425rem',
		borderRadius: 99,
	},

	[`html[data-show-custom-background] & a:not(${HeroButton})`]: {
		backgroundColor: `rgba($bgOverlayRGB, calc(0.75 * ${scrollFactor}))`,
	},

	'html[data-show-custom-background] & svg:first-child': {
		borderRadius: `calc(6px * ${scrollFactor})`,
	},

	'body & svg:first-child': {
		marginRight: 8,

		'& path': {
			transition: '135ms ease-out',
			transformOrigin: '50% 50%',
		},
	},

	'body & svg:first-child path:last-child': {
		opacity: 0,
	},

	'body[data-loading] & svg:first-child': {
		// animation: `${jumpKeyframes} 1000ms infinite`,

		'& path:first-child': {
			opacity: 0,
		},

		'& path:last-child': {
			opacity: 1,
			animation: `${spinKeyframes} 1000ms infinite 40ms`,
		},
	},

	'body[data-loading] & svg:last-child': {
		'& path': {
			animation: `${fadeFlashKeyframes} 1000ms infinite`,

			'&:nth-child(2)': {
				animationDelay: '100ms',
			},

			'&:nth-child(3)': {
				animationDelay: '200ms',
			},

			'&:nth-child(4)': {
				animationDelay: '300ms',
			},

			'&:nth-child(5)': {
				animationDelay: '400ms',
			},

			'&:nth-child(6)': {
				animationDelay: '500ms',
			},
		},
	},

	'> section': {
		width: '100%',
		maxWidth: contentWidth,

		margin: '0 auto',
		padding: '0 3rem',

		height: 64,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',

		'> section': {
			flex: '1 1 auto',
			display: 'flex',
			alignItems: 'center',

			'&:nth-child(2)': {
				justifyContent: 'center',
				width: 'auto',
				flex: '0 1 auto',
				gap: '1rem',
			},

			'&:nth-child(3)': {
				justifyContent: 'flex-end',
			},
		},
	},

	svg: {
		height: 36,

		position: 'relative',
		zIndex: 5,
	},
});

const CustomFocusLink = styled('a', {
	display: 'inline-block',
	height: 36,

	outline: 'none',
	cursor: 'pointer',
	position: 'relative',

	'&::before': {
		content: '',
		position: 'absolute',

		top: -8,
		left: -8,
		right: -16,
		bottom: -8,

		borderRadius: 10,
	},

	'html[data-show-custom-background] &::before': {
		backgroundColor: `rgba($bgOverlayRGB, calc(0.75 * ${scrollFactor}))`
	},

	'&:focus-visible::before': {
		border: 'solid 1px rgba(173, 186, 199, 0.8)',
		boxShadow: '0 0 0 3px rgba(173, 186, 199, 0.4)',
	}
});

/** @type {React.FC} */
export default function Appbar() {
	return (
		<AppbarRoot>
			<section>
				<section>
					<Link href="/" passHref>
						<CustomFocusLink>
							<svg
								width="36"
								height="36"
								viewBox="0 0 12 12"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clipPath="url(#clip0_120_12)">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M12 0H0V12H12V0ZM2 4L3.6858 9H4.90726L5.99747 5.75002L7.09274 9H8.31419L10 4H8.79369L7.69581 7.22727L6.60819 4H5.3918L4.29483 7.21506L3.20631 4H2Z"
										fill="url(#paint0_linear_120_12)"
									/>
									<path
										d="M6 10C3.79086 10 2 8.20914 2 6C2 3.79086 3.79086 2 6 2"
										stroke="#99D5CB"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</g>
								<defs>
									<linearGradient
										id="paint0_linear_120_12"
										x1="12"
										y1="0"
										x2="0"
										y2="12"
										gradientUnits="userSpaceOnUse"
									>
										<stop stopColor="#E4F7BD" />
										<stop
											offset="0.25"
											stopColor="#B6E2C5"
										/>
										<stop
											offset="0.99384"
											stopColor="#6ABFD3"
										/>
									</linearGradient>
									<clipPath id="clip0_120_12">
										<rect
											width="12"
											height="12"
											fill="white"
										/>
									</clipPath>
								</defs>
							</svg>

							<svg
								width="66"
								height="36"
								viewBox="0 0 22 12"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clipPath="url(#clip0_120_2)">
									<path
										d="M0.192017 5H1.24802L1.73602 8.088H1.92802L2.53602 5.08H3.64002L4.24802 8.088H4.44002L4.92802 5H5.98402L5.22402 9H3.54402L3.08802 6.552L2.63202 9H0.952017L0.192017 5Z"
										fill="#ADBAC7"
									/>
									<path
										d="M6.3717 5H7.4277L7.9157 8.088H8.1077L8.7157 5.08H9.8197L10.4277 8.088H10.6197L11.1077 5H12.1637L11.4037 9H9.7237L9.2677 6.552L8.8117 9H7.1317L6.3717 5Z"
										fill="#ADBAC7"
									/>
									<path
										d="M12.8555 9V5H13.9275V9H12.8555ZM12.8555 4.488V3.4H13.9275V4.488H12.8555Z"
										fill="#ADBAC7"
									/>
									<path
										d="M17.79 6C17.1286 5.91467 16.6646 5.872 16.398 5.872C16.1366 5.872 15.966 5.896 15.886 5.944C15.8113 5.992 15.774 6.06934 15.774 6.176C15.774 6.27734 15.8246 6.34934 15.926 6.392C16.0326 6.42934 16.2993 6.488 16.726 6.568C17.158 6.64267 17.4646 6.768 17.646 6.944C17.8273 7.12 17.918 7.40534 17.918 7.8C17.918 8.664 17.382 9.096 16.31 9.096C15.958 9.096 15.5313 9.048 15.03 8.952L14.774 8.904L14.806 8.008C15.4673 8.09334 15.926 8.136 16.182 8.136C16.4433 8.136 16.6193 8.112 16.71 8.064C16.806 8.01067 16.854 7.93334 16.854 7.832C16.854 7.73067 16.8033 7.656 16.702 7.608C16.606 7.56 16.35 7.50134 15.934 7.432C15.5233 7.36267 15.2166 7.24534 15.014 7.08C14.8113 6.91467 14.71 6.62134 14.71 6.2C14.71 5.77334 14.854 5.45334 15.142 5.24C15.43 5.02134 15.8006 4.912 16.254 4.912C16.5686 4.912 16.998 4.96267 17.542 5.064L17.806 5.112L17.79 6Z"
										fill="#ADBAC7"
									/>
									<path
										d="M19.5713 7.456C19.5767 7.70134 19.6407 7.88 19.7633 7.992C19.8913 8.09867 20.0727 8.152 20.3073 8.152C20.8033 8.152 21.246 8.136 21.6353 8.104L21.8593 8.08L21.8753 8.872C21.262 9.02134 20.7073 9.096 20.2113 9.096C19.6087 9.096 19.1713 8.936 18.8993 8.616C18.6273 8.296 18.4913 7.776 18.4913 7.056C18.4913 5.62134 19.0807 4.904 20.2593 4.904C21.422 4.904 22.0033 5.50667 22.0033 6.712L21.9233 7.456H19.5713ZM20.9473 6.64C20.9473 6.32 20.8967 6.09867 20.7953 5.976C20.694 5.848 20.5153 5.784 20.2593 5.784C20.0087 5.784 19.83 5.85067 19.7233 5.984C19.622 6.112 19.5687 6.33067 19.5633 6.64H20.9473Z"
										fill="#ADBAC7"
									/>
								</g>
								<defs>
									<clipPath id="clip0_120_2">
										<rect
											width="22"
											height="12"
											fill="white"
										/>
									</clipPath>
								</defs>
							</svg>
						</CustomFocusLink>
					</Link>
				</section>

				<section>
					<HeroButton small tertiary>
						<span>About me</span>
					</HeroButton>
					<HeroButton small tertiary>
						<span>Projects</span>
					</HeroButton>
					<Link href="/blog" passHref>
						<HeroButton as="a" small tertiary>
							<span>Blog</span>
						</HeroButton>
					</Link>
				</section>

				<section>
					<HeroButton small>
						<span>Get in contact</span>
					</HeroButton>
				</section>
			</section>
		</AppbarRoot>
	);
}
