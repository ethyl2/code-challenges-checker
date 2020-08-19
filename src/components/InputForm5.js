import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function InputForm5() {
  const [test2Message, setTest2Message] = useState(
    'Submit your output to check if it is correct.'
  );
  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    if (data.test2 === '42') {
      console.log('got it');
      setTest2Message('Correct! -993 + 42 + 993 = 42');
    } else if (data.test2 !== '42') {
      setTest2Message('Try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Input #2</h3>
      <div className="code-block">
        <code>{'\u007b'}</code>
        <code>{'"100" \u003a "pickle juice",'}</code>
        <code>{'"monkey" \u003a -993,'}</code>
        <code>{'"monkey baby" \u003a 0,'}</code>
        <code>{'42 \u003a "$*%^#&*$#&^@",'}</code>
        <code>{'"face mask" \u003a 993'}</code>
        <code>{'\u007d'}</code>
      </div>
      <label htmlFor="test2">Output 2</label>
      <input name="test2" ref={register} />

      <button type="submit">Check</button>
      <p>{test2Message}</p>
    </form>
  );
}
