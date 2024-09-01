'use client';
import React from 'react';
import { Tree, ButtonGroup, Popover, Classes, Button } from '@blueprintjs/core';
import '@blueprintjs/core/lib/css/blueprint.css';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n";
styleInject(css_248z$1);

var css_248z = "@font-face{\n  font-family:\"blueprint-icons-16\";\n  src:url(\"./blueprint-icons-16.ttf?cff85e8bca36675e21845266a9c86805\") format(\"truetype\"), url(\"./blueprint-icons-16.eot?cff85e8bca36675e21845266a9c86805#iefix\") format(\"embedded-opentype\"), url(\"./blueprint-icons-16.woff2?cff85e8bca36675e21845266a9c86805\") format(\"woff2\"), url(\"./blueprint-icons-16.woff?cff85e8bca36675e21845266a9c86805\") format(\"woff\"), url(\"./blueprint-icons-16.svg?cff85e8bca36675e21845266a9c86805#blueprint-icons-16\") format(\"svg\");\n}\n@font-face{\n  font-family:\"blueprint-icons-20\";\n  src:url(\"./blueprint-icons-20.ttf?5ac9c4589359447b69e06c69372aa53f\") format(\"truetype\"), url(\"./blueprint-icons-20.eot?5ac9c4589359447b69e06c69372aa53f#iefix\") format(\"embedded-opentype\"), url(\"./blueprint-icons-20.woff2?5ac9c4589359447b69e06c69372aa53f\") format(\"woff2\"), url(\"./blueprint-icons-20.woff?5ac9c4589359447b69e06c69372aa53f\") format(\"woff\"), url(\"./blueprint-icons-20.svg?5ac9c4589359447b69e06c69372aa53f#blueprint-icons-20\") format(\"svg\");\n}";
styleInject(css_248z);

var styles = ".treeTitle {\n  margin-top: 0;\n  font-weight: normal;\n}\n\n.tree {\n  border-radius: #aaa;\n}\n\n.tree :global(.bp4-tree-node-content),\n.tree :global(.bp4-tree-node-secondary-label) {\n  padding-right: 0;\n}";

var TreeUtils;
(function (TreeUtils) {
    /**
     * Walks the child nodes of a given node and calls the callback function on each child node.
     * The callback function receives the child node and the parent node as arguments.
     *
     * @param {Node} root - The parent node of the child nodes.
     * @param {function} callback - The callback function to call on each child node.
     * @returns {void} - This function does not return anything.
     */
    function walk(root, callback) {
        const recursiveWalk = (parent, children) => {
            for (const child of children) {
                callback(child, parent);
                if (child.childNodes) {
                    recursiveWalk(child, child.childNodes);
                }
            }
        };
        if (root.childNodes) {
            recursiveWalk(root, root.childNodes);
        }
    }
    TreeUtils.walk = walk;
})(TreeUtils || (TreeUtils = {})); // end namespace
//   /////////////////////////////////////////////////////////////////////////////
//   map(children, callback) {
//     if (!children?.length) {
//       throw new Error('input tree is empty')
//     }
//     if (!callback) {
//       throw new Error('input callback is undefined')
//     }
//     if (!(callback instanceof Function)) {
//       throw new Error('input callback is not a function')
//     }
//     const recursiveMap = (parent, nodes, cb) => {
//       if (nodes && nodes.length) {
//         nodes.forEach((node) => {
//           let childNodes
//           if (node.childNodes?.length) {
//             childNodes = [...node.childNodes]
//           }
//           node = cb({ ...node })
//           if (node) {
//             parent.push(node)
//             if (childNodes) {
//               node.childNodes = []
//               recursiveMap(node.childNodes, childNodes, cb)
//             }
//           } else {
//             if (childNodes) {
//               recursiveMap(parent, childNodes, cb)
//             }
//           }
//         })
//       }
//     }
//     let ret_tree = []
//     recursiveMap(ret_tree, children, callback)
//     return ret_tree
//   },
//   /////////////////////////////////////////////////////////////////////////////
//   reduce(children, callback, initialValue) {
//     let acc = initialValue ? initialValue : 0
//     this.walk(children, (node) => {
//       acc = callback(acc, node)
//     })
//     return acc
//   },
//   /////////////////////////////////////////////////////////////////////////////
//   filter(children, predicate) {
//     return this.map(children, (node) => {
//       if (predicate(node)) {
//         return node
//       }
//     })
//   },
//   /////////////////////////////////////////////////////////////////////////////
//   flatten(children) {
//     const ret_array = []
//     this.walk(children, (node) => ret_array.push(node))
//     return ret_array
//   },
//   /////////////////////////////////////////////////////////////////////////////
//   findInChildren(children, predicate) {
//     if (this.filter(children, predicate).length) {
//       return true
//     }
//     return false
//   },
//   /////////////////////////////////////////////////////////////////////////////
//   getParentFromID(children, childID) {
//     for (let node of children) {
//       if (node.childNodes) {
//         for (let child of node.childNodes) {
//           if (child.id === childID) {
//             return node
//           }
//         }
//         const potentialChildFound = this.getParentFromID(
//           node.childNodes,
//           childID
//         )
//         if (potentialChildFound) {
//           return potentialChildFound
//         }
//       }
//     }
//     return null
//   },
// }

