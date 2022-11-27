export function filterAndSortData(data: any, region: string, search: string) {
  let newData = (
    region === "All" ? data : data.filter((s: any) => s.region === region)
  )
    .sort((c1: any, c2: any) => (c1.name.common < c2.name.common ? -1 : 1))
    .filter((c: any) => c.name.common.toLowerCase().startsWith(search));
  return newData;
}
