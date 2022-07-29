const {Article, validateArticle, validateArticlesPagination} =require('../Models/articleModel')
const express=require('express')
const router=express.Router()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var multer = require('multer');
const fs = require('fs');

var dateFormat = require('dateformat');
const {User, validateDownloadData} =require('../Models/userModel')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null,  file.originalname + Date.now())
    }
})

var upload = multer({ storage: storage })


/**
 * @swagger
 * components:
 *   schemas:
 *     Article:
 *       type: object
 *       required:
 *         - reference
 *         - codeBarre
 *         - designation
 *         - typeArticle
 *         - categorie
 *         - famille
 *         - sousFamille
 *         - marque
 *         - modele
 *         - prixFourn
 *         - remiseF
 *         - marge
 *         - prixVenteHT
 *         - tauxTVA
 *         - montantTVA
 *         - prixAchat
 *         - valeurStock
 *         - QteEnStock
 *         - prixTTC
 *         - plafondRemise
 *         - pVenteConseille
 *         - enVente
 *         - enAchat
 *         - refFournisseur
 *         - redevance
 *         - enBalance
 *         - enPromotion
 *         - enNouveau
 *         - longueur
 *         - largeur
 *         - hauteur
 *         - surface
 *         - volume
 *         - enDisponible
 *         - enArchive
 *         - enVedette
 *         - enLiquidation
 *         - description
 *         - observations
 *         - poids
 *         - couleur
 *         - unite1
 *         - unite2
 *         - coefficient
 *         - emplacement
 *         - raccourciPLU
 *         - prixVenteHT2
 *         - prixVenteHT3
 *       properties:
 *         id:
 *           type: String
 *         reference:
 *           type: String
 *         codeBarre:
 *           type: String
 *         designation:
 *           type: String
 *         typeArticle:
 *           type: String
 *         categorie:
 *           type: String
 *         famille:
 *           type: String
 *         sousFamille:
 *           type: String
 *         marque:
 *           type: String
 *         modele:
 *           type: String
 *         prixFourn:
 *           type: number
 *         remiseF:
 *           type: number
 *         marge:
 *           type: number
 *         prixVenteHT:
 *           type: number
 *         tauxTVA:
 *           type: number
 *         montantTVA:
 *           type: number
 *         prixAchat:
 *           type: number
 *         valeurStock:
 *           type: number
 *         QteEnStock:
 *           type: number
 *         prixTTC:
 *           type: number
 *         plafondRemise:
 *           type: number
 *         pVenteConseille:
 *           type: number
 *         enVente:
 *           type: string
 *         enAchat:
 *           type: string
 *         refFournisseur:
 *           type: string
 *         redevance:
 *           type: string
 *         enBalance:
 *           type: string
 *         enPromotion:
 *           type: string
 *         enNouveau:
 *           type: string
 *         longueur:
 *           type: number
 *         largeur:
 *           type: number
 *         hauteur:
 *           type: number
 *         surface:
 *           type: number
 *         volume:
 *           type: number
 *         enDisponible:
 *           type: string
 *         enArchive:
 *           type: string
 *         enVedette:
 *           type: string
 *         enLiquidation:
 *           type: string
 *         description:
 *           type: string
 *         observations:
 *           type: string
 *         poids:
 *           type: number
 *         couleur:
 *           type: string
 *         unite1:
 *           type: string
 *         unite2:
 *           type: string
 *         coefficient:
 *           type: number
 *         emplacement:
 *           type: string
 *         raccourciPLU:
 *           type: string
 *         prixVenteHT2:
 *           type: number
 *         prixVenteHT3:
 *           type: number
 *
 *         
 */

 /**
  * @swagger
  * tags:
  *   name: Articles
  *   description: The articles managing API
  */


 /**
 * @swagger
 * paths:
 *   /articles/upload:
 *     post:
 *       summary: upload image
 *       tags: [Articles]
 *       requestBody:
 *         content:
 *           multipart/form-data:
 *             schema:
 *               type: object
 *               properties:
 *                 image:
 *                   type: file
 *       responses:
 *         200:
 *           description: The image was successfully saved
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     pathImage:
 *                       type: string
 *         500:
 *           description: Some server error
 */
