// import Link from "next/link";

// import {getEvent, getSlugs} from "../../utils/wordpress";

// export default function EventPage({event}){
//     return (
//         <div className="container pt-5">
//             <h1 className="text-center pb-5">{event.title.rendered}</h1>
//             <div className="card-text pb-5" dangerouslySetInnerHTML={{__html: event.content.rendered}}></div>
//             <Link href="/">
//                 <a className="btn btn-primary">Back to Home</a>
//             </Link>
//         </div>
//     )
// }

//   //hey Next, these are the possible slugs
// export async function getStaticPaths() {

//     const paths = await getSlugs("events");
  
//     return {
//         paths,
//         //this option below renders in the server (at request time) pages that were not rendered at build time
//         //e.g when a new blogpost is added to the app
//         fallback: 'blocking'
//     }
  
//   }
  
//   //access the router, get the id, and get the data for that post
  
//   export async function getStaticProps({ params }) {
  
//     const event = await getEvent(params.slug);
  
//     return {
//       props: {
//         event
//       },
//       revalidate: 10, // In seconds
//     }
  
//   }

import React from 'react'

const slug = () => {
  return (
    <div>slug</div>
  )
}

export default slug