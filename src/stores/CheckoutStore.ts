import Dispatcher from "dispatcher/Dispatcher";
import * as weavejs from "weavejs"
import LinkableHashMap = weavejs.core.LinkableHashMap;
import CheckoutService from "services/CheckoutService";
import UserStore from "stores/UserStore";
import LinkableVariable = weavejs.core.LinkableVariable;
import {CartItem} from "services/CheckoutService";
import {CheckoutResult} from "services/CheckoutService";

export class CheckoutStore {

	cart = Weave.linkableChild(this, new LinkableVariable(Array), this.handleCart);
	// recommendation = Weave.linkableChild(this, new LinkableHashMap(Recommendation), this.handleRecommendation);

	private handleCart() {

	}

	/* protected */ addToCart(listing_id:number) {
		var username = UserStore.getUser().username;
		CheckoutService.addToCart(username, listing_id).then((result:CheckoutResult) => {
			this.cart.setSessionState(result.content);
		}, (error:Error) => {
			console.log(error);
		});
	}
	
	fetchCart() {
		var username = UserStore.getUser().username;
		return CheckoutService.getUserCart(username).then((result:CheckoutResult) => {
			this.cart.setSessionState(result.content);
		}, (error:Error) => {
			console.log(error);
		});
	}

	public getCart():CartItem[] {
		return this.cart.getSessionState() as CartItem[] || [];
	}
}

Weave.registerClass(CheckoutStore, "CheckoutStore");
export default Dispatcher.root.requestObject("CheckoutStore", CheckoutStore, true);