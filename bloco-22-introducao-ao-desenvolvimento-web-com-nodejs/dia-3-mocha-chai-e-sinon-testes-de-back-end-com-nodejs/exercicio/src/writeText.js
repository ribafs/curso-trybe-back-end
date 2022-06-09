const fs = require('fs');

const writeText = (file, content) => {
  fs.writeFileSync(file, content)
    return 'ok';
};

module.exports = writeText;