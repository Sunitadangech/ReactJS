// import React from 'react'
// import Navbar from './Navbar.jsx'
// import Wrapper from './Wrapper.jsx'
// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//       <Wrapper/>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Navbar from './Navbar.jsx'
// import Wrapper from '../src/Wrapper.jsx'
// import Home from './Pages/Home.jsx'
// import About from './Pages/About.jsx'
// import Contact from './Pages/Contact.jsx'
// import Services from './Pages/Services.jsx'
// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//       <Home/>
//       <About/>
//       <Contact/>
//       <Services/>
//     </div>
//   )
// }

// export default App




import React, {useState,Fragment} from 'react'
import Navbar from './Navbar.jsx'
import Wrapper from '../src/Wrapper.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Services from './Pages/Services.jsx'
import style from './navbar.module.css'
import {data} from './Navdata.jsx'
import Default from './Default.jsx';
import Button from './Button.jsx'
import Footer from './Footer.jsx'

const App = () => {

  let [page ,setPage] = useState("");

  let handlePages = ele => {
    setPage(ele.stateVal);
  };

  return (
    <div>
      <header>
       <nav className={style.parent}>
          <ul className={style.navbar}>
             {/* {data?.map(ele => {
              return<li onClick={ () => {handlePages(ele)}}>{ele.text}</li>
             })} */}

             {data?.map(ele => {
        return(
          <Fragment key={ele.text}>
            <li onClick={() => {
              handlePages(ele);
            }}>
            {ele.text}
            </li>
            <span>R</span>
          </Fragment>
        )
        })}
          </ul>
       </nav>
      </header>


      
      <section>
      { page == "home" ? <Home/> : null}
      { page == "about" ? <About/> : null}
      { page == "services" ? <Services/> : null}
      { page == "contact" ? <Contact/> : null}
      {page==""?<Default/>:null}
      
      </section>
      


      <section style={{ display:"flex" }}>
      {page!=""?<section style={{display:"flex"}}>
        <Button btnText="Login" bgColor="orange"/>
        <Button btnText="Sign Up" bgColor="orangered"/>
        <Button btnText="Order Now" bgColor="plum"/>
      </section>
        :null}
        </section>


        <section>
        { page != "" ? <Footer/> : null}

      </section>

      
      
    </div>
  )
}

export default App

