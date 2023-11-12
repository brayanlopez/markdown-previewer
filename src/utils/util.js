export const text = "asdasd";

export const importMdModules = () => {
  const modules = import.meta.glob("../assets/*.md", { as: "raw" });
  const mdArray = [];
  for (const path in modules) {
    modules[path]().then((mod) => mdArray.push(mod));
  }
  return mdArray;
};
