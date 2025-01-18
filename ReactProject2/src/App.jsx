import UsefullProp1 from './UsefullProp.jsx'
import useCss from './Usefull.module.css'

const App = () => {
  return (
    <div>
<section className={useCss.cards}>
      <UsefullProp1>
        <section className={useCss.cards} >
          <img src='https://imgd.aeplcdn.com/0X0/bw/makes/royal-enfield20200508193112.jpg?q=80' />
          <h1>Speed 500</h1>
        </section>
        <section className={useCss.cards} >
            <img src='https://imgd.aeplcdn.com/227x128/n/cw/ec/127499/bullet-right-side-view-13.png?isig=0&q=80' />
            <p>Royal Enfiels has launched a new variant of the Raider called the iGO

</p>
    </section>
          
      </UsefullProp1>
      <UsefullProp1>
        <section className={useCss.cards} >
          <img src="https://imgd.aeplcdn.com/0X0/bw/makes/tvs20200508193203.jpg?q=80" />
          <h1>Speed 400</h1>
        </section>
        <section className={useCss.cards} >
            <img src='https://imgd.aeplcdn.com/227x128/n/cw/ec/103183/raider-125-right-side-view-20.png?isig=0&q=80' />
            <p>TVS has launched a new variant of the Raider called the iGO

</p>
      </section>
      </UsefullProp1>
      

</section>

<section className={useCss.cards}>
<UsefullProp1>
        <section className={useCss.cards} >
          <img src="https://imgd.aeplcdn.com/0X0/bw/makes/hero20200508192826.jpg?q=80" />
          <h1>Speed 400</h1>
        </section>
        <section className={useCss.cards} >
            <img src='https://imgd.aeplcdn.com/227x128/n/cw/ec/127127/xtreme-right-side-view-2.jpeg?isig=0&q=80' />
            <p>TVS has launched a new variant of the Raider called the iGO

</p>
          </section>
      </UsefullProp1>
      <UsefullProp1>
        <section className={useCss.cards} >
          <img src='https://imgd.aeplcdn.com/0X0/bw/makes/yamaha20200508193220.jpg?q=80' />
          <h1>Speed 500</h1>
        </section>
        <section className={useCss.cards} >
            <img src='https://imgd.aeplcdn.com/227x128/n/cw/ec/111153/fz-s-right-front-three-quarter-3.png?isig=0&q=80' />
            <p>Royal Enfiels has launched a new variant of the Raider called the iGO

</p>
          </section>
      </UsefullProp1>
      

</section>




    </div>
  );
};

export default App
