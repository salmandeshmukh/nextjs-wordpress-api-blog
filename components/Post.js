
import Link from "next/link";
import Image from "next/image";
//to use Image with an external url, add some config on next.config.js
//for more info, check out these docs https://nextjs.org/docs/basic-features/image-optimization

import {getDate} from "../utils/utils";

export default function Post({post, featuredMedia}) {

    return (
        <>
            <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image src={featuredMedia["media_details"].sizes.medium["source_url"]} width={614} height={324} alt={featuredMedia["alt_text"]} className="lg:h-48 md:h-36 w-full object-cover object-center" />
                    <div className="p-6">
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{post.title.rendered}</h1>
                        <div className="leading-relaxed mb-3" dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></div>
                        <Link href={`/posts/${post.slug}`}><button className="my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Know more</button></Link>
                    </div>
                </div>
            </div>
        </>
    )

}