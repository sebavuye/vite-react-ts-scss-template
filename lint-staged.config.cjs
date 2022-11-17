module.exports = {
  // Format MarkDown and JSON
  'src/**/*.(md|json)': filenames =>
    `yarn prettier --write ${filenames.join(' ')}`,

  // Type check TypeScript files
  'src/**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

  // Lint, format, TypeScript and JavaScript files
  'src/**/*.(ts|tsx|js|jsx)': filenames => [
    `yarn eslint ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
  ],

  // Lint, format css and scss files
  'src/**/*.(css|scss)': filenames => [
    `yarn prettier --write ${filenames.join(' ')}`,
    // `yarn stylelint ${filenames.join(' ')}`,
  ],
};
