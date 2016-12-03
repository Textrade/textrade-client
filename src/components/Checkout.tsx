import {CartItem} from "services/CheckoutService";
import CheckoutStore from "stores/CheckoutStore";
import * as weavejs from "weavejs";
import VBox = weavejs.ui.flexbox.VBox;
import HBox = weavejs.ui.flexbox.HBox;
import Button = weavejs.ui.Button;
import Input = weavejs.ui.Input;

export interface CheckoutProps {

}

export interface CheckoutState {
	items: CartItem[]
}

export default class Checkout extends React.Component<CheckoutProps, CheckoutState> {

	constructor(props:CheckoutProps) {
		super(props);
		this.state = this.getInitialState()
	}

	getInitialState():CheckoutState {
		return {
			items: CheckoutStore.getCart()
		};
	}

	componentDidMount() {
		Weave.getCallbacks(CheckoutStore).addGroupedCallback(this, this.forceUpdate);
	}

	componentWillUnmount() {
		Weave.getCallbacks(CheckoutStore).removeCallback(this, this.forceUpdate);
	}

	render() {
		return (
			<VBox>
				<div>Checkout</div>
				<table>
					<thead>
						<td>PRODUCTS</td>
						<td>PRICE</td>
					</thead>
					<tbody>
					{
						this.state.items.map((item:CartItem) => {
							return (
								<tr>
									<td>
										{item.listing.title}
									</td>
									<td>
										{item.listing.price}
									</td>
								</tr>
							);
						})
					}
					</tbody>
				</table>
				<HBox>
					<HBox>
						<Input placeholder="Coupon Code"></Input>
						<Button>POST COMMENT</Button>
					</HBox>
					<Button>UPDATE CART</Button>
				</HBox>
			</VBox>
		)
	}
}