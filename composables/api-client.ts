type TPlainObject = Record<string, string | number | boolean | null | undefined | object>;

// FIXME: я правильно указал тип возвращаемых данных?
export async function useApiClient<T>(url: string, options?: {
  options?: TPlainObject,
  isServerRequest?: boolean
}) {
  const defaultParams = {
    baseURL: 'https://api.nuxt.com',
  };

  // TODO: добавить нотификации по ошибкам
  // TODO: добавить логику авторизации 
  // TODO: добавить логику перехода на определённые страницы в зависимости от авторизации/ошибок

  const mergedOptions = {
    ...defaultParams,
    ...options?.options,
  };

  if (options?.isServerRequest) return await useFetch<T>(url, mergedOptions);

  return await $fetch<T>(url, mergedOptions);
}