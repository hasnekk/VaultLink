import type { Category } from "@/types/globalTypes";
import { defineStore } from "pinia";
import { computed, ref, type Ref, readonly } from "vue";
import { useToast } from "vue-toastification";
import { IconName } from "@/assets/icons";

const toast = useToast();

const defaultCategories: Category[] = [
  {
    title: "All",
    iconName: IconName.BORDER_ALL,
  },
  {
    title: "Work",
    iconName: IconName.BRIEFCASE,
  },
  {
    title: "Email",
    iconName: IconName.ENVELOPE,
  },
  {
    title: "Personal",
    iconName: IconName.USER,
  },
];

export const useAppStore = defineStore("appStore", () => {
  const _categories: Ref<Category[]> = ref(defaultCategories);
  const _activeCategory: Ref<Category> = ref(defaultCategories[0]);
  const categories = computed(() => readonly(_categories.value));
  const activeCategory = computed(() => readonly(_activeCategory.value));

  function addCategory(title: string, iconName: IconName) {
    if (_categories.value.map((c) => c.title).includes(title)) {
      toast.error("Category already exists.");
      return;
    }

    _categories.value.push({ title, iconName });
  }

  function removeCategory(title: string) {
    const index = _categories.value.findIndex((c) => c.title == title);
    if (index === -1) {
      toast.error("Category does not exist.");
      return;
    }

    if (_categories.value[index].title === _activeCategory.value.title) {
      const newActiveIndex =
        index + 1 > _categories.value.length - 1 ? 0 : index + 1;
      _activeCategory.value = _categories.value[newActiveIndex];
    }

    _categories.value.splice(index, index + 1);
  }

  function setActiveCategory(title: string) {
    const category = _categories.value.find((c) => c.title === title);

    if (!category) {
      toast.error("Category does not exist.");
      return;
    }

    _activeCategory.value = category;
  }

  return {
    categories,
    activeCategory,

    addCategory,
    removeCategory,
    setActiveCategory,
  };
});
