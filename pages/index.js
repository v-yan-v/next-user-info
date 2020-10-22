import {DefaultLayout} from "../components/DefaultLayout"
import {Container} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"
import React from "react"
import Paper from "@material-ui/core/Paper"
import {UserCard} from "../components/userProfile/UserCard"
import {UserInfo} from "../components/userProfile/UserInfo"

const useStyles = makeStyles((theme) => ({
  userInfoListItem: {
    padding: theme.spacing(2)
}
}))

export default function Home({userFullName, userEmail, userPhone}) {
  const classes = useStyles()

  return (
    <DefaultLayout>

      <Container maxWidth={'lg'} component='main'>

        <UserCard userFullName={userFullName} />

        <Paper className={classes.userInfoList}>
          <UserInfo userEmail={userEmail} userPhone={userPhone} />
        </Paper>

      </Container>

    </DefaultLayout>
  )
}
