import Head from "next/head"
import NavPanel from "./NavPanel/NavPanel"
import {createMuiTheme} from "@material-ui/core"
import {ThemeProvider} from "@material-ui/styles"

const defTheme = createMuiTheme({
  palette: {
    primary: {
      dark: '#125487',
      light: '#4793ce',
      main: '#1A78C2'
    },
    secondary: {
      contrastText: '#fff',
      dark: '#008573',
      light: '#33cbb7',
      main: '#00bfa5'
    }
  }
})

export function DefaultLayout({children}) {
  return (
    <ThemeProvider theme={defTheme} >
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
    </ThemeProvider>
  )
}
