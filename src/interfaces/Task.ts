import type { Category } from "../types/categories";

export interface Task {
  id: string;
  title: string;
  description: string;
  category: Category;
  complete: boolean;
}
