// @@ Well-Tempered Clavier p 2/6  by Bach
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = Vex.Flow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1632');
svg.setAttributeNS('', 'height', '2112');
svg.setAttributeNS('', 'viewBox', '0 0 1989 2574');
//
// create the musical objects
VF.setMusicFont("Bravura","Gonville","Custom");
const fmtsmo6284421 = new VF.Formatter();
//
// voices and notes for stave 0 21
const smo62844v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62844v0ar = [];
const smo62813 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo62813.setAttribute('id', 'smo62813');
smo62844v0ar.push(smo62813);
const smo62814 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo62814.setAttribute('id', 'smo62814');
smo62844v0ar.push(smo62814);
const smo62815 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62815.setAttribute('id', 'smo62815');
smo62844v0ar.push(smo62815);
const smo62816 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo62816.setAttribute('id', 'smo62816');
const smo628160acc = new VF.Accidental('b');
smo62816.addModifier(smo628160acc, 0);
smo62844v0ar.push(smo62816);
const smo62817 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo62817.setAttribute('id', 'smo62817');
smo62844v0ar.push(smo62817);
const smo62818 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62818.setAttribute('id', 'smo62818');
smo62844v0ar.push(smo62818);
const smo62819 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo62819.setAttribute('id', 'smo62819');
smo62844v0ar.push(smo62819);
const smo62820 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo62820.setAttribute('id', 'smo62820');
smo62844v0ar.push(smo62820);
const smo62821 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo62821.setAttribute('id', 'smo62821');
smo62844v0ar.push(smo62821);
const smo62822 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62822.setAttribute('id', 'smo62822');
smo62844v0ar.push(smo62822);
const smo62823 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo62823.setAttribute('id', 'smo62823');
smo62844v0ar.push(smo62823);
const smo62824 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo62824.setAttribute('id', 'smo62824');
smo62844v0ar.push(smo62824);
const smo62825 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62825.setAttribute('id', 'smo62825');
smo62844v0ar.push(smo62825);
const smo62826 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo62826.setAttribute('id', 'smo62826');
smo62844v0ar.push(smo62826);
smo62844v0.addTickables(smo62844v0ar)
fmtsmo6284421.joinVoices([smo62844v0]);
const smo62844v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62844v1ar = [];
const smo62827 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo62827.setAttribute('id', 'smo62827');
smo62827.setStyle({ fillStyle: '#aaaaaa7f' });
smo62844v1ar.push(smo62827);
const smo62828 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo62828.setAttribute('id', 'smo62828');
smo62828.setStyle({ fillStyle: '#aaaaaa7f' });
smo62828.addModifier(new VF.Dot(), 0);
smo62828.addModifier(new VF.Dot(), 0);
smo62844v1ar.push(smo62828);
const smo62829 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo62829.setAttribute('id', 'smo62829');
smo62829.setStyle({ fillStyle: '#aaaaaa7f' });
smo62844v1ar.push(smo62829);
const smo62830 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo62830.setAttribute('id', 'smo62830');
smo62830.setStyle({ fillStyle: '#aaaaaa7f' });
smo62830.addModifier(new VF.Dot(), 0);
smo62830.addModifier(new VF.Dot(), 0);
smo62844v1ar.push(smo62830);
smo62844v1.addTickables(smo62844v1ar)
fmtsmo6284421.joinVoices([smo62844v1]);
const fmtsmo6807921 = new VF.Formatter();
//
// voices and notes for stave 1 21
const smo68079v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68079v0ar = [];
const smo68058 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo68058.setAttribute('id', 'smo68058');
smo68079v0ar.push(smo68058);
const smo68059 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/3/n"]}'))
smo68059.setAttribute('id', 'smo68059');
smo68059.addModifier(new VF.Dot(), 0);
smo68079v0ar.push(smo68059);
const smo68060 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/3/n"]}'))
smo68060.setAttribute('id', 'smo68060');
smo68079v0ar.push(smo68060);
const smo68061 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo68061.setAttribute('id', 'smo68061');
smo68079v0ar.push(smo68061);
const smo68062 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"r","stemDirection":1,"autoStem":false,"keys":["dn/3/r"]}'))
smo68062.setAttribute('id', 'smo68062');
smo68062.addModifier(new VF.Dot(), 0);
smo68079v0ar.push(smo68062);
const smo68063 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/3/n"]}'))
smo68063.setAttribute('id', 'smo68063');
smo68079v0ar.push(smo68063);
smo68079v0.addTickables(smo68079v0ar)
fmtsmo6807921.joinVoices([smo68079v0]);
const smo68079v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68079v1ar = [];
const smo68064 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/2/n"]}'))
smo68064.setAttribute('id', 'smo68064');
smo68064.setStyle({ fillStyle: "#115511" });
const smo680640acc = new VF.Accidental('#');
smo68064.addModifier(smo680640acc, 0);
smo68079v1ar.push(smo68064);
const smo68065 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/2/n"]}'))
smo68065.setAttribute('id', 'smo68065');
smo68065.setStyle({ fillStyle: "#115511" });
smo68079v1ar.push(smo68065);
smo68079v1.addTickables(smo68079v1ar)
fmtsmo6807921.joinVoices([smo68079v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo71756 = smo62814.getStemDirection();
smo62814.setStemDirection(dirsmo71756);
smo62815.setStemDirection(dirsmo71756);
const smo71756 = new VF.Beam([smo62814,smo62815]);
const dirsmo71757 = smo62816.getStemDirection();
smo62816.setStemDirection(dirsmo71757);
smo62817.setStemDirection(dirsmo71757);
smo62818.setStemDirection(dirsmo71757);
smo62819.setStemDirection(dirsmo71757);
const smo71757 = new VF.Beam([smo62816,smo62817,smo62818,smo62819]);
const dirsmo71758 = smo62821.getStemDirection();
smo62821.setStemDirection(dirsmo71758);
smo62822.setStemDirection(dirsmo71758);
const smo71758 = new VF.Beam([smo62821,smo62822]);
const dirsmo71759 = smo62823.getStemDirection();
smo62823.setStemDirection(dirsmo71759);
smo62824.setStemDirection(dirsmo71759);
smo62825.setStemDirection(dirsmo71759);
smo62826.setStemDirection(dirsmo71759);
const smo71759 = new VF.Beam([smo62823,smo62824,smo62825,smo62826]);
 
// formatting measures in staff group smo60952
fmtsmo6284421.format([smo62844v0,smo62844v1,smo68079v0,smo68079v1], 584);
const stavesmo62844 = new VF.Stave(90, 247, 642);
stavesmo62844.setAttribute('id', 'stavesmo62844');
stavesmo62844.setBegBarType(1);
stavesmo62844.addClef('treble');
stavesmo62844.setContext(context);
stavesmo62844.draw();
smo62844v0.draw(context, stavesmo62844);
smo62844v1.draw(context, stavesmo62844);
smo71756.setContext(context);
smo71756.draw();
smo71757.setContext(context);
smo71757.draw();
smo71758.setContext(context);
smo71758.draw();
smo71759.setContext(context);
smo71759.draw();
const stavesmo68079 = new VF.Stave(90, 393, 642);
stavesmo68079.setAttribute('id', 'stavesmo68079');
stavesmo68079.setBegBarType(1);
stavesmo68079.addClef('bass');
stavesmo68079.setContext(context);
stavesmo68079.draw();
smo68079v0.draw(context, stavesmo68079);
smo68079v1.draw(context, stavesmo68079);
const leftsmo60952stavesmo628441 = new VF.StaveConnector(stavesmo62844, stavesmo68079).setType(3);
leftsmo60952stavesmo628441.setContext(context).draw();
const fmtsmo6287622 = new VF.Formatter();
//
// voices and notes for stave 0 22
const smo62876v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62876v0ar = [];
const smo62845 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo62845.setAttribute('id', 'smo62845');
smo62876v0ar.push(smo62845);
const smo62846 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo62846.setAttribute('id', 'smo62846');
smo62876v0ar.push(smo62846);
const smo62847 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62847.setAttribute('id', 'smo62847');
smo62876v0ar.push(smo62847);
const smo62848 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62848.setAttribute('id', 'smo62848');
smo62876v0ar.push(smo62848);
const smo62849 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo62849.setAttribute('id', 'smo62849');
smo62876v0ar.push(smo62849);
const smo62850 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62850.setAttribute('id', 'smo62850');
smo62876v0ar.push(smo62850);
const smo62851 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62851.setAttribute('id', 'smo62851');
smo62876v0ar.push(smo62851);
const smo62852 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo62852.setAttribute('id', 'smo62852');
smo62876v0ar.push(smo62852);
const smo62853 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo62853.setAttribute('id', 'smo62853');
smo62876v0ar.push(smo62853);
const smo62854 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62854.setAttribute('id', 'smo62854');
smo62876v0ar.push(smo62854);
const smo62855 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62855.setAttribute('id', 'smo62855');
smo62876v0ar.push(smo62855);
const smo62856 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo62856.setAttribute('id', 'smo62856');
smo62876v0ar.push(smo62856);
const smo62857 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62857.setAttribute('id', 'smo62857');
smo62876v0ar.push(smo62857);
const smo62858 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62858.setAttribute('id', 'smo62858');
smo62876v0ar.push(smo62858);
smo62876v0.addTickables(smo62876v0ar)
fmtsmo6287622.joinVoices([smo62876v0]);
const smo62876v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62876v1ar = [];
const smo62859 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo62859.setAttribute('id', 'smo62859');
smo62859.setStyle({ fillStyle: '#aaaaaa7f' });
smo62876v1ar.push(smo62859);
const smo62860 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo62860.setAttribute('id', 'smo62860');
smo62860.setStyle({ fillStyle: '#aaaaaa7f' });
smo62860.addModifier(new VF.Dot(), 0);
smo62860.addModifier(new VF.Dot(), 0);
smo62876v1ar.push(smo62860);
const smo62861 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo62861.setAttribute('id', 'smo62861');
smo62861.setStyle({ fillStyle: '#aaaaaa7f' });
smo62876v1ar.push(smo62861);
const smo62862 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo62862.setAttribute('id', 'smo62862');
smo62862.setStyle({ fillStyle: '#aaaaaa7f' });
smo62862.addModifier(new VF.Dot(), 0);
smo62862.addModifier(new VF.Dot(), 0);
smo62876v1ar.push(smo62862);
smo62876v1.addTickables(smo62876v1ar)
fmtsmo6287622.joinVoices([smo62876v1]);
const fmtsmo6810122 = new VF.Formatter();
//
// voices and notes for stave 1 22
const smo68101v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68101v0ar = [];
const smo68080 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo68080.setAttribute('id', 'smo68080');
smo68101v0ar.push(smo68080);
const smo68081 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo68081.setAttribute('id', 'smo68081');
smo68081.addModifier(new VF.Dot(), 0);
smo68101v0ar.push(smo68081);
const smo68082 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo68082.setAttribute('id', 'smo68082');
smo68101v0ar.push(smo68082);
const smo68083 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo68083.setAttribute('id', 'smo68083');
smo68101v0ar.push(smo68083);
const smo68084 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo68084.setAttribute('id', 'smo68084');
smo68084.addModifier(new VF.Dot(), 0);
smo68101v0ar.push(smo68084);
const smo68085 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo68085.setAttribute('id', 'smo68085');
smo68101v0ar.push(smo68085);
smo68101v0.addTickables(smo68101v0ar)
fmtsmo6810122.joinVoices([smo68101v0]);
const smo68101v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68101v1ar = [];
const smo68086 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/2/n"]}'))
smo68086.setAttribute('id', 'smo68086');
smo68086.setStyle({ fillStyle: "#115511" });
const smo680860acc = new VF.Accidental('b');
smo68086.addModifier(smo680860acc, 0);
smo68101v1ar.push(smo68086);
const smo68087 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/2/n"]}'))
smo68087.setAttribute('id', 'smo68087');
smo68087.setStyle({ fillStyle: "#115511" });
smo68101v1ar.push(smo68087);
smo68101v1.addTickables(smo68101v1ar)
fmtsmo6810122.joinVoices([smo68101v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo71764 = smo62846.getStemDirection();
smo62846.setStemDirection(dirsmo71764);
smo62847.setStemDirection(dirsmo71764);
const smo71764 = new VF.Beam([smo62846,smo62847]);
const dirsmo71765 = smo62848.getStemDirection();
smo62848.setStemDirection(dirsmo71765);
smo62849.setStemDirection(dirsmo71765);
smo62850.setStemDirection(dirsmo71765);
smo62851.setStemDirection(dirsmo71765);
const smo71765 = new VF.Beam([smo62848,smo62849,smo62850,smo62851]);
const dirsmo71766 = smo62853.getStemDirection();
smo62853.setStemDirection(dirsmo71766);
smo62854.setStemDirection(dirsmo71766);
const smo71766 = new VF.Beam([smo62853,smo62854]);
const dirsmo71767 = smo62855.getStemDirection();
smo62855.setStemDirection(dirsmo71767);
smo62856.setStemDirection(dirsmo71767);
smo62857.setStemDirection(dirsmo71767);
smo62858.setStemDirection(dirsmo71767);
const smo71767 = new VF.Beam([smo62855,smo62856,smo62857,smo62858]);
 
// formatting measures in staff group smo60952
fmtsmo6287622.format([smo62876v0,smo62876v1,smo68101v0,smo68101v1], 535);
const stavesmo62876 = new VF.Stave(732, 247, 549);
stavesmo62876.setAttribute('id', 'stavesmo62876');
stavesmo62876.setBegBarType(VF.Barline.type.NONE);
stavesmo62876.setContext(context);
stavesmo62876.draw();
smo62876v0.draw(context, stavesmo62876);
smo62876v1.draw(context, stavesmo62876);
smo71764.setContext(context);
smo71764.draw();
smo71765.setContext(context);
smo71765.draw();
smo71766.setContext(context);
smo71766.draw();
smo71767.setContext(context);
smo71767.draw();
const stavesmo68101 = new VF.Stave(732, 393, 549);
stavesmo68101.setAttribute('id', 'stavesmo68101');
stavesmo68101.setBegBarType(VF.Barline.type.NONE);
stavesmo68101.setContext(context);
stavesmo68101.draw();
smo68101v0.draw(context, stavesmo68101);
smo68101v1.draw(context, stavesmo68101);
const fmtsmo6290823 = new VF.Formatter();
//
// voices and notes for stave 0 23
const smo62908v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62908v0ar = [];
const smo62877 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo62877.setAttribute('id', 'smo62877');
smo62908v0ar.push(smo62877);
const smo62878 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo62878.setAttribute('id', 'smo62878');
smo62908v0ar.push(smo62878);
const smo62879 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo62879.setAttribute('id', 'smo62879');
smo62908v0ar.push(smo62879);
const smo62880 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62880.setAttribute('id', 'smo62880');
smo62908v0ar.push(smo62880);
const smo62881 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo62881.setAttribute('id', 'smo62881');
smo62908v0ar.push(smo62881);
const smo62882 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo62882.setAttribute('id', 'smo62882');
smo62908v0ar.push(smo62882);
const smo62883 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62883.setAttribute('id', 'smo62883');
smo62908v0ar.push(smo62883);
const smo62884 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo62884.setAttribute('id', 'smo62884');
smo62908v0ar.push(smo62884);
const smo62885 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo62885.setAttribute('id', 'smo62885');
smo62908v0ar.push(smo62885);
const smo62886 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo62886.setAttribute('id', 'smo62886');
smo62908v0ar.push(smo62886);
const smo62887 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62887.setAttribute('id', 'smo62887');
smo62908v0ar.push(smo62887);
const smo62888 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo62888.setAttribute('id', 'smo62888');
smo62908v0ar.push(smo62888);
const smo62889 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo62889.setAttribute('id', 'smo62889');
smo62908v0ar.push(smo62889);
const smo62890 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo62890.setAttribute('id', 'smo62890');
smo62908v0ar.push(smo62890);
smo62908v0.addTickables(smo62908v0ar)
fmtsmo6290823.joinVoices([smo62908v0]);
const smo62908v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62908v1ar = [];
const smo62891 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo62891.setAttribute('id', 'smo62891');
smo62891.setStyle({ fillStyle: '#aaaaaa7f' });
smo62908v1ar.push(smo62891);
const smo62892 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo62892.setAttribute('id', 'smo62892');
smo62892.setStyle({ fillStyle: '#aaaaaa7f' });
smo62892.addModifier(new VF.Dot(), 0);
smo62892.addModifier(new VF.Dot(), 0);
smo62908v1ar.push(smo62892);
const smo62893 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo62893.setAttribute('id', 'smo62893');
smo62893.setStyle({ fillStyle: '#aaaaaa7f' });
smo62908v1ar.push(smo62893);
const smo62894 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo62894.setAttribute('id', 'smo62894');
smo62894.setStyle({ fillStyle: '#aaaaaa7f' });
smo62894.addModifier(new VF.Dot(), 0);
smo62894.addModifier(new VF.Dot(), 0);
smo62908v1ar.push(smo62894);
smo62908v1.addTickables(smo62908v1ar)
fmtsmo6290823.joinVoices([smo62908v1]);
const fmtsmo6812323 = new VF.Formatter();
//
// voices and notes for stave 1 23
const smo68123v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68123v0ar = [];
const smo68102 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo68102.setAttribute('id', 'smo68102');
smo68123v0ar.push(smo68102);
const smo68103 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo68103.setAttribute('id', 'smo68103');
smo68103.addModifier(new VF.Dot(), 0);
smo68123v0ar.push(smo68103);
const smo68104 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo68104.setAttribute('id', 'smo68104');
smo68123v0ar.push(smo68104);
const smo68105 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo68105.setAttribute('id', 'smo68105');
smo68123v0ar.push(smo68105);
const smo68106 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo68106.setAttribute('id', 'smo68106');
smo68106.addModifier(new VF.Dot(), 0);
smo68123v0ar.push(smo68106);
const smo68107 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo68107.setAttribute('id', 'smo68107');
smo68123v0ar.push(smo68107);
smo68123v0.addTickables(smo68123v0ar)
fmtsmo6812323.joinVoices([smo68123v0]);
const smo68123v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68123v1ar = [];
const smo68108 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo68108.setAttribute('id', 'smo68108');
smo68108.setStyle({ fillStyle: "#115511" });
smo68123v1ar.push(smo68108);
const smo68109 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo68109.setAttribute('id', 'smo68109');
smo68109.setStyle({ fillStyle: "#115511" });
smo68123v1ar.push(smo68109);
smo68123v1.addTickables(smo68123v1ar)
fmtsmo6812323.joinVoices([smo68123v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo71772 = smo62878.getStemDirection();
smo62878.setStemDirection(dirsmo71772);
smo62879.setStemDirection(dirsmo71772);
const smo71772 = new VF.Beam([smo62878,smo62879]);
const dirsmo71773 = smo62880.getStemDirection();
smo62880.setStemDirection(dirsmo71773);
smo62881.setStemDirection(dirsmo71773);
smo62882.setStemDirection(dirsmo71773);
smo62883.setStemDirection(dirsmo71773);
const smo71773 = new VF.Beam([smo62880,smo62881,smo62882,smo62883]);
const dirsmo71774 = smo62885.getStemDirection();
smo62885.setStemDirection(dirsmo71774);
smo62886.setStemDirection(dirsmo71774);
const smo71774 = new VF.Beam([smo62885,smo62886]);
const dirsmo71775 = smo62887.getStemDirection();
smo62887.setStemDirection(dirsmo71775);
smo62888.setStemDirection(dirsmo71775);
smo62889.setStemDirection(dirsmo71775);
smo62890.setStemDirection(dirsmo71775);
const smo71775 = new VF.Beam([smo62887,smo62888,smo62889,smo62890]);
 
// formatting measures in staff group smo60952
fmtsmo6290823.format([smo62908v0,smo62908v1,smo68123v0,smo68123v1], 512);
const stavesmo62908 = new VF.Stave(1281, 247, 526);
stavesmo62908.setAttribute('id', 'stavesmo62908');
stavesmo62908.setBegBarType(VF.Barline.type.NONE);
stavesmo62908.setContext(context);
stavesmo62908.draw();
smo62908v0.draw(context, stavesmo62908);
smo62908v1.draw(context, stavesmo62908);
smo71772.setContext(context);
smo71772.draw();
smo71773.setContext(context);
smo71773.draw();
smo71774.setContext(context);
smo71774.draw();
smo71775.setContext(context);
smo71775.draw();
const stavesmo68123 = new VF.Stave(1281, 393, 526);
stavesmo68123.setAttribute('id', 'stavesmo68123');
stavesmo68123.setBegBarType(VF.Barline.type.NONE);
stavesmo68123.setContext(context);
stavesmo68123.draw();
smo68123v0.draw(context, stavesmo68123);
smo68123v1.draw(context, stavesmo68123);
const rightsmo60952stavesmo629081 = new VF.StaveConnector(stavesmo62908, stavesmo68123).setType(0);
rightsmo60952stavesmo629081.setContext(context).draw();
const fmtsmo6294024 = new VF.Formatter();
//
// voices and notes for stave 0 24
const smo62940v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62940v0ar = [];
const smo62909 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo62909.setAttribute('id', 'smo62909');
smo62940v0ar.push(smo62909);
const smo62910 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo62910.setAttribute('id', 'smo62910');
smo62940v0ar.push(smo62910);
const smo62911 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62911.setAttribute('id', 'smo62911');
smo62940v0ar.push(smo62911);
const smo62912 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo62912.setAttribute('id', 'smo62912');
smo62940v0ar.push(smo62912);
const smo62913 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo62913.setAttribute('id', 'smo62913');
smo62940v0ar.push(smo62913);
const smo62914 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62914.setAttribute('id', 'smo62914');
smo62940v0ar.push(smo62914);
const smo62915 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo62915.setAttribute('id', 'smo62915');
smo62940v0ar.push(smo62915);
const smo62916 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo62916.setAttribute('id', 'smo62916');
smo62940v0ar.push(smo62916);
const smo62917 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo62917.setAttribute('id', 'smo62917');
smo62940v0ar.push(smo62917);
const smo62918 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62918.setAttribute('id', 'smo62918');
smo62940v0ar.push(smo62918);
const smo62919 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo62919.setAttribute('id', 'smo62919');
smo62940v0ar.push(smo62919);
const smo62920 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo62920.setAttribute('id', 'smo62920');
smo62940v0ar.push(smo62920);
const smo62921 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62921.setAttribute('id', 'smo62921');
smo62940v0ar.push(smo62921);
const smo62922 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo62922.setAttribute('id', 'smo62922');
smo62940v0ar.push(smo62922);
smo62940v0.addTickables(smo62940v0ar)
fmtsmo6294024.joinVoices([smo62940v0]);
const smo62940v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62940v1ar = [];
const smo62923 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo62923.setAttribute('id', 'smo62923');
smo62923.setStyle({ fillStyle: '#aaaaaa7f' });
smo62940v1ar.push(smo62923);
const smo62924 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo62924.setAttribute('id', 'smo62924');
smo62924.setStyle({ fillStyle: '#aaaaaa7f' });
smo62924.addModifier(new VF.Dot(), 0);
smo62924.addModifier(new VF.Dot(), 0);
smo62940v1ar.push(smo62924);
const smo62925 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo62925.setAttribute('id', 'smo62925');
smo62925.setStyle({ fillStyle: '#aaaaaa7f' });
smo62940v1ar.push(smo62925);
const smo62926 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo62926.setAttribute('id', 'smo62926');
smo62926.setStyle({ fillStyle: '#aaaaaa7f' });
smo62926.addModifier(new VF.Dot(), 0);
smo62926.addModifier(new VF.Dot(), 0);
smo62940v1ar.push(smo62926);
smo62940v1.addTickables(smo62940v1ar)
fmtsmo6294024.joinVoices([smo62940v1]);
const fmtsmo6814524 = new VF.Formatter();
//
// voices and notes for stave 1 24
const smo68145v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68145v0ar = [];
const smo68124 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo68124.setAttribute('id', 'smo68124');
smo68145v0ar.push(smo68124);
const smo68125 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo68125.setAttribute('id', 'smo68125');
smo68125.addModifier(new VF.Dot(), 0);
smo68145v0ar.push(smo68125);
const smo68126 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo68126.setAttribute('id', 'smo68126');
smo68145v0ar.push(smo68126);
const smo68127 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo68127.setAttribute('id', 'smo68127');
smo68145v0ar.push(smo68127);
const smo68128 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo68128.setAttribute('id', 'smo68128');
smo68128.addModifier(new VF.Dot(), 0);
smo68145v0ar.push(smo68128);
const smo68129 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo68129.setAttribute('id', 'smo68129');
smo68145v0ar.push(smo68129);
smo68145v0.addTickables(smo68145v0ar)
fmtsmo6814524.joinVoices([smo68145v0]);
const smo68145v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68145v1ar = [];
const smo68130 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo68130.setAttribute('id', 'smo68130');
smo68130.setStyle({ fillStyle: "#115511" });
smo68145v1ar.push(smo68130);
const smo68131 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo68131.setAttribute('id', 'smo68131');
smo68131.setStyle({ fillStyle: "#115511" });
smo68145v1ar.push(smo68131);
smo68145v1.addTickables(smo68145v1ar)
fmtsmo6814524.joinVoices([smo68145v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo71789 = smo62910.getStemDirection();
smo62910.setStemDirection(dirsmo71789);
smo62911.setStemDirection(dirsmo71789);
const smo71789 = new VF.Beam([smo62910,smo62911]);
const dirsmo71790 = smo62912.getStemDirection();
smo62912.setStemDirection(dirsmo71790);
smo62913.setStemDirection(dirsmo71790);
smo62914.setStemDirection(dirsmo71790);
smo62915.setStemDirection(dirsmo71790);
const smo71790 = new VF.Beam([smo62912,smo62913,smo62914,smo62915]);
const dirsmo71791 = smo62917.getStemDirection();
smo62917.setStemDirection(dirsmo71791);
smo62918.setStemDirection(dirsmo71791);
const smo71791 = new VF.Beam([smo62917,smo62918]);
const dirsmo71792 = smo62919.getStemDirection();
smo62919.setStemDirection(dirsmo71792);
smo62920.setStemDirection(dirsmo71792);
smo62921.setStemDirection(dirsmo71792);
smo62922.setStemDirection(dirsmo71792);
const smo71792 = new VF.Beam([smo62919,smo62920,smo62921,smo62922]);
 
// formatting measures in staff group smo60952
fmtsmo6294024.format([smo62940v0,smo62940v1,smo68145v0,smo68145v1], 545);
const stavesmo62940 = new VF.Stave(90, 525, 603);
stavesmo62940.setAttribute('id', 'stavesmo62940');
stavesmo62940.setBegBarType(1);
stavesmo62940.addClef('treble');
stavesmo62940.setContext(context);
stavesmo62940.draw();
smo62940v0.draw(context, stavesmo62940);
smo62940v1.draw(context, stavesmo62940);
smo71789.setContext(context);
smo71789.draw();
smo71790.setContext(context);
smo71790.draw();
smo71791.setContext(context);
smo71791.draw();
smo71792.setContext(context);
smo71792.draw();
const stavesmo68145 = new VF.Stave(90, 674, 603);
stavesmo68145.setAttribute('id', 'stavesmo68145');
stavesmo68145.setBegBarType(1);
stavesmo68145.addClef('bass');
stavesmo68145.setContext(context);
stavesmo68145.draw();
smo68145v0.draw(context, stavesmo68145);
smo68145v1.draw(context, stavesmo68145);
const leftsmo60952stavesmo629401 = new VF.StaveConnector(stavesmo62940, stavesmo68145).setType(3);
leftsmo60952stavesmo629401.setContext(context).draw();
const fmtsmo6297225 = new VF.Formatter();
//
// voices and notes for stave 0 25
const smo62972v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62972v0ar = [];
const smo62941 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo62941.setAttribute('id', 'smo62941');
smo62972v0ar.push(smo62941);
const smo62942 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo62942.setAttribute('id', 'smo62942');
smo62972v0ar.push(smo62942);
const smo62943 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62943.setAttribute('id', 'smo62943');
smo62972v0ar.push(smo62943);
const smo62944 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo62944.setAttribute('id', 'smo62944');
smo62972v0ar.push(smo62944);
const smo62945 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo62945.setAttribute('id', 'smo62945');
smo62972v0ar.push(smo62945);
const smo62946 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62946.setAttribute('id', 'smo62946');
smo62972v0ar.push(smo62946);
const smo62947 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo62947.setAttribute('id', 'smo62947');
smo62972v0ar.push(smo62947);
const smo62948 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo62948.setAttribute('id', 'smo62948');
smo62972v0ar.push(smo62948);
const smo62949 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo62949.setAttribute('id', 'smo62949');
smo62972v0ar.push(smo62949);
const smo62950 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62950.setAttribute('id', 'smo62950');
smo62972v0ar.push(smo62950);
const smo62951 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo62951.setAttribute('id', 'smo62951');
smo62972v0ar.push(smo62951);
const smo62952 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo62952.setAttribute('id', 'smo62952');
smo62972v0ar.push(smo62952);
const smo62953 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo62953.setAttribute('id', 'smo62953');
smo62972v0ar.push(smo62953);
const smo62954 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo62954.setAttribute('id', 'smo62954');
smo62972v0ar.push(smo62954);
smo62972v0.addTickables(smo62972v0ar)
fmtsmo6297225.joinVoices([smo62972v0]);
const smo62972v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62972v1ar = [];
const smo62955 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo62955.setAttribute('id', 'smo62955');
smo62955.setStyle({ fillStyle: '#aaaaaa7f' });
smo62972v1ar.push(smo62955);
const smo62956 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo62956.setAttribute('id', 'smo62956');
smo62956.setStyle({ fillStyle: '#aaaaaa7f' });
smo62956.addModifier(new VF.Dot(), 0);
smo62956.addModifier(new VF.Dot(), 0);
smo62972v1ar.push(smo62956);
const smo62957 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo62957.setAttribute('id', 'smo62957');
smo62957.setStyle({ fillStyle: '#aaaaaa7f' });
smo62972v1ar.push(smo62957);
const smo62958 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo62958.setAttribute('id', 'smo62958');
smo62958.setStyle({ fillStyle: '#aaaaaa7f' });
smo62958.addModifier(new VF.Dot(), 0);
smo62958.addModifier(new VF.Dot(), 0);
smo62972v1ar.push(smo62958);
smo62972v1.addTickables(smo62972v1ar)
fmtsmo6297225.joinVoices([smo62972v1]);
const fmtsmo6816725 = new VF.Formatter();
//
// voices and notes for stave 1 25
const smo68167v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68167v0ar = [];
const smo68146 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo68146.setAttribute('id', 'smo68146');
smo68167v0ar.push(smo68146);
const smo68147 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo68147.setAttribute('id', 'smo68147');
smo68147.addModifier(new VF.Dot(), 0);
smo68167v0ar.push(smo68147);
const smo68148 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo68148.setAttribute('id', 'smo68148');
smo68167v0ar.push(smo68148);
const smo68149 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo68149.setAttribute('id', 'smo68149');
smo68167v0ar.push(smo68149);
const smo68150 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo68150.setAttribute('id', 'smo68150');
smo68150.addModifier(new VF.Dot(), 0);
smo68167v0ar.push(smo68150);
const smo68151 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo68151.setAttribute('id', 'smo68151');
smo68167v0ar.push(smo68151);
smo68167v0.addTickables(smo68167v0ar)
fmtsmo6816725.joinVoices([smo68167v0]);
const smo68167v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68167v1ar = [];
const smo68152 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo68152.setAttribute('id', 'smo68152');
smo68152.setStyle({ fillStyle: "#115511" });
smo68167v1ar.push(smo68152);
const smo68153 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo68153.setAttribute('id', 'smo68153');
smo68153.setStyle({ fillStyle: "#115511" });
smo68167v1ar.push(smo68153);
smo68167v1.addTickables(smo68167v1ar)
fmtsmo6816725.joinVoices([smo68167v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo71797 = smo62942.getStemDirection();
smo62942.setStemDirection(dirsmo71797);
smo62943.setStemDirection(dirsmo71797);
const smo71797 = new VF.Beam([smo62942,smo62943]);
const dirsmo71798 = smo62944.getStemDirection();
smo62944.setStemDirection(dirsmo71798);
smo62945.setStemDirection(dirsmo71798);
smo62946.setStemDirection(dirsmo71798);
smo62947.setStemDirection(dirsmo71798);
const smo71798 = new VF.Beam([smo62944,smo62945,smo62946,smo62947]);
const dirsmo71799 = smo62949.getStemDirection();
smo62949.setStemDirection(dirsmo71799);
smo62950.setStemDirection(dirsmo71799);
const smo71799 = new VF.Beam([smo62949,smo62950]);
const dirsmo71800 = smo62951.getStemDirection();
smo62951.setStemDirection(dirsmo71800);
smo62952.setStemDirection(dirsmo71800);
smo62953.setStemDirection(dirsmo71800);
smo62954.setStemDirection(dirsmo71800);
const smo71800 = new VF.Beam([smo62951,smo62952,smo62953,smo62954]);
 
// formatting measures in staff group smo60952
fmtsmo6297225.format([smo62972v0,smo62972v1,smo68167v0,smo68167v1], 544);
const stavesmo62972 = new VF.Stave(693, 525, 558);
stavesmo62972.setAttribute('id', 'stavesmo62972');
stavesmo62972.setBegBarType(VF.Barline.type.NONE);
stavesmo62972.setContext(context);
stavesmo62972.draw();
smo62972v0.draw(context, stavesmo62972);
smo62972v1.draw(context, stavesmo62972);
smo71797.setContext(context);
smo71797.draw();
smo71798.setContext(context);
smo71798.draw();
smo71799.setContext(context);
smo71799.draw();
smo71800.setContext(context);
smo71800.draw();
const stavesmo68167 = new VF.Stave(693, 674, 558);
stavesmo68167.setAttribute('id', 'stavesmo68167');
stavesmo68167.setBegBarType(VF.Barline.type.NONE);
stavesmo68167.setContext(context);
stavesmo68167.draw();
smo68167v0.draw(context, stavesmo68167);
smo68167v1.draw(context, stavesmo68167);
const fmtsmo6300426 = new VF.Formatter();
//
// voices and notes for stave 0 26
const smo63004v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63004v0ar = [];
const smo62973 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo62973.setAttribute('id', 'smo62973');
smo63004v0ar.push(smo62973);
const smo62974 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo62974.setAttribute('id', 'smo62974');
smo63004v0ar.push(smo62974);
const smo62975 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo62975.setAttribute('id', 'smo62975');
smo63004v0ar.push(smo62975);
const smo62976 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo62976.setAttribute('id', 'smo62976');
smo63004v0ar.push(smo62976);
const smo62977 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo62977.setAttribute('id', 'smo62977');
smo63004v0ar.push(smo62977);
const smo62978 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo62978.setAttribute('id', 'smo62978');
smo63004v0ar.push(smo62978);
const smo62979 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo62979.setAttribute('id', 'smo62979');
smo63004v0ar.push(smo62979);
const smo62980 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo62980.setAttribute('id', 'smo62980');
smo63004v0ar.push(smo62980);
const smo62981 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo62981.setAttribute('id', 'smo62981');
smo63004v0ar.push(smo62981);
const smo62982 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo62982.setAttribute('id', 'smo62982');
smo63004v0ar.push(smo62982);
const smo62983 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo62983.setAttribute('id', 'smo62983');
smo63004v0ar.push(smo62983);
const smo62984 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo62984.setAttribute('id', 'smo62984');
smo63004v0ar.push(smo62984);
const smo62985 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo62985.setAttribute('id', 'smo62985');
smo63004v0ar.push(smo62985);
const smo62986 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo62986.setAttribute('id', 'smo62986');
smo63004v0ar.push(smo62986);
smo63004v0.addTickables(smo63004v0ar)
fmtsmo6300426.joinVoices([smo63004v0]);
const smo63004v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63004v1ar = [];
const smo62987 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo62987.setAttribute('id', 'smo62987');
smo62987.setStyle({ fillStyle: '#aaaaaa7f' });
smo63004v1ar.push(smo62987);
const smo62988 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo62988.setAttribute('id', 'smo62988');
smo62988.setStyle({ fillStyle: '#aaaaaa7f' });
smo62988.addModifier(new VF.Dot(), 0);
smo62988.addModifier(new VF.Dot(), 0);
smo63004v1ar.push(smo62988);
const smo62989 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo62989.setAttribute('id', 'smo62989');
smo62989.setStyle({ fillStyle: '#aaaaaa7f' });
smo63004v1ar.push(smo62989);
const smo62990 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo62990.setAttribute('id', 'smo62990');
smo62990.setStyle({ fillStyle: '#aaaaaa7f' });
smo62990.addModifier(new VF.Dot(), 0);
smo62990.addModifier(new VF.Dot(), 0);
smo63004v1ar.push(smo62990);
smo63004v1.addTickables(smo63004v1ar)
fmtsmo6300426.joinVoices([smo63004v1]);
const fmtsmo6818926 = new VF.Formatter();
//
// voices and notes for stave 1 26
const smo68189v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68189v0ar = [];
const smo68168 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo68168.setAttribute('id', 'smo68168');
smo68189v0ar.push(smo68168);
const smo68169 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo68169.setAttribute('id', 'smo68169');
smo68169.addModifier(new VF.Dot(), 0);
smo68189v0ar.push(smo68169);
const smo68170 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo68170.setAttribute('id', 'smo68170');
smo68189v0ar.push(smo68170);
const smo68171 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo68171.setAttribute('id', 'smo68171');
smo68189v0ar.push(smo68171);
const smo68172 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo68172.setAttribute('id', 'smo68172');
smo68172.addModifier(new VF.Dot(), 0);
smo68189v0ar.push(smo68172);
const smo68173 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo68173.setAttribute('id', 'smo68173');
smo68189v0ar.push(smo68173);
smo68189v0.addTickables(smo68189v0ar)
fmtsmo6818926.joinVoices([smo68189v0]);
const smo68189v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68189v1ar = [];
const smo68174 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo68174.setAttribute('id', 'smo68174');
smo68174.setStyle({ fillStyle: "#115511" });
smo68189v1ar.push(smo68174);
const smo68175 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo68175.setAttribute('id', 'smo68175');
smo68175.setStyle({ fillStyle: "#115511" });
smo68189v1ar.push(smo68175);
smo68189v1.addTickables(smo68189v1ar)
fmtsmo6818926.joinVoices([smo68189v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo71805 = smo62974.getStemDirection();
smo62974.setStemDirection(dirsmo71805);
smo62975.setStemDirection(dirsmo71805);
const smo71805 = new VF.Beam([smo62974,smo62975]);
const dirsmo71806 = smo62976.getStemDirection();
smo62976.setStemDirection(dirsmo71806);
smo62977.setStemDirection(dirsmo71806);
smo62978.setStemDirection(dirsmo71806);
smo62979.setStemDirection(dirsmo71806);
const smo71806 = new VF.Beam([smo62976,smo62977,smo62978,smo62979]);
const dirsmo71807 = smo62981.getStemDirection();
smo62981.setStemDirection(dirsmo71807);
smo62982.setStemDirection(dirsmo71807);
const smo71807 = new VF.Beam([smo62981,smo62982]);
const dirsmo71808 = smo62983.getStemDirection();
smo62983.setStemDirection(dirsmo71808);
smo62984.setStemDirection(dirsmo71808);
smo62985.setStemDirection(dirsmo71808);
smo62986.setStemDirection(dirsmo71808);
const smo71808 = new VF.Beam([smo62983,smo62984,smo62985,smo62986]);
 
// formatting measures in staff group smo60952
fmtsmo6300426.format([smo63004v0,smo63004v1,smo68189v0,smo68189v1], 544);
const stavesmo63004 = new VF.Stave(1251, 525, 558);
stavesmo63004.setAttribute('id', 'stavesmo63004');
stavesmo63004.setBegBarType(VF.Barline.type.NONE);
stavesmo63004.setContext(context);
stavesmo63004.draw();
smo63004v0.draw(context, stavesmo63004);
smo63004v1.draw(context, stavesmo63004);
smo71805.setContext(context);
smo71805.draw();
smo71806.setContext(context);
smo71806.draw();
smo71807.setContext(context);
smo71807.draw();
smo71808.setContext(context);
smo71808.draw();
const stavesmo68189 = new VF.Stave(1251, 674, 558);
stavesmo68189.setAttribute('id', 'stavesmo68189');
stavesmo68189.setBegBarType(VF.Barline.type.NONE);
stavesmo68189.setContext(context);
stavesmo68189.draw();
smo68189v0.draw(context, stavesmo68189);
smo68189v1.draw(context, stavesmo68189);
const rightsmo60952stavesmo630041 = new VF.StaveConnector(stavesmo63004, stavesmo68189).setType(0);
rightsmo60952stavesmo630041.setContext(context).draw();
const fmtsmo6303627 = new VF.Formatter();
//
// voices and notes for stave 0 27
const smo63036v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63036v0ar = [];
const smo63005 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63005.setAttribute('id', 'smo63005');
smo63036v0ar.push(smo63005);
const smo63006 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo63006.setAttribute('id', 'smo63006');
smo63036v0ar.push(smo63006);
const smo63007 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo63007.setAttribute('id', 'smo63007');
smo63036v0ar.push(smo63007);
const smo63008 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo63008.setAttribute('id', 'smo63008');
const smo630080acc = new VF.Accidental('#');
smo63008.addModifier(smo630080acc, 0);
smo63036v0ar.push(smo63008);
const smo63009 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo63009.setAttribute('id', 'smo63009');
smo63036v0ar.push(smo63009);
const smo63010 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo63010.setAttribute('id', 'smo63010');
smo63036v0ar.push(smo63010);
const smo63011 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo63011.setAttribute('id', 'smo63011');
smo63036v0ar.push(smo63011);
const smo63012 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63012.setAttribute('id', 'smo63012');
smo63036v0ar.push(smo63012);
const smo63013 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo63013.setAttribute('id', 'smo63013');
smo63036v0ar.push(smo63013);
const smo63014 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo63014.setAttribute('id', 'smo63014');
smo63036v0ar.push(smo63014);
const smo63015 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo63015.setAttribute('id', 'smo63015');
smo63036v0ar.push(smo63015);
const smo63016 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo63016.setAttribute('id', 'smo63016');
smo63036v0ar.push(smo63016);
const smo63017 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo63017.setAttribute('id', 'smo63017');
smo63036v0ar.push(smo63017);
const smo63018 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo63018.setAttribute('id', 'smo63018');
smo63036v0ar.push(smo63018);
smo63036v0.addTickables(smo63036v0ar)
fmtsmo6303627.joinVoices([smo63036v0]);
const smo63036v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63036v1ar = [];
const smo63019 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63019.setAttribute('id', 'smo63019');
smo63019.setStyle({ fillStyle: '#aaaaaa7f' });
smo63036v1ar.push(smo63019);
const smo63020 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63020.setAttribute('id', 'smo63020');
smo63020.setStyle({ fillStyle: '#aaaaaa7f' });
smo63020.addModifier(new VF.Dot(), 0);
smo63020.addModifier(new VF.Dot(), 0);
smo63036v1ar.push(smo63020);
const smo63021 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/3/r"]}'))
smo63021.setAttribute('id', 'smo63021');
smo63021.setStyle({ fillStyle: "#115511" });
smo63036v1ar.push(smo63021);
const smo63022 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63022.setAttribute('id', 'smo63022');
smo63022.setStyle({ fillStyle: '#aaaaaa7f' });
smo63022.addModifier(new VF.Dot(), 0);
smo63022.addModifier(new VF.Dot(), 0);
smo63036v1ar.push(smo63022);
smo63036v1.addTickables(smo63036v1ar)
fmtsmo6303627.joinVoices([smo63036v1]);
const fmtsmo6821127 = new VF.Formatter();
//
// voices and notes for stave 1 27
const smo68211v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68211v0ar = [];
const smo68190 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo68190.setAttribute('id', 'smo68190');
smo68211v0ar.push(smo68190);
const smo68191 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/3/n"]}'))
smo68191.setAttribute('id', 'smo68191');
const smo681910acc = new VF.Accidental('#');
smo68191.addModifier(smo681910acc, 0);
smo68191.addModifier(new VF.Dot(), 0);
smo68211v0ar.push(smo68191);
const smo68192 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/3/n"]}'))
smo68192.setAttribute('id', 'smo68192');
smo68211v0ar.push(smo68192);
const smo68193 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo68193.setAttribute('id', 'smo68193');
smo68211v0ar.push(smo68193);
const smo68194 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/3/n"]}'))
smo68194.setAttribute('id', 'smo68194');
smo68194.addModifier(new VF.Dot(), 0);
smo68211v0ar.push(smo68194);
const smo68195 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/3/n"]}'))
smo68195.setAttribute('id', 'smo68195');
smo68211v0ar.push(smo68195);
smo68211v0.addTickables(smo68211v0ar)
fmtsmo6821127.joinVoices([smo68211v0]);
const smo68211v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68211v1ar = [];
const smo68196 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo68196.setAttribute('id', 'smo68196');
smo68196.setStyle({ fillStyle: "#115511" });
smo68211v1ar.push(smo68196);
const smo68197 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo68197.setAttribute('id', 'smo68197');
smo68197.setStyle({ fillStyle: "#115511" });
smo68211v1ar.push(smo68197);
smo68211v1.addTickables(smo68211v1ar)
fmtsmo6821127.joinVoices([smo68211v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo71821 = smo63006.getStemDirection();
smo63006.setStemDirection(dirsmo71821);
smo63007.setStemDirection(dirsmo71821);
const smo71821 = new VF.Beam([smo63006,smo63007]);
const dirsmo71822 = smo63008.getStemDirection();
smo63008.setStemDirection(dirsmo71822);
smo63009.setStemDirection(dirsmo71822);
smo63010.setStemDirection(dirsmo71822);
smo63011.setStemDirection(dirsmo71822);
const smo71822 = new VF.Beam([smo63008,smo63009,smo63010,smo63011]);
const dirsmo71823 = smo63013.getStemDirection();
smo63013.setStemDirection(dirsmo71823);
smo63014.setStemDirection(dirsmo71823);
const smo71823 = new VF.Beam([smo63013,smo63014]);
const dirsmo71824 = smo63015.getStemDirection();
smo63015.setStemDirection(dirsmo71824);
smo63016.setStemDirection(dirsmo71824);
smo63017.setStemDirection(dirsmo71824);
smo63018.setStemDirection(dirsmo71824);
const smo71824 = new VF.Beam([smo63015,smo63016,smo63017,smo63018]);
 
// formatting measures in staff group smo60952
fmtsmo6303627.format([smo63036v0,smo63036v1,smo68211v0,smo68211v1], 578);
const stavesmo63036 = new VF.Stave(90, 801, 636);
stavesmo63036.setAttribute('id', 'stavesmo63036');
stavesmo63036.setBegBarType(1);
stavesmo63036.addClef('treble');
stavesmo63036.setContext(context);
stavesmo63036.draw();
smo63036v0.draw(context, stavesmo63036);
smo63036v1.draw(context, stavesmo63036);
smo71821.setContext(context);
smo71821.draw();
smo71822.setContext(context);
smo71822.draw();
smo71823.setContext(context);
smo71823.draw();
smo71824.setContext(context);
smo71824.draw();
const stavesmo68211 = new VF.Stave(90, 947, 636);
stavesmo68211.setAttribute('id', 'stavesmo68211');
stavesmo68211.setBegBarType(1);
stavesmo68211.addClef('bass');
stavesmo68211.setContext(context);
stavesmo68211.draw();
smo68211v0.draw(context, stavesmo68211);
smo68211v1.draw(context, stavesmo68211);
const leftsmo60952stavesmo630361 = new VF.StaveConnector(stavesmo63036, stavesmo68211).setType(3);
leftsmo60952stavesmo630361.setContext(context).draw();
const fmtsmo6306828 = new VF.Formatter();
//
// voices and notes for stave 0 28
const smo63068v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63068v0ar = [];
const smo63037 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63037.setAttribute('id', 'smo63037');
smo63068v0ar.push(smo63037);
const smo63038 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo63038.setAttribute('id', 'smo63038');
smo63068v0ar.push(smo63038);
const smo63039 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo63039.setAttribute('id', 'smo63039');
smo63068v0ar.push(smo63039);
const smo63040 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo63040.setAttribute('id', 'smo63040');
smo63068v0ar.push(smo63040);
const smo63041 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo63041.setAttribute('id', 'smo63041');
smo63068v0ar.push(smo63041);
const smo63042 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo63042.setAttribute('id', 'smo63042');
smo63068v0ar.push(smo63042);
const smo63043 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo63043.setAttribute('id', 'smo63043');
smo63068v0ar.push(smo63043);
const smo63044 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63044.setAttribute('id', 'smo63044');
smo63068v0ar.push(smo63044);
const smo63045 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo63045.setAttribute('id', 'smo63045');
smo63068v0ar.push(smo63045);
const smo63046 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo63046.setAttribute('id', 'smo63046');
smo63068v0ar.push(smo63046);
const smo63047 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo63047.setAttribute('id', 'smo63047');
smo63068v0ar.push(smo63047);
const smo63048 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo63048.setAttribute('id', 'smo63048');
smo63068v0ar.push(smo63048);
const smo63049 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo63049.setAttribute('id', 'smo63049');
smo63068v0ar.push(smo63049);
const smo63050 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo63050.setAttribute('id', 'smo63050');
smo63068v0ar.push(smo63050);
smo63068v0.addTickables(smo63068v0ar)
fmtsmo6306828.joinVoices([smo63068v0]);
const smo63068v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63068v1ar = [];
const smo63051 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63051.setAttribute('id', 'smo63051');
smo63051.setStyle({ fillStyle: '#aaaaaa7f' });
smo63068v1ar.push(smo63051);
const smo63052 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63052.setAttribute('id', 'smo63052');
smo63052.setStyle({ fillStyle: '#aaaaaa7f' });
smo63052.addModifier(new VF.Dot(), 0);
smo63052.addModifier(new VF.Dot(), 0);
smo63068v1ar.push(smo63052);
const smo63053 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63053.setAttribute('id', 'smo63053');
smo63053.setStyle({ fillStyle: '#aaaaaa7f' });
smo63068v1ar.push(smo63053);
const smo63054 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63054.setAttribute('id', 'smo63054');
smo63054.setStyle({ fillStyle: '#aaaaaa7f' });
smo63054.addModifier(new VF.Dot(), 0);
smo63054.addModifier(new VF.Dot(), 0);
smo63068v1ar.push(smo63054);
smo63068v1.addTickables(smo63068v1ar)
fmtsmo6306828.joinVoices([smo63068v1]);
const fmtsmo6823328 = new VF.Formatter();
//
// voices and notes for stave 1 28
const smo68233v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68233v0ar = [];
const smo68212 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo68212.setAttribute('id', 'smo68212');
smo68233v0ar.push(smo68212);
const smo68213 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo68213.setAttribute('id', 'smo68213');
smo68213.addModifier(new VF.Dot(), 0);
smo68233v0ar.push(smo68213);
const smo68214 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo68214.setAttribute('id', 'smo68214');
smo68233v0ar.push(smo68214);
const smo68215 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo68215.setAttribute('id', 'smo68215');
smo68233v0ar.push(smo68215);
const smo68216 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo68216.setAttribute('id', 'smo68216');
smo68216.addModifier(new VF.Dot(), 0);
smo68233v0ar.push(smo68216);
const smo68217 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo68217.setAttribute('id', 'smo68217');
smo68233v0ar.push(smo68217);
smo68233v0.addTickables(smo68233v0ar)
fmtsmo6823328.joinVoices([smo68233v0]);
const smo68233v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68233v1ar = [];
const smo68218 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo68218.setAttribute('id', 'smo68218');
smo68218.setStyle({ fillStyle: "#115511" });
smo68233v1ar.push(smo68218);
const smo68219 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo68219.setAttribute('id', 'smo68219');
smo68219.setStyle({ fillStyle: "#115511" });
smo68233v1ar.push(smo68219);
smo68233v1.addTickables(smo68233v1ar)
fmtsmo6823328.joinVoices([smo68233v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo71829 = smo63038.getStemDirection();
smo63038.setStemDirection(dirsmo71829);
smo63039.setStemDirection(dirsmo71829);
const smo71829 = new VF.Beam([smo63038,smo63039]);
const dirsmo71830 = smo63040.getStemDirection();
smo63040.setStemDirection(dirsmo71830);
smo63041.setStemDirection(dirsmo71830);
smo63042.setStemDirection(dirsmo71830);
smo63043.setStemDirection(dirsmo71830);
const smo71830 = new VF.Beam([smo63040,smo63041,smo63042,smo63043]);
const dirsmo71831 = smo63045.getStemDirection();
smo63045.setStemDirection(dirsmo71831);
smo63046.setStemDirection(dirsmo71831);
const smo71831 = new VF.Beam([smo63045,smo63046]);
const dirsmo71832 = smo63047.getStemDirection();
smo63047.setStemDirection(dirsmo71832);
smo63048.setStemDirection(dirsmo71832);
smo63049.setStemDirection(dirsmo71832);
smo63050.setStemDirection(dirsmo71832);
const smo71832 = new VF.Beam([smo63047,smo63048,smo63049,smo63050]);
 
// formatting measures in staff group smo60952
fmtsmo6306828.format([smo63068v0,smo63068v1,smo68233v0,smo68233v1], 527);
const stavesmo63068 = new VF.Stave(726, 801, 541);
stavesmo63068.setAttribute('id', 'stavesmo63068');
stavesmo63068.setBegBarType(VF.Barline.type.NONE);
stavesmo63068.setContext(context);
stavesmo63068.draw();
smo63068v0.draw(context, stavesmo63068);
smo63068v1.draw(context, stavesmo63068);
smo71829.setContext(context);
smo71829.draw();
smo71830.setContext(context);
smo71830.draw();
smo71831.setContext(context);
smo71831.draw();
smo71832.setContext(context);
smo71832.draw();
const stavesmo68233 = new VF.Stave(726, 947, 541);
stavesmo68233.setAttribute('id', 'stavesmo68233');
stavesmo68233.setBegBarType(VF.Barline.type.NONE);
stavesmo68233.setContext(context);
stavesmo68233.draw();
smo68233v0.draw(context, stavesmo68233);
smo68233v1.draw(context, stavesmo68233);
const fmtsmo6310029 = new VF.Formatter();
//
// voices and notes for stave 0 29
const smo63100v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63100v0ar = [];
const smo63069 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63069.setAttribute('id', 'smo63069');
smo63100v0ar.push(smo63069);
const smo63070 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo63070.setAttribute('id', 'smo63070');
smo63100v0ar.push(smo63070);
const smo63071 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo63071.setAttribute('id', 'smo63071');
smo63100v0ar.push(smo63071);
const smo63072 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo63072.setAttribute('id', 'smo63072');
smo63100v0ar.push(smo63072);
const smo63073 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo63073.setAttribute('id', 'smo63073');
smo63100v0ar.push(smo63073);
const smo63074 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo63074.setAttribute('id', 'smo63074');
smo63100v0ar.push(smo63074);
const smo63075 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo63075.setAttribute('id', 'smo63075');
smo63100v0ar.push(smo63075);
const smo63076 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63076.setAttribute('id', 'smo63076');
smo63100v0ar.push(smo63076);
const smo63077 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo63077.setAttribute('id', 'smo63077');
smo63100v0ar.push(smo63077);
const smo63078 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo63078.setAttribute('id', 'smo63078');
smo63100v0ar.push(smo63078);
const smo63079 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo63079.setAttribute('id', 'smo63079');
smo63100v0ar.push(smo63079);
const smo63080 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo63080.setAttribute('id', 'smo63080');
smo63100v0ar.push(smo63080);
const smo63081 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo63081.setAttribute('id', 'smo63081');
smo63100v0ar.push(smo63081);
const smo63082 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo63082.setAttribute('id', 'smo63082');
smo63100v0ar.push(smo63082);
smo63100v0.addTickables(smo63100v0ar)
fmtsmo6310029.joinVoices([smo63100v0]);
const smo63100v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63100v1ar = [];
const smo63083 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63083.setAttribute('id', 'smo63083');
smo63083.setStyle({ fillStyle: '#aaaaaa7f' });
smo63100v1ar.push(smo63083);
const smo63084 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63084.setAttribute('id', 'smo63084');
smo63084.setStyle({ fillStyle: '#aaaaaa7f' });
smo63084.addModifier(new VF.Dot(), 0);
smo63084.addModifier(new VF.Dot(), 0);
smo63100v1ar.push(smo63084);
const smo63085 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63085.setAttribute('id', 'smo63085');
smo63085.setStyle({ fillStyle: '#aaaaaa7f' });
smo63100v1ar.push(smo63085);
const smo63086 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63086.setAttribute('id', 'smo63086');
smo63086.setStyle({ fillStyle: '#aaaaaa7f' });
smo63086.addModifier(new VF.Dot(), 0);
smo63086.addModifier(new VF.Dot(), 0);
smo63100v1ar.push(smo63086);
smo63100v1.addTickables(smo63100v1ar)
fmtsmo6310029.joinVoices([smo63100v1]);
const fmtsmo6825529 = new VF.Formatter();
//
// voices and notes for stave 1 29
const smo68255v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68255v0ar = [];
const smo68234 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo68234.setAttribute('id', 'smo68234');
smo68255v0ar.push(smo68234);
const smo68235 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo68235.setAttribute('id', 'smo68235');
smo68235.addModifier(new VF.Dot(), 0);
smo68255v0ar.push(smo68235);
const smo68236 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo68236.setAttribute('id', 'smo68236');
smo68255v0ar.push(smo68236);
const smo68237 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo68237.setAttribute('id', 'smo68237');
smo68255v0ar.push(smo68237);
const smo68238 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo68238.setAttribute('id', 'smo68238');
smo68238.addModifier(new VF.Dot(), 0);
smo68255v0ar.push(smo68238);
const smo68239 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo68239.setAttribute('id', 'smo68239');
smo68255v0ar.push(smo68239);
smo68255v0.addTickables(smo68255v0ar)
fmtsmo6825529.joinVoices([smo68255v0]);
const smo68255v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68255v1ar = [];
const smo68240 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo68240.setAttribute('id', 'smo68240');
smo68240.setStyle({ fillStyle: "#115511" });
smo68255v1ar.push(smo68240);
const smo68241 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo68241.setAttribute('id', 'smo68241');
smo68241.setStyle({ fillStyle: "#115511" });
smo68255v1ar.push(smo68241);
smo68255v1.addTickables(smo68255v1ar)
fmtsmo6825529.joinVoices([smo68255v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo71837 = smo63070.getStemDirection();
smo63070.setStemDirection(dirsmo71837);
smo63071.setStemDirection(dirsmo71837);
const smo71837 = new VF.Beam([smo63070,smo63071]);
const dirsmo71838 = smo63072.getStemDirection();
smo63072.setStemDirection(dirsmo71838);
smo63073.setStemDirection(dirsmo71838);
smo63074.setStemDirection(dirsmo71838);
smo63075.setStemDirection(dirsmo71838);
const smo71838 = new VF.Beam([smo63072,smo63073,smo63074,smo63075]);
const dirsmo71839 = smo63077.getStemDirection();
smo63077.setStemDirection(dirsmo71839);
smo63078.setStemDirection(dirsmo71839);
const smo71839 = new VF.Beam([smo63077,smo63078]);
const dirsmo71840 = smo63079.getStemDirection();
smo63079.setStemDirection(dirsmo71840);
smo63080.setStemDirection(dirsmo71840);
smo63081.setStemDirection(dirsmo71840);
smo63082.setStemDirection(dirsmo71840);
const smo71840 = new VF.Beam([smo63079,smo63080,smo63081,smo63082]);
 
// formatting measures in staff group smo60952
fmtsmo6310029.format([smo63100v0,smo63100v1,smo68255v0,smo68255v1], 527);
const stavesmo63100 = new VF.Stave(1267, 801, 541);
stavesmo63100.setAttribute('id', 'stavesmo63100');
stavesmo63100.setBegBarType(VF.Barline.type.NONE);
stavesmo63100.setContext(context);
stavesmo63100.draw();
smo63100v0.draw(context, stavesmo63100);
smo63100v1.draw(context, stavesmo63100);
smo71837.setContext(context);
smo71837.draw();
smo71838.setContext(context);
smo71838.draw();
smo71839.setContext(context);
smo71839.draw();
smo71840.setContext(context);
smo71840.draw();
const stavesmo68255 = new VF.Stave(1267, 947, 541);
stavesmo68255.setAttribute('id', 'stavesmo68255');
stavesmo68255.setBegBarType(VF.Barline.type.NONE);
stavesmo68255.setContext(context);
stavesmo68255.draw();
smo68255v0.draw(context, stavesmo68255);
smo68255v1.draw(context, stavesmo68255);
const rightsmo60952stavesmo631001 = new VF.StaveConnector(stavesmo63100, stavesmo68255).setType(0);
rightsmo60952stavesmo631001.setContext(context).draw();
const fmtsmo6313230 = new VF.Formatter();
//
// voices and notes for stave 0 30
const smo63132v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63132v0ar = [];
const smo63101 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63101.setAttribute('id', 'smo63101');
smo63132v0ar.push(smo63101);
const smo63102 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo63102.setAttribute('id', 'smo63102');
smo63132v0ar.push(smo63102);
const smo63103 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo63103.setAttribute('id', 'smo63103');
smo63132v0ar.push(smo63103);
const smo63104 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo63104.setAttribute('id', 'smo63104');
smo63132v0ar.push(smo63104);
const smo63105 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo63105.setAttribute('id', 'smo63105');
smo63132v0ar.push(smo63105);
const smo63106 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo63106.setAttribute('id', 'smo63106');
smo63132v0ar.push(smo63106);
const smo63107 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo63107.setAttribute('id', 'smo63107');
smo63132v0ar.push(smo63107);
const smo63108 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63108.setAttribute('id', 'smo63108');
smo63132v0ar.push(smo63108);
const smo63109 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo63109.setAttribute('id', 'smo63109');
smo63132v0ar.push(smo63109);
const smo63110 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo63110.setAttribute('id', 'smo63110');
smo63132v0ar.push(smo63110);
const smo63111 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo63111.setAttribute('id', 'smo63111');
smo63132v0ar.push(smo63111);
const smo63112 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo63112.setAttribute('id', 'smo63112');
smo63132v0ar.push(smo63112);
const smo63113 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo63113.setAttribute('id', 'smo63113');
smo63132v0ar.push(smo63113);
const smo63114 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo63114.setAttribute('id', 'smo63114');
smo63132v0ar.push(smo63114);
smo63132v0.addTickables(smo63132v0ar)
fmtsmo6313230.joinVoices([smo63132v0]);
const smo63132v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63132v1ar = [];
const smo63115 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63115.setAttribute('id', 'smo63115');
smo63115.setStyle({ fillStyle: '#aaaaaa7f' });
smo63132v1ar.push(smo63115);
const smo63116 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63116.setAttribute('id', 'smo63116');
smo63116.setStyle({ fillStyle: '#aaaaaa7f' });
smo63116.addModifier(new VF.Dot(), 0);
smo63116.addModifier(new VF.Dot(), 0);
smo63132v1ar.push(smo63116);
const smo63117 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63117.setAttribute('id', 'smo63117');
smo63117.setStyle({ fillStyle: '#aaaaaa7f' });
smo63132v1ar.push(smo63117);
const smo63118 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63118.setAttribute('id', 'smo63118');
smo63118.setStyle({ fillStyle: '#aaaaaa7f' });
smo63118.addModifier(new VF.Dot(), 0);
smo63118.addModifier(new VF.Dot(), 0);
smo63132v1ar.push(smo63118);
smo63132v1.addTickables(smo63132v1ar)
fmtsmo6313230.joinVoices([smo63132v1]);
const fmtsmo6827730 = new VF.Formatter();
//
// voices and notes for stave 1 30
const smo68277v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68277v0ar = [];
const smo68256 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo68256.setAttribute('id', 'smo68256');
smo68277v0ar.push(smo68256);
const smo68257 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo68257.setAttribute('id', 'smo68257');
smo68257.addModifier(new VF.Dot(), 0);
smo68277v0ar.push(smo68257);
const smo68258 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo68258.setAttribute('id', 'smo68258');
smo68277v0ar.push(smo68258);
const smo68259 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo68259.setAttribute('id', 'smo68259');
smo68277v0ar.push(smo68259);
const smo68260 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo68260.setAttribute('id', 'smo68260');
smo68260.addModifier(new VF.Dot(), 0);
smo68277v0ar.push(smo68260);
const smo68261 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo68261.setAttribute('id', 'smo68261');
smo68277v0ar.push(smo68261);
smo68277v0.addTickables(smo68277v0ar)
fmtsmo6827730.joinVoices([smo68277v0]);
const smo68277v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68277v1ar = [];
const smo68262 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo68262.setAttribute('id', 'smo68262');
smo68262.setStyle({ fillStyle: "#115511" });
smo68277v1ar.push(smo68262);
const smo68263 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo68263.setAttribute('id', 'smo68263');
smo68263.setStyle({ fillStyle: "#115511" });
smo68277v1ar.push(smo68263);
smo68277v1.addTickables(smo68277v1ar)
fmtsmo6827730.joinVoices([smo68277v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo71853 = smo63102.getStemDirection();
smo63102.setStemDirection(dirsmo71853);
smo63103.setStemDirection(dirsmo71853);
const smo71853 = new VF.Beam([smo63102,smo63103]);
const dirsmo71854 = smo63104.getStemDirection();
smo63104.setStemDirection(dirsmo71854);
smo63105.setStemDirection(dirsmo71854);
smo63106.setStemDirection(dirsmo71854);
smo63107.setStemDirection(dirsmo71854);
const smo71854 = new VF.Beam([smo63104,smo63105,smo63106,smo63107]);
const dirsmo71855 = smo63109.getStemDirection();
smo63109.setStemDirection(dirsmo71855);
smo63110.setStemDirection(dirsmo71855);
const smo71855 = new VF.Beam([smo63109,smo63110]);
const dirsmo71856 = smo63111.getStemDirection();
smo63111.setStemDirection(dirsmo71856);
smo63112.setStemDirection(dirsmo71856);
smo63113.setStemDirection(dirsmo71856);
smo63114.setStemDirection(dirsmo71856);
const smo71856 = new VF.Beam([smo63111,smo63112,smo63113,smo63114]);
 
// formatting measures in staff group smo60952
fmtsmo6313230.format([smo63132v0,smo63132v1,smo68277v0,smo68277v1], 526);
const stavesmo63132 = new VF.Stave(90, 1074, 584);
stavesmo63132.setAttribute('id', 'stavesmo63132');
stavesmo63132.setBegBarType(1);
stavesmo63132.addClef('treble');
stavesmo63132.setContext(context);
stavesmo63132.draw();
smo63132v0.draw(context, stavesmo63132);
smo63132v1.draw(context, stavesmo63132);
smo71853.setContext(context);
smo71853.draw();
smo71854.setContext(context);
smo71854.draw();
smo71855.setContext(context);
smo71855.draw();
smo71856.setContext(context);
smo71856.draw();
const stavesmo68277 = new VF.Stave(90, 1223, 584);
stavesmo68277.setAttribute('id', 'stavesmo68277');
stavesmo68277.setBegBarType(1);
stavesmo68277.addClef('bass');
stavesmo68277.setContext(context);
stavesmo68277.draw();
smo68277v0.draw(context, stavesmo68277);
smo68277v1.draw(context, stavesmo68277);
const leftsmo60952stavesmo631321 = new VF.StaveConnector(stavesmo63132, stavesmo68277).setType(3);
leftsmo60952stavesmo631321.setContext(context).draw();
const fmtsmo6316431 = new VF.Formatter();
//
// voices and notes for stave 0 31
const smo63164v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63164v0ar = [];
const smo63133 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63133.setAttribute('id', 'smo63133');
smo63164v0ar.push(smo63133);
const smo63134 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo63134.setAttribute('id', 'smo63134');
smo63164v0ar.push(smo63134);
const smo63135 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/3/n"]}'))
smo63135.setAttribute('id', 'smo63135');
const smo631350acc = new VF.Accidental('b');
smo63135.addModifier(smo631350acc, 0);
smo63164v0ar.push(smo63135);
const smo63136 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo63136.setAttribute('id', 'smo63136');
smo63164v0ar.push(smo63136);
const smo63137 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo63137.setAttribute('id', 'smo63137');
smo63164v0ar.push(smo63137);
const smo63138 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/3/n"]}'))
smo63138.setAttribute('id', 'smo63138');
smo63164v0ar.push(smo63138);
const smo63139 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo63139.setAttribute('id', 'smo63139');
smo63164v0ar.push(smo63139);
const smo63140 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63140.setAttribute('id', 'smo63140');
smo63164v0ar.push(smo63140);
const smo63141 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo63141.setAttribute('id', 'smo63141');
smo63164v0ar.push(smo63141);
const smo63142 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/3/n"]}'))
smo63142.setAttribute('id', 'smo63142');
smo63164v0ar.push(smo63142);
const smo63143 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo63143.setAttribute('id', 'smo63143');
smo63164v0ar.push(smo63143);
const smo63144 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo63144.setAttribute('id', 'smo63144');
smo63164v0ar.push(smo63144);
const smo63145 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/3/n"]}'))
smo63145.setAttribute('id', 'smo63145');
smo63164v0ar.push(smo63145);
const smo63146 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo63146.setAttribute('id', 'smo63146');
smo63164v0ar.push(smo63146);
smo63164v0.addTickables(smo63164v0ar)
fmtsmo6316431.joinVoices([smo63164v0]);
const smo63164v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63164v1ar = [];
const smo63147 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63147.setAttribute('id', 'smo63147');
smo63147.setStyle({ fillStyle: '#aaaaaa7f' });
smo63164v1ar.push(smo63147);
const smo63148 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63148.setAttribute('id', 'smo63148');
smo63148.setStyle({ fillStyle: '#aaaaaa7f' });
smo63148.addModifier(new VF.Dot(), 0);
smo63148.addModifier(new VF.Dot(), 0);
smo63164v1ar.push(smo63148);
const smo63149 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63149.setAttribute('id', 'smo63149');
smo63149.setStyle({ fillStyle: '#aaaaaa7f' });
smo63164v1ar.push(smo63149);
const smo63150 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63150.setAttribute('id', 'smo63150');
smo63150.setStyle({ fillStyle: '#aaaaaa7f' });
smo63150.addModifier(new VF.Dot(), 0);
smo63150.addModifier(new VF.Dot(), 0);
smo63164v1ar.push(smo63150);
smo63164v1.addTickables(smo63164v1ar)
fmtsmo6316431.joinVoices([smo63164v1]);
const fmtsmo6829931 = new VF.Formatter();
//
// voices and notes for stave 1 31
const smo68299v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68299v0ar = [];
const smo68278 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo68278.setAttribute('id', 'smo68278');
smo68299v0ar.push(smo68278);
const smo68279 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/3/n"]}'))
smo68279.setAttribute('id', 'smo68279');
smo68279.addModifier(new VF.Dot(), 0);
smo68299v0ar.push(smo68279);
const smo68280 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/3/n"]}'))
smo68280.setAttribute('id', 'smo68280');
smo68299v0ar.push(smo68280);
const smo68281 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo68281.setAttribute('id', 'smo68281');
smo68299v0ar.push(smo68281);
const smo68282 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/3/n"]}'))
smo68282.setAttribute('id', 'smo68282');
smo68282.addModifier(new VF.Dot(), 0);
smo68299v0ar.push(smo68282);
const smo68283 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/3/n"]}'))
smo68283.setAttribute('id', 'smo68283');
smo68299v0ar.push(smo68283);
smo68299v0.addTickables(smo68299v0ar)
fmtsmo6829931.joinVoices([smo68299v0]);
const smo68299v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68299v1ar = [];
const smo68284 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/2/n"]}'))
smo68284.setAttribute('id', 'smo68284');
smo68284.setStyle({ fillStyle: "#115511" });
smo68299v1ar.push(smo68284);
const smo68285 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/2/n"]}'))
smo68285.setAttribute('id', 'smo68285');
smo68285.setStyle({ fillStyle: "#115511" });
smo68299v1ar.push(smo68285);
smo68299v1.addTickables(smo68299v1ar)
fmtsmo6829931.joinVoices([smo68299v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo71861 = smo63134.getStemDirection();
smo63134.setStemDirection(dirsmo71861);
smo63135.setStemDirection(dirsmo71861);
const smo71861 = new VF.Beam([smo63134,smo63135]);
const dirsmo71862 = smo63136.getStemDirection();
smo63136.setStemDirection(dirsmo71862);
smo63137.setStemDirection(dirsmo71862);
smo63138.setStemDirection(dirsmo71862);
smo63139.setStemDirection(dirsmo71862);
const smo71862 = new VF.Beam([smo63136,smo63137,smo63138,smo63139]);
const dirsmo71863 = smo63141.getStemDirection();
smo63141.setStemDirection(dirsmo71863);
smo63142.setStemDirection(dirsmo71863);
const smo71863 = new VF.Beam([smo63141,smo63142]);
const dirsmo71864 = smo63143.getStemDirection();
smo63143.setStemDirection(dirsmo71864);
smo63144.setStemDirection(dirsmo71864);
smo63145.setStemDirection(dirsmo71864);
smo63146.setStemDirection(dirsmo71864);
const smo71864 = new VF.Beam([smo63143,smo63144,smo63145,smo63146]);
 
// formatting measures in staff group smo60952
fmtsmo6316431.format([smo63164v0,smo63164v1,smo68299v0,smo68299v1], 571);
const stavesmo63164 = new VF.Stave(674, 1074, 585);
stavesmo63164.setAttribute('id', 'stavesmo63164');
stavesmo63164.setBegBarType(VF.Barline.type.NONE);
stavesmo63164.setContext(context);
stavesmo63164.draw();
smo63164v0.draw(context, stavesmo63164);
smo63164v1.draw(context, stavesmo63164);
smo71861.setContext(context);
smo71861.draw();
smo71862.setContext(context);
smo71862.draw();
smo71863.setContext(context);
smo71863.draw();
smo71864.setContext(context);
smo71864.draw();
const stavesmo68299 = new VF.Stave(674, 1223, 585);
stavesmo68299.setAttribute('id', 'stavesmo68299');
stavesmo68299.setBegBarType(VF.Barline.type.NONE);
stavesmo68299.setContext(context);
stavesmo68299.draw();
smo68299v0.draw(context, stavesmo68299);
smo68299v1.draw(context, stavesmo68299);
const fmtsmo6319532 = new VF.Formatter();
//
// voices and notes for stave 0 32
const smo63195v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63195v0ar = [];
const smo63165 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63165.setAttribute('id', 'smo63165');
smo63195v0ar.push(smo63165);
const smo63166 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo63166.setAttribute('id', 'smo63166');
smo63195v0ar.push(smo63166);
const smo63167 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo63167.setAttribute('id', 'smo63167');
smo63195v0ar.push(smo63167);
const smo63168 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo63168.setAttribute('id', 'smo63168');
smo63195v0ar.push(smo63168);
const smo63169 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo63169.setAttribute('id', 'smo63169');
smo63195v0ar.push(smo63169);
const smo63170 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo63170.setAttribute('id', 'smo63170');
smo63195v0ar.push(smo63170);
const smo63171 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo63171.setAttribute('id', 'smo63171');
smo63195v0ar.push(smo63171);
const smo63172 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo63172.setAttribute('id', 'smo63172');
smo63195v0ar.push(smo63172);
const smo63173 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo63173.setAttribute('id', 'smo63173');
smo63195v0ar.push(smo63173);
const smo63174 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo63174.setAttribute('id', 'smo63174');
smo63195v0ar.push(smo63174);
const smo63175 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo63175.setAttribute('id', 'smo63175');
smo63195v0ar.push(smo63175);
const smo63176 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo63176.setAttribute('id', 'smo63176');
smo63195v0ar.push(smo63176);
const smo63177 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo63177.setAttribute('id', 'smo63177');
smo63195v0ar.push(smo63177);
const smo63178 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo63178.setAttribute('id', 'smo63178');
smo63195v0ar.push(smo63178);
const smo63179 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo63179.setAttribute('id', 'smo63179');
smo63195v0ar.push(smo63179);
smo63195v0.addTickables(smo63195v0ar)
fmtsmo6319532.joinVoices([smo63195v0]);
const smo63195v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63195v1ar = [];
const smo63180 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63180.setAttribute('id', 'smo63180');
smo63180.setStyle({ fillStyle: '#aaaaaa7f' });
smo63195v1ar.push(smo63180);
const smo63181 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2ddd","dots":3,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63181.setAttribute('id', 'smo63181');
smo63181.setStyle({ fillStyle: '#aaaaaa7f' });
smo63181.addModifier(new VF.Dot(), 0);
smo63181.addModifier(new VF.Dot(), 0);
smo63181.addModifier(new VF.Dot(), 0);
smo63195v1ar.push(smo63181);
smo63195v1.addTickables(smo63195v1ar)
fmtsmo6319532.joinVoices([smo63195v1]);
const fmtsmo6831932 = new VF.Formatter();
//
// voices and notes for stave 1 32
const smo68319v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68319v0ar = [];
const smo68300 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["fn/3/r"]}'))
smo68300.setAttribute('id', 'smo68300');
smo68319v0ar.push(smo68300);
const smo68301 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo68301.setAttribute('id', 'smo68301');
smo68301.addModifier(new VF.Dot(), 0);
smo68319v0ar.push(smo68301);
const smo68302 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo68302.setAttribute('id', 'smo68302');
smo68319v0ar.push(smo68302);
const smo68303 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo68303.setAttribute('id', 'smo68303');
smo68319v0ar.push(smo68303);
smo68319v0.addTickables(smo68319v0ar)
fmtsmo6831932.joinVoices([smo68319v0]);
const smo68319v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68319v1ar = [];
const smo68304 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/2/n"]}'))
smo68304.setAttribute('id', 'smo68304');
smo68304.setStyle({ fillStyle: "#115511" });
smo68319v1ar.push(smo68304);
const smo68305 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/2/n"]}'))
smo68305.setAttribute('id', 'smo68305');
smo68305.setStyle({ fillStyle: "#115511" });
smo68319v1ar.push(smo68305);
smo68319v1.addTickables(smo68319v1ar)
fmtsmo6831932.joinVoices([smo68319v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo71869 = smo63166.getStemDirection();
smo63166.setStemDirection(dirsmo71869);
smo63167.setStemDirection(dirsmo71869);
const smo71869 = new VF.Beam([smo63166,smo63167]);
const dirsmo71870 = smo63168.getStemDirection();
smo63168.setStemDirection(dirsmo71870);
smo63169.setStemDirection(dirsmo71870);
smo63170.setStemDirection(dirsmo71870);
smo63171.setStemDirection(dirsmo71870);
const smo71870 = new VF.Beam([smo63168,smo63169,smo63170,smo63171]);
const dirsmo71871 = smo63172.getStemDirection();
smo63172.setStemDirection(dirsmo71871);
smo63173.setStemDirection(dirsmo71871);
smo63174.setStemDirection(dirsmo71871);
smo63175.setStemDirection(dirsmo71871);
const smo71871 = new VF.Beam([smo63172,smo63173,smo63174,smo63175]);
const dirsmo71872 = smo63176.getStemDirection();
smo63176.setStemDirection(dirsmo71872);
smo63177.setStemDirection(dirsmo71872);
smo63178.setStemDirection(dirsmo71872);
smo63179.setStemDirection(dirsmo71872);
const smo71872 = new VF.Beam([smo63176,smo63177,smo63178,smo63179]);
 
// formatting measures in staff group smo60952
fmtsmo6319532.format([smo63195v0,smo63195v1,smo68319v0,smo68319v1], 535);
const stavesmo63195 = new VF.Stave(1259, 1074, 549);
stavesmo63195.setAttribute('id', 'stavesmo63195');
stavesmo63195.setBegBarType(VF.Barline.type.NONE);
stavesmo63195.setContext(context);
stavesmo63195.draw();
smo63195v0.draw(context, stavesmo63195);
smo63195v1.draw(context, stavesmo63195);
smo71869.setContext(context);
smo71869.draw();
smo71870.setContext(context);
smo71870.draw();
smo71871.setContext(context);
smo71871.draw();
smo71872.setContext(context);
smo71872.draw();
const stavesmo68319 = new VF.Stave(1259, 1223, 549);
stavesmo68319.setAttribute('id', 'stavesmo68319');
stavesmo68319.setBegBarType(VF.Barline.type.NONE);
stavesmo68319.setContext(context);
stavesmo68319.draw();
smo68319v0.draw(context, stavesmo68319);
smo68319v1.draw(context, stavesmo68319);
const rightsmo60952stavesmo631951 = new VF.StaveConnector(stavesmo63195, stavesmo68319).setType(0);
rightsmo60952stavesmo631951.setContext(context).draw();
const fmtsmo6322633 = new VF.Formatter();
//
// voices and notes for stave 0 33
const smo63226v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63226v0ar = [];
const smo63196 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63196.setAttribute('id', 'smo63196');
smo63226v0ar.push(smo63196);
const smo63197 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo63197.setAttribute('id', 'smo63197');
smo63226v0ar.push(smo63197);
const smo63198 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo63198.setAttribute('id', 'smo63198');
smo63226v0ar.push(smo63198);
const smo63199 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo63199.setAttribute('id', 'smo63199');
smo63226v0ar.push(smo63199);
const smo63200 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo63200.setAttribute('id', 'smo63200');
smo63226v0ar.push(smo63200);
const smo63201 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo63201.setAttribute('id', 'smo63201');
smo63226v0ar.push(smo63201);
const smo63202 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo63202.setAttribute('id', 'smo63202');
smo63226v0ar.push(smo63202);
const smo63203 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo63203.setAttribute('id', 'smo63203');
smo63226v0ar.push(smo63203);
const smo63204 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo63204.setAttribute('id', 'smo63204');
smo63226v0ar.push(smo63204);
const smo63205 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo63205.setAttribute('id', 'smo63205');
smo63226v0ar.push(smo63205);
const smo63206 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo63206.setAttribute('id', 'smo63206');
smo63226v0ar.push(smo63206);
const smo63207 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo63207.setAttribute('id', 'smo63207');
smo63226v0ar.push(smo63207);
const smo63208 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo63208.setAttribute('id', 'smo63208');
smo63226v0ar.push(smo63208);
const smo63209 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo63209.setAttribute('id', 'smo63209');
smo63226v0ar.push(smo63209);
const smo63210 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo63210.setAttribute('id', 'smo63210');
smo63226v0ar.push(smo63210);
smo63226v0.addTickables(smo63226v0ar)
fmtsmo6322633.joinVoices([smo63226v0]);
const smo63226v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63226v1ar = [];
const smo63211 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/3/r"]}'))
smo63211.setAttribute('id', 'smo63211');
smo63211.setStyle({ fillStyle: "#115511" });
smo63226v1ar.push(smo63211);
const smo63212 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2ddd","dots":3,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63212.setAttribute('id', 'smo63212');
smo63212.setStyle({ fillStyle: '#aaaaaa7f' });
smo63212.addModifier(new VF.Dot(), 0);
smo63212.addModifier(new VF.Dot(), 0);
smo63212.addModifier(new VF.Dot(), 0);
smo63226v1ar.push(smo63212);
smo63226v1.addTickables(smo63226v1ar)
fmtsmo6322633.joinVoices([smo63226v1]);
const fmtsmo6833933 = new VF.Formatter();
//
// voices and notes for stave 1 33
const smo68339v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68339v0ar = [];
const smo68320 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo68320.setAttribute('id', 'smo68320');
smo68320.setStyle({ fillStyle: '#aaaaaa7f' });
smo68339v0ar.push(smo68320);
const smo68321 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/2/n"]}'))
smo68321.setAttribute('id', 'smo68321');
smo68321.addModifier(new VF.Dot(), 0);
smo68339v0ar.push(smo68321);
const smo68322 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/2/n"]}'))
smo68322.setAttribute('id', 'smo68322');
smo68339v0ar.push(smo68322);
const smo68323 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/2/n"]}'))
smo68323.setAttribute('id', 'smo68323');
smo68339v0ar.push(smo68323);
smo68339v0.addTickables(smo68339v0ar)
fmtsmo6833933.joinVoices([smo68339v0]);
const smo68339v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68339v1ar = [];
const smo68324 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/2/n"]}'))
smo68324.setAttribute('id', 'smo68324');
smo68324.setStyle({ fillStyle: "#115511" });
smo68339v1ar.push(smo68324);
const smo68325 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/2/n"]}'))
smo68325.setAttribute('id', 'smo68325');
smo68325.setStyle({ fillStyle: "#115511" });
smo68339v1ar.push(smo68325);
smo68339v1.addTickables(smo68339v1ar)
fmtsmo6833933.joinVoices([smo68339v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo71885 = smo63197.getStemDirection();
smo63197.setStemDirection(dirsmo71885);
smo63198.setStemDirection(dirsmo71885);
const smo71885 = new VF.Beam([smo63197,smo63198]);
const dirsmo71886 = smo63199.getStemDirection();
smo63199.setStemDirection(dirsmo71886);
smo63200.setStemDirection(dirsmo71886);
smo63201.setStemDirection(dirsmo71886);
smo63202.setStemDirection(dirsmo71886);
const smo71886 = new VF.Beam([smo63199,smo63200,smo63201,smo63202]);
const dirsmo71887 = smo63203.getStemDirection();
smo63203.setStemDirection(dirsmo71887);
smo63204.setStemDirection(dirsmo71887);
smo63205.setStemDirection(dirsmo71887);
smo63206.setStemDirection(dirsmo71887);
const smo71887 = new VF.Beam([smo63203,smo63204,smo63205,smo63206]);
const dirsmo71888 = smo63207.getStemDirection();
smo63207.setStemDirection(dirsmo71888);
smo63208.setStemDirection(dirsmo71888);
smo63209.setStemDirection(dirsmo71888);
smo63210.setStemDirection(dirsmo71888);
const smo71888 = new VF.Beam([smo63207,smo63208,smo63209,smo63210]);
 
// formatting measures in staff group smo60952
fmtsmo6322633.format([smo63226v0,smo63226v1,smo68339v0,smo68339v1], 475);
const stavesmo63226 = new VF.Stave(90, 1422, 533);
stavesmo63226.setAttribute('id', 'stavesmo63226');
stavesmo63226.setBegBarType(1);
stavesmo63226.addClef('treble');
stavesmo63226.setContext(context);
stavesmo63226.draw();
smo63226v0.draw(context, stavesmo63226);
smo63226v1.draw(context, stavesmo63226);
smo71885.setContext(context);
smo71885.draw();
smo71886.setContext(context);
smo71886.draw();
smo71887.setContext(context);
smo71887.draw();
smo71888.setContext(context);
smo71888.draw();
const stavesmo68339 = new VF.Stave(90, 1508, 533);
stavesmo68339.setAttribute('id', 'stavesmo68339');
stavesmo68339.setBegBarType(1);
stavesmo68339.addClef('bass');
stavesmo68339.setContext(context);
stavesmo68339.draw();
smo68339v0.draw(context, stavesmo68339);
smo68339v1.draw(context, stavesmo68339);
const leftsmo60952stavesmo632261 = new VF.StaveConnector(stavesmo63226, stavesmo68339).setType(3);
leftsmo60952stavesmo632261.setContext(context).draw();
const fmtsmo6324134 = new VF.Formatter();
//
// voices and notes for stave 0 34
const smo63241v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63241v0ar = [];
const smo63227 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n","cn/5/n"]}'))
smo63227.setAttribute('id', 'smo63227');
smo63241v0ar.push(smo63227);
smo63241v0.addTickables(smo63241v0ar)
fmtsmo6324134.joinVoices([smo63241v0]);
const fmtsmo6835434 = new VF.Formatter();
//
// voices and notes for stave 1 34
const smo68354v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68354v0ar = [];
const smo68340 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo68340.setAttribute('id', 'smo68340');
smo68354v0ar.push(smo68340);
smo68354v0.addTickables(smo68354v0ar)
fmtsmo6835434.joinVoices([smo68354v0]);
// create beam groups and tuplets for format grp smo60952 before formatting
 
// formatting measures in staff group smo60952
fmtsmo6324134.format([smo63241v0,smo68354v0], 54);
const stavesmo63241 = new VF.Stave(623, 1422, 77);
stavesmo63241.setAttribute('id', 'stavesmo63241');
stavesmo63241.setBegBarType(VF.Barline.type.NONE);
stavesmo63241.setEndBarType(3);
stavesmo63241.setContext(context);
stavesmo63241.draw();
smo63241v0.draw(context, stavesmo63241);
const stavesmo68354 = new VF.Stave(623, 1508, 77);
stavesmo68354.setAttribute('id', 'stavesmo68354');
stavesmo68354.setBegBarType(VF.Barline.type.NONE);
stavesmo68354.setEndBarType(3);
stavesmo68354.setContext(context);
stavesmo68354.draw();
smo68354v0.draw(context, stavesmo68354);
const fmtsmo6326535 = new VF.Formatter();
//
// voices and notes for stave 0 35
const smo63265v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63265v0ar = [];
const smo63242 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63242.setAttribute('id', 'smo63242');
smo63265v0ar.push(smo63242);
smo63265v0.addTickables(smo63265v0ar)
fmtsmo6326535.joinVoices([smo63265v0]);
const smo63265v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63265v1ar = [];
const smo63243 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/3/r"]}'))
smo63243.setAttribute('id', 'smo63243');
smo63243.setStyle({ fillStyle: "#115511" });
smo63265v1ar.push(smo63243);
const smo63244 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo63244.setAttribute('id', 'smo63244');
smo63244.setStyle({ fillStyle: "#115511" });
smo63265v1ar.push(smo63244);
const smo63245 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo63245.setAttribute('id', 'smo63245');
smo63245.setStyle({ fillStyle: "#115511" });
smo63265v1ar.push(smo63245);
const smo63246 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo63246.setAttribute('id', 'smo63246');
smo63246.setStyle({ fillStyle: "#115511" });
smo63265v1ar.push(smo63246);
const smo63247 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo63247.setAttribute('id', 'smo63247');
smo63247.setStyle({ fillStyle: "#115511" });
smo63247.addModifier(new VF.Dot(), 0);
smo63265v1ar.push(smo63247);
const smo63248 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo63248.setAttribute('id', 'smo63248');
smo63248.setStyle({ fillStyle: "#115511" });
smo63265v1ar.push(smo63248);
const smo63249 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo63249.setAttribute('id', 'smo63249');
smo63249.setStyle({ fillStyle: "#115511" });
smo63265v1ar.push(smo63249);
const smo63250 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo63250.setAttribute('id', 'smo63250');
smo63250.setStyle({ fillStyle: "#115511" });
smo63265v1ar.push(smo63250);
const smo63251 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo63251.setAttribute('id', 'smo63251');
smo63251.setStyle({ fillStyle: "#115511" });
smo63265v1ar.push(smo63251);
smo63265v1.addTickables(smo63265v1ar)
fmtsmo6326535.joinVoices([smo63265v1]);
const fmtsmo6836935 = new VF.Formatter();
//
// voices and notes for stave 1 35
const smo68369v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68369v0ar = [];
const smo68355 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo68355.setAttribute('id', 'smo68355');
smo68369v0ar.push(smo68355);
smo68369v0.addTickables(smo68369v0ar)
fmtsmo6836935.joinVoices([smo68369v0]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo71895 = smo63244.getStemDirection();
smo63244.setStemDirection(dirsmo71895);
smo63245.setStemDirection(dirsmo71895);
smo63246.setStemDirection(dirsmo71895);
const smo71895 = new VF.Beam([smo63244,smo63245,smo63246]);
const dirsmo71896 = smo63247.getStemDirection();
smo63247.setStemDirection(dirsmo71896);
smo63248.setStemDirection(dirsmo71896);
smo63249.setStemDirection(dirsmo71896);
const smo71896 = new VF.Beam([smo63247,smo63248,smo63249]);
const dirsmo71897 = smo63250.getStemDirection();
smo63250.setStemDirection(dirsmo71897);
smo63251.setStemDirection(dirsmo71897);
const smo71897 = new VF.Beam([smo63250,smo63251]);
 
// formatting measures in staff group smo60952
fmtsmo6326535.format([smo63265v0,smo63265v1,smo68369v0], 264);
const stavesmo63265 = new VF.Stave(700, 1422, 278);
stavesmo63265.setAttribute('id', 'stavesmo63265');
stavesmo63265.setBegBarType(VF.Barline.type.NONE);
stavesmo63265.setTempo(JSON.parse('{"duration":"8","dots":0,"bpm":116,"name":"Moderato e maestoso"}'), -1 * 0);
stavesmo63265.setContext(context);
stavesmo63265.draw();
smo63265v0.draw(context, stavesmo63265);
smo63265v1.draw(context, stavesmo63265);
smo71895.setContext(context);
smo71895.draw();
smo71896.setContext(context);
smo71896.draw();
smo71897.setContext(context);
smo71897.draw();
const stavesmo68369 = new VF.Stave(700, 1508, 278);
stavesmo68369.setAttribute('id', 'stavesmo68369');
stavesmo68369.setBegBarType(VF.Barline.type.NONE);
stavesmo68369.setContext(context);
stavesmo68369.draw();
smo68369v0.draw(context, stavesmo68369);
const fmtsmo6329836 = new VF.Formatter();
//
// voices and notes for stave 0 36
const smo63298v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63298v0ar = [];
const smo63266 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63266.setAttribute('id', 'smo63266');
smo63298v0ar.push(smo63266);
const smo63267 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63267.setAttribute('id', 'smo63267');
smo63298v0ar.push(smo63267);
const smo63268 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo63268.setAttribute('id', 'smo63268');
smo63298v0ar.push(smo63268);
const smo63269 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo63269.setAttribute('id', 'smo63269');
smo63298v0ar.push(smo63269);
const smo63270 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo63270.setAttribute('id', 'smo63270');
smo63298v0ar.push(smo63270);
smo63298v0.addTickables(smo63298v0ar)
fmtsmo6329836.joinVoices([smo63298v0]);
const smo63298v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63298v1ar = [];
const smo63271 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo63271.setAttribute('id', 'smo63271');
smo63271.setStyle({ fillStyle: "#115511" });
smo63298v1ar.push(smo63271);
const smo63272 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo63272.setAttribute('id', 'smo63272');
smo63272.setStyle({ fillStyle: "#115511" });
smo63298v1ar.push(smo63272);
const smo63273 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo63273.setAttribute('id', 'smo63273');
smo63273.setStyle({ fillStyle: "#115511" });
smo63298v1ar.push(smo63273);
const smo63274 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo63274.setAttribute('id', 'smo63274');
smo63274.setStyle({ fillStyle: "#115511" });
smo63298v1ar.push(smo63274);
const smo63275 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo63275.setAttribute('id', 'smo63275');
smo63275.setStyle({ fillStyle: "#115511" });
smo63298v1ar.push(smo63275);
const smo63276 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo63276.setAttribute('id', 'smo63276');
smo63276.setStyle({ fillStyle: "#115511" });
smo63298v1ar.push(smo63276);
const smo63277 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo63277.setAttribute('id', 'smo63277');
smo63277.setStyle({ fillStyle: "#115511" });
smo63298v1ar.push(smo63277);
const smo63278 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo63278.setAttribute('id', 'smo63278');
smo63278.setStyle({ fillStyle: "#115511" });
smo63298v1ar.push(smo63278);
const smo63279 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo63279.setAttribute('id', 'smo63279');
smo63279.setStyle({ fillStyle: "#115511" });
smo63298v1ar.push(smo63279);
const smo63280 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo63280.setAttribute('id', 'smo63280');
smo63280.setStyle({ fillStyle: "#115511" });
smo63298v1ar.push(smo63280);
const smo63281 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo63281.setAttribute('id', 'smo63281');
smo63281.setStyle({ fillStyle: "#115511" });
smo63298v1ar.push(smo63281);
const smo63282 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo63282.setAttribute('id', 'smo63282');
smo63282.setStyle({ fillStyle: "#115511" });
smo63298v1ar.push(smo63282);
const smo63283 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo63283.setAttribute('id', 'smo63283');
smo63283.setStyle({ fillStyle: "#115511" });
smo63298v1ar.push(smo63283);
const smo63284 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/3/n"]}'))
smo63284.setAttribute('id', 'smo63284');
smo63284.setStyle({ fillStyle: "#115511" });
smo63298v1ar.push(smo63284);
smo63298v1.addTickables(smo63298v1ar)
fmtsmo6329836.joinVoices([smo63298v1]);
const fmtsmo6838436 = new VF.Formatter();
//
// voices and notes for stave 1 36
const smo68384v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68384v0ar = [];
const smo68370 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo68370.setAttribute('id', 'smo68370');
smo68384v0ar.push(smo68370);
smo68384v0.addTickables(smo68384v0ar)
fmtsmo6838436.joinVoices([smo68384v0]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo71902 = smo63268.getStemDirection();
smo63268.setStemDirection(dirsmo71902);
smo63269.setStemDirection(dirsmo71902);
smo63270.setStemDirection(dirsmo71902);
const smo71902 = new VF.Beam([smo63268,smo63269,smo63270]);
const dirsmo71903 = smo63271.getStemDirection();
smo63271.setStemDirection(dirsmo71903);
smo63272.setStemDirection(dirsmo71903);
const smo71903 = new VF.Beam([smo63271,smo63272]);
const dirsmo71904 = smo63273.getStemDirection();
smo63273.setStemDirection(dirsmo71904);
smo63274.setStemDirection(dirsmo71904);
smo63275.setStemDirection(dirsmo71904);
smo63276.setStemDirection(dirsmo71904);
const smo71904 = new VF.Beam([smo63273,smo63274,smo63275,smo63276]);
const dirsmo71905 = smo63277.getStemDirection();
smo63277.setStemDirection(dirsmo71905);
smo63278.setStemDirection(dirsmo71905);
smo63279.setStemDirection(dirsmo71905);
smo63280.setStemDirection(dirsmo71905);
const smo71905 = new VF.Beam([smo63277,smo63278,smo63279,smo63280]);
const dirsmo71906 = smo63281.getStemDirection();
smo63281.setStemDirection(dirsmo71906);
smo63282.setStemDirection(dirsmo71906);
smo63283.setStemDirection(dirsmo71906);
smo63284.setStemDirection(dirsmo71906);
const smo71906 = new VF.Beam([smo63281,smo63282,smo63283,smo63284]);
 
// formatting measures in staff group smo60952
fmtsmo6329836.format([smo63298v0,smo63298v1,smo68384v0], 390);
const stavesmo63298 = new VF.Stave(978, 1422, 404);
stavesmo63298.setAttribute('id', 'stavesmo63298');
stavesmo63298.setBegBarType(VF.Barline.type.NONE);
stavesmo63298.setContext(context);
stavesmo63298.draw();
smo63298v0.draw(context, stavesmo63298);
smo63298v1.draw(context, stavesmo63298);
smo71902.setContext(context);
smo71902.draw();
smo71903.setContext(context);
smo71903.draw();
smo71904.setContext(context);
smo71904.draw();
smo71905.setContext(context);
smo71905.draw();
smo71906.setContext(context);
smo71906.draw();
const stavesmo68384 = new VF.Stave(978, 1508, 404);
stavesmo68384.setAttribute('id', 'stavesmo68384');
stavesmo68384.setBegBarType(VF.Barline.type.NONE);
stavesmo68384.setContext(context);
stavesmo68384.draw();
smo68384v0.draw(context, stavesmo68384);
const fmtsmo6333137 = new VF.Formatter();
//
// voices and notes for stave 0 37
const smo63331v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63331v0ar = [];
const smo63299 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo63299.setAttribute('id', 'smo63299');
smo63299.addModifier(new VF.Dot(), 0);
smo63331v0ar.push(smo63299);
const smo63300 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo63300.setAttribute('id', 'smo63300');
smo63331v0ar.push(smo63300);
const smo63301 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo63301.setAttribute('id', 'smo63301');
smo63331v0ar.push(smo63301);
const smo63302 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo63302.setAttribute('id', 'smo63302');
smo63331v0ar.push(smo63302);
const smo63303 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo63303.setAttribute('id', 'smo63303');
smo63331v0ar.push(smo63303);
const smo63304 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo63304.setAttribute('id', 'smo63304');
smo63331v0ar.push(smo63304);
const smo63305 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo63305.setAttribute('id', 'smo63305');
smo63331v0ar.push(smo63305);
const smo63306 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo63306.setAttribute('id', 'smo63306');
smo63331v0ar.push(smo63306);
const smo63307 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo63307.setAttribute('id', 'smo63307');
smo63331v0ar.push(smo63307);
const smo63308 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo63308.setAttribute('id', 'smo63308');
smo63331v0ar.push(smo63308);
const smo63309 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo63309.setAttribute('id', 'smo63309');
smo63331v0ar.push(smo63309);
smo63331v0.addTickables(smo63331v0ar)
fmtsmo6333137.joinVoices([smo63331v0]);
const smo63331v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63331v1ar = [];
const smo63310 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo63310.setAttribute('id', 'smo63310');
smo63310.setStyle({ fillStyle: "#115511" });
smo63331v1ar.push(smo63310);
const smo63311 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/4/n"]}'))
smo63311.setAttribute('id', 'smo63311');
smo63311.setStyle({ fillStyle: "#115511" });
const smo633110acc = new VF.Accidental('#');
smo63311.addModifier(smo633110acc, 0);
smo63331v1ar.push(smo63311);
const smo63312 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo63312.setAttribute('id', 'smo63312');
smo63312.setStyle({ fillStyle: "#115511" });
smo63331v1ar.push(smo63312);
const smo63313 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo63313.setAttribute('id', 'smo63313');
smo63313.setStyle({ fillStyle: "#115511" });
smo63331v1ar.push(smo63313);
const smo63314 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/4/n"]}'))
smo63314.setAttribute('id', 'smo63314');
smo63314.setStyle({ fillStyle: "#115511" });
smo63331v1ar.push(smo63314);
const smo63315 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo63315.setAttribute('id', 'smo63315');
smo63315.setStyle({ fillStyle: "#115511" });
smo63331v1ar.push(smo63315);
const smo63316 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/4/n"]}'))
smo63316.setAttribute('id', 'smo63316');
smo63316.setStyle({ fillStyle: "#115511" });
smo63331v1ar.push(smo63316);
const smo63317 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo63317.setAttribute('id', 'smo63317');
smo63317.setStyle({ fillStyle: "#115511" });
smo63331v1ar.push(smo63317);
smo63331v1.addTickables(smo63331v1ar)
fmtsmo6333137.joinVoices([smo63331v1]);
const fmtsmo6839937 = new VF.Formatter();
//
// voices and notes for stave 1 37
const smo68399v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68399v0ar = [];
const smo68385 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo68385.setAttribute('id', 'smo68385');
smo68399v0ar.push(smo68385);
smo68399v0.addTickables(smo68399v0ar)
fmtsmo6839937.joinVoices([smo68399v0]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo71911 = smo63299.getStemDirection();
smo63299.setStemDirection(dirsmo71911);
smo63300.setStemDirection(dirsmo71911);
smo63301.setStemDirection(dirsmo71911);
const smo71911 = new VF.Beam([smo63299,smo63300,smo63301]);
const dirsmo71912 = smo63302.getStemDirection();
smo63302.setStemDirection(dirsmo71912);
smo63303.setStemDirection(dirsmo71912);
const smo71912 = new VF.Beam([smo63302,smo63303]);
const dirsmo71913 = smo63304.getStemDirection();
smo63304.setStemDirection(dirsmo71913);
smo63305.setStemDirection(dirsmo71913);
const smo71913 = new VF.Beam([smo63304,smo63305]);
const dirsmo71914 = smo63306.getStemDirection();
smo63306.setStemDirection(dirsmo71914);
smo63307.setStemDirection(dirsmo71914);
smo63308.setStemDirection(dirsmo71914);
smo63309.setStemDirection(dirsmo71914);
const smo71914 = new VF.Beam([smo63306,smo63307,smo63308,smo63309]);
const dirsmo71915 = smo63310.getStemDirection();
smo63310.setStemDirection(dirsmo71915);
smo63311.setStemDirection(dirsmo71915);
const smo71915 = new VF.Beam([smo63310,smo63311]);
const dirsmo71916 = smo63313.getStemDirection();
smo63313.setStemDirection(dirsmo71916);
smo63314.setStemDirection(dirsmo71916);
smo63315.setStemDirection(dirsmo71916);
const smo71916 = new VF.Beam([smo63313,smo63314,smo63315]);
const dirsmo71917 = smo63316.getStemDirection();
smo63316.setStemDirection(dirsmo71917);
smo63317.setStemDirection(dirsmo71917);
const smo71917 = new VF.Beam([smo63316,smo63317]);
 
// formatting measures in staff group smo60952
fmtsmo6333137.format([smo63331v0,smo63331v1,smo68399v0], 410);
const stavesmo63331 = new VF.Stave(1382, 1422, 424);
stavesmo63331.setAttribute('id', 'stavesmo63331');
stavesmo63331.setBegBarType(VF.Barline.type.NONE);
stavesmo63331.setContext(context);
stavesmo63331.draw();
smo63331v0.draw(context, stavesmo63331);
smo63331v1.draw(context, stavesmo63331);
smo71911.setContext(context);
smo71911.draw();
smo71912.setContext(context);
smo71912.draw();
smo71913.setContext(context);
smo71913.draw();
smo71914.setContext(context);
smo71914.draw();
smo71915.setContext(context);
smo71915.draw();
smo71916.setContext(context);
smo71916.draw();
smo71917.setContext(context);
smo71917.draw();
const stavesmo68399 = new VF.Stave(1382, 1508, 424);
stavesmo68399.setAttribute('id', 'stavesmo68399');
stavesmo68399.setBegBarType(VF.Barline.type.NONE);
stavesmo68399.setContext(context);
stavesmo68399.draw();
smo68399v0.draw(context, stavesmo68399);
const rightsmo60952stavesmo633311 = new VF.StaveConnector(stavesmo63331, stavesmo68399).setType(0);
rightsmo60952stavesmo633311.setContext(context).draw();
const fmtsmo6336738 = new VF.Formatter();
//
// voices and notes for stave 0 38
const smo63367v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63367v0ar = [];
const smo63332 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo63332.setAttribute('id', 'smo63332');
smo63367v0ar.push(smo63332);
const smo63333 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo63333.setAttribute('id', 'smo63333');
smo63367v0ar.push(smo63333);
const smo63334 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo63334.setAttribute('id', 'smo63334');
smo63367v0ar.push(smo63334);
const smo63335 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo63335.setAttribute('id', 'smo63335');
smo63367v0ar.push(smo63335);
const smo63336 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo63336.setAttribute('id', 'smo63336');
smo63367v0ar.push(smo63336);
const smo63337 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo63337.setAttribute('id', 'smo63337');
smo63367v0ar.push(smo63337);
const smo63338 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo63338.setAttribute('id', 'smo63338');
smo63367v0ar.push(smo63338);
const smo63339 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo63339.setAttribute('id', 'smo63339');
smo63367v0ar.push(smo63339);
const smo63340 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo63340.setAttribute('id', 'smo63340');
smo63367v0ar.push(smo63340);
const smo63341 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo63341.setAttribute('id', 'smo63341');
smo63367v0ar.push(smo63341);
const smo63342 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo63342.setAttribute('id', 'smo63342');
smo63367v0ar.push(smo63342);
const smo63343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/5/n"]}'))
smo63343.setAttribute('id', 'smo63343');
const smo633430acc = new VF.Accidental('#');
smo63343.addModifier(smo633430acc, 0);
smo63367v0ar.push(smo63343);
const smo63344 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo63344.setAttribute('id', 'smo63344');
smo63367v0ar.push(smo63344);
const smo63345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo63345.setAttribute('id', 'smo63345');
smo63367v0ar.push(smo63345);
smo63367v0.addTickables(smo63367v0ar)
fmtsmo6336738.joinVoices([smo63367v0]);
const smo63367v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63367v1ar = [];
const smo63346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo63346.setAttribute('id', 'smo63346');
smo63346.setStyle({ fillStyle: "#115511" });
smo63367v1ar.push(smo63346);
const smo63347 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo63347.setAttribute('id', 'smo63347');
smo63347.setStyle({ fillStyle: "#115511" });
smo63367v1ar.push(smo63347);
const smo63348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo63348.setAttribute('id', 'smo63348');
smo63348.setStyle({ fillStyle: "#115511" });
smo63367v1ar.push(smo63348);
const smo63349 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo63349.setAttribute('id', 'smo63349');
smo63349.setStyle({ fillStyle: "#115511" });
smo63367v1ar.push(smo63349);
const smo63350 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo63350.setAttribute('id', 'smo63350');
smo63350.setStyle({ fillStyle: "#115511" });
smo63367v1ar.push(smo63350);
const smo63351 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/3/r"]}'))
smo63351.setAttribute('id', 'smo63351');
smo63351.setStyle({ fillStyle: "#115511" });
smo63367v1ar.push(smo63351);
const smo63352 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/3/r"]}'))
smo63352.setAttribute('id', 'smo63352');
smo63352.setStyle({ fillStyle: "#115511" });
smo63367v1ar.push(smo63352);
const smo63353 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo63353.setAttribute('id', 'smo63353');
smo63353.setStyle({ fillStyle: "#115511" });
smo63367v1ar.push(smo63353);
smo63367v1.addTickables(smo63367v1ar)
fmtsmo6336738.joinVoices([smo63367v1]);
const fmtsmo6842238 = new VF.Formatter();
//
// voices and notes for stave 1 38
const smo68422v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68422v0ar = [];
const smo68400 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo68400.setAttribute('id', 'smo68400');
smo68422v0ar.push(smo68400);
const smo68401 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo68401.setAttribute('id', 'smo68401');
smo68422v0ar.push(smo68401);
const smo68402 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo68402.setAttribute('id', 'smo68402');
smo68422v0ar.push(smo68402);
const smo68403 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/3/n"]}'))
smo68403.setAttribute('id', 'smo68403');
smo68422v0ar.push(smo68403);
const smo68404 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo68404.setAttribute('id', 'smo68404');
smo68404.addModifier(new VF.Dot(), 0);
smo68422v0ar.push(smo68404);
const smo68405 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo68405.setAttribute('id', 'smo68405');
smo68422v0ar.push(smo68405);
const smo68406 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo68406.setAttribute('id', 'smo68406');
smo68422v0ar.push(smo68406);
const smo68407 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/3/n"]}'))
smo68407.setAttribute('id', 'smo68407');
smo68422v0ar.push(smo68407);
const smo68408 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo68408.setAttribute('id', 'smo68408');
smo68422v0ar.push(smo68408);
smo68422v0.addTickables(smo68422v0ar)
fmtsmo6842238.joinVoices([smo68422v0]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo71933 = smo63332.getStemDirection();
smo63332.setStemDirection(dirsmo71933);
smo63333.setStemDirection(dirsmo71933);
smo63334.setStemDirection(dirsmo71933);
smo63335.setStemDirection(dirsmo71933);
const smo71933 = new VF.Beam([smo63332,smo63333,smo63334,smo63335]);
const dirsmo71934 = smo63336.getStemDirection();
smo63336.setStemDirection(dirsmo71934);
smo63337.setStemDirection(dirsmo71934);
smo63338.setStemDirection(dirsmo71934);
smo63339.setStemDirection(dirsmo71934);
const smo71934 = new VF.Beam([smo63336,smo63337,smo63338,smo63339]);
const dirsmo71935 = smo63340.getStemDirection();
smo63340.setStemDirection(dirsmo71935);
smo63341.setStemDirection(dirsmo71935);
smo63342.setStemDirection(dirsmo71935);
smo63343.setStemDirection(dirsmo71935);
const smo71935 = new VF.Beam([smo63340,smo63341,smo63342,smo63343]);
const dirsmo71936 = smo63344.getStemDirection();
smo63344.setStemDirection(dirsmo71936);
smo63345.setStemDirection(dirsmo71936);
const smo71936 = new VF.Beam([smo63344,smo63345]);
const dirsmo71937 = smo63346.getStemDirection();
smo63346.setStemDirection(dirsmo71937);
smo63347.setStemDirection(dirsmo71937);
smo63348.setStemDirection(dirsmo71937);
smo63349.setStemDirection(dirsmo71937);
const smo71937 = new VF.Beam([smo63346,smo63347,smo63348,smo63349]);
const dirsmo71940 = smo68401.getStemDirection();
smo68401.setStemDirection(dirsmo71940);
smo68402.setStemDirection(dirsmo71940);
smo68403.setStemDirection(dirsmo71940);
const smo71940 = new VF.Beam([smo68401,smo68402,smo68403]);
const dirsmo71941 = smo68404.getStemDirection();
smo68404.setStemDirection(dirsmo71941);
smo68405.setStemDirection(dirsmo71941);
smo68406.setStemDirection(dirsmo71941);
smo68407.setStemDirection(dirsmo71941);
smo68408.setStemDirection(dirsmo71941);
const smo71941 = new VF.Beam([smo68404,smo68405,smo68406,smo68407,smo68408]);
 
// formatting measures in staff group smo60952
fmtsmo6336738.format([smo63367v0,smo63367v1,smo68422v0], 372);
const stavesmo63367 = new VF.Stave(90, 1712, 430);
stavesmo63367.setAttribute('id', 'stavesmo63367');
stavesmo63367.setBegBarType(1);
stavesmo63367.addClef('treble');
stavesmo63367.setContext(context);
stavesmo63367.draw();
smo63367v0.draw(context, stavesmo63367);
smo63367v1.draw(context, stavesmo63367);
smo71933.setContext(context);
smo71933.draw();
smo71934.setContext(context);
smo71934.draw();
smo71935.setContext(context);
smo71935.draw();
smo71936.setContext(context);
smo71936.draw();
smo71937.setContext(context);
smo71937.draw();
const stavesmo68422 = new VF.Stave(90, 1861, 430);
stavesmo68422.setAttribute('id', 'stavesmo68422');
stavesmo68422.setBegBarType(1);
stavesmo68422.addClef('bass');
stavesmo68422.setContext(context);
stavesmo68422.draw();
smo68422v0.draw(context, stavesmo68422);
smo71940.setContext(context);
smo71940.draw();
smo71941.setContext(context);
smo71941.draw();
const leftsmo60952stavesmo633671 = new VF.StaveConnector(stavesmo63367, stavesmo68422).setType(3);
leftsmo60952stavesmo633671.setContext(context).draw();
const fmtsmo6340139 = new VF.Formatter();
//
// voices and notes for stave 0 39
const smo63401v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63401v0ar = [];
const smo63368 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo63368.setAttribute('id', 'smo63368');
smo63401v0ar.push(smo63368);
const smo63369 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo63369.setAttribute('id', 'smo63369');
smo63401v0ar.push(smo63369);
const smo63370 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo63370.setAttribute('id', 'smo63370');
smo63401v0ar.push(smo63370);
const smo63371 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo63371.setAttribute('id', 'smo63371');
smo63401v0ar.push(smo63371);
const smo63372 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo63372.setAttribute('id', 'smo63372');
smo63401v0ar.push(smo63372);
const smo63373 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo63373.setAttribute('id', 'smo63373');
smo63401v0ar.push(smo63373);
const smo63374 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo63374.setAttribute('id', 'smo63374');
smo63374.addModifier(new VF.Dot(), 0);
smo63401v0ar.push(smo63374);
const smo63375 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo63375.setAttribute('id', 'smo63375');
smo63401v0ar.push(smo63375);
const smo63376 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo63376.setAttribute('id', 'smo63376');
smo63401v0ar.push(smo63376);
const smo63377 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo63377.setAttribute('id', 'smo63377');
smo63401v0ar.push(smo63377);
const smo63378 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo63378.setAttribute('id', 'smo63378');
smo63401v0ar.push(smo63378);
const smo63379 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo63379.setAttribute('id', 'smo63379');
smo63401v0ar.push(smo63379);
smo63401v0.addTickables(smo63401v0ar)
fmtsmo6340139.joinVoices([smo63401v0]);
const smo63401v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63401v1ar = [];
const smo63380 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo63380.setAttribute('id', 'smo63380');
smo63380.setStyle({ fillStyle: "#115511" });
smo63401v1ar.push(smo63380);
const smo63381 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo63381.setAttribute('id', 'smo63381');
smo63381.setStyle({ fillStyle: "#115511" });
smo63401v1ar.push(smo63381);
const smo63382 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo63382.setAttribute('id', 'smo63382');
smo63382.setStyle({ fillStyle: "#115511" });
smo63401v1ar.push(smo63382);
const smo63383 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo63383.setAttribute('id', 'smo63383');
smo63383.setStyle({ fillStyle: "#115511" });
smo63401v1ar.push(smo63383);
const smo63384 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo63384.setAttribute('id', 'smo63384');
smo63384.setStyle({ fillStyle: "#115511" });
smo63401v1ar.push(smo63384);
const smo63385 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo63385.setAttribute('id', 'smo63385');
smo63385.setStyle({ fillStyle: "#115511" });
smo63401v1ar.push(smo63385);
const smo63386 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo63386.setAttribute('id', 'smo63386');
smo63386.setStyle({ fillStyle: "#115511" });
smo63401v1ar.push(smo63386);
const smo63387 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo63387.setAttribute('id', 'smo63387');
smo63387.setStyle({ fillStyle: "#115511" });
smo63401v1ar.push(smo63387);
smo63401v1.addTickables(smo63401v1ar)
fmtsmo6340139.joinVoices([smo63401v1]);
const fmtsmo6845139 = new VF.Formatter();
//
// voices and notes for stave 1 39
const smo68451v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68451v0ar = [];
const smo68423 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo68423.setAttribute('id', 'smo68423');
smo68451v0ar.push(smo68423);
const smo68424 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo68424.setAttribute('id', 'smo68424');
smo68451v0ar.push(smo68424);
const smo68425 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo68425.setAttribute('id', 'smo68425');
smo68451v0ar.push(smo68425);
const smo68426 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo68426.setAttribute('id', 'smo68426');
smo68451v0ar.push(smo68426);
const smo68427 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo68427.setAttribute('id', 'smo68427');
smo68451v0ar.push(smo68427);
const smo68428 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo68428.setAttribute('id', 'smo68428');
smo68451v0ar.push(smo68428);
const smo68429 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo68429.setAttribute('id', 'smo68429');
smo68451v0ar.push(smo68429);
const smo68430 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo68430.setAttribute('id', 'smo68430');
smo68451v0ar.push(smo68430);
const smo68431 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo68431.setAttribute('id', 'smo68431');
smo68451v0ar.push(smo68431);
const smo68432 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/3/n"]}'))
smo68432.setAttribute('id', 'smo68432');
const smo684320acc = new VF.Accidental('b');
smo68432.addModifier(smo684320acc, 0);
smo68451v0ar.push(smo68432);
smo68451v0.addTickables(smo68451v0ar)
fmtsmo6845139.joinVoices([smo68451v0]);
const smo68451v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68451v1ar = [];
const smo68433 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo68433.setAttribute('id', 'smo68433');
smo68433.setStyle({ fillStyle: "#115511" });
smo68451v1ar.push(smo68433);
const smo68434 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo68434.setAttribute('id', 'smo68434');
smo68434.setStyle({ fillStyle: "#115511" });
smo68451v1ar.push(smo68434);
const smo68435 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo68435.setAttribute('id', 'smo68435');
smo68435.setStyle({ fillStyle: "#115511" });
smo68451v1ar.push(smo68435);
const smo68436 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo68436.setAttribute('id', 'smo68436');
smo68436.setStyle({ fillStyle: "#115511" });
smo68451v1ar.push(smo68436);
const smo68437 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo68437.setAttribute('id', 'smo68437');
smo68437.setStyle({ fillStyle: "#115511" });
smo68451v1ar.push(smo68437);
smo68451v1.addTickables(smo68451v1ar)
fmtsmo6845139.joinVoices([smo68451v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo71944 = smo63368.getStemDirection();
smo63368.setStemDirection(dirsmo71944);
smo63369.setStemDirection(dirsmo71944);
const smo71944 = new VF.Beam([smo63368,smo63369]);
const dirsmo71945 = smo63370.getStemDirection();
smo63370.setStemDirection(dirsmo71945);
smo63371.setStemDirection(dirsmo71945);
smo63372.setStemDirection(dirsmo71945);
smo63373.setStemDirection(dirsmo71945);
const smo71945 = new VF.Beam([smo63370,smo63371,smo63372,smo63373]);
const dirsmo71946 = smo63374.getStemDirection();
smo63374.setStemDirection(dirsmo71946);
smo63375.setStemDirection(dirsmo71946);
const smo71946 = new VF.Beam([smo63374,smo63375]);
const dirsmo71947 = smo63376.getStemDirection();
smo63376.setStemDirection(dirsmo71947);
smo63377.setStemDirection(dirsmo71947);
smo63378.setStemDirection(dirsmo71947);
smo63379.setStemDirection(dirsmo71947);
const smo71947 = new VF.Beam([smo63376,smo63377,smo63378,smo63379]);
const dirsmo71948 = smo63380.getStemDirection();
smo63380.setStemDirection(dirsmo71948);
smo63381.setStemDirection(dirsmo71948);
smo63382.setStemDirection(dirsmo71948);
const smo71948 = new VF.Beam([smo63380,smo63381,smo63382]);
const dirsmo71949 = smo63384.getStemDirection();
smo63384.setStemDirection(dirsmo71949);
smo63385.setStemDirection(dirsmo71949);
smo63386.setStemDirection(dirsmo71949);
const smo71949 = new VF.Beam([smo63384,smo63385,smo63386]);
const dirsmo71952 = smo68423.getStemDirection();
smo68423.setStemDirection(dirsmo71952);
smo68424.setStemDirection(dirsmo71952);
const smo71952 = new VF.Beam([smo68423,smo68424]);
const dirsmo71953 = smo68425.getStemDirection();
smo68425.setStemDirection(dirsmo71953);
smo68426.setStemDirection(dirsmo71953);
smo68427.setStemDirection(dirsmo71953);
smo68428.setStemDirection(dirsmo71953);
const smo71953 = new VF.Beam([smo68425,smo68426,smo68427,smo68428]);
const dirsmo71954 = smo68429.getStemDirection();
smo68429.setStemDirection(dirsmo71954);
smo68430.setStemDirection(dirsmo71954);
const smo71954 = new VF.Beam([smo68429,smo68430]);
const dirsmo71955 = smo68431.getStemDirection();
smo68431.setStemDirection(dirsmo71955);
smo68432.setStemDirection(dirsmo71955);
const smo71955 = new VF.Beam([smo68431,smo68432]);
const dirsmo71956 = smo68435.getStemDirection();
smo68435.setStemDirection(dirsmo71956);
smo68436.setStemDirection(dirsmo71956);
smo68437.setStemDirection(dirsmo71956);
const smo71956 = new VF.Beam([smo68435,smo68436,smo68437]);
 
// formatting measures in staff group smo60952
fmtsmo6340139.format([smo63401v0,smo63401v1,smo68451v0,smo68451v1], 390);
const stavesmo63401 = new VF.Stave(520, 1712, 404);
stavesmo63401.setAttribute('id', 'stavesmo63401');
stavesmo63401.setBegBarType(VF.Barline.type.NONE);
stavesmo63401.setContext(context);
stavesmo63401.draw();
smo63401v0.draw(context, stavesmo63401);
smo63401v1.draw(context, stavesmo63401);
smo71944.setContext(context);
smo71944.draw();
smo71945.setContext(context);
smo71945.draw();
smo71946.setContext(context);
smo71946.draw();
smo71947.setContext(context);
smo71947.draw();
smo71948.setContext(context);
smo71948.draw();
smo71949.setContext(context);
smo71949.draw();
const stavesmo68451 = new VF.Stave(520, 1861, 404);
stavesmo68451.setAttribute('id', 'stavesmo68451');
stavesmo68451.setBegBarType(VF.Barline.type.NONE);
stavesmo68451.setContext(context);
stavesmo68451.draw();
smo68451v0.draw(context, stavesmo68451);
smo68451v1.draw(context, stavesmo68451);
smo71952.setContext(context);
smo71952.draw();
smo71953.setContext(context);
smo71953.draw();
smo71954.setContext(context);
smo71954.draw();
smo71955.setContext(context);
smo71955.draw();
smo71956.setContext(context);
smo71956.draw();
const fmtsmo6343040 = new VF.Formatter();
//
// voices and notes for stave 0 40
const smo63430v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63430v0ar = [];
const smo63402 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo63402.setAttribute('id', 'smo63402');
smo63430v0ar.push(smo63402);
const smo63403 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo63403.setAttribute('id', 'smo63403');
smo63430v0ar.push(smo63403);
const smo63404 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo63404.setAttribute('id', 'smo63404');
smo63430v0ar.push(smo63404);
const smo63405 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo63405.setAttribute('id', 'smo63405');
smo63430v0ar.push(smo63405);
const smo63406 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo63406.setAttribute('id', 'smo63406');
smo63430v0ar.push(smo63406);
const smo63407 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo63407.setAttribute('id', 'smo63407');
smo63430v0ar.push(smo63407);
smo63430v0.addTickables(smo63430v0ar)
fmtsmo6343040.joinVoices([smo63430v0]);
const smo63430v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63430v1ar = [];
const smo63408 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo63408.setAttribute('id', 'smo63408');
smo63408.setStyle({ fillStyle: "#115511" });
smo63430v1ar.push(smo63408);
const smo63409 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo63409.setAttribute('id', 'smo63409');
smo63409.setStyle({ fillStyle: "#115511" });
smo63430v1ar.push(smo63409);
const smo63410 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63410.setAttribute('id', 'smo63410');
smo63410.setStyle({ fillStyle: "#115511" });
smo63430v1ar.push(smo63410);
const smo63411 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo63411.setAttribute('id', 'smo63411');
smo63411.setStyle({ fillStyle: "#115511" });
smo63430v1ar.push(smo63411);
const smo63412 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo63412.setAttribute('id', 'smo63412');
smo63412.setStyle({ fillStyle: "#115511" });
smo63430v1ar.push(smo63412);
const smo63413 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo63413.setAttribute('id', 'smo63413');
smo63413.setStyle({ fillStyle: "#115511" });
smo63430v1ar.push(smo63413);
const smo63414 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo63414.setAttribute('id', 'smo63414');
smo63414.setStyle({ fillStyle: "#115511" });
smo63430v1ar.push(smo63414);
const smo63415 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo63415.setAttribute('id', 'smo63415');
smo63415.setStyle({ fillStyle: "#115511" });
smo63430v1ar.push(smo63415);
const smo63416 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo63416.setAttribute('id', 'smo63416');
smo63416.setStyle({ fillStyle: "#115511" });
smo63430v1ar.push(smo63416);
smo63430v1.addTickables(smo63430v1ar)
fmtsmo6343040.joinVoices([smo63430v1]);
const fmtsmo6848540 = new VF.Formatter();
//
// voices and notes for stave 1 40
const smo68485v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68485v0ar = [];
const smo68452 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo68452.setAttribute('id', 'smo68452');
smo68485v0ar.push(smo68452);
const smo68453 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo68453.setAttribute('id', 'smo68453');
smo68485v0ar.push(smo68453);
const smo68454 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo68454.setAttribute('id', 'smo68454');
smo68485v0ar.push(smo68454);
const smo68455 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo68455.setAttribute('id', 'smo68455');
smo68485v0ar.push(smo68455);
const smo68456 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo68456.setAttribute('id', 'smo68456');
smo68485v0ar.push(smo68456);
const smo68457 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo68457.setAttribute('id', 'smo68457');
smo68485v0ar.push(smo68457);
const smo68458 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo68458.setAttribute('id', 'smo68458');
smo68485v0ar.push(smo68458);
const smo68459 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo68459.setAttribute('id', 'smo68459');
smo68485v0ar.push(smo68459);
const smo68460 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo68460.setAttribute('id', 'smo68460');
smo68485v0ar.push(smo68460);
smo68485v0.addTickables(smo68485v0ar)
fmtsmo6848540.joinVoices([smo68485v0]);
const smo68485v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68485v1ar = [];
const smo68461 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo68461.setAttribute('id', 'smo68461');
smo68461.setStyle({ fillStyle: "#115511" });
smo68461.addModifier(new VF.Dot(), 0);
smo68485v1ar.push(smo68461);
const smo68462 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo68462.setAttribute('id', 'smo68462');
smo68462.setStyle({ fillStyle: "#115511" });
smo68485v1ar.push(smo68462);
const smo68463 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo68463.setAttribute('id', 'smo68463');
smo68463.setStyle({ fillStyle: "#115511" });
smo68485v1ar.push(smo68463);
const smo68464 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo68464.setAttribute('id', 'smo68464');
smo68464.setStyle({ fillStyle: "#115511" });
smo68485v1ar.push(smo68464);
const smo68465 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo68465.setAttribute('id', 'smo68465');
smo68465.setStyle({ fillStyle: "#115511" });
smo68485v1ar.push(smo68465);
const smo68466 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo68466.setAttribute('id', 'smo68466');
smo68466.setStyle({ fillStyle: "#115511" });
smo68485v1ar.push(smo68466);
const smo68467 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo68467.setAttribute('id', 'smo68467');
smo68467.setStyle({ fillStyle: "#115511" });
smo68485v1ar.push(smo68467);
const smo68468 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo68468.setAttribute('id', 'smo68468');
smo68468.setStyle({ fillStyle: "#115511" });
smo68485v1ar.push(smo68468);
const smo68469 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo68469.setAttribute('id', 'smo68469');
smo68469.setStyle({ fillStyle: "#115511" });
smo68485v1ar.push(smo68469);
const smo68470 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo68470.setAttribute('id', 'smo68470');
smo68470.setStyle({ fillStyle: "#115511" });
smo68485v1ar.push(smo68470);
const smo68471 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo68471.setAttribute('id', 'smo68471');
smo68471.setStyle({ fillStyle: "#115511" });
smo68485v1ar.push(smo68471);
smo68485v1.addTickables(smo68485v1ar)
fmtsmo6848540.joinVoices([smo68485v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo71959 = smo63402.getStemDirection();
smo63402.setStemDirection(dirsmo71959);
smo63403.setStemDirection(dirsmo71959);
smo63404.setStemDirection(dirsmo71959);
smo63405.setStemDirection(dirsmo71959);
const smo71959 = new VF.Beam([smo63402,smo63403,smo63404,smo63405]);
const dirsmo71960 = smo63408.getStemDirection();
smo63408.setStemDirection(dirsmo71960);
smo63409.setStemDirection(dirsmo71960);
const smo71960 = new VF.Beam([smo63408,smo63409]);
const dirsmo71961 = smo63411.getStemDirection();
smo63411.setStemDirection(dirsmo71961);
smo63412.setStemDirection(dirsmo71961);
smo63413.setStemDirection(dirsmo71961);
const smo71961 = new VF.Beam([smo63411,smo63412,smo63413]);
const dirsmo71962 = smo63414.getStemDirection();
smo63414.setStemDirection(dirsmo71962);
smo63415.setStemDirection(dirsmo71962);
const smo71962 = new VF.Beam([smo63414,smo63415]);
const dirsmo71965 = smo68452.getStemDirection();
smo68452.setStemDirection(dirsmo71965);
smo68453.setStemDirection(dirsmo71965);
smo68454.setStemDirection(dirsmo71965);
smo68455.setStemDirection(dirsmo71965);
const smo71965 = new VF.Beam([smo68452,smo68453,smo68454,smo68455]);
const dirsmo71966 = smo68457.getStemDirection();
smo68457.setStemDirection(dirsmo71966);
smo68458.setStemDirection(dirsmo71966);
smo68459.setStemDirection(dirsmo71966);
const smo71966 = new VF.Beam([smo68457,smo68458,smo68459]);
const dirsmo71967 = smo68461.getStemDirection();
smo68461.setStemDirection(dirsmo71967);
smo68462.setStemDirection(dirsmo71967);
smo68463.setStemDirection(dirsmo71967);
const smo71967 = new VF.Beam([smo68461,smo68462,smo68463]);
const dirsmo71968 = smo68464.getStemDirection();
smo68464.setStemDirection(dirsmo71968);
smo68465.setStemDirection(dirsmo71968);
const smo71968 = new VF.Beam([smo68464,smo68465]);
const dirsmo71969 = smo68466.getStemDirection();
smo68466.setStemDirection(dirsmo71969);
smo68467.setStemDirection(dirsmo71969);
const smo71969 = new VF.Beam([smo68466,smo68467]);
const dirsmo71970 = smo68468.getStemDirection();
smo68468.setStemDirection(dirsmo71970);
smo68469.setStemDirection(dirsmo71970);
smo68470.setStemDirection(dirsmo71970);
smo68471.setStemDirection(dirsmo71970);
const smo71970 = new VF.Beam([smo68468,smo68469,smo68470,smo68471]);
 
// formatting measures in staff group smo60952
fmtsmo6343040.format([smo63430v0,smo63430v1,smo68485v0,smo68485v1], 427);
const stavesmo63430 = new VF.Stave(924, 1712, 441);
stavesmo63430.setAttribute('id', 'stavesmo63430');
stavesmo63430.setBegBarType(VF.Barline.type.NONE);
stavesmo63430.setContext(context);
stavesmo63430.draw();
smo63430v0.draw(context, stavesmo63430);
smo63430v1.draw(context, stavesmo63430);
smo71959.setContext(context);
smo71959.draw();
smo71960.setContext(context);
smo71960.draw();
smo71961.setContext(context);
smo71961.draw();
smo71962.setContext(context);
smo71962.draw();
const stavesmo68485 = new VF.Stave(924, 1861, 441);
stavesmo68485.setAttribute('id', 'stavesmo68485');
stavesmo68485.setBegBarType(VF.Barline.type.NONE);
stavesmo68485.setContext(context);
stavesmo68485.draw();
smo68485v0.draw(context, stavesmo68485);
smo68485v1.draw(context, stavesmo68485);
smo71965.setContext(context);
smo71965.draw();
smo71966.setContext(context);
smo71966.draw();
smo71967.setContext(context);
smo71967.draw();
smo71968.setContext(context);
smo71968.draw();
smo71969.setContext(context);
smo71969.draw();
smo71970.setContext(context);
smo71970.draw();
const fmtsmo6345641 = new VF.Formatter();
//
// voices and notes for stave 0 41
const smo63456v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63456v0ar = [];
const smo63431 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63431.setAttribute('id', 'smo63431');
smo63456v0ar.push(smo63431);
const smo63432 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo63432.setAttribute('id', 'smo63432');
smo63456v0ar.push(smo63432);
const smo63433 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo63433.setAttribute('id', 'smo63433');
smo63456v0ar.push(smo63433);
const smo63434 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo63434.setAttribute('id', 'smo63434');
smo63456v0ar.push(smo63434);
const smo63435 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo63435.setAttribute('id', 'smo63435');
smo63435.addModifier(new VF.Dot(), 0);
smo63456v0ar.push(smo63435);
const smo63436 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo63436.setAttribute('id', 'smo63436');
smo63456v0ar.push(smo63436);
const smo63437 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo63437.setAttribute('id', 'smo63437');
smo63456v0ar.push(smo63437);
const smo63438 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo63438.setAttribute('id', 'smo63438');
smo63456v0ar.push(smo63438);
const smo63439 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo63439.setAttribute('id', 'smo63439');
smo63456v0ar.push(smo63439);
smo63456v0.addTickables(smo63456v0ar)
fmtsmo6345641.joinVoices([smo63456v0]);
const smo63456v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63456v1ar = [];
const smo63440 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo63440.setAttribute('id', 'smo63440');
smo63440.setStyle({ fillStyle: "#115511" });
smo63456v1ar.push(smo63440);
const smo63441 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63441.setAttribute('id', 'smo63441');
smo63441.setStyle({ fillStyle: '#aaaaaa7f' });
smo63456v1ar.push(smo63441);
const smo63442 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63442.setAttribute('id', 'smo63442');
smo63442.setStyle({ fillStyle: '#aaaaaa7f' });
smo63456v1ar.push(smo63442);
smo63456v1.addTickables(smo63456v1ar)
fmtsmo6345641.joinVoices([smo63456v1]);
const fmtsmo6851941 = new VF.Formatter();
//
// voices and notes for stave 1 41
const smo68519v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68519v0ar = [];
const smo68486 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo68486.setAttribute('id', 'smo68486');
smo68519v0ar.push(smo68486);
const smo68487 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo68487.setAttribute('id', 'smo68487');
smo68519v0ar.push(smo68487);
const smo68488 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo68488.setAttribute('id', 'smo68488');
smo68519v0ar.push(smo68488);
const smo68489 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo68489.setAttribute('id', 'smo68489');
smo68519v0ar.push(smo68489);
const smo68490 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo68490.setAttribute('id', 'smo68490');
smo68519v0ar.push(smo68490);
const smo68491 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo68491.setAttribute('id', 'smo68491');
smo68491.addModifier(new VF.Dot(), 0);
smo68519v0ar.push(smo68491);
const smo68492 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo68492.setAttribute('id', 'smo68492');
smo68519v0ar.push(smo68492);
const smo68493 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo68493.setAttribute('id', 'smo68493');
smo68519v0ar.push(smo68493);
smo68519v0.addTickables(smo68519v0ar)
fmtsmo6851941.joinVoices([smo68519v0]);
const smo68519v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68519v1ar = [];
const smo68494 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo68494.setAttribute('id', 'smo68494');
smo68494.setStyle({ fillStyle: "#115511" });
smo68519v1ar.push(smo68494);
const smo68495 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo68495.setAttribute('id', 'smo68495');
smo68495.setStyle({ fillStyle: "#115511" });
smo68519v1ar.push(smo68495);
const smo68496 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo68496.setAttribute('id', 'smo68496');
smo68496.setStyle({ fillStyle: "#115511" });
smo68519v1ar.push(smo68496);
const smo68497 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo68497.setAttribute('id', 'smo68497');
smo68497.setStyle({ fillStyle: "#115511" });
smo68519v1ar.push(smo68497);
const smo68498 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo68498.setAttribute('id', 'smo68498');
smo68498.setStyle({ fillStyle: "#115511" });
smo68519v1ar.push(smo68498);
const smo68499 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo68499.setAttribute('id', 'smo68499');
smo68499.setStyle({ fillStyle: "#115511" });
smo68519v1ar.push(smo68499);
const smo68500 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo68500.setAttribute('id', 'smo68500');
smo68500.setStyle({ fillStyle: "#115511" });
smo68519v1ar.push(smo68500);
const smo68501 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/2/n"]}'))
smo68501.setAttribute('id', 'smo68501');
smo68501.setStyle({ fillStyle: "#115511" });
smo68519v1ar.push(smo68501);
const smo68502 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/2/n"]}'))
smo68502.setAttribute('id', 'smo68502');
smo68502.setStyle({ fillStyle: "#115511" });
smo68519v1ar.push(smo68502);
const smo68503 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo68503.setAttribute('id', 'smo68503');
smo68503.setStyle({ fillStyle: "#115511" });
smo68519v1ar.push(smo68503);
const smo68504 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo68504.setAttribute('id', 'smo68504');
smo68504.setStyle({ fillStyle: "#115511" });
smo68519v1ar.push(smo68504);
const smo68505 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo68505.setAttribute('id', 'smo68505');
smo68505.setStyle({ fillStyle: "#115511" });
const smo685050acc = new VF.Accidental('#');
smo68505.addModifier(smo685050acc, 0);
smo68519v1ar.push(smo68505);
smo68519v1.addTickables(smo68519v1ar)
fmtsmo6851941.joinVoices([smo68519v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo71973 = smo63432.getStemDirection();
smo63432.setStemDirection(dirsmo71973);
smo63433.setStemDirection(dirsmo71973);
smo63434.setStemDirection(dirsmo71973);
const smo71973 = new VF.Beam([smo63432,smo63433,smo63434]);
const dirsmo71974 = smo63435.getStemDirection();
smo63435.setStemDirection(dirsmo71974);
smo63436.setStemDirection(dirsmo71974);
smo63437.setStemDirection(dirsmo71974);
const smo71974 = new VF.Beam([smo63435,smo63436,smo63437]);
const dirsmo71975 = smo63438.getStemDirection();
smo63438.setStemDirection(dirsmo71975);
smo63439.setStemDirection(dirsmo71975);
const smo71975 = new VF.Beam([smo63438,smo63439]);
const dirsmo71978 = smo68488.getStemDirection();
smo68488.setStemDirection(dirsmo71978);
smo68489.setStemDirection(dirsmo71978);
const smo71978 = new VF.Beam([smo68488,smo68489]);
const dirsmo71979 = smo68491.getStemDirection();
smo68491.setStemDirection(dirsmo71979);
smo68492.setStemDirection(dirsmo71979);
smo68493.setStemDirection(dirsmo71979);
const smo71979 = new VF.Beam([smo68491,smo68492,smo68493]);
const dirsmo71980 = smo68494.getStemDirection();
smo68494.setStemDirection(dirsmo71980);
smo68495.setStemDirection(dirsmo71980);
smo68496.setStemDirection(dirsmo71980);
smo68497.setStemDirection(dirsmo71980);
const smo71980 = new VF.Beam([smo68494,smo68495,smo68496,smo68497]);
const dirsmo71981 = smo68498.getStemDirection();
smo68498.setStemDirection(dirsmo71981);
smo68499.setStemDirection(dirsmo71981);
smo68500.setStemDirection(dirsmo71981);
smo68501.setStemDirection(dirsmo71981);
const smo71981 = new VF.Beam([smo68498,smo68499,smo68500,smo68501]);
const dirsmo71982 = smo68502.getStemDirection();
smo68502.setStemDirection(dirsmo71982);
smo68503.setStemDirection(dirsmo71982);
smo68504.setStemDirection(dirsmo71982);
smo68505.setStemDirection(dirsmo71982);
const smo71982 = new VF.Beam([smo68502,smo68503,smo68504,smo68505]);
 
// formatting measures in staff group smo60952
fmtsmo6345641.format([smo63456v0,smo63456v1,smo68519v0,smo68519v1], 430);
const stavesmo63456 = new VF.Stave(1365, 1712, 444);
stavesmo63456.setAttribute('id', 'stavesmo63456');
stavesmo63456.setBegBarType(VF.Barline.type.NONE);
stavesmo63456.setContext(context);
stavesmo63456.draw();
smo63456v0.draw(context, stavesmo63456);
smo63456v1.draw(context, stavesmo63456);
smo71973.setContext(context);
smo71973.draw();
smo71974.setContext(context);
smo71974.draw();
smo71975.setContext(context);
smo71975.draw();
const stavesmo68519 = new VF.Stave(1365, 1861, 444);
stavesmo68519.setAttribute('id', 'stavesmo68519');
stavesmo68519.setBegBarType(VF.Barline.type.NONE);
stavesmo68519.setContext(context);
stavesmo68519.draw();
smo68519v0.draw(context, stavesmo68519);
smo68519v1.draw(context, stavesmo68519);
smo71978.setContext(context);
smo71978.draw();
smo71979.setContext(context);
smo71979.draw();
smo71980.setContext(context);
smo71980.draw();
smo71981.setContext(context);
smo71981.draw();
smo71982.setContext(context);
smo71982.draw();
const rightsmo60952stavesmo634561 = new VF.StaveConnector(stavesmo63456, stavesmo68519).setType(0);
rightsmo60952stavesmo634561.setContext(context).draw();
const fmtsmo6348242 = new VF.Formatter();
//
// voices and notes for stave 0 42
const smo63482v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63482v0ar = [];
const smo63457 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo63457.setAttribute('id', 'smo63457');
smo63482v0ar.push(smo63457);
const smo63458 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/5/n"]}'))
smo63458.setAttribute('id', 'smo63458');
smo63482v0ar.push(smo63458);
const smo63459 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/5/n"]}'))
smo63459.setAttribute('id', 'smo63459');
smo63482v0ar.push(smo63459);
const smo63460 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/5/n"]}'))
smo63460.setAttribute('id', 'smo63460');
smo63482v0ar.push(smo63460);
const smo63461 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/5/n"]}'))
smo63461.setAttribute('id', 'smo63461');
smo63482v0ar.push(smo63461);
const smo63462 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/5/n"]}'))
smo63462.setAttribute('id', 'smo63462');
smo63482v0ar.push(smo63462);
const smo63463 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo63463.setAttribute('id', 'smo63463');
smo63482v0ar.push(smo63463);
const smo63464 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/5/n"]}'))
smo63464.setAttribute('id', 'smo63464');
smo63482v0ar.push(smo63464);
const smo63465 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/5/n"]}'))
smo63465.setAttribute('id', 'smo63465');
smo63482v0ar.push(smo63465);
const smo63466 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/5/n"]}'))
smo63466.setAttribute('id', 'smo63466');
smo63482v0ar.push(smo63466);
const smo63467 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/5/n"]}'))
smo63467.setAttribute('id', 'smo63467');
smo63482v0ar.push(smo63467);
const smo63468 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/5/n"]}'))
smo63468.setAttribute('id', 'smo63468');
smo63482v0ar.push(smo63468);
smo63482v0.addTickables(smo63482v0ar)
fmtsmo6348242.joinVoices([smo63482v0]);
const fmtsmo6855142 = new VF.Formatter();
//
// voices and notes for stave 1 42
const smo68551v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68551v0ar = [];
const smo68520 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo68520.setAttribute('id', 'smo68520');
smo68551v0ar.push(smo68520);
const smo68521 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo68521.setAttribute('id', 'smo68521');
smo68551v0ar.push(smo68521);
const smo68522 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo68522.setAttribute('id', 'smo68522');
smo68551v0ar.push(smo68522);
const smo68523 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo68523.setAttribute('id', 'smo68523');
smo68551v0ar.push(smo68523);
const smo68524 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo68524.setAttribute('id', 'smo68524');
smo68551v0ar.push(smo68524);
const smo68525 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo68525.setAttribute('id', 'smo68525');
smo68551v0ar.push(smo68525);
const smo68526 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo68526.setAttribute('id', 'smo68526');
smo68551v0ar.push(smo68526);
const smo68527 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo68527.setAttribute('id', 'smo68527');
smo68551v0ar.push(smo68527);
const smo68528 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo68528.setAttribute('id', 'smo68528');
const smo685280acc = new VF.Accidental('n');
smo68528.addModifier(smo685280acc, 0);
smo68551v0ar.push(smo68528);
const smo68529 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo68529.setAttribute('id', 'smo68529');
smo68551v0ar.push(smo68529);
smo68551v0.addTickables(smo68551v0ar)
fmtsmo6855142.joinVoices([smo68551v0]);
const smo68551v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68551v1ar = [];
const smo68530 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo68530.setAttribute('id', 'smo68530');
smo68530.setStyle({ fillStyle: "#115511" });
smo68551v1ar.push(smo68530);
const smo68531 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo68531.setAttribute('id', 'smo68531');
smo68531.setStyle({ fillStyle: "#115511" });
smo68551v1ar.push(smo68531);
const smo68532 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/3/n"]}'))
smo68532.setAttribute('id', 'smo68532');
smo68532.setStyle({ fillStyle: "#115511" });
const smo685320acc = new VF.Accidental('b');
smo68532.addModifier(smo685320acc, 0);
smo68551v1ar.push(smo68532);
const smo68533 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo68533.setAttribute('id', 'smo68533');
smo68533.setStyle({ fillStyle: "#115511" });
smo68551v1ar.push(smo68533);
const smo68534 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/3/n"]}'))
smo68534.setAttribute('id', 'smo68534');
smo68534.setStyle({ fillStyle: "#115511" });
const smo685340acc = new VF.Accidental('#');
smo68534.addModifier(smo685340acc, 0);
smo68551v1ar.push(smo68534);
const smo68535 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo68535.setAttribute('id', 'smo68535');
smo68535.setStyle({ fillStyle: "#115511" });
smo68551v1ar.push(smo68535);
const smo68536 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo68536.setAttribute('id', 'smo68536');
smo68536.setStyle({ fillStyle: "#115511" });
smo68551v1ar.push(smo68536);
const smo68537 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo68537.setAttribute('id', 'smo68537');
smo68537.setStyle({ fillStyle: "#115511" });
smo68551v1ar.push(smo68537);
smo68551v1.addTickables(smo68551v1ar)
fmtsmo6855142.joinVoices([smo68551v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo71998 = smo63457.getStemDirection();
smo63457.setStemDirection(dirsmo71998);
smo63458.setStemDirection(dirsmo71998);
const smo71998 = new VF.Beam([smo63457,smo63458]);
const dirsmo71999 = smo63459.getStemDirection();
smo63459.setStemDirection(dirsmo71999);
smo63460.setStemDirection(dirsmo71999);
smo63461.setStemDirection(dirsmo71999);
smo63462.setStemDirection(dirsmo71999);
const smo71999 = new VF.Beam([smo63459,smo63460,smo63461,smo63462]);
const dirsmo72000 = smo63463.getStemDirection();
smo63463.setStemDirection(dirsmo72000);
smo63464.setStemDirection(dirsmo72000);
const smo72000 = new VF.Beam([smo63463,smo63464]);
const dirsmo72001 = smo63465.getStemDirection();
smo63465.setStemDirection(dirsmo72001);
smo63466.setStemDirection(dirsmo72001);
smo63467.setStemDirection(dirsmo72001);
smo63468.setStemDirection(dirsmo72001);
const smo72001 = new VF.Beam([smo63465,smo63466,smo63467,smo63468]);
const dirsmo72004 = smo68520.getStemDirection();
smo68520.setStemDirection(dirsmo72004);
smo68521.setStemDirection(dirsmo72004);
smo68522.setStemDirection(dirsmo72004);
smo68523.setStemDirection(dirsmo72004);
const smo72004 = new VF.Beam([smo68520,smo68521,smo68522,smo68523]);
const dirsmo72005 = smo68524.getStemDirection();
smo68524.setStemDirection(dirsmo72005);
smo68525.setStemDirection(dirsmo72005);
smo68526.setStemDirection(dirsmo72005);
smo68527.setStemDirection(dirsmo72005);
const smo72005 = new VF.Beam([smo68524,smo68525,smo68526,smo68527]);
const dirsmo72006 = smo68528.getStemDirection();
smo68528.setStemDirection(dirsmo72006);
smo68529.setStemDirection(dirsmo72006);
const smo72006 = new VF.Beam([smo68528,smo68529]);
const dirsmo72007 = smo68530.getStemDirection();
smo68530.setStemDirection(dirsmo72007);
smo68531.setStemDirection(dirsmo72007);
smo68532.setStemDirection(dirsmo72007);
smo68533.setStemDirection(dirsmo72007);
const smo72007 = new VF.Beam([smo68530,smo68531,smo68532,smo68533]);
const dirsmo72008 = smo68534.getStemDirection();
smo68534.setStemDirection(dirsmo72008);
smo68535.setStemDirection(dirsmo72008);
const smo72008 = new VF.Beam([smo68534,smo68535]);
 
// formatting measures in staff group smo60952
fmtsmo6348242.format([smo63482v0,smo68551v0,smo68551v1], 362);
const stavesmo63482 = new VF.Stave(90, 2020, 420);
stavesmo63482.setAttribute('id', 'stavesmo63482');
stavesmo63482.setBegBarType(1);
stavesmo63482.addClef('treble');
stavesmo63482.setContext(context);
stavesmo63482.draw();
smo63482v0.draw(context, stavesmo63482);
smo71998.setContext(context);
smo71998.draw();
smo71999.setContext(context);
smo71999.draw();
smo72000.setContext(context);
smo72000.draw();
smo72001.setContext(context);
smo72001.draw();
const stavesmo68551 = new VF.Stave(90, 2184, 420);
stavesmo68551.setAttribute('id', 'stavesmo68551');
stavesmo68551.setBegBarType(1);
stavesmo68551.addClef('bass');
stavesmo68551.setContext(context);
stavesmo68551.draw();
smo68551v0.draw(context, stavesmo68551);
smo68551v1.draw(context, stavesmo68551);
smo72004.setContext(context);
smo72004.draw();
smo72005.setContext(context);
smo72005.draw();
smo72006.setContext(context);
smo72006.draw();
smo72007.setContext(context);
smo72007.draw();
smo72008.setContext(context);
smo72008.draw();
const leftsmo60952stavesmo634821 = new VF.StaveConnector(stavesmo63482, stavesmo68551).setType(3);
leftsmo60952stavesmo634821.setContext(context).draw();
const fmtsmo6350943 = new VF.Formatter();
//
// voices and notes for stave 0 43
const smo63509v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63509v0ar = [];
const smo63483 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo63483.setAttribute('id', 'smo63483');
smo63509v0ar.push(smo63483);
const smo63484 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo63484.setAttribute('id', 'smo63484');
smo63509v0ar.push(smo63484);
const smo63485 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/5/n"]}'))
smo63485.setAttribute('id', 'smo63485');
const smo634850acc = new VF.Accidental('#');
smo63485.addModifier(smo634850acc, 0);
smo63509v0ar.push(smo63485);
const smo63486 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo63486.setAttribute('id', 'smo63486');
smo63509v0ar.push(smo63486);
smo63509v0.addTickables(smo63509v0ar)
fmtsmo6350943.joinVoices([smo63509v0]);
const smo63509v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63509v1ar = [];
const smo63487 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63487.setAttribute('id', 'smo63487');
smo63487.setStyle({ fillStyle: "#115511" });
smo63509v1ar.push(smo63487);
const smo63488 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo63488.setAttribute('id', 'smo63488');
smo63488.setStyle({ fillStyle: "#115511" });
smo63509v1ar.push(smo63488);
const smo63489 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo63489.setAttribute('id', 'smo63489');
smo63489.setStyle({ fillStyle: "#115511" });
smo63509v1ar.push(smo63489);
const smo63490 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo63490.setAttribute('id', 'smo63490');
smo63490.setStyle({ fillStyle: "#115511" });
smo63509v1ar.push(smo63490);
const smo63491 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo63491.setAttribute('id', 'smo63491');
smo63491.setStyle({ fillStyle: "#115511" });
smo63491.addModifier(new VF.Dot(), 0);
smo63509v1ar.push(smo63491);
const smo63492 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo63492.setAttribute('id', 'smo63492');
smo63492.setStyle({ fillStyle: "#115511" });
smo63509v1ar.push(smo63492);
const smo63493 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo63493.setAttribute('id', 'smo63493');
smo63493.setStyle({ fillStyle: "#115511" });
smo63509v1ar.push(smo63493);
const smo63494 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo63494.setAttribute('id', 'smo63494');
smo63494.setStyle({ fillStyle: "#115511" });
smo63509v1ar.push(smo63494);
const smo63495 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo63495.setAttribute('id', 'smo63495');
smo63495.setStyle({ fillStyle: "#115511" });
smo63509v1ar.push(smo63495);
smo63509v1.addTickables(smo63509v1ar)
fmtsmo6350943.joinVoices([smo63509v1]);
const fmtsmo6858643 = new VF.Formatter();
//
// voices and notes for stave 1 43
const smo68586v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68586v0ar = [];
const smo68552 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo68552.setAttribute('id', 'smo68552');
smo68586v0ar.push(smo68552);
const smo68553 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo68553.setAttribute('id', 'smo68553');
smo68586v0ar.push(smo68553);
const smo68554 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo68554.setAttribute('id', 'smo68554');
smo68586v0ar.push(smo68554);
const smo68555 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo68555.setAttribute('id', 'smo68555');
smo68586v0ar.push(smo68555);
const smo68556 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo68556.setAttribute('id', 'smo68556');
smo68586v0ar.push(smo68556);
const smo68557 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo68557.setAttribute('id', 'smo68557');
smo68586v0ar.push(smo68557);
const smo68558 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo68558.setAttribute('id', 'smo68558');
smo68586v0ar.push(smo68558);
const smo68559 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo68559.setAttribute('id', 'smo68559');
smo68586v0ar.push(smo68559);
const smo68560 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo68560.setAttribute('id', 'smo68560');
smo68586v0ar.push(smo68560);
const smo68561 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo68561.setAttribute('id', 'smo68561');
smo68586v0ar.push(smo68561);
smo68586v0.addTickables(smo68586v0ar)
fmtsmo6858643.joinVoices([smo68586v0]);
const smo68586v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68586v1ar = [];
const smo68562 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo68562.setAttribute('id', 'smo68562');
smo68562.setStyle({ fillStyle: "#115511" });
smo68586v1ar.push(smo68562);
const smo68563 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/3/n"]}'))
smo68563.setAttribute('id', 'smo68563');
smo68563.setStyle({ fillStyle: "#115511" });
smo68586v1ar.push(smo68563);
const smo68564 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo68564.setAttribute('id', 'smo68564');
smo68564.setStyle({ fillStyle: "#115511" });
smo68586v1ar.push(smo68564);
const smo68565 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo68565.setAttribute('id', 'smo68565');
smo68565.setStyle({ fillStyle: "#115511" });
smo68586v1ar.push(smo68565);
const smo68566 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo68566.setAttribute('id', 'smo68566');
smo68566.setStyle({ fillStyle: "#115511" });
smo68586v1ar.push(smo68566);
const smo68567 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/3/n"]}'))
smo68567.setAttribute('id', 'smo68567');
smo68567.setStyle({ fillStyle: "#115511" });
smo68586v1ar.push(smo68567);
const smo68568 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo68568.setAttribute('id', 'smo68568');
smo68568.setStyle({ fillStyle: "#115511" });
smo68586v1ar.push(smo68568);
const smo68569 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo68569.setAttribute('id', 'smo68569');
smo68569.setStyle({ fillStyle: "#115511" });
smo68586v1ar.push(smo68569);
const smo68570 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo68570.setAttribute('id', 'smo68570');
smo68570.setStyle({ fillStyle: "#115511" });
smo68586v1ar.push(smo68570);
const smo68571 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo68571.setAttribute('id', 'smo68571');
smo68571.setStyle({ fillStyle: "#115511" });
smo68586v1ar.push(smo68571);
const smo68572 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo68572.setAttribute('id', 'smo68572');
smo68572.setStyle({ fillStyle: "#115511" });
smo68586v1ar.push(smo68572);
smo68586v1.addTickables(smo68586v1ar)
fmtsmo6858643.joinVoices([smo68586v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo72011 = smo63484.getStemDirection();
smo63484.setStemDirection(dirsmo72011);
smo63485.setStemDirection(dirsmo72011);
const smo72011 = new VF.Beam([smo63484,smo63485]);
const dirsmo72012 = smo63488.getStemDirection();
smo63488.setStemDirection(dirsmo72012);
smo63489.setStemDirection(dirsmo72012);
smo63490.setStemDirection(dirsmo72012);
const smo72012 = new VF.Beam([smo63488,smo63489,smo63490]);
const dirsmo72013 = smo63491.getStemDirection();
smo63491.setStemDirection(dirsmo72013);
smo63492.setStemDirection(dirsmo72013);
smo63493.setStemDirection(dirsmo72013);
const smo72013 = new VF.Beam([smo63491,smo63492,smo63493]);
const dirsmo72014 = smo63494.getStemDirection();
smo63494.setStemDirection(dirsmo72014);
smo63495.setStemDirection(dirsmo72014);
const smo72014 = new VF.Beam([smo63494,smo63495]);
const dirsmo72017 = smo68554.getStemDirection();
smo68554.setStemDirection(dirsmo72017);
smo68555.setStemDirection(dirsmo72017);
smo68556.setStemDirection(dirsmo72017);
smo68557.setStemDirection(dirsmo72017);
const smo72017 = new VF.Beam([smo68554,smo68555,smo68556,smo68557]);
const dirsmo72018 = smo68558.getStemDirection();
smo68558.setStemDirection(dirsmo72018);
smo68559.setStemDirection(dirsmo72018);
smo68560.setStemDirection(dirsmo72018);
smo68561.setStemDirection(dirsmo72018);
const smo72018 = new VF.Beam([smo68558,smo68559,smo68560,smo68561]);
const dirsmo72019 = smo68562.getStemDirection();
smo68562.setStemDirection(dirsmo72019);
smo68563.setStemDirection(dirsmo72019);
smo68564.setStemDirection(dirsmo72019);
smo68565.setStemDirection(dirsmo72019);
const smo72019 = new VF.Beam([smo68562,smo68563,smo68564,smo68565]);
const dirsmo72020 = smo68566.getStemDirection();
smo68566.setStemDirection(dirsmo72020);
smo68567.setStemDirection(dirsmo72020);
smo68568.setStemDirection(dirsmo72020);
smo68569.setStemDirection(dirsmo72020);
const smo72020 = new VF.Beam([smo68566,smo68567,smo68568,smo68569]);
 
// formatting measures in staff group smo60952
fmtsmo6350943.format([smo63509v0,smo63509v1,smo68586v0,smo68586v1], 404);
const stavesmo63509 = new VF.Stave(510, 2020, 418);
stavesmo63509.setAttribute('id', 'stavesmo63509');
stavesmo63509.setBegBarType(VF.Barline.type.NONE);
stavesmo63509.setContext(context);
stavesmo63509.draw();
smo63509v0.draw(context, stavesmo63509);
smo63509v1.draw(context, stavesmo63509);
smo72011.setContext(context);
smo72011.draw();
smo72012.setContext(context);
smo72012.draw();
smo72013.setContext(context);
smo72013.draw();
smo72014.setContext(context);
smo72014.draw();
const stavesmo68586 = new VF.Stave(510, 2184, 418);
stavesmo68586.setAttribute('id', 'stavesmo68586');
stavesmo68586.setBegBarType(VF.Barline.type.NONE);
stavesmo68586.setContext(context);
stavesmo68586.draw();
smo68586v0.draw(context, stavesmo68586);
smo68586v1.draw(context, stavesmo68586);
smo72017.setContext(context);
smo72017.draw();
smo72018.setContext(context);
smo72018.draw();
smo72019.setContext(context);
smo72019.draw();
smo72020.setContext(context);
smo72020.draw();
const fmtsmo6354344 = new VF.Formatter();
//
// voices and notes for stave 0 44
const smo63543v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63543v0ar = [];
const smo63510 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo63510.setAttribute('id', 'smo63510');
smo63543v0ar.push(smo63510);
const smo63511 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/5/n"]}'))
smo63511.setAttribute('id', 'smo63511');
const smo635110acc = new VF.Accidental('#');
smo63511.addModifier(smo635110acc, 0);
smo63543v0ar.push(smo63511);
const smo63512 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo63512.setAttribute('id', 'smo63512');
smo63543v0ar.push(smo63512);
const smo63513 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo63513.setAttribute('id', 'smo63513');
const smo635130acc = new VF.Accidental('n');
smo63513.addModifier(smo635130acc, 0);
smo63543v0ar.push(smo63513);
const smo63514 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo63514.setAttribute('id', 'smo63514');
smo63543v0ar.push(smo63514);
const smo63515 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo63515.setAttribute('id', 'smo63515');
smo63543v0ar.push(smo63515);
const smo63516 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo63516.setAttribute('id', 'smo63516');
smo63543v0ar.push(smo63516);
const smo63517 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo63517.setAttribute('id', 'smo63517');
smo63543v0ar.push(smo63517);
const smo63518 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo63518.setAttribute('id', 'smo63518');
smo63543v0ar.push(smo63518);
const smo63519 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo63519.setAttribute('id', 'smo63519');
smo63543v0ar.push(smo63519);
smo63543v0.addTickables(smo63543v0ar)
fmtsmo6354344.joinVoices([smo63543v0]);
const smo63543v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63543v1ar = [];
const smo63520 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo63520.setAttribute('id', 'smo63520');
smo63520.setStyle({ fillStyle: "#115511" });
smo63543v1ar.push(smo63520);
const smo63521 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo63521.setAttribute('id', 'smo63521');
smo63521.setStyle({ fillStyle: "#115511" });
smo63543v1ar.push(smo63521);
const smo63522 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo63522.setAttribute('id', 'smo63522');
smo63522.setStyle({ fillStyle: "#115511" });
smo63543v1ar.push(smo63522);
const smo63523 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo63523.setAttribute('id', 'smo63523');
smo63523.setStyle({ fillStyle: "#115511" });
smo63543v1ar.push(smo63523);
const smo63524 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo63524.setAttribute('id', 'smo63524');
smo63524.setStyle({ fillStyle: "#115511" });
smo63543v1ar.push(smo63524);
const smo63525 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo63525.setAttribute('id', 'smo63525');
smo63525.setStyle({ fillStyle: "#115511" });
smo63543v1ar.push(smo63525);
const smo63526 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo63526.setAttribute('id', 'smo63526');
smo63526.setStyle({ fillStyle: "#115511" });
smo63543v1ar.push(smo63526);
const smo63527 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63527.setAttribute('id', 'smo63527');
smo63527.setStyle({ fillStyle: "#115511" });
smo63543v1ar.push(smo63527);
const smo63528 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo63528.setAttribute('id', 'smo63528');
smo63528.setStyle({ fillStyle: "#115511" });
smo63543v1ar.push(smo63528);
const smo63529 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo63529.setAttribute('id', 'smo63529');
smo63529.setStyle({ fillStyle: "#115511" });
smo63543v1ar.push(smo63529);
smo63543v1.addTickables(smo63543v1ar)
fmtsmo6354344.joinVoices([smo63543v1]);
const fmtsmo6861544 = new VF.Formatter();
//
// voices and notes for stave 1 44
const smo68615v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68615v0ar = [];
const smo68587 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo68587.setAttribute('id', 'smo68587');
smo68615v0ar.push(smo68587);
const smo68588 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo68588.setAttribute('id', 'smo68588');
smo68615v0ar.push(smo68588);
const smo68589 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo68589.setAttribute('id', 'smo68589');
smo68615v0ar.push(smo68589);
const smo68590 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo68590.setAttribute('id', 'smo68590');
smo68615v0ar.push(smo68590);
const smo68591 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo68591.setAttribute('id', 'smo68591');
smo68615v0ar.push(smo68591);
const smo68592 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo68592.setAttribute('id', 'smo68592');
smo68615v0ar.push(smo68592);
const smo68593 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo68593.setAttribute('id', 'smo68593');
smo68615v0ar.push(smo68593);
const smo68594 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo68594.setAttribute('id', 'smo68594');
smo68615v0ar.push(smo68594);
const smo68595 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo68595.setAttribute('id', 'smo68595');
smo68615v0ar.push(smo68595);
const smo68596 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["gn/3/r"]}'))
smo68596.setAttribute('id', 'smo68596');
smo68615v0ar.push(smo68596);
smo68615v0.addTickables(smo68615v0ar)
fmtsmo6861544.joinVoices([smo68615v0]);
const smo68615v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68615v1ar = [];
const smo68597 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo68597.setAttribute('id', 'smo68597');
smo68597.setStyle({ fillStyle: "#115511" });
smo68615v1ar.push(smo68597);
const smo68598 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo68598.setAttribute('id', 'smo68598');
smo68598.setStyle({ fillStyle: "#115511" });
smo68615v1ar.push(smo68598);
const smo68599 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo68599.setAttribute('id', 'smo68599');
smo68599.setStyle({ fillStyle: "#115511" });
smo68615v1ar.push(smo68599);
const smo68600 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/2/n"]}'))
smo68600.setAttribute('id', 'smo68600');
smo68600.setStyle({ fillStyle: "#115511" });
smo68615v1ar.push(smo68600);
const smo68601 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/2/n"]}'))
smo68601.setAttribute('id', 'smo68601');
smo68601.setStyle({ fillStyle: "#115511" });
smo68615v1ar.push(smo68601);
smo68615v1.addTickables(smo68615v1ar)
fmtsmo6861544.joinVoices([smo68615v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo72023 = smo63512.getStemDirection();
smo63512.setStemDirection(dirsmo72023);
smo63513.setStemDirection(dirsmo72023);
smo63514.setStemDirection(dirsmo72023);
smo63515.setStemDirection(dirsmo72023);
const smo72023 = new VF.Beam([smo63512,smo63513,smo63514,smo63515]);
const dirsmo72024 = smo63516.getStemDirection();
smo63516.setStemDirection(dirsmo72024);
smo63517.setStemDirection(dirsmo72024);
smo63518.setStemDirection(dirsmo72024);
smo63519.setStemDirection(dirsmo72024);
const smo72024 = new VF.Beam([smo63516,smo63517,smo63518,smo63519]);
const dirsmo72025 = smo63520.getStemDirection();
smo63520.setStemDirection(dirsmo72025);
smo63521.setStemDirection(dirsmo72025);
const smo72025 = new VF.Beam([smo63520,smo63521]);
const dirsmo72026 = smo63522.getStemDirection();
smo63522.setStemDirection(dirsmo72026);
smo63523.setStemDirection(dirsmo72026);
smo63524.setStemDirection(dirsmo72026);
smo63525.setStemDirection(dirsmo72026);
const smo72026 = new VF.Beam([smo63522,smo63523,smo63524,smo63525]);
const dirsmo72029 = smo68587.getStemDirection();
smo68587.setStemDirection(dirsmo72029);
smo68588.setStemDirection(dirsmo72029);
smo68589.setStemDirection(dirsmo72029);
smo68590.setStemDirection(dirsmo72029);
const smo72029 = new VF.Beam([smo68587,smo68588,smo68589,smo68590]);
const dirsmo72030 = smo68591.getStemDirection();
smo68591.setStemDirection(dirsmo72030);
smo68592.setStemDirection(dirsmo72030);
smo68593.setStemDirection(dirsmo72030);
smo68594.setStemDirection(dirsmo72030);
const smo72030 = new VF.Beam([smo68591,smo68592,smo68593,smo68594]);
const dirsmo72031 = smo68599.getStemDirection();
smo68599.setStemDirection(dirsmo72031);
smo68600.setStemDirection(dirsmo72031);
smo68601.setStemDirection(dirsmo72031);
const smo72031 = new VF.Beam([smo68599,smo68600,smo68601]);
 
// formatting measures in staff group smo60952
fmtsmo6354344.format([smo63543v0,smo63543v1,smo68615v0,smo68615v1], 365);
const stavesmo63543 = new VF.Stave(928, 2020, 379);
stavesmo63543.setAttribute('id', 'stavesmo63543');
stavesmo63543.setBegBarType(VF.Barline.type.NONE);
stavesmo63543.setContext(context);
stavesmo63543.draw();
smo63543v0.draw(context, stavesmo63543);
smo63543v1.draw(context, stavesmo63543);
smo72023.setContext(context);
smo72023.draw();
smo72024.setContext(context);
smo72024.draw();
smo72025.setContext(context);
smo72025.draw();
smo72026.setContext(context);
smo72026.draw();
const stavesmo68615 = new VF.Stave(928, 2184, 379);
stavesmo68615.setAttribute('id', 'stavesmo68615');
stavesmo68615.setBegBarType(VF.Barline.type.NONE);
stavesmo68615.setContext(context);
stavesmo68615.draw();
smo68615v0.draw(context, stavesmo68615);
smo68615v1.draw(context, stavesmo68615);
smo72029.setContext(context);
smo72029.draw();
smo72030.setContext(context);
smo72030.draw();
smo72031.setContext(context);
smo72031.draw();
const fmtsmo6357745 = new VF.Formatter();
//
// voices and notes for stave 0 45
const smo63577v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63577v0ar = [];
const smo63544 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo63544.setAttribute('id', 'smo63544');
smo63577v0ar.push(smo63544);
const smo63545 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo63545.setAttribute('id', 'smo63545');
smo63577v0ar.push(smo63545);
const smo63546 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo63546.setAttribute('id', 'smo63546');
smo63577v0ar.push(smo63546);
const smo63547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo63547.setAttribute('id', 'smo63547');
smo63577v0ar.push(smo63547);
const smo63548 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo63548.setAttribute('id', 'smo63548');
smo63548.addModifier(new VF.Dot(), 0);
smo63577v0ar.push(smo63548);
const smo63549 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["gn/5/r"]}'))
smo63549.setAttribute('id', 'smo63549');
smo63577v0ar.push(smo63549);
const smo63550 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo63550.setAttribute('id', 'smo63550');
smo63577v0ar.push(smo63550);
const smo63551 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo63551.setAttribute('id', 'smo63551');
smo63577v0ar.push(smo63551);
const smo63552 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo63552.setAttribute('id', 'smo63552');
smo63577v0ar.push(smo63552);
const smo63553 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["g#/4/n"]}'))
smo63553.setAttribute('id', 'smo63553');
const smo635530acc = new VF.Accidental('#');
smo63553.addModifier(smo635530acc, 0);
smo63577v0ar.push(smo63553);
const smo63554 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo63554.setAttribute('id', 'smo63554');
smo63577v0ar.push(smo63554);
smo63577v0.addTickables(smo63577v0ar)
fmtsmo6357745.joinVoices([smo63577v0]);
const smo63577v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63577v1ar = [];
const smo63555 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo63555.setAttribute('id', 'smo63555');
smo63555.setStyle({ fillStyle: "#115511" });
smo63577v1ar.push(smo63555);
const smo63556 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/4/n"]}'))
smo63556.setAttribute('id', 'smo63556');
smo63556.setStyle({ fillStyle: "#115511" });
const smo635560acc = new VF.Accidental('#');
smo63556.addModifier(smo635560acc, 0);
smo63577v1ar.push(smo63556);
const smo63557 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo63557.setAttribute('id', 'smo63557');
smo63557.setStyle({ fillStyle: "#115511" });
smo63557.addModifier(new VF.Dot(), 0);
smo63577v1ar.push(smo63557);
const smo63558 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo63558.setAttribute('id', 'smo63558');
smo63558.setStyle({ fillStyle: "#115511" });
smo63577v1ar.push(smo63558);
const smo63559 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo63559.setAttribute('id', 'smo63559');
smo63559.setStyle({ fillStyle: "#115511" });
smo63577v1ar.push(smo63559);
const smo63560 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/4/n"]}'))
smo63560.setAttribute('id', 'smo63560');
smo63560.setStyle({ fillStyle: "#115511" });
smo63577v1ar.push(smo63560);
const smo63561 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo63561.setAttribute('id', 'smo63561');
smo63561.setStyle({ fillStyle: "#115511" });
smo63577v1ar.push(smo63561);
const smo63562 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo63562.setAttribute('id', 'smo63562');
smo63562.setStyle({ fillStyle: "#115511" });
smo63577v1ar.push(smo63562);
const smo63563 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo63563.setAttribute('id', 'smo63563');
smo63563.setStyle({ fillStyle: "#115511" });
smo63577v1ar.push(smo63563);
smo63577v1.addTickables(smo63577v1ar)
fmtsmo6357745.joinVoices([smo63577v1]);
const fmtsmo6864145 = new VF.Formatter();
//
// voices and notes for stave 1 45
const smo68641v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68641v0ar = [];
const smo68616 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo68616.setAttribute('id', 'smo68616');
smo68616.setStyle({ fillStyle: '#aaaaaa7f' });
smo68641v0ar.push(smo68616);
smo68641v0.addTickables(smo68641v0ar)
fmtsmo6864145.joinVoices([smo68641v0]);
const smo68641v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68641v1ar = [];
const smo68617 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo68617.setAttribute('id', 'smo68617');
smo68617.setStyle({ fillStyle: "#115511" });
smo68617.addModifier(new VF.Dot(), 0);
smo68641v1ar.push(smo68617);
const smo68618 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo68618.setAttribute('id', 'smo68618');
smo68618.setStyle({ fillStyle: "#115511" });
smo68641v1ar.push(smo68618);
const smo68619 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo68619.setAttribute('id', 'smo68619');
smo68619.setStyle({ fillStyle: "#115511" });
smo68641v1ar.push(smo68619);
const smo68620 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/2/n"]}'))
smo68620.setAttribute('id', 'smo68620');
smo68620.setStyle({ fillStyle: "#115511" });
smo68641v1ar.push(smo68620);
const smo68621 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo68621.setAttribute('id', 'smo68621');
smo68621.setStyle({ fillStyle: "#115511" });
smo68641v1ar.push(smo68621);
const smo68622 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/2/n"]}'))
smo68622.setAttribute('id', 'smo68622');
smo68622.setStyle({ fillStyle: "#115511" });
smo68641v1ar.push(smo68622);
const smo68623 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo68623.setAttribute('id', 'smo68623');
smo68623.setStyle({ fillStyle: "#115511" });
smo68641v1ar.push(smo68623);
const smo68624 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo68624.setAttribute('id', 'smo68624');
smo68624.setStyle({ fillStyle: "#115511" });
smo68641v1ar.push(smo68624);
const smo68625 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo68625.setAttribute('id', 'smo68625');
smo68625.setStyle({ fillStyle: "#115511" });
smo68641v1ar.push(smo68625);
const smo68626 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo68626.setAttribute('id', 'smo68626');
smo68626.setStyle({ fillStyle: "#115511" });
smo68641v1ar.push(smo68626);
const smo68627 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo68627.setAttribute('id', 'smo68627');
smo68627.setStyle({ fillStyle: "#115511" });
smo68641v1ar.push(smo68627);
smo68641v1.addTickables(smo68641v1ar)
fmtsmo6864145.joinVoices([smo68641v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo72034 = smo63544.getStemDirection();
smo63544.setStemDirection(dirsmo72034);
smo63545.setStemDirection(dirsmo72034);
smo63546.setStemDirection(dirsmo72034);
smo63547.setStemDirection(dirsmo72034);
const smo72034 = new VF.Beam([smo63544,smo63545,smo63546,smo63547]);
const dirsmo72035 = smo63550.getStemDirection();
smo63550.setStemDirection(dirsmo72035);
smo63551.setStemDirection(dirsmo72035);
smo63552.setStemDirection(dirsmo72035);
const smo72035 = new VF.Beam([smo63550,smo63551,smo63552]);
const dirsmo72036 = smo63553.getStemDirection();
smo63553.setStemDirection(dirsmo72036);
smo63554.setStemDirection(dirsmo72036);
const smo72036 = new VF.Beam([smo63553,smo63554]);
const dirsmo72037 = smo63555.getStemDirection();
smo63555.setStemDirection(dirsmo72037);
smo63556.setStemDirection(dirsmo72037);
const smo72037 = new VF.Beam([smo63555,smo63556]);
const dirsmo72038 = smo63557.getStemDirection();
smo63557.setStemDirection(dirsmo72038);
smo63558.setStemDirection(dirsmo72038);
smo63559.setStemDirection(dirsmo72038);
const smo72038 = new VF.Beam([smo63557,smo63558,smo63559]);
const dirsmo72039 = smo63560.getStemDirection();
smo63560.setStemDirection(dirsmo72039);
smo63561.setStemDirection(dirsmo72039);
smo63562.setStemDirection(dirsmo72039);
smo63563.setStemDirection(dirsmo72039);
const smo72039 = new VF.Beam([smo63560,smo63561,smo63562,smo63563]);
const dirsmo72042 = smo68617.getStemDirection();
smo68617.setStemDirection(dirsmo72042);
smo68618.setStemDirection(dirsmo72042);
smo68619.setStemDirection(dirsmo72042);
const smo72042 = new VF.Beam([smo68617,smo68618,smo68619]);
const dirsmo72043 = smo68620.getStemDirection();
smo68620.setStemDirection(dirsmo72043);
smo68621.setStemDirection(dirsmo72043);
const smo72043 = new VF.Beam([smo68620,smo68621]);
const dirsmo72044 = smo68622.getStemDirection();
smo68622.setStemDirection(dirsmo72044);
smo68623.setStemDirection(dirsmo72044);
const smo72044 = new VF.Beam([smo68622,smo68623]);
const dirsmo72045 = smo68624.getStemDirection();
smo68624.setStemDirection(dirsmo72045);
smo68625.setStemDirection(dirsmo72045);
smo68626.setStemDirection(dirsmo72045);
smo68627.setStemDirection(dirsmo72045);
const smo72045 = new VF.Beam([smo68624,smo68625,smo68626,smo68627]);
 
// formatting measures in staff group smo60952
fmtsmo6357745.format([smo63577v0,smo63577v1,smo68641v0,smo68641v1], 486);
const stavesmo63577 = new VF.Stave(1307, 2020, 500);
stavesmo63577.setAttribute('id', 'stavesmo63577');
stavesmo63577.setBegBarType(VF.Barline.type.NONE);
stavesmo63577.setContext(context);
stavesmo63577.draw();
smo63577v0.draw(context, stavesmo63577);
smo63577v1.draw(context, stavesmo63577);
smo72034.setContext(context);
smo72034.draw();
smo72035.setContext(context);
smo72035.draw();
smo72036.setContext(context);
smo72036.draw();
smo72037.setContext(context);
smo72037.draw();
smo72038.setContext(context);
smo72038.draw();
smo72039.setContext(context);
smo72039.draw();
const stavesmo68641 = new VF.Stave(1307, 2184, 500);
stavesmo68641.setAttribute('id', 'stavesmo68641');
stavesmo68641.setBegBarType(VF.Barline.type.NONE);
stavesmo68641.setContext(context);
stavesmo68641.draw();
smo68641v0.draw(context, stavesmo68641);
smo68641v1.draw(context, stavesmo68641);
smo72042.setContext(context);
smo72042.draw();
smo72043.setContext(context);
smo72043.draw();
smo72044.setContext(context);
smo72044.draw();
smo72045.setContext(context);
smo72045.draw();
const rightsmo60952stavesmo635771 = new VF.StaveConnector(stavesmo63577, stavesmo68641).setType(0);
rightsmo60952stavesmo635771.setContext(context).draw();
// modifier from 0-36-1-1 to 0-36-1-2
const smo74109 = new VF.StaveTie({ first_note: smo63272, last_note: smo63273, 
          firstNote: smo63272, lastNote: smo63273, first_indices: [0], last_indices: [0]});
smo74109.setContext(context).draw();
// modifier from 0-37-0-6 to 0-37-0-7
const smo74110 = new VF.StaveTie({ first_note: smo63305, last_note: smo63306, 
          firstNote: smo63305, lastNote: smo63306, first_indices: [0], last_indices: [0]});
smo74110.setContext(context).draw();
// modifier from 0-37-1-2 to 0-37-1-3
const smo74111 = new VF.StaveTie({ first_note: smo63312, last_note: smo63313, 
          firstNote: smo63312, lastNote: smo63313, first_indices: [0], last_indices: [0]});
smo74111.setContext(context).draw();
// modifier from 0-40-1-8 to 0-41-1-0
const smo74112 = new VF.StaveTie({ first_note: smo63416, last_note: smo63440, 
          firstNote: smo63416, lastNote: smo63440, first_indices: [0], last_indices: [0]});
smo74112.setContext(context).draw();
// modifier from 0-42-0-1 to 0-42-0-2
const smo74113 = new VF.StaveTie({ first_note: smo63458, last_note: smo63459, 
          firstNote: smo63458, lastNote: smo63459, first_indices: [0], last_indices: [0]});
smo74113.setContext(context).draw();
// modifier from 0-42-0-7 to 0-42-0-8
const smo74114 = new VF.StaveTie({ first_note: smo63464, last_note: smo63465, 
          firstNote: smo63464, lastNote: smo63465, first_indices: [0], last_indices: [0]});
smo74114.setContext(context).draw();
// modifier from 0-43-0-3 to 0-44-0-0
const smo74115 = new VF.StaveTie({ first_note: smo63486, last_note: smo63510, 
          firstNote: smo63486, lastNote: smo63510, first_indices: [0], last_indices: [0]});
smo74115.setContext(context).draw();
// modifier from 0-44-1-1 to 0-44-1-2
const smo74116 = new VF.StaveTie({ first_note: smo63521, last_note: smo63522, 
          firstNote: smo63521, lastNote: smo63522, first_indices: [0], last_indices: [0]});
smo74116.setContext(context).draw();
// modifier from 0-38-1-7 to 0-39-1-0
const smo74117 = new VF.StaveTie({ first_note: smo63353, last_note: smo63380, 
          firstNote: smo63353, lastNote: smo63380, first_indices: [0], last_indices: [0]});
smo74117.setContext(context).draw();
// modifier from 0-39-1-3 to 0-39-1-4
const smo74118 = new VF.StaveTie({ first_note: smo63383, last_note: smo63384, 
          firstNote: smo63383, lastNote: smo63384, first_indices: [0], last_indices: [0]});
smo74118.setContext(context).draw();
// modifier from 1-21-0-1 to 1-21-0-2
const smo74119 = new VF.StaveTie({ first_note: smo68059, last_note: smo68060, 
          firstNote: smo68059, lastNote: smo68060, first_indices: [0], last_indices: [0]});
smo74119.setContext(context).draw();
// modifier from 1-21-0-4 to 1-21-0-5
const smo74120 = new VF.StaveTie({ first_note: smo68062, last_note: smo68063, 
          firstNote: smo68062, lastNote: smo68063, first_indices: [0], last_indices: [0]});
smo74120.setContext(context).draw();
// modifier from 1-22-0-1 to 1-22-0-2
const smo74121 = new VF.StaveTie({ first_note: smo68081, last_note: smo68082, 
          firstNote: smo68081, lastNote: smo68082, first_indices: [0], last_indices: [0]});
smo74121.setContext(context).draw();
// modifier from 1-22-0-4 to 1-22-0-5
const smo74122 = new VF.StaveTie({ first_note: smo68084, last_note: smo68085, 
          firstNote: smo68084, lastNote: smo68085, first_indices: [0], last_indices: [0]});
smo74122.setContext(context).draw();
// modifier from 1-23-0-1 to 1-23-0-2
const smo74123 = new VF.StaveTie({ first_note: smo68103, last_note: smo68104, 
          firstNote: smo68103, lastNote: smo68104, first_indices: [0], last_indices: [0]});
smo74123.setContext(context).draw();
// modifier from 1-23-0-4 to 1-23-0-5
const smo74124 = new VF.StaveTie({ first_note: smo68106, last_note: smo68107, 
          firstNote: smo68106, lastNote: smo68107, first_indices: [0], last_indices: [0]});
smo74124.setContext(context).draw();
// modifier from 1-24-0-1 to 1-24-0-2
const smo74125 = new VF.StaveTie({ first_note: smo68125, last_note: smo68126, 
          firstNote: smo68125, lastNote: smo68126, first_indices: [0], last_indices: [0]});
smo74125.setContext(context).draw();
// modifier from 1-24-0-4 to 1-24-0-5
const smo74126 = new VF.StaveTie({ first_note: smo68128, last_note: smo68129, 
          firstNote: smo68128, lastNote: smo68129, first_indices: [0], last_indices: [0]});
smo74126.setContext(context).draw();
// modifier from 1-25-0-1 to 1-25-0-2
const smo74127 = new VF.StaveTie({ first_note: smo68147, last_note: smo68148, 
          firstNote: smo68147, lastNote: smo68148, first_indices: [0], last_indices: [0]});
smo74127.setContext(context).draw();
// modifier from 1-25-0-4 to 1-25-0-5
const smo74128 = new VF.StaveTie({ first_note: smo68150, last_note: smo68151, 
          firstNote: smo68150, lastNote: smo68151, first_indices: [0], last_indices: [0]});
smo74128.setContext(context).draw();
// modifier from 1-26-0-1 to 1-26-0-2
const smo74129 = new VF.StaveTie({ first_note: smo68169, last_note: smo68170, 
          firstNote: smo68169, lastNote: smo68170, first_indices: [0], last_indices: [0]});
smo74129.setContext(context).draw();
// modifier from 1-26-0-4 to 1-26-0-5
const smo74130 = new VF.StaveTie({ first_note: smo68172, last_note: smo68173, 
          firstNote: smo68172, lastNote: smo68173, first_indices: [0], last_indices: [0]});
smo74130.setContext(context).draw();
// modifier from 1-27-0-1 to 1-27-0-2
const smo74131 = new VF.StaveTie({ first_note: smo68191, last_note: smo68192, 
          firstNote: smo68191, lastNote: smo68192, first_indices: [0], last_indices: [0]});
smo74131.setContext(context).draw();
// modifier from 1-27-0-4 to 1-27-0-5
const smo74132 = new VF.StaveTie({ first_note: smo68194, last_note: smo68195, 
          firstNote: smo68194, lastNote: smo68195, first_indices: [0], last_indices: [0]});
smo74132.setContext(context).draw();
// modifier from 1-28-0-1 to 1-28-0-2
const smo74133 = new VF.StaveTie({ first_note: smo68213, last_note: smo68214, 
          firstNote: smo68213, lastNote: smo68214, first_indices: [0], last_indices: [0]});
smo74133.setContext(context).draw();
// modifier from 1-28-0-4 to 1-28-0-5
const smo74134 = new VF.StaveTie({ first_note: smo68216, last_note: smo68217, 
          firstNote: smo68216, lastNote: smo68217, first_indices: [0], last_indices: [0]});
smo74134.setContext(context).draw();
// modifier from 1-29-0-1 to 1-29-0-2
const smo74135 = new VF.StaveTie({ first_note: smo68235, last_note: smo68236, 
          firstNote: smo68235, lastNote: smo68236, first_indices: [0], last_indices: [0]});
smo74135.setContext(context).draw();
// modifier from 1-29-0-4 to 1-29-0-5
const smo74136 = new VF.StaveTie({ first_note: smo68238, last_note: smo68239, 
          firstNote: smo68238, lastNote: smo68239, first_indices: [0], last_indices: [0]});
smo74136.setContext(context).draw();
// modifier from 1-30-0-1 to 1-30-0-2
const smo74137 = new VF.StaveTie({ first_note: smo68257, last_note: smo68258, 
          firstNote: smo68257, lastNote: smo68258, first_indices: [0], last_indices: [0]});
smo74137.setContext(context).draw();
// modifier from 1-30-0-4 to 1-30-0-5
const smo74138 = new VF.StaveTie({ first_note: smo68260, last_note: smo68261, 
          firstNote: smo68260, lastNote: smo68261, first_indices: [0], last_indices: [0]});
smo74138.setContext(context).draw();
// modifier from 1-31-0-1 to 1-31-0-2
const smo74139 = new VF.StaveTie({ first_note: smo68279, last_note: smo68280, 
          firstNote: smo68279, lastNote: smo68280, first_indices: [0], last_indices: [0]});
smo74139.setContext(context).draw();
// modifier from 1-31-0-4 to 1-31-0-5
const smo74140 = new VF.StaveTie({ first_note: smo68282, last_note: smo68283, 
          firstNote: smo68282, lastNote: smo68283, first_indices: [0], last_indices: [0]});
smo74140.setContext(context).draw();
// modifier from 1-33-0-1 to 1-33-0-2
const smo74141 = new VF.StaveTie({ first_note: smo68321, last_note: smo68322, 
          firstNote: smo68321, lastNote: smo68322, first_indices: [0], last_indices: [0]});
smo74141.setContext(context).draw();
// modifier from 1-33-0-2 to 1-33-0-3
const smo74142 = new VF.StaveTie({ first_note: smo68322, last_note: smo68323, 
          firstNote: smo68322, lastNote: smo68323, first_indices: [0], last_indices: [0]});
smo74142.setContext(context).draw();
// modifier from 1-33-1-0 to 1-33-1-1
const smo74143 = new VF.StaveTie({ first_note: smo68324, last_note: smo68325, 
          firstNote: smo68324, lastNote: smo68325, first_indices: [0], last_indices: [0]});
smo74143.setContext(context).draw();
// modifier from 1-32-0-1 to 1-32-0-2
const smo74144 = new VF.StaveTie({ first_note: smo68301, last_note: smo68302, 
          firstNote: smo68301, lastNote: smo68302, first_indices: [0], last_indices: [0]});
smo74144.setContext(context).draw();
}