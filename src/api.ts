export function createQueryParams(requestParams: Record<string, string>) {
  let queryParam = "";
  const params = new URLSearchParams(requestParams);
  // Check if params are empty
  if (params.toString() !== "") {
    queryParam = `?${params.toString()}`;
  }
  return queryParam;
}