router.post('/upload',upload.array('myFiles'),async(req,res)=>{
    const files = req.files
    let arr=[];
    files.forEach(element => {
    
      arr.push(element.path)
 
    })
    return res.send(arr)
})


/**
 * @swagger
 * /articles/newArticle:
 *   post:
 *     summary: Returns the list of all the articles
 *     tags: [Articles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema: 
 *             type: object
 *             properties:
 *                reference:
 *                  type: string
 *                codeBarre:
 *                  type: string
 *                designation:
 *                  type: string
 *                typeArticle:
 *                  type: string
 *                categorie:
 *                  type: string
 *                famille:
 *                  type: string
 *                sousFamille:
 *                  type: string
 *                marque:
 *                  type: string
 *                modele:
 *                  type: string
 *                prixFourn:
 *                  type: number
 *                remiseF:
 *                  type: number
 *                marge:
 *                  type: number
 *                prixVenteHT:
 *                  type: number
 *                tauxTVA:
 *                  type: number
 *                montantTVA:
 *                  type: number
 *                prixAchat:
 *                  type: number
 *                valeurStock:
 *                  type: number
 *                QteEnStock:
 *                  type: number
 *                prixTTC:
 *                  type: number
 *                plafondRemise:
 *                  type: number
 *                pVenteConseille:
 *                  type: number
 *                enVente:
 *                  type: string
 *                enAchat:
 *                  type: string
 *                refFournisseur:
 *                  type: string
 *                redevance:
 *                  type: string
 *                enBalance:
 *                  type: string
 *                enPromotion:
 *                  type: string
 *                enNouveau:
 *                  type: string
 *                longueur:
 *                  type: number
 *                largeur:
 *                  type: number
 *                hauteur:
 *                  type: number
 *                surface:
 *                  type: number
 *                volume:
 *                  type: number
 *                enDisponible:
 *                  type: string
 *                enArchive:
 *                  type: string
 *                enVedette:
 *                  type: string
 *                enLiquidation:
 *                  type: string
 *                description:
 *                  type: string
 *                observations:
 *                  type: string
 *                poids:
 *                  type: number
 *                couleur:
 *                  type: string
 *                unite1:
 *                  type: string
 *                unite2:
 *                  type: string
 *                coefficient:
 *                  type: number
 *                emplacement:
 *                  type: string
 *                raccourciPLU:
 *                  type: string
 *                prixVenteHT2:
 *                  type: number
 *                prixVenteHT3:
 *                  type: number
 *     responses:
 *       200:
 *         description: The list of the articles
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                 resultat:
 *                   type: object
 *                   properties:
 *                    id:
 *                      type: string
 *                    reference:
 *                      type: string
 *                    codeBarre:
 *                      type: string
 *                    designation:
 *                      type: string
 *                    typeArticle:
 *                      type: string
 *                    categorie:
 *                      type: string
 *                    famille:
 *                      type: string
 *                    sousFamille:
 *                      type: string
 *                    marque:
 *                      type: string
 *                    modele:
 *                      type: string
 *                    prixFourn:
 *                      type: number
 *                    remiseF:
 *                      type: number
 *                    marge:
 *                      type: number
 *                    prixVenteHT:
 *                      type: number
 *                    tauxTVA:
 *                      type: number
 *                    montantTVA:
 *                      type: number
 *                    prixAchat:
 *                      type: number
 *                    valeurStock:
 *                      type: number
 *                    QteEnStock:
 *                      type: number
 *                    prixTTC:
 *                      type: number
 *                    plafondRemise:
 *                      type: number
 *                    pVenteConseille:
 *                      type: number
 *                    enVente:
 *                      type: string
 *                    enAchat:
 *                      type: string
 *                    refFournisseur:
 *                      type: string
 *                    redevance:
 *                      type: string
 *                    enBalance:
 *                      type: string
 *                    enPromotion:
 *                      type: string
 *                    enNouveau:
 *                      type: string
 *                    longueur:
 *                      type: number
 *                    largeur:
 *                      type: number
 *                    hauteur:
 *                      type: number
 *                    surface:
 *                      type: number
 *                    volume:
 *                      type: number
 *                    enDisponible:
 *                      type: string
 *                    enArchive:
 *                      type: string
 *                    enVedette:
 *                      type: string
 *                    enLiquidation:
 *                      type: string
 *                    description:
 *                      type: string
 *                    observations:
 *                      type: string
 *                    poids:
 *                      type: number
 *                    couleur:
 *                      type: string
 *                    unite1:
 *                      type: string
 *                    unite2:
 *                      type: string
 *                    coefficient:
 *                      type: number
 *                    emplacement:
 *                      type: string
 *                    raccourciPLU:
 *                      type: string
 *                    prixVenteHT2:
 *                      type: number
 *                    prixVenteHT3:
 *                      type: number
 *
 *                         
 */

