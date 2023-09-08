import '@styles/globals.css'
import {Providers} from "@components/providers";

function Application({ Component, pageProps }) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}

export default Application
