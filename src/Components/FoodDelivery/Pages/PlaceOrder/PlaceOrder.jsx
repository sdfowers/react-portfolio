import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'

export const PlaceOrder = () => {

	const {getTotalCartAmount} = useContext(StoreContext);

	return (
		<form className='place-order'>
			<div className="place-order-left">
				<p className="title">Delivery Information</p>
				<div className="multi-fields">
					<input type="text" placeholder='First Name' />
					<input type="text" placeholder='Last Name' />
				</div>
				<input type="email" placeholder='Email Address' />
				<input type="text" placeholder='Phone Number' />
				<input type="text" placeholder='Street Address' />
				<div className="multi-fields">
					<input type="text" placeholder='City' />
					<input type="text" placeholder='State' />
				</div>
				<div className="multi-fields">
					<input type="number" placeholder='Post/Zip Code' />
					<input type="text" placeholder='Country' />
				</div>
				
			</div>
			<div className="place-order-right">
				<div className="cart-total">
					<h2>Cart Total</h2>
					<div className='cart-total-container'>
						<div className="cart-total-details">
							<p>Subtotal</p>
							<p>${getTotalCartAmount()}</p>
						</div>
						<hr />
						<div className="cart-total-details">
							<p>Delivery Fee</p>
							<p>${getTotalCartAmount() === 0 ? 0 : 5}</p>
						</div>
						<hr />
						<div className="cart-total-details">
							<b>Total</b>
							<b>${getTotalCartAmount() + (getTotalCartAmount() === 0 ? 0 : 5)}</b>
						</div>
					</div>
					<button >PROCEED TO PAYMENT</button>
				</div>
			</div>
		</form>
	)
}
