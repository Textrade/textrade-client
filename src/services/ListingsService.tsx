import TextradeService from "services/TextradeService";
import {APIResult} from "services/TextradeService";
import {Book, BookCondition} from "services/BookService";
import {SuccessResult} from "services/TextradeService";

export interface Listing extends Book {
    id:number;
    price?:number;
    condition?:BookCondition;
    type?:"rent"|"sale";
    date_posted?:string;
    rent_start?:string;
    rent_end?:string;
}

export interface ListingResult extends APIResult {
    content:Listing[]
}


export default class ListingService {

    public static getAllListings():Promise<ListingResult> {
        // api call to login service.
        return TextradeService.get("listings/all");
    }

    public static getListingsForUser(username:string):Promise<ListingResult> {
        return TextradeService.get("listings/"+username);
    }

    public static listNewBook(username:string, listingInfo:Listing):Promise<ListingResult> {
        return TextradeService.post("listings", {username, ...listingInfo});
    }

    public static updateListing(username:string, updatedInfo:Listing):Promise<SuccessResult> {
        return TextradeService.update("listings", {username, ...updatedInfo});
    }
}