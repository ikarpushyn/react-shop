import { useContext } from 'react';
import { ShopContext } from '../context/context';

export const Item = (props) => {
	const { id, name, description, price, full_background, type } = props;

	const { addToCart } = useContext(ShopContext);

	return (
		<div className="card">
			<div className="card-image">
				<img src={full_background} alt={name} />
			</div>
			<div className="card-content">
				<span className="card-title">
					{name} {type}
				</span>

				<p>{description}</p>
			</div>
			<div className="card-action">
				<button
					className="btn"
					onClick={() =>
						addToCart({
							id,
							name,
							price,
						})
					}
				>
					BUY
				</button>
				<span className="right" style={{ fontSize: '1.8rem' }}>
					{price} currency
				</span>
			</div>
		</div>
	);
};
