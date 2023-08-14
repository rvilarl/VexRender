// @@ Gnossienne No 3 p 1/1  by Erik Satie
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = Vex.Flow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1348.7603305785124');
svg.setAttributeNS('', 'height', '1745.4545454545453');
svg.setAttributeNS('', 'viewBox', '0 0 1484 1920');
//
// create the musical objects
VF.setMusicFont("Leland","Bravura","Gonville","Custom");
const fmtsmo842060 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo84206v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84206v0ar = [];
const smo84154 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo84154.setAttribute('id', 'smo84154');
smo84206v0ar.push(smo84154);
const smo84156 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo84156.setAttribute('id', 'smo84156');
smo84206v0ar.push(smo84156);
const smo84157 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
smo84157.setAttribute('id', 'smo84157');
const smo841570acc = new VF.Accidental('#');
smo84157.addModifier(smo841570acc, 0);
smo84206v0ar.push(smo84157);
const smo84158 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
smo84158.setAttribute('id', 'smo84158');
smo84206v0ar.push(smo84158);
const smo84159 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
smo84159.setAttribute('id', 'smo84159');
const smo841590acc = new VF.Accidental('#');
smo84159.addModifier(smo841590acc, 0);
smo84206v0ar.push(smo84159);
const smo84160 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
smo84160.setAttribute('id', 'smo84160');
smo84206v0ar.push(smo84160);
const smo84161 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
smo84161.setAttribute('id', 'smo84161');
smo84206v0ar.push(smo84161);
const smo84162 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo84162.setAttribute('id', 'smo84162');
smo84206v0ar.push(smo84162);
const smo84163 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo84163.setAttribute('id', 'smo84163');
smo84206v0ar.push(smo84163);
const smo84164 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo84164.setAttribute('id', 'smo84164');
smo84206v0ar.push(smo84164);
const smo84165 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
smo84165.setAttribute('id', 'smo84165');
smo84206v0ar.push(smo84165);
const smo84166 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
smo84166.setAttribute('id', 'smo84166');
smo84206v0ar.push(smo84166);
const smo84167 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo84167.setAttribute('id', 'smo84167');
smo84206v0ar.push(smo84167);
const smo84168 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo84168.setAttribute('id', 'smo84168');
smo84206v0ar.push(smo84168);
const smo84169 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84169.setAttribute('id', 'smo84169');
smo84206v0ar.push(smo84169);
const smo84170 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84170.setAttribute('id', 'smo84170');
smo84206v0ar.push(smo84170);
const smo84171 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84171.setAttribute('id', 'smo84171');
smo84206v0ar.push(smo84171);
const smo84172 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo84172.setAttribute('id', 'smo84172');
smo84206v0ar.push(smo84172);
const smo84173 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo84173.setAttribute('id', 'smo84173');
smo84206v0ar.push(smo84173);
const smo84174 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo84174.setAttribute('id', 'smo84174');
smo84206v0ar.push(smo84174);
const smo84175 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo84175.setAttribute('id', 'smo84175');
smo84206v0ar.push(smo84175);
const smo84176 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
smo84176.setAttribute('id', 'smo84176');
smo84206v0ar.push(smo84176);
const smo84177 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
smo84177.setAttribute('id', 'smo84177');
smo84206v0ar.push(smo84177);
const smo84178 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
smo84178.setAttribute('id', 'smo84178');
smo84206v0ar.push(smo84178);
const smo84179 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
smo84179.setAttribute('id', 'smo84179');
smo84206v0ar.push(smo84179);
const smo84180 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
smo84180.setAttribute('id', 'smo84180');
smo84206v0ar.push(smo84180);
smo84206v0.addTickables(smo84206v0ar)
fmtsmo842060.joinVoices([smo84206v0]);
const smo84206v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84206v1ar = [];
const smo84181 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo84181.setAttribute('id', 'smo84181');
smo84181.setStyle({ fillStyle: '#aaaaaa7f' });
smo84206v1ar.push(smo84181);
const smo84182 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo84182.setAttribute('id', 'smo84182');
smo84182.setStyle({ fillStyle: "#115511" });
smo84206v1ar.push(smo84182);
const smo84183 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo84183.setAttribute('id', 'smo84183');
smo84183.setStyle({ fillStyle: "#115511" });
smo84206v1ar.push(smo84183);
const smo84184 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo84184.setAttribute('id', 'smo84184');
smo84184.setStyle({ fillStyle: '#aaaaaa7f' });
smo84206v1ar.push(smo84184);
const smo84185 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo84185.setAttribute('id', 'smo84185');
smo84185.setStyle({ fillStyle: "#115511" });
smo84206v1ar.push(smo84185);
const smo84186 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo84186.setAttribute('id', 'smo84186');
smo84186.setStyle({ fillStyle: "#115511" });
smo84206v1ar.push(smo84186);
const smo84187 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1/2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo84187.setAttribute('id', 'smo84187');
smo84187.setStyle({ fillStyle: '#aaaaaa7f' });
smo84206v1ar.push(smo84187);
const smo84188 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo84188.setAttribute('id', 'smo84188');
smo84188.setStyle({ fillStyle: '#aaaaaa7f' });
smo84206v1ar.push(smo84188);
const smo84189 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo84189.setAttribute('id', 'smo84189');
smo84189.setStyle({ fillStyle: "#115511" });
smo84206v1ar.push(smo84189);
const smo84190 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo84190.setAttribute('id', 'smo84190');
smo84190.setStyle({ fillStyle: "#115511" });
smo84206v1ar.push(smo84190);
smo84206v1.addTickables(smo84206v1ar)
fmtsmo842060.joinVoices([smo84206v1]);
const fmtsmo847130 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo84713v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84713v0ar = [];
const smo84681 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84681.setAttribute('id', 'smo84681');
smo84713v0ar.push(smo84681);
const smo84682 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84682.setAttribute('id', 'smo84682');
smo84682.setStyle({ fillStyle: '#aaaaaa7f' });
smo84682.addModifier(new VF.Dot(), 0);
smo84713v0ar.push(smo84682);
const smo84683 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84683.setAttribute('id', 'smo84683');
smo84713v0ar.push(smo84683);
const smo84684 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84684.setAttribute('id', 'smo84684');
smo84684.setStyle({ fillStyle: '#aaaaaa7f' });
smo84684.addModifier(new VF.Dot(), 0);
smo84713v0ar.push(smo84684);
const smo84685 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84685.setAttribute('id', 'smo84685');
smo84713v0ar.push(smo84685);
const smo84686 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo84686.setAttribute('id', 'smo84686');
smo84713v0ar.push(smo84686);
const smo84687 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo84687.setAttribute('id', 'smo84687');
smo84713v0ar.push(smo84687);
const smo84688 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84688.setAttribute('id', 'smo84688');
smo84713v0ar.push(smo84688);
const smo84689 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo84689.setAttribute('id', 'smo84689');
smo84713v0ar.push(smo84689);
const smo84690 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo84690.setAttribute('id', 'smo84690');
smo84713v0ar.push(smo84690);
const smo84691 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84691.setAttribute('id', 'smo84691');
smo84713v0ar.push(smo84691);
const smo84692 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84692.setAttribute('id', 'smo84692');
smo84692.setStyle({ fillStyle: '#aaaaaa7f' });
smo84692.addModifier(new VF.Dot(), 0);
smo84713v0ar.push(smo84692);
smo84713v0.addTickables(smo84713v0ar)
fmtsmo847130.joinVoices([smo84713v0]);
const smo84713v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84713v1ar = [];
const smo84693 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo84693.setAttribute('id', 'smo84693');
smo84693.setStyle({ fillStyle: "#115511" });
smo84713v1ar.push(smo84693);
const smo84694 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo84694.setAttribute('id', 'smo84694');
smo84694.setStyle({ fillStyle: "#115511" });
smo84713v1ar.push(smo84694);
const smo84695 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo84695.setAttribute('id', 'smo84695');
smo84695.setStyle({ fillStyle: "#115511" });
smo84713v1ar.push(smo84695);
const smo84696 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo84696.setAttribute('id', 'smo84696');
smo84696.setStyle({ fillStyle: "#115511" });
smo84713v1ar.push(smo84696);
const smo84697 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo84697.setAttribute('id', 'smo84697');
smo84697.setStyle({ fillStyle: "#115511" });
smo84713v1ar.push(smo84697);
smo84713v1.addTickables(smo84713v1ar)
fmtsmo847130.joinVoices([smo84713v1]);
// create beam groups and tuplets for format grp smo85078 before formatting
const dirsmo86280 = smo84154.getStemDirection();
smo84154.setStemDirection(dirsmo86280);
smo84156.setStemDirection(dirsmo86280);
smo84157.setStemDirection(dirsmo86280);
smo84158.setStemDirection(dirsmo86280);
const smo86280 = new VF.Beam([smo84154,smo84156,smo84157,smo84158]);
const dirsmo86281 = smo84159.getStemDirection();
smo84159.setStemDirection(dirsmo86281);
smo84160.setStemDirection(dirsmo86281);
const smo86281 = new VF.Beam([smo84159,smo84160]);
const dirsmo86282 = smo84163.getStemDirection();
smo84163.setStemDirection(dirsmo86282);
smo84164.setStemDirection(dirsmo86282);
const smo86282 = new VF.Beam([smo84163,smo84164]);
const dirsmo86283 = smo84165.getStemDirection();
smo84165.setStemDirection(dirsmo86283);
smo84166.setStemDirection(dirsmo86283);
smo84167.setStemDirection(dirsmo86283);
smo84168.setStemDirection(dirsmo86283);
const smo86283 = new VF.Beam([smo84165,smo84166,smo84167,smo84168]);
const dirsmo86284 = smo84169.getStemDirection();
smo84169.setStemDirection(dirsmo86284);
smo84170.setStemDirection(dirsmo86284);
const smo86284 = new VF.Beam([smo84169,smo84170]);
const dirsmo86285 = smo84174.getStemDirection();
smo84174.setStemDirection(dirsmo86285);
smo84175.setStemDirection(dirsmo86285);
smo84176.setStemDirection(dirsmo86285);
smo84177.setStemDirection(dirsmo86285);
const smo86285 = new VF.Beam([smo84174,smo84175,smo84176,smo84177]);
const dirsmo86286 = smo84178.getStemDirection();
smo84178.setStemDirection(dirsmo86286);
smo84179.setStemDirection(dirsmo86286);
const smo86286 = new VF.Beam([smo84178,smo84179]);
 
