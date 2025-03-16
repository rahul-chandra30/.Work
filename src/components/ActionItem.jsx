import React from 'react';

const ActionItem = ({ description, assignee, dueDate }) => {
  return (
    <div>
      <h3>Action Item</h3>
      <p>Description: {description}</p>
      <p>Assignee: {assignee}</p>
      <p>Due Date: {dueDate}</p>
    </div>
  );
};

export default ActionItem;