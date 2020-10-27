import {Container} from '@material-ui/core'
import React from "react"

import {DefaultLayout} from "../components/DefaultLayout"
import {UserProfile} from "../components/userProfile"


export default function Home() {

  return (
    <DefaultLayout>

      <Container maxWidth={'lg'} component='main'>

        <UserProfile />

      </Container>

    </DefaultLayout>
  )
}
