import TextradeService from "services/TextradeService";
import {APIResult} from "services/TextradeService";
import {SuccessResult} from "services/TextradeService";

export interface Sale {
    id:string;
    listing_id:string;
    lender:string;
    price:number;
    date_start:string;
    date_end:string;
}

export interface SaleResult extends APIResult {
    content:Sale[];
}

export default class RentingService {

    public static getUserSales(username:string):Promise<SaleResult> {
        return TextradeService.get("sales/all/"+username);
    }

    public static buyNewBook(username:string, from:string, id:string):Promise<SuccessResult> {
        return TextradeService.post("sales/buy", {username, from, id});
    }

    public static cancelRenting(username:string, id:string):Promise<SuccessResult> {
        return TextradeService.post("sales/cancel", {username, id});
    }

}