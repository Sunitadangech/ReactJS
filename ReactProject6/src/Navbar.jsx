// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>
//       <nav>
//         <ul>
//             <li>Home</li>
//             <li>About</li>
//             <li>Services</li>
//             <li>Contact</li>
//         </ul>
//       </nav>
//     </div>
//   )
// }

// export default Navbar


// import React from 'react'
// import { data } from './Navdata.jsx'

// const Navbar = () => {
//   return (
//     <div>
//       <nav>
//         <ul>
//         {data?.map(ele =>{
//             return <li>{ele.text}</li>;
//         })}
//         </ul>
//       </nav>
//     </div>
//   )
// }

// export default Navbar

import React from 'react'
import { data } from './Navdata.jsx'
import style from './navbar.module.css'

const Navbar = () => {
  return (
    <div>
      <nav className={style.parent}>
          <ul className={style.navbar}>
             {data?.map(ele => {
              return<li>{ele.text}</li>
             })}
          </ul>
      </nav>
    </div>
  )
}

export default Navbar


