import { Order } from '../../models/Order';
import { CreateOrderDTO } from './DTO/CreateOrderDTO';

export async function createOrder({ table, products }: CreateOrderDTO) {
  const orders = await Order.create({
    table,
    products,
  });

  return orders;
}
