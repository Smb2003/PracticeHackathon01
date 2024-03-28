import { CircularProgress, Rating, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export const ProductDetail = () => {
    const {id} = useParams();
    console.log(id);
    const [SingleProductData, setSingleProductData] = useState([]);
    const checkAPI = async () => {
        const Singleproduct = await fetch(`https://dummyjson.com/products/${id}`);
        const Data = await Singleproduct.json();
        console.log(Data);
        setSingleProductData([...SingleProductData,Data]);
    };
    console.log(SingleProductData);
    useEffect(() => {
        checkAPI();
    }, []);
  return (
    <div className="w-full h-screen">
      <div className="relative w-full h-32 md:h-1/3 bg-orange-600 ">
        <div className="absolute inset-x-0 bottom-0 m-8">
          <h1 className="text-2xl md:text-3xl font-medium text-center hover:underline hover:cursor-pointer">
            Product Details
          </h1>
        </div>
      </div>

      <div className="w-full h-screen p-3 flex flex-wrap">
        {SingleProductData? (
         SingleProductData.map((item, index) => {
            const {
              thumbnail,
              brand,
              category,
              description,
              id,
              price,
              rating,
              stock,
              title,
            } = item;
            return (
              <div className='w-full h-screen flex '>
                <div className=' w-auto h-full pt-5  flex item-center justify-center'>
                  <img src={thumbnail} alt="" className='w-full h-4/5 mt-10 rounded-lg' />
                </div>
                <div className='pt-32 ps-10 w-full flex flex-wrap  flex-col'>
                    <p className='pb-3 md:text-xl font-medium'>{category} category</p>
                    <h1 className='md:text-4xl md:font-medium'>{title}</h1>
                    <Stack
                    sx={{
                      flexDirection: "row",
                      // flex: 1,
                      marginTop:2,
                    }}
                    spacing={0}
                  >
                    <Rating 
                      name="half-rating"
                      defaultValue={rating}
                      precision={0.01}
                      size="medium"
                      value={rating}
                      readOnly
                    />
                    <p className="font-medium">{rating}</p>
                  </Stack>
                    <p className='pt-3 md:text-2xl font-bold'>${price}</p>
                    <p className='pt-3 md:text-xl'>{description}</p>
                    <p className='pt-3 md:text-xl'>Available Stock: {stock}</p>
                    <div className='w-full flex  items-center'>
                      <button onClick={()=>{}} className=" w-1/2 mx-2  h-10 px-1 mt-4 rounded-md border border-1 border-red-600 bg-orange-600 hover:font-medium">
                        <AddShoppingCartIcon/> Add To Cart
                      </button>
                      <button onClick={()=>{}} className=" w-1/2 mx-2 h-10 px-1 mt-4 rounded-md border border-1 border-red-600 bg-orange-600 hover:font-medium disable">
                        Buy Now
                      </button>
                    </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="w-full h-screen flex flex-wrap items-center justify-center">
            <CircularProgress color="secondary" />
          </div>
        )}
      </div>
    </div>
  );
};

