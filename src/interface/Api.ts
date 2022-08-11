export interface id {
	wsPort: number;
}

export interface body {
	streamUrl: string;
}

export interface Resp<info = any> {
	message: string;
	info?: info;
}
