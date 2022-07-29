const mongoose=require('mongoose')
const Joi=require('joi')
const mongoosePaginate = require('mongoose-paginate');

const Schema = mongoose.Schema

const schemaClient=mongoose.Schema({
    
    nom:{type:String,default: ""},
    email:{type:String,default: ""},
    telephone:{type:String,default: ""},
    num:{type:Number,default: 0},
    code:{type:String,default: ""},
    raisonSociale:{type:String,default: ""},
    matriculeFiscale:{type:String,default: ""},
    classement:{type:String,default: ""},
    plafondCredit:{type:String,default: ""},
    mobiles:{type:String,default: ""},
    siteWeb:{type:String,default: ""},
    conditionReglement:{type:String,default: ""},
    typeTiers:{type:String,default: ""},
    credit:{type:String,default: ""},
    fax:{type:String,default: ""},
    email:{type:String,default: ""},
    statusProspection:{type:String,default: ""},
    modeReglement:{type:String,default: ""},

    paysFacturation:{type:String,default: ""},
    gouvernoratFacturation:{type:String,default: ""},
    delegationFacturation:{type:String,default: ""},
    localiteFacturation:{type:String,default: ""},
    codePostaleFacturation:{type:String,default: ""},
    adresseFacturation:{type:String,default: ""},

    paysLivraison:{type:String,default: ""},
    gouvernoratLivraison:{type:String,default: ""},
    delegationLivraison:{type:String,default: ""},
    localiteLivraison:{type:String,default: ""},
    codePostaleLivraison:{type:String,default: ""},
    adresseLivraison:{type:String,default: ""},
    
    autresAdresse:[{
        titre:{type:String,default: ""},
        pays:{type:String,default: ""},
        gouvernorat:{type:String,default: ""},
        delegation:{type:String,default: ""},
        localite:{type:String,default: ""},
        codePostale:{type:String,default: ""},
        adresse:{type:String,default: ""},
    }],
    
    contacts:[{
        type:{type:String,default: ""},
        titre:{type:String,default: ""},
        civilite:{type:String,default: ""},
    }],

    complements:[{
        type:{type:String,default: ""},
        valeur:{type:String,default: ""},
        imprimable:{type:String,default: ""},
    }],

    observation:{type:String,default: ""},

},
{ timestamps: true }
)

schemaClient.plugin(mongoosePaginate);

schemaClient.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

const Client = mongoose.model('Client',schemaClient)

function validateClient(client){
    
    let itemAutresAdress = Joi.object().keys({
        titre:Joi.string().allow('', null),
        pays:Joi.string().allow('', null),
        gouvernorat:Joi.string().allow('', null),
        delegation:Joi.string().allow('', null),
        localite:Joi.string().allow('', null),
        codePostale:Joi.string().allow('', null),
        adresse:Joi.string().allow('', null),
    })

    let itemContact = Joi.object().keys({
        type:Joi.string().allow('', null),
        titre:Joi.string().allow('', null),
        civilite:Joi.string().allow('', null),
    })

    let itemComplement = Joi.object().keys({
        type:Joi.string().allow('', null),
        valeur:Joi.string().allow('', null),
        imprimable:Joi.string().allow('', null),
    })
    
    let schema = Joi.object({
       
        nom:Joi.string().allow('', null),
        email:Joi.string().allow('', null),
        telephone:Joi.string().allow('', null),
        code:Joi.string().allow('', null),
        raisonSociale:Joi.string().allow('', null),
        matriculeFiscale:Joi.string().allow('', null),
        classement:Joi.string().allow('', null),
        plafondCredit:Joi.string().allow('', null),
        mobiles:Joi.string().allow('', null),
        siteWeb:Joi.string().allow('', null),
        conditionReglement:Joi.string().allow('', null),
        typeTiers:Joi.string().allow('', null),
        credit:Joi.string().allow('', null),
        fax:Joi.string().allow('', null),
        email:Joi.string().allow('', null),
        statusProspection:Joi.string().allow('', null),
        modeReglement:Joi.string().allow('', null),
    
        paysFacturation:Joi.string().allow('', null),
        gouvernoratFacturation:Joi.string().allow('', null),
        delegationFacturation:Joi.string().allow('', null),
        localiteFacturation:Joi.string().allow('', null),
        codePostaleFacturation:Joi.string().allow('', null),
        adresseFacturation:Joi.string().allow('', null),
    
        paysLivraison:Joi.string().allow('', null),
        gouvernoratLivraison:Joi.string().allow('', null),
        delegationLivraison:Joi.string().allow('', null),
        localiteLivraison:Joi.string().allow('', null),
        codePostaleLivraison:Joi.string().allow('', null),
        adresseLivraison:Joi.string().allow('', null),
    
        autresAdresse:Joi.array().items(itemAutresAdress),
        contacts:Joi.array().items(itemContact),
        complements:Joi.array().items(itemComplement),
        
        observation:Joi.string().allow('', null),
       
    })
      
    return schema.validate(client)
}

module.exports.Client=Client
module.exports.validateClient=validateClient
