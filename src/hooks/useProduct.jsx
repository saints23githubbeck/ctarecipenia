import { useEffect, useState } from 'react';

const useProduct = () => {
    const [catProduct, SetCatProduct] = useState([]);
    useEffect(() => {
        fetch('./fakeProduct.json')
            .then(res => res.json())
            .then(data => SetCatProduct(data))
    }, [])
    return [catProduct];
};

export default useProduct;