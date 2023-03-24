import styled from 'styled-components';
import { BoxShadows, Colors, Fonts, MobileMemberHome, SC } from '@/styles';
import Phone from '../../../public/assets/phone.png';
import Message from '../../../public/assets/message.png';
import Home from '../../../public/assets/home2.png';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getProfessors } from 'api/professors';
import { getDownloadLinkFromS3 } from '@/s3';
import { FolderS3 } from '@/constants/folderS3';

export const Members = () => {
  const [professors, setProfessors] = useState<ResponseProfessors.Get>();

  const getMember = async () => {
    const professors = await getProfessors();
    setProfessors(professors);
  };

  useEffect(() => {
    getMember();
  }, []);
  return (
    <>
      {professors?.map((professors, i) => (
        <S.Member key={i}>
          <div>
            <img
              src={getDownloadLinkFromS3(FolderS3.profiles, professors.profile_image)}
              alt='Img'
            />
          </div>
          <div>
            <p>{professors.position}</p>
            <h2>{professors.name}</h2>
            <div>
              <SC.Contact>
                <Image src={Phone} alt='phone'></Image>
                <div>{professors.phone_number}</div>
              </SC.Contact>
              <SC.Contact>
                <Image src={Message} alt='message'></Image>
                <div>{professors.email}</div>
              </SC.Contact>
            </div>
            <SC.Home href={professors.url}>
              <Image src={Home} alt='home'></Image>
              {MobileMemberHome}
            </SC.Home>
          </div>
          <div>
            <p>{professors.affiliation}</p>
            <p>{professors.major}</p>
          </div>
        </S.Member>
      ))}
    </>
  );
};

namespace S {
  export const Member = styled.div`
    display: grid;
    grid-template-columns: 20rem 38rem;
    grid-template-rows: 23rem 7rem;
    position: relative;

    > div:first-of-type {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 3rem 4rem 0;
      position: relative;
      gap: 1.5rem;

      > div:first-of-type {
        display: flex;
        flex-direction: column;

        > div:first-of-type {
          margin-bottom: 2rem;
        }
      }

      > p {
        ${Fonts.bold18}
      }

      > h2 {
        ${Fonts.bold32}
        margin-bottom: 0.5rem;
      }
    }

    > div:last-of-type {
      grid-column: -3 / -1;
      ${Fonts.regular16};
      background-color: ${Colors.gray};
      box-shadow: ${BoxShadows.smooth};
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      padding: 1.5rem 2rem;

      > p {
        ${Fonts.regular16}
      }
    }

    @media (max-width: 1200px) {
      display: grid;
      grid-template-columns: 15rem;
      grid-template-rows: 21rem 12rem;
      border: 0.1rem solid ${BoxShadows.mobile_border};
      box-shadow: ${BoxShadows.mobile_shadow};
      position: relative;

      > div:first-of-type {
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      > div:nth-child(2) {
        padding: unset;
        position: unset;
        gap: unset;

        > div:first-of-type {
          width: 100%;

          > div:first-of-type {
            margin-bottom: 1.5rem;
            margin-right: unset;

            > img {
              width: 3rem;
              height: 2.375rem;
            }

            > div {
              ${Fonts.medium14}
            }
          }

          > div:last-of-type {
            margin-right: unset;
            word-break: break-word;
            padding: 0 2rem 0 0;

            > img {
              width: 3rem;
              height: 2.375rem;
            }

            > div {
              ${Fonts.medium14}
            }
          }
        }

        > p {
          ${Fonts.medium14}
          text-align: center;
          line-height: 150%;
        }

        > h2 {
          ${Fonts.bold16}
          margin-bottom: 0.5rem;
          text-align: center;
        }
      }

      > div:last-of-type {
        display: none;
      }
    }
  `;
}
