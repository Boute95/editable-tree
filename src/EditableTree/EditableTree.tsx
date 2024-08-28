import React from 'react'
import { Tree, TreeEventHandler, TreeNodeInfo } from '@blueprintjs/core'
import 'normalize.css'
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'

import styles from './EditableTree.module.scss'
import { TreeUtils } from '../utils/Tree'

type EditableTreeNodeInfo = TreeNodeInfo & {
  edit: (node: TreeNodeInfo) => void
  delete: (node: TreeNodeInfo) => void
}

type Props = {
  data: EditableTreeNodeInfo[]
  isFullyExpanded?: boolean
}

///////////////////////////////////////////////////////////////////////////////
const EditableTree: React.FC<Props> = ({ data, isFullyExpanded }) => {
  const [treeData, setTreeData] = React.useState<EditableTreeNodeInfo[]>(data)

  React.useEffect(() => {
    if (isFullyExpanded) {
      setTreeData(applyExpandOnTree(treeData, isFullyExpanded))
    }
  }, [isFullyExpanded])

  const onClick: TreeEventHandler = (node, path) => {
    const newTree = [...treeData]
    const nodeToToggle = Tree.nodeFromPath(path, newTree) // Taking node input doesnt expand when isFullyExpanded=true
    nodeToToggle.isExpanded = !nodeToToggle.isExpanded
    setTreeData(newTree)
  }

  return (
    <div>
      <Tree
        className={styles.tree}
        contents={treeData}
        onNodeClick={onClick}
        onNodeCollapse={onClick}
        onNodeExpand={onClick}
      />
    </div>
  )
}

///////////////////////////////////////////////////////////////////////////////
function applyExpandOnTree(
  tree: EditableTreeNodeInfo[],
  isExpanded: boolean
): EditableTreeNodeInfo[] {
  if (!tree) {
    return tree
  }

  let newTree = [...tree]
  TreeUtils.walk(
    { childNodes: tree },
    (node) => ((node as EditableTreeNodeInfo).isExpanded = isExpanded)
  )
  return newTree
}

export default EditableTree
