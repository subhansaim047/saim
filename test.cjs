const fs = require('fs');
const menuDataTs = fs.readFileSync('anzaar-menu-temp.ts', 'utf16le');
let str = menuDataTs.replace('export const menuData = ', '');
try {
  let menuData = eval(str);
  console.log(menuData.length);
} catch(e) {
  console.log('Error evaluating:', e);
}
