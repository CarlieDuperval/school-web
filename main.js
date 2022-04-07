async function handleNameInput(event){
    const name = event.target.value;
    alert ("The school name is " + name)
}

async function handleSubmit(event) {
    event.preventDefault()
    const nameElement = document.getElementById('name')
    if(!nameElement.value){
        nameElement.classList.add('is-invalid')
    }

const addressInput = document.getElementById('address')
if(!addressInput.value){
    addressInput.classList.add('is-invalid')
}

const locationInput = document.getElementById('location')
if(!locationInput.value){
    locationInput.classList.add('is-invalid')
}

const ratingInput = document.getElementById('rating')
if(!ratingInput.value){
    document.getElementById('rating').classList.add('is-invalid')
}

const typeInput = document.getElementById('type')
if(!typeInput.value){
    typeInput.classList.add('is-invalid')
}

try {
    const data = await fetch("http://localhost:5551/schools",
   {
       method: "POST",
       body:JSON.stringify({
           name: nameElement.value,
           address: addressInput.value,
           location: locationInput.value,
           type: typeInput.value,
           rating: ratingInput.value,
       }),

       headers: {
           'Content-Type': 'application/json'
       }

   })
   const school = await data.json()

   alert (`Created Succesfully ${school}`)
} catch (error) {
    
}
}