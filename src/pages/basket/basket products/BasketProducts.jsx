import React, { useContext } from 'react';
import BasketTile from './basket tile/BasketTile';
import { BasketProductsContext } from '../../../components/app/App';

const BasketProducts = () => {
    const basketContext = useContext(BasketProductsContext);

    return (
        <div className={'basket-products-wrapper col-lg-6'}>
            <div className="row basket-products-container">
                {basketContext.basketProducts.map((product) => (
                    <BasketTile productInfo={product} key={product.id} quantityOptions={true} />
                ))}
            </div>
        </div>
    );
};

export default React.memo(BasketProducts);
