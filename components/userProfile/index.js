import {UserCard} from "./UserCard"
import Paper from "@material-ui/core/Paper"
import {EditUserInfo} from "./EditUserInfo"
import {UserInfo} from "./UserInfo"
import React, {useState} from "react"

export function UserProfile ({userFullName, userEmail, userPhone}) {
 const [isEditingUserInfo, setEditingUserInfo] = useState(false)

 return (
  <>

   <UserCard userFullName={userFullName} isEditing={isEditingUserInfo} setEditing={setEditingUserInfo} />

   <Paper >
    { isEditingUserInfo ?
      <EditUserInfo setEditingUserInfo={setEditingUserInfo} />
      :
      <UserInfo userEmail={userEmail} userPhone={userPhone}  />
    }
   </Paper>

  </>
 )
}