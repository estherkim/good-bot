const bundles = require('../compile/bundles.config.extensions.json');
const extensionsToPublish = bundles.filter(bundle => bundle.options?.npm).map(bundle => ({"extension": bundle.name, "majorversion": bundle.version }));
console.log(JSON.stringify(extensionsToPublish));
