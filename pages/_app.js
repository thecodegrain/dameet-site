import { UserProvider } from "@auth0/nextjs-auth0";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script>
          if(!sessionStorage.getItem("_swa")&&document.referrer.indexOf(location.protocol+"//"+location.host)!==
          0)
          {fetch(
            "https://counter.dev/track?" +
              new URLSearchParams({
                referrer: document.referrer,
                screen: screen.width + "x" + screen.height,
                user: "codegrain",
                utcoffset: "6",
              })
          )}
          ;sessionStorage.setItem("_swa","1");
        </script>
      </Head>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </>
  );
}

export default MyApp;
