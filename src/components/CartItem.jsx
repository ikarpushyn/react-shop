import { useContext } from 'react';
import { ShopContext } from '../context/context';

export const CartItem = (props) => {
	const { id, name, price, quantity } = props;

	const { decQuantity, incQuantity, removeFromCart, changeValue } = useContext(ShopContext);

	return (
		<div>
			<li href="#!" className="collection-item">
				{name}{' '}
				<i onClick={() => decQuantity(id)} className="material-icons cart-quantity">
					remove
				</i>{' '}
				x{quantity}{' '}
				<input
					onChange={(e) => changeValue(e, id)}
					id="number"
					type="number"
					className="validate"
					value={quantity}
					min={0}
				/>
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
