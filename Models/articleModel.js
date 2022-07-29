const mongoose=require('mongoose')
const Joi=require('joi')
const mongoosePaginate = require('mongoose-paginate');

const schemaArticle=mongoose.Schema({
    
    reference:{type:String, default: ""},
    codeBarre:{type:String, default: ""},
    designation:{type:String, default: ""},
    typeArticle:{type:String, default: ""},
    categorie:{type:String, default: ""},
    famille:{type:String, default: ""},
    sousFamille:{type:String, default: ""},
    marque:{type:String, default: ""},
    modele:{type:String, default: ""},
    prixFourn:{type:Number, default: ""},
    remiseF:{type:Number, default: ""},
    marge:{type:Number, default: ""},
    prixVenteHT:{type:Number, default: ""},
    tauxTVA:{type:Number, default: ""},
    montantTVA:{type:Number, default: ""},
    prixAchat:{type:Number, default: ""},
    valeurStock:{type:Number, default: ""},
    QteEnStock:{type:Number, default: ""},
    prixTTC:{type:Number, default: ""},
    plafondRemise:{type:Number, default: ""},
    pVenteConseille:{type:Number, default: ""},
    enVente:{type:String, default: ""},
    enAchat:{type:String, default: ""},
    refFournisseur:{type:String, default: ""},
    redevance:{type:String, default: ""},
    enBalance:{type:String, default: ""},
    enPromotion:{type:String, default: ""},
    enNouveau:{type:String, default: ""},
    longueur:{type:Number, default: ""},
    largeur:{type:Number, default: ""},
    hauteur:{type:Number, default: ""},
    surface:{type:Number, default: ""},
    volume:{type:Number, default: ""},
    enDisponible:{type:String, default: ""},
    enArchive:{type:String, default: ""},
    enVedette:{type:String, default: ""},
    enLiquidation:{type:String, default: ""},
    description:{type:String, default: ""},
    observations:{type:String, default: ""},
    poids:{type:Number, default: ""},
    couleur:{type:String, default: ""},
    unite1:{type:String, default: ""},
    unite2:{type:String, default: ""},
    coefficient:{type:Number, default: ""},
    emplacement:{type:String, default: ""},
    raccourciPLU:{type:String, default: ""},
    prixVenteHT2:{type:Number, default: ""},
    prixVenteHT3:{type:Number, default: ""},
},
{ timestamps: true })

schemaArticle.plugin(mongoosePaginate);

schemaArticle.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

const Article=mongoose.model('Article',schemaArticle)


function validateArticle(Article){

    const schema2=Joi.object({
        
        reference:Joi.string().allow('', null),
        codeBarre:Joi.string().allow('', null),
        designation:Joi.string().allow('', null),
        typeArticle:Joi.string().allow('', null),
        categorie:Joi.string().allow('', null),
        famille:Joi.string().allow('', null),
        sousFamille:Joi.string().allow('', null),
        marque:Joi.string().allow('', null),
        modele:Joi.string().allow('', null),
        prixFourn:Joi.number().allow('', null),
        remiseF:Joi.number().allow('', null),
        marge:Joi.number().allow('', null),
        prixVenteHT:Joi.number().allow('', null),
        tauxTVA:Joi.number().allow('', null),
        montantTVA:Joi.number().allow('', null),
        prixAchat:Joi.number().allow('', null),
        valeurStock:Joi.number().allow('', null),
        QteEnStock:Joi.number().allow('', null),
        prixTTC:Joi.number().allow('', null),
        plafondRemise:Joi.number().allow('', null),
        pVenteConseille:Joi.number().allow('', null),
        enVente:Joi.string().allow('', null),
        enAchat:Joi.string().allow('', null),
        refFournisseur:Joi.string().allow('', null),
        redevance:Joi.string().allow('', null),
        enBalance:Joi.string().allow('', null),
        enPromotion:Joi.string().allow('', null),
        enNouveau:Joi.string().allow('', null),
        longueur:Joi.number().allow('', null),
        largeur:Joi.number().allow('', null),
        hauteur:Joi.number().allow('', null),
        surface:Joi.number().allow('', null),
        volume:Joi.number().allow('', null),
        enDisponible:Joi.string().allow('', null),
        enArchive:Joi.string().allow('', null),
        enVedette:Joi.string().allow('', null),
        enLiquidation:Joi.string().allow('', null),
        description:Joi.string().allow('', null),
        observations:Joi.string().allow('', null),
        poids:Joi.number().allow('', null),
        couleur:Joi.string().allow('', null),
        unite1:Joi.string().allow('', null),
        unite2:Joi.string().allow('', null),
        coefficient:Joi.number().allow('', null),
        emplacement:Joi.string().allow('', null),
        raccourciPLU:Joi.string().allow('', null),
        prixVenteHT2:Joi.number().allow('', null),
        prixVenteHT3:Joi.number().allow('', null),

    })

    return schema2.validate(Article)

}





function validateArticlesPagination(request){
    
    const schema4=Joi.object({
        page:Joi.number().required(),
        limit:Joi.number().required(),
    })

    return schema4.validate(request)

}

module.exports.Article=Article
module.exports.validateArticle=validateArticle
module.exports.validateArticlesPagination=validateArticlesPagination
