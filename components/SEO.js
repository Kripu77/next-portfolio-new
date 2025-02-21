import Head from "next/head";

const SEO = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Kripu Khadka" />
      <meta
        name="description"
        content="G'day, I am Kripu Khadka a techie who is focused on perceiving modern world through technology."
      />
      <meta name="robots" content="max-image-preview:large" />
      <link rel="canonical" href="https://kripukhadka.com" />
      <meta property="og:locale" content="en_US" />
      <meta
        property="og:site_name"
        content="Kripu Khadka - Master Data Analyst  || Full Stack Engineer"
      />
      <meta property="og:type" content="article/blog" />
      <meta property="og:title" content="Kripu Khadka " />
      <meta
        property="og:description"
        content="
   G'day, I am Kripu Khadka a techie who is focused on perceiving modern world through technology. Let's get connected."
      />
      <meta property="og:url" content="https://kripukhadka.com/"></meta>

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
