import { visit } from 'unist-util-visit';

export function remarkComponents() {
  return (tree) => {
    visit(tree, 'paragraph', (node, index, parent) => {
      if (!node.children || node.children.length === 0) {
        return;
      }

      // Handle all text children in the paragraph
      const newChildren = [];
      node.children.forEach((child) => {
        if (child.type !== 'text' || !child.value.trim()) {
          newChildren.push(child);
          return;
        }

        const lines = child.value.split('\n').map(line => line.trim()).filter(line => line);
        lines.forEach((text) => {
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
            const parts = text.slice('StandUpSummary:'.length).trim().split(',').map(part => part.trim());
            if (parts.length >= 3) { 
              const date = parts[0];
              const team = parts[1];
              const summary = parts.slice(2).join(', '); 
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

          if (text.startsWith('Milestone:')) {
            const [date, title, details] = text.slice('Milestone:'.length).split(',').map(part => part.trim());
            replacement = {
              type: 'mdxJsxFlowElement', name: 'Milestone', attributes: [
                { type: 'mdxJsxAttribute', name: 'date', value: date },
                { type: 'mdxJsxAttribute', name: 'title', value: title },
                { type: 'mdxJsxAttribute', name: 'details', value: details },
              ], children: []
            };
          }

          if (text.startsWith('Shoutout:')) {
            const [person, reason] = text.slice('Shoutout:'.length).split(',').map(part => part.trim());
            replacement = {
              type: 'mdxJsxFlowElement', name: 'Shoutout', attributes: [
                { type: 'mdxJsxAttribute', name: 'person', value: person },
                { type: 'mdxJsxAttribute', name: 'reason', value: reason },
              ], children: []
            };
          }

          if (text.startsWith('Idea:')) {
            const [concept, priority, notes] = text.slice('Idea:'.length).split(',').map(part => part.trim());
            replacement = {
              type: 'mdxJsxFlowElement', name: 'Idea', attributes: [
                { type: 'mdxJsxAttribute', name: 'concept', value: concept },
                { type: 'mdxJsxAttribute', name: 'priority', value: priority },
                { type: 'mdxJsxAttribute', name: 'notes', value: notes },
              ], children: []
            };
          }

          if (text.startsWith('Timeline:')) {
            const parts = text.slice('Timeline:'.length).trim().split(','); // Simple comma split
            const title = parts[0].trim();
            const eventParts = parts.slice(1).join(',').split(/,\s*(?=fa-)/); // Rejoin then split on fa-
            console.log('Timeline Parts:', parts);
            console.log('Event Parts:', eventParts);

            const events = eventParts.map((event, index) => {
              const [iconHeading, desc] = event.split('|').map(s => s.trim());
              const [icon, ...headingParts] = iconHeading.trim().split(' ');
              const result = { icon, heading: headingParts.join(' '), description: desc };
              console.log(`Event ${index}:`, result);
              return result;
            });

            replacement = {
              type: 'mdxJsxFlowElement',
              name: 'Timeline',
              attributes: [
                { type: 'mdxJsxAttribute', name: 'title', value: title },
                { type: 'mdxJsxAttribute', name: 'events', value: JSON.stringify(events) },
              ],
              children: [],
            };
          }

          if (text.startsWith('IconBullet:')) {
            const [iconHeading, desc] = text.slice('IconBullet:'.length).split('|').map(s => s.trim());
            const [icon, ...headingParts] = iconHeading.split(' ');
            replacement = {
              type: 'mdxJsxFlowElement',
              name: 'IconBullet',
              attributes: [
                { type: 'mdxJsxAttribute', name: 'icon', value: icon },
                { type: 'mdxJsxAttribute', name: 'heading', value: headingParts.join(' ') },
                { type: 'mdxJsxAttribute', name: 'description', value: desc },
              ],
              children: [],
            };
          }

          if (replacement) {
            newChildren.push(replacement);
          } else {
            newChildren.push({ type: 'text', value: text });
          }
        });
      });

      parent.children[index] = {
        type: 'paragraph',
        children: newChildren,
      };
    });
  };
}