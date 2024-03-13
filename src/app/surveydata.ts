export const surveyJson = {
    "title": "ZARZIS ROBOTS 2.0",
    "description": "CYBER PARC ZARZIS",
    "logo": "/ajiz-logo.png",
    "logoWidth": "auto",
    "logoHeight": "80",
    "completedHtml": "<div style=\"max-width:688px;text-align:center;margin: 16px auto;\">\n\n<div style=\"padding:0 24px;\">\n<h4>Votre inscription a été retenue.</h4>\n<br>\n<p>Nous allons vous contacter bientôt.</p>\n</div>\n\n</div>\n",
    "pages": [
     {
      "name": "team",
      "elements": [
       {
        "type": "text",
        "name": "team-name",
        "width": "30%",
        "minWidth": "200px",
        "titleLocation": "hidden",
        "description": "Nom de l'équipe",
        "descriptionLocation": "underInput",
        "isRequired": true,
        "validators": [],
        "placeholder": "Nom de l'équipe"
       },
       {
        "type": "text",
        "name": "robot-name",
        "width": "30%",
        "minWidth": "200px",
        "startWithNewLine": false,
        "titleLocation": "hidden",
        "description": "Nom du Robot",
        "descriptionLocation": "underInput",
        "isRequired": true,
        "validators": [],
        "placeholder": "Nom du Robot"
       },
       {
        "type": "imagepicker",
        "name": "origin",
        "useDisplayValuesInDynamicTexts": false,
        "width": "74%",
        "minWidth": "256px",
        "title": "Origine",
        "isRequired": true,
        "choices": [
         {
          "value": "benguerdane",
          "text": "Ben Guerdane",
          "imageLink": "/benguerdane.png"
         },
         {
          "value": "djerba",
          "text": "Djerba",
          "imageLink": "/djerba.png"
         },
         {
          "value": "medenine",
          "text": "Medenine",
          "imageLink": "/medenine.png"
         },
         {
          "value": "zarzis",
          "text": "Zarzis",
          "imageLink": "/zarzis.png"
         }
        ],
        "choicesOrder": "random",
        "imageFit": "cover",
        "minImageWidth": 150,
        "minImageHeight": 150,
        "maxImageWidth": 200,
        "showLabel": true
       },
       {
        "type": "matrixdynamic",
        "name": "members",
        "title": "Participants",
        "isRequired": true,
        "columns": [
         {
          "name": "name",
          "title": "Nom et Prénom",
          "cellType": "text",
          "placeholder": "Nom et Prénom",
          "isRequired": true,
          "isUnique": true
         },
         {
          "name": "phone",
          "title": "Numéro de téléphone",
          "cellType": "text",
          "inputType": "tel",
          "isRequired": true,
          "placeholder": "(+216) 12 345 678"
         },
         {
          "name": "Email",
          "title": "Email",
          "cellType": "text",
          "isRequired": true,
          "inputType": "email",
          "placeholder": "user@example.com"
         },
         {
          "isRequired": true,
          "name": "birth-date",
          "title": "Date de naissance",
          "cellType": "text",
          "inputType": "date",
          "min": "2006-01-01",
          "max": "2018-01-01"
         }
        ],
        "choices": [
         1,
         2,
         3,
         4,
         5
        ],
        "cellType": "text",
        "rowCount": 1,
        "minRowCount": 1,
        "maxRowCount": 3,
        "addRowText": "Ajouter un autre participant",
        "removeRowText": "Supprimer",
        "allowRowsDragAndDrop": true
       },
       {
        "type": "dropdown",
        "name": "payment",
        "isRequired": true,
        "title": "Méthode de Paiement",
        "choices": [
         {
          "value": "cash",
          "text": "Espèce"
         },
         {
          "value": "bank",
          "text": "Virement Bancaire"
         },
         {
          "value": "d17",
          "text": "Virement D17"
         }
        ]
       },
       {
        "type": "html",
        "name": "rib",
        "visibleIf": "{payment} = 'bank'",
        "title": "RIB",
        "readOnly": true,
        "html": "<strong>Merci de noter notre RIB pour effectuer le paiement:</strong> <p>03 051 1830101000067 82</p>"
       },
       {
        "type": "html",
        "name": "d17",
        "visibleIf": "{payment} = 'd17'",
        "title": "D17",
        "readOnly": true,
        "html": "<strong>Merci de noter notre D17 pour effectuer le paiement:</strong> <p>26405096</p>"
       }
      ]
     }
    ],
    "showPrevButton": false,
    "showQuestionNumbers": "off",
    "questionErrorLocation": "bottom",
    "completeText": "Enregister",
    "widthMode": "static",
    "width": "904"
   };
  