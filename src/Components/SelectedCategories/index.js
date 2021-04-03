import React, { useEffect } from 'react';
import {
  SelectedBox, Tag, Word,
} from './Style';

const SelectedCategories = ({ selectedCategories }) => {
  const renderSelectedCategories = () => {
    if (selectedCategories?.length === 0) {
      return <Word>Ainda não há categorias selecionadas...</Word>;
    }
    return selectedCategories?.map((selectedCategory) => (
      <Tag
        style={{ backgroundColor: selectedCategory.color }}
      >
        {selectedCategory.name}
      </Tag>
    ));
  };

  useEffect(() => {
    console.log(selectedCategories);
  }, [selectedCategories]);

  return (
    <SelectedBox>
      {renderSelectedCategories()}
    </SelectedBox>
  );
};

export default SelectedCategories;
