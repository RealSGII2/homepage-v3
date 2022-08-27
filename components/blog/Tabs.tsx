import * as TabsPrimitive from '@radix-ui/react-tabs';
import { styled } from 'styles/stitches';

const Root = styled(TabsPrimitive.Root, {
	border: 'solid 1px $colors$border',
	borderRadius: 8,
});

const List = styled(TabsPrimitive.List, {
	display: 'flex',
	gap: '0.5rem',
	padding: '1rem 1rem 0',

	variants: {
		offset: {
			true: {
				paddingBottom: '1rem',
			}
		}
	}
});

const Trigger = styled(TabsPrimitive.Trigger, {
	height: 36,
	padding: '0 1rem',

	border: 'solid 1px transparent',
	borderRadius: 8,

	backgroundColor: 'rgba(173, 186, 199, 0.1)',

	fontSize: '0.875rem',
	fontWeight: 700,
	color: '$fgDefault',

	cursor: 'pointer',
	outline: 'none',

	transition: '135ms ease-out',
	transitionProperty: 'color, background-color',

	'&:hover': {
		backgroundColor: 'rgba(173, 186, 199, 0.15)',
	},

	'&:active': {
		transition: 'none',
	},

	'&[data-state="active"]': {
		color: '$brandDefault',
		backgroundColor: '$colors$brandSubtle',
	},

	'&[data-state="active"]:hover': {
		color: '$brandDefault',
		backgroundColor: 'rgba(153, 213, 203, 0.25)',
	},

	'&[data-state="active"]:active': {
		color: '$brandDefault',
		backgroundColor: 'rgba(153, 213, 203, 0.3)',
	},

	'&:focus': {
		border: 'solid 1px $colors$brandDefault',
		boxShadow: '0 0 0 2px $colors$brandMuted',
	},
});

const Content = styled(TabsPrimitive.Content, {
	'& p': {
		paddingLeft: '1rem',
	},

	'& pre:last-child': {
		marginBottom: 0,

		borderTopLeftRadius: 0,
		borderTopRightRadius: 0,
		borderBottomLeftRadius: 8,
		borderBottomRightRadius: 8,
	}
});

const Tabs = {
	Root,
	List,
	Trigger,
	Content,
};

export default Tabs;
