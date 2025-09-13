import type { NextPage } from 'next';
import Head from 'next/head';
import HacktoberfestDashboard from '../components/HacktoberfestDashboard';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hacktoberfest 2025 - Join the Open Source Celebration</title>
        <meta name="description" content="Join Hacktoberfest 2025 and contribute to open source projects. Win swag, learn new skills, and connect with the global developer community." />
        <meta name="keywords" content="hacktoberfest, open source, github, pull requests, developers, coding, programming" />
        <meta property="og:title" content="Hacktoberfest 2025 - Open Source Celebration" />
        <meta property="og:description" content="Contribute to open source and win amazing swag during Hacktoberfest 2025!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://github.com/hari7261/Hacktoberfest-2025" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hacktoberfest 2025" />
        <meta name="twitter:description" content="Join the open source celebration!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HacktoberfestDashboard />
    </>
  );
};

export default Home;