export enum Emaster {
  name = "name",
  password = "password",
}

export interface Imaster {
  [Emaster.name]: string;
  [Emaster.password]: string;
}

export const useInitMaster = () => ({
  [Emaster.name]: "",
  [Emaster.password]: "",
});
