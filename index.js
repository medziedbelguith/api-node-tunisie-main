const express=require("express")
const app=express()
const bodyParser=require('body-parser')
const mongoose=require("mongoose")

const { routerUser } = require("./Routes/userRoute")
const { routerArticle } = require("./Routes/articleRoute")
const { routerClient } = require("./Routes/clientRoute")
const { routerFournisseur } = require("./Routes/fournisseurRoute")

const cors=require('cors')

const swaggerJsDoc = require("swagger-jsdoc");
/* const swaggerUi = require("swagger-ui-express");

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Bon Gest",
			version: "1.0.0",
			description: "A simple Express Library API",
		},
		servers: [
			{
				url: "https://bongest.herokuapp.com",
			},
		],
	},
	apis: [`${__dirname}/Routes/*.js`],
};

const swaggerDocs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
 */

/*mongoose.connect("mongodb://localhost/shopBD",{useUnifiedTopology: true,useNewUrlParser: true})
.then(console.log("connected to mongodb"))
.catch(err=>console.log(err))
*/

mongoose.connect("mongodb://127.0.0.1:27017/apinode",{ useUnifiedTopology: true,useNewUrlParser: true  })
.then(console.log("connected to mongodb"))
.catch(err=>console.log(err))


app.use(express.json())

app.use(cors())

app.use('/user',routerUser)
app.use('/articles',routerArticle)
app.use('/clients',routerClient)
app.use('/fournisseurs',routerFournisseur)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('uploads'));

app.use('/uploads', express.static(__dirname + '/uploads/'));
app.use(express.static(__dirname + "/public"));

/*app.get("/", (req, res) => {
    res.send("hello world");
});*/

app.all('*', function(req, res) { 
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(process.env.PORT || 5000,()=>{
    console.log("server conected to port 5000")
})
