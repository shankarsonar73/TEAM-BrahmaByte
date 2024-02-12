import React from 'react'
import Prodct from '../card/Prodct'
function Products1() {
  var procts = [
    {
      title: "Social Media App Redesign",
      description: "Revamped the user interface and experience of our social media app, enhancing user engagement and interaction.",
      live: true,
      case: true,
      bgColor: "bg-zinc-900"
    },
    {
      title: "Mobile Chat Integration",
      description: "Implemented a real-time chat feature into our social media app, allowing users to communicate seamlessly on mobile devices.",
      live: true,
      case: false
    },
    {
      title: "Enhanced Privacy Features",
      description: "Introduced new privacy settings and controls to our social media platform, ensuring user data protection and security.",
      live: false,
      case: true,
      bgColor: "bg-zinc-900"
    }
  ];
  
  return (
    <div className='mt-22'>
      {procts.map((val,index)=>
      <Prodct val ={val} /> 
      )}
    </div>
  )
}

export default Products1
