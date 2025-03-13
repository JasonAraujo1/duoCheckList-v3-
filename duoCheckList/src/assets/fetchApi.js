
export async function fetchApiData() {
   try {
      const response = await fetch("https://67d2321e90e0670699bca29e.mockapi.io/duoCheckList/data")
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

