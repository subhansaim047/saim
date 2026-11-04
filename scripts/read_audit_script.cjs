const fs = require('fs');
console.log(fs.readFileSync('scripts/deep_audit_all_links.cjs', 'utf8').slice(0, 1000));
