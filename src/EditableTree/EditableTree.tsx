import React from 'react'
import {
  Button,
  ButtonGroup,
  Classes,
  Popover,
  Tree,
  TreeEventHandler,
  TreeNodeInfo,
} from '@blueprintjs/core'
import 'normalize.css'
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'

import styles from './EditableTree.module.scss'
import { TreeUtils } from '../utils/Tree'

type EditableTreeNodeInfo = TreeNodeInfo & {
  isFreshlyAdded?: false
}

type Props = {
  tree: EditableTreeNodeInfo[]
  className?: string,
  isFullyExpanded?: boolean
  contentEditNode?: (node: EditableTreeNodeInfo) => React.JSX.Element
  contentRemoveNode?: (node: EditableTreeNodeInfo) => React.JSX.Element
}

///////////////////////////////////////////////////////////////////////////////
const EditableTree: React.FC<Props> = ({
  tree,
  className,
  isFullyExpanded = true,
  contentEditNode,
  contentRemoveNode,
}) => {
  const [treeData, setTreeData] = React.useState<EditableTreeNodeInfo[]>(tree)

  React.useEffect(() => {
    setTreeData(applyExpandOnTree(treeData, isFullyExpanded))
  }, [isFullyExpanded])

  React.useEffect(() => {
    setTreeData(
      applyExpandOnTree(
        stylizeTree(tree, contentEditNode, contentRemoveNode),
        isFullyExpanded
      )
    )
  }, [tree])

  const onClick: TreeEventHandler = (node, path) => {
    const newTree = [...treeData]
    const nodeToToggle = Tree.nodeFromPath(path, newTree) // Taking node input doesnt expand when isFullyExpanded=true
    nodeToToggle.isExpanded = !nodeToToggle.isExpanded
    setTreeData(newTree)
  }

  return (
    <div className={className ?? ''}>
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

///////////////////////////////////////////////////////////////////////////////
function stylizeTree(
  tree: EditableTreeNodeInfo[],
  contentEditNode?: (node: EditableTreeNodeInfo) => React.JSX.Element,
  contentRemoveNode?: (node: EditableTreeNodeInfo) => React.JSX.Element
) {
  if (!tree) {
    return tree
  }

  let newTree = [...tree]
  const rootTree = { id: -1, label: '', childNodes: newTree }
  TreeUtils.walk(rootTree, (child) => {
    const node = child as EditableTreeNodeInfo
    if (node.isFreshlyAdded) {
      node.className = styles.freshlyAddedNode
    }
    if (contentEditNode || contentRemoveNode) {
      node.secondaryLabel = (
        <ButtonGroup minimal>
          {contentEditNode && (
            <Popover
              content={contentEditNode(node)}
              popoverClassName={Classes.POPOVER_CONTENT_SIZING}
            >
              <Button
                icon="edit"
                onClick={(e) => (node.isExpanded = !node.isExpanded)}
              />
            </Popover>
          )}
          {contentRemoveNode && (
            <Popover
              content={contentRemoveNode(node)}
              popoverClassName={Classes.POPOVER_CONTENT_SIZING}
            >
              <Button
                icon="cross"
                onClick={(e) => (node.isExpanded = !node.isExpanded)}
              />
            </Popover>
          )}
        </ButtonGroup>
      )
    }
  })
  return newTree
}

export default EditableTree
