// @@ Well-Tempered Clavier p 3/5  by Bach
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = VexFlow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1632');
svg.setAttributeNS('', 'height', '2112');
svg.setAttributeNS('', 'viewBox', '0 0 1989 2574');
//
// create the musical objects
VF.setFonts("Bravura","Academico");
const fmtsmo6157552 = new VF.Formatter();
//
// voices and notes for stave 0 52
const smo61575v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61575v0ar = [];
const smo61539 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61539.setAttribute('id', 'smo61539');
smo61575v0ar.push(smo61539);
const smo61540 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/5/n"]}'))
smo61540.setAttribute('id', 'smo61540');
const smo615400acc = new VF.Accidental('b');
smo61540.addModifier(smo615400acc, 0);
smo61575v0ar.push(smo61540);
const smo61541 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo61541.setAttribute('id', 'smo61541');
smo61575v0ar.push(smo61541);
const smo61542 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo61542.setAttribute('id', 'smo61542');
smo61575v0ar.push(smo61542);
const smo61543 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo61543.setAttribute('id', 'smo61543');
smo61575v0ar.push(smo61543);
const smo61544 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo61544.setAttribute('id', 'smo61544');
smo61575v0ar.push(smo61544);
const smo61545 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo61545.setAttribute('id', 'smo61545');
smo61575v0ar.push(smo61545);
const smo61546 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo61546.setAttribute('id', 'smo61546');
smo61575v0ar.push(smo61546);
const smo61547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo61547.setAttribute('id', 'smo61547');
smo61575v0ar.push(smo61547);
const smo61548 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo61548.setAttribute('id', 'smo61548');
smo61575v0ar.push(smo61548);
const smo61549 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo61549.setAttribute('id', 'smo61549');
smo61575v0ar.push(smo61549);
const smo61550 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo61550.setAttribute('id', 'smo61550');
const smo61551 = new VF.Ornament('');
smo61550.addModifier(smo61551, 0);
smo61575v0ar.push(smo61550);
const smo61552 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo61552.setAttribute('id', 'smo61552');
smo61575v0ar.push(smo61552);
const smo61553 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo61553.setAttribute('id', 'smo61553');
smo61575v0ar.push(smo61553);
smo61575v0.addTickables(smo61575v0ar)
fmtsmo6157552.joinVoices([smo61575v0]);
const smo61575v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61575v1ar = [];
const smo61554 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61554.setAttribute('id', 'smo61554');
smo61554.setStyle({ fillStyle: "#115511" });
smo61575v1ar.push(smo61554);
const smo61555 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/5/n"]}'))
smo61555.setAttribute('id', 'smo61555');
smo61555.setStyle({ fillStyle: "#115511" });
smo61575v1ar.push(smo61555);
const smo61556 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo61556.setAttribute('id', 'smo61556');
smo61556.setStyle({ fillStyle: "#115511" });
const smo615560acc = new VF.Accidental('#');
smo61556.addModifier(smo615560acc, 0);
smo61575v1ar.push(smo61556);
const smo61557 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61557.setAttribute('id', 'smo61557');
smo61557.setStyle({ fillStyle: "#115511" });
smo61575v1ar.push(smo61557);
const smo61558 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo61558.setAttribute('id', 'smo61558');
smo61558.setStyle({ fillStyle: "#115511" });
smo61575v1ar.push(smo61558);
const smo61559 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo61559.setAttribute('id', 'smo61559');
smo61559.setStyle({ fillStyle: "#115511" });
smo61575v1ar.push(smo61559);
const smo61560 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61560.setAttribute('id', 'smo61560');
smo61560.setStyle({ fillStyle: "#115511" });
smo61575v1ar.push(smo61560);
const smo61561 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo61561.setAttribute('id', 'smo61561');
smo61561.setStyle({ fillStyle: "#115511" });
smo61575v1ar.push(smo61561);
smo61575v1.addTickables(smo61575v1ar)
fmtsmo6157552.joinVoices([smo61575v1]);
const fmtsmo6660752 = new VF.Formatter();
//
// voices and notes for stave 1 52
const smo66607v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66607v0ar = [];
const smo66574 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo66574.setAttribute('id', 'smo66574');
smo66607v0ar.push(smo66574);
const smo66575 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo66575.setAttribute('id', 'smo66575');
smo66607v0ar.push(smo66575);
const smo66576 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo66576.setAttribute('id', 'smo66576');
smo66607v0ar.push(smo66576);
const smo66577 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo66577.setAttribute('id', 'smo66577');
smo66607v0ar.push(smo66577);
const smo66578 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo66578.setAttribute('id', 'smo66578');
smo66607v0ar.push(smo66578);
const smo66579 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo66579.setAttribute('id', 'smo66579');
smo66607v0ar.push(smo66579);
const smo66580 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["c#/4/n"]}'))
smo66580.setAttribute('id', 'smo66580');
const smo665800acc = new VF.Accidental('#');
smo66580.addModifier(smo665800acc, 0);
smo66607v0ar.push(smo66580);
const smo66581 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["en/4/r"]}'))
smo66581.setAttribute('id', 'smo66581');
smo66607v0ar.push(smo66581);
const smo66582 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["en/4/r"]}'))
smo66582.setAttribute('id', 'smo66582');
smo66607v0ar.push(smo66582);
smo66607v0.addTickables(smo66607v0ar)
fmtsmo6660752.joinVoices([smo66607v0]);
const smo66607v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66607v1ar = [];
const smo66583 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66583.setAttribute('id', 'smo66583');
smo66583.setStyle({ fillStyle: "#115511" });
smo66583.addModifier(new VF.Dot(), 0);
smo66607v1ar.push(smo66583);
const smo66584 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo66584.setAttribute('id', 'smo66584');
smo66584.setStyle({ fillStyle: "#115511" });
smo66607v1ar.push(smo66584);
const smo66585 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66585.setAttribute('id', 'smo66585');
smo66585.setStyle({ fillStyle: "#115511" });
smo66607v1ar.push(smo66585);
const smo66586 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo66586.setAttribute('id', 'smo66586');
smo66586.setStyle({ fillStyle: "#115511" });
smo66607v1ar.push(smo66586);
const smo66587 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/3/n"]}'))
smo66587.setAttribute('id', 'smo66587');
smo66587.setStyle({ fillStyle: "#115511" });
const smo665870acc = new VF.Accidental('b');
smo66587.addModifier(smo665870acc, 0);
smo66607v1ar.push(smo66587);
const smo66588 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo66588.setAttribute('id', 'smo66588');
smo66588.setStyle({ fillStyle: "#115511" });
smo66607v1ar.push(smo66588);
const smo66589 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo66589.setAttribute('id', 'smo66589');
smo66589.setStyle({ fillStyle: "#115511" });
smo66607v1ar.push(smo66589);
const smo66590 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo66590.setAttribute('id', 'smo66590');
smo66590.setStyle({ fillStyle: "#115511" });
smo66607v1ar.push(smo66590);
const smo66591 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/3/n"]}'))
smo66591.setAttribute('id', 'smo66591');
smo66591.setStyle({ fillStyle: "#115511" });
smo66607v1ar.push(smo66591);
const smo66592 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo66592.setAttribute('id', 'smo66592');
smo66592.setStyle({ fillStyle: "#115511" });
smo66607v1ar.push(smo66592);
const smo66593 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66593.setAttribute('id', 'smo66593');
smo66593.setStyle({ fillStyle: "#115511" });
smo66607v1ar.push(smo66593);
smo66607v1.addTickables(smo66607v1ar)
fmtsmo6660752.joinVoices([smo66607v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69895 = smo61539.getStemDirection();
smo61539.setStemDirection(dirsmo69895);
smo61540.setStemDirection(dirsmo69895);
const smo69895 = new VF.Beam([smo61539,smo61540]);
const dirsmo69896 = smo61541.getStemDirection();
smo61541.setStemDirection(dirsmo69896);
smo61542.setStemDirection(dirsmo69896);
smo61543.setStemDirection(dirsmo69896);
const smo69896 = new VF.Beam([smo61541,smo61542,smo61543]);
const dirsmo69897 = smo61544.getStemDirection();
smo61544.setStemDirection(dirsmo69897);
smo61545.setStemDirection(dirsmo69897);
smo61546.setStemDirection(dirsmo69897);
smo61547.setStemDirection(dirsmo69897);
const smo69897 = new VF.Beam([smo61544,smo61545,smo61546,smo61547]);
const dirsmo69898 = smo61548.getStemDirection();
smo61548.setStemDirection(dirsmo69898);
smo61549.setStemDirection(dirsmo69898);
smo61550.setStemDirection(dirsmo69898);
smo61552.setStemDirection(dirsmo69898);
smo61553.setStemDirection(dirsmo69898);
const smo69898 = new VF.Beam([smo61548,smo61549,smo61550,smo61552,smo61553]);
const dirsmo69899 = smo61554.getStemDirection();
smo61554.setStemDirection(dirsmo69899);
smo61555.setStemDirection(dirsmo69899);
smo61556.setStemDirection(dirsmo69899);
smo61557.setStemDirection(dirsmo69899);
const smo69899 = new VF.Beam([smo61554,smo61555,smo61556,smo61557]);
const dirsmo69900 = smo61558.getStemDirection();
smo61558.setStemDirection(dirsmo69900);
smo61559.setStemDirection(dirsmo69900);
smo61560.setStemDirection(dirsmo69900);
smo61561.setStemDirection(dirsmo69900);
const smo69900 = new VF.Beam([smo61558,smo61559,smo61560,smo61561]);
const dirsmo69902 = smo66574.getStemDirection();
smo66574.setStemDirection(dirsmo69902);
smo66575.setStemDirection(dirsmo69902);
const smo69902 = new VF.Beam([smo66574,smo66575]);
const dirsmo69903 = smo66576.getStemDirection();
smo66576.setStemDirection(dirsmo69903);
smo66577.setStemDirection(dirsmo69903);
smo66578.setStemDirection(dirsmo69903);
smo66579.setStemDirection(dirsmo69903);
const smo69903 = new VF.Beam([smo66576,smo66577,smo66578,smo66579]);
const dirsmo69904 = smo66583.getStemDirection();
smo66583.setStemDirection(dirsmo69904);
smo66584.setStemDirection(dirsmo69904);
smo66585.setStemDirection(dirsmo69904);
smo66586.setStemDirection(dirsmo69904);
smo66587.setStemDirection(dirsmo69904);
const smo69904 = new VF.Beam([smo66583,smo66584,smo66585,smo66586,smo66587]);
const dirsmo69905 = smo66588.getStemDirection();
smo66588.setStemDirection(dirsmo69905);
smo66589.setStemDirection(dirsmo69905);
const smo69905 = new VF.Beam([smo66588,smo66589]);
const dirsmo69906 = smo66590.getStemDirection();
smo66590.setStemDirection(dirsmo69906);
smo66591.setStemDirection(dirsmo69906);
smo66592.setStemDirection(dirsmo69906);
smo66593.setStemDirection(dirsmo69906);
const smo69906 = new VF.Beam([smo66590,smo66591,smo66592,smo66593]);
 
// formatting measures in staff group smo58712
fmtsmo6157552.format([smo61575v0,smo61575v1,smo66607v0,smo66607v1], 390);
const stavesmo61575 = new VF.Stave(90, 319, 441);
stavesmo61575.setAttribute('id', 'stavesmo61575');
stavesmo61575.setBegBarType(1);
stavesmo61575.addClef('treble');
stavesmo61575.setContext(context);
stavesmo61575.draw();
smo61575v0.draw(context, stavesmo61575);
smo61575v1.draw(context, stavesmo61575);
smo69895.setContext(context);
smo69895.draw();
smo69896.setContext(context);
smo69896.draw();
smo69897.setContext(context);
smo69897.draw();
smo69898.setContext(context);
smo69898.draw();
smo69899.setContext(context);
smo69899.draw();
smo69900.setContext(context);
smo69900.draw();
const stavesmo66607 = new VF.Stave(90, 464, 441);
stavesmo66607.setAttribute('id', 'stavesmo66607');
stavesmo66607.setBegBarType(1);
stavesmo66607.addClef('bass');
stavesmo66607.setContext(context);
stavesmo66607.draw();
smo66607v0.draw(context, stavesmo66607);
smo66607v1.draw(context, stavesmo66607);
smo69902.setContext(context);
smo69902.draw();
smo69903.setContext(context);
smo69903.draw();
smo69904.setContext(context);
smo69904.draw();
smo69905.setContext(context);
smo69905.draw();
smo69906.setContext(context);
smo69906.draw();
const leftsmo58712stavesmo615751 = new VF.StaveConnector(stavesmo61575, stavesmo66607).setType(3);
leftsmo58712stavesmo615751.setContext(context).draw();
const fmtsmo6160753 = new VF.Formatter();
//
// voices and notes for stave 0 53
const smo61607v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61607v0ar = [];
const smo61576 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo61576.setAttribute('id', 'smo61576');
smo61607v0ar.push(smo61576);
const smo61577 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["c#/5/n"]}'))
smo61577.setAttribute('id', 'smo61577');
const smo615770acc = new VF.Accidental('#');
smo61577.addModifier(smo615770acc, 0);
smo61607v0ar.push(smo61577);
const smo61578 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61578.setAttribute('id', 'smo61578');
smo61607v0ar.push(smo61578);
const smo61579 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo61579.setAttribute('id', 'smo61579');
smo61607v0ar.push(smo61579);
const smo61580 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo61580.setAttribute('id', 'smo61580');
smo61580.addModifier(new VF.Dot(), 0);
smo61607v0ar.push(smo61580);
const smo61581 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61581.setAttribute('id', 'smo61581');
smo61607v0ar.push(smo61581);
const smo61582 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61582.setAttribute('id', 'smo61582');
smo61607v0ar.push(smo61582);
const smo61583 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/5/r"]}'))
smo61583.setAttribute('id', 'smo61583');
smo61607v0ar.push(smo61583);
const smo61584 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/5/r"]}'))
smo61584.setAttribute('id', 'smo61584');
smo61607v0ar.push(smo61584);
smo61607v0.addTickables(smo61607v0ar)
fmtsmo6160753.joinVoices([smo61607v0]);
const smo61607v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61607v1ar = [];
const smo61585 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo61585.setAttribute('id', 'smo61585');
smo61585.setStyle({ fillStyle: "#115511" });
smo61607v1ar.push(smo61585);
const smo61586 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["gn/4/r"]}'))
smo61586.setAttribute('id', 'smo61586');
smo61586.setStyle({ fillStyle: "#115511" });
smo61607v1ar.push(smo61586);
const smo61587 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["gn/4/r"]}'))
smo61587.setAttribute('id', 'smo61587');
smo61587.setStyle({ fillStyle: "#115511" });
smo61607v1ar.push(smo61587);
const smo61588 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo61588.setAttribute('id', 'smo61588');
smo61588.setStyle({ fillStyle: "#115511" });
smo61607v1ar.push(smo61588);
const smo61589 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/4/n"]}'))
smo61589.setAttribute('id', 'smo61589');
smo61589.setStyle({ fillStyle: "#115511" });
const smo615890acc = new VF.Accidental('#');
smo61589.addModifier(smo615890acc, 0);
smo61607v1ar.push(smo61589);
const smo61590 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61590.setAttribute('id', 'smo61590');
smo61590.setStyle({ fillStyle: "#115511" });
smo61607v1ar.push(smo61590);
const smo61591 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo61591.setAttribute('id', 'smo61591');
smo61591.setStyle({ fillStyle: "#115511" });
smo61591.addModifier(new VF.Dot(), 0);
smo61607v1ar.push(smo61591);
const smo61592 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61592.setAttribute('id', 'smo61592');
smo61592.setStyle({ fillStyle: "#115511" });
smo61607v1ar.push(smo61592);
const smo61593 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo61593.setAttribute('id', 'smo61593');
smo61593.setStyle({ fillStyle: "#115511" });
smo61607v1ar.push(smo61593);
smo61607v1.addTickables(smo61607v1ar)
fmtsmo6160753.joinVoices([smo61607v1]);
const fmtsmo6663753 = new VF.Formatter();
//
// voices and notes for stave 1 53
const smo66637v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66637v0ar = [];
const smo66608 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo66608.setAttribute('id', 'smo66608');
smo66637v0ar.push(smo66608);
const smo66609 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo66609.setAttribute('id', 'smo66609');
smo66637v0ar.push(smo66609);
const smo66610 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo66610.setAttribute('id', 'smo66610');
smo66637v0ar.push(smo66610);
const smo66611 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["c#/4/n"]}'))
smo66611.setAttribute('id', 'smo66611');
const smo666110acc = new VF.Accidental('#');
smo66611.addModifier(smo666110acc, 0);
smo66637v0ar.push(smo66611);
const smo66612 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo66612.setAttribute('id', 'smo66612');
smo66612.addModifier(new VF.Dot(), 0);
smo66637v0ar.push(smo66612);
const smo66613 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo66613.setAttribute('id', 'smo66613');
smo66637v0ar.push(smo66613);
const smo66614 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo66614.setAttribute('id', 'smo66614');
smo66637v0ar.push(smo66614);
const smo66615 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo66615.setAttribute('id', 'smo66615');
const smo666150acc = new VF.Accidental('n');
smo66615.addModifier(smo666150acc, 0);
smo66637v0ar.push(smo66615);
const smo66616 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo66616.setAttribute('id', 'smo66616');
const smo666160acc = new VF.Accidental('#');
smo66616.addModifier(smo666160acc, 0);
smo66637v0ar.push(smo66616);
smo66637v0.addTickables(smo66637v0ar)
fmtsmo6663753.joinVoices([smo66637v0]);
const smo66637v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66637v1ar = [];
const smo66617 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo66617.setAttribute('id', 'smo66617');
smo66617.setStyle({ fillStyle: "#115511" });
smo66637v1ar.push(smo66617);
const smo66618 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo66618.setAttribute('id', 'smo66618');
smo66618.setStyle({ fillStyle: "#115511" });
smo66637v1ar.push(smo66618);
const smo66619 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo66619.setAttribute('id', 'smo66619');
smo66619.setStyle({ fillStyle: "#115511" });
smo66637v1ar.push(smo66619);
const smo66620 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo66620.setAttribute('id', 'smo66620');
smo66620.setStyle({ fillStyle: "#115511" });
smo66637v1ar.push(smo66620);
const smo66621 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66621.setAttribute('id', 'smo66621');
smo66621.setStyle({ fillStyle: "#115511" });
smo66637v1ar.push(smo66621);
const smo66622 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo66622.setAttribute('id', 'smo66622');
smo66622.setStyle({ fillStyle: "#115511" });
smo66637v1ar.push(smo66622);
const smo66623 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo66623.setAttribute('id', 'smo66623');
smo66623.setStyle({ fillStyle: "#115511" });
smo66637v1ar.push(smo66623);
smo66637v1.addTickables(smo66637v1ar)
fmtsmo6663753.joinVoices([smo66637v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69910 = smo61576.getStemDirection();
smo61576.setStemDirection(dirsmo69910);
smo61577.setStemDirection(dirsmo69910);
smo61578.setStemDirection(dirsmo69910);
smo61579.setStemDirection(dirsmo69910);
const smo69910 = new VF.Beam([smo61576,smo61577,smo61578,smo61579]);
const dirsmo69911 = smo61580.getStemDirection();
smo61580.setStemDirection(dirsmo69911);
smo61581.setStemDirection(dirsmo69911);
const smo69911 = new VF.Beam([smo61580,smo61581]);
const dirsmo69912 = smo61589.getStemDirection();
smo61589.setStemDirection(dirsmo69912);
smo61590.setStemDirection(dirsmo69912);
const smo69912 = new VF.Beam([smo61589,smo61590]);
const dirsmo69913 = smo61591.getStemDirection();
smo61591.setStemDirection(dirsmo69913);
smo61592.setStemDirection(dirsmo69913);
smo61593.setStemDirection(dirsmo69913);
const smo69913 = new VF.Beam([smo61591,smo61592,smo61593]);
const dirsmo69915 = smo66609.getStemDirection();
smo66609.setStemDirection(dirsmo69915);
smo66610.setStemDirection(dirsmo69915);
smo66611.setStemDirection(dirsmo69915);
const smo69915 = new VF.Beam([smo66609,smo66610,smo66611]);
const dirsmo69916 = smo66612.getStemDirection();
smo66612.setStemDirection(dirsmo69916);
smo66613.setStemDirection(dirsmo69916);
smo66614.setStemDirection(dirsmo69916);
const smo69916 = new VF.Beam([smo66612,smo66613,smo66614]);
const dirsmo69917 = smo66615.getStemDirection();
smo66615.setStemDirection(dirsmo69917);
smo66616.setStemDirection(dirsmo69917);
const smo69917 = new VF.Beam([smo66615,smo66616]);
const dirsmo69918 = smo66617.getStemDirection();
smo66617.setStemDirection(dirsmo69918);
smo66618.setStemDirection(dirsmo69918);
smo66619.setStemDirection(dirsmo69918);
smo66620.setStemDirection(dirsmo69918);
smo66621.setStemDirection(dirsmo69918);
smo66622.setStemDirection(dirsmo69918);
const smo69918 = new VF.Beam([smo66617,smo66618,smo66619,smo66620,smo66621,smo66622]);
 
// formatting measures in staff group smo58712
fmtsmo6160753.format([smo61607v0,smo61607v1,smo66637v0,smo66637v1], 395);
const stavesmo61607 = new VF.Stave(531, 319, 409);
stavesmo61607.setAttribute('id', 'stavesmo61607');
stavesmo61607.setBegBarType(VF.Barline.type.NONE);
stavesmo61607.setContext(context);
stavesmo61607.draw();
smo61607v0.draw(context, stavesmo61607);
smo61607v1.draw(context, stavesmo61607);
smo69910.setContext(context);
smo69910.draw();
smo69911.setContext(context);
smo69911.draw();
smo69912.setContext(context);
smo69912.draw();
smo69913.setContext(context);
smo69913.draw();
const stavesmo66637 = new VF.Stave(531, 464, 409);
stavesmo66637.setAttribute('id', 'stavesmo66637');
stavesmo66637.setBegBarType(VF.Barline.type.NONE);
stavesmo66637.addClef('treble');
stavesmo66637.setContext(context);
stavesmo66637.draw();
smo66637v0.draw(context, stavesmo66637);
smo66637v1.draw(context, stavesmo66637);
smo69915.setContext(context);
smo69915.draw();
smo69916.setContext(context);
smo69916.draw();
smo69917.setContext(context);
smo69917.draw();
smo69918.setContext(context);
smo69918.draw();
const fmtsmo6163454 = new VF.Formatter();
//
// voices and notes for stave 0 54
const smo61634v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61634v0ar = [];
const smo61608 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo61608.setAttribute('id', 'smo61608');
smo61608.setStyle({ fillStyle: '#aaaaaa7f' });
smo61634v0ar.push(smo61608);
smo61634v0.addTickables(smo61634v0ar)
fmtsmo6163454.joinVoices([smo61634v0]);
const smo61634v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61634v1ar = [];
const smo61609 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61609.setAttribute('id', 'smo61609');
smo61609.setStyle({ fillStyle: "#115511" });
smo61634v1ar.push(smo61609);
const smo61610 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61610.setAttribute('id', 'smo61610');
smo61610.setStyle({ fillStyle: "#115511" });
smo61634v1ar.push(smo61610);
const smo61611 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo61611.setAttribute('id', 'smo61611');
smo61611.setStyle({ fillStyle: "#115511" });
const smo616110acc = new VF.Accidental('#');
smo61611.addModifier(smo616110acc, 0);
smo61634v1ar.push(smo61611);
const smo61612 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61612.setAttribute('id', 'smo61612');
smo61612.setStyle({ fillStyle: "#115511" });
smo61634v1ar.push(smo61612);
const smo61613 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61613.setAttribute('id', 'smo61613');
smo61613.setStyle({ fillStyle: "#115511" });
smo61634v1ar.push(smo61613);
const smo61614 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61614.setAttribute('id', 'smo61614');
smo61614.setStyle({ fillStyle: "#115511" });
smo61634v1ar.push(smo61614);
const smo61615 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61615.setAttribute('id', 'smo61615');
smo61615.setStyle({ fillStyle: "#115511" });
smo61634v1ar.push(smo61615);
const smo61616 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo61616.setAttribute('id', 'smo61616');
smo61616.setStyle({ fillStyle: "#115511" });
smo61634v1ar.push(smo61616);
const smo61617 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61617.setAttribute('id', 'smo61617');
smo61617.setStyle({ fillStyle: "#115511" });
smo61634v1ar.push(smo61617);
const smo61618 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/4/n"]}'))
smo61618.setAttribute('id', 'smo61618');
smo61618.setStyle({ fillStyle: "#115511" });
smo61634v1ar.push(smo61618);
const smo61619 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo61619.setAttribute('id', 'smo61619');
smo61619.setStyle({ fillStyle: "#115511" });
smo61634v1ar.push(smo61619);
const smo61620 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo61620.setAttribute('id', 'smo61620');
smo61620.setStyle({ fillStyle: "#115511" });
smo61634v1ar.push(smo61620);
smo61634v1.addTickables(smo61634v1ar)
fmtsmo6163454.joinVoices([smo61634v1]);
const fmtsmo6667054 = new VF.Formatter();
//
// voices and notes for stave 1 54
const smo66670v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66670v0ar = [];
const smo66638 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo66638.setAttribute('id', 'smo66638');
smo66670v0ar.push(smo66638);
const smo66639 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo66639.setAttribute('id', 'smo66639');
smo66670v0ar.push(smo66639);
const smo66640 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo66640.setAttribute('id', 'smo66640');
smo66670v0ar.push(smo66640);
const smo66641 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo66641.setAttribute('id', 'smo66641');
smo66670v0ar.push(smo66641);
const smo66642 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/2/n"]}'))
smo66642.setAttribute('id', 'smo66642');
smo66670v0ar.push(smo66642);
const smo66643 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/2/n"]}'))
smo66643.setAttribute('id', 'smo66643');
smo66670v0ar.push(smo66643);
const smo66644 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo66644.setAttribute('id', 'smo66644');
smo66670v0ar.push(smo66644);
const smo66645 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/2/n"]}'))
smo66645.setAttribute('id', 'smo66645');
const smo666450acc = new VF.Accidental('#');
smo66645.addModifier(smo666450acc, 0);
smo66670v0ar.push(smo66645);
const smo66646 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/2/n"]}'))
smo66646.setAttribute('id', 'smo66646');
smo66670v0ar.push(smo66646);
const smo66647 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo66647.setAttribute('id', 'smo66647');
smo66670v0ar.push(smo66647);
const smo66648 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo66648.setAttribute('id', 'smo66648');
const smo666480acc = new VF.Accidental('#');
smo66648.addModifier(smo666480acc, 0);
smo66670v0ar.push(smo66648);
const smo66649 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66649.setAttribute('id', 'smo66649');
smo66670v0ar.push(smo66649);
smo66670v0.addTickables(smo66670v0ar)
fmtsmo6667054.joinVoices([smo66670v0]);
const smo66670v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66670v1ar = [];
const smo66650 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo66650.setAttribute('id', 'smo66650');
smo66650.setStyle({ fillStyle: "#115511" });
smo66670v1ar.push(smo66650);
const smo66651 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo66651.setAttribute('id', 'smo66651');
smo66651.setStyle({ fillStyle: "#115511" });
smo66670v1ar.push(smo66651);
const smo66652 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo66652.setAttribute('id', 'smo66652');
smo66652.setStyle({ fillStyle: "#115511" });
smo66670v1ar.push(smo66652);
const smo66653 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo66653.setAttribute('id', 'smo66653');
smo66653.setStyle({ fillStyle: "#115511" });
const smo666530acc = new VF.Accidental('#');
smo66653.addModifier(smo666530acc, 0);
smo66670v1ar.push(smo66653);
const smo66654 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo66654.setAttribute('id', 'smo66654');
smo66654.setStyle({ fillStyle: "#115511" });
smo66670v1ar.push(smo66654);
const smo66655 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo66655.setAttribute('id', 'smo66655');
smo66655.setStyle({ fillStyle: "#115511" });
smo66670v1ar.push(smo66655);
const smo66656 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo66656.setAttribute('id', 'smo66656');
smo66656.setStyle({ fillStyle: "#115511" });
smo66670v1ar.push(smo66656);
smo66670v1.addTickables(smo66670v1ar)
fmtsmo6667054.joinVoices([smo66670v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69922 = smo61609.getStemDirection();
smo61609.setStemDirection(dirsmo69922);
smo61610.setStemDirection(dirsmo69922);
smo61611.setStemDirection(dirsmo69922);
smo61612.setStemDirection(dirsmo69922);
const smo69922 = new VF.Beam([smo61609,smo61610,smo61611,smo61612]);
const dirsmo69923 = smo61613.getStemDirection();
smo61613.setStemDirection(dirsmo69923);
smo61614.setStemDirection(dirsmo69923);
smo61615.setStemDirection(dirsmo69923);
smo61616.setStemDirection(dirsmo69923);
const smo69923 = new VF.Beam([smo61613,smo61614,smo61615,smo61616]);
const dirsmo69924 = smo61617.getStemDirection();
smo61617.setStemDirection(dirsmo69924);
smo61618.setStemDirection(dirsmo69924);
smo61619.setStemDirection(dirsmo69924);
smo61620.setStemDirection(dirsmo69924);
const smo69924 = new VF.Beam([smo61617,smo61618,smo61619,smo61620]);
const dirsmo69926 = smo66638.getStemDirection();
smo66638.setStemDirection(dirsmo69926);
smo66639.setStemDirection(dirsmo69926);
smo66640.setStemDirection(dirsmo69926);
smo66641.setStemDirection(dirsmo69926);
const smo69926 = new VF.Beam([smo66638,smo66639,smo66640,smo66641]);
const dirsmo69927 = smo66642.getStemDirection();
smo66642.setStemDirection(dirsmo69927);
smo66643.setStemDirection(dirsmo69927);
smo66644.setStemDirection(dirsmo69927);
smo66645.setStemDirection(dirsmo69927);
const smo69927 = new VF.Beam([smo66642,smo66643,smo66644,smo66645]);
const dirsmo69928 = smo66646.getStemDirection();
smo66646.setStemDirection(dirsmo69928);
smo66647.setStemDirection(dirsmo69928);
smo66648.setStemDirection(dirsmo69928);
smo66649.setStemDirection(dirsmo69928);
const smo69928 = new VF.Beam([smo66646,smo66647,smo66648,smo66649]);
const dirsmo69929 = smo66650.getStemDirection();
smo66650.setStemDirection(dirsmo69929);
smo66651.setStemDirection(dirsmo69929);
const smo69929 = new VF.Beam([smo66650,smo66651]);
const dirsmo69930 = smo66652.getStemDirection();
smo66652.setStemDirection(dirsmo69930);
smo66653.setStemDirection(dirsmo69930);
smo66654.setStemDirection(dirsmo69930);
smo66655.setStemDirection(dirsmo69930);
const smo69930 = new VF.Beam([smo66652,smo66653,smo66654,smo66655]);
 
// formatting measures in staff group smo58712
fmtsmo6163454.format([smo61634v0,smo61634v1,smo66670v0,smo66670v1], 447);
const stavesmo61634 = new VF.Stave(940, 319, 461);
stavesmo61634.setAttribute('id', 'stavesmo61634');
stavesmo61634.setBegBarType(VF.Barline.type.NONE);
stavesmo61634.setContext(context);
stavesmo61634.draw();
smo61634v0.draw(context, stavesmo61634);
smo61634v1.draw(context, stavesmo61634);
smo69922.setContext(context);
smo69922.draw();
smo69923.setContext(context);
smo69923.draw();
smo69924.setContext(context);
smo69924.draw();
const stavesmo66670 = new VF.Stave(940, 464, 461);
stavesmo66670.setAttribute('id', 'stavesmo66670');
stavesmo66670.setBegBarType(VF.Barline.type.NONE);
stavesmo66670.addClef('bass');
stavesmo66670.setContext(context);
stavesmo66670.draw();
smo66670v0.draw(context, stavesmo66670);
smo66670v1.draw(context, stavesmo66670);
smo69926.setContext(context);
smo69926.draw();
smo69927.setContext(context);
smo69927.draw();
smo69928.setContext(context);
smo69928.draw();
smo69929.setContext(context);
smo69929.draw();
smo69930.setContext(context);
smo69930.draw();
const fmtsmo6166755 = new VF.Formatter();
//
// voices and notes for stave 0 55
const smo61667v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61667v0ar = [];
const smo61635 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo61635.setAttribute('id', 'smo61635');
smo61667v0ar.push(smo61635);
const smo61636 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61636.setAttribute('id', 'smo61636');
smo61667v0ar.push(smo61636);
const smo61637 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61637.setAttribute('id', 'smo61637');
smo61637.addModifier(new VF.Dot(), 0);
smo61667v0ar.push(smo61637);
const smo61638 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61638.setAttribute('id', 'smo61638');
smo61667v0ar.push(smo61638);
const smo61639 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61639.setAttribute('id', 'smo61639');
smo61667v0ar.push(smo61639);
const smo61640 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61640.setAttribute('id', 'smo61640');
smo61667v0ar.push(smo61640);
const smo61641 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo61641.setAttribute('id', 'smo61641');
smo61667v0ar.push(smo61641);
const smo61642 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo61642.setAttribute('id', 'smo61642');
smo61667v0ar.push(smo61642);
const smo61643 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61643.setAttribute('id', 'smo61643');
smo61667v0ar.push(smo61643);
smo61667v0.addTickables(smo61667v0ar)
fmtsmo6166755.joinVoices([smo61667v0]);
const smo61667v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61667v1ar = [];
const smo61644 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo61644.setAttribute('id', 'smo61644');
smo61644.setStyle({ fillStyle: "#115511" });
smo61667v1ar.push(smo61644);
const smo61645 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo61645.setAttribute('id', 'smo61645');
smo61645.setStyle({ fillStyle: "#115511" });
smo61667v1ar.push(smo61645);
const smo61646 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo61646.setAttribute('id', 'smo61646');
smo61646.setStyle({ fillStyle: "#115511" });
smo61667v1ar.push(smo61646);
const smo61647 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo61647.setAttribute('id', 'smo61647');
smo61647.setStyle({ fillStyle: "#115511" });
smo61667v1ar.push(smo61647);
const smo61648 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61648.setAttribute('id', 'smo61648');
smo61648.setStyle({ fillStyle: "#115511" });
smo61667v1ar.push(smo61648);
const smo61649 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61649.setAttribute('id', 'smo61649');
smo61649.setStyle({ fillStyle: "#115511" });
smo61667v1ar.push(smo61649);
const smo61650 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo61650.setAttribute('id', 'smo61650');
smo61650.setStyle({ fillStyle: "#115511" });
smo61667v1ar.push(smo61650);
const smo61651 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61651.setAttribute('id', 'smo61651');
smo61651.setStyle({ fillStyle: "#115511" });
smo61667v1ar.push(smo61651);
const smo61652 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61652.setAttribute('id', 'smo61652');
smo61652.setStyle({ fillStyle: "#115511" });
smo61667v1ar.push(smo61652);
const smo61653 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo61653.setAttribute('id', 'smo61653');
smo61653.setStyle({ fillStyle: "#115511" });
smo61667v1ar.push(smo61653);
smo61667v1.addTickables(smo61667v1ar)
fmtsmo6166755.joinVoices([smo61667v1]);
const fmtsmo6670255 = new VF.Formatter();
//
// voices and notes for stave 1 55
const smo66702v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66702v0ar = [];
const smo66671 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo66671.setAttribute('id', 'smo66671');
smo66702v0ar.push(smo66671);
const smo66672 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo66672.setAttribute('id', 'smo66672');
smo66702v0ar.push(smo66672);
const smo66673 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo66673.setAttribute('id', 'smo66673');
smo66702v0ar.push(smo66673);
const smo66674 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo66674.setAttribute('id', 'smo66674');
smo66702v0ar.push(smo66674);
const smo66675 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo66675.setAttribute('id', 'smo66675');
smo66702v0ar.push(smo66675);
const smo66676 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66676.setAttribute('id', 'smo66676');
smo66702v0ar.push(smo66676);
const smo66677 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo66677.setAttribute('id', 'smo66677');
smo66702v0ar.push(smo66677);
const smo66678 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/3/n"]}'))
smo66678.setAttribute('id', 'smo66678');
smo66702v0ar.push(smo66678);
const smo66679 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66679.setAttribute('id', 'smo66679');
smo66702v0ar.push(smo66679);
const smo66680 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo66680.setAttribute('id', 'smo66680');
smo66702v0ar.push(smo66680);
const smo66681 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo66681.setAttribute('id', 'smo66681');
smo66702v0ar.push(smo66681);
const smo66682 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo66682.setAttribute('id', 'smo66682');
smo66702v0ar.push(smo66682);
smo66702v0.addTickables(smo66702v0ar)
fmtsmo6670255.joinVoices([smo66702v0]);
const smo66702v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66702v1ar = [];
const smo66683 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66683.setAttribute('id', 'smo66683');
smo66683.setStyle({ fillStyle: "#115511" });
smo66702v1ar.push(smo66683);
const smo66684 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo66684.setAttribute('id', 'smo66684');
smo66684.setStyle({ fillStyle: "#115511" });
smo66702v1ar.push(smo66684);
const smo66685 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66685.setAttribute('id', 'smo66685');
smo66685.setStyle({ fillStyle: "#115511" });
smo66702v1ar.push(smo66685);
const smo66686 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo66686.setAttribute('id', 'smo66686');
smo66686.setStyle({ fillStyle: "#115511" });
const smo666860acc = new VF.Accidental('#');
smo66686.addModifier(smo666860acc, 0);
smo66702v1ar.push(smo66686);
const smo66687 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo66687.setAttribute('id', 'smo66687');
smo66687.setStyle({ fillStyle: "#115511" });
smo66702v1ar.push(smo66687);
const smo66688 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66688.setAttribute('id', 'smo66688');
smo66688.setStyle({ fillStyle: "#115511" });
smo66702v1ar.push(smo66688);
smo66702v1.addTickables(smo66702v1ar)
fmtsmo6670255.joinVoices([smo66702v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69934 = smo61635.getStemDirection();
smo61635.setStemDirection(dirsmo69934);
smo61636.setStemDirection(dirsmo69934);
const smo69934 = new VF.Beam([smo61635,smo61636]);
const dirsmo69935 = smo61637.getStemDirection();
smo61637.setStemDirection(dirsmo69935);
smo61638.setStemDirection(dirsmo69935);
smo61639.setStemDirection(dirsmo69935);
const smo69935 = new VF.Beam([smo61637,smo61638,smo61639]);
const dirsmo69936 = smo61640.getStemDirection();
smo61640.setStemDirection(dirsmo69936);
smo61641.setStemDirection(dirsmo69936);
smo61642.setStemDirection(dirsmo69936);
smo61643.setStemDirection(dirsmo69936);
const smo69936 = new VF.Beam([smo61640,smo61641,smo61642,smo61643]);
const dirsmo69937 = smo61646.getStemDirection();
smo61646.setStemDirection(dirsmo69937);
smo61647.setStemDirection(dirsmo69937);
smo61648.setStemDirection(dirsmo69937);
smo61649.setStemDirection(dirsmo69937);
const smo69937 = new VF.Beam([smo61646,smo61647,smo61648,smo61649]);
const dirsmo69938 = smo61650.getStemDirection();
smo61650.setStemDirection(dirsmo69938);
smo61651.setStemDirection(dirsmo69938);
smo61652.setStemDirection(dirsmo69938);
smo61653.setStemDirection(dirsmo69938);
const smo69938 = new VF.Beam([smo61650,smo61651,smo61652,smo61653]);
const dirsmo69940 = smo66671.getStemDirection();
smo66671.setStemDirection(dirsmo69940);
smo66672.setStemDirection(dirsmo69940);
smo66673.setStemDirection(dirsmo69940);
smo66674.setStemDirection(dirsmo69940);
const smo69940 = new VF.Beam([smo66671,smo66672,smo66673,smo66674]);
const dirsmo69941 = smo66675.getStemDirection();
smo66675.setStemDirection(dirsmo69941);
smo66676.setStemDirection(dirsmo69941);
smo66677.setStemDirection(dirsmo69941);
smo66678.setStemDirection(dirsmo69941);
const smo69941 = new VF.Beam([smo66675,smo66676,smo66677,smo66678]);
const dirsmo69942 = smo66679.getStemDirection();
smo66679.setStemDirection(dirsmo69942);
smo66680.setStemDirection(dirsmo69942);
smo66681.setStemDirection(dirsmo69942);
smo66682.setStemDirection(dirsmo69942);
const smo69942 = new VF.Beam([smo66679,smo66680,smo66681,smo66682]);
const dirsmo69943 = smo66683.getStemDirection();
smo66683.setStemDirection(dirsmo69943);
smo66684.setStemDirection(dirsmo69943);
smo66685.setStemDirection(dirsmo69943);
const smo69943 = new VF.Beam([smo66683,smo66684,smo66685]);
const dirsmo69944 = smo66686.getStemDirection();
smo66686.setStemDirection(dirsmo69944);
smo66687.setStemDirection(dirsmo69944);
const smo69944 = new VF.Beam([smo66686,smo66687]);
 
// formatting measures in staff group smo58712
fmtsmo6166755.format([smo61667v0,smo61667v1,smo66702v0,smo66702v1], 394);
const stavesmo61667 = new VF.Stave(1401, 319, 408);
stavesmo61667.setAttribute('id', 'stavesmo61667');
stavesmo61667.setBegBarType(VF.Barline.type.NONE);
stavesmo61667.setContext(context);
stavesmo61667.draw();
smo61667v0.draw(context, stavesmo61667);
smo61667v1.draw(context, stavesmo61667);
smo69934.setContext(context);
smo69934.draw();
smo69935.setContext(context);
smo69935.draw();
smo69936.setContext(context);
smo69936.draw();
smo69937.setContext(context);
smo69937.draw();
smo69938.setContext(context);
smo69938.draw();
const stavesmo66702 = new VF.Stave(1401, 464, 408);
stavesmo66702.setAttribute('id', 'stavesmo66702');
stavesmo66702.setBegBarType(VF.Barline.type.NONE);
stavesmo66702.addClef('treble');
stavesmo66702.setContext(context);
stavesmo66702.draw();
smo66702v0.draw(context, stavesmo66702);
smo66702v1.draw(context, stavesmo66702);
smo69940.setContext(context);
smo69940.draw();
smo69941.setContext(context);
smo69941.draw();
smo69942.setContext(context);
smo69942.draw();
smo69943.setContext(context);
smo69943.draw();
smo69944.setContext(context);
smo69944.draw();
const rightsmo58712stavesmo616671 = new VF.StaveConnector(stavesmo61667, stavesmo66702).setType(0);
rightsmo58712stavesmo616671.setContext(context).draw();
const fmtsmo6170456 = new VF.Formatter();
//
// voices and notes for stave 0 56
const smo61704v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61704v0ar = [];
const smo61668 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61668.setAttribute('id', 'smo61668');
smo61704v0ar.push(smo61668);
const smo61669 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo61669.setAttribute('id', 'smo61669');
smo61704v0ar.push(smo61669);
const smo61670 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61670.setAttribute('id', 'smo61670');
smo61704v0ar.push(smo61670);
const smo61671 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61671.setAttribute('id', 'smo61671');
smo61704v0ar.push(smo61671);
const smo61672 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61672.setAttribute('id', 'smo61672');
smo61704v0ar.push(smo61672);
const smo61673 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61673.setAttribute('id', 'smo61673');
smo61704v0ar.push(smo61673);
const smo61674 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61674.setAttribute('id', 'smo61674');
smo61704v0ar.push(smo61674);
const smo61675 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo61675.setAttribute('id', 'smo61675');
smo61704v0ar.push(smo61675);
const smo61676 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo61676.setAttribute('id', 'smo61676');
smo61704v0ar.push(smo61676);
const smo61677 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo61677.setAttribute('id', 'smo61677');
smo61704v0ar.push(smo61677);
const smo61678 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo61678.setAttribute('id', 'smo61678');
smo61704v0ar.push(smo61678);
const smo61679 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo61679.setAttribute('id', 'smo61679');
smo61704v0ar.push(smo61679);
const smo61680 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo61680.setAttribute('id', 'smo61680');
smo61704v0ar.push(smo61680);
const smo61681 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo61681.setAttribute('id', 'smo61681');
smo61704v0ar.push(smo61681);
const smo61682 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61682.setAttribute('id', 'smo61682');
smo61704v0ar.push(smo61682);
const smo61683 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61683.setAttribute('id', 'smo61683');
smo61704v0ar.push(smo61683);
smo61704v0.addTickables(smo61704v0ar)
fmtsmo6170456.joinVoices([smo61704v0]);
const smo61704v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61704v1ar = [];
const smo61684 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61684.setAttribute('id', 'smo61684');
smo61684.setStyle({ fillStyle: "#115511" });
smo61704v1ar.push(smo61684);
const smo61685 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61685.setAttribute('id', 'smo61685');
smo61685.setStyle({ fillStyle: "#115511" });
smo61704v1ar.push(smo61685);
const smo61686 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo61686.setAttribute('id', 'smo61686');
smo61686.setStyle({ fillStyle: "#115511" });
smo61704v1ar.push(smo61686);
const smo61687 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/4/n"]}'))
smo61687.setAttribute('id', 'smo61687');
smo61687.setStyle({ fillStyle: "#115511" });
const smo616870acc = new VF.Accidental('b');
smo61687.addModifier(smo616870acc, 0);
smo61704v1ar.push(smo61687);
const smo61688 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61688.setAttribute('id', 'smo61688');
smo61688.setStyle({ fillStyle: "#115511" });
smo61704v1ar.push(smo61688);
const smo61689 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61689.setAttribute('id', 'smo61689');
smo61689.setStyle({ fillStyle: "#115511" });
smo61704v1ar.push(smo61689);
const smo61690 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61690.setAttribute('id', 'smo61690');
smo61690.setStyle({ fillStyle: "#115511" });
smo61704v1ar.push(smo61690);
smo61704v1.addTickables(smo61704v1ar)
fmtsmo6170456.joinVoices([smo61704v1]);
const fmtsmo6673156 = new VF.Formatter();
//
// voices and notes for stave 1 56
const smo66731v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66731v0ar = [];
const smo66703 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo66703.setAttribute('id', 'smo66703');
smo66703.addModifier(new VF.Dot(), 0);
smo66731v0ar.push(smo66703);
const smo66704 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo66704.setAttribute('id', 'smo66704');
smo66731v0ar.push(smo66704);
const smo66705 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo66705.setAttribute('id', 'smo66705');
smo66731v0ar.push(smo66705);
const smo66706 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo66706.setAttribute('id', 'smo66706');
smo66731v0ar.push(smo66706);
const smo66707 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo66707.setAttribute('id', 'smo66707');
smo66731v0ar.push(smo66707);
const smo66708 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo66708.setAttribute('id', 'smo66708');
smo66731v0ar.push(smo66708);
const smo66709 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo66709.setAttribute('id', 'smo66709');
smo66731v0ar.push(smo66709);
const smo66710 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo66710.setAttribute('id', 'smo66710');
smo66731v0ar.push(smo66710);
const smo66711 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo66711.setAttribute('id', 'smo66711');
smo66731v0ar.push(smo66711);
const smo66712 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo66712.setAttribute('id', 'smo66712');
smo66731v0ar.push(smo66712);
const smo66713 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo66713.setAttribute('id', 'smo66713');
smo66731v0ar.push(smo66713);
smo66731v0.addTickables(smo66731v0ar)
fmtsmo6673156.joinVoices([smo66731v0]);
const smo66731v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66731v1ar = [];
const smo66714 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66714.setAttribute('id', 'smo66714');
smo66714.setStyle({ fillStyle: "#115511" });
smo66731v1ar.push(smo66714);
const smo66715 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo66715.setAttribute('id', 'smo66715');
smo66715.setStyle({ fillStyle: "#115511" });
smo66731v1ar.push(smo66715);
const smo66716 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/3/n"]}'))
smo66716.setAttribute('id', 'smo66716');
smo66716.setStyle({ fillStyle: "#115511" });
smo66731v1ar.push(smo66716);
const smo66717 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo66717.setAttribute('id', 'smo66717');
smo66717.setStyle({ fillStyle: "#115511" });
smo66731v1ar.push(smo66717);
smo66731v1.addTickables(smo66731v1ar)
fmtsmo6673156.joinVoices([smo66731v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69964 = smo61668.getStemDirection();
smo61668.setStemDirection(dirsmo69964);
smo61669.setStemDirection(dirsmo69964);
smo61670.setStemDirection(dirsmo69964);
smo61671.setStemDirection(dirsmo69964);
const smo69964 = new VF.Beam([smo61668,smo61669,smo61670,smo61671]);
const dirsmo69965 = smo61672.getStemDirection();
smo61672.setStemDirection(dirsmo69965);
smo61673.setStemDirection(dirsmo69965);
smo61674.setStemDirection(dirsmo69965);
smo61675.setStemDirection(dirsmo69965);
const smo69965 = new VF.Beam([smo61672,smo61673,smo61674,smo61675]);
const dirsmo69966 = smo61676.getStemDirection();
smo61676.setStemDirection(dirsmo69966);
smo61677.setStemDirection(dirsmo69966);
smo61678.setStemDirection(dirsmo69966);
smo61679.setStemDirection(dirsmo69966);
const smo69966 = new VF.Beam([smo61676,smo61677,smo61678,smo61679]);
const dirsmo69967 = smo61680.getStemDirection();
smo61680.setStemDirection(dirsmo69967);
smo61681.setStemDirection(dirsmo69967);
smo61682.setStemDirection(dirsmo69967);
smo61683.setStemDirection(dirsmo69967);
const smo69967 = new VF.Beam([smo61680,smo61681,smo61682,smo61683]);
const dirsmo69968 = smo61685.getStemDirection();
smo61685.setStemDirection(dirsmo69968);
smo61686.setStemDirection(dirsmo69968);
smo61687.setStemDirection(dirsmo69968);
const smo69968 = new VF.Beam([smo61685,smo61686,smo61687]);
const dirsmo69969 = smo61689.getStemDirection();
smo61689.setStemDirection(dirsmo69969);
smo61690.setStemDirection(dirsmo69969);
const smo69969 = new VF.Beam([smo61689,smo61690]);
const dirsmo69971 = smo66703.getStemDirection();
smo66703.setStemDirection(dirsmo69971);
smo66704.setStemDirection(dirsmo69971);
smo66705.setStemDirection(dirsmo69971);
const smo69971 = new VF.Beam([smo66703,smo66704,smo66705]);
const dirsmo69972 = smo66706.getStemDirection();
smo66706.setStemDirection(dirsmo69972);
smo66707.setStemDirection(dirsmo69972);
const smo69972 = new VF.Beam([smo66706,smo66707]);
const dirsmo69973 = smo66708.getStemDirection();
smo66708.setStemDirection(dirsmo69973);
smo66709.setStemDirection(dirsmo69973);
const smo69973 = new VF.Beam([smo66708,smo66709]);
const dirsmo69974 = smo66710.getStemDirection();
smo66710.setStemDirection(dirsmo69974);
smo66711.setStemDirection(dirsmo69974);
smo66712.setStemDirection(dirsmo69974);
smo66713.setStemDirection(dirsmo69974);
const smo69974 = new VF.Beam([smo66710,smo66711,smo66712,smo66713]);
const dirsmo69975 = smo66716.getStemDirection();
smo66716.setStemDirection(dirsmo69975);
smo66717.setStemDirection(dirsmo69975);
const smo69975 = new VF.Beam([smo66716,smo66717]);
 
// formatting measures in staff group smo58712
fmtsmo6170456.format([smo61704v0,smo61704v1,smo66731v0,smo66731v1], 432);
const stavesmo61704 = new VF.Stave(90, 688, 483);
stavesmo61704.setAttribute('id', 'stavesmo61704');
stavesmo61704.setBegBarType(1);
stavesmo61704.addClef('treble');
stavesmo61704.setContext(context);
stavesmo61704.draw();
smo61704v0.draw(context, stavesmo61704);
smo61704v1.draw(context, stavesmo61704);
smo69964.setContext(context);
smo69964.draw();
smo69965.setContext(context);
smo69965.draw();
smo69966.setContext(context);
smo69966.draw();
smo69967.setContext(context);
smo69967.draw();
smo69968.setContext(context);
smo69968.draw();
smo69969.setContext(context);
smo69969.draw();
const stavesmo66731 = new VF.Stave(90, 807, 483);
stavesmo66731.setAttribute('id', 'stavesmo66731');
stavesmo66731.setBegBarType(1);
stavesmo66731.addClef('treble');
stavesmo66731.setContext(context);
stavesmo66731.draw();
smo66731v0.draw(context, stavesmo66731);
smo66731v1.draw(context, stavesmo66731);
smo69971.setContext(context);
smo69971.draw();
smo69972.setContext(context);
smo69972.draw();
smo69973.setContext(context);
smo69973.draw();
smo69974.setContext(context);
smo69974.draw();
smo69975.setContext(context);
smo69975.draw();
const leftsmo58712stavesmo617041 = new VF.StaveConnector(stavesmo61704, stavesmo66731).setType(3);
leftsmo58712stavesmo617041.setContext(context).draw();
const fmtsmo6172957 = new VF.Formatter();
//
// voices and notes for stave 0 57
const smo61729v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61729v0ar = [];
const smo61705 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61705.setAttribute('id', 'smo61705');
smo61729v0ar.push(smo61705);
const smo61706 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61706.setAttribute('id', 'smo61706');
smo61729v0ar.push(smo61706);
const smo61707 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61707.setAttribute('id', 'smo61707');
smo61729v0ar.push(smo61707);
const smo61708 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61708.setAttribute('id', 'smo61708');
smo61729v0ar.push(smo61708);
const smo61709 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61709.setAttribute('id', 'smo61709');
smo61729v0ar.push(smo61709);
const smo61710 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61710.setAttribute('id', 'smo61710');
smo61729v0ar.push(smo61710);
smo61729v0.addTickables(smo61729v0ar)
fmtsmo6172957.joinVoices([smo61729v0]);
const smo61729v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61729v1ar = [];
const smo61711 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61711.setAttribute('id', 'smo61711');
smo61711.setStyle({ fillStyle: "#115511" });
smo61711.addModifier(new VF.Dot(), 0);
smo61729v1ar.push(smo61711);
const smo61712 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61712.setAttribute('id', 'smo61712');
smo61712.setStyle({ fillStyle: "#115511" });
smo61729v1ar.push(smo61712);
const smo61713 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo61713.setAttribute('id', 'smo61713');
smo61713.setStyle({ fillStyle: "#115511" });
smo61729v1ar.push(smo61713);
const smo61714 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo61714.setAttribute('id', 'smo61714');
smo61714.setStyle({ fillStyle: "#115511" });
smo61729v1ar.push(smo61714);
const smo61715 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo61715.setAttribute('id', 'smo61715');
smo61715.setStyle({ fillStyle: "#115511" });
smo61729v1ar.push(smo61715);
smo61729v1.addTickables(smo61729v1ar)
fmtsmo6172957.joinVoices([smo61729v1]);
const fmtsmo6676557 = new VF.Formatter();
//
// voices and notes for stave 1 57
const smo66765v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66765v0ar = [];
const smo66732 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo66732.setAttribute('id', 'smo66732');
smo66765v0ar.push(smo66732);
const smo66733 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo66733.setAttribute('id', 'smo66733');
smo66765v0ar.push(smo66733);
const smo66734 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo66734.setAttribute('id', 'smo66734');
smo66765v0ar.push(smo66734);
const smo66735 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo66735.setAttribute('id', 'smo66735');
smo66765v0ar.push(smo66735);
const smo66736 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66736.setAttribute('id', 'smo66736');
smo66765v0ar.push(smo66736);
const smo66737 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66737.setAttribute('id', 'smo66737');
smo66765v0ar.push(smo66737);
smo66765v0.addTickables(smo66765v0ar)
fmtsmo6676557.joinVoices([smo66765v0]);
const smo66765v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66765v1ar = [];
const smo66738 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo66738.setAttribute('id', 'smo66738');
smo66738.setStyle({ fillStyle: "#115511" });
smo66765v1ar.push(smo66738);
const smo66739 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo66739.setAttribute('id', 'smo66739');
smo66739.setStyle({ fillStyle: "#115511" });
smo66765v1ar.push(smo66739);
const smo66740 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66740.setAttribute('id', 'smo66740');
smo66740.setStyle({ fillStyle: "#115511" });
smo66765v1ar.push(smo66740);
const smo66741 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo66741.setAttribute('id', 'smo66741');
smo66741.setStyle({ fillStyle: "#115511" });
smo66765v1ar.push(smo66741);
const smo66742 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo66742.setAttribute('id', 'smo66742');
smo66742.setStyle({ fillStyle: "#115511" });
smo66765v1ar.push(smo66742);
const smo66743 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo66743.setAttribute('id', 'smo66743');
smo66743.setStyle({ fillStyle: "#115511" });
smo66765v1ar.push(smo66743);
const smo66744 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo66744.setAttribute('id', 'smo66744');
smo66744.setStyle({ fillStyle: "#115511" });
smo66765v1ar.push(smo66744);
const smo66745 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/2/n"]}'))
smo66745.setAttribute('id', 'smo66745');
smo66745.setStyle({ fillStyle: "#115511" });
smo66765v1ar.push(smo66745);
const smo66746 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo66746.setAttribute('id', 'smo66746');
smo66746.setStyle({ fillStyle: "#115511" });
smo66765v1ar.push(smo66746);
const smo66747 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo66747.setAttribute('id', 'smo66747');
smo66747.setStyle({ fillStyle: "#115511" });
smo66765v1ar.push(smo66747);
const smo66748 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo66748.setAttribute('id', 'smo66748');
smo66748.setStyle({ fillStyle: "#115511" });
smo66765v1ar.push(smo66748);
const smo66749 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo66749.setAttribute('id', 'smo66749');
smo66749.setStyle({ fillStyle: "#115511" });
smo66765v1ar.push(smo66749);
const smo66750 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66750.setAttribute('id', 'smo66750');
smo66750.setStyle({ fillStyle: "#115511" });
smo66765v1ar.push(smo66750);
const smo66751 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo66751.setAttribute('id', 'smo66751');
smo66751.setStyle({ fillStyle: "#115511" });
smo66765v1ar.push(smo66751);
smo66765v1.addTickables(smo66765v1ar)
fmtsmo6676557.joinVoices([smo66765v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69979 = smo61706.getStemDirection();
smo61706.setStemDirection(dirsmo69979);
smo61707.setStemDirection(dirsmo69979);
const smo69979 = new VF.Beam([smo61706,smo61707]);
const dirsmo69980 = smo61713.getStemDirection();
smo61713.setStemDirection(dirsmo69980);
smo61714.setStemDirection(dirsmo69980);
const smo69980 = new VF.Beam([smo61713,smo61714]);
const dirsmo69982 = smo66733.getStemDirection();
smo66733.setStemDirection(dirsmo69982);
smo66734.setStemDirection(dirsmo69982);
const smo69982 = new VF.Beam([smo66733,smo66734]);
const dirsmo69983 = smo66735.getStemDirection();
smo66735.setStemDirection(dirsmo69983);
smo66736.setStemDirection(dirsmo69983);
const smo69983 = new VF.Beam([smo66735,smo66736]);
const dirsmo69984 = smo66738.getStemDirection();
smo66738.setStemDirection(dirsmo69984);
smo66739.setStemDirection(dirsmo69984);
smo66740.setStemDirection(dirsmo69984);
smo66741.setStemDirection(dirsmo69984);
const smo69984 = new VF.Beam([smo66738,smo66739,smo66740,smo66741]);
const dirsmo69985 = smo66742.getStemDirection();
smo66742.setStemDirection(dirsmo69985);
smo66743.setStemDirection(dirsmo69985);
smo66744.setStemDirection(dirsmo69985);
smo66745.setStemDirection(dirsmo69985);
const smo69985 = new VF.Beam([smo66742,smo66743,smo66744,smo66745]);
const dirsmo69986 = smo66746.getStemDirection();
smo66746.setStemDirection(dirsmo69986);
smo66747.setStemDirection(dirsmo69986);
smo66748.setStemDirection(dirsmo69986);
smo66749.setStemDirection(dirsmo69986);
const smo69986 = new VF.Beam([smo66746,smo66747,smo66748,smo66749]);
const dirsmo69987 = smo66750.getStemDirection();
smo66750.setStemDirection(dirsmo69987);
smo66751.setStemDirection(dirsmo69987);
const smo69987 = new VF.Beam([smo66750,smo66751]);
 
// formatting measures in staff group smo58712
fmtsmo6172957.format([smo61729v0,smo61729v1,smo66765v0,smo66765v1], 355);
const stavesmo61729 = new VF.Stave(573, 688, 369);
stavesmo61729.setAttribute('id', 'stavesmo61729');
stavesmo61729.setBegBarType(VF.Barline.type.NONE);
stavesmo61729.setContext(context);
stavesmo61729.draw();
smo61729v0.draw(context, stavesmo61729);
smo61729v1.draw(context, stavesmo61729);
smo69979.setContext(context);
smo69979.draw();
smo69980.setContext(context);
smo69980.draw();
const stavesmo66765 = new VF.Stave(573, 807, 369);
stavesmo66765.setAttribute('id', 'stavesmo66765');
stavesmo66765.setBegBarType(VF.Barline.type.NONE);
stavesmo66765.setContext(context);
stavesmo66765.draw();
smo66765v0.draw(context, stavesmo66765);
smo66765v1.draw(context, stavesmo66765);
smo69982.setContext(context);
smo69982.draw();
smo69983.setContext(context);
smo69983.draw();
smo69984.setContext(context);
smo69984.draw();
smo69985.setContext(context);
smo69985.draw();
smo69986.setContext(context);
smo69986.draw();
smo69987.setContext(context);
smo69987.draw();
const fmtsmo6175658 = new VF.Formatter();
//
// voices and notes for stave 0 58
const smo61756v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61756v0ar = [];
const smo61730 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61730.setAttribute('id', 'smo61730');
smo61756v0ar.push(smo61730);
const smo61731 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61731.setAttribute('id', 'smo61731');
smo61756v0ar.push(smo61731);
const smo61732 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/4/n"]}'))
smo61732.setAttribute('id', 'smo61732');
const smo617320acc = new VF.Accidental('b');
smo61732.addModifier(smo617320acc, 0);
smo61756v0ar.push(smo61732);
const smo61733 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo61733.setAttribute('id', 'smo61733');
smo61756v0ar.push(smo61733);
const smo61734 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61734.setAttribute('id', 'smo61734');
smo61756v0ar.push(smo61734);
const smo61735 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61735.setAttribute('id', 'smo61735');
smo61756v0ar.push(smo61735);
smo61756v0.addTickables(smo61756v0ar)
fmtsmo6175658.joinVoices([smo61756v0]);
const smo61756v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61756v1ar = [];
const smo61736 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo61736.setAttribute('id', 'smo61736');
smo61736.setStyle({ fillStyle: "#115511" });
smo61756v1ar.push(smo61736);
const smo61737 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo61737.setAttribute('id', 'smo61737');
smo61737.setStyle({ fillStyle: "#115511" });
smo61756v1ar.push(smo61737);
const smo61738 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61738.setAttribute('id', 'smo61738');
smo61738.setStyle({ fillStyle: "#115511" });
smo61756v1ar.push(smo61738);
const smo61739 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61739.setAttribute('id', 'smo61739');
smo61739.setStyle({ fillStyle: "#115511" });
smo61756v1ar.push(smo61739);
const smo61740 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61740.setAttribute('id', 'smo61740');
smo61740.setStyle({ fillStyle: "#115511" });
smo61756v1ar.push(smo61740);
const smo61741 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61741.setAttribute('id', 'smo61741');
smo61741.setStyle({ fillStyle: "#115511" });
smo61756v1ar.push(smo61741);
const smo61742 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo61742.setAttribute('id', 'smo61742');
smo61742.setStyle({ fillStyle: "#115511" });
smo61756v1ar.push(smo61742);
smo61756v1.addTickables(smo61756v1ar)
fmtsmo6175658.joinVoices([smo61756v1]);
const fmtsmo6678958 = new VF.Formatter();
//
// voices and notes for stave 1 58
const smo66789v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66789v0ar = [];
const smo66766 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66766.setAttribute('id', 'smo66766');
smo66789v0ar.push(smo66766);
const smo66767 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/3/n"]}'))
smo66767.setAttribute('id', 'smo66767');
smo66789v0ar.push(smo66767);
const smo66768 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo66768.setAttribute('id', 'smo66768');
smo66789v0ar.push(smo66768);
const smo66769 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo66769.setAttribute('id', 'smo66769');
smo66789v0ar.push(smo66769);
const smo66770 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo66770.setAttribute('id', 'smo66770');
smo66770.addModifier(new VF.Dot(), 0);
smo66789v0ar.push(smo66770);
const smo66771 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66771.setAttribute('id', 'smo66771');
smo66789v0ar.push(smo66771);
const smo66772 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo66772.setAttribute('id', 'smo66772');
smo66789v0ar.push(smo66772);
const smo66773 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo66773.setAttribute('id', 'smo66773');
smo66789v0ar.push(smo66773);
const smo66774 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo66774.setAttribute('id', 'smo66774');
smo66789v0ar.push(smo66774);
smo66789v0.addTickables(smo66789v0ar)
fmtsmo6678958.joinVoices([smo66789v0]);
const smo66789v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66789v1ar = [];
const smo66775 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo66775.setAttribute('id', 'smo66775');
smo66775.setStyle({ fillStyle: "#115511" });
smo66789v1ar.push(smo66775);
smo66789v1.addTickables(smo66789v1ar)
fmtsmo6678958.joinVoices([smo66789v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69991 = smo61731.getStemDirection();
smo61731.setStemDirection(dirsmo69991);
smo61732.setStemDirection(dirsmo69991);
const smo69991 = new VF.Beam([smo61731,smo61732]);
const dirsmo69992 = smo61739.getStemDirection();
smo61739.setStemDirection(dirsmo69992);
smo61740.setStemDirection(dirsmo69992);
const smo69992 = new VF.Beam([smo61739,smo61740]);
const dirsmo69993 = smo61741.getStemDirection();
smo61741.setStemDirection(dirsmo69993);
smo61742.setStemDirection(dirsmo69993);
const smo69993 = new VF.Beam([smo61741,smo61742]);
const dirsmo69995 = smo66766.getStemDirection();
smo66766.setStemDirection(dirsmo69995);
smo66767.setStemDirection(dirsmo69995);
smo66768.setStemDirection(dirsmo69995);
smo66769.setStemDirection(dirsmo69995);
const smo69995 = new VF.Beam([smo66766,smo66767,smo66768,smo66769]);
const dirsmo69996 = smo66770.getStemDirection();
smo66770.setStemDirection(dirsmo69996);
smo66771.setStemDirection(dirsmo69996);
smo66772.setStemDirection(dirsmo69996);
const smo69996 = new VF.Beam([smo66770,smo66771,smo66772]);
const dirsmo69997 = smo66773.getStemDirection();
smo66773.setStemDirection(dirsmo69997);
smo66774.setStemDirection(dirsmo69997);
const smo69997 = new VF.Beam([smo66773,smo66774]);
 
// formatting measures in staff group smo58712
fmtsmo6175658.format([smo61756v0,smo61756v1,smo66789v0,smo66789v1], 351);
const stavesmo61756 = new VF.Stave(942, 688, 365);
stavesmo61756.setAttribute('id', 'stavesmo61756');
stavesmo61756.setBegBarType(VF.Barline.type.NONE);
stavesmo61756.setContext(context);
stavesmo61756.draw();
smo61756v0.draw(context, stavesmo61756);
smo61756v1.draw(context, stavesmo61756);
smo69991.setContext(context);
smo69991.draw();
smo69992.setContext(context);
smo69992.draw();
smo69993.setContext(context);
smo69993.draw();
const stavesmo66789 = new VF.Stave(942, 807, 365);
stavesmo66789.setAttribute('id', 'stavesmo66789');
stavesmo66789.setBegBarType(VF.Barline.type.NONE);
stavesmo66789.addClef('bass');
stavesmo66789.setContext(context);
stavesmo66789.draw();
smo66789v0.draw(context, stavesmo66789);
smo66789v1.draw(context, stavesmo66789);
smo69995.setContext(context);
smo69995.draw();
smo69996.setContext(context);
smo69996.draw();
smo69997.setContext(context);
smo69997.draw();
const fmtsmo6179259 = new VF.Formatter();
//
// voices and notes for stave 0 59
const smo61792v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61792v0ar = [];
const smo61757 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61757.setAttribute('id', 'smo61757');
smo61792v0ar.push(smo61757);
const smo61758 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo61758.setAttribute('id', 'smo61758');
smo61792v0ar.push(smo61758);
const smo61759 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo61759.setAttribute('id', 'smo61759');
smo61792v0ar.push(smo61759);
const smo61760 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo61760.setAttribute('id', 'smo61760');
smo61792v0ar.push(smo61760);
const smo61761 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo61761.setAttribute('id', 'smo61761');
smo61792v0ar.push(smo61761);
const smo61762 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo61762.setAttribute('id', 'smo61762');
smo61792v0ar.push(smo61762);
const smo61763 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo61763.setAttribute('id', 'smo61763');
smo61792v0ar.push(smo61763);
const smo61764 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo61764.setAttribute('id', 'smo61764');
smo61792v0ar.push(smo61764);
const smo61765 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo61765.setAttribute('id', 'smo61765');
smo61792v0ar.push(smo61765);
const smo61766 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo61766.setAttribute('id', 'smo61766');
smo61792v0ar.push(smo61766);
const smo61767 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61767.setAttribute('id', 'smo61767');
smo61792v0ar.push(smo61767);
smo61792v0.addTickables(smo61792v0ar)
fmtsmo6179259.joinVoices([smo61792v0]);
const smo61792v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61792v1ar = [];
const smo61768 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/4/n"]}'))
smo61768.setAttribute('id', 'smo61768');
smo61768.setStyle({ fillStyle: "#115511" });
const smo617680acc = new VF.Accidental('b');
smo61768.addModifier(smo617680acc, 0);
smo61768.addModifier(new VF.Dot(), 0);
smo61792v1ar.push(smo61768);
const smo61769 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61769.setAttribute('id', 'smo61769');
smo61769.setStyle({ fillStyle: "#115511" });
smo61792v1ar.push(smo61769);
const smo61770 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/4/n"]}'))
smo61770.setAttribute('id', 'smo61770');
smo61770.setStyle({ fillStyle: "#115511" });
smo61792v1ar.push(smo61770);
const smo61771 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo61771.setAttribute('id', 'smo61771');
smo61771.setStyle({ fillStyle: "#115511" });
smo61792v1ar.push(smo61771);
const smo61772 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61772.setAttribute('id', 'smo61772');
smo61772.setStyle({ fillStyle: "#115511" });
smo61792v1ar.push(smo61772);
const smo61773 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61773.setAttribute('id', 'smo61773');
smo61773.setStyle({ fillStyle: "#115511" });
smo61792v1ar.push(smo61773);
const smo61774 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61774.setAttribute('id', 'smo61774');
smo61774.setStyle({ fillStyle: "#115511" });
smo61792v1ar.push(smo61774);
const smo61775 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61775.setAttribute('id', 'smo61775');
smo61775.setStyle({ fillStyle: "#115511" });
smo61792v1ar.push(smo61775);
const smo61776 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61776.setAttribute('id', 'smo61776');
smo61776.setStyle({ fillStyle: "#115511" });
smo61792v1ar.push(smo61776);
const smo61777 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61777.setAttribute('id', 'smo61777');
smo61777.setStyle({ fillStyle: "#115511" });
smo61792v1ar.push(smo61777);
const smo61778 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/4/n"]}'))
smo61778.setAttribute('id', 'smo61778');
smo61778.setStyle({ fillStyle: "#115511" });
smo61792v1ar.push(smo61778);
smo61792v1.addTickables(smo61792v1ar)
fmtsmo6179259.joinVoices([smo61792v1]);
const fmtsmo6681859 = new VF.Formatter();
//
// voices and notes for stave 1 59
const smo66818v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66818v0ar = [];
const smo66790 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo66790.setAttribute('id', 'smo66790');
smo66818v0ar.push(smo66790);
const smo66791 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66791.setAttribute('id', 'smo66791');
smo66818v0ar.push(smo66791);
const smo66792 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66792.setAttribute('id', 'smo66792');
smo66818v0ar.push(smo66792);
const smo66793 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo66793.setAttribute('id', 'smo66793');
smo66818v0ar.push(smo66793);
const smo66794 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66794.setAttribute('id', 'smo66794');
smo66818v0ar.push(smo66794);
const smo66795 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo66795.setAttribute('id', 'smo66795');
smo66818v0ar.push(smo66795);
const smo66796 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo66796.setAttribute('id', 'smo66796');
smo66818v0ar.push(smo66796);
const smo66797 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo66797.setAttribute('id', 'smo66797');
smo66818v0ar.push(smo66797);
const smo66798 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo66798.setAttribute('id', 'smo66798');
smo66818v0ar.push(smo66798);
const smo66799 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo66799.setAttribute('id', 'smo66799');
smo66818v0ar.push(smo66799);
const smo66800 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66800.setAttribute('id', 'smo66800');
smo66818v0ar.push(smo66800);
const smo66801 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo66801.setAttribute('id', 'smo66801');
smo66818v0ar.push(smo66801);
const smo66802 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/3/n"]}'))
smo66802.setAttribute('id', 'smo66802');
const smo668020acc = new VF.Accidental('b');
smo66802.addModifier(smo668020acc, 0);
smo66818v0ar.push(smo66802);
const smo66803 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66803.setAttribute('id', 'smo66803');
smo66818v0ar.push(smo66803);
smo66818v0.addTickables(smo66818v0ar)
fmtsmo6681859.joinVoices([smo66818v0]);
const smo66818v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66818v1ar = [];
const smo66804 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo66804.setAttribute('id', 'smo66804');
smo66804.setStyle({ fillStyle: "#115511" });
smo66818v1ar.push(smo66804);
smo66818v1.addTickables(smo66818v1ar)
fmtsmo6681859.joinVoices([smo66818v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo70001 = smo61757.getStemDirection();
smo61757.setStemDirection(dirsmo70001);
smo61758.setStemDirection(dirsmo70001);
const smo70001 = new VF.Beam([smo61757,smo61758]);
const dirsmo70002 = smo61760.getStemDirection();
smo61760.setStemDirection(dirsmo70002);
smo61761.setStemDirection(dirsmo70002);
smo61762.setStemDirection(dirsmo70002);
smo61763.setStemDirection(dirsmo70002);
const smo70002 = new VF.Beam([smo61760,smo61761,smo61762,smo61763]);
const dirsmo70003 = smo61764.getStemDirection();
smo61764.setStemDirection(dirsmo70003);
smo61765.setStemDirection(dirsmo70003);
smo61766.setStemDirection(dirsmo70003);
smo61767.setStemDirection(dirsmo70003);
const smo70003 = new VF.Beam([smo61764,smo61765,smo61766,smo61767]);
const dirsmo70004 = smo61768.getStemDirection();
smo61768.setStemDirection(dirsmo70004);
smo61769.setStemDirection(dirsmo70004);
smo61770.setStemDirection(dirsmo70004);
const smo70004 = new VF.Beam([smo61768,smo61769,smo61770]);
const dirsmo70005 = smo61771.getStemDirection();
smo61771.setStemDirection(dirsmo70005);
smo61772.setStemDirection(dirsmo70005);
const smo70005 = new VF.Beam([smo61771,smo61772]);
const dirsmo70006 = smo61773.getStemDirection();
smo61773.setStemDirection(dirsmo70006);
smo61774.setStemDirection(dirsmo70006);
const smo70006 = new VF.Beam([smo61773,smo61774]);
const dirsmo70007 = smo61775.getStemDirection();
smo61775.setStemDirection(dirsmo70007);
smo61776.setStemDirection(dirsmo70007);
smo61777.setStemDirection(dirsmo70007);
smo61778.setStemDirection(dirsmo70007);
const smo70007 = new VF.Beam([smo61775,smo61776,smo61777,smo61778]);
const dirsmo70009 = smo66790.getStemDirection();
smo66790.setStemDirection(dirsmo70009);
smo66791.setStemDirection(dirsmo70009);
const smo70009 = new VF.Beam([smo66790,smo66791]);
const dirsmo70010 = smo66792.getStemDirection();
smo66792.setStemDirection(dirsmo70010);
smo66793.setStemDirection(dirsmo70010);
smo66794.setStemDirection(dirsmo70010);
smo66795.setStemDirection(dirsmo70010);
const smo70010 = new VF.Beam([smo66792,smo66793,smo66794,smo66795]);
const dirsmo70011 = smo66796.getStemDirection();
smo66796.setStemDirection(dirsmo70011);
smo66797.setStemDirection(dirsmo70011);
smo66798.setStemDirection(dirsmo70011);
smo66799.setStemDirection(dirsmo70011);
const smo70011 = new VF.Beam([smo66796,smo66797,smo66798,smo66799]);
const dirsmo70012 = smo66800.getStemDirection();
smo66800.setStemDirection(dirsmo70012);
smo66801.setStemDirection(dirsmo70012);
smo66802.setStemDirection(dirsmo70012);
smo66803.setStemDirection(dirsmo70012);
const smo70012 = new VF.Beam([smo66800,smo66801,smo66802,smo66803]);
 
// formatting measures in staff group smo58712
fmtsmo6179259.format([smo61792v0,smo61792v1,smo66818v0,smo66818v1], 488);
const stavesmo61792 = new VF.Stave(1307, 688, 502);
stavesmo61792.setAttribute('id', 'stavesmo61792');
stavesmo61792.setBegBarType(VF.Barline.type.NONE);
stavesmo61792.setContext(context);
stavesmo61792.draw();
smo61792v0.draw(context, stavesmo61792);
smo61792v1.draw(context, stavesmo61792);
smo70001.setContext(context);
smo70001.draw();
smo70002.setContext(context);
smo70002.draw();
smo70003.setContext(context);
smo70003.draw();
smo70004.setContext(context);
smo70004.draw();
smo70005.setContext(context);
smo70005.draw();
smo70006.setContext(context);
smo70006.draw();
smo70007.setContext(context);
smo70007.draw();
const stavesmo66818 = new VF.Stave(1307, 807, 502);
stavesmo66818.setAttribute('id', 'stavesmo66818');
stavesmo66818.setBegBarType(VF.Barline.type.NONE);
stavesmo66818.setContext(context);
stavesmo66818.draw();
smo66818v0.draw(context, stavesmo66818);
smo66818v1.draw(context, stavesmo66818);
smo70009.setContext(context);
smo70009.draw();
smo70010.setContext(context);
smo70010.draw();
smo70011.setContext(context);
smo70011.draw();
smo70012.setContext(context);
smo70012.draw();
const rightsmo58712stavesmo617921 = new VF.StaveConnector(stavesmo61792, stavesmo66818).setType(0);
rightsmo58712stavesmo617921.setContext(context).draw();
const fmtsmo6182660 = new VF.Formatter();
//
// voices and notes for stave 0 60
const smo61826v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61826v0ar = [];
const smo61793 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61793.setAttribute('id', 'smo61793');
smo61826v0ar.push(smo61793);
const smo61794 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo61794.setAttribute('id', 'smo61794');
smo61826v0ar.push(smo61794);
const smo61795 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61795.setAttribute('id', 'smo61795');
smo61826v0ar.push(smo61795);
const smo61796 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo61796.setAttribute('id', 'smo61796');
smo61826v0ar.push(smo61796);
const smo61797 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61797.setAttribute('id', 'smo61797');
const smo617970acc = new VF.Accidental('n');
smo61797.addModifier(smo617970acc, 0);
smo61826v0ar.push(smo61797);
const smo61798 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61798.setAttribute('id', 'smo61798');
smo61826v0ar.push(smo61798);
const smo61799 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61799.setAttribute('id', 'smo61799');
smo61826v0ar.push(smo61799);
const smo61800 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo61800.setAttribute('id', 'smo61800');
smo61826v0ar.push(smo61800);
const smo61801 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo61801.setAttribute('id', 'smo61801');
smo61826v0ar.push(smo61801);
smo61826v0.addTickables(smo61826v0ar)
fmtsmo6182660.joinVoices([smo61826v0]);
const smo61826v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61826v1ar = [];
const smo61802 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo61802.setAttribute('id', 'smo61802');
smo61802.setStyle({ fillStyle: "#115511" });
smo61826v1ar.push(smo61802);
const smo61803 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/4/n"]}'))
smo61803.setAttribute('id', 'smo61803');
smo61803.setStyle({ fillStyle: "#115511" });
const smo618030acc = new VF.Accidental('b');
smo61803.addModifier(smo618030acc, 0);
smo61826v1ar.push(smo61803);
const smo61804 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo61804.setAttribute('id', 'smo61804');
smo61804.setStyle({ fillStyle: "#115511" });
smo61826v1ar.push(smo61804);
const smo61805 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61805.setAttribute('id', 'smo61805');
smo61805.setStyle({ fillStyle: "#115511" });
smo61826v1ar.push(smo61805);
const smo61806 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61806.setAttribute('id', 'smo61806');
smo61806.setStyle({ fillStyle: "#115511" });
smo61826v1ar.push(smo61806);
const smo61807 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61807.setAttribute('id', 'smo61807');
smo61807.setStyle({ fillStyle: "#115511" });
smo61826v1ar.push(smo61807);
const smo61808 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61808.setAttribute('id', 'smo61808');
smo61808.setStyle({ fillStyle: "#115511" });
smo61826v1ar.push(smo61808);
const smo61809 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo61809.setAttribute('id', 'smo61809');
smo61809.setStyle({ fillStyle: "#115511" });
smo61826v1ar.push(smo61809);
const smo61810 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo61810.setAttribute('id', 'smo61810');
smo61810.setStyle({ fillStyle: "#115511" });
smo61826v1ar.push(smo61810);
const smo61811 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo61811.setAttribute('id', 'smo61811');
smo61811.setStyle({ fillStyle: "#115511" });
smo61811.addModifier(new VF.Dot(), 0);
smo61826v1ar.push(smo61811);
const smo61812 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61812.setAttribute('id', 'smo61812');
smo61812.setStyle({ fillStyle: "#115511" });
smo61826v1ar.push(smo61812);
smo61826v1.addTickables(smo61826v1ar)
fmtsmo6182660.joinVoices([smo61826v1]);
const fmtsmo6684260 = new VF.Formatter();
//
// voices and notes for stave 1 60
const smo66842v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66842v0ar = [];
const smo66819 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo66819.setAttribute('id', 'smo66819');
smo66842v0ar.push(smo66819);
const smo66820 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo66820.setAttribute('id', 'smo66820');
smo66842v0ar.push(smo66820);
const smo66821 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo66821.setAttribute('id', 'smo66821');
smo66842v0ar.push(smo66821);
const smo66822 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66822.setAttribute('id', 'smo66822');
smo66842v0ar.push(smo66822);
const smo66823 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo66823.setAttribute('id', 'smo66823');
smo66842v0ar.push(smo66823);
const smo66824 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo66824.setAttribute('id', 'smo66824');
smo66842v0ar.push(smo66824);
const smo66825 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo66825.setAttribute('id', 'smo66825');
smo66842v0ar.push(smo66825);
const smo66826 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo66826.setAttribute('id', 'smo66826');
smo66842v0ar.push(smo66826);
const smo66827 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo66827.setAttribute('id', 'smo66827');
smo66842v0ar.push(smo66827);
smo66842v0.addTickables(smo66842v0ar)
fmtsmo6684260.joinVoices([smo66842v0]);
const smo66842v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66842v1ar = [];
const smo66828 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo66828.setAttribute('id', 'smo66828');
smo66828.setStyle({ fillStyle: "#115511" });
smo66842v1ar.push(smo66828);
smo66842v1.addTickables(smo66842v1ar)
fmtsmo6684260.joinVoices([smo66842v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo70027 = smo61795.getStemDirection();
smo61795.setStemDirection(dirsmo70027);
smo61796.setStemDirection(dirsmo70027);
smo61797.setStemDirection(dirsmo70027);
smo61798.setStemDirection(dirsmo70027);
const smo70027 = new VF.Beam([smo61795,smo61796,smo61797,smo61798]);
const dirsmo70028 = smo61799.getStemDirection();
smo61799.setStemDirection(dirsmo70028);
smo61800.setStemDirection(dirsmo70028);
smo61801.setStemDirection(dirsmo70028);
const smo70028 = new VF.Beam([smo61799,smo61800,smo61801]);
const dirsmo70029 = smo61802.getStemDirection();
smo61802.setStemDirection(dirsmo70029);
smo61803.setStemDirection(dirsmo70029);
smo61804.setStemDirection(dirsmo70029);
smo61805.setStemDirection(dirsmo70029);
const smo70029 = new VF.Beam([smo61802,smo61803,smo61804,smo61805]);
const dirsmo70030 = smo61806.getStemDirection();
smo61806.setStemDirection(dirsmo70030);
smo61807.setStemDirection(dirsmo70030);
smo61808.setStemDirection(dirsmo70030);
smo61809.setStemDirection(dirsmo70030);
const smo70030 = new VF.Beam([smo61806,smo61807,smo61808,smo61809]);
const dirsmo70031 = smo61811.getStemDirection();
smo61811.setStemDirection(dirsmo70031);
smo61812.setStemDirection(dirsmo70031);
const smo70031 = new VF.Beam([smo61811,smo61812]);
const dirsmo70033 = smo66819.getStemDirection();
smo66819.setStemDirection(dirsmo70033);
smo66820.setStemDirection(dirsmo70033);
smo66821.setStemDirection(dirsmo70033);
smo66822.setStemDirection(dirsmo70033);
const smo70033 = new VF.Beam([smo66819,smo66820,smo66821,smo66822]);
const dirsmo70034 = smo66823.getStemDirection();
smo66823.setStemDirection(dirsmo70034);
smo66824.setStemDirection(dirsmo70034);
smo66825.setStemDirection(dirsmo70034);
smo66826.setStemDirection(dirsmo70034);
const smo70034 = new VF.Beam([smo66823,smo66824,smo66825,smo66826]);
 
// formatting measures in staff group smo58712
fmtsmo6182660.format([smo61826v0,smo61826v1,smo66842v0,smo66842v1], 441);
const stavesmo61826 = new VF.Stave(90, 1036, 492);
stavesmo61826.setAttribute('id', 'stavesmo61826');
stavesmo61826.setBegBarType(1);
stavesmo61826.addClef('treble');
stavesmo61826.setContext(context);
stavesmo61826.draw();
smo61826v0.draw(context, stavesmo61826);
smo61826v1.draw(context, stavesmo61826);
smo70027.setContext(context);
smo70027.draw();
smo70028.setContext(context);
smo70028.draw();
smo70029.setContext(context);
smo70029.draw();
smo70030.setContext(context);
smo70030.draw();
smo70031.setContext(context);
smo70031.draw();
const stavesmo66842 = new VF.Stave(90, 1165, 492);
stavesmo66842.setAttribute('id', 'stavesmo66842');
stavesmo66842.setBegBarType(1);
stavesmo66842.addClef('bass');
stavesmo66842.setContext(context);
stavesmo66842.draw();
smo66842v0.draw(context, stavesmo66842);
smo66842v1.draw(context, stavesmo66842);
smo70033.setContext(context);
smo70033.draw();
smo70034.setContext(context);
smo70034.draw();
const leftsmo58712stavesmo618261 = new VF.StaveConnector(stavesmo61826, stavesmo66842).setType(3);
leftsmo58712stavesmo618261.setContext(context).draw();
const fmtsmo6185561 = new VF.Formatter();
//
// voices and notes for stave 0 61
const smo61855v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61855v0ar = [];
const smo61827 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo61827.setAttribute('id', 'smo61827');
smo61855v0ar.push(smo61827);
const smo61828 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61828.setAttribute('id', 'smo61828');
smo61855v0ar.push(smo61828);
const smo61829 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61829.setAttribute('id', 'smo61829');
smo61855v0ar.push(smo61829);
const smo61830 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo61830.setAttribute('id', 'smo61830');
smo61855v0ar.push(smo61830);
const smo61831 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo61831.setAttribute('id', 'smo61831');
smo61855v0ar.push(smo61831);
const smo61832 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo61832.setAttribute('id', 'smo61832');
smo61855v0ar.push(smo61832);
const smo61833 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo61833.setAttribute('id', 'smo61833');
smo61833.addModifier(new VF.Dot(), 0);
smo61855v0ar.push(smo61833);
const smo61834 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/5/n"]}'))
smo61834.setAttribute('id', 'smo61834');
smo61855v0ar.push(smo61834);
const smo61835 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/6/n"]}'))
smo61835.setAttribute('id', 'smo61835');
const  smo71879 = new VF.Articulation('a@a').setPosition(3);
smo61835.addModifier(smo71879, 0);
smo61855v0ar.push(smo61835);
smo61855v0.addTickables(smo61855v0ar)
fmtsmo6185561.joinVoices([smo61855v0]);
const smo61855v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61855v1ar = [];
const smo61837 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo61837.setAttribute('id', 'smo61837');
smo61837.setStyle({ fillStyle: "#115511" });
smo61855v1ar.push(smo61837);
const smo61838 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo61838.setAttribute('id', 'smo61838');
smo61838.setStyle({ fillStyle: "#115511" });
smo61855v1ar.push(smo61838);
const smo61839 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/5/n"]}'))
smo61839.setAttribute('id', 'smo61839');
smo61839.setStyle({ fillStyle: "#115511" });
smo61855v1ar.push(smo61839);
const smo61840 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61840.setAttribute('id', 'smo61840');
smo61840.setStyle({ fillStyle: "#115511" });
smo61855v1ar.push(smo61840);
const smo61841 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n","gn/5/n"]}'))
smo61841.setAttribute('id', 'smo61841');
smo61841.setStyle({ fillStyle: "#115511" });
smo61855v1ar.push(smo61841);
smo61855v1.addTickables(smo61855v1ar)
fmtsmo6185561.joinVoices([smo61855v1]);
const fmtsmo6685861 = new VF.Formatter();
//
// voices and notes for stave 1 61
const smo66858v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66858v0ar = [];
const smo66843 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo66843.setAttribute('id', 'smo66843');
smo66858v0ar.push(smo66843);
smo66858v0.addTickables(smo66858v0ar)
fmtsmo6685861.joinVoices([smo66858v0]);
const smo66858v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66858v1ar = [];
const smo66844 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo66844.setAttribute('id', 'smo66844');
smo66844.setStyle({ fillStyle: "#115511" });
smo66858v1ar.push(smo66844);
smo66858v1.addTickables(smo66858v1ar)
fmtsmo6685861.joinVoices([smo66858v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo70038 = smo61827.getStemDirection();
smo61827.setStemDirection(dirsmo70038);
smo61828.setStemDirection(dirsmo70038);
smo61829.setStemDirection(dirsmo70038);
smo61830.setStemDirection(dirsmo70038);
smo61831.setStemDirection(dirsmo70038);
smo61832.setStemDirection(dirsmo70038);
const smo70038 = new VF.Beam([smo61827,smo61828,smo61829,smo61830,smo61831,smo61832]);
const dirsmo70039 = smo61833.getStemDirection();
smo61833.setStemDirection(dirsmo70039);
smo61834.setStemDirection(dirsmo70039);
const smo70039 = new VF.Beam([smo61833,smo61834]);
const dirsmo70040 = smo61839.getStemDirection();
smo61839.setStemDirection(dirsmo70040);
smo61840.setStemDirection(dirsmo70040);
const smo70040 = new VF.Beam([smo61839,smo61840]);
 
// formatting measures in staff group smo58712
fmtsmo6185561.format([smo61855v0,smo61855v1,smo66858v0,smo66858v1], 271);
const stavesmo61855 = new VF.Stave(582, 1036, 293);
stavesmo61855.setAttribute('id', 'stavesmo61855');
stavesmo61855.setBegBarType(VF.Barline.type.NONE);
stavesmo61855.setEndBarType(3);
stavesmo61855.setContext(context);
stavesmo61855.draw();
smo61855v0.draw(context, stavesmo61855);
smo61855v1.draw(context, stavesmo61855);
smo70038.setContext(context);
smo70038.draw();
smo70039.setContext(context);
smo70039.draw();
smo70040.setContext(context);
smo70040.draw();
const stavesmo66858 = new VF.Stave(582, 1165, 293);
stavesmo66858.setAttribute('id', 'stavesmo66858');
stavesmo66858.setBegBarType(VF.Barline.type.NONE);
stavesmo66858.setEndBarType(3);
stavesmo66858.setContext(context);
stavesmo66858.draw();
smo66858v0.draw(context, stavesmo66858);
smo66858v1.draw(context, stavesmo66858);
const fmtsmo6188562 = new VF.Formatter();
//
// voices and notes for stave 0 62
const smo61885v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61885v0ar = [];
const smo61856 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61856.setAttribute('id', 'smo61856');
smo61885v0ar.push(smo61856);
const smo61857 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo61857.setAttribute('id', 'smo61857');
smo61885v0ar.push(smo61857);
const smo61858 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo61858.setAttribute('id', 'smo61858');
smo61885v0ar.push(smo61858);
const smo61859 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo61859.setAttribute('id', 'smo61859');
smo61885v0ar.push(smo61859);
const smo61860 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo61860.setAttribute('id', 'smo61860');
smo61885v0ar.push(smo61860);
const smo61861 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo61861.setAttribute('id', 'smo61861');
smo61885v0ar.push(smo61861);
const smo61862 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo61862.setAttribute('id', 'smo61862');
smo61885v0ar.push(smo61862);
const smo61863 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo61863.setAttribute('id', 'smo61863');
smo61885v0ar.push(smo61863);
const smo61864 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61864.setAttribute('id', 'smo61864');
smo61885v0ar.push(smo61864);
const smo61865 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo61865.setAttribute('id', 'smo61865');
smo61885v0ar.push(smo61865);
const smo61866 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo61866.setAttribute('id', 'smo61866');
smo61885v0ar.push(smo61866);
const smo61867 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo61867.setAttribute('id', 'smo61867');
smo61885v0ar.push(smo61867);
const smo61868 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo61868.setAttribute('id', 'smo61868');
smo61885v0ar.push(smo61868);
const smo61869 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo61869.setAttribute('id', 'smo61869');
smo61885v0ar.push(smo61869);
const smo61870 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo61870.setAttribute('id', 'smo61870');
smo61885v0ar.push(smo61870);
const smo61871 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo61871.setAttribute('id', 'smo61871');
smo61885v0ar.push(smo61871);
smo61885v0.addTickables(smo61885v0ar)
fmtsmo6188562.joinVoices([smo61885v0]);
const fmtsmo6688862 = new VF.Formatter();
//
// voices and notes for stave 1 62
const smo66888v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66888v0ar = [];
const smo66859 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo66859.setAttribute('id', 'smo66859');
smo66888v0ar.push(smo66859);
const smo66860 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66860.setAttribute('id', 'smo66860');
smo66888v0ar.push(smo66860);
const smo66861 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo66861.setAttribute('id', 'smo66861');
smo66888v0ar.push(smo66861);
const smo66862 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66862.setAttribute('id', 'smo66862');
smo66888v0ar.push(smo66862);
const smo66863 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo66863.setAttribute('id', 'smo66863');
smo66888v0ar.push(smo66863);
const smo66864 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66864.setAttribute('id', 'smo66864');
smo66888v0ar.push(smo66864);
const smo66865 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo66865.setAttribute('id', 'smo66865');
smo66888v0ar.push(smo66865);
const smo66866 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66866.setAttribute('id', 'smo66866');
smo66888v0ar.push(smo66866);
const smo66867 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo66867.setAttribute('id', 'smo66867');
smo66888v0ar.push(smo66867);
const smo66868 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66868.setAttribute('id', 'smo66868');
smo66888v0ar.push(smo66868);
const smo66869 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo66869.setAttribute('id', 'smo66869');
smo66888v0ar.push(smo66869);
const smo66870 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66870.setAttribute('id', 'smo66870');
smo66888v0ar.push(smo66870);
const smo66871 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo66871.setAttribute('id', 'smo66871');
smo66888v0ar.push(smo66871);
const smo66872 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66872.setAttribute('id', 'smo66872');
smo66888v0ar.push(smo66872);
const smo66873 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo66873.setAttribute('id', 'smo66873');
smo66888v0ar.push(smo66873);
const smo66874 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66874.setAttribute('id', 'smo66874');
smo66888v0ar.push(smo66874);
smo66888v0.addTickables(smo66888v0ar)
fmtsmo6688862.joinVoices([smo66888v0]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo70043 = smo61856.getStemDirection();
smo61856.setStemDirection(dirsmo70043);
smo61857.setStemDirection(dirsmo70043);
smo61858.setStemDirection(dirsmo70043);
smo61859.setStemDirection(dirsmo70043);
const smo70043 = new VF.Beam([smo61856,smo61857,smo61858,smo61859]);
const dirsmo70044 = smo61860.getStemDirection();
smo61860.setStemDirection(dirsmo70044);
smo61861.setStemDirection(dirsmo70044);
smo61862.setStemDirection(dirsmo70044);
smo61863.setStemDirection(dirsmo70044);
const smo70044 = new VF.Beam([smo61860,smo61861,smo61862,smo61863]);
const dirsmo70045 = smo61864.getStemDirection();
smo61864.setStemDirection(dirsmo70045);
smo61865.setStemDirection(dirsmo70045);
smo61866.setStemDirection(dirsmo70045);
smo61867.setStemDirection(dirsmo70045);
const smo70045 = new VF.Beam([smo61864,smo61865,smo61866,smo61867]);
const dirsmo70046 = smo61868.getStemDirection();
smo61868.setStemDirection(dirsmo70046);
smo61869.setStemDirection(dirsmo70046);
smo61870.setStemDirection(dirsmo70046);
smo61871.setStemDirection(dirsmo70046);
const smo70046 = new VF.Beam([smo61868,smo61869,smo61870,smo61871]);
const dirsmo70048 = smo66859.getStemDirection();
smo66859.setStemDirection(dirsmo70048);
smo66860.setStemDirection(dirsmo70048);
smo66861.setStemDirection(dirsmo70048);
smo66862.setStemDirection(dirsmo70048);
const smo70048 = new VF.Beam([smo66859,smo66860,smo66861,smo66862]);
const dirsmo70049 = smo66863.getStemDirection();
smo66863.setStemDirection(dirsmo70049);
smo66864.setStemDirection(dirsmo70049);
smo66865.setStemDirection(dirsmo70049);
smo66866.setStemDirection(dirsmo70049);
const smo70049 = new VF.Beam([smo66863,smo66864,smo66865,smo66866]);
const dirsmo70050 = smo66867.getStemDirection();
smo66867.setStemDirection(dirsmo70050);
smo66868.setStemDirection(dirsmo70050);
smo66869.setStemDirection(dirsmo70050);
smo66870.setStemDirection(dirsmo70050);
const smo70050 = new VF.Beam([smo66867,smo66868,smo66869,smo66870]);
const dirsmo70051 = smo66871.getStemDirection();
smo66871.setStemDirection(dirsmo70051);
smo66872.setStemDirection(dirsmo70051);
smo66873.setStemDirection(dirsmo70051);
smo66874.setStemDirection(dirsmo70051);
const smo70051 = new VF.Beam([smo66871,smo66872,smo66873,smo66874]);
 
// formatting measures in staff group smo58712
fmtsmo6188562.format([smo61885v0,smo66888v0], 266);
const stavesmo61885 = new VF.Stave(875, 1036, 317);
stavesmo61885.setAttribute('id', 'stavesmo61885');
stavesmo61885.setBegBarType(VF.Barline.type.NONE);
stavesmo61885.setTempo(JSON.parse('{"duration":"4","dots":0,"bpm":144,"name":"Allegro Vivace"}'), -1 * 6);
const keysmo61885 = new VF.KeySignature('Eb');
keysmo61885.cancelKey('C');
keysmo61885.addToStave(stavesmo61885);
stavesmo61885.setContext(context);
stavesmo61885.draw();
smo61885v0.draw(context, stavesmo61885);
smo70043.setContext(context);
smo70043.draw();
smo70044.setContext(context);
smo70044.draw();
smo70045.setContext(context);
smo70045.draw();
smo70046.setContext(context);
smo70046.draw();
const stavesmo66888 = new VF.Stave(875, 1165, 317);
stavesmo66888.setAttribute('id', 'stavesmo66888');
stavesmo66888.setBegBarType(VF.Barline.type.NONE);
stavesmo66888.setTempo(JSON.parse('{"duration":"4","dots":0,"bpm":144,"name":"Allegro Vivace"}'), -1 * 6);
const keysmo66888 = new VF.KeySignature('Eb');
keysmo66888.cancelKey('C');
keysmo66888.addToStave(stavesmo66888);
stavesmo66888.setContext(context);
stavesmo66888.draw();
smo66888v0.draw(context, stavesmo66888);
smo70048.setContext(context);
smo70048.draw();
smo70049.setContext(context);
smo70049.draw();
smo70050.setContext(context);
smo70050.draw();
smo70051.setContext(context);
smo70051.draw();
const fmtsmo6191563 = new VF.Formatter();
//
// voices and notes for stave 0 63
const smo61915v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61915v0ar = [];
const smo61886 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["ab/4/n"]}'))
smo61886.setAttribute('id', 'smo61886');
smo61915v0ar.push(smo61886);
const smo61887 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61887.setAttribute('id', 'smo61887');
smo61915v0ar.push(smo61887);
const smo61888 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo61888.setAttribute('id', 'smo61888');
const smo618880acc = new VF.Accidental('n');
smo61888.addModifier(smo618880acc, 0);
smo61915v0ar.push(smo61888);
const smo61889 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61889.setAttribute('id', 'smo61889');
smo61915v0ar.push(smo61889);
const smo61890 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo61890.setAttribute('id', 'smo61890');
smo61915v0ar.push(smo61890);
const smo61891 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61891.setAttribute('id', 'smo61891');
smo61915v0ar.push(smo61891);
const smo61892 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo61892.setAttribute('id', 'smo61892');
smo61915v0ar.push(smo61892);
const smo61893 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61893.setAttribute('id', 'smo61893');
smo61915v0ar.push(smo61893);
const smo61894 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["ab/4/n"]}'))
smo61894.setAttribute('id', 'smo61894');
smo61915v0ar.push(smo61894);
const smo61895 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61895.setAttribute('id', 'smo61895');
smo61915v0ar.push(smo61895);
const smo61896 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo61896.setAttribute('id', 'smo61896');
smo61915v0ar.push(smo61896);
const smo61897 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61897.setAttribute('id', 'smo61897');
smo61915v0ar.push(smo61897);
const smo61898 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo61898.setAttribute('id', 'smo61898');
smo61915v0ar.push(smo61898);
const smo61899 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61899.setAttribute('id', 'smo61899');
smo61915v0ar.push(smo61899);
const smo61900 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo61900.setAttribute('id', 'smo61900');
smo61915v0ar.push(smo61900);
const smo61901 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61901.setAttribute('id', 'smo61901');
smo61915v0ar.push(smo61901);
smo61915v0.addTickables(smo61915v0ar)
fmtsmo6191563.joinVoices([smo61915v0]);
const fmtsmo6691863 = new VF.Formatter();
//
// voices and notes for stave 1 63
const smo66918v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66918v0ar = [];
const smo66889 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo66889.setAttribute('id', 'smo66889');
smo66918v0ar.push(smo66889);
const smo66890 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo66890.setAttribute('id', 'smo66890');
smo66918v0ar.push(smo66890);
const smo66891 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66891.setAttribute('id', 'smo66891');
smo66918v0ar.push(smo66891);
const smo66892 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo66892.setAttribute('id', 'smo66892');
smo66918v0ar.push(smo66892);
const smo66893 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo66893.setAttribute('id', 'smo66893');
smo66918v0ar.push(smo66893);
const smo66894 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo66894.setAttribute('id', 'smo66894');
smo66918v0ar.push(smo66894);
const smo66895 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66895.setAttribute('id', 'smo66895');
smo66918v0ar.push(smo66895);
const smo66896 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo66896.setAttribute('id', 'smo66896');
smo66918v0ar.push(smo66896);
const smo66897 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo66897.setAttribute('id', 'smo66897');
smo66918v0ar.push(smo66897);
const smo66898 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo66898.setAttribute('id', 'smo66898');
smo66918v0ar.push(smo66898);
const smo66899 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66899.setAttribute('id', 'smo66899');
smo66918v0ar.push(smo66899);
const smo66900 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo66900.setAttribute('id', 'smo66900');
smo66918v0ar.push(smo66900);
const smo66901 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo66901.setAttribute('id', 'smo66901');
smo66918v0ar.push(smo66901);
const smo66902 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo66902.setAttribute('id', 'smo66902');
smo66918v0ar.push(smo66902);
const smo66903 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66903.setAttribute('id', 'smo66903');
smo66918v0ar.push(smo66903);
const smo66904 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo66904.setAttribute('id', 'smo66904');
smo66918v0ar.push(smo66904);
smo66918v0.addTickables(smo66918v0ar)
fmtsmo6691863.joinVoices([smo66918v0]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo70055 = smo61886.getStemDirection();
smo61886.setStemDirection(dirsmo70055);
smo61887.setStemDirection(dirsmo70055);
smo61888.setStemDirection(dirsmo70055);
smo61889.setStemDirection(dirsmo70055);
const smo70055 = new VF.Beam([smo61886,smo61887,smo61888,smo61889]);
const dirsmo70056 = smo61890.getStemDirection();
smo61890.setStemDirection(dirsmo70056);
smo61891.setStemDirection(dirsmo70056);
smo61892.setStemDirection(dirsmo70056);
smo61893.setStemDirection(dirsmo70056);
const smo70056 = new VF.Beam([smo61890,smo61891,smo61892,smo61893]);
const dirsmo70057 = smo61894.getStemDirection();
smo61894.setStemDirection(dirsmo70057);
smo61895.setStemDirection(dirsmo70057);
smo61896.setStemDirection(dirsmo70057);
smo61897.setStemDirection(dirsmo70057);
const smo70057 = new VF.Beam([smo61894,smo61895,smo61896,smo61897]);
const dirsmo70058 = smo61898.getStemDirection();
smo61898.setStemDirection(dirsmo70058);
smo61899.setStemDirection(dirsmo70058);
smo61900.setStemDirection(dirsmo70058);
smo61901.setStemDirection(dirsmo70058);
const smo70058 = new VF.Beam([smo61898,smo61899,smo61900,smo61901]);
const dirsmo70060 = smo66889.getStemDirection();
smo66889.setStemDirection(dirsmo70060);
smo66890.setStemDirection(dirsmo70060);
smo66891.setStemDirection(dirsmo70060);
smo66892.setStemDirection(dirsmo70060);
const smo70060 = new VF.Beam([smo66889,smo66890,smo66891,smo66892]);
const dirsmo70061 = smo66893.getStemDirection();
smo66893.setStemDirection(dirsmo70061);
smo66894.setStemDirection(dirsmo70061);
smo66895.setStemDirection(dirsmo70061);
smo66896.setStemDirection(dirsmo70061);
const smo70061 = new VF.Beam([smo66893,smo66894,smo66895,smo66896]);
const dirsmo70062 = smo66897.getStemDirection();
smo66897.setStemDirection(dirsmo70062);
smo66898.setStemDirection(dirsmo70062);
smo66899.setStemDirection(dirsmo70062);
smo66900.setStemDirection(dirsmo70062);
const smo70062 = new VF.Beam([smo66897,smo66898,smo66899,smo66900]);
const dirsmo70063 = smo66901.getStemDirection();
smo66901.setStemDirection(dirsmo70063);
smo66902.setStemDirection(dirsmo70063);
smo66903.setStemDirection(dirsmo70063);
smo66904.setStemDirection(dirsmo70063);
const smo70063 = new VF.Beam([smo66901,smo66902,smo66903,smo66904]);
 
// formatting measures in staff group smo58712
fmtsmo6191563.format([smo61915v0,smo66918v0], 301);
const stavesmo61915 = new VF.Stave(1192, 1036, 315);
stavesmo61915.setAttribute('id', 'stavesmo61915');
stavesmo61915.setBegBarType(VF.Barline.type.NONE);
stavesmo61915.setContext(context);
stavesmo61915.draw();
smo61915v0.draw(context, stavesmo61915);
smo70055.setContext(context);
smo70055.draw();
smo70056.setContext(context);
smo70056.draw();
smo70057.setContext(context);
smo70057.draw();
smo70058.setContext(context);
smo70058.draw();
const stavesmo66918 = new VF.Stave(1192, 1165, 315);
stavesmo66918.setAttribute('id', 'stavesmo66918');
stavesmo66918.setBegBarType(VF.Barline.type.NONE);
stavesmo66918.setContext(context);
stavesmo66918.draw();
smo66918v0.draw(context, stavesmo66918);
smo70060.setContext(context);
smo70060.draw();
smo70061.setContext(context);
smo70061.draw();
smo70062.setContext(context);
smo70062.draw();
smo70063.setContext(context);
smo70063.draw();
const fmtsmo6194564 = new VF.Formatter();
//
// voices and notes for stave 0 64
const smo61945v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61945v0ar = [];
const smo61916 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61916.setAttribute('id', 'smo61916');
const smo619160acc = new VF.Accidental('n');
smo61916.addModifier(smo619160acc, 0);
smo61945v0ar.push(smo61916);
const smo61917 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61917.setAttribute('id', 'smo61917');
smo61945v0ar.push(smo61917);
const smo61918 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo61918.setAttribute('id', 'smo61918');
smo61945v0ar.push(smo61918);
const smo61919 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61919.setAttribute('id', 'smo61919');
smo61945v0ar.push(smo61919);
const smo61920 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo61920.setAttribute('id', 'smo61920');
smo61945v0ar.push(smo61920);
const smo61921 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61921.setAttribute('id', 'smo61921');
smo61945v0ar.push(smo61921);
const smo61922 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo61922.setAttribute('id', 'smo61922');
smo61945v0ar.push(smo61922);
const smo61923 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61923.setAttribute('id', 'smo61923');
smo61945v0ar.push(smo61923);
const smo61924 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61924.setAttribute('id', 'smo61924');
smo61945v0ar.push(smo61924);
const smo61925 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61925.setAttribute('id', 'smo61925');
smo61945v0ar.push(smo61925);
const smo61926 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo61926.setAttribute('id', 'smo61926');
smo61945v0ar.push(smo61926);
const smo61927 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61927.setAttribute('id', 'smo61927');
smo61945v0ar.push(smo61927);
const smo61928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo61928.setAttribute('id', 'smo61928');
smo61945v0ar.push(smo61928);
const smo61929 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61929.setAttribute('id', 'smo61929');
smo61945v0ar.push(smo61929);
const smo61930 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo61930.setAttribute('id', 'smo61930');
smo61945v0ar.push(smo61930);
const smo61931 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61931.setAttribute('id', 'smo61931');
smo61945v0ar.push(smo61931);
smo61945v0.addTickables(smo61945v0ar)
fmtsmo6194564.joinVoices([smo61945v0]);
const fmtsmo6694864 = new VF.Formatter();
//
// voices and notes for stave 1 64
const smo66948v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66948v0ar = [];
const smo66919 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo66919.setAttribute('id', 'smo66919');
smo66948v0ar.push(smo66919);
const smo66920 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo66920.setAttribute('id', 'smo66920');
smo66948v0ar.push(smo66920);
const smo66921 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66921.setAttribute('id', 'smo66921');
smo66948v0ar.push(smo66921);
const smo66922 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo66922.setAttribute('id', 'smo66922');
smo66948v0ar.push(smo66922);
const smo66923 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo66923.setAttribute('id', 'smo66923');
smo66948v0ar.push(smo66923);
const smo66924 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo66924.setAttribute('id', 'smo66924');
smo66948v0ar.push(smo66924);
const smo66925 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66925.setAttribute('id', 'smo66925');
smo66948v0ar.push(smo66925);
const smo66926 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo66926.setAttribute('id', 'smo66926');
smo66948v0ar.push(smo66926);
const smo66927 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo66927.setAttribute('id', 'smo66927');
smo66948v0ar.push(smo66927);
const smo66928 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo66928.setAttribute('id', 'smo66928');
smo66948v0ar.push(smo66928);
const smo66929 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66929.setAttribute('id', 'smo66929');
smo66948v0ar.push(smo66929);
const smo66930 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo66930.setAttribute('id', 'smo66930');
smo66948v0ar.push(smo66930);
const smo66931 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo66931.setAttribute('id', 'smo66931');
smo66948v0ar.push(smo66931);
const smo66932 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo66932.setAttribute('id', 'smo66932');
smo66948v0ar.push(smo66932);
const smo66933 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66933.setAttribute('id', 'smo66933');
smo66948v0ar.push(smo66933);
const smo66934 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo66934.setAttribute('id', 'smo66934');
smo66948v0ar.push(smo66934);
smo66948v0.addTickables(smo66948v0ar)
fmtsmo6694864.joinVoices([smo66948v0]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo70067 = smo61916.getStemDirection();
smo61916.setStemDirection(dirsmo70067);
smo61917.setStemDirection(dirsmo70067);
smo61918.setStemDirection(dirsmo70067);
smo61919.setStemDirection(dirsmo70067);
const smo70067 = new VF.Beam([smo61916,smo61917,smo61918,smo61919]);
const dirsmo70068 = smo61920.getStemDirection();
smo61920.setStemDirection(dirsmo70068);
smo61921.setStemDirection(dirsmo70068);
smo61922.setStemDirection(dirsmo70068);
smo61923.setStemDirection(dirsmo70068);
const smo70068 = new VF.Beam([smo61920,smo61921,smo61922,smo61923]);
const dirsmo70069 = smo61924.getStemDirection();
smo61924.setStemDirection(dirsmo70069);
smo61925.setStemDirection(dirsmo70069);
smo61926.setStemDirection(dirsmo70069);
smo61927.setStemDirection(dirsmo70069);
const smo70069 = new VF.Beam([smo61924,smo61925,smo61926,smo61927]);
const dirsmo70070 = smo61928.getStemDirection();
smo61928.setStemDirection(dirsmo70070);
smo61929.setStemDirection(dirsmo70070);
smo61930.setStemDirection(dirsmo70070);
smo61931.setStemDirection(dirsmo70070);
const smo70070 = new VF.Beam([smo61928,smo61929,smo61930,smo61931]);
const dirsmo70072 = smo66919.getStemDirection();
smo66919.setStemDirection(dirsmo70072);
smo66920.setStemDirection(dirsmo70072);
smo66921.setStemDirection(dirsmo70072);
smo66922.setStemDirection(dirsmo70072);
const smo70072 = new VF.Beam([smo66919,smo66920,smo66921,smo66922]);
const dirsmo70073 = smo66923.getStemDirection();
smo66923.setStemDirection(dirsmo70073);
smo66924.setStemDirection(dirsmo70073);
smo66925.setStemDirection(dirsmo70073);
smo66926.setStemDirection(dirsmo70073);
const smo70073 = new VF.Beam([smo66923,smo66924,smo66925,smo66926]);
const dirsmo70074 = smo66927.getStemDirection();
smo66927.setStemDirection(dirsmo70074);
smo66928.setStemDirection(dirsmo70074);
smo66929.setStemDirection(dirsmo70074);
smo66930.setStemDirection(dirsmo70074);
const smo70074 = new VF.Beam([smo66927,smo66928,smo66929,smo66930]);
const dirsmo70075 = smo66931.getStemDirection();
smo66931.setStemDirection(dirsmo70075);
smo66932.setStemDirection(dirsmo70075);
smo66933.setStemDirection(dirsmo70075);
smo66934.setStemDirection(dirsmo70075);
const smo70075 = new VF.Beam([smo66931,smo66932,smo66933,smo66934]);
 
// formatting measures in staff group smo58712
fmtsmo6194564.format([smo61945v0,smo66948v0], 285);
const stavesmo61945 = new VF.Stave(1507, 1036, 299);
stavesmo61945.setAttribute('id', 'stavesmo61945');
stavesmo61945.setBegBarType(VF.Barline.type.NONE);
stavesmo61945.setContext(context);
stavesmo61945.draw();
smo61945v0.draw(context, stavesmo61945);
smo70067.setContext(context);
smo70067.draw();
smo70068.setContext(context);
smo70068.draw();
smo70069.setContext(context);
smo70069.draw();
smo70070.setContext(context);
smo70070.draw();
const stavesmo66948 = new VF.Stave(1507, 1165, 299);
stavesmo66948.setAttribute('id', 'stavesmo66948');
stavesmo66948.setBegBarType(VF.Barline.type.NONE);
stavesmo66948.setContext(context);
stavesmo66948.draw();
smo66948v0.draw(context, stavesmo66948);
smo70072.setContext(context);
smo70072.draw();
smo70073.setContext(context);
smo70073.draw();
smo70074.setContext(context);
smo70074.draw();
smo70075.setContext(context);
smo70075.draw();
const rightsmo58712stavesmo619451 = new VF.StaveConnector(stavesmo61945, stavesmo66948).setType(0);
rightsmo58712stavesmo619451.setContext(context).draw();
const fmtsmo6197565 = new VF.Formatter();
//
// voices and notes for stave 0 65
const smo61975v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61975v0ar = [];
const smo61946 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61946.setAttribute('id', 'smo61946');
smo61975v0ar.push(smo61946);
const smo61947 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61947.setAttribute('id', 'smo61947');
smo61975v0ar.push(smo61947);
const smo61948 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61948.setAttribute('id', 'smo61948');
smo61975v0ar.push(smo61948);
const smo61949 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61949.setAttribute('id', 'smo61949');
smo61975v0ar.push(smo61949);
const smo61950 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo61950.setAttribute('id', 'smo61950');
smo61975v0ar.push(smo61950);
const smo61951 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61951.setAttribute('id', 'smo61951');
smo61975v0ar.push(smo61951);
const smo61952 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61952.setAttribute('id', 'smo61952');
smo61975v0ar.push(smo61952);
const smo61953 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61953.setAttribute('id', 'smo61953');
smo61975v0ar.push(smo61953);
const smo61954 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61954.setAttribute('id', 'smo61954');
smo61975v0ar.push(smo61954);
const smo61955 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61955.setAttribute('id', 'smo61955');
smo61975v0ar.push(smo61955);
const smo61956 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61956.setAttribute('id', 'smo61956');
smo61975v0ar.push(smo61956);
const smo61957 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61957.setAttribute('id', 'smo61957');
smo61975v0ar.push(smo61957);
const smo61958 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo61958.setAttribute('id', 'smo61958');
smo61975v0ar.push(smo61958);
const smo61959 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61959.setAttribute('id', 'smo61959');
smo61975v0ar.push(smo61959);
const smo61960 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61960.setAttribute('id', 'smo61960');
smo61975v0ar.push(smo61960);
const smo61961 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61961.setAttribute('id', 'smo61961');
smo61975v0ar.push(smo61961);
smo61975v0.addTickables(smo61975v0ar)
fmtsmo6197565.joinVoices([smo61975v0]);
const fmtsmo6697865 = new VF.Formatter();
//
// voices and notes for stave 1 65
const smo66978v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66978v0ar = [];
const smo66949 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo66949.setAttribute('id', 'smo66949');
smo66978v0ar.push(smo66949);
const smo66950 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo66950.setAttribute('id', 'smo66950');
smo66978v0ar.push(smo66950);
const smo66951 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo66951.setAttribute('id', 'smo66951');
smo66978v0ar.push(smo66951);
const smo66952 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo66952.setAttribute('id', 'smo66952');
smo66978v0ar.push(smo66952);
const smo66953 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66953.setAttribute('id', 'smo66953');
smo66978v0ar.push(smo66953);
const smo66954 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo66954.setAttribute('id', 'smo66954');
smo66978v0ar.push(smo66954);
const smo66955 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo66955.setAttribute('id', 'smo66955');
smo66978v0ar.push(smo66955);
const smo66956 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo66956.setAttribute('id', 'smo66956');
smo66978v0ar.push(smo66956);
const smo66957 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo66957.setAttribute('id', 'smo66957');
smo66978v0ar.push(smo66957);
const smo66958 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo66958.setAttribute('id', 'smo66958');
smo66978v0ar.push(smo66958);
const smo66959 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo66959.setAttribute('id', 'smo66959');
smo66978v0ar.push(smo66959);
const smo66960 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo66960.setAttribute('id', 'smo66960');
smo66978v0ar.push(smo66960);
const smo66961 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66961.setAttribute('id', 'smo66961');
smo66978v0ar.push(smo66961);
const smo66962 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo66962.setAttribute('id', 'smo66962');
smo66978v0ar.push(smo66962);
const smo66963 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo66963.setAttribute('id', 'smo66963');
smo66978v0ar.push(smo66963);
const smo66964 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo66964.setAttribute('id', 'smo66964');
smo66978v0ar.push(smo66964);
smo66978v0.addTickables(smo66978v0ar)
fmtsmo6697865.joinVoices([smo66978v0]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo70091 = smo61946.getStemDirection();
smo61946.setStemDirection(dirsmo70091);
smo61947.setStemDirection(dirsmo70091);
smo61948.setStemDirection(dirsmo70091);
smo61949.setStemDirection(dirsmo70091);
const smo70091 = new VF.Beam([smo61946,smo61947,smo61948,smo61949]);
const dirsmo70092 = smo61950.getStemDirection();
smo61950.setStemDirection(dirsmo70092);
smo61951.setStemDirection(dirsmo70092);
smo61952.setStemDirection(dirsmo70092);
smo61953.setStemDirection(dirsmo70092);
const smo70092 = new VF.Beam([smo61950,smo61951,smo61952,smo61953]);
const dirsmo70093 = smo61954.getStemDirection();
smo61954.setStemDirection(dirsmo70093);
smo61955.setStemDirection(dirsmo70093);
smo61956.setStemDirection(dirsmo70093);
smo61957.setStemDirection(dirsmo70093);
const smo70093 = new VF.Beam([smo61954,smo61955,smo61956,smo61957]);
const dirsmo70094 = smo61958.getStemDirection();
smo61958.setStemDirection(dirsmo70094);
smo61959.setStemDirection(dirsmo70094);
smo61960.setStemDirection(dirsmo70094);
smo61961.setStemDirection(dirsmo70094);
const smo70094 = new VF.Beam([smo61958,smo61959,smo61960,smo61961]);
const dirsmo70096 = smo66949.getStemDirection();
smo66949.setStemDirection(dirsmo70096);
smo66950.setStemDirection(dirsmo70096);
smo66951.setStemDirection(dirsmo70096);
smo66952.setStemDirection(dirsmo70096);
const smo70096 = new VF.Beam([smo66949,smo66950,smo66951,smo66952]);
const dirsmo70097 = smo66953.getStemDirection();
smo66953.setStemDirection(dirsmo70097);
smo66954.setStemDirection(dirsmo70097);
smo66955.setStemDirection(dirsmo70097);
smo66956.setStemDirection(dirsmo70097);
const smo70097 = new VF.Beam([smo66953,smo66954,smo66955,smo66956]);
const dirsmo70098 = smo66957.getStemDirection();
smo66957.setStemDirection(dirsmo70098);
smo66958.setStemDirection(dirsmo70098);
smo66959.setStemDirection(dirsmo70098);
smo66960.setStemDirection(dirsmo70098);
const smo70098 = new VF.Beam([smo66957,smo66958,smo66959,smo66960]);
const dirsmo70099 = smo66961.getStemDirection();
smo66961.setStemDirection(dirsmo70099);
smo66962.setStemDirection(dirsmo70099);
smo66963.setStemDirection(dirsmo70099);
smo66964.setStemDirection(dirsmo70099);
const smo70099 = new VF.Beam([smo66961,smo66962,smo66963,smo66964]);
 
// formatting measures in staff group smo58712
fmtsmo6197565.format([smo61975v0,smo66978v0], 262);
const stavesmo61975 = new VF.Stave(90, 1319, 345);
stavesmo61975.setAttribute('id', 'stavesmo61975');
stavesmo61975.setBegBarType(1);
stavesmo61975.addClef('treble');
const keysmo61975 = new VF.KeySignature('Eb');
keysmo61975.addToStave(stavesmo61975);
stavesmo61975.setContext(context);
stavesmo61975.draw();
smo61975v0.draw(context, stavesmo61975);
smo70091.setContext(context);
smo70091.draw();
smo70092.setContext(context);
smo70092.draw();
smo70093.setContext(context);
smo70093.draw();
smo70094.setContext(context);
smo70094.draw();
const stavesmo66978 = new VF.Stave(90, 1408, 345);
stavesmo66978.setAttribute('id', 'stavesmo66978');
stavesmo66978.setBegBarType(1);
stavesmo66978.addClef('bass');
const keysmo66978 = new VF.KeySignature('Eb');
keysmo66978.addToStave(stavesmo66978);
stavesmo66978.setContext(context);
stavesmo66978.draw();
smo66978v0.draw(context, stavesmo66978);
smo70096.setContext(context);
smo70096.draw();
smo70097.setContext(context);
smo70097.draw();
smo70098.setContext(context);
smo70098.draw();
smo70099.setContext(context);
smo70099.draw();
const leftsmo58712stavesmo619751 = new VF.StaveConnector(stavesmo61975, stavesmo66978).setType(3);
leftsmo58712stavesmo619751.setContext(context).draw();
const fmtsmo6200566 = new VF.Formatter();
//
// voices and notes for stave 0 66
const smo62005v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62005v0ar = [];
const smo61976 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/5/n"]}'))
smo61976.setAttribute('id', 'smo61976');
smo62005v0ar.push(smo61976);
const smo61977 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["ab/4/n"]}'))
smo61977.setAttribute('id', 'smo61977');
smo62005v0ar.push(smo61977);
const smo61978 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61978.setAttribute('id', 'smo61978');
smo62005v0ar.push(smo61978);
const smo61979 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["ab/4/n"]}'))
smo61979.setAttribute('id', 'smo61979');
smo62005v0ar.push(smo61979);
const smo61980 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo61980.setAttribute('id', 'smo61980');
smo62005v0ar.push(smo61980);
const smo61981 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["ab/4/n"]}'))
smo61981.setAttribute('id', 'smo61981');
smo62005v0ar.push(smo61981);
const smo61982 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61982.setAttribute('id', 'smo61982');
smo62005v0ar.push(smo61982);
const smo61983 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["ab/4/n"]}'))
smo61983.setAttribute('id', 'smo61983');
smo62005v0ar.push(smo61983);
const smo61984 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/5/n"]}'))
smo61984.setAttribute('id', 'smo61984');
smo62005v0ar.push(smo61984);
const smo61985 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["ab/4/n"]}'))
smo61985.setAttribute('id', 'smo61985');
smo62005v0ar.push(smo61985);
const smo61986 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61986.setAttribute('id', 'smo61986');
smo62005v0ar.push(smo61986);
const smo61987 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["ab/4/n"]}'))
smo61987.setAttribute('id', 'smo61987');
smo62005v0ar.push(smo61987);
const smo61988 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo61988.setAttribute('id', 'smo61988');
smo62005v0ar.push(smo61988);
const smo61989 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["ab/4/n"]}'))
smo61989.setAttribute('id', 'smo61989');
smo62005v0ar.push(smo61989);
const smo61990 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61990.setAttribute('id', 'smo61990');
smo62005v0ar.push(smo61990);
const smo61991 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["ab/4/n"]}'))
smo61991.setAttribute('id', 'smo61991');
smo62005v0ar.push(smo61991);
smo62005v0.addTickables(smo62005v0ar)
fmtsmo6200566.joinVoices([smo62005v0]);
const fmtsmo6700866 = new VF.Formatter();
//
// voices and notes for stave 1 66
const smo67008v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67008v0ar = [];
const smo66979 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo66979.setAttribute('id', 'smo66979');
smo67008v0ar.push(smo66979);
const smo66980 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo66980.setAttribute('id', 'smo66980');
smo67008v0ar.push(smo66980);
const smo66981 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/3/n"]}'))
smo66981.setAttribute('id', 'smo66981');
smo67008v0ar.push(smo66981);
const smo66982 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo66982.setAttribute('id', 'smo66982');
smo67008v0ar.push(smo66982);
const smo66983 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo66983.setAttribute('id', 'smo66983');
smo67008v0ar.push(smo66983);
const smo66984 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo66984.setAttribute('id', 'smo66984');
smo67008v0ar.push(smo66984);
const smo66985 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/3/n"]}'))
smo66985.setAttribute('id', 'smo66985');
smo67008v0ar.push(smo66985);
const smo66986 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo66986.setAttribute('id', 'smo66986');
smo67008v0ar.push(smo66986);
const smo66987 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo66987.setAttribute('id', 'smo66987');
smo67008v0ar.push(smo66987);
const smo66988 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo66988.setAttribute('id', 'smo66988');
smo67008v0ar.push(smo66988);
const smo66989 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/3/n"]}'))
smo66989.setAttribute('id', 'smo66989');
smo67008v0ar.push(smo66989);
const smo66990 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo66990.setAttribute('id', 'smo66990');
smo67008v0ar.push(smo66990);
const smo66991 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo66991.setAttribute('id', 'smo66991');
smo67008v0ar.push(smo66991);
const smo66992 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo66992.setAttribute('id', 'smo66992');
smo67008v0ar.push(smo66992);
const smo66993 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/3/n"]}'))
smo66993.setAttribute('id', 'smo66993');
smo67008v0ar.push(smo66993);
const smo66994 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo66994.setAttribute('id', 'smo66994');
smo67008v0ar.push(smo66994);
smo67008v0.addTickables(smo67008v0ar)
fmtsmo6700866.joinVoices([smo67008v0]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo70103 = smo61976.getStemDirection();
smo61976.setStemDirection(dirsmo70103);
smo61977.setStemDirection(dirsmo70103);
smo61978.setStemDirection(dirsmo70103);
smo61979.setStemDirection(dirsmo70103);
const smo70103 = new VF.Beam([smo61976,smo61977,smo61978,smo61979]);
const dirsmo70104 = smo61980.getStemDirection();
smo61980.setStemDirection(dirsmo70104);
smo61981.setStemDirection(dirsmo70104);
smo61982.setStemDirection(dirsmo70104);
smo61983.setStemDirection(dirsmo70104);
const smo70104 = new VF.Beam([smo61980,smo61981,smo61982,smo61983]);
const dirsmo70105 = smo61984.getStemDirection();
smo61984.setStemDirection(dirsmo70105);
smo61985.setStemDirection(dirsmo70105);
smo61986.setStemDirection(dirsmo70105);
smo61987.setStemDirection(dirsmo70105);
const smo70105 = new VF.Beam([smo61984,smo61985,smo61986,smo61987]);
const dirsmo70106 = smo61988.getStemDirection();
smo61988.setStemDirection(dirsmo70106);
smo61989.setStemDirection(dirsmo70106);
smo61990.setStemDirection(dirsmo70106);
smo61991.setStemDirection(dirsmo70106);
const smo70106 = new VF.Beam([smo61988,smo61989,smo61990,smo61991]);
const dirsmo70108 = smo66979.getStemDirection();
smo66979.setStemDirection(dirsmo70108);
smo66980.setStemDirection(dirsmo70108);
smo66981.setStemDirection(dirsmo70108);
smo66982.setStemDirection(dirsmo70108);
const smo70108 = new VF.Beam([smo66979,smo66980,smo66981,smo66982]);
const dirsmo70109 = smo66983.getStemDirection();
smo66983.setStemDirection(dirsmo70109);
smo66984.setStemDirection(dirsmo70109);
smo66985.setStemDirection(dirsmo70109);
smo66986.setStemDirection(dirsmo70109);
const smo70109 = new VF.Beam([smo66983,smo66984,smo66985,smo66986]);
const dirsmo70110 = smo66987.getStemDirection();
smo66987.setStemDirection(dirsmo70110);
smo66988.setStemDirection(dirsmo70110);
smo66989.setStemDirection(dirsmo70110);
smo66990.setStemDirection(dirsmo70110);
const smo70110 = new VF.Beam([smo66987,smo66988,smo66989,smo66990]);
const dirsmo70111 = smo66991.getStemDirection();
smo66991.setStemDirection(dirsmo70111);
smo66992.setStemDirection(dirsmo70111);
smo66993.setStemDirection(dirsmo70111);
smo66994.setStemDirection(dirsmo70111);
const smo70111 = new VF.Beam([smo66991,smo66992,smo66993,smo66994]);
 
// formatting measures in staff group smo58712
fmtsmo6200566.format([smo62005v0,smo67008v0], 261);
const stavesmo62005 = new VF.Stave(435, 1319, 275);
stavesmo62005.setAttribute('id', 'stavesmo62005');
stavesmo62005.setBegBarType(VF.Barline.type.NONE);
stavesmo62005.setContext(context);
stavesmo62005.draw();
smo62005v0.draw(context, stavesmo62005);
smo70103.setContext(context);
smo70103.draw();
smo70104.setContext(context);
smo70104.draw();
smo70105.setContext(context);
smo70105.draw();
smo70106.setContext(context);
smo70106.draw();
const stavesmo67008 = new VF.Stave(435, 1408, 275);
stavesmo67008.setAttribute('id', 'stavesmo67008');
stavesmo67008.setBegBarType(VF.Barline.type.NONE);
stavesmo67008.setContext(context);
stavesmo67008.draw();
smo67008v0.draw(context, stavesmo67008);
smo70108.setContext(context);
smo70108.draw();
smo70109.setContext(context);
smo70109.draw();
smo70110.setContext(context);
smo70110.draw();
smo70111.setContext(context);
smo70111.draw();
const fmtsmo6203567 = new VF.Formatter();
//
// voices and notes for stave 0 67
const smo62035v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62035v0ar = [];
const smo62006 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo62006.setAttribute('id', 'smo62006');
smo62035v0ar.push(smo62006);
const smo62007 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo62007.setAttribute('id', 'smo62007');
const smo620070acc = new VF.Accidental('#');
smo62007.addModifier(smo620070acc, 0);
smo62035v0ar.push(smo62007);
const smo62008 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo62008.setAttribute('id', 'smo62008');
const smo620080acc = new VF.Accidental('n');
smo62008.addModifier(smo620080acc, 0);
smo62035v0ar.push(smo62008);
const smo62009 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo62009.setAttribute('id', 'smo62009');
smo62035v0ar.push(smo62009);
const smo62010 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62010.setAttribute('id', 'smo62010');
smo62035v0ar.push(smo62010);
const smo62011 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo62011.setAttribute('id', 'smo62011');
smo62035v0ar.push(smo62011);
const smo62012 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo62012.setAttribute('id', 'smo62012');
smo62035v0ar.push(smo62012);
const smo62013 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo62013.setAttribute('id', 'smo62013');
smo62035v0ar.push(smo62013);
const smo62014 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo62014.setAttribute('id', 'smo62014');
smo62035v0ar.push(smo62014);
const smo62015 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo62015.setAttribute('id', 'smo62015');
smo62035v0ar.push(smo62015);
const smo62016 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo62016.setAttribute('id', 'smo62016');
smo62035v0ar.push(smo62016);
const smo62017 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo62017.setAttribute('id', 'smo62017');
smo62035v0ar.push(smo62017);
const smo62018 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62018.setAttribute('id', 'smo62018');
smo62035v0ar.push(smo62018);
const smo62019 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo62019.setAttribute('id', 'smo62019');
smo62035v0ar.push(smo62019);
const smo62020 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo62020.setAttribute('id', 'smo62020');
smo62035v0ar.push(smo62020);
const smo62021 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo62021.setAttribute('id', 'smo62021');
smo62035v0ar.push(smo62021);
smo62035v0.addTickables(smo62035v0ar)
fmtsmo6203567.joinVoices([smo62035v0]);
const fmtsmo6703867 = new VF.Formatter();
//
// voices and notes for stave 1 67
const smo67038v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67038v0ar = [];
const smo67009 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo67009.setAttribute('id', 'smo67009');
smo67038v0ar.push(smo67009);
const smo67010 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo67010.setAttribute('id', 'smo67010');
const smo670100acc = new VF.Accidental('n');
smo67010.addModifier(smo670100acc, 0);
smo67038v0ar.push(smo67010);
const smo67011 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo67011.setAttribute('id', 'smo67011');
smo67038v0ar.push(smo67011);
const smo67012 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo67012.setAttribute('id', 'smo67012');
smo67038v0ar.push(smo67012);
const smo67013 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo67013.setAttribute('id', 'smo67013');
const smo670130acc = new VF.Accidental('#');
smo67013.addModifier(smo670130acc, 0);
smo67038v0ar.push(smo67013);
const smo67014 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo67014.setAttribute('id', 'smo67014');
smo67038v0ar.push(smo67014);
const smo67015 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo67015.setAttribute('id', 'smo67015');
smo67038v0ar.push(smo67015);
const smo67016 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo67016.setAttribute('id', 'smo67016');
smo67038v0ar.push(smo67016);
const smo67017 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo67017.setAttribute('id', 'smo67017');
smo67038v0ar.push(smo67017);
const smo67018 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo67018.setAttribute('id', 'smo67018');
smo67038v0ar.push(smo67018);
const smo67019 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo67019.setAttribute('id', 'smo67019');
smo67038v0ar.push(smo67019);
const smo67020 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo67020.setAttribute('id', 'smo67020');
smo67038v0ar.push(smo67020);
const smo67021 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo67021.setAttribute('id', 'smo67021');
smo67038v0ar.push(smo67021);
const smo67022 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo67022.setAttribute('id', 'smo67022');
smo67038v0ar.push(smo67022);
const smo67023 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo67023.setAttribute('id', 'smo67023');
smo67038v0ar.push(smo67023);
const smo67024 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo67024.setAttribute('id', 'smo67024');
smo67038v0ar.push(smo67024);
smo67038v0.addTickables(smo67038v0ar)
fmtsmo6703867.joinVoices([smo67038v0]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo70115 = smo62006.getStemDirection();
smo62006.setStemDirection(dirsmo70115);
smo62007.setStemDirection(dirsmo70115);
smo62008.setStemDirection(dirsmo70115);
smo62009.setStemDirection(dirsmo70115);
const smo70115 = new VF.Beam([smo62006,smo62007,smo62008,smo62009]);
const dirsmo70116 = smo62010.getStemDirection();
smo62010.setStemDirection(dirsmo70116);
smo62011.setStemDirection(dirsmo70116);
smo62012.setStemDirection(dirsmo70116);
smo62013.setStemDirection(dirsmo70116);
const smo70116 = new VF.Beam([smo62010,smo62011,smo62012,smo62013]);
const dirsmo70117 = smo62014.getStemDirection();
smo62014.setStemDirection(dirsmo70117);
smo62015.setStemDirection(dirsmo70117);
smo62016.setStemDirection(dirsmo70117);
smo62017.setStemDirection(dirsmo70117);
const smo70117 = new VF.Beam([smo62014,smo62015,smo62016,smo62017]);
const dirsmo70118 = smo62018.getStemDirection();
smo62018.setStemDirection(dirsmo70118);
smo62019.setStemDirection(dirsmo70118);
smo62020.setStemDirection(dirsmo70118);
smo62021.setStemDirection(dirsmo70118);
const smo70118 = new VF.Beam([smo62018,smo62019,smo62020,smo62021]);
const dirsmo70120 = smo67009.getStemDirection();
smo67009.setStemDirection(dirsmo70120);
smo67010.setStemDirection(dirsmo70120);
smo67011.setStemDirection(dirsmo70120);
smo67012.setStemDirection(dirsmo70120);
const smo70120 = new VF.Beam([smo67009,smo67010,smo67011,smo67012]);
const dirsmo70121 = smo67013.getStemDirection();
smo67013.setStemDirection(dirsmo70121);
smo67014.setStemDirection(dirsmo70121);
smo67015.setStemDirection(dirsmo70121);
smo67016.setStemDirection(dirsmo70121);
const smo70121 = new VF.Beam([smo67013,smo67014,smo67015,smo67016]);
const dirsmo70122 = smo67017.getStemDirection();
smo67017.setStemDirection(dirsmo70122);
smo67018.setStemDirection(dirsmo70122);
smo67019.setStemDirection(dirsmo70122);
smo67020.setStemDirection(dirsmo70122);
const smo70122 = new VF.Beam([smo67017,smo67018,smo67019,smo67020]);
const dirsmo70123 = smo67021.getStemDirection();
smo67021.setStemDirection(dirsmo70123);
smo67022.setStemDirection(dirsmo70123);
smo67023.setStemDirection(dirsmo70123);
smo67024.setStemDirection(dirsmo70123);
const smo70123 = new VF.Beam([smo67021,smo67022,smo67023,smo67024]);
 
// formatting measures in staff group smo58712
fmtsmo6203567.format([smo62035v0,smo67038v0], 400);
const stavesmo62035 = new VF.Stave(710, 1319, 414);
stavesmo62035.setAttribute('id', 'stavesmo62035');
stavesmo62035.setBegBarType(VF.Barline.type.NONE);
stavesmo62035.setContext(context);
stavesmo62035.draw();
smo62035v0.draw(context, stavesmo62035);
smo70115.setContext(context);
smo70115.draw();
smo70116.setContext(context);
smo70116.draw();
smo70117.setContext(context);
smo70117.draw();
smo70118.setContext(context);
smo70118.draw();
const stavesmo67038 = new VF.Stave(710, 1408, 414);
stavesmo67038.setAttribute('id', 'stavesmo67038');
stavesmo67038.setBegBarType(VF.Barline.type.NONE);
stavesmo67038.setContext(context);
stavesmo67038.draw();
smo67038v0.draw(context, stavesmo67038);
smo70120.setContext(context);
smo70120.draw();
smo70121.setContext(context);
smo70121.draw();
smo70122.setContext(context);
smo70122.draw();
smo70123.setContext(context);
smo70123.draw();
const fmtsmo6206568 = new VF.Formatter();
//
// voices and notes for stave 0 68
const smo62065v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62065v0ar = [];
const smo62036 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo62036.setAttribute('id', 'smo62036');
smo62065v0ar.push(smo62036);
const smo62037 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo62037.setAttribute('id', 'smo62037');
smo62065v0ar.push(smo62037);
const smo62038 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo62038.setAttribute('id', 'smo62038');
const smo620380acc = new VF.Accidental('#');
smo62038.addModifier(smo620380acc, 0);
smo62065v0ar.push(smo62038);
const smo62039 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo62039.setAttribute('id', 'smo62039');
smo62065v0ar.push(smo62039);
const smo62040 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62040.setAttribute('id', 'smo62040');
smo62065v0ar.push(smo62040);
const smo62041 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo62041.setAttribute('id', 'smo62041');
smo62065v0ar.push(smo62041);
const smo62042 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo62042.setAttribute('id', 'smo62042');
smo62065v0ar.push(smo62042);
const smo62043 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo62043.setAttribute('id', 'smo62043');
smo62065v0ar.push(smo62043);
const smo62044 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo62044.setAttribute('id', 'smo62044');
smo62065v0ar.push(smo62044);
const smo62045 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo62045.setAttribute('id', 'smo62045');
smo62065v0ar.push(smo62045);
const smo62046 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo62046.setAttribute('id', 'smo62046');
smo62065v0ar.push(smo62046);
const smo62047 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo62047.setAttribute('id', 'smo62047');
smo62065v0ar.push(smo62047);
const smo62048 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62048.setAttribute('id', 'smo62048');
smo62065v0ar.push(smo62048);
const smo62049 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo62049.setAttribute('id', 'smo62049');
smo62065v0ar.push(smo62049);
const smo62050 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo62050.setAttribute('id', 'smo62050');
smo62065v0ar.push(smo62050);
const smo62051 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo62051.setAttribute('id', 'smo62051');
smo62065v0ar.push(smo62051);
smo62065v0.addTickables(smo62065v0ar)
fmtsmo6206568.joinVoices([smo62065v0]);
const fmtsmo6706868 = new VF.Formatter();
//
// voices and notes for stave 1 68
const smo67068v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67068v0ar = [];
const smo67039 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/2/n"]}'))
smo67039.setAttribute('id', 'smo67039');
smo67068v0ar.push(smo67039);
const smo67040 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/3/n"]}'))
smo67040.setAttribute('id', 'smo67040');
smo67068v0ar.push(smo67040);
const smo67041 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo67041.setAttribute('id', 'smo67041');
const smo670410acc = new VF.Accidental('n');
smo67041.addModifier(smo670410acc, 0);
smo67068v0ar.push(smo67041);
const smo67042 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/3/n"]}'))
smo67042.setAttribute('id', 'smo67042');
smo67068v0ar.push(smo67042);
const smo67043 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo67043.setAttribute('id', 'smo67043');
smo67068v0ar.push(smo67043);
const smo67044 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/3/n"]}'))
smo67044.setAttribute('id', 'smo67044');
smo67068v0ar.push(smo67044);
const smo67045 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo67045.setAttribute('id', 'smo67045');
smo67068v0ar.push(smo67045);
const smo67046 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/3/n"]}'))
smo67046.setAttribute('id', 'smo67046');
smo67068v0ar.push(smo67046);
const smo67047 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/2/n"]}'))
smo67047.setAttribute('id', 'smo67047');
smo67068v0ar.push(smo67047);
const smo67048 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/3/n"]}'))
smo67048.setAttribute('id', 'smo67048');
smo67068v0ar.push(smo67048);
const smo67049 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo67049.setAttribute('id', 'smo67049');
smo67068v0ar.push(smo67049);
const smo67050 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/3/n"]}'))
smo67050.setAttribute('id', 'smo67050');
smo67068v0ar.push(smo67050);
const smo67051 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo67051.setAttribute('id', 'smo67051');
smo67068v0ar.push(smo67051);
const smo67052 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/3/n"]}'))
smo67052.setAttribute('id', 'smo67052');
smo67068v0ar.push(smo67052);
const smo67053 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo67053.setAttribute('id', 'smo67053');
smo67068v0ar.push(smo67053);
const smo67054 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/3/n"]}'))
smo67054.setAttribute('id', 'smo67054');
smo67068v0ar.push(smo67054);
smo67068v0.addTickables(smo67068v0ar)
fmtsmo6706868.joinVoices([smo67068v0]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo70127 = smo62036.getStemDirection();
smo62036.setStemDirection(dirsmo70127);
smo62037.setStemDirection(dirsmo70127);
smo62038.setStemDirection(dirsmo70127);
smo62039.setStemDirection(dirsmo70127);
const smo70127 = new VF.Beam([smo62036,smo62037,smo62038,smo62039]);
const dirsmo70128 = smo62040.getStemDirection();
smo62040.setStemDirection(dirsmo70128);
smo62041.setStemDirection(dirsmo70128);
smo62042.setStemDirection(dirsmo70128);
smo62043.setStemDirection(dirsmo70128);
const smo70128 = new VF.Beam([smo62040,smo62041,smo62042,smo62043]);
const dirsmo70129 = smo62044.getStemDirection();
smo62044.setStemDirection(dirsmo70129);
smo62045.setStemDirection(dirsmo70129);
smo62046.setStemDirection(dirsmo70129);
smo62047.setStemDirection(dirsmo70129);
const smo70129 = new VF.Beam([smo62044,smo62045,smo62046,smo62047]);
const dirsmo70130 = smo62048.getStemDirection();
smo62048.setStemDirection(dirsmo70130);
smo62049.setStemDirection(dirsmo70130);
smo62050.setStemDirection(dirsmo70130);
smo62051.setStemDirection(dirsmo70130);
const smo70130 = new VF.Beam([smo62048,smo62049,smo62050,smo62051]);
const dirsmo70132 = smo67039.getStemDirection();
smo67039.setStemDirection(dirsmo70132);
smo67040.setStemDirection(dirsmo70132);
smo67041.setStemDirection(dirsmo70132);
smo67042.setStemDirection(dirsmo70132);
const smo70132 = new VF.Beam([smo67039,smo67040,smo67041,smo67042]);
const dirsmo70133 = smo67043.getStemDirection();
smo67043.setStemDirection(dirsmo70133);
smo67044.setStemDirection(dirsmo70133);
smo67045.setStemDirection(dirsmo70133);
smo67046.setStemDirection(dirsmo70133);
const smo70133 = new VF.Beam([smo67043,smo67044,smo67045,smo67046]);
const dirsmo70134 = smo67047.getStemDirection();
smo67047.setStemDirection(dirsmo70134);
smo67048.setStemDirection(dirsmo70134);
smo67049.setStemDirection(dirsmo70134);
smo67050.setStemDirection(dirsmo70134);
const smo70134 = new VF.Beam([smo67047,smo67048,smo67049,smo67050]);
const dirsmo70135 = smo67051.getStemDirection();
smo67051.setStemDirection(dirsmo70135);
smo67052.setStemDirection(dirsmo70135);
smo67053.setStemDirection(dirsmo70135);
smo67054.setStemDirection(dirsmo70135);
const smo70135 = new VF.Beam([smo67051,smo67052,smo67053,smo67054]);
 
// formatting measures in staff group smo58712
fmtsmo6206568.format([smo62065v0,smo67068v0], 315);
const stavesmo62065 = new VF.Stave(1124, 1319, 329);
stavesmo62065.setAttribute('id', 'stavesmo62065');
stavesmo62065.setBegBarType(VF.Barline.type.NONE);
stavesmo62065.setContext(context);
stavesmo62065.draw();
smo62065v0.draw(context, stavesmo62065);
smo70127.setContext(context);
smo70127.draw();
smo70128.setContext(context);
smo70128.draw();
smo70129.setContext(context);
smo70129.draw();
smo70130.setContext(context);
smo70130.draw();
const stavesmo67068 = new VF.Stave(1124, 1408, 329);
stavesmo67068.setAttribute('id', 'stavesmo67068');
stavesmo67068.setBegBarType(VF.Barline.type.NONE);
stavesmo67068.setContext(context);
stavesmo67068.draw();
smo67068v0.draw(context, stavesmo67068);
smo70132.setContext(context);
smo70132.draw();
smo70133.setContext(context);
smo70133.draw();
smo70134.setContext(context);
smo70134.draw();
smo70135.setContext(context);
smo70135.draw();
const fmtsmo6209569 = new VF.Formatter();
//
// voices and notes for stave 0 69
const smo62095v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62095v0ar = [];
const smo62066 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo62066.setAttribute('id', 'smo62066');
smo62095v0ar.push(smo62066);
const smo62067 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo62067.setAttribute('id', 'smo62067');
const smo620670acc = new VF.Accidental('n');
smo62067.addModifier(smo620670acc, 0);
smo62095v0ar.push(smo62067);
const smo62068 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62068.setAttribute('id', 'smo62068');
smo62095v0ar.push(smo62068);
const smo62069 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo62069.setAttribute('id', 'smo62069');
smo62095v0ar.push(smo62069);
const smo62070 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62070.setAttribute('id', 'smo62070');
smo62095v0ar.push(smo62070);
const smo62071 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo62071.setAttribute('id', 'smo62071');
smo62095v0ar.push(smo62071);
const smo62072 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62072.setAttribute('id', 'smo62072');
smo62095v0ar.push(smo62072);
const smo62073 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo62073.setAttribute('id', 'smo62073');
smo62095v0ar.push(smo62073);
const smo62074 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo62074.setAttribute('id', 'smo62074');
smo62095v0ar.push(smo62074);
const smo62075 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo62075.setAttribute('id', 'smo62075');
smo62095v0ar.push(smo62075);
const smo62076 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62076.setAttribute('id', 'smo62076');
smo62095v0ar.push(smo62076);
const smo62077 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo62077.setAttribute('id', 'smo62077');
smo62095v0ar.push(smo62077);
const smo62078 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62078.setAttribute('id', 'smo62078');
smo62095v0ar.push(smo62078);
const smo62079 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo62079.setAttribute('id', 'smo62079');
smo62095v0ar.push(smo62079);
const smo62080 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62080.setAttribute('id', 'smo62080');
smo62095v0ar.push(smo62080);
const smo62081 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo62081.setAttribute('id', 'smo62081');
smo62095v0ar.push(smo62081);
smo62095v0.addTickables(smo62095v0ar)
fmtsmo6209569.joinVoices([smo62095v0]);
const fmtsmo6709869 = new VF.Formatter();
//
// voices and notes for stave 1 69
const smo67098v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67098v0ar = [];
const smo67069 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/2/n"]}'))
smo67069.setAttribute('id', 'smo67069');
smo67098v0ar.push(smo67069);
const smo67070 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo67070.setAttribute('id', 'smo67070');
smo67098v0ar.push(smo67070);
const smo67071 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67071.setAttribute('id', 'smo67071');
smo67098v0ar.push(smo67071);
const smo67072 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo67072.setAttribute('id', 'smo67072');
smo67098v0ar.push(smo67072);
const smo67073 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo67073.setAttribute('id', 'smo67073');
const smo670730acc = new VF.Accidental('n');
smo67073.addModifier(smo670730acc, 0);
smo67098v0ar.push(smo67073);
const smo67074 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo67074.setAttribute('id', 'smo67074');
smo67098v0ar.push(smo67074);
const smo67075 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67075.setAttribute('id', 'smo67075');
smo67098v0ar.push(smo67075);
const smo67076 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo67076.setAttribute('id', 'smo67076');
smo67098v0ar.push(smo67076);
const smo67077 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/2/n"]}'))
smo67077.setAttribute('id', 'smo67077');
smo67098v0ar.push(smo67077);
const smo67078 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo67078.setAttribute('id', 'smo67078');
smo67098v0ar.push(smo67078);
const smo67079 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67079.setAttribute('id', 'smo67079');
smo67098v0ar.push(smo67079);
const smo67080 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo67080.setAttribute('id', 'smo67080');
smo67098v0ar.push(smo67080);
const smo67081 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo67081.setAttribute('id', 'smo67081');
smo67098v0ar.push(smo67081);
const smo67082 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo67082.setAttribute('id', 'smo67082');
smo67098v0ar.push(smo67082);
const smo67083 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67083.setAttribute('id', 'smo67083');
smo67098v0ar.push(smo67083);
const smo67084 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo67084.setAttribute('id', 'smo67084');
smo67098v0ar.push(smo67084);
smo67098v0.addTickables(smo67098v0ar)
fmtsmo6709869.joinVoices([smo67098v0]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo70139 = smo62066.getStemDirection();
smo62066.setStemDirection(dirsmo70139);
smo62067.setStemDirection(dirsmo70139);
smo62068.setStemDirection(dirsmo70139);
smo62069.setStemDirection(dirsmo70139);
const smo70139 = new VF.Beam([smo62066,smo62067,smo62068,smo62069]);
const dirsmo70140 = smo62070.getStemDirection();
smo62070.setStemDirection(dirsmo70140);
smo62071.setStemDirection(dirsmo70140);
smo62072.setStemDirection(dirsmo70140);
smo62073.setStemDirection(dirsmo70140);
const smo70140 = new VF.Beam([smo62070,smo62071,smo62072,smo62073]);
const dirsmo70141 = smo62074.getStemDirection();
smo62074.setStemDirection(dirsmo70141);
smo62075.setStemDirection(dirsmo70141);
smo62076.setStemDirection(dirsmo70141);
smo62077.setStemDirection(dirsmo70141);
const smo70141 = new VF.Beam([smo62074,smo62075,smo62076,smo62077]);
const dirsmo70142 = smo62078.getStemDirection();
smo62078.setStemDirection(dirsmo70142);
smo62079.setStemDirection(dirsmo70142);
smo62080.setStemDirection(dirsmo70142);
smo62081.setStemDirection(dirsmo70142);
const smo70142 = new VF.Beam([smo62078,smo62079,smo62080,smo62081]);
const dirsmo70144 = smo67069.getStemDirection();
smo67069.setStemDirection(dirsmo70144);
smo67070.setStemDirection(dirsmo70144);
smo67071.setStemDirection(dirsmo70144);
smo67072.setStemDirection(dirsmo70144);
const smo70144 = new VF.Beam([smo67069,smo67070,smo67071,smo67072]);
const dirsmo70145 = smo67073.getStemDirection();
smo67073.setStemDirection(dirsmo70145);
smo67074.setStemDirection(dirsmo70145);
smo67075.setStemDirection(dirsmo70145);
smo67076.setStemDirection(dirsmo70145);
const smo70145 = new VF.Beam([smo67073,smo67074,smo67075,smo67076]);
const dirsmo70146 = smo67077.getStemDirection();
smo67077.setStemDirection(dirsmo70146);
smo67078.setStemDirection(dirsmo70146);
smo67079.setStemDirection(dirsmo70146);
smo67080.setStemDirection(dirsmo70146);
const smo70146 = new VF.Beam([smo67077,smo67078,smo67079,smo67080]);
const dirsmo70147 = smo67081.getStemDirection();
smo67081.setStemDirection(dirsmo70147);
smo67082.setStemDirection(dirsmo70147);
smo67083.setStemDirection(dirsmo70147);
smo67084.setStemDirection(dirsmo70147);
const smo70147 = new VF.Beam([smo67081,smo67082,smo67083,smo67084]);
 
// formatting measures in staff group smo58712
fmtsmo6209569.format([smo62095v0,smo67098v0], 340);
const stavesmo62095 = new VF.Stave(1453, 1319, 354);
stavesmo62095.setAttribute('id', 'stavesmo62095');
stavesmo62095.setBegBarType(VF.Barline.type.NONE);
stavesmo62095.setContext(context);
stavesmo62095.draw();
smo62095v0.draw(context, stavesmo62095);
smo70139.setContext(context);
smo70139.draw();
smo70140.setContext(context);
smo70140.draw();
smo70141.setContext(context);
smo70141.draw();
smo70142.setContext(context);
smo70142.draw();
const stavesmo67098 = new VF.Stave(1453, 1408, 354);
stavesmo67098.setAttribute('id', 'stavesmo67098');
stavesmo67098.setBegBarType(VF.Barline.type.NONE);
stavesmo67098.setContext(context);
stavesmo67098.draw();
smo67098v0.draw(context, stavesmo67098);
smo70144.setContext(context);
smo70144.draw();
smo70145.setContext(context);
smo70145.draw();
smo70146.setContext(context);
smo70146.draw();
smo70147.setContext(context);
smo70147.draw();
const rightsmo58712stavesmo620951 = new VF.StaveConnector(stavesmo62095, stavesmo67098).setType(0);
rightsmo58712stavesmo620951.setContext(context).draw();
const fmtsmo6212570 = new VF.Formatter();
//
// voices and notes for stave 0 70
const smo62125v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62125v0ar = [];
const smo62096 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo62096.setAttribute('id', 'smo62096');
smo62125v0ar.push(smo62096);
const smo62097 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo62097.setAttribute('id', 'smo62097');
smo62125v0ar.push(smo62097);
const smo62098 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo62098.setAttribute('id', 'smo62098');
const smo620980acc = new VF.Accidental('n');
smo62098.addModifier(smo620980acc, 0);
smo62125v0ar.push(smo62098);
const smo62099 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo62099.setAttribute('id', 'smo62099');
smo62125v0ar.push(smo62099);
const smo62100 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62100.setAttribute('id', 'smo62100');
smo62125v0ar.push(smo62100);
const smo62101 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo62101.setAttribute('id', 'smo62101');
smo62125v0ar.push(smo62101);
const smo62102 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo62102.setAttribute('id', 'smo62102');
smo62125v0ar.push(smo62102);
const smo62103 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo62103.setAttribute('id', 'smo62103');
smo62125v0ar.push(smo62103);
const smo62104 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo62104.setAttribute('id', 'smo62104');
smo62125v0ar.push(smo62104);
const smo62105 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo62105.setAttribute('id', 'smo62105');
smo62125v0ar.push(smo62105);
const smo62106 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo62106.setAttribute('id', 'smo62106');
smo62125v0ar.push(smo62106);
const smo62107 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo62107.setAttribute('id', 'smo62107');
smo62125v0ar.push(smo62107);
const smo62108 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62108.setAttribute('id', 'smo62108');
smo62125v0ar.push(smo62108);
const smo62109 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo62109.setAttribute('id', 'smo62109');
smo62125v0ar.push(smo62109);
const smo62110 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo62110.setAttribute('id', 'smo62110');
smo62125v0ar.push(smo62110);
const smo62111 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo62111.setAttribute('id', 'smo62111');
smo62125v0ar.push(smo62111);
smo62125v0.addTickables(smo62125v0ar)
fmtsmo6212570.joinVoices([smo62125v0]);
const fmtsmo6712870 = new VF.Formatter();
//
// voices and notes for stave 1 70
const smo67128v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67128v0ar = [];
const smo67099 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/2/n"]}'))
smo67099.setAttribute('id', 'smo67099');
smo67128v0ar.push(smo67099);
const smo67100 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo67100.setAttribute('id', 'smo67100');
smo67128v0ar.push(smo67100);
const smo67101 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo67101.setAttribute('id', 'smo67101');
smo67128v0ar.push(smo67101);
const smo67102 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo67102.setAttribute('id', 'smo67102');
smo67128v0ar.push(smo67102);
const smo67103 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67103.setAttribute('id', 'smo67103');
smo67128v0ar.push(smo67103);
const smo67104 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo67104.setAttribute('id', 'smo67104');
smo67128v0ar.push(smo67104);
const smo67105 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo67105.setAttribute('id', 'smo67105');
smo67128v0ar.push(smo67105);
const smo67106 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo67106.setAttribute('id', 'smo67106');
smo67128v0ar.push(smo67106);
const smo67107 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/2/n"]}'))
smo67107.setAttribute('id', 'smo67107');
smo67128v0ar.push(smo67107);
const smo67108 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo67108.setAttribute('id', 'smo67108');
smo67128v0ar.push(smo67108);
const smo67109 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo67109.setAttribute('id', 'smo67109');
smo67128v0ar.push(smo67109);
const smo67110 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo67110.setAttribute('id', 'smo67110');
smo67128v0ar.push(smo67110);
const smo67111 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67111.setAttribute('id', 'smo67111');
smo67128v0ar.push(smo67111);
const smo67112 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo67112.setAttribute('id', 'smo67112');
smo67128v0ar.push(smo67112);
const smo67113 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo67113.setAttribute('id', 'smo67113');
smo67128v0ar.push(smo67113);
const smo67114 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo67114.setAttribute('id', 'smo67114');
smo67128v0ar.push(smo67114);
smo67128v0.addTickables(smo67128v0ar)
fmtsmo6712870.joinVoices([smo67128v0]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo70163 = smo62096.getStemDirection();
smo62096.setStemDirection(dirsmo70163);
smo62097.setStemDirection(dirsmo70163);
smo62098.setStemDirection(dirsmo70163);
smo62099.setStemDirection(dirsmo70163);
const smo70163 = new VF.Beam([smo62096,smo62097,smo62098,smo62099]);
const dirsmo70164 = smo62100.getStemDirection();
smo62100.setStemDirection(dirsmo70164);
smo62101.setStemDirection(dirsmo70164);
smo62102.setStemDirection(dirsmo70164);
smo62103.setStemDirection(dirsmo70164);
const smo70164 = new VF.Beam([smo62100,smo62101,smo62102,smo62103]);
const dirsmo70165 = smo62104.getStemDirection();
smo62104.setStemDirection(dirsmo70165);
smo62105.setStemDirection(dirsmo70165);
smo62106.setStemDirection(dirsmo70165);
smo62107.setStemDirection(dirsmo70165);
const smo70165 = new VF.Beam([smo62104,smo62105,smo62106,smo62107]);
const dirsmo70166 = smo62108.getStemDirection();
smo62108.setStemDirection(dirsmo70166);
smo62109.setStemDirection(dirsmo70166);
smo62110.setStemDirection(dirsmo70166);
smo62111.setStemDirection(dirsmo70166);
const smo70166 = new VF.Beam([smo62108,smo62109,smo62110,smo62111]);
const dirsmo70168 = smo67099.getStemDirection();
smo67099.setStemDirection(dirsmo70168);
smo67100.setStemDirection(dirsmo70168);
smo67101.setStemDirection(dirsmo70168);
smo67102.setStemDirection(dirsmo70168);
const smo70168 = new VF.Beam([smo67099,smo67100,smo67101,smo67102]);
const dirsmo70169 = smo67103.getStemDirection();
smo67103.setStemDirection(dirsmo70169);
smo67104.setStemDirection(dirsmo70169);
smo67105.setStemDirection(dirsmo70169);
smo67106.setStemDirection(dirsmo70169);
const smo70169 = new VF.Beam([smo67103,smo67104,smo67105,smo67106]);
const dirsmo70170 = smo67107.getStemDirection();
smo67107.setStemDirection(dirsmo70170);
smo67108.setStemDirection(dirsmo70170);
smo67109.setStemDirection(dirsmo70170);
smo67110.setStemDirection(dirsmo70170);
const smo70170 = new VF.Beam([smo67107,smo67108,smo67109,smo67110]);
const dirsmo70171 = smo67111.getStemDirection();
smo67111.setStemDirection(dirsmo70171);
smo67112.setStemDirection(dirsmo70171);
smo67113.setStemDirection(dirsmo70171);
smo67114.setStemDirection(dirsmo70171);
const smo70171 = new VF.Beam([smo67111,smo67112,smo67113,smo67114]);
 
// formatting measures in staff group smo58712
fmtsmo6212570.format([smo62125v0,smo67128v0], 291);
const stavesmo62125 = new VF.Stave(90, 1537, 374);
stavesmo62125.setAttribute('id', 'stavesmo62125');
stavesmo62125.setBegBarType(1);
stavesmo62125.addClef('treble');
const keysmo62125 = new VF.KeySignature('Eb');
keysmo62125.addToStave(stavesmo62125);
stavesmo62125.setContext(context);
stavesmo62125.draw();
smo62125v0.draw(context, stavesmo62125);
smo70163.setContext(context);
smo70163.draw();
smo70164.setContext(context);
smo70164.draw();
smo70165.setContext(context);
smo70165.draw();
smo70166.setContext(context);
smo70166.draw();
const stavesmo67128 = new VF.Stave(90, 1622, 374);
stavesmo67128.setAttribute('id', 'stavesmo67128');
stavesmo67128.setBegBarType(1);
stavesmo67128.addClef('bass');
const keysmo67128 = new VF.KeySignature('Eb');
keysmo67128.addToStave(stavesmo67128);
stavesmo67128.setContext(context);
stavesmo67128.draw();
smo67128v0.draw(context, stavesmo67128);
smo70168.setContext(context);
smo70168.draw();
smo70169.setContext(context);
smo70169.draw();
smo70170.setContext(context);
smo70170.draw();
smo70171.setContext(context);
smo70171.draw();
const leftsmo58712stavesmo621251 = new VF.StaveConnector(stavesmo62125, stavesmo67128).setType(3);
leftsmo58712stavesmo621251.setContext(context).draw();
const fmtsmo6215571 = new VF.Formatter();
//
// voices and notes for stave 0 71
const smo62155v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62155v0ar = [];
const smo62126 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/4/n"]}'))
smo62126.setAttribute('id', 'smo62126');
smo62155v0ar.push(smo62126);
const smo62127 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo62127.setAttribute('id', 'smo62127');
smo62155v0ar.push(smo62127);
const smo62128 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo62128.setAttribute('id', 'smo62128');
smo62155v0ar.push(smo62128);
const smo62129 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo62129.setAttribute('id', 'smo62129');
smo62155v0ar.push(smo62129);
const smo62130 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62130.setAttribute('id', 'smo62130');
smo62155v0ar.push(smo62130);
const smo62131 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo62131.setAttribute('id', 'smo62131');
smo62155v0ar.push(smo62131);
const smo62132 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo62132.setAttribute('id', 'smo62132');
smo62155v0ar.push(smo62132);
const smo62133 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo62133.setAttribute('id', 'smo62133');
smo62155v0ar.push(smo62133);
const smo62134 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/4/n"]}'))
smo62134.setAttribute('id', 'smo62134');
smo62155v0ar.push(smo62134);
const smo62135 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo62135.setAttribute('id', 'smo62135');
smo62155v0ar.push(smo62135);
const smo62136 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo62136.setAttribute('id', 'smo62136');
smo62155v0ar.push(smo62136);
const smo62137 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo62137.setAttribute('id', 'smo62137');
smo62155v0ar.push(smo62137);
const smo62138 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62138.setAttribute('id', 'smo62138');
smo62155v0ar.push(smo62138);
const smo62139 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo62139.setAttribute('id', 'smo62139');
smo62155v0ar.push(smo62139);
const smo62140 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo62140.setAttribute('id', 'smo62140');
smo62155v0ar.push(smo62140);
const smo62141 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo62141.setAttribute('id', 'smo62141');
smo62155v0ar.push(smo62141);
smo62155v0.addTickables(smo62155v0ar)
fmtsmo6215571.joinVoices([smo62155v0]);
const fmtsmo6715871 = new VF.Formatter();
//
// voices and notes for stave 1 71
const smo67158v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67158v0ar = [];
const smo67129 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["ab/2/n"]}'))
smo67129.setAttribute('id', 'smo67129');
smo67158v0ar.push(smo67129);
const smo67130 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67130.setAttribute('id', 'smo67130');
smo67158v0ar.push(smo67130);
const smo67131 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/3/n"]}'))
smo67131.setAttribute('id', 'smo67131');
smo67158v0ar.push(smo67131);
const smo67132 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67132.setAttribute('id', 'smo67132');
smo67158v0ar.push(smo67132);
const smo67133 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67133.setAttribute('id', 'smo67133');
smo67158v0ar.push(smo67133);
const smo67134 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67134.setAttribute('id', 'smo67134');
smo67158v0ar.push(smo67134);
const smo67135 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo67135.setAttribute('id', 'smo67135');
smo67158v0ar.push(smo67135);
const smo67136 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67136.setAttribute('id', 'smo67136');
smo67158v0ar.push(smo67136);
const smo67137 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["ab/2/n"]}'))
smo67137.setAttribute('id', 'smo67137');
smo67158v0ar.push(smo67137);
const smo67138 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67138.setAttribute('id', 'smo67138');
smo67158v0ar.push(smo67138);
const smo67139 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/3/n"]}'))
smo67139.setAttribute('id', 'smo67139');
smo67158v0ar.push(smo67139);
const smo67140 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67140.setAttribute('id', 'smo67140');
smo67158v0ar.push(smo67140);
const smo67141 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67141.setAttribute('id', 'smo67141');
smo67158v0ar.push(smo67141);
const smo67142 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67142.setAttribute('id', 'smo67142');
smo67158v0ar.push(smo67142);
const smo67143 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo67143.setAttribute('id', 'smo67143');
smo67158v0ar.push(smo67143);
const smo67144 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67144.setAttribute('id', 'smo67144');
smo67158v0ar.push(smo67144);
smo67158v0.addTickables(smo67158v0ar)
fmtsmo6715871.joinVoices([smo67158v0]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo70175 = smo62126.getStemDirection();
smo62126.setStemDirection(dirsmo70175);
smo62127.setStemDirection(dirsmo70175);
smo62128.setStemDirection(dirsmo70175);
smo62129.setStemDirection(dirsmo70175);
const smo70175 = new VF.Beam([smo62126,smo62127,smo62128,smo62129]);
const dirsmo70176 = smo62130.getStemDirection();
smo62130.setStemDirection(dirsmo70176);
smo62131.setStemDirection(dirsmo70176);
smo62132.setStemDirection(dirsmo70176);
smo62133.setStemDirection(dirsmo70176);
const smo70176 = new VF.Beam([smo62130,smo62131,smo62132,smo62133]);
const dirsmo70177 = smo62134.getStemDirection();
smo62134.setStemDirection(dirsmo70177);
smo62135.setStemDirection(dirsmo70177);
smo62136.setStemDirection(dirsmo70177);
smo62137.setStemDirection(dirsmo70177);
const smo70177 = new VF.Beam([smo62134,smo62135,smo62136,smo62137]);
const dirsmo70178 = smo62138.getStemDirection();
smo62138.setStemDirection(dirsmo70178);
smo62139.setStemDirection(dirsmo70178);
smo62140.setStemDirection(dirsmo70178);
smo62141.setStemDirection(dirsmo70178);
const smo70178 = new VF.Beam([smo62138,smo62139,smo62140,smo62141]);
const dirsmo70180 = smo67129.getStemDirection();
smo67129.setStemDirection(dirsmo70180);
smo67130.setStemDirection(dirsmo70180);
smo67131.setStemDirection(dirsmo70180);
smo67132.setStemDirection(dirsmo70180);
const smo70180 = new VF.Beam([smo67129,smo67130,smo67131,smo67132]);
const dirsmo70181 = smo67133.getStemDirection();
smo67133.setStemDirection(dirsmo70181);
smo67134.setStemDirection(dirsmo70181);
smo67135.setStemDirection(dirsmo70181);
smo67136.setStemDirection(dirsmo70181);
const smo70181 = new VF.Beam([smo67133,smo67134,smo67135,smo67136]);
const dirsmo70182 = smo67137.getStemDirection();
smo67137.setStemDirection(dirsmo70182);
smo67138.setStemDirection(dirsmo70182);
smo67139.setStemDirection(dirsmo70182);
smo67140.setStemDirection(dirsmo70182);
const smo70182 = new VF.Beam([smo67137,smo67138,smo67139,smo67140]);
const dirsmo70183 = smo67141.getStemDirection();
smo67141.setStemDirection(dirsmo70183);
smo67142.setStemDirection(dirsmo70183);
smo67143.setStemDirection(dirsmo70183);
smo67144.setStemDirection(dirsmo70183);
const smo70183 = new VF.Beam([smo67141,smo67142,smo67143,smo67144]);
 
// formatting measures in staff group smo58712
fmtsmo6215571.format([smo62155v0,smo67158v0], 255);
const stavesmo62155 = new VF.Stave(464, 1537, 269);
stavesmo62155.setAttribute('id', 'stavesmo62155');
stavesmo62155.setBegBarType(VF.Barline.type.NONE);
stavesmo62155.setContext(context);
stavesmo62155.draw();
smo62155v0.draw(context, stavesmo62155);
smo70175.setContext(context);
smo70175.draw();
smo70176.setContext(context);
smo70176.draw();
smo70177.setContext(context);
smo70177.draw();
smo70178.setContext(context);
smo70178.draw();
const stavesmo67158 = new VF.Stave(464, 1622, 269);
stavesmo67158.setAttribute('id', 'stavesmo67158');
stavesmo67158.setBegBarType(VF.Barline.type.NONE);
stavesmo67158.setContext(context);
stavesmo67158.draw();
smo67158v0.draw(context, stavesmo67158);
smo70180.setContext(context);
smo70180.draw();
smo70181.setContext(context);
smo70181.draw();
smo70182.setContext(context);
smo70182.draw();
smo70183.setContext(context);
smo70183.draw();
const fmtsmo6218572 = new VF.Formatter();
//
// voices and notes for stave 0 72
const smo62185v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62185v0ar = [];
const smo62156 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/4/n"]}'))
smo62156.setAttribute('id', 'smo62156');
smo62185v0ar.push(smo62156);
const smo62157 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo62157.setAttribute('id', 'smo62157');
smo62185v0ar.push(smo62157);
const smo62158 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo62158.setAttribute('id', 'smo62158');
smo62185v0ar.push(smo62158);
const smo62159 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo62159.setAttribute('id', 'smo62159');
smo62185v0ar.push(smo62159);
const smo62160 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo62160.setAttribute('id', 'smo62160');
smo62185v0ar.push(smo62160);
const smo62161 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo62161.setAttribute('id', 'smo62161');
smo62185v0ar.push(smo62161);
const smo62162 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo62162.setAttribute('id', 'smo62162');
smo62185v0ar.push(smo62162);
const smo62163 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo62163.setAttribute('id', 'smo62163');
smo62185v0ar.push(smo62163);
const smo62164 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/4/n"]}'))
smo62164.setAttribute('id', 'smo62164');
smo62185v0ar.push(smo62164);
const smo62165 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo62165.setAttribute('id', 'smo62165');
smo62185v0ar.push(smo62165);
const smo62166 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo62166.setAttribute('id', 'smo62166');
smo62185v0ar.push(smo62166);
const smo62167 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo62167.setAttribute('id', 'smo62167');
smo62185v0ar.push(smo62167);
const smo62168 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo62168.setAttribute('id', 'smo62168');
smo62185v0ar.push(smo62168);
const smo62169 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo62169.setAttribute('id', 'smo62169');
smo62185v0ar.push(smo62169);
const smo62170 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo62170.setAttribute('id', 'smo62170');
smo62185v0ar.push(smo62170);
const smo62171 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo62171.setAttribute('id', 'smo62171');
smo62185v0ar.push(smo62171);
smo62185v0.addTickables(smo62185v0ar)
fmtsmo6218572.joinVoices([smo62185v0]);
const fmtsmo6718872 = new VF.Formatter();
//
// voices and notes for stave 1 72
const smo67188v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67188v0ar = [];
const smo67159 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo67159.setAttribute('id', 'smo67159');
smo67188v0ar.push(smo67159);
const smo67160 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67160.setAttribute('id', 'smo67160');
smo67188v0ar.push(smo67160);
const smo67161 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67161.setAttribute('id', 'smo67161');
smo67188v0ar.push(smo67161);
const smo67162 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67162.setAttribute('id', 'smo67162');
smo67188v0ar.push(smo67162);
const smo67163 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo67163.setAttribute('id', 'smo67163');
smo67188v0ar.push(smo67163);
const smo67164 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67164.setAttribute('id', 'smo67164');
smo67188v0ar.push(smo67164);
const smo67165 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67165.setAttribute('id', 'smo67165');
smo67188v0ar.push(smo67165);
const smo67166 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67166.setAttribute('id', 'smo67166');
smo67188v0ar.push(smo67166);
const smo67167 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo67167.setAttribute('id', 'smo67167');
smo67188v0ar.push(smo67167);
const smo67168 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67168.setAttribute('id', 'smo67168');
smo67188v0ar.push(smo67168);
const smo67169 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67169.setAttribute('id', 'smo67169');
smo67188v0ar.push(smo67169);
const smo67170 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67170.setAttribute('id', 'smo67170');
smo67188v0ar.push(smo67170);
const smo67171 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo67171.setAttribute('id', 'smo67171');
smo67188v0ar.push(smo67171);
const smo67172 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67172.setAttribute('id', 'smo67172');
smo67188v0ar.push(smo67172);
const smo67173 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67173.setAttribute('id', 'smo67173');
smo67188v0ar.push(smo67173);
const smo67174 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67174.setAttribute('id', 'smo67174');
smo67188v0ar.push(smo67174);
smo67188v0.addTickables(smo67188v0ar)
fmtsmo6718872.joinVoices([smo67188v0]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo70187 = smo62156.getStemDirection();
smo62156.setStemDirection(dirsmo70187);
smo62157.setStemDirection(dirsmo70187);
smo62158.setStemDirection(dirsmo70187);
smo62159.setStemDirection(dirsmo70187);
const smo70187 = new VF.Beam([smo62156,smo62157,smo62158,smo62159]);
const dirsmo70188 = smo62160.getStemDirection();
smo62160.setStemDirection(dirsmo70188);
smo62161.setStemDirection(dirsmo70188);
smo62162.setStemDirection(dirsmo70188);
smo62163.setStemDirection(dirsmo70188);
const smo70188 = new VF.Beam([smo62160,smo62161,smo62162,smo62163]);
const dirsmo70189 = smo62164.getStemDirection();
smo62164.setStemDirection(dirsmo70189);
smo62165.setStemDirection(dirsmo70189);
smo62166.setStemDirection(dirsmo70189);
smo62167.setStemDirection(dirsmo70189);
const smo70189 = new VF.Beam([smo62164,smo62165,smo62166,smo62167]);
const dirsmo70190 = smo62168.getStemDirection();
smo62168.setStemDirection(dirsmo70190);
smo62169.setStemDirection(dirsmo70190);
smo62170.setStemDirection(dirsmo70190);
smo62171.setStemDirection(dirsmo70190);
const smo70190 = new VF.Beam([smo62168,smo62169,smo62170,smo62171]);
const dirsmo70192 = smo67159.getStemDirection();
smo67159.setStemDirection(dirsmo70192);
smo67160.setStemDirection(dirsmo70192);
smo67161.setStemDirection(dirsmo70192);
smo67162.setStemDirection(dirsmo70192);
const smo70192 = new VF.Beam([smo67159,smo67160,smo67161,smo67162]);
const dirsmo70193 = smo67163.getStemDirection();
smo67163.setStemDirection(dirsmo70193);
smo67164.setStemDirection(dirsmo70193);
smo67165.setStemDirection(dirsmo70193);
smo67166.setStemDirection(dirsmo70193);
const smo70193 = new VF.Beam([smo67163,smo67164,smo67165,smo67166]);
const dirsmo70194 = smo67167.getStemDirection();
smo67167.setStemDirection(dirsmo70194);
smo67168.setStemDirection(dirsmo70194);
smo67169.setStemDirection(dirsmo70194);
smo67170.setStemDirection(dirsmo70194);
const smo70194 = new VF.Beam([smo67167,smo67168,smo67169,smo67170]);
const dirsmo70195 = smo67171.getStemDirection();
smo67171.setStemDirection(dirsmo70195);
smo67172.setStemDirection(dirsmo70195);
smo67173.setStemDirection(dirsmo70195);
smo67174.setStemDirection(dirsmo70195);
const smo70195 = new VF.Beam([smo67171,smo67172,smo67173,smo67174]);
 
// formatting measures in staff group smo58712
fmtsmo6218572.format([smo62185v0,smo67188v0], 255);
const stavesmo62185 = new VF.Stave(733, 1537, 269);
stavesmo62185.setAttribute('id', 'stavesmo62185');
stavesmo62185.setBegBarType(VF.Barline.type.NONE);
stavesmo62185.setContext(context);
stavesmo62185.draw();
smo62185v0.draw(context, stavesmo62185);
smo70187.setContext(context);
smo70187.draw();
smo70188.setContext(context);
smo70188.draw();
smo70189.setContext(context);
smo70189.draw();
smo70190.setContext(context);
smo70190.draw();
const stavesmo67188 = new VF.Stave(733, 1622, 269);
stavesmo67188.setAttribute('id', 'stavesmo67188');
stavesmo67188.setBegBarType(VF.Barline.type.NONE);
stavesmo67188.setContext(context);
stavesmo67188.draw();
smo67188v0.draw(context, stavesmo67188);
smo70192.setContext(context);
smo70192.draw();
smo70193.setContext(context);
smo70193.draw();
smo70194.setContext(context);
smo70194.draw();
smo70195.setContext(context);
smo70195.draw();
const fmtsmo6221573 = new VF.Formatter();
//
// voices and notes for stave 0 73
const smo62215v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62215v0ar = [];
const smo62186 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["ab/4/n"]}'))
smo62186.setAttribute('id', 'smo62186');
smo62215v0ar.push(smo62186);
const smo62187 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo62187.setAttribute('id', 'smo62187');
smo62215v0ar.push(smo62187);
const smo62188 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo62188.setAttribute('id', 'smo62188');
smo62215v0ar.push(smo62188);
const smo62189 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo62189.setAttribute('id', 'smo62189');
smo62215v0ar.push(smo62189);
const smo62190 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo62190.setAttribute('id', 'smo62190');
smo62215v0ar.push(smo62190);
const smo62191 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo62191.setAttribute('id', 'smo62191');
smo62215v0ar.push(smo62191);
const smo62192 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo62192.setAttribute('id', 'smo62192');
smo62215v0ar.push(smo62192);
const smo62193 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo62193.setAttribute('id', 'smo62193');
smo62215v0ar.push(smo62193);
const smo62194 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["ab/4/n"]}'))
smo62194.setAttribute('id', 'smo62194');
smo62215v0ar.push(smo62194);
const smo62195 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo62195.setAttribute('id', 'smo62195');
smo62215v0ar.push(smo62195);
const smo62196 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo62196.setAttribute('id', 'smo62196');
smo62215v0ar.push(smo62196);
const smo62197 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo62197.setAttribute('id', 'smo62197');
smo62215v0ar.push(smo62197);
const smo62198 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo62198.setAttribute('id', 'smo62198');
smo62215v0ar.push(smo62198);
const smo62199 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo62199.setAttribute('id', 'smo62199');
smo62215v0ar.push(smo62199);
const smo62200 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo62200.setAttribute('id', 'smo62200');
smo62215v0ar.push(smo62200);
const smo62201 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo62201.setAttribute('id', 'smo62201');
smo62215v0ar.push(smo62201);
smo62215v0.addTickables(smo62215v0ar)
fmtsmo6221573.joinVoices([smo62215v0]);
const fmtsmo6721873 = new VF.Formatter();
//
// voices and notes for stave 1 73
const smo67218v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67218v0ar = [];
const smo67189 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo67189.setAttribute('id', 'smo67189');
smo67218v0ar.push(smo67189);
const smo67190 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67190.setAttribute('id', 'smo67190');
smo67218v0ar.push(smo67190);
const smo67191 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67191.setAttribute('id', 'smo67191');
smo67218v0ar.push(smo67191);
const smo67192 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67192.setAttribute('id', 'smo67192');
smo67218v0ar.push(smo67192);
const smo67193 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo67193.setAttribute('id', 'smo67193');
smo67218v0ar.push(smo67193);
const smo67194 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67194.setAttribute('id', 'smo67194');
smo67218v0ar.push(smo67194);
const smo67195 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67195.setAttribute('id', 'smo67195');
smo67218v0ar.push(smo67195);
const smo67196 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67196.setAttribute('id', 'smo67196');
smo67218v0ar.push(smo67196);
const smo67197 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo67197.setAttribute('id', 'smo67197');
smo67218v0ar.push(smo67197);
const smo67198 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67198.setAttribute('id', 'smo67198');
smo67218v0ar.push(smo67198);
const smo67199 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67199.setAttribute('id', 'smo67199');
smo67218v0ar.push(smo67199);
const smo67200 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67200.setAttribute('id', 'smo67200');
smo67218v0ar.push(smo67200);
const smo67201 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo67201.setAttribute('id', 'smo67201');
smo67218v0ar.push(smo67201);
const smo67202 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67202.setAttribute('id', 'smo67202');
smo67218v0ar.push(smo67202);
const smo67203 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67203.setAttribute('id', 'smo67203');
smo67218v0ar.push(smo67203);
const smo67204 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67204.setAttribute('id', 'smo67204');
smo67218v0ar.push(smo67204);
smo67218v0.addTickables(smo67218v0ar)
fmtsmo6721873.joinVoices([smo67218v0]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo70199 = smo62186.getStemDirection();
smo62186.setStemDirection(dirsmo70199);
smo62187.setStemDirection(dirsmo70199);
smo62188.setStemDirection(dirsmo70199);
smo62189.setStemDirection(dirsmo70199);
const smo70199 = new VF.Beam([smo62186,smo62187,smo62188,smo62189]);
const dirsmo70200 = smo62190.getStemDirection();
smo62190.setStemDirection(dirsmo70200);
smo62191.setStemDirection(dirsmo70200);
smo62192.setStemDirection(dirsmo70200);
smo62193.setStemDirection(dirsmo70200);
const smo70200 = new VF.Beam([smo62190,smo62191,smo62192,smo62193]);
const dirsmo70201 = smo62194.getStemDirection();
smo62194.setStemDirection(dirsmo70201);
smo62195.setStemDirection(dirsmo70201);
smo62196.setStemDirection(dirsmo70201);
smo62197.setStemDirection(dirsmo70201);
const smo70201 = new VF.Beam([smo62194,smo62195,smo62196,smo62197]);
const dirsmo70202 = smo62198.getStemDirection();
smo62198.setStemDirection(dirsmo70202);
smo62199.setStemDirection(dirsmo70202);
smo62200.setStemDirection(dirsmo70202);
smo62201.setStemDirection(dirsmo70202);
const smo70202 = new VF.Beam([smo62198,smo62199,smo62200,smo62201]);
const dirsmo70204 = smo67189.getStemDirection();
smo67189.setStemDirection(dirsmo70204);
smo67190.setStemDirection(dirsmo70204);
smo67191.setStemDirection(dirsmo70204);
smo67192.setStemDirection(dirsmo70204);
const smo70204 = new VF.Beam([smo67189,smo67190,smo67191,smo67192]);
const dirsmo70205 = smo67193.getStemDirection();
smo67193.setStemDirection(dirsmo70205);
smo67194.setStemDirection(dirsmo70205);
smo67195.setStemDirection(dirsmo70205);
smo67196.setStemDirection(dirsmo70205);
const smo70205 = new VF.Beam([smo67193,smo67194,smo67195,smo67196]);
const dirsmo70206 = smo67197.getStemDirection();
smo67197.setStemDirection(dirsmo70206);
smo67198.setStemDirection(dirsmo70206);
smo67199.setStemDirection(dirsmo70206);
smo67200.setStemDirection(dirsmo70206);
const smo70206 = new VF.Beam([smo67197,smo67198,smo67199,smo67200]);
const dirsmo70207 = smo67201.getStemDirection();
smo67201.setStemDirection(dirsmo70207);
smo67202.setStemDirection(dirsmo70207);
smo67203.setStemDirection(dirsmo70207);
smo67204.setStemDirection(dirsmo70207);
const smo70207 = new VF.Beam([smo67201,smo67202,smo67203,smo67204]);
 
// formatting measures in staff group smo58712
fmtsmo6221573.format([smo62215v0,smo67218v0], 255);
const stavesmo62215 = new VF.Stave(1002, 1537, 269);
stavesmo62215.setAttribute('id', 'stavesmo62215');
stavesmo62215.setBegBarType(VF.Barline.type.NONE);
stavesmo62215.setContext(context);
stavesmo62215.draw();
smo62215v0.draw(context, stavesmo62215);
smo70199.setContext(context);
smo70199.draw();
smo70200.setContext(context);
smo70200.draw();
smo70201.setContext(context);
smo70201.draw();
smo70202.setContext(context);
smo70202.draw();
const stavesmo67218 = new VF.Stave(1002, 1622, 269);
stavesmo67218.setAttribute('id', 'stavesmo67218');
stavesmo67218.setBegBarType(VF.Barline.type.NONE);
stavesmo67218.setContext(context);
stavesmo67218.draw();
smo67218v0.draw(context, stavesmo67218);
smo70204.setContext(context);
smo70204.draw();
smo70205.setContext(context);
smo70205.draw();
smo70206.setContext(context);
smo70206.draw();
smo70207.setContext(context);
smo70207.draw();
const fmtsmo6224574 = new VF.Formatter();
//
// voices and notes for stave 0 74
const smo62245v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62245v0ar = [];
const smo62216 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["ab/4/n"]}'))
smo62216.setAttribute('id', 'smo62216');
smo62245v0ar.push(smo62216);
const smo62217 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62217.setAttribute('id', 'smo62217');
smo62245v0ar.push(smo62217);
const smo62218 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62218.setAttribute('id', 'smo62218');
smo62245v0ar.push(smo62218);
const smo62219 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62219.setAttribute('id', 'smo62219');
smo62245v0ar.push(smo62219);
const smo62220 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/3/n"]}'))
smo62220.setAttribute('id', 'smo62220');
smo62245v0ar.push(smo62220);
const smo62221 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62221.setAttribute('id', 'smo62221');
smo62245v0ar.push(smo62221);
const smo62222 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62222.setAttribute('id', 'smo62222');
smo62245v0ar.push(smo62222);
const smo62223 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62223.setAttribute('id', 'smo62223');
smo62245v0ar.push(smo62223);
const smo62224 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["ab/4/n"]}'))
smo62224.setAttribute('id', 'smo62224');
smo62245v0ar.push(smo62224);
const smo62225 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62225.setAttribute('id', 'smo62225');
smo62245v0ar.push(smo62225);
const smo62226 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62226.setAttribute('id', 'smo62226');
smo62245v0ar.push(smo62226);
const smo62227 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62227.setAttribute('id', 'smo62227');
smo62245v0ar.push(smo62227);
const smo62228 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/3/n"]}'))
smo62228.setAttribute('id', 'smo62228');
smo62245v0ar.push(smo62228);
const smo62229 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62229.setAttribute('id', 'smo62229');
smo62245v0ar.push(smo62229);
const smo62230 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62230.setAttribute('id', 'smo62230');
smo62245v0ar.push(smo62230);
const smo62231 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62231.setAttribute('id', 'smo62231');
smo62245v0ar.push(smo62231);
smo62245v0.addTickables(smo62245v0ar)
fmtsmo6224574.joinVoices([smo62245v0]);
const fmtsmo6724874 = new VF.Formatter();
//
// voices and notes for stave 1 74
const smo67248v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67248v0ar = [];
const smo67219 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67219.setAttribute('id', 'smo67219');
smo67248v0ar.push(smo67219);
const smo67220 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67220.setAttribute('id', 'smo67220');
smo67248v0ar.push(smo67220);
const smo67221 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67221.setAttribute('id', 'smo67221');
smo67248v0ar.push(smo67221);
const smo67222 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67222.setAttribute('id', 'smo67222');
smo67248v0ar.push(smo67222);
const smo67223 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo67223.setAttribute('id', 'smo67223');
smo67248v0ar.push(smo67223);
const smo67224 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67224.setAttribute('id', 'smo67224');
smo67248v0ar.push(smo67224);
const smo67225 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67225.setAttribute('id', 'smo67225');
smo67248v0ar.push(smo67225);
const smo67226 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67226.setAttribute('id', 'smo67226');
smo67248v0ar.push(smo67226);
const smo67227 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67227.setAttribute('id', 'smo67227');
smo67248v0ar.push(smo67227);
const smo67228 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67228.setAttribute('id', 'smo67228');
smo67248v0ar.push(smo67228);
const smo67229 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67229.setAttribute('id', 'smo67229');
smo67248v0ar.push(smo67229);
const smo67230 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67230.setAttribute('id', 'smo67230');
smo67248v0ar.push(smo67230);
const smo67231 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo67231.setAttribute('id', 'smo67231');
smo67248v0ar.push(smo67231);
const smo67232 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67232.setAttribute('id', 'smo67232');
smo67248v0ar.push(smo67232);
const smo67233 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67233.setAttribute('id', 'smo67233');
smo67248v0ar.push(smo67233);
const smo67234 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67234.setAttribute('id', 'smo67234');
smo67248v0ar.push(smo67234);
smo67248v0.addTickables(smo67248v0ar)
fmtsmo6724874.joinVoices([smo67248v0]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo70211 = smo62216.getStemDirection();
smo62216.setStemDirection(dirsmo70211);
smo62217.setStemDirection(dirsmo70211);
smo62218.setStemDirection(dirsmo70211);
smo62219.setStemDirection(dirsmo70211);
const smo70211 = new VF.Beam([smo62216,smo62217,smo62218,smo62219]);
const dirsmo70212 = smo62220.getStemDirection();
smo62220.setStemDirection(dirsmo70212);
smo62221.setStemDirection(dirsmo70212);
smo62222.setStemDirection(dirsmo70212);
smo62223.setStemDirection(dirsmo70212);
const smo70212 = new VF.Beam([smo62220,smo62221,smo62222,smo62223]);
const dirsmo70213 = smo62224.getStemDirection();
smo62224.setStemDirection(dirsmo70213);
smo62225.setStemDirection(dirsmo70213);
smo62226.setStemDirection(dirsmo70213);
smo62227.setStemDirection(dirsmo70213);
const smo70213 = new VF.Beam([smo62224,smo62225,smo62226,smo62227]);
const dirsmo70214 = smo62228.getStemDirection();
smo62228.setStemDirection(dirsmo70214);
smo62229.setStemDirection(dirsmo70214);
smo62230.setStemDirection(dirsmo70214);
smo62231.setStemDirection(dirsmo70214);
const smo70214 = new VF.Beam([smo62228,smo62229,smo62230,smo62231]);
const dirsmo70216 = smo67219.getStemDirection();
smo67219.setStemDirection(dirsmo70216);
smo67220.setStemDirection(dirsmo70216);
smo67221.setStemDirection(dirsmo70216);
smo67222.setStemDirection(dirsmo70216);
const smo70216 = new VF.Beam([smo67219,smo67220,smo67221,smo67222]);
const dirsmo70217 = smo67223.getStemDirection();
smo67223.setStemDirection(dirsmo70217);
smo67224.setStemDirection(dirsmo70217);
smo67225.setStemDirection(dirsmo70217);
smo67226.setStemDirection(dirsmo70217);
const smo70217 = new VF.Beam([smo67223,smo67224,smo67225,smo67226]);
const dirsmo70218 = smo67227.getStemDirection();
smo67227.setStemDirection(dirsmo70218);
smo67228.setStemDirection(dirsmo70218);
smo67229.setStemDirection(dirsmo70218);
smo67230.setStemDirection(dirsmo70218);
const smo70218 = new VF.Beam([smo67227,smo67228,smo67229,smo67230]);
const dirsmo70219 = smo67231.getStemDirection();
smo67231.setStemDirection(dirsmo70219);
smo67232.setStemDirection(dirsmo70219);
smo67233.setStemDirection(dirsmo70219);
smo67234.setStemDirection(dirsmo70219);
const smo70219 = new VF.Beam([smo67231,smo67232,smo67233,smo67234]);
 
// formatting measures in staff group smo58712
fmtsmo6224574.format([smo62245v0,smo67248v0], 255);
const stavesmo62245 = new VF.Stave(1271, 1537, 269);
stavesmo62245.setAttribute('id', 'stavesmo62245');
stavesmo62245.setBegBarType(VF.Barline.type.NONE);
stavesmo62245.setContext(context);
stavesmo62245.draw();
smo62245v0.draw(context, stavesmo62245);
smo70211.setContext(context);
smo70211.draw();
smo70212.setContext(context);
smo70212.draw();
smo70213.setContext(context);
smo70213.draw();
smo70214.setContext(context);
smo70214.draw();
const stavesmo67248 = new VF.Stave(1271, 1622, 269);
stavesmo67248.setAttribute('id', 'stavesmo67248');
stavesmo67248.setBegBarType(VF.Barline.type.NONE);
stavesmo67248.setContext(context);
stavesmo67248.draw();
smo67248v0.draw(context, stavesmo67248);
smo70216.setContext(context);
smo70216.draw();
smo70217.setContext(context);
smo70217.draw();
smo70218.setContext(context);
smo70218.draw();
smo70219.setContext(context);
smo70219.draw();
const fmtsmo6227575 = new VF.Formatter();
//
// voices and notes for stave 0 75
const smo62275v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62275v0ar = [];
const smo62246 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo62246.setAttribute('id', 'smo62246');
smo62275v0ar.push(smo62246);
const smo62247 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/3/n"]}'))
smo62247.setAttribute('id', 'smo62247');
smo62275v0ar.push(smo62247);
const smo62248 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["ab/3/n"]}'))
smo62248.setAttribute('id', 'smo62248');
smo62275v0ar.push(smo62248);
const smo62249 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/3/n"]}'))
smo62249.setAttribute('id', 'smo62249');
smo62275v0ar.push(smo62249);
const smo62250 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo62250.setAttribute('id', 'smo62250');
smo62275v0ar.push(smo62250);
const smo62251 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/3/n"]}'))
smo62251.setAttribute('id', 'smo62251');
smo62275v0ar.push(smo62251);
const smo62252 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["ab/3/n"]}'))
smo62252.setAttribute('id', 'smo62252');
smo62275v0ar.push(smo62252);
const smo62253 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/3/n"]}'))
smo62253.setAttribute('id', 'smo62253');
smo62275v0ar.push(smo62253);
const smo62254 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo62254.setAttribute('id', 'smo62254');
smo62275v0ar.push(smo62254);
const smo62255 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/3/n"]}'))
smo62255.setAttribute('id', 'smo62255');
smo62275v0ar.push(smo62255);
const smo62256 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["ab/3/n"]}'))
smo62256.setAttribute('id', 'smo62256');
smo62275v0ar.push(smo62256);
const smo62257 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/3/n"]}'))
smo62257.setAttribute('id', 'smo62257');
smo62275v0ar.push(smo62257);
const smo62258 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo62258.setAttribute('id', 'smo62258');
smo62275v0ar.push(smo62258);
const smo62259 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/3/n"]}'))
smo62259.setAttribute('id', 'smo62259');
smo62275v0ar.push(smo62259);
const smo62260 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["ab/3/n"]}'))
smo62260.setAttribute('id', 'smo62260');
smo62275v0ar.push(smo62260);
const smo62261 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/3/n"]}'))
smo62261.setAttribute('id', 'smo62261');
smo62275v0ar.push(smo62261);
smo62275v0.addTickables(smo62275v0ar)
fmtsmo6227575.joinVoices([smo62275v0]);
const fmtsmo6727875 = new VF.Formatter();
//
// voices and notes for stave 1 75
const smo67278v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67278v0ar = [];
const smo67249 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67249.setAttribute('id', 'smo67249');
smo67278v0ar.push(smo67249);
const smo67250 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo67250.setAttribute('id', 'smo67250');
smo67278v0ar.push(smo67250);
const smo67251 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67251.setAttribute('id', 'smo67251');
smo67278v0ar.push(smo67251);
const smo67252 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo67252.setAttribute('id', 'smo67252');
smo67278v0ar.push(smo67252);
const smo67253 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo67253.setAttribute('id', 'smo67253');
smo67278v0ar.push(smo67253);
const smo67254 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo67254.setAttribute('id', 'smo67254');
smo67278v0ar.push(smo67254);
const smo67255 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67255.setAttribute('id', 'smo67255');
smo67278v0ar.push(smo67255);
const smo67256 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo67256.setAttribute('id', 'smo67256');
smo67278v0ar.push(smo67256);
const smo67257 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67257.setAttribute('id', 'smo67257');
smo67278v0ar.push(smo67257);
const smo67258 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo67258.setAttribute('id', 'smo67258');
smo67278v0ar.push(smo67258);
const smo67259 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67259.setAttribute('id', 'smo67259');
smo67278v0ar.push(smo67259);
const smo67260 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo67260.setAttribute('id', 'smo67260');
smo67278v0ar.push(smo67260);
const smo67261 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo67261.setAttribute('id', 'smo67261');
smo67278v0ar.push(smo67261);
const smo67262 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo67262.setAttribute('id', 'smo67262');
smo67278v0ar.push(smo67262);
const smo67263 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67263.setAttribute('id', 'smo67263');
smo67278v0ar.push(smo67263);
const smo67264 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo67264.setAttribute('id', 'smo67264');
smo67278v0ar.push(smo67264);
smo67278v0.addTickables(smo67278v0ar)
fmtsmo6727875.joinVoices([smo67278v0]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo70223 = smo62246.getStemDirection();
smo62246.setStemDirection(dirsmo70223);
smo62247.setStemDirection(dirsmo70223);
smo62248.setStemDirection(dirsmo70223);
smo62249.setStemDirection(dirsmo70223);
const smo70223 = new VF.Beam([smo62246,smo62247,smo62248,smo62249]);
const dirsmo70224 = smo62250.getStemDirection();
smo62250.setStemDirection(dirsmo70224);
smo62251.setStemDirection(dirsmo70224);
smo62252.setStemDirection(dirsmo70224);
smo62253.setStemDirection(dirsmo70224);
const smo70224 = new VF.Beam([smo62250,smo62251,smo62252,smo62253]);
const dirsmo70225 = smo62254.getStemDirection();
smo62254.setStemDirection(dirsmo70225);
smo62255.setStemDirection(dirsmo70225);
smo62256.setStemDirection(dirsmo70225);
smo62257.setStemDirection(dirsmo70225);
const smo70225 = new VF.Beam([smo62254,smo62255,smo62256,smo62257]);
const dirsmo70226 = smo62258.getStemDirection();
smo62258.setStemDirection(dirsmo70226);
smo62259.setStemDirection(dirsmo70226);
smo62260.setStemDirection(dirsmo70226);
smo62261.setStemDirection(dirsmo70226);
const smo70226 = new VF.Beam([smo62258,smo62259,smo62260,smo62261]);
const dirsmo70228 = smo67249.getStemDirection();
smo67249.setStemDirection(dirsmo70228);
smo67250.setStemDirection(dirsmo70228);
smo67251.setStemDirection(dirsmo70228);
smo67252.setStemDirection(dirsmo70228);
const smo70228 = new VF.Beam([smo67249,smo67250,smo67251,smo67252]);
const dirsmo70229 = smo67253.getStemDirection();
smo67253.setStemDirection(dirsmo70229);
smo67254.setStemDirection(dirsmo70229);
smo67255.setStemDirection(dirsmo70229);
smo67256.setStemDirection(dirsmo70229);
const smo70229 = new VF.Beam([smo67253,smo67254,smo67255,smo67256]);
const dirsmo70230 = smo67257.getStemDirection();
smo67257.setStemDirection(dirsmo70230);
smo67258.setStemDirection(dirsmo70230);
smo67259.setStemDirection(dirsmo70230);
smo67260.setStemDirection(dirsmo70230);
const smo70230 = new VF.Beam([smo67257,smo67258,smo67259,smo67260]);
const dirsmo70231 = smo67261.getStemDirection();
smo67261.setStemDirection(dirsmo70231);
smo67262.setStemDirection(dirsmo70231);
smo67263.setStemDirection(dirsmo70231);
smo67264.setStemDirection(dirsmo70231);
const smo70231 = new VF.Beam([smo67261,smo67262,smo67263,smo67264]);
 
// formatting measures in staff group smo58712
fmtsmo6227575.format([smo62275v0,smo67278v0], 255);
const stavesmo62275 = new VF.Stave(1540, 1537, 269);
stavesmo62275.setAttribute('id', 'stavesmo62275');
stavesmo62275.setBegBarType(VF.Barline.type.NONE);
stavesmo62275.setContext(context);
stavesmo62275.draw();
smo62275v0.draw(context, stavesmo62275);
smo70223.setContext(context);
smo70223.draw();
smo70224.setContext(context);
smo70224.draw();
smo70225.setContext(context);
smo70225.draw();
smo70226.setContext(context);
smo70226.draw();
const stavesmo67278 = new VF.Stave(1540, 1622, 269);
stavesmo67278.setAttribute('id', 'stavesmo67278');
stavesmo67278.setBegBarType(VF.Barline.type.NONE);
stavesmo67278.setContext(context);
stavesmo67278.draw();
smo67278v0.draw(context, stavesmo67278);
smo70228.setContext(context);
smo70228.draw();
smo70229.setContext(context);
smo70229.draw();
smo70230.setContext(context);
smo70230.draw();
smo70231.setContext(context);
smo70231.draw();
const rightsmo58712stavesmo622751 = new VF.StaveConnector(stavesmo62275, stavesmo67278).setType(0);
rightsmo58712stavesmo622751.setContext(context).draw();
const fmtsmo6230576 = new VF.Formatter();
//
// voices and notes for stave 0 76
const smo62305v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62305v0ar = [];
const smo62276 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo62276.setAttribute('id', 'smo62276');
smo62305v0ar.push(smo62276);
const smo62277 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62277.setAttribute('id', 'smo62277');
smo62305v0ar.push(smo62277);
const smo62278 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/3/n"]}'))
smo62278.setAttribute('id', 'smo62278');
smo62305v0ar.push(smo62278);
const smo62279 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62279.setAttribute('id', 'smo62279');
smo62305v0ar.push(smo62279);
const smo62280 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo62280.setAttribute('id', 'smo62280');
const smo622800acc = new VF.Accidental('n');
smo62280.addModifier(smo622800acc, 0);
smo62305v0ar.push(smo62280);
const smo62281 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62281.setAttribute('id', 'smo62281');
smo62305v0ar.push(smo62281);
const smo62282 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/3/n"]}'))
smo62282.setAttribute('id', 'smo62282');
smo62305v0ar.push(smo62282);
const smo62283 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62283.setAttribute('id', 'smo62283');
smo62305v0ar.push(smo62283);
const smo62284 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo62284.setAttribute('id', 'smo62284');
smo62305v0ar.push(smo62284);
const smo62285 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62285.setAttribute('id', 'smo62285');
smo62305v0ar.push(smo62285);
const smo62286 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/3/n"]}'))
smo62286.setAttribute('id', 'smo62286');
smo62305v0ar.push(smo62286);
const smo62287 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62287.setAttribute('id', 'smo62287');
smo62305v0ar.push(smo62287);
const smo62288 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo62288.setAttribute('id', 'smo62288');
smo62305v0ar.push(smo62288);
const smo62289 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62289.setAttribute('id', 'smo62289');
smo62305v0ar.push(smo62289);
const smo62290 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/3/n"]}'))
smo62290.setAttribute('id', 'smo62290');
smo62305v0ar.push(smo62290);
const smo62291 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62291.setAttribute('id', 'smo62291');
smo62305v0ar.push(smo62291);
smo62305v0.addTickables(smo62305v0ar)
fmtsmo6230576.joinVoices([smo62305v0]);
const fmtsmo6730876 = new VF.Formatter();
//
// voices and notes for stave 1 76
const smo67308v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67308v0ar = [];
const smo67279 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67279.setAttribute('id', 'smo67279');
smo67308v0ar.push(smo67279);
const smo67280 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo67280.setAttribute('id', 'smo67280');
const smo672800acc = new VF.Accidental('n');
smo67280.addModifier(smo672800acc, 0);
smo67308v0ar.push(smo67280);
const smo67281 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo67281.setAttribute('id', 'smo67281');
smo67308v0ar.push(smo67281);
const smo67282 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo67282.setAttribute('id', 'smo67282');
smo67308v0ar.push(smo67282);
const smo67283 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67283.setAttribute('id', 'smo67283');
smo67308v0ar.push(smo67283);
const smo67284 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo67284.setAttribute('id', 'smo67284');
smo67308v0ar.push(smo67284);
const smo67285 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo67285.setAttribute('id', 'smo67285');
smo67308v0ar.push(smo67285);
const smo67286 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo67286.setAttribute('id', 'smo67286');
smo67308v0ar.push(smo67286);
const smo67287 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67287.setAttribute('id', 'smo67287');
smo67308v0ar.push(smo67287);
const smo67288 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo67288.setAttribute('id', 'smo67288');
smo67308v0ar.push(smo67288);
const smo67289 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo67289.setAttribute('id', 'smo67289');
smo67308v0ar.push(smo67289);
const smo67290 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo67290.setAttribute('id', 'smo67290');
smo67308v0ar.push(smo67290);
const smo67291 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67291.setAttribute('id', 'smo67291');
smo67308v0ar.push(smo67291);
const smo67292 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo67292.setAttribute('id', 'smo67292');
smo67308v0ar.push(smo67292);
const smo67293 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo67293.setAttribute('id', 'smo67293');
smo67308v0ar.push(smo67293);
const smo67294 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo67294.setAttribute('id', 'smo67294');
smo67308v0ar.push(smo67294);
smo67308v0.addTickables(smo67308v0ar)
fmtsmo6730876.joinVoices([smo67308v0]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo70247 = smo62276.getStemDirection();
smo62276.setStemDirection(dirsmo70247);
smo62277.setStemDirection(dirsmo70247);
smo62278.setStemDirection(dirsmo70247);
smo62279.setStemDirection(dirsmo70247);
const smo70247 = new VF.Beam([smo62276,smo62277,smo62278,smo62279]);
const dirsmo70248 = smo62280.getStemDirection();
smo62280.setStemDirection(dirsmo70248);
smo62281.setStemDirection(dirsmo70248);
smo62282.setStemDirection(dirsmo70248);
smo62283.setStemDirection(dirsmo70248);
const smo70248 = new VF.Beam([smo62280,smo62281,smo62282,smo62283]);
const dirsmo70249 = smo62284.getStemDirection();
smo62284.setStemDirection(dirsmo70249);
smo62285.setStemDirection(dirsmo70249);
smo62286.setStemDirection(dirsmo70249);
smo62287.setStemDirection(dirsmo70249);
const smo70249 = new VF.Beam([smo62284,smo62285,smo62286,smo62287]);
const dirsmo70250 = smo62288.getStemDirection();
smo62288.setStemDirection(dirsmo70250);
smo62289.setStemDirection(dirsmo70250);
smo62290.setStemDirection(dirsmo70250);
smo62291.setStemDirection(dirsmo70250);
const smo70250 = new VF.Beam([smo62288,smo62289,smo62290,smo62291]);
const dirsmo70252 = smo67279.getStemDirection();
smo67279.setStemDirection(dirsmo70252);
smo67280.setStemDirection(dirsmo70252);
smo67281.setStemDirection(dirsmo70252);
smo67282.setStemDirection(dirsmo70252);
const smo70252 = new VF.Beam([smo67279,smo67280,smo67281,smo67282]);
const dirsmo70253 = smo67283.getStemDirection();
smo67283.setStemDirection(dirsmo70253);
smo67284.setStemDirection(dirsmo70253);
smo67285.setStemDirection(dirsmo70253);
smo67286.setStemDirection(dirsmo70253);
const smo70253 = new VF.Beam([smo67283,smo67284,smo67285,smo67286]);
const dirsmo70254 = smo67287.getStemDirection();
smo67287.setStemDirection(dirsmo70254);
smo67288.setStemDirection(dirsmo70254);
smo67289.setStemDirection(dirsmo70254);
smo67290.setStemDirection(dirsmo70254);
const smo70254 = new VF.Beam([smo67287,smo67288,smo67289,smo67290]);
const dirsmo70255 = smo67291.getStemDirection();
smo67291.setStemDirection(dirsmo70255);
smo67292.setStemDirection(dirsmo70255);
smo67293.setStemDirection(dirsmo70255);
smo67294.setStemDirection(dirsmo70255);
const smo70255 = new VF.Beam([smo67291,smo67292,smo67293,smo67294]);
 
// formatting measures in staff group smo58712
fmtsmo6230576.format([smo62305v0,smo67308v0], 351);
const stavesmo62305 = new VF.Stave(90, 1749, 434);
stavesmo62305.setAttribute('id', 'stavesmo62305');
stavesmo62305.setBegBarType(1);
stavesmo62305.addClef('treble');
const keysmo62305 = new VF.KeySignature('Eb');
keysmo62305.addToStave(stavesmo62305);
stavesmo62305.setContext(context);
stavesmo62305.draw();
smo62305v0.draw(context, stavesmo62305);
smo70247.setContext(context);
smo70247.draw();
smo70248.setContext(context);
smo70248.draw();
smo70249.setContext(context);
smo70249.draw();
smo70250.setContext(context);
smo70250.draw();
const stavesmo67308 = new VF.Stave(90, 1845, 434);
stavesmo67308.setAttribute('id', 'stavesmo67308');
stavesmo67308.setBegBarType(1);
stavesmo67308.addClef('bass');
const keysmo67308 = new VF.KeySignature('Eb');
keysmo67308.addToStave(stavesmo67308);
stavesmo67308.setContext(context);
stavesmo67308.draw();
smo67308v0.draw(context, stavesmo67308);
smo70252.setContext(context);
smo70252.draw();
smo70253.setContext(context);
smo70253.draw();
smo70254.setContext(context);
smo70254.draw();
smo70255.setContext(context);
smo70255.draw();
const leftsmo58712stavesmo623051 = new VF.StaveConnector(stavesmo62305, stavesmo67308).setType(3);
leftsmo58712stavesmo623051.setContext(context).draw();
const fmtsmo6233577 = new VF.Formatter();
//
// voices and notes for stave 0 77
const smo62335v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62335v0ar = [];
const smo62306 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo62306.setAttribute('id', 'smo62306');
smo62335v0ar.push(smo62306);
const smo62307 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62307.setAttribute('id', 'smo62307');
smo62335v0ar.push(smo62307);
const smo62308 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62308.setAttribute('id', 'smo62308');
smo62335v0ar.push(smo62308);
const smo62309 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62309.setAttribute('id', 'smo62309');
smo62335v0ar.push(smo62309);
const smo62310 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo62310.setAttribute('id', 'smo62310');
const smo623100acc = new VF.Accidental('n');
smo62310.addModifier(smo623100acc, 0);
smo62335v0ar.push(smo62310);
const smo62311 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62311.setAttribute('id', 'smo62311');
smo62335v0ar.push(smo62311);
const smo62312 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62312.setAttribute('id', 'smo62312');
smo62335v0ar.push(smo62312);
const smo62313 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62313.setAttribute('id', 'smo62313');
smo62335v0ar.push(smo62313);
const smo62314 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo62314.setAttribute('id', 'smo62314');
smo62335v0ar.push(smo62314);
const smo62315 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62315.setAttribute('id', 'smo62315');
smo62335v0ar.push(smo62315);
const smo62316 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62316.setAttribute('id', 'smo62316');
smo62335v0ar.push(smo62316);
const smo62317 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62317.setAttribute('id', 'smo62317');
smo62335v0ar.push(smo62317);
const smo62318 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo62318.setAttribute('id', 'smo62318');
smo62335v0ar.push(smo62318);
const smo62319 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62319.setAttribute('id', 'smo62319');
smo62335v0ar.push(smo62319);
const smo62320 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62320.setAttribute('id', 'smo62320');
smo62335v0ar.push(smo62320);
const smo62321 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62321.setAttribute('id', 'smo62321');
smo62335v0ar.push(smo62321);
smo62335v0.addTickables(smo62335v0ar)
fmtsmo6233577.joinVoices([smo62335v0]);
const fmtsmo6733877 = new VF.Formatter();
//
// voices and notes for stave 1 77
const smo67338v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67338v0ar = [];
const smo67309 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67309.setAttribute('id', 'smo67309');
smo67338v0ar.push(smo67309);
const smo67310 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67310.setAttribute('id', 'smo67310');
smo67338v0ar.push(smo67310);
const smo67311 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67311.setAttribute('id', 'smo67311');
smo67338v0ar.push(smo67311);
const smo67312 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67312.setAttribute('id', 'smo67312');
smo67338v0ar.push(smo67312);
const smo67313 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo67313.setAttribute('id', 'smo67313');
smo67338v0ar.push(smo67313);
const smo67314 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67314.setAttribute('id', 'smo67314');
smo67338v0ar.push(smo67314);
const smo67315 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67315.setAttribute('id', 'smo67315');
smo67338v0ar.push(smo67315);
const smo67316 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67316.setAttribute('id', 'smo67316');
smo67338v0ar.push(smo67316);
const smo67317 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67317.setAttribute('id', 'smo67317');
smo67338v0ar.push(smo67317);
const smo67318 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67318.setAttribute('id', 'smo67318');
smo67338v0ar.push(smo67318);
const smo67319 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67319.setAttribute('id', 'smo67319');
smo67338v0ar.push(smo67319);
const smo67320 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67320.setAttribute('id', 'smo67320');
smo67338v0ar.push(smo67320);
const smo67321 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo67321.setAttribute('id', 'smo67321');
smo67338v0ar.push(smo67321);
const smo67322 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67322.setAttribute('id', 'smo67322');
smo67338v0ar.push(smo67322);
const smo67323 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67323.setAttribute('id', 'smo67323');
smo67338v0ar.push(smo67323);
const smo67324 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67324.setAttribute('id', 'smo67324');
smo67338v0ar.push(smo67324);
smo67338v0.addTickables(smo67338v0ar)
fmtsmo6733877.joinVoices([smo67338v0]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo70259 = smo62306.getStemDirection();
smo62306.setStemDirection(dirsmo70259);
smo62307.setStemDirection(dirsmo70259);
smo62308.setStemDirection(dirsmo70259);
smo62309.setStemDirection(dirsmo70259);
const smo70259 = new VF.Beam([smo62306,smo62307,smo62308,smo62309]);
const dirsmo70260 = smo62310.getStemDirection();
smo62310.setStemDirection(dirsmo70260);
smo62311.setStemDirection(dirsmo70260);
smo62312.setStemDirection(dirsmo70260);
smo62313.setStemDirection(dirsmo70260);
const smo70260 = new VF.Beam([smo62310,smo62311,smo62312,smo62313]);
const dirsmo70261 = smo62314.getStemDirection();
smo62314.setStemDirection(dirsmo70261);
smo62315.setStemDirection(dirsmo70261);
smo62316.setStemDirection(dirsmo70261);
smo62317.setStemDirection(dirsmo70261);
const smo70261 = new VF.Beam([smo62314,smo62315,smo62316,smo62317]);
const dirsmo70262 = smo62318.getStemDirection();
smo62318.setStemDirection(dirsmo70262);
smo62319.setStemDirection(dirsmo70262);
smo62320.setStemDirection(dirsmo70262);
smo62321.setStemDirection(dirsmo70262);
const smo70262 = new VF.Beam([smo62318,smo62319,smo62320,smo62321]);
const dirsmo70264 = smo67309.getStemDirection();
smo67309.setStemDirection(dirsmo70264);
smo67310.setStemDirection(dirsmo70264);
smo67311.setStemDirection(dirsmo70264);
smo67312.setStemDirection(dirsmo70264);
const smo70264 = new VF.Beam([smo67309,smo67310,smo67311,smo67312]);
const dirsmo70265 = smo67313.getStemDirection();
smo67313.setStemDirection(dirsmo70265);
smo67314.setStemDirection(dirsmo70265);
smo67315.setStemDirection(dirsmo70265);
smo67316.setStemDirection(dirsmo70265);
const smo70265 = new VF.Beam([smo67313,smo67314,smo67315,smo67316]);
const dirsmo70266 = smo67317.getStemDirection();
smo67317.setStemDirection(dirsmo70266);
smo67318.setStemDirection(dirsmo70266);
smo67319.setStemDirection(dirsmo70266);
smo67320.setStemDirection(dirsmo70266);
const smo70266 = new VF.Beam([smo67317,smo67318,smo67319,smo67320]);
const dirsmo70267 = smo67321.getStemDirection();
smo67321.setStemDirection(dirsmo70267);
smo67322.setStemDirection(dirsmo70267);
smo67323.setStemDirection(dirsmo70267);
smo67324.setStemDirection(dirsmo70267);
const smo70267 = new VF.Beam([smo67321,smo67322,smo67323,smo67324]);
 
// formatting measures in staff group smo58712
fmtsmo6233577.format([smo62335v0,smo67338v0], 291);
const stavesmo62335 = new VF.Stave(524, 1749, 305);
stavesmo62335.setAttribute('id', 'stavesmo62335');
stavesmo62335.setBegBarType(VF.Barline.type.NONE);
stavesmo62335.setContext(context);
stavesmo62335.draw();
smo62335v0.draw(context, stavesmo62335);
smo70259.setContext(context);
smo70259.draw();
smo70260.setContext(context);
smo70260.draw();
smo70261.setContext(context);
smo70261.draw();
smo70262.setContext(context);
smo70262.draw();
const stavesmo67338 = new VF.Stave(524, 1845, 305);
stavesmo67338.setAttribute('id', 'stavesmo67338');
stavesmo67338.setBegBarType(VF.Barline.type.NONE);
stavesmo67338.setContext(context);
stavesmo67338.draw();
smo67338v0.draw(context, stavesmo67338);
smo70264.setContext(context);
smo70264.draw();
smo70265.setContext(context);
smo70265.draw();
smo70266.setContext(context);
smo70266.draw();
smo70267.setContext(context);
smo70267.draw();
const fmtsmo6236578 = new VF.Formatter();
//
// voices and notes for stave 0 78
const smo62365v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62365v0ar = [];
const smo62336 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo62336.setAttribute('id', 'smo62336');
smo62365v0ar.push(smo62336);
const smo62337 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62337.setAttribute('id', 'smo62337');
smo62365v0ar.push(smo62337);
const smo62338 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62338.setAttribute('id', 'smo62338');
smo62365v0ar.push(smo62338);
const smo62339 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62339.setAttribute('id', 'smo62339');
smo62365v0ar.push(smo62339);
const smo62340 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo62340.setAttribute('id', 'smo62340');
const smo623400acc = new VF.Accidental('n');
smo62340.addModifier(smo623400acc, 0);
smo62365v0ar.push(smo62340);
const smo62341 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62341.setAttribute('id', 'smo62341');
smo62365v0ar.push(smo62341);
const smo62342 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62342.setAttribute('id', 'smo62342');
smo62365v0ar.push(smo62342);
const smo62343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62343.setAttribute('id', 'smo62343');
smo62365v0ar.push(smo62343);
const smo62344 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo62344.setAttribute('id', 'smo62344');
smo62365v0ar.push(smo62344);
const smo62345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62345.setAttribute('id', 'smo62345');
smo62365v0ar.push(smo62345);
const smo62346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62346.setAttribute('id', 'smo62346');
smo62365v0ar.push(smo62346);
const smo62347 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62347.setAttribute('id', 'smo62347');
smo62365v0ar.push(smo62347);
const smo62348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo62348.setAttribute('id', 'smo62348');
smo62365v0ar.push(smo62348);
const smo62349 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62349.setAttribute('id', 'smo62349');
smo62365v0ar.push(smo62349);
const smo62350 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62350.setAttribute('id', 'smo62350');
smo62365v0ar.push(smo62350);
const smo62351 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62351.setAttribute('id', 'smo62351');
smo62365v0ar.push(smo62351);
smo62365v0.addTickables(smo62365v0ar)
fmtsmo6236578.joinVoices([smo62365v0]);
const fmtsmo6736878 = new VF.Formatter();
//
// voices and notes for stave 1 78
const smo67368v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67368v0ar = [];
const smo67339 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo67339.setAttribute('id', 'smo67339');
smo67368v0ar.push(smo67339);
const smo67340 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67340.setAttribute('id', 'smo67340');
smo67368v0ar.push(smo67340);
const smo67341 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo67341.setAttribute('id', 'smo67341');
const smo673410acc = new VF.Accidental('n');
smo67341.addModifier(smo673410acc, 0);
smo67368v0ar.push(smo67341);
const smo67342 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67342.setAttribute('id', 'smo67342');
smo67368v0ar.push(smo67342);
const smo67343 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo67343.setAttribute('id', 'smo67343');
smo67368v0ar.push(smo67343);
const smo67344 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67344.setAttribute('id', 'smo67344');
smo67368v0ar.push(smo67344);
const smo67345 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo67345.setAttribute('id', 'smo67345');
smo67368v0ar.push(smo67345);
const smo67346 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67346.setAttribute('id', 'smo67346');
smo67368v0ar.push(smo67346);
const smo67347 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo67347.setAttribute('id', 'smo67347');
smo67368v0ar.push(smo67347);
const smo67348 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67348.setAttribute('id', 'smo67348');
smo67368v0ar.push(smo67348);
const smo67349 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo67349.setAttribute('id', 'smo67349');
smo67368v0ar.push(smo67349);
const smo67350 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67350.setAttribute('id', 'smo67350');
smo67368v0ar.push(smo67350);
const smo67351 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo67351.setAttribute('id', 'smo67351');
smo67368v0ar.push(smo67351);
const smo67352 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67352.setAttribute('id', 'smo67352');
smo67368v0ar.push(smo67352);
const smo67353 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo67353.setAttribute('id', 'smo67353');
smo67368v0ar.push(smo67353);
const smo67354 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67354.setAttribute('id', 'smo67354');
smo67368v0ar.push(smo67354);
smo67368v0.addTickables(smo67368v0ar)
fmtsmo6736878.joinVoices([smo67368v0]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo70271 = smo62336.getStemDirection();
smo62336.setStemDirection(dirsmo70271);
smo62337.setStemDirection(dirsmo70271);
smo62338.setStemDirection(dirsmo70271);
smo62339.setStemDirection(dirsmo70271);
const smo70271 = new VF.Beam([smo62336,smo62337,smo62338,smo62339]);
const dirsmo70272 = smo62340.getStemDirection();
smo62340.setStemDirection(dirsmo70272);
smo62341.setStemDirection(dirsmo70272);
smo62342.setStemDirection(dirsmo70272);
smo62343.setStemDirection(dirsmo70272);
const smo70272 = new VF.Beam([smo62340,smo62341,smo62342,smo62343]);
const dirsmo70273 = smo62344.getStemDirection();
smo62344.setStemDirection(dirsmo70273);
smo62345.setStemDirection(dirsmo70273);
smo62346.setStemDirection(dirsmo70273);
smo62347.setStemDirection(dirsmo70273);
const smo70273 = new VF.Beam([smo62344,smo62345,smo62346,smo62347]);
const dirsmo70274 = smo62348.getStemDirection();
smo62348.setStemDirection(dirsmo70274);
smo62349.setStemDirection(dirsmo70274);
smo62350.setStemDirection(dirsmo70274);
smo62351.setStemDirection(dirsmo70274);
const smo70274 = new VF.Beam([smo62348,smo62349,smo62350,smo62351]);
const dirsmo70276 = smo67339.getStemDirection();
smo67339.setStemDirection(dirsmo70276);
smo67340.setStemDirection(dirsmo70276);
smo67341.setStemDirection(dirsmo70276);
smo67342.setStemDirection(dirsmo70276);
const smo70276 = new VF.Beam([smo67339,smo67340,smo67341,smo67342]);
const dirsmo70277 = smo67343.getStemDirection();
smo67343.setStemDirection(dirsmo70277);
smo67344.setStemDirection(dirsmo70277);
smo67345.setStemDirection(dirsmo70277);
smo67346.setStemDirection(dirsmo70277);
const smo70277 = new VF.Beam([smo67343,smo67344,smo67345,smo67346]);
const dirsmo70278 = smo67347.getStemDirection();
smo67347.setStemDirection(dirsmo70278);
smo67348.setStemDirection(dirsmo70278);
smo67349.setStemDirection(dirsmo70278);
smo67350.setStemDirection(dirsmo70278);
const smo70278 = new VF.Beam([smo67347,smo67348,smo67349,smo67350]);
const dirsmo70279 = smo67351.getStemDirection();
smo67351.setStemDirection(dirsmo70279);
smo67352.setStemDirection(dirsmo70279);
smo67353.setStemDirection(dirsmo70279);
smo67354.setStemDirection(dirsmo70279);
const smo70279 = new VF.Beam([smo67351,smo67352,smo67353,smo67354]);
 
// formatting measures in staff group smo58712
fmtsmo6236578.format([smo62365v0,smo67368v0], 322);
const stavesmo62365 = new VF.Stave(829, 1749, 336);
stavesmo62365.setAttribute('id', 'stavesmo62365');
stavesmo62365.setBegBarType(VF.Barline.type.NONE);
stavesmo62365.setContext(context);
stavesmo62365.draw();
smo62365v0.draw(context, stavesmo62365);
smo70271.setContext(context);
smo70271.draw();
smo70272.setContext(context);
smo70272.draw();
smo70273.setContext(context);
smo70273.draw();
smo70274.setContext(context);
smo70274.draw();
const stavesmo67368 = new VF.Stave(829, 1845, 336);
stavesmo67368.setAttribute('id', 'stavesmo67368');
stavesmo67368.setBegBarType(VF.Barline.type.NONE);
stavesmo67368.setContext(context);
stavesmo67368.draw();
smo67368v0.draw(context, stavesmo67368);
smo70276.setContext(context);
smo70276.draw();
smo70277.setContext(context);
smo70277.draw();
smo70278.setContext(context);
smo70278.draw();
smo70279.setContext(context);
smo70279.draw();
const fmtsmo6239579 = new VF.Formatter();
//
// voices and notes for stave 0 79
const smo62395v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62395v0ar = [];
const smo62366 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo62366.setAttribute('id', 'smo62366');
smo62395v0ar.push(smo62366);
const smo62367 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62367.setAttribute('id', 'smo62367');
smo62395v0ar.push(smo62367);
const smo62368 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo62368.setAttribute('id', 'smo62368');
const smo623680acc = new VF.Accidental('n');
smo62368.addModifier(smo623680acc, 0);
smo62395v0ar.push(smo62368);
const smo62369 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62369.setAttribute('id', 'smo62369');
smo62395v0ar.push(smo62369);
const smo62370 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo62370.setAttribute('id', 'smo62370');
smo62395v0ar.push(smo62370);
const smo62371 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62371.setAttribute('id', 'smo62371');
smo62395v0ar.push(smo62371);
const smo62372 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo62372.setAttribute('id', 'smo62372');
smo62395v0ar.push(smo62372);
const smo62373 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62373.setAttribute('id', 'smo62373');
smo62395v0ar.push(smo62373);
const smo62374 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo62374.setAttribute('id', 'smo62374');
smo62395v0ar.push(smo62374);
const smo62375 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62375.setAttribute('id', 'smo62375');
smo62395v0ar.push(smo62375);
const smo62376 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo62376.setAttribute('id', 'smo62376');
smo62395v0ar.push(smo62376);
const smo62377 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62377.setAttribute('id', 'smo62377');
smo62395v0ar.push(smo62377);
const smo62378 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo62378.setAttribute('id', 'smo62378');
smo62395v0ar.push(smo62378);
const smo62379 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62379.setAttribute('id', 'smo62379');
smo62395v0ar.push(smo62379);
const smo62380 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo62380.setAttribute('id', 'smo62380');
smo62395v0ar.push(smo62380);
const smo62381 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62381.setAttribute('id', 'smo62381');
smo62395v0ar.push(smo62381);
smo62395v0.addTickables(smo62395v0ar)
fmtsmo6239579.joinVoices([smo62395v0]);
const fmtsmo6739879 = new VF.Formatter();
//
// voices and notes for stave 1 79
const smo67398v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67398v0ar = [];
const smo67369 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo67369.setAttribute('id', 'smo67369');
smo67398v0ar.push(smo67369);
const smo67370 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67370.setAttribute('id', 'smo67370');
smo67398v0ar.push(smo67370);
const smo67371 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67371.setAttribute('id', 'smo67371');
smo67398v0ar.push(smo67371);
const smo67372 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67372.setAttribute('id', 'smo67372');
smo67398v0ar.push(smo67372);
const smo67373 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67373.setAttribute('id', 'smo67373');
smo67398v0ar.push(smo67373);
const smo67374 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67374.setAttribute('id', 'smo67374');
smo67398v0ar.push(smo67374);
const smo67375 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67375.setAttribute('id', 'smo67375');
smo67398v0ar.push(smo67375);
const smo67376 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67376.setAttribute('id', 'smo67376');
smo67398v0ar.push(smo67376);
const smo67377 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo67377.setAttribute('id', 'smo67377');
smo67398v0ar.push(smo67377);
const smo67378 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67378.setAttribute('id', 'smo67378');
smo67398v0ar.push(smo67378);
const smo67379 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67379.setAttribute('id', 'smo67379');
smo67398v0ar.push(smo67379);
const smo67380 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67380.setAttribute('id', 'smo67380');
smo67398v0ar.push(smo67380);
const smo67381 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67381.setAttribute('id', 'smo67381');
smo67398v0ar.push(smo67381);
const smo67382 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67382.setAttribute('id', 'smo67382');
smo67398v0ar.push(smo67382);
const smo67383 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67383.setAttribute('id', 'smo67383');
smo67398v0ar.push(smo67383);
const smo67384 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67384.setAttribute('id', 'smo67384');
smo67398v0ar.push(smo67384);
smo67398v0.addTickables(smo67398v0ar)
fmtsmo6739879.joinVoices([smo67398v0]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo70283 = smo62366.getStemDirection();
smo62366.setStemDirection(dirsmo70283);
smo62367.setStemDirection(dirsmo70283);
smo62368.setStemDirection(dirsmo70283);
smo62369.setStemDirection(dirsmo70283);
const smo70283 = new VF.Beam([smo62366,smo62367,smo62368,smo62369]);
const dirsmo70284 = smo62370.getStemDirection();
smo62370.setStemDirection(dirsmo70284);
smo62371.setStemDirection(dirsmo70284);
smo62372.setStemDirection(dirsmo70284);
smo62373.setStemDirection(dirsmo70284);
const smo70284 = new VF.Beam([smo62370,smo62371,smo62372,smo62373]);
const dirsmo70285 = smo62374.getStemDirection();
smo62374.setStemDirection(dirsmo70285);
smo62375.setStemDirection(dirsmo70285);
smo62376.setStemDirection(dirsmo70285);
smo62377.setStemDirection(dirsmo70285);
const smo70285 = new VF.Beam([smo62374,smo62375,smo62376,smo62377]);
const dirsmo70286 = smo62378.getStemDirection();
smo62378.setStemDirection(dirsmo70286);
smo62379.setStemDirection(dirsmo70286);
smo62380.setStemDirection(dirsmo70286);
smo62381.setStemDirection(dirsmo70286);
const smo70286 = new VF.Beam([smo62378,smo62379,smo62380,smo62381]);
const dirsmo70288 = smo67369.getStemDirection();
smo67369.setStemDirection(dirsmo70288);
smo67370.setStemDirection(dirsmo70288);
smo67371.setStemDirection(dirsmo70288);
smo67372.setStemDirection(dirsmo70288);
const smo70288 = new VF.Beam([smo67369,smo67370,smo67371,smo67372]);
const dirsmo70289 = smo67373.getStemDirection();
smo67373.setStemDirection(dirsmo70289);
smo67374.setStemDirection(dirsmo70289);
smo67375.setStemDirection(dirsmo70289);
smo67376.setStemDirection(dirsmo70289);
const smo70289 = new VF.Beam([smo67373,smo67374,smo67375,smo67376]);
const dirsmo70290 = smo67377.getStemDirection();
smo67377.setStemDirection(dirsmo70290);
smo67378.setStemDirection(dirsmo70290);
smo67379.setStemDirection(dirsmo70290);
smo67380.setStemDirection(dirsmo70290);
const smo70290 = new VF.Beam([smo67377,smo67378,smo67379,smo67380]);
const dirsmo70291 = smo67381.getStemDirection();
smo67381.setStemDirection(dirsmo70291);
smo67382.setStemDirection(dirsmo70291);
smo67383.setStemDirection(dirsmo70291);
smo67384.setStemDirection(dirsmo70291);
const smo70291 = new VF.Beam([smo67381,smo67382,smo67383,smo67384]);
 
// formatting measures in staff group smo58712
fmtsmo6239579.format([smo62395v0,smo67398v0], 307);
const stavesmo62395 = new VF.Stave(1165, 1749, 321);
stavesmo62395.setAttribute('id', 'stavesmo62395');
stavesmo62395.setBegBarType(VF.Barline.type.NONE);
stavesmo62395.setContext(context);
stavesmo62395.draw();
smo62395v0.draw(context, stavesmo62395);
smo70283.setContext(context);
smo70283.draw();
smo70284.setContext(context);
smo70284.draw();
smo70285.setContext(context);
smo70285.draw();
smo70286.setContext(context);
smo70286.draw();
const stavesmo67398 = new VF.Stave(1165, 1845, 321);
stavesmo67398.setAttribute('id', 'stavesmo67398');
stavesmo67398.setBegBarType(VF.Barline.type.NONE);
stavesmo67398.setContext(context);
stavesmo67398.draw();
smo67398v0.draw(context, stavesmo67398);
smo70288.setContext(context);
smo70288.draw();
smo70289.setContext(context);
smo70289.draw();
smo70290.setContext(context);
smo70290.draw();
smo70291.setContext(context);
smo70291.draw();
const fmtsmo6242580 = new VF.Formatter();
//
// voices and notes for stave 0 80
const smo62425v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62425v0ar = [];
const smo62396 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo62396.setAttribute('id', 'smo62396');
smo62425v0ar.push(smo62396);
const smo62397 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo62397.setAttribute('id', 'smo62397');
smo62425v0ar.push(smo62397);
const smo62398 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62398.setAttribute('id', 'smo62398');
smo62425v0ar.push(smo62398);
const smo62399 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo62399.setAttribute('id', 'smo62399');
smo62425v0ar.push(smo62399);
const smo62400 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo62400.setAttribute('id', 'smo62400');
smo62425v0ar.push(smo62400);
const smo62401 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo62401.setAttribute('id', 'smo62401');
smo62425v0ar.push(smo62401);
const smo62402 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62402.setAttribute('id', 'smo62402');
smo62425v0ar.push(smo62402);
const smo62403 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo62403.setAttribute('id', 'smo62403');
smo62425v0ar.push(smo62403);
const smo62404 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo62404.setAttribute('id', 'smo62404');
smo62425v0ar.push(smo62404);
const smo62405 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo62405.setAttribute('id', 'smo62405');
smo62425v0ar.push(smo62405);
const smo62406 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62406.setAttribute('id', 'smo62406');
smo62425v0ar.push(smo62406);
const smo62407 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo62407.setAttribute('id', 'smo62407');
smo62425v0ar.push(smo62407);
const smo62408 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo62408.setAttribute('id', 'smo62408');
smo62425v0ar.push(smo62408);
const smo62409 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo62409.setAttribute('id', 'smo62409');
smo62425v0ar.push(smo62409);
const smo62410 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62410.setAttribute('id', 'smo62410');
smo62425v0ar.push(smo62410);
const smo62411 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo62411.setAttribute('id', 'smo62411');
smo62425v0ar.push(smo62411);
smo62425v0.addTickables(smo62425v0ar)
fmtsmo6242580.joinVoices([smo62425v0]);
const fmtsmo6742880 = new VF.Formatter();
//
// voices and notes for stave 1 80
const smo67428v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67428v0ar = [];
const smo67399 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["ab/2/n"]}'))
smo67399.setAttribute('id', 'smo67399');
smo67428v0ar.push(smo67399);
const smo67400 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/3/n"]}'))
smo67400.setAttribute('id', 'smo67400');
smo67428v0ar.push(smo67400);
const smo67401 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/2/n"]}'))
smo67401.setAttribute('id', 'smo67401');
const smo674010acc = new VF.Accidental('n');
smo67401.addModifier(smo674010acc, 0);
smo67428v0ar.push(smo67401);
const smo67402 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/3/n"]}'))
smo67402.setAttribute('id', 'smo67402');
smo67428v0ar.push(smo67402);
const smo67403 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67403.setAttribute('id', 'smo67403');
smo67428v0ar.push(smo67403);
const smo67404 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/3/n"]}'))
smo67404.setAttribute('id', 'smo67404');
smo67428v0ar.push(smo67404);
const smo67405 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/2/n"]}'))
smo67405.setAttribute('id', 'smo67405');
smo67428v0ar.push(smo67405);
const smo67406 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/3/n"]}'))
smo67406.setAttribute('id', 'smo67406');
smo67428v0ar.push(smo67406);
const smo67407 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["ab/2/n"]}'))
smo67407.setAttribute('id', 'smo67407');
smo67428v0ar.push(smo67407);
const smo67408 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/3/n"]}'))
smo67408.setAttribute('id', 'smo67408');
smo67428v0ar.push(smo67408);
const smo67409 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/2/n"]}'))
smo67409.setAttribute('id', 'smo67409');
smo67428v0ar.push(smo67409);
const smo67410 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/3/n"]}'))
smo67410.setAttribute('id', 'smo67410');
smo67428v0ar.push(smo67410);
const smo67411 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67411.setAttribute('id', 'smo67411');
smo67428v0ar.push(smo67411);
const smo67412 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/3/n"]}'))
smo67412.setAttribute('id', 'smo67412');
smo67428v0ar.push(smo67412);
const smo67413 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/2/n"]}'))
smo67413.setAttribute('id', 'smo67413');
smo67428v0ar.push(smo67413);
const smo67414 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/3/n"]}'))
smo67414.setAttribute('id', 'smo67414');
smo67428v0ar.push(smo67414);
smo67428v0.addTickables(smo67428v0ar)
fmtsmo6742880.joinVoices([smo67428v0]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo70295 = smo62396.getStemDirection();
smo62396.setStemDirection(dirsmo70295);
smo62397.setStemDirection(dirsmo70295);
smo62398.setStemDirection(dirsmo70295);
smo62399.setStemDirection(dirsmo70295);
const smo70295 = new VF.Beam([smo62396,smo62397,smo62398,smo62399]);
const dirsmo70296 = smo62400.getStemDirection();
smo62400.setStemDirection(dirsmo70296);
smo62401.setStemDirection(dirsmo70296);
smo62402.setStemDirection(dirsmo70296);
smo62403.setStemDirection(dirsmo70296);
const smo70296 = new VF.Beam([smo62400,smo62401,smo62402,smo62403]);
const dirsmo70297 = smo62404.getStemDirection();
smo62404.setStemDirection(dirsmo70297);
smo62405.setStemDirection(dirsmo70297);
smo62406.setStemDirection(dirsmo70297);
smo62407.setStemDirection(dirsmo70297);
const smo70297 = new VF.Beam([smo62404,smo62405,smo62406,smo62407]);
const dirsmo70298 = smo62408.getStemDirection();
smo62408.setStemDirection(dirsmo70298);
smo62409.setStemDirection(dirsmo70298);
smo62410.setStemDirection(dirsmo70298);
smo62411.setStemDirection(dirsmo70298);
const smo70298 = new VF.Beam([smo62408,smo62409,smo62410,smo62411]);
const dirsmo70300 = smo67399.getStemDirection();
smo67399.setStemDirection(dirsmo70300);
smo67400.setStemDirection(dirsmo70300);
smo67401.setStemDirection(dirsmo70300);
smo67402.setStemDirection(dirsmo70300);
const smo70300 = new VF.Beam([smo67399,smo67400,smo67401,smo67402]);
const dirsmo70301 = smo67403.getStemDirection();
smo67403.setStemDirection(dirsmo70301);
smo67404.setStemDirection(dirsmo70301);
smo67405.setStemDirection(dirsmo70301);
smo67406.setStemDirection(dirsmo70301);
const smo70301 = new VF.Beam([smo67403,smo67404,smo67405,smo67406]);
const dirsmo70302 = smo67407.getStemDirection();
smo67407.setStemDirection(dirsmo70302);
smo67408.setStemDirection(dirsmo70302);
smo67409.setStemDirection(dirsmo70302);
smo67410.setStemDirection(dirsmo70302);
const smo70302 = new VF.Beam([smo67407,smo67408,smo67409,smo67410]);
const dirsmo70303 = smo67411.getStemDirection();
smo67411.setStemDirection(dirsmo70303);
smo67412.setStemDirection(dirsmo70303);
smo67413.setStemDirection(dirsmo70303);
smo67414.setStemDirection(dirsmo70303);
const smo70303 = new VF.Beam([smo67411,smo67412,smo67413,smo67414]);
 
// formatting measures in staff group smo58712
fmtsmo6242580.format([smo62425v0,smo67428v0], 307);
const stavesmo62425 = new VF.Stave(1486, 1749, 321);
stavesmo62425.setAttribute('id', 'stavesmo62425');
stavesmo62425.setBegBarType(VF.Barline.type.NONE);
stavesmo62425.setContext(context);
stavesmo62425.draw();
smo62425v0.draw(context, stavesmo62425);
smo70295.setContext(context);
smo70295.draw();
smo70296.setContext(context);
smo70296.draw();
smo70297.setContext(context);
smo70297.draw();
smo70298.setContext(context);
smo70298.draw();
const stavesmo67428 = new VF.Stave(1486, 1845, 321);
stavesmo67428.setAttribute('id', 'stavesmo67428');
stavesmo67428.setBegBarType(VF.Barline.type.NONE);
stavesmo67428.setContext(context);
stavesmo67428.draw();
smo67428v0.draw(context, stavesmo67428);
smo70300.setContext(context);
smo70300.draw();
smo70301.setContext(context);
smo70301.draw();
smo70302.setContext(context);
smo70302.draw();
smo70303.setContext(context);
smo70303.draw();
const rightsmo58712stavesmo624251 = new VF.StaveConnector(stavesmo62425, stavesmo67428).setType(0);
rightsmo58712stavesmo624251.setContext(context).draw();
const fmtsmo6245581 = new VF.Formatter();
//
// voices and notes for stave 0 81
const smo62455v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62455v0ar = [];
const smo62426 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/3/n"]}'))
smo62426.setAttribute('id', 'smo62426');
const smo624260acc = new VF.Accidental('#');
smo62426.addModifier(smo624260acc, 0);
smo62455v0ar.push(smo62426);
const smo62427 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62427.setAttribute('id', 'smo62427');
smo62455v0ar.push(smo62427);
const smo62428 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo62428.setAttribute('id', 'smo62428');
const smo624280acc = new VF.Accidental('n');
smo62428.addModifier(smo624280acc, 0);
smo62455v0ar.push(smo62428);
const smo62429 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62429.setAttribute('id', 'smo62429');
smo62455v0ar.push(smo62429);
const smo62430 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo62430.setAttribute('id', 'smo62430');
smo62455v0ar.push(smo62430);
const smo62431 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62431.setAttribute('id', 'smo62431');
smo62455v0ar.push(smo62431);
const smo62432 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo62432.setAttribute('id', 'smo62432');
smo62455v0ar.push(smo62432);
const smo62433 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62433.setAttribute('id', 'smo62433');
smo62455v0ar.push(smo62433);
const smo62434 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/3/n"]}'))
smo62434.setAttribute('id', 'smo62434');
smo62455v0ar.push(smo62434);
const smo62435 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62435.setAttribute('id', 'smo62435');
smo62455v0ar.push(smo62435);
const smo62436 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo62436.setAttribute('id', 'smo62436');
smo62455v0ar.push(smo62436);
const smo62437 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62437.setAttribute('id', 'smo62437');
smo62455v0ar.push(smo62437);
const smo62438 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo62438.setAttribute('id', 'smo62438');
smo62455v0ar.push(smo62438);
const smo62439 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62439.setAttribute('id', 'smo62439');
smo62455v0ar.push(smo62439);
const smo62440 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo62440.setAttribute('id', 'smo62440');
smo62455v0ar.push(smo62440);
const smo62441 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62441.setAttribute('id', 'smo62441');
smo62455v0ar.push(smo62441);
smo62455v0.addTickables(smo62455v0ar)
fmtsmo6245581.joinVoices([smo62455v0]);
const fmtsmo6745881 = new VF.Formatter();
//
// voices and notes for stave 1 81
const smo67458v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67458v0ar = [];
const smo67429 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/2/n"]}'))
smo67429.setAttribute('id', 'smo67429');
const smo674290acc = new VF.Accidental('n');
smo67429.addModifier(smo674290acc, 0);
smo67458v0ar.push(smo67429);
const smo67430 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67430.setAttribute('id', 'smo67430');
smo67458v0ar.push(smo67430);
const smo67431 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67431.setAttribute('id', 'smo67431');
smo67458v0ar.push(smo67431);
const smo67432 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67432.setAttribute('id', 'smo67432');
smo67458v0ar.push(smo67432);
const smo67433 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo67433.setAttribute('id', 'smo67433');
smo67458v0ar.push(smo67433);
const smo67434 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67434.setAttribute('id', 'smo67434');
smo67458v0ar.push(smo67434);
const smo67435 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67435.setAttribute('id', 'smo67435');
smo67458v0ar.push(smo67435);
const smo67436 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67436.setAttribute('id', 'smo67436');
smo67458v0ar.push(smo67436);
const smo67437 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/2/n"]}'))
smo67437.setAttribute('id', 'smo67437');
smo67458v0ar.push(smo67437);
const smo67438 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67438.setAttribute('id', 'smo67438');
smo67458v0ar.push(smo67438);
const smo67439 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67439.setAttribute('id', 'smo67439');
smo67458v0ar.push(smo67439);
const smo67440 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67440.setAttribute('id', 'smo67440');
smo67458v0ar.push(smo67440);
const smo67441 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo67441.setAttribute('id', 'smo67441');
smo67458v0ar.push(smo67441);
const smo67442 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67442.setAttribute('id', 'smo67442');
smo67458v0ar.push(smo67442);
const smo67443 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67443.setAttribute('id', 'smo67443');
smo67458v0ar.push(smo67443);
const smo67444 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67444.setAttribute('id', 'smo67444');
smo67458v0ar.push(smo67444);
smo67458v0.addTickables(smo67458v0ar)
fmtsmo6745881.joinVoices([smo67458v0]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo70319 = smo62426.getStemDirection();
smo62426.setStemDirection(dirsmo70319);
smo62427.setStemDirection(dirsmo70319);
smo62428.setStemDirection(dirsmo70319);
smo62429.setStemDirection(dirsmo70319);
const smo70319 = new VF.Beam([smo62426,smo62427,smo62428,smo62429]);
const dirsmo70320 = smo62430.getStemDirection();
smo62430.setStemDirection(dirsmo70320);
smo62431.setStemDirection(dirsmo70320);
smo62432.setStemDirection(dirsmo70320);
smo62433.setStemDirection(dirsmo70320);
const smo70320 = new VF.Beam([smo62430,smo62431,smo62432,smo62433]);
const dirsmo70321 = smo62434.getStemDirection();
smo62434.setStemDirection(dirsmo70321);
smo62435.setStemDirection(dirsmo70321);
smo62436.setStemDirection(dirsmo70321);
smo62437.setStemDirection(dirsmo70321);
const smo70321 = new VF.Beam([smo62434,smo62435,smo62436,smo62437]);
const dirsmo70322 = smo62438.getStemDirection();
smo62438.setStemDirection(dirsmo70322);
smo62439.setStemDirection(dirsmo70322);
smo62440.setStemDirection(dirsmo70322);
smo62441.setStemDirection(dirsmo70322);
const smo70322 = new VF.Beam([smo62438,smo62439,smo62440,smo62441]);
const dirsmo70324 = smo67429.getStemDirection();
smo67429.setStemDirection(dirsmo70324);
smo67430.setStemDirection(dirsmo70324);
smo67431.setStemDirection(dirsmo70324);
smo67432.setStemDirection(dirsmo70324);
const smo70324 = new VF.Beam([smo67429,smo67430,smo67431,smo67432]);
const dirsmo70325 = smo67433.getStemDirection();
smo67433.setStemDirection(dirsmo70325);
smo67434.setStemDirection(dirsmo70325);
smo67435.setStemDirection(dirsmo70325);
smo67436.setStemDirection(dirsmo70325);
const smo70325 = new VF.Beam([smo67433,smo67434,smo67435,smo67436]);
const dirsmo70326 = smo67437.getStemDirection();
smo67437.setStemDirection(dirsmo70326);
smo67438.setStemDirection(dirsmo70326);
smo67439.setStemDirection(dirsmo70326);
smo67440.setStemDirection(dirsmo70326);
const smo70326 = new VF.Beam([smo67437,smo67438,smo67439,smo67440]);
const dirsmo70327 = smo67441.getStemDirection();
smo67441.setStemDirection(dirsmo70327);
smo67442.setStemDirection(dirsmo70327);
smo67443.setStemDirection(dirsmo70327);
smo67444.setStemDirection(dirsmo70327);
const smo70327 = new VF.Beam([smo67441,smo67442,smo67443,smo67444]);
 
// formatting measures in staff group smo58712
fmtsmo6245581.format([smo62455v0,smo67458v0], 328);
const stavesmo62455 = new VF.Stave(90, 1959, 411);
stavesmo62455.setAttribute('id', 'stavesmo62455');
stavesmo62455.setBegBarType(1);
stavesmo62455.addClef('treble');
const keysmo62455 = new VF.KeySignature('Eb');
keysmo62455.addToStave(stavesmo62455);
stavesmo62455.setContext(context);
stavesmo62455.draw();
smo62455v0.draw(context, stavesmo62455);
smo70319.setContext(context);
smo70319.draw();
smo70320.setContext(context);
smo70320.draw();
smo70321.setContext(context);
smo70321.draw();
smo70322.setContext(context);
smo70322.draw();
const stavesmo67458 = new VF.Stave(90, 2049, 411);
stavesmo67458.setAttribute('id', 'stavesmo67458');
stavesmo67458.setBegBarType(1);
stavesmo67458.addClef('bass');
const keysmo67458 = new VF.KeySignature('Eb');
keysmo67458.addToStave(stavesmo67458);
stavesmo67458.setContext(context);
stavesmo67458.draw();
smo67458v0.draw(context, stavesmo67458);
smo70324.setContext(context);
smo70324.draw();
smo70325.setContext(context);
smo70325.draw();
smo70326.setContext(context);
smo70326.draw();
smo70327.setContext(context);
smo70327.draw();
const leftsmo58712stavesmo624551 = new VF.StaveConnector(stavesmo62455, stavesmo67458).setType(3);
leftsmo58712stavesmo624551.setContext(context).draw();
const fmtsmo6248582 = new VF.Formatter();
//
// voices and notes for stave 0 82
const smo62485v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62485v0ar = [];
const smo62456 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo62456.setAttribute('id', 'smo62456');
smo62485v0ar.push(smo62456);
const smo62457 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62457.setAttribute('id', 'smo62457');
smo62485v0ar.push(smo62457);
const smo62458 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo62458.setAttribute('id', 'smo62458');
const smo624580acc = new VF.Accidental('n');
smo62458.addModifier(smo624580acc, 0);
smo62485v0ar.push(smo62458);
const smo62459 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62459.setAttribute('id', 'smo62459');
smo62485v0ar.push(smo62459);
const smo62460 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo62460.setAttribute('id', 'smo62460');
smo62485v0ar.push(smo62460);
const smo62461 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62461.setAttribute('id', 'smo62461');
smo62485v0ar.push(smo62461);
const smo62462 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo62462.setAttribute('id', 'smo62462');
smo62485v0ar.push(smo62462);
const smo62463 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62463.setAttribute('id', 'smo62463');
smo62485v0ar.push(smo62463);
const smo62464 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo62464.setAttribute('id', 'smo62464');
smo62485v0ar.push(smo62464);
const smo62465 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62465.setAttribute('id', 'smo62465');
smo62485v0ar.push(smo62465);
const smo62466 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo62466.setAttribute('id', 'smo62466');
smo62485v0ar.push(smo62466);
const smo62467 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62467.setAttribute('id', 'smo62467');
smo62485v0ar.push(smo62467);
const smo62468 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo62468.setAttribute('id', 'smo62468');
smo62485v0ar.push(smo62468);
const smo62469 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62469.setAttribute('id', 'smo62469');
smo62485v0ar.push(smo62469);
const smo62470 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo62470.setAttribute('id', 'smo62470');
smo62485v0ar.push(smo62470);
const smo62471 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62471.setAttribute('id', 'smo62471');
smo62485v0ar.push(smo62471);
smo62485v0.addTickables(smo62485v0ar)
fmtsmo6248582.joinVoices([smo62485v0]);
const fmtsmo6748882 = new VF.Formatter();
//
// voices and notes for stave 1 82
const smo67488v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67488v0ar = [];
const smo67459 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo67459.setAttribute('id', 'smo67459');
smo67488v0ar.push(smo67459);
const smo67460 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67460.setAttribute('id', 'smo67460');
smo67488v0ar.push(smo67460);
const smo67461 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67461.setAttribute('id', 'smo67461');
smo67488v0ar.push(smo67461);
const smo67462 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67462.setAttribute('id', 'smo67462');
smo67488v0ar.push(smo67462);
const smo67463 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo67463.setAttribute('id', 'smo67463');
smo67488v0ar.push(smo67463);
const smo67464 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67464.setAttribute('id', 'smo67464');
smo67488v0ar.push(smo67464);
const smo67465 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67465.setAttribute('id', 'smo67465');
smo67488v0ar.push(smo67465);
const smo67466 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67466.setAttribute('id', 'smo67466');
smo67488v0ar.push(smo67466);
const smo67467 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo67467.setAttribute('id', 'smo67467');
smo67488v0ar.push(smo67467);
const smo67468 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67468.setAttribute('id', 'smo67468');
smo67488v0ar.push(smo67468);
const smo67469 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67469.setAttribute('id', 'smo67469');
smo67488v0ar.push(smo67469);
const smo67470 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67470.setAttribute('id', 'smo67470');
smo67488v0ar.push(smo67470);
const smo67471 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo67471.setAttribute('id', 'smo67471');
smo67488v0ar.push(smo67471);
const smo67472 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67472.setAttribute('id', 'smo67472');
smo67488v0ar.push(smo67472);
const smo67473 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67473.setAttribute('id', 'smo67473');
smo67488v0ar.push(smo67473);
const smo67474 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67474.setAttribute('id', 'smo67474');
smo67488v0ar.push(smo67474);
smo67488v0.addTickables(smo67488v0ar)
fmtsmo6748882.joinVoices([smo67488v0]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo70331 = smo62456.getStemDirection();
smo62456.setStemDirection(dirsmo70331);
smo62457.setStemDirection(dirsmo70331);
smo62458.setStemDirection(dirsmo70331);
smo62459.setStemDirection(dirsmo70331);
const smo70331 = new VF.Beam([smo62456,smo62457,smo62458,smo62459]);
const dirsmo70332 = smo62460.getStemDirection();
smo62460.setStemDirection(dirsmo70332);
smo62461.setStemDirection(dirsmo70332);
smo62462.setStemDirection(dirsmo70332);
smo62463.setStemDirection(dirsmo70332);
const smo70332 = new VF.Beam([smo62460,smo62461,smo62462,smo62463]);
const dirsmo70333 = smo62464.getStemDirection();
smo62464.setStemDirection(dirsmo70333);
smo62465.setStemDirection(dirsmo70333);
smo62466.setStemDirection(dirsmo70333);
smo62467.setStemDirection(dirsmo70333);
const smo70333 = new VF.Beam([smo62464,smo62465,smo62466,smo62467]);
const dirsmo70334 = smo62468.getStemDirection();
smo62468.setStemDirection(dirsmo70334);
smo62469.setStemDirection(dirsmo70334);
smo62470.setStemDirection(dirsmo70334);
smo62471.setStemDirection(dirsmo70334);
const smo70334 = new VF.Beam([smo62468,smo62469,smo62470,smo62471]);
const dirsmo70336 = smo67459.getStemDirection();
smo67459.setStemDirection(dirsmo70336);
smo67460.setStemDirection(dirsmo70336);
smo67461.setStemDirection(dirsmo70336);
smo67462.setStemDirection(dirsmo70336);
const smo70336 = new VF.Beam([smo67459,smo67460,smo67461,smo67462]);
const dirsmo70337 = smo67463.getStemDirection();
smo67463.setStemDirection(dirsmo70337);
smo67464.setStemDirection(dirsmo70337);
smo67465.setStemDirection(dirsmo70337);
smo67466.setStemDirection(dirsmo70337);
const smo70337 = new VF.Beam([smo67463,smo67464,smo67465,smo67466]);
const dirsmo70338 = smo67467.getStemDirection();
smo67467.setStemDirection(dirsmo70338);
smo67468.setStemDirection(dirsmo70338);
smo67469.setStemDirection(dirsmo70338);
smo67470.setStemDirection(dirsmo70338);
const smo70338 = new VF.Beam([smo67467,smo67468,smo67469,smo67470]);
const dirsmo70339 = smo67471.getStemDirection();
smo67471.setStemDirection(dirsmo70339);
smo67472.setStemDirection(dirsmo70339);
smo67473.setStemDirection(dirsmo70339);
smo67474.setStemDirection(dirsmo70339);
const smo70339 = new VF.Beam([smo67471,smo67472,smo67473,smo67474]);
 
// formatting measures in staff group smo58712
fmtsmo6248582.format([smo62485v0,smo67488v0], 303);
const stavesmo62485 = new VF.Stave(501, 1959, 317);
stavesmo62485.setAttribute('id', 'stavesmo62485');
stavesmo62485.setBegBarType(VF.Barline.type.NONE);
stavesmo62485.setContext(context);
stavesmo62485.draw();
smo62485v0.draw(context, stavesmo62485);
smo70331.setContext(context);
smo70331.draw();
smo70332.setContext(context);
smo70332.draw();
smo70333.setContext(context);
smo70333.draw();
smo70334.setContext(context);
smo70334.draw();
const stavesmo67488 = new VF.Stave(501, 2049, 317);
stavesmo67488.setAttribute('id', 'stavesmo67488');
stavesmo67488.setBegBarType(VF.Barline.type.NONE);
stavesmo67488.setContext(context);
stavesmo67488.draw();
smo67488v0.draw(context, stavesmo67488);
smo70336.setContext(context);
smo70336.draw();
smo70337.setContext(context);
smo70337.draw();
smo70338.setContext(context);
smo70338.draw();
smo70339.setContext(context);
smo70339.draw();
const fmtsmo6251583 = new VF.Formatter();
//
// voices and notes for stave 0 83
const smo62515v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62515v0ar = [];
const smo62486 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo62486.setAttribute('id', 'smo62486');
const smo624860acc = new VF.Accidental('#');
smo62486.addModifier(smo624860acc, 0);
smo62515v0ar.push(smo62486);
const smo62487 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62487.setAttribute('id', 'smo62487');
smo62515v0ar.push(smo62487);
const smo62488 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo62488.setAttribute('id', 'smo62488');
const smo624880acc = new VF.Accidental('n');
smo62488.addModifier(smo624880acc, 0);
smo62515v0ar.push(smo62488);
const smo62489 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62489.setAttribute('id', 'smo62489');
smo62515v0ar.push(smo62489);
const smo62490 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo62490.setAttribute('id', 'smo62490');
const smo624900acc = new VF.Accidental('n');
smo62490.addModifier(smo624900acc, 0);
smo62515v0ar.push(smo62490);
const smo62491 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62491.setAttribute('id', 'smo62491');
smo62515v0ar.push(smo62491);
const smo62492 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo62492.setAttribute('id', 'smo62492');
smo62515v0ar.push(smo62492);
const smo62493 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62493.setAttribute('id', 'smo62493');
smo62515v0ar.push(smo62493);
const smo62494 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo62494.setAttribute('id', 'smo62494');
smo62515v0ar.push(smo62494);
const smo62495 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62495.setAttribute('id', 'smo62495');
smo62515v0ar.push(smo62495);
const smo62496 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo62496.setAttribute('id', 'smo62496');
smo62515v0ar.push(smo62496);
const smo62497 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62497.setAttribute('id', 'smo62497');
smo62515v0ar.push(smo62497);
const smo62498 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo62498.setAttribute('id', 'smo62498');
smo62515v0ar.push(smo62498);
const smo62499 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62499.setAttribute('id', 'smo62499');
smo62515v0ar.push(smo62499);
const smo62500 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo62500.setAttribute('id', 'smo62500');
smo62515v0ar.push(smo62500);
const smo62501 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62501.setAttribute('id', 'smo62501');
smo62515v0ar.push(smo62501);
smo62515v0.addTickables(smo62515v0ar)
fmtsmo6251583.joinVoices([smo62515v0]);
const fmtsmo6751883 = new VF.Formatter();
//
// voices and notes for stave 1 83
const smo67518v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67518v0ar = [];
const smo67489 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo67489.setAttribute('id', 'smo67489');
smo67518v0ar.push(smo67489);
const smo67490 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67490.setAttribute('id', 'smo67490');
smo67518v0ar.push(smo67490);
const smo67491 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67491.setAttribute('id', 'smo67491');
smo67518v0ar.push(smo67491);
const smo67492 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67492.setAttribute('id', 'smo67492');
smo67518v0ar.push(smo67492);
const smo67493 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo67493.setAttribute('id', 'smo67493');
smo67518v0ar.push(smo67493);
const smo67494 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67494.setAttribute('id', 'smo67494');
smo67518v0ar.push(smo67494);
const smo67495 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67495.setAttribute('id', 'smo67495');
smo67518v0ar.push(smo67495);
const smo67496 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67496.setAttribute('id', 'smo67496');
smo67518v0ar.push(smo67496);
const smo67497 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo67497.setAttribute('id', 'smo67497');
smo67518v0ar.push(smo67497);
const smo67498 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67498.setAttribute('id', 'smo67498');
smo67518v0ar.push(smo67498);
const smo67499 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67499.setAttribute('id', 'smo67499');
smo67518v0ar.push(smo67499);
const smo67500 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67500.setAttribute('id', 'smo67500');
smo67518v0ar.push(smo67500);
const smo67501 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo67501.setAttribute('id', 'smo67501');
smo67518v0ar.push(smo67501);
const smo67502 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67502.setAttribute('id', 'smo67502');
smo67518v0ar.push(smo67502);
const smo67503 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67503.setAttribute('id', 'smo67503');
smo67518v0ar.push(smo67503);
const smo67504 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67504.setAttribute('id', 'smo67504');
smo67518v0ar.push(smo67504);
smo67518v0.addTickables(smo67518v0ar)
fmtsmo6751883.joinVoices([smo67518v0]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo70343 = smo62486.getStemDirection();
smo62486.setStemDirection(dirsmo70343);
smo62487.setStemDirection(dirsmo70343);
smo62488.setStemDirection(dirsmo70343);
smo62489.setStemDirection(dirsmo70343);
const smo70343 = new VF.Beam([smo62486,smo62487,smo62488,smo62489]);
const dirsmo70344 = smo62490.getStemDirection();
smo62490.setStemDirection(dirsmo70344);
smo62491.setStemDirection(dirsmo70344);
smo62492.setStemDirection(dirsmo70344);
smo62493.setStemDirection(dirsmo70344);
const smo70344 = new VF.Beam([smo62490,smo62491,smo62492,smo62493]);
const dirsmo70345 = smo62494.getStemDirection();
smo62494.setStemDirection(dirsmo70345);
smo62495.setStemDirection(dirsmo70345);
smo62496.setStemDirection(dirsmo70345);
smo62497.setStemDirection(dirsmo70345);
const smo70345 = new VF.Beam([smo62494,smo62495,smo62496,smo62497]);
const dirsmo70346 = smo62498.getStemDirection();
smo62498.setStemDirection(dirsmo70346);
smo62499.setStemDirection(dirsmo70346);
smo62500.setStemDirection(dirsmo70346);
smo62501.setStemDirection(dirsmo70346);
const smo70346 = new VF.Beam([smo62498,smo62499,smo62500,smo62501]);
const dirsmo70348 = smo67489.getStemDirection();
smo67489.setStemDirection(dirsmo70348);
smo67490.setStemDirection(dirsmo70348);
smo67491.setStemDirection(dirsmo70348);
smo67492.setStemDirection(dirsmo70348);
const smo70348 = new VF.Beam([smo67489,smo67490,smo67491,smo67492]);
const dirsmo70349 = smo67493.getStemDirection();
smo67493.setStemDirection(dirsmo70349);
smo67494.setStemDirection(dirsmo70349);
smo67495.setStemDirection(dirsmo70349);
smo67496.setStemDirection(dirsmo70349);
const smo70349 = new VF.Beam([smo67493,smo67494,smo67495,smo67496]);
const dirsmo70350 = smo67497.getStemDirection();
smo67497.setStemDirection(dirsmo70350);
smo67498.setStemDirection(dirsmo70350);
smo67499.setStemDirection(dirsmo70350);
smo67500.setStemDirection(dirsmo70350);
const smo70350 = new VF.Beam([smo67497,smo67498,smo67499,smo67500]);
const dirsmo70351 = smo67501.getStemDirection();
smo67501.setStemDirection(dirsmo70351);
smo67502.setStemDirection(dirsmo70351);
smo67503.setStemDirection(dirsmo70351);
smo67504.setStemDirection(dirsmo70351);
const smo70351 = new VF.Beam([smo67501,smo67502,smo67503,smo67504]);
 
// formatting measures in staff group smo58712
fmtsmo6251583.format([smo62515v0,smo67518v0], 341);
const stavesmo62515 = new VF.Stave(818, 1959, 355);
stavesmo62515.setAttribute('id', 'stavesmo62515');
stavesmo62515.setBegBarType(VF.Barline.type.NONE);
stavesmo62515.setContext(context);
stavesmo62515.draw();
smo62515v0.draw(context, stavesmo62515);
smo70343.setContext(context);
smo70343.draw();
smo70344.setContext(context);
smo70344.draw();
smo70345.setContext(context);
smo70345.draw();
smo70346.setContext(context);
smo70346.draw();
const stavesmo67518 = new VF.Stave(818, 2049, 355);
stavesmo67518.setAttribute('id', 'stavesmo67518');
stavesmo67518.setBegBarType(VF.Barline.type.NONE);
stavesmo67518.setContext(context);
stavesmo67518.draw();
smo67518v0.draw(context, stavesmo67518);
smo70348.setContext(context);
smo70348.draw();
smo70349.setContext(context);
smo70349.draw();
smo70350.setContext(context);
smo70350.draw();
smo70351.setContext(context);
smo70351.draw();
const fmtsmo6254584 = new VF.Formatter();
//
// voices and notes for stave 0 84
const smo62545v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62545v0ar = [];
const smo62516 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo62516.setAttribute('id', 'smo62516');
smo62545v0ar.push(smo62516);
const smo62517 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62517.setAttribute('id', 'smo62517');
smo62545v0ar.push(smo62517);
const smo62518 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo62518.setAttribute('id', 'smo62518');
const smo625180acc = new VF.Accidental('n');
smo62518.addModifier(smo625180acc, 0);
smo62545v0ar.push(smo62518);
const smo62519 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62519.setAttribute('id', 'smo62519');
smo62545v0ar.push(smo62519);
const smo62520 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62520.setAttribute('id', 'smo62520');
smo62545v0ar.push(smo62520);
const smo62521 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62521.setAttribute('id', 'smo62521');
smo62545v0ar.push(smo62521);
const smo62522 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo62522.setAttribute('id', 'smo62522');
smo62545v0ar.push(smo62522);
const smo62523 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62523.setAttribute('id', 'smo62523');
smo62545v0ar.push(smo62523);
const smo62524 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo62524.setAttribute('id', 'smo62524');
smo62545v0ar.push(smo62524);
const smo62525 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62525.setAttribute('id', 'smo62525');
smo62545v0ar.push(smo62525);
const smo62526 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo62526.setAttribute('id', 'smo62526');
smo62545v0ar.push(smo62526);
const smo62527 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62527.setAttribute('id', 'smo62527');
smo62545v0ar.push(smo62527);
const smo62528 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62528.setAttribute('id', 'smo62528');
smo62545v0ar.push(smo62528);
const smo62529 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62529.setAttribute('id', 'smo62529');
smo62545v0ar.push(smo62529);
const smo62530 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo62530.setAttribute('id', 'smo62530');
smo62545v0ar.push(smo62530);
const smo62531 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62531.setAttribute('id', 'smo62531');
smo62545v0ar.push(smo62531);
smo62545v0.addTickables(smo62545v0ar)
fmtsmo6254584.joinVoices([smo62545v0]);
const fmtsmo6754884 = new VF.Formatter();
//
// voices and notes for stave 1 84
const smo67548v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67548v0ar = [];
const smo67519 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo67519.setAttribute('id', 'smo67519');
smo67548v0ar.push(smo67519);
const smo67520 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67520.setAttribute('id', 'smo67520');
smo67548v0ar.push(smo67520);
const smo67521 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67521.setAttribute('id', 'smo67521');
smo67548v0ar.push(smo67521);
const smo67522 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67522.setAttribute('id', 'smo67522');
smo67548v0ar.push(smo67522);
const smo67523 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67523.setAttribute('id', 'smo67523');
smo67548v0ar.push(smo67523);
const smo67524 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67524.setAttribute('id', 'smo67524');
smo67548v0ar.push(smo67524);
const smo67525 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67525.setAttribute('id', 'smo67525');
smo67548v0ar.push(smo67525);
const smo67526 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67526.setAttribute('id', 'smo67526');
smo67548v0ar.push(smo67526);
const smo67527 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo67527.setAttribute('id', 'smo67527');
smo67548v0ar.push(smo67527);
const smo67528 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67528.setAttribute('id', 'smo67528');
smo67548v0ar.push(smo67528);
const smo67529 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67529.setAttribute('id', 'smo67529');
smo67548v0ar.push(smo67529);
const smo67530 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67530.setAttribute('id', 'smo67530');
smo67548v0ar.push(smo67530);
const smo67531 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67531.setAttribute('id', 'smo67531');
smo67548v0ar.push(smo67531);
const smo67532 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67532.setAttribute('id', 'smo67532');
smo67548v0ar.push(smo67532);
const smo67533 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67533.setAttribute('id', 'smo67533');
smo67548v0ar.push(smo67533);
const smo67534 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67534.setAttribute('id', 'smo67534');
smo67548v0ar.push(smo67534);
smo67548v0.addTickables(smo67548v0ar)
fmtsmo6754884.joinVoices([smo67548v0]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo70355 = smo62516.getStemDirection();
smo62516.setStemDirection(dirsmo70355);
smo62517.setStemDirection(dirsmo70355);
smo62518.setStemDirection(dirsmo70355);
smo62519.setStemDirection(dirsmo70355);
const smo70355 = new VF.Beam([smo62516,smo62517,smo62518,smo62519]);
const dirsmo70356 = smo62520.getStemDirection();
smo62520.setStemDirection(dirsmo70356);
smo62521.setStemDirection(dirsmo70356);
smo62522.setStemDirection(dirsmo70356);
smo62523.setStemDirection(dirsmo70356);
const smo70356 = new VF.Beam([smo62520,smo62521,smo62522,smo62523]);
const dirsmo70357 = smo62524.getStemDirection();
smo62524.setStemDirection(dirsmo70357);
smo62525.setStemDirection(dirsmo70357);
smo62526.setStemDirection(dirsmo70357);
smo62527.setStemDirection(dirsmo70357);
const smo70357 = new VF.Beam([smo62524,smo62525,smo62526,smo62527]);
const dirsmo70358 = smo62528.getStemDirection();
smo62528.setStemDirection(dirsmo70358);
smo62529.setStemDirection(dirsmo70358);
smo62530.setStemDirection(dirsmo70358);
smo62531.setStemDirection(dirsmo70358);
const smo70358 = new VF.Beam([smo62528,smo62529,smo62530,smo62531]);
const dirsmo70360 = smo67519.getStemDirection();
smo67519.setStemDirection(dirsmo70360);
smo67520.setStemDirection(dirsmo70360);
smo67521.setStemDirection(dirsmo70360);
smo67522.setStemDirection(dirsmo70360);
const smo70360 = new VF.Beam([smo67519,smo67520,smo67521,smo67522]);
const dirsmo70361 = smo67523.getStemDirection();
smo67523.setStemDirection(dirsmo70361);
smo67524.setStemDirection(dirsmo70361);
smo67525.setStemDirection(dirsmo70361);
smo67526.setStemDirection(dirsmo70361);
const smo70361 = new VF.Beam([smo67523,smo67524,smo67525,smo67526]);
const dirsmo70362 = smo67527.getStemDirection();
smo67527.setStemDirection(dirsmo70362);
smo67528.setStemDirection(dirsmo70362);
smo67529.setStemDirection(dirsmo70362);
smo67530.setStemDirection(dirsmo70362);
const smo70362 = new VF.Beam([smo67527,smo67528,smo67529,smo67530]);
const dirsmo70363 = smo67531.getStemDirection();
smo67531.setStemDirection(dirsmo70363);
smo67532.setStemDirection(dirsmo70363);
smo67533.setStemDirection(dirsmo70363);
smo67534.setStemDirection(dirsmo70363);
const smo70363 = new VF.Beam([smo67531,smo67532,smo67533,smo67534]);
 
// formatting measures in staff group smo58712
fmtsmo6254584.format([smo62545v0,smo67548v0], 303);
const stavesmo62545 = new VF.Stave(1173, 1959, 317);
stavesmo62545.setAttribute('id', 'stavesmo62545');
stavesmo62545.setBegBarType(VF.Barline.type.NONE);
stavesmo62545.setContext(context);
stavesmo62545.draw();
smo62545v0.draw(context, stavesmo62545);
smo70355.setContext(context);
smo70355.draw();
smo70356.setContext(context);
smo70356.draw();
smo70357.setContext(context);
smo70357.draw();
smo70358.setContext(context);
smo70358.draw();
const stavesmo67548 = new VF.Stave(1173, 2049, 317);
stavesmo67548.setAttribute('id', 'stavesmo67548');
stavesmo67548.setBegBarType(VF.Barline.type.NONE);
stavesmo67548.setContext(context);
stavesmo67548.draw();
smo67548v0.draw(context, stavesmo67548);
smo70360.setContext(context);
smo70360.draw();
smo70361.setContext(context);
smo70361.draw();
smo70362.setContext(context);
smo70362.draw();
smo70363.setContext(context);
smo70363.draw();
const fmtsmo6257585 = new VF.Formatter();
//
// voices and notes for stave 0 85
const smo62575v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62575v0ar = [];
const smo62546 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["ab/4/n"]}'))
smo62546.setAttribute('id', 'smo62546');
smo62575v0ar.push(smo62546);
const smo62547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62547.setAttribute('id', 'smo62547');
smo62575v0ar.push(smo62547);
const smo62548 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo62548.setAttribute('id', 'smo62548');
const smo625480acc = new VF.Accidental('n');
smo62548.addModifier(smo625480acc, 0);
smo62575v0ar.push(smo62548);
const smo62549 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62549.setAttribute('id', 'smo62549');
smo62575v0ar.push(smo62549);
const smo62550 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62550.setAttribute('id', 'smo62550');
smo62575v0ar.push(smo62550);
const smo62551 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62551.setAttribute('id', 'smo62551');
smo62575v0ar.push(smo62551);
const smo62552 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo62552.setAttribute('id', 'smo62552');
smo62575v0ar.push(smo62552);
const smo62553 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62553.setAttribute('id', 'smo62553');
smo62575v0ar.push(smo62553);
const smo62554 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["ab/4/n"]}'))
smo62554.setAttribute('id', 'smo62554');
smo62575v0ar.push(smo62554);
const smo62555 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62555.setAttribute('id', 'smo62555');
smo62575v0ar.push(smo62555);
const smo62556 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo62556.setAttribute('id', 'smo62556');
smo62575v0ar.push(smo62556);
const smo62557 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62557.setAttribute('id', 'smo62557');
smo62575v0ar.push(smo62557);
const smo62558 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62558.setAttribute('id', 'smo62558');
smo62575v0ar.push(smo62558);
const smo62559 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62559.setAttribute('id', 'smo62559');
smo62575v0ar.push(smo62559);
const smo62560 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo62560.setAttribute('id', 'smo62560');
smo62575v0ar.push(smo62560);
const smo62561 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62561.setAttribute('id', 'smo62561');
smo62575v0ar.push(smo62561);
smo62575v0.addTickables(smo62575v0ar)
fmtsmo6257585.joinVoices([smo62575v0]);
const fmtsmo6757885 = new VF.Formatter();
//
// voices and notes for stave 1 85
const smo67578v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67578v0ar = [];
const smo67549 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo67549.setAttribute('id', 'smo67549');
smo67578v0ar.push(smo67549);
const smo67550 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67550.setAttribute('id', 'smo67550');
smo67578v0ar.push(smo67550);
const smo67551 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67551.setAttribute('id', 'smo67551');
smo67578v0ar.push(smo67551);
const smo67552 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67552.setAttribute('id', 'smo67552');
smo67578v0ar.push(smo67552);
const smo67553 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67553.setAttribute('id', 'smo67553');
smo67578v0ar.push(smo67553);
const smo67554 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67554.setAttribute('id', 'smo67554');
smo67578v0ar.push(smo67554);
const smo67555 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67555.setAttribute('id', 'smo67555');
smo67578v0ar.push(smo67555);
const smo67556 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67556.setAttribute('id', 'smo67556');
smo67578v0ar.push(smo67556);
const smo67557 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo67557.setAttribute('id', 'smo67557');
smo67578v0ar.push(smo67557);
const smo67558 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67558.setAttribute('id', 'smo67558');
smo67578v0ar.push(smo67558);
const smo67559 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67559.setAttribute('id', 'smo67559');
smo67578v0ar.push(smo67559);
const smo67560 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67560.setAttribute('id', 'smo67560');
smo67578v0ar.push(smo67560);
const smo67561 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo67561.setAttribute('id', 'smo67561');
smo67578v0ar.push(smo67561);
const smo67562 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67562.setAttribute('id', 'smo67562');
smo67578v0ar.push(smo67562);
const smo67563 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo67563.setAttribute('id', 'smo67563');
smo67578v0ar.push(smo67563);
const smo67564 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo67564.setAttribute('id', 'smo67564');
smo67578v0ar.push(smo67564);
smo67578v0.addTickables(smo67578v0ar)
fmtsmo6757885.joinVoices([smo67578v0]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo70367 = smo62546.getStemDirection();
smo62546.setStemDirection(dirsmo70367);
smo62547.setStemDirection(dirsmo70367);
smo62548.setStemDirection(dirsmo70367);
smo62549.setStemDirection(dirsmo70367);
const smo70367 = new VF.Beam([smo62546,smo62547,smo62548,smo62549]);
const dirsmo70368 = smo62550.getStemDirection();
smo62550.setStemDirection(dirsmo70368);
smo62551.setStemDirection(dirsmo70368);
smo62552.setStemDirection(dirsmo70368);
smo62553.setStemDirection(dirsmo70368);
const smo70368 = new VF.Beam([smo62550,smo62551,smo62552,smo62553]);
const dirsmo70369 = smo62554.getStemDirection();
smo62554.setStemDirection(dirsmo70369);
smo62555.setStemDirection(dirsmo70369);
smo62556.setStemDirection(dirsmo70369);
smo62557.setStemDirection(dirsmo70369);
const smo70369 = new VF.Beam([smo62554,smo62555,smo62556,smo62557]);
const dirsmo70370 = smo62558.getStemDirection();
smo62558.setStemDirection(dirsmo70370);
smo62559.setStemDirection(dirsmo70370);
smo62560.setStemDirection(dirsmo70370);
smo62561.setStemDirection(dirsmo70370);
const smo70370 = new VF.Beam([smo62558,smo62559,smo62560,smo62561]);
const dirsmo70372 = smo67549.getStemDirection();
smo67549.setStemDirection(dirsmo70372);
smo67550.setStemDirection(dirsmo70372);
smo67551.setStemDirection(dirsmo70372);
smo67552.setStemDirection(dirsmo70372);
const smo70372 = new VF.Beam([smo67549,smo67550,smo67551,smo67552]);
const dirsmo70373 = smo67553.getStemDirection();
smo67553.setStemDirection(dirsmo70373);
smo67554.setStemDirection(dirsmo70373);
smo67555.setStemDirection(dirsmo70373);
smo67556.setStemDirection(dirsmo70373);
const smo70373 = new VF.Beam([smo67553,smo67554,smo67555,smo67556]);
const dirsmo70374 = smo67557.getStemDirection();
smo67557.setStemDirection(dirsmo70374);
smo67558.setStemDirection(dirsmo70374);
smo67559.setStemDirection(dirsmo70374);
smo67560.setStemDirection(dirsmo70374);
const smo70374 = new VF.Beam([smo67557,smo67558,smo67559,smo67560]);
const dirsmo70375 = smo67561.getStemDirection();
smo67561.setStemDirection(dirsmo70375);
smo67562.setStemDirection(dirsmo70375);
smo67563.setStemDirection(dirsmo70375);
smo67564.setStemDirection(dirsmo70375);
const smo70375 = new VF.Beam([smo67561,smo67562,smo67563,smo67564]);
 
// formatting measures in staff group smo58712
fmtsmo6257585.format([smo62575v0,smo67578v0], 303);
const stavesmo62575 = new VF.Stave(1490, 1959, 317);
stavesmo62575.setAttribute('id', 'stavesmo62575');
stavesmo62575.setBegBarType(VF.Barline.type.NONE);
stavesmo62575.setContext(context);
stavesmo62575.draw();
smo62575v0.draw(context, stavesmo62575);
smo70367.setContext(context);
smo70367.draw();
smo70368.setContext(context);
smo70368.draw();
smo70369.setContext(context);
smo70369.draw();
smo70370.setContext(context);
smo70370.draw();
const stavesmo67578 = new VF.Stave(1490, 2049, 317);
stavesmo67578.setAttribute('id', 'stavesmo67578');
stavesmo67578.setBegBarType(VF.Barline.type.NONE);
stavesmo67578.setContext(context);
stavesmo67578.draw();
smo67578v0.draw(context, stavesmo67578);
smo70372.setContext(context);
smo70372.draw();
smo70373.setContext(context);
smo70373.draw();
smo70374.setContext(context);
smo70374.draw();
smo70375.setContext(context);
smo70375.draw();
const rightsmo58712stavesmo625751 = new VF.StaveConnector(stavesmo62575, stavesmo67578).setType(0);
rightsmo58712stavesmo625751.setContext(context).draw();
// modifier from 0-54-1-3 to 0-54-1-4
const smo71978 = new VF.StaveTie({ first_note: smo61612, last_note: smo61613, 
          firstNote: smo61612, lastNote: smo61613, first_indices: [0], last_indices: [0]});
smo71978.setContext(context).draw();
// modifier from 0-55-0-8 to 0-56-0-0
const smo71979 = new VF.StaveTie({ first_note: smo61643, last_note: null, 
          firstNote: smo61643, lastNote: null, first_indices: [0], last_indices: [0]});
smo71979.setContext(context).draw();
// modifier from 0-55-0-8 to 0-56-0-0
const smo71980 = new VF.StaveTie({ first_note: null, last_note: smo61668, 
          firstNote: null, lastNote: smo61668, first_indices: [0], last_indices: [0]});
smo71980.setContext(context).draw();
// modifier from 0-55-1-1 to 0-55-1-2
const smo71981 = new VF.StaveTie({ first_note: smo61645, last_note: smo61646, 
          firstNote: smo61645, lastNote: smo61646, first_indices: [0], last_indices: [0]});
smo71981.setContext(context).draw();
// modifier from 0-56-1-0 to 0-56-1-1
const smo71982 = new VF.StaveTie({ first_note: smo61684, last_note: smo61685, 
          firstNote: smo61684, lastNote: smo61685, first_indices: [0], last_indices: [0]});
smo71982.setContext(context).draw();
// modifier from 0-57-1-1 to 0-57-1-2
const smo71983 = new VF.StaveTie({ first_note: smo61712, last_note: smo61713, 
          firstNote: smo61712, lastNote: smo61713, first_indices: [0], last_indices: [0]});
smo71983.setContext(context).draw();
// modifier from 0-59-0-2 to 0-59-0-3
const smo71984 = new VF.StaveTie({ first_note: smo61759, last_note: smo61760, 
          firstNote: smo61759, lastNote: smo61760, first_indices: [0], last_indices: [0]});
smo71984.setContext(context).draw();
// modifier from 0-60-0-8 to 0-61-0-0
const smo71985 = new VF.StaveTie({ first_note: smo61801, last_note: smo61827, 
          firstNote: smo61801, lastNote: smo61827, first_indices: [0], last_indices: [0]});
smo71985.setContext(context).draw();
// modifier from 0-60-1-8 to 0-60-1-9
const smo71986 = new VF.StaveTie({ first_note: smo61810, last_note: smo61811, 
          firstNote: smo61810, lastNote: smo61811, first_indices: [0], last_indices: [0]});
smo71986.setContext(context).draw();
// modifier from 0-58-1-2 to 0-58-1-3
const smo71987 = new VF.StaveTie({ first_note: smo61738, last_note: smo61739, 
          firstNote: smo61738, lastNote: smo61739, first_indices: [0], last_indices: [0]});
smo71987.setContext(context).draw();
// modifier from 1-57-0-2 to 1-57-0-3
const smo71988 = new VF.StaveTie({ first_note: smo66734, last_note: smo66735, 
          firstNote: smo66734, lastNote: smo66735, first_indices: [0], last_indices: [0]});
smo71988.setContext(context).draw();
// modifier from 1-57-0-5 to 1-58-0-0
const smo71989 = new VF.StaveTie({ first_note: smo66737, last_note: smo66766, 
          firstNote: smo66737, lastNote: smo66766, first_indices: [0], last_indices: [0]});
smo71989.setContext(context).draw();
}