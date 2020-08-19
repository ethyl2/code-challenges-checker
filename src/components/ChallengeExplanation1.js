import React from 'react';

function ChallengeExplanation1() {
  return (
    <div>
      <h1>Summing Values and/or Keys from a Dictionary</h1>
      <h2>
        Given an object/dictionary with keys and values that consist of both
        strings and integers,
        <br />
        design an algorithm to calculate and return the sum of all of the
        numeric values.
      </h2>
      <p>
        Verbalize your thought process as much as possible before writing any
        code.{' '}
      </p>
      <p>
        Run through the UPER problem solving framework while going through your
        thought process.
      </p>
      <h2>Example</h2>
      <div className="code-block">
        <code>{'\u007b'}</code>
        <code>{'"cat" \u003a "bob",'}</code>
        <code>{'"dog" \u003a 23,'}</code>
        <code>{'19 \u003a 18,'}</code>
        <code>{'90 \u003a "fish"'}</code>
        <code>{'\u007d'}</code>
      </div>
      <p>
        Running your algorithm should output <span>41</span>, the sum of the
        values 23 and 18.
      </p>
    </div>
  );
}
export default ChallengeExplanation1;
