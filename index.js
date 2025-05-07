// Serve an object with this structure in order to generate a quiz page
// The `correct` key is referential and should not be served
const quiz = {
    "name": "Psychology Quiz",
    "questions": [
        {
            "type": "single",
            "question": "Je suis souvent critique envers moi-même lorsque je fais une erreur",
            "answers": ["Pas du tout", "Pas vraiment", "Plus ou moins", "Oui", "Absolument"],
            "entered": [],
            "trait": [null, [1]],
            "correct": ""
        },
        {
            "type": "single",
            "question": "Je cherche constamment à améliorer ce que je fais",
            "answers": ["Pas du tout", "Pas vraiment", "Plus ou moins", "Oui", "Absolument"],
            "entered": [],
            "trait": [null, [1]],
            "correct": ""
        },
        {
            "type": "single",
            "question": "Je ne me sens pas responsable de corriger ce qui ne va pas autour de moi",
            "answers": ["Pas du tout", "Pas vraiment", "Plus ou moins", "Oui", "Absolument"],
            "entered": [],
            "trait": [[1, 8], null],
            "correct": ""
        },
        {
            "type": "single",
            "question": "Il m’arrive de me frustrer quand les autres ne respectent pas les règles",
            "answers": ["Pas du tout", "Pas vraiment", "Plus ou moins", "Oui", "Absolument"],
            "entered": [],
            "trait": [null, [1]],
            "correct": ""
        },
        {
            "type": "single",
            "question": "J'ai du mal à dire non quand quelqu’un a besoin de moi",
            "answers": ["Pas du tout", "Pas vraiment", "Plus ou moins", "Oui", "Absolument"],
            "entered": [],
            "trait": [null, [2]],
            "correct": ""
        },
        {
            "type": "single",
            "question": "Je me sens utile quand on reconnaît ce que je fais pour les autres",
            "answers": ["Pas du tout", "Pas vraiment", "Plus ou moins", "Oui", "Absolument"],
            "entered": [],
            "trait": [null, [2]],
            "correct": ""
        },
        {
            "type": "single",
            "question": "Je peux parfois oublier mes propres besoins pour aider les autre",
            "answers": ["Pas du tout", "Pas vraiment", "Plus ou moins", "Oui", "Absolument"],
            "entered": [],
            "trait": [null, [2, 9]],
            "correct": ""
        },
        {
            "type": "single",
            "question": "Il faut donner en premier pour recevoir en retour",
            "answers": ["Pas du tout", "Pas vraiment", "Plus ou moins", "Oui", "Absolument"],
            "entered": [],
            "trait": [null, [2]],
            "correct": ""
        },
        {
            "type": "single",
            "question": "J’ai toujours besoin d’avoir un objectif à atteindre",
            "answers": ["Pas du tout", "Pas vraiment", "Plus ou moins", "Oui", "Absolument"],
            "entered": [],
            "trait": [null, [3]],
            "correct": ""
        },
        {
            "type": "single",
            "question": "Je préfère mentir qu’admettre un échec",
            "answers": ["Pas du tout", "Pas vraiment", "Plus ou moins", "Oui", "Absolument"],
            "entered": [],
            "trait": [null, [3]],
            "correct": ""
        },
        {
            "type": "single",
            "question": "Il est important pour moi de réussir et d’être reconnu",
            "answers": ["Pas du tout", "Pas vraiment", "Plus ou moins", "Oui", "Absolument"],
            "entered": [],
            "trait": [null, [3]],
            "correct": "" },
        {
            "type": "single",
            "question": "Je me définis beaucoup à travers ce que je fais et ce que j’accomplis",
            "answers": ["Pas du tout", "Pas vraiment", "Plus ou moins", "Oui", "Absolument"],
            "entered": [],
            "trait": [null, [3]],
            "correct": ""
        },
        {
            "type": "single",
            "question": "Je n'ai pas besoin d'être productif pour me détendre",
            "answers": ["Pas du tout", "Pas vraiment", "Plus ou moins", "Oui", "Absolument"],
            "entered": [],
            "trait": [[1, 3], null],
            "correct": ""
        },
        {
            "type": "single",
            "question": "J’ai l’impression d’être différent des autres, parfois même incompris",
            "answers": ["Pas du tout", "Pas vraiment", "Plus ou moins", "Oui", "Absolument"],
            "entered": [],
            "trait": [null, [4]],
            "correct": ""
        },
        {
            "type": "single",
            "question": "Mes émotions sont très intenses et peuvent changer rapidement",
            "answers": ["Pas du tout", "Pas vraiment", "Plus ou moins", "Oui", "Absolument"],
            "entered": [],
            "trait": [null, [4]],
            "correct": ""
        },
        {
            "type": "single",
            "question": "Je ressens parfois un vide intérieur",
            "answers": ["Pas du tout", "Pas vraiment", "Plus ou moins", "Oui", "Absolument"],
            "entered": [],
            "trait": [null, [4]],
            "correct": ""
        },
        {
            "type": "single",
            "question": "Je cherche un sens profond à ce que je vis",
            "answers": ["Pas du tout", "Pas vraiment", "Plus ou moins", "Oui", "Absolument"],
            "entered": [],
            "trait": [null, [4]],
            "correct": ""
        },
        {
            "type": "single",
            "question": "J’ai besoin de beaucoup de temps seul pour réfléchir",
            "answers": ["Pas du tout", "Pas vraiment", "Plus ou moins", "Oui", "Absolument"],
            "entered": [],
            "trait": [null, [5]],
            "correct": ""
        },
        {
            "type": "single",
            "question": "Je préfère observer plutôt que participer activement en groupe",
            "answers": ["Pas du tout", "Pas vraiment", "Plus ou moins", "Oui", "Absolument"],
            "entered": [],
            "trait": [null, [5]],
            "correct": ""
        },
        {
            "type": "single",
            "question": "J’ai souvent l’impression que mes ressources (temps, énergie) sont limitées",
            "answers": ["Pas du tout", "Pas vraiment", "Plus ou moins", "Oui", "Absolument"],
            "entered": [],
            "trait": [null, [5]],
            "correct": ""
        },
        {
            "type": "single",
            "question": "Je préfère comprendre quelque chose en profondeur avant d’agir",
            "answers": ["Pas du tout", "Pas vraiment", "Plus ou moins", "Oui", "Absolument"],
            "entered": [],
            "trait": [null, [5]],
            "correct": ""
        },
        {
            "type": "single",
            "question": "Je me connecte facilement aux autres",
            "answers": ["Pas du tout", "Pas vraiment", "Plus ou moins", "Oui", "Absolument"],
            "entered": [],
            "trait": [[5], null],
            "correct": ""
        },
        {
            "type": "single",
            "question": "Je suis souvent préoccupé par ce qui pourrait mal tourner",
            "answers": ["Pas du tout", "Pas vraiment", "Plus ou moins", "Oui", "Absolument"],
            "entered": [],
            "trait": [null, [6]],
            "correct": ""
        },
        {
            "type": "single",
            "question": "J’ai besoin de repères ou de personnes en qui je peux avoir confiance",
            "answers": ["Pas du tout", "Pas vraiment", "Plus ou moins", "Oui", "Absolument"],
            "entered": [],
            "trait": [null, [6]],
            "correct": ""
        },
        {
            "type": "single",
            "question": "Je peux être à la fois méfiant et très fidèle envers les personnes que j’estime",
            "answers": ["Pas du tout", "Pas vraiment", "Plus ou moins", "Oui", "Absolument"],
            "entered": [],
            "trait": [null, [6]],
            "correct": ""
        },
        {
            "type": "single",
            "question": "Je considère la loyauté comme une des qualités les plus importante",
            "answers": ["Pas du tout", "Pas vraiment", "Plus ou moins", "Oui", "Absolument"],
            "entered": [],
            "trait": [null, [6]],
            "correct": ""
        },
        {
            "type": "single",
            "question": "Je dois tout planifier pour me sentir en sécurité",
            "answers": ["Pas du tout", "Pas vraiment", "Plus ou moins", "Oui", "Absolument"],
            "entered": [],
            "trait": [null, [6]],
            "correct": ""
        },
        {
            "type": "single",
            "question": "J'aime la routine et n'ai pas besoin de nouvelles expériences pour m'épanouir",
            "answers": ["Pas du tout", "Pas vraiment", "Plus ou moins", "Oui", "Absolument"],
            "entered": [],
            "trait": [[4, 7], null],
            "correct": ""
        },
        {
            "type": "single",
            "question": "Je préfère éviter les émotions désagréables ou les conflits",
            "answers": ["Pas du tout", "Pas vraiment", "Plus ou moins", "Oui", "Absolument"],
            "entered": [],
            "trait": [null, [7, 9]],
            "correct": ""
        },
        {
            "type": "single",
            "question": "Quand quelque chose devient ennuyeux ou négatif, je passe à autre chose",
            "answers": ["Pas du tout", "Pas vraiment", "Plus ou moins", "Oui", "Absolument"],
            "entered": [],
            "trait": [null, [7]],
            "correct": ""
        },
        {
            "type": "single",
            "question": "Je n'ai pas de difficulté à rester concentré sur une seule chose",
            "answers": ["Pas du tout", "Pas vraiment", "Plus ou moins", "Oui", "Absolument"],
            "entered": [],
            "trait": [[7], null],
            "correct": ""
        },
        {
            "type": "single",
            "question": "Je ne supporte pas l’injustice, je réagis rapidement face à elle",
            "answers": ["Pas du tout", "Pas vraiment", "Plus ou moins", "Oui", "Absolument"],
            "entered": [],
            "trait": [null, [8]],
            "correct": ""
        },
        {
            "type": "single",
            "question": "Je préfère diriger que me laisser diriger",
            "answers": ["Pas du tout", "Pas vraiment", "Plus ou moins", "Oui", "Absolument"],
            "entered": [],
            "trait": [null, [3, 8]],
            "correct": ""
        },
        {
            "type": "single",
            "question": "Je me sens mieux quand je garde le contrôle dans une situation",
            "answers": ["Pas du tout", "Pas vraiment", "Plus ou moins", "Oui", "Absolument"],
            "entered": [],
            "trait": [null, [8]],
            "correct": ""
        },
        {
            "type": "single",
            "question": "Je n'ai pas de difficulté à montrer mes faiblesses",
            "answers": ["Pas du tout", "Pas vraiment", "Plus ou moins", "Oui", "Absolument"],
            "entered": [],
            "trait": [[8], null],
            "correct": ""
        },
        {
            "type": "single",
            "question": "Je suis direct·e, franc·he et parfois intimidant·e",
            "answers": ["Pas du tout", "Pas vraiment", "Plus ou moins", "Oui", "Absolument"],
            "entered": [],
            "trait": [null, [8]],
            "correct": ""
        },
        {
            "type": "single",
            "question": "Je fais souvent des compromis pour préserver la paix autour de moi",
            "answers": ["Pas du tout", "Pas vraiment", "Plus ou moins", "Oui", "Absolument"],
            "entered": [],
            "trait": [null, [9]],
            "correct": ""
        },
        {
            "type": "single",
            "question": "Je suis dans l’acceptation, même avec les idéaux que je ne partage pas",
            "answers": ["Pas du tout", "Pas vraiment", "Plus ou moins", "Oui", "Absolument"],
            "entered": [],
            "trait": [null, [9]],
            "correct": ""
        },
        {
            "type": "single",
            "question": "Je repousse souvent mes travaux au lendemain quand c'est trop tendu",
            "answers": ["Pas du tout", "Pas vraiment", "Plus ou moins", "Oui", "Absolument"],
            "entered": [],
            "trait": [null, [9]],
            "correct": ""
        },
        {
            "type": "single",
            "question": "Je possède une force tranquille, une présence apaisante",
            "answers": ["Pas du tout", "Pas vraiment", "Plus ou moins", "Oui", "Absolument"],
            "entered": [],
            "trait": [null, [9]],
            "correct": ""
        }
    ],
    "questions-diff" : [
        {"type": "single", "question": "Préférez-vous corriger les défauts des autres ou les combler affectivement ?", "answers": ["Corriger les défauts ", "Combler affectivement "], "entered": [], "trait": [1, 2], "correct": ""},
        {"type": "single", "question": "Vous sentez-vous motivé par l'amélioration morale ou par le fait de plaire et d’aider ?", "answers": ["Amélioration morale ", "Faire plaisir et aider "], "entered": [], "trait": [1, 2], "correct": ""},

        {"type": "single", "question": "Votre priorité est-elle de faire les choses « bien » ou d’atteindre l’objectif ?", "answers": ["Faire les choses bien ", "Atteindre l'objectif "], "entered": [], "trait": [1, 3], "correct": ""},
        {"type": "single", "question": "Avez-vous besoin que votre travail soit moralement juste ou publiquement reconnu ?", "answers": ["Moralement juste ", "Publiquement reconnu "], "entered": [], "trait": [1, 3], "correct": ""},

        {"type": "single", "question": "Votre idéalisme est-il tourné vers des valeurs universelles ou vers votre quête personnelle ?", "answers": ["Valeurs universelles ", "Quête personnelle "], "entered": [], "trait": [1, 4], "correct": ""},
        {"type": "single", "question": "Contrôlez-vous vos émotions ou vivez-vous des hauts et bas émotionnels ?", "answers": ["Contrôle des émotions ", "Hauts et bas émotionnels "], "entered": [], "trait": [1, 4], "correct": ""},

        {"type": "single", "question": "Êtes-vous préoccupé par faire les choses correctement ou par comprendre en profondeur ?", "answers": ["Faire correctement ", "Comprendre en profondeur "], "entered": [], "trait": [1, 5], "correct": ""},
        {"type": "single", "question": "Vous fiez-vous plus à des règles morales ou à l’analyse rationnelle ?", "answers": ["Règles morales ", "Analyse rationnelle "], "entered": [], "trait": [1, 5], "correct": ""},

        {"type": "single", "question": "Évitez-vous les erreurs par souci moral ou par anticipation du danger ?", "answers": ["Souci moral ", "Anticipation du danger "], "entered": [], "trait": [1, 6], "correct": ""},
        {"type": "single", "question": "Corrigez-vous pour atteindre la perfection ou pour éviter les risques ?", "answers": ["Atteindre la perfection ", "Éviter les risques "], "entered": [], "trait": [1, 6], "correct": ""},

        {"type": "single", "question": "Avez-vous tendance à être modéré et responsable ou à chercher plaisir et variété ?", "answers": ["Modéré et responsable ", "Plaisir et variété "], "entered": [], "trait": [1, 7], "correct": ""},
        {"type": "single", "question": "Visez-vous l’ordre et la structure ou la spontanéité et la liberté ?", "answers": ["Ordre et structure ", "Spontanéité et liberté "], "entered": [], "trait": [1, 7], "correct": ""},

        {"type": "single", "question": "Réprimez-vous votre colère et vos envies ou les exprimez-vous immédiatement ?", "answers": ["Réprimer ", "Exprimer immédiatement "], "entered": [], "trait": [1, 8], "correct": ""},
        {"type": "single", "question": "Êtes-vous retenu et autocritique ou direct et affirmé ?", "answers": ["Retenu et autocritique ", "Direct et affirmé "], "entered": [], "trait": [1, 8], "correct": ""},

        {"type": "single", "question": "Voulez-vous que les autres changent ou préférez-vous vous adapter ?", "answers": ["Vouloir que les autres changent ", "S'adapter "], "entered": [], "trait": [1, 9], "correct": ""},
        {"type": "single", "question": "Êtes-vous rigide sur vos principes ou conciliant sur les différences ?", "answers": ["Rigide sur les principes ", "Conciliant "], "entered": [], "trait": [1, 9], "correct": ""},

        {"type": "single", "question": "Cherchez-vous l’affection en donnant ou l’admiration en réussissant ?", "answers": ["Affection en donnant ", "Admiration en réussissant "], "entered": [], "trait": [2, 3], "correct": ""},
        {"type": "single", "question": "Êtes-vous motivé par l’amour des autres ou par l’image d’efficacité ?", "answers": ["Amour des autres ", "Image d'efficacité "], "entered": [], "trait": [2, 3], "correct": ""},

        {"type": "single", "question": "Êtes-vous centré sur ce que ressent l’autre ou sur votre ressenti intérieur ?", "answers": ["Centré sur l'autre ", "Centré sur soi "], "entered": [], "trait": [2, 4], "correct": ""},
        {"type": "single", "question": "Avez-vous tendance à vous oublier pour autrui ou à revendiquer votre singularité ?", "answers": ["S'oublier pour autrui ", "Revendiquer sa singularité "], "entered": [], "trait": [2, 4], "correct": ""},

        {"type": "single", "question": "Êtes-vous disponible en permanence pour les autres ou seulement par moments choisis ?", "answers": ["Toujours disponible ", "Moments choisis "], "entered": [], "trait": [2, 5], "correct": ""},
        {"type": "single", "question": "Vous rechargez-vous auprès des autres ou seul ?", "answers": ["Auprès des autres ", "Seul "], "entered": [], "trait": [2, 5], "correct": ""},

        {"type": "single", "question": "Vous sentez-vous indispensable aux autres ou protégé par la loyauté ?", "answers": ["Indispensable ", "Protégé par loyauté "], "entered": [], "trait": [2, 6], "correct": ""},
        {"type": "single", "question": "Cherchez-vous l’amour par le don ou la sécurité par la fidélité ?", "answers": ["Amour par le don ", "Sécurité par la fidélité "], "entered": [], "trait": [2, 6], "correct": ""},

        {"type": "single", "question": "Vous adaptez-vous pour plaire ou choisissez-vous vos relations selon vos envies ?", "answers": ["Adapter pour plaire ", "Choisir selon envies "], "entered": [], "trait": [2, 7], "correct": ""},
        {"type": "single", "question": "Êtes-vous tourné vers les besoins des autres ou vers vos propres désirs ?", "answers": ["Besoins des autres ", "Propres désirs "], "entered": [], "trait": [2, 7], "correct": ""},

        {"type": "single", "question": "Vous adaptez-vous pour plaire ou imposez-vous votre volonté ?", "answers": ["Adapter pour plaire ", "Imposer sa volonté "], "entered": [], "trait": [2, 8], "correct": ""},
        {"type": "single", "question": "Réprimez-vous vos besoins ou les affirmez-vous haut et fort ?", "answers": ["Réprimer ses besoins ", "Les affirmer haut et fort "], "entered": [], "trait": [2, 8], "correct": ""},

        {"type": "single", "question": "Oubliez-vous vos besoins en aidant activement ou en acceptant passivement ?", "answers": ["Aider activement ", "Accepter passivement "], "entered": [], "trait": [2, 9], "correct": ""},
        {"type": "single", "question": "Vous imposez-vous pour aider ou vous effacez-vous pour maintenir la paix ?", "answers": ["S'imposer pour aider ", "S'effacer pour la paix "], "entered": [], "trait": [2, 9], "correct": ""},
        {"type": "single", "question": "Voulez-vous être reconnu pour vos accomplissements ou votre originalité ?", "answers": ["Accomplissements ", "Originalité "], "entered": [], "trait": [3, 4], "correct": ""},
        {"type": "single", "question": "Êtes-vous stable émotionnellement ou changeant émotionnellement ?", "answers": ["Stable émotionnellement ", "Changeant émotionnellement "], "entered": [], "trait": [3, 4], "correct": ""},

        {"type": "single", "question": "Êtes-vous toujours dans l’action ou alternez-vous action et retrait ?", "answers": ["Toujours dans l'action ", "Alterner action et retrait "], "entered": [], "trait": [3, 5], "correct": ""},
        {"type": "single", "question": "Préférez-vous agir ou observer avant d’agir ?", "answers": ["Agir ", "Observer avant d'agir "], "entered": [], "trait": [3, 5], "correct": ""},

        {"type": "single", "question": "Visez-vous la reconnaissance publique ou la validation du groupe ?", "answers": ["Reconnaissance publique ", "Validation du groupe "], "entered": [], "trait": [3, 6], "correct": ""},
        {"type": "single", "question": "Avez-vous confiance en vous ou doutez-vous facilement ?", "answers": ["Confiance en soi ", "Doute facilement "], "entered": [], "trait": [3, 6], "correct": ""},

        {"type": "single", "question": "Vous motivez-vous par le succès reconnu ou par l’accumulation d’expériences ?", "answers": ["Succès reconnu ", "Accumulation d'expériences "], "entered": [], "trait": [3, 7], "correct": ""},
        {"type": "single", "question": "Préférez-vous atteindre un objectif clair ou explorer plusieurs options ?", "answers": ["Atteindre objectif clair ", "Explorer options "], "entered": [], "trait": [3, 7], "correct": ""},

        {"type": "single", "question": "Changez-vous d’avis pour réussir ou restez-vous ferme sur vos positions ?", "answers": ["Changer d'avis ", "Rester ferme "], "entered": [], "trait": [3, 8], "correct": ""},
        {"type": "single", "question": "Vous ajustez-vous stratégiquement ou vous imposez-vous frontalement ?", "answers": ["S'ajuster stratégiquement ", "S'imposer frontalement "], "entered": [], "trait": [3, 8], "correct": ""},

        {"type": "single", "question": "Vivez-vous à un rythme rapide et orienté résultat ou lent et sans confrontation ?", "answers": ["Rapide et résultat ", "Lent et sans confrontation "], "entered": [], "trait": [3, 9], "correct": ""},
        {"type": "single", "question": "Priorisez-vous les objectifs ou l’harmonie ?", "answers": ["Objectifs ", "Harmonie "], "entered": [], "trait": [3, 9], "correct": ""},

        {"type": "single", "question": "Vivez-vous des émotions intenses ou les mettez-vous à distance ?", "answers": ["Émotions intenses ", "Mettre à distance "], "entered": [], "trait": [4, 5], "correct": ""},
        {"type": "single", "question": "Avez-vous besoin d’exprimer vos sentiments ou de les contenir ?", "answers": ["Exprimer sentiments ", "Contenir sentiments "], "entered": [], "trait": [4, 5], "correct": ""},

        {"type": "single", "question": "Remettez-vous en cause les règles par émotions ou par peur d’erreur ?", "answers": ["Remettre en cause par émotions ", "Remettre en cause par peur d'erreur "], "entered": [], "trait": [4, 6], "correct": ""},
        {"type": "single", "question": "Résistez-vous par rébellion émotionnelle ou par méfiance ?", "answers": ["Rébellion émotionnelle ", "Méfiance "], "entered": [], "trait": [4, 6], "correct": ""},

        {"type": "single", "question": "Cherchez-vous l’intensité des émotions tristes ou la joie d’éviter ces émotions ?", "answers": ["Intensité émotions tristes ", "Joie d'éviter émotions "], "entered": [], "trait": [4, 7], "correct": ""},
        {"type": "single", "question": "Vous sentez-vous à l’aise avec la mélancolie ou la fuyez-vous ?", "answers": ["À l'aise mélancolie ", "Fuir mélancolie "], "entered": [], "trait": [4, 7], "correct": ""},

        {"type": "single", "question": "Vous laissez-vous submerger par vos émotions ou les dépassez-vous par l’action ?", "answers": ["Submergé par émotions ", "Dépassez par action "], "entered": [], "trait": [4, 8], "correct": ""},
        {"type": "single", "question": "Exprimez-vous votre vulnérabilité ou la cachez-vous sous la force ?", "answers": ["Exprimer vulnérabilité ", "Cacher vulnérabilité "], "entered": [], "trait": [4, 8], "correct": ""},

        {"type": "single", "question": "Vous sentez-vous unique et à part ou semblable et proche des autres ?", "answers": ["Unique et à part ", "Semblable et proche "], "entered": [], "trait": [4, 9], "correct": ""},
        {"type": "single", "question": "Vous recherchez l’intensité émotionnelle ou la paix intérieure ?", "answers": ["Intensité émotionnelle ", "Paix intérieure "], "entered": [], "trait": [4, 9], "correct": ""},

        {"type": "single", "question": "Protégez-vous votre espace par retrait ou par vigilance ?", "answers": ["Par retrait ", "Par vigilance "], "entered": [], "trait": [5, 6], "correct": ""},
        {"type": "single", "question": "Préférez-vous analyser seul ou vérifier collectivement ?", "answers": ["Analyser seul ", "Vérifier collectivement "], "entered": [], "trait": [5, 6], "correct": ""},

        {"type": "single", "question": "Réduisez-vous vos besoins au minimum ou multipliez-vous vos projets ?", "answers": ["Réduire besoins ", "Multiplier projets "], "entered": [], "trait": [5, 7], "correct": ""},
        {"type": "single", "question": "Préférez-vous économiser votre énergie ou la dépenser pleinement ?", "answers": ["Économiser énergie ", "Dépenser énergie "], "entered": [], "trait": [5, 7], "correct": ""},

        {"type": "single", "question": "Défendez-vous votre espace par retrait ou par prise de pouvoir ?", "answers": ["Défendre par retrait ", "Défendre par pouvoir "], "entered": [], "trait": [5, 8], "correct": ""},
        {"type": "single", "question": "Préférez-vous observer à distance ou agir directement ?", "answers": ["Observer à distance ", "Agir directement "], "entered": [], "trait": [5, 8], "correct": ""},

        {"type": "single", "question": "Tracez-vous des limites claires ou vous diluez-vous dans l’environnement ?", "answers": ["Tracer limites ", "Se diluer dans environnement "], "entered": [], "trait": [5, 9], "correct": ""},
        {"type": "single", "question": "Préférez-vous rester séparé ou fusionner avec les autres ?", "answers": ["Rester séparé ", "Fusionner avec les autres "], "entered": [], "trait": [5, 9], "correct": ""},

        {"type": "single", "question": "Vous voyez d’abord ce qui pourrait mal tourner ou ce qui pourrait bien arriver ?", "answers": ["Ce qui pourrait mal tourner ", "Ce qui pourrait bien arriver "], "entered": [], "trait": [6, 7], "correct": ""},
        {"type": "single", "question": "Préférez-vous la prudence ou l’optimisme ?", "answers": ["Prudence ", "Optimisme "], "entered": [], "trait": [6, 7], "correct": ""},

        {"type": "single", "question": "Hésitez-vous avant d’agir ou foncez-vous immédiatement ?", "answers": ["Hésiter avant d'agir ", "Foncer immédiatement "], "entered": [], "trait": [6, 8], "correct": ""},
        {"type": "single", "question": "Doutez-vous avant de décider ou décidez-vous instinctivement ?", "answers": ["Douter avant de décider ", "Décider instinctivement "], "entered": [], "trait": [6, 8], "correct": ""},

        {"type": "single", "question": "Vérifiez-vous avant d’agir ou avancez-vous en vous adaptant ?", "answers": ["Vérifier avant d'agir ", "Avancer en adaptant "], "entered": [], "trait": [6, 9], "correct": ""},
        {"type": "single", "question": "Méfiez-vous facilement ou faites-vous confiance par défaut ?", "answers": ["Méfier facilement ", "Faire confiance par défaut "], "entered": [], "trait": [6, 9], "correct": ""},

        {"type": "single", "question": "Évitez-vous les conflits ou les provoquez-vous pour défendre vos idées ?", "answers": ["Éviter conflits ", "Provoquer conflits "], "entered": [], "trait": [7, 8], "correct": ""},
        {"type": "single", "question": "Fuyez-vous l’affrontement ou l’accueillez-vous ?", "answers": ["Fuir affrontement ", "Accueillir affrontement "], "entered": [], "trait": [7, 8], "correct": ""},

        {"type": "single", "question": "Agissez-vous par désir personnel ou par adaptation aux autres ?", "answers": ["Désir personnel ", "Adaptation aux autres "], "entered": [], "trait": [7, 9], "correct": ""},
        {"type": "single", "question": "Cherchez-vous la stimulation ou la tranquillité ?", "answers": ["Stimulation ", "Tranquillité "], "entered": [], "trait": [7, 9], "correct": ""},

        {"type": "single", "question": "Préférez-vous affirmer vos opinions ou écouter celles des autres ?", "answers": ["Affirmer opinions ", "Écouter opinions autres "], "entered": [], "trait": [8, 9], "correct": ""},
        {"type": "single", "question": "Défendez-vous fermement vos idées ou acceptez-vous les divergences ?", "answers": ["Défendre fermement ", "Accepter divergences "], "entered": [], "trait": [8, 9], "correct": ""}
    ]
}

