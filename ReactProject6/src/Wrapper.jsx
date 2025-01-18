// import React from 'react'
// import style from './navbar.module.css'
// import Car1 from './assets/Car1.jpg'

// const Wrapper = () => {
//     return (
//         <div>
//             <section>
//                 {/* <img src="https://st3.depositphotos.com/6013912/33610/i/450/depositphotos_336106928-stock-photo-kazakhstan-almaty-january-20-2020.jpg" alt="" height={700} width={1400}/> */}
//                 <img src={Car1} alt="" height={700} width={1520} />
//                 <h1 className={style.head}>The cars we drive <br /> say a lot about us!!!!!</h1>
//                 <p style={{ padding: "40px" }}>A car, or an automobile, is a motor vehicle with wheels. 
//                 Most definitions of cars state that they run primarily on roads, seat one to eight people, 
//                 have four wheels, and mainly transport people over cargo.[1][2] There are around one billion cars in use worldwide. 
//                 The car is considered an important part of the developed economy.[citation needed]
//                 The French inventor Nicolas-Joseph Cugnot built the first steam-powered road vehicle in 1769, 
//                 while the Swiss inventor François Isaac de Rivaz designed and constructed the first internal combustion-powered automobile in 1808. 
//                 The modern car—a practical, marketable automobile for everyday use—was invented in 1886, when the German inventor Carl Benz patented his Benz Patent-Motorwagen. 
//                 Commercial cars became widely available during the 20th century. The 1901 Oldsmobile Curved Dash and the 1908 Ford Model T, both American cars, 
//                 are widely considered the first mass-produced[3][4] and mass-affordable[5][6][7] cars, respectively. Cars were rapidly adopted in the US, where they replaced horse-drawn carriages.
//                 [8] In Europe and other parts of the world, demand for automobiles did not increase until after World War II.[9] In the 21st century, car usage is still increasing rapidly, especially in China, India,
//                 and other newly industrialised countries.[10][11]</p>
//             </section>
//         </div>
//     )
// }

// export default Wrapper




import React from 'react'
import style from './navbar.module.css'


const Wrapper = ({BgImg, headBanner, description}) => {
    return (
        <div>
            <section>
                {/* <img src="https://st3.depositphotos.com/6013912/33610/i/450/depositphotos_336106928-stock-photo-kazakhstan-almaty-january-20-2020.jpg" alt="" height={700} width={1400}/> */}
                <img src={BgImg} alt="carBackground" height={600} width={1520} />
                <h1 className={style.head}>{headBanner}</h1>
                <p style={{ padding: "40px" }}>{description}</p>
            </section>
        </div>
    )
}

export default Wrapper

