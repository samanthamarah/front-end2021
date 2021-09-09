$(function () {

    init();
})

function init() {

    $('#btnLoadMovies').on('click', function () {
        
        const url = 'movies.json';

        $.getJSON(url, function (data) {

            renderMovieData(data)
        })
    });
}

function renderMovieData(movieListing) {

    console.log(movieListing);

    htmlString = [];
    htmlString.push("<ol>");
    
    for (const movie of movieListing) {

        const { title, year, director, id, cast, ...rest } = movie;

        let castMembers = cast.split(',');

        console.log(castMembers);

        htmlString.push(`<li>${title} : ${year}`);

        htmlString.push("<ol>")
        for (const castMember of castMembers) {
            htmlString.push(`<li>${castMember}</li>`);
        }

        htmlString.push("</ol>")

        htmlString.push("</li>")

    }
    htmlString.push("</ol>");

    populateMoviePanel(htmlString.join(' '))
}

function populateMoviePanel(content) {

    $('#messagePanel').html(content)
}