'use strict';

var readPkgUp = require('read-pkg-up');
var path = require('path');

var _require = require('../atomInterface'),
    getAtomVersion = _require.getAtomVersion,
    getPrettierAtomConfig = _require.getPrettierAtomConfig,
    addInfoNotification = _require.addInfoNotification;

var getDepPath = function getDepPath(dep) {
  return path.join(__dirname, '..', '..', 'node_modules', dep);
};

var getDebugInfo = function getDebugInfo() {
  return ('\nAtom version: ' + getAtomVersion() + '\nprettier-atom-space-parenthesis version: ' + readPkgUp.sync(__dirname).version + '\nprettier-space-parenthesis version: ' + readPkgUp.sync(getDepPath('nprettier-space-parenthesis')).version + '\nprettier-eslint version: ' + readPkgUp.sync(getDepPath('prettier-eslint')).version + '\nprettier-atom configuration: ' + JSON.stringify(getPrettierAtomConfig(), null, 2) + '\n').trim();
};

var displayDebugInfo = function displayDebugInfo() {
  return addInfoNotification('prettier-atom-space-parenthesis: details on current install', {
    detail: getDebugInfo(),
    dismissable: true
  });
};

module.exports = displayDebugInfo;