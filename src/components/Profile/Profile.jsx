import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from "./Profile.module.css"

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <ProfileInfo savePhoto={props.savePhoto}
                   isOwner={props.isOwner}
                   profile={props.profile}
                   status={props.status}
                   saveProfile={props.saveProfile}
                   updateStatus={props.updateStatus}/>
      <MyPostsContainer />
    </div>
  )
}

export default Profile;