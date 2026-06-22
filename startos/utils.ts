import { sdk } from './sdk'

// ---- Resource gate ----
// A CI runner only makes sense on a box with real headroom: every job runs a
// full build (compilers, image pulls, nested containers). These are the floor
// below which we refuse to run; enforced in main.ts via node:os.
export const MIN_MEMORY_BYTES = 2 * 1024 ** 3 // 2 GiB
export const MIN_CPU_CORES = 2

// ---- Local forge ----
// When the runner is pointed at the Gitea on this same device, it's reachable
// on the internal StartOS network here (see gitea-startos interfaces/utils).
export const LOCAL_FORGE_URL = 'http://gitea.startos:3000'

// ---- Paths (inside the service container) ----
export const DATA_DIR = '/data'

export const mount = sdk.Mounts.of().mountVolume({
  volumeId: 'main',
  subpath: null,
  mountpoint: DATA_DIR,
  readonly: false,
})
