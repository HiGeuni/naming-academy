const { useState } = require("react");

export const useInput = (init) => {
  const [value, setValue] = useState(init);
  const onChangeValue = (e) => {
    setValue(e.target.value);
  };
  return { value, setValue, onChangeValue };
};
