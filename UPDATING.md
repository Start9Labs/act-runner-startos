# Updating

## act_runner

- **Determining the upstream version:** latest release at <https://gitea.com/gitea/act_runner/releases>, or the `gitea/act_runner` tags on Docker Hub. The current pin lives in `Dockerfile` (`FROM gitea/act_runner:<version>`).
- **Applying the bump:**
  1. `Dockerfile` — set the `FROM gitea/act_runner:<version>` tag.
  2. `startos/versions/current.ts` — set `version: '<version>:0'`, or bump only the `:N` suffix if just the packaging changed. Update the release notes.