function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
}

shuffle(quiz.questions)

// Tracks index of question on quiz
let currentQuestionIndex = 0

// Shortcut for removing duplicates from arrays
const uniq = (a) => {
    return Array.from(new Set(a));
}

// Accepts a parent id to remove all children
const removeAllChildren = (parent) => {
    let node = document.getElementById(parent)
    node.innerHTML = ``
}

// Initialization functions go here
const init = () => {
    cr_ContinueButton()
    ad_QuestionIteration()
    loadQuestion(quiz.questions[0], true)
}

// Loads a multiple choice quiz question
const loadQuestion = async (question, init) => {
    updateProgessBarStatus()
    cr_QuizQuestionText(question.question)
    if (question.type == `multiple` || question.type == `single`) {
        loadMultipleChoiceQuestion(question)
        loadPreviousEnteredChoice(question.entered)
    } else if (question.type == `short` || question.type == `long`) {
        loadTextFormQuestion()
        loadPreviousEnteredText(question.entered)
    }
    // Skips loading animation on initialization
    if (!init) {
        await MoveQuestionContainerMiddle()
    }
    ShowHideContinueButton(quiz.questions[currentQuestionIndex])
}

const displayResult = (weights) => {
    let canvas = document.getElementById("result-display")
    let ctx = canvas.getContext("2d")
    ctx.beginPath()

    const r = 200
    const cx = 400
    const cy = 240
    let points = [];
    let miPoints = [];
    for (let i = 0; i < 9; i++) {
        let point = {"x": cx + r * Math.cos(2 * Math.PI * (i + 1) / 9 - Math.PI / 2), "y": cy + r * Math.sin(2 * Math.PI * (i + 1) / 9 - Math.PI / 2)}
        let fpoint = {"x": 0, "y": 0}
        fpoint.x = Math.round((1 - weights[i]) * cx + weights[i] * point.x)
        fpoint.y = Math.round((1 - weights[i]) * cy + weights[i] * point.y)
        points.push(fpoint)
        let mpoint = {"x": 0, "y": 0}
        mpoint.x = cx + (point.x - cx) * 0.5
        mpoint.y = cy + (point.y - cy) * 0.5
        miPoints.push(mpoint)
    }

    ctx.moveTo(points[0].x, points[0].y)
    for (let i = 1; i < 10; i++) {
        ctx.lineTo(points[i % 9].x, points[i % 9].y)
    }
    ctx.lineWidth = 3
    ctx.stroke()

    ctx.moveTo(miPoints[0].x, miPoints[0].y)
    for (let i = 1; i < 10; i++) {
        ctx.lineTo(miPoints[i % 9].x, miPoints[i % 9].y)
    }
    ctx.lineWidth = 1
    ctx.stroke()
}

