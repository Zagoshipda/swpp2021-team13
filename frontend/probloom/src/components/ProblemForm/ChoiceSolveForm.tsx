import { Form, Checkbox } from 'semantic-ui-react';
import Latex from 'react-latex';

const ChoiceSolveForm = (props) => {
  return (
    <div className="Choice">
      <Form.Field>
        <Checkbox
          name="checkboxRadioGroup"
          checked={props.checked}
          onChange={() => props.onSelectChoice()}
        ></Checkbox>
        <Latex displayMode={true}>{props.content}</Latex>
      </Form.Field>
    </div>
  );
};

export default ChoiceSolveForm;