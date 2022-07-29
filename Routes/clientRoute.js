const {Client, validateClient} =require('../Models/clientModel')
const express=require('express')
const router=express.Router()
const jwt = require('jsonwebtoken');

/**
 * @swagger
 * components:
 *   schemas:
 *     Article:
 *       type: object
 *       required:
 *        - nom
 *        - email
 *        - telephone       
 *        - code
 *        - raisonSociale
 *        - matriculeFiscale
 *        - classement
 *        - plafondCredit
 *        - mobiles
 *        - siteWeb
 *        - conditionReglement
 *        - typeTiers
 *        - credit
 *        - fax
 *        - statusProspection
 *        - modeReglement
 *        - paysFacturation
 *        - gouvernoratFacturation
 *        - delegationFacturation
 *        - localiteFacturation
 *        - codePostaleFacturation
 *        - adresseFacturation
 *        - paysLivraison
 *        - gouvernoratLivraison
 *        - delegationLivraison
 *        - localiteLivraison
 *        - codePostaleLivraison
 *        - adresseLivraison
 *        - autresAdresse
 *        - contacts
 *        - complements
 *        - observation
 *       properties:
 *         nom:
 *           type: string
 *         email:
 *           type: string
 *         telephone:
 *           type: string
 *         num:
 *           type:Number
 *         code:
 *           type: string
 *         raisonSociale:
 *           type: string
 *         matriculeFiscale:
 *           type: string
 *         classement:
 *           type: string
 *         plafondCredit:
 *           type: string
 *         mobiles:
 *           type: string
 *         siteWeb:
 *           type: string
 *         conditionReglement:
 *           type: string
 *         typeTiers:
 *           type: string
 *         credit: 
 *           type: string
 *         fax:
 *           type: string
 *         statusProspection:
 *           type: string
 *         modeReglement:
 *           type: string
 *         paysFacturation:
 *           type: string
 *         gouvernoratFacturation:
 *           type: string
 *         delegationFacturation:
 *           type: string
 *         localiteFacturation:
 *           type: string
 *         codePostaleFacturation:
 *           type: string
 *         adresseFacturation:
 *           type: string
 *         paysLivraison:
 *           type: string
 *         gouvernoratLivraison:
 *           type: string
 *         delegationLivraison:
 *           type: string
 *         localiteLivraison:
 *           type: string
 *         codePostaleLivraison:
 *           type: string
 *         adresseLivraison:
 *           type: string
 *         autresAdresse:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               titre:
 *                 type: string
 *               pays:
 *                 type: string
 *               gouvernorat:
 *                 type: string
 *               delegation:
 *                 type: string
 *               localite:
 *                 type: string
 *               codePostale:
 *                 type: string
 *               adresse:
 *                 type: string
 *         contacts:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               type:
 *                  type: string
 *               titre:
 *                  type: string
 *               civilite:
 *                  type: string
 *         complements:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               type:
 *                  type: string
 *               valeur:
 *                  type: string
 *               imprimable:
 *                  type: string
 *         observation:
 *           type: string
 */

 /**
  * @swagger
  * tags:
  *   name: Clients
  *   description: The clients managing API
  */

 /**
 * @swagger
 * /clients/newClient:
 *   post:
 *     summary: Returns the list of all the clients
 *     tags: [Clients]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema: 
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               email:
 *                 type: string
 *               telephone:
 *                 type: string
 *               code:
 *                 type: string
 *               raisonSociale:
 *                 type: string
 *               matriculeFiscale:
 *                 type: string
 *               classement:
 *                 type: string
 *               plafondCredit:
 *                 type: string
 *               mobiles:
 *                 type: string
 *               siteWeb:
 *                 type: string
 *               conditionReglement:
 *                 type: string
 *               typeTiers:
 *                 type: string
 *               credit: 
 *                 type: string
 *               fax:
 *                 type: string
 *               statusProspection:
 *                 type: string
 *               modeReglement:
 *                 type: string
 *               paysFacturation:
 *                 type: string
 *               gouvernoratFacturation:
 *                 type: string
 *               delegationFacturation:
 *                 type: string
 *               localiteFacturation:
 *                 type: string
 *               codePostaleFacturation:
 *                 type: string
 *               adresseFacturation:
 *                 type: string
 *               paysLivraison:
 *                 type: string
 *               gouvernoratLivraison:
 *                 type: string
 *               delegationLivraison:
 *                 type: string
 *               localiteLivraison:
 *                 type: string
 *               codePostaleLivraison:
 *                 type: string
 *               adresseLivraison:
 *                 type: string
 *               autresAdresse:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     titre:
 *                       type: string
 *                     pays:
 *                       type: string
 *                     gouvernorat:
 *                       type: string
 *                     delegation:
 *                       type: string
 *                     localite:
 *                       type: string
 *                     codePostale:
 *                       type: string
 *                     adresse:
 *                       type: string
 *               contacts:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     type:
 *                        type: string
 *                     titre:
 *                        type: string
 *                     civilite:
 *                        type: string
 *               complements:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     type:
 *                        type: string
 *                     valeur:
 *                        type: string
 *                     imprimable:
 *                        type: string
 *               observation:
 *                 type: string  
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
 *                       nom:
 *                         type: string
 *                       email:
 *                         type: string
 *                       telephone:
 *                         type: string
 *                       code:
 *                         type: string
 *                       raisonSociale:
 *                         type: string
 *                       matriculeFiscale:
 *                         type: string
 *                       classement:
 *                         type: string
 *                       plafondCredit:
 *                         type: string
 *                       mobiles:
 *                         type: string
 *                       siteWeb:
 *                         type: string
 *                       conditionReglement:
 *                         type: string
 *                       typeTiers:
 *                         type: string
 *                       credit: 
 *                         type: string
 *                       fax:
 *                         type: string
 *                       statusProspection:
 *                         type: string
 *                       modeReglement:
 *                         type: string
 *                       paysFacturation:
 *                         type: string
 *                       gouvernoratFacturation:
 *                         type: string
 *                       delegationFacturation:
 *                         type: string
 *                       localiteFacturation:
 *                         type: string
 *                       codePostaleFacturation:
 *                         type: string
 *                       adresseFacturation:
 *                         type: string
 *                       paysLivraison:
 *                         type: string
 *                       gouvernoratLivraison:
 *                         type: string
 *                       delegationLivraison:
 *                         type: string
 *                       localiteLivraison:
 *                         type: string
 *                       codePostaleLivraison:
 *                         type: string
 *                       adresseLivraison:
 *                         type: string
 *                       autresAdresse:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             titre:
 *                               type: string
 *                             pays:
 *                               type: string
 *                             gouvernorat:
 *                               type: string
 *                             delegation:
 *                               type: string
 *                             localite:
 *                               type: string
 *                             codePostale:
 *                               type: string
 *                             adresse:
 *                               type: string
 *                       contacts:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             type:
 *                                type: string
 *                             titre:
 *                                type: string
 *                             civilite:
 *                                type: string
 *                       complements:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             type:
 *                                type: string
 *                             valeur:
 *                                type: string
 *                             imprimable:
 *                                type: string
 *                       observation:
 *                         type: string 
 *       404:
 *         description: The article was not found
 *       500:
 *         description: Some error happened
 */