router.post('/newArticle', async(req,res)=>{
    
    const {error}=validateArticle(req.body)
    if(error) return res.status(400).send({status:false,message:error.details[0].message})
   
    //if(req.user.user.role != "admin") return res.status(401).send({status:false})
    
    
    const article=new Article(req.body);

    const result=await article.save()

   
    return res.send({status:true,resultat:result})
})

/**
 * @swagger
 * /articles/modifierArticle/{id}:
 *   post:
 *     summary: Update the article by id
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The article id

 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema: 
 *             type: object
 *             properties:
 *                reference:
 *                  type: string
 *                codeBarre:
 *                  type: string
 *                designation:
 *                  type: string
 *                typeArticle:
 *                  type: string
 *                categorie:
 *                  type: string
 *                famille:
 *                  type: string
 *                sousFamille:
 *                  type: string
 *                marque:
 *                  type: string
 *                modele:
 *                  type: string
 *                prixFourn:
 *                  type: number
 *                remiseF:
 *                  type: number
 *                marge:
 *                  type: number
 *                prixVenteHT:
 *                  type: number
 *                tauxTVA:
 *                  type: number
 *                montantTVA:
 *                  type: number
 *                prixAchat:
 *                  type: number
 *                valeurStock:
 *                  type: number
 *                QteEnStock:
 *                  type: number
 *                prixTTC:
 *                  type: number
 *                plafondRemise:
 *                  type: number
 *                pVenteConseille:
 *                  type: number
 *                enVente:
 *                  type: string
 *                enAchat:
 *                  type: string
 *                refFournisseur:
 *                  type: string
 *                redevance:
 *                  type: string
 *                enBalance:
 *                  type: string
 *                enPromotion:
 *                  type: string
 *                enNouveau:
 *                  type: string
 *                longueur:
 *                  type: number
 *                largeur:
 *                  type: number
 *                hauteur:
 *                  type: number
 *                surface:
 *                  type: number
 *                volume:
 *                  type: number
 *                enDisponible:
 *                  type: string
 *                enArchive:
 *                  type: string
 *                enVedette:
 *                  type: string
 *                enLiquidation:
 *                  type: string
 *                description:
 *                  type: string
 *                observations:
 *                  type: string
 *                poids:
 *                  type: number
 *                couleur:
 *                  type: string
 *                unite1:
 *                  type: string
 *                unite2:
 *                  type: string
 *                coefficient:
 *                  type: number
 *                emplacement:
 *                  type: string
 *                raccourciPLU:
 *                  type: string
 *                prixVenteHT2:
 *                  type: number
 *                prixVenteHT3:
 *                  type: number
 *     responses:
 *       200:
 *         description: The list of the articles
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                 resultat:
 *                   type: object
 *                   properties:
 *                    id:
 *                      type: string
 *                    reference:
 *                      type: string
 *                    codeBarre:
 *                      type: string
 *                    designation:
 *                      type: string
 *                    typeArticle:
 *                      type: string
 *                    categorie:
 *                      type: string
 *                    famille:
 *                      type: string
 *                    sousFamille:
 *                      type: string
 *                    marque:
 *                      type: string
 *                    modele:
 *                      type: string
 *                    prixFourn:
 *                      type: number
 *                    remiseF:
 *                      type: number
 *                    marge:
 *                      type: number
 *                    prixVenteHT:
 *                      type: number
 *                    tauxTVA:
 *                      type: number
 *                    montantTVA:
 *                      type: number
 *                    prixAchat:
 *                      type: number
 *                    valeurStock:
 *                      type: number
 *                    QteEnStock:
 *                      type: number
 *                    prixTTC:
 *                      type: number
 *                    plafondRemise:
 *                      type: number
 *                    pVenteConseille:
 *                      type: number
 *                    enVente:
 *                      type: string
 *                    enAchat:
 *                      type: string
 *                    refFournisseur:
 *                      type: string
 *                    redevance:
 *                      type: string
 *                    enBalance:
 *                      type: string
 *                    enPromotion:
 *                      type: string
 *                    enNouveau:
 *                      type: string
 *                    longueur:
 *                      type: number
 *                    largeur:
 *                      type: number
 *                    hauteur:
 *                      type: number
 *                    surface:
 *                      type: number
 *                    volume:
 *                      type: number
 *                    enDisponible:
 *                      type: string
 *                    enArchive:
 *                      type: string
 *                    enVedette:
 *                      type: string
 *                    enLiquidation:
 *                      type: string
 *                    description:
 *                      type: string
 *                    observations:
 *                      type: string
 *                    poids:
 *                      type: number
 *                    couleur:
 *                      type: string
 *                    unite1:
 *                      type: string
 *                    unite2:
 *                      type: string
 *                    coefficient:
 *                      type: number
 *                    emplacement:
 *                      type: string
 *                    raccourciPLU:
 *                      type: string
 *                    prixVenteHT2:
 *                      type: number
 *                    prixVenteHT3:
 *                      type: number
 *                    createdAt:
 *                      type: string
 *                    updatedAt:
 *                      type: string
 *
 *                         
 */

