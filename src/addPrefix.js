function addPrefix(node, prefix) {
  if (Array.isArray(node)) {
    return node.map((o) => addPrefix(o, prefix));
  }
  if (typeof node === "string") {
    return `${prefix}${node}`;
  }
  if (typeof node === "object") {
    if (Array.isArray(node.children)) {
      return {
        ...node,
        path: addPrefix(node.path, prefix),
        children: addPrefix(node.children, prefix),
      };
    }
    return node;
  }
}

module.exports = addPrefix;
