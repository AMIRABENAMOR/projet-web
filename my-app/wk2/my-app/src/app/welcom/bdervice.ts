
export class bdservice
{
pn=[];
constructor()

{

 }
 js=[ {
  "id":"p0",
  "nom":"Hermes cat ",
  "stock":"20",
  "invalide":false,
  "photo":"https://th.bing.com/th/id/OIP.w7tkLnnJi7ifyP6HIU5b8wHaFo?w=240&h=183&c=7&r=0&o=5&pid=1.7",
  "categorie":"brosse",
  "promo":true,
  "interface":1,
  "desc":"les 3 produit vendu a la meme prix "
   },
     {
      "id":"p33",
      "nom":"Hermes cat ",
      "stock":"20",
      "invalide":true,
      "photo":"https://d2it85vqry1c8o.cloudfront.net/media/catalog/product/cache/1/image/600x/040ec09b1e35df139433887a97daa66f/c/o/collar_-_turquoise___rose_gold_-_001.jpg",
      "categorie":"access",
      "promo":false,
      "interface":1,
      "desc":"les 3 produit vendu a la meme prix "
       },
       {
        "id":"pd",
        "nom":"Hermes cat ",
        "stock":"20",
        "invalide":false,
        "photo":"https://i.etsystatic.com/23106293/r/il/5ae510/2435661271/il_340x270.2435661271_s9gs.jpg",
        "categorie":"access",
        "promo":true,
        "interface":1,
        "desc":"les 3 produit vendu a la meme prix "
         },
         {
          "id":"pf",
          "nom":"Hermes cat ",
          "stock":"20",
          "invalide":true,
          "photo":"https://external-preview.redd.it/k7S2Tcm9GiV3r6gMamUcK1aj7uCjSugmd-tMEmbR-Z0.jpg?auto=webp&s=22e39a4014736867edcec438da025100c1c7bfbe",
          "categorie":"access",
          "promo":true,
          "interface":1,
          "desc":"offre de 50% sur ce type de styoire votre confort est notre mission "
           },
           {
            "id":"pf",
            "nom":"Hermes cat ",
            "stock":"20",
            "invalide":false,
            "photo":"data:image/jpeg;base64,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",
            "categorie":"access",
            "promo":false,
            "interface":1,
            "desc":"les 3 produit vendu a la meme prix "
             },
             {
              "id":"ph",
              "nom":"Hermes cat ",
              "stock":"20",
              "invalide":true,
              "photo":"https://cdn.shopify.com/s/files/1/0694/3457/products/Nice-Digs_Animal-Dog-Collar_Red_Front_800x.jpg?v=1538106584",
              "categorie":"access",
              "promo":false,
              "interface":1,
              "desc":"les 3 produit vendu a la meme prix "
               },
               {
              
  
                
                  "id":"pj",
                  "nom":"Hermes cat ",
                  "stock":"20",
                  "invalide":false,
                  "photo":"https://cdn.shopify.com/s/files/1/1324/7127/products/Firecracker_front_500x500.jpg?v=1549715940",
                  "categorie":"toys",
                  "promo":false,
                  "interface":1,
                  "desc":"les 3 produit vendu a la meme prix "
                   },
                 {
                  "id":"pl",
                  "nom":"Hermes cat ",
                  "stock":"20",
                  "invalide":true,
                  "photo":"https://5.imimg.com/data5/OI/EO/GU/SELLER-6476813/dog-collar-250x250.jpg",
                  "categorie":"toys",
                  "promo":true,
                  "interface":2,
                  "desc":"les 3 produit vendu a la meme prix "
                   },

                   {
                    "id":"p54",
                    "nom":"Hermes cat ",
                    "stock":"20",
                    "invalide":true,
                    "photo":"https://5.imimg.com/data5/OI/EO/GU/SELLER-6476813/dog-collar-250x250.jpg",
                    "categorie":"shampo",
                    "promo":true,
                    "interface":2,
                    "desc":"les 3 produit vendu a la meme prix "
                     },

                     
                   {
                    "id":"p54",
                    "nom":"Hermes cat ",
                    "stock":"20",
                    "invalide":true,
                    "photo":"https://5.imimg.com/data5/OI/EO/GU/SELLER-6476813/dog-collar-250x250.jpg",
                    "categorie":"access",
                    "promo":true,
                    "interface":2,
                    "desc":"les 3 produit vendu a la meme prix "
                     },

                     
                   {
                    "id":"p54",
                    "nom":"Hermes cat ",
                    "stock":"20",
                    "invalide":true,
                    "photo":"https://5.imimg.com/data5/OI/EO/GU/SELLER-6476813/dog-collar-250x250.jpg",
                    "categorie":"shampo",
                    "promo":true,
                    "interface":2,
                    "desc":"les 3 produit vendu a la meme prix "
                     },
                     
                   {
                    "id":"p54",
                    "nom":"Hermes cat ",
                    "stock":"20",
                    "invalide":true,
                    "photo":"https://5.imimg.com/data5/OI/EO/GU/SELLER-6476813/dog-collar-250x250.jpg",
                    "categorie":"access",
                    "promo":true,
                    "interface":2,
                    "desc":"les 3 produit vendu a la meme prix "
                     },
                     
                   {
                    "id":"p54",
                    "nom":"Hermes cat ",
                    "stock":"20",
                    "invalide":true,
                    "photo":"https://5.imimg.com/data5/OI/EO/GU/SELLER-6476813/dog-collar-250x250.jpg",
                    "categorie":"shampo",
                    "promo":true,
                    "interface":2,
                    "desc":"les 3 produit vendu a la meme prix "
                     },
                     
                   {
                    "id":"p54",
                    "nom":"Hermes cat ",
                    "stock":"20",
                    "invalide":true,
                    "photo":"https://5.imimg.com/data5/OI/EO/GU/SELLER-6476813/dog-collar-250x250.jpg",
                    "categorie":"brosse",
                    "promo":true,
                    "interface":2,
                    "desc":"les 3 produit vendu a la meme prix "
                     },

                     
                   {
                    "id":"p54",
                    "nom":"Hermes cat ",
                    "stock":"20",
                    "invalide":true,
                    "photo":"https://5.imimg.com/data5/OI/EO/GU/SELLER-6476813/dog-collar-250x250.jpg",
                    "categorie":"shampo",
                    "promo":true,
                    "interface":2,
                    "desc":"les 3 produit vendu a la meme prix "
                     },
                                                                                  {
                                                                                    "id":"p6",
                                                                                    "nom":"Hermes cat ",
                                                                                    "stock":"20",
                                                                                    "invalide":true,
                                                                                    "photo":"https://buddys.es/386/collar-peruvian-flecha.jpg",
                                                                                    "categorie":"access",
                                                                                    "promo":true,
                                                                                    "interface":2
                                                                                    
                                                                                     },
                                                                                     {
                                                                                       "id":"p6",
                                                                                       "nom":"Hermes cat ",
                                                                                       "stock":"20",
                                                                                       "invalide":true,
                                                                                       "photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7z_aqmNQw1KkSsqQ1nd2B_IG36wf_lUsTBOuuowbOzVy4K2GvLY7JB__7kGc_jNJeao&usqp=CAU",
                                                                                       "categorie":"access",
                                                                                       "promo":true,
                                                                                       "interface":2
                                                                                        },


                                                                                        {
                                                                                          "id":"pl",
                                                                                          "nom":"Hermes cat ",
                                                                                          "stock":"20",
                                                                                          "invalide":true,
                                                                                          "photo":"https://cdn.shopify.com/s/files/1/0133/0125/2153/products/Snapseed_69_300x300.jpg?v=1605228975",
                                                                                          "categorie":"access",
                                                                                          "promo":true,
                                                                                          "interface":2,
                                                                                           },
                                                                                           {
                                                                                            "id":"pl",
                                                                                            "nom":"Hermes cat ",
                                                                                            "stock":"20",
                                                                                            "invalide":true,
                                                                                            "photo":"https://buddys.es/401/collar-peruvian-pikes.jpg",
                                                                                            "categorie":"access",
                                                                                            "promo":true,
                                                                                            "interface":2,
                                                                                             },
                                                                                             {
                                                                                              "id":"pl",
                                                                                              "nom":"Hermes cat ",
                                                                                              "stock":"20",
                                                                                              "invalide":true,
                                                                                              "photo":"https://m.media-amazon.com/images/I/61qUVOaAjnL._AC_SY355_.jpg",
                                                                                              "categorie":"access",
                                                                                              "promo":true,
                                                                                              "interface":2,
                                                                                               },
                                                                                               {
                                                                                                "id":"pl",
                                                                                                "nom":"Hermes cat ",
                                                                                                "stock":"20",
                                                                                                "invalide":true,
                                                                                                "photo":"https://www.naturedog.fr/13389-home_default/croquettes-junior-2818-15-kgs.jpg",
                                                                                                "categorie":"croquette",
                                                                                                "promo":true,
                                                                                                "interface":1,
                                                                                                 },

                                                                                                 {
                                                                                                  "id":"pl",
                                                                                                  "nom":"Hermes cat ",
                                                                                                  "stock":"20",
                                                                                                  "invalide":true,
                                                                                                  "photo":"https://www.naturedog.fr/13387-home_default/croquettes-nature-pro-2616-15-kgs.jpg",
                                                                                                  "categorie":"croquette",
                                                                                                  "promo":true,
                                                                                                  "interface":1,
                                                                                                   },

                                                                                                   {
                                                                                                    "id":"pl",
                                                                                                    "nom":"Hermes cat ",
                                                                                                    "stock":"20",
                                                                                                    "invalide":true,
                                                                                                    "photo":"https://www.naturedog.fr/13383-home_default/croquettes-sans-cereale-durance-pro-2614-15-kgs.jpg",
                                                                                                    "categorie":"croquette",
                                                                                                    "promo":true,
                                                                                                    "interface":1,
                                                                                                     },

                                                                                                     {
                                                                                                      "id":"pl",
                                                                                                      "nom":"Hermes cat ",
                                                                                                      "stock":"20",
                                                                                                      "invalide":true,
                                                                                                      "photo":"https://www.naturedog.fr/34723/croquettes-essentiel-low-grain-chiot-3520-nature-dog-15kg.jpghttps://www.naturedog.fr/37522-home_default/croquettes-essentiel-grain-free-volaille-4020-nature-dog.jpg",
                                                                                                      "categorie":"croquette",
                                                                                                      "promo":true,
                                                                                                      "interface":1,
                                                                                                       },

                                                                                                       {
                                                                                                        "id":"pl",
                                                                                                        "nom":"Hermes cat ",
                                                                                                        "stock":"20",
                                                                                                        "invalide":true,
                                                                                                        "photo":"https://www.naturedog.fr/13388-large_default/croquettes-dog-pro-2818-15-kgs.jpg",
                                                                                                        "categorie":"brosse",
                                                                                                        "promo":true,
                                                                                                        "interface":1,
                                                                                                         },
                                                                                                         {
                                                                                                "id":"pl",
                                                                                                "nom":"Hermes cat ",
                                                                                                "stock":"20",
                                                                                                "invalide":true,
                                                                                                "photo":"https://www.catslove.fr/media/catalog/category/trocken-cl.png",
                                                                                                "categorie":"brosse",
                                                                                                "promo":true,
                                                                                                "interface":1,
                                                                                                 },
                                                                                                 {
                                                                                                  "id":"pl",
                                                                                                  "nom":"Hermes cat ",
                                                                                                  "stock":"20",
                                                                                                  "invalide":true,
                                                                                                  "photo":"https://www.naturedog.fr/40628-home_default/croquettes-essentiel-sterilized-3113-low-grain-nature-dog-15-kg.jpg",
                                                                                                  "categorie":"brosse",
                                                                                                  "promo":true,
                                                                                                  "interface":1,
                                                                                                   },

                                                                                                   {
                                                                                                    "id":"pl",
                                                                                                    "nom":"Hermes cat ",
                                                                                                    "stock":"20",
                                                                                                    "invalide":true,
                                                                                                    "photo":"https://www.cdiscount.com/pdt2/0/9/8/1/300x300/inne5098/rw/nutrivet-croquettes-inne-pour-chat-sterilise-6.jpg",
                                                                                                    "categorie":"brosse",
                                                                                                    "promo":true,
                                                                                                    "interface":1,
                                                                                                     },

                                                                                                     {
                                                                                                      "id":"pl",
                                                                                                      "nom":"Hermes cat ",
                                                                                                      "stock":"20",
                                                                                                      "invalide":true,
                                                                                                      "photo":"https://www.cdiscount.com/pdt2/3/9/9/1/300x300/auc8710974900399/rw/eukanuba-croquettes-pour-chat-sterilise-ou-en-su.jpg",
                                                                                                      "categorie":"brosse",
                                                                                                      "promo":true,
                                                                                                      "interface":1,
                                                                                                       },
                                                                                          
                                                                                        
   
   
   ];

clnt=[
  {
    "id":"1",
    "email":"aminmds@yahoo.fr",
    "mdp":"azertyazerty",
    "vs":"new",


  },
  {
    "id":"2",
    "email":"cherif@gmail.com",
    "mdp":"callmecherif",
    "vs":"new",
    


  },
  {
    "id":"3",
    "email":"mrlolo",
    "mdp":"lionel@orange.fr",
    "vs":"new",
    


  },
  {
    "id":"1",
    "email":"aminmds@yahoo.fr",
    "mdp":"cancantnot",
    "vs":"new",


  },
  {
    "id":"2",
    "email":"cherif@gmail.com",
    "mdp":"romdhan2021",
    "vs":"new",
    


  },
  {
    "id":"3",
    "email":"",
    "mdp":"lionel@orange.fr",
    "vs":"new",
    


  },
  {
    "id":"1",
    "email":"aminmds@yahoo.fr",
    "mdp":"",
    "vs":"new",


  },
  {
    "id":"2",
    "email":"cherif@gmail.com",
    "mdp":"",
    "vs":"new",
    


  },
  {
    "id":"3",
    "email":"",
    "mdp":"lionel@orange.fr",
    "vs":"new",
    


  }
]



