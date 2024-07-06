import Navbar from '../NAVBAR/Navbar'
import Category from '../Component/Category'
import Products from '../Component/Products'

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="container-home">

      <Category/>
     <Products/>


      </div>

    </>
  )
}
