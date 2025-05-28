const fs = require('fs');
const path = require('path');

const packagePath = path.resolve(__dirname, 'package.json');
const pkg = require(packagePath);

const useGithubPages = process.env.USE_GITHUB_PAGES === 'true';
const homepage = useGithubPages ? 'https://xsenus.github.io/stardonate' : '/';

if (pkg.homepage !== homepage) {
  pkg.homepage = homepage;
  fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 2));
  console.log(`✅ homepage обновлён на "${homepage}"`);
}
