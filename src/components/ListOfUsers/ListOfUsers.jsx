import { useState, useEffect } from 'react';
import users from '../../users';
import background from '../../img/picture.png';
import ellipse from '../../img/Ellipse.png';

import {
  LogoIcon,
  BackImg,
  List,
  BtnFollow,
  ListItem,
  ImgThumb,
  Line,
  Ellipse,
  UserInfo,
  InfoSection,
  Avatar,
} from './ListOfUsers.styled';

export const Users = () => {
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem('userInfo')) || []
  );
  const [followedUsersID, setFollowedUsersID] = useState(
    JSON.parse(localStorage.getItem('followedUsersID')) || []
  );

  useEffect(() => {
    if (userInfo.length !== 0) {
      return setUserInfo(userInfo);
    }
    if (userInfo.length === 0) {
      setUserInfo(users);
    }
  }, [userInfo]);

  const toggleFollowing = id => {
    if (followedUsersID.includes(id)) {
      setFollowedUsersID(followedUsersID.filter(userId => userId !== id));
    } else {
      setFollowedUsersID([...followedUsersID, id]);
    }

    setUserInfo(prevUserInfo => {
      return prevUserInfo.map(user => {
        if (user.id === id) {
          return {
            ...user,
            followers: followedUsersID.includes(id)
              ? user.followers - 1
              : user.followers + 1,
          };
        }
        return user;
      });
    });
  };
useEffect(()=>{

    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    localStorage.setItem('followedUsersID', JSON.stringify(followedUsersID));
},[userInfo, followedUsersID])

  return (
    <List>
      {userInfo.map(({ id, avatar, tweets, followers }) => {
        return (
          <ListItem key={id}>
            <LogoIcon />
            <BackImg src={background} alt="icons" />
            <div>
              <Ellipse src={ellipse} alt="ellipse" />
              <ImgThumb>
                <Avatar src={avatar} alt="user" width={50} />
              </ImgThumb>
              <Line />
            </div>
            <InfoSection>
              <UserInfo className="tweets">{tweets} TWEETS </UserInfo>
              <UserInfo className="followers">
                {followers.toLocaleString()} FOLLOWERS{' '}
              </UserInfo>

              <BtnFollow
                onClick={() => toggleFollowing(id)}
                className={
                  followedUsersID.includes(id) ? 'following' : 'follow'
                }
              >
                {followedUsersID.includes(id) ? 'Following' : 'Follow'}
              </BtnFollow>
            </InfoSection>
          </ListItem>
        );
      })}
    </List>
  );
};