const argMax = (array) => {
    return [].map.call(array, (x, i) => [x, i]).reduce((r, a) => (a[0] > r[0] ? a : r))[1]
}

const largestIndices = (array) => {
    // First and second max
    let m = 0
    let ms = 0
    // Indices of first and second max
    let mi = 0
    let msi = 0

    let c = 0
    if (array[0] <= array[1]) {
        c = 1
    } else {
        c = 0
    }
    m = array[c]
    ms = array[1 - c]
    mi = c
    msi = 1 - c

    for (let i = 2; i < 9; i++) {
        if (array[i] >= m)
        {
            ms = m
            msi = mi
            m = array[i]
            mi = i
        }
    }
    return { "mi": mi, "msi": msi }
}

const calculateResult = (questions) => {
    let weights = Array(9).fill(0)
    let cnt = Array(9).fill(0)
    for (let i = 0; i < questions.length; i++) {
        let answerWeight = (questions[i].entered[0] - 65) * 0.25
        let traitNo = questions[i].trait[0]
        let traitOui = questions[i].trait[1]
        if (traitNo === null) {
            for (let j = 0; j < traitOui.length; j++) {
                weights[traitOui[j] - 1] += answerWeight; 
                cnt[traitOui[j] - 1]++
            }
        }
        if (traitOui === null) {
            for (let j = 0; j < traitNo.length; j++) {
                weights[traitNo[j] - 1] += answerWeight; 
                cnt[traitNo[j] - 1]++
            }
        }
    }

    for (let i = 0; i < 9; i++) {
        weights[i] /= Math.max(cnt[i], 1)
    }

    return weights
}

