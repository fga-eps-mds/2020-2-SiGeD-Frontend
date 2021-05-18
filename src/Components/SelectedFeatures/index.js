import React from 'react';
import {
  SelectedBox, Tag, Word,
} from './Style';

const SelectedFeatures = ({ features }) => {
  const renderSelectedFeatures = () => {
    if (features?.length === 0) {
      return <Word>Ainda não foi selecionada nenhuma característica...</Word>;
    }
    return features?.map((selectedFeatures) => (
      <Tag
        style={{ backgroundColor: selectedFeatures.color }}
        key={selectedFeatures._id}
      >
        {selectedFeatures.name}
      </Tag>
    ));
  };

  return (
    <SelectedBox>
      {renderSelectedFeatures()}
    </SelectedBox>
  );
};

export default SelectedFeatures;
