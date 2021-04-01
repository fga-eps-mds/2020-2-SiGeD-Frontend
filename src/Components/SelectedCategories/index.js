import React, { useEffect } from 'react';
import {
  SelectedBox, Tag,
} from './Style';

const SelectedCategories = ({ selectedCategories }) => {
  const renderSelectedCategories = () => {
    if (selectedCategories?.length === 0) {
      return <h4 style={{ color: 'white' }}>Ainda não há categorias selecionadas...</h4>;
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
