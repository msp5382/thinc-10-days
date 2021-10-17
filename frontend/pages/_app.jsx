import Head from "next/head";

import "tailwindcss/tailwind.css";
import "../styles/global.css";

const App = ({ Component, pageProps }) => (
  <div>
    <Head>
      <meta
        name="viewport"
        content="width=1920, height=1080, initial-scale=1"
      />
    </Head>
    <Component {...pageProps} />
  </div>
);

export default App;
