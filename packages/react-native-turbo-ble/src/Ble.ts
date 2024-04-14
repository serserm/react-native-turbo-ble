import { TurboBle } from './TurboBle';

export function multiply(a: number, b: number): Promise<number> {
  return TurboBle.multiply(a, b);
}
