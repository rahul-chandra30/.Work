import { visit } from 'unist-util-visit';

export function remarkComponents() {
  return (tree) => {
    visit(tree, 'paragraph', (node, index, parent) => {
      console.log('Node:', node); 

      if (
        !node.children ||
        node.children.length === 0 ||
        node.children.length !== 1 ||
        node.children[0].type !== 'text' ||
        !node.children[0].value.trim()
      ) {
        console.log('Skipping invalid or empty node:', node); 
        return;
      }

      const text = node.children[0].value.trim();
      console.log('Processing:', text); 

      let replacement = null;

      if (text.startsWith('Meeting:')) {
        const details = text.slice('Meeting:'.length).trim();
        const [attendees, time, agenda, outcome] = details.split(',').map(part => part.trim());
        if (attendees && time && agenda && outcome) {
          replacement = {
            type: 'mdxJsxFlowElement',
            name: 'Meeting',
            attributes: [
              { type: 'mdxJsxAttribute', name: 'attendees', value: attendees },
              { type: 'mdxJsxAttribute', name: 'time', value: time },
              { type: 'mdxJsxAttribute', name: 'agenda', value: agenda },
              { type: 'mdxJsxAttribute', name: 'outcome', value: outcome },
            ],
            children: [],
          };
        }
      }

      if (text.startsWith('Task:')) {
        const details = text.slice('Task:'.length).trim();
        const [title, assignee, status] = details.split(',').map(part => part.trim());
        if (title && assignee && status) {
          replacement = {
            type: 'mdxJsxFlowElement',
            name: 'Task',
            attributes: [
              { type: 'mdxJsxAttribute', name: 'title', value: title },
              { type: 'mdxJsxAttribute', name: 'assignee', value: assignee },
              { type: 'mdxJsxAttribute', name: 'status', value: status },
            ],
            children: [],
          };
        }
      }

      if (text.startsWith('Blocker:')) {
        const details = text.slice('Blocker:'.length).trim();
        const parts = details.split(',').map(part => part.trim());
        const [description, reportedBy] = parts;
        replacement = {
          type: 'mdxJsxFlowElement',
          name: 'Blocker',
          attributes: [
            { type: 'mdxJsxAttribute', name: 'description', value: description || 'No description' },
            { type: 'mdxJsxAttribute', name: 'reportedBy', value: reportedBy || 'Unknown' },
          ],
          children: [],
        };
      }

      if (text.startsWith('ActionItem:')) {
        const details = text.slice('ActionItem:'.length).trim();
        const [description, assignee, dueDate] = details.split(',').map(part => part.trim());
        if (description && assignee && dueDate) {
          replacement = {
            type: 'mdxJsxFlowElement',
            name: 'ActionItem',
            attributes: [
              { type: 'mdxJsxAttribute', name: 'description', value: description },
              { type: 'mdxJsxAttribute', name: 'assignee', value: assignee },
              { type: 'mdxJsxAttribute', name: 'dueDate', value: dueDate },
            ],
            children: [],
          };
        }
      }

      if (text.startsWith('StandUpSummary:')) {
        const details = text.slice('StandUpSummary:'.length).trim();
        const [date, team, summary] = details.split(',').map(part => part.trim());
        if (date && team && summary) {
          replacement = {
            type: 'mdxJsxFlowElement',
            name: 'StandUpSummary',
            attributes: [
              { type: 'mdxJsxAttribute', name: 'date', value: date },
              { type: 'mdxJsxAttribute', name: 'team', value: team },
              { type: 'mdxJsxAttribute', name: 'summary', value: summary },
            ],
            children: [],
          };
        }
      }

      if (text.startsWith('Progress:')) {
        const details = text.slice('Progress:'.length).trim();
        const [task, percentage, notes] = details.split(',').map(part => part.trim());
        if (task && percentage && notes) {
          replacement = {
            type: 'mdxJsxFlowElement',
            name: 'Progress',
            attributes: [
              { type: 'mdxJsxAttribute', name: 'task', value: task },
              { type: 'mdxJsxAttribute', name: 'percentage', value: percentage },
              { type: 'mdxJsxAttribute', name: 'notes', value: notes },
            ],
            children: [],
          };
        }
      }

      if (text.startsWith('Callout:')) {
        const details = text.slice('Callout:'.length).trim();
        const [type, content] = details.split(',').map(part => part.trim());
        if (type && content) {
          replacement = {
            type: 'mdxJsxFlowElement',
            name: 'Callout',
            attributes: [
              { type: 'mdxJsxAttribute', name: 'type', value: type },
              { type: 'mdxJsxAttribute', name: 'content', value: content },
            ],
            children: [],
          };
        }
      }

      if (text.startsWith('CodeSnippet:')) {
        const details = text.slice('CodeSnippet:'.length).trim();
        const [language, code] = details.split(',').map(part => part.trim());
        if (language && code) {
          replacement = {
            type: 'mdxJsxFlowElement',
            name: 'CodeSnippet',
            attributes: [
              { type: 'mdxJsxAttribute', name: 'language', value: language },
              { type: 'mdxJsxAttribute', name: 'code', value: code },
            ],
            children: [],
          };
        }
      }

      if (text.startsWith('Image:')) {
        const details = text.slice('Image:'.length).trim();
        const [src, alt, caption] = details.split(',').map(part => part.trim());
        if (src && alt && caption) {
          replacement = {
            type: 'mdxJsxFlowElement',
            name: 'Image',
            attributes: [
              { type: 'mdxJsxAttribute', name: 'src', value: src },
              { type: 'mdxJsxAttribute', name: 'alt', value: alt },
              { type: 'mdxJsxAttribute', name: 'caption', value: caption },
            ],
            children: [],
          };
        }
      }

      if (replacement) {
        parent.children[index] = replacement;
      }
    });
  };
}