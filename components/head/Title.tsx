import React from 'react';
import Meta from './Meta';

export type TitleProps = {
	children: string;
};

/** @type {React.FC<TitleProps>} */
export default function Title({ children }: TitleProps) {
	return (
		<>
			<title>
				{children}
			</title>

			<Meta name='title' ogpName='^' content={children} />
		</>
	);
}
