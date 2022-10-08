import { useContext } from 'react';
import { ShopContext } from '../context/context';

export const Cart = () => {
	const { order, handleCartShow } = useContext(ShopContext);

	const quantity = order.length;

	return (
		<div className="cart blue darken-4 white-text" onClick={handleCartShow}>
			<i className="material-icons">shopping_cart</i>
			{quantity ? <span className="cart-quantity">{quantity}</span> : null}
		</div>
	);
};
