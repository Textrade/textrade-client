import TextradeService from "services/TextradeService";
import {APIResult} from "services/TextradeService";
import {Book} from "services/BookService";
import {SuccessResult} from "services/TextradeService";
import {Listing} from "services/ListingsService";
import {UserInfo} from "services/UserService";

export interface Recommendation {
	book:Book;
	rating:number;
}

export interface CartItem {
	listing:Listing;
	buyer:UserInfo;
}

export interface CheckoutResult extends APIResult {
	content:CartItem[]
}

export interface RecommendationResult extends APIResult {
	content:Recommendation[]
}

export default class CheckoutService {

	public static getUserCart(username:string):Promise<CheckoutResult> {
		return TextradeService.get("checkout/"+username);
	}

	// public static getRecommendations(username:string):Promise<RecommendationResult> {
	// 	return TextradeService.get("recommendations/?type=cart&user="+username);
	// }

	public static addToCart(username:string, listing_id:number):Promise<CheckoutResult> {
		return TextradeService.post("checkout", {username, listing_id});
	}

	public static removeFromCart(username:string, listing_id:number):Promise<CheckoutResult> {
		return TextradeService.delete("checkout", {username, listing_id});
	}
}
