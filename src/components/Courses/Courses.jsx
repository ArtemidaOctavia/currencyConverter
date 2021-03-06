import React from 'react';

export const Courses = (props) => {
  return (
    <div>
      {props.courses ?
        <div>
          {
            Object.entries(props.courses[0]).map((item, index, arr) => {
              if (index <= 16) {
                let currency = index % 2 === 0 ? item[0].substring(0, 3) : '';
                if (index % 2 === 0) {
                  return <div key={index}><span>{currency + ': ' + item[1]}/{arr[index + 1][1]} </span></div>
                }
              }
            })
          }
        </div>
        : ''}
    </div>
  )
};