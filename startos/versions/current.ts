import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.6.1:0',
  releaseNotes: {
    en_US: `Initial Gitea Actions Runner (act_runner) release for StartOS.`,
    es_ES: `Versión inicial del ejecutor de Gitea Actions (act_runner) para StartOS.`,
    de_DE: `Erste Gitea-Actions-Runner-Veröffentlichung (act_runner) für StartOS.`,
    pl_PL: `Pierwsze wydanie runnera Gitea Actions (act_runner) dla StartOS.`,
    fr_FR: `Version initiale de l'exécuteur Gitea Actions (act_runner) pour StartOS.`,
  },
  migrations: {
    // First release of the act_runner package — nothing to migrate from.
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
