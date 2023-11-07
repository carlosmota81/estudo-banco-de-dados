var database = require("./database")

/*      Insert com knex
var dados =[
   {
    nome: 'Call of duty 2',
    preco: 95
   },
   {
    nome: 'GTA',
    preco: 78.50
   }
]

 database.insert(dados).into("games").then(data =>{
    console.log(data);
 }).catch(err =>{
    console.log(err);
 })
 */

 //----------------------------------------------------------------------------------------------

 //      Select todos
/*database.select(["id"]).table("games").then(data =>{
    console.log(data);
}).catch(err =>{
    console.log(err);
})*/

//----------------------------------------------------------------------------------------------
/* where
        // Gera querys de busca com expecificação 
var query = database.select(["*"])
    .whereRaw("nome = 'GTA' or preco > 60")
    .table("games").then(data =>{
        console.log(data);
    }).catch(err =>{
        console.log(err);
    })
    */

//-----------------------------------------------------------------------------------

/*          where todal array
database.raw("SELECT * FROM games").then(data =>{
    console.log(data);
}).catch(err =>{
    console.log(err);
})
*/

//---------------------------------------------------------------------------------

//  DELETE
/*
database.where({id:4}).delete().table("games").then(data =>{
    console.log(data);
}).catch(err=>{
    console.log(err);
})
*/

//---------------------------------------------------------------------------

/*     Update

database.where({id: 2}).update({preco: 75}).table("games").then(data =>{
    console.log(data);
}).catch(err =>{
    console.log(err);
})

*/

//-------------------------------------------------------------------------------

 /*       //Ordena em ordem
database.select().table("games").orderBy("preco", "desc").then(data =>{
    console.log(data);
}).catch(err =>{
    console.log(err);
})
*/

//-------------------------------------------------------------------------------------------
/*     Insert em tabelas associadas
database.insert({
    nome: "Blizzard",
    game_id:2
}).table("estudios").then(data=>{
    console.log(data);
}).catch(err =>{
    console.log(err);
})
*/
//-----------------------------------------------------------------------------------

 /*        // Innerjoin
database.select(["games.id"]).table("games").innerJoin("estudios", "estudios.game_id", "games_id").then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
})

*/
//------------------------------------------------------------------------------------------------

//  join busca totos em tabelas filhas // retirando where tras todos dos dados
/*
database.select(["estudios.nome as estudio.nome"]).table("games_estudios")
    .innerJoin("games","games.id","games_estudios.game_id")
    .innerJoin("estudios","estudios.id","games_estudios.estudio_id")
    .where("games.id",2)
    .then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
})
 
*/


//-----------------------------------------------------------------------------------------------------

// transaction para varias operaçoes
/*
async function testeTransacao(){

    try{

    await database.transaction(async trans =>{

     await database.insert({nome: "qualquer"}).table("estudios")
     await database.insert({nome: "Gearbox"}).table("estudios")

    })
    }catch(err){
        console.log(err);
    }   
}

testeTransacao()

*/


