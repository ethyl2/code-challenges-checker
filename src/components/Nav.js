import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <Link to="/codeChallenge1">Sum Dictionary Values</Link>
      <Link to="/codeChallenge2">Sum Dictionary Values & Keys</Link>
      <Link to="/">Home</Link>
    </nav>
  );
}
