import React from 'react'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import '../App.css';
import { BASE_URL } from '../config';
import AddToCart from './AddToCart'


export default function SingleView({data}) {
export default function SingleView() {
  // get the id from the url using useParams
  const { id } = useParams();

  // get the product from the data using the id
  const product = data.find(product => product.id === id);

  const [ product, setProduct ] = useState(null)

  const fetchProductById = async (id) => {
      const product = await fetch(`${BASE_URL}/products/${id}`)
        .then((res) => res.json());
      return product;
    };

    useEffect(() => {
      const getProduct = async () => {
        const data = await fetchProductById(id);
        setProduct(data)
      }
      getProduct();
    }, [id, fetchProductById]);

  if (!product) return (<div className="loading-spinner"></div>);


  const { user } = product;

@@ -37,7 +55,7 @@ export default function SingleView({data}) {
      </div>
      <div className="pa3 flex justify-end">
        <span className="ma2 f4">${product.price}</span>
        {/* TODO Implement the AddToCart button */}
        <AddToCart product={product} />
      </div>
    </article>

  )
}