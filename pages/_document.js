import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <title>My Portfolio</title>
               <meta name='description' content='David Uribe Portfolio Website'/>
               <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css'/>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
