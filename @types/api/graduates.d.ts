declare namespace ResponseGraduates {
  type Get = GetById[];

  type GetById = {
    semester: number;
    filename: string;
    uuid: string;
    id: number;
    created_at: string;
    updated_at: string;
  };
}
