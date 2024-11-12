import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Items = () => {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        const dataFetch = async()=>{
            try{
                const res = await axios.get('https://dummyjson.com/products')
                const prod = res.data.products.slice(0, 5)
                console.log(prod)
                setProducts(prod) 
            }catch(error){
                alert(error)
            }
        }

        dataFetch()
    }, [])

  return (
    <div className='container-fluid'>
      <div className='row d-flex'>
            {
                products.length > 0 && products.map((data, index)=>(
                    <div key={index} className='col-3 p-3'>
                        <div className='card p-2 h-50'style={{width:'18.6rem'}}>
                            <h1 className='card-title'>{data.title}</h1>
                            <img className="card-img h-50" src={data.thumbnail}/>
                            <div className='card-body'>
                                <p className='card-description'>
                                    {data.description}
                                </p>
                                <div className="w-100 d-flex">
                                    <p>{data.price}</p>
                                    <p>{data.rating}</p>
                                </div>
                                <Link to={`/edit?val=${JSON.stringify(data)}`} className="btn btn-primary w-100">Edit</Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        
      </div>
    </div>
  )
}

export default Items
