export function PlateCard({ data, ...rest }) {
  return (
    <Container {...rest}>
      <Content>
        <button
          className="favButton"
          onClick={() =>
            isFavorite ? removeDishFromFavorite(data) : addDishToFavorite(data)
          }
        >
          {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
        </button>

        <div className="container">
          <img src={imageURL} alt="Imagem do prato" />
          <Link to={`/details/${data.id}`}>
            <h3 className="product-title">
              {data.title}
              {' >'}{' '}
            </h3>
          </Link>
          <p className="description">{data.description}</p>
          <h1 className="price">R$ {data.price}</h1>

          <PurchaseCard>
            <div className="counter">
              <ButtonText icon={FiMinus} onClick={decrease} />
              <span>{quantity.toString().padStart(2, '0')}</span>
              <ButtonText icon={FiPlus} onClick={increase} />
            </div>

            <Button
              title="incluir"
              icon={BsReceipt}
              onClick={() => handleAddDishToCart(data, quantity, imageURL)}
              style={{ height: 56, width: 92, padding: '12px 4px' }}
            />
          </PurchaseCard>
        </div>
      </Content>
    </Container>
  )
}
