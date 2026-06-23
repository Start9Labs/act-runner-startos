# Updating

## gitea-runner

- **Determining the upstream version:** latest release at <https://gitea.com/gitea/runner/releases>, or the `gitea/runner` tags on Docker Hub. The current pin lives in `Dockerfile` (`FROM gitea/runner:<version>`).
- **Applying the bump:**
  1. `Dockerfile` — set the `FROM gitea/runner:<version>` tag.
  2. `startos/versions/current.ts` — set `version: '<version>:0'`, or bump only the `:N` suffix if just the packaging changed. Update the release notes.
