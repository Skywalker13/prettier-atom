// @flow
const { getDebugInfo } = require('./helpers');

const displayDebugInfo = () => {
  const info = getDebugInfo();
  const details = [
    `Atom version: ${info.atomVersion}`,
    `prettier-atom-space-parenthesis version: ${info.prettierAtomVersion}`,
    `prettier version: ${info.prettierVersion}`,
    `prettier-eslint version: ${info.prettierESLintVersion}`,
    `prettier-atom-space-parenthesis configuration: ${JSON.stringify(info.prettierAtomConfig, null, 2)}`,
  ].join('\n');
  atom.notifications.addInfo('prettier-atom-space-parenthesis: details on current install', {
    detail: details,
    dismissable: true,
  });
};

module.exports = displayDebugInfo;