// formatting measures in staff group smo85078
fmtsmo842060.format([smo84206v0,smo84206v1,smo84713v0,smo84713v1], 1094);
const stavesmo84206 = new VF.Stave(103, 187, 1174);
stavesmo84206.setAttribute('id', 'stavesmo84206');
stavesmo84206.setBegBarType(1);
stavesmo84206.setTempo(JSON.parse('{"duration":"4","dots":0,"bpm":60,"name":"Lent"}'), -1 * 35);
stavesmo84206.addClef('treble');
stavesmo84206.addTimeSignature('4/4');
stavesmo84206.setContext(context);
stavesmo84206.draw();
smo84206v0.draw(context, stavesmo84206);
smo84206v1.draw(context, stavesmo84206);
smo86280.setContext(context);
smo86280.draw();
smo86281.setContext(context);
smo86281.draw();
smo86282.setContext(context);
smo86282.draw();
smo86283.setContext(context);
smo86283.draw();
smo86284.setContext(context);
smo86284.draw();
smo86285.setContext(context);
smo86285.draw();
smo86286.setContext(context);
smo86286.draw();
const stavesmo84713 = new VF.Stave(103, 330, 1174);
stavesmo84713.setAttribute('id', 'stavesmo84713');
stavesmo84713.setBegBarType(1);
stavesmo84713.addClef('bass');
stavesmo84713.addTimeSignature('4/4');
stavesmo84713.setContext(context);
stavesmo84713.draw();
smo84713v0.draw(context, stavesmo84713);
smo84713v1.draw(context, stavesmo84713);
const leftsmo85078stavesmo842061 = new VF.StaveConnector(stavesmo84206, stavesmo84713).setType(3);
leftsmo85078stavesmo842061.setContext(context).draw();
const fmtsmo842511 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo84251v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84251v0ar = [];
const smo84207 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo84207.setAttribute('id', 'smo84207');
smo84251v0ar.push(smo84207);
const smo84208 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo84208.setAttribute('id', 'smo84208');
smo84251v0ar.push(smo84208);
const smo84209 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo84209.setAttribute('id', 'smo84209');
smo84251v0ar.push(smo84209);
const smo84210 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
smo84210.setAttribute('id', 'smo84210');
const smo842100acc = new VF.Accidental('#');
smo84210.addModifier(smo842100acc, 0);
smo84251v0ar.push(smo84210);
const smo84211 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
smo84211.setAttribute('id', 'smo84211');
smo84251v0ar.push(smo84211);
const smo84212 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo84212.setAttribute('id', 'smo84212');
smo84251v0ar.push(smo84212);
const smo84213 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo84213.setAttribute('id', 'smo84213');
smo84251v0ar.push(smo84213);
const smo84214 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84214.setAttribute('id', 'smo84214');
smo84251v0ar.push(smo84214);
const smo84215 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84215.setAttribute('id', 'smo84215');
smo84251v0ar.push(smo84215);
const smo84216 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84216.setAttribute('id', 'smo84216');
smo84251v0ar.push(smo84216);
const smo84217 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo84217.setAttribute('id', 'smo84217');
smo84251v0ar.push(smo84217);
const smo84218 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
const smo84219 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["bn/4"],"slash":false}'))
smo84219.setAttribute('id', 'smo84219');
const ggrpsmo84218 = new VF.GraceNoteGroup([smo84219]);
ggrpsmo84218.beamNotes();
smo84218.addModifier(ggrpsmo84218, 0);
smo84218.setAttribute('id', 'smo84218');
const smo842180acc = new VF.Accidental('n');
smo84218.addModifier(smo842180acc, 0);
smo84251v0ar.push(smo84218);
const smo84220 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84220.setAttribute('id', 'smo84220');
smo84251v0ar.push(smo84220);
const smo84221 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84221.setAttribute('id', 'smo84221');
smo84251v0ar.push(smo84221);
const smo84222 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo84222.setAttribute('id', 'smo84222');
smo84251v0ar.push(smo84222);
const smo84223 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo84223.setAttribute('id', 'smo84223');
smo84251v0ar.push(smo84223);
const smo84224 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo84224.setAttribute('id', 'smo84224');
smo84251v0ar.push(smo84224);
const smo84225 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84225.setAttribute('id', 'smo84225');
smo84251v0ar.push(smo84225);
const smo84226 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84226.setAttribute('id', 'smo84226');
smo84251v0ar.push(smo84226);
const smo84227 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84227.setAttribute('id', 'smo84227');
smo84251v0ar.push(smo84227);
const smo84228 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo84228.setAttribute('id', 'smo84228');
smo84251v0ar.push(smo84228);
const smo84229 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
const smo84230 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["bn/4"],"slash":false}'))
smo84230.setAttribute('id', 'smo84230');
const ggrpsmo84229 = new VF.GraceNoteGroup([smo84230]);
ggrpsmo84229.beamNotes();
smo84229.addModifier(ggrpsmo84229, 0);
smo84229.setAttribute('id', 'smo84229');
smo84251v0ar.push(smo84229);
smo84251v0.addTickables(smo84251v0ar)
fmtsmo842511.joinVoices([smo84251v0]);
const smo84251v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84251v1ar = [];
const smo84231 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo84231.setAttribute('id', 'smo84231');
smo84231.setStyle({ fillStyle: '#aaaaaa7f' });
smo84251v1ar.push(smo84231);
const smo84232 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo84232.setAttribute('id', 'smo84232');
smo84232.setStyle({ fillStyle: "#115511" });
smo84251v1ar.push(smo84232);
const smo84233 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo84233.setAttribute('id', 'smo84233');
smo84233.setStyle({ fillStyle: "#115511" });
smo84251v1ar.push(smo84233);
const smo84234 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1/2dddd","dots":4,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo84234.setAttribute('id', 'smo84234');
smo84234.setStyle({ fillStyle: '#aaaaaa7f' });
smo84234.addModifier(new VF.Dot(), 0);
smo84234.addModifier(new VF.Dot(), 0);
smo84234.addModifier(new VF.Dot(), 0);
smo84234.addModifier(new VF.Dot(), 0);
smo84251v1ar.push(smo84234);
const smo84235 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo84235.setAttribute('id', 'smo84235');
smo84235.setStyle({ fillStyle: '#aaaaaa7f' });
smo84251v1ar.push(smo84235);
smo84251v1.addTickables(smo84251v1ar)
fmtsmo842511.joinVoices([smo84251v1]);
const fmtsmo847481 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo84748v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84748v0ar = [];
const smo84714 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84714.setAttribute('id', 'smo84714');
smo84748v0ar.push(smo84714);
const smo84715 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84715.setAttribute('id', 'smo84715');
smo84715.setStyle({ fillStyle: '#aaaaaa7f' });
smo84715.addModifier(new VF.Dot(), 0);
smo84748v0ar.push(smo84715);
const smo84716 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84716.setAttribute('id', 'smo84716');
smo84748v0ar.push(smo84716);
const smo84717 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo84717.setAttribute('id', 'smo84717');
smo84748v0ar.push(smo84717);
const smo84718 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo84718.setAttribute('id', 'smo84718');
smo84748v0ar.push(smo84718);
const smo84719 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84719.setAttribute('id', 'smo84719');
smo84748v0ar.push(smo84719);
const smo84720 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo84720.setAttribute('id', 'smo84720');
smo84748v0ar.push(smo84720);
const smo84721 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo84721.setAttribute('id', 'smo84721');
smo84748v0ar.push(smo84721);
const smo84722 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84722.setAttribute('id', 'smo84722');
smo84748v0ar.push(smo84722);
const smo84723 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/3/n","bn/3/n","en/4/n"]}'))
smo84723.setAttribute('id', 'smo84723');
const smo847230acc = new VF.Accidental('#');
smo84723.addModifier(smo847230acc, 0);
smo84748v0ar.push(smo84723);
const smo84724 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/3/n","bn/3/n","en/4/n"]}'))
smo84724.setAttribute('id', 'smo84724');
smo84748v0ar.push(smo84724);
const smo84725 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84725.setAttribute('id', 'smo84725');
smo84748v0ar.push(smo84725);
const smo84726 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo84726.setAttribute('id', 'smo84726');
smo84748v0ar.push(smo84726);
const smo84727 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo84727.setAttribute('id', 'smo84727');
smo84748v0ar.push(smo84727);
smo84748v0.addTickables(smo84748v0ar)
fmtsmo847481.joinVoices([smo84748v0]);
const smo84748v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84748v1ar = [];
const smo84728 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo84728.setAttribute('id', 'smo84728');
smo84728.setStyle({ fillStyle: "#115511" });
smo84748v1ar.push(smo84728);
const smo84729 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo84729.setAttribute('id', 'smo84729');
smo84729.setStyle({ fillStyle: "#115511" });
smo84748v1ar.push(smo84729);
const smo84730 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
smo84730.setAttribute('id', 'smo84730');
smo84730.setStyle({ fillStyle: "#115511" });
smo84748v1ar.push(smo84730);
const smo84731 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo84731.setAttribute('id', 'smo84731');
smo84731.setStyle({ fillStyle: "#115511" });
smo84748v1ar.push(smo84731);
const smo84732 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
smo84732.setAttribute('id', 'smo84732');
smo84732.setStyle({ fillStyle: "#115511" });
smo84748v1ar.push(smo84732);
smo84748v1.addTickables(smo84748v1ar)
fmtsmo847481.joinVoices([smo84748v1]);
// create beam groups and tuplets for format grp smo85078 before formatting
const dirsmo86301 = smo84208.getStemDirection();
smo84208.setStemDirection(dirsmo86301);
smo84209.setStemDirection(dirsmo86301);
const smo86301 = new VF.Beam([smo84208,smo84209]);
const dirsmo86302 = smo84210.getStemDirection();
smo84210.setStemDirection(dirsmo86302);
smo84211.setStemDirection(dirsmo86302);
smo84212.setStemDirection(dirsmo86302);
smo84213.setStemDirection(dirsmo86302);
const smo86302 = new VF.Beam([smo84210,smo84211,smo84212,smo84213]);
const dirsmo86303 = smo84214.getStemDirection();
smo84214.setStemDirection(dirsmo86303);
smo84215.setStemDirection(dirsmo86303);
const smo86303 = new VF.Beam([smo84214,smo84215]);
const dirsmo86304 = smo84220.getStemDirection();
smo84220.setStemDirection(dirsmo86304);
smo84221.setStemDirection(dirsmo86304);
const smo86304 = new VF.Beam([smo84220,smo84221]);
const dirsmo86305 = smo84222.getStemDirection();
smo84222.setStemDirection(dirsmo86305);
smo84223.setStemDirection(dirsmo86305);
const smo86305 = new VF.Beam([smo84222,smo84223]);
const dirsmo86306 = smo84225.getStemDirection();
smo84225.setStemDirection(dirsmo86306);
smo84226.setStemDirection(dirsmo86306);
const smo86306 = new VF.Beam([smo84225,smo84226]);
 
