export const makeMap = (str:string) => {
  const map = Object.create(null)
  for(const key of str.split(',')) {
    map[key] = 1
  }
  return (key:string) => key in map
}
