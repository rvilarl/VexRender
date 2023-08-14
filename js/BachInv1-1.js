// @@ Invention No. 1 p 2/2  by JS Bach
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = Vex.Flow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1590.1531536000011');
svg.setAttributeNS('', 'height', '2057.8452576000013');
svg.setAttributeNS('', 'viewBox', '0 0 1360 1760');
//
// create the musical objects
VF.setMusicFont("Gonville","Bravura","Custom");
const fmtsmo8092310 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo80923v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo80923v0ar = [];
const smo80900 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo80900.setAttribute('id', 'smo80900');
smo80923v0ar.push(smo80900);
const smo80901 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
smo80901.setAttribute('id', 'smo80901');
const smo809010acc = new VF.Accidental('#');
smo80901.addModifier(smo809010acc, 0);
smo80923v0ar.push(smo80901);
const smo80902 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo80902.setAttribute('id', 'smo80902');
smo80923v0ar.push(smo80902);
const smo80903 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo80903.setAttribute('id', 'smo80903');
smo80923v0ar.push(smo80903);
const smo80904 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo80904.setAttribute('id', 'smo80904');
smo80923v0ar.push(smo80904);
const smo80905 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo80905.setAttribute('id', 'smo80905');
smo80923v0ar.push(smo80905);
const smo80906 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo80906.setAttribute('id', 'smo80906');
smo80923v0ar.push(smo80906);
const smo80907 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo80907.setAttribute('id', 'smo80907');
smo80923v0ar.push(smo80907);
smo80923v0.addTickables(smo80923v0ar)
fmtsmo8092310.joinVoices([smo80923v0]);
const fmtsmo8154010 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo81540v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81540v0ar = [];
const smo81509 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo81509.setAttribute('id', 'smo81509');
smo81540v0ar.push(smo81509);
const smo81510 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo81510.setAttribute('id', 'smo81510');
const smo815100acc = new VF.Accidental('b');
smo81510.addModifier(smo815100acc, 0);
smo81540v0ar.push(smo81510);
const smo81511 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo81511.setAttribute('id', 'smo81511');
smo81540v0ar.push(smo81511);
const smo81512 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo81512.setAttribute('id', 'smo81512');
smo81540v0ar.push(smo81512);
const smo81513 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo81513.setAttribute('id', 'smo81513');
smo81540v0ar.push(smo81513);
const smo81514 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo81514.setAttribute('id', 'smo81514');
smo81540v0ar.push(smo81514);
const smo81515 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo81515.setAttribute('id', 'smo81515');
smo81540v0ar.push(smo81515);
const smo81516 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo81516.setAttribute('id', 'smo81516');
smo81540v0ar.push(smo81516);
const smo81517 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo81517.setAttribute('id', 'smo81517');
smo81540v0ar.push(smo81517);
const smo81518 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo81518.setAttribute('id', 'smo81518');
smo81540v0ar.push(smo81518);
const smo81519 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo81519.setAttribute('id', 'smo81519');
smo81540v0ar.push(smo81519);
const smo81520 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81520.setAttribute('id', 'smo81520');
smo81540v0ar.push(smo81520);
const smo81521 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo81521.setAttribute('id', 'smo81521');
smo81540v0ar.push(smo81521);
const smo81522 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo81522.setAttribute('id', 'smo81522');
smo81540v0ar.push(smo81522);
const smo81523 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81523.setAttribute('id', 'smo81523');
smo81540v0ar.push(smo81523);
const smo81524 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo81524.setAttribute('id', 'smo81524');
smo81540v0ar.push(smo81524);
smo81540v0.addTickables(smo81540v0ar)
fmtsmo8154010.joinVoices([smo81540v0]);
// create beam groups and tuplets for format grp smo81847 before formatting
const dirsmo83772 = smo80900.getStemDirection();
smo80900.setStemDirection(dirsmo83772);
smo80901.setStemDirection(dirsmo83772);
smo80902.setStemDirection(dirsmo83772);
smo80903.setStemDirection(dirsmo83772);
const smo83772 = new VF.Beam([smo80900,smo80901,smo80902,smo80903]);
const dirsmo83773 = smo80904.getStemDirection();
smo80904.setStemDirection(dirsmo83773);
smo80905.setStemDirection(dirsmo83773);
smo80906.setStemDirection(dirsmo83773);
smo80907.setStemDirection(dirsmo83773);
const smo83773 = new VF.Beam([smo80904,smo80905,smo80906,smo80907]);
const dirsmo83776 = smo81509.getStemDirection();
smo81509.setStemDirection(dirsmo83776);
smo81510.setStemDirection(dirsmo83776);
smo81511.setStemDirection(dirsmo83776);
smo81512.setStemDirection(dirsmo83776);
const smo83776 = new VF.Beam([smo81509,smo81510,smo81511,smo81512]);
const dirsmo83777 = smo81513.getStemDirection();
smo81513.setStemDirection(dirsmo83777);
smo81514.setStemDirection(dirsmo83777);
smo81515.setStemDirection(dirsmo83777);
smo81516.setStemDirection(dirsmo83777);
const smo83777 = new VF.Beam([smo81513,smo81514,smo81515,smo81516]);
const dirsmo83778 = smo81517.getStemDirection();
smo81517.setStemDirection(dirsmo83778);
smo81518.setStemDirection(dirsmo83778);
smo81519.setStemDirection(dirsmo83778);
smo81520.setStemDirection(dirsmo83778);
const smo83778 = new VF.Beam([smo81517,smo81518,smo81519,smo81520]);
const dirsmo83779 = smo81521.getStemDirection();
smo81521.setStemDirection(dirsmo83779);
smo81522.setStemDirection(dirsmo83779);
smo81523.setStemDirection(dirsmo83779);
smo81524.setStemDirection(dirsmo83779);
const smo83779 = new VF.Beam([smo81521,smo81522,smo81523,smo81524]);
 
// formatting measures in staff group smo81847
fmtsmo8092310.format([smo80923v0,smo81540v0], 571);
const stavesmo80923 = new VF.Stave(50, 220.00000000000023, 627);
stavesmo80923.setAttribute('id', 'stavesmo80923');
stavesmo80923.setBegBarType(1);
stavesmo80923.addClef('treble');
stavesmo80923.setContext(context);
stavesmo80923.draw();
smo80923v0.draw(context, stavesmo80923);
smo83772.setContext(context);
smo83772.draw();
smo83773.setContext(context);
smo83773.draw();
const stavesmo81540 = new VF.Stave(50, 323.0000000000002, 627);
stavesmo81540.setAttribute('id', 'stavesmo81540');
stavesmo81540.setBegBarType(1);
stavesmo81540.addClef('treble');
stavesmo81540.setContext(context);
stavesmo81540.draw();
smo81540v0.draw(context, stavesmo81540);
smo83776.setContext(context);
smo83776.draw();
smo83777.setContext(context);
smo83777.draw();
smo83778.setContext(context);
smo83778.draw();
smo83779.setContext(context);
smo83779.draw();
const leftsmo81847stavesmo809231 = new VF.StaveConnector(stavesmo80923, stavesmo81540).setType(3);
leftsmo81847stavesmo809231.setContext(context).draw();
const fmtsmo8094611 = new VF.Formatter();
//
// voices and notes for stave 0 11
const smo80946v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo80946v0ar = [];
const smo80924 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo80924.setAttribute('id', 'smo80924');
smo80946v0ar.push(smo80924);
const smo80925 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo80925.setAttribute('id', 'smo80925');
const smo809250acc = new VF.Accidental('#');
smo80925.addModifier(smo809250acc, 0);
smo80946v0ar.push(smo80925);
const smo80926 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/4/n"]}'))
smo80926.setAttribute('id', 'smo80926');
const smo809260acc = new VF.Accidental('#');
smo80926.addModifier(smo809260acc, 0);
smo80946v0ar.push(smo80926);
const smo80927 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo80927.setAttribute('id', 'smo80927');
smo80946v0ar.push(smo80927);
const smo80928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo80928.setAttribute('id', 'smo80928');
smo80946v0ar.push(smo80928);
const smo80929 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo80929.setAttribute('id', 'smo80929');
smo80946v0ar.push(smo80929);
const smo80930 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo80930.setAttribute('id', 'smo80930');
smo80946v0ar.push(smo80930);
smo80946v0.addTickables(smo80946v0ar)
fmtsmo8094611.joinVoices([smo80946v0]);
const fmtsmo8157211 = new VF.Formatter();
//
// voices and notes for stave 1 11
const smo81572v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81572v0ar = [];
const smo81541 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo81541.setAttribute('id', 'smo81541');
smo81572v0ar.push(smo81541);
const smo81542 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81542.setAttribute('id', 'smo81542');
smo81572v0ar.push(smo81542);
const smo81543 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo81543.setAttribute('id', 'smo81543');
smo81572v0ar.push(smo81543);
const smo81544 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo81544.setAttribute('id', 'smo81544');
smo81572v0ar.push(smo81544);
const smo81545 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo81545.setAttribute('id', 'smo81545');
smo81572v0ar.push(smo81545);
const smo81546 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo81546.setAttribute('id', 'smo81546');
smo81572v0ar.push(smo81546);
const smo81547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo81547.setAttribute('id', 'smo81547');
smo81572v0ar.push(smo81547);
const smo81548 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81548.setAttribute('id', 'smo81548');
smo81572v0ar.push(smo81548);
const smo81549 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo81549.setAttribute('id', 'smo81549');
smo81572v0ar.push(smo81549);
const smo81550 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo81550.setAttribute('id', 'smo81550');
smo81572v0ar.push(smo81550);
const smo81551 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo81551.setAttribute('id', 'smo81551');
smo81572v0ar.push(smo81551);
const smo81552 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo81552.setAttribute('id', 'smo81552');
smo81572v0ar.push(smo81552);
const smo81553 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/3/n"]}'))
smo81553.setAttribute('id', 'smo81553');
const smo815530acc = new VF.Accidental('#');
smo81553.addModifier(smo815530acc, 0);
smo81572v0ar.push(smo81553);
const smo81554 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo81554.setAttribute('id', 'smo81554');
smo81572v0ar.push(smo81554);
const smo81555 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo81555.setAttribute('id', 'smo81555');
smo81572v0ar.push(smo81555);
const smo81556 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo81556.setAttribute('id', 'smo81556');
smo81572v0ar.push(smo81556);
smo81572v0.addTickables(smo81572v0ar)
fmtsmo8157211.joinVoices([smo81572v0]);
// create beam groups and tuplets for format grp smo81847 before formatting
const dirsmo83782 = smo80924.getStemDirection();
smo80924.setStemDirection(dirsmo83782);
smo80925.setStemDirection(dirsmo83782);
smo80926.setStemDirection(dirsmo83782);
smo80927.setStemDirection(dirsmo83782);
const smo83782 = new VF.Beam([smo80924,smo80925,smo80926,smo80927]);
const dirsmo83783 = smo80928.getStemDirection();
smo80928.setStemDirection(dirsmo83783);
smo80929.setStemDirection(dirsmo83783);
const smo83783 = new VF.Beam([smo80928,smo80929]);
const dirsmo83786 = smo81541.getStemDirection();
smo81541.setStemDirection(dirsmo83786);
smo81542.setStemDirection(dirsmo83786);
smo81543.setStemDirection(dirsmo83786);
smo81544.setStemDirection(dirsmo83786);
const smo83786 = new VF.Beam([smo81541,smo81542,smo81543,smo81544]);
const dirsmo83787 = smo81545.getStemDirection();
smo81545.setStemDirection(dirsmo83787);
smo81546.setStemDirection(dirsmo83787);
smo81547.setStemDirection(dirsmo83787);
smo81548.setStemDirection(dirsmo83787);
const smo83787 = new VF.Beam([smo81545,smo81546,smo81547,smo81548]);
const dirsmo83788 = smo81549.getStemDirection();
smo81549.setStemDirection(dirsmo83788);
smo81550.setStemDirection(dirsmo83788);
smo81551.setStemDirection(dirsmo83788);
smo81552.setStemDirection(dirsmo83788);
const smo83788 = new VF.Beam([smo81549,smo81550,smo81551,smo81552]);
const dirsmo83789 = smo81553.getStemDirection();
smo81553.setStemDirection(dirsmo83789);
smo81554.setStemDirection(dirsmo83789);
smo81555.setStemDirection(dirsmo83789);
smo81556.setStemDirection(dirsmo83789);
const smo83789 = new VF.Beam([smo81553,smo81554,smo81555,smo81556]);
 
