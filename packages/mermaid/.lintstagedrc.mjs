import baseConfig, { runPnpm } from '../../.lintstagedrc.mjs';

export default {
  ...baseConfig,
  'src/docs/**': [`${runPnpm} --filter mermaid run docs:build --git`],
  'src/docs.mts': [`${runPnpm} --filter mermaid run docs:build --git`],
  'src/(defaultConfig|config|mermaidAPI).ts': [`${runPnpm} --filter mermaid run docs:build --git`],
  'src/schemas/config.schema.yaml': [`${runPnpm} --filter mermaid run types:build-config --git`],
};
