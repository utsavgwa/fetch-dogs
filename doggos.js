// DOG_URL is screaming case, declares that this is a constant that will never change
// "https://dog.ceo/api/breeds/image/random";--> its a font of data (API to fetch data from)

const DOG_URL = "https://dog.ceo/api/breeds/image/random";


const doggos = document.querySelector(".doggos");  //grabed the doggo element on the page

function addNewDoggo() {
  const promise = fetch(DOG_URL);                  //fetch is a way to do AJAX. Fetch is gives the user back something called a promise
                                                  // you get jS object(which is JSON) from an API
  promise
    .then(function(response) {                    // called .then on promise, when promise completes/resolves function runs up
      const processingPromise = response.json();  // response comes from url, like a blob of text
      return processingPromise;                   // here it is another promise returned. this is kmown as promise chaining
    })
    .then(function(processedResponse) {
      const img = document.createElement("img");
      img.src = processedResponse.message;       // here you get image URL.
      img.alt = "Cute doggo";                    // this is image alt tag for description.
      doggos.appendChild(img);
    });
}

document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);