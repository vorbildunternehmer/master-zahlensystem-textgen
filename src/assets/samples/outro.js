'use strict'

const RandomGenerator = require('../helpers/RandomGenerator')

const options = [
  [
    'einer großen Korn-Kammer',
    'einem riesigen Kirchenraum',
    'einer kleinen Besenkammer',
    'einem vollen Fußballstadion',
    'einer finsteren Höhle',
    'einem unaufgeräumten Kinderzimmers',
    'einem Korb eines Heißluftballons',
    'einer lauten, menschenleeren Fabrik',
    'einem Zimmer einer Prinzessin'
  ],
  [
    'Vincent der erste',
    'Fee Numerus',
    'Master-Man',
    'Major Tom',
    'Calculatix'
  ]
]

let text = 'Ich bin am Ende meiner Reise angekommen. Nur noch eine Tür. Ich öffne sie vorsichtig.'
text += ' Plötzlich stehe ich völlig unerwartet in ' + new RandomGenerator(options[0]).output + '.';
text += ' Es knistert. Jemand hustet in ein Mikrofon. Dann höre ich eine Stimme folgendes sagen: "Ich grüße Sie. Mein Name ist ' + new RandomGenerator(options[1]).output + '!'
text += ' Mir gehört dieses prächtige Anwesen. Sie haben sich in meinen Gefilde bewegt und es bis zu mir geschafft. Das ist nicht jedem gelungen!'
text += ' Auf Ihrem Weg haben Sie {WORTZAHL} Räume beschritten und allerhand merkwürdiges entdeckt. Auch versteckte Botschaften von mir. Nun ist es Zeit, mir alle merkwürdigen Code-Wörter zu nennen. Nur so kann ich Sie wieder in Ihre echte Gedanken-Welt entlassen mit reichlich neuem Wissen. Andernfalls werden Ihre Gedanken weiterhin in dieser Geschichte gefangen sein. "'
text += ' Ich überlege. Gehe in Gedanken noch einmal alle {WORTZAHL} Räume durch. Erinnere mich an die Wörter und Dinge. Und sage die Lösung ..."'

module.exports = text
