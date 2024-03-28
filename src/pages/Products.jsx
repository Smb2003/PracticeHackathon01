import { Box, Breadcrumbs, CircularProgress, Skeleton, Typography } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Link, useNavigate, useParams } from "react-router-dom";

export const Products = () => {
  const [productData, setProductData] = useState([]);
  const navigate = useNavigate();
  // const {id} = useParams();
  
  const checkAPI = async () => {
    const products = await fetch("https://dummyjson.com/products");
    const Data = await products.json();
    setProductData([...productData, ...Data.products]);
  };
  console.log(productData);
  useEffect(() => {
    checkAPI();
  }, []);

  const Show = (id) => {
    console.log(id);
    navigate(`/Products/${id}`)
  }

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" to={"/"}>
      HOME
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      to={"/Products"}
      // onClick={handleClick} 
    >
      Products
    </Link>,
    
  ];
  return (
    <div className="w-full h-screen">
      <div className="relative w-full h-32 md:h-1/3 bg-orange-600 ">
        <div className="absolute inset-x-0 bottom-0 m-8">
          <h1 className="text-2xl md:text-3xl font-medium text-center hover:underline hover:cursor-pointer">
            Products
          </h1>
          {/* <Stack spacing={10}>
            <Breadcrumbs  sx={{textAlign:"center",fontSize:"20px"}} separator="›" aria-label="breadcrumb">
              {breadcrumbs}
            </Breadcrumbs>
            <Breadcrumbs separator="-" aria-label="breadcrumb">
              {breadcrumbs}
            </Breadcrumbs>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              {breadcrumbs}
            </Breadcrumbs>
          </Stack> */}
        </div>
      </div>

      <div className="w-full h-screen p-3 flex flex-wrap">
        {productData.length > 0 ? (
          productData.map((item, index) => {
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
                className="w-80 h- m-1 p-1 rounded-md border border-1 border-red-500"
              >
                <img src={thumbnail} className=" w-full h-64" />
                <div className="p-2">
                  <p className="text-sm md:text-sm font-medium">{category}</p>
                  <h1 className="text-xl md:text-xl font-medium">{title}</h1>
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
                    <button className=" w-1/2 h-10 px-2  rounded-md border border-1 border-red-500 hover:bg-orange-400 hover:font-medium">
                      Add to Cart
                    </button>
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
  );
};