// formatting measures in staff group smo85078
fmtsmo842511.format([smo84251v0,smo84251v1,smo84748v0,smo84748v1], 1117);
const stavesmo84251 = new VF.Stave(103, 490, 1174);
stavesmo84251.setAttribute('id', 'stavesmo84251');
stavesmo84251.setBegBarType(1);
stavesmo84251.addClef('treble');
stavesmo84251.setContext(context);
stavesmo84251.draw();
smo84251v0.draw(context, stavesmo84251);
smo84251v1.draw(context, stavesmo84251);
smo86301.setContext(context);
smo86301.draw();
smo86302.setContext(context);
smo86302.draw();
smo86303.setContext(context);
smo86303.draw();
smo86304.setContext(context);
smo86304.draw();
smo86305.setContext(context);
smo86305.draw();
smo86306.setContext(context);
smo86306.draw();
const stavesmo84748 = new VF.Stave(103, 638, 1174);
stavesmo84748.setAttribute('id', 'stavesmo84748');
stavesmo84748.setBegBarType(1);
stavesmo84748.addClef('bass');
stavesmo84748.setContext(context);
stavesmo84748.draw();
smo84748v0.draw(context, stavesmo84748);
smo84748v1.draw(context, stavesmo84748);
const leftsmo85078stavesmo842511 = new VF.StaveConnector(stavesmo84251, stavesmo84748).setType(3);
leftsmo85078stavesmo842511.setContext(context).draw();
const fmtsmo842962 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo84296v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84296v0ar = [];
const smo84252 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo84252.setAttribute('id', 'smo84252');
smo84296v0ar.push(smo84252);
const smo84253 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84253.setAttribute('id', 'smo84253');
smo84296v0ar.push(smo84253);
const smo84254 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84254.setAttribute('id', 'smo84254');
smo84296v0ar.push(smo84254);
const smo84255 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo84255.setAttribute('id', 'smo84255');
smo84296v0ar.push(smo84255);
const smo84256 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo84256.setAttribute('id', 'smo84256');
smo84296v0ar.push(smo84256);
const smo84257 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84257.setAttribute('id', 'smo84257');
smo84296v0ar.push(smo84257);
const smo84258 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84258.setAttribute('id', 'smo84258');
smo84296v0ar.push(smo84258);
const smo84259 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/4/n"]}'))
smo84259.setAttribute('id', 'smo84259');
const smo842590acc = new VF.Accidental('#');
smo84259.addModifier(smo842590acc, 0);
smo84296v0ar.push(smo84259);
const smo84260 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo84260.setAttribute('id', 'smo84260');
smo84296v0ar.push(smo84260);
const smo84261 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84261.setAttribute('id', 'smo84261');
smo84296v0ar.push(smo84261);
const smo84262 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo84262.setAttribute('id', 'smo84262');
smo84296v0ar.push(smo84262);
const smo84263 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84263.setAttribute('id', 'smo84263');
smo84296v0ar.push(smo84263);
const smo84264 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo84264.setAttribute('id', 'smo84264');
smo84296v0ar.push(smo84264);
const smo84265 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/4/n"]}'))
smo84265.setAttribute('id', 'smo84265');
smo84296v0ar.push(smo84265);
const smo84266 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo84266.setAttribute('id', 'smo84266');
smo84296v0ar.push(smo84266);
const smo84267 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84267.setAttribute('id', 'smo84267');
smo84296v0ar.push(smo84267);
const smo84268 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo84268.setAttribute('id', 'smo84268');
smo84296v0ar.push(smo84268);
const smo84269 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84269.setAttribute('id', 'smo84269');
smo84296v0ar.push(smo84269);
const smo84270 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo84270.setAttribute('id', 'smo84270');
smo84296v0ar.push(smo84270);
const smo84271 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/4/n"]}'))
smo84271.setAttribute('id', 'smo84271');
smo84296v0ar.push(smo84271);
const smo84272 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo84272.setAttribute('id', 'smo84272');
smo84296v0ar.push(smo84272);
const smo84273 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84273.setAttribute('id', 'smo84273');
smo84296v0ar.push(smo84273);
const smo84274 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo84274.setAttribute('id', 'smo84274');
smo84296v0ar.push(smo84274);
const smo84275 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo84275.setAttribute('id', 'smo84275');
smo84296v0ar.push(smo84275);
const smo84276 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo84276.setAttribute('id', 'smo84276');
smo84296v0ar.push(smo84276);
const smo84277 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo84277.setAttribute('id', 'smo84277');
smo84296v0ar.push(smo84277);
const smo84278 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo84278.setAttribute('id', 'smo84278');
smo84296v0ar.push(smo84278);
const smo84279 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo84279.setAttribute('id', 'smo84279');
smo84296v0ar.push(smo84279);
const smo84280 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo84280.setAttribute('id', 'smo84280');
smo84296v0ar.push(smo84280);
smo84296v0.addTickables(smo84296v0ar)
fmtsmo842962.joinVoices([smo84296v0]);
const fmtsmo847802 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo84780v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84780v0ar = [];
const smo84749 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84749.setAttribute('id', 'smo84749');
smo84780v0ar.push(smo84749);
const smo84750 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo84750.setAttribute('id', 'smo84750');
smo84780v0ar.push(smo84750);
const smo84751 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo84751.setAttribute('id', 'smo84751');
smo84780v0ar.push(smo84751);
const smo84752 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84752.setAttribute('id', 'smo84752');
smo84780v0ar.push(smo84752);
const smo84753 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo84753.setAttribute('id', 'smo84753');
smo84780v0ar.push(smo84753);
const smo84754 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo84754.setAttribute('id', 'smo84754');
smo84780v0ar.push(smo84754);
const smo84755 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84755.setAttribute('id', 'smo84755');
smo84780v0ar.push(smo84755);
const smo84756 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo84756.setAttribute('id', 'smo84756');
smo84780v0ar.push(smo84756);
const smo84757 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo84757.setAttribute('id', 'smo84757');
smo84780v0ar.push(smo84757);
const smo84758 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84758.setAttribute('id', 'smo84758');
smo84780v0ar.push(smo84758);
const smo84759 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo84759.setAttribute('id', 'smo84759');
smo84780v0ar.push(smo84759);
const smo84760 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo84760.setAttribute('id', 'smo84760');
smo84780v0ar.push(smo84760);
smo84780v0.addTickables(smo84780v0ar)
fmtsmo847802.joinVoices([smo84780v0]);
const smo84780v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84780v1ar = [];
const smo84761 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
smo84761.setAttribute('id', 'smo84761');
smo84761.setStyle({ fillStyle: "#115511" });
smo84780v1ar.push(smo84761);
const smo84762 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
smo84762.setAttribute('id', 'smo84762');
smo84762.setStyle({ fillStyle: "#115511" });
smo84780v1ar.push(smo84762);
const smo84763 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
smo84763.setAttribute('id', 'smo84763');
smo84763.setStyle({ fillStyle: "#115511" });
smo84780v1ar.push(smo84763);
const smo84764 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/1/n"]}'))
smo84764.setAttribute('id', 'smo84764');
smo84764.setStyle({ fillStyle: "#115511" });
smo84780v1ar.push(smo84764);
smo84780v1.addTickables(smo84780v1ar)
fmtsmo847802.joinVoices([smo84780v1]);
// create beam groups and tuplets for format grp smo85078 before formatting
const dirsmo86322 = smo84253.getStemDirection();
smo84253.setStemDirection(dirsmo86322);
smo84254.setStemDirection(dirsmo86322);
const smo86322 = new VF.Beam([smo84253,smo84254]);
const dirsmo86323 = smo84255.getStemDirection();
smo84255.setStemDirection(dirsmo86323);
smo84256.setStemDirection(dirsmo86323);
smo84257.setStemDirection(dirsmo86323);
smo84258.setStemDirection(dirsmo86323);
const smo86323 = new VF.Beam([smo84255,smo84256,smo84257,smo84258]);
const dirsmo86324 = smo84259.getStemDirection();
smo84259.setStemDirection(dirsmo86324);
smo84260.setStemDirection(dirsmo86324);
smo84261.setStemDirection(dirsmo86324);
smo84262.setStemDirection(dirsmo86324);
const smo86324 = new VF.Beam([smo84259,smo84260,smo84261,smo84262]);
const dirsmo86325 = smo84263.getStemDirection();
smo84263.setStemDirection(dirsmo86325);
smo84264.setStemDirection(dirsmo86325);
smo84265.setStemDirection(dirsmo86325);
smo84266.setStemDirection(dirsmo86325);
const smo86325 = new VF.Beam([smo84263,smo84264,smo84265,smo84266]);
const dirsmo86326 = smo84267.getStemDirection();
smo84267.setStemDirection(dirsmo86326);
smo84268.setStemDirection(dirsmo86326);
smo84269.setStemDirection(dirsmo86326);
smo84270.setStemDirection(dirsmo86326);
const smo86326 = new VF.Beam([smo84267,smo84268,smo84269,smo84270]);
const dirsmo86327 = smo84271.getStemDirection();
smo84271.setStemDirection(dirsmo86327);
smo84272.setStemDirection(dirsmo86327);
smo84273.setStemDirection(dirsmo86327);
smo84274.setStemDirection(dirsmo86327);
const smo86327 = new VF.Beam([smo84271,smo84272,smo84273,smo84274]);
const dirsmo86328 = smo84275.getStemDirection();
smo84275.setStemDirection(dirsmo86328);
smo84276.setStemDirection(dirsmo86328);
smo84277.setStemDirection(dirsmo86328);
smo84278.setStemDirection(dirsmo86328);
const smo86328 = new VF.Beam([smo84275,smo84276,smo84277,smo84278]);
 
