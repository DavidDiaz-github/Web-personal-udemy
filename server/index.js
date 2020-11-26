const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 3977;
const { API_VERSION, IP_SERVER, PORT_DB } = require("./config");


mongoose.set("useFindAndModify", false);

const mongoAtlas = `mongodb+srv://david:12345daviD@web-personal-curso.uxjkm.mongodb.net/<dbname>?retryWrites=true&w=majority`
const mongoLocal = `mongodb://${IP_SERVER}:${PORT_DB}/daviddiaz`
mongoose.connect(`${mongoAtlas}`, { useNewUrlParser:true, useUnifiedTopology: true}, (err, res) => {
    if (err){
        throw err;
    }else {
        console.log("La conexion a la base de datos es correcta.")

        app.listen(port, () => {
            console.log("############################");
            console.log("######## API REST ##########");
            console.log("############################");
            console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}/`);
            
        });
    }
});