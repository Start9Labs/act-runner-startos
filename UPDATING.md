# Updating

## gitea-runner

> Upstream was renamed from `act_runner` to `gitea-runner` in 1.0.0 — the repository is now `gitea/runner`, the image is `gitea/runner`, and the binary inside it is `gitea-runner`. CLI subcommands, config format, and the `.runner` registration file are unchanged.

- **Determining the upstream version:** latest release at <https://gitea.com/gitea/runner/releases>, or the `gitea/runner` tags on Docker Hub. The current pin lives in `Dockerfile` (`FROM gitea/runner:<version>`).
- **Applying the bump:**
  1. `Dockerfile` — set the `FROM gitea/runner:<version>` tag.
  2. `startos/versions/current.ts` — set `version: '<version>:0'`, or bump only the `:N` suffix if just the packaging changed. Update the release notes.
