export class Modal {
  title: string;
  body: string;
  data: any;

  constructor(
    title?: string,
    body?: string,
    data?: any
  ) {
    this.title = title;
    this.body = body;
    this.data = data;
  }
}
