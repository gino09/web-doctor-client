import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Text&display=swap" rel="stylesheet"/>
                    <meta charSet="utf-8"></meta>
                </Head>
                <body style={{overflowY:"scroll"}}>
                    
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument