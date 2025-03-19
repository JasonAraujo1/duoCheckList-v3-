
export async function fetchApiUsers() {
   try {
      const response = await fetch("https://67be079f321b883e790ee0ed.mockapi.io/api/v1/users")
      const data = await response.json()
      return data
   } catch (error) {
      console.log("erro no fetch", error)
   }
}

export async function fetchApiRegister() {
   try {
      const response = await fetch("https://67d355c78bca322cc269d90d.mockapi.io/register/register")
      const data = await response.json()
      return data
   } catch (error) {
      console.log("erro no fetch", error)
   }
}
export async function fetchApiIdUser(idUser) {
   try {
      const response = await fetch(`https://67be079f321b883e790ee0ed.mockapi.io/api/v1/products?idUser=${idUser}`)
      const data = await response.json()
      return data
   } catch (error) {
      console.log("erro no fetch", error)
   }
}