const loadFinalResult = (weights, cat) => {
    let catL = ["1 - Perfectionniste", "2 - Altruiste", "3 - Battant", "4 - Romantique", "5 - Observateur", "6 - Loyaliste", "7 - Epicurien", "8 - Protecteur", "9 - Médiateur"]
    let catE = document.getElementById("cat")
    let catP = document.getElementById("catP")
    catE.innerHTML = catL[cat - 1]
    catP.style["display"] = "block"

    displayResult(weights)
    let quizResultDiv = document.getElementById("quizz-result-container");
    let questionIterationContainer = document.getElementById("question-iteration-container")
    let questionContainer = document.getElementById("quiz-question-container")

    quizResultDiv.style["display"] = "block";
    questionIterationContainer.style["display"] = "none";
    questionContainer.style["display"] = "none";

}

// Creates elements for multiple choice questions (checkboxes & radios)
const loadMultipleChoiceQuestion = (question) => {
    // Generating answer elements
    let quizAnswersUL = document.getElementById(`quiz-answer-list`)
    // questionHTML.id
    for (let i = 0; i < question.answers.length; i++) {
        let quizQuestionDIV = document.createElement(`div`)
        quizQuestionDIV.className = `quiz-answer-text-container-single unselected-answer`
        // Assigns ID as ASCII values (A = 65, B = 66, etc.)
        quizQuestionDIV.id = (i + 65).toString()
        ad_QuizSelectAnswer(quizQuestionDIV)
        // Generate elements
        let quizQuestionPress = document.createElement(`li`)
        let quizQuestionNumerator = document.createElement(`li`)
        let quizQuestionText = document.createElement(`li`)
        // Adding elements to quiz answers
        ed_QuizQuestionElements(question.type, quizQuestionPress, quizQuestionNumerator, quizQuestionDIV, quizQuestionText)
        // Convert ASCII code to text for multiple choice selection
        quizQuestionNumerator.innerText = String.fromCharCode(i + 65)
        quizQuestionText.innerText = question.answers[i]
        // Psuedoparent append
        quizQuestionDIV.append(quizQuestionPress, quizQuestionNumerator, quizQuestionText)
        // Main parent append
        quizAnswersUL.appendChild(quizQuestionDIV)
    }
}

