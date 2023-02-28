declare namespace ResponseGraduates {
  type Get = GetById[];

  type GetById = {
    semester: number;
    id: number;
    created_at: string;
    updated_at: string;
    uuid: string;
  };
}