///////////////////////////////////////////////////////////////////////////////
const EditableTree = ({ tree, className, isFullyExpanded = true, contentEditNode, contentRemoveNode, }) => {
    const [treeData, setTreeData] = React.useState(tree);
    React.useEffect(() => {
        setTreeData(applyExpandOnTree(treeData, isFullyExpanded));
    }, [isFullyExpanded]);
    React.useEffect(() => {
        setTreeData(applyExpandOnTree(stylizeTree(tree, contentEditNode, contentRemoveNode), isFullyExpanded));
    }, [tree]);
    const onClick = (node, path) => {
        const newTree = [...treeData];
        const nodeToToggle = Tree.nodeFromPath(path, newTree); // Taking node input doesnt expand when isFullyExpanded=true
        nodeToToggle.isExpanded = !nodeToToggle.isExpanded;
        setTreeData(newTree);
    };
    return (React.createElement("div", { className: className !== null && className !== void 0 ? className : '' },
        React.createElement(Tree, { className: styles.tree, contents: treeData, onNodeClick: onClick, onNodeCollapse: onClick, onNodeExpand: onClick })));
};
///////////////////////////////////////////////////////////////////////////////
function applyExpandOnTree(tree, isExpanded) {
    if (!tree) {
        return tree;
    }
    let newTree = [...tree];
    TreeUtils.walk({ childNodes: tree }, (node) => (node.isExpanded = isExpanded));
    return newTree;
}
///////////////////////////////////////////////////////////////////////////////
function stylizeTree(tree, contentEditNode, contentRemoveNode) {
    if (!tree) {
        return tree;
    }
    let newTree = [...tree];
    const rootTree = { id: -1, label: '', childNodes: newTree };
    TreeUtils.walk(rootTree, (child) => {
        const node = child;
        if (node.isFreshlyAdded) {
            node.className = styles.freshlyAddedNode;
        }
        if (contentEditNode || contentRemoveNode) {
            node.secondaryLabel = (React.createElement(ButtonGroup, { minimal: true },
                contentEditNode && (React.createElement(Popover, { content: contentEditNode(node), popoverClassName: Classes.POPOVER_CONTENT_SIZING },
                    React.createElement(Button, { icon: "edit", onClick: (e) => (node.isExpanded = !node.isExpanded) }))),
                contentRemoveNode && (React.createElement(Popover, { content: contentRemoveNode(node), popoverClassName: Classes.POPOVER_CONTENT_SIZING },
                    React.createElement(Button, { icon: "cross", onClick: (e) => (node.isExpanded = !node.isExpanded) })))));
        }
    });
    return newTree;
}

export { EditableTree };
//# sourceMappingURL=index.js.map