   admin=[
  
    {"name":"Cherif",
  "last":"Hamdi",
  "email":"cherifclub123@gmail.com",
  "sexe":"m",
  "mdp":"adminadmin",
  "img":"https://scontent.ftun10-1.fna.fbcdn.net/v/t1.6435-9/101798759_1213136492366762_2888370548851605504_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_ohc=FP933Nsc2G8AX_rwGO1&tn=Ma1nWCYhbUu17zCs&_nc_ht=scontent.ftun10-1.fna&oh=00_AT9xDS1IglaY4FC8-niCKCdvotAYPbw-xl35A_O7srw4yA&oe=6279027A"
  },
  {"name":"aziz",
  "last":"Hamdi",
  "email":"azizhamdi@gmail.com",
  "sexe":"f",
  "mdp":"admin123",
  "img":""
  }
  
  
  ];
   
  dogettoys()
  {
    {
      const l=[]
      
       
       for(var i=0;i<this.js.length;i++)
       {
         if(this.js[i].categorie==="toys")
         {
           l.push(this.js[i]);
           
         }
         
       }
       
       return l;
     }

  }
  getclient()
  {
    return this.clnt;
  }
    doget()
    {
       return this.js;
     }
     info()
     {
        return this.js.length;
     }

     dogetshampo()
     {
      const l=[{
        "id":"p1",
        "nom":"Hermes Hound Leather Dog ",
        "stock":"20",
        "photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7z_aqmNQw1KkSsqQ1nd2B_IG36wf_lUsTBOuuowbOzVy4K2GvLY7JB__7kGc_jNJeao&usqp=CAU",
        "invalide":false,
        "categorie":"shampo",
        "promo":true
     
         }]
      
       
       for(var i=0;i<this.js.length;i++)
       {
         if(this.js[i].categorie==="shampo")
         {
           l.push(this.js[i]);
           
         }
         
       }
       
       return l;
     }
     dogetacess()
     {
      const l=[]
      
       
       for(var i=0;i<this.js.length;i++)
       {
         if(this.js[i].categorie==="accessoire")
         {
           l.push(this.js[i]);
           
         }
         
       }
       
       return l;
     }


