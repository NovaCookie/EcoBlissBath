## Pour commencer ##

# Qui ? 
Eco Bliss Bath.  
Eco Bliss Bath est une start-up de 20 personnes, spécialisée dans la vente de produits de beauté éco-responsables dont le produit principal est un savon solide.

# Quoi ?
Automatisation des tests pour le projet de site de vente de Eco Bliss Bath.

# Comment ? 
Utilisation de cypress pour automatiser les tests

## Prérequis ##
Il est nécessaire d'avoir Docker, Node.js, NPM, Cypress et un navigateur (Chrome ou Firefox recommandés) pour lancer le projet.

# Procédure pour l'exécution du projet

1. Choisir le dossier dans lequel mettre le projet :
2. Tapez la commande suivante pour cloner le projet:

git clone [git@github.com:NovaCookie/Projet10.git](git@github.com:NovaCookie/Projet10.git)

3. Lancer de Backend:
-Accédez au dossier du projet.
-Ouvrez un terminal de commande.
-Tapez la commande suivante:
docker-compose up

4. Lancer le Frontend:
-Accédez au dossier du projet.
-Ouvrez un terminal de commande.
-Tapez les commandes suivantes :

npm install
npm start

## Lancer les tests ##

1. Installer Cypress:
-Lancer votre IDE (ex: Visual Studio Code).  
-Ouvrez le dossier frontend du projet  dans votre IDE.  
-Lancer un terminale dans l'IDE.  
-Tapez la commande suivante dans le terminale :  
npm install cypress --save-dev

2. Ouvrir Cypress et lancer les tests:
Dans le terminal, tapez la commande suivante :  
npx cypress open

## Autres information ##

1. Jeu de données :  
Identifiant: test2@test.fr  
Mot de passe: testtest

2. APi :  
lien Swagger : http://localhost:8081/api/doc

3. Site web:  
Lien : http://localhost:8081/api/propertie

-----------------------------------------------
Auteurs    
CARTEAU Nathan

