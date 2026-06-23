import { setupManifest } from '@start9labs/start-sdk'
import { dependencyDescription, long, short } from './i18n'

export const manifest = setupManifest({
  id: 'act-runner',
  title: 'Gitea Actions Runner',
  license: 'MIT',
  packageRepo: 'https://github.com/Start9Labs/act-runner-startos',
  upstreamRepo: 'https://gitea.com/gitea/runner',
  marketingUrl: 'https://gitea.com/',
  donationUrl: null,
  description: { short, long },
  volumes: ['main'],
  images: {
    main: {
      source: { dockerBuild: { workdir: '.' } },
      arch: ['x86_64', 'aarch64'],
    },
  },
  dependencies: {
    gitea: {
      description: dependencyDescription,
      optional: false,
      metadata: {
        title: 'Gitea',
        icon: 'https://raw.githubusercontent.com/Start9Labs/gitea-startos/master/icon.svg',
      },
    },
  },
  // Run a rootless Podman engine inside the service to sandbox each CI job.
  // SDK 1.5.3's nestedRuntime is the combined flag that SDK 2.0 later split
  // into userspaceFilesystems (/dev/fuse) + virtualNetworking (/dev/net/tun,
  // CAP_NET_ADMIN). See start-docs recipe-nested-oci-runtime.
  nestedRuntime: true,
})