router.post('/newClient', async(req,res)=>{
    
    const {error}=validateClient(req.body)
    if(error) return res.status(400).send({status:false,message:error.details[0].message})
    
    const nbr = await Client.count({});
    const num = nbr + 1;
    
    const client=new Client({
        
        nom:req.body.nom,
        email:req.body.email,
        telephone:req.body.telephone,
        num:num,
        code:req.body.code,
        raisonSociale:req.body.raisonSociale,
        matriculeFiscale:req.body.matriculeFiscale,
        classement:req.body.classement,
        plafondCredit:req.body.plafondCredit,
        mobiles:req.body.mobiles,
        siteWeb:req.body.siteWeb,
        conditionReglement:req.body.conditionReglement,
        typeTiers:req.body.typeTiers,
        credit:req.body.credit,
        fax:req.body.fax,
        email:req.body.email,
        statusProspection:req.body.statusProspection,
        modeReglement:req.body.modeReglement,
    
        paysFacturation:req.body.paysFacturation,
        gouvernoratFacturation:req.body.gouvernoratFacturation,
        delegationFacturation:req.body.delegationFacturation,
        localiteFacturation:req.body.localiteFacturation,
        codePostaleFacturation:req.body.codePostaleFacturation,
        adresseFacturation:req.body.adresseFacturation,
    
        paysLivraison:req.body.paysLivraison,
        gouvernoratLivraison:req.body.gouvernoratLivraison,
        delegationLivraison:req.body.delegationLivraison,
        localiteLivraison:req.body.localiteLivraison,
        codePostaleLivraison:req.body.codePostaleLivraison,
        adresseLivraison:req.body.adresseLivraison,
    
        autresAdresse:req.body.autresAdresse,
        contacts:req.body.contacts,
        complements:req.body.complements,
        
        observation:req.body.observation,
       
    },)

    const result=await client.save()
    return res.send({status:true,resultat:result})
})



 /**
 * @swagger
 * /clients/modifierClient/{id}:
 *   post:
 *     summary: Remove the client by id
 *     tags: [Clients]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The client id
 * 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema: 
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               email:
 *                 type: string
 *               telephone:
 *                 type: string
 *               code:
 *                 type: string
 *               raisonSociale:
 *                 type: string
 *               matriculeFiscale:
 *                 type: string
 *               classement:
 *                 type: string
 *               plafondCredit:
 *                 type: string
 *               mobiles:
 *                 type: string
 *               siteWeb:
 *                 type: string
 *               conditionReglement:
 *                 type: string
 *               typeTiers:
 *                 type: string
 *               credit: 
 *                 type: string
 *               fax:
 *                 type: string
 *               statusProspection:
 *                 type: string
 *               modeReglement:
 *                 type: string
 *               paysFacturation:
 *                 type: string
 *               gouvernoratFacturation:
 *                 type: string
 *               delegationFacturation:
 *                 type: string
 *               localiteFacturation:
 *                 type: string
 *               codePostaleFacturation:
 *                 type: string
 *               adresseFacturation:
 *                 type: string
 *               paysLivraison:
 *                 type: string
 *               gouvernoratLivraison:
 *                 type: string
 *               delegationLivraison:
 *                 type: string
 *               localiteLivraison:
 *                 type: string
 *               codePostaleLivraison:
 *                 type: string
 *               adresseLivraison:
 *                 type: string
 *               autresAdresse:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     titre:
 *                       type: string
 *                     pays:
 *                       type: string
 *                     gouvernorat:
 *                       type: string
 *                     delegation:
 *                       type: string
 *                     localite:
 *                       type: string
 *                     codePostale:
 *                       type: string
 *                     adresse:
 *                       type: string
 *               contacts:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     type:
 *                        type: string
 *                     titre:
 *                        type: string
 *                     civilite:
 *                        type: string
 *               complements:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     type:
 *                        type: string
 *                     valeur:
 *                        type: string
 *                     imprimable:
 *                        type: string
 *               observation:
 *                 type: string  
 * 
 *     responses:
 *       200:
 *         description: The article is updated
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
 *                       nom:
 *                         type: string
 *                       email:
 *                         type: string
 *                       telephone:
 *                         type: string
 *                       code:
 *                         type: string
 *                       raisonSociale:
 *                         type: string
 *                       matriculeFiscale:
 *                         type: string
 *                       classement:
 *                         type: string
 *                       plafondCredit:
 *                         type: string
 *                       mobiles:
 *                         type: string
 *                       siteWeb:
 *                         type: string
 *                       conditionReglement:
 *                         type: string
 *                       typeTiers:
 *                         type: string
 *                       credit: 
 *                         type: string
 *                       fax:
 *                         type: string
 *                       statusProspection:
 *                         type: string
 *                       modeReglement:
 *                         type: string
 *                       paysFacturation:
 *                         type: string
 *                       gouvernoratFacturation:
 *                         type: string
 *                       delegationFacturation:
 *                         type: string
 *                       localiteFacturation:
 *                         type: string
 *                       codePostaleFacturation:
 *                         type: string
 *                       adresseFacturation:
 *                         type: string
 *                       paysLivraison:
 *                         type: string
 *                       gouvernoratLivraison:
 *                         type: string
 *                       delegationLivraison:
 *                         type: string
 *                       localiteLivraison:
 *                         type: string
 *                       codePostaleLivraison:
 *                         type: string
 *                       adresseLivraison:
 *                         type: string
 *                       autresAdresse:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             titre:
 *                               type: string
 *                             pays:
 *                               type: string
 *                             gouvernorat:
 *                               type: string
 *                             delegation:
 *                               type: string
 *                             localite:
 *                               type: string
 *                             codePostale:
 *                               type: string
 *                             adresse:
 *                               type: string
 *                       contacts:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             type:
 *                                type: string
 *                             titre:
 *                                type: string
 *                             civilite:
 *                                type: string
 *                       complements:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             type:
 *                                type: string
 *                             valeur:
 *                                type: string
 *                             imprimable:
 *                                type: string
 *                       observation:
 *                         type: string 
 *       404:
 *         description: The article was not found
 *       500:
 *         description: Some error happened
 */

router.post('/modifierClient/:id', async(req,res)=>{
    
    const {error}=validateClient(req.body)
    if(error) return res.status(400).send({status:false,message:error.details[0].message})
    
    //if(req.user.user.role != "admin") return res.status(401).send({status:false})
    
    const client = await Client.findById(req.params.id)
    
    if(!client) return res.status(401).send({status:false}) 

    const result = await Client.findOneAndUpdate({_id:req.params.id},{
       
        nom:req.body.nom,
        email:req.body.email,
        telephone:req.body.telephone,
        code:req.body.code,
        raisonSociale:req.body.raisonSociale,
        matriculeFiscale:req.body.matriculeFiscale,
        classement:req.body.classement,
        plafondCredit:req.body.plafondCredit,
        mobiles:req.body.mobiles,
        siteWeb:req.body.siteWeb,
        conditionReglement:req.body.conditionReglement,
        typeTiers:req.body.typeTiers,
        credit:req.body.credit,
        fax:req.body.fax,
        email:req.body.email,
        statusProspection:req.body.statusProspection,
        modeReglement:req.body.modeReglement,
    
        paysFacturation:req.body.paysFacturation,
        gouvernoratFacturation:req.body.gouvernoratFacturation,
        delegationFacturation:req.body.delegationFacturation,
        localiteFacturation:req.body.localiteFacturation,
        codePostaleFacturation:req.body.codePostaleFacturation,
        adresseFacturation:req.body.adresseFacturation,
    
        paysLivraison:req.body.paysLivraison,
        gouvernoratLivraison:req.body.gouvernoratLivraison,
        delegationLivraison:req.body.delegationLivraison,
        localiteLivraison:req.body.localiteLivraison,
        codePostaleLivraison:req.body.codePostaleLivraison,
        adresseLivraison:req.body.adresseLivraison,
    
        autresAdresse:req.body.autresAdresse,
        contacts:req.body.contacts,
        complements:req.body.complements,
        
        observation:req.body.observation,
       
    })

    const client2 = await Client.findById(req.params.id)

    return res.send({status:true,resultat:client2})
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
 * /clients/listClients:
 *   post:
 *     summary: Returns the list of all the clients
 *     tags: [Clients]
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
 *         description: The list of the clients
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
 *                            nom:
 *                              type: string
 *                            email:
 *                              type: string
 *                            telephone:
 *                              type: string
 *                            code:
 *                              type: string
 *                            raisonSociale:
 *                              type: string
 *                            matriculeFiscale:
 *                              type: string
 *                            classement:
 *                              type: string
 *                            plafondCredit:
 *                              type: string
 *                            mobiles:
 *                              type: string
 *                            siteWeb:
 *                              type: string
 *                            conditionReglement:
 *                              type: string
 *                            typeTiers:
 *                              type: string
 *                            credit: 
 *                              type: string
 *                            fax:
 *                              type: string
 *                            statusProspection:
 *                              type: string
 *                            modeReglement:
 *                              type: string
 *                            paysFacturation:
 *                              type: string
 *                            gouvernoratFacturation:
 *                              type: string
 *                            delegationFacturation:
 *                              type: string
 *                            localiteFacturation:
 *                              type: string
 *                            codePostaleFacturation:
 *                              type: string
 *                            adresseFacturation:
 *                              type: string
 *                            paysLivraison:
 *                              type: string
 *                            gouvernoratLivraison:
 *                              type: string
 *                            delegationLivraison:
 *                              type: string
 *                            localiteLivraison:
 *                              type: string
 *                            codePostaleLivraison:
 *                              type: string
 *                            adresseLivraison:
 *                              type: string
 *                            autresAdresse:
 *                              type: array
 *                              items:
 *                                type: object
 *                                properties:
 *                                  titre:
 *                                    type: string
 *                                  pays:
 *                                    type: string
 *                                  gouvernorat:
 *                                    type: string
 *                                  delegation:
 *                                    type: string
 *                                  localite:
 *                                    type: string
 *                                  codePostale:
 *                                    type: string
 *                                  adresse:
 *                                    type: string
 *                            contacts:
 *                              type: array
 *                              items:
 *                                type: object
 *                                properties:
 *                                  type:
 *                                     type: string
 *                                  titre:
 *                                     type: string
 *                                  civilite:
 *                                     type: string
 *                            complements:
 *                              type: array
 *                              items:
 *                                type: object
 *                                properties:
 *                                  type:
 *                                     type: string
 *                                  valeur:
 *                                     type: string
 *                                  imprimable:
 *                                     type: string
 *                            observation:
 *                              type: string 
 *                            createdAt:
 *                              type: string
 *                            updatedAt:
 *                              type: string
 *
 */
router.post('/listClients', async(req,res)=>{
  
    //if(req.user.user.role != "admin" ) return res.status(400).send({status:false})

    var sort = {}
    for( let key in req.body.orderBy){
        if(Number(req.body.orderBy[key]) != 0){
             sort[key] = req.body.orderBy[key]
        }  
    }

    if(Object.keys(sort).length == 0){
        sort = {createdAt:-1}
    }
   
    var listFilter =[]
    
    var search = req.body.search
    
    for( let key in search){
        if(search[key] != ""){
            var word1 = search[key].charAt(0).toUpperCase() + search[key].slice(1)
            var word2 = search[key].toUpperCase()
            var word3 = search[key].toLowerCase()
            var objet1 = {}
            objet1[key] = { $regex: '.*' + word1 + '.*' }
           
            var objet2 = {}
            objet2[key] = { $regex: '.*' + word2 + '.*' }
            
            var objet3 = {}
            objet3[key] = { $regex: '.*' + word3 + '.*' }

            listFilter.push({$or:[objet1, objet2, objet3]})
        }  
    }

    const options = {
        page: Number(req.body.page),
        limit: Number(req.body.limit),
        customLabels: myCustomLabels,
        //populate: 'client'
        sort:sort
    };

    var result = []
    
    if(listFilter.length > 1){
      result = await  Client.paginate({$and:listFilter}, options) 
    }else if(listFilter.length == 1){
      result = await  Client.paginate(listFilter[0], options)
    }else{
      result = await  Client.paginate({}, options)
    }

    return res.send({status:true, resultat:result, request:req.body})
    
})

/**
 * @swagger
 * /clients/deleteClient/{id}:
 *   post:
 *     summary: Remove the client by id
 *     tags: [Clients]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The client id
 * 
 *     responses:
 *       200:
 *         description: The client was deleted
 *         content:
 *          application/json:
 *            schema:
 *               type: object
 *               properties:
 *                  status:
 *                    type: boolean
 *       404:
 *         description: The client was not found
 *       500:
 *         description: Some error happened
 */

router.post('/deleteClient/:id', async(req,res)=>{
    
    //if(req.user.user.role != "admin") return res.status(401).send({status:false})

    const client = await Client.findById(req.params.id)
    
    if(!client) return res.status(401).send({status:false})

    
    if(await Client.findOneAndDelete({_id:req.params.id})){
        return res.send({status:true})
    }else{
        return res.send({status:false})
    }
})

/**
 * @swagger
 * /clients/getById/{id}:
 *   get:
 *     summary: Remove the client by id
 *     tags: [Clients]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The client id
 * 
 *     responses:
 *       200:
 *         description: The client was deleted
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
 *                     nom:
 *                       type: string
 *                     email:
 *                       type: string
 *                     telephone:
 *                       type: string
 *                     code:
 *                       type: string
 *                     raisonSociale:
 *                       type: string
 *                     matriculeFiscale:
 *                       type: string
 *                     classement:
 *                       type: string
 *                     plafondCredit:
 *                       type: string
 *                     mobiles:
 *                       type: string
 *                     siteWeb:
 *                       type: string
 *                     conditionReglement:
 *                       type: string
 *                     typeTiers:
 *                       type: string
 *                     credit: 
 *                       type: string
 *                     fax:
 *                       type: string
 *                     statusProspection:
 *                       type: string
 *                     modeReglement:
 *                       type: string
 *                     paysFacturation:
 *                       type: string
 *                     gouvernoratFacturation:
 *                       type: string
 *                     delegationFacturation:
 *                       type: string
 *                     localiteFacturation:
 *                       type: string
 *                     codePostaleFacturation:
 *                       type: string
 *                     adresseFacturation:
 *                       type: string
 *                     paysLivraison:
 *                       type: string
 *                     gouvernoratLivraison:
 *                       type: string
 *                     delegationLivraison:
 *                       type: string
 *                     localiteLivraison:
 *                       type: string
 *                     codePostaleLivraison:
 *                       type: string
 *                     adresseLivraison:
 *                       type: string
 *                     autresAdresse:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           titre:
 *                             type: string
 *                           pays:
 *                             type: string
 *                           gouvernorat:
 *                             type: string
 *                           delegation:
 *                             type: string
 *                           localite:
 *                             type: string
 *                           codePostale:
 *                             type: string
 *                           adresse:
 *                             type: string
 *                     contacts:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           type:
 *                              type: string
 *                           titre:
 *                              type: string
 *                           civilite:
 *                              type: string
 *                     complements:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           type:
 *                              type: string
 *                           valeur:
 *                              type: string
 *                           imprimable:
 *                              type: string
 *                     observation:
 *                       type: string 
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
  
    const client = await Client.findOne({_id:req.params.id})
    
    return res.send({status:true,resultat:client}) 
    
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
     res.sendStatus(401);
  }

}

module.exports.routerClient=router