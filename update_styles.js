const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');
code = code.replace(/ font-poppins/g, '');
code = code.replace(
  'className="bg-[#1455d3] text-white rounded-full px-9 py-3.5 font-bold text-[15px] hover:bg-[#0a1d56] transition-all duration-300 shadow-md"', 
  'className="bg-gradient-to-r from-[#1455d3] to-[#2563eb] text-white rounded-full px-9 py-3.5 font-bold text-[15px] hover:shadow-lg hover:opacity-90 transition-all duration-300"'
);
code = code.replace('Learn More', 'Learn-More');
fs.writeFileSync('src/app/page.tsx', code);
console.log('Success');
