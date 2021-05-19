const bundles = require('../compile/bundles.config.extensions.json');
const extensionsToPublish = bundles.filter(bundle => bundle.options?.npm).map(bundle => ({"extension": bundle.name }));
console.log(JSON.stringify(extensionsToPublish));
