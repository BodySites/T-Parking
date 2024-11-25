const envs = process.env;

export default {
  baseApiUrl: envs.NEXT_PUBLIC_BACKEND_URL || '',
};
