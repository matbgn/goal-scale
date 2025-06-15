# shellcheck disable=SC2148
dev:
  pnpm dev

clean:
  pnpm store prune && rm -rf node_modules/ pnpm-lock.yaml .nuxt/ generated/ .output/ clean/ && pnpm i

build:
  #!/bin/bash
  pnpm dlx nuxi cleanup && pnpm build

serve: build
  node .output/server/index.mjs