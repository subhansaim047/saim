const fs = require('fs');
const files = fs.readdirSync('src/components').filter(f => f.endsWith('.tsx')).map(f => 'src/components/' + f);
files.forEach(file => {
    const buf = fs.readFileSync(file);
    try {
        new TextDecoder('utf-8', {fatal: true}).decode(buf);
    } catch (e) {
        console.log('Corrupted:', file);
    }
});
