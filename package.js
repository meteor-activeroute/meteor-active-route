Package.describe({
  git: 'https://github.com/zimme/meteor-active-route.git',
  name: 'zimme:active-route',
  summary: 'Active route helpers',
  version: '2.0.5'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'check',
    'coffeescript',
    'reactive-dict',
    'underscore'
  ]);

  api.use([
    'meteorhacks:flow-router@1.8.0',
    'iron:router@1.0.0',
    'templating'
  ], ['client', 'server'], {weak: true});

  api.export('ActiveRoute');

  api.addFiles('lib/activeroute.coffee');
  api.addFiles('client/helpers.coffee', 'client');
});

Package.onTest(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'coffeescript',
    'mike:mocha-package@0.5.7',
    'practicalmeteor:chai@1.9.2_3',
    'zimme:active-route'
  ]);

  api.addFiles('tests/lib/activeroute.coffee');
  api.addFiles('tests/client/helpers.coffee', 'client');
});
