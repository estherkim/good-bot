const bundles = require('../compile/bundles.config.extensions.json');
const extensionsToPublish = bundles.filter(bundle => bundle.options?.npm);
console.log(extensionsToPublish);
