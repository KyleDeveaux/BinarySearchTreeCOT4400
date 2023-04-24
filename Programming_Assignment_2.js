class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  add(data) {
    const node = this.root;
    if (this.root === null) {
      // This will create the root node if the tree has not been created
      this.root = new Node(data);
      return;
    } else {
      // function will search through the tree and will be called recusively until conditions are met on both left and right side
      const searchTree = (node) => {
        // if the data is less than node data then we will put the node on the left side of the tree
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left != null) {
            // if node.left =! null recall the function an pass the left node to start traversal again
            searchTree(node.left);
          }
          // if the data is greater than node data then we will put the node on the right side of the tree
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right != null) {
            // if node.right =! null recall the function an pass the right node to start traversal again
            searchTree(node.right);
          }
        } else {
          // if the nodes are equal to one another we will return null and not add it to the tree
          return null;
        }
      };
      return searchTree(node);
    }
  }

  insideTree(data) {
    let current = this.root;
    // this loop will cycle through the BST to find the a match
    while (current) {
      if (data === current.data) {
        return true;
      }
      // if current data is less then the node it has reach send node to search left
      if (data < current.data) {
        current = current.left;
        // if current node is greater then node send the node to search right
      } else {
        current = current.right;
      }
    }
    return false;
  }

  remove(data) {
    const removeNode = (node, data) => {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        // there are no children in the node
        if (node.left == null && node.right == null) {
          return null;
        }
        if (node.left == null) {
          return node.right;
        }
        if (node.right == null) {
          return node.left;
        }
        // if a node has 2 children
        var tempNode = node.right;
        // this loop will get us to traverse through the tree and grab the lowest left value
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        // we will switch the lowest left node and switch it with node.data
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }
}

// function will print out the binary search tree
function printTree(bst) {
  if (!bst.root) {
    console.log("The tree is empty.");
    return;
  }

  const queue = [bst.root];
  let levelCount = 1;
  let nextLevelCount = 0;
  let output = "";

  while (queue.length > 0) {
    const node = queue.shift();
    output += node.data + " ";
    levelCount--;

    if (node.left) {
      queue.push(node.left);
      nextLevelCount++;
    }

    if (node.right) {
      queue.push(node.right);
      nextLevelCount++;
    }

    if (levelCount === 0) {
      output += "\n";
      levelCount = nextLevelCount;
      nextLevelCount = 0;
    }
  }

  console.log(output);
}
const bst = new BST();
// Add data to our tree
bst.add(8);
bst.add(3);
bst.add(10);
bst.add(1);
bst.add(6);
bst.add(4);
bst.add(7);
bst.add(14);
bst.add(13);

printTree(bst);
console.log("Is number 6 inside the binary search tree :", bst.insideTree(6));
/*****************************************************************************************************/

const bstNumTwo = new BST();
// new binary search tree
bstNumTwo.add(8);
bstNumTwo.add(3);
bstNumTwo.add(10);
bstNumTwo.add(1);
bstNumTwo.add(6);
bstNumTwo.add(4);
bstNumTwo.add(7);
bstNumTwo.add(14);
bstNumTwo.add(13);

bstNumTwo.remove(6);
printTree(bstNumTwo);
console.log(
  "Is the number 6 inside the Binary search tree :",
  bstNumTwo.insideTree(6)
);
/*****************************************************************************************************/

const bstNumThree = new BST();
// new binary search tree
bstNumThree.add(8);
bstNumThree.add(3);
bstNumThree.add(10);
bstNumThree.add(1);
bstNumThree.add(6);
bstNumThree.add(4);
bstNumThree.add(7);
bstNumThree.add(14);
bstNumThree.add(13);
// we will insert 5 into our tree
bstNumThree.add(5);

printTree(bstNumThree);
console.log("The number 5 is in our binary tree :", bstNumThree.insideTree(5));
