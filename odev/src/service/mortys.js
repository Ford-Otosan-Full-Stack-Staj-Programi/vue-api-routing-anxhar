import { baseRequest } from "./baseRequest";

export const getAllMortys = async () => {
  const mortys = await baseRequest('/character/').then(response => response.data)
    .then(response => response.results)
  return mortys
}

export const getMorty = async (id) => {
    const mortyChar = await baseRequest(`/character/${id}`).then(response => response.data)
    //.then(response => response.map(response => response.name))
  return mortyChar
}
