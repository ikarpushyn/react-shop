import React from 'react';
import { Item } from './Item';

export const GoodsList = (props) => {
	const { goods = [], addToCart } = props;

	if (!goods.length) {
		return <h3>Nothing here</h3>;
	}

	return (
		<div className="goods">
			{goods.map((item) => (
				<Item key={item.id} {...item} addToCart={addToCart} />
			))}
		</div>
	);
};
