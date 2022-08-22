import Title from 'components/head/Title';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<Title>Home</Title>
			</Head>

			<p>
				Welcome to my new homepage! :D
			</p>
		</div>
	);
};

export default Home;