     dogetbrosse()
     {
      const l=[]
      
       
       for(var i=0;i<this.js.length;i++)
       {
         if(this.js[i].categorie==="brosse")
         {
           l.push(this.js[i]);
           
         }
         
       }
       
       return l;
     }

     dogetacess2()
    
      {
        const l=[]
        
         
         for(var i=0;i<this.js.length;i++)
         {
           if((this.js[i].categorie==="access")&&(this.js[i].interface==2))
           {
             l.push(this.js[i]);
             
           }
           
         }
         
         return l;
       }
  
     

     dogetaccess1()
     {
      const l=[]
      
       
       for(var i=0;i<this.js.length;i++)
       {
         if((this.js[i].categorie==="access")&&(this.js[i].interface==1))
         {
           l.push(this.js[i]);
           
         }
         
       }
       
       return l;
     }


     dogetcroquette1()
     {
      const l=[]
      
       
       for(var i=0;i<this.js.length;i++)
       {
         if((this.js[i].categorie==="croquette")&&(this.js[i].interface==1))
         {
           l.push(this.js[i]);
           
         }
         
       }
       
       return l;
     }
 affiche=true;
     srch(c:any)
     {
       c=c.replace(/ /g,"")
      const l=[]
      
       
      for(var i=0;i<this.js.length;i++)
      { 
        var bol2=true;
        var ch=this.js[i].nom.replace(/ /g,"");
        var ch2=this.js[i].categorie.replace(/ /g,"");
        var bol=true;
        for(var j=0;j<c.length;j++)
        {
          if((ch[j])!=c[j])
          {
            bol=false;
          }

        }
        for(var j=0;j<c.length;j++)
        {
          if((ch2[j])!=c[j])
          {
            bol2=false;
            this.affiche=true;
          }
          else{
            this.affiche=false;
          }

        }



        if((bol==true)||(bol2==true))
        {
           l.push(this.js[i]);
        }
        
      }
      
      return l;
     }

facteure=[{
  "idprd":"p1",
 "name":"access",
  "quantite":4,
  "price":"25",
  "photo":"https://www.naturedog.fr/40628-home_default/croquettes-essentiel-sterilized-3113-low-grain-nature-dog-15-kg.jpg"

},
{
  "idprd":"p2",
 "name":"access",
  "quantite":4,
  "price":"25",
  "photo":"https://5.imimg.com/data5/OI/EO/GU/SELLER-6476813/dog-collar-250x250.jpg",


},
{
  "idprd":"p3",
 "name":"access",
  "quantite":4,
  "price":"25",
  "photo":"https://i.etsystatic.com/23106293/r/il/5ae510/2435661271/il_340x270.2435661271_s9gs.jpg",


},
{
  "idprd":"p4",
 "name":"access",
  "quantite":4,
  "price":"25",
  "photo":"https://5.imimg.com/data5/OI/EO/GU/SELLER-6476813/dog-collar-250x250.jpg",


}
];




infoadmin()
{
  return this.admin;
}

getachat()
{
  return this.facteure;
}


 getadmin()
{
  return [{"nom":"cherif",
"prenom":"Hamdi",
"statut":"admin",


},{"nom":"aziz",
"prenom":"Hamdi",
"statut":"admin",


},{"nom":"mahmoud",
"prenom":"Hamdi",
"statut":"admin",


},{"nom":"amel",
"prenom":"Hamdi",
"statut":"admin",


},{"nom":"samia",
"prenom":"Hamdi",
"statut":"admin",


},{"nom":"amel",
"prenom":"Hamdi",
"statut":"admin",


},{"nom":"samia",
"prenom":"Hamdi",
"statut":"admin",


}]
}




 }


