const fs = require('fs');
const path = require('path');

const sourceDirs = [
    'next-app/content/foundational-articles',
    'next-app/content/planning-concepts'
];
const destDir = 'test-article';

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir);
}

sourceDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
            if (path.extname(file) === '.md') {
                const srcPath = path.join(dir, file);
                const destPath = path.join(destDir, file.replace('.md', '.txt'));
                fs.copyFileSync(srcPath, destPath);
                console.log(`Copied ${file} to ${destPath}`);
            }
        });
    } else {
        console.log(`Directory not found: ${dir}`);
    }
});