// formatting measures in staff group smo85078
fmtsmo842962.format([smo84296v0,smo84780v0,smo84780v1], 1117);
const stavesmo84296 = new VF.Stave(103, 768, 1173);
stavesmo84296.setAttribute('id', 'stavesmo84296');
stavesmo84296.setBegBarType(1);
stavesmo84296.addClef('treble');
stavesmo84296.setContext(context);
stavesmo84296.draw();
smo84296v0.draw(context, stavesmo84296);
smo86322.setContext(context);
smo86322.draw();
smo86323.setContext(context);
smo86323.draw();
smo86324.setContext(context);
smo86324.draw();
smo86325.setContext(context);
smo86325.draw();
smo86326.setContext(context);
smo86326.draw();
smo86327.setContext(context);
smo86327.draw();
smo86328.setContext(context);
smo86328.draw();
const stavesmo84780 = new VF.Stave(103, 896, 1173);
stavesmo84780.setAttribute('id', 'stavesmo84780');
stavesmo84780.setBegBarType(1);
stavesmo84780.addClef('bass');
stavesmo84780.setContext(context);
stavesmo84780.draw();
smo84780v0.draw(context, stavesmo84780);
smo84780v1.draw(context, stavesmo84780);
const leftsmo85078stavesmo842961 = new VF.StaveConnector(stavesmo84296, stavesmo84780).setType(3);
leftsmo85078stavesmo842961.setContext(context).draw();
const fmtsmo843323 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo84332v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84332v0ar = [];
const smo84297 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo84297.setAttribute('id', 'smo84297');
smo84332v0ar.push(smo84297);
const smo84298 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo84298.setAttribute('id', 'smo84298');
smo84332v0ar.push(smo84298);
const smo84299 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo84299.setAttribute('id', 'smo84299');
smo84332v0ar.push(smo84299);
const smo84300 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo84300.setAttribute('id', 'smo84300');
const smo843000acc = new VF.Accidental('#');
smo84300.addModifier(smo843000acc, 0);
smo84332v0ar.push(smo84300);
const smo84301 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo84301.setAttribute('id', 'smo84301');
smo84332v0ar.push(smo84301);
const smo84302 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo84302.setAttribute('id', 'smo84302');
const smo843020acc = new VF.Accidental('#');
smo84302.addModifier(smo843020acc, 0);
smo84332v0ar.push(smo84302);
const smo84303 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo84303.setAttribute('id', 'smo84303');
smo84332v0ar.push(smo84303);
const smo84304 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo84304.setAttribute('id', 'smo84304');
smo84332v0ar.push(smo84304);
const smo84305 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo84305.setAttribute('id', 'smo84305');
smo84332v0ar.push(smo84305);
const smo84306 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84306.setAttribute('id', 'smo84306');
smo84332v0ar.push(smo84306);
const smo84307 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84307.setAttribute('id', 'smo84307');
smo84332v0ar.push(smo84307);
const smo84308 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo84308.setAttribute('id', 'smo84308');
smo84332v0ar.push(smo84308);
const smo84309 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo84309.setAttribute('id', 'smo84309');
smo84332v0ar.push(smo84309);
const smo84310 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo84310.setAttribute('id', 'smo84310');
smo84332v0ar.push(smo84310);
const smo84311 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo84311.setAttribute('id', 'smo84311');
smo84332v0ar.push(smo84311);
const smo84312 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo84312.setAttribute('id', 'smo84312');
const smo843120acc = new VF.Accidental('#');
smo84312.addModifier(smo843120acc, 0);
smo84332v0ar.push(smo84312);
const smo84313 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo84313.setAttribute('id', 'smo84313');
smo84332v0ar.push(smo84313);
const smo84314 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo84314.setAttribute('id', 'smo84314');
smo84332v0ar.push(smo84314);
const smo84315 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo84315.setAttribute('id', 'smo84315');
smo84332v0ar.push(smo84315);
const smo84316 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo84316.setAttribute('id', 'smo84316');
smo84332v0ar.push(smo84316);
smo84332v0.addTickables(smo84332v0ar)
fmtsmo843323.joinVoices([smo84332v0]);
const fmtsmo848163 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo84816v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84816v0ar = [];
const smo84781 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84781.setAttribute('id', 'smo84781');
smo84816v0ar.push(smo84781);
const smo84782 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo84782.setAttribute('id', 'smo84782');
smo84816v0ar.push(smo84782);
const smo84783 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo84783.setAttribute('id', 'smo84783');
smo84816v0ar.push(smo84783);
const smo84784 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84784.setAttribute('id', 'smo84784');
smo84816v0ar.push(smo84784);
const smo84785 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo84785.setAttribute('id', 'smo84785');
smo84816v0ar.push(smo84785);
const smo84786 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo84786.setAttribute('id', 'smo84786');
smo84816v0ar.push(smo84786);
const smo84787 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84787.setAttribute('id', 'smo84787');
smo84816v0ar.push(smo84787);
const smo84788 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo84788.setAttribute('id', 'smo84788');
smo84816v0ar.push(smo84788);
const smo84789 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo84789.setAttribute('id', 'smo84789');
smo84816v0ar.push(smo84789);
const smo84790 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84790.setAttribute('id', 'smo84790');
smo84816v0ar.push(smo84790);
const smo84791 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo84791.setAttribute('id', 'smo84791');
const smo847910acc = new VF.Accidental('#');
smo84791.addModifier(smo847910acc, 0);
smo84816v0ar.push(smo84791);
const smo84792 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo84792.setAttribute('id', 'smo84792');
smo84816v0ar.push(smo84792);
const smo84793 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84793.setAttribute('id', 'smo84793');
smo84816v0ar.push(smo84793);
const smo84794 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo84794.setAttribute('id', 'smo84794');
smo84816v0ar.push(smo84794);
const smo84795 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo84795.setAttribute('id', 'smo84795');
smo84816v0ar.push(smo84795);
smo84816v0.addTickables(smo84816v0ar)
fmtsmo848163.joinVoices([smo84816v0]);
const smo84816v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84816v1ar = [];
const smo84796 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo84796.setAttribute('id', 'smo84796');
smo84796.setStyle({ fillStyle: "#115511" });
smo84816v1ar.push(smo84796);
const smo84797 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo84797.setAttribute('id', 'smo84797');
smo84797.setStyle({ fillStyle: "#115511" });
smo84816v1ar.push(smo84797);
const smo84798 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo84798.setAttribute('id', 'smo84798');
smo84798.setStyle({ fillStyle: "#115511" });
smo84816v1ar.push(smo84798);
const smo84799 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["bn/1/n"]}'))
smo84799.setAttribute('id', 'smo84799');
smo84799.setStyle({ fillStyle: "#115511" });
smo84816v1ar.push(smo84799);
const smo84800 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["bn/1/n"]}'))
smo84800.setAttribute('id', 'smo84800');
smo84800.setStyle({ fillStyle: "#115511" });
smo84816v1ar.push(smo84800);
smo84816v1.addTickables(smo84816v1ar)
fmtsmo848163.joinVoices([smo84816v1]);
// create beam groups and tuplets for format grp smo85078 before formatting
const dirsmo86342 = smo84298.getStemDirection();
smo84298.setStemDirection(dirsmo86342);
smo84299.setStemDirection(dirsmo86342);
smo84300.setStemDirection(dirsmo86342);
smo84301.setStemDirection(dirsmo86342);
const smo86342 = new VF.Beam([smo84298,smo84299,smo84300,smo84301]);
const dirsmo86343 = smo84302.getStemDirection();
smo84302.setStemDirection(dirsmo86343);
smo84303.setStemDirection(dirsmo86343);
const smo86343 = new VF.Beam([smo84302,smo84303]);
const dirsmo86344 = smo84306.getStemDirection();
smo84306.setStemDirection(dirsmo86344);
smo84307.setStemDirection(dirsmo86344);
const smo86344 = new VF.Beam([smo84306,smo84307]);
const dirsmo86345 = smo84308.getStemDirection();
smo84308.setStemDirection(dirsmo86345);
smo84309.setStemDirection(dirsmo86345);
smo84310.setStemDirection(dirsmo86345);
smo84311.setStemDirection(dirsmo86345);
const smo86345 = new VF.Beam([smo84308,smo84309,smo84310,smo84311]);
const dirsmo86346 = smo84312.getStemDirection();
smo84312.setStemDirection(dirsmo86346);
smo84313.setStemDirection(dirsmo86346);
const smo86346 = new VF.Beam([smo84312,smo84313]);
 
