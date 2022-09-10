
import Head from 'next/head'
import { getPosts } from '../utils/wordpress';
import Post from "../components/Post";

export default function Home({ posts }) {

    const jsxPosts = posts.map(post => {
        const featuredMedia = post['_embedded']['wp:featuredmedia'][0];
        return (
            <Post post={post} featuredMedia={featuredMedia} key={post.id} />
        )
    });

    return (
        <>
            <Head>
                <title>Blogs</title>
                <meta name="description" content="Keep up to date with the latest trends in tech" />
                <link rel="icon" href="/favicon.ico" />
                {/* You can add more metadata here, like open graph tags for social media, etc */}
            </Head>

            <div className="container mx-auto px-4">
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <h1 className='sm:text-3xl text-2xl font-medium title-font mb-2'>Blogs with WP Rest API</h1>
                        <div className="mb-5 h-1 w-20 bg-indigo-500 rounded"></div>
                        <div className="flex flex-wrap -m-4">
                            {jsxPosts}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )

}

export async function getStaticProps({ params }) {

    const posts = await getPosts();
    // const events = await getEvents();
    return {
        props: {
            posts
            //  events
        },
        revalidate: 10, // In seconds
    }

}


