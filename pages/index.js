import Head from 'next/head'

export default function Home() {
  return (    
    <>
    <Head>
        <title>Next.JS WP Tailwind</title>
        <meta name="description" content="Keep up to date with the latest trends in tech" />
        <link rel="icon" href="/favicon.ico" />
        {/* You can add more metadata here, like open graph tags for social media, etc */}
      </Head>
      <div className="container mx-auto px-4 mt-24">
      <h1 className='sm:text-3xl text-2xl font-medium title-font mb-2'>Home Page</h1>
      <div className="mb-5 h-1 w-20 bg-indigo-500 rounded"></div>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
    </>
  )
}
