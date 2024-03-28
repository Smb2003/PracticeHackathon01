import React from 'react'
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
export const SmallCarts = () => {
    const cartsData = [
        {
            logo :<AirportShuttleIcon sx={{fontSize:'40px'}}/> ,
            heading: 'Free Delivery',
            content: 'Orders from all items'
        },
        {
            logo : <CurrencyExchangeIcon sx={{fontSize:'40px'}}/>,
            heading: 'Return & Refund',
            content: 'Money back guarantee'
        },
        {
            logo : <AirportShuttleIcon sx={{fontSize:'40px'}}/>,
            heading: 'Member Discount',
            content: 'On order over $99'
        },
        {
            logo :<SupportAgentIcon sx={{fontSize:'40px'}}/>,
            heading: 'Support 24/7',
            content: 'Contact us 24 hours a day'
        },
    ]
  return (
    <div className='w-full h-auto p-3 flex flex-wrap justify-around items-center '>
        {
            cartsData.map((data,index)=>{
                const {logo,heading,content} = data;
                return(
                    <div key={index} className='flex items-center justify-center gap-4 w-80 h-auto p-4 my-7 bg-gray-200 rounded-md'>
                        <p>{logo}</p>
                        <div>
                            <h2 className='text-2xl font-medium'>{heading}</h2>
                            <h4 className='text-xl'>{content}</h4>
                        </div>
                    </div>

                )
            })
        }
    </div>
  )
}
