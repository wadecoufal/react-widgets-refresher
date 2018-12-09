import React from 'react';
import Clock from './clock';
import Tabs from './tabs';
import Autocomplete from './autocomplete';

const Congrats = () => 
  <h1>
    Congratulations, you did it!
    <Clock />
    <Tabs tabs={TABS}/>
    <Autocomplete names={NAMES} />
  </h1>;

const TABS = [
  {
    title: "Cool Movies",
    content: "Lilo & Stitch, Moana, Inside Out"
  },
  {
    title: "Bad Movies",
    content: "Santa Clause 3"
  },
  {
    title: "Meh movies",
    content: "Princess Diaries"
  }
] 

const NAMES = [
  "Wade",
  "Michael",
  "Stitch",
  "Genji"
]

export default Congrats;