const loadTextFormQuestion = () => {
    // Generating answer elements
    let quizAnswersUL = document.getElementById(`quiz-answer-list`)
    let questionTextarea = document.createElement(`div`);
    questionTextarea.contentEditable = true
    questionTextarea.className = `form-control question-text-form answer-typed-input-form`;
    questionTextarea.setAttribute(`id`, `questionTextarea`);
    questionTextarea.setAttribute(`data-text`, `Enter answer here...`)
    questionTextarea.setAttribute(`onkeydown`, `SaveWrittenAnswers()`)
    questionTextarea.innerHTML = ``
    quizAnswersUL.append(questionTextarea)
}

// Saves short and long form objects to local object
const SaveWrittenAnswers = () => {
    quiz.questions[currentQuestionIndex].entered[0] = document.getElementById(`questionTextarea`).innerHTML
}


// Assigns answered question attributes to elements that have been entered by user previously
const loadPreviousEnteredChoice = (entered) => {
    for (let i = 0; i < entered.length; i++) {
        selectAnswer(entered[i], true)
    }
}

// re-assigns text to short/long form questions
const loadPreviousEnteredText = () => {
    let entered = quiz.questions[currentQuestionIndex].entered
    if (entered.length > 0) {
        let answer = document.getElementById(`questionTextarea`)
        answer.innerHTML = entered[0]
    }
}

