import Link from 'next/link';
import styled from 'styled-components';
import { Paths } from '@/constants/paths';
import { Seo } from '@/constants/seo';
import { useState, useEffect } from 'react';
import { getPosts } from 'api/posts';
import { PostsType } from '@/constants';
import { Colors, Fonts, BoxShadows } from '@/styles';
import { PageButton, Select } from '@/components/shared';
import parseSubmitDate from '@/utils/parseSubmitDate';

export const IndustrialViewPage = () => {
  const [industrial, setIndustrial] = useState<ResponsePosts.Get>();

  const getIndustrial = async () => {
    const industrial = await getPosts(PostsType.industrial);
    setIndustrial(industrial);
  };

  useEffect(() => {
    getIndustrial();
  }, []);
  return (
    <>
      <div></div>
    </>
  );
};
