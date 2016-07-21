const names = [ "Andy Mention",
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

const printNames = (names) => {
  names.map((name) => {
    return (
      $('.contact-list').append(
        "<div class='contact'>" +
          "<p class='name'>" +
            name +
          "</p>" +
        "</div>"
      )
    );
  })
};

// names.forEach(function(name) {
//     return (
//       $('.contact-list').append(
//         "<div class='contact'>" +
//           "<p class='name'>" +
//             name +
//           "</p>" +
//         "</div>"
//       )
//     );
//   })
// };

const compare = (a, b) => {
  const splitA = a.split(" ");
  const splitB = b.split(" ");
  const lastA = splitA.pop();
  const lastB = splitB.pop();

  if (lastA < lastB) return -1;
  if (lastA > lastB) return 1;
  return 0;
};

const search = (searchName) => {
  const filtered = names.filter((name) => {
    return name.toLowerCase().includes(searchName.toLowerCase());
  });
  return filtered
};

$(document).ready(() => {
  printNames(names);

  $('#sort-first').click(() => {
    const sorted = names.slice().sort();
    $('.contact-list').empty();
    printNames(sorted);
  });

  $('#sort-reverse').click(() => {
    const reverseSorted = names.slice().sort().reverse();
    $('.contact-list').empty();
    printNames(reverseSorted);
  });

  $('#sort-last').click(() => {
    const lastSorted = names.slice().sort(compare);
    $('.contact-list').empty();
    printNames(lastSorted);
  });

  $('#remove-sort').click(() => {
    $('.contact-list').empty();
    printNames(names);
  });

  $('#search').keyup((e) => {
    const filtered = search(e.target.value);
    $('.contact-list').empty();
    printNames(filtered);
  });
});
