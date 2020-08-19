import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function InputForm1() {
  const [test1Message, setTest1Message] = useState(
    'Submit your output to check if it is correct.'
  );
  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    if (data.test1 === '41') {
      console.log('got it');
      setTest1Message('Correct! 23 + 18 = 41');
    } else if (data.test1 !== '41') {
      setTest1Message('Try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Input #1</h3>
      <div className="code-block">
        <code>{'\u007b'}</code>
        <code>{'"cat" \u003a "bob",'}</code>
        <code>{'"dog" \u003a 23,'}</code>
        <code>{'19 \u003a 18,'}</code>
        <code>{'90 \u003a "fish"'}</code>
        <code>{'\u007d'}</code>
      </div>
      <label htmlFor="test1">Output 1</label>
      <input name="test1" ref={register} />

      <button type="submit">Check</button>
      <p>{test1Message}</p>
    </form>
  );
}
