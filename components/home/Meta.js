import Head from "next/head";

const Meta = () => {
    return (
        <Head>
            <title>The Rumen</title>

            <meta
                name="keywords"
                content="literature, literary, stories, story, poetry, poems, poem, magazine, fiction, non-fiction, journal"
            />
            <meta name="description" content="Literary Magazine"></meta>
            <link
                rel="apple-touch-icon"
                sizes="120x120"
                href="/images/favicons/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/images/favicons/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/images/favicons/favicon-16x16.png"
            />
            <link rel="manifest" href="/images/favicons/site.webmanifest" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff"></meta>
        </Head>
    );
};

export default Meta;
