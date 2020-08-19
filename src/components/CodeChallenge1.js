import React from 'react';
import ChallengeExplanation1 from './ChallengeExplanation1';
import InputForm1 from './InputForm1';
import InputForm2 from './InputForm2';
import InputForm3 from './InputForm3';

export default function CodeChallenge1() {
  return (
    <section>
      <ChallengeExplanation1 />
      <h2>
        After creating your algorithm in your favorite IDE,
        <br /> submit the output that you get using the following inputs:
      </h2>
      <InputForm1 />
      <InputForm2 />
      <InputForm3 />
    </section>
  );
}
