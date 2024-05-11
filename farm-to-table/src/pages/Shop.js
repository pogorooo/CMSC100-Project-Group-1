const products = [{ code: 'product1' }, { code: 'product2'}]

export default function Shop() {

  return (
    <>
      <ol>
        { products.map((product, i) => <li key={i}>{product.code}</li>) }
      </ol>
    </>
  )
}