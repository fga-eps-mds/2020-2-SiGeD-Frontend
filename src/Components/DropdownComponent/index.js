import Dropdown from './Style';

const DropdownComponent = ({
  textColor, OnChangeFunction, style, optionStyle, optionList,
}) => (
  <Dropdown
    as="select"
    textcolor={textColor}
    onChange={OnChangeFunction}
    style={style}
  >
    {optionList.map((optionListItem, index) => (
      <option style={optionStyle} key={index}>
        {optionListItem}
      </option>
    ))}
  </Dropdown>

);

export default DropdownComponent;
