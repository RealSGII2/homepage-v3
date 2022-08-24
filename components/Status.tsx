import axios from 'axios';
import React, { Suspense, useEffect, useMemo, useState } from 'react';
import { contentWidth, keyframes, styled } from 'styles/stitches';
import Text from './Text';

const StatusRoot = styled('a', {
	borderRadius: 99,
	border: 'solid 1px transparent',

	display: 'inline-flex',
	alignItems: 'center',

	gap: '0.75rem',

	padding: '0 1.125rem 0 1rem',
	height: 44,

	textDecoration: 'none',

	transition: 'background 135ms ease-out',

	variants: {
		variant: {
			default: {
				backgroundColor: 'rgba(213, 207, 153, 0.15)',
				color: '#d5cf99',
			},
			work: {
				backgroundColor: 'rgba(175, 153, 213, 0.15)',
				color: '#af99d5',
			},
			music: {
				backgroundColor: 'rgba(153, 213, 203, 0.15)',
				color: '$brandDefault',
				cursor: 'pointer',

				'&:hover': {
					backgroundColor: 'rgba(153, 213, 203, 0.2)',
				},

				'&:focus': {
					border: 'solid 1px $colors$brandDefault',
					boxShadow: '0 0 0 3px $colors$brandMuted',
				},
			},
			asleep: {
				backgroundColor: 'rgba(118, 131, 144, 0.15)',
				color: '$fgMuted',
			},
		},
	},

	defaultVariants: {
		variant: 'default',
	},
});

// The delay of animations, the index being nthChild - 1
// Generated through random number generator
const musicKeyframeOffsets = [0, 133, 237, 87];
const createMusicKeyframe = (nthChild: number) => {
	return {
		[`&:nth-child(${nthChild})`]: {
			animationName: keyframes({
				from: {
					// The first bar starts at x=2, then increment by 4.
					// This modifies the actual path of the element, so it needs to be
					// position accurate.
					d: `path("M${2 + (nthChild - 1) * 4} 2V14")`,
				},
				to: {
					d: `path("M${2 + (nthChild - 1) * 4} 7V9")`,
				},
			}),
			animationDelay: musicKeyframeOffsets[nthChild - 1] + 'ms',
		},
	};
};

const MusicIcon = styled('svg', {
	'& path': {
		stroke: 'CurrentColor',
		strokeWidth: 1.5,
		strokeLinecap: 'round',
		animation: '400ms linear alternate infinite',
		...createMusicKeyframe(1),
		...createMusicKeyframe(2),
		...createMusicKeyframe(3),
		...createMusicKeyframe(4),
	},
});

/** @type {React.FC} */
export default function Status() {
	const [state, setState] = useState<any>('default');
	const [spotifyData, setSpotifyData] = useState<any>();

	const workEndsAt = useMemo(() => new Date(), []);
	workEndsAt.setUTCHours(20, 55);

	const [workEndsAtString, setWorkEndsAtString] = useState('...');

	useEffect(() => {
		setWorkEndsAtString(
			workEndsAt.toLocaleTimeString(undefined, {
				timeStyle: 'short',
			})
		);
	}, [workEndsAt]);

	// Here we check for the state
	useEffect(() => {
		const updateStatus = async () => {
			const currentTime = new Date();
			const hours = currentTime.getUTCHours();

			if (hours >= 15 && hours <= 21) setState('work');
			else if (hours >= 5 && hours <= 14) setState('asleep');
			else {
				const data = await axios.get('/api/spotify_status');

				if (data.data.playing) {
					setSpotifyData(data.data);
					setState('music');
				}
			}
		};

		setInterval(updateStatus, 30000);

		updateStatus();
	}, []);

	let content = (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 16 16"
				width="20"
				height="20"
			>
				<path
					fillRule="evenodd"
					fill="currentcolor"
					d="M9.598 1.591a.75.75 0 01.785-.175 7 7 0 11-8.967 8.967.75.75 0 01.961-.96 5.5 5.5 0 007.046-7.046.75.75 0 01.175-.786zm1.616 1.945a7 7 0 01-7.678 7.678 5.5 5.5 0 107.678-7.678z"
				></path>
			</svg>

			<Text.SmallerTitle noMargin style={{ fontWeight: 500 }}>
				No activity
			</Text.SmallerTitle>
		</>
	);

	switch (state) {
		case 'work':
			content = (
				<>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						width="20"
						height="20"
					>
						<path
							fillRule="evenodd"
							fill="currentcolor"
							d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3zM3 3.75A.75.75 0 013.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 3.75zM3.75 6a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 9.75A.75.75 0 013.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 9.75zM7.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM7 6.75A.75.75 0 017.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 6.75zM7.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"
						></path>
					</svg>
					<Text.SmallerTitle noMargin style={{ fontWeight: 500 }}>
						Busy until{' '}
						<Suspense>
							<b>{workEndsAtString}</b>
						</Suspense>
					</Text.SmallerTitle>
				</>
			);
			break;
		case 'music':
			content = (
				<>
					<MusicIcon
						width="20"
						height="20"
						viewBox="0 0 16 16"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M2 2V14" />
						<path d="M6 2V14" />
						<path d="M10 2V14" />
						<path d="M14 2V14" />
					</MusicIcon>
					<Text.SmallerTitle noMargin style={{ fontWeight: 500 }}>
						Jamming to{' '}
						<Suspense>
							<b>{spotifyData?.title}</b> by{' '}
							<b>{spotifyData?.artist}</b>
						</Suspense>
					</Text.SmallerTitle>
				</>
			);
			break;
		case 'asleep':
			content = (
				<>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						width="20"
						height="20"
					>
						<path
							fillRule="evenodd"
							fill="currentcolor"
							d="M9.598 1.591a.75.75 0 01.785-.175 7 7 0 11-8.967 8.967.75.75 0 01.961-.96 5.5 5.5 0 007.046-7.046.75.75 0 01.175-.786zm1.616 1.945a7 7 0 01-7.678 7.678 5.5 5.5 0 107.678-7.678z"
						></path>
					</svg>

					<Text.SmallerTitle noMargin style={{ fontWeight: 500 }}>
						Snoring away
					</Text.SmallerTitle>
				</>
			);
			break;
	}

	let statusProps: any = {};
	if (state == 'music') statusProps.href = spotifyData.url;

	return (
		<StatusRoot variant={state} {...statusProps}>
			{content}
		</StatusRoot>
	);
}
