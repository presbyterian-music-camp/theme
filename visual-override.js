module.exports = (params) => {

return `/* visual-override.js */
.menu-item, .menu-item:visited {
  color: ${params.colorsMenu};
}
`;

};