// Moves question off screen in a given direction
const MoveQuestionContainer = (first = `up`, second = `down`) => {
    return new Promise((resolve, reject) => {
        // Assigning correct class
        first = `move-container-` + first
        second = `move-container-` + second
        let parent = document.getElementById(`quiz-question-container`);
        parent.classList.add(first, `fadeout`, `fast-transition`);
        setTimeout(() => {
            parent.classList.remove(first, `fast-transition`)
            parent.classList.add(`no-transition`, second)
            resolve()
        }, 200)
    })

}

// Re-centers question on page
const MoveQuestionContainerMiddle = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let parent = document.getElementById(`quiz-question-container`);
            parent.classList.remove(`no-transition`, `fadeout`);
            parent.classList.add(`fast-transition`, `fadein`)
            parent.style.top = `0`
            parent.classList.remove(`move-container-down`, `move-container-up`)
            setTimeout(() => {
                parent.classList.remove(`fadein`)
                resolve()
            }, 200)
        }, 50)
    })
}

// Adds class names to quiz question based on which type of which it is
const ed_QuizQuestionElements = (type, press, numerator, container, text) => {
    // Append classes for different types of questions
    if (type == `single`) {
        // Radio button classes
        press.className = `press-key-label press-label-radio answer-key-numerator unselected-answer-button`
        numerator.className = `answer-key-numerator numerator-radio unselected-answer-button`
        container.classList.add(`question-type-single`)
    } else if (type == `multiple`) {
        // Checkbox classes
        press.className = `press-key-label press-label-checkbox answer-key-numerator unselected-answer-button`
        numerator.className = `answer-key-numerator numerator-checkbox unselected-answer-button`
        container.classList.add(`question-type-multiple`)
    }
    text.className = `quiz-answer-text-item`
    press.innerText = `Press`
}

