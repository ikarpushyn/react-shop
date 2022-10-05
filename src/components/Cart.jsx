export const Cart = (props) => {
	const { quantity, handleCartShow } = props;
	return (
		<div className="cart blue darken-4 white-text" onClick={handleCartShow}>
			<i className="material-icons">shopping_cart</i>
			{quantity ? <span className="cart-quantity">{quantity}</span> : null}
		</div>
	);
};
