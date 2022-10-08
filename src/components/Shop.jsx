import { useContext, useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../config';
import { ShopContext } from '../context/context';
import { Alert } from './Alert';
import { Cart } from './Cart';
import { CartList } from './CartList';
import { GoodsList } from './GoodsList';
import { Preloader } from './Preloader';

export const Shop = () => {
	const { goods, loading, order, isCartShow, alertName, setGoods } = useContext(ShopContext);

	useEffect(() => {
		fetch(API_URL, {
			headers: { Authorization: API_KEY },
		})
			.then((response) => response.json())
			.then((data) => {
				setGoods(data.featured);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<main className="container content">
			<Cart quantity={order.length} />
			{loading ? <Preloader /> : <GoodsList />}
			{isCartShow && <CartList />}
			{alertName && <Alert />}
		</main>
	);
};
