import Head from "next/head"
import NavPanel from "./NavPanel/NavPanel"

export function DefaultLayout({children}) {
  return (
    <div className='defaultLayout'>
      <Head>
        {/*
          Here define title, meta tags, cdn links etc. common for all pages with this layout
        */}
      </Head>

      {/* Here we can place additional sections common for all pages with this Layout like Nav and etc... */}

      <NavPanel />
      {children}

      {/* Here we can place additional sections common for all pages with this Layout like Nav and etc... */}

      <style jsx>{`
        /* inline styles that not affect on other components */
         .defaultLayout {
          background: url('/assets/defaultLayout-bg.svg') top center no-repeat;
          background-size: contain;
          min-height: 100vh;
        }
      `}</style>
    </div>
  )
}
