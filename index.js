var names = [ "Andy Mention",
              "Emily Davis",
              "Eric Fransen",
              "Jessica Goulding",
              "Jonmichael Chambers",
              "Marc Garreau",
              "Tan Doan",
              "Alan Smith",
              "Allison Larson",
              "Andrew Watkins",
              "Chad Brading",
              "Corey Davis",
              "Gustavo Villagrana",
              "Hilary Denton",
              "Horacio Chavez",
              "Tim Proctor",
              "Will Faurot" ]

function printNames(names){
  var arrayLength = names.length;

  for (var i = 0; i < arrayLength; i++) {
    var currentName = names[i];
    var div = document.createElement("div");
    div.setAttribute('class', 'contact');
    div.innerHTML = "<p class='name'>" + currentName + "</p>";
    $('.contact-list').append(div);
  }
};

// okay this works, but I DON'T understand it . . . 
function compare(a, b) {
  var splitA = a.split(" ");
  var splitB = b.split(" ");
  var lastA = splitA[splitA.length - 1];
  var lastB = splitB[splitB.length - 1];

  if (lastA < lastB) return -1;
  if (lastA > lastB) return 1;
  return 0;
};


$(document).ready(function(){
  printNames(names);

  $('#sort-first').on('click', function() {
    var sorted = names.slice().sort();
    $('.contact-list').empty();
    printNames(sorted);
  });

  $('#sort-reverse').on('click', function() {
    var reverseSorted = names.slice().sort().reverse();
    $('.contact-list').empty();
    printNames(reverseSorted);
  });

  $('#sort-last').on('click', function() {
    var lastSorted = names.slice().sort(compare);
    $('.contact-list').empty();
    printNames(lastSorted);
  });

  $('#remove-sort').on('click', function() {
    $('.contact-list').empty();
    printNames(names);
  });
});
