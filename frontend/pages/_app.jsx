import "tailwindcss/tailwind.css";
import "../styles/global.css";

const App = ({ Component, pageProps }) => (
  <div>
    <Component {...pageProps} />
  </div>
);

export default App;
