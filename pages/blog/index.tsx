import Box from 'components/Box';
import Text from 'components/Text';
import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import path from 'path';
import { useEffect } from 'react';
import { styled } from 'styles/stitches';

const PostCard = styled(Box, {
	backgroundColor: '$bgOverlay',
	boxShadow: '0 8px 24px #1c2128',

	border: 'solid 1px transparent',
	borderRadius: 8,

	padding: '1.5rem 1.8rem',

	display: 'flex',
	flexDirection: 'column',

	transition: '135ms ease-out',

	cursor: 'pointer',

	'& > *': {
		margin: 0,
	},

	'&:hover': {
		boxShadow: '0 12px 48px #1c2128',
		backgroundColor: '#353c4b',
	},

	'&:focus': {
		backgroundColor: '#353c4b',
		border: 'solid 1px $colors$brandDefault',
		boxShadow: '0 12px 48px #1c2128, 0 0 0 3px $colors$brandMuted',

		transition: 'none',
	},
});

type BlogProps = {
	posts: {
		data: {
			title: string;
			description: string;
			backgroundImage: string;
			slug: string;
		};
		content: any;
		postPath: string;
		slug: string;
	}[];
};

export default function BlogPage({ posts }: BlogProps) {
	return (
		<Box
			centered
			style={{ minHeight: 'calc(100vh - 108px)', paddingTop: '3rem' }}
		>
			<Text.MediumTitle>Blog</Text.MediumTitle>

			<Box>
				{posts.map((post) => (
					<Link key={post.slug} href={`/blog/${post.slug}`}>
						{/* temp fix:tm: because i need to go to bed */}
						{/* @ts-ignore */}
						<PostCard as="a" tabindex="0">
							<Text.SmallTitle>{post.data.title}</Text.SmallTitle>
							<Text.HeroText>
								{post.data.description}
							</Text.HeroText>
						</PostCard>
					</Link>
				))}
			</Box>
		</Box>
	);
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const posts = readdirSync(path.join(process.cwd(), 'posts'))
		.filter((path) => /\.mdx?$/.test(path))
		.map((postPath) => {
			const { content, data } = matter(
				readFileSync(path.join(process.cwd(), 'posts', postPath))
			);
			const bits = postPath.split('/');

			return {
				content,
				data,
				postPath,
				slug: bits[bits.length - 1].replace(/\.mdx?$/, ''),
			};
		});

	return {
		props: {
			posts,
		},
	};
};
