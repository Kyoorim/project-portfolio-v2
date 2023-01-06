import { Box, Stack } from "ready-to-use-components";
import Image from "next/image";
import myphoto from "../asset/myphoto.jpeg";
import { MdMailOutline, MdLocationOn, MdPhoneIphone } from "react-icons/md";
import { TfiGithub, TfiWrite } from "react-icons/tfi";
import styled from "styled-components";

const ProfileContent = () => {
  return (
    <Stack height="100%" justifyContent="space-between">
      <ProfileSection>
        <Image src={myphoto} alt="myphoto" width={50} height={50} />
        <LinkTitle>
          <TfiGithub />
          <a
            href="https://github.com/Kyoorim"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </LinkTitle>
        <LinkTitle>
          <TfiWrite />
          <a
            href="https://velog.io/@tootb"
            target="_blank"
            rel="noopener noreferrer"
          >
            Velog
          </a>
        </LinkTitle>
      </ProfileSection>
      <ProfileSection>
        <p>
          <span className="my-name">이규림</span>
        </p>
        <p>
          <MdMailOutline />
          tootb.kyoo@gmail.com
        </p>
        <p>
          <MdPhoneIphone />
          010-5120-2659
        </p>
        <p>
          <MdLocationOn />
          서울시 서대문구
        </p>
      </ProfileSection>
    </Stack>
  );
};

const ProfileSection = styled.section`
  height: fit-content !important;
  &:last-of-type {
    padding: 10px 0;
    border-top: 1px dashed #a5a5a5;
    border-bottom: 1px dashed #a5a5a5;
    p {
      display: flex;
      align-items: center;
      margin: 10px 0;
    }
    svg {
      margin-right: 3px;
      color: #666;
    }
  }
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  .my-name {
    margin-right: 5px;
    color: var(--gray);
    font-size: 1rem;
    font-weight: bold;
  }
`;

const LinkTitle = styled.p`
  display: flex;
  align-items: center;
  margin: 10px 0;
  &:first-of-type {
    margin-top: 20px;
  }
  &:last-of-type {
    margin-bottom: 20px;
  }
  a {
    text-decoration: none;
  }
  cursor: pointer;
  svg {
    margin-right: 5px;
    color: #666;
    font-size: 1.2rem;
  }
  &:hover {
    color: gray;
  }
`;

export default ProfileContent;
