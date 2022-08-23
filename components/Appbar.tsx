import Link from 'next/link';
import React from 'react';
import { contentWidth, styled } from 'styles/stitches';
import HeroButton from './HeroButton';

const scrollFactor = 'var(--scroll-factor, 1)';

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
			flex: 1,
			display: 'flex',
			alignItems: 'center',

			'&:nth-child(2)': {
				justifyContent: 'center',
				flex: 2,
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

/** @type {React.FC} */
export default function Appbar() {
	return (
		<AppbarRoot>
			<section>
				<section>
					<Link href="/">
						<a data-no-global-style="data-no-global-style" style={{ display: 'inline-block', height: 36 }}>
							<svg
								viewBox="0 0 46 12"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M12 0H0V12H12V0ZM2 4L3.6858 9H4.90726L5.99747 5.75002L7.09274 9H8.31419L10 4H8.79369L7.69581 7.22727L6.60819 4H5.3918L4.29483 7.21506L3.20631 4H2Z"
									fill="url(#paint0_linear_5_2)"
								/>
								<path
									d="M15.192 5H16.248L16.736 8.088H16.928L17.536 5.08H18.64L19.248 8.088H19.44L19.928 5H20.984L20.224 9H18.544L18.088 6.552L17.632 9H15.952L15.192 5ZM21.3717 5H22.4277L22.9157 8.088H23.1077L23.7157 5.08H24.8197L25.4277 8.088H25.6197L26.1077 5H27.1637L26.4037 9H24.7237L24.2677 6.552L23.8117 9H22.1317L21.3717 5ZM27.8554 9V5H28.9274V9H27.8554ZM27.8554 4.488V3.4H28.9274V4.488H27.8554ZM32.7899 6C32.1285 5.91467 31.6645 5.872 31.3979 5.872C31.1365 5.872 30.9659 5.896 30.8859 5.944C30.8112 5.992 30.7739 6.06933 30.7739 6.176C30.7739 6.27733 30.8245 6.34933 30.9259 6.392C31.0325 6.42933 31.2992 6.488 31.7259 6.568C32.1579 6.64267 32.4645 6.768 32.6459 6.944C32.8272 7.12 32.9179 7.40533 32.9179 7.8C32.9179 8.664 32.3819 9.096 31.3099 9.096C30.9579 9.096 30.5312 9.048 30.0299 8.952L29.7739 8.904L29.8059 8.008C30.4672 8.09333 30.9259 8.136 31.1819 8.136C31.4432 8.136 31.6192 8.112 31.7099 8.064C31.8059 8.01067 31.8539 7.93333 31.8539 7.832C31.8539 7.73067 31.8032 7.656 31.7019 7.608C31.6059 7.56 31.3499 7.50133 30.9339 7.432C30.5232 7.36267 30.2165 7.24533 30.0139 7.08C29.8112 6.91467 29.7099 6.62133 29.7099 6.2C29.7099 5.77333 29.8539 5.45333 30.1419 5.24C30.4299 5.02133 30.8005 4.912 31.2539 4.912C31.5685 4.912 31.9979 4.96267 32.5419 5.064L32.8059 5.112L32.7899 6ZM34.5713 7.456C34.5766 7.70133 34.6406 7.88 34.7633 7.992C34.8913 8.09867 35.0726 8.152 35.3073 8.152C35.8033 8.152 36.246 8.136 36.6353 8.104L36.8593 8.08L36.8753 8.872C36.262 9.02133 35.7073 9.096 35.2113 9.096C34.6086 9.096 34.1713 8.936 33.8993 8.616C33.6273 8.296 33.4913 7.776 33.4913 7.056C33.4913 5.62133 34.0806 4.904 35.2593 4.904C36.422 4.904 37.0033 5.50667 37.0033 6.712L36.9233 7.456H34.5713ZM35.9473 6.64C35.9473 6.32 35.8966 6.09867 35.7953 5.976C35.694 5.848 35.5153 5.784 35.2593 5.784C35.0086 5.784 34.83 5.85067 34.7233 5.984C34.622 6.112 34.5686 6.33067 34.5633 6.64H35.9473Z"
									fill="#ADBAC7"
								/>
								<defs>
									<linearGradient
										id="paint0_linear_5_2"
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
								</defs>
							</svg>
						</a>
					</Link>
				</section>

				<section>
					<HeroButton small tertiary>
						<span>About me</span>
					</HeroButton>
					<HeroButton small tertiary>
						<span>Projects</span>
					</HeroButton>
					<HeroButton small tertiary>
						<span>Uses</span>
					</HeroButton>
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
