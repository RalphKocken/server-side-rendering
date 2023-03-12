import express from 'express'

const url = 'https://api.buurtcampus-oost.fdnd.nl/api/v1'

// Maak een nieuwe express app
const app = express()

// Stel in hoe we express gebruiken
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))

// Maak een route voor de index
app.get('/', (request, response) => {
  let stekjeUrl = url + '/stekjes'

  fetchJson(stekjeUrl).then((data) => {
    response.render('index', data)
  })
})

//Route voor dynamische stekjes//
app.get('/plantpage', (request, response) => {
  let slug = request.query.stekjeSlug || 'scindapsus'
  let stekjeUrl = url + '/stekje?slug=' + slug
  fetchJson(stekjeUrl).then((data) => {
    response.render('plantpage', data)
  })
})

// Stel het poortnummer in en start express
app.set('port', process.env.PORT || 4000)
app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})

/**
 * Wraps the fetch api and returns the response body parsed through json
 * @param {*} url the api endpoint to address
 * @returns the json response from the api endpoint
 */
async function fetchJson(url) {
  return await fetch(url)
    .then((response) => response.json())
    .catch((error) => error)
}













// const url = 'https://api.buurtcampus-oost.fdnd.nl/api/v1'
// // const data = await fetch (url).then((response) => response.json())

// // Importeer express uit de node_modules map
// import express, { request, response } from 'express'

// // Maak een nieuwe express app aan

// const app = express()

// // Stel ejs in als template engine en geef de 'views' map door
// app.set('view engine', 'ejs')
// app.set('views', './views')
// // Gebruik de map 'public' voor statische resources
// app.use(express.static('public'))

// // // Maak een route voor de index

// app.get('/', (request, response) => {
//   let stekjeUrl = url + '/stekjes'
//   fetchJson(stekjeUrl).then((data) => {
//     response.render('index', data)
//   })
// })



// // app.get('/', function (req, res) {
// //   // res.send('Hello World!')
// //   res.render('index', data)
// // })




// // app.get('/', function (req, res) {
// //   // res.send('Hello World!')
// //   res.render('index', data)
// // })

// // app.get('/plantpagetest', function (req, res){
// //     let slug = request.query.stekjeSlug || 'stekje'
// //     let stekjeurl = url + slug
// //     fetchJson (stekjeurl).then((data) => {
// //       response.render('plantpagetest', data)
// //     })
// // })

// // app.get('/plantpagetest', function (req, res) {
// //   // res.send('Hello World!')
// //   res.render('plantpagetest', data2)
// // })



// // Stel het poortnummer in waar express op gaat luisteren
// app.set('port', process.env.PORT || 8000)

// // Start express op, haal het ingestelde poortnummer op
// app.listen(app.get('port'), function () {
//   // Toon een bericht in de console en geef het poortnummer door
//   console.log(`Application started on http://localhost:${app.get('port')}`)
// })
