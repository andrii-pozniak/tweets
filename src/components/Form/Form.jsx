import { useState } from "react";
import { Input, Label, Btn, FormUser } from "./Form.Style";

export const Form = () => {
  const [showBtn, setShowBtn] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const toggleBtn = () => {
    setShowBtn(!showBtn);
  };

  return (
    <FormUser>
      <Label>
        <Input 
        name="tweeters"
        value={inputValue} onChange={handleChange} 
        />
        TWEETERS
      </Label>
      <Label>
        <Input 
        name="follows"/>
        FOLLOWS
      </Label>
      {!showBtn ? (
        <Btn
          type="button"
          onClick={() => toggleBtn()}
          backgroundColor="#EBD8FF"
          paddingSize="56px"
        >
          Follow
        </Btn>
      ) : (
        <Btn
          type="button"
          onClick={() => toggleBtn()}
          backgroundColor="#5CD3A8"
          paddingSize="42px"
        >
          Following
        </Btn>
      )}
    </FormUser>
  );
};
