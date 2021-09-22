export async function shiftStatus(data) {

    const response = await fetch('/getTable', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    return await response.json();

}

export async function getAllShifts() {
    const response = await fetch('http://localhost:3000/getTable');
    return await response.json();
}