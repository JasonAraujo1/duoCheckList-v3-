import React from 'react'

export async function fetchApiData() {
 try{
    const response = await fetch("https://67d2321e90e0670699bca29e.mockapi.io/duoCheckList/data")
    const data = await response.json()
    
    console.log("dados do fetchapidata:", data)

    return data
 }catch(error){
    console.log("erro no fetch", error)
 }
}
