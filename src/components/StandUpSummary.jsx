import React from 'react';

const StandUpSummary = ({ date, team, summary }) => {
  return (
    <div>
      <h3>Stand-Up Summary</h3>
      <p>Date: {date}</p>
      <p>Team: {team}</p>
      <p>Summary: {summary}</p>
    </div>
  );
};

export default StandUpSummary;