// formatting measures in staff group smo81847
fmtsmo8094611.format([smo80946v0,smo81572v0], 568);
const stavesmo80946 = new VF.Stave(677, 220.00000000000023, 582);
stavesmo80946.setAttribute('id', 'stavesmo80946');
stavesmo80946.setBegBarType(VF.Barline.type.NONE);
stavesmo80946.setContext(context);
stavesmo80946.draw();
smo80946v0.draw(context, stavesmo80946);
smo83782.setContext(context);
smo83782.draw();
smo83783.setContext(context);
smo83783.draw();
const stavesmo81572 = new VF.Stave(677, 323.0000000000002, 582);
stavesmo81572.setAttribute('id', 'stavesmo81572');
stavesmo81572.setBegBarType(VF.Barline.type.NONE);
stavesmo81572.setContext(context);
stavesmo81572.draw();
smo81572v0.draw(context, stavesmo81572);
smo83786.setContext(context);
smo83786.draw();
smo83787.setContext(context);
smo83787.draw();
smo83788.setContext(context);
smo83788.draw();
smo83789.setContext(context);
smo83789.draw();
const rightsmo81847stavesmo809461 = new VF.StaveConnector(stavesmo80946, stavesmo81572).setType(0);
rightsmo81847stavesmo809461.setContext(context).draw();
const fmtsmo8097812 = new VF.Formatter();
//
// voices and notes for stave 0 12
const smo80978v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo80978v0ar = [];
const smo80947 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo80947.setAttribute('id', 'smo80947');
smo80978v0ar.push(smo80947);
const smo80948 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo80948.setAttribute('id', 'smo80948');
smo80978v0ar.push(smo80948);
const smo80949 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo80949.setAttribute('id', 'smo80949');
const smo809490acc = new VF.Accidental('#');
smo80949.addModifier(smo809490acc, 0);
smo80978v0ar.push(smo80949);
const smo80950 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo80950.setAttribute('id', 'smo80950');
const smo809500acc = new VF.Accidental('#');
smo80950.addModifier(smo809500acc, 0);
smo80978v0ar.push(smo80950);
const smo80951 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo80951.setAttribute('id', 'smo80951');
smo80978v0ar.push(smo80951);
const smo80952 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo80952.setAttribute('id', 'smo80952');
smo80978v0ar.push(smo80952);
const smo80953 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo80953.setAttribute('id', 'smo80953');
smo80978v0ar.push(smo80953);
const smo80954 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo80954.setAttribute('id', 'smo80954');
smo80978v0ar.push(smo80954);
const smo80955 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo80955.setAttribute('id', 'smo80955');
smo80978v0ar.push(smo80955);
const smo80956 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo80956.setAttribute('id', 'smo80956');
smo80978v0ar.push(smo80956);
const smo80957 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo80957.setAttribute('id', 'smo80957');
smo80978v0ar.push(smo80957);
const smo80958 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo80958.setAttribute('id', 'smo80958');
smo80978v0ar.push(smo80958);
const smo80959 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo80959.setAttribute('id', 'smo80959');
smo80978v0ar.push(smo80959);
const smo80960 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo80960.setAttribute('id', 'smo80960');
smo80978v0ar.push(smo80960);
const smo80961 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo80961.setAttribute('id', 'smo80961');
smo80978v0ar.push(smo80961);
const smo80962 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo80962.setAttribute('id', 'smo80962');
smo80978v0ar.push(smo80962);
smo80978v0.addTickables(smo80978v0ar)
fmtsmo8097812.joinVoices([smo80978v0]);
const fmtsmo8160112 = new VF.Formatter();
//
// voices and notes for stave 1 12
const smo81601v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81601v0ar = [];
const smo81573 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo81573.setAttribute('id', 'smo81573');
smo81601v0ar.push(smo81573);
const smo81574 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo81574.setAttribute('id', 'smo81574');
smo81601v0ar.push(smo81574);
const smo81575 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo81575.setAttribute('id', 'smo81575');
smo81575.addModifier(new VF.Dot(), 0);
const smo81576 = new VF.Ornament('mordent_inverted');
smo81575.addModifier(smo81576, 0);
smo81601v0ar.push(smo81575);
const smo81577 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81577.setAttribute('id', 'smo81577');
smo81601v0ar.push(smo81577);
const smo81578 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo81578.setAttribute('id', 'smo81578');
smo81601v0ar.push(smo81578);
const smo81579 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo81579.setAttribute('id', 'smo81579');
smo81601v0ar.push(smo81579);
const smo81580 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo81580.setAttribute('id', 'smo81580');
smo81601v0ar.push(smo81580);
const smo81581 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo81581.setAttribute('id', 'smo81581');
const smo815810acc = new VF.Accidental('n');
smo815810acc.setAsCautionary();
smo81581.addModifier(smo815810acc, 0);
smo81601v0ar.push(smo81581);
const smo81582 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
smo81582.setAttribute('id', 'smo81582');
const smo815820acc = new VF.Accidental('#');
smo81582.addModifier(smo815820acc, 0);
smo81601v0ar.push(smo81582);
const smo81583 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo81583.setAttribute('id', 'smo81583');
smo81601v0ar.push(smo81583);
const smo81584 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/3/n"]}'))
smo81584.setAttribute('id', 'smo81584');
const smo815840acc = new VF.Accidental('#');
smo81584.addModifier(smo815840acc, 0);
smo81601v0ar.push(smo81584);
const smo81585 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo81585.setAttribute('id', 'smo81585');
smo81601v0ar.push(smo81585);
smo81601v0.addTickables(smo81601v0ar)
fmtsmo8160112.joinVoices([smo81601v0]);
// create beam groups and tuplets for format grp smo81847 before formatting
const dirsmo83804 = smo80947.getStemDirection();
smo80947.setStemDirection(dirsmo83804);
smo80948.setStemDirection(dirsmo83804);
smo80949.setStemDirection(dirsmo83804);
smo80950.setStemDirection(dirsmo83804);
const smo83804 = new VF.Beam([smo80947,smo80948,smo80949,smo80950]);
const dirsmo83805 = smo80951.getStemDirection();
smo80951.setStemDirection(dirsmo83805);
smo80952.setStemDirection(dirsmo83805);
smo80953.setStemDirection(dirsmo83805);
smo80954.setStemDirection(dirsmo83805);
const smo83805 = new VF.Beam([smo80951,smo80952,smo80953,smo80954]);
const dirsmo83806 = smo80955.getStemDirection();
smo80955.setStemDirection(dirsmo83806);
smo80956.setStemDirection(dirsmo83806);
smo80957.setStemDirection(dirsmo83806);
smo80958.setStemDirection(dirsmo83806);
const smo83806 = new VF.Beam([smo80955,smo80956,smo80957,smo80958]);
const dirsmo83807 = smo80959.getStemDirection();
smo80959.setStemDirection(dirsmo83807);
smo80960.setStemDirection(dirsmo83807);
smo80961.setStemDirection(dirsmo83807);
smo80962.setStemDirection(dirsmo83807);
const smo83807 = new VF.Beam([smo80959,smo80960,smo80961,smo80962]);
const dirsmo83810 = smo81573.getStemDirection();
smo81573.setStemDirection(dirsmo83810);
smo81574.setStemDirection(dirsmo83810);
const smo83810 = new VF.Beam([smo81573,smo81574]);
const dirsmo83811 = smo81575.getStemDirection();
smo81575.setStemDirection(dirsmo83811);
smo81577.setStemDirection(dirsmo83811);
const smo83811 = new VF.Beam([smo81575,smo81577]);
const dirsmo83812 = smo81578.getStemDirection();
smo81578.setStemDirection(dirsmo83812);
smo81579.setStemDirection(dirsmo83812);
smo81580.setStemDirection(dirsmo83812);
smo81581.setStemDirection(dirsmo83812);
const smo83812 = new VF.Beam([smo81578,smo81579,smo81580,smo81581]);
const dirsmo83813 = smo81582.getStemDirection();
smo81582.setStemDirection(dirsmo83813);
smo81583.setStemDirection(dirsmo83813);
smo81584.setStemDirection(dirsmo83813);
smo81585.setStemDirection(dirsmo83813);
const smo83813 = new VF.Beam([smo81582,smo81583,smo81584,smo81585]);
 
