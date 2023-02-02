declare namespace RequestUnduck {
  type Post = {
    name: string;
    password: string;
  };
}

declare namespace ResponseUnduck {
  type Post = {
    token: string;
  };
}
