export interface TodosType {
  Todos: TodoType[];
}

export interface TodoType {
  Id: string;
  Name: string;
  CreateDate: number;
  UpdateDate?: number;
  IsActive: boolean;
  action: string | null;
}
