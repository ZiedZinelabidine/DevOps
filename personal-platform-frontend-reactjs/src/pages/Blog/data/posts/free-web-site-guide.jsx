export const WebSiteFreeGuide = {
    title: "Comment créer un site web gratuitement",
    titleFR: "Un guide complet pour créer votre site web gratuitement",
    slug: "free-web-site-guide",
    author: "Zied Zinelabidine",
    date: "Février 20, 2025",
    category: "Création d'un site web gratuitement avec AWS S3",
    categoryFR: "Création d'un site gratuitement",
    image: `${process.env.REACT_APP_CDN_ITGALAXY}/assets/blog/aws-s3.png`,
    description: "Améliorer votre buisness et Créer un site pour votre entreprise gratuitement via Amazon S3.",
    content: `
     <h1>Utilisation des AWS Services avec le bucket S3</h1>


<p>Pour commencer, AWS est le service cloud le plus fiable et le moins cher pour l'hébergement des sites web. De plus, S3 est gratuit pour l'hébergement de sites web statiques sans backend, mais on peut ajouter des fonctionnalités comme l'envoi d'e-mails.</p>

<h3>AWS S3 Buckets : Amazon Simple Storage Service</h3>
<p>S3 est un service d'AWS qui permet de créer et de gérer le stockage des fichiers et des assets, peu importe leur format, et qui est accessible de partout.</p>

<h3>Cas d'Utilisation :</h3>
<p>Le stockage des données comprend des éléments tels que :</p>
<ul>
    <li>Images</li>
    <li>Fichiers CSV utiles pour notre application</li>
    <li>Logs d'autres services</li>
    <li>Factures</li>
</ul>

<p>AWS S3 offre également une option moins connue pour héberger des sites internet "statiques" uniquement avec des fichiers HTML et JavaScript. Cela peut être largement suffisant si l'on souhaite simplement créer des pages de contact ou de présentation de produits.</p>

<h2>Comment le mettre en place :</h2>
<p>Je vais expliquer dans la suite de cet article comment mettre en place un site web statique sur AWS S3.</p>

<h2>Comment Utiliser AWS S3</h2>

<p>Voici un guide étape par étape pour mettre en place un site web statique à l'aide d'AWS S3 :</p>

<h3>Étape 1 : Créer un Compte AWS</h3>
<p>Si vous n'avez pas encore de compte, rendez-vous sur le site d'AWS et créez un compte. Un mode de paiement (carte bancaire) est requis, mais le niveau d'utilisation gratuite peut suffire pour commencer.</p>

<h3>Étape 2 : Accéder au Service S3</h3>
<ol>
    <li>Connectez-vous à votre console AWS.</li>
    <li>Dans la barre de recherche, tapez "S3" et sélectionnez le service dans les résultats.</li>
</ol>

<h3>Étape 3 : Créer un Bucket</h3>
<p>Un "bucket" est un conteneur pour stocker vos fichiers. Suivez ces étapes pour en créer un :</p>
<ol>
    <li>Cliquez sur "Créer un bucket".</li>
    <li>Donnez un nom unique à votre bucket (ce nom doit être globalement unique sur AWS).</li>
    <li>Sélectionnez une région pour votre bucket.</li>
    <li>Définissez les paramètres de permissions selon vos besoins. Pour un site web statique, vous souhaiterez probablement rendre votre contenu public.</li>
    <li>Cliquez sur "Créer".</li>
</ol>

<h3>Étape 4 : Configurer le Bucket pour l’Hébergement de Site Web</h3>
<ol>
    <li>Accédez à votre bucket nouvellement créé.</li>
    <li>Allez dans l'onglet "Propriétés" et cherchez l'option "Hébergement de site Web statique".</li>
    <li>Activez cette option et indiquez votre fichier d'index (généralement index.html).</li>
    <li>Enregistrez les paramètres.</li>
</ol>

<h3>Étape 5 : Téléverser des Fichiers</h3>
<p>Vous devez maintenant uploader les fichiers de votre site web dans le bucket.</p>
<ol>
    <li>Dans votre bucket, cliquez sur "Charger".</li>
    <li>Sélectionnez ou glissez-déposez les fichiers nécessaires (HTML, CSS, JS, images, etc.).</li>
    <li>Validez le chargement.</li>
</ol>

<h3>Étape 6 : Configurer les Permissions</h3>
<p>Pour que votre site soit accessible publiquement :</p>
<ol>
    <li>Accédez à l'onglet "Permissions" de votre bucket.</li>
    <li>Cliquez sur "Politique de bucket" et ajoutez une politique pour autoriser l'accès public aux fichiers. Voici un exemple de politique pour un bucket public :</li>
</ol>
<pre><code>{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"
        }
    ]
}</code></pre>

<p>Remplacez <code>YOUR_BUCKET_NAME</code> par le nom de votre bucket.</p>

<h3>Étape 7 : Accéder à Votre Site Web</h3>
<p>Une fois toutes les étapes complétées, votre site est accessible via l'URL fournie dans la section "Hébergement de site Web statique" de votre bucket.</p>

<h3>Options Avancées (Facultatif)</h3>
<p>Pour améliorer la performance et la sécurité de votre site, vous pouvez envisager d’utiliser Amazon CloudFront pour la mise en cache et le déploiement de votre contenu via un réseau de distribution de contenu (CDN).</p>

<p>Voilà, vous avez maintenant un site web statique hébergé sur AWS S3 !</p>

<h3>Étape 8 : Mise en place d'un service de contact aussi gratuit </h3>
<p>Regarder l'article  <a href="https://www.itgalaxy.io/blog/free-mail-entreprise" target="_blank">free-mail-entreprise</a>  </p>

<p>Vous pouvez trouver des freelances qui vous aides à mettre en place ce site avec des prix trés raisonnable ( entre 20 et 50 euros le set up ) <a href="https://www.itgalaxy.io/" target="_blank">Itgalaxy</a> </p>

<p>Vous pouvez aussi vous former sur aws sur notre plateform ( entre 20e et 50e ) la formation AWS <a href="https://www.itgalaxy.io/" target="_blank">Itgalaxy</a> </p>


`,
}; 