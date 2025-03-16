import { visit } from 'unist-util-visit';

export function remarkMeeting() {
    return (tree) => {
        visit(tree, 'paragraph', (node, index, parent) => {
            if (
                node.children.length === 1 &&
                node.children[0].type === 'text' &&
                node.children[0].value.startsWith('Meeting:')
            ) {
                const text = node.children[0].value;
                const details = text.slice('Meeting:'.length).trim();
                const [attendees, time, agenda, outcome] = details.split(',').map(part => part.trim());

                if (attendees && time && agenda && outcome) {
                    const mdxNode = {
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
                    parent.children[index] = mdxNode;
                }
            }
        });
    };
}