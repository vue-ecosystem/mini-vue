export const remove = <T>(arr:T[], el:T) => {
  const index = arr.indexOf(el)
  if(index > -1) arr.splice(index, 1)
}