// formatting measures in staff group smo81847
fmtsmo8097812.format([smo80978v0,smo81601v0], 623);
const stavesmo80978 = new VF.Stave(50, 483.0000000000002, 678);
stavesmo80978.setAttribute('id', 'stavesmo80978');
stavesmo80978.setBegBarType(1);
stavesmo80978.addClef('treble');
stavesmo80978.setContext(context);
stavesmo80978.draw();
smo80978v0.draw(context, stavesmo80978);
smo83804.setContext(context);
smo83804.draw();
smo83805.setContext(context);
smo83805.draw();
smo83806.setContext(context);
smo83806.draw();
smo83807.setContext(context);
smo83807.draw();
const stavesmo81601 = new VF.Stave(50, 627.0000000000002, 678);
stavesmo81601.setAttribute('id', 'stavesmo81601');
stavesmo81601.setBegBarType(1);
stavesmo81601.addClef('bass');
stavesmo81601.setContext(context);
stavesmo81601.draw();
smo81601v0.draw(context, stavesmo81601);
smo83810.setContext(context);
smo83810.draw();
smo83811.setContext(context);
smo83811.draw();
smo83812.setContext(context);
smo83812.draw();
smo83813.setContext(context);
smo83813.draw();
const leftsmo81847stavesmo809781 = new VF.StaveConnector(stavesmo80978, stavesmo81601).setType(3);
leftsmo81847stavesmo809781.setContext(context).draw();
const fmtsmo8101013 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo81010v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81010v0ar = [];
const smo80979 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo80979.setAttribute('id', 'smo80979');
smo81010v0ar.push(smo80979);
const smo80980 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo80980.setAttribute('id', 'smo80980');
smo81010v0ar.push(smo80980);
const smo80981 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/5/n"]}'))
smo80981.setAttribute('id', 'smo80981');
const smo809810acc = new VF.Accidental('#');
smo80981.addModifier(smo809810acc, 0);
smo81010v0ar.push(smo80981);
const smo80982 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
smo80982.setAttribute('id', 'smo80982');
smo81010v0ar.push(smo80982);
const smo80983 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo80983.setAttribute('id', 'smo80983');
smo81010v0ar.push(smo80983);
const smo80984 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo80984.setAttribute('id', 'smo80984');
smo81010v0ar.push(smo80984);
const smo80985 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo80985.setAttribute('id', 'smo80985');
smo81010v0ar.push(smo80985);
const smo80986 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo80986.setAttribute('id', 'smo80986');
smo81010v0ar.push(smo80986);
const smo80987 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo80987.setAttribute('id', 'smo80987');
const smo809870acc = new VF.Accidental('#');
smo80987.addModifier(smo809870acc, 0);
smo81010v0ar.push(smo80987);
const smo80988 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo80988.setAttribute('id', 'smo80988');
smo81010v0ar.push(smo80988);
const smo80989 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo80989.setAttribute('id', 'smo80989');
smo81010v0ar.push(smo80989);
const smo80990 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo80990.setAttribute('id', 'smo80990');
smo81010v0ar.push(smo80990);
const smo80991 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo80991.setAttribute('id', 'smo80991');
const smo80992 = new VF.Ornament('mordent');
smo80991.addModifier(smo80992, 0);
smo81010v0ar.push(smo80991);
const smo80993 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo80993.setAttribute('id', 'smo80993');
smo81010v0ar.push(smo80993);
const smo80994 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo80994.setAttribute('id', 'smo80994');
smo81010v0ar.push(smo80994);
smo81010v0.addTickables(smo81010v0ar)
fmtsmo8101013.joinVoices([smo81010v0]);
const fmtsmo8162913 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo81629v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81629v0ar = [];
const smo81602 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo81602.setAttribute('id', 'smo81602');
smo81629v0ar.push(smo81602);
const smo81603 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo81603.setAttribute('id', 'smo81603');
smo81629v0ar.push(smo81603);
const smo81604 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo81604.setAttribute('id', 'smo81604');
smo81629v0ar.push(smo81604);
const smo81605 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo81605.setAttribute('id', 'smo81605');
smo81629v0ar.push(smo81605);
const smo81606 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo81606.setAttribute('id', 'smo81606');
smo81629v0ar.push(smo81606);
const smo81607 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81607.setAttribute('id', 'smo81607');
smo81629v0ar.push(smo81607);
const smo81608 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo81608.setAttribute('id', 'smo81608');
smo81629v0ar.push(smo81608);
const smo81609 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo81609.setAttribute('id', 'smo81609');
smo81629v0ar.push(smo81609);
const smo81610 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81610.setAttribute('id', 'smo81610');
smo81629v0ar.push(smo81610);
const smo81611 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo81611.setAttribute('id', 'smo81611');
smo81629v0ar.push(smo81611);
const smo81612 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81612.setAttribute('id', 'smo81612');
smo81629v0ar.push(smo81612);
const smo81613 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo81613.setAttribute('id', 'smo81613');
smo81629v0ar.push(smo81613);
smo81629v0.addTickables(smo81629v0ar)
fmtsmo8162913.joinVoices([smo81629v0]);
// create beam groups and tuplets for format grp smo81847 before formatting
const dirsmo83816 = smo80979.getStemDirection();
smo80979.setStemDirection(dirsmo83816);
smo80980.setStemDirection(dirsmo83816);
smo80981.setStemDirection(dirsmo83816);
smo80982.setStemDirection(dirsmo83816);
const smo83816 = new VF.Beam([smo80979,smo80980,smo80981,smo80982]);
const dirsmo83817 = smo80983.getStemDirection();
smo80983.setStemDirection(dirsmo83817);
smo80984.setStemDirection(dirsmo83817);
smo80985.setStemDirection(dirsmo83817);
smo80986.setStemDirection(dirsmo83817);
const smo83817 = new VF.Beam([smo80983,smo80984,smo80985,smo80986]);
const dirsmo83818 = smo80987.getStemDirection();
smo80987.setStemDirection(dirsmo83818);
smo80988.setStemDirection(dirsmo83818);
smo80989.setStemDirection(dirsmo83818);
smo80990.setStemDirection(dirsmo83818);
const smo83818 = new VF.Beam([smo80987,smo80988,smo80989,smo80990]);
const dirsmo83819 = smo80991.getStemDirection();
smo80991.setStemDirection(dirsmo83819);
smo80993.setStemDirection(dirsmo83819);
smo80994.setStemDirection(dirsmo83819);
const smo83819 = new VF.Beam([smo80991,smo80993,smo80994]);
const dirsmo83822 = smo81602.getStemDirection();
smo81602.setStemDirection(dirsmo83822);
smo81603.setStemDirection(dirsmo83822);
smo81604.setStemDirection(dirsmo83822);
smo81605.setStemDirection(dirsmo83822);
const smo83822 = new VF.Beam([smo81602,smo81603,smo81604,smo81605]);
const dirsmo83823 = smo81606.getStemDirection();
smo81606.setStemDirection(dirsmo83823);
smo81607.setStemDirection(dirsmo83823);
smo81608.setStemDirection(dirsmo83823);
smo81609.setStemDirection(dirsmo83823);
const smo83823 = new VF.Beam([smo81606,smo81607,smo81608,smo81609]);
const dirsmo83824 = smo81610.getStemDirection();
smo81610.setStemDirection(dirsmo83824);
smo81611.setStemDirection(dirsmo83824);
const smo83824 = new VF.Beam([smo81610,smo81611]);
const dirsmo83825 = smo81612.getStemDirection();
smo81612.setStemDirection(dirsmo83825);
smo81613.setStemDirection(dirsmo83825);
const smo83825 = new VF.Beam([smo81612,smo81613]);
 
