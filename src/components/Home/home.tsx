import { useState } from "react"
import { NavBar } from "../shared/navBar"
import { SearchBar } from "../shared/searchBar"
import About from "../shared/About"
import CarCard from "../shared/CarCard"
import Contacts from "../shared/Contacts"
import { Helmet } from "react-helmet-async"



const Home = () => {

  const [isSearching, setIsSearching] = useState(false);
  return (
    <>
      <Helmet>
  <title>Self Drive/Rentals Car Service in Guwahati | NH37 Car Rentals</title>

  <meta
    name="description"
    content="NH37 Car Rentals offers affordable car rentals in Guwahati with hatchbacks, sedans and SUVs. Easy booking for local and outstation trips in Assam."
  />

  
</Helmet>
        
          <div id="home">
            
          <NavBar/>
          
        </div>    
        
        <div id="search" className="flex flex-col justify-center sm:mt-60 p-10">

           <SearchBar onSearch={() => setIsSearching(true)}/>           
        </div>
        {!isSearching ? (
          <>
        <div id="about" className="text-white">
          <About/>                    
        </div>  

        <div id="contacts">
          <Contacts/>
        </div> 
        
          
         
        </>
       ):(
        <div id = "carCard">
           <CarCard/>
        </div>
        
       )
       
       }
           
    </>
    

  )
}

export default Home
