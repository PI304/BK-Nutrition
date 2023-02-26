declare namespace ResponsePosts {
  type Get = GetById[];

  type GetById = {
    title: string;
    content: string;
    type: string;
    is_fixed: boolean;
    author_id: number;
    id: number;
    created_at: string;
    updated_at: string;
    uuid: string;
  };
}
