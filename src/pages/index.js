import React from "react"
import Link from "gatsby-link"

const Bro = () =>
    <div>Hey, bro.</div>
export default () =>
 <div style={{ color: `tomato` }}>
   <h1>Hello Gatsby!</h1>
   <p>What a world.</p>
   <Bro/>
   <img src="https://source.unsplash.com/random/400x200" alt="" />
   <br />
       <div>
         <Link to="/page-2">Link</Link>
       </div>
       <div>
         <Link to="/quick">Quick</Link>
       </div>
 </div>
