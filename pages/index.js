import {Container} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"
import React, {useState} from "react"
import Paper from "@material-ui/core/Paper"

import {DefaultLayout} from "../components/DefaultLayout"

import {UserCard} from "../components/userProfile/UserCard"
import {UserInfo} from "../components/userProfile/UserInfo"
import {EditUserInfo} from "../components/userProfile/EditUserInfo"

const useStyles = makeStyles((theme) => ({
}))

export default function Home({userFullName, userEmail, userPhone}) {
  const classes = useStyles()
  const [isEditingUserInfo, setEditingUserInfo] = useState(false)

  return (
    <DefaultLayout>

      <Container maxWidth={'lg'} component='main'>

        <UserCard userFullName={userFullName} isEditing={isEditingUserInfo} setEditing={setEditingUserInfo} />

        <Paper className={classes.userInfoList}>
          { isEditingUserInfo ?
            <EditUserInfo setEditingUserInfo={setEditingUserInfo} />
            :
            <UserInfo userEmail={userEmail} userPhone={userPhone}  />
          }
        </Paper>

      </Container>

    </DefaultLayout>
  )
}
