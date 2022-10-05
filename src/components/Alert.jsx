import { useEffect } from 'react';

export const Alert = (props) => {
	const { name = '', closeAlert = Function.prototype } = props;

	useEffect(() => {
		const timerId = setTimeout(closeAlert, 3000);

		return () => {
			clearTimeout(timerId);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [name]);

	return (
		<div id="toast-container">
			<div className="toast">{name} Add to cart</div>
		</div>
	);
};