// formatting measures in staff group smo85078
fmtsmo843323.format([smo84332v0,smo84816v0,smo84816v1], 1117);
const stavesmo84332 = new VF.Stave(103, 1035, 1173);
stavesmo84332.setAttribute('id', 'stavesmo84332');
stavesmo84332.setBegBarType(1);
stavesmo84332.addClef('treble');
stavesmo84332.setContext(context);
stavesmo84332.draw();
smo84332v0.draw(context, stavesmo84332);
smo86342.setContext(context);
smo86342.draw();
smo86343.setContext(context);
smo86343.draw();
smo86344.setContext(context);
smo86344.draw();
smo86345.setContext(context);
smo86345.draw();
smo86346.setContext(context);
smo86346.draw();
const stavesmo84816 = new VF.Stave(103, 1164, 1173);
stavesmo84816.setAttribute('id', 'stavesmo84816');
stavesmo84816.setBegBarType(1);
stavesmo84816.addClef('bass');
stavesmo84816.setContext(context);
stavesmo84816.draw();
smo84816v0.draw(context, stavesmo84816);
smo84816v1.draw(context, stavesmo84816);
const leftsmo85078stavesmo843321 = new VF.StaveConnector(stavesmo84332, stavesmo84816).setType(3);
leftsmo85078stavesmo843321.setContext(context).draw();
const fmtsmo843764 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo84376v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84376v0ar = [];
const smo84333 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo84333.setAttribute('id', 'smo84333');
smo84376v0ar.push(smo84333);
const smo84334 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo84334.setAttribute('id', 'smo84334');
smo84376v0ar.push(smo84334);
const smo84335 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo84335.setAttribute('id', 'smo84335');
const smo843350acc = new VF.Accidental('#');
smo84335.addModifier(smo843350acc, 0);
smo84376v0ar.push(smo84335);
const smo84336 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo84336.setAttribute('id', 'smo84336');
smo84376v0ar.push(smo84336);
const smo84337 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo84337.setAttribute('id', 'smo84337');
const smo843370acc = new VF.Accidental('#');
smo84337.addModifier(smo843370acc, 0);
smo84376v0ar.push(smo84337);
const smo84338 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo84338.setAttribute('id', 'smo84338');
smo84376v0ar.push(smo84338);
const smo84339 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo84339.setAttribute('id', 'smo84339');
smo84376v0ar.push(smo84339);
const smo84340 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo84340.setAttribute('id', 'smo84340');
smo84376v0ar.push(smo84340);
const smo84341 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84341.setAttribute('id', 'smo84341');
smo84376v0ar.push(smo84341);
const smo84342 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84342.setAttribute('id', 'smo84342');
smo84376v0ar.push(smo84342);
const smo84343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo84343.setAttribute('id', 'smo84343');
smo84376v0ar.push(smo84343);
const smo84344 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo84344.setAttribute('id', 'smo84344');
smo84376v0ar.push(smo84344);
const smo84345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo84345.setAttribute('id', 'smo84345');
smo84376v0ar.push(smo84345);
const smo84346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo84346.setAttribute('id', 'smo84346');
smo84376v0ar.push(smo84346);
const smo84347 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo84347.setAttribute('id', 'smo84347');
const smo843470acc = new VF.Accidental('#');
smo84347.addModifier(smo843470acc, 0);
smo84376v0ar.push(smo84347);
const smo84348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo84348.setAttribute('id', 'smo84348');
smo84376v0ar.push(smo84348);
const smo84349 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo84349.setAttribute('id', 'smo84349');
smo84376v0ar.push(smo84349);
const smo84350 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo84350.setAttribute('id', 'smo84350');
smo84376v0ar.push(smo84350);
const smo84351 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
const smo84352 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["f#/4"],"slash":false}'))
smo84352.setAttribute('id', 'smo84352');
const acc0smo84352 = new VF.Accidental('#');
smo84352.addModifier(acc0smo84352, 0)
const ggrpsmo84351 = new VF.GraceNoteGroup([smo84352]);
ggrpsmo84351.beamNotes();
smo84351.addModifier(ggrpsmo84351, 0);
smo84351.setAttribute('id', 'smo84351');
const smo843510acc = new VF.Accidental('n');
smo84351.addModifier(smo843510acc, 0);
smo84376v0ar.push(smo84351);
const smo84353 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo84353.setAttribute('id', 'smo84353');
smo84376v0ar.push(smo84353);
const smo84354 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo84354.setAttribute('id', 'smo84354');
smo84376v0ar.push(smo84354);
const smo84355 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo84355.setAttribute('id', 'smo84355');
smo84376v0ar.push(smo84355);
const smo84356 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo84356.setAttribute('id', 'smo84356');
const smo843560acc = new VF.Accidental('#');
smo84356.addModifier(smo843560acc, 0);
smo84376v0ar.push(smo84356);
const smo84357 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84357.setAttribute('id', 'smo84357');
smo84376v0ar.push(smo84357);
const smo84358 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo84358.setAttribute('id', 'smo84358');
smo84376v0ar.push(smo84358);
const smo84359 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo84359.setAttribute('id', 'smo84359');
smo84376v0ar.push(smo84359);
const smo84360 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo84360.setAttribute('id', 'smo84360');
smo84376v0ar.push(smo84360);
smo84376v0.addTickables(smo84376v0ar)
fmtsmo843764.joinVoices([smo84376v0]);
const fmtsmo848524 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo84852v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84852v0ar = [];
const smo84817 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84817.setAttribute('id', 'smo84817');
smo84852v0ar.push(smo84817);
const smo84818 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo84818.setAttribute('id', 'smo84818');
smo84852v0ar.push(smo84818);
const smo84819 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo84819.setAttribute('id', 'smo84819');
smo84852v0ar.push(smo84819);
const smo84820 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84820.setAttribute('id', 'smo84820');
smo84852v0ar.push(smo84820);
const smo84821 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo84821.setAttribute('id', 'smo84821');
smo84852v0ar.push(smo84821);
const smo84822 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo84822.setAttribute('id', 'smo84822');
smo84852v0ar.push(smo84822);
const smo84823 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84823.setAttribute('id', 'smo84823');
smo84852v0ar.push(smo84823);
const smo84824 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo84824.setAttribute('id', 'smo84824');
const smo848240acc = new VF.Accidental('#');
smo84824.addModifier(smo848240acc, 0);
smo84852v0ar.push(smo84824);
const smo84825 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo84825.setAttribute('id', 'smo84825');
smo84852v0ar.push(smo84825);
const smo84826 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84826.setAttribute('id', 'smo84826');
smo84852v0ar.push(smo84826);
const smo84827 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","c#/4/n","f#/4/n"]}'))
smo84827.setAttribute('id', 'smo84827');
const smo848271acc = new VF.Accidental('#');
smo84827.addModifier(smo848271acc, 1);
const smo848272acc = new VF.Accidental('#');
smo84827.addModifier(smo848272acc, 2);
smo84852v0ar.push(smo84827);
const smo84828 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","c#/4/n","f#/4/n"]}'))
smo84828.setAttribute('id', 'smo84828');
smo84852v0ar.push(smo84828);
const smo84829 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84829.setAttribute('id', 'smo84829');
smo84852v0ar.push(smo84829);
const smo84830 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo84830.setAttribute('id', 'smo84830');
smo84852v0ar.push(smo84830);
const smo84831 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo84831.setAttribute('id', 'smo84831');
smo84852v0ar.push(smo84831);
smo84852v0.addTickables(smo84852v0ar)
fmtsmo848524.joinVoices([smo84852v0]);
const smo84852v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84852v1ar = [];
const smo84832 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo84832.setAttribute('id', 'smo84832');
smo84832.setStyle({ fillStyle: "#115511" });
smo84852v1ar.push(smo84832);
const smo84833 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo84833.setAttribute('id', 'smo84833');
smo84833.setStyle({ fillStyle: "#115511" });
smo84852v1ar.push(smo84833);
const smo84834 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["bn/1/n"]}'))
smo84834.setAttribute('id', 'smo84834');
smo84834.setStyle({ fillStyle: "#115511" });
smo84852v1ar.push(smo84834);
const smo84835 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["f#/1/n"]}'))
smo84835.setAttribute('id', 'smo84835');
smo84835.setStyle({ fillStyle: "#115511" });
const smo848350acc = new VF.Accidental('#');
smo84835.addModifier(smo848350acc, 0);
smo84852v1ar.push(smo84835);
const smo84836 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo84836.setAttribute('id', 'smo84836');
smo84836.setStyle({ fillStyle: "#115511" });
smo84852v1ar.push(smo84836);
smo84852v1.addTickables(smo84852v1ar)
fmtsmo848524.joinVoices([smo84852v1]);
// create beam groups and tuplets for format grp smo85078 before formatting
const dirsmo86362 = smo84333.getStemDirection();
smo84333.setStemDirection(dirsmo86362);
smo84334.setStemDirection(dirsmo86362);
smo84335.setStemDirection(dirsmo86362);
smo84336.setStemDirection(dirsmo86362);
const smo86362 = new VF.Beam([smo84333,smo84334,smo84335,smo84336]);
const dirsmo86363 = smo84337.getStemDirection();
smo84337.setStemDirection(dirsmo86363);
smo84338.setStemDirection(dirsmo86363);
const smo86363 = new VF.Beam([smo84337,smo84338]);
const dirsmo86364 = smo84341.getStemDirection();
smo84341.setStemDirection(dirsmo86364);
smo84342.setStemDirection(dirsmo86364);
const smo86364 = new VF.Beam([smo84341,smo84342]);
const dirsmo86365 = smo84343.getStemDirection();
smo84343.setStemDirection(dirsmo86365);
smo84344.setStemDirection(dirsmo86365);
smo84345.setStemDirection(dirsmo86365);
smo84346.setStemDirection(dirsmo86365);
const smo86365 = new VF.Beam([smo84343,smo84344,smo84345,smo84346]);
const dirsmo86366 = smo84347.getStemDirection();
smo84347.setStemDirection(dirsmo86366);
smo84348.setStemDirection(dirsmo86366);
const smo86366 = new VF.Beam([smo84347,smo84348]);
const dirsmo86367 = smo84353.getStemDirection();
smo84353.setStemDirection(dirsmo86367);
smo84354.setStemDirection(dirsmo86367);
smo84355.setStemDirection(dirsmo86367);
smo84356.setStemDirection(dirsmo86367);
const smo86367 = new VF.Beam([smo84353,smo84354,smo84355,smo84356]);
const dirsmo86368 = smo84357.getStemDirection();
smo84357.setStemDirection(dirsmo86368);
smo84358.setStemDirection(dirsmo86368);
smo84359.setStemDirection(dirsmo86368);
smo84360.setStemDirection(dirsmo86368);
const smo86368 = new VF.Beam([smo84357,smo84358,smo84359,smo84360]);
 
