declare namespace ResponseResearchers {
  type Get = GetById[];

  type GetById = {
    name: string;
    position: string;
    affiliation: string;
    contact: string;
    id: number;
    created_at: string;
    updated_at: string;
    uuid: string;
  };
}
