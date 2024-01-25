import { Fragment, useContext, useEffect } from "react"
import Wrapper from "../components/wrapper/Wrapper"
import Section from "../components/Section"
import {products ,discoutProducts, popularTests } from "../utils/products"
import { DataContainer } from "../App"
import SliderHome from "../components/Slider"

const Home = () => {
  const {addToCart} =useContext(DataContainer);
  const newArrivalData = products.filter(item => item.category ==="mobile" || item.category ==="wireless");
  const bestSales = products.filter(item => item.category ==="Blood");
  useEffect(()=> {
    window.scrollTo(0,0);
  },[])
  return (
    <Fragment>
      <SliderHome/>
      <Wrapper />
      <Section title="Well-Liked Sevas Packages" bgColor="#f6f9fc" productItems={discoutProducts} addToCart={addToCart}/>
      <Section title="Well-Liked Sevas" bgColor="#f6f9fc" productItems={popularTests} addToCart={addToCart} />
    </Fragment>
  )
}

export default Home
