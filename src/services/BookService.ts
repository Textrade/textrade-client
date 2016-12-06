import TextradeService from "services/TextradeService";
import {APIResult} from "services/TextradeService";

export class BookStatus {
	static available:"available" = "available";
	static unavailable:"unavailable" = "unavailable";
}

export class Condition {
	static NEW:"new" = "new";
	static USED:"used" = "used";
}

export declare type BookCondition = typeof Condition.NEW | typeof Condition.USED;

/* generic interface for a book */
export interface Book {
	/* id */
	isbn: string;
	description: string;
	author:string;
	title: string;
	img_url: string;
}

export interface BookInfo extends Book {
	user: string;
	condition: string;
}

export interface BookResult extends BookInfo {
	book_status: typeof BookStatus.available | typeof BookStatus.unavailable
}

export interface SearchResult extends APIResult {
	content: BookResult[]
}

export interface RequestResult extends APIResult {
	content: boolean[]
}

export default class BookService {

	public static searchBook(ISBN_or_title:string):Promise<SearchResult> {
		// api call to login service.
		return TextradeService.get("search/q?="+ISBN_or_title);
	}

	public static getBooksSoldByUser(username:string):Promise<SearchResult> {
		return TextradeService.get("search/u?="+username);
	}

	public static sellBookByUser(username:string, bookInfo:BookInfo) {
		return TextradeService.post("sell/", {username, bookInfo})
	}

	public static requestBookFromUser(requestedBy:string, requestedFrom:string, isbn:string):Promise<RequestResult> {
		return TextradeService.post("request/", {requestedBy, requestedFrom, isbn})
	}
}