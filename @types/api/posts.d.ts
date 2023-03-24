declare namespace ResponsePosts {
  type Get = {
    count: number;
    results: GetById[];
  };

  type GetById = {
    title: string;
    content: string;
    type: '연구업적' | '국제협력' | '산학협력' | '공지사항';
    is_fixed: boolean;
    fixed_at: string;
    date: string;
    image_file: string;
    id: number;
    created_at: string;
    updated_at: string;
    resources: {
      id: number;
      post_id: number;
      filename: string;
      created_at: string;
      updated_at: string;
      uuid: string;
    }[];
    author: {
      username: string;
      email: string;
      name: string;
    };
  };
}
