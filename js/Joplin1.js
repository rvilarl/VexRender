function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = Vex.Flow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
//
// create the musical objects
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1632');
svg.setAttributeNS('', 'height', '2112');
svg.setAttributeNS('', 'viewBox', '0 0 1989 2574');
VF.setMusicFont("Bravura","Gonville","Custom");
const noteHash = {};
const voiceHash = {}
const fmtsmo2460750 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo246075v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246075v0ar = [];
const smo246047 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/6/n"]}'))
noteHash['smo246047'] = smo246047;
smo246047.setAttribute('id', 'smo246047');
smo246075v0ar.push(smo246047);
const smo246049 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/6/n"]}'))
noteHash['smo246049'] = smo246049;
smo246049.setAttribute('id', 'smo246049');
smo246075v0ar.push(smo246049);
const smo246050 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/6/n"]}'))
noteHash['smo246050'] = smo246050;
smo246050.setAttribute('id', 'smo246050');
smo246075v0ar.push(smo246050);
const smo246051 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo246051'] = smo246051;
smo246051.setAttribute('id', 'smo246051');
smo246075v0ar.push(smo246051);
const smo246052 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo246052'] = smo246052;
smo246052.setAttribute('id', 'smo246052');
smo246075v0ar.push(smo246052);
const smo246053 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
noteHash['smo246053'] = smo246053;
smo246053.setAttribute('id', 'smo246053');
smo246075v0ar.push(smo246053);
const smo246054 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo246054'] = smo246054;
smo246054.setAttribute('id', 'smo246054');
smo246075v0ar.push(smo246054);
smo246075v0.addTickables(smo246075v0ar)
fmtsmo2460750.joinVoices([smo246075v0]);
const smo246075v1 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246075v1ar = [];
const smo246055 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo246055'] = smo246055;
smo246055.setAttribute('id', 'smo246055');
smo246055.setStyle({ fillStyle: "#115511" });
smo246075v1ar.push(smo246055);
const smo246056 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo246056'] = smo246056;
smo246056.setAttribute('id', 'smo246056');
smo246056.setStyle({ fillStyle: "#115511" });
smo246075v1ar.push(smo246056);
const smo246057 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246057'] = smo246057;
smo246057.setAttribute('id', 'smo246057');
smo246057.setStyle({ fillStyle: "#115511" });
smo246075v1ar.push(smo246057);
const smo246058 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo246058'] = smo246058;
smo246058.setAttribute('id', 'smo246058');
smo246058.setStyle({ fillStyle: "#115511" });
smo246075v1ar.push(smo246058);
const smo246059 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo246059'] = smo246059;
smo246059.setAttribute('id', 'smo246059');
smo246059.setStyle({ fillStyle: "#115511" });
smo246075v1ar.push(smo246059);
const smo246060 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo246060'] = smo246060;
smo246060.setAttribute('id', 'smo246060');
smo246060.setStyle({ fillStyle: "#115511" });
smo246075v1ar.push(smo246060);
const smo246061 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo246061'] = smo246061;
smo246061.setAttribute('id', 'smo246061');
smo246061.setStyle({ fillStyle: "#115511" });
smo246075v1ar.push(smo246061);
smo246075v1.addTickables(smo246075v1ar)
fmtsmo2460750.joinVoices([smo246075v1]);
const fmtsmo2489520 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo248952v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248952v0ar = [];
const smo248938 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo248938'] = smo248938;
smo248938.setAttribute('id', 'smo248938');
smo248952v0ar.push(smo248938);
smo248952v0.addTickables(smo248952v0ar)
fmtsmo2489520.joinVoices([smo248952v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo250973 = smo246047.getStemDirection();
smo246047.setStemDirection(dirsmo250973);
smo246049.setStemDirection(dirsmo250973);
smo246050.setStemDirection(dirsmo250973);
smo246051.setStemDirection(dirsmo250973);
const smo250973 = new VF.Beam([smo246047,smo246049,smo246050,smo246051]);
const dirsmo250974 = smo246052.getStemDirection();
smo246052.setStemDirection(dirsmo250974);
smo246053.setStemDirection(dirsmo250974);
smo246054.setStemDirection(dirsmo250974);
const smo250974 = new VF.Beam([smo246052,smo246053,smo246054]);
const dirsmo250975 = smo246055.getStemDirection();
smo246055.setStemDirection(dirsmo250975);
smo246056.setStemDirection(dirsmo250975);
smo246057.setStemDirection(dirsmo250975);
smo246058.setStemDirection(dirsmo250975);
const smo250975 = new VF.Beam([smo246055,smo246056,smo246057,smo246058]);
const dirsmo250976 = smo246059.getStemDirection();
smo246059.setStemDirection(dirsmo250976);
smo246060.setStemDirection(dirsmo250976);
smo246061.setStemDirection(dirsmo250976);
const smo250976 = new VF.Beam([smo246059,smo246060,smo246061]);
 
// formatting measures in staff group smo245304
fmtsmo2460750.format([smo246075v0,smo246075v1,smo248952v0], 213);
const stavesmo246075 = new VF.Stave(73, 406, 295);
stavesmo246075.setAttribute('id', 'stavesmo246075');
stavesmo246075.setBegBarType(1);
stavesmo246075.setTempo(JSON.parse('{"duration":"4","dots":0,"bpm":72}'), -1 * 55);
stavesmo246075.addClef('treble');
stavesmo246075.addTimeSignature('2/4');
stavesmo246075.setContext(context);
stavesmo246075.draw();
smo246075v0.draw(context, stavesmo246075);
smo246075v1.draw(context, stavesmo246075);
smo250973.setContext(context);
smo250973.draw();
smo250974.setContext(context);
smo250974.draw();
smo250975.setContext(context);
smo250975.draw();
smo250976.setContext(context);
smo250976.draw();
const stavesmo248952 = new VF.Stave(73, 545, 295);
stavesmo248952.setAttribute('id', 'stavesmo248952');
stavesmo248952.setBegBarType(1);
stavesmo248952.addClef('bass');
stavesmo248952.addTimeSignature('2/4');
stavesmo248952.setContext(context);
stavesmo248952.draw();
smo248952v0.draw(context, stavesmo248952);
const leftsmo245304stavesmo2460751 = new VF.StaveConnector(stavesmo246075, stavesmo248952).setType(3);
leftsmo245304stavesmo2460751.setContext(context).draw();
const fmtsmo2460961 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo246096v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246096v0ar = [];
const smo246076 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo246076'] = smo246076;
smo246076.setAttribute('id', 'smo246076');
smo246096v0ar.push(smo246076);
const smo246077 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo246077'] = smo246077;
smo246077.setAttribute('id', 'smo246077');
smo246096v0ar.push(smo246077);
const smo246078 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246078'] = smo246078;
smo246078.setAttribute('id', 'smo246078');
smo246096v0ar.push(smo246078);
const smo246079 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo246079'] = smo246079;
smo246079.setAttribute('id', 'smo246079');
smo246096v0ar.push(smo246079);
const smo246080 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo246080'] = smo246080;
smo246080.setAttribute('id', 'smo246080');
smo246096v0ar.push(smo246080);
const smo246081 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo246081'] = smo246081;
smo246081.setAttribute('id', 'smo246081');
smo246096v0ar.push(smo246081);
const smo246082 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo246082'] = smo246082;
smo246082.setAttribute('id', 'smo246082');
smo246096v0ar.push(smo246082);
smo246096v0.addTickables(smo246096v0ar)
fmtsmo2460961.joinVoices([smo246096v0]);
const fmtsmo2489731 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo248973v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248973v0ar = [];
const smo248953 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo248953'] = smo248953;
smo248953.setAttribute('id', 'smo248953');
smo248973v0ar.push(smo248953);
const smo248954 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo248954'] = smo248954;
smo248954.setAttribute('id', 'smo248954');
smo248973v0ar.push(smo248954);
const smo248955 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo248955'] = smo248955;
smo248955.setAttribute('id', 'smo248955');
smo248973v0ar.push(smo248955);
const smo248956 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo248956'] = smo248956;
smo248956.setAttribute('id', 'smo248956');
smo248973v0ar.push(smo248956);
const smo248957 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo248957'] = smo248957;
smo248957.setAttribute('id', 'smo248957');
smo248973v0ar.push(smo248957);
const smo248958 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo248958'] = smo248958;
smo248958.setAttribute('id', 'smo248958');
smo248973v0ar.push(smo248958);
const smo248959 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo248959'] = smo248959;
smo248959.setAttribute('id', 'smo248959');
smo248973v0ar.push(smo248959);
smo248973v0.addTickables(smo248973v0ar)
fmtsmo2489731.joinVoices([smo248973v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo250981 = smo246076.getStemDirection();
smo246076.setStemDirection(dirsmo250981);
smo246077.setStemDirection(dirsmo250981);
smo246078.setStemDirection(dirsmo250981);
smo246079.setStemDirection(dirsmo250981);
const smo250981 = new VF.Beam([smo246076,smo246077,smo246078,smo246079]);
const dirsmo250982 = smo246080.getStemDirection();
smo246080.setStemDirection(dirsmo250982);
smo246081.setStemDirection(dirsmo250982);
smo246082.setStemDirection(dirsmo250982);
const smo250982 = new VF.Beam([smo246080,smo246081,smo246082]);
const dirsmo250985 = smo248953.getStemDirection();
smo248953.setStemDirection(dirsmo250985);
smo248954.setStemDirection(dirsmo250985);
smo248955.setStemDirection(dirsmo250985);
smo248956.setStemDirection(dirsmo250985);
const smo250985 = new VF.Beam([smo248953,smo248954,smo248955,smo248956]);
const dirsmo250986 = smo248957.getStemDirection();
smo248957.setStemDirection(dirsmo250986);
smo248958.setStemDirection(dirsmo250986);
smo248959.setStemDirection(dirsmo250986);
const smo250986 = new VF.Beam([smo248957,smo248958,smo248959]);
 
// formatting measures in staff group smo245304
fmtsmo2460961.format([smo246096v0,smo248973v0], 281);
const stavesmo246096 = new VF.Stave(368, 406, 295);
stavesmo246096.setAttribute('id', 'stavesmo246096');
stavesmo246096.setBegBarType(VF.Barline.type.NONE);
stavesmo246096.setContext(context);
stavesmo246096.draw();
smo246096v0.draw(context, stavesmo246096);
smo250981.setContext(context);
smo250981.draw();
smo250982.setContext(context);
smo250982.draw();
const stavesmo248973 = new VF.Stave(368, 545, 295);
stavesmo248973.setAttribute('id', 'stavesmo248973');
stavesmo248973.setBegBarType(VF.Barline.type.NONE);
stavesmo248973.setContext(context);
stavesmo248973.draw();
smo248973v0.draw(context, stavesmo248973);
smo250985.setContext(context);
smo250985.draw();
smo250986.setContext(context);
smo250986.draw();
const fmtsmo2461182 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo246118v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246118v0ar = [];
const smo246097 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo246097'] = smo246097;
smo246097.setAttribute('id', 'smo246097');
smo246118v0ar.push(smo246097);
const smo246098 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo246098'] = smo246098;
smo246098.setAttribute('id', 'smo246098');
smo246118v0ar.push(smo246098);
const smo246099 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo246099'] = smo246099;
smo246099.setAttribute('id', 'smo246099');
smo246118v0ar.push(smo246099);
const smo246100 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo246100'] = smo246100;
smo246100.setAttribute('id', 'smo246100');
smo246118v0ar.push(smo246100);
const smo246101 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo246101'] = smo246101;
smo246101.setAttribute('id', 'smo246101');
smo246118v0ar.push(smo246101);
const smo246102 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo246102'] = smo246102;
smo246102.setAttribute('id', 'smo246102');
smo246118v0ar.push(smo246102);
const smo246103 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo246103'] = smo246103;
smo246103.setAttribute('id', 'smo246103');
smo246118v0ar.push(smo246103);
const smo246104 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/3/n"]}'))
noteHash['smo246104'] = smo246104;
smo246104.setAttribute('id', 'smo246104');
const smo2461040acc = new VF.Accidental('b');
smo246104.addModifier(smo2461040acc, 0);
smo246118v0ar.push(smo246104);
smo246118v0.addTickables(smo246118v0ar)
fmtsmo2461182.joinVoices([smo246118v0]);
const fmtsmo2489952 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo248995v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248995v0ar = [];
const smo248974 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo248974'] = smo248974;
smo248974.setAttribute('id', 'smo248974');
smo248995v0ar.push(smo248974);
const smo248975 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo248975'] = smo248975;
smo248975.setAttribute('id', 'smo248975');
smo248995v0ar.push(smo248975);
const smo248976 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo248976'] = smo248976;
smo248976.setAttribute('id', 'smo248976');
smo248995v0ar.push(smo248976);
const smo248977 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo248977'] = smo248977;
smo248977.setAttribute('id', 'smo248977');
smo248995v0ar.push(smo248977);
const smo248978 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo248978'] = smo248978;
smo248978.setAttribute('id', 'smo248978');
smo248995v0ar.push(smo248978);
const smo248979 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
noteHash['smo248979'] = smo248979;
smo248979.setAttribute('id', 'smo248979');
smo248995v0ar.push(smo248979);
const smo248980 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo248980'] = smo248980;
smo248980.setAttribute('id', 'smo248980');
smo248995v0ar.push(smo248980);
const smo248981 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/2/n"]}'))
noteHash['smo248981'] = smo248981;
smo248981.setAttribute('id', 'smo248981');
const smo2489810acc = new VF.Accidental('b');
smo248981.addModifier(smo2489810acc, 0);
smo248995v0ar.push(smo248981);
smo248995v0.addTickables(smo248995v0ar)
fmtsmo2489952.joinVoices([smo248995v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo250989 = smo246097.getStemDirection();
smo246097.setStemDirection(dirsmo250989);
smo246098.setStemDirection(dirsmo250989);
smo246099.setStemDirection(dirsmo250989);
smo246100.setStemDirection(dirsmo250989);
const smo250989 = new VF.Beam([smo246097,smo246098,smo246099,smo246100]);
const dirsmo250990 = smo246101.getStemDirection();
smo246101.setStemDirection(dirsmo250990);
smo246102.setStemDirection(dirsmo250990);
smo246103.setStemDirection(dirsmo250990);
smo246104.setStemDirection(dirsmo250990);
const smo250990 = new VF.Beam([smo246101,smo246102,smo246103,smo246104]);
const dirsmo250993 = smo248974.getStemDirection();
smo248974.setStemDirection(dirsmo250993);
smo248975.setStemDirection(dirsmo250993);
smo248976.setStemDirection(dirsmo250993);
smo248977.setStemDirection(dirsmo250993);
const smo250993 = new VF.Beam([smo248974,smo248975,smo248976,smo248977]);
const dirsmo250994 = smo248978.getStemDirection();
smo248978.setStemDirection(dirsmo250994);
smo248979.setStemDirection(dirsmo250994);
smo248980.setStemDirection(dirsmo250994);
smo248981.setStemDirection(dirsmo250994);
const smo250994 = new VF.Beam([smo248978,smo248979,smo248980,smo248981]);
 
// formatting measures in staff group smo245304
fmtsmo2461182.format([smo246118v0,smo248995v0], 281);
const stavesmo246118 = new VF.Stave(663, 406, 295);
stavesmo246118.setAttribute('id', 'stavesmo246118');
stavesmo246118.setBegBarType(VF.Barline.type.NONE);
stavesmo246118.setContext(context);
stavesmo246118.draw();
smo246118v0.draw(context, stavesmo246118);
smo250989.setContext(context);
smo250989.draw();
smo250990.setContext(context);
smo250990.draw();
const stavesmo248995 = new VF.Stave(663, 545, 295);
stavesmo248995.setAttribute('id', 'stavesmo248995');
stavesmo248995.setBegBarType(VF.Barline.type.NONE);
stavesmo248995.setContext(context);
stavesmo248995.draw();
smo248995v0.draw(context, stavesmo248995);
smo250993.setContext(context);
smo250993.draw();
smo250994.setContext(context);
smo250994.draw();
const fmtsmo2461363 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo246136v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246136v0ar = [];
const smo246119 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo246119'] = smo246119;
smo246119.setAttribute('id', 'smo246119');
smo246136v0ar.push(smo246119);
const smo246120 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bn/4/n","dn/5/n","gn/5/n"]}'))
noteHash['smo246120'] = smo246120;
smo246120.setAttribute('id', 'smo246120');
smo246136v0ar.push(smo246120);
const smo246121 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo246121'] = smo246121;
smo246121.setAttribute('id', 'smo246121');
smo246136v0ar.push(smo246121);
const smo246122 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
noteHash['smo246122'] = smo246122;
smo246122.setAttribute('id', 'smo246122');
const smo2461220acc = new VF.Accidental('b');
smo246122.addModifier(smo2461220acc, 0);
smo246136v0ar.push(smo246122);
smo246136v0.addTickables(smo246136v0ar)
fmtsmo2461363.joinVoices([smo246136v0]);
const fmtsmo2490133 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo249013v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249013v0ar = [];
const smo248996 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
noteHash['smo248996'] = smo248996;
smo248996.setAttribute('id', 'smo248996');
smo249013v0ar.push(smo248996);
const smo248997 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo248997'] = smo248997;
smo248997.setAttribute('id', 'smo248997');
smo249013v0ar.push(smo248997);
const smo248998 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/1/n","gn/2/n"]}'))
noteHash['smo248998'] = smo248998;
smo248998.setAttribute('id', 'smo248998');
smo249013v0ar.push(smo248998);
const smo248999 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
noteHash['smo248999'] = smo248999;
smo248999.setAttribute('id', 'smo248999');
smo249013v0ar.push(smo248999);
smo249013v0.addTickables(smo249013v0ar)
fmtsmo2490133.joinVoices([smo249013v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo250997 = smo246120.getStemDirection();
smo246120.setStemDirection(dirsmo250997);
smo246121.setStemDirection(dirsmo250997);
smo246122.setStemDirection(dirsmo250997);
const smo250997 = new VF.Beam([smo246120,smo246121,smo246122]);
const dirsmo251000 = smo248998.getStemDirection();
smo248998.setStemDirection(dirsmo251000);
smo248999.setStemDirection(dirsmo251000);
const smo251000 = new VF.Beam([smo248998,smo248999]);
 
// formatting measures in staff group smo245304
fmtsmo2461363.format([smo246136v0,smo249013v0], 281);
const stavesmo246136 = new VF.Stave(958, 406, 295);
stavesmo246136.setAttribute('id', 'stavesmo246136');
stavesmo246136.setBegBarType(VF.Barline.type.NONE);
stavesmo246136.setContext(context);
stavesmo246136.draw();
smo246136v0.draw(context, stavesmo246136);
smo250997.setContext(context);
smo250997.draw();
const stavesmo249013 = new VF.Stave(958, 545, 295);
stavesmo249013.setAttribute('id', 'stavesmo249013');
stavesmo249013.setBegBarType(VF.Barline.type.NONE);
stavesmo249013.setContext(context);
stavesmo249013.draw();
smo249013v0.draw(context, stavesmo249013);
smo251000.setContext(context);
smo251000.draw();
const fmtsmo2461574 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo246157v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246157v0ar = [];
const smo246137 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo246137'] = smo246137;
smo246137.setAttribute('id', 'smo246137');
smo246157v0ar.push(smo246137);
const smo246139 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246139'] = smo246139;
smo246139.setAttribute('id', 'smo246139');
smo246157v0ar.push(smo246139);
const smo246140 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo246140'] = smo246140;
smo246140.setAttribute('id', 'smo246140');
smo246157v0ar.push(smo246140);
const smo246141 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246141'] = smo246141;
smo246141.setAttribute('id', 'smo246141');
smo246157v0ar.push(smo246141);
const smo246142 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo246142'] = smo246142;
smo246142.setAttribute('id', 'smo246142');
smo246157v0ar.push(smo246142);
const smo246143 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246143'] = smo246143;
smo246143.setAttribute('id', 'smo246143');
smo246157v0ar.push(smo246143);
smo246157v0.addTickables(smo246157v0ar)
fmtsmo2461574.joinVoices([smo246157v0]);
const fmtsmo2490314 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo249031v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249031v0ar = [];
const smo249014 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo249014'] = smo249014;
smo249014.setAttribute('id', 'smo249014');
smo249031v0ar.push(smo249014);
const smo249015 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo249015'] = smo249015;
smo249015.setAttribute('id', 'smo249015');
smo249031v0ar.push(smo249015);
const smo249016 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
noteHash['smo249016'] = smo249016;
smo249016.setAttribute('id', 'smo249016');
smo249031v0ar.push(smo249016);
const smo249017 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bb/3/n","cn/4/n"]}'))
noteHash['smo249017'] = smo249017;
smo249017.setAttribute('id', 'smo249017');
const smo2490171acc = new VF.Accidental('b');
smo249017.addModifier(smo2490171acc, 1);
smo249031v0ar.push(smo249017);
smo249031v0.addTickables(smo249031v0ar)
fmtsmo2490314.joinVoices([smo249031v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251003 = smo246137.getStemDirection();
smo246137.setStemDirection(dirsmo251003);
smo246139.setStemDirection(dirsmo251003);
smo246140.setStemDirection(dirsmo251003);
const smo251003 = new VF.Beam([smo246137,smo246139,smo246140]);
const dirsmo251004 = smo246141.getStemDirection();
smo246141.setStemDirection(dirsmo251004);
smo246142.setStemDirection(dirsmo251004);
smo246143.setStemDirection(dirsmo251004);
const smo251004 = new VF.Beam([smo246141,smo246142,smo246143]);
const dirsmo251006 = smo249014.getStemDirection();
smo249014.setStemDirection(dirsmo251006);
smo249015.setStemDirection(dirsmo251006);
const smo251006 = new VF.Beam([smo249014,smo249015]);
const dirsmo251007 = smo249016.getStemDirection();
smo249016.setStemDirection(dirsmo251007);
smo249017.setStemDirection(dirsmo251007);
const smo251007 = new VF.Beam([smo249016,smo249017]);
 
// formatting measures in staff group smo245304
fmtsmo2461574.format([smo246157v0,smo249031v0], 272);
const stavesmo246157 = new VF.Stave(1253, 406, 295);
stavesmo246157.setAttribute('id', 'stavesmo246157');
stavesmo246157.setBegBarType(4);
stavesmo246157.setContext(context);
stavesmo246157.draw();
smo246157v0.draw(context, stavesmo246157);
smo251003.setContext(context);
smo251003.draw();
smo251004.setContext(context);
smo251004.draw();
const stavesmo249031 = new VF.Stave(1253, 545, 295);
stavesmo249031.setAttribute('id', 'stavesmo249031');
stavesmo249031.setBegBarType(4);
stavesmo249031.setContext(context);
stavesmo249031.draw();
smo249031v0.draw(context, stavesmo249031);
smo251006.setContext(context);
smo251006.draw();
smo251007.setContext(context);
smo251007.draw();
const fmtsmo2461765 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo246176v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246176v0ar = [];
const smo246158 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246158'] = smo246158;
smo246158.setAttribute('id', 'smo246158');
smo246176v0ar.push(smo246158);
const smo246159 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246159'] = smo246159;
smo246159.setAttribute('id', 'smo246159');
smo246176v0ar.push(smo246159);
const smo246160 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo246160'] = smo246160;
smo246160.setAttribute('id', 'smo246160');
smo246176v0ar.push(smo246160);
const smo246161 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
noteHash['smo246161'] = smo246161;
smo246161.setAttribute('id', 'smo246161');
smo246176v0ar.push(smo246161);
const smo246162 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n","gb/5/n","eb/6/n"]}'))
noteHash['smo246162'] = smo246162;
smo246162.setAttribute('id', 'smo246162');
const smo2461620acc = new VF.Accidental('b');
smo246162.addModifier(smo2461620acc, 0);
const smo2461621acc = new VF.Accidental('b');
smo246162.addModifier(smo2461621acc, 1);
const smo2461622acc = new VF.Accidental('b');
smo246162.addModifier(smo2461622acc, 2);
smo246176v0ar.push(smo246162);
smo246176v0.addTickables(smo246176v0ar)
fmtsmo2461765.joinVoices([smo246176v0]);
const fmtsmo2490495 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo249049v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249049v0ar = [];
const smo249032 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
noteHash['smo249032'] = smo249032;
smo249032.setAttribute('id', 'smo249032');
smo249049v0ar.push(smo249032);
const smo249033 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n"]}'))
noteHash['smo249033'] = smo249033;
smo249033.setAttribute('id', 'smo249033');
smo249049v0ar.push(smo249033);
const smo249034 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
noteHash['smo249034'] = smo249034;
smo249034.setAttribute('id', 'smo249034');
smo249049v0ar.push(smo249034);
const smo249035 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n"]}'))
noteHash['smo249035'] = smo249035;
smo249035.setAttribute('id', 'smo249035');
smo249049v0ar.push(smo249035);
smo249049v0.addTickables(smo249049v0ar)
fmtsmo2490495.joinVoices([smo249049v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251009 = smo246159.getStemDirection();
smo246159.setStemDirection(dirsmo251009);
smo246160.setStemDirection(dirsmo251009);
smo246161.setStemDirection(dirsmo251009);
smo246162.setStemDirection(dirsmo251009);
const smo251009 = new VF.Beam([smo246159,smo246160,smo246161,smo246162]);
const dirsmo251012 = smo249032.getStemDirection();
smo249032.setStemDirection(dirsmo251012);
smo249033.setStemDirection(dirsmo251012);
const smo251012 = new VF.Beam([smo249032,smo249033]);
const dirsmo251013 = smo249034.getStemDirection();
smo249034.setStemDirection(dirsmo251013);
smo249035.setStemDirection(dirsmo251013);
const smo251013 = new VF.Beam([smo249034,smo249035]);
 
// formatting measures in staff group smo245304
fmtsmo2461765.format([smo246176v0,smo249049v0], 281);
const stavesmo246176 = new VF.Stave(1548, 406, 295);
stavesmo246176.setAttribute('id', 'stavesmo246176');
stavesmo246176.setBegBarType(VF.Barline.type.NONE);
stavesmo246176.setContext(context);
stavesmo246176.draw();
smo246176v0.draw(context, stavesmo246176);
smo251009.setContext(context);
smo251009.draw();
const stavesmo249049 = new VF.Stave(1548, 545, 295);
stavesmo249049.setAttribute('id', 'stavesmo249049');
stavesmo249049.setBegBarType(VF.Barline.type.NONE);
stavesmo249049.setContext(context);
stavesmo249049.draw();
smo249049v0.draw(context, stavesmo249049);
smo251012.setContext(context);
smo251012.draw();
smo251013.setContext(context);
smo251013.draw();
const rightsmo245304stavesmo2461761 = new VF.StaveConnector(stavesmo246176, stavesmo249049).setType(0);
rightsmo245304stavesmo2461761.setContext(context).draw();
const fmtsmo2461986 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo246198v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246198v0ar = [];
const smo246177 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
noteHash['smo246177'] = smo246177;
smo246177.setAttribute('id', 'smo246177');
smo246198v0ar.push(smo246177);
const smo246179 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo246179'] = smo246179;
smo246179.setAttribute('id', 'smo246179');
smo246198v0ar.push(smo246179);
const smo246180 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
noteHash['smo246180'] = smo246180;
smo246180.setAttribute('id', 'smo246180');
smo246198v0ar.push(smo246180);
const smo246181 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
noteHash['smo246181'] = smo246181;
smo246181.setAttribute('id', 'smo246181');
smo246198v0ar.push(smo246181);
const smo246182 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
noteHash['smo246182'] = smo246182;
smo246182.setAttribute('id', 'smo246182');
smo246198v0ar.push(smo246182);
const smo246183 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n","bn/5/n"]}'))
noteHash['smo246183'] = smo246183;
smo246183.setAttribute('id', 'smo246183');
smo246198v0ar.push(smo246183);
const smo246184 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
noteHash['smo246184'] = smo246184;
smo246184.setAttribute('id', 'smo246184');
smo246198v0ar.push(smo246184);
smo246198v0.addTickables(smo246198v0ar)
fmtsmo2461986.joinVoices([smo246198v0]);
const fmtsmo2490676 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo249067v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249067v0ar = [];
const smo249050 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo249050'] = smo249050;
smo249050.setAttribute('id', 'smo249050');
smo249067v0ar.push(smo249050);
const smo249051 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo249051'] = smo249051;
smo249051.setAttribute('id', 'smo249051');
smo249067v0ar.push(smo249051);
const smo249052 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo249052'] = smo249052;
smo249052.setAttribute('id', 'smo249052');
smo249067v0ar.push(smo249052);
const smo249053 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
noteHash['smo249053'] = smo249053;
smo249053.setAttribute('id', 'smo249053');
smo249067v0ar.push(smo249053);
smo249067v0.addTickables(smo249067v0ar)
fmtsmo2490676.joinVoices([smo249067v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251024 = smo246177.getStemDirection();
smo246177.setStemDirection(dirsmo251024);
smo246179.setStemDirection(dirsmo251024);
smo246180.setStemDirection(dirsmo251024);
smo246181.setStemDirection(dirsmo251024);
const smo251024 = new VF.Beam([smo246177,smo246179,smo246180,smo246181]);
const dirsmo251025 = smo246182.getStemDirection();
smo246182.setStemDirection(dirsmo251025);
smo246183.setStemDirection(dirsmo251025);
smo246184.setStemDirection(dirsmo251025);
const smo251025 = new VF.Beam([smo246182,smo246183,smo246184]);
const dirsmo251028 = smo249050.getStemDirection();
smo249050.setStemDirection(dirsmo251028);
smo249051.setStemDirection(dirsmo251028);
const smo251028 = new VF.Beam([smo249050,smo249051]);
const dirsmo251029 = smo249052.getStemDirection();
smo249052.setStemDirection(dirsmo251029);
smo249053.setStemDirection(dirsmo251029);
const smo251029 = new VF.Beam([smo249052,smo249053]);
 
// formatting measures in staff group smo245304
fmtsmo2461986.format([smo246198v0,smo249067v0], 237);
const stavesmo246198 = new VF.Stave(73, 779, 295);
stavesmo246198.setAttribute('id', 'stavesmo246198');
stavesmo246198.setBegBarType(1);
stavesmo246198.addClef('treble');
stavesmo246198.setContext(context);
stavesmo246198.draw();
smo246198v0.draw(context, stavesmo246198);
smo251024.setContext(context);
smo251024.draw();
smo251025.setContext(context);
smo251025.draw();
const stavesmo249067 = new VF.Stave(73, 934, 295);
stavesmo249067.setAttribute('id', 'stavesmo249067');
stavesmo249067.setBegBarType(1);
stavesmo249067.addClef('bass');
stavesmo249067.setContext(context);
stavesmo249067.draw();
smo249067v0.draw(context, stavesmo249067);
smo251028.setContext(context);
smo251028.draw();
smo251029.setContext(context);
smo251029.draw();
const leftsmo245304stavesmo2461981 = new VF.StaveConnector(stavesmo246198, stavesmo249067).setType(3);
leftsmo245304stavesmo2461981.setContext(context).draw();
const fmtsmo2462167 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo246216v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246216v0ar = [];
const smo246199 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo246199'] = smo246199;
smo246199.setAttribute('id', 'smo246199');
smo246216v0ar.push(smo246199);
const smo246200 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo246200'] = smo246200;
smo246200.setAttribute('id', 'smo246200');
smo246216v0ar.push(smo246200);
const smo246201 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo246201'] = smo246201;
smo246201.setAttribute('id', 'smo246201');
smo246216v0ar.push(smo246201);
const smo246202 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
noteHash['smo246202'] = smo246202;
smo246202.setAttribute('id', 'smo246202');
const smo2462020acc = new VF.Accidental('b');
smo246202.addModifier(smo2462020acc, 0);
smo246216v0ar.push(smo246202);
smo246216v0.addTickables(smo246216v0ar)
fmtsmo2462167.joinVoices([smo246216v0]);
const fmtsmo2490857 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo249085v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249085v0ar = [];
const smo249068 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo249068'] = smo249068;
smo249068.setAttribute('id', 'smo249068');
smo249085v0ar.push(smo249068);
const smo249069 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo249069'] = smo249069;
smo249069.setAttribute('id', 'smo249069');
smo249085v0ar.push(smo249069);
const smo249070 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo249070'] = smo249070;
smo249070.setAttribute('id', 'smo249070');
smo249085v0ar.push(smo249070);
const smo249071 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
noteHash['smo249071'] = smo249071;
smo249071.setAttribute('id', 'smo249071');
smo249085v0ar.push(smo249071);
smo249085v0.addTickables(smo249085v0ar)
fmtsmo2490857.joinVoices([smo249085v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251032 = smo246200.getStemDirection();
smo246200.setStemDirection(dirsmo251032);
smo246201.setStemDirection(dirsmo251032);
smo246202.setStemDirection(dirsmo251032);
const smo251032 = new VF.Beam([smo246200,smo246201,smo246202]);
const dirsmo251035 = smo249068.getStemDirection();
smo249068.setStemDirection(dirsmo251035);
smo249069.setStemDirection(dirsmo251035);
const smo251035 = new VF.Beam([smo249068,smo249069]);
const dirsmo251036 = smo249070.getStemDirection();
smo249070.setStemDirection(dirsmo251036);
smo249071.setStemDirection(dirsmo251036);
const smo251036 = new VF.Beam([smo249070,smo249071]);
 
// formatting measures in staff group smo245304
fmtsmo2462167.format([smo246216v0,smo249085v0], 281);
const stavesmo246216 = new VF.Stave(368, 779, 295);
stavesmo246216.setAttribute('id', 'stavesmo246216');
stavesmo246216.setBegBarType(VF.Barline.type.NONE);
stavesmo246216.setContext(context);
stavesmo246216.draw();
smo246216v0.draw(context, stavesmo246216);
smo251032.setContext(context);
smo251032.draw();
const stavesmo249085 = new VF.Stave(368, 934, 295);
stavesmo249085.setAttribute('id', 'stavesmo249085');
stavesmo249085.setBegBarType(VF.Barline.type.NONE);
stavesmo249085.setContext(context);
stavesmo249085.draw();
smo249085v0.draw(context, stavesmo249085);
smo251035.setContext(context);
smo251035.draw();
smo251036.setContext(context);
smo251036.draw();
const fmtsmo2462378 = new VF.Formatter();
//
// voices and notes for stave 0 8
const smo246237v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246237v0ar = [];
const smo246217 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo246217'] = smo246217;
smo246217.setAttribute('id', 'smo246217');
smo246237v0ar.push(smo246217);
const smo246219 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246219'] = smo246219;
smo246219.setAttribute('id', 'smo246219');
smo246237v0ar.push(smo246219);
const smo246220 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo246220'] = smo246220;
smo246220.setAttribute('id', 'smo246220');
smo246237v0ar.push(smo246220);
const smo246221 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246221'] = smo246221;
smo246221.setAttribute('id', 'smo246221');
smo246237v0ar.push(smo246221);
const smo246222 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo246222'] = smo246222;
smo246222.setAttribute('id', 'smo246222');
smo246237v0ar.push(smo246222);
const smo246223 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246223'] = smo246223;
smo246223.setAttribute('id', 'smo246223');
smo246237v0ar.push(smo246223);
smo246237v0.addTickables(smo246237v0ar)
fmtsmo2462378.joinVoices([smo246237v0]);
const fmtsmo2491038 = new VF.Formatter();
//
// voices and notes for stave 1 8
const smo249103v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249103v0ar = [];
const smo249086 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo249086'] = smo249086;
smo249086.setAttribute('id', 'smo249086');
smo249103v0ar.push(smo249086);
const smo249087 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo249087'] = smo249087;
smo249087.setAttribute('id', 'smo249087');
smo249103v0ar.push(smo249087);
const smo249088 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
noteHash['smo249088'] = smo249088;
smo249088.setAttribute('id', 'smo249088');
smo249103v0ar.push(smo249088);
const smo249089 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bb/3/n","cn/4/n"]}'))
noteHash['smo249089'] = smo249089;
smo249089.setAttribute('id', 'smo249089');
const smo2490891acc = new VF.Accidental('b');
smo249089.addModifier(smo2490891acc, 1);
smo249103v0ar.push(smo249089);
smo249103v0.addTickables(smo249103v0ar)
fmtsmo2491038.joinVoices([smo249103v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251039 = smo246217.getStemDirection();
smo246217.setStemDirection(dirsmo251039);
smo246219.setStemDirection(dirsmo251039);
smo246220.setStemDirection(dirsmo251039);
const smo251039 = new VF.Beam([smo246217,smo246219,smo246220]);
const dirsmo251040 = smo246221.getStemDirection();
smo246221.setStemDirection(dirsmo251040);
smo246222.setStemDirection(dirsmo251040);
smo246223.setStemDirection(dirsmo251040);
const smo251040 = new VF.Beam([smo246221,smo246222,smo246223]);
const dirsmo251043 = smo249086.getStemDirection();
smo249086.setStemDirection(dirsmo251043);
smo249087.setStemDirection(dirsmo251043);
const smo251043 = new VF.Beam([smo249086,smo249087]);
const dirsmo251044 = smo249088.getStemDirection();
smo249088.setStemDirection(dirsmo251044);
smo249089.setStemDirection(dirsmo251044);
const smo251044 = new VF.Beam([smo249088,smo249089]);
 
// formatting measures in staff group smo245304
fmtsmo2462378.format([smo246237v0,smo249103v0], 281);
const stavesmo246237 = new VF.Stave(663, 779, 295);
stavesmo246237.setAttribute('id', 'stavesmo246237');
stavesmo246237.setBegBarType(VF.Barline.type.NONE);
stavesmo246237.setContext(context);
stavesmo246237.draw();
smo246237v0.draw(context, stavesmo246237);
smo251039.setContext(context);
smo251039.draw();
smo251040.setContext(context);
smo251040.draw();
const stavesmo249103 = new VF.Stave(663, 934, 295);
stavesmo249103.setAttribute('id', 'stavesmo249103');
stavesmo249103.setBegBarType(VF.Barline.type.NONE);
stavesmo249103.setContext(context);
stavesmo249103.draw();
smo249103v0.draw(context, stavesmo249103);
smo251043.setContext(context);
smo251043.draw();
smo251044.setContext(context);
smo251044.draw();
const fmtsmo2462559 = new VF.Formatter();
//
// voices and notes for stave 0 9
const smo246255v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246255v0ar = [];
const smo246238 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246238'] = smo246238;
smo246238.setAttribute('id', 'smo246238');
smo246255v0ar.push(smo246238);
const smo246239 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246239'] = smo246239;
smo246239.setAttribute('id', 'smo246239');
smo246255v0ar.push(smo246239);
const smo246240 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","cn/5/n","an/5/n"]}'))
noteHash['smo246240'] = smo246240;
smo246240.setAttribute('id', 'smo246240');
smo246255v0ar.push(smo246240);
const smo246241 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","cn/5/n","gn/5/n"]}'))
noteHash['smo246241'] = smo246241;
smo246241.setAttribute('id', 'smo246241');
smo246255v0ar.push(smo246241);
smo246255v0.addTickables(smo246255v0ar)
fmtsmo2462559.joinVoices([smo246255v0]);
const fmtsmo2491219 = new VF.Formatter();
//
// voices and notes for stave 1 9
const smo249121v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249121v0ar = [];
const smo249104 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
noteHash['smo249104'] = smo249104;
smo249104.setAttribute('id', 'smo249104');
smo249121v0ar.push(smo249104);
const smo249105 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n"]}'))
noteHash['smo249105'] = smo249105;
smo249105.setAttribute('id', 'smo249105');
smo249121v0ar.push(smo249105);
const smo249106 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
noteHash['smo249106'] = smo249106;
smo249106.setAttribute('id', 'smo249106');
smo249121v0ar.push(smo249106);
const smo249107 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/2/n","eb/3/n"]}'))
noteHash['smo249107'] = smo249107;
smo249107.setAttribute('id', 'smo249107');
const smo2491070acc = new VF.Accidental('b');
smo249107.addModifier(smo2491070acc, 0);
const smo2491071acc = new VF.Accidental('b');
smo249107.addModifier(smo2491071acc, 1);
smo249121v0ar.push(smo249107);
smo249121v0.addTickables(smo249121v0ar)
fmtsmo2491219.joinVoices([smo249121v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251047 = smo246239.getStemDirection();
smo246239.setStemDirection(dirsmo251047);
smo246240.setStemDirection(dirsmo251047);
smo246241.setStemDirection(dirsmo251047);
const smo251047 = new VF.Beam([smo246239,smo246240,smo246241]);
const dirsmo251050 = smo249104.getStemDirection();
smo249104.setStemDirection(dirsmo251050);
smo249105.setStemDirection(dirsmo251050);
const smo251050 = new VF.Beam([smo249104,smo249105]);
const dirsmo251051 = smo249106.getStemDirection();
smo249106.setStemDirection(dirsmo251051);
smo249107.setStemDirection(dirsmo251051);
const smo251051 = new VF.Beam([smo249106,smo249107]);
 
// formatting measures in staff group smo245304
fmtsmo2462559.format([smo246255v0,smo249121v0], 281);
const stavesmo246255 = new VF.Stave(958, 779, 295);
stavesmo246255.setAttribute('id', 'stavesmo246255');
stavesmo246255.setBegBarType(VF.Barline.type.NONE);
stavesmo246255.setContext(context);
stavesmo246255.draw();
smo246255v0.draw(context, stavesmo246255);
smo251047.setContext(context);
smo251047.draw();
const stavesmo249121 = new VF.Stave(958, 934, 295);
stavesmo249121.setAttribute('id', 'stavesmo249121');
stavesmo249121.setBegBarType(VF.Barline.type.NONE);
stavesmo249121.setContext(context);
stavesmo249121.draw();
smo249121v0.draw(context, stavesmo249121);
smo251050.setContext(context);
smo251050.draw();
smo251051.setContext(context);
smo251051.draw();
const fmtsmo24627810 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo246278v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246278v0ar = [];
const smo246256 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","cn/5/n","gb/5/n"]}'))
noteHash['smo246256'] = smo246256;
smo246256.setAttribute('id', 'smo246256');
const smo2462560acc = new VF.Accidental('b');
smo246256.addModifier(smo2462560acc, 0);
const smo2462562acc = new VF.Accidental('b');
smo246256.addModifier(smo2462562acc, 2);
smo246278v0ar.push(smo246256);
const smo246258 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","an/5/n"]}'))
noteHash['smo246258'] = smo246258;
smo246258.setAttribute('id', 'smo246258');
smo246278v0ar.push(smo246258);
const smo246259 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo246259'] = smo246259;
smo246259.setAttribute('id', 'smo246259');
smo246278v0ar.push(smo246259);
const smo246260 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
noteHash['smo246260'] = smo246260;
smo246260.setAttribute('id', 'smo246260');
smo246278v0ar.push(smo246260);
const smo246261 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
noteHash['smo246261'] = smo246261;
smo246261.setAttribute('id', 'smo246261');
smo246278v0ar.push(smo246261);
const smo246262 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
noteHash['smo246262'] = smo246262;
smo246262.setAttribute('id', 'smo246262');
smo246278v0ar.push(smo246262);
const smo246263 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo246263'] = smo246263;
smo246263.setAttribute('id', 'smo246263');
smo246278v0ar.push(smo246263);
const smo246264 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","an/5/n"]}'))
noteHash['smo246264'] = smo246264;
smo246264.setAttribute('id', 'smo246264');
smo246278v0ar.push(smo246264);
smo246278v0.addTickables(smo246278v0ar)
fmtsmo24627810.joinVoices([smo246278v0]);
const fmtsmo24913910 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo249139v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249139v0ar = [];
const smo249122 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n","dn/3/n"]}'))
noteHash['smo249122'] = smo249122;
smo249122.setAttribute('id', 'smo249122');
smo249139v0ar.push(smo249122);
const smo249123 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","gb/3/n","an/3/n","cn/4/n"]}'))
noteHash['smo249123'] = smo249123;
smo249123.setAttribute('id', 'smo249123');
const smo2491231acc = new VF.Accidental('b');
smo249123.addModifier(smo2491231acc, 1);
smo249139v0ar.push(smo249123);
const smo249124 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo249124'] = smo249124;
smo249124.setAttribute('id', 'smo249124');
smo249139v0ar.push(smo249124);
const smo249125 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/3/n","an/3/n","cn/4/n"]}'))
noteHash['smo249125'] = smo249125;
smo249125.setAttribute('id', 'smo249125');
smo249139v0ar.push(smo249125);
smo249139v0.addTickables(smo249139v0ar)
fmtsmo24913910.joinVoices([smo249139v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251054 = smo246256.getStemDirection();
smo246256.setStemDirection(dirsmo251054);
smo246258.setStemDirection(dirsmo251054);
smo246259.setStemDirection(dirsmo251054);
smo246260.setStemDirection(dirsmo251054);
const smo251054 = new VF.Beam([smo246256,smo246258,smo246259,smo246260]);
const dirsmo251055 = smo246261.getStemDirection();
smo246261.setStemDirection(dirsmo251055);
smo246262.setStemDirection(dirsmo251055);
smo246263.setStemDirection(dirsmo251055);
smo246264.setStemDirection(dirsmo251055);
const smo251055 = new VF.Beam([smo246261,smo246262,smo246263,smo246264]);
const dirsmo251058 = smo249122.getStemDirection();
smo249122.setStemDirection(dirsmo251058);
smo249123.setStemDirection(dirsmo251058);
const smo251058 = new VF.Beam([smo249122,smo249123]);
const dirsmo251059 = smo249124.getStemDirection();
smo249124.setStemDirection(dirsmo251059);
smo249125.setStemDirection(dirsmo251059);
const smo251059 = new VF.Beam([smo249124,smo249125]);
 
// formatting measures in staff group smo245304
fmtsmo24627810.format([smo246278v0,smo249139v0], 281);
const stavesmo246278 = new VF.Stave(1253, 779, 295);
stavesmo246278.setAttribute('id', 'stavesmo246278');
stavesmo246278.setBegBarType(VF.Barline.type.NONE);
stavesmo246278.setContext(context);
stavesmo246278.draw();
smo246278v0.draw(context, stavesmo246278);
smo251054.setContext(context);
smo251054.draw();
smo251055.setContext(context);
smo251055.draw();
const stavesmo249139 = new VF.Stave(1253, 934, 295);
stavesmo249139.setAttribute('id', 'stavesmo249139');
stavesmo249139.setBegBarType(VF.Barline.type.NONE);
stavesmo249139.setContext(context);
stavesmo249139.draw();
smo249139v0.draw(context, stavesmo249139);
smo251058.setContext(context);
smo251058.draw();
smo251059.setContext(context);
smo251059.draw();
const fmtsmo24629611 = new VF.Formatter();
//
// voices and notes for stave 0 11
const smo246296v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246296v0ar = [];
const smo246279 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
noteHash['smo246279'] = smo246279;
smo246279.setAttribute('id', 'smo246279');
smo246296v0ar.push(smo246279);
const smo246280 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
noteHash['smo246280'] = smo246280;
smo246280.setAttribute('id', 'smo246280');
smo246296v0ar.push(smo246280);
const smo246281 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo246281'] = smo246281;
smo246281.setAttribute('id', 'smo246281');
smo246296v0ar.push(smo246281);
const smo246282 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
noteHash['smo246282'] = smo246282;
smo246282.setAttribute('id', 'smo246282');
const smo2462820acc = new VF.Accidental('b');
smo246282.addModifier(smo2462820acc, 0);
smo246296v0ar.push(smo246282);
smo246296v0.addTickables(smo246296v0ar)
fmtsmo24629611.joinVoices([smo246296v0]);
const fmtsmo24915711 = new VF.Formatter();
//
// voices and notes for stave 1 11
const smo249157v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249157v0ar = [];
const smo249140 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
noteHash['smo249140'] = smo249140;
smo249140.setAttribute('id', 'smo249140');
smo249157v0ar.push(smo249140);
const smo249141 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
noteHash['smo249141'] = smo249141;
smo249141.setAttribute('id', 'smo249141');
smo249157v0ar.push(smo249141);
const smo249142 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n","an/3/n"]}'))
noteHash['smo249142'] = smo249142;
smo249142.setAttribute('id', 'smo249142');
smo249157v0ar.push(smo249142);
const smo249143 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n","bn/3/n"]}'))
noteHash['smo249143'] = smo249143;
smo249143.setAttribute('id', 'smo249143');
smo249157v0ar.push(smo249143);
smo249157v0.addTickables(smo249157v0ar)
fmtsmo24915711.joinVoices([smo249157v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251062 = smo246280.getStemDirection();
smo246280.setStemDirection(dirsmo251062);
smo246281.setStemDirection(dirsmo251062);
smo246282.setStemDirection(dirsmo251062);
const smo251062 = new VF.Beam([smo246280,smo246281,smo246282]);
const dirsmo251065 = smo249140.getStemDirection();
smo249140.setStemDirection(dirsmo251065);
smo249141.setStemDirection(dirsmo251065);
const smo251065 = new VF.Beam([smo249140,smo249141]);
const dirsmo251066 = smo249142.getStemDirection();
smo249142.setStemDirection(dirsmo251066);
smo249143.setStemDirection(dirsmo251066);
const smo251066 = new VF.Beam([smo249142,smo249143]);
 
// formatting measures in staff group smo245304
fmtsmo24629611.format([smo246296v0,smo249157v0], 281);
const stavesmo246296 = new VF.Stave(1548, 779, 295);
stavesmo246296.setAttribute('id', 'stavesmo246296');
stavesmo246296.setBegBarType(VF.Barline.type.NONE);
stavesmo246296.setContext(context);
stavesmo246296.draw();
smo246296v0.draw(context, stavesmo246296);
smo251062.setContext(context);
smo251062.draw();
const stavesmo249157 = new VF.Stave(1548, 934, 295);
stavesmo249157.setAttribute('id', 'stavesmo249157');
stavesmo249157.setBegBarType(VF.Barline.type.NONE);
stavesmo249157.setContext(context);
stavesmo249157.draw();
smo249157v0.draw(context, stavesmo249157);
smo251065.setContext(context);
smo251065.draw();
smo251066.setContext(context);
smo251066.draw();
const rightsmo245304stavesmo2462961 = new VF.StaveConnector(stavesmo246296, stavesmo249157).setType(0);
rightsmo245304stavesmo2462961.setContext(context).draw();
const fmtsmo24631712 = new VF.Formatter();
//
// voices and notes for stave 0 12
const smo246317v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246317v0ar = [];
const smo246297 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo246297'] = smo246297;
smo246297.setAttribute('id', 'smo246297');
smo246317v0ar.push(smo246297);
const smo246299 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246299'] = smo246299;
smo246299.setAttribute('id', 'smo246299');
smo246317v0ar.push(smo246299);
const smo246300 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo246300'] = smo246300;
smo246300.setAttribute('id', 'smo246300');
smo246317v0ar.push(smo246300);
const smo246301 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246301'] = smo246301;
smo246301.setAttribute('id', 'smo246301');
smo246317v0ar.push(smo246301);
const smo246302 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo246302'] = smo246302;
smo246302.setAttribute('id', 'smo246302');
smo246317v0ar.push(smo246302);
const smo246303 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246303'] = smo246303;
smo246303.setAttribute('id', 'smo246303');
smo246317v0ar.push(smo246303);
smo246317v0.addTickables(smo246317v0ar)
fmtsmo24631712.joinVoices([smo246317v0]);
const fmtsmo24917512 = new VF.Formatter();
//
// voices and notes for stave 1 12
const smo249175v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249175v0ar = [];
const smo249158 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo249158'] = smo249158;
smo249158.setAttribute('id', 'smo249158');
smo249175v0ar.push(smo249158);
const smo249159 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo249159'] = smo249159;
smo249159.setAttribute('id', 'smo249159');
smo249175v0ar.push(smo249159);
const smo249160 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
noteHash['smo249160'] = smo249160;
smo249160.setAttribute('id', 'smo249160');
smo249175v0ar.push(smo249160);
const smo249161 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bb/3/n","cn/4/n"]}'))
noteHash['smo249161'] = smo249161;
smo249161.setAttribute('id', 'smo249161');
const smo2491611acc = new VF.Accidental('b');
smo249161.addModifier(smo2491611acc, 1);
smo249175v0ar.push(smo249161);
smo249175v0.addTickables(smo249175v0ar)
fmtsmo24917512.joinVoices([smo249175v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251077 = smo246297.getStemDirection();
smo246297.setStemDirection(dirsmo251077);
smo246299.setStemDirection(dirsmo251077);
smo246300.setStemDirection(dirsmo251077);
const smo251077 = new VF.Beam([smo246297,smo246299,smo246300]);
const dirsmo251078 = smo246301.getStemDirection();
smo246301.setStemDirection(dirsmo251078);
smo246302.setStemDirection(dirsmo251078);
smo246303.setStemDirection(dirsmo251078);
const smo251078 = new VF.Beam([smo246301,smo246302,smo246303]);
const dirsmo251081 = smo249158.getStemDirection();
smo249158.setStemDirection(dirsmo251081);
smo249159.setStemDirection(dirsmo251081);
const smo251081 = new VF.Beam([smo249158,smo249159]);
const dirsmo251082 = smo249160.getStemDirection();
smo249160.setStemDirection(dirsmo251082);
smo249161.setStemDirection(dirsmo251082);
const smo251082 = new VF.Beam([smo249160,smo249161]);
 
// formatting measures in staff group smo245304
fmtsmo24631712.format([smo246317v0,smo249175v0], 237);
const stavesmo246317 = new VF.Stave(73, 1132, 295);
stavesmo246317.setAttribute('id', 'stavesmo246317');
stavesmo246317.setBegBarType(1);
stavesmo246317.addClef('treble');
stavesmo246317.setContext(context);
stavesmo246317.draw();
smo246317v0.draw(context, stavesmo246317);
smo251077.setContext(context);
smo251077.draw();
smo251078.setContext(context);
smo251078.draw();
const stavesmo249175 = new VF.Stave(73, 1287, 295);
stavesmo249175.setAttribute('id', 'stavesmo249175');
stavesmo249175.setBegBarType(1);
stavesmo249175.addClef('bass');
stavesmo249175.setContext(context);
stavesmo249175.draw();
smo249175v0.draw(context, stavesmo249175);
smo251081.setContext(context);
smo251081.draw();
smo251082.setContext(context);
smo251082.draw();
const leftsmo245304stavesmo2463171 = new VF.StaveConnector(stavesmo246317, stavesmo249175).setType(3);
leftsmo245304stavesmo2463171.setContext(context).draw();
const fmtsmo24633613 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo246336v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246336v0ar = [];
const smo246318 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246318'] = smo246318;
smo246318.setAttribute('id', 'smo246318');
smo246336v0ar.push(smo246318);
const smo246319 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246319'] = smo246319;
smo246319.setAttribute('id', 'smo246319');
smo246336v0ar.push(smo246319);
const smo246320 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo246320'] = smo246320;
smo246320.setAttribute('id', 'smo246320');
smo246336v0ar.push(smo246320);
const smo246321 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
noteHash['smo246321'] = smo246321;
smo246321.setAttribute('id', 'smo246321');
smo246336v0ar.push(smo246321);
const smo246322 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n","gb/5/n","eb/6/n"]}'))
noteHash['smo246322'] = smo246322;
smo246322.setAttribute('id', 'smo246322');
const smo2463220acc = new VF.Accidental('b');
smo246322.addModifier(smo2463220acc, 0);
const smo2463221acc = new VF.Accidental('b');
smo246322.addModifier(smo2463221acc, 1);
const smo2463222acc = new VF.Accidental('b');
smo246322.addModifier(smo2463222acc, 2);
smo246336v0ar.push(smo246322);
smo246336v0.addTickables(smo246336v0ar)
fmtsmo24633613.joinVoices([smo246336v0]);
const fmtsmo24919313 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo249193v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249193v0ar = [];
const smo249176 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
noteHash['smo249176'] = smo249176;
smo249176.setAttribute('id', 'smo249176');
smo249193v0ar.push(smo249176);
const smo249177 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n"]}'))
noteHash['smo249177'] = smo249177;
smo249177.setAttribute('id', 'smo249177');
smo249193v0ar.push(smo249177);
const smo249178 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
noteHash['smo249178'] = smo249178;
smo249178.setAttribute('id', 'smo249178');
smo249193v0ar.push(smo249178);
const smo249179 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n"]}'))
noteHash['smo249179'] = smo249179;
smo249179.setAttribute('id', 'smo249179');
smo249193v0ar.push(smo249179);
smo249193v0.addTickables(smo249193v0ar)
fmtsmo24919313.joinVoices([smo249193v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251085 = smo246319.getStemDirection();
smo246319.setStemDirection(dirsmo251085);
smo246320.setStemDirection(dirsmo251085);
smo246321.setStemDirection(dirsmo251085);
smo246322.setStemDirection(dirsmo251085);
const smo251085 = new VF.Beam([smo246319,smo246320,smo246321,smo246322]);
const dirsmo251088 = smo249176.getStemDirection();
smo249176.setStemDirection(dirsmo251088);
smo249177.setStemDirection(dirsmo251088);
const smo251088 = new VF.Beam([smo249176,smo249177]);
const dirsmo251089 = smo249178.getStemDirection();
smo249178.setStemDirection(dirsmo251089);
smo249179.setStemDirection(dirsmo251089);
const smo251089 = new VF.Beam([smo249178,smo249179]);
 
// formatting measures in staff group smo245304
fmtsmo24633613.format([smo246336v0,smo249193v0], 281);
const stavesmo246336 = new VF.Stave(368, 1132, 295);
stavesmo246336.setAttribute('id', 'stavesmo246336');
stavesmo246336.setBegBarType(VF.Barline.type.NONE);
stavesmo246336.setContext(context);
stavesmo246336.draw();
smo246336v0.draw(context, stavesmo246336);
smo251085.setContext(context);
smo251085.draw();
const stavesmo249193 = new VF.Stave(368, 1287, 295);
stavesmo249193.setAttribute('id', 'stavesmo249193');
stavesmo249193.setBegBarType(VF.Barline.type.NONE);
stavesmo249193.setContext(context);
stavesmo249193.draw();
smo249193v0.draw(context, stavesmo249193);
smo251088.setContext(context);
smo251088.draw();
smo251089.setContext(context);
smo251089.draw();
const fmtsmo24635814 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo246358v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246358v0ar = [];
const smo246337 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
noteHash['smo246337'] = smo246337;
smo246337.setAttribute('id', 'smo246337');
smo246358v0ar.push(smo246337);
const smo246339 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo246339'] = smo246339;
smo246339.setAttribute('id', 'smo246339');
smo246358v0ar.push(smo246339);
const smo246340 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
noteHash['smo246340'] = smo246340;
smo246340.setAttribute('id', 'smo246340');
smo246358v0ar.push(smo246340);
const smo246341 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
noteHash['smo246341'] = smo246341;
smo246341.setAttribute('id', 'smo246341');
smo246358v0ar.push(smo246341);
const smo246342 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
noteHash['smo246342'] = smo246342;
smo246342.setAttribute('id', 'smo246342');
smo246358v0ar.push(smo246342);
const smo246343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n","bn/5/n"]}'))
noteHash['smo246343'] = smo246343;
smo246343.setAttribute('id', 'smo246343');
smo246358v0ar.push(smo246343);
const smo246344 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
noteHash['smo246344'] = smo246344;
smo246344.setAttribute('id', 'smo246344');
smo246358v0ar.push(smo246344);
smo246358v0.addTickables(smo246358v0ar)
fmtsmo24635814.joinVoices([smo246358v0]);
const fmtsmo24921114 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo249211v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249211v0ar = [];
const smo249194 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo249194'] = smo249194;
smo249194.setAttribute('id', 'smo249194');
smo249211v0ar.push(smo249194);
const smo249195 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo249195'] = smo249195;
smo249195.setAttribute('id', 'smo249195');
smo249211v0ar.push(smo249195);
const smo249196 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo249196'] = smo249196;
smo249196.setAttribute('id', 'smo249196');
smo249211v0ar.push(smo249196);
const smo249197 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
noteHash['smo249197'] = smo249197;
smo249197.setAttribute('id', 'smo249197');
smo249211v0ar.push(smo249197);
smo249211v0.addTickables(smo249211v0ar)
fmtsmo24921114.joinVoices([smo249211v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251092 = smo246337.getStemDirection();
smo246337.setStemDirection(dirsmo251092);
smo246339.setStemDirection(dirsmo251092);
smo246340.setStemDirection(dirsmo251092);
smo246341.setStemDirection(dirsmo251092);
const smo251092 = new VF.Beam([smo246337,smo246339,smo246340,smo246341]);
const dirsmo251093 = smo246342.getStemDirection();
smo246342.setStemDirection(dirsmo251093);
smo246343.setStemDirection(dirsmo251093);
smo246344.setStemDirection(dirsmo251093);
const smo251093 = new VF.Beam([smo246342,smo246343,smo246344]);
const dirsmo251096 = smo249194.getStemDirection();
smo249194.setStemDirection(dirsmo251096);
smo249195.setStemDirection(dirsmo251096);
const smo251096 = new VF.Beam([smo249194,smo249195]);
const dirsmo251097 = smo249196.getStemDirection();
smo249196.setStemDirection(dirsmo251097);
smo249197.setStemDirection(dirsmo251097);
const smo251097 = new VF.Beam([smo249196,smo249197]);
 
// formatting measures in staff group smo245304
fmtsmo24635814.format([smo246358v0,smo249211v0], 281);
const stavesmo246358 = new VF.Stave(663, 1132, 295);
stavesmo246358.setAttribute('id', 'stavesmo246358');
stavesmo246358.setBegBarType(VF.Barline.type.NONE);
stavesmo246358.setContext(context);
stavesmo246358.draw();
smo246358v0.draw(context, stavesmo246358);
smo251092.setContext(context);
smo251092.draw();
smo251093.setContext(context);
smo251093.draw();
const stavesmo249211 = new VF.Stave(663, 1287, 295);
stavesmo249211.setAttribute('id', 'stavesmo249211');
stavesmo249211.setBegBarType(VF.Barline.type.NONE);
stavesmo249211.setContext(context);
stavesmo249211.draw();
smo249211v0.draw(context, stavesmo249211);
smo251096.setContext(context);
smo251096.draw();
smo251097.setContext(context);
smo251097.draw();
const fmtsmo24637615 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo246376v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246376v0ar = [];
const smo246359 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo246359'] = smo246359;
smo246359.setAttribute('id', 'smo246359');
smo246376v0ar.push(smo246359);
const smo246360 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo246360'] = smo246360;
smo246360.setAttribute('id', 'smo246360');
smo246376v0ar.push(smo246360);
const smo246361 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo246361'] = smo246361;
smo246361.setAttribute('id', 'smo246361');
smo246376v0ar.push(smo246361);
const smo246362 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
noteHash['smo246362'] = smo246362;
smo246362.setAttribute('id', 'smo246362');
smo246376v0ar.push(smo246362);
smo246376v0.addTickables(smo246376v0ar)
fmtsmo24637615.joinVoices([smo246376v0]);
const fmtsmo24922915 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo249229v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249229v0ar = [];
const smo249212 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo249212'] = smo249212;
smo249212.setAttribute('id', 'smo249212');
smo249229v0ar.push(smo249212);
const smo249213 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo249213'] = smo249213;
smo249213.setAttribute('id', 'smo249213');
smo249229v0ar.push(smo249213);
const smo249214 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo249214'] = smo249214;
smo249214.setAttribute('id', 'smo249214');
smo249229v0ar.push(smo249214);
const smo249215 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo249215'] = smo249215;
smo249215.setAttribute('id', 'smo249215');
smo249229v0ar.push(smo249215);
smo249229v0.addTickables(smo249229v0ar)
fmtsmo24922915.joinVoices([smo249229v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251100 = smo246360.getStemDirection();
smo246360.setStemDirection(dirsmo251100);
smo246361.setStemDirection(dirsmo251100);
smo246362.setStemDirection(dirsmo251100);
const smo251100 = new VF.Beam([smo246360,smo246361,smo246362]);
const dirsmo251103 = smo249212.getStemDirection();
smo249212.setStemDirection(dirsmo251103);
smo249213.setStemDirection(dirsmo251103);
const smo251103 = new VF.Beam([smo249212,smo249213]);
 
// formatting measures in staff group smo245304
fmtsmo24637615.format([smo246376v0,smo249229v0], 281);
const stavesmo246376 = new VF.Stave(958, 1132, 295);
stavesmo246376.setAttribute('id', 'stavesmo246376');
stavesmo246376.setBegBarType(VF.Barline.type.NONE);
stavesmo246376.setContext(context);
stavesmo246376.draw();
smo246376v0.draw(context, stavesmo246376);
smo251100.setContext(context);
smo251100.draw();
const stavesmo249229 = new VF.Stave(958, 1287, 295);
stavesmo249229.setAttribute('id', 'stavesmo249229');
stavesmo249229.setBegBarType(VF.Barline.type.NONE);
stavesmo249229.setContext(context);
stavesmo249229.draw();
smo249229v0.draw(context, stavesmo249229);
smo251103.setContext(context);
smo251103.draw();
const fmtsmo24639816 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo246398v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246398v0ar = [];
const smo246377 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
noteHash['smo246377'] = smo246377;
smo246377.setAttribute('id', 'smo246377');
smo246398v0ar.push(smo246377);
const smo246378 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo246378'] = smo246378;
smo246378.setAttribute('id', 'smo246378');
smo246398v0ar.push(smo246378);
const smo246379 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
noteHash['smo246379'] = smo246379;
smo246379.setAttribute('id', 'smo246379');
smo246398v0ar.push(smo246379);
const smo246380 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
noteHash['smo246380'] = smo246380;
smo246380.setAttribute('id', 'smo246380');
smo246398v0ar.push(smo246380);
const smo246381 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
noteHash['smo246381'] = smo246381;
smo246381.setAttribute('id', 'smo246381');
smo246398v0ar.push(smo246381);
const smo246382 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo246382'] = smo246382;
smo246382.setAttribute('id', 'smo246382');
smo246398v0ar.push(smo246382);
const smo246383 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
noteHash['smo246383'] = smo246383;
smo246383.setAttribute('id', 'smo246383');
smo246398v0ar.push(smo246383);
const smo246384 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo246384'] = smo246384;
smo246384.setAttribute('id', 'smo246384');
smo246398v0ar.push(smo246384);
smo246398v0.addTickables(smo246398v0ar)
fmtsmo24639816.joinVoices([smo246398v0]);
const fmtsmo24924716 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo249247v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249247v0ar = [];
const smo249230 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
noteHash['smo249230'] = smo249230;
smo249230.setAttribute('id', 'smo249230');
smo249247v0ar.push(smo249230);
const smo249231 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo249231'] = smo249231;
smo249231.setAttribute('id', 'smo249231');
smo249247v0ar.push(smo249231);
const smo249232 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","bb/3/n"]}'))
noteHash['smo249232'] = smo249232;
smo249232.setAttribute('id', 'smo249232');
const smo2492320acc = new VF.Accidental('b');
smo249232.addModifier(smo2492320acc, 0);
const smo2492321acc = new VF.Accidental('b');
smo249232.addModifier(smo2492321acc, 1);
smo249247v0ar.push(smo249232);
const smo249233 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo249233'] = smo249233;
smo249233.setAttribute('id', 'smo249233');
smo249247v0ar.push(smo249233);
smo249247v0.addTickables(smo249247v0ar)
fmtsmo24924716.joinVoices([smo249247v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251106 = smo246377.getStemDirection();
smo246377.setStemDirection(dirsmo251106);
smo246378.setStemDirection(dirsmo251106);
smo246379.setStemDirection(dirsmo251106);
smo246380.setStemDirection(dirsmo251106);
const smo251106 = new VF.Beam([smo246377,smo246378,smo246379,smo246380]);
const dirsmo251107 = smo246381.getStemDirection();
smo246381.setStemDirection(dirsmo251107);
smo246382.setStemDirection(dirsmo251107);
smo246383.setStemDirection(dirsmo251107);
smo246384.setStemDirection(dirsmo251107);
const smo251107 = new VF.Beam([smo246381,smo246382,smo246383,smo246384]);
const dirsmo251110 = smo249230.getStemDirection();
smo249230.setStemDirection(dirsmo251110);
smo249231.setStemDirection(dirsmo251110);
const smo251110 = new VF.Beam([smo249230,smo249231]);
const dirsmo251111 = smo249232.getStemDirection();
smo249232.setStemDirection(dirsmo251111);
smo249233.setStemDirection(dirsmo251111);
const smo251111 = new VF.Beam([smo249232,smo249233]);
 
// formatting measures in staff group smo245304
fmtsmo24639816.format([smo246398v0,smo249247v0], 281);
const stavesmo246398 = new VF.Stave(1253, 1132, 295);
stavesmo246398.setAttribute('id', 'stavesmo246398');
stavesmo246398.setBegBarType(VF.Barline.type.NONE);
stavesmo246398.setContext(context);
stavesmo246398.draw();
smo246398v0.draw(context, stavesmo246398);
smo251106.setContext(context);
smo251106.draw();
smo251107.setContext(context);
smo251107.draw();
const stavesmo249247 = new VF.Stave(1253, 1287, 295);
stavesmo249247.setAttribute('id', 'stavesmo249247');
stavesmo249247.setBegBarType(VF.Barline.type.NONE);
stavesmo249247.setContext(context);
stavesmo249247.draw();
smo249247v0.draw(context, stavesmo249247);
smo251110.setContext(context);
smo251110.draw();
smo251111.setContext(context);
smo251111.draw();
const fmtsmo24642017 = new VF.Formatter();
//
// voices and notes for stave 0 17
const smo246420v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246420v0ar = [];
const smo246399 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
noteHash['smo246399'] = smo246399;
smo246399.setAttribute('id', 'smo246399');
smo246420v0ar.push(smo246399);
const smo246400 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo246400'] = smo246400;
smo246400.setAttribute('id', 'smo246400');
smo246420v0ar.push(smo246400);
const smo246401 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
noteHash['smo246401'] = smo246401;
smo246401.setAttribute('id', 'smo246401');
smo246420v0ar.push(smo246401);
const smo246402 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
noteHash['smo246402'] = smo246402;
smo246402.setAttribute('id', 'smo246402');
smo246420v0ar.push(smo246402);
const smo246403 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
noteHash['smo246403'] = smo246403;
smo246403.setAttribute('id', 'smo246403');
smo246420v0ar.push(smo246403);
const smo246404 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo246404'] = smo246404;
smo246404.setAttribute('id', 'smo246404');
smo246420v0ar.push(smo246404);
const smo246405 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
noteHash['smo246405'] = smo246405;
smo246405.setAttribute('id', 'smo246405');
smo246420v0ar.push(smo246405);
const smo246406 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo246406'] = smo246406;
smo246406.setAttribute('id', 'smo246406');
smo246420v0ar.push(smo246406);
smo246420v0.addTickables(smo246420v0ar)
fmtsmo24642017.joinVoices([smo246420v0]);
const fmtsmo24926517 = new VF.Formatter();
//
// voices and notes for stave 1 17
const smo249265v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249265v0ar = [];
const smo249248 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n","an/3/n"]}'))
noteHash['smo249248'] = smo249248;
smo249248.setAttribute('id', 'smo249248');
smo249265v0ar.push(smo249248);
const smo249249 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo249249'] = smo249249;
smo249249.setAttribute('id', 'smo249249');
smo249265v0ar.push(smo249249);
const smo249250 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/2/n","ab/3/n"]}'))
noteHash['smo249250'] = smo249250;
smo249250.setAttribute('id', 'smo249250');
const smo2492500acc = new VF.Accidental('b');
smo249250.addModifier(smo2492500acc, 0);
const smo2492501acc = new VF.Accidental('b');
smo249250.addModifier(smo2492501acc, 1);
smo249265v0ar.push(smo249250);
const smo249251 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo249251'] = smo249251;
smo249251.setAttribute('id', 'smo249251');
smo249265v0ar.push(smo249251);
smo249265v0.addTickables(smo249265v0ar)
fmtsmo24926517.joinVoices([smo249265v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251114 = smo246399.getStemDirection();
smo246399.setStemDirection(dirsmo251114);
smo246400.setStemDirection(dirsmo251114);
smo246401.setStemDirection(dirsmo251114);
smo246402.setStemDirection(dirsmo251114);
const smo251114 = new VF.Beam([smo246399,smo246400,smo246401,smo246402]);
const dirsmo251115 = smo246403.getStemDirection();
smo246403.setStemDirection(dirsmo251115);
smo246404.setStemDirection(dirsmo251115);
smo246405.setStemDirection(dirsmo251115);
smo246406.setStemDirection(dirsmo251115);
const smo251115 = new VF.Beam([smo246403,smo246404,smo246405,smo246406]);
const dirsmo251118 = smo249248.getStemDirection();
smo249248.setStemDirection(dirsmo251118);
smo249249.setStemDirection(dirsmo251118);
const smo251118 = new VF.Beam([smo249248,smo249249]);
const dirsmo251119 = smo249250.getStemDirection();
smo249250.setStemDirection(dirsmo251119);
smo249251.setStemDirection(dirsmo251119);
const smo251119 = new VF.Beam([smo249250,smo249251]);
 
// formatting measures in staff group smo245304
fmtsmo24642017.format([smo246420v0,smo249265v0], 281);
const stavesmo246420 = new VF.Stave(1548, 1132, 295);
stavesmo246420.setAttribute('id', 'stavesmo246420');
stavesmo246420.setBegBarType(VF.Barline.type.NONE);
stavesmo246420.setContext(context);
stavesmo246420.draw();
smo246420v0.draw(context, stavesmo246420);
smo251114.setContext(context);
smo251114.draw();
smo251115.setContext(context);
smo251115.draw();
const stavesmo249265 = new VF.Stave(1548, 1287, 295);
stavesmo249265.setAttribute('id', 'stavesmo249265');
stavesmo249265.setBegBarType(VF.Barline.type.NONE);
stavesmo249265.setContext(context);
stavesmo249265.draw();
smo249265v0.draw(context, stavesmo249265);
smo251118.setContext(context);
smo251118.draw();
smo251119.setContext(context);
smo251119.draw();
const rightsmo245304stavesmo2464201 = new VF.StaveConnector(stavesmo246420, stavesmo249265).setType(0);
rightsmo245304stavesmo2464201.setContext(context).draw();
const fmtsmo24644118 = new VF.Formatter();
//
// voices and notes for stave 0 18
const smo246441v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246441v0ar = [];
const smo246421 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
noteHash['smo246421'] = smo246421;
smo246421.setAttribute('id', 'smo246421');
smo246441v0ar.push(smo246421);
const smo246422 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo246422'] = smo246422;
smo246422.setAttribute('id', 'smo246422');
smo246441v0ar.push(smo246422);
const smo246423 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
noteHash['smo246423'] = smo246423;
smo246423.setAttribute('id', 'smo246423');
smo246441v0ar.push(smo246423);
const smo246424 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
noteHash['smo246424'] = smo246424;
smo246424.setAttribute('id', 'smo246424');
smo246441v0ar.push(smo246424);
const smo246425 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
noteHash['smo246425'] = smo246425;
smo246425.setAttribute('id', 'smo246425');
smo246441v0ar.push(smo246425);
const smo246426 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n","bn/5/n"]}'))
noteHash['smo246426'] = smo246426;
smo246426.setAttribute('id', 'smo246426');
smo246441v0ar.push(smo246426);
const smo246427 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
noteHash['smo246427'] = smo246427;
smo246427.setAttribute('id', 'smo246427');
smo246441v0ar.push(smo246427);
smo246441v0.addTickables(smo246441v0ar)
fmtsmo24644118.joinVoices([smo246441v0]);
const fmtsmo24928318 = new VF.Formatter();
//
// voices and notes for stave 1 18
const smo249283v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249283v0ar = [];
const smo249266 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
noteHash['smo249266'] = smo249266;
smo249266.setAttribute('id', 'smo249266');
smo249283v0ar.push(smo249266);
const smo249267 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo249267'] = smo249267;
smo249267.setAttribute('id', 'smo249267');
smo249283v0ar.push(smo249267);
const smo249268 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo249268'] = smo249268;
smo249268.setAttribute('id', 'smo249268');
smo249283v0ar.push(smo249268);
const smo249269 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
noteHash['smo249269'] = smo249269;
smo249269.setAttribute('id', 'smo249269');
smo249283v0ar.push(smo249269);
smo249283v0.addTickables(smo249283v0ar)
fmtsmo24928318.joinVoices([smo249283v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251130 = smo246421.getStemDirection();
smo246421.setStemDirection(dirsmo251130);
smo246422.setStemDirection(dirsmo251130);
smo246423.setStemDirection(dirsmo251130);
smo246424.setStemDirection(dirsmo251130);
const smo251130 = new VF.Beam([smo246421,smo246422,smo246423,smo246424]);
const dirsmo251131 = smo246425.getStemDirection();
smo246425.setStemDirection(dirsmo251131);
smo246426.setStemDirection(dirsmo251131);
smo246427.setStemDirection(dirsmo251131);
const smo251131 = new VF.Beam([smo246425,smo246426,smo246427]);
const dirsmo251134 = smo249266.getStemDirection();
smo249266.setStemDirection(dirsmo251134);
smo249267.setStemDirection(dirsmo251134);
const smo251134 = new VF.Beam([smo249266,smo249267]);
const dirsmo251135 = smo249268.getStemDirection();
smo249268.setStemDirection(dirsmo251135);
smo249269.setStemDirection(dirsmo251135);
const smo251135 = new VF.Beam([smo249268,smo249269]);
 
// formatting measures in staff group smo245304
fmtsmo24644118.format([smo246441v0,smo249283v0], 237);
const stavesmo246441 = new VF.Stave(73, 1481, 295);
stavesmo246441.setAttribute('id', 'stavesmo246441');
stavesmo246441.setBegBarType(1);
stavesmo246441.addClef('treble');
stavesmo246441.setContext(context);
stavesmo246441.draw();
smo246441v0.draw(context, stavesmo246441);
smo251130.setContext(context);
smo251130.draw();
smo251131.setContext(context);
smo251131.draw();
const stavesmo249283 = new VF.Stave(73, 1625, 295);
stavesmo249283.setAttribute('id', 'stavesmo249283');
stavesmo249283.setBegBarType(1);
stavesmo249283.addClef('bass');
stavesmo249283.setContext(context);
stavesmo249283.draw();
smo249283v0.draw(context, stavesmo249283);
smo251134.setContext(context);
smo251134.draw();
smo251135.setContext(context);
smo251135.draw();
const leftsmo245304stavesmo2464411 = new VF.StaveConnector(stavesmo246441, stavesmo249283).setType(3);
leftsmo245304stavesmo2464411.setContext(context).draw();
const fmtsmo24646019 = new VF.Formatter();
//
// voices and notes for stave 0 19
const smo246460v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246460v0ar = [];
const smo246442 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo246442'] = smo246442;
smo246442.setAttribute('id', 'smo246442');
smo246460v0ar.push(smo246442);
const smo246443 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo246443'] = smo246443;
smo246443.setAttribute('id', 'smo246443');
smo246460v0ar.push(smo246443);
const smo246444 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo246444'] = smo246444;
smo246444.setAttribute('id', 'smo246444');
smo246460v0ar.push(smo246444);
const smo246445 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
noteHash['smo246445'] = smo246445;
smo246445.setAttribute('id', 'smo246445');
const smo2464450acc = new VF.Accidental('b');
smo246445.addModifier(smo2464450acc, 0);
smo246460v0ar.push(smo246445);
smo246460v0.addTickables(smo246460v0ar)
fmtsmo24646019.joinVoices([smo246460v0]);
const fmtsmo24930219 = new VF.Formatter();
//
// voices and notes for stave 1 19
const smo249302v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249302v0ar = [];
const smo249284 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo249284'] = smo249284;
smo249284.setAttribute('id', 'smo249284');
smo249302v0ar.push(smo249284);
const smo249285 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
noteHash['smo249285'] = smo249285;
smo249285.setAttribute('id', 'smo249285');
smo249302v0ar.push(smo249285);
const smo249286 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n","an/3/n"]}'))
noteHash['smo249286'] = smo249286;
smo249286.setAttribute('id', 'smo249286');
smo249302v0ar.push(smo249286);
const smo249287 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n","bn/3/n"]}'))
noteHash['smo249287'] = smo249287;
smo249287.setAttribute('id', 'smo249287');
smo249302v0ar.push(smo249287);
smo249302v0.addTickables(smo249302v0ar)
fmtsmo24930219.joinVoices([smo249302v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251138 = smo246443.getStemDirection();
smo246443.setStemDirection(dirsmo251138);
smo246444.setStemDirection(dirsmo251138);
smo246445.setStemDirection(dirsmo251138);
const smo251138 = new VF.Beam([smo246443,smo246444,smo246445]);
const dirsmo251140 = smo249284.getStemDirection();
smo249284.setStemDirection(dirsmo251140);
smo249285.setStemDirection(dirsmo251140);
const smo251140 = new VF.Beam([smo249284,smo249285]);
const dirsmo251141 = smo249286.getStemDirection();
smo249286.setStemDirection(dirsmo251141);
smo249287.setStemDirection(dirsmo251141);
const smo251141 = new VF.Beam([smo249286,smo249287]);
 
// formatting measures in staff group smo245304
fmtsmo24646019.format([smo246460v0,smo249302v0], 277);
const stavesmo246460 = new VF.Stave(368, 1481, 295);
stavesmo246460.setAttribute('id', 'stavesmo246460');
stavesmo246460.setBegBarType(VF.Barline.type.NONE);
stavesmo246460.setEndBarType(5);
stavesmo246460.setContext(context);
stavesmo246460.draw();
smo246460v0.draw(context, stavesmo246460);
smo251138.setContext(context);
smo251138.draw();
const stavesmo249302 = new VF.Stave(368, 1625, 295);
stavesmo249302.setAttribute('id', 'stavesmo249302');
stavesmo249302.setBegBarType(VF.Barline.type.NONE);
stavesmo249302.setEndBarType(5);
stavesmo249302.setContext(context);
stavesmo249302.draw();
smo249302v0.draw(context, stavesmo249302);
smo251140.setContext(context);
smo251140.draw();
smo251141.setContext(context);
smo251141.draw();
const fmtsmo24648020 = new VF.Formatter();
//
// voices and notes for stave 0 20
const smo246480v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246480v0ar = [];
const smo246461 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo246461'] = smo246461;
smo246461.setAttribute('id', 'smo246461');
smo246480v0ar.push(smo246461);
const smo246462 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo246462'] = smo246462;
smo246462.setAttribute('id', 'smo246462');
smo246480v0ar.push(smo246462);
const smo246463 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n","en/5/n"]}'))
noteHash['smo246463'] = smo246463;
smo246463.setAttribute('id', 'smo246463');
smo246480v0ar.push(smo246463);
const smo246464 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n","fn/5/n"]}'))
noteHash['smo246464'] = smo246464;
smo246464.setAttribute('id', 'smo246464');
smo246480v0ar.push(smo246464);
const smo246465 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","eb/5/n","gb/5/n"]}'))
noteHash['smo246465'] = smo246465;
smo246465.setAttribute('id', 'smo246465');
const smo2464650acc = new VF.Accidental('b');
smo246465.addModifier(smo2464650acc, 0);
const smo2464651acc = new VF.Accidental('b');
smo246465.addModifier(smo2464651acc, 1);
const smo2464652acc = new VF.Accidental('b');
smo246465.addModifier(smo2464652acc, 2);
smo246480v0ar.push(smo246465);
smo246480v0.addTickables(smo246480v0ar)
fmtsmo24648020.joinVoices([smo246480v0]);
const fmtsmo24932120 = new VF.Formatter();
//
// voices and notes for stave 1 20
const smo249321v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249321v0ar = [];
const smo249303 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo249303'] = smo249303;
smo249303.setAttribute('id', 'smo249303');
smo249321v0ar.push(smo249303);
const smo249304 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
noteHash['smo249304'] = smo249304;
smo249304.setAttribute('id', 'smo249304');
smo249321v0ar.push(smo249304);
const smo249305 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
noteHash['smo249305'] = smo249305;
smo249305.setAttribute('id', 'smo249305');
smo249321v0ar.push(smo249305);
const smo249306 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo249306'] = smo249306;
smo249306.setAttribute('id', 'smo249306');
smo249321v0ar.push(smo249306);
smo249321v0.addTickables(smo249321v0ar)
fmtsmo24932120.joinVoices([smo249321v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251143 = smo246462.getStemDirection();
smo246462.setStemDirection(dirsmo251143);
smo246463.setStemDirection(dirsmo251143);
smo246464.setStemDirection(dirsmo251143);
smo246465.setStemDirection(dirsmo251143);
const smo251143 = new VF.Beam([smo246462,smo246463,smo246464,smo246465]);
const dirsmo251146 = smo249303.getStemDirection();
smo249303.setStemDirection(dirsmo251146);
smo249304.setStemDirection(dirsmo251146);
const smo251146 = new VF.Beam([smo249303,smo249304]);
 
// formatting measures in staff group smo245304
fmtsmo24648020.format([smo246480v0,smo249321v0], 281);
const stavesmo246480 = new VF.Stave(663, 1481, 295);
stavesmo246480.setAttribute('id', 'stavesmo246480');
stavesmo246480.setBegBarType(VF.Barline.type.NONE);
stavesmo246480.setContext(context);
stavesmo246480.draw();
smo246480v0.draw(context, stavesmo246480);
smo251143.setContext(context);
smo251143.draw();
const stavesmo249321 = new VF.Stave(663, 1625, 295);
stavesmo249321.setAttribute('id', 'stavesmo249321');
stavesmo249321.setBegBarType(VF.Barline.type.NONE);
stavesmo249321.setContext(context);
stavesmo249321.draw();
smo249321v0.draw(context, stavesmo249321);
smo251146.setContext(context);
smo251146.draw();
const fmtsmo24650121 = new VF.Formatter();
//
// voices and notes for stave 0 21
const smo246501v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246501v0ar = [];
const smo246481 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
noteHash['smo246481'] = smo246481;
smo246481.setAttribute('id', 'smo246481');
smo246501v0ar.push(smo246481);
const smo246482 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","en/5/n","an/5/n"]}'))
noteHash['smo246482'] = smo246482;
smo246482.setAttribute('id', 'smo246482');
smo246501v0ar.push(smo246482);
const smo246483 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
noteHash['smo246483'] = smo246483;
smo246483.setAttribute('id', 'smo246483');
smo246501v0ar.push(smo246483);
const smo246484 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
noteHash['smo246484'] = smo246484;
smo246484.setAttribute('id', 'smo246484');
smo246501v0ar.push(smo246484);
const smo246485 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n","en/5/n"]}'))
noteHash['smo246485'] = smo246485;
smo246485.setAttribute('id', 'smo246485');
smo246501v0ar.push(smo246485);
const smo246486 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n","fn/5/n"]}'))
noteHash['smo246486'] = smo246486;
smo246486.setAttribute('id', 'smo246486');
smo246501v0ar.push(smo246486);
const smo246487 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","eb/5/n","gb/5/n"]}'))
noteHash['smo246487'] = smo246487;
smo246487.setAttribute('id', 'smo246487');
const smo2464870acc = new VF.Accidental('b');
smo246487.addModifier(smo2464870acc, 0);
const smo2464871acc = new VF.Accidental('b');
smo246487.addModifier(smo2464871acc, 1);
const smo2464872acc = new VF.Accidental('b');
smo246487.addModifier(smo2464872acc, 2);
smo246501v0ar.push(smo246487);
smo246501v0.addTickables(smo246501v0ar)
fmtsmo24650121.joinVoices([smo246501v0]);
const fmtsmo24933921 = new VF.Formatter();
//
// voices and notes for stave 1 21
const smo249339v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249339v0ar = [];
const smo249322 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
noteHash['smo249322'] = smo249322;
smo249322.setAttribute('id', 'smo249322');
smo249339v0ar.push(smo249322);
const smo249323 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo249323'] = smo249323;
smo249323.setAttribute('id', 'smo249323');
smo249339v0ar.push(smo249323);
const smo249324 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo249324'] = smo249324;
smo249324.setAttribute('id', 'smo249324');
smo249339v0ar.push(smo249324);
const smo249325 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo249325'] = smo249325;
smo249325.setAttribute('id', 'smo249325');
smo249339v0ar.push(smo249325);
smo249339v0.addTickables(smo249339v0ar)
fmtsmo24933921.joinVoices([smo249339v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251149 = smo246481.getStemDirection();
smo246481.setStemDirection(dirsmo251149);
smo246482.setStemDirection(dirsmo251149);
smo246483.setStemDirection(dirsmo251149);
const smo251149 = new VF.Beam([smo246481,smo246482,smo246483]);
const dirsmo251150 = smo246484.getStemDirection();
smo246484.setStemDirection(dirsmo251150);
smo246485.setStemDirection(dirsmo251150);
smo246486.setStemDirection(dirsmo251150);
smo246487.setStemDirection(dirsmo251150);
const smo251150 = new VF.Beam([smo246484,smo246485,smo246486,smo246487]);
const dirsmo251152 = smo249322.getStemDirection();
smo249322.setStemDirection(dirsmo251152);
smo249323.setStemDirection(dirsmo251152);
const smo251152 = new VF.Beam([smo249322,smo249323]);
const dirsmo251153 = smo249324.getStemDirection();
smo249324.setStemDirection(dirsmo251153);
smo249325.setStemDirection(dirsmo251153);
const smo251153 = new VF.Beam([smo249324,smo249325]);
 
// formatting measures in staff group smo245304
fmtsmo24650121.format([smo246501v0,smo249339v0], 272);
const stavesmo246501 = new VF.Stave(958, 1481, 295);
stavesmo246501.setAttribute('id', 'stavesmo246501');
stavesmo246501.setBegBarType(4);
stavesmo246501.setContext(context);
stavesmo246501.draw();
smo246501v0.draw(context, stavesmo246501);
smo251149.setContext(context);
smo251149.draw();
smo251150.setContext(context);
smo251150.draw();
const stavesmo249339 = new VF.Stave(958, 1625, 295);
stavesmo249339.setAttribute('id', 'stavesmo249339');
stavesmo249339.setBegBarType(4);
stavesmo249339.setContext(context);
stavesmo249339.draw();
smo249339v0.draw(context, stavesmo249339);
smo251152.setContext(context);
smo251152.draw();
smo251153.setContext(context);
smo251153.draw();
const fmtsmo24652222 = new VF.Formatter();
//
// voices and notes for stave 0 22
const smo246522v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246522v0ar = [];
const smo246502 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
noteHash['smo246502'] = smo246502;
smo246502.setAttribute('id', 'smo246502');
smo246522v0ar.push(smo246502);
const smo246503 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","en/5/n","an/5/n"]}'))
noteHash['smo246503'] = smo246503;
smo246503.setAttribute('id', 'smo246503');
smo246522v0ar.push(smo246503);
const smo246504 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
noteHash['smo246504'] = smo246504;
smo246504.setAttribute('id', 'smo246504');
smo246522v0ar.push(smo246504);
const smo246505 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
noteHash['smo246505'] = smo246505;
smo246505.setAttribute('id', 'smo246505');
smo246522v0ar.push(smo246505);
const smo246506 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo246506'] = smo246506;
smo246506.setAttribute('id', 'smo246506');
smo246522v0ar.push(smo246506);
const smo246507 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246507'] = smo246507;
smo246507.setAttribute('id', 'smo246507');
smo246522v0ar.push(smo246507);
const smo246508 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo246508'] = smo246508;
smo246508.setAttribute('id', 'smo246508');
smo246522v0ar.push(smo246508);
smo246522v0.addTickables(smo246522v0ar)
fmtsmo24652222.joinVoices([smo246522v0]);
const fmtsmo24935722 = new VF.Formatter();
//
// voices and notes for stave 1 22
const smo249357v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249357v0ar = [];
const smo249340 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo249340'] = smo249340;
smo249340.setAttribute('id', 'smo249340');
smo249357v0ar.push(smo249340);
const smo249341 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo249341'] = smo249341;
smo249341.setAttribute('id', 'smo249341');
smo249357v0ar.push(smo249341);
const smo249342 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo249342'] = smo249342;
smo249342.setAttribute('id', 'smo249342');
smo249357v0ar.push(smo249342);
const smo249343 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo249343'] = smo249343;
smo249343.setAttribute('id', 'smo249343');
smo249357v0ar.push(smo249343);
smo249357v0.addTickables(smo249357v0ar)
fmtsmo24935722.joinVoices([smo249357v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251155 = smo246502.getStemDirection();
smo246502.setStemDirection(dirsmo251155);
smo246503.setStemDirection(dirsmo251155);
smo246504.setStemDirection(dirsmo251155);
const smo251155 = new VF.Beam([smo246502,smo246503,smo246504]);
const dirsmo251156 = smo246505.getStemDirection();
smo246505.setStemDirection(dirsmo251156);
smo246506.setStemDirection(dirsmo251156);
smo246507.setStemDirection(dirsmo251156);
smo246508.setStemDirection(dirsmo251156);
const smo251156 = new VF.Beam([smo246505,smo246506,smo246507,smo246508]);
const dirsmo251159 = smo249340.getStemDirection();
smo249340.setStemDirection(dirsmo251159);
smo249341.setStemDirection(dirsmo251159);
const smo251159 = new VF.Beam([smo249340,smo249341]);
const dirsmo251160 = smo249342.getStemDirection();
smo249342.setStemDirection(dirsmo251160);
smo249343.setStemDirection(dirsmo251160);
const smo251160 = new VF.Beam([smo249342,smo249343]);
 
// formatting measures in staff group smo245304
fmtsmo24652222.format([smo246522v0,smo249357v0], 281);
const stavesmo246522 = new VF.Stave(1253, 1481, 295);
stavesmo246522.setAttribute('id', 'stavesmo246522');
stavesmo246522.setBegBarType(VF.Barline.type.NONE);
stavesmo246522.setContext(context);
stavesmo246522.draw();
smo246522v0.draw(context, stavesmo246522);
smo251155.setContext(context);
smo251155.draw();
smo251156.setContext(context);
smo251156.draw();
const stavesmo249357 = new VF.Stave(1253, 1625, 295);
stavesmo249357.setAttribute('id', 'stavesmo249357');
stavesmo249357.setBegBarType(VF.Barline.type.NONE);
stavesmo249357.setContext(context);
stavesmo249357.draw();
smo249357v0.draw(context, stavesmo249357);
smo251159.setContext(context);
smo251159.draw();
smo251160.setContext(context);
smo251160.draw();
const fmtsmo24654423 = new VF.Formatter();
//
// voices and notes for stave 0 23
const smo246544v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246544v0ar = [];
const smo246523 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo246523'] = smo246523;
smo246523.setAttribute('id', 'smo246523');
smo246544v0ar.push(smo246523);
const smo246524 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo246524'] = smo246524;
smo246524.setAttribute('id', 'smo246524');
smo246544v0ar.push(smo246524);
const smo246525 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246525'] = smo246525;
smo246525.setAttribute('id', 'smo246525');
smo246544v0ar.push(smo246525);
const smo246526 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo246526'] = smo246526;
smo246526.setAttribute('id', 'smo246526');
smo246544v0ar.push(smo246526);
const smo246527 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo246527'] = smo246527;
smo246527.setAttribute('id', 'smo246527');
smo246544v0ar.push(smo246527);
const smo246528 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo246528'] = smo246528;
smo246528.setAttribute('id', 'smo246528');
smo246544v0ar.push(smo246528);
const smo246529 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246529'] = smo246529;
smo246529.setAttribute('id', 'smo246529');
smo246544v0ar.push(smo246529);
const smo246530 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo246530'] = smo246530;
smo246530.setAttribute('id', 'smo246530');
smo246544v0ar.push(smo246530);
smo246544v0.addTickables(smo246544v0ar)
fmtsmo24654423.joinVoices([smo246544v0]);
const fmtsmo24937523 = new VF.Formatter();
//
// voices and notes for stave 1 23
const smo249375v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249375v0ar = [];
const smo249358 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
noteHash['smo249358'] = smo249358;
smo249358.setAttribute('id', 'smo249358');
smo249375v0ar.push(smo249358);
const smo249359 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo249359'] = smo249359;
smo249359.setAttribute('id', 'smo249359');
smo249375v0ar.push(smo249359);
const smo249360 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo249360'] = smo249360;
smo249360.setAttribute('id', 'smo249360');
smo249375v0ar.push(smo249360);
const smo249361 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo249361'] = smo249361;
smo249361.setAttribute('id', 'smo249361');
const smo2493610acc = new VF.Accidental('b');
smo249361.addModifier(smo2493610acc, 0);
smo249375v0ar.push(smo249361);
smo249375v0.addTickables(smo249375v0ar)
fmtsmo24937523.joinVoices([smo249375v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251163 = smo246523.getStemDirection();
smo246523.setStemDirection(dirsmo251163);
smo246524.setStemDirection(dirsmo251163);
smo246525.setStemDirection(dirsmo251163);
smo246526.setStemDirection(dirsmo251163);
const smo251163 = new VF.Beam([smo246523,smo246524,smo246525,smo246526]);
const dirsmo251164 = smo246527.getStemDirection();
smo246527.setStemDirection(dirsmo251164);
smo246528.setStemDirection(dirsmo251164);
smo246529.setStemDirection(dirsmo251164);
smo246530.setStemDirection(dirsmo251164);
const smo251164 = new VF.Beam([smo246527,smo246528,smo246529,smo246530]);
const dirsmo251167 = smo249358.getStemDirection();
smo249358.setStemDirection(dirsmo251167);
smo249359.setStemDirection(dirsmo251167);
const smo251167 = new VF.Beam([smo249358,smo249359]);
const dirsmo251168 = smo249360.getStemDirection();
smo249360.setStemDirection(dirsmo251168);
smo249361.setStemDirection(dirsmo251168);
const smo251168 = new VF.Beam([smo249360,smo249361]);
 
// formatting measures in staff group smo245304
fmtsmo24654423.format([smo246544v0,smo249375v0], 281);
const stavesmo246544 = new VF.Stave(1548, 1481, 295);
stavesmo246544.setAttribute('id', 'stavesmo246544');
stavesmo246544.setBegBarType(VF.Barline.type.NONE);
stavesmo246544.setContext(context);
stavesmo246544.draw();
smo246544v0.draw(context, stavesmo246544);
smo251163.setContext(context);
smo251163.draw();
smo251164.setContext(context);
smo251164.draw();
const stavesmo249375 = new VF.Stave(1548, 1625, 295);
stavesmo249375.setAttribute('id', 'stavesmo249375');
stavesmo249375.setBegBarType(VF.Barline.type.NONE);
stavesmo249375.setContext(context);
stavesmo249375.draw();
smo249375v0.draw(context, stavesmo249375);
smo251167.setContext(context);
smo251167.draw();
smo251168.setContext(context);
smo251168.draw();
const rightsmo245304stavesmo2465441 = new VF.StaveConnector(stavesmo246544, stavesmo249375).setType(0);
rightsmo245304stavesmo2465441.setContext(context).draw();
const fmtsmo24656624 = new VF.Formatter();
//
// voices and notes for stave 0 24
const smo246566v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246566v0ar = [];
const smo246545 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo246545'] = smo246545;
smo246545.setAttribute('id', 'smo246545');
smo246566v0ar.push(smo246545);
const smo246546 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo246546'] = smo246546;
smo246546.setAttribute('id', 'smo246546');
smo246566v0ar.push(smo246546);
const smo246547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo246547'] = smo246547;
smo246547.setAttribute('id', 'smo246547');
smo246566v0ar.push(smo246547);
const smo246548 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo246548'] = smo246548;
smo246548.setAttribute('id', 'smo246548');
smo246566v0ar.push(smo246548);
const smo246549 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo246549'] = smo246549;
smo246549.setAttribute('id', 'smo246549');
smo246566v0ar.push(smo246549);
const smo246550 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo246550'] = smo246550;
smo246550.setAttribute('id', 'smo246550');
smo246566v0ar.push(smo246550);
const smo246551 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo246551'] = smo246551;
smo246551.setAttribute('id', 'smo246551');
smo246566v0ar.push(smo246551);
const smo246552 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo246552'] = smo246552;
smo246552.setAttribute('id', 'smo246552');
smo246566v0ar.push(smo246552);
smo246566v0.addTickables(smo246566v0ar)
fmtsmo24656624.joinVoices([smo246566v0]);
const fmtsmo24939324 = new VF.Formatter();
//
// voices and notes for stave 1 24
const smo249393v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249393v0ar = [];
const smo249376 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo249376'] = smo249376;
smo249376.setAttribute('id', 'smo249376');
smo249393v0ar.push(smo249376);
const smo249377 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo249377'] = smo249377;
smo249377.setAttribute('id', 'smo249377');
smo249393v0ar.push(smo249377);
const smo249378 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo249378'] = smo249378;
smo249378.setAttribute('id', 'smo249378');
smo249393v0ar.push(smo249378);
const smo249379 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo249379'] = smo249379;
smo249379.setAttribute('id', 'smo249379');
smo249393v0ar.push(smo249379);
smo249393v0.addTickables(smo249393v0ar)
fmtsmo24939324.joinVoices([smo249393v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251179 = smo246545.getStemDirection();
smo246545.setStemDirection(dirsmo251179);
smo246546.setStemDirection(dirsmo251179);
smo246547.setStemDirection(dirsmo251179);
smo246548.setStemDirection(dirsmo251179);
const smo251179 = new VF.Beam([smo246545,smo246546,smo246547,smo246548]);
const dirsmo251180 = smo246549.getStemDirection();
smo246549.setStemDirection(dirsmo251180);
smo246550.setStemDirection(dirsmo251180);
smo246551.setStemDirection(dirsmo251180);
smo246552.setStemDirection(dirsmo251180);
const smo251180 = new VF.Beam([smo246549,smo246550,smo246551,smo246552]);
const dirsmo251183 = smo249376.getStemDirection();
smo249376.setStemDirection(dirsmo251183);
smo249377.setStemDirection(dirsmo251183);
const smo251183 = new VF.Beam([smo249376,smo249377]);
const dirsmo251184 = smo249378.getStemDirection();
smo249378.setStemDirection(dirsmo251184);
smo249379.setStemDirection(dirsmo251184);
const smo251184 = new VF.Beam([smo249378,smo249379]);
 
// formatting measures in staff group smo245304
fmtsmo24656624.format([smo246566v0,smo249393v0], 237);
const stavesmo246566 = new VF.Stave(73, 1828, 295);
stavesmo246566.setAttribute('id', 'stavesmo246566');
stavesmo246566.setBegBarType(1);
stavesmo246566.addClef('treble');
stavesmo246566.setContext(context);
stavesmo246566.draw();
smo246566v0.draw(context, stavesmo246566);
smo251179.setContext(context);
smo251179.draw();
smo251180.setContext(context);
smo251180.draw();
const stavesmo249393 = new VF.Stave(73, 1988, 295);
stavesmo249393.setAttribute('id', 'stavesmo249393');
stavesmo249393.setBegBarType(1);
stavesmo249393.addClef('bass');
stavesmo249393.setContext(context);
stavesmo249393.draw();
smo249393v0.draw(context, stavesmo249393);
smo251183.setContext(context);
smo251183.draw();
smo251184.setContext(context);
smo251184.draw();
const leftsmo245304stavesmo2465661 = new VF.StaveConnector(stavesmo246566, stavesmo249393).setType(3);
leftsmo245304stavesmo2465661.setContext(context).draw();
const fmtsmo24658725 = new VF.Formatter();
//
// voices and notes for stave 0 25
const smo246587v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246587v0ar = [];
const smo246567 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
noteHash['smo246567'] = smo246567;
smo246567.setAttribute('id', 'smo246567');
smo246587v0ar.push(smo246567);
const smo246568 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","en/5/n","an/5/n"]}'))
noteHash['smo246568'] = smo246568;
smo246568.setAttribute('id', 'smo246568');
smo246587v0ar.push(smo246568);
const smo246569 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
noteHash['smo246569'] = smo246569;
smo246569.setAttribute('id', 'smo246569');
smo246587v0ar.push(smo246569);
const smo246570 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
noteHash['smo246570'] = smo246570;
smo246570.setAttribute('id', 'smo246570');
smo246587v0ar.push(smo246570);
const smo246571 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n","en/5/n"]}'))
noteHash['smo246571'] = smo246571;
smo246571.setAttribute('id', 'smo246571');
smo246587v0ar.push(smo246571);
const smo246572 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n","fn/5/n"]}'))
noteHash['smo246572'] = smo246572;
smo246572.setAttribute('id', 'smo246572');
smo246587v0ar.push(smo246572);
const smo246573 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","eb/5/n","gb/5/n"]}'))
noteHash['smo246573'] = smo246573;
smo246573.setAttribute('id', 'smo246573');
const smo2465730acc = new VF.Accidental('b');
smo246573.addModifier(smo2465730acc, 0);
const smo2465731acc = new VF.Accidental('b');
smo246573.addModifier(smo2465731acc, 1);
const smo2465732acc = new VF.Accidental('b');
smo246573.addModifier(smo2465732acc, 2);
smo246587v0ar.push(smo246573);
smo246587v0.addTickables(smo246587v0ar)
fmtsmo24658725.joinVoices([smo246587v0]);
const fmtsmo24941125 = new VF.Formatter();
//
// voices and notes for stave 1 25
const smo249411v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249411v0ar = [];
const smo249394 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo249394'] = smo249394;
smo249394.setAttribute('id', 'smo249394');
smo249411v0ar.push(smo249394);
const smo249395 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo249395'] = smo249395;
smo249395.setAttribute('id', 'smo249395');
smo249411v0ar.push(smo249395);
const smo249396 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo249396'] = smo249396;
smo249396.setAttribute('id', 'smo249396');
smo249411v0ar.push(smo249396);
const smo249397 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo249397'] = smo249397;
smo249397.setAttribute('id', 'smo249397');
smo249411v0ar.push(smo249397);
smo249411v0.addTickables(smo249411v0ar)
fmtsmo24941125.joinVoices([smo249411v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251187 = smo246567.getStemDirection();
smo246567.setStemDirection(dirsmo251187);
smo246568.setStemDirection(dirsmo251187);
smo246569.setStemDirection(dirsmo251187);
const smo251187 = new VF.Beam([smo246567,smo246568,smo246569]);
const dirsmo251188 = smo246570.getStemDirection();
smo246570.setStemDirection(dirsmo251188);
smo246571.setStemDirection(dirsmo251188);
smo246572.setStemDirection(dirsmo251188);
smo246573.setStemDirection(dirsmo251188);
const smo251188 = new VF.Beam([smo246570,smo246571,smo246572,smo246573]);
const dirsmo251191 = smo249394.getStemDirection();
smo249394.setStemDirection(dirsmo251191);
smo249395.setStemDirection(dirsmo251191);
const smo251191 = new VF.Beam([smo249394,smo249395]);
const dirsmo251192 = smo249396.getStemDirection();
smo249396.setStemDirection(dirsmo251192);
smo249397.setStemDirection(dirsmo251192);
const smo251192 = new VF.Beam([smo249396,smo249397]);
 
// formatting measures in staff group smo245304
fmtsmo24658725.format([smo246587v0,smo249411v0], 281);
const stavesmo246587 = new VF.Stave(368, 1828, 295);
stavesmo246587.setAttribute('id', 'stavesmo246587');
stavesmo246587.setBegBarType(VF.Barline.type.NONE);
stavesmo246587.setContext(context);
stavesmo246587.draw();
smo246587v0.draw(context, stavesmo246587);
smo251187.setContext(context);
smo251187.draw();
smo251188.setContext(context);
smo251188.draw();
const stavesmo249411 = new VF.Stave(368, 1988, 295);
stavesmo249411.setAttribute('id', 'stavesmo249411');
stavesmo249411.setBegBarType(VF.Barline.type.NONE);
stavesmo249411.setContext(context);
stavesmo249411.draw();
smo249411v0.draw(context, stavesmo249411);
smo251191.setContext(context);
smo251191.draw();
smo251192.setContext(context);
smo251192.draw();
const fmtsmo24660826 = new VF.Formatter();
//
// voices and notes for stave 0 26
const smo246608v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246608v0ar = [];
const smo246588 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
noteHash['smo246588'] = smo246588;
smo246588.setAttribute('id', 'smo246588');
smo246608v0ar.push(smo246588);
const smo246589 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","en/5/n","an/5/n"]}'))
noteHash['smo246589'] = smo246589;
smo246589.setAttribute('id', 'smo246589');
smo246608v0ar.push(smo246589);
const smo246590 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
noteHash['smo246590'] = smo246590;
smo246590.setAttribute('id', 'smo246590');
smo246608v0ar.push(smo246590);
const smo246591 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
noteHash['smo246591'] = smo246591;
smo246591.setAttribute('id', 'smo246591');
smo246608v0ar.push(smo246591);
const smo246592 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo246592'] = smo246592;
smo246592.setAttribute('id', 'smo246592');
smo246608v0ar.push(smo246592);
const smo246593 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo246593'] = smo246593;
smo246593.setAttribute('id', 'smo246593');
smo246608v0ar.push(smo246593);
const smo246594 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
noteHash['smo246594'] = smo246594;
smo246594.setAttribute('id', 'smo246594');
const smo2465940acc = new VF.Accidental('b');
smo246594.addModifier(smo2465940acc, 0);
smo246608v0ar.push(smo246594);
smo246608v0.addTickables(smo246608v0ar)
fmtsmo24660826.joinVoices([smo246608v0]);
const fmtsmo24942926 = new VF.Formatter();
//
// voices and notes for stave 1 26
const smo249429v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249429v0ar = [];
const smo249412 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo249412'] = smo249412;
smo249412.setAttribute('id', 'smo249412');
smo249429v0ar.push(smo249412);
const smo249413 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo249413'] = smo249413;
smo249413.setAttribute('id', 'smo249413');
smo249429v0ar.push(smo249413);
const smo249414 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo249414'] = smo249414;
smo249414.setAttribute('id', 'smo249414');
smo249429v0ar.push(smo249414);
const smo249415 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/3/n"]}'))
noteHash['smo249415'] = smo249415;
smo249415.setAttribute('id', 'smo249415');
const smo2494150acc = new VF.Accidental('b');
smo249415.addModifier(smo2494150acc, 0);
smo249429v0ar.push(smo249415);
smo249429v0.addTickables(smo249429v0ar)
fmtsmo24942926.joinVoices([smo249429v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251195 = smo246588.getStemDirection();
smo246588.setStemDirection(dirsmo251195);
smo246589.setStemDirection(dirsmo251195);
smo246590.setStemDirection(dirsmo251195);
const smo251195 = new VF.Beam([smo246588,smo246589,smo246590]);
const dirsmo251196 = smo246591.getStemDirection();
smo246591.setStemDirection(dirsmo251196);
smo246592.setStemDirection(dirsmo251196);
smo246593.setStemDirection(dirsmo251196);
smo246594.setStemDirection(dirsmo251196);
const smo251196 = new VF.Beam([smo246591,smo246592,smo246593,smo246594]);
const dirsmo251199 = smo249412.getStemDirection();
smo249412.setStemDirection(dirsmo251199);
smo249413.setStemDirection(dirsmo251199);
const smo251199 = new VF.Beam([smo249412,smo249413]);
const dirsmo251200 = smo249414.getStemDirection();
smo249414.setStemDirection(dirsmo251200);
smo249415.setStemDirection(dirsmo251200);
const smo251200 = new VF.Beam([smo249414,smo249415]);
 
// formatting measures in staff group smo245304
fmtsmo24660826.format([smo246608v0,smo249429v0], 281);
const stavesmo246608 = new VF.Stave(663, 1828, 295);
stavesmo246608.setAttribute('id', 'stavesmo246608');
stavesmo246608.setBegBarType(VF.Barline.type.NONE);
stavesmo246608.setContext(context);
stavesmo246608.draw();
smo246608v0.draw(context, stavesmo246608);
smo251195.setContext(context);
smo251195.draw();
smo251196.setContext(context);
smo251196.draw();
const stavesmo249429 = new VF.Stave(663, 1988, 295);
stavesmo249429.setAttribute('id', 'stavesmo249429');
stavesmo249429.setBegBarType(VF.Barline.type.NONE);
stavesmo249429.setContext(context);
stavesmo249429.draw();
smo249429v0.draw(context, stavesmo249429);
smo251199.setContext(context);
smo251199.draw();
smo251200.setContext(context);
smo251200.draw();
const fmtsmo24662927 = new VF.Formatter();
//
// voices and notes for stave 0 27
const smo246629v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246629v0ar = [];
const smo246609 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","gn/5/n","bn/5/n"]}'))
noteHash['smo246609'] = smo246609;
smo246609.setAttribute('id', 'smo246609');
smo246629v0ar.push(smo246609);
const smo246610 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","gn/5/n","bn/5/n"]}'))
noteHash['smo246610'] = smo246610;
smo246610.setAttribute('id', 'smo246610');
smo246629v0ar.push(smo246610);
const smo246611 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","gb/5/n","bn/5/n"]}'))
noteHash['smo246611'] = smo246611;
smo246611.setAttribute('id', 'smo246611');
const smo2466111acc = new VF.Accidental('b');
smo246611.addModifier(smo2466111acc, 1);
smo246629v0ar.push(smo246611);
const smo246612 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","gb/5/n","bn/5/n"]}'))
noteHash['smo246612'] = smo246612;
smo246612.setAttribute('id', 'smo246612');
smo246629v0ar.push(smo246612);
const smo246613 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo246613'] = smo246613;
smo246613.setAttribute('id', 'smo246613');
smo246629v0ar.push(smo246613);
const smo246614 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","gb/5/n"]}'))
noteHash['smo246614'] = smo246614;
smo246614.setAttribute('id', 'smo246614');
smo246629v0ar.push(smo246614);
const smo246615 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo246615'] = smo246615;
smo246615.setAttribute('id', 'smo246615');
smo246629v0ar.push(smo246615);
smo246629v0.addTickables(smo246629v0ar)
fmtsmo24662927.joinVoices([smo246629v0]);
const fmtsmo24944727 = new VF.Formatter();
//
// voices and notes for stave 1 27
const smo249447v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249447v0ar = [];
const smo249430 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo249430'] = smo249430;
smo249430.setAttribute('id', 'smo249430');
smo249447v0ar.push(smo249430);
const smo249431 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n","dn/4/n"]}'))
noteHash['smo249431'] = smo249431;
smo249431.setAttribute('id', 'smo249431');
smo249447v0ar.push(smo249431);
const smo249432 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo249432'] = smo249432;
smo249432.setAttribute('id', 'smo249432');
smo249447v0ar.push(smo249432);
const smo249433 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","dn/4/n"]}'))
noteHash['smo249433'] = smo249433;
smo249433.setAttribute('id', 'smo249433');
smo249447v0ar.push(smo249433);
smo249447v0.addTickables(smo249447v0ar)
fmtsmo24944727.joinVoices([smo249447v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251203 = smo246609.getStemDirection();
smo246609.setStemDirection(dirsmo251203);
smo246610.setStemDirection(dirsmo251203);
smo246611.setStemDirection(dirsmo251203);
const smo251203 = new VF.Beam([smo246609,smo246610,smo246611]);
const dirsmo251204 = smo246612.getStemDirection();
smo246612.setStemDirection(dirsmo251204);
smo246613.setStemDirection(dirsmo251204);
smo246614.setStemDirection(dirsmo251204);
smo246615.setStemDirection(dirsmo251204);
const smo251204 = new VF.Beam([smo246612,smo246613,smo246614,smo246615]);
const dirsmo251207 = smo249430.getStemDirection();
smo249430.setStemDirection(dirsmo251207);
smo249431.setStemDirection(dirsmo251207);
const smo251207 = new VF.Beam([smo249430,smo249431]);
const dirsmo251208 = smo249432.getStemDirection();
smo249432.setStemDirection(dirsmo251208);
smo249433.setStemDirection(dirsmo251208);
const smo251208 = new VF.Beam([smo249432,smo249433]);
 
// formatting measures in staff group smo245304
fmtsmo24662927.format([smo246629v0,smo249447v0], 281);
const stavesmo246629 = new VF.Stave(958, 1828, 295);
stavesmo246629.setAttribute('id', 'stavesmo246629');
stavesmo246629.setBegBarType(VF.Barline.type.NONE);
stavesmo246629.setContext(context);
stavesmo246629.draw();
smo246629v0.draw(context, stavesmo246629);
smo251203.setContext(context);
smo251203.draw();
smo251204.setContext(context);
smo251204.draw();
const stavesmo249447 = new VF.Stave(958, 1988, 295);
stavesmo249447.setAttribute('id', 'stavesmo249447');
stavesmo249447.setBegBarType(VF.Barline.type.NONE);
stavesmo249447.setContext(context);
stavesmo249447.draw();
smo249447v0.draw(context, stavesmo249447);
smo251207.setContext(context);
smo251207.draw();
smo251208.setContext(context);
smo251208.draw();
const fmtsmo24664828 = new VF.Formatter();
//
// voices and notes for stave 0 28
const smo246648v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246648v0ar = [];
const smo246630 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","gn/5/n"]}'))
noteHash['smo246630'] = smo246630;
smo246630.setAttribute('id', 'smo246630');
smo246648v0ar.push(smo246630);
const smo246631 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","gn/5/n"]}'))
noteHash['smo246631'] = smo246631;
smo246631.setAttribute('id', 'smo246631');
smo246648v0ar.push(smo246631);
const smo246632 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n","en/5/n"]}'))
noteHash['smo246632'] = smo246632;
smo246632.setAttribute('id', 'smo246632');
smo246648v0ar.push(smo246632);
const smo246633 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n","fn/5/n"]}'))
noteHash['smo246633'] = smo246633;
smo246633.setAttribute('id', 'smo246633');
smo246648v0ar.push(smo246633);
const smo246634 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","eb/5/n","gb/5/n"]}'))
noteHash['smo246634'] = smo246634;
smo246634.setAttribute('id', 'smo246634');
const smo2466340acc = new VF.Accidental('b');
smo246634.addModifier(smo2466340acc, 0);
const smo2466341acc = new VF.Accidental('b');
smo246634.addModifier(smo2466341acc, 1);
const smo2466342acc = new VF.Accidental('b');
smo246634.addModifier(smo2466342acc, 2);
smo246648v0ar.push(smo246634);
smo246648v0.addTickables(smo246648v0ar)
fmtsmo24664828.joinVoices([smo246648v0]);
const fmtsmo24946528 = new VF.Formatter();
//
// voices and notes for stave 1 28
const smo249465v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249465v0ar = [];
const smo249448 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n","dn/4/n"]}'))
noteHash['smo249448'] = smo249448;
smo249448.setAttribute('id', 'smo249448');
smo249465v0ar.push(smo249448);
const smo249449 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
noteHash['smo249449'] = smo249449;
smo249449.setAttribute('id', 'smo249449');
smo249465v0ar.push(smo249449);
const smo249450 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
noteHash['smo249450'] = smo249450;
smo249450.setAttribute('id', 'smo249450');
smo249465v0ar.push(smo249450);
const smo249451 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n","dn/3/n"]}'))
noteHash['smo249451'] = smo249451;
smo249451.setAttribute('id', 'smo249451');
smo249465v0ar.push(smo249451);
smo249465v0.addTickables(smo249465v0ar)
fmtsmo24946528.joinVoices([smo249465v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251211 = smo246631.getStemDirection();
smo246631.setStemDirection(dirsmo251211);
smo246632.setStemDirection(dirsmo251211);
smo246633.setStemDirection(dirsmo251211);
smo246634.setStemDirection(dirsmo251211);
const smo251211 = new VF.Beam([smo246631,smo246632,smo246633,smo246634]);
const dirsmo251214 = smo249448.getStemDirection();
smo249448.setStemDirection(dirsmo251214);
smo249449.setStemDirection(dirsmo251214);
const smo251214 = new VF.Beam([smo249448,smo249449]);
const dirsmo251215 = smo249450.getStemDirection();
smo249450.setStemDirection(dirsmo251215);
smo249451.setStemDirection(dirsmo251215);
const smo251215 = new VF.Beam([smo249450,smo249451]);
 
// formatting measures in staff group smo245304
fmtsmo24664828.format([smo246648v0,smo249465v0], 281);
const stavesmo246648 = new VF.Stave(1253, 1828, 295);
stavesmo246648.setAttribute('id', 'stavesmo246648');
stavesmo246648.setBegBarType(VF.Barline.type.NONE);
stavesmo246648.setContext(context);
stavesmo246648.draw();
smo246648v0.draw(context, stavesmo246648);
smo251211.setContext(context);
smo251211.draw();
const stavesmo249465 = new VF.Stave(1253, 1988, 295);
stavesmo249465.setAttribute('id', 'stavesmo249465');
stavesmo249465.setBegBarType(VF.Barline.type.NONE);
stavesmo249465.setContext(context);
stavesmo249465.draw();
smo249465v0.draw(context, stavesmo249465);
smo251214.setContext(context);
smo251214.draw();
smo251215.setContext(context);
smo251215.draw();
const fmtsmo24667029 = new VF.Formatter();
//
// voices and notes for stave 0 29
const smo246670v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246670v0ar = [];
const smo246649 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
noteHash['smo246649'] = smo246649;
smo246649.setAttribute('id', 'smo246649');
smo246670v0ar.push(smo246649);
const smo246651 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","en/5/n","an/5/n"]}'))
noteHash['smo246651'] = smo246651;
smo246651.setAttribute('id', 'smo246651');
smo246670v0ar.push(smo246651);
const smo246652 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
noteHash['smo246652'] = smo246652;
smo246652.setAttribute('id', 'smo246652');
smo246670v0ar.push(smo246652);
const smo246653 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
noteHash['smo246653'] = smo246653;
smo246653.setAttribute('id', 'smo246653');
smo246670v0ar.push(smo246653);
const smo246654 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n","en/5/n"]}'))
noteHash['smo246654'] = smo246654;
smo246654.setAttribute('id', 'smo246654');
smo246670v0ar.push(smo246654);
const smo246655 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n","fn/5/n"]}'))
noteHash['smo246655'] = smo246655;
smo246655.setAttribute('id', 'smo246655');
smo246670v0ar.push(smo246655);
const smo246656 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","eb/5/n","gb/5/n"]}'))
noteHash['smo246656'] = smo246656;
smo246656.setAttribute('id', 'smo246656');
const smo2466560acc = new VF.Accidental('b');
smo246656.addModifier(smo2466560acc, 0);
const smo2466561acc = new VF.Accidental('b');
smo246656.addModifier(smo2466561acc, 1);
const smo2466562acc = new VF.Accidental('b');
smo246656.addModifier(smo2466562acc, 2);
smo246670v0ar.push(smo246656);
smo246670v0.addTickables(smo246670v0ar)
fmtsmo24667029.joinVoices([smo246670v0]);
const fmtsmo24948329 = new VF.Formatter();
//
// voices and notes for stave 1 29
const smo249483v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249483v0ar = [];
const smo249466 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
noteHash['smo249466'] = smo249466;
smo249466.setAttribute('id', 'smo249466');
smo249483v0ar.push(smo249466);
const smo249467 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo249467'] = smo249467;
smo249467.setAttribute('id', 'smo249467');
smo249483v0ar.push(smo249467);
const smo249468 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo249468'] = smo249468;
smo249468.setAttribute('id', 'smo249468');
smo249483v0ar.push(smo249468);
const smo249469 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo249469'] = smo249469;
smo249469.setAttribute('id', 'smo249469');
smo249483v0ar.push(smo249469);
smo249483v0.addTickables(smo249483v0ar)
fmtsmo24948329.joinVoices([smo249483v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251218 = smo246649.getStemDirection();
smo246649.setStemDirection(dirsmo251218);
smo246651.setStemDirection(dirsmo251218);
smo246652.setStemDirection(dirsmo251218);
const smo251218 = new VF.Beam([smo246649,smo246651,smo246652]);
const dirsmo251219 = smo246653.getStemDirection();
smo246653.setStemDirection(dirsmo251219);
smo246654.setStemDirection(dirsmo251219);
smo246655.setStemDirection(dirsmo251219);
smo246656.setStemDirection(dirsmo251219);
const smo251219 = new VF.Beam([smo246653,smo246654,smo246655,smo246656]);
const dirsmo251222 = smo249466.getStemDirection();
smo249466.setStemDirection(dirsmo251222);
smo249467.setStemDirection(dirsmo251222);
const smo251222 = new VF.Beam([smo249466,smo249467]);
const dirsmo251223 = smo249468.getStemDirection();
smo249468.setStemDirection(dirsmo251223);
smo249469.setStemDirection(dirsmo251223);
const smo251223 = new VF.Beam([smo249468,smo249469]);
 
// formatting measures in staff group smo245304
fmtsmo24667029.format([smo246670v0,smo249483v0], 281);
const stavesmo246670 = new VF.Stave(1548, 1828, 295);
stavesmo246670.setAttribute('id', 'stavesmo246670');
stavesmo246670.setBegBarType(VF.Barline.type.NONE);
stavesmo246670.setContext(context);
stavesmo246670.draw();
smo246670v0.draw(context, stavesmo246670);
smo251218.setContext(context);
smo251218.draw();
smo251219.setContext(context);
smo251219.draw();
const stavesmo249483 = new VF.Stave(1548, 1988, 295);
stavesmo249483.setAttribute('id', 'stavesmo249483');
stavesmo249483.setBegBarType(VF.Barline.type.NONE);
stavesmo249483.setContext(context);
stavesmo249483.draw();
smo249483v0.draw(context, stavesmo249483);
smo251222.setContext(context);
smo251222.draw();
smo251223.setContext(context);
smo251223.draw();
const rightsmo245304stavesmo2466701 = new VF.StaveConnector(stavesmo246670, stavesmo249483).setType(0);
rightsmo245304stavesmo2466701.setContext(context).draw();
const smo252238 = new VF.StaveHairpin({ first_note: smo246160, last_note: smo246160,
       firstNote: smo246160, lastNote: smo246160 });
smo252238.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo252238.setContext(context).setPosition(4).draw();
const smo252239 = new VF.StaveHairpin({ first_note: smo246201, last_note: smo246201,
       firstNote: smo246201, lastNote: smo246201 });
smo252239.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo252239.setContext(context).setPosition(4).draw();
const smo252240 = new VF.StaveHairpin({ first_note: smo246240, last_note: smo246240,
       firstNote: smo246240, lastNote: smo246240 });
smo252240.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo252240.setContext(context).setPosition(4).draw();
const smo252243 = new VF.StaveHairpin({ first_note: smo246320, last_note: smo246320,
       firstNote: smo246320, lastNote: smo246320 });
smo252243.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo252243.setContext(context).setPosition(4).draw();
const smo252244 = new VF.StaveHairpin({ first_note: smo246444, last_note: smo246444,
       firstNote: smo246444, lastNote: smo246444 });
smo252244.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo252244.setContext(context).setPosition(4).draw();
const smo252245 = new VF.StaveTie({ first_note: smo246079, last_note: smo246080, 
          firstNote: smo246079, lastNote: smo246080, first_indices: [0], last_indices: [0]});
smo252245.setContext(context).draw();
const smo252246 = new VF.StaveTie({ first_note: smo246100, last_note: smo246101, 
          firstNote: smo246100, lastNote: smo246101, first_indices: [0], last_indices: [0]});
smo252246.setContext(context).draw();
const smo252247 = new VF.StaveTie({ first_note: smo246143, last_note: smo246158, 
          firstNote: smo246143, lastNote: smo246158, first_indices: [0], last_indices: [0]});
smo252247.setContext(context).draw();
const smo252248 = new VF.StaveTie({ first_note: smo246158, last_note: smo246159, 
          firstNote: smo246158, lastNote: smo246159, first_indices: [0], last_indices: [0]});
smo252248.setContext(context).draw();
const smo252249 = new VF.StaveTie({ first_note: smo246181, last_note: smo246182, 
          firstNote: smo246181, lastNote: smo246182, first_indices: [0,1,2], last_indices: [0,1,2]});
smo252249.setContext(context).draw();
const smo252250 = new VF.StaveTie({ first_note: smo246199, last_note: smo246200, 
          firstNote: smo246199, lastNote: smo246200, first_indices: [0,1,2], last_indices: [0,1,2]});
smo252250.setContext(context).draw();
const smo252251 = new VF.StaveTie({ first_note: smo246223, last_note: smo246238, 
          firstNote: smo246223, lastNote: smo246238, first_indices: [0], last_indices: [0]});
smo252251.setContext(context).draw();
const smo252252 = new VF.StaveTie({ first_note: smo246238, last_note: smo246239, 
          firstNote: smo246238, lastNote: smo246239, first_indices: [0], last_indices: [0]});
smo252252.setContext(context).draw();
const smo252253 = new VF.StaveTie({ first_note: smo246260, last_note: smo246261, 
          firstNote: smo246260, lastNote: smo246261, first_indices: [0,1], last_indices: [0,1]});
smo252253.setContext(context).draw();
const smo252254 = new VF.StaveTie({ first_note: smo246279, last_note: smo246280, 
          firstNote: smo246279, lastNote: smo246280, first_indices: [0,1,2], last_indices: [0,1,2]});
smo252254.setContext(context).draw();
const smo252255 = new VF.StaveTie({ first_note: smo246303, last_note: smo246318, 
          firstNote: smo246303, lastNote: smo246318, first_indices: [0], last_indices: [0]});
smo252255.setContext(context).draw();
const smo252256 = new VF.StaveTie({ first_note: smo246318, last_note: smo246319, 
          firstNote: smo246318, lastNote: smo246319, first_indices: [0], last_indices: [0]});
smo252256.setContext(context).draw();
const smo252257 = new VF.StaveTie({ first_note: smo246341, last_note: smo246342, 
          firstNote: smo246341, lastNote: smo246342, first_indices: [0,1,2], last_indices: [0,1,2]});
smo252257.setContext(context).draw();
const smo252258 = new VF.StaveTie({ first_note: smo246359, last_note: smo246360, 
          firstNote: smo246359, lastNote: smo246360, first_indices: [0,1,2], last_indices: [0,1,2]});
smo252258.setContext(context).draw();
const smo252259 = new VF.StaveTie({ first_note: smo246380, last_note: smo246381, 
          firstNote: smo246380, lastNote: smo246381, first_indices: [0,1], last_indices: [0,1]});
smo252259.setContext(context).draw();
const smo252260 = new VF.StaveTie({ first_note: smo246402, last_note: smo246403, 
          firstNote: smo246402, lastNote: smo246403, first_indices: [0,1], last_indices: [0,1]});
smo252260.setContext(context).draw();
const smo252261 = new VF.StaveTie({ first_note: smo246424, last_note: smo246425, 
          firstNote: smo246424, lastNote: smo246425, first_indices: [0,1,2], last_indices: [0,1,2]});
smo252261.setContext(context).draw();
const smo252262 = new VF.StaveTie({ first_note: smo246442, last_note: smo246443, 
          firstNote: smo246442, lastNote: smo246443, first_indices: [0,1,2], last_indices: [0,1,2]});
smo252262.setContext(context).draw();
const smo252263 = new VF.StaveTie({ first_note: smo246461, last_note: smo246462, 
          firstNote: smo246461, lastNote: smo246462, first_indices: [0,1,2], last_indices: [0,1,2]});
smo252263.setContext(context).draw();
const smo252264 = new VF.StaveTie({ first_note: smo246483, last_note: smo246484, 
          firstNote: smo246483, lastNote: smo246484, first_indices: [0,1,2], last_indices: [0,1,2]});
smo252264.setContext(context).draw();
const smo252265 = new VF.StaveTie({ first_note: smo246504, last_note: smo246505, 
          firstNote: smo246504, lastNote: smo246505, first_indices: [0,1,2], last_indices: [0,1,2]});
smo252265.setContext(context).draw();
const smo252266 = new VF.StaveTie({ first_note: smo246569, last_note: smo246570, 
          firstNote: smo246569, lastNote: smo246570, first_indices: [0,1,2], last_indices: [0,1,2]});
smo252266.setContext(context).draw();
const smo252267 = new VF.StaveTie({ first_note: smo246590, last_note: smo246591, 
          firstNote: smo246590, lastNote: smo246591, first_indices: [0,1,2], last_indices: [0,1,2]});
smo252267.setContext(context).draw();
const smo252268 = new VF.StaveTie({ first_note: smo246611, last_note: smo246612, 
          firstNote: smo246611, lastNote: smo246612, first_indices: [0,1,2], last_indices: [0,1,2]});
smo252268.setContext(context).draw();
const smo252269 = new VF.StaveTie({ first_note: smo246630, last_note: smo246631, 
          firstNote: smo246630, lastNote: smo246631, first_indices: [0,1], last_indices: [0,1]});
smo252269.setContext(context).draw();
const smo252270 = new VF.StaveTie({ first_note: smo246652, last_note: smo246653, 
          firstNote: smo246652, lastNote: smo246653, first_indices: [0,1,2], last_indices: [0,1,2]});
smo252270.setContext(context).draw();
const smo252271 = new VF.StaveTie({ first_note: smo248956, last_note: smo248957, 
          firstNote: smo248956, lastNote: smo248957, first_indices: [0], last_indices: [0]});
smo252271.setContext(context).draw();
const smo252272 = new VF.StaveTie({ first_note: smo248977, last_note: smo248978, 
          firstNote: smo248977, lastNote: smo248978, first_indices: [0], last_indices: [0]});
smo252272.setContext(context).draw();
const smo246447smo246460 = new VF.Volta(5, '1', 368, 20);
smo246447smo246460.setContext(context).draw(stavesmo246460, -1 * 0);
const smo246466smo246480 = new VF.Volta(5, '2', 663, 20);
smo246466smo246480.setContext(context).draw(stavesmo246480, -1 * 0);
}