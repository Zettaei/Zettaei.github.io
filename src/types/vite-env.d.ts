interface ImportMetaEnv {
  readonly VITE_MAL_CLIENT_ID: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}