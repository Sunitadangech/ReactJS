import React from 'react'

export const UsefullProp1 = ({children}) => {
  let style={
    width:500,
    border:"1px solid",
    boxShadow:"0px 0px 3px 5px gray",
    padding: "15px",
    borderRadius:"5px",
  };
  return (
    <div><p style={style}>{children}</p></div>
  )
}
export default UsefullProp1;