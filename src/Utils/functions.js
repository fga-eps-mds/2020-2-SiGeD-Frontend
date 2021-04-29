const removeCategory = (category, selectedCategories) => {
  const newSelectedCategories = selectedCategories.filter(
    (remove) => remove._id !== category._id,
  );

  return newSelectedCategories;
};

export default removeCategory;
