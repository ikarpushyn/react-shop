import React, { useContext } from 'react';
import { ShopContext } from '../context/context';
import { Item } from './Item';

export const GoodsList = () => {
	const { goods = [] } = useContext(ShopContext);

	if (!goods.length) {
		return <h3>Nothing here</h3>;
	}

	return (
		<div className="goods">
			{goods.map((item) => (
				<Item key={item.id} {...item} />
			))}
		</div>
	);
};