// formatting measures in staff group smo85078
fmtsmo843764.format([smo84376v0,smo84852v0,smo84852v1], 1117);
const stavesmo84376 = new VF.Stave(103, 1298, 1174);
stavesmo84376.setAttribute('id', 'stavesmo84376');
stavesmo84376.setBegBarType(1);
stavesmo84376.addClef('treble');
stavesmo84376.setContext(context);
stavesmo84376.draw();
smo84376v0.draw(context, stavesmo84376);
smo86362.setContext(context);
smo86362.draw();
smo86363.setContext(context);
smo86363.draw();
smo86364.setContext(context);
smo86364.draw();
smo86365.setContext(context);
smo86365.draw();
smo86366.setContext(context);
smo86366.draw();
smo86367.setContext(context);
smo86367.draw();
smo86368.setContext(context);
smo86368.draw();
const stavesmo84852 = new VF.Stave(103, 1436, 1174);
stavesmo84852.setAttribute('id', 'stavesmo84852');
stavesmo84852.setBegBarType(1);
stavesmo84852.addClef('bass');
stavesmo84852.setContext(context);
stavesmo84852.draw();
smo84852v0.draw(context, stavesmo84852);
smo84852v1.draw(context, stavesmo84852);
const leftsmo85078stavesmo843761 = new VF.StaveConnector(stavesmo84376, stavesmo84852).setType(3);
leftsmo85078stavesmo843761.setContext(context).draw();
const fmtsmo844205 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo84420v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84420v0ar = [];
const smo84377 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84377.setAttribute('id', 'smo84377');
smo84420v0ar.push(smo84377);
const smo84378 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo84378.setAttribute('id', 'smo84378');
const smo843780acc = new VF.Accidental('#');
smo84378.addModifier(smo843780acc, 0);
smo84420v0ar.push(smo84378);
const smo84379 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo84379.setAttribute('id', 'smo84379');
smo84420v0ar.push(smo84379);
const smo84380 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo84380.setAttribute('id', 'smo84380');
const smo843800acc = new VF.Accidental('#');
smo84380.addModifier(smo843800acc, 0);
smo84420v0ar.push(smo84380);
const smo84381 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo84381.setAttribute('id', 'smo84381');
smo84420v0ar.push(smo84381);
const smo84382 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo84382.setAttribute('id', 'smo84382');
smo84420v0ar.push(smo84382);
const smo84383 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo84383.setAttribute('id', 'smo84383');
smo84420v0ar.push(smo84383);
const smo84384 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo84384.setAttribute('id', 'smo84384');
smo84420v0ar.push(smo84384);
const smo84385 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84385.setAttribute('id', 'smo84385');
smo84420v0ar.push(smo84385);
const smo84386 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo84386.setAttribute('id', 'smo84386');
const smo843860acc = new VF.Accidental('#');
smo84386.addModifier(smo843860acc, 0);
smo84420v0ar.push(smo84386);
const smo84387 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo84387.setAttribute('id', 'smo84387');
smo84420v0ar.push(smo84387);
const smo84388 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo84388.setAttribute('id', 'smo84388');
smo84420v0ar.push(smo84388);
const smo84389 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84389.setAttribute('id', 'smo84389');
smo84420v0ar.push(smo84389);
const smo84390 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo84390.setAttribute('id', 'smo84390');
smo84420v0ar.push(smo84390);
const smo84391 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo84391.setAttribute('id', 'smo84391');
smo84420v0ar.push(smo84391);
const smo84392 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo84392.setAttribute('id', 'smo84392');
smo84420v0ar.push(smo84392);
const smo84393 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo84393.setAttribute('id', 'smo84393');
smo84420v0ar.push(smo84393);
const smo84394 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo84394.setAttribute('id', 'smo84394');
smo84420v0ar.push(smo84394);
const smo84395 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo84395.setAttribute('id', 'smo84395');
smo84420v0ar.push(smo84395);
const smo84396 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo84396.setAttribute('id', 'smo84396');
smo84420v0ar.push(smo84396);
const smo84397 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84397.setAttribute('id', 'smo84397');
smo84420v0ar.push(smo84397);
const smo84398 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo84398.setAttribute('id', 'smo84398');
smo84420v0ar.push(smo84398);
const smo84399 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo84399.setAttribute('id', 'smo84399');
smo84420v0ar.push(smo84399);
const smo84400 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo84400.setAttribute('id', 'smo84400');
smo84420v0ar.push(smo84400);
const smo84401 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo84401.setAttribute('id', 'smo84401');
smo84420v0ar.push(smo84401);
const smo84402 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo84402.setAttribute('id', 'smo84402');
smo84420v0ar.push(smo84402);
const smo84403 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo84403.setAttribute('id', 'smo84403');
smo84420v0ar.push(smo84403);
const smo84404 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo84404.setAttribute('id', 'smo84404');
smo84420v0ar.push(smo84404);
smo84420v0.addTickables(smo84420v0ar)
fmtsmo844205.joinVoices([smo84420v0]);
const fmtsmo848845 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo84884v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84884v0ar = [];
const smo84853 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84853.setAttribute('id', 'smo84853');
smo84884v0ar.push(smo84853);
const smo84854 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo84854.setAttribute('id', 'smo84854');
smo84884v0ar.push(smo84854);
const smo84855 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo84855.setAttribute('id', 'smo84855');
smo84884v0ar.push(smo84855);
const smo84856 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84856.setAttribute('id', 'smo84856');
smo84884v0ar.push(smo84856);
const smo84857 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo84857.setAttribute('id', 'smo84857');
smo84884v0ar.push(smo84857);
const smo84858 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo84858.setAttribute('id', 'smo84858');
smo84884v0ar.push(smo84858);
const smo84859 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84859.setAttribute('id', 'smo84859');
smo84884v0ar.push(smo84859);
const smo84860 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo84860.setAttribute('id', 'smo84860');
smo84884v0ar.push(smo84860);
const smo84861 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo84861.setAttribute('id', 'smo84861');
smo84884v0ar.push(smo84861);
const smo84862 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84862.setAttribute('id', 'smo84862');
smo84884v0ar.push(smo84862);
const smo84863 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo84863.setAttribute('id', 'smo84863');
const smo848630acc = new VF.Accidental('#');
smo84863.addModifier(smo848630acc, 0);
smo84884v0ar.push(smo84863);
const smo84864 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo84864.setAttribute('id', 'smo84864');
smo84884v0ar.push(smo84864);
smo84884v0.addTickables(smo84884v0ar)
fmtsmo848845.joinVoices([smo84884v0]);
const smo84884v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84884v1ar = [];
const smo84865 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo84865.setAttribute('id', 'smo84865');
smo84865.setStyle({ fillStyle: "#115511" });
smo84884v1ar.push(smo84865);
const smo84866 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo84866.setAttribute('id', 'smo84866');
smo84866.setStyle({ fillStyle: "#115511" });
smo84884v1ar.push(smo84866);
const smo84867 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo84867.setAttribute('id', 'smo84867');
smo84867.setStyle({ fillStyle: "#115511" });
smo84884v1ar.push(smo84867);
const smo84868 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["bn/1/n"]}'))
smo84868.setAttribute('id', 'smo84868');
smo84868.setStyle({ fillStyle: "#115511" });
smo84884v1ar.push(smo84868);
smo84884v1.addTickables(smo84884v1ar)
fmtsmo848845.joinVoices([smo84884v1]);
// create beam groups and tuplets for format grp smo85078 before formatting
const dirsmo86384 = smo84377.getStemDirection();
smo84377.setStemDirection(dirsmo86384);
smo84378.setStemDirection(dirsmo86384);
smo84379.setStemDirection(dirsmo86384);
smo84380.setStemDirection(dirsmo86384);
const smo86384 = new VF.Beam([smo84377,smo84378,smo84379,smo84380]);
const dirsmo86385 = smo84381.getStemDirection();
smo84381.setStemDirection(dirsmo86385);
smo84382.setStemDirection(dirsmo86385);
smo84383.setStemDirection(dirsmo86385);
smo84384.setStemDirection(dirsmo86385);
const smo86385 = new VF.Beam([smo84381,smo84382,smo84383,smo84384]);
const dirsmo86386 = smo84385.getStemDirection();
smo84385.setStemDirection(dirsmo86386);
smo84386.setStemDirection(dirsmo86386);
smo84387.setStemDirection(dirsmo86386);
smo84388.setStemDirection(dirsmo86386);
const smo86386 = new VF.Beam([smo84385,smo84386,smo84387,smo84388]);
const dirsmo86387 = smo84389.getStemDirection();
smo84389.setStemDirection(dirsmo86387);
smo84390.setStemDirection(dirsmo86387);
smo84391.setStemDirection(dirsmo86387);
smo84392.setStemDirection(dirsmo86387);
const smo86387 = new VF.Beam([smo84389,smo84390,smo84391,smo84392]);
const dirsmo86388 = smo84393.getStemDirection();
smo84393.setStemDirection(dirsmo86388);
smo84394.setStemDirection(dirsmo86388);
smo84395.setStemDirection(dirsmo86388);
smo84396.setStemDirection(dirsmo86388);
const smo86388 = new VF.Beam([smo84393,smo84394,smo84395,smo84396]);
const dirsmo86389 = smo84397.getStemDirection();
smo84397.setStemDirection(dirsmo86389);
smo84398.setStemDirection(dirsmo86389);
smo84399.setStemDirection(dirsmo86389);
smo84400.setStemDirection(dirsmo86389);
const smo86389 = new VF.Beam([smo84397,smo84398,smo84399,smo84400]);
const dirsmo86390 = smo84401.getStemDirection();
smo84401.setStemDirection(dirsmo86390);
smo84402.setStemDirection(dirsmo86390);
const smo86390 = new VF.Beam([smo84401,smo84402]);
 
