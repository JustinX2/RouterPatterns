import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';
import Nav from './Nav';
import whiskey from '../images/whiskey.jpg';
import duke from '../images/duke.jpg';
import perry from '../images/perry.jpg';
import tubby from '../images/tubby.jpg';

function App({ dogs }) {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogs={dogs} />
        <Routes>
          <Route path="/dogs" element={<DogList dogs={dogs} />} />
          <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
          <Route path="*" element={<Navigate to="/dogs" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = {
    dogs: [
        {
            name: "Whiskey",
            age: 5,
            src: whiskey,
            facts: [
                "Whiskey loves eating beef.",
                "Whiskey is a great companion.",
                "Whiskey wants to be petted!"
            ]
        },
        {
            name: "Duke",
            age: 3,
            src: duke,
            facts: [
                "Duke loves running around.",
                "Duke likes snow.",
                "Duke enjoys being petted."
            ]
        },
        {
            name: "Perry",
            age: 4,
            src: perry,
            facts: [
                "Perry is a great runner.",
                "Perry is a great swimmer.",
                "Perry likes to play with toys."
            ]
        },
        {
            name: "Tubby",
            age: 4,
            src: tubby,
            facts: [
                "Tubby is very smart.",
                "Tubby does not like other dogs.",
                "Tubby loves to eat food."
            ]
        }
    ]

};

export default App;