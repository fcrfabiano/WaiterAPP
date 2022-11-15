import { Category } from '../../models/Category';

interface CreateCategoryDTO {
  name: string;
  icon: string;
}
export async function createCategory({ name, icon }: CreateCategoryDTO) {
  const category = await Category.create({
    name,
    icon
  });

  return category;
}
