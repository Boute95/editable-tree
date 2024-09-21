'use client'

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

export type EditableTreeNodeInfo = TreeNodeInfo & {
  isFreshlyAdded?: false
}

type Props = {
  tree: EditableTreeNodeInfo[]
  className?: string
  isFullyExpanded?: boolean
  contentEditNode?: (node: EditableTreeNodeInfo) => React.JSX.Element
  onEditClick?: () => void
  contentRemoveNode?: (node: EditableTreeNodeInfo) => React.JSX.Element
  onRemoveClick?: () => void
}

///////////////////////////////////////////////////////////////////////////////
const EditableTree: React.FC<Props> = ({
  tree,
  className,
  isFullyExpanded = true,
  contentEditNode,
  onEditClick,
  contentRemoveNode,
  onRemoveClick,
}) => {
  const [treeData, setTreeData] = React.useState<EditableTreeNodeInfo[]>(tree)

  React.useEffect(() => {
    setTreeData(applyExpandOnTree(treeData, isFullyExpanded))
  }, [isFullyExpanded])

  React.useEffect(() => {
    setTreeData(
      applyExpandOnTree(
        stylizeTree(
          tree,
          contentEditNode,
          onEditClick,
          contentRemoveNode,
          onRemoveClick
        ),
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
  onEditClick?: () => void,
  contentRemoveNode?: (node: EditableTreeNodeInfo) => React.JSX.Element,
  onRemoveClick?: () => void
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
    if (contentEditNode || contentRemoveNode || onEditClick || onRemoveClick) {
      node.secondaryLabel = (
        // <ButtonGroup minimal>
        //   {(contentEditNode || onEditClick) && (
        //     <Popover
        //       content={contentEditNode && contentEditNode(node)}
        //       popoverClassName={Classes.POPOVER_CONTENT_SIZING}
        //     >
        //       <Button
        //         icon="edit"
        //         onClick={(e) => (node.isExpanded = !node.isExpanded)}
        //       />
        //     </Popover>
        //   )}
        //   {(contentRemoveNode || onRemoveClick) && (
        //     <Popover
        //       content={contentRemoveNode && contentRemoveNode(node)}
        //       popoverClassName={Classes.POPOVER_CONTENT_SIZING}
        //     >
        //       <Button
        //         icon="cross"
        //         onClick={(e) => (node.isExpanded = !node.isExpanded)}
        //       />
        //     </Popover>
        //   )}
        // </ButtonGroup>
        <ButtonGroup minimal>
          {contentEditNode && (
            <Popover
              content={contentEditNode(node)}
              popoverClassName={Classes.POPOVER_CONTENT_SIZING}
            >
              <Button
                icon="edit"
                onClick={() => {
                  node.isExpanded = !node.isExpanded
                }}
              />
            </Popover>
          )}
          {onEditClick && (
            <Button
              icon="edit"
              onClick={(e) => {
                node.isExpanded = !node.isExpanded
                onEditClick()
              }}
            />
          )}
          {contentRemoveNode && (
            <Popover
              content={contentRemoveNode(node)}
              popoverClassName={Classes.POPOVER_CONTENT_SIZING}
            >
              <Button
                icon="cross"
                onClick={() => {
                  node.isExpanded = !node.isExpanded
                }}
              />
            </Popover>
          )}
          {onRemoveClick && (
            <Button
              icon="cross"
              onClick={(e) => {
                node.isExpanded = !node.isExpanded
                onRemoveClick()
              }}
            />
          )}
        </ButtonGroup>
      )
    }
  })
  return newTree
}

export default EditableTree
