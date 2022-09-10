import Link from "next/link";
import Image from "next/image";

import { getPost, getSlugs } from "../../utils/wordpress";

export default function PostPage({ post }) {
    return (
        <>
            <div className="container px-5 mx-auto">
                <section className="text-gray-600 body-font overflow-hidden">

                    <div className="container px-5 py-24 mx-auto">
                        <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        {/* <Image src={featuredMedia["media_details"].sizes.medium["source_url"]} width={614} height={324} alt={featuredMedia["alt_text"]} className="lg:h-48 md:h-36 w-full object-cover object-center" /> */}
                            {/* <Image alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={featuredMedia["media_details"].sizes.medium["source_url"]} width={614} height={324}  />                             */}
                            <div className="lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h1 className="text-gray-900 text-3xl title-font font-medium my-2">{post.title.rendered}</h1>
                                <div className="leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
                                <div className="flex">
                                    <Link href="/blogs"><button className="my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Back to blogs</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>


                </section>
            </div>
        </>
    )
}

//hey Next, these are the possible slugs
export async function getStaticPaths() {

    const paths = await getSlugs("posts");

    return {
        paths,
        //this option below renders in the server (at request time) pages that were not rendered at build time
        //e.g when a new blogpost is added to the app
        fallback: 'blocking'
    }

}

//access the router, get the id, and get the data for that post

export async function getStaticProps({ params }) {

    const post = await getPost(params.slug);

    return {
        props: {
            post
        },
        revalidate: 10, // In seconds
    }

}

