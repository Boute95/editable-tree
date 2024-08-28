export namespace TreeUtils {
  /////////////////////////////////////////////////////////////////////////////
  type Node = {
    childNodes?: Array<Node>
  }

  /**
   * Walks the child nodes of a given node and calls the callback function on each child node.
   * The callback function receives the child node and the parent node as arguments.
   *
   * @param {Node} root - The parent node of the child nodes.
   * @param {function} callback - The callback function to call on each child node.
   * @returns {void} - This function does not return anything.
   */
  export function walk(
    root: Node,
    callback: (child: Node, parent: Node) => void
  ): void {
    const recursiveWalk = (parent: Node, children: Node[]): void => {
      for (const child of children) {
        callback(child, parent)
        if (child.childNodes) {
          recursiveWalk(child, child.childNodes)
        }
      }
    }
    if (root.childNodes) {
      recursiveWalk(root, root.childNodes)
    }
  }

} // end namespace

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
