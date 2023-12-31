module.exports ={
    printWidth: 120,
    tabWidth: 2,
    useTabs: false,
 semi: true,
    singleQuote: true,
    trailingComma: "all",
    arrowParens: "avoid",
    importOrder: [
      "^(react/(.*)$)|^(react)",
      "<THIRD_PARTY_MODULES>",
      "^src/(.*)$",
      "^src/components/(.*)$",
      "^src/containers/(.*)$",
      "^[./]"
    ],
    importOrderSeparation: true,
    importOrderMergeDuplicateImports: true,
importOrderSortSpecifiers: true
  }
  