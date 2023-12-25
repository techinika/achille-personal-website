import { TrackingHeadScript } from '@phntms/next-gtm'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <TrackingHeadScript id="G-7VMEVDT21V" isGTM={true} />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp