/*

    lang-ia.js

    Interlingua translation for SNAP!

    edited for Interlingua by Ken Dickey

    Copyright (C) 2015 by Jens Mönig

    This file is part of Snap!.

    Snap! is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of
    the License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.



    Note to Translators:
    --------------------
    At this stage of development, Snap! can be translated to any LTR language
    maintaining the current order of inputs (formal parameters in blocks).

    Translating Snap! is easy:


    1. Download

    Download the sources and extract them into a local folder on your
    computer:

        <http://snap.berkeley.edu/snapsource/snap.zip>

    Use the German translation file (named 'lang-de.js') as template for your
    own translations. Start with editing the original file, because that way
    you will be able to immediately check the results in your browsers while
    you're working on your translation (keep the local copy of snap.html open
    in your web browser, and refresh it as you progress with your
    translation).

    Or via GitHub:
	git clone https://github.com/jmoenig/Snap--Build-Your-Own-Blocks.git

    2. Edit

    Edit the translation file with a regular text editor, or with your
    favorite JavaScript editor.

    In the first non-commented line (the one right below this
    note) replace "de" with the two-letter ISO 639-1 code for your language,
    e.g.

        fr - French => SnapTranslator.dict.fr = {
        it - Italian => SnapTranslator.dict.it = {
        pl - Polish => SnapTranslator.dict.pl = {
        pt - Portuguese => SnapTranslator.dict.pt = {
        es - Spanish => SnapTranslator.dict.es = {
        el - Greek => => SnapTranslator.dict.el = {
        ia - Interlingua => => SnapTranslator.dict.ia = {

    etc. (see <http://en.wikipedia.org/wiki/ISO_639-1>)


    3. Translate

    Then work through the dictionary, replacing the German strings against
    your translations. The dictionary is a straight-forward JavaScript ad-hoc
    object, for review purposes it should be formatted as follows:

        {
            'English string':
                'Translation string',
            'last key':
        }       'last value'

    and you only edit the indented value strings. Note that each key-value
    pair needs to be delimited by a comma, but that there shouldn't be a comma
    after the last pair (again, just overwrite the template file and you'll be
    fine).

    If something doesn't work, or if you're unsure about the formalities you
    should check your file with

        <http://JSLint.com>

    This will inform you about any missed commas etc.


    4. Accented characters

    Depending on which text editor and which file encoding you use you can
    directly enter special characters (e.g. Umlaut, accented characters) on
    your keyboard. However, I've noticed that some browsers may not display
    special characters correctly, even if other browsers do. So it's best to
    check your results in several browsers. If you want to be on the safe
    side, it's even better to escape these characters using Unicode.

        see: <http://0xcc.net/jsescape/>


    5. Block specs:

    At this time your translation of block specs will only work
    correctly, if the order of formal parameters and their types
    are unchanged. Placeholders for inputs (formal parameters) are
    indicated by a preceding % prefix and followed by a type
    abbreviation.

    For example:

        'say %s for %n secs'

    can currently not be changed into

        'say %n secs long %s'

    and still work as intended.

    Similarly

        'point towards %dst'

    cannot be changed into

        'point towards %cst'

    without breaking its functionality.


    6. Submit

    When you're done, rename the edited file by replacing the "de" part of the
    filename with the two-letter ISO 639-1 code for your language, e.g.

        fr - French => lang-fr.js
        it - Italian => lang-it.js
        pl - Polish => lang-pl.js
        pt - Portuguese => lang-pt.js
        es - Spanish => lang-es.js
        el - Greek => => lang-el.js
        ia - Interlingua => lange-ia.js

    and send it to me for inclusion in the official Snap! distribution.
    Once your translation has been included, Your name will the shown in the
    "Translators" tab in the "About Snap!" dialog box, and you will be able to
    directly launch a translated version of Snap! in your browser by appending

        lang:xx

    to the URL, xx representing your translations two-letter code.


    7. Known issues

    In some browsers accents or ornaments located in typographic ascenders
    above the cap height are currently (partially) cut-off.

    Enjoy!
    -Jens
*/

