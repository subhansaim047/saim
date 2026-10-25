const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'components', 'FoodSafetyTemplatesPage.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Fix closing </Link> for view details
content = content.replace(
  '<Link href={`/food-safety-templates/${template.slug}`}\n                          className="w-full py-2 px-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-[11px] font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"\n                        >\n                          <span>View Details</span>\n                          <ExternalLink className="w-3 h-3 text-gray-500" />\n                        </a>',
  '<Link href={`/food-safety-templates/${template.slug}`}\n                          className="w-full py-2 px-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-[11px] font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"\n                        >\n                          <span>View Details</span>\n                          <ExternalLink className="w-3 h-3 text-gray-500" />\n                        </Link>'
);

// Make the image container link to the dedicated page
content = content.replace(
  '<div className={`p-4 aspect-[4/3] flex items-center justify-center relative overflow-hidden transition-transform group-hover:scale-[1.02] ${getCardBg(template.type)}`}>',
  '<Link href={`/food-safety-templates/${template.slug}`} className={`p-4 aspect-[4/3] flex items-center justify-center relative overflow-hidden transition-transform group-hover:scale-[1.02] ${getCardBg(template.type)}`}>'
);

content = content.replace(
  '</span>\n                  </div>\n\n                  {/* Card Content & Title */}',
  '</span>\n                  </Link>\n\n                  {/* Card Content & Title */}'
);

// Also make title a link
content = content.replace(
  '<h4 className="font-bold text-xs sm:text-sm text-[#1D1D1F] line-clamp-2 leading-snug group-hover:text-amber-800 transition-colors">\n                      {template.title}\n                    </h4>',
  '<Link href={`/food-safety-templates/${template.slug}`} className="hover:underline">\n                      <h4 className="font-bold text-xs sm:text-sm text-[#1D1D1F] line-clamp-2 leading-snug group-hover:text-amber-800 transition-colors">\n                        {template.title}\n                      </h4>\n                    </Link>'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed tags and added card links.');
