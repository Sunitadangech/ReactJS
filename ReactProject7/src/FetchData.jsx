import React,{useEffect ,useState} from 'react'

const FetchData = () => {

    let [fetchedData, setFetchedData] = useState("")
    useEffect(() => {
        let fetchingData = async () => {
            let response = await fetch ("https://api.github.com/users")
            let data = await response.json()
            console.log(data);
            setFetchedData(data)
            
        }
        fetchingData()
       
    })
  return (
    <div>
    <h1>
    {fetchedData.length > 0 && fetchedData.map ((ele) => {
        return <li key={ele.login}>{ele.login}</li>
    })}
    </h1>
    </div>
  )
}

export default FetchData