// formatting measures in staff group smo81847
fmtsmo8101013.format([smo81010v0,smo81629v0], 518);
const stavesmo81010 = new VF.Stave(728, 483.0000000000002, 532);
stavesmo81010.setAttribute('id', 'stavesmo81010');
stavesmo81010.setBegBarType(VF.Barline.type.NONE);
stavesmo81010.setContext(context);
stavesmo81010.draw();
smo81010v0.draw(context, stavesmo81010);
smo83816.setContext(context);
smo83816.draw();
smo83817.setContext(context);
smo83817.draw();
smo83818.setContext(context);
smo83818.draw();
smo83819.setContext(context);
smo83819.draw();
const stavesmo81629 = new VF.Stave(728, 627.0000000000002, 532);
stavesmo81629.setAttribute('id', 'stavesmo81629');
stavesmo81629.setBegBarType(VF.Barline.type.NONE);
stavesmo81629.setContext(context);
stavesmo81629.draw();
smo81629v0.draw(context, stavesmo81629);
smo83822.setContext(context);
smo83822.draw();
smo83823.setContext(context);
smo83823.draw();
smo83824.setContext(context);
smo83824.draw();
smo83825.setContext(context);
smo83825.draw();
const rightsmo81847stavesmo810101 = new VF.StaveConnector(stavesmo81010, stavesmo81629).setType(0);
rightsmo81847stavesmo810101.setContext(context).draw();
const fmtsmo8103614 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo81036v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81036v0ar = [];
const smo81011 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo81011.setAttribute('id', 'smo81011');
const  smo84056 = new VF.Articulation('a.').setPosition(4);
smo81011.addModifier(smo84056, 0);
smo81036v0ar.push(smo81011);
const smo81013 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo81013.setAttribute('id', 'smo81013');
smo81036v0ar.push(smo81013);
const smo81014 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo81014.setAttribute('id', 'smo81014');
smo81036v0ar.push(smo81014);
const smo81015 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo81015.setAttribute('id', 'smo81015');
smo81036v0ar.push(smo81015);
const smo81016 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo81016.setAttribute('id', 'smo81016');
smo81036v0ar.push(smo81016);
const smo81017 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo81017.setAttribute('id', 'smo81017');
smo81036v0ar.push(smo81017);
const smo81018 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo81018.setAttribute('id', 'smo81018');
smo81036v0ar.push(smo81018);
const smo81019 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo81019.setAttribute('id', 'smo81019');
smo81036v0ar.push(smo81019);
const smo81020 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo81020.setAttribute('id', 'smo81020');
smo81036v0ar.push(smo81020);
smo81036v0.addTickables(smo81036v0ar)
fmtsmo8103614.joinVoices([smo81036v0]);
const fmtsmo8165614 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo81656v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81656v0ar = [];
const smo81630 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo81630.setAttribute('id', 'smo81630');
smo81656v0ar.push(smo81630);
const smo81631 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo81631.setAttribute('id', 'smo81631');
smo81656v0ar.push(smo81631);
const smo81632 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["cn/4/r"]}'))
smo81632.setAttribute('id', 'smo81632');
smo81656v0ar.push(smo81632);
const smo81633 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["en/4/r"]}'))
smo81633.setAttribute('id', 'smo81633');
smo81656v0ar.push(smo81633);
const smo81634 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81634.setAttribute('id', 'smo81634');
smo81656v0ar.push(smo81634);
const smo81635 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo81635.setAttribute('id', 'smo81635');
smo81656v0ar.push(smo81635);
const smo81636 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo81636.setAttribute('id', 'smo81636');
smo81656v0ar.push(smo81636);
const smo81637 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo81637.setAttribute('id', 'smo81637');
smo81656v0ar.push(smo81637);
const smo81638 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo81638.setAttribute('id', 'smo81638');
smo81656v0ar.push(smo81638);
const smo81639 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["c#/4/n"]}'))
smo81639.setAttribute('id', 'smo81639');
const smo816390acc = new VF.Accidental('#');
smo81639.addModifier(smo816390acc, 0);
smo81656v0ar.push(smo81639);
const smo81640 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81640.setAttribute('id', 'smo81640');
smo81656v0ar.push(smo81640);
smo81656v0.addTickables(smo81656v0ar)
fmtsmo8165614.joinVoices([smo81656v0]);
// create beam groups and tuplets for format grp smo81847 before formatting
const dirsmo83837 = smo81011.getStemDirection();
smo81011.setStemDirection(dirsmo83837);
smo81013.setStemDirection(dirsmo83837);
smo81014.setStemDirection(dirsmo83837);
smo81015.setStemDirection(dirsmo83837);
const smo83837 = new VF.Beam([smo81011,smo81013,smo81014,smo81015]);
const dirsmo83838 = smo81016.getStemDirection();
smo81016.setStemDirection(dirsmo83838);
smo81017.setStemDirection(dirsmo83838);
smo81018.setStemDirection(dirsmo83838);
smo81019.setStemDirection(dirsmo83838);
const smo83838 = new VF.Beam([smo81016,smo81017,smo81018,smo81019]);
const dirsmo83841 = smo81630.getStemDirection();
smo81630.setStemDirection(dirsmo83841);
smo81631.setStemDirection(dirsmo83841);
const smo83841 = new VF.Beam([smo81630,smo81631]);
const dirsmo83842 = smo81634.getStemDirection();
smo81634.setStemDirection(dirsmo83842);
smo81635.setStemDirection(dirsmo83842);
smo81636.setStemDirection(dirsmo83842);
const smo83842 = new VF.Beam([smo81634,smo81635,smo81636]);
const dirsmo83843 = smo81637.getStemDirection();
smo81637.setStemDirection(dirsmo83843);
smo81638.setStemDirection(dirsmo83843);
smo81639.setStemDirection(dirsmo83843);
smo81640.setStemDirection(dirsmo83843);
const smo83843 = new VF.Beam([smo81637,smo81638,smo81639,smo81640]);
 
// formatting measures in staff group smo81847
fmtsmo8103614.format([smo81036v0,smo81656v0], 568);
const stavesmo81036 = new VF.Stave(50, 793.0000000000002, 624);
stavesmo81036.setAttribute('id', 'stavesmo81036');
stavesmo81036.setBegBarType(1);
stavesmo81036.addClef('treble');
stavesmo81036.setContext(context);
stavesmo81036.draw();
smo81036v0.draw(context, stavesmo81036);
smo83837.setContext(context);
smo83837.draw();
smo83838.setContext(context);
smo83838.draw();
const stavesmo81656 = new VF.Stave(50, 927.0000000000002, 624);
stavesmo81656.setAttribute('id', 'stavesmo81656');
stavesmo81656.setBegBarType(1);
stavesmo81656.addClef('bass');
stavesmo81656.setContext(context);
stavesmo81656.draw();
smo81656v0.draw(context, stavesmo81656);
smo83841.setContext(context);
smo83841.draw();
smo83842.setContext(context);
smo83842.draw();
smo83843.setContext(context);
smo83843.draw();
const leftsmo81847stavesmo810361 = new VF.StaveConnector(stavesmo81036, stavesmo81656).setType(3);
leftsmo81847stavesmo810361.setContext(context).draw();
const fmtsmo8106115 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo81061v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81061v0ar = [];
const smo81037 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo81037.setAttribute('id', 'smo81037');
smo81061v0ar.push(smo81037);
const smo81038 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo81038.setAttribute('id', 'smo81038');
smo81061v0ar.push(smo81038);
const smo81039 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo81039.setAttribute('id', 'smo81039');
smo81061v0ar.push(smo81039);
const smo81040 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo81040.setAttribute('id', 'smo81040');
smo81061v0ar.push(smo81040);
const smo81041 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/5/n"]}'))
smo81041.setAttribute('id', 'smo81041');
smo81061v0ar.push(smo81041);
const smo81042 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo81042.setAttribute('id', 'smo81042');
smo81061v0ar.push(smo81042);
const smo81043 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo81043.setAttribute('id', 'smo81043');
smo81061v0ar.push(smo81043);
const smo81044 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo81044.setAttribute('id', 'smo81044');
smo81061v0ar.push(smo81044);
const smo81045 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo81045.setAttribute('id', 'smo81045');
smo81061v0ar.push(smo81045);
smo81061v0.addTickables(smo81061v0ar)
fmtsmo8106115.joinVoices([smo81061v0]);
const fmtsmo8168115 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo81681v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81681v0ar = [];
const smo81657 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo81657.setAttribute('id', 'smo81657');
smo81681v0ar.push(smo81657);
const smo81658 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo81658.setAttribute('id', 'smo81658');
smo81681v0ar.push(smo81658);
const smo81659 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo81659.setAttribute('id', 'smo81659');
smo81681v0ar.push(smo81659);
const smo81660 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo81660.setAttribute('id', 'smo81660');
smo81681v0ar.push(smo81660);
const smo81661 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo81661.setAttribute('id', 'smo81661');
smo81681v0ar.push(smo81661);
const smo81662 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo81662.setAttribute('id', 'smo81662');
smo81681v0ar.push(smo81662);
const smo81663 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo81663.setAttribute('id', 'smo81663');
smo81681v0ar.push(smo81663);
const smo81664 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo81664.setAttribute('id', 'smo81664');
smo81681v0ar.push(smo81664);
const smo81665 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo81665.setAttribute('id', 'smo81665');
smo81681v0ar.push(smo81665);
smo81681v0.addTickables(smo81681v0ar)
fmtsmo8168115.joinVoices([smo81681v0]);
// create beam groups and tuplets for format grp smo81847 before formatting
const dirsmo83846 = smo81037.getStemDirection();
smo81037.setStemDirection(dirsmo83846);
smo81038.setStemDirection(dirsmo83846);
smo81039.setStemDirection(dirsmo83846);
smo81040.setStemDirection(dirsmo83846);
const smo83846 = new VF.Beam([smo81037,smo81038,smo81039,smo81040]);
const dirsmo83847 = smo81041.getStemDirection();
smo81041.setStemDirection(dirsmo83847);
smo81042.setStemDirection(dirsmo83847);
smo81043.setStemDirection(dirsmo83847);
smo81044.setStemDirection(dirsmo83847);
const smo83847 = new VF.Beam([smo81041,smo81042,smo81043,smo81044]);
const dirsmo83850 = smo81658.getStemDirection();
smo81658.setStemDirection(dirsmo83850);
smo81659.setStemDirection(dirsmo83850);
smo81660.setStemDirection(dirsmo83850);
smo81661.setStemDirection(dirsmo83850);
const smo83850 = new VF.Beam([smo81658,smo81659,smo81660,smo81661]);
const dirsmo83851 = smo81662.getStemDirection();
smo81662.setStemDirection(dirsmo83851);
smo81663.setStemDirection(dirsmo83851);
smo81664.setStemDirection(dirsmo83851);
smo81665.setStemDirection(dirsmo83851);
const smo83851 = new VF.Beam([smo81662,smo81663,smo81664,smo81665]);
 
