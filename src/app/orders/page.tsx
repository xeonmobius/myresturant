import React from 'react'

const OrderPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40'>
      <table className='w-full border-separate border-spacing-3'>
        <thead>
          <tr className='text-left'>
            <th className='hidden md:block'>Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className='hidden md:block'>Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className='text-sm md:text-base bg-red-50'>
            <td className='hidden md:block py-6 px-1'>11231231</td>
            <td className='py-6 px-1'>12/12/2023</td>
            <td className='py-6 px-1'>$90.90</td>
            <td className='hidden md:block py-6 px-1'>Pizza Hawaian, Fries</td>
            <td className='py-6 px-1'>On the way</td>
          </tr>
          <tr className='text-sm md:text-base odd:bg-grey-100'>
            <td className='hidden md:block py-6 px-1'>11231231</td>
            <td className='py-6 px-1'>12/12/2023</td>
            <td className='py-6 px-1'>$90.90</td>
            <td className='hidden md:block py-6 px-1'>Pizza Hawaian, Fries</td>
            <td className='py-6 px-1'>Delivered</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default OrderPage