(() => {
'use strict';
const ES = document.documentElement.lang === 'es';
const LOC = ES ? 'es-US' : 'en-US';
const CONTACT = 'nichkt@gmail.com';
const DOH = 'MCHBGPublicComment@doh.wa.gov';
const FINDER = 'https://app.leg.wa.gov/districtfinder/';
// [name, party, email, phone] for senator then representatives; null marks a vacant seat
const ROSTER = {"1":[["Derek Stanford","D","derek.stanford@leg.wa.gov","(360) 786-7600"],["Davina Duerr","D","davina.duerr@leg.wa.gov","(360) 786-7928"],["Shelley Kloba","D","shelley.kloba@leg.wa.gov","(360) 786-7900"]],"2":[["Jim McCune","R","jim.mccune@leg.wa.gov","(360) 786-7602"],["Andrew Barkis","R","andrew.barkis@leg.wa.gov","(360) 786-7824"],["Matt Marshall","R","Matt.Marshall@leg.wa.gov","(360) 786-7912"]],"3":[["Marcus Riccelli","D","marcus.riccelli@leg.wa.gov","(360) 786-7604"],["Natasha Hill","D","Natasha.Hill@leg.wa.gov","(360) 786-7888"],["Timm Ormsby","D","timm.ormsby@leg.wa.gov","(360) 786-7946"]],"4":[["Leonard Christian","R","leonard.christian@leg.wa.gov","(360) 786-7606"],["Suzanne Schmidt","R","Suzanne.Schmidt@leg.wa.gov","(360) 786-7820"],["Rob Chase","R","Rob.Chase@leg.wa.gov","(360) 786-7984"]],"5":[["Victoria Hunt","D","Victoria.Hunt@leg.wa.gov","(360) 786-7608"],["Zach Hall","D","HALL_ZA@leg.wa.gov","(360) 786-7852"],["Lisa Callan","D","Lisa.Callan@leg.wa.gov","(360) 786-7876"]],"6":[["Jeff Holy","R","jeff.holy@leg.wa.gov","(360) 786-7610"],["Mike Volz","R","mike.volz@leg.wa.gov","(360) 786-7922"],["Jenny Graham","R","jenny.graham@leg.wa.gov","(360) 786-7962"]],"7":[["Shelly Short","R","shelly.short@leg.wa.gov","(360) 786-7612"],["Andrew Engell","R","Andrew.Engell@leg.wa.gov","(360) 786-7908"],["Hunter Abell","R","Hunter.Abell@leg.wa.gov","(360) 786-7988"]],"8":[["Matt Boehnke","R","matt.boehnke@leg.wa.gov","(360) 786-7614"],["Stephanie Barnard","R","Stephanie.Barnard@leg.wa.gov","(360) 786-7986"],["April Connors","R","April.Connors@leg.wa.gov","(360) 786-7882"]],"9":[["Mark Schoesler","R","mark.schoesler@leg.wa.gov","(360) 786-7620"],["Mary Dye","R","mary.dye@leg.wa.gov","(360) 786-7942"],["Joe Schmick","R","joe.schmick@leg.wa.gov","(360) 786-7844"]],"10":[["Ron Muzzall","R","ron.muzzall@leg.wa.gov","(360) 786-7618"],["Clyde Shavers","D","Clyde.Shavers@leg.wa.gov","(360) 786-7884"],["Dave Paul","D","dave.paul@leg.wa.gov","(360) 786-7914"]],"11":[["Bob Hasegawa","D","bob.hasegawa@leg.wa.gov","(360) 786-7616"],["David Hackney","D","David.Hackney@leg.wa.gov","(360) 786-7956"],["Steve Bergquist","D","steve.bergquist@leg.wa.gov","(360) 786-7862"]],"12":[["Keith Goehner","R","keith.goehner@leg.wa.gov","(360) 786-7622"],["Brian Burnett","R","Brian.Burnett@leg.wa.gov","(360) 786-7954"],["Mike Steele","R","mike.steele@leg.wa.gov","(360) 786-7832"]],"13":[["Judy Warnick","R","judith.warnick@leg.wa.gov","(360) 786-7624"],["Tom Dent","R","tom.dent@leg.wa.gov","(360) 786-7932"],["Alex Ybarra","R","alex.ybarra@leg.wa.gov","(360) 786-7808"]],"14":[["Curtis King","R","curtis.king@leg.wa.gov","(360) 786-7626"],["Gloria Mendoza","R","Gloria.Mendoza@leg.wa.gov","(360) 786-7960"],["Deb Manjarrez","R","Deb.Manjarrez@leg.wa.gov","(360) 786-7856"]],"15":[["Nikki Torres","R","Nikki.Torres@leg.wa.gov","(360) 786-7684"],["Chris Corry","R","chris.corry@leg.wa.gov","(360) 786-7810"],["Jeremie Dufault","R","DUFAULT_JE@leg.wa.gov","(360) 786-7874"]],"16":[["Perry Dozier","R","Perry.Dozier@leg.wa.gov","(360) 786-7630"],["Mark Klicker","R","Mark.Klicker@leg.wa.gov","(360) 786-7836"],null],"17":[["Paul Harris","R","paul.harris@leg.wa.gov","(360) 786-7632"],["Kevin Waters","R","Kevin.Waters@leg.wa.gov","(360) 786-7994"],["David Stuebe","R","David.Stuebe@leg.wa.gov","(360) 786-7976"]],"18":[["Adrian Cortes","D","Adrian.Cortes@leg.wa.gov","(360) 786-7634"],["Stephanie McClintock","R","Stephanie.McClintock@leg.wa.gov","(360) 786-7850"],["John Ley","R","John.Ley@leg.wa.gov","(360) 786-7812"]],"19":[["Jeff Wilson","R","Jeff.Wilson@leg.wa.gov","(360) 786-7636"],["Jim Walsh","R","jim.walsh@leg.wa.gov","(360) 786-7806"],["Joel McEntire","R","Joel.McEntire@leg.wa.gov","(360) 786-7870"]],"20":[["John Braun","R","John.Braun@leg.wa.gov","(360) 786-7638"],["Peter Abbarno","R","Peter.Abbarno@leg.wa.gov","(360) 786-7896"],["Ed Orcutt","R","ed.orcutt@leg.wa.gov","(360) 786-7990"]],"21":[["Marko Liias","D","marko.liias@leg.wa.gov","(360) 786-7640"],["Strom Peterson","D","strom.peterson@leg.wa.gov","(360) 786-7950"],["Lillian Ortiz-Self","D","lillian.ortiz-self@leg.wa.gov","(360) 786-7972"]],"22":[["Jessica Bateman","D","jessica.bateman@leg.wa.gov","(360) 786-7642"],["Beth Doglio","D","beth.doglio@leg.wa.gov","(360) 786-7940"],["Lisa Parshley","D","Lisa.Parshley@leg.wa.gov","(360) 786-7992"]],"23":[["Drew Hansen","D","drew.hansen@leg.wa.gov","(360) 786-7644"],["Tarra Simmons","D","Tarra.Simmons@leg.wa.gov","(360) 786-7934"],["Greg Nance","D","Greg.Nance@leg.wa.gov","(360) 786-7842"]],"24":[["Mike Chapman","D","mike.chapman@leg.wa.gov","(360) 786-7646"],["Adam Bernbaum","D","BERNBAUM_AD@leg.wa.gov","(360) 786-7916"],["Steve Tharinger","D","steve.tharinger@leg.wa.gov","(360) 786-7904"]],"25":[["Chris Gildon","R","chris.gildon@leg.wa.gov","(360) 786-7648"],["Michael Keaton","R","Michael.Keaton@leg.wa.gov","(360) 786-7948"],["Cyndy Jacobsen","R","Cyndy.Jacobsen@leg.wa.gov","(360) 786-7968"]],"26":[["Deborah Krishnadasan","D","Deborah.Krishnadasan@leg.wa.gov","(360) 786-7650"],["Adison Richards","D","RICHARDS_AD@leg.wa.gov","(360) 786-7964"],["Michelle Valdez","R","Michelle.Valdez@leg.wa.gov","(360) 786-7802"]],"27":[["Yasmin Trudeau","D","yasmin.trudeau@leg.wa.gov","(360) 786-7652"],["Laurie Jinkins","D","laurie.jinkins@leg.wa.gov","(360) 786-7930"],["Jake Fey","D","jake.fey@leg.wa.gov","(360) 786-7974"]],"28":[["T'wina Nobles","D","T'wina.Nobles@leg.wa.gov","(360) 786-7654"],["Mari Leavitt","D","mari.leavitt@leg.wa.gov","(360) 786-7890"],["Dan Bronoske","D","Dan.Bronoske@leg.wa.gov","(360) 786-7958"]],"29":[["Steve Conway","D","steve.conway@leg.wa.gov","(360) 786-7656"],["Melanie Morgan","D","melanie.morgan@leg.wa.gov","(360) 786-7906"],["Sharlett Mena","D","sharlett.mena@leg.wa.gov","(360) 786-7996"]],"30":[["Claire Wilson","D","claire.wilson@leg.wa.gov","(360) 786-7658"],["Jamila Taylor","D","Jamila.Taylor@leg.wa.gov","(360) 786-7898"],["Kristine Reeves","D","kristine.reeves@leg.wa.gov","(360) 786-7830"]],"31":[["Phil Fortunato","R","phil.fortunato@leg.wa.gov","(360) 786-7660"],["Drew Stokesbary","R","drew.stokesbary@leg.wa.gov","(360) 786-7846"],["Joshua Penner","R","Joshua.Penner@leg.wa.gov","(360) 786-7866"]],"32":[["Jesse Salomon","D","jesse.salomon@leg.wa.gov","(360) 786-7662"],["Cindy Ryu","D","cindy.ryu@leg.wa.gov","(360) 786-7880"],["Lauren Davis","D","Lauren.Davis@leg.wa.gov","(360) 786-7910"]],"33":[["Tina Orwall","D","tina.orwall@leg.wa.gov","(360) 786-7664"],["Edwin Obras","D","Edwin.Obras@leg.wa.gov","(360) 786-7834"],["Mia Gregerson","D","mia.gregerson@leg.wa.gov","(360) 786-7868"]],"34":[["Emily Alvarado","D","Emily.Alvarado@leg.wa.gov","(360) 786-7667"],["Brianna Thomas","D","THOMAS_BR@leg.wa.gov","(360) 786-7978"],["Joe Fitzgibbon","D","joe.fitzgibbon@leg.wa.gov","(360) 786-7952"]],"35":[["Drew MacEwen","R","drew.macewen@leg.wa.gov","(360) 786-7668"],["Dan Griffey","R","dan.griffey@leg.wa.gov","(360) 786-7966"],["Travis Couture","R","Travis.Couture@leg.wa.gov","(360) 786-7902"]],"36":[["Noel Frame","D","noel.frame@leg.wa.gov","(360) 786-7670"],["Julia Reed","D","Julia.Reed@leg.wa.gov","(360) 786-7814"],["Liz Berry","D","Liz.Berry@leg.wa.gov","(360) 786-7860"]],"37":[["Rebecca Saldaña","D","rebecca.saldana@leg.wa.gov","(360) 786-7688"],["Sharon Tomiko Santos","D","sharontomiko.santos@leg.wa.gov","(360) 786-7944"],["Chipalo Street","D","Chipalo.Street@leg.wa.gov","(360) 786-7838"]],"38":[["June Robinson","D","june.robinson@leg.wa.gov","(360) 786-7674"],["Julio Cortes","D","Julio.Cortes@leg.wa.gov","(360) 786-7840"],["Mary Fosse","D","Mary.Fosse@leg.wa.gov","(360) 786-7864"]],"39":[["Keith Wagoner","R","keith.wagoner@leg.wa.gov","(360) 786-7676"],["Sam Low","R","Sam.Low@leg.wa.gov","(360) 786-7967"],["Carolyn Eslick","R","carolyn.eslick@leg.wa.gov","(360) 786-7816"]],"40":[["Liz Lovelett","D","liz.lovelett@leg.wa.gov","(360) 786-7678"],["Debra Lekanoff","D","debra.lekanoff@leg.wa.gov","(360) 786-7800"],["Alex Ramel","D","alex.ramel@leg.wa.gov","(360) 786-7970"]],"41":[["Lisa Wellman","D","lisa.wellman@leg.wa.gov","(360) 786-7641"],["Janice Zahn","D","Janice.Zahn@leg.wa.gov","(360) 786-7894"],["My-Linh Thai","D","my-linh.thai@leg.wa.gov","(360) 786-7926"]],"42":[["Sharon Shewmake","D","sharon.shewmake@leg.wa.gov","(360) 786-7682"],["Alicia Rule","D","Alicia.Rule@leg.wa.gov","(360) 786-7980"],["Joe Timmons","D","Joe.Timmons@leg.wa.gov","(360) 786-7854"]],"43":[["Jamie Pedersen","D","jamie.pedersen@leg.wa.gov","(360) 786-7628"],["Nicole Macri","D","nicole.macri@leg.wa.gov","(360) 786-7826"],["Shaun Scott","D","Shaun.Scott@leg.wa.gov","(360) 786-7920"]],"44":[["John Lovick","D","john.lovick@leg.wa.gov","(360) 786-7686"],["Brandy Donaghy","D","Brandy.Donaghy@leg.wa.gov","(360) 786-7804"],["April Berg","D","April.Berg@leg.wa.gov","(360) 786-7892"]],"45":[["Manka Dhingra","D","manka.dhingra@leg.wa.gov","(360) 786-7672"],["Roger Goodman","D","roger.goodman@leg.wa.gov","(360) 786-7878"],["Larry Springer","D","larry.springer@leg.wa.gov","(360) 786-7822"]],"46":[["Javier Valdez","D","javier.valdez@leg.wa.gov","(360) 786-7690"],["Gerry Pollet","D","gerry.pollet@leg.wa.gov","(360) 786-7886"],["Darya Farivar","D","Darya.Farivar@leg.wa.gov","(360) 786-7818"]],"47":[["Claudia Kauffman","D","claudia.kauffman@leg.wa.gov","(360) 786-7692"],["Debra Entenman","D","Debra.Entenman@leg.wa.gov","(360) 786-7918"],["Chris Stearns","D","Chris.Stearns@leg.wa.gov","(360) 786-7858"]],"48":[["Vandana Slatter","D","vandana.slatter@leg.wa.gov","(360) 786-7694"],["Osman Salahuddin","D","Osman.Salahuddin@leg.wa.gov","(360) 786-7936"],["Amy Walen","D","amy.walen@leg.wa.gov","(360) 786-7848"]],"49":[["Annette Cleveland","D","Annette.Cleveland@leg.wa.gov","(360) 786-7696"],["Sharon Wylie","D","sharon.wylie@leg.wa.gov","(360) 786-7924"],["Monica Jurado Stonier","D","monica.stonier@leg.wa.gov","(360) 786-7872"]]};
const $ = id => document.getElementById(id);
const esc = v => String(v).replace(/[&<>"']/g, m => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[m]));
const join = (a, and) => a.length < 3 ? a.join(' ' + and + ' ') : a.slice(0, -1).join(', ') + ' ' + and + ' ' + a[a.length - 1];
const ord = n => { const v = n % 100; return n + (v >= 11 && v <= 13 ? 'th' : ({1: 'st', 2: 'nd', 3: 'rd'}[n % 10] || 'th')); };
const enc = a => a.replace(/[%?&#\s]/g, c => encodeURIComponent(c));
const mailto = (to, subject, body) => 'mailto:' + to + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
const plural = (m, one, many) => m + ' ' + (m === 1 ? one : many);

const S = ES ? {
  looking: 'Buscando su distrito...',
  errNet: 'No pudimos conectar con el buscador de direcciones. Elija su número de distrito abajo o vuelva a intentarlo en un minuto.',
  errNone: 'No encontramos esa dirección. Agregue la ciudad y el código postal, o elija su número de distrito abajo.',
  errOut: 'Esa dirección está fuera del estado de Washington.',
  errDist: 'Encontramos la dirección, pero no su distrito legislativo. Elija su número de distrito abajo.',
  finderHtml: 'También puede usar el <a href="' + FINDER + '">buscador de distritos</a> de la Legislatura (en inglés).',
  ld: d => 'Distrito Legislativo ' + d,
  sen: 'Senado estatal',
  rep: 'Cámara de Representantes estatal',
  vacant: 'Puesto vacante',
  vacantNote: 'Este puesto está vacío hasta que se nombre a alguien.',
  fillBtn: 'Poner estos nombres en la carta',
  mailAll: k => k === 3 ? 'Escribir a los tres' : 'Escribir a los dos',
  filled: 'Nombres agregados. Ahora escriba su ciudad y una o dos frases sobre por qué esto le importa.',
  needLookup: 'Primero busque a sus legisladores para saber a quién enviar la carta.',
  sentTo: a => 'Si su programa de correo no se abrió, copie la carta y envíela a: ' + a,
  greetRe: /^Estimad[^\n]*/,
  greet: r => 'Estimados ' + join(r.map((m, i) => m && (i ? 'Rep. ' : 'Sen. ') + m[0]).filter(Boolean), 'y') + ':',
  distRe: /(Vivo en [^\n]*?, )en (?:su distrito|el Distrito Legislativo \d+)/,
  dist: d => 'en el Distrito Legislativo ' + d,
  subject: 'Por favor apoye un proyecto de ley de Count the Kicks en 2027',
  copied: 'Copiado. Péguelo en un correo y modifíquelo.',
  copyFail: 'No se pudo copiar aquí. La carta quedó seleccionada: presione Ctrl+C (o Cmd+C en Mac) para copiarla.',
  tvSubject: 'Comentario sobre el Título V: prevención de la muerte fetal',
  tvBody: 'Hola:\n\nVivo en Washington y les escribo sobre la subvención Título V para la Salud Materno-Infantil (Maternal and Child Health Block Grant).\n\nLes pido que incluyan la prevención de la muerte fetal en el trabajo del Título V en Washington, empezando con una alianza estatal con Count the Kicks, para que todas las pacientes embarazadas aprendan a seguir los movimientos de su bebé y a llamar cuando disminuyan.\n\nLa ley federal Maternal and Child Health Stillbirth Prevention Act de 2024 permite usar fondos del Título V para esto. Los materiales de Count the Kicks ya son gratuitos para los proveedores de Washington gracias a Amerigroup, pero ningún programa estatal los lleva a todas las clínicas prenatales, centros de parto, oficinas de WIC y clínicas tribales. Washington registró 363 muertes fetales en 2024.\n\n[Por qué esto le importa a usted, en una o dos frases.]\n\nGracias,\n[Su nombre]\n[Su ciudad o pueblo]',
  alertSubject: 'Avisos de audiencias sobre Count the Kicks',
  alertBody: (em, nm, town) => 'Por favor avísenme cuando se presente un proyecto de ley de Count the Kicks y cuando tenga una audiencia.\n\nCorreo: ' + em + '\nNombre: ' + nm + '\nCiudad o distrito: ' + town,
  alertReady: href => 'Su correo de inscripción está listo. Si su programa de correo no se abrió, <a href="' + esc(href) + '">ábralo aquí</a> o escriba a <strong>' + CONTACT + '</strong>. No se envía nada hasta que usted presione enviar.',
  share: {name: 'Sí, con mi nombre', anon: 'Sí, pero sin mi nombre', none: 'No, es solo para que ustedes la lean'},
  storySubject: 'Mi historia para Washington Stillbirth Prevention',
  storyBody: (nm, town, em, sh, msg) => 'Nombre: ' + nm + '\nCiudad: ' + town + '\nCorreo: ' + em + '\nPermiso para compartir: ' + sh + '\n\n' + msg,
  storyReady: href => 'Su historia está lista. <a href="' + esc(href) + '">Ábrala en su programa de correo</a>, o use «Copiar mi historia» y envíela usted a <strong>' + CONTACT + '</strong>. Todavía no se ha enviado nada.',
  storyCopied: 'Copiado. Péguelo en un correo a ' + CONTACT + '.',
  storyCopyFail: 'No se pudo copiar aquí. Use «Preparar mi correo».',
  fmt: (m, s) => m + ' min ' + s + ' s',
  counting: t => 'Contando: ' + t,
  notStarted: 'Sin empezar',
  finished: 'Listo',
  done: t => '10 movimientos en ' + t + '. Guardado abajo.',
  tapLive: n => 'Movimiento ' + n + ' de 10',
  undoLive: n => 'Se quitó el último movimiento. ' + n + ' de 10.',
  undoSaved: 'Se quitó el conteo guardado. Sigue contando: 9 de 10.',
  noCounts: 'Todavía no hay conteos guardados',
  usual: m => 'Su tiempo habitual últimamente: unos ' + plural(m, 'minuto', 'minutos') + '.',
  more: 'Cuente unos días más para ver el patrón de su bebé.',
  clearQ: '¿Borrar todos los conteos guardados en este navegador? Esto no se puede deshacer.',
  cleared: 'Se borraron los conteos guardados.',
  warnUsual: 'Este conteo está tardando mucho más que su tiempo habitual. No espere a ver si cambia. Llame a su proveedor o vaya a la sala de partos ahora.',
  warn2h: 'Han pasado 2 horas sin sentir 10 movimientos. Llame a su proveedor o vaya a la sala de partos ahora.',
  minOnly: m => m + ' min',
  rTitle: 'Mis conteos de pataditas',
  rLine: (w, t) => w + ': ' + t + ' para 10 movimientos',
  rUsual: m => 'Tiempo habitual últimamente: unos ' + plural(m, 'minuto', 'minutos'),
  rCall: 'Llame a su proveedor o vaya a la sala de partos de inmediato si tarda mucho más de lo habitual en sentir 10 movimientos o si su bebé se mueve menos.',
  rFrom: 'De Washington Stillbirth Prevention, washingtonstillbirthprevention.org/es/',
  rSubject: 'Mi reporte de conteo de pataditas',
  rNeed: 'Termine al menos un conteo primero y después podrá enviar su reporte.',
  rNeedShort: 'Termine al menos un conteo primero.',
  rReady: href => 'Su reporte está listo. <a href="' + esc(href) + '">Ábralo en su programa de correo</a> y presione enviar. Si ese enlace no abre nada, use «Copiar reporte» y péguelo en un correo para usted.',
  rSaved: 'Guardado. Busque kick-count-report en sus descargas.',
  rSaveFail: 'No se pudo guardar aquí. Pruebe «Copiar reporte».',
  rCopied: 'Copiado. Péguelo en un correo o en sus notas.',
  rCopyFail: 'No se pudo copiar aquí. Pruebe el botón de correo.'
} : {
  looking: 'Looking up your district...',
  errNet: "We couldn't reach the address lookup right now. Pick your district number below, or try again in a minute.",
  errNone: "We couldn't find that address. Try adding the city and ZIP code, or pick your district number below.",
  errOut: 'That address is outside Washington State.',
  errDist: "We found the address but not its legislative district. Pick your district number below.",
  finderHtml: 'You can also use the Legislature\'s <a href="' + FINDER + '">District Finder</a>.',
  ld: d => 'Legislative District ' + d,
  sen: 'State Senator',
  rep: 'State Representative',
  vacant: 'Vacant seat',
  vacantNote: 'This seat is empty until a replacement is appointed.',
  fillBtn: 'Put these names in the letter',
  mailAll: k => k === 3 ? 'Email all three' : 'Email both',
  filled: 'Names added. Now add your town and a sentence or two about why this matters to you.',
  needLookup: 'Look up your legislators first, so we know who to send it to.',
  sentTo: a => "If your email app didn't open, copy the letter and send it to: " + a,
  greetRe: /^Dear [^\n]*/,
  greet: r => 'Dear ' + join(r.map((m, i) => m && (i ? 'Representative ' : 'Senator ') + m[0]).filter(Boolean), 'and') + ',',
  distRe: /(I live in [^\n]*?, )in (?:your district|the \d+(?:st|nd|rd|th) Legislative District)/,
  dist: d => 'in the ' + ord(d) + ' Legislative District',
  subject: 'Please sponsor a Count the Kicks bill in 2027',
  copied: 'Copied. Paste it into an email and edit it.',
  copyFail: "Copy didn't work here. The letter is selected, so press Ctrl+C (or Cmd+C on a Mac) to copy it.",
  tvSubject: 'Title V comment: stillbirth prevention',
  tvBody: "Hello,\n\nI live in Washington and I'm writing about the Title V Maternal and Child Health Block Grant.\n\nPlease make stillbirth prevention part of Washington's Title V work, starting with a statewide partnership with Count the Kicks, so every pregnant patient learns to track their baby's movements and to call when they slow down.\n\nThe federal Maternal and Child Health Stillbirth Prevention Act of 2024 allows Title V funds to be used for this. Count the Kicks materials are already free to Washington providers through Amerigroup, but no state program gets them into every prenatal clinic, birth center, WIC office and tribal clinic. Washington recorded 363 fetal deaths in 2024.\n\n[Why this matters to you, in a sentence or two.]\n\nThank you,\n[Your name]\n[Your city or town]",
  alertSubject: 'Hearing alerts for a Count the Kicks bill',
  alertBody: (em, nm, town) => 'Please email me when a Count the Kicks bill is filed and when it gets a hearing.\n\nEmail: ' + em + '\nName: ' + nm + '\nCity or district: ' + town,
  alertReady: href => 'Your sign-up email is ready. If your email app didn\'t open, <a href="' + esc(href) + '">open it here</a> or write to <strong>' + CONTACT + '</strong>. Nothing is sent until you press send.',
  share: {name: 'Yes, with my name', anon: 'Yes, but leave my name out', none: "No, it's just for you to read"},
  storySubject: 'My story for Washington Stillbirth Prevention',
  storyBody: (nm, town, em, sh, msg) => 'Name: ' + nm + '\nTown: ' + town + '\nEmail: ' + em + '\nOK to share: ' + sh + '\n\n' + msg,
  storyReady: href => 'Your story is ready. <a href="' + esc(href) + '">Open it in your email app</a>, or use Copy my story and send it yourself to <strong>' + CONTACT + '</strong>. Nothing has been sent yet.',
  storyCopied: 'Copied. Paste it into an email to ' + CONTACT + '.',
  storyCopyFail: "Copy didn't work here. Use Prepare my email instead.",
  fmt: (m, s) => m + ' min ' + s + ' sec',
  counting: t => 'Counting: ' + t,
  notStarted: 'Not started',
  finished: 'Done',
  done: t => '10 movements in ' + t + '. Saved below.',
  tapLive: n => 'Movement ' + n + ' of 10',
  undoLive: n => 'Last movement removed. ' + n + ' of 10.',
  undoSaved: 'Saved count removed. Still counting: 9 of 10.',
  noCounts: 'No counts saved yet',
  usual: m => 'Your usual time lately: about ' + plural(m, 'minute', 'minutes') + '.',
  more: "Count for a few more days to see your baby's pattern.",
  clearQ: 'Delete all saved counts from this browser? This cannot be undone.',
  cleared: 'Saved counts deleted.',
  warnUsual: "This count is taking much longer than your usual time. Don't wait to see if it changes. Call your provider or go to labor and delivery now.",
  warn2h: 'It has been 2 hours without 10 movements. Call your provider or go to labor and delivery now.',
  minOnly: m => m + ' min',
  rTitle: 'My kick counts',
  rLine: (w, t) => w + ': ' + t + ' to 10 movements',
  rUsual: m => 'Usual time lately: about ' + plural(m, 'minute', 'minutes'),
  rCall: 'Call your provider or go to labor and delivery right away if it takes a lot longer than usual to feel 10 movements, or if your baby is moving less.',
  rFrom: 'From Washington Stillbirth Prevention, washingtonstillbirthprevention.org',
  rSubject: 'My kick count report',
  rNeed: 'Finish at least one count first, then you can email your report.',
  rNeedShort: 'Finish at least one count first.',
  rReady: href => 'Your report is ready. <a href="' + esc(href) + '">Open it in your email app</a> and press send. If that link doesn\'t open anything, use Copy report and paste it into an email to yourself.',
  rSaved: 'Saved. Look for kick-count-report in your downloads.',
  rSaveFail: "Saving didn't work here. Try Copy report instead.",
  rCopied: 'Copied. Paste it into an email or your notes.',
  rCopyFail: "Copy didn't work here. Try the email button instead."
};

/* Mobile menu */
const nav = document.querySelector('nav'), menu = $('menu'), links = $('links');
if (nav && menu && links) {
  const isOpen = () => nav.classList.contains('open');
  const setOpen = o => { nav.classList.toggle('open', o); menu.setAttribute('aria-expanded', o ? 'true' : 'false'); };
  menu.addEventListener('click', () => setOpen(!isOpen()));
  links.addEventListener('click', e => { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && isOpen()) { setOpen(false); menu.focus(); } });
  document.addEventListener('click', e => { if (isOpen() && !nav.contains(e.target)) setOpen(false); });
  nav.addEventListener('focusout', e => { if (isOpen() && e.relatedTarget && !nav.contains(e.relatedTarget)) setOpen(false); });
  const pad = () => { document.documentElement.style.scrollPaddingTop = (getComputedStyle(nav).position === 'sticky' ? nav.offsetHeight + 12 : 12) + 'px'; };
  pad();
  addEventListener('resize', pad);
}

/* Hero chart, drawn from the example table */
const wk = $('wk'), rows = Array.from(document.querySelectorAll('#week tr[data-min]'));
if (wk && rows.length) {
  const v = rows.map(r => +r.dataset.min), mx = 33;
  const avg = Math.round(v.reduce((a, b) => a + b, 0) / v.length), lo = avg - 5, hi = avg + 5;
  wk.innerHTML = '<div class="rng" style="bottom:calc(22px + (100% - 22px) * ' + (lo / mx).toFixed(4) + ');height:calc((100% - 22px) * ' + ((hi - lo) / mx).toFixed(4) + ')"></div>' +
    rows.map((r, i) => '<div class="col"><i style="height:' + (v[i] / mx * 100).toFixed(2) + '%"' + (i === rows.length - 1 ? ' class="now"' : '') + '><b>' + v[i] + '</b></i><span>' + esc(r.cells[0].textContent) + '</span></div>').join('');
}

/* Legislator lookup and letter */
const lres = $('lres'), dsel = $('dsel'), addr = $('addr'), L = $('letter'), lmsg = $('lmsg');
let cur = null;
const emails = () => cur ? cur.r.filter(Boolean).map(m => m[2]) : [];
const legHref = () => mailto(emails().map(enc).join(','), S.subject, L.value);
const syncMail = () => { const a = $('mailall'); if (a) a.href = legHref(); };
const fill = () => { if (cur) { L.value = L.value.replace(S.greetRe, S.greet(cur.r)).replace(S.distRe, '$1' + S.dist(cur.d)); syncMail(); } };
const prepLetter = () => { if (L.value.includes('____')) fill(); };
const err = msg => { cur = null; lres.innerHTML = '<p class="lerr">' + esc(msg) + ' ' + S.finderHtml + '</p>'; };
const showDistrict = d => {
  const r = ROSTER[d];
  if (!r) { err(S.errDist); return; }
  cur = {d, r};
  dsel.value = String(d);
  lres.innerHTML = '<p class="dhead">' + S.ld(d) + '</p><ul class="leg" role="list">' + r.map((m, i) =>
    '<li><div class="who"><b>' + (m ? esc(m[0]) + ' (' + esc(m[1]) + ')' : S.vacant) + '</b><span>' + (i ? S.rep : S.sen) + (m ? '' : '. ' + S.vacantNote) + '</span></div>' +
    (m ? '<div class="reach"><a href="mailto:' + esc(enc(m[2])) + '">' + esc(m[2]) + '</a><a href="tel:+1' + m[3].replace(/\D/g, '') + '">' + esc(m[3]) + '</a></div>' : '') + '</li>').join('') +
    '</ul><div class="btns"><button class="btn" type="button" id="fill">' + S.fillBtn + '</button><a class="btn main" id="mailall" href="' + esc(legHref()) + '">' + S.mailAll(r.filter(Boolean).length) + '</a></div>';
  $('fill').addEventListener('click', () => { fill(); lmsg.textContent = S.filled; L.focus(); L.scrollIntoView({block: 'center'}); });
  $('mailall').addEventListener('click', e => { prepLetter(); e.currentTarget.href = legHref(); lmsg.textContent = S.sentTo(emails().join(', ')); });
};
if (lres && L) {
  $('lform').addEventListener('submit', e => {
    e.preventDefault();
    const a = addr.value.trim();
    if (!a) return;
    lres.innerHTML = '<p class="note">' + S.looking + '</p>';
    const cb = 'cgeo' + Date.now(), sc = document.createElement('script');
    let t = 0;
    // A late reply after a timeout lands on a no-op instead of throwing
    const done = () => { clearTimeout(t); window[cb] = () => {}; sc.remove(); };
    t = setTimeout(() => { done(); err(S.errNet); }, 12000);
    window[cb] = data => {
      done();
      const m = (data && data.result && data.result.addressMatches) || [];
      if (!m.length) { err(S.errNone); return; }
      const g = m[0].geographies || {};
      const st = (g.States && g.States[0] && g.States[0].STUSAB) || '';
      if (st && st !== 'WA') { err(S.errOut); return; }
      const k = Object.keys(g).find(x => /Legislative Districts - Upper/i.test(x));
      const rec = k && g[k][0];
      showDistrict(rec ? parseInt(rec.BASENAME || rec.SLDU || '', 10) : NaN);
    };
    const q = new URLSearchParams({address: a, benchmark: 'Public_AR_Current', vintage: 'Current_Current', layers: 'all', format: 'jsonp', callback: cb});
    sc.src = 'https://geocoding.geo.census.gov/geocoder/geographies/onelineaddress?' + q.toString();
    sc.onerror = () => { done(); err(S.errNet); };
    document.body.appendChild(sc);
  });
  dsel.addEventListener('change', () => { if (dsel.value) showDistrict(+dsel.value); });
  L.addEventListener('input', syncMail);
  $('lemail').addEventListener('click', () => {
    if (!cur) { lmsg.textContent = S.needLookup; addr.focus(); return; }
    prepLetter();
    lmsg.textContent = S.sentTo(emails().join(', '));
    location.href = legHref();
  });
  $('copy').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(L.value); lmsg.textContent = S.copied; }
    catch (x) { L.focus(); L.select(); lmsg.textContent = S.copyFail; }
  });
}

/* Title V comment email */
const tv = $('tvmail');
if (tv) tv.href = mailto(DOH, S.tvSubject, S.tvBody);

/* Hearing alert sign-up */
const af = $('aform');
if (af) af.addEventListener('submit', e => {
  e.preventDefault();
  const v = id => $(id).value.trim();
  const href = mailto(CONTACT, S.alertSubject, S.alertBody(v('aem'), v('anm'), v('atown')));
  const o = $('aout');
  o.innerHTML = S.alertReady(href);
  o.classList.add('on');
  location.href = href;
});

/* Story */
const sf = $('sform');
if (sf) {
  const story = () => {
    const v = id => $(id).value.trim(), sh = sf.querySelector('input[name=share]:checked');
    return S.storyBody(v('nm'), v('town'), v('em'), sh ? S.share[sh.value] : '', v('msg'));
  };
  const o = $('out');
  sf.addEventListener('submit', e => {
    e.preventDefault();
    o.innerHTML = S.storyReady(mailto(CONTACT, S.storySubject, story()));
    o.classList.add('on');
  });
  $('scopy').addEventListener('click', async () => {
    if (!sf.reportValidity()) return;
    try { await navigator.clipboard.writeText(story()); o.textContent = S.storyCopied; }
    catch (x) { o.textContent = S.storyCopyFail; }
    o.classList.add('on');
  });
}

/* Kick counter */
const tap = $('ctap');
if (tap) {
  const KEY = 'wsp-kicks';
  const cn = $('cn'), ct = $('ct'), hist = $('chist'), cavg = $('cavg'), cres = $('cres'), cwarn = $('cwarn'), clive = $('clive'), cundo = $('cundo'), cclear = $('cclear'), rmsg = $('rmsg');
  let n = 0, t0 = 0, tick = 0, thr = 7200, thrU = false, undoSave = null, log = [];
  try { log = JSON.parse(localStorage.getItem(KEY) || '[]'); if (!Array.isArray(log)) log = []; } catch (x) { log = []; }
  const store = () => { try { localStorage.setItem(KEY, JSON.stringify(log)); } catch (x) {} };
  // Counts saved before seconds were recorded only have whole minutes (m)
  const secs = r => typeof r.s === 'number' ? r.s : (+r.m || 0) * 60;
  const fmt = s => { s = Math.max(0, Math.floor(s)); return S.fmt(Math.floor(s / 60), String(s % 60).padStart(2, '0')); };
  const when = r => r.t ? new Date(r.t).toLocaleString(LOC, {weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit'}) : String(r.d || '');
  const dur = r => typeof r.s === 'number' ? fmt(r.s) : S.minOnly(r.m);
  const usual = () => { const l = log.slice(-7); return l.length >= 3 ? l.reduce((a, r) => a + secs(r), 0) / l.length : 0; };
  const say = m => { clive.textContent = m; };
  const setUndo = () => { cundo.disabled = !((t0 && n > 0) || undoSave); };
  const renderHist = () => {
    cclear.disabled = !log.length;
    if (!log.length) { hist.innerHTML = '<li><span>' + S.noCounts + '</span></li>'; cavg.textContent = ''; return; }
    hist.innerHTML = log.slice(-7).reverse().map(r => '<li><span>' + esc(when(r)) + '</span><span>' + esc(dur(r)) + '</span></li>').join('');
    const u = usual();
    cavg.textContent = u ? S.usual(Math.max(1, Math.round(u / 60))) : S.more;
  };
  const stopTick = () => { clearInterval(tick); tick = 0; };
  const startTick = () => {
    stopTick();
    const upd = () => {
      const el = (Date.now() - t0) / 1000;
      ct.textContent = S.counting(fmt(el));
      if (el >= thr && !cwarn.textContent) cwarn.innerHTML = '<p>' + (thrU ? S.warnUsual : S.warn2h) + '</p>';
    };
    upd();
    tick = setInterval(upd, 1000);
  };
  renderHist();
  setUndo();
  $('cstart').addEventListener('click', () => {
    const u = usual();
    // Warn at twice the usual time (at least 15 minutes over it), never later than 2 hours
    thrU = u > 0;
    thr = thrU ? Math.min(Math.max(2 * u, u + 900), 7200) : 7200;
    n = 0; t0 = Date.now(); undoSave = null;
    cn.textContent = '0'; cres.textContent = ''; cwarn.textContent = '';
    tap.disabled = false;
    tap.focus();
    startTick();
    setUndo();
  });
  tap.addEventListener('click', () => {
    if (!t0) return;
    n++;
    cn.textContent = String(n);
    if (n < 10) { say(S.tapLive(n)); setUndo(); return; }
    const now = Date.now(), s = Math.round((now - t0) / 1000);
    stopTick();
    tap.disabled = true;
    undoSave = {t0, thr, thrU};
    t0 = 0;
    log.push({d: new Date(now).toLocaleDateString(LOC, {weekday: 'short', month: 'short', day: 'numeric'}), m: Math.max(1, Math.round(s / 60)), s, t: now});
    log = log.slice(-30);
    store();
    renderHist();
    ct.textContent = S.finished;
    cres.textContent = S.done(fmt(s));
    cres.focus();
    setUndo();
  });
  cundo.addEventListener('click', () => {
    if (t0 && n > 0) { n--; cn.textContent = String(n); say(S.undoLive(n)); setUndo(); return; }
    if (!undoSave) return;
    log.pop();
    store();
    renderHist();
    ({t0, thr, thrU} = undoSave);
    undoSave = null;
    n = 9;
    cn.textContent = '9';
    cres.textContent = '';
    tap.disabled = false;
    startTick();
    say(S.undoSaved);
    setUndo();
    tap.focus();
  });
  $('creset').addEventListener('click', () => {
    stopTick();
    n = 0; t0 = 0; undoSave = null;
    cn.textContent = '0'; tap.disabled = true; ct.textContent = S.notStarted; cres.textContent = ''; cwarn.textContent = '';
    setUndo();
  });
  cclear.addEventListener('click', () => {
    if (!log.length || !confirm(S.clearQ)) return;
    log = [];
    undoSave = null;
    try { localStorage.removeItem(KEY); } catch (x) {}
    renderHist();
    setUndo();
    say(S.cleared);
    $('cstart').focus();
  });

  const report = () => {
    if (!log.length) return '';
    const l = log.slice(-7), avg = Math.max(1, Math.round(l.reduce((a, r) => a + secs(r), 0) / l.length / 60));
    return S.rTitle + '\n\n' + log.map(r => S.rLine(when(r), dur(r))).join('\n') + '\n\n' + S.rUsual(avg) + '\n\n' + S.rCall + '\n\n' + S.rFrom;
  };
  $('rform').addEventListener('submit', e => {
    e.preventDefault();
    const r = report();
    if (!r) { rmsg.textContent = S.rNeed; return; }
    const href = mailto(enc($('remail').value.trim()), S.rSubject, r);
    rmsg.innerHTML = S.rReady(href);
    location.href = href;
  });
  $('rsave').addEventListener('click', () => {
    const r = report();
    if (!r) { rmsg.textContent = S.rNeedShort; return; }
    try {
      const url = URL.createObjectURL(new Blob([r], {type: 'text/plain;charset=utf-8'}));
      const a = document.createElement('a');
      a.href = url;
      const n = new Date();
      a.download = 'kick-count-report-' + n.getFullYear() + '-' + String(n.getMonth() + 1).padStart(2, '0') + '-' + String(n.getDate()).padStart(2, '0') + '.txt';
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      rmsg.textContent = S.rSaved;
    } catch (x) { rmsg.textContent = S.rSaveFail; }
  });
  $('rcopy').addEventListener('click', async () => {
    const r = report();
    if (!r) { rmsg.textContent = S.rNeedShort; return; }
    try { await navigator.clipboard.writeText(r); rmsg.textContent = S.rCopied; }
    catch (x) { rmsg.textContent = S.rCopyFail; }
  });
}
})();