// formatting measures in staff group smo81847
fmtsmo8106115.format([smo81061v0,smo81681v0], 572);
const stavesmo81061 = new VF.Stave(674, 793.0000000000002, 586);
stavesmo81061.setAttribute('id', 'stavesmo81061');
stavesmo81061.setBegBarType(VF.Barline.type.NONE);
stavesmo81061.setContext(context);
stavesmo81061.draw();
smo81061v0.draw(context, stavesmo81061);
smo83846.setContext(context);
smo83846.draw();
smo83847.setContext(context);
smo83847.draw();
const stavesmo81681 = new VF.Stave(674, 927.0000000000002, 586);
stavesmo81681.setAttribute('id', 'stavesmo81681');
stavesmo81681.setBegBarType(VF.Barline.type.NONE);
stavesmo81681.setContext(context);
stavesmo81681.draw();
smo81681v0.draw(context, stavesmo81681);
smo83850.setContext(context);
smo83850.draw();
smo83851.setContext(context);
smo83851.draw();
const rightsmo81847stavesmo810611 = new VF.StaveConnector(stavesmo81061, stavesmo81681).setType(0);
rightsmo81847stavesmo810611.setContext(context).draw();
const fmtsmo8108716 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo81087v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81087v0ar = [];
const smo81062 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo81062.setAttribute('id', 'smo81062');
const  smo84065 = new VF.Articulation('a.').setPosition(3);
smo81062.addModifier(smo84065, 0);
smo81087v0ar.push(smo81062);
const smo81064 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo81064.setAttribute('id', 'smo81064');
smo81087v0ar.push(smo81064);
const smo81065 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo81065.setAttribute('id', 'smo81065');
smo81087v0ar.push(smo81065);
const smo81066 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo81066.setAttribute('id', 'smo81066');
smo81087v0ar.push(smo81066);
const smo81067 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo81067.setAttribute('id', 'smo81067');
smo81087v0ar.push(smo81067);
const smo81068 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo81068.setAttribute('id', 'smo81068');
smo81087v0ar.push(smo81068);
const smo81069 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo81069.setAttribute('id', 'smo81069');
smo81087v0ar.push(smo81069);
const smo81070 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo81070.setAttribute('id', 'smo81070');
smo81087v0ar.push(smo81070);
const smo81071 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo81071.setAttribute('id', 'smo81071');
smo81087v0ar.push(smo81071);
smo81087v0.addTickables(smo81087v0ar)
fmtsmo8108716.joinVoices([smo81087v0]);
const fmtsmo8170616 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo81706v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81706v0ar = [];
const smo81682 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo81682.setAttribute('id', 'smo81682');
smo81706v0ar.push(smo81682);
const smo81683 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo81683.setAttribute('id', 'smo81683');
smo81706v0ar.push(smo81683);
const smo81684 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo81684.setAttribute('id', 'smo81684');
smo81706v0ar.push(smo81684);
const smo81685 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo81685.setAttribute('id', 'smo81685');
smo81706v0ar.push(smo81685);
const smo81686 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo81686.setAttribute('id', 'smo81686');
smo81706v0ar.push(smo81686);
const smo81687 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo81687.setAttribute('id', 'smo81687');
smo81706v0ar.push(smo81687);
const smo81688 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo81688.setAttribute('id', 'smo81688');
smo81706v0ar.push(smo81688);
const smo81689 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo81689.setAttribute('id', 'smo81689');
smo81706v0ar.push(smo81689);
const smo81690 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo81690.setAttribute('id', 'smo81690');
smo81706v0ar.push(smo81690);
smo81706v0.addTickables(smo81706v0ar)
fmtsmo8170616.joinVoices([smo81706v0]);
// create beam groups and tuplets for format grp smo81847 before formatting
const dirsmo83862 = smo81062.getStemDirection();
smo81062.setStemDirection(dirsmo83862);
smo81064.setStemDirection(dirsmo83862);
smo81065.setStemDirection(dirsmo83862);
smo81066.setStemDirection(dirsmo83862);
const smo83862 = new VF.Beam([smo81062,smo81064,smo81065,smo81066]);
const dirsmo83863 = smo81067.getStemDirection();
smo81067.setStemDirection(dirsmo83863);
smo81068.setStemDirection(dirsmo83863);
smo81069.setStemDirection(dirsmo83863);
smo81070.setStemDirection(dirsmo83863);
const smo83863 = new VF.Beam([smo81067,smo81068,smo81069,smo81070]);
const dirsmo83866 = smo81683.getStemDirection();
smo81683.setStemDirection(dirsmo83866);
smo81684.setStemDirection(dirsmo83866);
smo81685.setStemDirection(dirsmo83866);
smo81686.setStemDirection(dirsmo83866);
const smo83866 = new VF.Beam([smo81683,smo81684,smo81685,smo81686]);
const dirsmo83867 = smo81687.getStemDirection();
smo81687.setStemDirection(dirsmo83867);
smo81688.setStemDirection(dirsmo83867);
smo81689.setStemDirection(dirsmo83867);
smo81690.setStemDirection(dirsmo83867);
const smo83867 = new VF.Beam([smo81687,smo81688,smo81689,smo81690]);
 
