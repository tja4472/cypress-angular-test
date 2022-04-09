import { startAngularDevServer } from '@jscutlery/cypress-angular';

module.exports = (on, config) => {
  on('dev-server:start', (options) =>
    startAngularDevServer({
      options,
      tsConfig: 'tsconfig.cypress.json',
      target: 'my-project:build',
    })
  );
  return config;
};