/*
 * De nota:
 * 
 * https://translatewiki.net/wiki/Portal:Ia
 * 
 * In my view, a "variable" is a box (cassa) in which one
 * stores a value -- vs a "constant", which is a named value.
 */

/*global SnapTranslator*/

SnapTranslator.dict.ia = {

/*
    Special characters: (see <http://0xcc.net/jsescape/>)

	None
*/

    // translations meta information
    'language_name':
        'Interlingua', // the name as it should appear in the language menu
    'language_translator':
        'Ken Dickey', // your name for the Translators tab
    'translator_e-mail':
        'Ken.Dickey@whidbey.com', // optional
    'last_changed':
        '2015-08-09', // this, too, will appear in the Translators tab

    // GUI
    // control bar:
    'untitled':
        'sin titulo', // 'nulle titulo'
    'development mode':
        'modo de disveloppamento',

    // categories:
    'Motion':
        'Movimento',
    'Looks':
        'Apparentia',
    'Sound':
        'Sono',
    'Pen':
        'Penna',
    'Control':
        'Controlo',
    'Sensing':
        'Sensation',
    'Operators':
        'Operatores',
    'Variables':
        'Variabiles',
    'Lists':
        'Listas',
    'Other':
        'Altere',

    // editor:
    'draggable':
        'trahibile',

    // tabs:
    'Scripts':
        'Scripts',
    'Costumes':
        'Costumes',
    'Sounds':
        'Sonos',

    // names:
    'Sprite':
        'Spirito', // 'Animo'
    'Stage':
        'Scena',

    // rotation styles:
    'don\'t rotate':
        'non rotabile',
    'can rotate':
        'rotabile',
    'only face left/right':
        'solmente rotabile a sinistra o dextra',

    // new sprite button:
    'add a new sprite':
        'adder spirito nove',

    // tab help
    'costumes tab help':
        'adjuta sur le scheda de costumes',
    'import a sound from your computer\nby dragging it into here':
        'importa un sono de tu computator\nper traher lo a hic',

    // primitive blocks:

    /*
        Attention Translators:
        ----------------------
        At this time your translation of block specs will only work
        correctly, if the order of formal parameters and their types
        are unchanged. Placeholders for inputs (formal parameters) are
        indicated by a preceding % prefix and followed by a type
        abbreviation.

        For example:

            'say %s for %n secs'

        can currently not be changed into

            'say %n secs long %s'

        and still work as intended.

        Similarly

            'point towards %dst'

        cannot be changed into

            'point towards %cst'

        without breaking its functionality.
    */

    // motion:
    'Stage selected:\nno motion primitives':
        'Scena seligite:\n'
	+ 'nulle primitivos de motion',

    'move %n steps':
        'mover %n passos',
    'turn %clockwise %n degrees':
        'tornar %clockwise %n grados',  // dirige
    'turn %counterclockwise %n degrees':
        'tornar %counterclockwise %n grados',
    'point in direction %dir':
        'punctar in direction %dir',
    'point towards %dst':
        'punctar verso %dst',
    'go to x: %n y: %n':
        'ir a x: %n y: %n',  // 'adi'
    'go to %dst':
        'ir a %dst',
    'glide %n secs to x: %n y: %n':
        'glissar in %n secundas a x: %n y: %n',
    'change x by %n':
        'cambiar x per %n',
    'set x to %n':
        'mitter x a %n', // 'poner in x le valor %n',
    'change y by %n':
        'cambiar y per %n',
    'set y to %n':
        'mitter y a %n',
    'if on edge, bounce':
        'si al bordo, recular',
    'x position':
        'position x',
    'y position':
        'position y',
    'direction':
        'direction',

    // looks:
    'switch to costume %cst':
        'cambiar al costume %cst',
    'next costume':
        'proxime costume',
    'costume #':
        'numero del costume',
    'say %s for %n secs':
        'dicer %s durante %n secundas',
    'say %s':
        'dicer %s',
    'think %s for %n secs':
        'pensar %s durante %n secundas',
    'think %s':
        'pensar %s',
    'Hello!':
        'Hallo!',
    'Hmm...':
        'Hmm...',
    'change %eff effect by %n':
        'cambiar effecto %eff per %n',
    'set %eff effect to %n':
        'mitter effecto %eff a %n',
    'clear graphic effects':
        'rader effectos graphic',
    'change size by %n':
        'cambiar dimension per %n',
    'set size to %n %':
        'mitter dimension a %n %',
    'size':
        'dimension',
    'show':
        'monstrar',  // 'monstrar'
    'hide':
        'celar',   // 'occultar'
    'go to front':
        'ir al fronte',  // 'ir al prime plano',
    'go back %n layers':
        'ir retro %n stratos',

    'development mode \ndebugging primitives:':
        'modo de disveloppamento \n'
	+ 'primitivos anti-defecto',
    'console log %mult%s':
        'registrar %mult%s in console',
    'alert %mult%s':
        'alertar %mult%s',

    // sound:
    'play sound %snd':
        'reproducer sono %snd',  // 'face sono %snd',
    'play sound %snd until done':
        'reproducer sono %snd usque al fin', // 'sona %snd integral',
    'stop all sounds':
        'stoppar tote le sonos',
    'rest for %n beats':
        'pausar durante %n pulsos',
    'play note %n for %n beats':
        'sonar nota %n durante %n pulsos',
    'change tempo by %n':
        'cambiar tempo per %n',
    'set tempo to %n bpm':
        'mitter tempo a %n pulsos per minuta',
    'tempo':
        'tempo',

    // pen:
    'clear':
        'rader',
    'pen down':
        'penna a basso',
    'pen up':
        'penna in alto',
    'set pen color to %clr':
        'mitter color del penna a %clr',
    'change pen color by %n':
        'cambiar color del penna a %n',
    'set pen color to %n':
        'mitter color del penna a %n',
    'change pen shade by %n':
        'cambiar tinta del penna per %n', 
    'set pen shade to %n':
        'mitter tinta del penna a %n',
    'change pen size by %n':
        'cambiar dimension del penna per %n',
    'set pen size to %n':
        'mitter dimension del penna a %n',
    'stamp':
        'timbrar',  // 'stampar'

    // control:
    'when %greenflag clicked':
        'quando on clicca sur %greenflag',
    'when %keyHat key pressed':
        'quando on preme le clave %keyHat',
    'when I am %interaction':
        'quando io es %interaction',
    'clicked':
        'cliccate',
    'pressed':
        'premite',
    'dropped':
        'deponite',
    'mouse-entered':
        'entrate con mus',
    'mouse-departed':
        'quitate con mus',  // 'quita'
    'when I receive %msgHat':
        'quando io recipe %msgHat',
    'broadcast %msg':
        'diffunder %msg',
    'broadcast %msg and wait':
        'diffunder %msg e attender',
    'Message name':
        'Nomine de message',
    'message':
        'message',
    'any message':
        'qualcunque message',
    'wait %n secs':
        'attende %n secundas',
    'wait until %b':
        'attende usque %b',
    'forever %c':
        'sin termino %c',
    'repeat %n %c':
        'repeter %n %c',
    'repeat until %b %c':
        'repeter usque %b %c',
    'if %b %c':
        'si %b %c',
    'if %b %c else %c':
        'si %b %c si non %c',
    'report %s':
        'reportar %s', // 'valor restituite'
    'stop %stopChoices':
        'stoppar %stopChoices',
    'all':
        'totes',
    'this script':
        'iste script',
    'this block':
        'iste bloco',
    'stop %stopOthersChoices':
        'stoppar %stopOthersChoices',
    'all but this script':
        'totes excepte iste script',
    'other scripts in sprite':
        'altere scripts in le spirito',
    'pause all %pause':
        'pausar tote le %pause',
    'run %cmdRing %inputs':
        'executar %cmdRing %inputs', // 'initio'
    'launch %cmdRing %inputs':
        'lancear %cmdRing %inputs',
    'call %repRing %inputs':
        'appellar %repRing %inputs',
    'run %cmdRing w/continuation':
        'executar %cmdRing con continuation',
    'call %cmdRing w/continuation':
        'appellar %cmdRing con continuation',
    'warp %c':
        'saltar %c', // [it, es] executar in modo turbo; [pt] executar atomicamente
    'when I start as a clone':
        'quando io comencia como clon',
    'create a clone of %cln':
        'crear un clon de %cln',
    'myself':
        'io mesme',
    'delete this clone':
        'deler iste clon',

    // sensing:
    'touching %col ?':
        'tocca io %col ?',
    'touching %clr ?':
        'tocca io %clr ?',
    'color %clr is touching %clr ?':
        'le color %clr tocca %clr ?',
    'ask %s and wait':
        'demandar %s e attender',
    'what\'s your name?':
        'que es tu nomine?',
    'answer':
        'responder',
    'mouse x':
        'x del mouse',
    'mouse y':
        'y del mouse',
    'mouse down?':
        'mouse a basso?',
    'key %key pressed?':
        'clave %key premite?',
    'distance to %dst':
        'distantia a %dst',
    'reset timer':
        'reinitialisar chronometro',
    'timer':
        'chronometro',
    '%att of %spr':
        '%att de %spr',
    'http:// %s':
        'http:// %s',
    'turbo mode?':
        'modo turbo?',
    'set turbo mode to %b':
        'mitter modo turbo a %b',

    'filtered for %clr':
        'filtrate pro %clr',
    'stack size':
        'dimension del pila',
    'frames':
        'quadros',

    // operators:
    '%n mod %n':
        '%n modulo %n',
    'round %n':
        'rotundar %n',
    '%fun of %n':
        '%fun de %n',
    'pick random %n to %n':
        'numero aleatori inter %n e %n',  // 'al hasardo'
    '%b and %b':
        '%b e %b',
    '%b or %b':
        '%b o %b',
    'not %b':
        'non %b',
    'true':
        'ver',
    'false':
        'false',
    'join %words':
        'unir %words',
    'split %s by %delim':
        'separar %s per %delim',
    'hello':
        'hallo',
    'world':
        'mundo',
    'letter %n of %s':
        'littera %n de %s',
    'length of %s':
        'longor de %s',
    'unicode of %s':
        'valor Unicode de %s',
    'unicode %n as letter':
        'valor Unicode %n como littera',
    'is %s a %typ ?':
        'es %s un %typ ?',
    'is %s identical to %s ?':
        'es %s identic a %s ?',

    'type of %s':
        'typo de %s',

    // variables:
    'Make a variable':
        'Crear un variabile',
    'Variable name':
        'Nomine del variabile',  // global?
    'Script variable name':
        'Nomine del variabile de script', // local?
    'Delete a variable':
        'Deler un variabile',

    'set %var to %s':
        'mitter %var a %s',
    'change %var by %n':
        'cambiar %var per %n',
    'show variable %var':
        'monstrar variabile %var',
    'hide variable %var':
        'celar variabile %var',  // 'occultar'
    'script variables %scriptVars':
        'variabiles de script %scriptVars',

    // lists:
    'list %exp':
        'lista %exp',
    '%s in front of %l':
        '%s es ante %l',
    'item %idx of %l':
        'elemento %idx de %l',
    'all but first of %l':
        'totes excepte le prime de %l',
    'length of %l':
        'longor de %l',
    '%l contains %s':
        '%l contine %s',
    'thing':
        'cosa',
    'add %s to %l':
        'adder %s a %l',
    'delete %ida of %l':
        'deler %ida de %l',
    'insert %s at %idx of %l':
        'inserer %s in %idx de %l',
    'replace item %idx of %l with %s':
        'reimplaciar elemento %idx de %l per %s',

    // other
    'Make a block':
        'Crear un bloco',

    // menus
    // snap menu
    'About...':
        'A proposito...',  
    'Reference manual':
        'Manual de referentia',
    'Snap! website':
        'Sito web de Snap!',
    'Download source':
        'Discargar fonte',
    'Switch back to user mode':
        'Retornar a modo usator',
    'disable deep-Morphic\ncontext menus\nand show user-friendly ones':
        'Disactivar le menus contextual\n'
        + 'de "deep-Morphic" e monstrar\n'
        + 'le menus facile a comprender',
    'Switch to dev mode':
        'Cambiar al modo disveloppator',
    'enable Morphic\ncontext menus\nand inspectors,\nnot user-friendly!':
        'Activar le menus contextual\n'
		+ 'e inspectores de Morphic,\n'
		+ 'non facile a usar!',

    // project menu
    'Project notes...':
        'Notas del projecto...',
    'New':
        'Nove',
    'Open...':
        'Aperir...',
    'Save':
        'Salveguardar',
    'Save to disk':
        'Salveguardar sur disco',
    'store this project\nin the downloads folder\n(in supporting browsers)':
        'immagazinar iste projecto\n'
        + 'in le dossier de discargamentos\n'
        + '(pro navigatores capabile de isto)',
    'Save As...':
        'Salveguardar como...',
    'Import...':
        'Importar...',
    'file menu import hint':
        'aviso sur importation pro le menu File',
    'Export project as plain text...':
        'Exportar projecto in texto simple...',
    'Export project...':
        'Exportar projecto...',
    'show project data as XML\nin a new browser window':
        'Monstrar datos del projecto in XML\n'
        + 'in un nove fenestra del navigator',
    'Export blocks...':
        'Exportar blocos...',
    'show global custom block definitions as XML\nin a new browser window':
        'monstrar le definitiones global de blocos personalisate in XML\n'
        + 'in un nove fenestra de navigator',
    'Import tools':
        'Importar utensiles',
    'load the official library of\npowerful blocks':
        'cargar le bibliotheca official\nde blocos potente',
    'Libraries...':
        'Bibliothecas...',
    'Import library':
        'Importar bibliotheca',

    // cloud menu
    'Login...':
        'Aperir session...',
    'Signup...':
        'Crear conto...',

    // settings menu
    'Language...':
        'Lingua...',
    'Zoom blocks...':
        'Zoom de blocos...',
    'Stage size...':
        'Dimension del scena...',
    'Stage size':
        'Dimension del scena',
    'Stage width':
        'Largor del scena',
    'Stage height':
        'Altor del scena',
    'Default':
        'Predefinition',
    'Blurred shadows':
        'Umbras indistincte',
    'uncheck to use solid drop\nshadows and highlights':
        'dismarcar pro usar umbras\n'
        + 'e illuminationes solide',
    'check to use blurred drop\nshadows and highlights':
        'marcar pro usar umbras\n'
        + 'e illuminationes indistincte',
    'Zebra coloring':
        'Coloration zebra',
    'check to enable alternating\ncolors for nested blocks':
        'marca pro activar colores\n'
        + 'alternante pro blocos annidate',
    'uncheck to disable alternating\ncolors for nested block':
        'dismarca pro disactivar colores\n'
        + 'alternante pro blocos annidate',
    'Dynamic input labels':
        'Etiquettas de entrata dynamic',
    'uncheck to disable dynamic\nlabels for variadic inputs':
        'dismarca pro disactivar etiquettas\n'
        + 'dynamic pro entratas variadic',
    'check to enable dynamic\nlabels for variadic inputs':
        'marca pro activar etiquettas\n'
        + 'dynamic pro entratas variadic',
    'Prefer empty slot drops':
        'Preferer a deponer in spatio vacue', 
    'settings menu prefer empty slots hint':
        'marca isto pro preferer un spatio vacue\n'
        + ' quando traher e deponer un elemento',
    'uncheck to allow dropped\nreporters to kick out others':
        'dismarca isto pro permitter que\n'
            + 'deponer un reportator displacia un altere',
    'Long form input dialog':
        'Dialogo de entrata in forma longe',
    'Plain prototype labels':
        'Etiquettas de prototypo simple',
    'uncheck to always show (+) symbols\nin block prototype labels':
        'dismarca pro sempre monstrar (+) symbolos\n'
        + 'in etiquettas de prototypo de bloco',
    'check to hide (+) symbols\nin block prototype labels':
        'marca pro celar (+) symbolos\n'
        + 'in etiquettas de prototypo de bloco',
    'check to always show slot\ntypes in the input dialog':
        'marca pro sempre monstrar typos\n'
        + 'de spatio in le dialogo de entrata',
    'uncheck to use the input\ndialog in short form':
        'dismarca pro usar le dialogo\nde entrata in forma curte',
    'Virtual keyboard':
        'Claviero virtual',
    'uncheck to disable\nvirtual keyboard support\nfor mobile devices':
        'dismarca pro disactivar\nle claviero virtual\n'
            + 'pro dispositivos mobile',
    'check to enable\nvirtual keyboard support\nfor mobile devices':
        'marca pro activar\nle claviero virtual\n'
            + 'pro dispositivos mobile',
    'Input sliders':
        'Glissatores de entrata',
    'uncheck to disable\ninput sliders for\nentry fields':
        'dismarca pro disactivar\n'
        + 'le glissatores de entrata\n'
        + 'pro campos de entrata',
    'check to enable\ninput sliders for\nentry fields':
        'marca pro activar\n'
         + 'le glissatores de entrata\n'
         + 'pro campos de entrata',
    'Clicking sound':
        'Sono de clic',
    'uncheck to turn\nblock clicking\nsound off':
        'dismarca pro disactivar\nle sono de cliccar\nun bloco',
    'check to turn\nblock clicking\nsound on':
        'marca pro activar\nle sono de cliccar\nun bloco',
    'Animations':
        'Animationes',
    'uncheck to disable\nIDE animations':
        'dismarca pro disactivar\nanimationes IDE',
    'Turbo mode':
        'Modo turbo',
    'check to prioritize\nscript execution':
        'marca pro priorisar\nle execution de scripts'
    'uncheck to run scripts\nat normal speed':
        'dismarca pro executar scripts\n'
        + 'a velocitate normal', // 'celeritate'
    'check to enable\nIDE animations':
        'marca pro activar \nanimationes IDE',
    'Thread safe scripts':
        'Scripts secur pro execution in parallel',
    'uncheck to allow\nscript reentrance':
        'dismarca pro permitter\nle reentrata de scripts',
    'check to disallow\nscript reentrance':
        'marca pro impedir\nle reentrata de scripts',
    'Prefer smooth animations':
        'Preferer aminationes lisie',
    'uncheck for greater speed\nat variable frame rates':
        'dismarca pro un velocitate maximal\n'
         + 'a frequentias variabile de photogrammas',
    'check for smooth, predictable\nanimations across computers':
        'marca pro animationes lisie e\n'
        + 'previsibile in diverse computatores', // multi-platteforma
    'Flat line ends':
        'Fines platte de lineas',
    'check for flat ends of lines':
        'marca pro fines platte de lineas',
    'uncheck for round ends of lines':
        'dismarca pro fines rotunde de lineas',

    // inputs
    'with inputs':
        'con entratas',
    'input names:':
        'nomines de entrata:',
    'Input Names:':
        'Nomines de entrata:',
    'input list:':
        'lista de entrata:',

    // context menus:
    'help':
        'adjuta',

    // palette:
    'hide primitives':
        'celar primitivos',
    'show primitives':
        'monstrar primitivos',

    // blocks:
    'help...':
        'adjuta...',
    'relabel...':
        'reetiquettar...',
    'duplicate':
        'duplicar',
    'make a copy\nand pick it up':
        'facer un copia\ne prender lo',
    'only duplicate this block':
        'solmente duplicar iste bloco',
    'delete':
        'deler',
    'script pic...':
        'imagine de script...',
    'open a new window\nwith a picture of this script':
        'aperir un nove fenestra\n'
        + 'con un imagine de iste script',
    'ringify':
        'inquadrar',
    'unringify':
        'disinquadrar',

    // custom blocks:
    'delete block definition...':
        'deler definition del bloco',
    'edit...':
        'modifiar...',

    // sprites:
    'edit':
        'modificar',
    'move':
        'displaciar',
    'detach from':
        'distachar de',
    'detach all parts':
        'distachar tote le partes',
    'export...':
        'exportar...',

    // stage:
    'show all':
        'monstra totes',
    'pic...':
        'imagine...',
    'open a new window\nwith a picture of the stage':
        'aperir un nove fenestra\n'
		+ 'con un imagine del scena',

    // scripting area
    'clean up':
        'disincombrar',
    'arrange scripts\nvertically':
        'arrangiar scripts\n' + 'verticalmente',
    'add comment':
        'adder un commento',
    'undrop':
        'reprender',
    'undo the last\nblock drop\nin this pane':
        'discfacer le ultime\ndeposition de un bloco\nin iste pannello',
    'scripts pic...':
        'imagine de scripts...',
    'open a new window\nwith a picture of all scripts':
        'aperir un nove fenestra\ncon un imagine de tote le scripts',
    'make a block...':
        'crear un bloco...',

    // costumes
    'rename':
        'renominar',
    'export':
        'exportar',
    'rename costume':
        'renominar costume',

    // sounds
    'Play sound':
        'Reproducer sono',
    'Stop sound':
        'Stoppar sono',
    'Stop':
        'Stop',
    'Play':
        'Sonar',
    'rename sound':
        'renominar sono',

    // dialogs
    // buttons
    'OK':
        'OK',
    'Ok':
        'OK',
    'Cancel':
        'Cancellar',
    'Yes':
        'Si',
    'No':
        'No',

    // help
    'Help':
        'Adjuta',

    // zoom blocks
    'Zoom blocks':
        'Zoom de blocos',
    'build':
        'construer',
    'your own':
        'le tue',
    'blocks':
        'blocos',
    'normal (1x)':
        'normal (1x)',
    'demo (1.2x)':
        'demo (1.2x)',
    'presentation (1.4x)':
        'presentation (1.4x)',
    'big (2x)':
        'grande (2x)',
    'huge (4x)':
        'enorme (4x)',
    'giant (8x)':
        'gigantesc (8x)',
    'monstrous (10x)':  // 'monstruose'
        'monstruose (10x)',

    // Project Manager
    'Untitled':
        'Sin titulo',  // 'Sin nomine'
    'Open Project':
        'Projecto aperte',
    '(empty)':
        '(vacue)',
    'Saved!':
        'Salveguardate!',
    'Delete Project':
        'Deler projecto',
    'Are you sure you want to delete':
        'Es tu secur de voler deler',
    'rename...':
        'renominar...',

    // costume editor
    'Costume Editor':
        'Editor de costumes',
    'click or drag crosshairs to move the rotation center':
        'clicca o trahe le cruces pro displaciar le centro de rotation',

    // project notes
    'Project Notes':
        'Notas del projecto',

    // new project
    'New Project':
        'Nove projecto',
    'Replace the current project with a new one?':
        'Reimplaciar le projecto existente per un nove?',

    // save project
    'Save Project As...':
        'Salveguardar projecto como...',

    // export blocks
    'Export blocks':
        'Exportar blocos',
    'Import blocks':
        'Importar blocos',
    'this project doesn\'t have any\ncustom global blocks yet':
        'iste projecto non ha ancora\nblocos global personalisate',
    'select':
        'seliger',
    'none':
        'nulle',  // 'necun'

    // variable dialog
    'for all sprites':
        'pro tote le spiritos',
    'for this sprite only':
        'solmente pro iste spirito',

    // block dialog
    'Change block':
        'Cambiar bloco',
    'Command':
        'Commando',
    'Reporter':
        'Reportator',
    'Predicate':
        'Predicato',

    // block editor
    'Block Editor':
        'Editor de blocos',
    'Apply':
        'Applicar',

    // block deletion dialog
    'Delete Custom Block':
        'Deler bloco personalisate',
    'block deletion dialog text':
        'Texto del dialogo de deletion de bloco',

    // input dialog
    'Create input name':
        'Crear nomine de entrata',
    'Edit input name':
        'Modifiar nomine de entrata',
    'Edit label fragment':
        'Modificar framento de etiquetta',
    'Title text':
        'Texto del titulo',
    'Input name':
        'Nomine del entrata',
    'Delete':
        'Deler',
    'Object':
        'Objecto',
    'Number':
        'Numero',
    'Text':
        'Texto',
    'List':
        'Lista',
    'Any type':
        'Qualcunque typo',
    'Boolean (T/F)':
        'Boolean (V/F)',
    'Command\n(inline)':
        'Commando\n(in linea)',
    'Command\n(C-shape)':
        'Commando\n(in forma de C)',
    'Any\n(unevaluated)':
        'Qualcunque\n(non evalutate)',
    'Boolean\n(unevaluated)':
        'Boolean\n(non evalutate)',
    'Single input.':
        'Entrata singule.',
    'Default Value:':
        'Valor predefinite:', // normal
    'Multiple inputs (value is list of inputs)':
        'Plure entratas (le valor es le lista de entratas)', 
    'Upvar - make internal variable visible to caller':
        'Upvar: render un variabile interne visibile pro le appellator', 

    // About Snap
    'About Snap':
        'A proposito de Snap',
    'Back...':
        'Retornar...',
    'License...':
        'Licentia...',
    'Modules...':
        'Modulos...',
    'Credits...':
        'Creditos...',
    'Translators...':
        'Traductores...',
    'License':
        'Licentia',
    'current module versions:':
        'versiones actual del modulos:',
    'Contributors':
        'Contributores',
    'Translations':
        'Traductiones..',

    // variable watchers (observa loco de valores = cassa)
    'normal':
        'normal',
    'large':
        'grande',
    'slider':
        'glissator',
    'slider min...':
        'glissator minime...',
    'slider max...':
        'glissator maxime...',
    'import...':
        'importar...',
    'Slider minimum value':
        'Valor minime pro glissator',
    'Slider maximum value':
        'Valor maxime pro glissator',

    // list watchers
    'length: ':
        'longor: ',

    // coments
    'add comment here...':
        'adde commento hic...',

    // drow downs
    // directions
    '(90) right':
        '(90) dextra',
    '(-90) left':
        '(-90) sinistra',
    '(0) up':
        '(0) alto',
    '(180) down':
        '(180) basso',

    // collision detection
    'mouse-pointer':
        'cursor del mouse',
    'edge':
        'bordo',
    'pen trails':
        'tracias de penna',

    // costumes
    'Turtle':
        'Tortuca',
    'Empty':
        'Vacue',

    // graphical effects
    'brightness':
        'brillantia', // 'nitor'
    'ghost':
        'phantasma',  // 'spectro'
    'negative':
        'negative',
    'comic':
        'comic',
    'confetti':
        'confetti',

    // keys
    'space':
        'spatio',
    'up arrow':
        'flecha in alto',  // 'sagitta'
    'down arrow':
        'flecha a basso',
    'right arrow':
        'flecha a dextra',
    'left arrow':
        'flecha a sinistra',
    'a':
        'a',
    'b':
        'b',
    'c':
        'c',
    'd':
        'd',
    'e':
        'e',
    'f':
        'f',
    'g':
        'g',
    'h':
        'h',
    'i':
        'i',
    'j':
        'j',
    'k':
        'k',
    'l':
        'l',
    'm':
        'm',
    'n':
        'n',
    'o':
        'o',
    'p':
        'p',
    'q':
        'q',
    'r':
        'r',
    's':
        's',
    't':
        't',
    'u':
        'u',
    'v':
        'v',
    'w':
        'w',
    'x':
        'x',
    'y':
        'y',
    'z':
        'z',
    '0':
        '0',
    '1':
        '1',
    '2':
        '2',
    '3':
        '3',
    '4':
        '4',
    '5':
        '5',
    '6':
        '6',
    '7':
        '7',
    '8':
        '8',
    '9':
        '9',

    // messages
    'new...':
        'nove...',

    // math functions
    'abs':
        'abs',
    'floor':
        'rotundar a infra',
    'sqrt':
        'sqrt',
    'sin':
        'sin',
    'cos':
        'cos',
    'tan':
        'tan',
    'asin':
        'asin',
    'acos':
        'acos',
    'atan':
        'atan',
    'ln':
        'ln',
    'e^':
        'e^',

    // delimiters
    'letter':
        'littera',
    'whitespace':
        'spatio blanc',  // spatio vacue'
    'line':
        'linea',
    'tab':
        'tabulator',
    'cr':
        'fin de linea',

    // data types
    'number':
        'numero',
    'text':
        'texto',
    'Boolean':
        'Boolean',
    'list':
        'lista',
    'command':
        'commando',
    'reporter':
        'reportator',
    'predicate':
        'predicato',

    // list indices
    'last':
        'ultime',
    'any':
        'qualcunque'
};
