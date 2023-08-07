export interface ToDoListItem {
  id: number;
  user_id: number;
  content: string;
  completed: boolean;
  created_at: string;
  updated_at: string;
}

export interface CreateToDoItem {
  content: string;
}

export interface ModifyToDoItem {
  content?: string;
  completed?: boolean;
}
