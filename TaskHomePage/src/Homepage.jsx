import React from 'react'
import Style from "./home.module.css";



const home1 = () => {
  return (
    <div>
    
       <nav className={Style.nav1}><h1 className={Style.head}>Home About Content</h1>
       <div className={Style.divbt}><button className={Style.but} onClick={() => alert('Sign Up button clicked!')}>Sign Up</button><button className={Style.but} onClick={()=>{alert('Login successful')}}>Login</button></div>
       </nav>
       

<section className={Style.sec}>
    <form className={Style.Fpart}>
    <div className={Style.fimg}>
    <img src='https://play-lh.googleusercontent.com/TxjQBGYHvMJsBX5dCvxQ4R-_4N-XrVhW6-p7D7TXanXKZMD8L-UkeMBWO1dtubGVNqU' width={150} height={150} id={Style.img1}/>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmUNmv5o3RyxrDChISZvqb5fG9nxsTQVTxPg&s' width={100} height={100} id={Style.img2}/>
    <div>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGl65crGoZVzRg-89-L_DDrOVcfM8oMcLpaw&s' width={80} height={80} id={Style.img3}/></div>
    <img src='https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2019/07/image2-1.png?fit=600%2C315&ssl=1' width={220} height={100}/>
    <img src='https://media.licdn.com/dms/image/D4E12AQFAnM7JNyFDQg/article-cover_image-shrink_720_1280/0/1708148800306?e=2147483647&v=beta&t=YVyEgQPbE7DUjDtMEQ5DBs_NUxWX_z6mWn72IqCH03Q' width={100} height={100}/>
    </div>
    </form>
    <div  className={Style.Fpart}>
      <div className={Style.div1}>
      <form>
  <label >Name:</label>
  <input type="text" id="name" name="name" required /><br/>

  <label >Age:</label>
  <input type="number" id="age" name="age" required /><br/>

  <label >Gmail:</label>
  <input type="email" id="email" name="email" required /><br/>

  <label >Hobbies:</label>
  <ol>
    <li>Singing</li>
    <li>Reading</li>
    <li>Dancing</li>
  </ol>

  <label >Address:</label>
  <label >Place:</label>
  <input type="text" id="place" name="place" required /><br/>

  <label >State:</label>
  <input type="text" id="state" name="state" required /><br/><br/><br/><br/>
  
  <button type="submit" id={Style.fsub}>Submit</button>
</form>

      </div>
    </div>
</section>
      
    </div>
  )
}

export default home1;