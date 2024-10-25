// hooks/useFiltering.ts
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const useFiltering = () => {
  const router = useRouter();
  const { search, category } = router.query;
  const [searchInput, setSearchInput] = useState<string>(
    Array.isArray(search) ? search[0] : search || ""
  );
  const selectedCategories = Array.isArray(category)
    ? category
    : category
    ? [category]
    : [];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setSearchInput(input);

    router.push(
      {
        pathname: router.pathname,
        query: {
          ...router.query,
          search: input || undefined,
          category:
            selectedCategories.length > 0 ? selectedCategories : undefined,
        },
      },
      undefined,
      { scroll: false }
    );
  };

  const handleCategoryFilter = (cat: string) => {
    const currentCategories = new Set(selectedCategories);
    currentCategories.has(cat)
      ? currentCategories.delete(cat)
      : currentCategories.add(cat);

    // Clear search input when applying category filter
    setSearchInput("");

    router.push(
      {
        pathname: router.pathname,
        query: {
          category:
            currentCategories.size > 0
              ? Array.from(currentCategories)
              : undefined,
        },
      },
      undefined,
      { scroll: false }
    );
  };

  return {
    searchInput,
    setSearchInput,
    selectedCategories,
    handleSearch,
    handleCategoryFilter,
  };
};

export default useFiltering;
