import React from 'react'
import Ferrari from './assets/Ferrari.jpg'
import BMW from './assets/BMW.jpg'
import Benz from './assets/Benz.jpg'
const Sample4 = ({car}) => {
    switch(car){
        case "Ferrari":
            return <img src={Ferrari} alt="" height={200} width={350}/>;

        case "BMW":
            return <img src={BMW} alt="" height={200} width={350}/>;
        
        case "Benz":
            return <img src={Benz} alt="" height={200} width={350}/>;
    }
    return<h1>Not At All Car</h1>

}

export default Sample4





// import React from 'react'

// const Sample4 = () => {
//     let car="ferrari";
//     switch(car){
//         case "ferrari":
//             return(
//                 <div>
//                 <img src="https://english.mathrubhumi.com/image/contentid/policy:1.9996860:1729229837/f80.jpg?$p=95770c7&f=16x10&w=852&q=0.8" alt="" height={200} width={350}/>
//                 <h1>Ferrari is Good Car</h1>;
//                 </div>
//             )

//         case "BMW":
//             return(
//                 <div>
//                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkMa5nc8TsQv49NV66I15S_E70CIlWUjxLCg&s" alt="" height={200} width={350}/>
//                 <h1>BMW</h1>
//                 </div>
//             )
        
        
//         case "Benz":
//             return<h1>Mercedez is Good Car</h1>;
//     }
//     return<h1>Not At All Car</h1>

// }

// export default Sample4



