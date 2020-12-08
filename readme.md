#Пример за express js веб апликација со handlebars поддршка и поврзување до монго база на податоци
##Веб Програмирање на ФИКТ Битола

како се креира:
1. npx express-generator --view=hbs
2. npm install
3. npm start

пред да се стартува апп треба да се стартува MongoDB (најлесно е во докер контејнер). 
ВО фолдер mongodb-docker постои фајл docker-compose.yml
кој може да се стартува со:

'''docker-compose up -d'''

се гаси со '''docker-compose down'''

сите измени се во рутете users
додадени се и hбс (handlebars) темплејт страници
јаваскрипт кодот од вебстраните е во /public/javascripts/client.js

