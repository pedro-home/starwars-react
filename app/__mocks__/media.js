const path = require('path');
export default { process: (_, filename) => `module.exports = '${JSON.stringify(path.basename(filename))}';` };
