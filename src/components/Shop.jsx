import { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../config';
import { Alert } from './Alert';
import { Cart } from './Cart';
import { CartList } from './CartList';
import { GoodsList } from './GoodsList';
import { Preloader } from './Preloader';

export const Shop = () => {
	const [goods, setGoods] = useState([]);
	const [loading, setLoading] = useState(true);
	const [order, setOrder] = useState([]);
	const [isCartShow, setIsCartShow] = useState(false);
	const [alertName, setAlertName] = useState('');

	console.log(order);

	useEffect(() => {
		fetch(API_URL, {
			headers: { Authorization: API_KEY },
		})
			.then((response) => response.json())
			.then((data) => {
				data.featured && setGoods(data.featured);
				setLoading(false);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	const addToCart = (item) => {
		const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

		if (itemIndex < 0) {
			const newItem = {
				...item,
				quantity: 1,
			};
			setOrder([...order, newItem]);
		} else {
			const newOrder = order.map((orderItem, index) => {
				if (index === itemIndex) {
					return {
						...orderItem,
						quantity: orderItem.quantity + 1,
					};
				} else {
					return orderItem;
				}
			});

			setOrder(newOrder);
		}
		setAlertName(item.name);
	};

	const handleCartShow = () => {
		setIsCartShow(!isCartShow);
	};

	const removeFromCart = (itemId) => {
		const newOrder = order.filter((el) => el.id !== itemId);
		setOrder(newOrder);
	};

	const incQuantity = (itemId) => {
		const newOrder = order.map((el) => {
			if (el.id === itemId) {
				const newQuantity = el.quantity + 1;
				return {
					...el,
					quantity: newQuantity,
				};
			} else {
				return el;
			}
		});
		setOrder(newOrder);
	};
	const decQuantity = (itemId) => {
		const newOrder = order.map((el) => {
			if (el.id === itemId) {
				const newQuantity = el.quantity - 1;
				return {
					...el,
					quantity: newQuantity >= 0 ? newQuantity : 0,
				};
			} else {
				return el;
			}
		});
		setOrder(newOrder);
	};

	const closeAlert = () => {
		setAlertName('');
	};

	return (
		<main className="container content">
			<Cart quantity={order.length} handleCartShow={handleCartShow} />
			{loading ? <Preloader /> : <GoodsList goods={goods} addToCart={addToCart} />}
			{isCartShow && (
				<CartList
					order={order}
					handleCartShow={handleCartShow}
					removeFromCart={removeFromCart}
					incQuantity={incQuantity}
					decQuantity={decQuantity}
				/>
			)}
			{alertName && <Alert name={alertName} closeAlert={closeAlert} />}
		</main>
	);
};
