// @flow
const readPkgUp = require('read-pkg-up');
const path = require('path');
const { getAtomVersion, getPrettierAtomConfig, addInfoNotification } = require('../atomInterface');

const getDepPath = (dep: string) => path.join(__dirname, '..', '..', 'node_modules', dep);

const getDebugInfo = () =>
  `
Atom version: ${getAtomVersion()}
prettier-atom-space-parenthesis version: ${readPkgUp.sync(__dirname).version}
prettier version: ${readPkgUp.sync(getDepPath('prettier-space-parenthesis')).version}
prettier-eslint version: ${readPkgUp.sync(getDepPath('prettier-eslint')).version}
prettier-atom-space-parenthesis configuration: ${JSON.stringify(getPrettierAtomConfig(), null, 2)}
`.trim();

const displayDebugInfo = () =>
  addInfoNotification('prettier-atom-space-parenthesis: details on current install', {
    detail: getDebugInfo(),
    dismissable: true,
  });

module.exports = displayDebugInfo;
