module.exports = (params) => {

return `/* visual-override.js */
.menu-item, .menu-item:visited {
  color: ${params.colorsMenu};
}

.page {
  background-color: ${params.colorsPage};
}

.social-icon {
  background-color: ${params.colorsPage};
}
`;

};
