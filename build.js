const { execSync } = require('child_process')

const run = (cmd) => execSync(cmd, { stdio: 'inherit' });

run('rm -rf dist/');

run('yarn tsc');

for (const file of ['package.json', 'yarn.lock', 'README.md']) {
  run(`cp ${file} dist/`);
}

console.log('✔️  Successfully built library to dist folder.');
