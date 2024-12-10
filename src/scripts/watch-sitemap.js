// src/scripts/watch-sitemap.js
import chokidar from 'chokidar';
import { exec } from 'child_process';

// Watch for changes in the blog content
const watcher = chokidar.watch(['app/api/blogs/**/*.jsx', 'pages/api/articles.js']);

watcher.on('change', (path) => {
    console.log(`File ${path} has been changed`);
    exec('npm run generate-sitemap', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error}`);
            return;
        }
        console.log(stdout);
    });
});

console.log('Watching for blog changes...');