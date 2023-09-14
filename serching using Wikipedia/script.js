const queryInputField = document.querySelector("#input--query")
const search = document.querySelector(".button--search")
const result = document.querySelector(".result")
const clear = "''"

// window.onload = function() {
//  queryInputField.focus();
// };

function showResult(data) {
  result.innerHTML = (clear)
	  for (let i = 0; i < 10; i++) {
      let a = document.createElement('a')
      a.innerHTML = '<a href="https://en.wikipedia.org/wiki?curid='+ data.query.search[i].pageid + '">' + '<h1>' + data.query.search[i].title + '</h1>' + '<p>' + data.query.search[i].snippet + ' ...' + '</p>' + '<button class="read-more">Goto wiki page</button>' + '</a><br>'
      result.appendChild(a)
    }
}

function searchWiki (event) {
  event.preventDefault()
  let query = queryInputField.value
  let endpoint = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch="+ query + "&srprop=snippet&origin=*";
    
  fetch(endpoint)
    .then(blob => blob.json())
    .then(data => {
      console.log(data)
      showResult(data)
      })  
    document.getElementById("input--query").blur();
}
   
search.addEventListener("click", searchWiki);

queryInputField.onfocus = function() {
  queryInputField.setAttribute('placeholder', '');
};
queryInputField.onblur = function() {
  queryInputField.setAttribute('placeholder', 'Search Wikipedia');
};
