import React from 'react';

export type MetaProps = {
	name?: string;
	ogpName?: '^' | string;
	twitterName?: '^' | string;
	content: string;
};

/** @type {React.FC<MetaProps>} */
export default function Meta({
	name,
	ogpName: pureOgpName,
	twitterName: pureTwitterName,
	content,
}: MetaProps) {
	// Pass ^ in to these to make it the same as `name` with the proper namespace ID appended
	const ogpName = pureOgpName == '^' ? name : pureOgpName;
	const twitterName = pureTwitterName == '^' ? name : pureTwitterName;

	return (
		<>
			{name && (
				<meta
					name={name}
					itemProp={name}
					property={name}
					content={content}
				/>
			)}

			{pureOgpName && (
				<meta
					name={'og:' + ogpName}
					itemProp={'og:' + ogpName}
					property={'og:' + ogpName}
					content={content}
				/>
			)}

			{pureTwitterName && (
				<meta
					name={'twitter:' + twitterName}
					itemProp={'twitter:' + twitterName}
					property={'twitter:' + twitterName}
					content={content}
				/>
			)}
		</>
	);
}
