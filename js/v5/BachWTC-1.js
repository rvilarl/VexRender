// @@ Well-Tempered Clavier p 2/5  by Bach
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
const fmtsmo6070024 = new VF.Formatter();
//
// voices and notes for stave 0 24
const smo60700v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60700v0ar = [];
const smo60669 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60669.setAttribute('id', 'smo60669');
smo60700v0ar.push(smo60669);
const smo60670 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo60670.setAttribute('id', 'smo60670');
smo60700v0ar.push(smo60670);
const smo60671 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60671.setAttribute('id', 'smo60671');
smo60700v0ar.push(smo60671);
const smo60672 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60672.setAttribute('id', 'smo60672');
smo60700v0ar.push(smo60672);
const smo60673 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo60673.setAttribute('id', 'smo60673');
smo60700v0ar.push(smo60673);
const smo60674 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60674.setAttribute('id', 'smo60674');
smo60700v0ar.push(smo60674);
const smo60675 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60675.setAttribute('id', 'smo60675');
smo60700v0ar.push(smo60675);
const smo60676 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60676.setAttribute('id', 'smo60676');
smo60700v0ar.push(smo60676);
const smo60677 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo60677.setAttribute('id', 'smo60677');
smo60700v0ar.push(smo60677);
const smo60678 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60678.setAttribute('id', 'smo60678');
smo60700v0ar.push(smo60678);
const smo60679 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60679.setAttribute('id', 'smo60679');
smo60700v0ar.push(smo60679);
const smo60680 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo60680.setAttribute('id', 'smo60680');
smo60700v0ar.push(smo60680);
const smo60681 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60681.setAttribute('id', 'smo60681');
smo60700v0ar.push(smo60681);
const smo60682 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60682.setAttribute('id', 'smo60682');
smo60700v0ar.push(smo60682);
smo60700v0.addTickables(smo60700v0ar)
fmtsmo6070024.joinVoices([smo60700v0]);
const smo60700v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60700v1ar = [];
const smo60683 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60683.setAttribute('id', 'smo60683');
smo60683.setStyle({ fillStyle: '#aaaaaa7f' });
smo60700v1ar.push(smo60683);
const smo60684 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60684.setAttribute('id', 'smo60684');
smo60684.setStyle({ fillStyle: '#aaaaaa7f' });
smo60684.addModifier(new VF.Dot(), 0);
smo60684.addModifier(new VF.Dot(), 0);
smo60700v1ar.push(smo60684);
const smo60685 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60685.setAttribute('id', 'smo60685');
smo60685.setStyle({ fillStyle: '#aaaaaa7f' });
smo60700v1ar.push(smo60685);
const smo60686 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60686.setAttribute('id', 'smo60686');
smo60686.setStyle({ fillStyle: '#aaaaaa7f' });
smo60686.addModifier(new VF.Dot(), 0);
smo60686.addModifier(new VF.Dot(), 0);
smo60700v1ar.push(smo60686);
smo60700v1.addTickables(smo60700v1ar)
fmtsmo6070024.joinVoices([smo60700v1]);
const fmtsmo6590524 = new VF.Formatter();
//
// voices and notes for stave 1 24
const smo65905v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65905v0ar = [];
const smo65884 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo65884.setAttribute('id', 'smo65884');
smo65905v0ar.push(smo65884);
const smo65885 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo65885.setAttribute('id', 'smo65885');
smo65885.addModifier(new VF.Dot(), 0);
smo65905v0ar.push(smo65885);
const smo65886 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo65886.setAttribute('id', 'smo65886');
smo65905v0ar.push(smo65886);
const smo65887 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo65887.setAttribute('id', 'smo65887');
smo65905v0ar.push(smo65887);
const smo65888 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo65888.setAttribute('id', 'smo65888');
smo65888.addModifier(new VF.Dot(), 0);
smo65905v0ar.push(smo65888);
const smo65889 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo65889.setAttribute('id', 'smo65889');
smo65905v0ar.push(smo65889);
smo65905v0.addTickables(smo65905v0ar)
fmtsmo6590524.joinVoices([smo65905v0]);
const smo65905v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65905v1ar = [];
const smo65890 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo65890.setAttribute('id', 'smo65890');
smo65890.setStyle({ fillStyle: "#115511" });
smo65905v1ar.push(smo65890);
const smo65891 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo65891.setAttribute('id', 'smo65891');
smo65891.setStyle({ fillStyle: "#115511" });
smo65905v1ar.push(smo65891);
smo65905v1.addTickables(smo65905v1ar)
fmtsmo6590524.joinVoices([smo65905v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69534 = smo60670.getStemDirection();
smo60670.setStemDirection(dirsmo69534);
smo60671.setStemDirection(dirsmo69534);
const smo69534 = new VF.Beam([smo60670,smo60671]);
const dirsmo69535 = smo60672.getStemDirection();
smo60672.setStemDirection(dirsmo69535);
smo60673.setStemDirection(dirsmo69535);
smo60674.setStemDirection(dirsmo69535);
smo60675.setStemDirection(dirsmo69535);
const smo69535 = new VF.Beam([smo60672,smo60673,smo60674,smo60675]);
const dirsmo69536 = smo60677.getStemDirection();
smo60677.setStemDirection(dirsmo69536);
smo60678.setStemDirection(dirsmo69536);
const smo69536 = new VF.Beam([smo60677,smo60678]);
const dirsmo69537 = smo60679.getStemDirection();
smo60679.setStemDirection(dirsmo69537);
smo60680.setStemDirection(dirsmo69537);
smo60681.setStemDirection(dirsmo69537);
smo60682.setStemDirection(dirsmo69537);
const smo69537 = new VF.Beam([smo60679,smo60680,smo60681,smo60682]);
 
// formatting measures in staff group smo58712
fmtsmo6070024.format([smo60700v0,smo60700v1,smo65905v0,smo65905v1], 397);
const stavesmo60700 = new VF.Stave(90, 247, 448);
stavesmo60700.setAttribute('id', 'stavesmo60700');
stavesmo60700.setBegBarType(1);
stavesmo60700.addClef('treble');
stavesmo60700.setContext(context);
stavesmo60700.draw();
smo60700v0.draw(context, stavesmo60700);
smo60700v1.draw(context, stavesmo60700);
smo69534.setContext(context);
smo69534.draw();
smo69535.setContext(context);
smo69535.draw();
smo69536.setContext(context);
smo69536.draw();
smo69537.setContext(context);
smo69537.draw();
const stavesmo65905 = new VF.Stave(90, 396, 448);
stavesmo65905.setAttribute('id', 'stavesmo65905');
stavesmo65905.setBegBarType(1);
stavesmo65905.addClef('bass');
stavesmo65905.setContext(context);
stavesmo65905.draw();
smo65905v0.draw(context, stavesmo65905);
smo65905v1.draw(context, stavesmo65905);
const leftsmo58712stavesmo607001 = new VF.StaveConnector(stavesmo60700, stavesmo65905).setType(3);
leftsmo58712stavesmo607001.setContext(context).draw();
const fmtsmo6073225 = new VF.Formatter();
//
// voices and notes for stave 0 25
const smo60732v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60732v0ar = [];
const smo60701 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60701.setAttribute('id', 'smo60701');
smo60732v0ar.push(smo60701);
const smo60702 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo60702.setAttribute('id', 'smo60702');
smo60732v0ar.push(smo60702);
const smo60703 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60703.setAttribute('id', 'smo60703');
smo60732v0ar.push(smo60703);
const smo60704 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60704.setAttribute('id', 'smo60704');
smo60732v0ar.push(smo60704);
const smo60705 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo60705.setAttribute('id', 'smo60705');
smo60732v0ar.push(smo60705);
const smo60706 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60706.setAttribute('id', 'smo60706');
smo60732v0ar.push(smo60706);
const smo60707 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60707.setAttribute('id', 'smo60707');
smo60732v0ar.push(smo60707);
const smo60708 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60708.setAttribute('id', 'smo60708');
smo60732v0ar.push(smo60708);
const smo60709 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo60709.setAttribute('id', 'smo60709');
smo60732v0ar.push(smo60709);
const smo60710 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60710.setAttribute('id', 'smo60710');
smo60732v0ar.push(smo60710);
const smo60711 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60711.setAttribute('id', 'smo60711');
smo60732v0ar.push(smo60711);
const smo60712 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo60712.setAttribute('id', 'smo60712');
smo60732v0ar.push(smo60712);
const smo60713 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60713.setAttribute('id', 'smo60713');
smo60732v0ar.push(smo60713);
const smo60714 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60714.setAttribute('id', 'smo60714');
smo60732v0ar.push(smo60714);
smo60732v0.addTickables(smo60732v0ar)
fmtsmo6073225.joinVoices([smo60732v0]);
const smo60732v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60732v1ar = [];
const smo60715 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60715.setAttribute('id', 'smo60715');
smo60715.setStyle({ fillStyle: '#aaaaaa7f' });
smo60732v1ar.push(smo60715);
const smo60716 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60716.setAttribute('id', 'smo60716');
smo60716.setStyle({ fillStyle: '#aaaaaa7f' });
smo60716.addModifier(new VF.Dot(), 0);
smo60716.addModifier(new VF.Dot(), 0);
smo60732v1ar.push(smo60716);
const smo60717 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60717.setAttribute('id', 'smo60717');
smo60717.setStyle({ fillStyle: '#aaaaaa7f' });
smo60732v1ar.push(smo60717);
const smo60718 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60718.setAttribute('id', 'smo60718');
smo60718.setStyle({ fillStyle: '#aaaaaa7f' });
smo60718.addModifier(new VF.Dot(), 0);
smo60718.addModifier(new VF.Dot(), 0);
smo60732v1ar.push(smo60718);
smo60732v1.addTickables(smo60732v1ar)
fmtsmo6073225.joinVoices([smo60732v1]);
const fmtsmo6592725 = new VF.Formatter();
//
// voices and notes for stave 1 25
const smo65927v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65927v0ar = [];
const smo65906 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo65906.setAttribute('id', 'smo65906');
smo65927v0ar.push(smo65906);
const smo65907 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65907.setAttribute('id', 'smo65907');
smo65907.addModifier(new VF.Dot(), 0);
smo65927v0ar.push(smo65907);
const smo65908 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65908.setAttribute('id', 'smo65908');
smo65927v0ar.push(smo65908);
const smo65909 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo65909.setAttribute('id', 'smo65909');
smo65927v0ar.push(smo65909);
const smo65910 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65910.setAttribute('id', 'smo65910');
smo65910.addModifier(new VF.Dot(), 0);
smo65927v0ar.push(smo65910);
const smo65911 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65911.setAttribute('id', 'smo65911');
smo65927v0ar.push(smo65911);
smo65927v0.addTickables(smo65927v0ar)
fmtsmo6592725.joinVoices([smo65927v0]);
const smo65927v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65927v1ar = [];
const smo65912 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo65912.setAttribute('id', 'smo65912');
smo65912.setStyle({ fillStyle: "#115511" });
smo65927v1ar.push(smo65912);
const smo65913 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo65913.setAttribute('id', 'smo65913');
smo65913.setStyle({ fillStyle: "#115511" });
smo65927v1ar.push(smo65913);
smo65927v1.addTickables(smo65927v1ar)
fmtsmo6592725.joinVoices([smo65927v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69542 = smo60702.getStemDirection();
smo60702.setStemDirection(dirsmo69542);
smo60703.setStemDirection(dirsmo69542);
const smo69542 = new VF.Beam([smo60702,smo60703]);
const dirsmo69543 = smo60704.getStemDirection();
smo60704.setStemDirection(dirsmo69543);
smo60705.setStemDirection(dirsmo69543);
smo60706.setStemDirection(dirsmo69543);
smo60707.setStemDirection(dirsmo69543);
const smo69543 = new VF.Beam([smo60704,smo60705,smo60706,smo60707]);
const dirsmo69544 = smo60709.getStemDirection();
smo60709.setStemDirection(dirsmo69544);
smo60710.setStemDirection(dirsmo69544);
const smo69544 = new VF.Beam([smo60709,smo60710]);
const dirsmo69545 = smo60711.getStemDirection();
smo60711.setStemDirection(dirsmo69545);
smo60712.setStemDirection(dirsmo69545);
smo60713.setStemDirection(dirsmo69545);
smo60714.setStemDirection(dirsmo69545);
const smo69545 = new VF.Beam([smo60711,smo60712,smo60713,smo60714]);
 
// formatting measures in staff group smo58712
fmtsmo6073225.format([smo60732v0,smo60732v1,smo65927v0,smo65927v1], 396);
const stavesmo60732 = new VF.Stave(538, 247, 410);
stavesmo60732.setAttribute('id', 'stavesmo60732');
stavesmo60732.setBegBarType(VF.Barline.type.NONE);
stavesmo60732.setContext(context);
stavesmo60732.draw();
smo60732v0.draw(context, stavesmo60732);
smo60732v1.draw(context, stavesmo60732);
smo69542.setContext(context);
smo69542.draw();
smo69543.setContext(context);
smo69543.draw();
smo69544.setContext(context);
smo69544.draw();
smo69545.setContext(context);
smo69545.draw();
const stavesmo65927 = new VF.Stave(538, 396, 410);
stavesmo65927.setAttribute('id', 'stavesmo65927');
stavesmo65927.setBegBarType(VF.Barline.type.NONE);
stavesmo65927.setContext(context);
stavesmo65927.draw();
smo65927v0.draw(context, stavesmo65927);
smo65927v1.draw(context, stavesmo65927);
const fmtsmo6076426 = new VF.Formatter();
//
// voices and notes for stave 0 26
const smo60764v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60764v0ar = [];
const smo60733 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60733.setAttribute('id', 'smo60733');
smo60764v0ar.push(smo60733);
const smo60734 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo60734.setAttribute('id', 'smo60734');
smo60764v0ar.push(smo60734);
const smo60735 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo60735.setAttribute('id', 'smo60735');
smo60764v0ar.push(smo60735);
const smo60736 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60736.setAttribute('id', 'smo60736');
smo60764v0ar.push(smo60736);
const smo60737 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo60737.setAttribute('id', 'smo60737');
smo60764v0ar.push(smo60737);
const smo60738 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo60738.setAttribute('id', 'smo60738');
smo60764v0ar.push(smo60738);
const smo60739 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60739.setAttribute('id', 'smo60739');
smo60764v0ar.push(smo60739);
const smo60740 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60740.setAttribute('id', 'smo60740');
smo60764v0ar.push(smo60740);
const smo60741 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo60741.setAttribute('id', 'smo60741');
smo60764v0ar.push(smo60741);
const smo60742 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo60742.setAttribute('id', 'smo60742');
smo60764v0ar.push(smo60742);
const smo60743 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60743.setAttribute('id', 'smo60743');
smo60764v0ar.push(smo60743);
const smo60744 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo60744.setAttribute('id', 'smo60744');
smo60764v0ar.push(smo60744);
const smo60745 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo60745.setAttribute('id', 'smo60745');
smo60764v0ar.push(smo60745);
const smo60746 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60746.setAttribute('id', 'smo60746');
smo60764v0ar.push(smo60746);
smo60764v0.addTickables(smo60764v0ar)
fmtsmo6076426.joinVoices([smo60764v0]);
const smo60764v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60764v1ar = [];
const smo60747 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60747.setAttribute('id', 'smo60747');
smo60747.setStyle({ fillStyle: '#aaaaaa7f' });
smo60764v1ar.push(smo60747);
const smo60748 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60748.setAttribute('id', 'smo60748');
smo60748.setStyle({ fillStyle: '#aaaaaa7f' });
smo60748.addModifier(new VF.Dot(), 0);
smo60748.addModifier(new VF.Dot(), 0);
smo60764v1ar.push(smo60748);
const smo60749 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60749.setAttribute('id', 'smo60749');
smo60749.setStyle({ fillStyle: '#aaaaaa7f' });
smo60764v1ar.push(smo60749);
const smo60750 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60750.setAttribute('id', 'smo60750');
smo60750.setStyle({ fillStyle: '#aaaaaa7f' });
smo60750.addModifier(new VF.Dot(), 0);
smo60750.addModifier(new VF.Dot(), 0);
smo60764v1ar.push(smo60750);
smo60764v1.addTickables(smo60764v1ar)
fmtsmo6076426.joinVoices([smo60764v1]);
const fmtsmo6594926 = new VF.Formatter();
//
// voices and notes for stave 1 26
const smo65949v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65949v0ar = [];
const smo65928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo65928.setAttribute('id', 'smo65928');
smo65949v0ar.push(smo65928);
const smo65929 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65929.setAttribute('id', 'smo65929');
smo65929.addModifier(new VF.Dot(), 0);
smo65949v0ar.push(smo65929);
const smo65930 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65930.setAttribute('id', 'smo65930');
smo65949v0ar.push(smo65930);
const smo65931 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo65931.setAttribute('id', 'smo65931');
smo65949v0ar.push(smo65931);
const smo65932 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65932.setAttribute('id', 'smo65932');
smo65932.addModifier(new VF.Dot(), 0);
smo65949v0ar.push(smo65932);
const smo65933 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65933.setAttribute('id', 'smo65933');
smo65949v0ar.push(smo65933);
smo65949v0.addTickables(smo65949v0ar)
fmtsmo6594926.joinVoices([smo65949v0]);
const smo65949v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65949v1ar = [];
const smo65934 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo65934.setAttribute('id', 'smo65934');
smo65934.setStyle({ fillStyle: "#115511" });
smo65949v1ar.push(smo65934);
const smo65935 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo65935.setAttribute('id', 'smo65935');
smo65935.setStyle({ fillStyle: "#115511" });
smo65949v1ar.push(smo65935);
smo65949v1.addTickables(smo65949v1ar)
fmtsmo6594926.joinVoices([smo65949v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69550 = smo60734.getStemDirection();
smo60734.setStemDirection(dirsmo69550);
smo60735.setStemDirection(dirsmo69550);
const smo69550 = new VF.Beam([smo60734,smo60735]);
const dirsmo69551 = smo60736.getStemDirection();
smo60736.setStemDirection(dirsmo69551);
smo60737.setStemDirection(dirsmo69551);
smo60738.setStemDirection(dirsmo69551);
smo60739.setStemDirection(dirsmo69551);
const smo69551 = new VF.Beam([smo60736,smo60737,smo60738,smo60739]);
const dirsmo69552 = smo60741.getStemDirection();
smo60741.setStemDirection(dirsmo69552);
smo60742.setStemDirection(dirsmo69552);
const smo69552 = new VF.Beam([smo60741,smo60742]);
const dirsmo69553 = smo60743.getStemDirection();
smo60743.setStemDirection(dirsmo69553);
smo60744.setStemDirection(dirsmo69553);
smo60745.setStemDirection(dirsmo69553);
smo60746.setStemDirection(dirsmo69553);
const smo69553 = new VF.Beam([smo60743,smo60744,smo60745,smo60746]);
 
// formatting measures in staff group smo58712
fmtsmo6076426.format([smo60764v0,smo60764v1,smo65949v0,smo65949v1], 396);
const stavesmo60764 = new VF.Stave(948, 247, 410);
stavesmo60764.setAttribute('id', 'stavesmo60764');
stavesmo60764.setBegBarType(VF.Barline.type.NONE);
stavesmo60764.setContext(context);
stavesmo60764.draw();
smo60764v0.draw(context, stavesmo60764);
smo60764v1.draw(context, stavesmo60764);
smo69550.setContext(context);
smo69550.draw();
smo69551.setContext(context);
smo69551.draw();
smo69552.setContext(context);
smo69552.draw();
smo69553.setContext(context);
smo69553.draw();
const stavesmo65949 = new VF.Stave(948, 396, 410);
stavesmo65949.setAttribute('id', 'stavesmo65949');
stavesmo65949.setBegBarType(VF.Barline.type.NONE);
stavesmo65949.setContext(context);
stavesmo65949.draw();
smo65949v0.draw(context, stavesmo65949);
smo65949v1.draw(context, stavesmo65949);
const fmtsmo6079627 = new VF.Formatter();
//
// voices and notes for stave 0 27
const smo60796v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60796v0ar = [];
const smo60765 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60765.setAttribute('id', 'smo60765');
smo60796v0ar.push(smo60765);
const smo60766 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo60766.setAttribute('id', 'smo60766');
smo60796v0ar.push(smo60766);
const smo60767 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60767.setAttribute('id', 'smo60767');
smo60796v0ar.push(smo60767);
const smo60768 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo60768.setAttribute('id', 'smo60768');
const smo607680acc = new VF.Accidental('#');
smo60768.addModifier(smo607680acc, 0);
smo60796v0ar.push(smo60768);
const smo60769 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo60769.setAttribute('id', 'smo60769');
smo60796v0ar.push(smo60769);
const smo60770 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60770.setAttribute('id', 'smo60770');
smo60796v0ar.push(smo60770);
const smo60771 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo60771.setAttribute('id', 'smo60771');
smo60796v0ar.push(smo60771);
const smo60772 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60772.setAttribute('id', 'smo60772');
smo60796v0ar.push(smo60772);
const smo60773 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo60773.setAttribute('id', 'smo60773');
smo60796v0ar.push(smo60773);
const smo60774 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60774.setAttribute('id', 'smo60774');
smo60796v0ar.push(smo60774);
const smo60775 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo60775.setAttribute('id', 'smo60775');
smo60796v0ar.push(smo60775);
const smo60776 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo60776.setAttribute('id', 'smo60776');
smo60796v0ar.push(smo60776);
const smo60777 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60777.setAttribute('id', 'smo60777');
smo60796v0ar.push(smo60777);
const smo60778 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo60778.setAttribute('id', 'smo60778');
smo60796v0ar.push(smo60778);
smo60796v0.addTickables(smo60796v0ar)
fmtsmo6079627.joinVoices([smo60796v0]);
const smo60796v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60796v1ar = [];
const smo60779 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60779.setAttribute('id', 'smo60779');
smo60779.setStyle({ fillStyle: '#aaaaaa7f' });
smo60796v1ar.push(smo60779);
const smo60780 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60780.setAttribute('id', 'smo60780');
smo60780.setStyle({ fillStyle: '#aaaaaa7f' });
smo60780.addModifier(new VF.Dot(), 0);
smo60780.addModifier(new VF.Dot(), 0);
smo60796v1ar.push(smo60780);
const smo60781 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/3/r"]}'))
smo60781.setAttribute('id', 'smo60781');
smo60781.setStyle({ fillStyle: "#115511" });
smo60796v1ar.push(smo60781);
const smo60782 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60782.setAttribute('id', 'smo60782');
smo60782.setStyle({ fillStyle: '#aaaaaa7f' });
smo60782.addModifier(new VF.Dot(), 0);
smo60782.addModifier(new VF.Dot(), 0);
smo60796v1ar.push(smo60782);
smo60796v1.addTickables(smo60796v1ar)
fmtsmo6079627.joinVoices([smo60796v1]);
const fmtsmo6597127 = new VF.Formatter();
//
// voices and notes for stave 1 27
const smo65971v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65971v0ar = [];
const smo65950 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo65950.setAttribute('id', 'smo65950');
smo65971v0ar.push(smo65950);
const smo65951 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/3/n"]}'))
smo65951.setAttribute('id', 'smo65951');
const smo659510acc = new VF.Accidental('#');
smo65951.addModifier(smo659510acc, 0);
smo65951.addModifier(new VF.Dot(), 0);
smo65971v0ar.push(smo65951);
const smo65952 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/3/n"]}'))
smo65952.setAttribute('id', 'smo65952');
smo65971v0ar.push(smo65952);
const smo65953 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo65953.setAttribute('id', 'smo65953');
smo65971v0ar.push(smo65953);
const smo65954 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/3/n"]}'))
smo65954.setAttribute('id', 'smo65954');
smo65954.addModifier(new VF.Dot(), 0);
smo65971v0ar.push(smo65954);
const smo65955 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/3/n"]}'))
smo65955.setAttribute('id', 'smo65955');
smo65971v0ar.push(smo65955);
smo65971v0.addTickables(smo65971v0ar)
fmtsmo6597127.joinVoices([smo65971v0]);
const smo65971v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65971v1ar = [];
const smo65956 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo65956.setAttribute('id', 'smo65956');
smo65956.setStyle({ fillStyle: "#115511" });
smo65971v1ar.push(smo65956);
const smo65957 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo65957.setAttribute('id', 'smo65957');
smo65957.setStyle({ fillStyle: "#115511" });
smo65971v1ar.push(smo65957);
smo65971v1.addTickables(smo65971v1ar)
fmtsmo6597127.joinVoices([smo65971v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69558 = smo60766.getStemDirection();
smo60766.setStemDirection(dirsmo69558);
smo60767.setStemDirection(dirsmo69558);
const smo69558 = new VF.Beam([smo60766,smo60767]);
const dirsmo69559 = smo60768.getStemDirection();
smo60768.setStemDirection(dirsmo69559);
smo60769.setStemDirection(dirsmo69559);
smo60770.setStemDirection(dirsmo69559);
smo60771.setStemDirection(dirsmo69559);
const smo69559 = new VF.Beam([smo60768,smo60769,smo60770,smo60771]);
const dirsmo69560 = smo60773.getStemDirection();
smo60773.setStemDirection(dirsmo69560);
smo60774.setStemDirection(dirsmo69560);
const smo69560 = new VF.Beam([smo60773,smo60774]);
const dirsmo69561 = smo60775.getStemDirection();
smo60775.setStemDirection(dirsmo69561);
smo60776.setStemDirection(dirsmo69561);
smo60777.setStemDirection(dirsmo69561);
smo60778.setStemDirection(dirsmo69561);
const smo69561 = new VF.Beam([smo60775,smo60776,smo60777,smo60778]);
 
// formatting measures in staff group smo58712
fmtsmo6079627.format([smo60796v0,smo60796v1,smo65971v0,smo65971v1], 436);
const stavesmo60796 = new VF.Stave(1358, 247, 450);
stavesmo60796.setAttribute('id', 'stavesmo60796');
stavesmo60796.setBegBarType(VF.Barline.type.NONE);
stavesmo60796.setContext(context);
stavesmo60796.draw();
smo60796v0.draw(context, stavesmo60796);
smo60796v1.draw(context, stavesmo60796);
smo69558.setContext(context);
smo69558.draw();
smo69559.setContext(context);
smo69559.draw();
smo69560.setContext(context);
smo69560.draw();
smo69561.setContext(context);
smo69561.draw();
const stavesmo65971 = new VF.Stave(1358, 396, 450);
stavesmo65971.setAttribute('id', 'stavesmo65971');
stavesmo65971.setBegBarType(VF.Barline.type.NONE);
stavesmo65971.setContext(context);
stavesmo65971.draw();
smo65971v0.draw(context, stavesmo65971);
smo65971v1.draw(context, stavesmo65971);
const rightsmo58712stavesmo607961 = new VF.StaveConnector(stavesmo60796, stavesmo65971).setType(0);
rightsmo58712stavesmo607961.setContext(context).draw();
const fmtsmo6082828 = new VF.Formatter();
//
// voices and notes for stave 0 28
const smo60828v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60828v0ar = [];
const smo60797 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60797.setAttribute('id', 'smo60797');
smo60828v0ar.push(smo60797);
const smo60798 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo60798.setAttribute('id', 'smo60798');
smo60828v0ar.push(smo60798);
const smo60799 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60799.setAttribute('id', 'smo60799');
smo60828v0ar.push(smo60799);
const smo60800 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60800.setAttribute('id', 'smo60800');
smo60828v0ar.push(smo60800);
const smo60801 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo60801.setAttribute('id', 'smo60801');
smo60828v0ar.push(smo60801);
const smo60802 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60802.setAttribute('id', 'smo60802');
smo60828v0ar.push(smo60802);
const smo60803 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60803.setAttribute('id', 'smo60803');
smo60828v0ar.push(smo60803);
const smo60804 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60804.setAttribute('id', 'smo60804');
smo60828v0ar.push(smo60804);
const smo60805 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo60805.setAttribute('id', 'smo60805');
smo60828v0ar.push(smo60805);
const smo60806 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60806.setAttribute('id', 'smo60806');
smo60828v0ar.push(smo60806);
const smo60807 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60807.setAttribute('id', 'smo60807');
smo60828v0ar.push(smo60807);
const smo60808 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo60808.setAttribute('id', 'smo60808');
smo60828v0ar.push(smo60808);
const smo60809 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60809.setAttribute('id', 'smo60809');
smo60828v0ar.push(smo60809);
const smo60810 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60810.setAttribute('id', 'smo60810');
smo60828v0ar.push(smo60810);
smo60828v0.addTickables(smo60828v0ar)
fmtsmo6082828.joinVoices([smo60828v0]);
const smo60828v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60828v1ar = [];
const smo60811 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60811.setAttribute('id', 'smo60811');
smo60811.setStyle({ fillStyle: '#aaaaaa7f' });
smo60828v1ar.push(smo60811);
const smo60812 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60812.setAttribute('id', 'smo60812');
smo60812.setStyle({ fillStyle: '#aaaaaa7f' });
smo60812.addModifier(new VF.Dot(), 0);
smo60812.addModifier(new VF.Dot(), 0);
smo60828v1ar.push(smo60812);
const smo60813 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60813.setAttribute('id', 'smo60813');
smo60813.setStyle({ fillStyle: '#aaaaaa7f' });
smo60828v1ar.push(smo60813);
const smo60814 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60814.setAttribute('id', 'smo60814');
smo60814.setStyle({ fillStyle: '#aaaaaa7f' });
smo60814.addModifier(new VF.Dot(), 0);
smo60814.addModifier(new VF.Dot(), 0);
smo60828v1ar.push(smo60814);
smo60828v1.addTickables(smo60828v1ar)
fmtsmo6082828.joinVoices([smo60828v1]);
const fmtsmo6599328 = new VF.Formatter();
//
// voices and notes for stave 1 28
const smo65993v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65993v0ar = [];
const smo65972 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo65972.setAttribute('id', 'smo65972');
smo65993v0ar.push(smo65972);
const smo65973 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo65973.setAttribute('id', 'smo65973');
smo65973.addModifier(new VF.Dot(), 0);
smo65993v0ar.push(smo65973);
const smo65974 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo65974.setAttribute('id', 'smo65974');
smo65993v0ar.push(smo65974);
const smo65975 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo65975.setAttribute('id', 'smo65975');
smo65993v0ar.push(smo65975);
const smo65976 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo65976.setAttribute('id', 'smo65976');
smo65976.addModifier(new VF.Dot(), 0);
smo65993v0ar.push(smo65976);
const smo65977 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo65977.setAttribute('id', 'smo65977');
smo65993v0ar.push(smo65977);
smo65993v0.addTickables(smo65993v0ar)
fmtsmo6599328.joinVoices([smo65993v0]);
const smo65993v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65993v1ar = [];
const smo65978 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo65978.setAttribute('id', 'smo65978');
smo65978.setStyle({ fillStyle: "#115511" });
smo65993v1ar.push(smo65978);
const smo65979 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo65979.setAttribute('id', 'smo65979');
smo65979.setStyle({ fillStyle: "#115511" });
smo65993v1ar.push(smo65979);
smo65993v1.addTickables(smo65993v1ar)
fmtsmo6599328.joinVoices([smo65993v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69575 = smo60798.getStemDirection();
smo60798.setStemDirection(dirsmo69575);
smo60799.setStemDirection(dirsmo69575);
const smo69575 = new VF.Beam([smo60798,smo60799]);
const dirsmo69576 = smo60800.getStemDirection();
smo60800.setStemDirection(dirsmo69576);
smo60801.setStemDirection(dirsmo69576);
smo60802.setStemDirection(dirsmo69576);
smo60803.setStemDirection(dirsmo69576);
const smo69576 = new VF.Beam([smo60800,smo60801,smo60802,smo60803]);
const dirsmo69577 = smo60805.getStemDirection();
smo60805.setStemDirection(dirsmo69577);
smo60806.setStemDirection(dirsmo69577);
const smo69577 = new VF.Beam([smo60805,smo60806]);
const dirsmo69578 = smo60807.getStemDirection();
smo60807.setStemDirection(dirsmo69578);
smo60808.setStemDirection(dirsmo69578);
smo60809.setStemDirection(dirsmo69578);
smo60810.setStemDirection(dirsmo69578);
const smo69578 = new VF.Beam([smo60807,smo60808,smo60809,smo60810]);
 
// formatting measures in staff group smo58712
fmtsmo6082828.format([smo60828v0,smo60828v1,smo65993v0,smo65993v1], 398);
const stavesmo60828 = new VF.Stave(90, 523, 449);
stavesmo60828.setAttribute('id', 'stavesmo60828');
stavesmo60828.setBegBarType(1);
stavesmo60828.addClef('treble');
stavesmo60828.setContext(context);
stavesmo60828.draw();
smo60828v0.draw(context, stavesmo60828);
smo60828v1.draw(context, stavesmo60828);
smo69575.setContext(context);
smo69575.draw();
smo69576.setContext(context);
smo69576.draw();
smo69577.setContext(context);
smo69577.draw();
smo69578.setContext(context);
smo69578.draw();
const stavesmo65993 = new VF.Stave(90, 672, 449);
stavesmo65993.setAttribute('id', 'stavesmo65993');
stavesmo65993.setBegBarType(1);
stavesmo65993.addClef('bass');
stavesmo65993.setContext(context);
stavesmo65993.draw();
smo65993v0.draw(context, stavesmo65993);
smo65993v1.draw(context, stavesmo65993);
const leftsmo58712stavesmo608281 = new VF.StaveConnector(stavesmo60828, stavesmo65993).setType(3);
leftsmo58712stavesmo608281.setContext(context).draw();
const fmtsmo6086029 = new VF.Formatter();
//
// voices and notes for stave 0 29
const smo60860v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60860v0ar = [];
const smo60829 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60829.setAttribute('id', 'smo60829');
smo60860v0ar.push(smo60829);
const smo60830 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo60830.setAttribute('id', 'smo60830');
smo60860v0ar.push(smo60830);
const smo60831 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60831.setAttribute('id', 'smo60831');
smo60860v0ar.push(smo60831);
const smo60832 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60832.setAttribute('id', 'smo60832');
smo60860v0ar.push(smo60832);
const smo60833 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo60833.setAttribute('id', 'smo60833');
smo60860v0ar.push(smo60833);
const smo60834 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60834.setAttribute('id', 'smo60834');
smo60860v0ar.push(smo60834);
const smo60835 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60835.setAttribute('id', 'smo60835');
smo60860v0ar.push(smo60835);
const smo60836 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60836.setAttribute('id', 'smo60836');
smo60860v0ar.push(smo60836);
const smo60837 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo60837.setAttribute('id', 'smo60837');
smo60860v0ar.push(smo60837);
const smo60838 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60838.setAttribute('id', 'smo60838');
smo60860v0ar.push(smo60838);
const smo60839 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60839.setAttribute('id', 'smo60839');
smo60860v0ar.push(smo60839);
const smo60840 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo60840.setAttribute('id', 'smo60840');
smo60860v0ar.push(smo60840);
const smo60841 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60841.setAttribute('id', 'smo60841');
smo60860v0ar.push(smo60841);
const smo60842 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60842.setAttribute('id', 'smo60842');
smo60860v0ar.push(smo60842);
smo60860v0.addTickables(smo60860v0ar)
fmtsmo6086029.joinVoices([smo60860v0]);
const smo60860v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60860v1ar = [];
const smo60843 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60843.setAttribute('id', 'smo60843');
smo60843.setStyle({ fillStyle: '#aaaaaa7f' });
smo60860v1ar.push(smo60843);
const smo60844 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60844.setAttribute('id', 'smo60844');
smo60844.setStyle({ fillStyle: '#aaaaaa7f' });
smo60844.addModifier(new VF.Dot(), 0);
smo60844.addModifier(new VF.Dot(), 0);
smo60860v1ar.push(smo60844);
const smo60845 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60845.setAttribute('id', 'smo60845');
smo60845.setStyle({ fillStyle: '#aaaaaa7f' });
smo60860v1ar.push(smo60845);
const smo60846 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60846.setAttribute('id', 'smo60846');
smo60846.setStyle({ fillStyle: '#aaaaaa7f' });
smo60846.addModifier(new VF.Dot(), 0);
smo60846.addModifier(new VF.Dot(), 0);
smo60860v1ar.push(smo60846);
smo60860v1.addTickables(smo60860v1ar)
fmtsmo6086029.joinVoices([smo60860v1]);
const fmtsmo6601529 = new VF.Formatter();
//
// voices and notes for stave 1 29
const smo66015v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66015v0ar = [];
const smo65994 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo65994.setAttribute('id', 'smo65994');
smo66015v0ar.push(smo65994);
const smo65995 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65995.setAttribute('id', 'smo65995');
smo65995.addModifier(new VF.Dot(), 0);
smo66015v0ar.push(smo65995);
const smo65996 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65996.setAttribute('id', 'smo65996');
smo66015v0ar.push(smo65996);
const smo65997 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo65997.setAttribute('id', 'smo65997');
smo66015v0ar.push(smo65997);
const smo65998 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65998.setAttribute('id', 'smo65998');
smo65998.addModifier(new VF.Dot(), 0);
smo66015v0ar.push(smo65998);
const smo65999 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65999.setAttribute('id', 'smo65999');
smo66015v0ar.push(smo65999);
smo66015v0.addTickables(smo66015v0ar)
fmtsmo6601529.joinVoices([smo66015v0]);
const smo66015v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66015v1ar = [];
const smo66000 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo66000.setAttribute('id', 'smo66000');
smo66000.setStyle({ fillStyle: "#115511" });
smo66015v1ar.push(smo66000);
const smo66001 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo66001.setAttribute('id', 'smo66001');
smo66001.setStyle({ fillStyle: "#115511" });
smo66015v1ar.push(smo66001);
smo66015v1.addTickables(smo66015v1ar)
fmtsmo6601529.joinVoices([smo66015v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69583 = smo60830.getStemDirection();
smo60830.setStemDirection(dirsmo69583);
smo60831.setStemDirection(dirsmo69583);
const smo69583 = new VF.Beam([smo60830,smo60831]);
const dirsmo69584 = smo60832.getStemDirection();
smo60832.setStemDirection(dirsmo69584);
smo60833.setStemDirection(dirsmo69584);
smo60834.setStemDirection(dirsmo69584);
smo60835.setStemDirection(dirsmo69584);
const smo69584 = new VF.Beam([smo60832,smo60833,smo60834,smo60835]);
const dirsmo69585 = smo60837.getStemDirection();
smo60837.setStemDirection(dirsmo69585);
smo60838.setStemDirection(dirsmo69585);
const smo69585 = new VF.Beam([smo60837,smo60838]);
const dirsmo69586 = smo60839.getStemDirection();
smo60839.setStemDirection(dirsmo69586);
smo60840.setStemDirection(dirsmo69586);
smo60841.setStemDirection(dirsmo69586);
smo60842.setStemDirection(dirsmo69586);
const smo69586 = new VF.Beam([smo60839,smo60840,smo60841,smo60842]);
 
// formatting measures in staff group smo58712
fmtsmo6086029.format([smo60860v0,smo60860v1,smo66015v0,smo66015v1], 397);
const stavesmo60860 = new VF.Stave(539, 523, 411);
stavesmo60860.setAttribute('id', 'stavesmo60860');
stavesmo60860.setBegBarType(VF.Barline.type.NONE);
stavesmo60860.setContext(context);
stavesmo60860.draw();
smo60860v0.draw(context, stavesmo60860);
smo60860v1.draw(context, stavesmo60860);
smo69583.setContext(context);
smo69583.draw();
smo69584.setContext(context);
smo69584.draw();
smo69585.setContext(context);
smo69585.draw();
smo69586.setContext(context);
smo69586.draw();
const stavesmo66015 = new VF.Stave(539, 672, 411);
stavesmo66015.setAttribute('id', 'stavesmo66015');
stavesmo66015.setBegBarType(VF.Barline.type.NONE);
stavesmo66015.setContext(context);
stavesmo66015.draw();
smo66015v0.draw(context, stavesmo66015);
smo66015v1.draw(context, stavesmo66015);
const fmtsmo6089230 = new VF.Formatter();
//
// voices and notes for stave 0 30
const smo60892v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60892v0ar = [];
const smo60861 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60861.setAttribute('id', 'smo60861');
smo60892v0ar.push(smo60861);
const smo60862 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo60862.setAttribute('id', 'smo60862');
smo60892v0ar.push(smo60862);
const smo60863 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo60863.setAttribute('id', 'smo60863');
smo60892v0ar.push(smo60863);
const smo60864 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60864.setAttribute('id', 'smo60864');
smo60892v0ar.push(smo60864);
const smo60865 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo60865.setAttribute('id', 'smo60865');
smo60892v0ar.push(smo60865);
const smo60866 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo60866.setAttribute('id', 'smo60866');
smo60892v0ar.push(smo60866);
const smo60867 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60867.setAttribute('id', 'smo60867');
smo60892v0ar.push(smo60867);
const smo60868 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60868.setAttribute('id', 'smo60868');
smo60892v0ar.push(smo60868);
const smo60869 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo60869.setAttribute('id', 'smo60869');
smo60892v0ar.push(smo60869);
const smo60870 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo60870.setAttribute('id', 'smo60870');
smo60892v0ar.push(smo60870);
const smo60871 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60871.setAttribute('id', 'smo60871');
smo60892v0ar.push(smo60871);
const smo60872 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo60872.setAttribute('id', 'smo60872');
smo60892v0ar.push(smo60872);
const smo60873 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo60873.setAttribute('id', 'smo60873');
smo60892v0ar.push(smo60873);
const smo60874 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60874.setAttribute('id', 'smo60874');
smo60892v0ar.push(smo60874);
smo60892v0.addTickables(smo60892v0ar)
fmtsmo6089230.joinVoices([smo60892v0]);
const smo60892v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60892v1ar = [];
const smo60875 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60875.setAttribute('id', 'smo60875');
smo60875.setStyle({ fillStyle: '#aaaaaa7f' });
smo60892v1ar.push(smo60875);
const smo60876 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60876.setAttribute('id', 'smo60876');
smo60876.setStyle({ fillStyle: '#aaaaaa7f' });
smo60876.addModifier(new VF.Dot(), 0);
smo60876.addModifier(new VF.Dot(), 0);
smo60892v1ar.push(smo60876);
const smo60877 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60877.setAttribute('id', 'smo60877');
smo60877.setStyle({ fillStyle: '#aaaaaa7f' });
smo60892v1ar.push(smo60877);
const smo60878 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60878.setAttribute('id', 'smo60878');
smo60878.setStyle({ fillStyle: '#aaaaaa7f' });
smo60878.addModifier(new VF.Dot(), 0);
smo60878.addModifier(new VF.Dot(), 0);
smo60892v1ar.push(smo60878);
smo60892v1.addTickables(smo60892v1ar)
fmtsmo6089230.joinVoices([smo60892v1]);
const fmtsmo6603730 = new VF.Formatter();
//
// voices and notes for stave 1 30
const smo66037v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66037v0ar = [];
const smo66016 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo66016.setAttribute('id', 'smo66016');
smo66037v0ar.push(smo66016);
const smo66017 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo66017.setAttribute('id', 'smo66017');
smo66017.addModifier(new VF.Dot(), 0);
smo66037v0ar.push(smo66017);
const smo66018 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo66018.setAttribute('id', 'smo66018');
smo66037v0ar.push(smo66018);
const smo66019 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo66019.setAttribute('id', 'smo66019');
smo66037v0ar.push(smo66019);
const smo66020 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo66020.setAttribute('id', 'smo66020');
smo66020.addModifier(new VF.Dot(), 0);
smo66037v0ar.push(smo66020);
const smo66021 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo66021.setAttribute('id', 'smo66021');
smo66037v0ar.push(smo66021);
smo66037v0.addTickables(smo66037v0ar)
fmtsmo6603730.joinVoices([smo66037v0]);
const smo66037v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66037v1ar = [];
const smo66022 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo66022.setAttribute('id', 'smo66022');
smo66022.setStyle({ fillStyle: "#115511" });
smo66037v1ar.push(smo66022);
const smo66023 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo66023.setAttribute('id', 'smo66023');
smo66023.setStyle({ fillStyle: "#115511" });
smo66037v1ar.push(smo66023);
smo66037v1.addTickables(smo66037v1ar)
fmtsmo6603730.joinVoices([smo66037v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69591 = smo60862.getStemDirection();
smo60862.setStemDirection(dirsmo69591);
smo60863.setStemDirection(dirsmo69591);
const smo69591 = new VF.Beam([smo60862,smo60863]);
const dirsmo69592 = smo60864.getStemDirection();
smo60864.setStemDirection(dirsmo69592);
smo60865.setStemDirection(dirsmo69592);
smo60866.setStemDirection(dirsmo69592);
smo60867.setStemDirection(dirsmo69592);
const smo69592 = new VF.Beam([smo60864,smo60865,smo60866,smo60867]);
const dirsmo69593 = smo60869.getStemDirection();
smo60869.setStemDirection(dirsmo69593);
smo60870.setStemDirection(dirsmo69593);
const smo69593 = new VF.Beam([smo60869,smo60870]);
const dirsmo69594 = smo60871.getStemDirection();
smo60871.setStemDirection(dirsmo69594);
smo60872.setStemDirection(dirsmo69594);
smo60873.setStemDirection(dirsmo69594);
smo60874.setStemDirection(dirsmo69594);
const smo69594 = new VF.Beam([smo60871,smo60872,smo60873,smo60874]);
 
// formatting measures in staff group smo58712
fmtsmo6089230.format([smo60892v0,smo60892v1,smo66037v0,smo66037v1], 397);
const stavesmo60892 = new VF.Stave(950, 523, 411);
stavesmo60892.setAttribute('id', 'stavesmo60892');
stavesmo60892.setBegBarType(VF.Barline.type.NONE);
stavesmo60892.setContext(context);
stavesmo60892.draw();
smo60892v0.draw(context, stavesmo60892);
smo60892v1.draw(context, stavesmo60892);
smo69591.setContext(context);
smo69591.draw();
smo69592.setContext(context);
smo69592.draw();
smo69593.setContext(context);
smo69593.draw();
smo69594.setContext(context);
smo69594.draw();
const stavesmo66037 = new VF.Stave(950, 672, 411);
stavesmo66037.setAttribute('id', 'stavesmo66037');
stavesmo66037.setBegBarType(VF.Barline.type.NONE);
stavesmo66037.setContext(context);
stavesmo66037.draw();
smo66037v0.draw(context, stavesmo66037);
smo66037v1.draw(context, stavesmo66037);
const fmtsmo6092431 = new VF.Formatter();
//
// voices and notes for stave 0 31
const smo60924v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60924v0ar = [];
const smo60893 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60893.setAttribute('id', 'smo60893');
smo60924v0ar.push(smo60893);
const smo60894 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo60894.setAttribute('id', 'smo60894');
smo60924v0ar.push(smo60894);
const smo60895 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/3/n"]}'))
smo60895.setAttribute('id', 'smo60895');
const smo608950acc = new VF.Accidental('b');
smo60895.addModifier(smo608950acc, 0);
smo60924v0ar.push(smo60895);
const smo60896 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60896.setAttribute('id', 'smo60896');
smo60924v0ar.push(smo60896);
const smo60897 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo60897.setAttribute('id', 'smo60897');
smo60924v0ar.push(smo60897);
const smo60898 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/3/n"]}'))
smo60898.setAttribute('id', 'smo60898');
smo60924v0ar.push(smo60898);
const smo60899 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60899.setAttribute('id', 'smo60899');
smo60924v0ar.push(smo60899);
const smo60900 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60900.setAttribute('id', 'smo60900');
smo60924v0ar.push(smo60900);
const smo60901 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo60901.setAttribute('id', 'smo60901');
smo60924v0ar.push(smo60901);
const smo60902 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/3/n"]}'))
smo60902.setAttribute('id', 'smo60902');
smo60924v0ar.push(smo60902);
const smo60903 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60903.setAttribute('id', 'smo60903');
smo60924v0ar.push(smo60903);
const smo60904 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo60904.setAttribute('id', 'smo60904');
smo60924v0ar.push(smo60904);
const smo60905 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/3/n"]}'))
smo60905.setAttribute('id', 'smo60905');
smo60924v0ar.push(smo60905);
const smo60906 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60906.setAttribute('id', 'smo60906');
smo60924v0ar.push(smo60906);
smo60924v0.addTickables(smo60924v0ar)
fmtsmo6092431.joinVoices([smo60924v0]);
const smo60924v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60924v1ar = [];
const smo60907 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60907.setAttribute('id', 'smo60907');
smo60907.setStyle({ fillStyle: '#aaaaaa7f' });
smo60924v1ar.push(smo60907);
const smo60908 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60908.setAttribute('id', 'smo60908');
smo60908.setStyle({ fillStyle: '#aaaaaa7f' });
smo60908.addModifier(new VF.Dot(), 0);
smo60908.addModifier(new VF.Dot(), 0);
smo60924v1ar.push(smo60908);
const smo60909 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60909.setAttribute('id', 'smo60909');
smo60909.setStyle({ fillStyle: '#aaaaaa7f' });
smo60924v1ar.push(smo60909);
const smo60910 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60910.setAttribute('id', 'smo60910');
smo60910.setStyle({ fillStyle: '#aaaaaa7f' });
smo60910.addModifier(new VF.Dot(), 0);
smo60910.addModifier(new VF.Dot(), 0);
smo60924v1ar.push(smo60910);
smo60924v1.addTickables(smo60924v1ar)
fmtsmo6092431.joinVoices([smo60924v1]);
const fmtsmo6605931 = new VF.Formatter();
//
// voices and notes for stave 1 31
const smo66059v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66059v0ar = [];
const smo66038 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo66038.setAttribute('id', 'smo66038');
smo66059v0ar.push(smo66038);
const smo66039 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/3/n"]}'))
smo66039.setAttribute('id', 'smo66039');
smo66039.addModifier(new VF.Dot(), 0);
smo66059v0ar.push(smo66039);
const smo66040 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/3/n"]}'))
smo66040.setAttribute('id', 'smo66040');
smo66059v0ar.push(smo66040);
const smo66041 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo66041.setAttribute('id', 'smo66041');
smo66059v0ar.push(smo66041);
const smo66042 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/3/n"]}'))
smo66042.setAttribute('id', 'smo66042');
smo66042.addModifier(new VF.Dot(), 0);
smo66059v0ar.push(smo66042);
const smo66043 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/3/n"]}'))
smo66043.setAttribute('id', 'smo66043');
smo66059v0ar.push(smo66043);
smo66059v0.addTickables(smo66059v0ar)
fmtsmo6605931.joinVoices([smo66059v0]);
const smo66059v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66059v1ar = [];
const smo66044 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/2/n"]}'))
smo66044.setAttribute('id', 'smo66044');
smo66044.setStyle({ fillStyle: "#115511" });
smo66059v1ar.push(smo66044);
const smo66045 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/2/n"]}'))
smo66045.setAttribute('id', 'smo66045');
smo66045.setStyle({ fillStyle: "#115511" });
smo66059v1ar.push(smo66045);
smo66059v1.addTickables(smo66059v1ar)
fmtsmo6605931.joinVoices([smo66059v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69599 = smo60894.getStemDirection();
smo60894.setStemDirection(dirsmo69599);
smo60895.setStemDirection(dirsmo69599);
const smo69599 = new VF.Beam([smo60894,smo60895]);
const dirsmo69600 = smo60896.getStemDirection();
smo60896.setStemDirection(dirsmo69600);
smo60897.setStemDirection(dirsmo69600);
smo60898.setStemDirection(dirsmo69600);
smo60899.setStemDirection(dirsmo69600);
const smo69600 = new VF.Beam([smo60896,smo60897,smo60898,smo60899]);
const dirsmo69601 = smo60901.getStemDirection();
smo60901.setStemDirection(dirsmo69601);
smo60902.setStemDirection(dirsmo69601);
const smo69601 = new VF.Beam([smo60901,smo60902]);
const dirsmo69602 = smo60903.getStemDirection();
smo60903.setStemDirection(dirsmo69602);
smo60904.setStemDirection(dirsmo69602);
smo60905.setStemDirection(dirsmo69602);
smo60906.setStemDirection(dirsmo69602);
const smo69602 = new VF.Beam([smo60903,smo60904,smo60905,smo60906]);
 
// formatting measures in staff group smo58712
fmtsmo6092431.format([smo60924v0,smo60924v1,smo66059v0,smo66059v1], 433);
const stavesmo60924 = new VF.Stave(1361, 523, 447);
stavesmo60924.setAttribute('id', 'stavesmo60924');
stavesmo60924.setBegBarType(VF.Barline.type.NONE);
stavesmo60924.setContext(context);
stavesmo60924.draw();
smo60924v0.draw(context, stavesmo60924);
smo60924v1.draw(context, stavesmo60924);
smo69599.setContext(context);
smo69599.draw();
smo69600.setContext(context);
smo69600.draw();
smo69601.setContext(context);
smo69601.draw();
smo69602.setContext(context);
smo69602.draw();
const stavesmo66059 = new VF.Stave(1361, 672, 447);
stavesmo66059.setAttribute('id', 'stavesmo66059');
stavesmo66059.setBegBarType(VF.Barline.type.NONE);
stavesmo66059.setContext(context);
stavesmo66059.draw();
smo66059v0.draw(context, stavesmo66059);
smo66059v1.draw(context, stavesmo66059);
const rightsmo58712stavesmo609241 = new VF.StaveConnector(stavesmo60924, stavesmo66059).setType(0);
rightsmo58712stavesmo609241.setContext(context).draw();
const fmtsmo6095532 = new VF.Formatter();
//
// voices and notes for stave 0 32
const smo60955v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60955v0ar = [];
const smo60925 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60925.setAttribute('id', 'smo60925');
smo60955v0ar.push(smo60925);
const smo60926 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo60926.setAttribute('id', 'smo60926');
smo60955v0ar.push(smo60926);
const smo60927 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo60927.setAttribute('id', 'smo60927');
smo60955v0ar.push(smo60927);
const smo60928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60928.setAttribute('id', 'smo60928');
smo60955v0ar.push(smo60928);
const smo60929 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60929.setAttribute('id', 'smo60929');
smo60955v0ar.push(smo60929);
const smo60930 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60930.setAttribute('id', 'smo60930');
smo60955v0ar.push(smo60930);
const smo60931 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo60931.setAttribute('id', 'smo60931');
smo60955v0ar.push(smo60931);
const smo60932 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60932.setAttribute('id', 'smo60932');
smo60955v0ar.push(smo60932);
const smo60933 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo60933.setAttribute('id', 'smo60933');
smo60955v0ar.push(smo60933);
const smo60934 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo60934.setAttribute('id', 'smo60934');
smo60955v0ar.push(smo60934);
const smo60935 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo60935.setAttribute('id', 'smo60935');
smo60955v0ar.push(smo60935);
const smo60936 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo60936.setAttribute('id', 'smo60936');
smo60955v0ar.push(smo60936);
const smo60937 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo60937.setAttribute('id', 'smo60937');
smo60955v0ar.push(smo60937);
const smo60938 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo60938.setAttribute('id', 'smo60938');
smo60955v0ar.push(smo60938);
const smo60939 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo60939.setAttribute('id', 'smo60939');
smo60955v0ar.push(smo60939);
smo60955v0.addTickables(smo60955v0ar)
fmtsmo6095532.joinVoices([smo60955v0]);
const smo60955v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60955v1ar = [];
const smo60940 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60940.setAttribute('id', 'smo60940');
smo60940.setStyle({ fillStyle: '#aaaaaa7f' });
smo60955v1ar.push(smo60940);
const smo60941 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2ddd","dots":3,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60941.setAttribute('id', 'smo60941');
smo60941.setStyle({ fillStyle: '#aaaaaa7f' });
smo60941.addModifier(new VF.Dot(), 0);
smo60941.addModifier(new VF.Dot(), 0);
smo60941.addModifier(new VF.Dot(), 0);
smo60955v1ar.push(smo60941);
smo60955v1.addTickables(smo60955v1ar)
fmtsmo6095532.joinVoices([smo60955v1]);
const fmtsmo6607932 = new VF.Formatter();
//
// voices and notes for stave 1 32
const smo66079v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66079v0ar = [];
const smo66060 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["fn/3/r"]}'))
smo66060.setAttribute('id', 'smo66060');
smo66079v0ar.push(smo66060);
const smo66061 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo66061.setAttribute('id', 'smo66061');
smo66061.addModifier(new VF.Dot(), 0);
smo66079v0ar.push(smo66061);
const smo66062 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo66062.setAttribute('id', 'smo66062');
smo66079v0ar.push(smo66062);
const smo66063 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo66063.setAttribute('id', 'smo66063');
smo66079v0ar.push(smo66063);
smo66079v0.addTickables(smo66079v0ar)
fmtsmo6607932.joinVoices([smo66079v0]);
const smo66079v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66079v1ar = [];
const smo66064 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/2/n"]}'))
smo66064.setAttribute('id', 'smo66064');
smo66064.setStyle({ fillStyle: "#115511" });
smo66079v1ar.push(smo66064);
const smo66065 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/2/n"]}'))
smo66065.setAttribute('id', 'smo66065');
smo66065.setStyle({ fillStyle: "#115511" });
smo66079v1ar.push(smo66065);
smo66079v1.addTickables(smo66079v1ar)
fmtsmo6607932.joinVoices([smo66079v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69615 = smo60926.getStemDirection();
smo60926.setStemDirection(dirsmo69615);
smo60927.setStemDirection(dirsmo69615);
const smo69615 = new VF.Beam([smo60926,smo60927]);
const dirsmo69616 = smo60928.getStemDirection();
smo60928.setStemDirection(dirsmo69616);
smo60929.setStemDirection(dirsmo69616);
smo60930.setStemDirection(dirsmo69616);
smo60931.setStemDirection(dirsmo69616);
const smo69616 = new VF.Beam([smo60928,smo60929,smo60930,smo60931]);
const dirsmo69617 = smo60932.getStemDirection();
smo60932.setStemDirection(dirsmo69617);
smo60933.setStemDirection(dirsmo69617);
smo60934.setStemDirection(dirsmo69617);
smo60935.setStemDirection(dirsmo69617);
const smo69617 = new VF.Beam([smo60932,smo60933,smo60934,smo60935]);
const dirsmo69618 = smo60936.getStemDirection();
smo60936.setStemDirection(dirsmo69618);
smo60937.setStemDirection(dirsmo69618);
smo60938.setStemDirection(dirsmo69618);
smo60939.setStemDirection(dirsmo69618);
const smo69618 = new VF.Beam([smo60936,smo60937,smo60938,smo60939]);
 
// formatting measures in staff group smo58712
fmtsmo6095532.format([smo60955v0,smo60955v1,smo66079v0,smo66079v1], 381);
const stavesmo60955 = new VF.Stave(90, 871, 431);
stavesmo60955.setAttribute('id', 'stavesmo60955');
stavesmo60955.setBegBarType(1);
stavesmo60955.addClef('treble');
stavesmo60955.setContext(context);
stavesmo60955.draw();
smo60955v0.draw(context, stavesmo60955);
smo60955v1.draw(context, stavesmo60955);
smo69615.setContext(context);
smo69615.draw();
smo69616.setContext(context);
smo69616.draw();
smo69617.setContext(context);
smo69617.draw();
smo69618.setContext(context);
smo69618.draw();
const stavesmo66079 = new VF.Stave(90, 994, 431);
stavesmo66079.setAttribute('id', 'stavesmo66079');
stavesmo66079.setBegBarType(1);
stavesmo66079.addClef('bass');
stavesmo66079.setContext(context);
stavesmo66079.draw();
smo66079v0.draw(context, stavesmo66079);
smo66079v1.draw(context, stavesmo66079);
const leftsmo58712stavesmo609551 = new VF.StaveConnector(stavesmo60955, stavesmo66079).setType(3);
leftsmo58712stavesmo609551.setContext(context).draw();
const fmtsmo6098633 = new VF.Formatter();
//
// voices and notes for stave 0 33
const smo60986v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60986v0ar = [];
const smo60956 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60956.setAttribute('id', 'smo60956');
smo60986v0ar.push(smo60956);
const smo60957 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60957.setAttribute('id', 'smo60957');
smo60986v0ar.push(smo60957);
const smo60958 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60958.setAttribute('id', 'smo60958');
smo60986v0ar.push(smo60958);
const smo60959 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60959.setAttribute('id', 'smo60959');
smo60986v0ar.push(smo60959);
const smo60960 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo60960.setAttribute('id', 'smo60960');
smo60986v0ar.push(smo60960);
const smo60961 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60961.setAttribute('id', 'smo60961');
smo60986v0ar.push(smo60961);
const smo60962 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60962.setAttribute('id', 'smo60962');
smo60986v0ar.push(smo60962);
const smo60963 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60963.setAttribute('id', 'smo60963');
smo60986v0ar.push(smo60963);
const smo60964 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60964.setAttribute('id', 'smo60964');
smo60986v0ar.push(smo60964);
const smo60965 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60965.setAttribute('id', 'smo60965');
smo60986v0ar.push(smo60965);
const smo60966 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60966.setAttribute('id', 'smo60966');
smo60986v0ar.push(smo60966);
const smo60967 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60967.setAttribute('id', 'smo60967');
smo60986v0ar.push(smo60967);
const smo60968 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60968.setAttribute('id', 'smo60968');
smo60986v0ar.push(smo60968);
const smo60969 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60969.setAttribute('id', 'smo60969');
smo60986v0ar.push(smo60969);
const smo60970 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60970.setAttribute('id', 'smo60970');
smo60986v0ar.push(smo60970);
smo60986v0.addTickables(smo60986v0ar)
fmtsmo6098633.joinVoices([smo60986v0]);
const smo60986v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60986v1ar = [];
const smo60971 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/3/r"]}'))
smo60971.setAttribute('id', 'smo60971');
smo60971.setStyle({ fillStyle: "#115511" });
smo60986v1ar.push(smo60971);
const smo60972 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2ddd","dots":3,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60972.setAttribute('id', 'smo60972');
smo60972.setStyle({ fillStyle: '#aaaaaa7f' });
smo60972.addModifier(new VF.Dot(), 0);
smo60972.addModifier(new VF.Dot(), 0);
smo60972.addModifier(new VF.Dot(), 0);
smo60986v1ar.push(smo60972);
smo60986v1.addTickables(smo60986v1ar)
fmtsmo6098633.joinVoices([smo60986v1]);
const fmtsmo6609933 = new VF.Formatter();
//
// voices and notes for stave 1 33
const smo66099v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66099v0ar = [];
const smo66080 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo66080.setAttribute('id', 'smo66080');
smo66080.setStyle({ fillStyle: '#aaaaaa7f' });
smo66099v0ar.push(smo66080);
const smo66081 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/2/n"]}'))
smo66081.setAttribute('id', 'smo66081');
smo66081.addModifier(new VF.Dot(), 0);
smo66099v0ar.push(smo66081);
const smo66082 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/2/n"]}'))
smo66082.setAttribute('id', 'smo66082');
smo66099v0ar.push(smo66082);
const smo66083 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/2/n"]}'))
smo66083.setAttribute('id', 'smo66083');
smo66099v0ar.push(smo66083);
smo66099v0.addTickables(smo66099v0ar)
fmtsmo6609933.joinVoices([smo66099v0]);
const smo66099v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66099v1ar = [];
const smo66084 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/2/n"]}'))
smo66084.setAttribute('id', 'smo66084');
smo66084.setStyle({ fillStyle: "#115511" });
smo66099v1ar.push(smo66084);
const smo66085 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/2/n"]}'))
smo66085.setAttribute('id', 'smo66085');
smo66085.setStyle({ fillStyle: "#115511" });
smo66099v1ar.push(smo66085);
smo66099v1.addTickables(smo66099v1ar)
fmtsmo6609933.joinVoices([smo66099v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69623 = smo60957.getStemDirection();
smo60957.setStemDirection(dirsmo69623);
smo60958.setStemDirection(dirsmo69623);
const smo69623 = new VF.Beam([smo60957,smo60958]);
const dirsmo69624 = smo60959.getStemDirection();
smo60959.setStemDirection(dirsmo69624);
smo60960.setStemDirection(dirsmo69624);
smo60961.setStemDirection(dirsmo69624);
smo60962.setStemDirection(dirsmo69624);
const smo69624 = new VF.Beam([smo60959,smo60960,smo60961,smo60962]);
const dirsmo69625 = smo60963.getStemDirection();
smo60963.setStemDirection(dirsmo69625);
smo60964.setStemDirection(dirsmo69625);
smo60965.setStemDirection(dirsmo69625);
smo60966.setStemDirection(dirsmo69625);
const smo69625 = new VF.Beam([smo60963,smo60964,smo60965,smo60966]);
const dirsmo69626 = smo60967.getStemDirection();
smo60967.setStemDirection(dirsmo69626);
smo60968.setStemDirection(dirsmo69626);
smo60969.setStemDirection(dirsmo69626);
smo60970.setStemDirection(dirsmo69626);
const smo69626 = new VF.Beam([smo60967,smo60968,smo60969,smo60970]);
 
// formatting measures in staff group smo58712
fmtsmo6098633.format([smo60986v0,smo60986v1,smo66099v0,smo66099v1], 380);
const stavesmo60986 = new VF.Stave(521, 871, 394);
stavesmo60986.setAttribute('id', 'stavesmo60986');
stavesmo60986.setBegBarType(VF.Barline.type.NONE);
stavesmo60986.setContext(context);
stavesmo60986.draw();
smo60986v0.draw(context, stavesmo60986);
smo60986v1.draw(context, stavesmo60986);
smo69623.setContext(context);
smo69623.draw();
smo69624.setContext(context);
smo69624.draw();
smo69625.setContext(context);
smo69625.draw();
smo69626.setContext(context);
smo69626.draw();
const stavesmo66099 = new VF.Stave(521, 994, 394);
stavesmo66099.setAttribute('id', 'stavesmo66099');
stavesmo66099.setBegBarType(VF.Barline.type.NONE);
stavesmo66099.setContext(context);
stavesmo66099.draw();
smo66099v0.draw(context, stavesmo66099);
smo66099v1.draw(context, stavesmo66099);
const fmtsmo6100134 = new VF.Formatter();
//
// voices and notes for stave 0 34
const smo61001v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61001v0ar = [];
const smo60987 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n","cn/5/n"]}'))
smo60987.setAttribute('id', 'smo60987');
smo61001v0ar.push(smo60987);
smo61001v0.addTickables(smo61001v0ar)
fmtsmo6100134.joinVoices([smo61001v0]);
const fmtsmo6611434 = new VF.Formatter();
//
// voices and notes for stave 1 34
const smo66114v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66114v0ar = [];
const smo66100 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo66100.setAttribute('id', 'smo66100');
smo66114v0ar.push(smo66100);
smo66114v0.addTickables(smo66114v0ar)
fmtsmo6611434.joinVoices([smo66114v0]);
// create beam groups and tuplets for format grp smo58712 before formatting
 
// formatting measures in staff group smo58712
fmtsmo6100134.format([smo61001v0,smo66114v0], 8);
const stavesmo61001 = new VF.Stave(915, 871, 30);
stavesmo61001.setAttribute('id', 'stavesmo61001');
stavesmo61001.setBegBarType(VF.Barline.type.NONE);
stavesmo61001.setEndBarType(3);
stavesmo61001.setContext(context);
stavesmo61001.draw();
smo61001v0.draw(context, stavesmo61001);
const stavesmo66114 = new VF.Stave(915, 994, 30);
stavesmo66114.setAttribute('id', 'stavesmo66114');
stavesmo66114.setBegBarType(VF.Barline.type.NONE);
stavesmo66114.setEndBarType(3);
stavesmo66114.setContext(context);
stavesmo66114.draw();
smo66114v0.draw(context, stavesmo66114);
const fmtsmo6102535 = new VF.Formatter();
//
// voices and notes for stave 0 35
const smo61025v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61025v0ar = [];
const smo61002 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo61002.setAttribute('id', 'smo61002');
smo61025v0ar.push(smo61002);
smo61025v0.addTickables(smo61025v0ar)
fmtsmo6102535.joinVoices([smo61025v0]);
const smo61025v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61025v1ar = [];
const smo61003 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/3/r"]}'))
smo61003.setAttribute('id', 'smo61003');
smo61003.setStyle({ fillStyle: "#115511" });
smo61025v1ar.push(smo61003);
const smo61004 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo61004.setAttribute('id', 'smo61004');
smo61004.setStyle({ fillStyle: "#115511" });
smo61025v1ar.push(smo61004);
const smo61005 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo61005.setAttribute('id', 'smo61005');
smo61005.setStyle({ fillStyle: "#115511" });
smo61025v1ar.push(smo61005);
const smo61006 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo61006.setAttribute('id', 'smo61006');
smo61006.setStyle({ fillStyle: "#115511" });
smo61025v1ar.push(smo61006);
const smo61007 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61007.setAttribute('id', 'smo61007');
smo61007.setStyle({ fillStyle: "#115511" });
smo61007.addModifier(new VF.Dot(), 0);
smo61025v1ar.push(smo61007);
const smo61008 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61008.setAttribute('id', 'smo61008');
smo61008.setStyle({ fillStyle: "#115511" });
smo61025v1ar.push(smo61008);
const smo61009 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61009.setAttribute('id', 'smo61009');
smo61009.setStyle({ fillStyle: "#115511" });
smo61025v1ar.push(smo61009);
const smo61010 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo61010.setAttribute('id', 'smo61010');
smo61010.setStyle({ fillStyle: "#115511" });
smo61025v1ar.push(smo61010);
const smo61011 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo61011.setAttribute('id', 'smo61011');
smo61011.setStyle({ fillStyle: "#115511" });
smo61025v1ar.push(smo61011);
smo61025v1.addTickables(smo61025v1ar)
fmtsmo6102535.joinVoices([smo61025v1]);
const fmtsmo6612935 = new VF.Formatter();
//
// voices and notes for stave 1 35
const smo66129v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66129v0ar = [];
const smo66115 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo66115.setAttribute('id', 'smo66115');
smo66129v0ar.push(smo66115);
smo66129v0.addTickables(smo66129v0ar)
fmtsmo6612935.joinVoices([smo66129v0]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69633 = smo61004.getStemDirection();
smo61004.setStemDirection(dirsmo69633);
smo61005.setStemDirection(dirsmo69633);
smo61006.setStemDirection(dirsmo69633);
const smo69633 = new VF.Beam([smo61004,smo61005,smo61006]);
const dirsmo69634 = smo61007.getStemDirection();
smo61007.setStemDirection(dirsmo69634);
smo61008.setStemDirection(dirsmo69634);
smo61009.setStemDirection(dirsmo69634);
const smo69634 = new VF.Beam([smo61007,smo61008,smo61009]);
const dirsmo69635 = smo61010.getStemDirection();
smo61010.setStemDirection(dirsmo69635);
smo61011.setStemDirection(dirsmo69635);
const smo69635 = new VF.Beam([smo61010,smo61011]);
 
// formatting measures in staff group smo58712
fmtsmo6102535.format([smo61025v0,smo61025v1,smo66129v0], 195);
const stavesmo61025 = new VF.Stave(945, 871, 209);
stavesmo61025.setAttribute('id', 'stavesmo61025');
stavesmo61025.setBegBarType(VF.Barline.type.NONE);
stavesmo61025.setTempo(JSON.parse('{"duration":"8","dots":0,"bpm":116,"name":"Moderato e maestoso"}'), -1 * 0);
stavesmo61025.setContext(context);
stavesmo61025.draw();
smo61025v0.draw(context, stavesmo61025);
smo61025v1.draw(context, stavesmo61025);
smo69633.setContext(context);
smo69633.draw();
smo69634.setContext(context);
smo69634.draw();
smo69635.setContext(context);
smo69635.draw();
const stavesmo66129 = new VF.Stave(945, 994, 209);
stavesmo66129.setAttribute('id', 'stavesmo66129');
stavesmo66129.setBegBarType(VF.Barline.type.NONE);
stavesmo66129.setTempo(JSON.parse('{"duration":"8","dots":0,"bpm":116,"name":"Moderato e maestoso"}'), -1 * 0);
stavesmo66129.setContext(context);
stavesmo66129.draw();
smo66129v0.draw(context, stavesmo66129);
const fmtsmo6105836 = new VF.Formatter();
//
// voices and notes for stave 0 36
const smo61058v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61058v0ar = [];
const smo61026 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo61026.setAttribute('id', 'smo61026');
smo61058v0ar.push(smo61026);
const smo61027 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo61027.setAttribute('id', 'smo61027');
smo61058v0ar.push(smo61027);
const smo61028 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61028.setAttribute('id', 'smo61028');
smo61058v0ar.push(smo61028);
const smo61029 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo61029.setAttribute('id', 'smo61029');
smo61058v0ar.push(smo61029);
const smo61030 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61030.setAttribute('id', 'smo61030');
smo61058v0ar.push(smo61030);
smo61058v0.addTickables(smo61058v0ar)
fmtsmo6105836.joinVoices([smo61058v0]);
const smo61058v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61058v1ar = [];
const smo61031 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo61031.setAttribute('id', 'smo61031');
smo61031.setStyle({ fillStyle: "#115511" });
smo61058v1ar.push(smo61031);
const smo61032 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61032.setAttribute('id', 'smo61032');
smo61032.setStyle({ fillStyle: "#115511" });
smo61058v1ar.push(smo61032);
const smo61033 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61033.setAttribute('id', 'smo61033');
smo61033.setStyle({ fillStyle: "#115511" });
smo61058v1ar.push(smo61033);
const smo61034 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo61034.setAttribute('id', 'smo61034');
smo61034.setStyle({ fillStyle: "#115511" });
smo61058v1ar.push(smo61034);
const smo61035 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61035.setAttribute('id', 'smo61035');
smo61035.setStyle({ fillStyle: "#115511" });
smo61058v1ar.push(smo61035);
const smo61036 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61036.setAttribute('id', 'smo61036');
smo61036.setStyle({ fillStyle: "#115511" });
smo61058v1ar.push(smo61036);
const smo61037 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo61037.setAttribute('id', 'smo61037');
smo61037.setStyle({ fillStyle: "#115511" });
smo61058v1ar.push(smo61037);
const smo61038 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61038.setAttribute('id', 'smo61038');
smo61038.setStyle({ fillStyle: "#115511" });
smo61058v1ar.push(smo61038);
const smo61039 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo61039.setAttribute('id', 'smo61039');
smo61039.setStyle({ fillStyle: "#115511" });
smo61058v1ar.push(smo61039);
const smo61040 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo61040.setAttribute('id', 'smo61040');
smo61040.setStyle({ fillStyle: "#115511" });
smo61058v1ar.push(smo61040);
const smo61041 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo61041.setAttribute('id', 'smo61041');
smo61041.setStyle({ fillStyle: "#115511" });
smo61058v1ar.push(smo61041);
const smo61042 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo61042.setAttribute('id', 'smo61042');
smo61042.setStyle({ fillStyle: "#115511" });
smo61058v1ar.push(smo61042);
const smo61043 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo61043.setAttribute('id', 'smo61043');
smo61043.setStyle({ fillStyle: "#115511" });
smo61058v1ar.push(smo61043);
const smo61044 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/3/n"]}'))
smo61044.setAttribute('id', 'smo61044');
smo61044.setStyle({ fillStyle: "#115511" });
smo61058v1ar.push(smo61044);
smo61058v1.addTickables(smo61058v1ar)
fmtsmo6105836.joinVoices([smo61058v1]);
const fmtsmo6614436 = new VF.Formatter();
//
// voices and notes for stave 1 36
const smo66144v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66144v0ar = [];
const smo66130 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo66130.setAttribute('id', 'smo66130');
smo66144v0ar.push(smo66130);
smo66144v0.addTickables(smo66144v0ar)
fmtsmo6614436.joinVoices([smo66144v0]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69640 = smo61028.getStemDirection();
smo61028.setStemDirection(dirsmo69640);
smo61029.setStemDirection(dirsmo69640);
smo61030.setStemDirection(dirsmo69640);
const smo69640 = new VF.Beam([smo61028,smo61029,smo61030]);
const dirsmo69641 = smo61031.getStemDirection();
smo61031.setStemDirection(dirsmo69641);
smo61032.setStemDirection(dirsmo69641);
const smo69641 = new VF.Beam([smo61031,smo61032]);
const dirsmo69642 = smo61033.getStemDirection();
smo61033.setStemDirection(dirsmo69642);
smo61034.setStemDirection(dirsmo69642);
smo61035.setStemDirection(dirsmo69642);
smo61036.setStemDirection(dirsmo69642);
const smo69642 = new VF.Beam([smo61033,smo61034,smo61035,smo61036]);
const dirsmo69643 = smo61037.getStemDirection();
smo61037.setStemDirection(dirsmo69643);
smo61038.setStemDirection(dirsmo69643);
smo61039.setStemDirection(dirsmo69643);
smo61040.setStemDirection(dirsmo69643);
const smo69643 = new VF.Beam([smo61037,smo61038,smo61039,smo61040]);
const dirsmo69644 = smo61041.getStemDirection();
smo61041.setStemDirection(dirsmo69644);
smo61042.setStemDirection(dirsmo69644);
smo61043.setStemDirection(dirsmo69644);
smo61044.setStemDirection(dirsmo69644);
const smo69644 = new VF.Beam([smo61041,smo61042,smo61043,smo61044]);
 
// formatting measures in staff group smo58712
fmtsmo6105836.format([smo61058v0,smo61058v1,smo66144v0], 306);
const stavesmo61058 = new VF.Stave(1154, 871, 320);
stavesmo61058.setAttribute('id', 'stavesmo61058');
stavesmo61058.setBegBarType(VF.Barline.type.NONE);
stavesmo61058.setContext(context);
stavesmo61058.draw();
smo61058v0.draw(context, stavesmo61058);
smo61058v1.draw(context, stavesmo61058);
smo69640.setContext(context);
smo69640.draw();
smo69641.setContext(context);
smo69641.draw();
smo69642.setContext(context);
smo69642.draw();
smo69643.setContext(context);
smo69643.draw();
smo69644.setContext(context);
smo69644.draw();
const stavesmo66144 = new VF.Stave(1154, 994, 320);
stavesmo66144.setAttribute('id', 'stavesmo66144');
stavesmo66144.setBegBarType(VF.Barline.type.NONE);
stavesmo66144.setContext(context);
stavesmo66144.draw();
smo66144v0.draw(context, stavesmo66144);
const fmtsmo6109137 = new VF.Formatter();
//
// voices and notes for stave 0 37
const smo61091v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61091v0ar = [];
const smo61059 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61059.setAttribute('id', 'smo61059');
smo61059.addModifier(new VF.Dot(), 0);
smo61091v0ar.push(smo61059);
const smo61060 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61060.setAttribute('id', 'smo61060');
smo61091v0ar.push(smo61060);
const smo61061 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61061.setAttribute('id', 'smo61061');
smo61091v0ar.push(smo61061);
const smo61062 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61062.setAttribute('id', 'smo61062');
smo61091v0ar.push(smo61062);
const smo61063 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo61063.setAttribute('id', 'smo61063');
smo61091v0ar.push(smo61063);
const smo61064 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo61064.setAttribute('id', 'smo61064');
smo61091v0ar.push(smo61064);
const smo61065 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61065.setAttribute('id', 'smo61065');
smo61091v0ar.push(smo61065);
const smo61066 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61066.setAttribute('id', 'smo61066');
smo61091v0ar.push(smo61066);
const smo61067 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo61067.setAttribute('id', 'smo61067');
smo61091v0ar.push(smo61067);
const smo61068 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61068.setAttribute('id', 'smo61068');
smo61091v0ar.push(smo61068);
const smo61069 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61069.setAttribute('id', 'smo61069');
smo61091v0ar.push(smo61069);
smo61091v0.addTickables(smo61091v0ar)
fmtsmo6109137.joinVoices([smo61091v0]);
const smo61091v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61091v1ar = [];
const smo61070 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo61070.setAttribute('id', 'smo61070');
smo61070.setStyle({ fillStyle: "#115511" });
smo61091v1ar.push(smo61070);
const smo61071 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/4/n"]}'))
smo61071.setAttribute('id', 'smo61071');
smo61071.setStyle({ fillStyle: "#115511" });
const smo610710acc = new VF.Accidental('#');
smo61071.addModifier(smo610710acc, 0);
smo61091v1ar.push(smo61071);
const smo61072 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61072.setAttribute('id', 'smo61072');
smo61072.setStyle({ fillStyle: "#115511" });
smo61091v1ar.push(smo61072);
const smo61073 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61073.setAttribute('id', 'smo61073');
smo61073.setStyle({ fillStyle: "#115511" });
smo61091v1ar.push(smo61073);
const smo61074 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/4/n"]}'))
smo61074.setAttribute('id', 'smo61074');
smo61074.setStyle({ fillStyle: "#115511" });
smo61091v1ar.push(smo61074);
const smo61075 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo61075.setAttribute('id', 'smo61075');
smo61075.setStyle({ fillStyle: "#115511" });
smo61091v1ar.push(smo61075);
const smo61076 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/4/n"]}'))
smo61076.setAttribute('id', 'smo61076');
smo61076.setStyle({ fillStyle: "#115511" });
smo61091v1ar.push(smo61076);
const smo61077 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo61077.setAttribute('id', 'smo61077');
smo61077.setStyle({ fillStyle: "#115511" });
smo61091v1ar.push(smo61077);
smo61091v1.addTickables(smo61091v1ar)
fmtsmo6109137.joinVoices([smo61091v1]);
const fmtsmo6615937 = new VF.Formatter();
//
// voices and notes for stave 1 37
const smo66159v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66159v0ar = [];
const smo66145 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo66145.setAttribute('id', 'smo66145');
smo66159v0ar.push(smo66145);
smo66159v0.addTickables(smo66159v0ar)
fmtsmo6615937.joinVoices([smo66159v0]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69649 = smo61059.getStemDirection();
smo61059.setStemDirection(dirsmo69649);
smo61060.setStemDirection(dirsmo69649);
smo61061.setStemDirection(dirsmo69649);
const smo69649 = new VF.Beam([smo61059,smo61060,smo61061]);
const dirsmo69650 = smo61062.getStemDirection();
smo61062.setStemDirection(dirsmo69650);
smo61063.setStemDirection(dirsmo69650);
const smo69650 = new VF.Beam([smo61062,smo61063]);
const dirsmo69651 = smo61064.getStemDirection();
smo61064.setStemDirection(dirsmo69651);
smo61065.setStemDirection(dirsmo69651);
const smo69651 = new VF.Beam([smo61064,smo61065]);
const dirsmo69652 = smo61066.getStemDirection();
smo61066.setStemDirection(dirsmo69652);
smo61067.setStemDirection(dirsmo69652);
smo61068.setStemDirection(dirsmo69652);
smo61069.setStemDirection(dirsmo69652);
const smo69652 = new VF.Beam([smo61066,smo61067,smo61068,smo61069]);
const dirsmo69653 = smo61070.getStemDirection();
smo61070.setStemDirection(dirsmo69653);
smo61071.setStemDirection(dirsmo69653);
const smo69653 = new VF.Beam([smo61070,smo61071]);
const dirsmo69654 = smo61073.getStemDirection();
smo61073.setStemDirection(dirsmo69654);
smo61074.setStemDirection(dirsmo69654);
smo61075.setStemDirection(dirsmo69654);
const smo69654 = new VF.Beam([smo61073,smo61074,smo61075]);
const dirsmo69655 = smo61076.getStemDirection();
smo61076.setStemDirection(dirsmo69655);
smo61077.setStemDirection(dirsmo69655);
const smo69655 = new VF.Beam([smo61076,smo61077]);
 
// formatting measures in staff group smo58712
fmtsmo6109137.format([smo61091v0,smo61091v1,smo66159v0], 320);
const stavesmo61091 = new VF.Stave(1474, 871, 334);
stavesmo61091.setAttribute('id', 'stavesmo61091');
stavesmo61091.setBegBarType(VF.Barline.type.NONE);
stavesmo61091.setContext(context);
stavesmo61091.draw();
smo61091v0.draw(context, stavesmo61091);
smo61091v1.draw(context, stavesmo61091);
smo69649.setContext(context);
smo69649.draw();
smo69650.setContext(context);
smo69650.draw();
smo69651.setContext(context);
smo69651.draw();
smo69652.setContext(context);
smo69652.draw();
smo69653.setContext(context);
smo69653.draw();
smo69654.setContext(context);
smo69654.draw();
smo69655.setContext(context);
smo69655.draw();
const stavesmo66159 = new VF.Stave(1474, 994, 334);
stavesmo66159.setAttribute('id', 'stavesmo66159');
stavesmo66159.setBegBarType(VF.Barline.type.NONE);
stavesmo66159.setContext(context);
stavesmo66159.draw();
smo66159v0.draw(context, stavesmo66159);
const rightsmo58712stavesmo610911 = new VF.StaveConnector(stavesmo61091, stavesmo66159).setType(0);
rightsmo58712stavesmo610911.setContext(context).draw();
const fmtsmo6112738 = new VF.Formatter();
//
// voices and notes for stave 0 38
const smo61127v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61127v0ar = [];
const smo61092 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61092.setAttribute('id', 'smo61092');
smo61127v0ar.push(smo61092);
const smo61093 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61093.setAttribute('id', 'smo61093');
smo61127v0ar.push(smo61093);
const smo61094 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo61094.setAttribute('id', 'smo61094');
smo61127v0ar.push(smo61094);
const smo61095 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61095.setAttribute('id', 'smo61095');
smo61127v0ar.push(smo61095);
const smo61096 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61096.setAttribute('id', 'smo61096');
smo61127v0ar.push(smo61096);
const smo61097 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61097.setAttribute('id', 'smo61097');
smo61127v0ar.push(smo61097);
const smo61098 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61098.setAttribute('id', 'smo61098');
smo61127v0ar.push(smo61098);
const smo61099 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61099.setAttribute('id', 'smo61099');
smo61127v0ar.push(smo61099);
const smo61100 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo61100.setAttribute('id', 'smo61100');
smo61127v0ar.push(smo61100);
const smo61101 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61101.setAttribute('id', 'smo61101');
smo61127v0ar.push(smo61101);
const smo61102 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo61102.setAttribute('id', 'smo61102');
smo61127v0ar.push(smo61102);
const smo61103 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/5/n"]}'))
smo61103.setAttribute('id', 'smo61103');
const smo611030acc = new VF.Accidental('#');
smo61103.addModifier(smo611030acc, 0);
smo61127v0ar.push(smo61103);
const smo61104 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo61104.setAttribute('id', 'smo61104');
smo61127v0ar.push(smo61104);
const smo61105 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61105.setAttribute('id', 'smo61105');
smo61127v0ar.push(smo61105);
smo61127v0.addTickables(smo61127v0ar)
fmtsmo6112738.joinVoices([smo61127v0]);
const smo61127v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61127v1ar = [];
const smo61106 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61106.setAttribute('id', 'smo61106');
smo61106.setStyle({ fillStyle: "#115511" });
smo61127v1ar.push(smo61106);
const smo61107 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61107.setAttribute('id', 'smo61107');
smo61107.setStyle({ fillStyle: "#115511" });
smo61127v1ar.push(smo61107);
const smo61108 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo61108.setAttribute('id', 'smo61108');
smo61108.setStyle({ fillStyle: "#115511" });
smo61127v1ar.push(smo61108);
const smo61109 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo61109.setAttribute('id', 'smo61109');
smo61109.setStyle({ fillStyle: "#115511" });
smo61127v1ar.push(smo61109);
const smo61110 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo61110.setAttribute('id', 'smo61110');
smo61110.setStyle({ fillStyle: "#115511" });
smo61127v1ar.push(smo61110);
const smo61111 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/3/r"]}'))
smo61111.setAttribute('id', 'smo61111');
smo61111.setStyle({ fillStyle: "#115511" });
smo61127v1ar.push(smo61111);
const smo61112 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/3/r"]}'))
smo61112.setAttribute('id', 'smo61112');
smo61112.setStyle({ fillStyle: "#115511" });
smo61127v1ar.push(smo61112);
const smo61113 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61113.setAttribute('id', 'smo61113');
smo61113.setStyle({ fillStyle: "#115511" });
smo61127v1ar.push(smo61113);
smo61127v1.addTickables(smo61127v1ar)
fmtsmo6112738.joinVoices([smo61127v1]);
const fmtsmo6618238 = new VF.Formatter();
//
// voices and notes for stave 1 38
const smo66182v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66182v0ar = [];
const smo66160 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo66160.setAttribute('id', 'smo66160');
smo66182v0ar.push(smo66160);
const smo66161 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66161.setAttribute('id', 'smo66161');
smo66182v0ar.push(smo66161);
const smo66162 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo66162.setAttribute('id', 'smo66162');
smo66182v0ar.push(smo66162);
const smo66163 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/3/n"]}'))
smo66163.setAttribute('id', 'smo66163');
smo66182v0ar.push(smo66163);
const smo66164 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo66164.setAttribute('id', 'smo66164');
smo66164.addModifier(new VF.Dot(), 0);
smo66182v0ar.push(smo66164);
const smo66165 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo66165.setAttribute('id', 'smo66165');
smo66182v0ar.push(smo66165);
const smo66166 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo66166.setAttribute('id', 'smo66166');
smo66182v0ar.push(smo66166);
const smo66167 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/3/n"]}'))
smo66167.setAttribute('id', 'smo66167');
smo66182v0ar.push(smo66167);
const smo66168 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo66168.setAttribute('id', 'smo66168');
smo66182v0ar.push(smo66168);
smo66182v0.addTickables(smo66182v0ar)
fmtsmo6618238.joinVoices([smo66182v0]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69671 = smo61092.getStemDirection();
smo61092.setStemDirection(dirsmo69671);
smo61093.setStemDirection(dirsmo69671);
smo61094.setStemDirection(dirsmo69671);
smo61095.setStemDirection(dirsmo69671);
const smo69671 = new VF.Beam([smo61092,smo61093,smo61094,smo61095]);
const dirsmo69672 = smo61096.getStemDirection();
smo61096.setStemDirection(dirsmo69672);
smo61097.setStemDirection(dirsmo69672);
smo61098.setStemDirection(dirsmo69672);
smo61099.setStemDirection(dirsmo69672);
const smo69672 = new VF.Beam([smo61096,smo61097,smo61098,smo61099]);
const dirsmo69673 = smo61100.getStemDirection();
smo61100.setStemDirection(dirsmo69673);
smo61101.setStemDirection(dirsmo69673);
smo61102.setStemDirection(dirsmo69673);
smo61103.setStemDirection(dirsmo69673);
const smo69673 = new VF.Beam([smo61100,smo61101,smo61102,smo61103]);
const dirsmo69674 = smo61104.getStemDirection();
smo61104.setStemDirection(dirsmo69674);
smo61105.setStemDirection(dirsmo69674);
const smo69674 = new VF.Beam([smo61104,smo61105]);
const dirsmo69675 = smo61106.getStemDirection();
smo61106.setStemDirection(dirsmo69675);
smo61107.setStemDirection(dirsmo69675);
smo61108.setStemDirection(dirsmo69675);
smo61109.setStemDirection(dirsmo69675);
const smo69675 = new VF.Beam([smo61106,smo61107,smo61108,smo61109]);
const dirsmo69677 = smo66161.getStemDirection();
smo66161.setStemDirection(dirsmo69677);
smo66162.setStemDirection(dirsmo69677);
smo66163.setStemDirection(dirsmo69677);
const smo69677 = new VF.Beam([smo66161,smo66162,smo66163]);
const dirsmo69678 = smo66164.getStemDirection();
smo66164.setStemDirection(dirsmo69678);
smo66165.setStemDirection(dirsmo69678);
smo66166.setStemDirection(dirsmo69678);
smo66167.setStemDirection(dirsmo69678);
smo66168.setStemDirection(dirsmo69678);
const smo69678 = new VF.Beam([smo66164,smo66165,smo66166,smo66167,smo66168]);
 
// formatting measures in staff group smo58712
fmtsmo6112738.format([smo61127v0,smo61127v1,smo66182v0], 293);
const stavesmo61127 = new VF.Stave(90, 1198, 344);
stavesmo61127.setAttribute('id', 'stavesmo61127');
stavesmo61127.setBegBarType(1);
stavesmo61127.addClef('treble');
stavesmo61127.setContext(context);
stavesmo61127.draw();
smo61127v0.draw(context, stavesmo61127);
smo61127v1.draw(context, stavesmo61127);
smo69671.setContext(context);
smo69671.draw();
smo69672.setContext(context);
smo69672.draw();
smo69673.setContext(context);
smo69673.draw();
smo69674.setContext(context);
smo69674.draw();
smo69675.setContext(context);
smo69675.draw();
const stavesmo66182 = new VF.Stave(90, 1347, 344);
stavesmo66182.setAttribute('id', 'stavesmo66182');
stavesmo66182.setBegBarType(1);
stavesmo66182.addClef('bass');
stavesmo66182.setContext(context);
stavesmo66182.draw();
smo66182v0.draw(context, stavesmo66182);
smo69677.setContext(context);
smo69677.draw();
smo69678.setContext(context);
smo69678.draw();
const leftsmo58712stavesmo611271 = new VF.StaveConnector(stavesmo61127, stavesmo66182).setType(3);
leftsmo58712stavesmo611271.setContext(context).draw();
const fmtsmo6116139 = new VF.Formatter();
//
// voices and notes for stave 0 39
const smo61161v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61161v0ar = [];
const smo61128 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61128.setAttribute('id', 'smo61128');
smo61161v0ar.push(smo61128);
const smo61129 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo61129.setAttribute('id', 'smo61129');
smo61161v0ar.push(smo61129);
const smo61130 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61130.setAttribute('id', 'smo61130');
smo61161v0ar.push(smo61130);
const smo61131 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61131.setAttribute('id', 'smo61131');
smo61161v0ar.push(smo61131);
const smo61132 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61132.setAttribute('id', 'smo61132');
smo61161v0ar.push(smo61132);
const smo61133 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo61133.setAttribute('id', 'smo61133');
smo61161v0ar.push(smo61133);
const smo61134 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61134.setAttribute('id', 'smo61134');
smo61134.addModifier(new VF.Dot(), 0);
smo61161v0ar.push(smo61134);
const smo61135 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61135.setAttribute('id', 'smo61135');
smo61161v0ar.push(smo61135);
const smo61136 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61136.setAttribute('id', 'smo61136');
smo61161v0ar.push(smo61136);
const smo61137 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo61137.setAttribute('id', 'smo61137');
smo61161v0ar.push(smo61137);
const smo61138 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61138.setAttribute('id', 'smo61138');
smo61161v0ar.push(smo61138);
const smo61139 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61139.setAttribute('id', 'smo61139');
smo61161v0ar.push(smo61139);
smo61161v0.addTickables(smo61161v0ar)
fmtsmo6116139.joinVoices([smo61161v0]);
const smo61161v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61161v1ar = [];
const smo61140 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61140.setAttribute('id', 'smo61140');
smo61140.setStyle({ fillStyle: "#115511" });
smo61161v1ar.push(smo61140);
const smo61141 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61141.setAttribute('id', 'smo61141');
smo61141.setStyle({ fillStyle: "#115511" });
smo61161v1ar.push(smo61141);
const smo61142 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo61142.setAttribute('id', 'smo61142');
smo61142.setStyle({ fillStyle: "#115511" });
smo61161v1ar.push(smo61142);
const smo61143 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61143.setAttribute('id', 'smo61143');
smo61143.setStyle({ fillStyle: "#115511" });
smo61161v1ar.push(smo61143);
const smo61144 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61144.setAttribute('id', 'smo61144');
smo61144.setStyle({ fillStyle: "#115511" });
smo61161v1ar.push(smo61144);
const smo61145 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61145.setAttribute('id', 'smo61145');
smo61145.setStyle({ fillStyle: "#115511" });
smo61161v1ar.push(smo61145);
const smo61146 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo61146.setAttribute('id', 'smo61146');
smo61146.setStyle({ fillStyle: "#115511" });
smo61161v1ar.push(smo61146);
const smo61147 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo61147.setAttribute('id', 'smo61147');
smo61147.setStyle({ fillStyle: "#115511" });
smo61161v1ar.push(smo61147);
smo61161v1.addTickables(smo61161v1ar)
fmtsmo6116139.joinVoices([smo61161v1]);
const fmtsmo6621139 = new VF.Formatter();
//
// voices and notes for stave 1 39
const smo66211v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66211v0ar = [];
const smo66183 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo66183.setAttribute('id', 'smo66183');
smo66211v0ar.push(smo66183);
const smo66184 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo66184.setAttribute('id', 'smo66184');
smo66211v0ar.push(smo66184);
const smo66185 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo66185.setAttribute('id', 'smo66185');
smo66211v0ar.push(smo66185);
const smo66186 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo66186.setAttribute('id', 'smo66186');
smo66211v0ar.push(smo66186);
const smo66187 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo66187.setAttribute('id', 'smo66187');
smo66211v0ar.push(smo66187);
const smo66188 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo66188.setAttribute('id', 'smo66188');
smo66211v0ar.push(smo66188);
const smo66189 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo66189.setAttribute('id', 'smo66189');
smo66211v0ar.push(smo66189);
const smo66190 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo66190.setAttribute('id', 'smo66190');
smo66211v0ar.push(smo66190);
const smo66191 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo66191.setAttribute('id', 'smo66191');
smo66211v0ar.push(smo66191);
const smo66192 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/3/n"]}'))
smo66192.setAttribute('id', 'smo66192');
const smo661920acc = new VF.Accidental('b');
smo66192.addModifier(smo661920acc, 0);
smo66211v0ar.push(smo66192);
smo66211v0.addTickables(smo66211v0ar)
fmtsmo6621139.joinVoices([smo66211v0]);
const smo66211v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66211v1ar = [];
const smo66193 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo66193.setAttribute('id', 'smo66193');
smo66193.setStyle({ fillStyle: "#115511" });
smo66211v1ar.push(smo66193);
const smo66194 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo66194.setAttribute('id', 'smo66194');
smo66194.setStyle({ fillStyle: "#115511" });
smo66211v1ar.push(smo66194);
const smo66195 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo66195.setAttribute('id', 'smo66195');
smo66195.setStyle({ fillStyle: "#115511" });
smo66211v1ar.push(smo66195);
const smo66196 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo66196.setAttribute('id', 'smo66196');
smo66196.setStyle({ fillStyle: "#115511" });
smo66211v1ar.push(smo66196);
const smo66197 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo66197.setAttribute('id', 'smo66197');
smo66197.setStyle({ fillStyle: "#115511" });
smo66211v1ar.push(smo66197);
smo66211v1.addTickables(smo66211v1ar)
fmtsmo6621139.joinVoices([smo66211v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69682 = smo61128.getStemDirection();
smo61128.setStemDirection(dirsmo69682);
smo61129.setStemDirection(dirsmo69682);
const smo69682 = new VF.Beam([smo61128,smo61129]);
const dirsmo69683 = smo61130.getStemDirection();
smo61130.setStemDirection(dirsmo69683);
smo61131.setStemDirection(dirsmo69683);
smo61132.setStemDirection(dirsmo69683);
smo61133.setStemDirection(dirsmo69683);
const smo69683 = new VF.Beam([smo61130,smo61131,smo61132,smo61133]);
const dirsmo69684 = smo61134.getStemDirection();
smo61134.setStemDirection(dirsmo69684);
smo61135.setStemDirection(dirsmo69684);
const smo69684 = new VF.Beam([smo61134,smo61135]);
const dirsmo69685 = smo61136.getStemDirection();
smo61136.setStemDirection(dirsmo69685);
smo61137.setStemDirection(dirsmo69685);
smo61138.setStemDirection(dirsmo69685);
smo61139.setStemDirection(dirsmo69685);
const smo69685 = new VF.Beam([smo61136,smo61137,smo61138,smo61139]);
const dirsmo69686 = smo61140.getStemDirection();
smo61140.setStemDirection(dirsmo69686);
smo61141.setStemDirection(dirsmo69686);
smo61142.setStemDirection(dirsmo69686);
const smo69686 = new VF.Beam([smo61140,smo61141,smo61142]);
const dirsmo69687 = smo61144.getStemDirection();
smo61144.setStemDirection(dirsmo69687);
smo61145.setStemDirection(dirsmo69687);
smo61146.setStemDirection(dirsmo69687);
const smo69687 = new VF.Beam([smo61144,smo61145,smo61146]);
const dirsmo69689 = smo66183.getStemDirection();
smo66183.setStemDirection(dirsmo69689);
smo66184.setStemDirection(dirsmo69689);
const smo69689 = new VF.Beam([smo66183,smo66184]);
const dirsmo69690 = smo66185.getStemDirection();
smo66185.setStemDirection(dirsmo69690);
smo66186.setStemDirection(dirsmo69690);
smo66187.setStemDirection(dirsmo69690);
smo66188.setStemDirection(dirsmo69690);
const smo69690 = new VF.Beam([smo66185,smo66186,smo66187,smo66188]);
const dirsmo69691 = smo66189.getStemDirection();
smo66189.setStemDirection(dirsmo69691);
smo66190.setStemDirection(dirsmo69691);
const smo69691 = new VF.Beam([smo66189,smo66190]);
const dirsmo69692 = smo66191.getStemDirection();
smo66191.setStemDirection(dirsmo69692);
smo66192.setStemDirection(dirsmo69692);
const smo69692 = new VF.Beam([smo66191,smo66192]);
const dirsmo69693 = smo66195.getStemDirection();
smo66195.setStemDirection(dirsmo69693);
smo66196.setStemDirection(dirsmo69693);
smo66197.setStemDirection(dirsmo69693);
const smo69693 = new VF.Beam([smo66195,smo66196,smo66197]);
 
// formatting measures in staff group smo58712
fmtsmo6116139.format([smo61161v0,smo61161v1,smo66211v0,smo66211v1], 312);
const stavesmo61161 = new VF.Stave(434, 1198, 326);
stavesmo61161.setAttribute('id', 'stavesmo61161');
stavesmo61161.setBegBarType(VF.Barline.type.NONE);
stavesmo61161.setContext(context);
stavesmo61161.draw();
smo61161v0.draw(context, stavesmo61161);
smo61161v1.draw(context, stavesmo61161);
smo69682.setContext(context);
smo69682.draw();
smo69683.setContext(context);
smo69683.draw();
smo69684.setContext(context);
smo69684.draw();
smo69685.setContext(context);
smo69685.draw();
smo69686.setContext(context);
smo69686.draw();
smo69687.setContext(context);
smo69687.draw();
const stavesmo66211 = new VF.Stave(434, 1347, 326);
stavesmo66211.setAttribute('id', 'stavesmo66211');
stavesmo66211.setBegBarType(VF.Barline.type.NONE);
stavesmo66211.setContext(context);
stavesmo66211.draw();
smo66211v0.draw(context, stavesmo66211);
smo66211v1.draw(context, stavesmo66211);
smo69689.setContext(context);
smo69689.draw();
smo69690.setContext(context);
smo69690.draw();
smo69691.setContext(context);
smo69691.draw();
smo69692.setContext(context);
smo69692.draw();
smo69693.setContext(context);
smo69693.draw();
const fmtsmo6119040 = new VF.Formatter();
//
// voices and notes for stave 0 40
const smo61190v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61190v0ar = [];
const smo61162 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo61162.setAttribute('id', 'smo61162');
smo61190v0ar.push(smo61162);
const smo61163 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61163.setAttribute('id', 'smo61163');
smo61190v0ar.push(smo61163);
const smo61164 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo61164.setAttribute('id', 'smo61164');
smo61190v0ar.push(smo61164);
const smo61165 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61165.setAttribute('id', 'smo61165');
smo61190v0ar.push(smo61165);
const smo61166 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61166.setAttribute('id', 'smo61166');
smo61190v0ar.push(smo61166);
const smo61167 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61167.setAttribute('id', 'smo61167');
smo61190v0ar.push(smo61167);
smo61190v0.addTickables(smo61190v0ar)
fmtsmo6119040.joinVoices([smo61190v0]);
const smo61190v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61190v1ar = [];
const smo61168 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo61168.setAttribute('id', 'smo61168');
smo61168.setStyle({ fillStyle: "#115511" });
smo61190v1ar.push(smo61168);
const smo61169 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61169.setAttribute('id', 'smo61169');
smo61169.setStyle({ fillStyle: "#115511" });
smo61190v1ar.push(smo61169);
const smo61170 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo61170.setAttribute('id', 'smo61170');
smo61170.setStyle({ fillStyle: "#115511" });
smo61190v1ar.push(smo61170);
const smo61171 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61171.setAttribute('id', 'smo61171');
smo61171.setStyle({ fillStyle: "#115511" });
smo61190v1ar.push(smo61171);
const smo61172 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61172.setAttribute('id', 'smo61172');
smo61172.setStyle({ fillStyle: "#115511" });
smo61190v1ar.push(smo61172);
const smo61173 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo61173.setAttribute('id', 'smo61173');
smo61173.setStyle({ fillStyle: "#115511" });
smo61190v1ar.push(smo61173);
const smo61174 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61174.setAttribute('id', 'smo61174');
smo61174.setStyle({ fillStyle: "#115511" });
smo61190v1ar.push(smo61174);
const smo61175 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo61175.setAttribute('id', 'smo61175');
smo61175.setStyle({ fillStyle: "#115511" });
smo61190v1ar.push(smo61175);
const smo61176 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61176.setAttribute('id', 'smo61176');
smo61176.setStyle({ fillStyle: "#115511" });
smo61190v1ar.push(smo61176);
smo61190v1.addTickables(smo61190v1ar)
fmtsmo6119040.joinVoices([smo61190v1]);
const fmtsmo6624540 = new VF.Formatter();
//
// voices and notes for stave 1 40
const smo66245v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66245v0ar = [];
const smo66212 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo66212.setAttribute('id', 'smo66212');
smo66245v0ar.push(smo66212);
const smo66213 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo66213.setAttribute('id', 'smo66213');
smo66245v0ar.push(smo66213);
const smo66214 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66214.setAttribute('id', 'smo66214');
smo66245v0ar.push(smo66214);
const smo66215 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo66215.setAttribute('id', 'smo66215');
smo66245v0ar.push(smo66215);
const smo66216 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo66216.setAttribute('id', 'smo66216');
smo66245v0ar.push(smo66216);
const smo66217 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo66217.setAttribute('id', 'smo66217');
smo66245v0ar.push(smo66217);
const smo66218 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo66218.setAttribute('id', 'smo66218');
smo66245v0ar.push(smo66218);
const smo66219 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo66219.setAttribute('id', 'smo66219');
smo66245v0ar.push(smo66219);
const smo66220 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo66220.setAttribute('id', 'smo66220');
smo66245v0ar.push(smo66220);
smo66245v0.addTickables(smo66245v0ar)
fmtsmo6624540.joinVoices([smo66245v0]);
const smo66245v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66245v1ar = [];
const smo66221 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo66221.setAttribute('id', 'smo66221');
smo66221.setStyle({ fillStyle: "#115511" });
smo66221.addModifier(new VF.Dot(), 0);
smo66245v1ar.push(smo66221);
const smo66222 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66222.setAttribute('id', 'smo66222');
smo66222.setStyle({ fillStyle: "#115511" });
smo66245v1ar.push(smo66222);
const smo66223 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo66223.setAttribute('id', 'smo66223');
smo66223.setStyle({ fillStyle: "#115511" });
smo66245v1ar.push(smo66223);
const smo66224 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo66224.setAttribute('id', 'smo66224');
smo66224.setStyle({ fillStyle: "#115511" });
smo66245v1ar.push(smo66224);
const smo66225 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo66225.setAttribute('id', 'smo66225');
smo66225.setStyle({ fillStyle: "#115511" });
smo66245v1ar.push(smo66225);
const smo66226 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo66226.setAttribute('id', 'smo66226');
smo66226.setStyle({ fillStyle: "#115511" });
smo66245v1ar.push(smo66226);
const smo66227 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66227.setAttribute('id', 'smo66227');
smo66227.setStyle({ fillStyle: "#115511" });
smo66245v1ar.push(smo66227);
const smo66228 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66228.setAttribute('id', 'smo66228');
smo66228.setStyle({ fillStyle: "#115511" });
smo66245v1ar.push(smo66228);
const smo66229 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo66229.setAttribute('id', 'smo66229');
smo66229.setStyle({ fillStyle: "#115511" });
smo66245v1ar.push(smo66229);
const smo66230 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66230.setAttribute('id', 'smo66230');
smo66230.setStyle({ fillStyle: "#115511" });
smo66245v1ar.push(smo66230);
const smo66231 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo66231.setAttribute('id', 'smo66231');
smo66231.setStyle({ fillStyle: "#115511" });
smo66245v1ar.push(smo66231);
smo66245v1.addTickables(smo66245v1ar)
fmtsmo6624540.joinVoices([smo66245v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69697 = smo61162.getStemDirection();
smo61162.setStemDirection(dirsmo69697);
smo61163.setStemDirection(dirsmo69697);
smo61164.setStemDirection(dirsmo69697);
smo61165.setStemDirection(dirsmo69697);
const smo69697 = new VF.Beam([smo61162,smo61163,smo61164,smo61165]);
const dirsmo69698 = smo61168.getStemDirection();
smo61168.setStemDirection(dirsmo69698);
smo61169.setStemDirection(dirsmo69698);
const smo69698 = new VF.Beam([smo61168,smo61169]);
const dirsmo69699 = smo61171.getStemDirection();
smo61171.setStemDirection(dirsmo69699);
smo61172.setStemDirection(dirsmo69699);
smo61173.setStemDirection(dirsmo69699);
const smo69699 = new VF.Beam([smo61171,smo61172,smo61173]);
const dirsmo69700 = smo61174.getStemDirection();
smo61174.setStemDirection(dirsmo69700);
smo61175.setStemDirection(dirsmo69700);
const smo69700 = new VF.Beam([smo61174,smo61175]);
const dirsmo69702 = smo66212.getStemDirection();
smo66212.setStemDirection(dirsmo69702);
smo66213.setStemDirection(dirsmo69702);
smo66214.setStemDirection(dirsmo69702);
smo66215.setStemDirection(dirsmo69702);
const smo69702 = new VF.Beam([smo66212,smo66213,smo66214,smo66215]);
const dirsmo69703 = smo66217.getStemDirection();
smo66217.setStemDirection(dirsmo69703);
smo66218.setStemDirection(dirsmo69703);
smo66219.setStemDirection(dirsmo69703);
const smo69703 = new VF.Beam([smo66217,smo66218,smo66219]);
const dirsmo69704 = smo66221.getStemDirection();
smo66221.setStemDirection(dirsmo69704);
smo66222.setStemDirection(dirsmo69704);
smo66223.setStemDirection(dirsmo69704);
const smo69704 = new VF.Beam([smo66221,smo66222,smo66223]);
const dirsmo69705 = smo66224.getStemDirection();
smo66224.setStemDirection(dirsmo69705);
smo66225.setStemDirection(dirsmo69705);
const smo69705 = new VF.Beam([smo66224,smo66225]);
const dirsmo69706 = smo66226.getStemDirection();
smo66226.setStemDirection(dirsmo69706);
smo66227.setStemDirection(dirsmo69706);
const smo69706 = new VF.Beam([smo66226,smo66227]);
const dirsmo69707 = smo66228.getStemDirection();
smo66228.setStemDirection(dirsmo69707);
smo66229.setStemDirection(dirsmo69707);
smo66230.setStemDirection(dirsmo69707);
smo66231.setStemDirection(dirsmo69707);
const smo69707 = new VF.Beam([smo66228,smo66229,smo66230,smo66231]);
 
// formatting measures in staff group smo58712
fmtsmo6119040.format([smo61190v0,smo61190v1,smo66245v0,smo66245v1], 345);
const stavesmo61190 = new VF.Stave(760, 1198, 359);
stavesmo61190.setAttribute('id', 'stavesmo61190');
stavesmo61190.setBegBarType(VF.Barline.type.NONE);
stavesmo61190.setContext(context);
stavesmo61190.draw();
smo61190v0.draw(context, stavesmo61190);
smo61190v1.draw(context, stavesmo61190);
smo69697.setContext(context);
smo69697.draw();
smo69698.setContext(context);
smo69698.draw();
smo69699.setContext(context);
smo69699.draw();
smo69700.setContext(context);
smo69700.draw();
const stavesmo66245 = new VF.Stave(760, 1347, 359);
stavesmo66245.setAttribute('id', 'stavesmo66245');
stavesmo66245.setBegBarType(VF.Barline.type.NONE);
stavesmo66245.setContext(context);
stavesmo66245.draw();
smo66245v0.draw(context, stavesmo66245);
smo66245v1.draw(context, stavesmo66245);
smo69702.setContext(context);
smo69702.draw();
smo69703.setContext(context);
smo69703.draw();
smo69704.setContext(context);
smo69704.draw();
smo69705.setContext(context);
smo69705.draw();
smo69706.setContext(context);
smo69706.draw();
smo69707.setContext(context);
smo69707.draw();
const fmtsmo6121641 = new VF.Formatter();
//
// voices and notes for stave 0 41
const smo61216v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61216v0ar = [];
const smo61191 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo61191.setAttribute('id', 'smo61191');
smo61216v0ar.push(smo61191);
const smo61192 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61192.setAttribute('id', 'smo61192');
smo61216v0ar.push(smo61192);
const smo61193 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61193.setAttribute('id', 'smo61193');
smo61216v0ar.push(smo61193);
const smo61194 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo61194.setAttribute('id', 'smo61194');
smo61216v0ar.push(smo61194);
const smo61195 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo61195.setAttribute('id', 'smo61195');
smo61195.addModifier(new VF.Dot(), 0);
smo61216v0ar.push(smo61195);
const smo61196 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo61196.setAttribute('id', 'smo61196');
smo61216v0ar.push(smo61196);
const smo61197 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo61197.setAttribute('id', 'smo61197');
smo61216v0ar.push(smo61197);
const smo61198 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo61198.setAttribute('id', 'smo61198');
smo61216v0ar.push(smo61198);
const smo61199 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo61199.setAttribute('id', 'smo61199');
smo61216v0ar.push(smo61199);
smo61216v0.addTickables(smo61216v0ar)
fmtsmo6121641.joinVoices([smo61216v0]);
const smo61216v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61216v1ar = [];
const smo61200 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61200.setAttribute('id', 'smo61200');
smo61200.setStyle({ fillStyle: "#115511" });
smo61216v1ar.push(smo61200);
const smo61201 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo61201.setAttribute('id', 'smo61201');
smo61201.setStyle({ fillStyle: '#aaaaaa7f' });
smo61216v1ar.push(smo61201);
const smo61202 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo61202.setAttribute('id', 'smo61202');
smo61202.setStyle({ fillStyle: '#aaaaaa7f' });
smo61216v1ar.push(smo61202);
smo61216v1.addTickables(smo61216v1ar)
fmtsmo6121641.joinVoices([smo61216v1]);
const fmtsmo6627941 = new VF.Formatter();
//
// voices and notes for stave 1 41
const smo66279v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66279v0ar = [];
const smo66246 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66246.setAttribute('id', 'smo66246');
smo66279v0ar.push(smo66246);
const smo66247 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo66247.setAttribute('id', 'smo66247');
smo66279v0ar.push(smo66247);
const smo66248 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66248.setAttribute('id', 'smo66248');
smo66279v0ar.push(smo66248);
const smo66249 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo66249.setAttribute('id', 'smo66249');
smo66279v0ar.push(smo66249);
const smo66250 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo66250.setAttribute('id', 'smo66250');
smo66279v0ar.push(smo66250);
const smo66251 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo66251.setAttribute('id', 'smo66251');
smo66251.addModifier(new VF.Dot(), 0);
smo66279v0ar.push(smo66251);
const smo66252 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo66252.setAttribute('id', 'smo66252');
smo66279v0ar.push(smo66252);
const smo66253 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo66253.setAttribute('id', 'smo66253');
smo66279v0ar.push(smo66253);
smo66279v0.addTickables(smo66279v0ar)
fmtsmo6627941.joinVoices([smo66279v0]);
const smo66279v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66279v1ar = [];
const smo66254 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo66254.setAttribute('id', 'smo66254');
smo66254.setStyle({ fillStyle: "#115511" });
smo66279v1ar.push(smo66254);
const smo66255 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo66255.setAttribute('id', 'smo66255');
smo66255.setStyle({ fillStyle: "#115511" });
smo66279v1ar.push(smo66255);
const smo66256 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo66256.setAttribute('id', 'smo66256');
smo66256.setStyle({ fillStyle: "#115511" });
smo66279v1ar.push(smo66256);
const smo66257 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo66257.setAttribute('id', 'smo66257');
smo66257.setStyle({ fillStyle: "#115511" });
smo66279v1ar.push(smo66257);
const smo66258 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo66258.setAttribute('id', 'smo66258');
smo66258.setStyle({ fillStyle: "#115511" });
smo66279v1ar.push(smo66258);
const smo66259 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo66259.setAttribute('id', 'smo66259');
smo66259.setStyle({ fillStyle: "#115511" });
smo66279v1ar.push(smo66259);
const smo66260 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo66260.setAttribute('id', 'smo66260');
smo66260.setStyle({ fillStyle: "#115511" });
smo66279v1ar.push(smo66260);
const smo66261 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/2/n"]}'))
smo66261.setAttribute('id', 'smo66261');
smo66261.setStyle({ fillStyle: "#115511" });
smo66279v1ar.push(smo66261);
const smo66262 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/2/n"]}'))
smo66262.setAttribute('id', 'smo66262');
smo66262.setStyle({ fillStyle: "#115511" });
smo66279v1ar.push(smo66262);
const smo66263 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo66263.setAttribute('id', 'smo66263');
smo66263.setStyle({ fillStyle: "#115511" });
smo66279v1ar.push(smo66263);
const smo66264 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo66264.setAttribute('id', 'smo66264');
smo66264.setStyle({ fillStyle: "#115511" });
smo66279v1ar.push(smo66264);
const smo66265 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo66265.setAttribute('id', 'smo66265');
smo66265.setStyle({ fillStyle: "#115511" });
const smo662650acc = new VF.Accidental('#');
smo66265.addModifier(smo662650acc, 0);
smo66279v1ar.push(smo66265);
smo66279v1.addTickables(smo66279v1ar)
fmtsmo6627941.joinVoices([smo66279v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69711 = smo61192.getStemDirection();
smo61192.setStemDirection(dirsmo69711);
smo61193.setStemDirection(dirsmo69711);
smo61194.setStemDirection(dirsmo69711);
const smo69711 = new VF.Beam([smo61192,smo61193,smo61194]);
const dirsmo69712 = smo61195.getStemDirection();
smo61195.setStemDirection(dirsmo69712);
smo61196.setStemDirection(dirsmo69712);
smo61197.setStemDirection(dirsmo69712);
const smo69712 = new VF.Beam([smo61195,smo61196,smo61197]);
const dirsmo69713 = smo61198.getStemDirection();
smo61198.setStemDirection(dirsmo69713);
smo61199.setStemDirection(dirsmo69713);
const smo69713 = new VF.Beam([smo61198,smo61199]);
const dirsmo69715 = smo66248.getStemDirection();
smo66248.setStemDirection(dirsmo69715);
smo66249.setStemDirection(dirsmo69715);
const smo69715 = new VF.Beam([smo66248,smo66249]);
const dirsmo69716 = smo66251.getStemDirection();
smo66251.setStemDirection(dirsmo69716);
smo66252.setStemDirection(dirsmo69716);
smo66253.setStemDirection(dirsmo69716);
const smo69716 = new VF.Beam([smo66251,smo66252,smo66253]);
const dirsmo69717 = smo66254.getStemDirection();
smo66254.setStemDirection(dirsmo69717);
smo66255.setStemDirection(dirsmo69717);
smo66256.setStemDirection(dirsmo69717);
smo66257.setStemDirection(dirsmo69717);
const smo69717 = new VF.Beam([smo66254,smo66255,smo66256,smo66257]);
const dirsmo69718 = smo66258.getStemDirection();
smo66258.setStemDirection(dirsmo69718);
smo66259.setStemDirection(dirsmo69718);
smo66260.setStemDirection(dirsmo69718);
smo66261.setStemDirection(dirsmo69718);
const smo69718 = new VF.Beam([smo66258,smo66259,smo66260,smo66261]);
const dirsmo69719 = smo66262.getStemDirection();
smo66262.setStemDirection(dirsmo69719);
smo66263.setStemDirection(dirsmo69719);
smo66264.setStemDirection(dirsmo69719);
smo66265.setStemDirection(dirsmo69719);
const smo69719 = new VF.Beam([smo66262,smo66263,smo66264,smo66265]);
 
// formatting measures in staff group smo58712
fmtsmo6121641.format([smo61216v0,smo61216v1,smo66279v0,smo66279v1], 348);
const stavesmo61216 = new VF.Stave(1119, 1198, 362);
stavesmo61216.setAttribute('id', 'stavesmo61216');
stavesmo61216.setBegBarType(VF.Barline.type.NONE);
stavesmo61216.setContext(context);
stavesmo61216.draw();
smo61216v0.draw(context, stavesmo61216);
smo61216v1.draw(context, stavesmo61216);
smo69711.setContext(context);
smo69711.draw();
smo69712.setContext(context);
smo69712.draw();
smo69713.setContext(context);
smo69713.draw();
const stavesmo66279 = new VF.Stave(1119, 1347, 362);
stavesmo66279.setAttribute('id', 'stavesmo66279');
stavesmo66279.setBegBarType(VF.Barline.type.NONE);
stavesmo66279.setContext(context);
stavesmo66279.draw();
smo66279v0.draw(context, stavesmo66279);
smo66279v1.draw(context, stavesmo66279);
smo69715.setContext(context);
smo69715.draw();
smo69716.setContext(context);
smo69716.draw();
smo69717.setContext(context);
smo69717.draw();
smo69718.setContext(context);
smo69718.draw();
smo69719.setContext(context);
smo69719.draw();
const fmtsmo6124242 = new VF.Formatter();
//
// voices and notes for stave 0 42
const smo61242v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61242v0ar = [];
const smo61217 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61217.setAttribute('id', 'smo61217');
smo61242v0ar.push(smo61217);
const smo61218 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/5/n"]}'))
smo61218.setAttribute('id', 'smo61218');
smo61242v0ar.push(smo61218);
const smo61219 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/5/n"]}'))
smo61219.setAttribute('id', 'smo61219');
smo61242v0ar.push(smo61219);
const smo61220 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/5/n"]}'))
smo61220.setAttribute('id', 'smo61220');
smo61242v0ar.push(smo61220);
const smo61221 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/5/n"]}'))
smo61221.setAttribute('id', 'smo61221');
smo61242v0ar.push(smo61221);
const smo61222 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/5/n"]}'))
smo61222.setAttribute('id', 'smo61222');
smo61242v0ar.push(smo61222);
const smo61223 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo61223.setAttribute('id', 'smo61223');
smo61242v0ar.push(smo61223);
const smo61224 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/5/n"]}'))
smo61224.setAttribute('id', 'smo61224');
smo61242v0ar.push(smo61224);
const smo61225 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/5/n"]}'))
smo61225.setAttribute('id', 'smo61225');
smo61242v0ar.push(smo61225);
const smo61226 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/5/n"]}'))
smo61226.setAttribute('id', 'smo61226');
smo61242v0ar.push(smo61226);
const smo61227 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/5/n"]}'))
smo61227.setAttribute('id', 'smo61227');
smo61242v0ar.push(smo61227);
const smo61228 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/5/n"]}'))
smo61228.setAttribute('id', 'smo61228');
smo61242v0ar.push(smo61228);
smo61242v0.addTickables(smo61242v0ar)
fmtsmo6124242.joinVoices([smo61242v0]);
const fmtsmo6631142 = new VF.Formatter();
//
// voices and notes for stave 1 42
const smo66311v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66311v0ar = [];
const smo66280 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo66280.setAttribute('id', 'smo66280');
smo66311v0ar.push(smo66280);
const smo66281 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo66281.setAttribute('id', 'smo66281');
smo66311v0ar.push(smo66281);
const smo66282 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo66282.setAttribute('id', 'smo66282');
smo66311v0ar.push(smo66282);
const smo66283 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo66283.setAttribute('id', 'smo66283');
smo66311v0ar.push(smo66283);
const smo66284 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo66284.setAttribute('id', 'smo66284');
smo66311v0ar.push(smo66284);
const smo66285 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo66285.setAttribute('id', 'smo66285');
smo66311v0ar.push(smo66285);
const smo66286 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo66286.setAttribute('id', 'smo66286');
smo66311v0ar.push(smo66286);
const smo66287 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo66287.setAttribute('id', 'smo66287');
smo66311v0ar.push(smo66287);
const smo66288 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo66288.setAttribute('id', 'smo66288');
const smo662880acc = new VF.Accidental('n');
smo66288.addModifier(smo662880acc, 0);
smo66311v0ar.push(smo66288);
const smo66289 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo66289.setAttribute('id', 'smo66289');
smo66311v0ar.push(smo66289);
smo66311v0.addTickables(smo66311v0ar)
fmtsmo6631142.joinVoices([smo66311v0]);
const smo66311v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66311v1ar = [];
const smo66290 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66290.setAttribute('id', 'smo66290');
smo66290.setStyle({ fillStyle: "#115511" });
smo66311v1ar.push(smo66290);
const smo66291 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo66291.setAttribute('id', 'smo66291');
smo66291.setStyle({ fillStyle: "#115511" });
smo66311v1ar.push(smo66291);
const smo66292 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/3/n"]}'))
smo66292.setAttribute('id', 'smo66292');
smo66292.setStyle({ fillStyle: "#115511" });
const smo662920acc = new VF.Accidental('b');
smo66292.addModifier(smo662920acc, 0);
smo66311v1ar.push(smo66292);
const smo66293 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66293.setAttribute('id', 'smo66293');
smo66293.setStyle({ fillStyle: "#115511" });
smo66311v1ar.push(smo66293);
const smo66294 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/3/n"]}'))
smo66294.setAttribute('id', 'smo66294');
smo66294.setStyle({ fillStyle: "#115511" });
const smo662940acc = new VF.Accidental('#');
smo66294.addModifier(smo662940acc, 0);
smo66311v1ar.push(smo66294);
const smo66295 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo66295.setAttribute('id', 'smo66295');
smo66295.setStyle({ fillStyle: "#115511" });
smo66311v1ar.push(smo66295);
const smo66296 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo66296.setAttribute('id', 'smo66296');
smo66296.setStyle({ fillStyle: "#115511" });
smo66311v1ar.push(smo66296);
const smo66297 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo66297.setAttribute('id', 'smo66297');
smo66297.setStyle({ fillStyle: "#115511" });
smo66311v1ar.push(smo66297);
smo66311v1.addTickables(smo66311v1ar)
fmtsmo6631142.joinVoices([smo66311v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69723 = smo61217.getStemDirection();
smo61217.setStemDirection(dirsmo69723);
smo61218.setStemDirection(dirsmo69723);
const smo69723 = new VF.Beam([smo61217,smo61218]);
const dirsmo69724 = smo61219.getStemDirection();
smo61219.setStemDirection(dirsmo69724);
smo61220.setStemDirection(dirsmo69724);
smo61221.setStemDirection(dirsmo69724);
smo61222.setStemDirection(dirsmo69724);
const smo69724 = new VF.Beam([smo61219,smo61220,smo61221,smo61222]);
const dirsmo69725 = smo61223.getStemDirection();
smo61223.setStemDirection(dirsmo69725);
smo61224.setStemDirection(dirsmo69725);
const smo69725 = new VF.Beam([smo61223,smo61224]);
const dirsmo69726 = smo61225.getStemDirection();
smo61225.setStemDirection(dirsmo69726);
smo61226.setStemDirection(dirsmo69726);
smo61227.setStemDirection(dirsmo69726);
smo61228.setStemDirection(dirsmo69726);
const smo69726 = new VF.Beam([smo61225,smo61226,smo61227,smo61228]);
const dirsmo69728 = smo66280.getStemDirection();
smo66280.setStemDirection(dirsmo69728);
smo66281.setStemDirection(dirsmo69728);
smo66282.setStemDirection(dirsmo69728);
smo66283.setStemDirection(dirsmo69728);
const smo69728 = new VF.Beam([smo66280,smo66281,smo66282,smo66283]);
const dirsmo69729 = smo66284.getStemDirection();
smo66284.setStemDirection(dirsmo69729);
smo66285.setStemDirection(dirsmo69729);
smo66286.setStemDirection(dirsmo69729);
smo66287.setStemDirection(dirsmo69729);
const smo69729 = new VF.Beam([smo66284,smo66285,smo66286,smo66287]);
const dirsmo69730 = smo66288.getStemDirection();
smo66288.setStemDirection(dirsmo69730);
smo66289.setStemDirection(dirsmo69730);
const smo69730 = new VF.Beam([smo66288,smo66289]);
const dirsmo69731 = smo66290.getStemDirection();
smo66290.setStemDirection(dirsmo69731);
smo66291.setStemDirection(dirsmo69731);
smo66292.setStemDirection(dirsmo69731);
smo66293.setStemDirection(dirsmo69731);
const smo69731 = new VF.Beam([smo66290,smo66291,smo66292,smo66293]);
const dirsmo69732 = smo66294.getStemDirection();
smo66294.setStemDirection(dirsmo69732);
smo66295.setStemDirection(dirsmo69732);
const smo69732 = new VF.Beam([smo66294,smo66295]);
 
// formatting measures in staff group smo58712
fmtsmo6124242.format([smo61242v0,smo66311v0,smo66311v1], 314);
const stavesmo61242 = new VF.Stave(1481, 1198, 328);
stavesmo61242.setAttribute('id', 'stavesmo61242');
stavesmo61242.setBegBarType(VF.Barline.type.NONE);
stavesmo61242.setContext(context);
stavesmo61242.draw();
smo61242v0.draw(context, stavesmo61242);
smo69723.setContext(context);
smo69723.draw();
smo69724.setContext(context);
smo69724.draw();
smo69725.setContext(context);
smo69725.draw();
smo69726.setContext(context);
smo69726.draw();
const stavesmo66311 = new VF.Stave(1481, 1347, 328);
stavesmo66311.setAttribute('id', 'stavesmo66311');
stavesmo66311.setBegBarType(VF.Barline.type.NONE);
stavesmo66311.setContext(context);
stavesmo66311.draw();
smo66311v0.draw(context, stavesmo66311);
smo66311v1.draw(context, stavesmo66311);
smo69728.setContext(context);
smo69728.draw();
smo69729.setContext(context);
smo69729.draw();
smo69730.setContext(context);
smo69730.draw();
smo69731.setContext(context);
smo69731.draw();
smo69732.setContext(context);
smo69732.draw();
const rightsmo58712stavesmo612421 = new VF.StaveConnector(stavesmo61242, stavesmo66311).setType(0);
rightsmo58712stavesmo612421.setContext(context).draw();
const fmtsmo6126943 = new VF.Formatter();
//
// voices and notes for stave 0 43
const smo61269v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61269v0ar = [];
const smo61243 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo61243.setAttribute('id', 'smo61243');
smo61269v0ar.push(smo61243);
const smo61244 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo61244.setAttribute('id', 'smo61244');
smo61269v0ar.push(smo61244);
const smo61245 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/5/n"]}'))
smo61245.setAttribute('id', 'smo61245');
const smo612450acc = new VF.Accidental('#');
smo61245.addModifier(smo612450acc, 0);
smo61269v0ar.push(smo61245);
const smo61246 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo61246.setAttribute('id', 'smo61246');
smo61269v0ar.push(smo61246);
smo61269v0.addTickables(smo61269v0ar)
fmtsmo6126943.joinVoices([smo61269v0]);
const smo61269v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61269v1ar = [];
const smo61247 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo61247.setAttribute('id', 'smo61247');
smo61247.setStyle({ fillStyle: "#115511" });
smo61269v1ar.push(smo61247);
const smo61248 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61248.setAttribute('id', 'smo61248');
smo61248.setStyle({ fillStyle: "#115511" });
smo61269v1ar.push(smo61248);
const smo61249 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo61249.setAttribute('id', 'smo61249');
smo61249.setStyle({ fillStyle: "#115511" });
smo61269v1ar.push(smo61249);
const smo61250 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61250.setAttribute('id', 'smo61250');
smo61250.setStyle({ fillStyle: "#115511" });
smo61269v1ar.push(smo61250);
const smo61251 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61251.setAttribute('id', 'smo61251');
smo61251.setStyle({ fillStyle: "#115511" });
smo61251.addModifier(new VF.Dot(), 0);
smo61269v1ar.push(smo61251);
const smo61252 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61252.setAttribute('id', 'smo61252');
smo61252.setStyle({ fillStyle: "#115511" });
smo61269v1ar.push(smo61252);
const smo61253 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61253.setAttribute('id', 'smo61253');
smo61253.setStyle({ fillStyle: "#115511" });
smo61269v1ar.push(smo61253);
const smo61254 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61254.setAttribute('id', 'smo61254');
smo61254.setStyle({ fillStyle: "#115511" });
smo61269v1ar.push(smo61254);
const smo61255 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo61255.setAttribute('id', 'smo61255');
smo61255.setStyle({ fillStyle: "#115511" });
smo61269v1ar.push(smo61255);
smo61269v1.addTickables(smo61269v1ar)
fmtsmo6126943.joinVoices([smo61269v1]);
const fmtsmo6634643 = new VF.Formatter();
//
// voices and notes for stave 1 43
const smo66346v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66346v0ar = [];
const smo66312 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo66312.setAttribute('id', 'smo66312');
smo66346v0ar.push(smo66312);
const smo66313 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo66313.setAttribute('id', 'smo66313');
smo66346v0ar.push(smo66313);
const smo66314 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo66314.setAttribute('id', 'smo66314');
smo66346v0ar.push(smo66314);
const smo66315 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo66315.setAttribute('id', 'smo66315');
smo66346v0ar.push(smo66315);
const smo66316 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo66316.setAttribute('id', 'smo66316');
smo66346v0ar.push(smo66316);
const smo66317 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo66317.setAttribute('id', 'smo66317');
smo66346v0ar.push(smo66317);
const smo66318 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo66318.setAttribute('id', 'smo66318');
smo66346v0ar.push(smo66318);
const smo66319 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo66319.setAttribute('id', 'smo66319');
smo66346v0ar.push(smo66319);
const smo66320 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo66320.setAttribute('id', 'smo66320');
smo66346v0ar.push(smo66320);
const smo66321 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo66321.setAttribute('id', 'smo66321');
smo66346v0ar.push(smo66321);
smo66346v0.addTickables(smo66346v0ar)
fmtsmo6634643.joinVoices([smo66346v0]);
const smo66346v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66346v1ar = [];
const smo66322 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo66322.setAttribute('id', 'smo66322');
smo66322.setStyle({ fillStyle: "#115511" });
smo66346v1ar.push(smo66322);
const smo66323 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/3/n"]}'))
smo66323.setAttribute('id', 'smo66323');
smo66323.setStyle({ fillStyle: "#115511" });
smo66346v1ar.push(smo66323);
const smo66324 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo66324.setAttribute('id', 'smo66324');
smo66324.setStyle({ fillStyle: "#115511" });
smo66346v1ar.push(smo66324);
const smo66325 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo66325.setAttribute('id', 'smo66325');
smo66325.setStyle({ fillStyle: "#115511" });
smo66346v1ar.push(smo66325);
const smo66326 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo66326.setAttribute('id', 'smo66326');
smo66326.setStyle({ fillStyle: "#115511" });
smo66346v1ar.push(smo66326);
const smo66327 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/3/n"]}'))
smo66327.setAttribute('id', 'smo66327');
smo66327.setStyle({ fillStyle: "#115511" });
smo66346v1ar.push(smo66327);
const smo66328 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo66328.setAttribute('id', 'smo66328');
smo66328.setStyle({ fillStyle: "#115511" });
smo66346v1ar.push(smo66328);
const smo66329 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66329.setAttribute('id', 'smo66329');
smo66329.setStyle({ fillStyle: "#115511" });
smo66346v1ar.push(smo66329);
const smo66330 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo66330.setAttribute('id', 'smo66330');
smo66330.setStyle({ fillStyle: "#115511" });
smo66346v1ar.push(smo66330);
const smo66331 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo66331.setAttribute('id', 'smo66331');
smo66331.setStyle({ fillStyle: "#115511" });
smo66346v1ar.push(smo66331);
const smo66332 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo66332.setAttribute('id', 'smo66332');
smo66332.setStyle({ fillStyle: "#115511" });
smo66346v1ar.push(smo66332);
smo66346v1.addTickables(smo66346v1ar)
fmtsmo6634643.joinVoices([smo66346v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69748 = smo61244.getStemDirection();
smo61244.setStemDirection(dirsmo69748);
smo61245.setStemDirection(dirsmo69748);
const smo69748 = new VF.Beam([smo61244,smo61245]);
const dirsmo69749 = smo61248.getStemDirection();
smo61248.setStemDirection(dirsmo69749);
smo61249.setStemDirection(dirsmo69749);
smo61250.setStemDirection(dirsmo69749);
const smo69749 = new VF.Beam([smo61248,smo61249,smo61250]);
const dirsmo69750 = smo61251.getStemDirection();
smo61251.setStemDirection(dirsmo69750);
smo61252.setStemDirection(dirsmo69750);
smo61253.setStemDirection(dirsmo69750);
const smo69750 = new VF.Beam([smo61251,smo61252,smo61253]);
const dirsmo69751 = smo61254.getStemDirection();
smo61254.setStemDirection(dirsmo69751);
smo61255.setStemDirection(dirsmo69751);
const smo69751 = new VF.Beam([smo61254,smo61255]);
const dirsmo69753 = smo66314.getStemDirection();
smo66314.setStemDirection(dirsmo69753);
smo66315.setStemDirection(dirsmo69753);
smo66316.setStemDirection(dirsmo69753);
smo66317.setStemDirection(dirsmo69753);
const smo69753 = new VF.Beam([smo66314,smo66315,smo66316,smo66317]);
const dirsmo69754 = smo66318.getStemDirection();
smo66318.setStemDirection(dirsmo69754);
smo66319.setStemDirection(dirsmo69754);
smo66320.setStemDirection(dirsmo69754);
smo66321.setStemDirection(dirsmo69754);
const smo69754 = new VF.Beam([smo66318,smo66319,smo66320,smo66321]);
const dirsmo69755 = smo66322.getStemDirection();
smo66322.setStemDirection(dirsmo69755);
smo66323.setStemDirection(dirsmo69755);
smo66324.setStemDirection(dirsmo69755);
smo66325.setStemDirection(dirsmo69755);
const smo69755 = new VF.Beam([smo66322,smo66323,smo66324,smo66325]);
const dirsmo69756 = smo66326.getStemDirection();
smo66326.setStemDirection(dirsmo69756);
smo66327.setStemDirection(dirsmo69756);
smo66328.setStemDirection(dirsmo69756);
smo66329.setStemDirection(dirsmo69756);
const smo69756 = new VF.Beam([smo66326,smo66327,smo66328,smo66329]);
 
// formatting measures in staff group smo58712
fmtsmo6126943.format([smo61269v0,smo61269v1,smo66346v0,smo66346v1], 379);
const stavesmo61269 = new VF.Stave(90, 1506, 430);
stavesmo61269.setAttribute('id', 'stavesmo61269');
stavesmo61269.setBegBarType(1);
stavesmo61269.addClef('treble');
stavesmo61269.setContext(context);
stavesmo61269.draw();
smo61269v0.draw(context, stavesmo61269);
smo61269v1.draw(context, stavesmo61269);
smo69748.setContext(context);
smo69748.draw();
smo69749.setContext(context);
smo69749.draw();
smo69750.setContext(context);
smo69750.draw();
smo69751.setContext(context);
smo69751.draw();
const stavesmo66346 = new VF.Stave(90, 1670, 430);
stavesmo66346.setAttribute('id', 'stavesmo66346');
stavesmo66346.setBegBarType(1);
stavesmo66346.addClef('bass');
stavesmo66346.setContext(context);
stavesmo66346.draw();
smo66346v0.draw(context, stavesmo66346);
smo66346v1.draw(context, stavesmo66346);
smo69753.setContext(context);
smo69753.draw();
smo69754.setContext(context);
smo69754.draw();
smo69755.setContext(context);
smo69755.draw();
smo69756.setContext(context);
smo69756.draw();
const leftsmo58712stavesmo612691 = new VF.StaveConnector(stavesmo61269, stavesmo66346).setType(3);
leftsmo58712stavesmo612691.setContext(context).draw();
const fmtsmo6130344 = new VF.Formatter();
//
// voices and notes for stave 0 44
const smo61303v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61303v0ar = [];
const smo61270 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo61270.setAttribute('id', 'smo61270');
smo61303v0ar.push(smo61270);
const smo61271 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/5/n"]}'))
smo61271.setAttribute('id', 'smo61271');
const smo612710acc = new VF.Accidental('#');
smo61271.addModifier(smo612710acc, 0);
smo61303v0ar.push(smo61271);
const smo61272 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo61272.setAttribute('id', 'smo61272');
smo61303v0ar.push(smo61272);
const smo61273 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo61273.setAttribute('id', 'smo61273');
const smo612730acc = new VF.Accidental('n');
smo61273.addModifier(smo612730acc, 0);
smo61303v0ar.push(smo61273);
const smo61274 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo61274.setAttribute('id', 'smo61274');
smo61303v0ar.push(smo61274);
const smo61275 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61275.setAttribute('id', 'smo61275');
smo61303v0ar.push(smo61275);
const smo61276 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61276.setAttribute('id', 'smo61276');
smo61303v0ar.push(smo61276);
const smo61277 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61277.setAttribute('id', 'smo61277');
smo61303v0ar.push(smo61277);
const smo61278 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61278.setAttribute('id', 'smo61278');
smo61303v0ar.push(smo61278);
const smo61279 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61279.setAttribute('id', 'smo61279');
smo61303v0ar.push(smo61279);
smo61303v0.addTickables(smo61303v0ar)
fmtsmo6130344.joinVoices([smo61303v0]);
const smo61303v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61303v1ar = [];
const smo61280 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo61280.setAttribute('id', 'smo61280');
smo61280.setStyle({ fillStyle: "#115511" });
smo61303v1ar.push(smo61280);
const smo61281 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61281.setAttribute('id', 'smo61281');
smo61281.setStyle({ fillStyle: "#115511" });
smo61303v1ar.push(smo61281);
const smo61282 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61282.setAttribute('id', 'smo61282');
smo61282.setStyle({ fillStyle: "#115511" });
smo61303v1ar.push(smo61282);
const smo61283 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo61283.setAttribute('id', 'smo61283');
smo61283.setStyle({ fillStyle: "#115511" });
smo61303v1ar.push(smo61283);
const smo61284 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61284.setAttribute('id', 'smo61284');
smo61284.setStyle({ fillStyle: "#115511" });
smo61303v1ar.push(smo61284);
const smo61285 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61285.setAttribute('id', 'smo61285');
smo61285.setStyle({ fillStyle: "#115511" });
smo61303v1ar.push(smo61285);
const smo61286 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61286.setAttribute('id', 'smo61286');
smo61286.setStyle({ fillStyle: "#115511" });
smo61303v1ar.push(smo61286);
const smo61287 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo61287.setAttribute('id', 'smo61287');
smo61287.setStyle({ fillStyle: "#115511" });
smo61303v1ar.push(smo61287);
const smo61288 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo61288.setAttribute('id', 'smo61288');
smo61288.setStyle({ fillStyle: "#115511" });
smo61303v1ar.push(smo61288);
const smo61289 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo61289.setAttribute('id', 'smo61289');
smo61289.setStyle({ fillStyle: "#115511" });
smo61303v1ar.push(smo61289);
smo61303v1.addTickables(smo61303v1ar)
fmtsmo6130344.joinVoices([smo61303v1]);
const fmtsmo6637544 = new VF.Formatter();
//
// voices and notes for stave 1 44
const smo66375v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66375v0ar = [];
const smo66347 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo66347.setAttribute('id', 'smo66347');
smo66375v0ar.push(smo66347);
const smo66348 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo66348.setAttribute('id', 'smo66348');
smo66375v0ar.push(smo66348);
const smo66349 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo66349.setAttribute('id', 'smo66349');
smo66375v0ar.push(smo66349);
const smo66350 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo66350.setAttribute('id', 'smo66350');
smo66375v0ar.push(smo66350);
const smo66351 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo66351.setAttribute('id', 'smo66351');
smo66375v0ar.push(smo66351);
const smo66352 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo66352.setAttribute('id', 'smo66352');
smo66375v0ar.push(smo66352);
const smo66353 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo66353.setAttribute('id', 'smo66353');
smo66375v0ar.push(smo66353);
const smo66354 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo66354.setAttribute('id', 'smo66354');
smo66375v0ar.push(smo66354);
const smo66355 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66355.setAttribute('id', 'smo66355');
smo66375v0ar.push(smo66355);
const smo66356 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["gn/3/r"]}'))
smo66356.setAttribute('id', 'smo66356');
smo66375v0ar.push(smo66356);
smo66375v0.addTickables(smo66375v0ar)
fmtsmo6637544.joinVoices([smo66375v0]);
const smo66375v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66375v1ar = [];
const smo66357 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo66357.setAttribute('id', 'smo66357');
smo66357.setStyle({ fillStyle: "#115511" });
smo66375v1ar.push(smo66357);
const smo66358 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo66358.setAttribute('id', 'smo66358');
smo66358.setStyle({ fillStyle: "#115511" });
smo66375v1ar.push(smo66358);
const smo66359 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo66359.setAttribute('id', 'smo66359');
smo66359.setStyle({ fillStyle: "#115511" });
smo66375v1ar.push(smo66359);
const smo66360 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/2/n"]}'))
smo66360.setAttribute('id', 'smo66360');
smo66360.setStyle({ fillStyle: "#115511" });
smo66375v1ar.push(smo66360);
const smo66361 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/2/n"]}'))
smo66361.setAttribute('id', 'smo66361');
smo66361.setStyle({ fillStyle: "#115511" });
smo66375v1ar.push(smo66361);
smo66375v1.addTickables(smo66375v1ar)
fmtsmo6637544.joinVoices([smo66375v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69760 = smo61272.getStemDirection();
smo61272.setStemDirection(dirsmo69760);
smo61273.setStemDirection(dirsmo69760);
smo61274.setStemDirection(dirsmo69760);
smo61275.setStemDirection(dirsmo69760);
const smo69760 = new VF.Beam([smo61272,smo61273,smo61274,smo61275]);
const dirsmo69761 = smo61276.getStemDirection();
smo61276.setStemDirection(dirsmo69761);
smo61277.setStemDirection(dirsmo69761);
smo61278.setStemDirection(dirsmo69761);
smo61279.setStemDirection(dirsmo69761);
const smo69761 = new VF.Beam([smo61276,smo61277,smo61278,smo61279]);
const dirsmo69762 = smo61280.getStemDirection();
smo61280.setStemDirection(dirsmo69762);
smo61281.setStemDirection(dirsmo69762);
const smo69762 = new VF.Beam([smo61280,smo61281]);
const dirsmo69763 = smo61282.getStemDirection();
smo61282.setStemDirection(dirsmo69763);
smo61283.setStemDirection(dirsmo69763);
smo61284.setStemDirection(dirsmo69763);
smo61285.setStemDirection(dirsmo69763);
const smo69763 = new VF.Beam([smo61282,smo61283,smo61284,smo61285]);
const dirsmo69765 = smo66347.getStemDirection();
smo66347.setStemDirection(dirsmo69765);
smo66348.setStemDirection(dirsmo69765);
smo66349.setStemDirection(dirsmo69765);
smo66350.setStemDirection(dirsmo69765);
const smo69765 = new VF.Beam([smo66347,smo66348,smo66349,smo66350]);
const dirsmo69766 = smo66351.getStemDirection();
smo66351.setStemDirection(dirsmo69766);
smo66352.setStemDirection(dirsmo69766);
smo66353.setStemDirection(dirsmo69766);
smo66354.setStemDirection(dirsmo69766);
const smo69766 = new VF.Beam([smo66351,smo66352,smo66353,smo66354]);
const dirsmo69767 = smo66359.getStemDirection();
smo66359.setStemDirection(dirsmo69767);
smo66360.setStemDirection(dirsmo69767);
smo66361.setStemDirection(dirsmo69767);
const smo69767 = new VF.Beam([smo66359,smo66360,smo66361]);
 
// formatting measures in staff group smo58712
fmtsmo6130344.format([smo61303v0,smo61303v1,smo66375v0,smo66375v1], 343);
const stavesmo61303 = new VF.Stave(520, 1506, 357);
stavesmo61303.setAttribute('id', 'stavesmo61303');
stavesmo61303.setBegBarType(VF.Barline.type.NONE);
stavesmo61303.setContext(context);
stavesmo61303.draw();
smo61303v0.draw(context, stavesmo61303);
smo61303v1.draw(context, stavesmo61303);
smo69760.setContext(context);
smo69760.draw();
smo69761.setContext(context);
smo69761.draw();
smo69762.setContext(context);
smo69762.draw();
smo69763.setContext(context);
smo69763.draw();
const stavesmo66375 = new VF.Stave(520, 1670, 357);
stavesmo66375.setAttribute('id', 'stavesmo66375');
stavesmo66375.setBegBarType(VF.Barline.type.NONE);
stavesmo66375.setContext(context);
stavesmo66375.draw();
smo66375v0.draw(context, stavesmo66375);
smo66375v1.draw(context, stavesmo66375);
smo69765.setContext(context);
smo69765.draw();
smo69766.setContext(context);
smo69766.draw();
smo69767.setContext(context);
smo69767.draw();
const fmtsmo6133745 = new VF.Formatter();
//
// voices and notes for stave 0 45
const smo61337v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61337v0ar = [];
const smo61304 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo61304.setAttribute('id', 'smo61304');
smo61337v0ar.push(smo61304);
const smo61305 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61305.setAttribute('id', 'smo61305');
smo61337v0ar.push(smo61305);
const smo61306 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61306.setAttribute('id', 'smo61306');
smo61337v0ar.push(smo61306);
const smo61307 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo61307.setAttribute('id', 'smo61307');
smo61337v0ar.push(smo61307);
const smo61308 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61308.setAttribute('id', 'smo61308');
smo61308.addModifier(new VF.Dot(), 0);
smo61337v0ar.push(smo61308);
const smo61309 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["gn/5/r"]}'))
smo61309.setAttribute('id', 'smo61309');
smo61337v0ar.push(smo61309);
const smo61310 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61310.setAttribute('id', 'smo61310');
smo61337v0ar.push(smo61310);
const smo61311 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61311.setAttribute('id', 'smo61311');
smo61337v0ar.push(smo61311);
const smo61312 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo61312.setAttribute('id', 'smo61312');
smo61337v0ar.push(smo61312);
const smo61313 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["g#/4/n"]}'))
smo61313.setAttribute('id', 'smo61313');
const smo613130acc = new VF.Accidental('#');
smo61313.addModifier(smo613130acc, 0);
smo61337v0ar.push(smo61313);
const smo61314 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo61314.setAttribute('id', 'smo61314');
smo61337v0ar.push(smo61314);
smo61337v0.addTickables(smo61337v0ar)
fmtsmo6133745.joinVoices([smo61337v0]);
const smo61337v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61337v1ar = [];
const smo61315 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo61315.setAttribute('id', 'smo61315');
smo61315.setStyle({ fillStyle: "#115511" });
smo61337v1ar.push(smo61315);
const smo61316 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/4/n"]}'))
smo61316.setAttribute('id', 'smo61316');
smo61316.setStyle({ fillStyle: "#115511" });
const smo613160acc = new VF.Accidental('#');
smo61316.addModifier(smo613160acc, 0);
smo61337v1ar.push(smo61316);
const smo61317 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61317.setAttribute('id', 'smo61317');
smo61317.setStyle({ fillStyle: "#115511" });
smo61317.addModifier(new VF.Dot(), 0);
smo61337v1ar.push(smo61317);
const smo61318 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo61318.setAttribute('id', 'smo61318');
smo61318.setStyle({ fillStyle: "#115511" });
smo61337v1ar.push(smo61318);
const smo61319 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61319.setAttribute('id', 'smo61319');
smo61319.setStyle({ fillStyle: "#115511" });
smo61337v1ar.push(smo61319);
const smo61320 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/4/n"]}'))
smo61320.setAttribute('id', 'smo61320');
smo61320.setStyle({ fillStyle: "#115511" });
smo61337v1ar.push(smo61320);
const smo61321 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61321.setAttribute('id', 'smo61321');
smo61321.setStyle({ fillStyle: "#115511" });
smo61337v1ar.push(smo61321);
const smo61322 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo61322.setAttribute('id', 'smo61322');
smo61322.setStyle({ fillStyle: "#115511" });
smo61337v1ar.push(smo61322);
const smo61323 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo61323.setAttribute('id', 'smo61323');
smo61323.setStyle({ fillStyle: "#115511" });
smo61337v1ar.push(smo61323);
smo61337v1.addTickables(smo61337v1ar)
fmtsmo6133745.joinVoices([smo61337v1]);
const fmtsmo6640145 = new VF.Formatter();
//
// voices and notes for stave 1 45
const smo66401v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66401v0ar = [];
const smo66376 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo66376.setAttribute('id', 'smo66376');
smo66376.setStyle({ fillStyle: '#aaaaaa7f' });
smo66401v0ar.push(smo66376);
smo66401v0.addTickables(smo66401v0ar)
fmtsmo6640145.joinVoices([smo66401v0]);
const smo66401v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66401v1ar = [];
const smo66377 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo66377.setAttribute('id', 'smo66377');
smo66377.setStyle({ fillStyle: "#115511" });
smo66377.addModifier(new VF.Dot(), 0);
smo66401v1ar.push(smo66377);
const smo66378 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo66378.setAttribute('id', 'smo66378');
smo66378.setStyle({ fillStyle: "#115511" });
smo66401v1ar.push(smo66378);
const smo66379 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo66379.setAttribute('id', 'smo66379');
smo66379.setStyle({ fillStyle: "#115511" });
smo66401v1ar.push(smo66379);
const smo66380 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/2/n"]}'))
smo66380.setAttribute('id', 'smo66380');
smo66380.setStyle({ fillStyle: "#115511" });
smo66401v1ar.push(smo66380);
const smo66381 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo66381.setAttribute('id', 'smo66381');
smo66381.setStyle({ fillStyle: "#115511" });
smo66401v1ar.push(smo66381);
const smo66382 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/2/n"]}'))
smo66382.setAttribute('id', 'smo66382');
smo66382.setStyle({ fillStyle: "#115511" });
smo66401v1ar.push(smo66382);
const smo66383 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo66383.setAttribute('id', 'smo66383');
smo66383.setStyle({ fillStyle: "#115511" });
smo66401v1ar.push(smo66383);
const smo66384 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo66384.setAttribute('id', 'smo66384');
smo66384.setStyle({ fillStyle: "#115511" });
smo66401v1ar.push(smo66384);
const smo66385 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo66385.setAttribute('id', 'smo66385');
smo66385.setStyle({ fillStyle: "#115511" });
smo66401v1ar.push(smo66385);
const smo66386 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo66386.setAttribute('id', 'smo66386');
smo66386.setStyle({ fillStyle: "#115511" });
smo66401v1ar.push(smo66386);
const smo66387 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo66387.setAttribute('id', 'smo66387');
smo66387.setStyle({ fillStyle: "#115511" });
smo66401v1ar.push(smo66387);
smo66401v1.addTickables(smo66401v1ar)
fmtsmo6640145.joinVoices([smo66401v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69771 = smo61304.getStemDirection();
smo61304.setStemDirection(dirsmo69771);
smo61305.setStemDirection(dirsmo69771);
smo61306.setStemDirection(dirsmo69771);
smo61307.setStemDirection(dirsmo69771);
const smo69771 = new VF.Beam([smo61304,smo61305,smo61306,smo61307]);
const dirsmo69772 = smo61310.getStemDirection();
smo61310.setStemDirection(dirsmo69772);
smo61311.setStemDirection(dirsmo69772);
smo61312.setStemDirection(dirsmo69772);
const smo69772 = new VF.Beam([smo61310,smo61311,smo61312]);
const dirsmo69773 = smo61313.getStemDirection();
smo61313.setStemDirection(dirsmo69773);
smo61314.setStemDirection(dirsmo69773);
const smo69773 = new VF.Beam([smo61313,smo61314]);
const dirsmo69774 = smo61315.getStemDirection();
smo61315.setStemDirection(dirsmo69774);
smo61316.setStemDirection(dirsmo69774);
const smo69774 = new VF.Beam([smo61315,smo61316]);
const dirsmo69775 = smo61317.getStemDirection();
smo61317.setStemDirection(dirsmo69775);
smo61318.setStemDirection(dirsmo69775);
smo61319.setStemDirection(dirsmo69775);
const smo69775 = new VF.Beam([smo61317,smo61318,smo61319]);
const dirsmo69776 = smo61320.getStemDirection();
smo61320.setStemDirection(dirsmo69776);
smo61321.setStemDirection(dirsmo69776);
smo61322.setStemDirection(dirsmo69776);
smo61323.setStemDirection(dirsmo69776);
const smo69776 = new VF.Beam([smo61320,smo61321,smo61322,smo61323]);
const dirsmo69778 = smo66377.getStemDirection();
smo66377.setStemDirection(dirsmo69778);
smo66378.setStemDirection(dirsmo69778);
smo66379.setStemDirection(dirsmo69778);
const smo69778 = new VF.Beam([smo66377,smo66378,smo66379]);
const dirsmo69779 = smo66380.getStemDirection();
smo66380.setStemDirection(dirsmo69779);
smo66381.setStemDirection(dirsmo69779);
const smo69779 = new VF.Beam([smo66380,smo66381]);
const dirsmo69780 = smo66382.getStemDirection();
smo66382.setStemDirection(dirsmo69780);
smo66383.setStemDirection(dirsmo69780);
const smo69780 = new VF.Beam([smo66382,smo66383]);
const dirsmo69781 = smo66384.getStemDirection();
smo66384.setStemDirection(dirsmo69781);
smo66385.setStemDirection(dirsmo69781);
smo66386.setStemDirection(dirsmo69781);
smo66387.setStemDirection(dirsmo69781);
const smo69781 = new VF.Beam([smo66384,smo66385,smo66386,smo66387]);
 
// formatting measures in staff group smo58712
fmtsmo6133745.format([smo61337v0,smo61337v1,smo66401v0,smo66401v1], 453);
const stavesmo61337 = new VF.Stave(877, 1506, 467);
stavesmo61337.setAttribute('id', 'stavesmo61337');
stavesmo61337.setBegBarType(VF.Barline.type.NONE);
stavesmo61337.setContext(context);
stavesmo61337.draw();
smo61337v0.draw(context, stavesmo61337);
smo61337v1.draw(context, stavesmo61337);
smo69771.setContext(context);
smo69771.draw();
smo69772.setContext(context);
smo69772.draw();
smo69773.setContext(context);
smo69773.draw();
smo69774.setContext(context);
smo69774.draw();
smo69775.setContext(context);
smo69775.draw();
smo69776.setContext(context);
smo69776.draw();
const stavesmo66401 = new VF.Stave(877, 1670, 467);
stavesmo66401.setAttribute('id', 'stavesmo66401');
stavesmo66401.setBegBarType(VF.Barline.type.NONE);
stavesmo66401.setContext(context);
stavesmo66401.draw();
smo66401v0.draw(context, stavesmo66401);
smo66401v1.draw(context, stavesmo66401);
smo69778.setContext(context);
smo69778.draw();
smo69779.setContext(context);
smo69779.draw();
smo69780.setContext(context);
smo69780.draw();
smo69781.setContext(context);
smo69781.draw();
const fmtsmo6137746 = new VF.Formatter();
//
// voices and notes for stave 0 46
const smo61377v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61377v0ar = [];
const smo61338 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61338.setAttribute('id', 'smo61338');
smo61377v0ar.push(smo61338);
const smo61339 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61339.setAttribute('id', 'smo61339');
smo61377v0ar.push(smo61339);
const smo61340 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61340.setAttribute('id', 'smo61340');
smo61377v0ar.push(smo61340);
const smo61341 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo61341.setAttribute('id', 'smo61341');
smo61377v0ar.push(smo61341);
const smo61342 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["g#/4/n"]}'))
smo61342.setAttribute('id', 'smo61342');
smo61377v0ar.push(smo61342);
const smo61343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo61343.setAttribute('id', 'smo61343');
smo61377v0ar.push(smo61343);
const smo61344 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61344.setAttribute('id', 'smo61344');
smo61377v0ar.push(smo61344);
const smo61345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61345.setAttribute('id', 'smo61345');
smo61377v0ar.push(smo61345);
const smo61346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo61346.setAttribute('id', 'smo61346');
const smo613460acc = new VF.Accidental('#');
smo61346.addModifier(smo613460acc, 0);
smo61377v0ar.push(smo61346);
const smo61347 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["g#/4/n"]}'))
smo61347.setAttribute('id', 'smo61347');
smo61377v0ar.push(smo61347);
const smo61348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo61348.setAttribute('id', 'smo61348');
smo61377v0ar.push(smo61348);
const smo61349 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61349.setAttribute('id', 'smo61349');
smo61377v0ar.push(smo61349);
const smo61350 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo61350.setAttribute('id', 'smo61350');
smo61377v0ar.push(smo61350);
const smo61351 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61351.setAttribute('id', 'smo61351');
smo61377v0ar.push(smo61351);
smo61377v0.addTickables(smo61377v0ar)
fmtsmo6137746.joinVoices([smo61377v0]);
const smo61377v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61377v1ar = [];
const smo61352 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo61352.setAttribute('id', 'smo61352');
smo61352.setStyle({ fillStyle: "#115511" });
smo61377v1ar.push(smo61352);
const smo61353 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61353.setAttribute('id', 'smo61353');
smo61353.setStyle({ fillStyle: "#115511" });
smo61377v1ar.push(smo61353);
const smo61354 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo61354.setAttribute('id', 'smo61354');
smo61354.setStyle({ fillStyle: "#115511" });
smo61377v1ar.push(smo61354);
const smo61355 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["g#/4/n"]}'))
smo61355.setAttribute('id', 'smo61355');
smo61355.setStyle({ fillStyle: "#115511" });
const smo613550acc = new VF.Accidental('#');
smo61355.addModifier(smo613550acc, 0);
smo61377v1ar.push(smo61355);
const smo61356 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/4/n"]}'))
smo61356.setAttribute('id', 'smo61356');
smo61356.setStyle({ fillStyle: "#115511" });
const smo613560acc = new VF.Accidental('#');
smo61356.addModifier(smo613560acc, 0);
smo61377v1ar.push(smo61356);
const smo61357 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61357.setAttribute('id', 'smo61357');
smo61357.setStyle({ fillStyle: "#115511" });
const smo613570acc = new VF.Accidental('n');
smo61357.addModifier(smo613570acc, 0);
smo61377v1ar.push(smo61357);
const smo61358 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo61358.setAttribute('id', 'smo61358');
smo61358.setStyle({ fillStyle: "#115511" });
smo61377v1ar.push(smo61358);
const smo61359 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo61359.setAttribute('id', 'smo61359');
smo61359.setStyle({ fillStyle: "#115511" });
smo61377v1ar.push(smo61359);
const smo61360 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo61360.setAttribute('id', 'smo61360');
smo61360.setStyle({ fillStyle: "#115511" });
smo61377v1ar.push(smo61360);
const smo61361 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo61361.setAttribute('id', 'smo61361');
smo61361.setStyle({ fillStyle: "#115511" });
smo61377v1ar.push(smo61361);
const smo61362 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/4/n"]}'))
smo61362.setAttribute('id', 'smo61362');
smo61362.setStyle({ fillStyle: "#115511" });
smo61377v1ar.push(smo61362);
const smo61363 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["g#/4/n"]}'))
smo61363.setAttribute('id', 'smo61363');
smo61363.setStyle({ fillStyle: "#115511" });
smo61377v1ar.push(smo61363);
smo61377v1.addTickables(smo61377v1ar)
fmtsmo6137746.joinVoices([smo61377v1]);
const fmtsmo6643046 = new VF.Formatter();
//
// voices and notes for stave 1 46
const smo66430v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66430v0ar = [];
const smo66402 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo66402.setAttribute('id', 'smo66402');
smo66430v0ar.push(smo66402);
const smo66403 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo66403.setAttribute('id', 'smo66403');
smo66430v0ar.push(smo66403);
const smo66404 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/3/n"]}'))
smo66404.setAttribute('id', 'smo66404');
const smo664040acc = new VF.Accidental('#');
smo66404.addModifier(smo664040acc, 0);
smo66430v0ar.push(smo66404);
const smo66405 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["g#/3/n"]}'))
smo66405.setAttribute('id', 'smo66405');
const smo664050acc = new VF.Accidental('#');
smo66405.addModifier(smo664050acc, 0);
smo66430v0ar.push(smo66405);
const smo66406 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo66406.setAttribute('id', 'smo66406');
smo66406.addModifier(new VF.Dot(), 0);
smo66430v0ar.push(smo66406);
const smo66407 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo66407.setAttribute('id', 'smo66407');
smo66430v0ar.push(smo66407);
const smo66408 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo66408.setAttribute('id', 'smo66408');
smo66430v0ar.push(smo66408);
const smo66409 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["g#/3/n"]}'))
smo66409.setAttribute('id', 'smo66409');
smo66430v0ar.push(smo66409);
const smo66410 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo66410.setAttribute('id', 'smo66410');
smo66430v0ar.push(smo66410);
smo66430v0.addTickables(smo66430v0ar)
fmtsmo6643046.joinVoices([smo66430v0]);
const smo66430v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66430v1ar = [];
const smo66411 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/2/n"]}'))
smo66411.setAttribute('id', 'smo66411');
smo66411.setStyle({ fillStyle: "#115511" });
smo66430v1ar.push(smo66411);
const smo66412 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo66412.setAttribute('id', 'smo66412');
smo66412.setStyle({ fillStyle: "#115511" });
smo66430v1ar.push(smo66412);
const smo66413 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo66413.setAttribute('id', 'smo66413');
smo66413.setStyle({ fillStyle: "#115511" });
smo66430v1ar.push(smo66413);
const smo66414 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo66414.setAttribute('id', 'smo66414');
smo66414.setStyle({ fillStyle: "#115511" });
smo66430v1ar.push(smo66414);
const smo66415 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo66415.setAttribute('id', 'smo66415');
smo66415.setStyle({ fillStyle: "#115511" });
const smo664150acc = new VF.Accidental('n');
smo66415.addModifier(smo664150acc, 0);
smo66430v1ar.push(smo66415);
const smo66416 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo66416.setAttribute('id', 'smo66416');
smo66416.setStyle({ fillStyle: "#115511" });
smo66430v1ar.push(smo66416);
smo66430v1.addTickables(smo66430v1ar)
fmtsmo6643046.joinVoices([smo66430v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69785 = smo61338.getStemDirection();
smo61338.setStemDirection(dirsmo69785);
smo61339.setStemDirection(dirsmo69785);
smo61340.setStemDirection(dirsmo69785);
const smo69785 = new VF.Beam([smo61338,smo61339,smo61340]);
const dirsmo69786 = smo61341.getStemDirection();
smo61341.setStemDirection(dirsmo69786);
smo61342.setStemDirection(dirsmo69786);
smo61343.setStemDirection(dirsmo69786);
smo61344.setStemDirection(dirsmo69786);
const smo69786 = new VF.Beam([smo61341,smo61342,smo61343,smo61344]);
const dirsmo69787 = smo61345.getStemDirection();
smo61345.setStemDirection(dirsmo69787);
smo61346.setStemDirection(dirsmo69787);
smo61347.setStemDirection(dirsmo69787);
smo61348.setStemDirection(dirsmo69787);
const smo69787 = new VF.Beam([smo61345,smo61346,smo61347,smo61348]);
const dirsmo69788 = smo61349.getStemDirection();
smo61349.setStemDirection(dirsmo69788);
smo61350.setStemDirection(dirsmo69788);
smo61351.setStemDirection(dirsmo69788);
const smo69788 = new VF.Beam([smo61349,smo61350,smo61351]);
const dirsmo69789 = smo61352.getStemDirection();
smo61352.setStemDirection(dirsmo69789);
smo61353.setStemDirection(dirsmo69789);
smo61354.setStemDirection(dirsmo69789);
smo61355.setStemDirection(dirsmo69789);
const smo69789 = new VF.Beam([smo61352,smo61353,smo61354,smo61355]);
const dirsmo69790 = smo61356.getStemDirection();
smo61356.setStemDirection(dirsmo69790);
smo61357.setStemDirection(dirsmo69790);
const smo69790 = new VF.Beam([smo61356,smo61357]);
const dirsmo69791 = smo61358.getStemDirection();
smo61358.setStemDirection(dirsmo69791);
smo61359.setStemDirection(dirsmo69791);
const smo69791 = new VF.Beam([smo61358,smo61359]);
const dirsmo69792 = smo61360.getStemDirection();
smo61360.setStemDirection(dirsmo69792);
smo61361.setStemDirection(dirsmo69792);
smo61362.setStemDirection(dirsmo69792);
smo61363.setStemDirection(dirsmo69792);
const smo69792 = new VF.Beam([smo61360,smo61361,smo61362,smo61363]);
const dirsmo69794 = smo66403.getStemDirection();
smo66403.setStemDirection(dirsmo69794);
smo66404.setStemDirection(dirsmo69794);
smo66405.setStemDirection(dirsmo69794);
const smo69794 = new VF.Beam([smo66403,smo66404,smo66405]);
const dirsmo69795 = smo66406.getStemDirection();
smo66406.setStemDirection(dirsmo69795);
smo66407.setStemDirection(dirsmo69795);
smo66408.setStemDirection(dirsmo69795);
const smo69795 = new VF.Beam([smo66406,smo66407,smo66408]);
const dirsmo69796 = smo66409.getStemDirection();
smo66409.setStemDirection(dirsmo69796);
smo66410.setStemDirection(dirsmo69796);
const smo69796 = new VF.Beam([smo66409,smo66410]);
const dirsmo69797 = smo66413.getStemDirection();
smo66413.setStemDirection(dirsmo69797);
smo66414.setStemDirection(dirsmo69797);
const smo69797 = new VF.Beam([smo66413,smo66414]);
 
// formatting measures in staff group smo58712
fmtsmo6137746.format([smo61377v0,smo61377v1,smo66430v0,smo66430v1], 448);
const stavesmo61377 = new VF.Stave(1344, 1506, 462);
stavesmo61377.setAttribute('id', 'stavesmo61377');
stavesmo61377.setBegBarType(VF.Barline.type.NONE);
stavesmo61377.setContext(context);
stavesmo61377.draw();
smo61377v0.draw(context, stavesmo61377);
smo61377v1.draw(context, stavesmo61377);
smo69785.setContext(context);
smo69785.draw();
smo69786.setContext(context);
smo69786.draw();
smo69787.setContext(context);
smo69787.draw();
smo69788.setContext(context);
smo69788.draw();
smo69789.setContext(context);
smo69789.draw();
smo69790.setContext(context);
smo69790.draw();
smo69791.setContext(context);
smo69791.draw();
smo69792.setContext(context);
smo69792.draw();
const stavesmo66430 = new VF.Stave(1344, 1670, 462);
stavesmo66430.setAttribute('id', 'stavesmo66430');
stavesmo66430.setBegBarType(VF.Barline.type.NONE);
stavesmo66430.setContext(context);
stavesmo66430.draw();
smo66430v0.draw(context, stavesmo66430);
smo66430v1.draw(context, stavesmo66430);
smo69794.setContext(context);
smo69794.draw();
smo69795.setContext(context);
smo69795.draw();
smo69796.setContext(context);
smo69796.draw();
smo69797.setContext(context);
smo69797.draw();
const rightsmo58712stavesmo613771 = new VF.StaveConnector(stavesmo61377, stavesmo66430).setType(0);
rightsmo58712stavesmo613771.setContext(context).draw();
const fmtsmo6141247 = new VF.Formatter();
//
// voices and notes for stave 0 47
const smo61412v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61412v0ar = [];
const smo61378 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61378.setAttribute('id', 'smo61378');
smo61412v0ar.push(smo61378);
const smo61379 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo61379.setAttribute('id', 'smo61379');
smo61412v0ar.push(smo61379);
const smo61380 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo61380.setAttribute('id', 'smo61380');
smo61412v0ar.push(smo61380);
const smo61381 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61381.setAttribute('id', 'smo61381');
smo61412v0ar.push(smo61381);
const smo61382 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61382.setAttribute('id', 'smo61382');
smo61412v0ar.push(smo61382);
const smo61383 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61383.setAttribute('id', 'smo61383');
smo61412v0ar.push(smo61383);
const smo61384 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61384.setAttribute('id', 'smo61384');
smo61412v0ar.push(smo61384);
const smo61385 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61385.setAttribute('id', 'smo61385');
smo61385.addModifier(new VF.Dot(), 0);
const smo61386 = new VF.Ornament('');
smo61385.addModifier(smo61386, 0);
smo61412v0ar.push(smo61385);
const smo61387 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo61387.setAttribute('id', 'smo61387');
smo61412v0ar.push(smo61387);
smo61412v0.addTickables(smo61412v0ar)
fmtsmo6141247.joinVoices([smo61412v0]);
const smo61412v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61412v1ar = [];
const smo61388 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo61388.setAttribute('id', 'smo61388');
smo61388.setStyle({ fillStyle: "#115511" });
smo61412v1ar.push(smo61388);
const smo61389 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["g#/4/n"]}'))
smo61389.setAttribute('id', 'smo61389');
smo61389.setStyle({ fillStyle: "#115511" });
const smo613890acc = new VF.Accidental('#');
smo61389.addModifier(smo613890acc, 0);
smo61412v1ar.push(smo61389);
const smo61390 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo61390.setAttribute('id', 'smo61390');
smo61390.setStyle({ fillStyle: "#115511" });
smo61412v1ar.push(smo61390);
const smo61391 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61391.setAttribute('id', 'smo61391');
smo61391.setStyle({ fillStyle: "#115511" });
smo61412v1ar.push(smo61391);
const smo61392 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["g#/4/n"]}'))
smo61392.setAttribute('id', 'smo61392');
smo61392.setStyle({ fillStyle: "#115511" });
smo61412v1ar.push(smo61392);
const smo61393 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/4/n"]}'))
smo61393.setAttribute('id', 'smo61393');
smo61393.setStyle({ fillStyle: "#115511" });
const smo613930acc = new VF.Accidental('#');
smo61393.addModifier(smo613930acc, 0);
smo61412v1ar.push(smo61393);
const smo61394 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["g#/4/n"]}'))
smo61394.setAttribute('id', 'smo61394');
smo61394.setStyle({ fillStyle: "#115511" });
smo61412v1ar.push(smo61394);
const smo61395 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo61395.setAttribute('id', 'smo61395');
smo61395.setStyle({ fillStyle: "#115511" });
smo61412v1ar.push(smo61395);
const smo61396 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61396.setAttribute('id', 'smo61396');
smo61396.setStyle({ fillStyle: "#115511" });
smo61412v1ar.push(smo61396);
const smo61397 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["gn/4/r"]}'))
smo61397.setAttribute('id', 'smo61397');
smo61397.setStyle({ fillStyle: "#115511" });
smo61412v1ar.push(smo61397);
const smo61398 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["en/4/r"]}'))
smo61398.setAttribute('id', 'smo61398');
smo61398.setStyle({ fillStyle: "#115511" });
smo61412v1ar.push(smo61398);
smo61412v1.addTickables(smo61412v1ar)
fmtsmo6141247.joinVoices([smo61412v1]);
const fmtsmo6646047 = new VF.Formatter();
//
// voices and notes for stave 1 47
const smo66460v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66460v0ar = [];
const smo66431 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/3/n"]}'))
smo66431.setAttribute('id', 'smo66431');
const smo664310acc = new VF.Accidental('#');
smo66431.addModifier(smo664310acc, 0);
smo66460v0ar.push(smo66431);
const smo66432 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo66432.setAttribute('id', 'smo66432');
smo66460v0ar.push(smo66432);
const smo66433 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo66433.setAttribute('id', 'smo66433');
smo66460v0ar.push(smo66433);
const smo66434 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo66434.setAttribute('id', 'smo66434');
smo66460v0ar.push(smo66434);
const smo66435 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo66435.setAttribute('id', 'smo66435');
smo66460v0ar.push(smo66435);
const smo66436 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo66436.setAttribute('id', 'smo66436');
smo66460v0ar.push(smo66436);
const smo66437 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["g#/3/n"]}'))
smo66437.setAttribute('id', 'smo66437');
const smo664370acc = new VF.Accidental('#');
smo66437.addModifier(smo664370acc, 0);
smo66460v0ar.push(smo66437);
const smo66438 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo66438.setAttribute('id', 'smo66438');
smo66460v0ar.push(smo66438);
const smo66439 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["g#/3/n"]}'))
smo66439.setAttribute('id', 'smo66439');
smo66460v0ar.push(smo66439);
smo66460v0.addTickables(smo66460v0ar)
fmtsmo6646047.joinVoices([smo66460v0]);
const smo66460v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66460v1ar = [];
const smo66440 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo66440.setAttribute('id', 'smo66440');
smo66440.setStyle({ fillStyle: "#115511" });
smo66460v1ar.push(smo66440);
const smo66441 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo66441.setAttribute('id', 'smo66441');
smo66441.setStyle({ fillStyle: "#115511" });
smo66460v1ar.push(smo66441);
const smo66442 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo66442.setAttribute('id', 'smo66442');
smo66442.setStyle({ fillStyle: "#115511" });
smo66460v1ar.push(smo66442);
const smo66443 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo66443.setAttribute('id', 'smo66443');
smo66443.setStyle({ fillStyle: "#115511" });
const smo664430acc = new VF.Accidental('n');
smo66443.addModifier(smo664430acc, 0);
smo66460v1ar.push(smo66443);
const smo66444 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo66444.setAttribute('id', 'smo66444');
smo66444.setStyle({ fillStyle: "#115511" });
smo66460v1ar.push(smo66444);
const smo66445 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo66445.setAttribute('id', 'smo66445');
smo66445.setStyle({ fillStyle: "#115511" });
smo66460v1ar.push(smo66445);
const smo66446 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo66446.setAttribute('id', 'smo66446');
smo66446.setStyle({ fillStyle: "#115511" });
smo66460v1ar.push(smo66446);
smo66460v1.addTickables(smo66460v1ar)
fmtsmo6646047.joinVoices([smo66460v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69814 = smo61378.getStemDirection();
smo61378.setStemDirection(dirsmo69814);
smo61379.setStemDirection(dirsmo69814);
smo61380.setStemDirection(dirsmo69814);
smo61381.setStemDirection(dirsmo69814);
const smo69814 = new VF.Beam([smo61378,smo61379,smo61380,smo61381]);
const dirsmo69815 = smo61382.getStemDirection();
smo61382.setStemDirection(dirsmo69815);
smo61383.setStemDirection(dirsmo69815);
smo61384.setStemDirection(dirsmo69815);
const smo69815 = new VF.Beam([smo61382,smo61383,smo61384]);
const dirsmo69816 = smo61385.getStemDirection();
smo61385.setStemDirection(dirsmo69816);
smo61387.setStemDirection(dirsmo69816);
const smo69816 = new VF.Beam([smo61385,smo61387]);
const dirsmo69817 = smo61388.getStemDirection();
smo61388.setStemDirection(dirsmo69817);
smo61389.setStemDirection(dirsmo69817);
smo61390.setStemDirection(dirsmo69817);
smo61391.setStemDirection(dirsmo69817);
const smo69817 = new VF.Beam([smo61388,smo61389,smo61390,smo61391]);
const dirsmo69818 = smo61392.getStemDirection();
smo61392.setStemDirection(dirsmo69818);
smo61393.setStemDirection(dirsmo69818);
smo61394.setStemDirection(dirsmo69818);
smo61395.setStemDirection(dirsmo69818);
const smo69818 = new VF.Beam([smo61392,smo61393,smo61394,smo61395]);
const dirsmo69820 = smo66431.getStemDirection();
smo66431.setStemDirection(dirsmo69820);
smo66432.setStemDirection(dirsmo69820);
const smo69820 = new VF.Beam([smo66431,smo66432]);
const dirsmo69821 = smo66433.getStemDirection();
smo66433.setStemDirection(dirsmo69821);
smo66434.setStemDirection(dirsmo69821);
smo66435.setStemDirection(dirsmo69821);
smo66436.setStemDirection(dirsmo69821);
const smo69821 = new VF.Beam([smo66433,smo66434,smo66435,smo66436]);
const dirsmo69822 = smo66442.getStemDirection();
smo66442.setStemDirection(dirsmo69822);
smo66443.setStemDirection(dirsmo69822);
const smo69822 = new VF.Beam([smo66442,smo66443]);
const dirsmo69823 = smo66444.getStemDirection();
smo66444.setStemDirection(dirsmo69823);
smo66445.setStemDirection(dirsmo69823);
const smo69823 = new VF.Beam([smo66444,smo66445]);
 
// formatting measures in staff group smo58712
fmtsmo6141247.format([smo61412v0,smo61412v1,smo66460v0,smo66460v1], 348);
const stavesmo61412 = new VF.Stave(90, 1849, 399);
stavesmo61412.setAttribute('id', 'stavesmo61412');
stavesmo61412.setBegBarType(1);
stavesmo61412.addClef('treble');
stavesmo61412.setContext(context);
stavesmo61412.draw();
smo61412v0.draw(context, stavesmo61412);
smo61412v1.draw(context, stavesmo61412);
smo69814.setContext(context);
smo69814.draw();
smo69815.setContext(context);
smo69815.draw();
smo69816.setContext(context);
smo69816.draw();
smo69817.setContext(context);
smo69817.draw();
smo69818.setContext(context);
smo69818.draw();
const stavesmo66460 = new VF.Stave(90, 1988, 399);
stavesmo66460.setAttribute('id', 'stavesmo66460');
stavesmo66460.setBegBarType(1);
stavesmo66460.addClef('bass');
stavesmo66460.setContext(context);
stavesmo66460.draw();
smo66460v0.draw(context, stavesmo66460);
smo66460v1.draw(context, stavesmo66460);
smo69820.setContext(context);
smo69820.draw();
smo69821.setContext(context);
smo69821.draw();
smo69822.setContext(context);
smo69822.draw();
smo69823.setContext(context);
smo69823.draw();
const leftsmo58712stavesmo614121 = new VF.StaveConnector(stavesmo61412, stavesmo66460).setType(3);
leftsmo58712stavesmo614121.setContext(context).draw();
const fmtsmo6144248 = new VF.Formatter();
//
// voices and notes for stave 0 48
const smo61442v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61442v0ar = [];
const smo61413 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo61413.setAttribute('id', 'smo61413');
smo61442v0ar.push(smo61413);
const smo61414 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo61414.setAttribute('id', 'smo61414');
smo61442v0ar.push(smo61414);
const smo61415 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo61415.setAttribute('id', 'smo61415');
smo61442v0ar.push(smo61415);
smo61442v0.addTickables(smo61442v0ar)
fmtsmo6144248.joinVoices([smo61442v0]);
const smo61442v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61442v1ar = [];
const smo61416 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/3/r"]}'))
smo61416.setAttribute('id', 'smo61416');
smo61416.setStyle({ fillStyle: "#115511" });
smo61442v1ar.push(smo61416);
const smo61417 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo61417.setAttribute('id', 'smo61417');
smo61417.setStyle({ fillStyle: "#115511" });
smo61442v1ar.push(smo61417);
const smo61418 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo61418.setAttribute('id', 'smo61418');
smo61418.setStyle({ fillStyle: "#115511" });
smo61442v1ar.push(smo61418);
const smo61419 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo61419.setAttribute('id', 'smo61419');
smo61419.setStyle({ fillStyle: "#115511" });
smo61442v1ar.push(smo61419);
const smo61420 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61420.setAttribute('id', 'smo61420');
smo61420.setStyle({ fillStyle: "#115511" });
smo61420.addModifier(new VF.Dot(), 0);
smo61442v1ar.push(smo61420);
const smo61421 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61421.setAttribute('id', 'smo61421');
smo61421.setStyle({ fillStyle: "#115511" });
smo61442v1ar.push(smo61421);
const smo61422 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61422.setAttribute('id', 'smo61422');
smo61422.setStyle({ fillStyle: "#115511" });
smo61442v1ar.push(smo61422);
const smo61423 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo61423.setAttribute('id', 'smo61423');
smo61423.setStyle({ fillStyle: "#115511" });
smo61442v1ar.push(smo61423);
const smo61424 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo61424.setAttribute('id', 'smo61424');
smo61424.setStyle({ fillStyle: "#115511" });
smo61442v1ar.push(smo61424);
smo61442v1.addTickables(smo61442v1ar)
fmtsmo6144248.joinVoices([smo61442v1]);
const smo61442v2 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61442v2ar = [];
const smo61425 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo61425.setAttribute('id', 'smo61425');
smo61425.setStyle({ fillStyle: '#aaaaaa7f' });
smo61425.addModifier(new VF.Dot(), 0);
smo61442v2ar.push(smo61425);
const smo61426 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo61426.setAttribute('id', 'smo61426');
smo61426.setStyle({ fillStyle: "#115511" });
smo61426.addModifier(new VF.Dot(), 0);
smo61442v2ar.push(smo61426);
const smo61427 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo61427.setAttribute('id', 'smo61427');
smo61427.setStyle({ fillStyle: "#115511" });
smo61442v2ar.push(smo61427);
const smo61428 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo61428.setAttribute('id', 'smo61428');
smo61428.setStyle({ fillStyle: "#115511" });
smo61442v2ar.push(smo61428);
smo61442v2.addTickables(smo61442v2ar)
fmtsmo6144248.joinVoices([smo61442v2]);
const fmtsmo6648348 = new VF.Formatter();
//
// voices and notes for stave 1 48
const smo66483v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66483v0ar = [];
const smo66461 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo66461.setAttribute('id', 'smo66461');
smo66483v0ar.push(smo66461);
const smo66462 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo66462.setAttribute('id', 'smo66462');
smo66483v0ar.push(smo66462);
const smo66463 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66463.setAttribute('id', 'smo66463');
smo66483v0ar.push(smo66463);
const smo66464 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo66464.setAttribute('id', 'smo66464');
smo66483v0ar.push(smo66464);
const smo66465 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo66465.setAttribute('id', 'smo66465');
smo66483v0ar.push(smo66465);
const smo66466 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo66466.setAttribute('id', 'smo66466');
smo66466.setStyle({ fillStyle: '#aaaaaa7f' });
smo66483v0ar.push(smo66466);
smo66483v0.addTickables(smo66483v0ar)
fmtsmo6648348.joinVoices([smo66483v0]);
const smo66483v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66483v1ar = [];
const smo66467 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/2/n"]}'))
smo66467.setAttribute('id', 'smo66467');
smo66467.setStyle({ fillStyle: "#115511" });
smo66483v1ar.push(smo66467);
const smo66468 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo66468.setAttribute('id', 'smo66468');
smo66468.setStyle({ fillStyle: "#115511" });
smo66483v1ar.push(smo66468);
const smo66469 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo66469.setAttribute('id', 'smo66469');
smo66469.setStyle({ fillStyle: "#115511" });
smo66483v1ar.push(smo66469);
smo66483v1.addTickables(smo66483v1ar)
fmtsmo6648348.joinVoices([smo66483v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69827 = smo61417.getStemDirection();
smo61417.setStemDirection(dirsmo69827);
smo61418.setStemDirection(dirsmo69827);
smo61419.setStemDirection(dirsmo69827);
const smo69827 = new VF.Beam([smo61417,smo61418,smo61419]);
const dirsmo69828 = smo61420.getStemDirection();
smo61420.setStemDirection(dirsmo69828);
smo61421.setStemDirection(dirsmo69828);
smo61422.setStemDirection(dirsmo69828);
const smo69828 = new VF.Beam([smo61420,smo61421,smo61422]);
const dirsmo69829 = smo61423.getStemDirection();
smo61423.setStemDirection(dirsmo69829);
smo61424.setStemDirection(dirsmo69829);
const smo69829 = new VF.Beam([smo61423,smo61424]);
const dirsmo69830 = smo61426.getStemDirection();
smo61426.setStemDirection(dirsmo69830);
smo61427.setStemDirection(dirsmo69830);
smo61428.setStemDirection(dirsmo69830);
const smo69830 = new VF.Beam([smo61426,smo61427,smo61428]);
const dirsmo69832 = smo66463.getStemDirection();
smo66463.setStemDirection(dirsmo69832);
smo66464.setStemDirection(dirsmo69832);
const smo69832 = new VF.Beam([smo66463,smo66464]);
 
// formatting measures in staff group smo58712
fmtsmo6144248.format([smo61442v0,smo61442v1,smo61442v2,smo66483v0,smo66483v1], 283);
const stavesmo61442 = new VF.Stave(489, 1849, 297);
stavesmo61442.setAttribute('id', 'stavesmo61442');
stavesmo61442.setBegBarType(VF.Barline.type.NONE);
stavesmo61442.setContext(context);
stavesmo61442.draw();
smo61442v0.draw(context, stavesmo61442);
smo61442v1.draw(context, stavesmo61442);
smo61442v2.draw(context, stavesmo61442);
smo69827.setContext(context);
smo69827.draw();
smo69828.setContext(context);
smo69828.draw();
smo69829.setContext(context);
smo69829.draw();
smo69830.setContext(context);
smo69830.draw();
const stavesmo66483 = new VF.Stave(489, 1988, 297);
stavesmo66483.setAttribute('id', 'stavesmo66483');
stavesmo66483.setBegBarType(VF.Barline.type.NONE);
stavesmo66483.setContext(context);
stavesmo66483.draw();
smo66483v0.draw(context, stavesmo66483);
smo66483v1.draw(context, stavesmo66483);
smo69832.setContext(context);
smo69832.draw();
const fmtsmo6147149 = new VF.Formatter();
//
// voices and notes for stave 0 49
const smo61471v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61471v0ar = [];
const smo61443 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo61443.setAttribute('id', 'smo61443');
smo61471v0ar.push(smo61443);
const smo61444 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo61444.setAttribute('id', 'smo61444');
smo61471v0ar.push(smo61444);
const smo61445 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61445.setAttribute('id', 'smo61445');
smo61471v0ar.push(smo61445);
const smo61446 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo61446.setAttribute('id', 'smo61446');
smo61471v0ar.push(smo61446);
const smo61447 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61447.setAttribute('id', 'smo61447');
smo61471v0ar.push(smo61447);
smo61471v0.addTickables(smo61471v0ar)
fmtsmo6147149.joinVoices([smo61471v0]);
const smo61471v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61471v1ar = [];
const smo61448 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo61448.setAttribute('id', 'smo61448');
smo61448.setStyle({ fillStyle: "#115511" });
smo61471v1ar.push(smo61448);
const smo61449 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61449.setAttribute('id', 'smo61449');
smo61449.setStyle({ fillStyle: "#115511" });
smo61471v1ar.push(smo61449);
const smo61450 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61450.setAttribute('id', 'smo61450');
smo61450.setStyle({ fillStyle: "#115511" });
smo61471v1ar.push(smo61450);
const smo61451 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo61451.setAttribute('id', 'smo61451');
smo61451.setStyle({ fillStyle: "#115511" });
smo61471v1ar.push(smo61451);
const smo61452 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61452.setAttribute('id', 'smo61452');
smo61452.setStyle({ fillStyle: "#115511" });
smo61471v1ar.push(smo61452);
const smo61453 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo61453.setAttribute('id', 'smo61453');
smo61453.setStyle({ fillStyle: "#115511" });
smo61471v1ar.push(smo61453);
const smo61454 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo61454.setAttribute('id', 'smo61454');
smo61454.setStyle({ fillStyle: "#115511" });
smo61471v1ar.push(smo61454);
const smo61455 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo61455.setAttribute('id', 'smo61455');
smo61455.setStyle({ fillStyle: "#115511" });
smo61471v1ar.push(smo61455);
const smo61456 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/4/n"]}'))
smo61456.setAttribute('id', 'smo61456');
smo61456.setStyle({ fillStyle: "#115511" });
const smo614560acc = new VF.Accidental('#');
smo61456.addModifier(smo614560acc, 0);
smo61471v1ar.push(smo61456);
const smo61457 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61457.setAttribute('id', 'smo61457');
smo61457.setStyle({ fillStyle: "#115511" });
smo61471v1ar.push(smo61457);
smo61471v1.addTickables(smo61471v1ar)
fmtsmo6147149.joinVoices([smo61471v1]);
const fmtsmo6651349 = new VF.Formatter();
//
// voices and notes for stave 1 49
const smo66513v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66513v0ar = [];
const smo66484 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo66484.setAttribute('id', 'smo66484');
smo66513v0ar.push(smo66484);
const smo66485 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo66485.setAttribute('id', 'smo66485');
smo66513v0ar.push(smo66485);
const smo66486 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo66486.setAttribute('id', 'smo66486');
smo66513v0ar.push(smo66486);
const smo66487 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo66487.setAttribute('id', 'smo66487');
smo66513v0ar.push(smo66487);
const smo66488 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo66488.setAttribute('id', 'smo66488');
smo66513v0ar.push(smo66488);
const smo66489 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66489.setAttribute('id', 'smo66489');
smo66513v0ar.push(smo66489);
const smo66490 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo66490.setAttribute('id', 'smo66490');
smo66513v0ar.push(smo66490);
smo66513v0.addTickables(smo66513v0ar)
fmtsmo6651349.joinVoices([smo66513v0]);
const smo66513v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66513v1ar = [];
const smo66491 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo66491.setAttribute('id', 'smo66491');
smo66491.setStyle({ fillStyle: "#115511" });
smo66513v1ar.push(smo66491);
const smo66492 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo66492.setAttribute('id', 'smo66492');
smo66492.setStyle({ fillStyle: "#115511" });
smo66513v1ar.push(smo66492);
const smo66493 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/2/n"]}'))
smo66493.setAttribute('id', 'smo66493');
smo66493.setStyle({ fillStyle: "#115511" });
smo66513v1ar.push(smo66493);
const smo66494 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/2/n"]}'))
smo66494.setAttribute('id', 'smo66494');
smo66494.setStyle({ fillStyle: "#115511" });
smo66513v1ar.push(smo66494);
const smo66495 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo66495.setAttribute('id', 'smo66495');
smo66495.setStyle({ fillStyle: "#115511" });
smo66495.addModifier(new VF.Dot(), 0);
smo66513v1ar.push(smo66495);
const smo66496 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo66496.setAttribute('id', 'smo66496');
smo66496.setStyle({ fillStyle: "#115511" });
smo66513v1ar.push(smo66496);
const smo66497 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo66497.setAttribute('id', 'smo66497');
smo66497.setStyle({ fillStyle: "#115511" });
smo66513v1ar.push(smo66497);
const smo66498 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/2/n"]}'))
smo66498.setAttribute('id', 'smo66498');
smo66498.setStyle({ fillStyle: "#115511" });
smo66513v1ar.push(smo66498);
const smo66499 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo66499.setAttribute('id', 'smo66499');
smo66499.setStyle({ fillStyle: "#115511" });
smo66513v1ar.push(smo66499);
smo66513v1.addTickables(smo66513v1ar)
fmtsmo6651349.joinVoices([smo66513v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69836 = smo61445.getStemDirection();
smo61445.setStemDirection(dirsmo69836);
smo61446.setStemDirection(dirsmo69836);
smo61447.setStemDirection(dirsmo69836);
const smo69836 = new VF.Beam([smo61445,smo61446,smo61447]);
const dirsmo69837 = smo61448.getStemDirection();
smo61448.setStemDirection(dirsmo69837);
smo61449.setStemDirection(dirsmo69837);
const smo69837 = new VF.Beam([smo61448,smo61449]);
const dirsmo69838 = smo61450.getStemDirection();
smo61450.setStemDirection(dirsmo69838);
smo61451.setStemDirection(dirsmo69838);
smo61452.setStemDirection(dirsmo69838);
smo61453.setStemDirection(dirsmo69838);
const smo69838 = new VF.Beam([smo61450,smo61451,smo61452,smo61453]);
const dirsmo69839 = smo61454.getStemDirection();
smo61454.setStemDirection(dirsmo69839);
smo61455.setStemDirection(dirsmo69839);
smo61456.setStemDirection(dirsmo69839);
smo61457.setStemDirection(dirsmo69839);
const smo69839 = new VF.Beam([smo61454,smo61455,smo61456,smo61457]);
const dirsmo69841 = smo66484.getStemDirection();
smo66484.setStemDirection(dirsmo69841);
smo66485.setStemDirection(dirsmo69841);
const smo69841 = new VF.Beam([smo66484,smo66485]);
const dirsmo69842 = smo66486.getStemDirection();
smo66486.setStemDirection(dirsmo69842);
smo66487.setStemDirection(dirsmo69842);
const smo69842 = new VF.Beam([smo66486,smo66487]);
const dirsmo69843 = smo66488.getStemDirection();
smo66488.setStemDirection(dirsmo69843);
smo66489.setStemDirection(dirsmo69843);
const smo69843 = new VF.Beam([smo66488,smo66489]);
const dirsmo69844 = smo66492.getStemDirection();
smo66492.setStemDirection(dirsmo69844);
smo66493.setStemDirection(dirsmo69844);
smo66494.setStemDirection(dirsmo69844);
const smo69844 = new VF.Beam([smo66492,smo66493,smo66494]);
const dirsmo69845 = smo66495.getStemDirection();
smo66495.setStemDirection(dirsmo69845);
smo66496.setStemDirection(dirsmo69845);
smo66497.setStemDirection(dirsmo69845);
const smo69845 = new VF.Beam([smo66495,smo66496,smo66497]);
const dirsmo69846 = smo66498.getStemDirection();
smo66498.setStemDirection(dirsmo69846);
smo66499.setStemDirection(dirsmo69846);
const smo69846 = new VF.Beam([smo66498,smo66499]);
 
// formatting measures in staff group smo58712
fmtsmo6147149.format([smo61471v0,smo61471v1,smo66513v0,smo66513v1], 292);
const stavesmo61471 = new VF.Stave(786, 1849, 306);
stavesmo61471.setAttribute('id', 'stavesmo61471');
stavesmo61471.setBegBarType(VF.Barline.type.NONE);
stavesmo61471.setContext(context);
stavesmo61471.draw();
smo61471v0.draw(context, stavesmo61471);
smo61471v1.draw(context, stavesmo61471);
smo69836.setContext(context);
smo69836.draw();
smo69837.setContext(context);
smo69837.draw();
smo69838.setContext(context);
smo69838.draw();
smo69839.setContext(context);
smo69839.draw();
const stavesmo66513 = new VF.Stave(786, 1988, 306);
stavesmo66513.setAttribute('id', 'stavesmo66513');
stavesmo66513.setBegBarType(VF.Barline.type.NONE);
stavesmo66513.addClef('treble');
stavesmo66513.setContext(context);
stavesmo66513.draw();
smo66513v0.draw(context, stavesmo66513);
smo66513v1.draw(context, stavesmo66513);
smo69841.setContext(context);
smo69841.draw();
smo69842.setContext(context);
smo69842.draw();
smo69843.setContext(context);
smo69843.draw();
smo69844.setContext(context);
smo69844.draw();
smo69845.setContext(context);
smo69845.draw();
smo69846.setContext(context);
smo69846.draw();
const fmtsmo6150350 = new VF.Formatter();
//
// voices and notes for stave 0 50
const smo61503v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61503v0ar = [];
const smo61472 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61472.setAttribute('id', 'smo61472');
smo61472.addModifier(new VF.Dot(), 0);
smo61503v0ar.push(smo61472);
const smo61473 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61473.setAttribute('id', 'smo61473');
smo61503v0ar.push(smo61473);
const smo61474 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61474.setAttribute('id', 'smo61474');
smo61503v0ar.push(smo61474);
const smo61475 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61475.setAttribute('id', 'smo61475');
smo61503v0ar.push(smo61475);
const smo61476 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61476.setAttribute('id', 'smo61476');
smo61503v0ar.push(smo61476);
const smo61477 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61477.setAttribute('id', 'smo61477');
smo61503v0ar.push(smo61477);
const smo61478 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo61478.setAttribute('id', 'smo61478');
smo61503v0ar.push(smo61478);
const smo61479 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo61479.setAttribute('id', 'smo61479');
smo61479.addModifier(new VF.Dot(), 0);
smo61503v0ar.push(smo61479);
const smo61480 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo61480.setAttribute('id', 'smo61480');
smo61503v0ar.push(smo61480);
const smo61481 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo61481.setAttribute('id', 'smo61481');
smo61503v0ar.push(smo61481);
smo61503v0.addTickables(smo61503v0ar)
fmtsmo6150350.joinVoices([smo61503v0]);
const smo61503v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61503v1ar = [];
const smo61482 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61482.setAttribute('id', 'smo61482');
smo61482.setStyle({ fillStyle: "#115511" });
smo61503v1ar.push(smo61482);
const smo61483 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/4/n"]}'))
smo61483.setAttribute('id', 'smo61483');
smo61483.setStyle({ fillStyle: "#115511" });
const smo614830acc = new VF.Accidental('#');
smo61483.addModifier(smo614830acc, 0);
smo61503v1ar.push(smo61483);
const smo61484 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["g#/4/n"]}'))
smo61484.setAttribute('id', 'smo61484');
smo61484.setStyle({ fillStyle: "#115511" });
const smo614840acc = new VF.Accidental('#');
smo61484.addModifier(smo614840acc, 0);
smo61503v1ar.push(smo61484);
const smo61485 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo61485.setAttribute('id', 'smo61485');
smo61485.setStyle({ fillStyle: "#115511" });
smo61503v1ar.push(smo61485);
const smo61486 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo61486.setAttribute('id', 'smo61486');
smo61486.setStyle({ fillStyle: "#115511" });
smo61503v1ar.push(smo61486);
const smo61487 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo61487.setAttribute('id', 'smo61487');
smo61487.setStyle({ fillStyle: "#115511" });
const smo614870acc = new VF.Accidental('n');
smo61487.addModifier(smo614870acc, 0);
smo61503v1ar.push(smo61487);
const smo61488 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo61488.setAttribute('id', 'smo61488');
smo61488.setStyle({ fillStyle: "#115511" });
smo61503v1ar.push(smo61488);
const smo61489 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61489.setAttribute('id', 'smo61489');
smo61489.setStyle({ fillStyle: "#115511" });
smo61503v1ar.push(smo61489);
smo61503v1.addTickables(smo61503v1ar)
fmtsmo6150350.joinVoices([smo61503v1]);
const fmtsmo6654350 = new VF.Formatter();
//
// voices and notes for stave 1 50
const smo66543v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66543v0ar = [];
const smo66514 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo66514.setAttribute('id', 'smo66514');
smo66543v0ar.push(smo66514);
const smo66515 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo66515.setAttribute('id', 'smo66515');
smo66543v0ar.push(smo66515);
const smo66516 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo66516.setAttribute('id', 'smo66516');
smo66543v0ar.push(smo66516);
const smo66517 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo66517.setAttribute('id', 'smo66517');
smo66543v0ar.push(smo66517);
const smo66518 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo66518.setAttribute('id', 'smo66518');
smo66543v0ar.push(smo66518);
const smo66519 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo66519.setAttribute('id', 'smo66519');
smo66543v0ar.push(smo66519);
smo66543v0.addTickables(smo66543v0ar)
fmtsmo6654350.joinVoices([smo66543v0]);
const smo66543v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66543v1ar = [];
const smo66520 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/2/n"]}'))
smo66520.setAttribute('id', 'smo66520');
smo66520.setStyle({ fillStyle: "#115511" });
smo66543v1ar.push(smo66520);
const smo66521 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo66521.setAttribute('id', 'smo66521');
smo66521.setStyle({ fillStyle: "#115511" });
smo66543v1ar.push(smo66521);
const smo66522 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo66522.setAttribute('id', 'smo66522');
smo66522.setStyle({ fillStyle: "#115511" });
smo66543v1ar.push(smo66522);
const smo66523 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo66523.setAttribute('id', 'smo66523');
smo66523.setStyle({ fillStyle: "#115511" });
smo66543v1ar.push(smo66523);
const smo66524 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo66524.setAttribute('id', 'smo66524');
smo66524.setStyle({ fillStyle: "#115511" });
smo66543v1ar.push(smo66524);
const smo66525 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo66525.setAttribute('id', 'smo66525');
smo66525.setStyle({ fillStyle: "#115511" });
smo66543v1ar.push(smo66525);
const smo66526 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/2/n"]}'))
smo66526.setAttribute('id', 'smo66526');
smo66526.setStyle({ fillStyle: "#115511" });
smo66543v1ar.push(smo66526);
const smo66527 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["a#/2/n"]}'))
smo66527.setAttribute('id', 'smo66527');
smo66527.setStyle({ fillStyle: "#115511" });
const smo665270acc = new VF.Accidental('#');
smo66527.addModifier(smo665270acc, 0);
smo66543v1ar.push(smo66527);
const smo66528 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/2/n"]}'))
smo66528.setAttribute('id', 'smo66528');
smo66528.setStyle({ fillStyle: "#115511" });
const smo665280acc = new VF.Accidental('n');
smo66528.addModifier(smo665280acc, 0);
smo66543v1ar.push(smo66528);
const smo66529 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo66529.setAttribute('id', 'smo66529');
smo66529.setStyle({ fillStyle: "#115511" });
smo66543v1ar.push(smo66529);
smo66543v1.addTickables(smo66543v1ar)
fmtsmo6654350.joinVoices([smo66543v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69850 = smo61472.getStemDirection();
smo61472.setStemDirection(dirsmo69850);
smo61473.setStemDirection(dirsmo69850);
smo61474.setStemDirection(dirsmo69850);
const smo69850 = new VF.Beam([smo61472,smo61473,smo61474]);
const dirsmo69851 = smo61475.getStemDirection();
smo61475.setStemDirection(dirsmo69851);
smo61476.setStemDirection(dirsmo69851);
const smo69851 = new VF.Beam([smo61475,smo61476]);
const dirsmo69852 = smo61477.getStemDirection();
smo61477.setStemDirection(dirsmo69852);
smo61478.setStemDirection(dirsmo69852);
const smo69852 = new VF.Beam([smo61477,smo61478]);
const dirsmo69853 = smo61479.getStemDirection();
smo61479.setStemDirection(dirsmo69853);
smo61480.setStemDirection(dirsmo69853);
smo61481.setStemDirection(dirsmo69853);
const smo69853 = new VF.Beam([smo61479,smo61480,smo61481]);
const dirsmo69854 = smo61482.getStemDirection();
smo61482.setStemDirection(dirsmo69854);
smo61483.setStemDirection(dirsmo69854);
const smo69854 = new VF.Beam([smo61482,smo61483]);
const dirsmo69855 = smo61484.getStemDirection();
smo61484.setStemDirection(dirsmo69855);
smo61485.setStemDirection(dirsmo69855);
const smo69855 = new VF.Beam([smo61484,smo61485]);
const dirsmo69856 = smo61486.getStemDirection();
smo61486.setStemDirection(dirsmo69856);
smo61487.setStemDirection(dirsmo69856);
smo61488.setStemDirection(dirsmo69856);
smo61489.setStemDirection(dirsmo69856);
const smo69856 = new VF.Beam([smo61486,smo61487,smo61488,smo61489]);
const dirsmo69858 = smo66514.getStemDirection();
smo66514.setStemDirection(dirsmo69858);
smo66515.setStemDirection(dirsmo69858);
const smo69858 = new VF.Beam([smo66514,smo66515]);
const dirsmo69859 = smo66520.getStemDirection();
smo66520.setStemDirection(dirsmo69859);
smo66521.setStemDirection(dirsmo69859);
const smo69859 = new VF.Beam([smo66520,smo66521]);
const dirsmo69860 = smo66522.getStemDirection();
smo66522.setStemDirection(dirsmo69860);
smo66523.setStemDirection(dirsmo69860);
smo66524.setStemDirection(dirsmo69860);
smo66525.setStemDirection(dirsmo69860);
const smo69860 = new VF.Beam([smo66522,smo66523,smo66524,smo66525]);
const dirsmo69861 = smo66526.getStemDirection();
smo66526.setStemDirection(dirsmo69861);
smo66527.setStemDirection(dirsmo69861);
smo66528.setStemDirection(dirsmo69861);
smo66529.setStemDirection(dirsmo69861);
const smo69861 = new VF.Beam([smo66526,smo66527,smo66528,smo66529]);
 
// formatting measures in staff group smo58712
fmtsmo6150350.format([smo61503v0,smo61503v1,smo66543v0,smo66543v1], 322);
const stavesmo61503 = new VF.Stave(1092, 1849, 336);
stavesmo61503.setAttribute('id', 'stavesmo61503');
stavesmo61503.setBegBarType(VF.Barline.type.NONE);
stavesmo61503.setContext(context);
stavesmo61503.draw();
smo61503v0.draw(context, stavesmo61503);
smo61503v1.draw(context, stavesmo61503);
smo69850.setContext(context);
smo69850.draw();
smo69851.setContext(context);
smo69851.draw();
smo69852.setContext(context);
smo69852.draw();
smo69853.setContext(context);
smo69853.draw();
smo69854.setContext(context);
smo69854.draw();
smo69855.setContext(context);
smo69855.draw();
smo69856.setContext(context);
smo69856.draw();
const stavesmo66543 = new VF.Stave(1092, 1988, 336);
stavesmo66543.setAttribute('id', 'stavesmo66543');
stavesmo66543.setBegBarType(VF.Barline.type.NONE);
stavesmo66543.setContext(context);
stavesmo66543.draw();
smo66543v0.draw(context, stavesmo66543);
smo66543v1.draw(context, stavesmo66543);
smo69858.setContext(context);
smo69858.draw();
smo69859.setContext(context);
smo69859.draw();
smo69860.setContext(context);
smo69860.draw();
smo69861.setContext(context);
smo69861.draw();
const fmtsmo6153851 = new VF.Formatter();
//
// voices and notes for stave 0 51
const smo61538v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61538v0ar = [];
const smo61504 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo61504.setAttribute('id', 'smo61504');
smo61538v0ar.push(smo61504);
const smo61505 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo61505.setAttribute('id', 'smo61505');
smo61538v0ar.push(smo61505);
const smo61506 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61506.setAttribute('id', 'smo61506');
smo61538v0ar.push(smo61506);
const smo61507 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo61507.setAttribute('id', 'smo61507');
smo61538v0ar.push(smo61507);
const smo61508 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo61508.setAttribute('id', 'smo61508');
smo61538v0ar.push(smo61508);
const smo61509 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo61509.setAttribute('id', 'smo61509');
smo61538v0ar.push(smo61509);
const smo61510 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo61510.setAttribute('id', 'smo61510');
smo61538v0ar.push(smo61510);
const smo61511 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo61511.setAttribute('id', 'smo61511');
smo61538v0ar.push(smo61511);
const smo61512 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo61512.setAttribute('id', 'smo61512');
smo61538v0ar.push(smo61512);
const smo61513 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo61513.setAttribute('id', 'smo61513');
smo61538v0ar.push(smo61513);
smo61538v0.addTickables(smo61538v0ar)
fmtsmo6153851.joinVoices([smo61538v0]);
const smo61538v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61538v1ar = [];
const smo61514 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61514.setAttribute('id', 'smo61514');
smo61514.setStyle({ fillStyle: "#115511" });
smo61514.addModifier(new VF.Dot(), 0);
smo61538v1ar.push(smo61514);
const smo61515 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61515.setAttribute('id', 'smo61515');
smo61515.setStyle({ fillStyle: "#115511" });
smo61538v1ar.push(smo61515);
const smo61516 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61516.setAttribute('id', 'smo61516');
smo61516.setStyle({ fillStyle: "#115511" });
smo61538v1ar.push(smo61516);
const smo61517 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo61517.setAttribute('id', 'smo61517');
smo61517.setStyle({ fillStyle: "#115511" });
smo61538v1ar.push(smo61517);
const smo61518 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo61518.setAttribute('id', 'smo61518');
smo61518.setStyle({ fillStyle: "#115511" });
smo61538v1ar.push(smo61518);
const smo61519 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo61519.setAttribute('id', 'smo61519');
smo61519.setStyle({ fillStyle: "#115511" });
smo61538v1ar.push(smo61519);
const smo61520 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61520.setAttribute('id', 'smo61520');
smo61520.setStyle({ fillStyle: "#115511" });
smo61538v1ar.push(smo61520);
const smo61521 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61521.setAttribute('id', 'smo61521');
smo61521.setStyle({ fillStyle: "#115511" });
smo61538v1ar.push(smo61521);
const smo61522 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo61522.setAttribute('id', 'smo61522');
smo61522.setStyle({ fillStyle: "#115511" });
smo61538v1ar.push(smo61522);
const smo61523 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo61523.setAttribute('id', 'smo61523');
smo61523.setStyle({ fillStyle: "#115511" });
smo61538v1ar.push(smo61523);
const smo61524 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo61524.setAttribute('id', 'smo61524');
smo61524.setStyle({ fillStyle: "#115511" });
smo61538v1ar.push(smo61524);
smo61538v1.addTickables(smo61538v1ar)
fmtsmo6153851.joinVoices([smo61538v1]);
const fmtsmo6657351 = new VF.Formatter();
//
// voices and notes for stave 1 51
const smo66573v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66573v0ar = [];
const smo66544 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/4/r"]}'))
smo66544.setAttribute('id', 'smo66544');
smo66573v0ar.push(smo66544);
const smo66545 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo66545.setAttribute('id', 'smo66545');
smo66573v0ar.push(smo66545);
const smo66546 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo66546.setAttribute('id', 'smo66546');
smo66573v0ar.push(smo66546);
const smo66547 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["c#/4/n"]}'))
smo66547.setAttribute('id', 'smo66547');
const smo665470acc = new VF.Accidental('#');
smo66547.addModifier(smo665470acc, 0);
smo66573v0ar.push(smo66547);
const smo66548 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo66548.setAttribute('id', 'smo66548');
smo66548.addModifier(new VF.Dot(), 0);
smo66573v0ar.push(smo66548);
const smo66549 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo66549.setAttribute('id', 'smo66549');
smo66573v0ar.push(smo66549);
const smo66550 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo66550.setAttribute('id', 'smo66550');
smo66573v0ar.push(smo66550);
const smo66551 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo66551.setAttribute('id', 'smo66551');
const smo665510acc = new VF.Accidental('n');
smo66551.addModifier(smo665510acc, 0);
smo66573v0ar.push(smo66551);
const smo66552 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo66552.setAttribute('id', 'smo66552');
smo66573v0ar.push(smo66552);
smo66573v0.addTickables(smo66573v0ar)
fmtsmo6657351.joinVoices([smo66573v0]);
const smo66573v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66573v1ar = [];
const smo66553 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/2/n"]}'))
smo66553.setAttribute('id', 'smo66553');
smo66553.setStyle({ fillStyle: "#115511" });
smo66573v1ar.push(smo66553);
const smo66554 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo66554.setAttribute('id', 'smo66554');
smo66554.setStyle({ fillStyle: "#115511" });
const smo665540acc = new VF.Accidental('#');
smo66554.addModifier(smo665540acc, 0);
smo66573v1ar.push(smo66554);
const smo66555 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo66555.setAttribute('id', 'smo66555');
smo66555.setStyle({ fillStyle: "#115511" });
smo66573v1ar.push(smo66555);
const smo66556 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo66556.setAttribute('id', 'smo66556');
smo66556.setStyle({ fillStyle: "#115511" });
smo66573v1ar.push(smo66556);
const smo66557 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo66557.setAttribute('id', 'smo66557');
smo66557.setStyle({ fillStyle: "#115511" });
smo66573v1ar.push(smo66557);
const smo66558 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo66558.setAttribute('id', 'smo66558');
smo66558.setStyle({ fillStyle: "#115511" });
smo66573v1ar.push(smo66558);
const smo66559 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo66559.setAttribute('id', 'smo66559');
smo66559.setStyle({ fillStyle: "#115511" });
const smo665590acc = new VF.Accidental('n');
smo66559.addModifier(smo665590acc, 0);
smo66573v1ar.push(smo66559);
smo66573v1.addTickables(smo66573v1ar)
fmtsmo6657351.joinVoices([smo66573v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69865 = smo61504.getStemDirection();
smo61504.setStemDirection(dirsmo69865);
smo61505.setStemDirection(dirsmo69865);
smo61506.setStemDirection(dirsmo69865);
smo61507.setStemDirection(dirsmo69865);
const smo69865 = new VF.Beam([smo61504,smo61505,smo61506,smo61507]);
const dirsmo69866 = smo61508.getStemDirection();
smo61508.setStemDirection(dirsmo69866);
smo61509.setStemDirection(dirsmo69866);
smo61510.setStemDirection(dirsmo69866);
smo61511.setStemDirection(dirsmo69866);
const smo69866 = new VF.Beam([smo61508,smo61509,smo61510,smo61511]);
const dirsmo69867 = smo61512.getStemDirection();
smo61512.setStemDirection(dirsmo69867);
smo61513.setStemDirection(dirsmo69867);
const smo69867 = new VF.Beam([smo61512,smo61513]);
const dirsmo69868 = smo61514.getStemDirection();
smo61514.setStemDirection(dirsmo69868);
smo61515.setStemDirection(dirsmo69868);
smo61516.setStemDirection(dirsmo69868);
smo61517.setStemDirection(dirsmo69868);
smo61518.setStemDirection(dirsmo69868);
const smo69868 = new VF.Beam([smo61514,smo61515,smo61516,smo61517,smo61518]);
const dirsmo69869 = smo61519.getStemDirection();
smo61519.setStemDirection(dirsmo69869);
smo61520.setStemDirection(dirsmo69869);
const smo69869 = new VF.Beam([smo61519,smo61520]);
const dirsmo69870 = smo61521.getStemDirection();
smo61521.setStemDirection(dirsmo69870);
smo61522.setStemDirection(dirsmo69870);
smo61523.setStemDirection(dirsmo69870);
smo61524.setStemDirection(dirsmo69870);
const smo69870 = new VF.Beam([smo61521,smo61522,smo61523,smo61524]);
const dirsmo69872 = smo66545.getStemDirection();
smo66545.setStemDirection(dirsmo69872);
smo66546.setStemDirection(dirsmo69872);
smo66547.setStemDirection(dirsmo69872);
const smo69872 = new VF.Beam([smo66545,smo66546,smo66547]);
const dirsmo69873 = smo66548.getStemDirection();
smo66548.setStemDirection(dirsmo69873);
smo66549.setStemDirection(dirsmo69873);
smo66550.setStemDirection(dirsmo69873);
const smo69873 = new VF.Beam([smo66548,smo66549,smo66550]);
const dirsmo69874 = smo66551.getStemDirection();
smo66551.setStemDirection(dirsmo69874);
smo66552.setStemDirection(dirsmo69874);
const smo69874 = new VF.Beam([smo66551,smo66552]);
const dirsmo69875 = smo66553.getStemDirection();
smo66553.setStemDirection(dirsmo69875);
smo66554.setStemDirection(dirsmo69875);
smo66555.setStemDirection(dirsmo69875);
smo66556.setStemDirection(dirsmo69875);
const smo69875 = new VF.Beam([smo66553,smo66554,smo66555,smo66556]);
const dirsmo69876 = smo66558.getStemDirection();
smo66558.setStemDirection(dirsmo69876);
smo66559.setStemDirection(dirsmo69876);
const smo69876 = new VF.Beam([smo66558,smo66559]);
 
// formatting measures in staff group smo58712
fmtsmo6153851.format([smo61538v0,smo61538v1,smo66573v0,smo66573v1], 365);
const stavesmo61538 = new VF.Stave(1428, 1849, 379);
stavesmo61538.setAttribute('id', 'stavesmo61538');
stavesmo61538.setBegBarType(VF.Barline.type.NONE);
stavesmo61538.setContext(context);
stavesmo61538.draw();
smo61538v0.draw(context, stavesmo61538);
smo61538v1.draw(context, stavesmo61538);
smo69865.setContext(context);
smo69865.draw();
smo69866.setContext(context);
smo69866.draw();
smo69867.setContext(context);
smo69867.draw();
smo69868.setContext(context);
smo69868.draw();
smo69869.setContext(context);
smo69869.draw();
smo69870.setContext(context);
smo69870.draw();
const stavesmo66573 = new VF.Stave(1428, 1988, 379);
stavesmo66573.setAttribute('id', 'stavesmo66573');
stavesmo66573.setBegBarType(VF.Barline.type.NONE);
stavesmo66573.addClef('bass');
stavesmo66573.setContext(context);
stavesmo66573.draw();
smo66573v0.draw(context, stavesmo66573);
smo66573v1.draw(context, stavesmo66573);
smo69872.setContext(context);
smo69872.draw();
smo69873.setContext(context);
smo69873.draw();
smo69874.setContext(context);
smo69874.draw();
smo69875.setContext(context);
smo69875.draw();
smo69876.setContext(context);
smo69876.draw();
const rightsmo58712stavesmo615381 = new VF.StaveConnector(stavesmo61538, stavesmo66573).setType(0);
rightsmo58712stavesmo615381.setContext(context).draw();
// modifier from 0-36-1-1 to 0-36-1-2
const smo71804 = new VF.StaveTie({ first_note: smo61032, last_note: smo61033, 
          firstNote: smo61032, lastNote: smo61033, first_indices: [0], last_indices: [0]});
smo71804.setContext(context).draw();
// modifier from 0-37-0-6 to 0-37-0-7
const smo71805 = new VF.StaveTie({ first_note: smo61065, last_note: smo61066, 
          firstNote: smo61065, lastNote: smo61066, first_indices: [0], last_indices: [0]});
smo71805.setContext(context).draw();
// modifier from 0-37-1-2 to 0-37-1-3
const smo71806 = new VF.StaveTie({ first_note: smo61072, last_note: smo61073, 
          firstNote: smo61072, lastNote: smo61073, first_indices: [0], last_indices: [0]});
smo71806.setContext(context).draw();
// modifier from 0-40-1-8 to 0-41-1-0
const smo71807 = new VF.StaveTie({ first_note: smo61176, last_note: smo61200, 
          firstNote: smo61176, lastNote: smo61200, first_indices: [0], last_indices: [0]});
smo71807.setContext(context).draw();
// modifier from 0-42-0-1 to 0-42-0-2
const smo71808 = new VF.StaveTie({ first_note: smo61218, last_note: smo61219, 
          firstNote: smo61218, lastNote: smo61219, first_indices: [0], last_indices: [0]});
smo71808.setContext(context).draw();
// modifier from 0-42-0-7 to 0-42-0-8
const smo71809 = new VF.StaveTie({ first_note: smo61224, last_note: smo61225, 
          firstNote: smo61224, lastNote: smo61225, first_indices: [0], last_indices: [0]});
smo71809.setContext(context).draw();
// modifier from 0-43-0-3 to 0-44-0-0
const smo71810 = new VF.StaveTie({ first_note: smo61246, last_note: smo61270, 
          firstNote: smo61246, lastNote: smo61270, first_indices: [0], last_indices: [0]});
smo71810.setContext(context).draw();
// modifier from 0-44-1-1 to 0-44-1-2
const smo71811 = new VF.StaveTie({ first_note: smo61281, last_note: smo61282, 
          firstNote: smo61281, lastNote: smo61282, first_indices: [0], last_indices: [0]});
smo71811.setContext(context).draw();
// modifier from 0-45-1-8 to 0-46-1-0
const smo71812 = new VF.StaveTie({ first_note: smo61323, last_note: smo61352, 
          firstNote: smo61323, lastNote: smo61352, first_indices: [0], last_indices: [0]});
smo71812.setContext(context).draw();
// modifier from 0-46-1-7 to 0-46-1-8
const smo71813 = new VF.StaveTie({ first_note: smo61359, last_note: smo61360, 
          firstNote: smo61359, lastNote: smo61360, first_indices: [0], last_indices: [0]});
smo71813.setContext(context).draw();
// modifier from 0-47-0-3 to 0-47-0-4
const smo71814 = new VF.StaveTie({ first_note: smo61381, last_note: smo61382, 
          firstNote: smo61381, lastNote: smo61382, first_indices: [0], last_indices: [0]});
smo71814.setContext(context).draw();
// modifier from 0-49-1-1 to 0-49-1-2
const smo71815 = new VF.StaveTie({ first_note: smo61449, last_note: smo61450, 
          firstNote: smo61449, lastNote: smo61450, first_indices: [0], last_indices: [0]});
smo71815.setContext(context).draw();
// modifier from 0-49-1-9 to 0-50-1-0
const smo71816 = new VF.StaveTie({ first_note: smo61457, last_note: smo61482, 
          firstNote: smo61457, lastNote: smo61482, first_indices: [0], last_indices: [0]});
smo71816.setContext(context).draw();
// modifier from 0-50-1-3 to 0-50-1-4
const smo71817 = new VF.StaveTie({ first_note: smo61485, last_note: smo61486, 
          firstNote: smo61485, lastNote: smo61486, first_indices: [0], last_indices: [0]});
smo71817.setContext(context).draw();
// modifier from 0-51-0-3 to 0-51-0-4
const smo71818 = new VF.StaveTie({ first_note: smo61507, last_note: smo61508, 
          firstNote: smo61507, lastNote: smo61508, first_indices: [0], last_indices: [0]});
smo71818.setContext(context).draw();
// modifier from 0-51-1-6 to 0-51-1-7
const smo71819 = new VF.StaveTie({ first_note: smo61520, last_note: smo61521, 
          firstNote: smo61520, lastNote: smo61521, first_indices: [0], last_indices: [0]});
smo71819.setContext(context).draw();
// modifier from 0-38-1-7 to 0-39-1-0
const smo71820 = new VF.StaveTie({ first_note: smo61113, last_note: smo61140, 
          firstNote: smo61113, lastNote: smo61140, first_indices: [0], last_indices: [0]});
smo71820.setContext(context).draw();
// modifier from 0-39-1-3 to 0-39-1-4
const smo71821 = new VF.StaveTie({ first_note: smo61143, last_note: smo61144, 
          firstNote: smo61143, lastNote: smo61144, first_indices: [0], last_indices: [0]});
smo71821.setContext(context).draw();
// modifier from 1-24-0-1 to 1-24-0-2
const smo71822 = new VF.StaveTie({ first_note: smo65885, last_note: smo65886, 
          firstNote: smo65885, lastNote: smo65886, first_indices: [0], last_indices: [0]});
smo71822.setContext(context).draw();
// modifier from 1-24-0-4 to 1-24-0-5
const smo71823 = new VF.StaveTie({ first_note: smo65888, last_note: smo65889, 
          firstNote: smo65888, lastNote: smo65889, first_indices: [0], last_indices: [0]});
smo71823.setContext(context).draw();
// modifier from 1-25-0-1 to 1-25-0-2
const smo71824 = new VF.StaveTie({ first_note: smo65907, last_note: smo65908, 
          firstNote: smo65907, lastNote: smo65908, first_indices: [0], last_indices: [0]});
smo71824.setContext(context).draw();
// modifier from 1-25-0-4 to 1-25-0-5
const smo71825 = new VF.StaveTie({ first_note: smo65910, last_note: smo65911, 
          firstNote: smo65910, lastNote: smo65911, first_indices: [0], last_indices: [0]});
smo71825.setContext(context).draw();
// modifier from 1-26-0-1 to 1-26-0-2
const smo71826 = new VF.StaveTie({ first_note: smo65929, last_note: smo65930, 
          firstNote: smo65929, lastNote: smo65930, first_indices: [0], last_indices: [0]});
smo71826.setContext(context).draw();
// modifier from 1-26-0-4 to 1-26-0-5
const smo71827 = new VF.StaveTie({ first_note: smo65932, last_note: smo65933, 
          firstNote: smo65932, lastNote: smo65933, first_indices: [0], last_indices: [0]});
smo71827.setContext(context).draw();
// modifier from 1-27-0-1 to 1-27-0-2
const smo71828 = new VF.StaveTie({ first_note: smo65951, last_note: smo65952, 
          firstNote: smo65951, lastNote: smo65952, first_indices: [0], last_indices: [0]});
smo71828.setContext(context).draw();
// modifier from 1-27-0-4 to 1-27-0-5
const smo71829 = new VF.StaveTie({ first_note: smo65954, last_note: smo65955, 
          firstNote: smo65954, lastNote: smo65955, first_indices: [0], last_indices: [0]});
smo71829.setContext(context).draw();
// modifier from 1-28-0-1 to 1-28-0-2
const smo71830 = new VF.StaveTie({ first_note: smo65973, last_note: smo65974, 
          firstNote: smo65973, lastNote: smo65974, first_indices: [0], last_indices: [0]});
smo71830.setContext(context).draw();
// modifier from 1-28-0-4 to 1-28-0-5
const smo71831 = new VF.StaveTie({ first_note: smo65976, last_note: smo65977, 
          firstNote: smo65976, lastNote: smo65977, first_indices: [0], last_indices: [0]});
smo71831.setContext(context).draw();
// modifier from 1-29-0-1 to 1-29-0-2
const smo71832 = new VF.StaveTie({ first_note: smo65995, last_note: smo65996, 
          firstNote: smo65995, lastNote: smo65996, first_indices: [0], last_indices: [0]});
smo71832.setContext(context).draw();
// modifier from 1-29-0-4 to 1-29-0-5
const smo71833 = new VF.StaveTie({ first_note: smo65998, last_note: smo65999, 
          firstNote: smo65998, lastNote: smo65999, first_indices: [0], last_indices: [0]});
smo71833.setContext(context).draw();
// modifier from 1-30-0-1 to 1-30-0-2
const smo71834 = new VF.StaveTie({ first_note: smo66017, last_note: smo66018, 
          firstNote: smo66017, lastNote: smo66018, first_indices: [0], last_indices: [0]});
smo71834.setContext(context).draw();
// modifier from 1-30-0-4 to 1-30-0-5
const smo71835 = new VF.StaveTie({ first_note: smo66020, last_note: smo66021, 
          firstNote: smo66020, lastNote: smo66021, first_indices: [0], last_indices: [0]});
smo71835.setContext(context).draw();
// modifier from 1-31-0-1 to 1-31-0-2
const smo71836 = new VF.StaveTie({ first_note: smo66039, last_note: smo66040, 
          firstNote: smo66039, lastNote: smo66040, first_indices: [0], last_indices: [0]});
smo71836.setContext(context).draw();
// modifier from 1-31-0-4 to 1-31-0-5
const smo71837 = new VF.StaveTie({ first_note: smo66042, last_note: smo66043, 
          firstNote: smo66042, lastNote: smo66043, first_indices: [0], last_indices: [0]});
smo71837.setContext(context).draw();
// modifier from 1-33-0-1 to 1-33-0-2
const smo71838 = new VF.StaveTie({ first_note: smo66081, last_note: smo66082, 
          firstNote: smo66081, lastNote: smo66082, first_indices: [0], last_indices: [0]});
smo71838.setContext(context).draw();
// modifier from 1-33-0-2 to 1-33-0-3
const smo71839 = new VF.StaveTie({ first_note: smo66082, last_note: smo66083, 
          firstNote: smo66082, lastNote: smo66083, first_indices: [0], last_indices: [0]});
smo71839.setContext(context).draw();
// modifier from 1-33-1-0 to 1-33-1-1
const smo71840 = new VF.StaveTie({ first_note: smo66084, last_note: smo66085, 
          firstNote: smo66084, lastNote: smo66085, first_indices: [0], last_indices: [0]});
smo71840.setContext(context).draw();
// modifier from 1-49-0-3 to 1-49-0-4
const smo71841 = new VF.StaveTie({ first_note: smo66487, last_note: smo66488, 
          firstNote: smo66487, lastNote: smo66488, first_indices: [0], last_indices: [0]});
smo71841.setContext(context).draw();
// modifier from 1-32-0-1 to 1-32-0-2
const smo71842 = new VF.StaveTie({ first_note: smo66061, last_note: smo66062, 
          firstNote: smo66061, lastNote: smo66062, first_indices: [0], last_indices: [0]});
smo71842.setContext(context).draw();
}