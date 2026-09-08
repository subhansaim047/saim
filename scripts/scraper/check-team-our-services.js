const fs = require('fs');
const cp = require('child_process');
const cheerio = require('cheerio');

const html = cp.execSync('git show 5cad156:public/demos/dilicious-pizza/our-services.html').toString();
const $ = cheerio.load(html);

const video = $('.pbmit-lightbox-video');
const section = video.closest('.elementor-top-section');
console.log('Team positions in video section:', section.find('.pbminfotech-box-team-position').length);
