import * as $ from "jquery";

const POST:"POST" = "POST";
const GET:"GET" = "GET";
const PUT:"PUT" = "PUT";
const DELETE:"DELETE" = "DELETE";
const OK = "200";

declare type METHOD_TYPE = typeof POST|typeof GET|typeof PUT|typeof DELETE;

export interface APIResult {
	status:string;
	msg: string;
	totalItems: number;
	content: any;
}

export interface SuccessResult extends APIResult {
	content: boolean;
}

export class TextradeService {

	private url:string;
	private token:string;

	constructor(url:string, token:string)
	{
		this.url = url;
		this.token = token;
	}

	private invokeService(method:METHOD_TYPE, endpoint:string, params?:{[key:string]: string}) {
		return new Promise((resolve:(result:any)=>void, reject:(error:string)=>void) => {
			$.ajax({
				headers: {
					Authorization: this.token
				},
				dataType: "json",
				method: method,
				url: this.url + endpoint,
				data: params,
				success: (result: any, textStatus: string) => {
					if(textStatus != OK)
						console.error(textStatus + " error attempting api request", this.url + endpoint);
					resolve(result);
				},
				error: (xhr: JQueryXHR, textStatus: string, errorThrown: string) => {
					reject(errorThrown);
				}
			});
		});
	}

	public get(endpoint:string) {
		return this.invokeService(GET, endpoint);
	}

	public post(endpoint:string, params:{[key:string]: any}) {
		return this.invokeService(POST, endpoint, params);
	}

	public put(endpoint:string, params:{[key:string]: any}) {
		return this.invokeService(PUT, endpoint, params);
	}

	public delete(endpoint:string, params:{[key:string]: any}) {
		return this.invokeService(DELETE, endpoint, params);
	}
}

export default new TextradeService(
	"http://127.0.0.1:5000/api/v1/",
	"Token eyJleHAiOjMuMTU1NzYwMDAwMDE0NzU4ZSsyMCwiaWF0IjoxNDc1ODA4NjcyLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.bqtLKCuvwFzckdQU1XkzGVdVqi6cwtNFWHBxKsSJ324"
);