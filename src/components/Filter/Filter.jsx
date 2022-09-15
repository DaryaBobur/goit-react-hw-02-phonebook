import { Label } from "./FilterStyled";

const Filter = ({ value, onChange }) => (
    <Label>
      Find contacts by name
      <input type="text" value={value} name="filter" onChange={onChange} />
    </Label>
  );
  
  export default Filter;