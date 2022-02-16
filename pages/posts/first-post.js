import Link from "next/link";
import Head from "next/head";
import Script from 'next/script'
import Layout from '../../components/layout'



export default function FirstPost(){
    return (
        <Layout>
        <Head>
            <title>First Post</title>
            <Script
            // src="https://connect.facebook.net/en_US/sdk.js"
            // strategy="lazyOnload"
            // onLoad={() =>
            // console.log(`script loaded correctly, window.FB has been populated`)
            // }

                // strategy controls when the third-party script should load. A value of lazyOnload tells Next.js to load this particular script lazily during browser idle time
                // onLoad is used to run any JavaScript code immediately after the script has 
            />
        </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>    
            </h2>       
        </Layout>
    )
}