// Assigns the question's text 
const cr_QuizQuestionText = (question) => {
    // Generating question text
    let quizQuestionTextDIV = document.getElementById(`quiz-question-text-container`)
    let quizQuestionTextSPAN = document.createElement(`span`)
    quizQuestionTextSPAN.className = `quiz-question-text-item`
    quizQuestionTextSPAN.innerText = question
    quizQuestionTextDIV.appendChild(quizQuestionTextSPAN)
}

// Creates continue button
const cr_ContinueButton = () => {
    let continueDIV = document.createElement(`div`)
    let continueBUTTON = document.createElement(`button`)
    let continueSPAN = document.createElement(`span`)
    continueDIV.id = `quiz-continue-button-container`
    continueDIV.className = `quiz-continue-button-container`
    continueBUTTON.className = `quiz-continue-button`
    continueSPAN.className = `quiz-continue-text`
    continueSPAN.id = `quiz-continue-text`
    continueBUTTON.innerHTML = `OK`
    // Moves to next question on click
    continueBUTTON.onclick = function() {
        loadNewQuestion(`next-question-load`)
    }
    continueSPAN.innerHTML = `press ENTER`
    continueDIV.append(continueBUTTON, continueSPAN)
    let parent = document.getElementById(`quiz-question-container`)
    parent.append(continueDIV)
    // Discerns whether or not to show continue button, based on whether or not an answer has been input/selected
    ShowHideContinueButton(quiz.questions[currentQuestionIndex])
}

// Only shows a continue button if a question is selected
const ShowHideContinueButton = (question) => {
    if (question.type == 'short' || question.type == `long`) {
        document.getElementById(`quiz-continue-button-container`).style.display = `initial`
        document.getElementById(`quiz-continue-text`).style.display = `none`
    } else {
        let show = document.getElementById(`quiz-answer-list`).children
        let buttonContainer = document.getElementById(`quiz-continue-button-container`)
        document.getElementById(`quiz-continue-text`).style.display = `initial`
        // Checks if an answer has been selected. If so, shows continue button
        for (let i = 0; i < show.length; i++) {
            if (show[i].classList.contains(`selected-answer`)) {
                buttonContainer.style.display = `initial`
                return
            }
        }
        // If no answer is selected, don't display button
        buttonContainer.style.display = `none`
    }
}

// Indicates that we are on the final stage of the quiz (the differentiation)
let final = false;
let remWeights = null;

// Function to load next question & possible answers in object
const loadNewQuestion = async (adjustment) => {
    // Saves written answers before moving on to next question
    let type = quiz.questions[currentQuestionIndex].type
    if (type == 'long' || type == 'short') {
        SaveWrittenAnswers()
    }
    // Removes previous question & answers
    if (canLoadNewQuestion(adjustment)) {
        await QuestionContainerLoad(adjustment)
        removeAllChildren(`quiz-answer-list`)
        removeAllChildren(`quiz-question-text-container`)
        // Displays previous questions. Does nothing if no questions to load.
        if (adjustment == `previous-question-load`) {
            loadQuestion(quiz.questions[currentQuestionIndex])
            // Displays next question. Does nothing if no questions to load.
        } else if (adjustment == `next-question-load` && currentQuestionIndex <= quiz.questions.length) {
            loadQuestion(quiz.questions[currentQuestionIndex])
        }
    }
    else {
        if (!final) {
            remWeights = calculateResult(quiz.questions)
            let { "mi": mi, "msi": msi } = largestIndices(remWeights)
            let a = 0
            let b = 0
            if (mi < msi) {
                a = mi
                b = msi
            } else {
                b = mi
                a = msi
            }
            a += 1
            b += 1
            if (remWeights[mi] - remWeights[msi] > 0.15) {
                loadFinalResult(remWeights, mi + 1)
            } else {
                for (let i = 0; i < quiz["questions-diff"].length; i++) {
                    let q = quiz["questions-diff"][i]
                    if (q.trait[0] === a && q.trait[1] === b) {
                        quiz.questions.push(q)
                        break
                    }
                }
                final = true
                loadNewQuestion(adjustment)
            }
        } else {
            let ans = quiz.questions[quiz.questions.length - 1].entered - 65
            let cat = quiz.questions[quiz.questions.length - 1].trait[ans]
            loadFinalResult(remWeights, cat)
        }
    }
}

