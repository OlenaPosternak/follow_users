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
} from './ListOfUsers.styled';

export const Users = () => {
  const [userInfo, setUserInfo] = useState(users);
  const [followedUsersID, setFollowedUsersID] = useState(
    JSON.parse(localStorage.getItem('followedUsersID')) || []
  );

  useEffect(() => {
    setUserInfo(users);
  }, []);

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

  localStorage.setItem('followedUsersID', JSON.stringify(followedUsersID));

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
              <img src={avatar} alt="user" width={50}/>
              </ImgThumb>
              <Line/>
            </div>

            <p>{tweets} TWEETS </p>
            <p>{followers.toLocaleString()} FOLLOWERS </p>

            <BtnFollow
              onClick={() => toggleFollowing(id)}
              className={followedUsersID.includes(id) ? 'following' : 'follow'}
            >
              {followedUsersID.includes(id) ? 'Following' : 'Follow'}
            </BtnFollow>
          </ListItem>
        );
      })}
    </List>
  );
};