// formatting measures in staff group smo85078
fmtsmo844205.format([smo84420v0,smo84884v0,smo84884v1], 1117);
const stavesmo84420 = new VF.Stave(103, 1621, 1174);
stavesmo84420.setAttribute('id', 'stavesmo84420');
stavesmo84420.setBegBarType(1);
stavesmo84420.addClef('treble');
stavesmo84420.setContext(context);
stavesmo84420.draw();
smo84420v0.draw(context, stavesmo84420);
smo86384.setContext(context);
smo86384.draw();
smo86385.setContext(context);
smo86385.draw();
smo86386.setContext(context);
smo86386.draw();
smo86387.setContext(context);
smo86387.draw();
smo86388.setContext(context);
smo86388.draw();
smo86389.setContext(context);
smo86389.draw();
smo86390.setContext(context);
smo86390.draw();
const stavesmo84884 = new VF.Stave(103, 1734, 1174);
stavesmo84884.setAttribute('id', 'stavesmo84884');
stavesmo84884.setBegBarType(1);
stavesmo84884.addClef('bass');
stavesmo84884.setContext(context);
stavesmo84884.draw();
smo84884v0.draw(context, stavesmo84884);
smo84884v1.draw(context, stavesmo84884);
const leftsmo85078stavesmo844201 = new VF.StaveConnector(stavesmo84420, stavesmo84884).setType(3);
leftsmo85078stavesmo844201.setContext(context).draw();
// modifier from 0-0-0-5 to 0-0-0-6
const smo86582 = new VF.StaveTie({ first_note: smo84160, last_note: smo84161, 
          firstNote: smo84160, lastNote: smo84161, first_indices: [0], last_indices: [0]});
