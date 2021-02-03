// tipos de dados
// string = Number 01
// Object {}
// Boolean true or false
// Array []

// create map
const map = L.map("mapid").setView([-27.222633, -49.6455874], 15);

// create and add layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remove icon
  marker && map.removeLayer(marker);

  //add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

//add photo camp
function addPhotoField() {

  // take the container of photos #images
  const container = document.querySelector("#images")

  // take the container for duplicate .new-image
  const fieldsContainer = document.querySelectorAll(".new-upload")

  // accomplish the clone of last image added
  const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

  // make sure the field is empty, if yes, no add to the container of images
   const input = newFieldContainer.children[0]

   if(input.value == "") {
       return
   }

  //clean the field of add to container of images
  input.value = ""

  // add the clone to container of #images
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll(".new-upload")

    // clean the field
    if(fieldsContainer.length <= 1) {
        span.parentNode.children[0].value = ""
        return
    }

    // delete the field
    span.parentNode.remove()
}

// select yes or no
function toggleSelect(event) {
    // remove the class .active (of buttons)
    document.querySelectorAll(".button-select button")
    .forEach(button => button.classList.remove("active")) //arrow function does not need function term and parentheses

    // put the class .active in clicked button
    const button = event.currentTarget
    button.classList.add("active")

    // update my hidden input with the selected value
    const input = document.querySelector('[name="open_on_weekends"]')

    // check wether yes or no
    input.value = button.dataset.value
    console.log(input)
}

