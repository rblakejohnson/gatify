import React from "react"
import Link from "gatsby-link"

export default () =>
 <div style={{ color: `tomato` }}>
   <img src="https://source.unsplash.com/random/200x400" alt="" />
   <br />
       <div>
         <Link to="/counter">counter</Link>
       </div>
 </div>
