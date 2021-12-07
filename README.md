## JS Schema Validator 

De JS Schema Validator is opgezet als een Node.js project. Voor het automatisch testen van de code heb ik gebruik gemaakt van Jest. 

Voer na het downloaden van de repetitory de volgende command uit om de dependencies te installeren

```shell
npm install
```

De automatische test maken gebruik van de Examples uit de aangeleverde github repository. Verder heb ik tests toegevoegd om de error meldingen na te lopen die worden terug gegeven door de validator. De tests. kunnen met de volgede command worden uitgevoerd. 

```sh
npm test
```

#### Validator.js 

Het validator.js bestand is het hoofdbestand van de validator. Ik heb de validator in een class opgezet zodat deze makkelijk her te gebruiken is in andere projecten gezien het een vaker voorkomend probleem is. De validator is opgezet zonder gebruik te maken van extra packages of libraries om deze zo licht en stabiel mogelijk te houden. 

#### Extra toevoeging

Als extra toevoeging heb error meldingen toegevoegd om het hergebruiken van de validator makkelijker te maken. Deze geven foutmeldingen wanneer de gegeven parameters geen object is of wanneer er een veld niet gevalideerd kon worden met het schema doordat het schema een veld mist. 