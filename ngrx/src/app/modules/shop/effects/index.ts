import { ItemEffects } from '@app/modules/shop/effects/item.effects';
import { CartEffects } from '@app/modules/shop/effects/cart.effects';

export * from './item.effects';

export const SHOP_EFFECTS = [
  ItemEffects,
  CartEffects,
];
