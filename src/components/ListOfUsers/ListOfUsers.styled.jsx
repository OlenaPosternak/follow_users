import styled from 'styled-components';
import { ReactComponent as Logo } from '../../img/Logo.svg';

export const LogoIcon = styled(Logo)`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const BackImg = styled.img`
  margin-top: 28px;
  margin-left: 36px;
  margin-bottom: 18px;
`;

export const List = styled.ul`
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 380px;

  @media screen and (min-width: 1440px) {
    width: 790px;
    gap: 30px;
  }
`;
export const ListItem = styled.li`
  position: relative;
  width: 380px;
  height: 460px;
  background-image: linear-gradient(#471ca9, #5736a3, #4b2a99);
  box-shadow: -2.5776965618133545px 6.873857021331787px 20.621572494506836px 0px
    #0000003b;
  border-radius: 20px;
`;

export const BtnFollow = styled.button`
  outline: none;
  padding: 14px;
  margin-top: 26px;
  width: 196px;
  height: 50px;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.22;
  color: #373737;

  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px #00000040;

  cursor: pointer;
  transition: all 0.4s ease;

  &.follow {
    background-color: rgba(235, 216, 255, 1);
    &:hover,
    &:focus-visible {
      background-color: #c19aeb;
    }
  }
  &.following {
    background-color: rgba(92, 211, 168, 1);
    &:hover,
    &:focus-visible {
      background-color: #25a677;
    }
  }
`;

export const ImgThumb = styled.div`
  position: absolute;
  width: 62px;
  height: 62px;
  top: 186px;
  left: 154px;
  background-color: rgb(87, 54, 163);
  border-radius: 50%;
  display: flex;
  align-items: end;
  justify-content: center;
`;

export const Ellipse = styled.img`
  position: absolute;
  right: 150px;
  top: 178px;
  z-index: 100;
`;

export const Avatar = styled.img`
  position: absolute;
  top: 15px;
`;

export const Line = styled.div`
  height: 8px;
  background-color: #ebd8ff;

  box-shadow: 0px 4.391631126403809px 3.2937235832214355px 0px #fbf8ff inset;
  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px #0000000f;
  box-shadow: 0px -1.7184642553329468px 3.4369285106658936px 0px #ae7be3 inset;
`;

export const UserInfo = styled.p`
  color: #ebd8ff;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  line-height: 1.22;

  &.tweets {
    margin-top: 62px;
  }

  &.followers {
    margin-top: 16px;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
