import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function InputForm3() {
  const [test3Message, setTest3Message] = useState(
    'Submit your output to check if it is correct.'
  );
  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    if (data.test3 === '16') {
      console.log('got it');
      setTest3Message(
        'Correct! Only 1 value (16) is an integer; the rest are strings.'
      );
    } else if (data.test3 !== '16') {
      setTest3Message('Try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Input #3</h3>
      <div className="code-block">
        <code>{'\u007b'}</code>
        <code>{'"100" \u003a "24",'}</code>
        <code>{'"pufferfish" \u003a "-993",'}</code>
        <code>{'"pufferfish baby" \u003a 16,'}</code>
        <code>{'42 \u003a "99999",'}</code>
        <code>{'"face mask" \u003a "993"'}</code>
        <code>{'\u007d'}</code>
      </div>
      <label htmlFor="test3">Output 3</label>
      <input name="test3" defaultValue="test" ref={register} />

      <button type="submit">Check</button>
      <p>{test3Message}</p>
    </form>
  );
}
