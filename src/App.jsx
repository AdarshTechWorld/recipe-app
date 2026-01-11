import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Header from "./components/Header"
import Banner from "./components/Banner"
import Items from "./components/Items"
import { Route, Routes } from "react-router-dom"
import AddItems from "./components/AddItems"
import Delete from "./components/Delete"
import Recipe from "./components/Recipe"
import Addimport from "./components/Features/Addimport"
import Footer from "./components/Footer"
import Organise from "./components/Organise"
import OrganiseSearch from "./components/Features/OrganiseSearch"
import Webapp from "./components/Features/Webapp"
import Planshop from "./components/Features/Planshop"
import Videobanner from "./components/Features/Videobanner"
import Getstarted from "./components/Getstarted"
import Contact from "./components/Contact"
import Pricing from "./components/Pricing"
import Comparsion from "./components/Comparsion"


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<><Banner /></>}></Route>
        <Route path="/home"  element={<Banner />}></Route>
        <Route path="/start"  element={<Getstarted />}></Route>
        <Route path="/add"  element={<AddItems/>}></Route>
        <Route path="/delete"  element={<Delete />}></Route>
        <Route path="/recipe/:idMeal" element={<Recipe/>}></Route>
        <Route path="/del" element={<Delete />}></Route>
        <Route path="/import" element={<Addimport />}></Route>
        <Route path="/organise" element={<OrganiseSearch />}></Route>
        <Route path="/web" element={<Webapp />}></Route>
        <Route path="/plan" element={<Planshop />}></Route>
        <Route path="/video" element={<Videobanner />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/price" element={<Pricing />}></Route>
        <Route path="/compare" element={<Comparsion />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
