import React from 'react'

export const Game = ({ question, percent, onClickStep }) => {
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percent}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((obj, index) => (
            <li key={index}
              onClick={() => onClickStep(index)}
            >{obj}</li>
          ))
        }
      </ul>
    </>
  );
}

