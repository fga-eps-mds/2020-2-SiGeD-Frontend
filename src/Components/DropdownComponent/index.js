import Dropdown from './Style';

const DropdownComponent = ({
  OnChangeFunction, style, optionStyle, optionList, value,
}) => (
  <Dropdown
    as="select"
    onChange={OnChangeFunction}
    style={style}
    value={value}
  >
    {optionList.map((optionListItem, index) => (
      <option style={optionStyle} key={index}>
        {optionListItem}
      </option>
    ))}
  </Dropdown>

);

export default DropdownComponent;