// formatting measures in staff group smo81847
fmtsmo8108716.format([smo81087v0,smo81706v0], 561);
const stavesmo81087 = new VF.Stave(50, 1058.0000000000002, 616);
stavesmo81087.setAttribute('id', 'stavesmo81087');
stavesmo81087.setBegBarType(1);
stavesmo81087.addClef('treble');
stavesmo81087.setContext(context);
stavesmo81087.draw();
smo81087v0.draw(context, stavesmo81087);
smo83862.setContext(context);
smo83862.draw();
smo83863.setContext(context);
smo83863.draw();
const stavesmo81706 = new VF.Stave(50, 1177.0000000000002, 616);
stavesmo81706.setAttribute('id', 'stavesmo81706');
stavesmo81706.setBegBarType(1);
stavesmo81706.addClef('bass');
stavesmo81706.setContext(context);
stavesmo81706.draw();
smo81706v0.draw(context, stavesmo81706);
smo83866.setContext(context);
smo83866.draw();
smo83867.setContext(context);
smo83867.draw();
const leftsmo81847stavesmo810871 = new VF.StaveConnector(stavesmo81087, stavesmo81706).setType(3);
leftsmo81847stavesmo810871.setContext(context).draw();
const fmtsmo8111217 = new VF.Formatter();
//
// voices and notes for stave 0 17
const smo81112v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81112v0ar = [];
const smo81088 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo81088.setAttribute('id', 'smo81088');
smo81112v0ar.push(smo81088);
const smo81089 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo81089.setAttribute('id', 'smo81089');
smo81112v0ar.push(smo81089);
const smo81090 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo81090.setAttribute('id', 'smo81090');
smo81112v0ar.push(smo81090);
const smo81091 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo81091.setAttribute('id', 'smo81091');
smo81112v0ar.push(smo81091);
const smo81092 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo81092.setAttribute('id', 'smo81092');
smo81112v0ar.push(smo81092);
const smo81093 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo81093.setAttribute('id', 'smo81093');
smo81112v0ar.push(smo81093);
const smo81094 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo81094.setAttribute('id', 'smo81094');
smo81112v0ar.push(smo81094);
const smo81095 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo81095.setAttribute('id', 'smo81095');
smo81112v0ar.push(smo81095);
const smo81096 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo81096.setAttribute('id', 'smo81096');
smo81112v0ar.push(smo81096);
smo81112v0.addTickables(smo81112v0ar)
fmtsmo8111217.joinVoices([smo81112v0]);
const fmtsmo8173117 = new VF.Formatter();
//
// voices and notes for stave 1 17
const smo81731v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81731v0ar = [];
const smo81707 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo81707.setAttribute('id', 'smo81707');
smo81731v0ar.push(smo81707);
const smo81708 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo81708.setAttribute('id', 'smo81708');
smo81731v0ar.push(smo81708);
const smo81709 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo81709.setAttribute('id', 'smo81709');
smo81731v0ar.push(smo81709);
const smo81710 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo81710.setAttribute('id', 'smo81710');
smo81731v0ar.push(smo81710);
const smo81711 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo81711.setAttribute('id', 'smo81711');
const smo817110acc = new VF.Accidental('b');
smo81711.addModifier(smo817110acc, 0);
smo81731v0ar.push(smo81711);
const smo81712 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo81712.setAttribute('id', 'smo81712');
smo81731v0ar.push(smo81712);
const smo81713 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo81713.setAttribute('id', 'smo81713');
smo81731v0ar.push(smo81713);
const smo81714 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo81714.setAttribute('id', 'smo81714');
smo81731v0ar.push(smo81714);
const smo81715 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo81715.setAttribute('id', 'smo81715');
smo81731v0ar.push(smo81715);
smo81731v0.addTickables(smo81731v0ar)
fmtsmo8173117.joinVoices([smo81731v0]);
// create beam groups and tuplets for format grp smo81847 before formatting
const dirsmo83870 = smo81088.getStemDirection();
smo81088.setStemDirection(dirsmo83870);
smo81089.setStemDirection(dirsmo83870);
smo81090.setStemDirection(dirsmo83870);
smo81091.setStemDirection(dirsmo83870);
const smo83870 = new VF.Beam([smo81088,smo81089,smo81090,smo81091]);
const dirsmo83871 = smo81092.getStemDirection();
smo81092.setStemDirection(dirsmo83871);
smo81093.setStemDirection(dirsmo83871);
smo81094.setStemDirection(dirsmo83871);
smo81095.setStemDirection(dirsmo83871);
const smo83871 = new VF.Beam([smo81092,smo81093,smo81094,smo81095]);
const dirsmo83874 = smo81708.getStemDirection();
smo81708.setStemDirection(dirsmo83874);
smo81709.setStemDirection(dirsmo83874);
smo81710.setStemDirection(dirsmo83874);
smo81711.setStemDirection(dirsmo83874);
const smo83874 = new VF.Beam([smo81708,smo81709,smo81710,smo81711]);
const dirsmo83875 = smo81712.getStemDirection();
smo81712.setStemDirection(dirsmo83875);
smo81713.setStemDirection(dirsmo83875);
smo81714.setStemDirection(dirsmo83875);
smo81715.setStemDirection(dirsmo83875);
const smo83875 = new VF.Beam([smo81712,smo81713,smo81714,smo81715]);
 
// formatting measures in staff group smo81847
fmtsmo8111217.format([smo81112v0,smo81731v0], 579);
const stavesmo81112 = new VF.Stave(666, 1058.0000000000002, 593);
stavesmo81112.setAttribute('id', 'stavesmo81112');
stavesmo81112.setBegBarType(VF.Barline.type.NONE);
stavesmo81112.setContext(context);
stavesmo81112.draw();
smo81112v0.draw(context, stavesmo81112);
smo83870.setContext(context);
smo83870.draw();
smo83871.setContext(context);
smo83871.draw();
const stavesmo81731 = new VF.Stave(666, 1177.0000000000002, 593);
stavesmo81731.setAttribute('id', 'stavesmo81731');
stavesmo81731.setBegBarType(VF.Barline.type.NONE);
stavesmo81731.setContext(context);
stavesmo81731.draw();
smo81731v0.draw(context, stavesmo81731);
smo83874.setContext(context);
smo83874.draw();
smo83875.setContext(context);
smo83875.draw();
const rightsmo81847stavesmo811121 = new VF.StaveConnector(stavesmo81112, stavesmo81731).setType(0);
rightsmo81847stavesmo811121.setContext(context).draw();
const fmtsmo8114518 = new VF.Formatter();
//
// voices and notes for stave 0 18
const smo81145v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81145v0ar = [];
const smo81113 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo81113.setAttribute('id', 'smo81113');
const  smo84074 = new VF.Articulation('a.').setPosition(3);
smo81113.addModifier(smo84074, 0);
smo81145v0ar.push(smo81113);
const smo81115 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo81115.setAttribute('id', 'smo81115');
smo81145v0ar.push(smo81115);
const smo81116 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo81116.setAttribute('id', 'smo81116');
smo81145v0ar.push(smo81116);
const smo81117 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo81117.setAttribute('id', 'smo81117');
smo81145v0ar.push(smo81117);
const smo81118 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo81118.setAttribute('id', 'smo81118');
smo81145v0ar.push(smo81118);
const smo81119 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo81119.setAttribute('id', 'smo81119');
smo81145v0ar.push(smo81119);
const smo81120 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo81120.setAttribute('id', 'smo81120');
smo81145v0ar.push(smo81120);
const smo81121 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo81121.setAttribute('id', 'smo81121');
smo81145v0ar.push(smo81121);
const smo81122 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo81122.setAttribute('id', 'smo81122');
smo81145v0ar.push(smo81122);
const smo81123 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo81123.setAttribute('id', 'smo81123');
smo81145v0ar.push(smo81123);
const smo81124 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo81124.setAttribute('id', 'smo81124');
smo81145v0ar.push(smo81124);
const smo81125 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo81125.setAttribute('id', 'smo81125');
smo81145v0ar.push(smo81125);
const smo81126 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo81126.setAttribute('id', 'smo81126');
smo81145v0ar.push(smo81126);
const smo81127 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo81127.setAttribute('id', 'smo81127');
smo81145v0ar.push(smo81127);
const smo81128 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo81128.setAttribute('id', 'smo81128');
smo81145v0ar.push(smo81128);
const smo81129 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo81129.setAttribute('id', 'smo81129');
smo81145v0ar.push(smo81129);
smo81145v0.addTickables(smo81145v0ar)
fmtsmo8114518.joinVoices([smo81145v0]);
const fmtsmo8175518 = new VF.Formatter();
//
// voices and notes for stave 1 18
const smo81755v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81755v0ar = [];
const smo81732 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo81732.setAttribute('id', 'smo81732');
smo81755v0ar.push(smo81732);
const smo81733 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo81733.setAttribute('id', 'smo81733');
const smo817330acc = new VF.Accidental('b');
smo81733.addModifier(smo817330acc, 0);
smo81755v0ar.push(smo81733);
const smo81734 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo81734.setAttribute('id', 'smo81734');
smo81755v0ar.push(smo81734);
const smo81735 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo81735.setAttribute('id', 'smo81735');
smo81755v0ar.push(smo81735);
const smo81736 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo81736.setAttribute('id', 'smo81736');
smo81755v0ar.push(smo81736);
const smo81737 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo81737.setAttribute('id', 'smo81737');
smo81755v0ar.push(smo81737);
const smo81738 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo81738.setAttribute('id', 'smo81738');
smo81755v0ar.push(smo81738);
const smo81739 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo81739.setAttribute('id', 'smo81739');
smo81755v0ar.push(smo81739);
smo81755v0.addTickables(smo81755v0ar)
fmtsmo8175518.joinVoices([smo81755v0]);
// create beam groups and tuplets for format grp smo81847 before formatting
const dirsmo83888 = smo81113.getStemDirection();
smo81113.setStemDirection(dirsmo83888);
smo81115.setStemDirection(dirsmo83888);
smo81116.setStemDirection(dirsmo83888);
smo81117.setStemDirection(dirsmo83888);
const smo83888 = new VF.Beam([smo81113,smo81115,smo81116,smo81117]);
const dirsmo83889 = smo81118.getStemDirection();
smo81118.setStemDirection(dirsmo83889);
smo81119.setStemDirection(dirsmo83889);
smo81120.setStemDirection(dirsmo83889);
smo81121.setStemDirection(dirsmo83889);
const smo83889 = new VF.Beam([smo81118,smo81119,smo81120,smo81121]);
const dirsmo83890 = smo81122.getStemDirection();
smo81122.setStemDirection(dirsmo83890);
smo81123.setStemDirection(dirsmo83890);
smo81124.setStemDirection(dirsmo83890);
smo81125.setStemDirection(dirsmo83890);
const smo83890 = new VF.Beam([smo81122,smo81123,smo81124,smo81125]);
const dirsmo83891 = smo81126.getStemDirection();
smo81126.setStemDirection(dirsmo83891);
smo81127.setStemDirection(dirsmo83891);
smo81128.setStemDirection(dirsmo83891);
smo81129.setStemDirection(dirsmo83891);
const smo83891 = new VF.Beam([smo81126,smo81127,smo81128,smo81129]);
const dirsmo83894 = smo81732.getStemDirection();
smo81732.setStemDirection(dirsmo83894);
smo81733.setStemDirection(dirsmo83894);
smo81734.setStemDirection(dirsmo83894);
smo81735.setStemDirection(dirsmo83894);
const smo83894 = new VF.Beam([smo81732,smo81733,smo81734,smo81735]);
const dirsmo83895 = smo81736.getStemDirection();
smo81736.setStemDirection(dirsmo83895);
smo81737.setStemDirection(dirsmo83895);
smo81738.setStemDirection(dirsmo83895);
smo81739.setStemDirection(dirsmo83895);
const smo83895 = new VF.Beam([smo81736,smo81737,smo81738,smo81739]);
 
