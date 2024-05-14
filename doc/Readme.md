C'est une application Angular (front) qui effectue des appeles https  pour assure la gestion des produits.

Elle utilise une api pour Lister, Ajouter, Modifier, Supprimer des produits 
Par défaut, elle est connectée au fichier product.json dans le dossier assets , pour utiliser l'api il faut lancer le back et consulter la documenttation de l'api dans le dossier doc du projet altenshoback

1. L'instalation du projet avec docker s'effectue avec la commande docker build -t altenfront . up depuis le dossier racine du projet
2. Pour executer le projet, utiliser la commade docker run -p 4200:4200 altenfront