smo86582.setContext(context).draw();
// modifier from 0-0-0-15 to 0-0-0-16
const smo86583 = new VF.StaveTie({ first_note: smo84170, last_note: smo84171, 
          firstNote: smo84170, lastNote: smo84171, first_indices: [0], last_indices: [0]});
smo86583.setContext(context).draw();
// modifier from 0-0-0-24 to 0-0-0-25
const smo86584 = new VF.StaveTie({ first_note: smo84179, last_note: smo84180, 
          firstNote: smo84179, lastNote: smo84180, first_indices: [0], last_indices: [0]});
smo86584.setContext(context).draw();
// modifier from 0-1-0-8 to 0-1-0-9
const smo86585 = new VF.StaveTie({ first_note: smo84215, last_note: smo84216, 
          firstNote: smo84215, lastNote: smo84216, first_indices: [0], last_indices: [0]});
smo86585.setContext(context).draw();
// modifier from 0-1-0-15 to 0-1-0-16
const smo86586 = new VF.StaveTie({ first_note: smo84223, last_note: smo84224, 
          firstNote: smo84223, lastNote: smo84224, first_indices: [0], last_indices: [0]});
smo86586.setContext(context).draw();
// modifier from 0-1-0-18 to 0-1-0-19
const smo86587 = new VF.StaveTie({ first_note: smo84226, last_note: smo84227, 
          firstNote: smo84226, lastNote: smo84227, first_indices: [0], last_indices: [0]});
smo86587.setContext(context).draw();
// modifier from 0-1-0-21 to 0-2-0-0
const smo86588 = new VF.StaveTie({ first_note: smo84229, last_note: null, 
          firstNote: smo84229, lastNote: null, first_indices: [0], last_indices: [0]});
smo86588.setContext(context).draw();
// modifier from 0-1-0-21 to 0-2-0-0
const smo86589 = new VF.StaveTie({ first_note: null, last_note: smo84252, 
          firstNote: null, lastNote: smo84252, first_indices: [0], last_indices: [0]});
smo86589.setContext(context).draw();
// modifier from 0-2-0-26 to 0-2-0-27
const smo86590 = new VF.StaveTie({ first_note: smo84278, last_note: smo84279, 
          firstNote: smo84278, lastNote: smo84279, first_indices: [0], last_indices: [0]});
smo86590.setContext(context).draw();
// modifier from 0-3-0-6 to 0-3-0-7
const smo86591 = new VF.StaveTie({ first_note: smo84303, last_note: smo84304, 
          firstNote: smo84303, lastNote: smo84304, first_indices: [0], last_indices: [0]});
smo86591.setContext(context).draw();
// modifier from 0-3-0-16 to 0-3-0-17
const smo86592 = new VF.StaveTie({ first_note: smo84313, last_note: smo84314, 
          firstNote: smo84313, lastNote: smo84314, first_indices: [0], last_indices: [0]});
smo86592.setContext(context).draw();
// modifier from 0-4-0-5 to 0-4-0-6
const smo86593 = new VF.StaveTie({ first_note: smo84338, last_note: smo84339, 
          firstNote: smo84338, lastNote: smo84339, first_indices: [0], last_indices: [0]});
smo86593.setContext(context).draw();
// modifier from 0-4-0-15 to 0-4-0-16
const smo86594 = new VF.StaveTie({ first_note: smo84348, last_note: smo84349, 
          firstNote: smo84348, lastNote: smo84349, first_indices: [0], last_indices: [0]});
smo86594.setContext(context).draw();
// modifier from 0-5-0-25 to 0-5-0-26
const smo86595 = new VF.StaveTie({ first_note: smo84402, last_note: smo84403, 
          firstNote: smo84402, lastNote: smo84403, first_indices: [0], last_indices: [0]});
smo86595.setContext(context).draw();
// modifier from 0-4-0-19 to 0-5-0-26
const smo86596 = new VF.Curve(smo84353, null, JSON.parse('{"thickness":2,"x_shift":-5,"y_shift":20,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":2,"position_end":1}'));
smo86596.setContext(context).draw();
// modifier from 0-4-0-19 to 0-5-0-26
const smo86597 = new VF.Curve(null, smo84403, JSON.parse('{"thickness":2,"x_shift":-5,"y_shift":20,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":2,"position_end":1}'));
smo86597.setContext(context).draw();
// modifier from 0-3-0-1 to 0-3-0-7
const smo86598 = new VF.Curve(smo84298, smo84304, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo86598.setContext(context).draw();
// modifier from 0-0-0-0 to 0-0-0-6
const smo86599 = new VF.Curve(smo84154, smo84161, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":67,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":1,"position_end":1}'));
smo86599.setContext(context).draw();
// modifier from 0-0-0-8 to 0-0-0-16
const smo86600 = new VF.Curve(smo84163, smo84171, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":35,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":2,"position_end":2}'));
smo86600.setContext(context).draw();
// modifier from 0-0-0-19 to 0-0-0-25
const smo86601 = new VF.Curve(smo84174, smo84180, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":13,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":2,"position_end":2}'));
smo86601.setContext(context).draw();
// modifier from 0-1-0-1 to 0-1-0-9
const smo86602 = new VF.Curve(smo84208, smo84216, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":16,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":2,"position_end":2}'));
smo86602.setContext(context).draw();
// modifier from 0-2-0-1 to 0-2-0-27
const smo86603 = new VF.Curve(smo84253, smo84279, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":5,"cps":[{"x":0,"y":100},{"x":0,"y":80}],"invert":true,"position":1,"position_end":1}'));
smo86603.setContext(context).draw();
// modifier from 0-1-0-11 to 0-1-0-19
const smo86604 = new VF.Curve(smo84218, smo84227, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":5,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":2,"position_end":2}'));
smo86604.setContext(context).draw();
// modifier from 0-3-0-9 to 0-3-0-17
const smo86605 = new VF.Curve(smo84306, smo84314, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":57},{"x":0,"y":45}],"invert":true,"position":1,"position_end":2}'));
smo86605.setContext(context).draw();
// modifier from 0-4-0-0 to 0-4-0-6
const smo86606 = new VF.Curve(smo84333, smo84339, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo86606.setContext(context).draw();
// modifier from 0-4-0-8 to 0-4-0-16
const smo86607 = new VF.Curve(smo84341, smo84349, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":15,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo86607.setContext(context).draw();
}