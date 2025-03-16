import React from 'react';

const Progress = ({ task, percentage, notes }) => {
  return (
    <div>
      <h3>Progress</h3>
      <p>Task: {task}</p>
      <p>Percentage: {percentage}</p>
      <p>Notes: {notes}</p>
    </div>
  );
};

export default Progress;