// formatting measures in staff group smo81847
fmtsmo8114518.format([smo81145v0,smo81755v0], 395);
const stavesmo81145 = new VF.Stave(50, 1318.0000000000002, 451);
stavesmo81145.setAttribute('id', 'stavesmo81145');
stavesmo81145.setBegBarType(1);
stavesmo81145.addClef('treble');
stavesmo81145.setContext(context);
stavesmo81145.draw();
smo81145v0.draw(context, stavesmo81145);
smo83888.setContext(context);
smo83888.draw();
smo83889.setContext(context);
smo83889.draw();
smo83890.setContext(context);
smo83890.draw();
smo83891.setContext(context);
smo83891.draw();
const stavesmo81755 = new VF.Stave(50, 1452.0000000000002, 451);
stavesmo81755.setAttribute('id', 'stavesmo81755');
stavesmo81755.setBegBarType(1);
stavesmo81755.addClef('bass');
stavesmo81755.setContext(context);
stavesmo81755.draw();
smo81755v0.draw(context, stavesmo81755);
smo83894.setContext(context);
smo83894.draw();
smo83895.setContext(context);
smo83895.draw();
const leftsmo81847stavesmo811451 = new VF.StaveConnector(stavesmo81145, stavesmo81755).setType(3);
leftsmo81847stavesmo811451.setContext(context).draw();
const fmtsmo8117419 = new VF.Formatter();
//
// voices and notes for stave 0 19
const smo81174v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81174v0ar = [];
const smo81146 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo81146.setAttribute('id', 'smo81146');
smo81174v0ar.push(smo81146);
const smo81147 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo81147.setAttribute('id', 'smo81147');
smo81174v0ar.push(smo81147);
const smo81148 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo81148.setAttribute('id', 'smo81148');
smo81174v0ar.push(smo81148);
const smo81149 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
smo81149.setAttribute('id', 'smo81149');
smo81174v0ar.push(smo81149);
const smo81150 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/6/n"]}'))
smo81150.setAttribute('id', 'smo81150');
smo81174v0ar.push(smo81150);
const smo81151 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo81151.setAttribute('id', 'smo81151');
smo81174v0ar.push(smo81151);
const smo81152 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
smo81152.setAttribute('id', 'smo81152');
smo81174v0ar.push(smo81152);
const smo81153 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo81153.setAttribute('id', 'smo81153');
smo81174v0ar.push(smo81153);
const smo81154 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/6/n"]}'))
smo81154.setAttribute('id', 'smo81154');
smo81174v0ar.push(smo81154);
const smo81155 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo81155.setAttribute('id', 'smo81155');
smo81174v0ar.push(smo81155);
const smo81156 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo81156.setAttribute('id', 'smo81156');
smo81174v0ar.push(smo81156);
const smo81157 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo81157.setAttribute('id', 'smo81157');
smo81174v0ar.push(smo81157);
const smo81158 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo81158.setAttribute('id', 'smo81158');
smo81174v0ar.push(smo81158);
smo81174v0.addTickables(smo81174v0ar)
fmtsmo8117419.joinVoices([smo81174v0]);
const fmtsmo8178319 = new VF.Formatter();
//
// voices and notes for stave 1 19
const smo81783v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81783v0ar = [];
const smo81756 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo81756.setAttribute('id', 'smo81756');
smo81783v0ar.push(smo81756);
const smo81757 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo81757.setAttribute('id', 'smo81757');
smo81783v0ar.push(smo81757);
const smo81758 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81758.setAttribute('id', 'smo81758');
smo81783v0ar.push(smo81758);
const smo81759 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo81759.setAttribute('id', 'smo81759');
smo81783v0ar.push(smo81759);
const smo81760 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81760.setAttribute('id', 'smo81760');
smo81783v0ar.push(smo81760);
const smo81761 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo81761.setAttribute('id', 'smo81761');
smo81783v0ar.push(smo81761);
const smo81762 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo81762.setAttribute('id', 'smo81762');
smo81783v0ar.push(smo81762);
const smo81763 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo81763.setAttribute('id', 'smo81763');
smo81783v0ar.push(smo81763);
const smo81764 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo81764.setAttribute('id', 'smo81764');
smo81783v0ar.push(smo81764);
const smo81765 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo81765.setAttribute('id', 'smo81765');
smo81783v0ar.push(smo81765);
const smo81766 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo81766.setAttribute('id', 'smo81766');
smo81783v0ar.push(smo81766);
const smo81767 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo81767.setAttribute('id', 'smo81767');
smo81783v0ar.push(smo81767);
smo81783v0.addTickables(smo81783v0ar)
fmtsmo8178319.joinVoices([smo81783v0]);
// create beam groups and tuplets for format grp smo81847 before formatting
const dirsmo83898 = smo81146.getStemDirection();
smo81146.setStemDirection(dirsmo83898);
smo81147.setStemDirection(dirsmo83898);
smo81148.setStemDirection(dirsmo83898);
smo81149.setStemDirection(dirsmo83898);
const smo83898 = new VF.Beam([smo81146,smo81147,smo81148,smo81149]);
const dirsmo83899 = smo81150.getStemDirection();
smo81150.setStemDirection(dirsmo83899);
smo81151.setStemDirection(dirsmo83899);
smo81152.setStemDirection(dirsmo83899);
smo81153.setStemDirection(dirsmo83899);
const smo83899 = new VF.Beam([smo81150,smo81151,smo81152,smo81153]);
const dirsmo83900 = smo81154.getStemDirection();
smo81154.setStemDirection(dirsmo83900);
smo81155.setStemDirection(dirsmo83900);
const smo83900 = new VF.Beam([smo81154,smo81155]);
const dirsmo83901 = smo81156.getStemDirection();
smo81156.setStemDirection(dirsmo83901);
smo81157.setStemDirection(dirsmo83901);
smo81158.setStemDirection(dirsmo83901);
const smo83901 = new VF.Beam([smo81156,smo81157,smo81158]);
const dirsmo83904 = smo81756.getStemDirection();
smo81756.setStemDirection(dirsmo83904);
smo81757.setStemDirection(dirsmo83904);
const smo83904 = new VF.Beam([smo81756,smo81757]);
const dirsmo83905 = smo81758.getStemDirection();
smo81758.setStemDirection(dirsmo83905);
smo81759.setStemDirection(dirsmo83905);
const smo83905 = new VF.Beam([smo81758,smo81759]);
const dirsmo83906 = smo81760.getStemDirection();
smo81760.setStemDirection(dirsmo83906);
smo81761.setStemDirection(dirsmo83906);
smo81762.setStemDirection(dirsmo83906);
smo81763.setStemDirection(dirsmo83906);
const smo83906 = new VF.Beam([smo81760,smo81761,smo81762,smo81763]);
const dirsmo83907 = smo81764.getStemDirection();
smo81764.setStemDirection(dirsmo83907);
smo81765.setStemDirection(dirsmo83907);
smo81766.setStemDirection(dirsmo83907);
smo81767.setStemDirection(dirsmo83907);
const smo83907 = new VF.Beam([smo81764,smo81765,smo81766,smo81767]);
 
