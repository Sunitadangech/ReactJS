import React from 'react'

const Sample2 = () => {
    let food='dosa';
    if(food=='dosa'){
        return<h1>It is Dosa</h1>
    }

    else if(food=='Vada-Pav'){
        return<h1>It is Vada-Pav</h1>
    }
    else if(food=='Jilebi'){
        return<h1>It is Jilebi</h1>
    }
    return <div>Not at All Food</div>

}

export default Sample2
