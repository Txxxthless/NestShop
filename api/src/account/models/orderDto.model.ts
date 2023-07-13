export class OrderDto {
  constructor(
    public id: number,
    public productName: string,
    public productPrice: number,
    public quantity: number,
    public productId: number,
  ) {}
}
