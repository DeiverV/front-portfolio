export const env = {
  GITHUB: {
    BASE_URL: import.meta.env.VITE_GITHUB_API_BASE_URL,
    TOKEN: import.meta.env.VITE_GITHUB_API_TOKEN,
  },
  FRANKFURTER: {
    BASE_URL: import.meta.env.VITE_FRANKFURTER_API_BASE_URL,
  },
  CATAAS: {
    BASE_URL: import.meta.env.VITE_CATAAS_API_BASE_URL,
  },
}
