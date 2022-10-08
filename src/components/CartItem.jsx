import { useContext } from 'react';
import { ShopContext } from '../context/context';

export const CartItem = (props) => {
	const { id, name, price, quantity } = props;

	const { decQuantity, incQuantity, removeFromCart } = useContext(ShopContext);

	return (
		<div>
			<li href="#!" className="collection-item">
				{name}{' '}
				<i onClick={() => decQuantity(id)} className="material-icons cart-quantity">
					remove
				</i>{' '}
				x{quantity}
				<i onClick={() => incQuantity(id)} className="material-icons cart-quantity">
					add
				</i>
				{price * quantity} currency
				<span className="secondary-content" onClick={() => removeFromCart(id)}>
					<i className="material-icons cart-delete">close</i>
				</span>
			</li>
		</div>
	);
};