// Checks if we have reached the first or last question
const canLoadNewQuestion = (adjustment) => {
    // In/de-crement based on if user is loading next or previous question
    if (adjustment == `next-question-load`) {
        currentQuestionIndex++
    } else {
        currentQuestionIndex--
    }
    // Fail safe if we have reached last quesiton
    if (currentQuestionIndex > quiz.questions.length - 1) {
        currentQuestionIndex--
        return false
        // Fail safe if trying to move before first question
    } else if (currentQuestionIndex < 0) {
        currentQuestionIndex++
        return false
    }
    return true

}

// Discerns which direction the question will fly on/off the page
const QuestionContainerLoad = (adjustment) => {
    return new Promise(async (resolve, reject) => {
        if (adjustment == 'next-question-load') {
            // Moves container up off the screen
            await MoveQuestionContainer(`up`, `down`)
        } else {
            // Moves container down off the screen
            await MoveQuestionContainer(`down`, `up`)
        }
        resolve()
    })
}

// Highlights and unhighlights given answers when a keytap is pressed 
// key indicates the id of the given answer, invoking previous will prevent the function from editing the local answered questions object
const selectAnswer = (key, previous) => {
    let answer = document.getElementById(key)
    if (answer) {
        // If only one answer can be given, unselect all answers before reselecting new answer
        if (answer.classList.contains(`question-type-single`)) {
            unselectAllAnswers(document.getElementById('quiz-answer-list'))
        }
        // If answer is not yet selected, select it
        if (answer.classList.contains(`unselected-answer`)) {
            answer.classList.add(`selected-answer`)
            answer.classList.remove(`unselected-answer`)
            indicateSelectedAnswer(answer)
            if (!previous) {
                storeAnswers(true, key)
            }
            // If answer is already selected, unselect it
        } else if (answer.classList.contains(`selected-answer`)) {
            answer.classList.add(`unselected-answer`)
            answer.classList.remove(`selected-answer`)
            // Unhighlight selected answer buttons
            unselectAnswerButton(answer.children)
            if (!previous) {
                storeAnswers(false, key)
            }
        }
    }
    // Triggers a check to see if we should display continue button
    ShowHideContinueButton(quiz.questions[currentQuestionIndex])
}

// Indicate previous is true in order to skip storing answers in the local object
const storeAnswers = (add, key) => {
    // For adding user's answers to the local object
    if (add) {
        if (quiz.questions[currentQuestionIndex].type == `single`) {
            quiz.questions[currentQuestionIndex].entered.length = 0
        }
        quiz.questions[currentQuestionIndex].entered.push(key)
        // For removing user's answers from the local object
    } else {
        quiz.questions[currentQuestionIndex].entered = quiz.questions[currentQuestionIndex].entered.filter(item => item !== key)
    }
    // Ensures there are no duplicate answers in array
    quiz.questions[currentQuestionIndex].entered = uniq(quiz.questions[currentQuestionIndex].entered)
}

// Changes answer button appearance to show as selected
const indicateSelectedAnswer = (answer) => {
    let button = answer.querySelectorAll('.answer-key-numerator')
    for (let i = 0; i < button.length; i++) {
        button[i].classList.add(`selected-answer-button`)
        button[i].classList.remove(`unselected-answer-button`)
    }
}

// Unselects all answers in a question
const unselectAllAnswers = (answerList) => {
    for (let i = 0; i < answerList.childElementCount; i++) {
        let child = answerList.children[i]
        if (child.classList.contains(`selected-answer`)) {
            child.classList.add(`unselected-answer`)
            child.classList.remove(`selected-answer`)
        }
        // re/un-assigns children attribute elements, such as button coloring classes
        unselectAnswerButton(child.children)
    }
}

// Unselects individual quiz answer buttons (e.g. Press A)
const unselectAnswerButton = (child) => {
    for (let j = 0; j < child.length; j++) {
        let childButton = child[j]
        if (childButton && childButton.classList.contains(`selected-answer-button`)) {
            childButton.classList.add(`unselected-answer-button`)
            childButton.classList.remove(`selected-answer-button`)
        }
    }
}

// Change progress bar styling as quiz is completed
const updateProgessBarStatus = () => {
    // Assigning attributes
    let progress = document.getElementById('quiz-progress-bar')
    let text = document.getElementById('progress-bar-text')
    // Value of progress is set in terms of 0 to 100
    let value = Math.floor((calculateQuizProgress(quiz.questions) / quiz.questions.length) * 100)
    // Changing width and aria value 
    progress.setAttribute('aria-valuenow', value)
    progress.style.width = value + `%`
    // Updates progress bar text
    text.innerText = value + '% complete'
}

// Finds quiz progress by comparing num of questions answers to total number of questions
const calculateQuizProgress = (questions) => {
    let answers = 0
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].entered.length > 0) {
            answers++
        }
    }
    return answers
}

// Assigns function to change answer attributes with given id
const ad_QuizSelectAnswer = (answer) => {
    answer.onclick = () => {
        selectAnswer(answer.id)
    }
}

// Adds iteration capabilities to previous & next buttons 
const ad_QuestionIteration = () => {
    let prev = document.getElementById(`previous-question-load`)
    let next = document.getElementById(`next-question-load`)
    prev.onclick = () => {
        if (currentQuestionIndex > 0 && !final) {
            loadNewQuestion(prev.id)
        }
    }
    next.onclick = () => {
        if (quiz.questions[currentQuestionIndex].entered.length != 0) {
            loadNewQuestion(next.id)
        }
    }
}

// Listener for key presses for quiz interaction.
document.onkeydown = function(evt) {
    evt = evt || window.event;
    // console.log(evt.keyCode)
    // Registers key selectors for A to J on multiple choice questions.
    if (evt.keyCode >= 65 && evt.keyCode < 90 || evt.keyCode == 8 || evt.keyCode == 46) {
        selectAnswer(evt.keyCode.toString())
    }
    if (evt.keyCode == 38) {
        loadNewQuestion('previous-question-load')
    }
    // Moves to next question on down arrow tap or enter. Disables iteration using enter key for open ended questions
    let type = quiz.questions[currentQuestionIndex].type
    if (evt.keyCode == 40 || ((type == `single` || type == `multiple`) && evt.keyCode == 13)) {
        // Check if an answer was selected before proceeding
        if (quiz.questions[currentQuestionIndex].entered.length != 0) {
            loadNewQuestion('next-question-load')
        }
    }
};

init()
