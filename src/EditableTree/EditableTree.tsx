import React from "react";
import { Tree, TreeNodeInfo } from "@blueprintjs/core";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";


import styles from "./EditableTree.module.scss"

// type Node = {
//   children?: Node[]; 
//   isExpanded?: boolean; 
// };

type Props = {
  data: TreeNodeInfo[]; 
};

const EditableTree: React.FC<Props> = ({ data }) => {
  const [treeData, setTreeData] = React.useState<TreeNodeInfo[]>(data); // State to manage the tree data

  // const onClick = (node: Node, path: number[]) => { // Type for node and path parameters are added based on their usage in Tree component's API documentation
  //   const newTree = [...treeData]; // Copying existing tree data before modification
  //   const nodeToToggle = Tree.nodeFromPath(path, newTree); // Finding the node to toggle from its path
  //   if (nodeToToggle) {
  //     nodeToToggle.isExpanded = !nodeToToggle.isExpanded; // Toggling isExpanded property of the found node
  //     setTreeData(newTree); // Updating state with modified tree data
  //   }
  // };

  return (
    <div>
      <Tree
        className={styles.tree}
        contents={treeData} 
        // onNodeClick={onClick}
        // onNodeCollapse={onClick}
        // onNodeExpand={onClick}
      />
    </div>
  );
};

export default EditableTree; 
