import Box from 'components/Box';
import Status, { DisplayMusicIcon } from 'components/Status';
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
import React, { useEffect } from 'react';
import { styled } from 'styles/stitches';
import { visit } from 'unist-util-visit';
import { h } from 'hastscript';

import remarkDirective from 'remark-directive';
import remarkDirectiveRehype from 'remark-directive-rehype';
import remarkPrism from 'remark-prism';
import Tabs from 'components/blog/Tabs';

const components = {
	Status,
	DisplayMusicIcon,
	Box,
	'tabs': Tabs.Root,
	'tabs-header': Tabs.List,
	'tab-button': Tabs.Trigger,
	tab: Tabs.Content,
};

const ArticleBody = styled(Box, {
	borderRadius: 12,

	backgroundColor: '$bgOverlay',
	boxShadow: '0 12px 48px rgba(28, 33, 40, 0.5)',

	fontSize: 20,

	'& main': {
		'& > :first-child': {
			marginTop: 0,
		},

		'& > :last-child': {
			marginBottom: 0,
		},
	},
});

const ArticleButton = styled('button', {
	outline: 'none',
	cursor: 'pointer',

	height: 36,
	padding: '0 1.5rem',

	display: 'flex',
	alignItems: 'center',
	gap: '0.5rem',

	border: 'solid 1px transparent',
	borderRadius: 99,

	backgroundColor: 'rgba(173, 186, 199, 0.1)',
	color: '$fgDefault',

	fontSize: 14,
	fontWeight: 700,

	transition: '135ms ease-out',
	transitionProperty: 'color, background-color',

	'&:hover': {
		backgroundColor: 'rgba(173, 186, 199, 0.15)',
	},

	'&:active': {
		transition: 'none',
		color: '$brandDefault',
		backgroundColor: '$colors$brandSubtle',
	},

	'&:focus': {
		border: 'solid 1px $colors$brandDefault',
		boxShadow: '0 0 0 2px $colors$brandMuted',
	},

	'& > svg:first-child': {
		marginLeft: -2,
	},
});

type PostProps = {
	source: any;
	frontMatter: {
		title: string;
		description: string;
		backgroundImage?: string;
	};
};

export default function PostPage({ source, frontMatter }: PostProps) {
	useEffect(() => {
		if (
			typeof document == 'undefined' ||
			typeof frontMatter.backgroundImage == 'undefined'
		)
			return;

		const html = document.querySelector('html');

		html?.setAttribute(
			'style',
			`--custom-background: url("${frontMatter.backgroundImage}")`
		);

		html?.setAttribute(
			'data-show-custom-background',
			'data-show-custom-background'
		);
	}, [frontMatter]);

	return (
		<Box
			centered
			style={{
				minHeight: 'calc(100vh - 108px)',
				paddingTop: 'calc(3rem + 10vh)',
				paddingBottom: '3rem',
			}}
		>
			<ArticleBody as="article">
				<Box style={{ padding: '2rem' }} data-markdown>
					<Text.MediumTitle style={{ margin: 0 }}>
						{frontMatter.title}
					</Text.MediumTitle>
					<Text.SmallTitle style={{ margin: 0, fontWeight: 400 }}>
						{frontMatter.description}
					</Text.SmallTitle>
				</Box>

				<Box
					borderTop
					style={{ padding: '1.5rem 2rem 1rem' }}
					as="main"
					data-markdown
				>
					<MDXRemote {...source} components={components} />
				</Box>

				<Box
					row
					borderTop
					css={{
						padding: '1rem 2rem 2rem',
						position: 'sticky',
						bottom: '0',
						backgroundColor: '$bgOverlay',
						borderBottomLeftRadius: 'inherit',
						borderBottomRightRadius: 'inherit',
					}}
				>
					<ArticleButton>
						<span>Share</span>
					</ArticleButton>
					<ArticleButton>
						<span>View source</span>
					</ArticleButton>
				</Box>
			</ArticleBody>
		</Box>
	);
}

// /** @type {import('unified').Plugin<[], import('mdast').Root>} */
// const rehypeCodeTabs = () => {
// 	return (tree: any) => {
// 		visit(tree, (node) => {
// 			if (
// 				node.type === 'leafDirective' ||
// 				node.type === 'containerDirective'
// 			) {
// 				if (node.name !== 'tabs') return;

// 				const data = node.data || (node.data = {});
// 				const tagName = node.type === 'textDirective' ? 'span' : 'div';

// 				data.hName = tagName;
// 				data.hProperties = h(tagName, node.attributes).properties;
// 			}
// 		});
// 	};
// };

export const getStaticProps: GetStaticProps = async ({ params }) => {
	if (typeof params == 'undefined')
		return {
			notFound: true,
		};

	const postPath = path.join(process.cwd(), 'posts', `${params.slug}.mdx`);
	const { content, data: frontMatter } = matter(readFileSync(postPath));

	const source = await serialize(content, {
		mdxOptions: {
			remarkPlugins: [
				[remarkPrism],
				remarkDirective,
				remarkDirectiveRehype,
			],
			rehypePlugins: [],
		},
		scope: frontMatter,
	});

	return {
		props: {
			source,
			frontMatter,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const filePaths = readdirSync(path.join(process.cwd(), 'posts')).filter(
		(path) => /\.mdx?$/.test(path)
	);

	const paths = filePaths
		.map((path) => path.replace(/\.mdx?$/, ''))
		.map((slug) => ({ params: { slug } }));

	return {
		paths,
		fallback: false,
	};
};
