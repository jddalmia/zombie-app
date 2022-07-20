const app = require("express") ()
let logins = {}
app.get("/", (req, res) => {
//res.setHeader("Cache-Control","public, max-age=86400, no-tracking

const etag= req.headers ["if-none-match"]; 
//check if there is a cookie, get the user 
if (req.headers.cookie)
{
const user = req.headers.cookie.split("=") [1]; 
createUserfromEtag(etag, user)
}

else
{
    //no cookie,recreate zombie cookie
    const user = getUserfromEtag(etag)
    //recreate the zombie cookie when a user is found
    if (user) {
        res.setHeader("set-cookie", [`user=${user}`])
    }
}

console.log(etag)
res.sendFile(`${__dirname}/index.html`)
})

app.get("/login", (req,res) =>{
    const user = req.query.user;
    res.setHeader("set-cookie", [`user=${user}`])
})

function createUserfromEtag(etag,user) {
    logins[etag] = user;
}
function getUserfromEtag(etag){
    return logins[etag]
}
app.listen(8080, ()=>console.log("listening to 8080"))