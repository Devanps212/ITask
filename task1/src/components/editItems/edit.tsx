import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Edit = () => {

    const datas = useLocation()
    const val = datas.search
    const data = val.search('val')


    const [product, setProduct] = useState({
        title:'',
        description: '',
        price: ''
    })

    

  return (
    <div className='container-fluid'>
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className='content p-3 shadow rounded border'>
                <form>
                    <div>
                        <label htmlFor='title' className='fomr-label'>Title</label>
                        <input 
                            type='text'
                            id='title'
                            className='form-control'
                            placeholder='Edit title'
                            value={product.title}
                            onChange={(e)=>setProduct({...product, title: e.target.value})}
                            />
                    </div>
                    <div>
                        <label htmlFor='Description' className='fomr-label'>Description</label>
                        <textarea
                            rows={4}
                            cols={30} 
                            id='Description'
                            className='form-control'
                            placeholder='Edit descriotion'
                            value={product.description}
                            onChange={(e)=>setProduct({...product, description:e.target.value})}
                            />
                    </div>
                    <div>
                        <label htmlFor='Price' className='fomr-label'>Price</label>
                        <input 
                            type='number'
                            id='title'
                            className='form-control'
                            placeholder='Edit title'
                            value={product.price}
                            onChange={(e)=>setProduct({...product, price:e.target.value})}
                            />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Edit
