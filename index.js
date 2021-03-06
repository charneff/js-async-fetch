const baseURL = "https://www.googleapis.com/books/v1/volumes?q="
const bookList = document.getElementById('list')


document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.getElementById('submit')
  //https://www.googleapis.com/books/v1/volumes?q=search+term+here
  
  submitButton.addEventListener('click', handleSubmit)
})

function handleSubmit(event){
  bookList.innerHTML = ""
  const searchInput = document.getElementById('search-input')
  let searchTerm = searchInput.value.split(" ").join("+")
  console.log("Submit Received! Search term is: ", searchTerm)
  if (searchTerm !== ""){
    makeAPICall(searchTerm)
  }
}

function makeAPICall(searchTerm){
  //write code here
  console.log("About to make the API call!")
  fetch(baseURL + searchTerm)
    .then(resp => resp.json()) //common mistake to miss return --> arrow vs function
    .then(result => addBooksToDom(result))
    .catch((error) => window.alert(`${error.message}`, error))
}

function addBooksToDom(response){
  console.log(response)
  let items = response.items
  let titles = items.map(function(b){
    return b.volumeInfo.title
  })
  titles.forEach(function(title){
    bookList.innerHTML += `<li>${title}</li>`
  })
}
