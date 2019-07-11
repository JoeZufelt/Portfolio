var projectArray = [
{title:"Clicky Game", imgSrc:"assets/images/clicky_game.JPG", imgAlt:"Clicky Game Main Page", codeLink:"https://github.com/JoeZufelt/to-shreds-you-say", demoLive:"https://joezufelt.github.io/to-shreds-you-say/"},
{title:"Trivia Game", imgSrc:"assets/images/trivia_game.JPG", imgAlt:"Trivia Game Main Page", codeLink:"https://github.com/JoeZufelt/TriviaGame", demoLive:"https://joezufelt.github.io/TriviaGame/"},
{title:"Gif Me Some Video Games", imgSrc:"assets/images/gif.JPG", imgAlt:"Gif Main Page", codeLink:"https://github.com/JoeZufelt/GifMeSomeVG", demoLive:"https://joezufelt.github.io/GifMeSomeVG/"},
{title:"Bookmarks", imgSrc:"assets/images/bookmarks.JPG", imgAlt:"Bookmarks Main Page", codeLink:"https://github.com/JoeZufelt/Bookmarks", demoLive:"https://joezufelt.github.io/Bookmarks/"}
];
                     

$(document).ready(function(){
function projectCards(array)
{
for(var i=0;i<array.length;i++)
{
 var newCol = $("<div>").addClass("col-sm-6 cardCol");
 var newCard = $("<div>").addClass("card card-show middle");
 var newFront = $("<div>").addClass("front");
 var newFrontImage = $("<img>").attr("src",array[i].imgSrc).attr("alt",array[i].imgAlt).addClass("img-fluid projectImg");
 $(newFront).append(newFrontImage);
 var newBack = $("<div>").addClass("back");
 var newBackContent = $("<div>").addClass("back-content");
 var contentTitle = $("<h3>").text(array[i].title);
 var demoImg = $("<i>").addClass("fas fa-external-link-alt");
 var demoButton = $("<a>").addClass("btn btn-primary backBtn").attr("href",array[i].demoLive).attr("target","_blank").text("Demo").append(demoImg);
 var gitImg = $("<i>").addClass("fab fa-github");
 var codeButton = $("<a>").addClass("btn btn-primary backBtn").attr("href",array[i].codeLink).attr("target","_blank").text("Code").append(gitImg);
 $(newBackContent).append(contentTitle).append(demoButton).append(codeButton);
 $(newBack).append(newBackContent);
 $(newCard).append(newFront).append(newBack);
 $(newCol).append(newCard);
 $("#mtg").append(newCol);

}

}

$(".btn2").on("click", function () {
    $(".btn2").toggleClass("btnc");
    $(".side-bar").toggleClass("side");
  });
  

projectCards(projectArray);
});