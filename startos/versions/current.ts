import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.8:0',
  releaseNotes: {
    en_US: `Initial Gitea Runner release for StartOS.`,
    es_ES: `Versión inicial de Gitea Runner para StartOS.`,
    de_DE: `Erste Gitea-Runner-Veröffentlichung für StartOS.`,
    pl_PL: `Pierwsze wydanie Gitea Runner dla StartOS.`,
    fr_FR: `Version initiale de Gitea Runner pour StartOS.`,
  },
  migrations: {
    // First release of the Gitea Runner package — nothing to migrate from.
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
