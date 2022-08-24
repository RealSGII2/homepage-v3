import type { CSS } from '@stitches/react';
import Box from 'components/Box';
import Title from 'components/head/Title';
import HeroButton from 'components/HeroButton';
import Status from 'components/Status';
import Text from 'components/Text';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { styled } from 'styles/stitches';

const heroBoxCenterCSS: CSS = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',

	height: 'calc(100vh - 108px)',
	paddingBottom: 108,
};

const DisplayImage = styled(Image, {
	borderRadius: 8,
});

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<Title>Home</Title>
			</Head>

			<Box css={heroBoxCenterCSS}>
				<Box centered>
					<Text.SmallTitle noMargin>Hello, I&apos;m</Text.SmallTitle>
					<Text.HeroTitle noMargin brandGradient>
						William Wise
					</Text.HeroTitle>

					<Text.HeroText halfWidth>
						I&apos;m a hobbyist web developer based in Arkansas. I
						like to build things that allow others to do things.
					</Text.HeroText>

					<Box row style={{ marginBlock: '2rem' }}>
						<HeroButton onClick={() => {}}>
							<span>Get in contact</span>
						</HeroButton>
						<HeroButton onClick={() => {}} secondary>
							<span>More about me</span>
						</HeroButton>
					</Box>

					<Status />
				</Box>
			</Box>

			<Box background borderTop style={{ padding: '5rem 0' }}>
				<Box centered>
					<Text.SmallerTitle noMargin brandGradient>
						Featured Commission
					</Text.SmallerTitle>
					<Text.MediumTitle noMargin style={{ marginTop: '1rem' }}>
						West Swim & Dive
					</Text.MediumTitle>
					<Text.HeroText>
						My school&apos;s Swim & Dive team commissioned me for a
						forum. There, swim and dive members can share photos and
						videos, read announcements, and see records.
					</Text.HeroText>

					<Box
						row
						style={{ alignItems: 'center', marginBottom: '2rem' }}
					>
						<HeroButton
							data-no-global-style
							as="a"
							referrer="noreferrer"
							target="_blank"
							href="//westswimdive.org"
						>
							<span>View in production</span>
						</HeroButton>

						<span>
							<i>Source code is unavailable.</i>
						</span>
					</Box>

					<DisplayImage
						src="/westSwimDive.png"
						alt="West's Swim & Dive website."
						width="1184"
						height="601"
					/>
				</Box>
				<Box
					centered
					style={{
						marginTop: '5rem',
						paddingTop: '5rem',
						borderTop: 'solid 1px #444c56',
					}}
				>
					<Text.SmallerTitle noMargin brandGradient>
						Featured Project
					</Text.SmallerTitle>
					<Text.MediumTitle noMargin style={{ marginTop: '1rem' }}>
						PATHOS-II
					</Text.MediumTitle>
					<Text.HeroText>
						I recreated the pathOS terminal from Frictional
						Games&apos; horror game, SOMA. This is a great example
						of using 9-slice technology and border-image in CSS to
						create customized containers.
					</Text.HeroText>

					<Box
						row
						style={{ alignItems: 'center', marginBottom: '2rem' }}
					>
						<HeroButton
							data-no-global-style
							as="a"
							referrer="noreferrer"
							target="_blank"
							href="//pathos.realsgii2.dev/"
						>
							<span>View in production</span>
						</HeroButton>

						<HeroButton
							data-no-global-style
							as="a"
							referrer="noreferrer"
							target="_blank"
							href="//github.com/RealSGII2/pathOS-ui"
							secondary
						>
							<span>View source</span>
						</HeroButton>
					</Box>

					<DisplayImage
						src="/pathOS.png"
						alt="West's Swim & Dive website."
						width="1184"
						height="601"
					/>
				</Box>
			</Box>
		</div>
	);
};

export default Home;
