import { useContext } from 'react';
import { ShopContext } from '../context/context';
import { CartItem } from './CartItem';

export const CartList = (props) => {
	const { order = [], handleCartShow } = useContext(ShopContext);

	const totalPrice = order.reduce((sum, el) => {
		return sum + el.price * el.quantity;
	}, 0);

	return (
		<div>
			<ul className="collection cart-list">
				<li href="#!" className="collection-item active">
					Carts
				</li>

				{order.length ? (
					order.map((item) => <CartItem key={item.id} {...item} />)
				) : (
					<li href="#!" className="collection-item">
						Cart is empty
					</li>
				)}

				<li href="#!" className="collection-item">
					Total cost: {totalPrice}
					<button className="secondary-content btn-small">Confirm</button>
				</li>
				<i className="material-icons cart-close" onClick={handleCartShow}>
					close
				</i>
			</ul>
		</div>
	);
};
