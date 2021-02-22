const fs = require('fs');
const data = require('./data.json');


exports.show = function (req, res) {
    const { id } = req.params

    const foundAnime = data.animes.find(function (anime) {
        return id == anime.id
    })

    if (!foundAnime) return res.send("Anime not found")

    const anime = {
        ...foundAnime,
        name: "",
        date: "",
        type: "",
        age: ""
    }

    return res.render("anime/show", {anime})

}


exports.post = function(req, res) {
    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == "") {
            return res.send("Please, fil all fields")
        }
    }

    let {url, name, date, type, age, F_comentario} = req.body

    date = Date.parse(date)
    const id = Number(data.animes.length + 1)

    data.animes.push({
        id,
        url,
        name,
        date,
        type,
        age,
        F_comentario
    })
    
    fs.writeFile("data.json", JSON.stringify(data, null, 4), function(err) {
        if (err) return res.send("Erro in write file")

        return res.redirect('/anime')
    })

}