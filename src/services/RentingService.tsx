import TextradeService from "services/TextradeService";
import {APIResult} from "services/TextradeService";
import {Book, BookCondition} from "services/BookService";
import {SuccessResult} from "services/TextradeService";

export interface Rental {
    id:string;
    listing_id:string;
    lender:string;
    price:number;
    status:string;
    date_start:string;
    date_end:string;
}

export interface RentalResult extends APIResult {
    content:Rental[];
}

export default class RentingService {

    public static getUserRentals(username:string):Promise<RentalResult> {
        return TextradeService.get("rentals/"+username);
    }

    public static rentNewBook(username:string, from:string, listing_id:string):Promise<SuccessResult> {
        return TextradeService.post("rentals/rent", {username, from, listing_id});
    }

    public static cancelRenting(username:string, id:string):Promise<SuccessResult> {
        return TextradeService.post("rentals/cancel", {username, id});
    }
}