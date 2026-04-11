/** Via npx so hooks work when `pnpm` is not on PATH (e.g. GitHub Desktop + Homebrew Node). Match package.json#packageManager. */
export const runPnpm = 'npx --yes pnpm@10.30.3';

export default {
  '!(docs/**/*)*.{ts,js,html,md,mts}': [
    'eslint --cache --cache-strategy content --fix',
    // don't cache prettier yet, since we use `prettier-plugin-jsdoc`,
    // and prettier doesn't invalidate cache on plugin updates"
    // https://prettier.io/docs/en/cli.html#--cache
    'prettier --write',
  ],
  '.cspell/*.txt': ['tsx scripts/fixCSpell.ts'],
  '**/*.jison': [`${runPnpm} -w run lint:jison`],
};
