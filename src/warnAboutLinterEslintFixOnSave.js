// @flow
const { shouldUseEslint, isLinterEslintAutofixEnabled } = require('./helpers');

const message =
  "prettier-atom-space-parenthesis: linter-eslint's `Fix on Save` feature is currently enabled. " +
  'We recommend disabling this feature when using the ESlint integration from prettier-atom-space-parenthesis';

const options = { dismissable: true };

// $FlowFixMe
const displayWarning = () => atom.notifications.addWarning(message, options);

const warnAboutLinterEslintFixOnSave = () =>
  shouldUseEslint() && isLinterEslintAutofixEnabled() && displayWarning();

module.exports = warnAboutLinterEslintFixOnSave;
