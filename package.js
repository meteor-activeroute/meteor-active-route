Package.describe({
  git: 'https://github.com/zimme/meteor-active-route.git',
  name: 'zimme:active-route',
  summary: 'Active route helpers',
  version: '2.4.0-alpha.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');

  api.use([
    'check',
    'coffeescript',
    'ecmascript',
    'reactive-dict',
    'underscore'
  ]);

  api.use([
    'kadira:flow-router@2.0.0',
    'meteorhacks:flow-router@1.8.0',
    'iron:router@1.0.0',
    'templating'
  ], {weak: true});

  api.export('ActiveRoute');

  api.addFiles('lib/activeroute.coffee');

  api.addFiles('client/helpers.coffee', 'client');
});

Package.onTest(function(api) {
  api.versionsFrom('1.2');

  api.use([
    'check',
    'ecmascript',
    'reactive-dict',
    'templating',
    'underscore'
  ]);

  api.use([
    'practicalmeteor:mocha@2.1.0_5',
    'practicalmeteor:chai@2.1.0_1',
    'zimme:active-route'
  ]);

  api.addFiles([
    'tests/client/activeroute.js',
    'tests/client/helpers.js'
  ], 'client');

  api.addFiles('tests/server/activeroute.js', 'server');
});