router.post('/modifierArticle/:id', async(req,res)=>{
    
    const {error}=validateArticle(req.body)
    if(error) return res.status(400).send({status:false,message:error.details[0].message})
    
    //if(req.user.user.role != "admin") return res.status(401).send({status:false})
    
    const article = await Article.findById(req.params.id)
    
    if(!article) return res.status(401).send({status:false}) 

   
    const result = await Article.findOneAndUpdate({_id:req.params.id},{
        reference:req.body.reference ,
        codeBarre:req.body.codeBarre ,
        designation:req.body.designation ,
        typeArticle:req.body.typeArticle ,
        categorie:req.body.categorie ,
        famille:req.body.famille ,
        sousFamille:req.body.sousFamille ,
        marque:req.body.marque ,
        modele:req.body.modele ,
        prixFourn:req.body.prixFourn ,
        remiseF:req.body.remiseF ,
        marge:req.body.marge ,
        prixVenteHT:req.body.prixVenteHT ,
        tauxTVA:req.body.tauxTVA ,
        montantTVA:req.body.montantTVA ,
        prixAchat:req.body.prixAchat ,
        valeurStock:req.body.valeurStock ,
        QteEnStock:req.body.QteEnStock ,
        prixTTC:req.body.prixTTC ,
        plafondRemise:req.body.plafondRemise ,
        pVenteConseille:req.body.pVenteConseille ,
        enVente:req.body.enVente ,
        enAchat:req.body.enAchat ,
        refFournisseur:req.body.refFournisseur ,
        redevance:req.body.redevance ,
        enBalance:req.body.enBalance ,
        enPromotion:req.body.enPromotion ,
        enNouveau:req.body.enNouveau ,
        longueur:req.body.longueur ,
        largeur:req.body.largeur ,
        hauteur:req.body.hauteur ,
        surface:req.body.surface ,
        volume:req.body.volume ,
        enDisponible:req.body.enDisponible ,
        enArchive:req.body.enArchive ,
        enVedette:req.body.enVedette ,
        enLiquidation:req.body.enLiquidation ,
        description:req.body.description ,
        observations:req.body.observations ,
        poids:req.body.poids ,
        couleur:req.body.couleur ,
        unite1:req.body.unite1 ,
        unite2:req.body.unite2 ,
        coefficient:req.body.coefficient ,
        emplacement:req.body.emplacement ,
        raccourciPLU:req.body.raccourciPLU ,
        prixVenteHT2:req.body.prixVenteHT2 ,
        prixVenteHT3:req.body.prixVenteHT3 ,

    })

    const article2 = await Article.findById(req.params.id)

    return res.send({status:true,resultat:article2})
})

/**
 * @swagger
 * /articles/deleteArticle/{id}:
 *   post:
 *     summary: Remove the article by id
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The article id
 * 
 *     responses:
 *       200:
 *         description: The article was deleted
 *         content:
 *          application/json:
 *            schema:
 *               type: object
 *               properties:
 *                  status:
 *                    type: boolean
 *       404:
 *         description: The article was not found
 *       500:
 *         description: Some error happened
 */

