import { useEffect } from 'react';

import Appbar from 'components/Appbar';
import Meta from 'components/head/Meta';
import Title from 'components/head/Title';

import { globalStyles } from 'styles/stitches';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import Footer from 'components/Footer';

const scrollListener = () => {
	if (typeof document == 'undefined') return;

	document.body.setAttribute(
		'style',

		// This is a very fancy way to basically get a percentage (capped at 100%)
		// of how far the user scrolled down to 240. This is used in CSS props for scroll effects.
		// 0 is at Y=0, 1 is at Y>=240.
		`--scroll-factor: ${
			1 -
			Math.min(Math.max(Math.round(document.body.scrollTop) / 240, 0), 1)
		}; --scroll-factor-viewport: ${
			1 -
			Math.min(Math.max(Math.round(document.body.scrollTop) / document.body.clientHeight, 0), 1)
		}`
	);
};

function App({ Component, pageProps }: AppProps) {
	// This applies global css as written in styles/stiches
	globalStyles();

	useEffect(() => {
		if (typeof document == 'undefined') return;

		document.body.addEventListener('scroll', scrollListener);

		return () => {
			document.body.removeEventListener('scroll', scrollListener);
		};
	}, []);

	return (
		<>
			<Head>
				<Meta name="viewport" content="width=device-width" />
				<Meta
					name="author"
					ogpName="site_name"
					content="William Wise (@RealSGII2)"
				/>

				<Title>William Wise</Title>

				<Meta
					name="description"
					ogpName="^"
					twitterName="^"
					content="Hello, I'm William Wise. I'm a hobbyist web developer based in Arkansas. I like to build things that allow others to do things."
				/>

				<Meta
					name="image"
					ogpName="^"
					twitterName="^"
					content="https://cdn.realsgii2.dev/homepage/embedBanner.png"
				/>

				<Meta
					twitterName="image:src"
					content="https://cdn.realsgii2.dev/homepage/embedBanner.png"
				/>

				<Meta
					name="keywords"
					content="portfolio, skills, developer, development, nodejs, react, scss, typescript, javascript, css, html, design, iconography, illustration"
				/>

				<Meta twitterName="card" content="summary_large_image" />

				<Meta ogpName="locale" content="en_US" />

				<Meta name="theme-color" content="#99d5cb" />
				<Meta
					name="apple-mobile-web-app-status-bar-style"
					content="#99d5cb"
				/>
				<Meta name="msapplication-TileColor" content="#99d5cb" />
				<Meta name="msapplication-navbutton-color" content="#99d5cb" />

				<Meta
					name="url"
					ogpName="^"
					twitterName="^"
					content="https://wwise.dev/"
				/>
				<link rel="canonical" href="https://wwise.dev" />

				<link
					rel="icon"
					href="https://cdn.realsgii2.dev/wwiseIcon.ico"
				/>
				<link
					rel="apple-touch-icon"
					href="https://cdn.realsgii2.dev/wwiseIcon.ico"
				/>
				<link
					rel="apple-touch-icon-precomposed"
					href="https://cdn.realsgii2.dev/wwiseIcon.ico"
				/>
				<link
					rel="msapplication-TileImage"
					href="https://cdn.realsgii2.dev/wwiseIcon.ico"
				/>
			</Head>

			<Appbar />

			<Component {...pageProps} />

			<Footer />
		</>
	);
}

export default App;
