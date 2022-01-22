async function urlShortening() {
    var user_input = document.getElementById("user_input").value;

    err = "Error.Enter a valid URL";

    await fetch(`https://api.shrtco.de/v2/shorten?url=${user_input}`)
        .then(response => response.json())
        .then(data => {
            if (data.ok == true) {
                document.querySelector(".short_1").innerHTML = data.result.short_link;
                document.querySelector(".short_2").innerHTML = data.result.short_link2;
                document.querySelector(".short_3").innerHTML = data.result.short_link3;
                console.log("Ok!");
            }
            else {
                document.querySelector(".short_1").innerHTML = err;
                document.querySelector(".short_2").innerHTML = err;
                document.querySelector(".short_3").innerHTML = err;
                console.log(err);
            }
        }
    )
}