router.post('/deleteArticle/:id', async(req,res)=>{
    
    //if(req.user.user.role != "admin") return res.status(401).send({status:false})

    const article = await Article.findById(req.params.id)
    
    if(!article) return res.status(401).send({status:false})

    
    if(await Article.findOneAndDelete({_id:req.params.id})){
        return res.send({status:true})
    }else{
        return res.send({status:false})
    }

})


const myCustomLabels = {
  totalDocs: 'itemCount',
  docs: 'itemsList',
  limit: 'perPage',
  page: 'currentPage',
  nextPage: 'next',
  prevPage: 'prev',
  totalPages: 'pageCount',
  pagingCounter: 'slNo',
  meta: 'paginator'
};
 


/**
 * @swagger
 * /articles/listArticles:
 *   post:
 *     summary: Returns the list of all the articles
 *     tags: [Articles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema: 
 *             type: object
 *             properties:
 *                page:
 *                  type: number
 *                limit:
 *                  type: number
 *     responses:
 *       200:
 *         description: The list of the articles
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                 request:
 *                   type: object
 *                   properties:
 *                      page:
 *                         type: number
 *                      limit:
 *                         type: number
 *                 resultat:
 *                   type: object
 *                   properties:
 *                      total:
 *                         type: number
 *                      limit:
 *                         type: number
 *                      page:
 *                         type: number
 *                      pages:
 *                         type: number
 *                      docs:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                            id:
 *                              type: string
 *                            reference:
 *                              type: string
 *                            codeBarre:
 *                              type: string
 *                            designation:
 *                              type: string
 *                            typeArticle:
 *                              type: string
 *                            categorie:
 *                              type: string
 *                            famille:
 *                              type: string
 *                            sousFamille:
 *                              type: string
 *                            marque:
 *                              type: string
 *                            modele:
 *                              type: string
 *                            prixFourn:
 *                              type: number
 *                            remiseF:
 *                              type: number
 *                            marge:
 *                              type: number
 *                            prixVenteHT:
 *                              type: number
 *                            tauxTVA:
 *                              type: number
 *                            montantTVA:
 *                              type: number
 *                            prixAchat:
 *                              type: number
 *                            valeurStock:
 *                              type: number
 *                            QteEnStock:
 *                              type: number
 *                            prixTTC:
 *                              type: number
 *                            plafondRemise:
 *                              type: number
 *                            pVenteConseille:
 *                              type: number
 *                            enVente:
 *                              type: string
 *                            enAchat:
 *                              type: string
 *                            refFournisseur:
 *                              type: string
 *                            redevance:
 *                              type: string
 *                            enBalance:
 *                              type: string
 *                            enPromotion:
 *                              type: string
 *                            enNouveau:
 *                              type: string
 *                            longueur:
 *                              type: number
 *                            largeur:
 *                              type: number
 *                            hauteur:
 *                              type: number
 *                            surface:
 *                              type: number
 *                            volume:
 *                              type: number
 *                            enDisponible:
 *                              type: string
 *                            enArchive:
 *                              type: string
 *                            enVedette:
 *                              type: string
 *                            enLiquidation:
 *                              type: string
 *                            description:
 *                              type: string
 *                            observations:
 *                              type: string
 *                            poids:
 *                              type: number
 *                            couleur:
 *                              type: string
 *                            unite1:
 *                              type: string
 *                            unite2:
 *                              type: string
 *                            coefficient:
 *                              type: number
 *                            emplacement:
 *                              type: string
 *                            raccourciPLU:
 *                              type: string
 *                            prixVenteHT2:
 *                              type: number
 *                            prixVenteHT3:
 *                              type: number
 *                            createdAt:
 *                              type: string
 *                            updatedAt:
 *                              type: string
 *
 *                   
 *                         
 */

