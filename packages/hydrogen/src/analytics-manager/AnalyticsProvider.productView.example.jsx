import {UNSTABLE_Analytics} from '@shopify/hydrogen';

export default function Product() {
  const {product} = useLoaderData();
  const {selectedVariant} = product;

  return (
    <div className="product">
      <h1>{product.title}</h1>
      <UNSTABLE_Analytics.ProductView
        data={{
          products: [
            {
              id: product.id,
              title: product.title,
              price: selectedVariant?.price.amount || '0',
              vendor: product.vendor,
              variantId: selectedVariant?.id || '',
              variantTitle: selectedVariant?.title || '',
              quantity: 1,
            },
          ],
        }}
      />
    </div>
  );
}
