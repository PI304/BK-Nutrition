declare namespace ResponseGraduates {
  type Get = GetById[];

  type GetById = {
    name: string;
    degree: string;
    semester: number;
    role: string;
    advisor: string;
    id: number;
    created_at: string;
    updated_at: string;
    uuid: string;
  };
}
