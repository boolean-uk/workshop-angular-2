export interface IUser {
  id: number,
  name: string,
  age: number,
  skills?: [ISkill]
}

export interface ISkill {
  name: string,
  experience: number
}
