# TP Noté
Vous devez modifier votre API pour prendre en compte ces deux fonctionnalités :
- Elle doit permettre de gérer les ressources `Users`
- Les lists doivent forcément appartenir à un utilisateur

Afin de vous guider, la documentation de l'API est à jour.

## Users
- Un utilisateur ne peut être créé sans mot de passe. Celui ci doit être chiffré avant d'être insérer dans la base de donnée.
- Si un utilisateur rentre son prénom, il doit obligatoirement saisir son nom de famille. A l'inverse si il rentre son nom de famille, le prénom est obligatoire. L'un ne peut pas exister sans l'autre.
- L'adresse email doit être unique. Vous devez donc vérifier si un autre utilisateur ne possède pas la même adresse avant de le créer.
- Le mot de passe est une donnée sensible (même chiffrée), vous devez donc supprimer cette donnée dans toutes les réponses de votre API (y compris les listes).

## Listes
- Les listes ne peuvent plus être créés sans avoir un userId attaché.
- Cet utilisateur doit exister. Ce qui veut dire que l'on ne peut plus créer de liste si aucun utilisateur existe.

## Temps & Conditions
- Vous disposez de **3h**.
- Vous pouvez vous servir de tout ce que nous avons fait durant cette semaine ainsi que d'internet.
- Vous devez réaliser ce TP individuellement.

## Rendu
Vous devez forker ce repo github et pusher dessus. Toutes les dates des commits doivent être antérieure à l'heure de fin du TP, dans le cas contraire, cela sera considéré comme triche et vous serez pénalisé.

Afin de tester votre rendu je suiverai à la lettre le processus d'installation du README.md, pensez donc à le mettre à jour si des changements sont à préciser et à bien sauvegarder vos modules dans le `package.json`.

## Note
- Le code permettant de supprimer les informations sensible d'un utilisateur doit être fait dans un helper et il doit être testé.
- Afin de chiffrer le mot de passe vous pouvez utiliser le plugin [bcrypt](https://www.npmjs.com/package/bcrypt)
- Documentation de [object delete](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_delete)