// formatting measures in staff group smo81847
fmtsmo8117419.format([smo81174v0,smo81783v0], 368);
const stavesmo81174 = new VF.Stave(501, 1318.0000000000002, 382);
stavesmo81174.setAttribute('id', 'stavesmo81174');
stavesmo81174.setBegBarType(VF.Barline.type.NONE);
stavesmo81174.setContext(context);
stavesmo81174.draw();
smo81174v0.draw(context, stavesmo81174);
smo83898.setContext(context);
smo83898.draw();
smo83899.setContext(context);
smo83899.draw();
smo83900.setContext(context);
smo83900.draw();
smo83901.setContext(context);
smo83901.draw();
const stavesmo81783 = new VF.Stave(501, 1452.0000000000002, 382);
stavesmo81783.setAttribute('id', 'stavesmo81783');
stavesmo81783.setBegBarType(VF.Barline.type.NONE);
stavesmo81783.setContext(context);
stavesmo81783.draw();
smo81783v0.draw(context, stavesmo81783);
smo83904.setContext(context);
smo83904.draw();
smo83905.setContext(context);
smo83905.draw();
smo83906.setContext(context);
smo83906.draw();
smo83907.setContext(context);
smo83907.draw();
const fmtsmo8120620 = new VF.Formatter();
//
// voices and notes for stave 0 20
const smo81206v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81206v0ar = [];
const smo81175 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo81175.setAttribute('id', 'smo81175');
smo81206v0ar.push(smo81175);
const smo81176 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo81176.setAttribute('id', 'smo81176');
smo81206v0ar.push(smo81176);
const smo81177 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo81177.setAttribute('id', 'smo81177');
smo81206v0ar.push(smo81177);
const smo81178 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo81178.setAttribute('id', 'smo81178');
smo81206v0ar.push(smo81178);
const smo81179 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo81179.setAttribute('id', 'smo81179');
smo81206v0ar.push(smo81179);
const smo81180 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo81180.setAttribute('id', 'smo81180');
smo81206v0ar.push(smo81180);
const smo81181 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo81181.setAttribute('id', 'smo81181');
smo81206v0ar.push(smo81181);
const smo81182 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo81182.setAttribute('id', 'smo81182');
smo81206v0ar.push(smo81182);
const smo81183 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo81183.setAttribute('id', 'smo81183');
smo81206v0ar.push(smo81183);
const smo81184 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo81184.setAttribute('id', 'smo81184');
smo81206v0ar.push(smo81184);
const smo81185 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo81185.setAttribute('id', 'smo81185');
smo81206v0ar.push(smo81185);
const smo81186 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo81186.setAttribute('id', 'smo81186');
smo81206v0ar.push(smo81186);
const smo81187 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo81187.setAttribute('id', 'smo81187');
smo81206v0ar.push(smo81187);
const smo81188 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo81188.setAttribute('id', 'smo81188');
smo81206v0ar.push(smo81188);
const smo81189 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo81189.setAttribute('id', 'smo81189');
smo81206v0ar.push(smo81189);
const smo81190 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
smo81190.setAttribute('id', 'smo81190');
smo81206v0ar.push(smo81190);
smo81206v0.addTickables(smo81206v0ar)
fmtsmo8120620.joinVoices([smo81206v0]);
const fmtsmo8181120 = new VF.Formatter();
//
// voices and notes for stave 1 20
const smo81811v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81811v0ar = [];
const smo81784 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo81784.setAttribute('id', 'smo81784');
smo81811v0ar.push(smo81784);
const smo81785 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo81785.setAttribute('id', 'smo81785');
smo81811v0ar.push(smo81785);
const smo81786 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo81786.setAttribute('id', 'smo81786');
smo81811v0ar.push(smo81786);
const smo81787 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo81787.setAttribute('id', 'smo81787');
smo81811v0ar.push(smo81787);
const smo81788 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo81788.setAttribute('id', 'smo81788');
smo81811v0ar.push(smo81788);
const smo81789 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo81789.setAttribute('id', 'smo81789');
smo81811v0ar.push(smo81789);
const smo81790 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo81790.setAttribute('id', 'smo81790');
smo81811v0ar.push(smo81790);
const smo81791 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo81791.setAttribute('id', 'smo81791');
smo81811v0ar.push(smo81791);
const smo81792 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo81792.setAttribute('id', 'smo81792');
const  smo84083 = new VF.Articulation('a.').setPosition(3);
smo81792.addModifier(smo84083, 0);
smo81811v0ar.push(smo81792);
const smo81794 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo81794.setAttribute('id', 'smo81794');
const  smo84084 = new VF.Articulation('a.').setPosition(3);
smo81794.addModifier(smo84084, 0);
smo81811v0ar.push(smo81794);
smo81811v0.addTickables(smo81811v0ar)
fmtsmo8181120.joinVoices([smo81811v0]);
// create beam groups and tuplets for format grp smo81847 before formatting
const dirsmo83910 = smo81175.getStemDirection();
smo81175.setStemDirection(dirsmo83910);
smo81176.setStemDirection(dirsmo83910);
smo81177.setStemDirection(dirsmo83910);
smo81178.setStemDirection(dirsmo83910);
const smo83910 = new VF.Beam([smo81175,smo81176,smo81177,smo81178]);
const dirsmo83911 = smo81179.getStemDirection();
smo81179.setStemDirection(dirsmo83911);
smo81180.setStemDirection(dirsmo83911);
smo81181.setStemDirection(dirsmo83911);
smo81182.setStemDirection(dirsmo83911);
const smo83911 = new VF.Beam([smo81179,smo81180,smo81181,smo81182]);
const dirsmo83912 = smo81183.getStemDirection();
smo81183.setStemDirection(dirsmo83912);
smo81184.setStemDirection(dirsmo83912);
smo81185.setStemDirection(dirsmo83912);
smo81186.setStemDirection(dirsmo83912);
const smo83912 = new VF.Beam([smo81183,smo81184,smo81185,smo81186]);
const dirsmo83913 = smo81187.getStemDirection();
smo81187.setStemDirection(dirsmo83913);
smo81188.setStemDirection(dirsmo83913);
smo81189.setStemDirection(dirsmo83913);
smo81190.setStemDirection(dirsmo83913);
const smo83913 = new VF.Beam([smo81187,smo81188,smo81189,smo81190]);
const dirsmo83916 = smo81784.getStemDirection();
smo81784.setStemDirection(dirsmo83916);
smo81785.setStemDirection(dirsmo83916);
const smo83916 = new VF.Beam([smo81784,smo81785]);
const dirsmo83917 = smo81786.getStemDirection();
smo81786.setStemDirection(dirsmo83917);
smo81787.setStemDirection(dirsmo83917);
const smo83917 = new VF.Beam([smo81786,smo81787]);
const dirsmo83918 = smo81788.getStemDirection();
smo81788.setStemDirection(dirsmo83918);
smo81789.setStemDirection(dirsmo83918);
smo81790.setStemDirection(dirsmo83918);
smo81791.setStemDirection(dirsmo83918);
const smo83918 = new VF.Beam([smo81788,smo81789,smo81790,smo81791]);
const dirsmo83919 = smo81792.getStemDirection();
smo81792.setStemDirection(dirsmo83919);
smo81794.setStemDirection(dirsmo83919);
const smo83919 = new VF.Beam([smo81792,smo81794]);
 
// formatting measures in staff group smo81847
fmtsmo8120620.format([smo81206v0,smo81811v0], 363);
const stavesmo81206 = new VF.Stave(883, 1318.0000000000002, 377);
stavesmo81206.setAttribute('id', 'stavesmo81206');
stavesmo81206.setBegBarType(VF.Barline.type.NONE);
stavesmo81206.setContext(context);
stavesmo81206.draw();
smo81206v0.draw(context, stavesmo81206);
smo83910.setContext(context);
smo83910.draw();
smo83911.setContext(context);
smo83911.draw();
smo83912.setContext(context);
smo83912.draw();
smo83913.setContext(context);
smo83913.draw();
const stavesmo81811 = new VF.Stave(883, 1452.0000000000002, 377);
stavesmo81811.setAttribute('id', 'stavesmo81811');
stavesmo81811.setBegBarType(VF.Barline.type.NONE);
stavesmo81811.setContext(context);
stavesmo81811.draw();
smo81811v0.draw(context, stavesmo81811);
smo83916.setContext(context);
smo83916.draw();
smo83917.setContext(context);
smo83917.draw();
smo83918.setContext(context);
smo83918.draw();
smo83919.setContext(context);
smo83919.draw();
const rightsmo81847stavesmo812061 = new VF.StaveConnector(stavesmo81206, stavesmo81811).setType(0);
rightsmo81847stavesmo812061.setContext(context).draw();
// modifier from 0-10-0-1 to 0-10-0-4
const smo84089 = new VF.Curve(smo80901, smo80904, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":1,"position_end":2}'));
smo84089.setContext(context).draw();
// modifier from 0-10-0-5 to 0-11-0-0
const smo84090 = new VF.Curve(smo80905, smo80924, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo84090.setContext(context).draw();
// modifier from 0-11-0-1 to 0-11-0-6
const smo84091 = new VF.Curve(smo80925, smo80930, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo84091.setContext(context).draw();
// modifier from 0-15-0-8 to 0-16-0-0
const smo84092 = new VF.Curve(smo81045, null, JSON.parse('{"thickness":2,"x_shift":-5,"y_shift":10,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":1,"position_end":1}'));
smo84092.setContext(context).draw();
// modifier from 0-15-0-8 to 0-16-0-0
const smo84093 = new VF.Curve(null, smo81062, JSON.parse('{"thickness":2,"x_shift":-5,"y_shift":10,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":1,"position_end":1}'));
smo84093.setContext(context).draw();
// modifier from 0-17-0-8 to 0-18-0-0
const smo84094 = new VF.Curve(smo81096, null, JSON.parse('{"thickness":2,"x_shift":-5,"y_shift":10,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":1,"position_end":1}'));
smo84094.setContext(context).draw();
// modifier from 0-17-0-8 to 0-18-0-0
const smo84095 = new VF.Curve(null, smo81113, JSON.parse('{"thickness":2,"x_shift":-5,"y_shift":10,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":1,"position_end":1}'));
smo84095.setContext(context).draw();
// modifier from 0-16-0-8 to 0-17-0-0
const smo84096 = new VF.Curve(smo81071, smo81088, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo84096.setContext(context).draw();
// modifier from 1-15-0-0 to 1-15-0-1
const smo84097 = new VF.Curve(smo81657, smo81658, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo84097.setContext(context).draw();
// modifier from 1-16-0-0 to 1-16-0-1
const smo84098 = new VF.Curve(smo81682, smo81683, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo84098.setContext(context).draw();
// modifier from 1-17-0-0 to 1-17-0-1
const smo84099 = new VF.Curve(smo81707, smo81708, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo84099.setContext(context).draw();
// modifier from 1-18-0-1 to 1-18-0-4
const smo84100 = new VF.Curve(smo81733, smo81736, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo84100.setContext(context).draw();
// modifier from 1-18-0-5 to 1-19-0-0
const smo84101 = new VF.Curve(smo81737, smo81756, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo84101.setContext(context).draw();
}