router.post('/listArticles', async(req,res)=>{
  
  const options = {
    page: req.body.page,
    limit: Number(req.body.limit) ,
    customLabels: myCustomLabels,
    sort:{
      createdAt: -1 
    }
  };

  var word = req.body.search;
  var wordLowerCase = word.toLowerCase();
    
  let newRef = wordLowerCase
          
  while(newRef.indexOf(" ") != -1){
    newRef = newRef.replace(" ","")
  }

  var listFilter =[]
  listFilter.push({nomLower:{ $regex: '.*' + wordLowerCase + '.*' }})
  listFilter.push({ref:{ $regex: '.*' + word + '.*' }})
  listFilter.push({marque:{ $regex: '.*' + word + '.*' }})
  listFilter.push({'categories.categorie':{ $regex: '.*' + word + '.*' }})
  listFilter.push({'ref2':{ $regex: '.*' + newRef + '.*' }})
    
  const result=await  Article.paginate({}, options) 
  return res.send({status:true,resultat:result, request:req.body})

})


/**
 * @swagger
 * /articles/getById/{id}:
 *   get:
 *     summary: Remove the article by id
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The article id
 * 
 *     responses:
 *       200:
 *         description: The article was deleted
 *         content:
 *          application/json:
 *            schema:
 *               type: object
 *               properties:
 *                  status:
 *                    type: boolean
 *                  resultat:
 *                    type: object
 *                    properties:
 *                     id:
 *                       type: string
 *                     reference:
 *                       type: string
 *                     codeBarre:
 *                       type: string
 *                     designation:
 *                       type: string
 *                     typeArticle:
 *                       type: string
 *                     categorie:
 *                       type: string
 *                     famille:
 *                       type: string
 *                     sousFamille:
 *                       type: string
 *                     marque:
 *                       type: string
 *                     modele:
 *                       type: string
 *                     prixFourn:
 *                       type: number
 *                     remiseF:
 *                       type: number
 *                     marge:
 *                       type: number
 *                     prixVenteHT:
 *                       type: number
 *                     tauxTVA:
 *                       type: number
 *                     montantTVA:
 *                       type: number
 *                     prixAchat:
 *                       type: number
 *                     valeurStock:
 *                       type: number
 *                     QteEnStock:
 *                       type: number
 *                     prixTTC:
 *                       type: number
 *                     plafondRemise:
 *                       type: number
 *                     pVenteConseille:
 *                       type: number
 *                     enVente:
 *                       type: string
 *                     enAchat:
 *                       type: string
 *                     refFournisseur:
 *                       type: string
 *                     redevance:
 *                       type: string
 *                     enBalance:
 *                       type: string
 *                     enPromotion:
 *                       type: string
 *                     enNouveau:
 *                       type: string
 *                     longueur:
 *                       type: number
 *                     largeur:
 *                       type: number
 *                     hauteur:
 *                       type: number
 *                     surface:
 *                       type: number
 *                     volume:
 *                       type: number
 *                     enDisponible:
 *                       type: string
 *                     enArchive:
 *                       type: string
 *                     enVedette:
 *                       type: string
 *                     enLiquidation:
 *                       type: string
 *                     description:
 *                       type: string
 *                     observations:
 *                       type: string
 *                     poids:
 *                       type: number
 *                     couleur:
 *                       type: string
 *                     unite1:
 *                       type: string
 *                     unite2:
 *                       type: string
 *                     coefficient:
 *                       type: number
 *                     emplacement:
 *                       type: string
 *                     raccourciPLU:
 *                       type: string
 *                     prixVenteHT2:
 *                       type: number
 *                     prixVenteHT3:
 *                       type: number
 *                     createdAt:
 *                       type: string
 *                     updatedAt:
 *                       type: string
 *       404:
 *         description: The article was not found
 *       500:
 *         description: Some error happened
 */
router.get('/getById/:id', async(req,res)=>{

  if(req.params.id == undefined || req.params.id == null || req.params.id == "") return res.status(400).send({status:false})

  const article = await Article.findOne({_id:req.params.id})
  
  return res.send({status:true,resultat:article}) 
  
})

function verifytoken(req, res, next){
  const bearerHeader = req.headers['authorization'];
  
  if(typeof bearerHeader !== 'undefined'){
 
      const bearer = bearerHeader.split(' ');
      const bearerToken = bearer[1];
      jwt.verify(bearerToken, 'secretkey', (err, authData) => {
          if(err){
              res.sendStatus(403);
          }else{
              req.user = authData;
              next();
          }
      });
  
  }else{
    console.log("etape100");
     res.sendStatus(401);
  }

}

module.exports.routerArticle=router
