declare namespace ResponseProfessors {
  type Get = GetById[];

  type GetById = {
    name: string;
    position: string;
    introduction: string;
    email: string;
    phone_number: string;
    profile_image: string;
    id: number;
    created_at: string;
    updated_at: string;
    uuid: string;
  };
}
