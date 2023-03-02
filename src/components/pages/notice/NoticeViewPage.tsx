import Link from 'next/link';
import styled from 'styled-components';
import { Paths } from '@/constants/paths';
import { Seo } from '@/constants/seo';
import { Colors, Fonts, BoxShadows } from '@/styles';
import { PageButton, Select } from '@/components/shared';
import { getPosts } from 'api/posts';
import { useEffect, useState } from 'react';
import { PostsType } from '@/constants';
import parseSubmitDate from '@/utils/parseSubmitDate';

export const NoticeViewPage = () => {
  const [notice, setNotice] = useState<ResponsePosts.Get>();

  const getNotice = async () => {
    const notice = await getPosts(PostsType.notice);
    setNotice(notice);
  };

  useEffect(() => {
    getNotice();
  }, []);
  return (
    <>
      {notice?.slice(0, 1).map((notice, i) => (
        <S.Title key={i}>
          <h1>{notice.title}</h1>
          <h2>1 | 관리자 | 2023-03-02</h2>
        </S.Title>
      ))}
      <S.Content>문의사항이 있으시다면 Email을 통해 연락을 부탁드립니다</S.Content>
    </>
  );
};

namespace S {
  export const Title = styled.div`
    padding: 3.5rem 1.3rem 2.5rem;
    background-color: ${Colors.gray100};

    > h1 {
      ${Fonts.medium24}
      text-align: center;
    }

    > h2 {
      ${Fonts.light12}
      text-align: right;
    }
  `;

  export const Content = styled.div`
    width: 120rem;
    height: 30rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
}
