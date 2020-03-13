
function setup() 
{
  loadMD ("https://raw.githubusercontent.com/marcoheleno/test1/master/README.md");
}

function draw() 
{
}

function loadMD (url) 
{
  let target = document.getElementById('placeHolder');
  let converter = new showdown.Converter();

  fetch(url)

    .then(function (response) 
    {
      response.text().then(function (text) 
      {
        let md = text;
        let html = converter.makeHtml(md);
        //console.log (md);
        target.innerHTML = html;
      })
    })
    
    .catch(function (err) 
    {
      console.log("Something went wrong!", err);
    });
}