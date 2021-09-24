export async function shiftStatus(data) {

    const response = await fetch('http://localhost:3000/shift', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({shift: data})
      })
    return await response.json();
      
}

export async function getAllShifts(data) {
    const response = await fetch('http://localhost:3000/getTable', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id: data})
      })
      return await response.json();
}