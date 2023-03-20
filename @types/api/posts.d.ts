declare namespace ResponsePosts {
  type Get = {
    count: number;
    getById: GetById[];
  };

  type GetById = {
    title: string;
    content: string;
    type: string;
    is_fixed: boolean;
    date: string;
    author: {
      username: string;
      email: string;
      name: string;
    };
    id: number;
    created_at: string;
    updated_at: string;
    uuid: string;
    resources: {
      id: number;
      post_id: number;
      filename: string;
      created_at: string;
      updated_at: string;
      uuid: string;
    }[];
  };
}
