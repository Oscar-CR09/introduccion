const httpsCliente = fetch('https://jsonplaceholder.typicode.com/users');
/*
httpsCliente.then(response =>{
    //console.log(response)
    response.json().then(data => {
        console.log(data)
    })
})
*/ 
httpsCliente
.then(response =>response.json())
.then(data => console.log(data));

console.log('hola que tal');