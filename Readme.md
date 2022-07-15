# Major-Zahlen-System-Textgenerator

Das Major-Zahlensystem ist ein powervolles Tool des Gedächtnistrainings.

Fortan funktioniert das Umwandeln von Major-Zahlen in merkwürdigen Geschichten nach der Loci-Methode noch einfacher. Mittels dieses Programms ist es möglich, automatisch dynamische Geschichten nach dem Master-System und der Loci-Methode zu generieren.

# Installation

```bash
npm i https://github.com/vorbildunternehmer/master-zahlensystem-textgen;
```

# Verwendung

```js
import Major from 'major-zahlensystem-textgen'
Major.majorTextgen(1018419095, 'TESTWORT BEISPIEL')
return Major.result
```
Alternativ
```js
const Major = require('major-zahlensystem-textgen')
Major.majorTextgen(1018419095, 'TESTWORT BEISPIEL')
return Major.result
```

# Docker-Compose Developement

**.env**
```sh
NUMBER=1018419095
WORD='TESTWORT BEISPIEL'
```
Anschließend
```sh
docker-compose up -d;
```

PS: In der Konsole wird das Ergebnis angezeigt.
