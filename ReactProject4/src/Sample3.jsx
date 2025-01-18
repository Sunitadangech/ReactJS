import React from 'react'

const Sample3 = () => {
    let food='1';
    if(food == '1'){
        return(
            <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzJVYMvK9RwzZ5LOfGG5wjAZU1r-664As2hA&s" alt="" height={200} width={350}/>
            <h1>It is BhavBhaji-1</h1>
            </div>
        )
    }
    else if (food =='2'){
        return(
            <div>
            <img src="https://www.cookwithmanali.com/wp-content/uploads/2018/05/Best-Pav-Bhaji-Recipe-500x500.jpg" alt="" height={200} width={350}/>
            <h1>It is BhavBhaji-2</h1>
            </div>

        )
    }

    else
    return<h1>Not a Good Food</h1>
  
}

export default Sample3
