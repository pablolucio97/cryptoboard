export const generateRandomId = () => {
   const randomId = String(Number(Math.random() * 1000).toFixed(0))
   return randomId
}