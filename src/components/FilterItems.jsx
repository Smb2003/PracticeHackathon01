import { Box, Rating, Skeleton, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const FilterItems = ({heading,Category}) => {
    const [filter,setFilter] =  useState([]);
    const [Products,setProducts] =  useState([]);
    const navigate = useNavigate();


    const TakeData = async () => {
        const products = await fetch("https://dummyjson.com/products");
        const Data = await products.json();
        setProducts([...Products, ...Data.products]);
    };
    console.log(Products);

    const FilterData = async () => {
        const filterData = await Products.filter((item)=> item.category == Category )
        setFilter([...filterData]);
    }
    FilterData();
      console.log(filter);
      useEffect(() => {
          TakeData();
    }, []);
    
    const Show = (id) => {
        console.log(id);
        navigate(`/Products/${id}`)
      }
    
  return (
    <div>
        <h1 className='text-4xl font-bold px-5 py-2'>{heading}</h1>
    <div className="w-full auto p-3 flex  justify-center items-center scroll-y">
        {filter.length > 0 ? (
          filter.map((item, index) => {
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
              <div
                key={index}
                className="w-80 h-auto m-1 p-1 rounded-md border border-1 border-red-500"
              >
                <img src={thumbnail} className=" w-full h-64" />
                <div className="p-2">
                  <p className="text-sm md:text-sm font-medium">{category}</p>
                  <h1 className="text-xl md:text-xl font-medium">{title.substring(0,20)}</h1>
                  <Stack
                    sx={{
                      flexDirection: "row",
                      flex: 1,
                      justifyItems: "center",
                      alignItems: "center",
                    }}
                    spacing={0}
                  >
                    <Rating
                      name="half-rating"
                      defaultValue={rating}
                      precision={0.01}
                      size="small"
                      value={rating}
                      readOnly
                    />
                    <p className="font-medium">{rating}</p>
                  </Stack>
                  <h3 className="text-lg md:text-xl font-medium">${price}</h3>
                  <div className="flex flex-wrap md:flex-row flex-col w-full justify-between items-center my-2">
                    <button onClick={()=>Show(id)} className=" w-1/2 h-10 px-1 rounded-md border border-1 border-red-500 hover:bg-orange-400 hover:font-medium">
                      Show Details
                    </button>
                    {/* <button className=" w-1/2 h-10 px-2  rounded-md border border-1 border-red-500 hover:bg-orange-400 hover:font-medium">
                      Add to Cart
                    </button> */}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="w-full h-screen flex flex-wrap  justify-around">
            {/* <CircularProgress color="secondary" />
            <CircularProgress color="secondary" />
            <CircularProgress color="secondary" /> */}
            <div className="w-80 h-80 m-1 p-1 rounded-md border border-1 border-red-500">
            <Skeleton variant="rectangular" width="100%" height="70%" />
            <Box sx={{ pt: 0.5 }}>
              <Skeleton width="20%"/>
              <Skeleton width="70%" />
              <Skeleton width="20%"/>

            </Box>
            </div>
            <div className="w-80 h-80 m-1 p-1 rounded-md border border-1 border-red-500">
            <Skeleton variant="rectangular" width="100%" height="70%"/>
            <Box sx={{ pt: 0.5 }}>
            <Skeleton width="20%"/>
              <Skeleton width="70%" />
              <Skeleton width="20%"/>
            </Box>
            </div>
            <div className="w-80 h-80 m-1 p-1 rounded-md border border-1 border-red-500">
            <Skeleton variant="rectangular" width="100%" height="70%" />
            <Box sx={{ pt: 0.5 }}>
              <Skeleton width="20%"/>
              <Skeleton width="70%" />
              <Skeleton width="20%"/>
            </Box>
            </div>
            <div className="w-80 h-80 m-1 p-1 rounded-md border border-1 border-red-500">
            <Skeleton variant="rectangular" width="100%" height="70%" />
            <Box sx={{ pt: 0.5 }}>
              <Skeleton width="20%"/>
              <Skeleton width="70%" />
              <Skeleton width="20%"/>
            </Box>
            </div>  
            
          </div>
        )}
      </div>
    </div>
  )
}
