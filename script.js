/*const data = {
    "firstName": "name",
    "lastName": "lastname",
    "email": "a.b@gmail.com"
};*/


window.onload = function () {
    fetch('http://167.172.175.168/a752ad2b-ab47-4987-84a7-a53500d35c3e/clients', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success', data);
            let table = document.getElementById('table')

            for (let i = 0; i < data.length; i++) {

                let tr = document.createElement('tr')

                let td1 = document.createElement('td')
                let td2 = document.createElement('td')
                let td3 = document.createElement('td')
                td1.innerText = data[i].firstName
                td2.innerText = data[i].lastName
                td3.innerText = data[i].email
                td1.className = 'p-2'
                td2.className = 'p-2'
                td3.className = 'p-2'
                tr.appendChild(td1)
                tr.appendChild(td2)
                tr.appendChild(td3)

                tr.className = ''

                table.appendChild(tr)
            }
        })
        .catch((error) => {
            console.error('Error:', error);


        });
}