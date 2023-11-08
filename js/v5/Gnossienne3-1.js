// @@ Gnossienne No 3 p 2/2  by Erik Satie
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = VexFlow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1348.7603305785124');
svg.setAttributeNS('', 'height', '1745.4545454545453');
svg.setAttributeNS('', 'viewBox', '0 0 1484 1920');
//
// create the musical objects
VF.setFonts("Leland","Bravura","Gonville","Custom");
const fmtsmo758816 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo75881v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75881v0ar = [];
const smo75841 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo75841.setAttribute('id', 'smo75841');
smo75881v0ar.push(smo75841);
const smo75842 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo75842.setAttribute('id', 'smo75842');
smo75881v0ar.push(smo75842);
const smo75843 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo75843.setAttribute('id', 'smo75843');
const smo758430acc = new VF.Accidental('#');
smo75843.addModifier(smo758430acc, 0);
smo75881v0ar.push(smo75843);
const smo75844 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo75844.setAttribute('id', 'smo75844');
smo75881v0ar.push(smo75844);
const smo75845 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["a#/4/n"]}'))
smo75845.setAttribute('id', 'smo75845');
const smo758450acc = new VF.Accidental('#');
smo75845.addModifier(smo758450acc, 0);
smo75881v0ar.push(smo75845);
const smo75846 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo75846.setAttribute('id', 'smo75846');
smo75881v0ar.push(smo75846);
const smo75847 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo75847.setAttribute('id', 'smo75847');
const smo758470acc = new VF.Accidental('#');
smo75847.addModifier(smo758470acc, 0);
smo75881v0ar.push(smo75847);
const smo75848 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo75848.setAttribute('id', 'smo75848');
smo75881v0ar.push(smo75848);
const smo75849 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo75849.setAttribute('id', 'smo75849');
smo75881v0ar.push(smo75849);
const smo75850 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo75850.setAttribute('id', 'smo75850');
smo75881v0ar.push(smo75850);
const smo75851 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["a#/4/n"]}'))
smo75851.setAttribute('id', 'smo75851');
smo75881v0ar.push(smo75851);
const smo75852 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo75852.setAttribute('id', 'smo75852');
smo75881v0ar.push(smo75852);
const smo75853 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo75853.setAttribute('id', 'smo75853');
smo75881v0ar.push(smo75853);
const smo75854 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo75854.setAttribute('id', 'smo75854');
smo75881v0ar.push(smo75854);
const smo75855 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo75855.setAttribute('id', 'smo75855');
smo75881v0ar.push(smo75855);
const smo75856 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo75856.setAttribute('id', 'smo75856');
smo75881v0ar.push(smo75856);
const smo75857 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["a#/4/n"]}'))
smo75857.setAttribute('id', 'smo75857');
smo75881v0ar.push(smo75857);
const smo75858 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo75858.setAttribute('id', 'smo75858');
smo75881v0ar.push(smo75858);
const smo75859 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo75859.setAttribute('id', 'smo75859');
smo75881v0ar.push(smo75859);
const smo75860 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo75860.setAttribute('id', 'smo75860');
smo75881v0ar.push(smo75860);
const smo75861 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo75861.setAttribute('id', 'smo75861');
smo75881v0ar.push(smo75861);
const smo75862 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo75862.setAttribute('id', 'smo75862');
smo75881v0ar.push(smo75862);
const smo75863 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["a#/4/n"]}'))
smo75863.setAttribute('id', 'smo75863');
smo75881v0ar.push(smo75863);
const smo75864 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo75864.setAttribute('id', 'smo75864');
smo75881v0ar.push(smo75864);
const smo75865 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo75865.setAttribute('id', 'smo75865');
smo75881v0ar.push(smo75865);
smo75881v0.addTickables(smo75881v0ar)
fmtsmo758816.joinVoices([smo75881v0]);
const fmtsmo763366 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo76336v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76336v0ar = [];
const smo76305 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76305.setAttribute('id', 'smo76305');
smo76336v0ar.push(smo76305);
const smo76306 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo76306.setAttribute('id', 'smo76306');
const smo763060acc = new VF.Accidental('#');
smo76306.addModifier(smo763060acc, 0);
smo76336v0ar.push(smo76306);
const smo76307 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo76307.setAttribute('id', 'smo76307');
smo76336v0ar.push(smo76307);
const smo76308 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76308.setAttribute('id', 'smo76308');
smo76336v0ar.push(smo76308);
const smo76309 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo76309.setAttribute('id', 'smo76309');
smo76336v0ar.push(smo76309);
const smo76310 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo76310.setAttribute('id', 'smo76310');
smo76336v0ar.push(smo76310);
const smo76311 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76311.setAttribute('id', 'smo76311');
smo76336v0ar.push(smo76311);
const smo76312 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo76312.setAttribute('id', 'smo76312');
smo76336v0ar.push(smo76312);
const smo76313 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo76313.setAttribute('id', 'smo76313');
smo76336v0ar.push(smo76313);
const smo76314 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76314.setAttribute('id', 'smo76314');
smo76336v0ar.push(smo76314);
const smo76315 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo76315.setAttribute('id', 'smo76315');
smo76336v0ar.push(smo76315);
const smo76316 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo76316.setAttribute('id', 'smo76316');
smo76336v0ar.push(smo76316);
smo76336v0.addTickables(smo76336v0ar)
fmtsmo763366.joinVoices([smo76336v0]);
const smo76336v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76336v1ar = [];
const smo76317 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["bn/1/n"]}'))
smo76317.setAttribute('id', 'smo76317');
smo76317.setStyle({ fillStyle: "#115511" });
smo76336v1ar.push(smo76317);
const smo76318 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo76318.setAttribute('id', 'smo76318');
smo76318.setStyle({ fillStyle: "#115511" });
smo76336v1ar.push(smo76318);
const smo76319 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo76319.setAttribute('id', 'smo76319');
smo76319.setStyle({ fillStyle: "#115511" });
smo76336v1ar.push(smo76319);
const smo76320 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo76320.setAttribute('id', 'smo76320');
smo76320.setStyle({ fillStyle: "#115511" });
smo76336v1ar.push(smo76320);
smo76336v1.addTickables(smo76336v1ar)
fmtsmo763366.joinVoices([smo76336v1]);
// create beam groups and tuplets for format grp smo76498 before formatting
const dirsmo77827 = smo75842.getStemDirection();
smo75842.setStemDirection(dirsmo77827);
smo75843.setStemDirection(dirsmo77827);
smo75844.setStemDirection(dirsmo77827);
smo75845.setStemDirection(dirsmo77827);
const smo77827 = new VF.Beam([smo75842,smo75843,smo75844,smo75845]);
const dirsmo77828 = smo75846.getStemDirection();
smo75846.setStemDirection(dirsmo77828);
smo75847.setStemDirection(dirsmo77828);
smo75848.setStemDirection(dirsmo77828);
smo75849.setStemDirection(dirsmo77828);
const smo77828 = new VF.Beam([smo75846,smo75847,smo75848,smo75849]);
const dirsmo77829 = smo75850.getStemDirection();
smo75850.setStemDirection(dirsmo77829);
smo75851.setStemDirection(dirsmo77829);
smo75852.setStemDirection(dirsmo77829);
smo75853.setStemDirection(dirsmo77829);
const smo77829 = new VF.Beam([smo75850,smo75851,smo75852,smo75853]);
const dirsmo77830 = smo75854.getStemDirection();
smo75854.setStemDirection(dirsmo77830);
smo75855.setStemDirection(dirsmo77830);
smo75856.setStemDirection(dirsmo77830);
smo75857.setStemDirection(dirsmo77830);
const smo77830 = new VF.Beam([smo75854,smo75855,smo75856,smo75857]);
const dirsmo77831 = smo75858.getStemDirection();
smo75858.setStemDirection(dirsmo77831);
smo75859.setStemDirection(dirsmo77831);
smo75860.setStemDirection(dirsmo77831);
smo75861.setStemDirection(dirsmo77831);
const smo77831 = new VF.Beam([smo75858,smo75859,smo75860,smo75861]);
const dirsmo77832 = smo75862.getStemDirection();
smo75862.setStemDirection(dirsmo77832);
smo75863.setStemDirection(dirsmo77832);
smo75864.setStemDirection(dirsmo77832);
smo75865.setStemDirection(dirsmo77832);
const smo77832 = new VF.Beam([smo75862,smo75863,smo75864,smo75865]);
 
// formatting measures in staff group smo76498
fmtsmo758816.format([smo75881v0,smo76336v0,smo76336v1], 1123);
const stavesmo75881 = new VF.Stave(103, 173.00000000000023, 1174);
stavesmo75881.setAttribute('id', 'stavesmo75881');
stavesmo75881.setBegBarType(1);
stavesmo75881.addClef('treble');
stavesmo75881.setContext(context);
stavesmo75881.draw();
smo75881v0.draw(context, stavesmo75881);
smo77827.setContext(context);
smo77827.draw();
smo77828.setContext(context);
smo77828.draw();
smo77829.setContext(context);
smo77829.draw();
smo77830.setContext(context);
smo77830.draw();
smo77831.setContext(context);
smo77831.draw();
smo77832.setContext(context);
smo77832.draw();
const stavesmo76336 = new VF.Stave(103, 286.0000000000002, 1174);
stavesmo76336.setAttribute('id', 'stavesmo76336');
stavesmo76336.setBegBarType(1);
stavesmo76336.addClef('bass');
stavesmo76336.setContext(context);
stavesmo76336.draw();
smo76336v0.draw(context, stavesmo76336);
smo76336v1.draw(context, stavesmo76336);
const leftsmo76498stavesmo758811 = new VF.StaveConnector(stavesmo75881, stavesmo76336).setType(3);
leftsmo76498stavesmo758811.setContext(context).draw();
const fmtsmo759177 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo75917v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75917v0ar = [];
const smo75882 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo75882.setAttribute('id', 'smo75882');
smo75917v0ar.push(smo75882);
const smo75883 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo75883.setAttribute('id', 'smo75883');
const smo758830acc = new VF.Accidental('#');
smo75883.addModifier(smo758830acc, 0);
smo75917v0ar.push(smo75883);
const smo75884 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo75884.setAttribute('id', 'smo75884');
smo75917v0ar.push(smo75884);
const smo75885 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["a#/4/n"]}'))
smo75885.setAttribute('id', 'smo75885');
const smo758850acc = new VF.Accidental('#');
smo75885.addModifier(smo758850acc, 0);
smo75917v0ar.push(smo75885);
const smo75886 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo75886.setAttribute('id', 'smo75886');
smo75917v0ar.push(smo75886);
const smo75887 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo75887.setAttribute('id', 'smo75887');
const smo758870acc = new VF.Accidental('#');
smo75887.addModifier(smo758870acc, 0);
smo75917v0ar.push(smo75887);
const smo75888 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo75888.setAttribute('id', 'smo75888');
smo75917v0ar.push(smo75888);
const smo75889 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo75889.setAttribute('id', 'smo75889');
smo75917v0ar.push(smo75889);
const smo75890 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo75890.setAttribute('id', 'smo75890');
smo75917v0ar.push(smo75890);
const smo75891 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo75891.setAttribute('id', 'smo75891');
smo75917v0ar.push(smo75891);
const smo75892 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo75892.setAttribute('id', 'smo75892');
smo75917v0ar.push(smo75892);
const smo75893 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo75893.setAttribute('id', 'smo75893');
smo75917v0ar.push(smo75893);
const smo75894 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
const smo75895 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["f#/4"],"slash":false}'))
smo75895.setAttribute('id', 'smo75895');
const acc0smo75895 = new VF.Accidental('#');
smo75895.addModifier(acc0smo75895, 0)
const ggrpsmo75894 = new VF.GraceNoteGroup([smo75895]);
ggrpsmo75894.beamNotes();
smo75894.addModifier(ggrpsmo75894, 0);
smo75894.setAttribute('id', 'smo75894');
const smo758940acc = new VF.Accidental('n');
smo75894.addModifier(smo758940acc, 0);
smo75917v0ar.push(smo75894);
const smo75896 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo75896.setAttribute('id', 'smo75896');
smo75917v0ar.push(smo75896);
const smo75897 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo75897.setAttribute('id', 'smo75897');
smo75917v0ar.push(smo75897);
const smo75898 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["ab/4/n"]}'))
const smo75899 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["cn/5"],"slash":false}'))
smo75899.setAttribute('id', 'smo75899');
const ggrpsmo75898 = new VF.GraceNoteGroup([smo75899]);
ggrpsmo75898.beamNotes();
smo75898.addModifier(ggrpsmo75898, 0);
smo75898.setAttribute('id', 'smo75898');
const smo758980acc = new VF.Accidental('b');
smo75898.addModifier(smo758980acc, 0);
smo75917v0ar.push(smo75898);
const smo75900 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["ab/4/n"]}'))
smo75900.setAttribute('id', 'smo75900');
smo75917v0ar.push(smo75900);
const smo75901 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo75901.setAttribute('id', 'smo75901');
smo75917v0ar.push(smo75901);
smo75917v0.addTickables(smo75917v0ar)
fmtsmo759177.joinVoices([smo75917v0]);
const fmtsmo763767 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo76376v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76376v0ar = [];
const smo76337 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76337.setAttribute('id', 'smo76337');
smo76376v0ar.push(smo76337);
const smo76338 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo76338.setAttribute('id', 'smo76338');
smo76376v0ar.push(smo76338);
const smo76339 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo76339.setAttribute('id', 'smo76339');
smo76376v0ar.push(smo76339);
const smo76340 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76340.setAttribute('id', 'smo76340');
smo76376v0ar.push(smo76340);
const smo76341 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo76341.setAttribute('id', 'smo76341');
const smo763410acc = new VF.Accidental('#');
smo76341.addModifier(smo763410acc, 0);
smo76376v0ar.push(smo76341);
const smo76342 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo76342.setAttribute('id', 'smo76342');
smo76376v0ar.push(smo76342);
const smo76343 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76343.setAttribute('id', 'smo76343');
smo76376v0ar.push(smo76343);
const smo76344 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo76344.setAttribute('id', 'smo76344');
smo76376v0ar.push(smo76344);
const smo76345 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo76345.setAttribute('id', 'smo76345');
smo76376v0ar.push(smo76345);
const smo76346 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76346.setAttribute('id', 'smo76346');
smo76376v0ar.push(smo76346);
const smo76347 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo76347.setAttribute('id', 'smo76347');
smo76376v0ar.push(smo76347);
const smo76348 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo76348.setAttribute('id', 'smo76348');
smo76376v0ar.push(smo76348);
const smo76349 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76349.setAttribute('id', 'smo76349');
smo76376v0ar.push(smo76349);
const smo76350 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo76350.setAttribute('id', 'smo76350');
const smo763500acc = new VF.Accidental('b');
smo76350.addModifier(smo763500acc, 0);
smo76376v0ar.push(smo76350);
const smo76351 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo76351.setAttribute('id', 'smo76351');
smo76376v0ar.push(smo76351);
const smo76352 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76352.setAttribute('id', 'smo76352');
smo76376v0ar.push(smo76352);
const smo76353 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo76353.setAttribute('id', 'smo76353');
smo76376v0ar.push(smo76353);
const smo76354 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo76354.setAttribute('id', 'smo76354');
smo76376v0ar.push(smo76354);
smo76376v0.addTickables(smo76376v0ar)
fmtsmo763767.joinVoices([smo76376v0]);
const smo76376v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76376v1ar = [];
const smo76355 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo76355.setAttribute('id', 'smo76355');
smo76355.setStyle({ fillStyle: "#115511" });
smo76376v1ar.push(smo76355);
const smo76356 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["bn/1/n"]}'))
smo76356.setAttribute('id', 'smo76356');
smo76356.setStyle({ fillStyle: "#115511" });
smo76376v1ar.push(smo76356);
const smo76357 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/1/n"]}'))
smo76357.setAttribute('id', 'smo76357');
smo76357.setStyle({ fillStyle: "#115511" });
smo76376v1ar.push(smo76357);
const smo76358 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo76358.setAttribute('id', 'smo76358');
smo76358.setStyle({ fillStyle: "#115511" });
smo76376v1ar.push(smo76358);
const smo76359 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n"]}'))
smo76359.setAttribute('id', 'smo76359');
smo76359.setStyle({ fillStyle: "#115511" });
smo76376v1ar.push(smo76359);
const smo76360 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n"]}'))
smo76360.setAttribute('id', 'smo76360');
smo76360.setStyle({ fillStyle: "#115511" });
smo76376v1ar.push(smo76360);
smo76376v1.addTickables(smo76376v1ar)
fmtsmo763767.joinVoices([smo76376v1]);
// create beam groups and tuplets for format grp smo76498 before formatting
const dirsmo77845 = smo75882.getStemDirection();
smo75882.setStemDirection(dirsmo77845);
smo75883.setStemDirection(dirsmo77845);
smo75884.setStemDirection(dirsmo77845);
smo75885.setStemDirection(dirsmo77845);
const smo77845 = new VF.Beam([smo75882,smo75883,smo75884,smo75885]);
const dirsmo77846 = smo75886.getStemDirection();
smo75886.setStemDirection(dirsmo77846);
smo75887.setStemDirection(dirsmo77846);
smo75888.setStemDirection(dirsmo77846);
smo75889.setStemDirection(dirsmo77846);
const smo77846 = new VF.Beam([smo75886,smo75887,smo75888,smo75889]);
const dirsmo77847 = smo75890.getStemDirection();
smo75890.setStemDirection(dirsmo77847);
smo75891.setStemDirection(dirsmo77847);
const smo77847 = new VF.Beam([smo75890,smo75891]);
 
// formatting measures in staff group smo76498
fmtsmo759177.format([smo75917v0,smo76376v0,smo76376v1], 1123);
const stavesmo75917 = new VF.Stave(103, 455.0000000000002, 1173);
stavesmo75917.setAttribute('id', 'stavesmo75917');
stavesmo75917.setBegBarType(1);
stavesmo75917.addClef('treble');
stavesmo75917.setContext(context);
stavesmo75917.draw();
smo75917v0.draw(context, stavesmo75917);
smo77845.setContext(context);
smo77845.draw();
smo77846.setContext(context);
smo77846.draw();
smo77847.setContext(context);
smo77847.draw();
const stavesmo76376 = new VF.Stave(103, 573.0000000000002, 1173);
stavesmo76376.setAttribute('id', 'stavesmo76376');
stavesmo76376.setBegBarType(1);
stavesmo76376.addClef('bass');
stavesmo76376.setContext(context);
stavesmo76376.draw();
smo76376v0.draw(context, stavesmo76376);
smo76376v1.draw(context, stavesmo76376);
const leftsmo76498stavesmo759171 = new VF.StaveConnector(stavesmo75917, stavesmo76376).setType(3);
leftsmo76498stavesmo759171.setContext(context).draw();
const fmtsmo759578 = new VF.Formatter();
//
// voices and notes for stave 0 8
const smo75957v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75957v0ar = [];
const smo75918 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/4/n"]}'))
smo75918.setAttribute('id', 'smo75918');
const smo759180acc = new VF.Accidental('b');
smo75918.addModifier(smo759180acc, 0);
smo75957v0ar.push(smo75918);
const smo75919 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo75919.setAttribute('id', 'smo75919');
smo75957v0ar.push(smo75919);
const smo75920 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo75920.setAttribute('id', 'smo75920');
smo75957v0ar.push(smo75920);
const smo75921 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/5/n"]}'))
smo75921.setAttribute('id', 'smo75921');
const smo759210acc = new VF.Accidental('b');
smo75921.addModifier(smo759210acc, 0);
smo75957v0ar.push(smo75921);
const smo75922 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo75922.setAttribute('id', 'smo75922');
smo75957v0ar.push(smo75922);
const smo75923 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo75923.setAttribute('id', 'smo75923');
smo75957v0ar.push(smo75923);
const smo75924 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo75924.setAttribute('id', 'smo75924');
smo75957v0ar.push(smo75924);
const smo75925 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/4/n"]}'))
smo75925.setAttribute('id', 'smo75925');
smo75957v0ar.push(smo75925);
const smo75926 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo75926.setAttribute('id', 'smo75926');
smo75957v0ar.push(smo75926);
const smo75927 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo75927.setAttribute('id', 'smo75927');
smo75957v0ar.push(smo75927);
const smo75928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo75928.setAttribute('id', 'smo75928');
smo75957v0ar.push(smo75928);
const smo75929 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo75929.setAttribute('id', 'smo75929');
smo75957v0ar.push(smo75929);
const smo75930 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
const smo75931 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["bn/4"],"slash":false}'))
smo75931.setAttribute('id', 'smo75931');
const ggrpsmo75930 = new VF.GraceNoteGroup([smo75931]);
ggrpsmo75930.beamNotes();
smo75930.addModifier(ggrpsmo75930, 0);
smo75930.setAttribute('id', 'smo75930');
smo75957v0ar.push(smo75930);
const smo75932 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo75932.setAttribute('id', 'smo75932');
smo75957v0ar.push(smo75932);
const smo75933 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo75933.setAttribute('id', 'smo75933');
smo75957v0ar.push(smo75933);
const smo75934 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/4/n"]}'))
smo75934.setAttribute('id', 'smo75934');
smo75957v0ar.push(smo75934);
const smo75935 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo75935.setAttribute('id', 'smo75935');
smo75957v0ar.push(smo75935);
const smo75936 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo75936.setAttribute('id', 'smo75936');
smo75957v0ar.push(smo75936);
const smo75937 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/5/n"]}'))
smo75937.setAttribute('id', 'smo75937');
smo75957v0ar.push(smo75937);
const smo75938 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo75938.setAttribute('id', 'smo75938');
smo75957v0ar.push(smo75938);
const smo75939 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo75939.setAttribute('id', 'smo75939');
smo75957v0ar.push(smo75939);
const smo75940 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo75940.setAttribute('id', 'smo75940');
smo75957v0ar.push(smo75940);
const smo75941 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/4/n"]}'))
smo75941.setAttribute('id', 'smo75941');
smo75957v0ar.push(smo75941);
smo75957v0.addTickables(smo75957v0ar)
fmtsmo759578.joinVoices([smo75957v0]);
const fmtsmo764128 = new VF.Formatter();
//
// voices and notes for stave 1 8
const smo76412v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76412v0ar = [];
const smo76377 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76377.setAttribute('id', 'smo76377');
smo76412v0ar.push(smo76377);
const smo76378 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo76378.setAttribute('id', 'smo76378');
const smo763780acc = new VF.Accidental('b');
smo76378.addModifier(smo763780acc, 0);
smo76412v0ar.push(smo76378);
const smo76379 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo76379.setAttribute('id', 'smo76379');
smo76412v0ar.push(smo76379);
const smo76380 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76380.setAttribute('id', 'smo76380');
smo76412v0ar.push(smo76380);
const smo76381 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo76381.setAttribute('id', 'smo76381');
smo76412v0ar.push(smo76381);
const smo76382 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo76382.setAttribute('id', 'smo76382');
smo76412v0ar.push(smo76382);
const smo76383 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76383.setAttribute('id', 'smo76383');
smo76412v0ar.push(smo76383);
const smo76384 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo76384.setAttribute('id', 'smo76384');
const smo763840acc = new VF.Accidental('n');
smo76384.addModifier(smo763840acc, 0);
smo76412v0ar.push(smo76384);
const smo76385 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo76385.setAttribute('id', 'smo76385');
smo76412v0ar.push(smo76385);
const smo76386 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76386.setAttribute('id', 'smo76386');
smo76412v0ar.push(smo76386);
const smo76387 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo76387.setAttribute('id', 'smo76387');
smo76412v0ar.push(smo76387);
const smo76388 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo76388.setAttribute('id', 'smo76388');
smo76412v0ar.push(smo76388);
const smo76389 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76389.setAttribute('id', 'smo76389');
smo76412v0ar.push(smo76389);
const smo76390 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo76390.setAttribute('id', 'smo76390');
const smo763900acc = new VF.Accidental('b');
smo76390.addModifier(smo763900acc, 0);
smo76412v0ar.push(smo76390);
const smo76391 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo76391.setAttribute('id', 'smo76391');
smo76412v0ar.push(smo76391);
smo76412v0.addTickables(smo76412v0ar)
fmtsmo764128.joinVoices([smo76412v0]);
const smo76412v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76412v1ar = [];
const smo76392 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n"]}'))
smo76392.setAttribute('id', 'smo76392');
smo76392.setStyle({ fillStyle: "#115511" });
smo76412v1ar.push(smo76392);
const smo76393 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n"]}'))
smo76393.setAttribute('id', 'smo76393');
smo76393.setStyle({ fillStyle: "#115511" });
smo76412v1ar.push(smo76393);
const smo76394 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["dn/2/n"]}'))
smo76394.setAttribute('id', 'smo76394');
smo76394.setStyle({ fillStyle: "#115511" });
smo76412v1ar.push(smo76394);
const smo76395 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["dn/2/n"]}'))
smo76395.setAttribute('id', 'smo76395');
smo76395.setStyle({ fillStyle: "#115511" });
smo76412v1ar.push(smo76395);
const smo76396 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n"]}'))
smo76396.setAttribute('id', 'smo76396');
smo76396.setStyle({ fillStyle: "#115511" });
smo76412v1ar.push(smo76396);
smo76412v1.addTickables(smo76412v1ar)
fmtsmo764128.joinVoices([smo76412v1]);
// create beam groups and tuplets for format grp smo76498 before formatting
const dirsmo77861 = smo75918.getStemDirection();
smo75918.setStemDirection(dirsmo77861);
smo75919.setStemDirection(dirsmo77861);
smo75920.setStemDirection(dirsmo77861);
smo75921.setStemDirection(dirsmo77861);
const smo77861 = new VF.Beam([smo75918,smo75919,smo75920,smo75921]);
const dirsmo77862 = smo75922.getStemDirection();
smo75922.setStemDirection(dirsmo77862);
smo75923.setStemDirection(dirsmo77862);
smo75924.setStemDirection(dirsmo77862);
smo75925.setStemDirection(dirsmo77862);
const smo77862 = new VF.Beam([smo75922,smo75923,smo75924,smo75925]);
const dirsmo77863 = smo75926.getStemDirection();
smo75926.setStemDirection(dirsmo77863);
smo75927.setStemDirection(dirsmo77863);
const smo77863 = new VF.Beam([smo75926,smo75927]);
const dirsmo77864 = smo75934.getStemDirection();
smo75934.setStemDirection(dirsmo77864);
smo75935.setStemDirection(dirsmo77864);
smo75936.setStemDirection(dirsmo77864);
smo75937.setStemDirection(dirsmo77864);
const smo77864 = new VF.Beam([smo75934,smo75935,smo75936,smo75937]);
const dirsmo77865 = smo75938.getStemDirection();
smo75938.setStemDirection(dirsmo77865);
smo75939.setStemDirection(dirsmo77865);
smo75940.setStemDirection(dirsmo77865);
smo75941.setStemDirection(dirsmo77865);
const smo77865 = new VF.Beam([smo75938,smo75939,smo75940,smo75941]);
 
// formatting measures in staff group smo76498
fmtsmo759578.format([smo75957v0,smo76412v0,smo76412v1], 1123);
const stavesmo75957 = new VF.Stave(103, 713.0000000000002, 1174);
stavesmo75957.setAttribute('id', 'stavesmo75957');
stavesmo75957.setBegBarType(1);
stavesmo75957.addClef('treble');
stavesmo75957.setContext(context);
stavesmo75957.draw();
smo75957v0.draw(context, stavesmo75957);
smo77861.setContext(context);
smo77861.draw();
smo77862.setContext(context);
smo77862.draw();
smo77863.setContext(context);
smo77863.draw();
smo77864.setContext(context);
smo77864.draw();
smo77865.setContext(context);
smo77865.draw();
const stavesmo76412 = new VF.Stave(103, 836.0000000000002, 1174);
stavesmo76412.setAttribute('id', 'stavesmo76412');
stavesmo76412.setBegBarType(1);
stavesmo76412.addClef('bass');
stavesmo76412.setContext(context);
stavesmo76412.draw();
smo76412v0.draw(context, stavesmo76412);
smo76412v1.draw(context, stavesmo76412);
const leftsmo76498stavesmo759571 = new VF.StaveConnector(stavesmo75957, stavesmo76412).setType(3);
leftsmo76498stavesmo759571.setContext(context).draw();
const fmtsmo760069 = new VF.Formatter();
//
// voices and notes for stave 0 9
const smo76006v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76006v0ar = [];
const smo75958 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo75958.setAttribute('id', 'smo75958');
smo76006v0ar.push(smo75958);
const smo75959 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo75959.setAttribute('id', 'smo75959');
smo76006v0ar.push(smo75959);
const smo75960 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo75960.setAttribute('id', 'smo75960');
smo76006v0ar.push(smo75960);
const smo75961 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo75961.setAttribute('id', 'smo75961');
smo76006v0ar.push(smo75961);
const smo75962 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
const smo75963 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["bn/4"],"slash":false}'))
smo75963.setAttribute('id', 'smo75963');
const ggrpsmo75962 = new VF.GraceNoteGroup([smo75963]);
ggrpsmo75962.beamNotes();
smo75962.addModifier(ggrpsmo75962, 0);
smo75962.setAttribute('id', 'smo75962');
smo76006v0ar.push(smo75962);
const smo75964 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo75964.setAttribute('id', 'smo75964');
smo76006v0ar.push(smo75964);
const smo75965 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo75965.setAttribute('id', 'smo75965');
smo76006v0ar.push(smo75965);
const smo75966 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/5/n"]}'))
smo75966.setAttribute('id', 'smo75966');
const smo759660acc = new VF.Accidental('#');
smo75966.addModifier(smo759660acc, 0);
smo76006v0ar.push(smo75966);
const smo75967 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/5/n"]}'))
smo75967.setAttribute('id', 'smo75967');
smo76006v0ar.push(smo75967);
const smo75968 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/5/n"]}'))
smo75968.setAttribute('id', 'smo75968');
const smo759680acc = new VF.Accidental('#');
smo75968.addModifier(smo759680acc, 0);
smo76006v0ar.push(smo75968);
const smo75969 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/5/n"]}'))
smo75969.setAttribute('id', 'smo75969');
smo76006v0ar.push(smo75969);
const smo75970 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/5/n"]}'))
smo75970.setAttribute('id', 'smo75970');
smo76006v0ar.push(smo75970);
const smo75971 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo75971.setAttribute('id', 'smo75971');
smo76006v0ar.push(smo75971);
const smo75972 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo75972.setAttribute('id', 'smo75972');
smo76006v0ar.push(smo75972);
const smo75973 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo75973.setAttribute('id', 'smo75973');
smo76006v0ar.push(smo75973);
const smo75974 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/5/n"]}'))
smo75974.setAttribute('id', 'smo75974');
smo76006v0ar.push(smo75974);
const smo75975 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/5/n"]}'))
smo75975.setAttribute('id', 'smo75975');
smo76006v0ar.push(smo75975);
const smo75976 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo75976.setAttribute('id', 'smo75976');
smo76006v0ar.push(smo75976);
const smo75977 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo75977.setAttribute('id', 'smo75977');
smo76006v0ar.push(smo75977);
const smo75978 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo75978.setAttribute('id', 'smo75978');
smo76006v0ar.push(smo75978);
const smo75979 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo75979.setAttribute('id', 'smo75979');
smo76006v0ar.push(smo75979);
const smo75980 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo75980.setAttribute('id', 'smo75980');
smo76006v0ar.push(smo75980);
const smo75981 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo75981.setAttribute('id', 'smo75981');
smo76006v0ar.push(smo75981);
const smo75982 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo75982.setAttribute('id', 'smo75982');
smo76006v0ar.push(smo75982);
smo76006v0.addTickables(smo76006v0ar)
fmtsmo760069.joinVoices([smo76006v0]);
const smo76006v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76006v1ar = [];
const smo75983 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1/2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo75983.setAttribute('id', 'smo75983');
smo75983.setStyle({ fillStyle: '#aaaaaa7f' });
smo76006v1ar.push(smo75983);
const smo75984 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo75984.setAttribute('id', 'smo75984');
smo75984.setStyle({ fillStyle: '#aaaaaa7f' });
smo76006v1ar.push(smo75984);
const smo75985 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo75985.setAttribute('id', 'smo75985');
smo75985.setStyle({ fillStyle: "#115511" });
smo76006v1ar.push(smo75985);
const smo75986 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo75986.setAttribute('id', 'smo75986');
smo75986.setStyle({ fillStyle: "#115511" });
smo76006v1ar.push(smo75986);
const smo75987 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo75987.setAttribute('id', 'smo75987');
smo75987.setStyle({ fillStyle: '#aaaaaa7f' });
smo76006v1ar.push(smo75987);
const smo75988 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo75988.setAttribute('id', 'smo75988');
smo75988.setStyle({ fillStyle: "#115511" });
smo76006v1ar.push(smo75988);
const smo75989 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo75989.setAttribute('id', 'smo75989');
smo75989.setStyle({ fillStyle: "#115511" });
smo76006v1ar.push(smo75989);
const smo75990 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1/2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo75990.setAttribute('id', 'smo75990');
smo75990.setStyle({ fillStyle: "#115511" });
smo76006v1ar.push(smo75990);
smo76006v1.addTickables(smo76006v1ar)
fmtsmo760069.joinVoices([smo76006v1]);
const fmtsmo764509 = new VF.Formatter();
//
// voices and notes for stave 1 9
const smo76450v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76450v0ar = [];
const smo76413 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76413.setAttribute('id', 'smo76413');
smo76450v0ar.push(smo76413);
const smo76414 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo76414.setAttribute('id', 'smo76414');
const smo764140acc = new VF.Accidental('b');
smo76414.addModifier(smo764140acc, 0);
smo76450v0ar.push(smo76414);
const smo76415 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo76415.setAttribute('id', 'smo76415');
smo76450v0ar.push(smo76415);
const smo76416 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76416.setAttribute('id', 'smo76416');
smo76450v0ar.push(smo76416);
const smo76417 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo76417.setAttribute('id', 'smo76417');
const smo764170acc = new VF.Accidental('n');
smo76417.addModifier(smo764170acc, 0);
smo76450v0ar.push(smo76417);
const smo76418 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo76418.setAttribute('id', 'smo76418');
smo76450v0ar.push(smo76418);
const smo76419 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76419.setAttribute('id', 'smo76419');
smo76450v0ar.push(smo76419);
const smo76420 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76420.setAttribute('id', 'smo76420');
smo76420.setStyle({ fillStyle: '#aaaaaa7f' });
smo76420.addModifier(new VF.Dot(), 0);
smo76450v0ar.push(smo76420);
const smo76421 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76421.setAttribute('id', 'smo76421');
smo76450v0ar.push(smo76421);
const smo76422 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76422.setAttribute('id', 'smo76422');
smo76422.setStyle({ fillStyle: '#aaaaaa7f' });
smo76422.addModifier(new VF.Dot(), 0);
smo76450v0ar.push(smo76422);
const smo76423 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76423.setAttribute('id', 'smo76423');
smo76450v0ar.push(smo76423);
const smo76424 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo76424.setAttribute('id', 'smo76424');
smo76450v0ar.push(smo76424);
const smo76425 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo76425.setAttribute('id', 'smo76425');
smo76450v0ar.push(smo76425);
const smo76426 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76426.setAttribute('id', 'smo76426');
smo76450v0ar.push(smo76426);
const smo76427 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo76427.setAttribute('id', 'smo76427');
smo76450v0ar.push(smo76427);
const smo76428 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo76428.setAttribute('id', 'smo76428');
smo76450v0ar.push(smo76428);
smo76450v0.addTickables(smo76450v0ar)
fmtsmo764509.joinVoices([smo76450v0]);
const smo76450v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76450v1ar = [];
const smo76429 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n"]}'))
smo76429.setAttribute('id', 'smo76429');
smo76429.setStyle({ fillStyle: "#115511" });
smo76450v1ar.push(smo76429);
const smo76430 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["dn/2/n"]}'))
smo76430.setAttribute('id', 'smo76430');
smo76430.setStyle({ fillStyle: "#115511" });
smo76450v1ar.push(smo76430);
const smo76431 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo76431.setAttribute('id', 'smo76431');
smo76431.setStyle({ fillStyle: "#115511" });
smo76450v1ar.push(smo76431);
const smo76432 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo76432.setAttribute('id', 'smo76432');
smo76432.setStyle({ fillStyle: "#115511" });
smo76450v1ar.push(smo76432);
const smo76433 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo76433.setAttribute('id', 'smo76433');
smo76433.setStyle({ fillStyle: "#115511" });
smo76450v1ar.push(smo76433);
const smo76434 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo76434.setAttribute('id', 'smo76434');
smo76434.setStyle({ fillStyle: "#115511" });
smo76450v1ar.push(smo76434);
smo76450v1.addTickables(smo76450v1ar)
fmtsmo764509.joinVoices([smo76450v1]);
// create beam groups and tuplets for format grp smo76498 before formatting
const dirsmo77880 = smo75958.getStemDirection();
smo75958.setStemDirection(dirsmo77880);
smo75959.setStemDirection(dirsmo77880);
const smo77880 = new VF.Beam([smo75958,smo75959]);
const dirsmo77881 = smo75964.getStemDirection();
smo75964.setStemDirection(dirsmo77881);
smo75965.setStemDirection(dirsmo77881);
smo75966.setStemDirection(dirsmo77881);
smo75967.setStemDirection(dirsmo77881);
const smo77881 = new VF.Beam([smo75964,smo75965,smo75966,smo75967]);
const dirsmo77882 = smo75968.getStemDirection();
smo75968.setStemDirection(dirsmo77882);
smo75969.setStemDirection(dirsmo77882);
const smo77882 = new VF.Beam([smo75968,smo75969]);
const dirsmo77883 = smo75972.getStemDirection();
smo75972.setStemDirection(dirsmo77883);
smo75973.setStemDirection(dirsmo77883);
const smo77883 = new VF.Beam([smo75972,smo75973]);
const dirsmo77884 = smo75974.getStemDirection();
smo75974.setStemDirection(dirsmo77884);
smo75975.setStemDirection(dirsmo77884);
smo75976.setStemDirection(dirsmo77884);
smo75977.setStemDirection(dirsmo77884);
const smo77884 = new VF.Beam([smo75974,smo75975,smo75976,smo75977]);
const dirsmo77885 = smo75978.getStemDirection();
smo75978.setStemDirection(dirsmo77885);
smo75979.setStemDirection(dirsmo77885);
const smo77885 = new VF.Beam([smo75978,smo75979]);
 
// formatting measures in staff group smo76498
fmtsmo760069.format([smo76006v0,smo76006v1,smo76450v0,smo76450v1], 1123);
const stavesmo76006 = new VF.Stave(103, 1000.0000000000002, 1174);
stavesmo76006.setAttribute('id', 'stavesmo76006');
stavesmo76006.setBegBarType(1);
stavesmo76006.addClef('treble');
stavesmo76006.setContext(context);
stavesmo76006.draw();
smo76006v0.draw(context, stavesmo76006);
smo76006v1.draw(context, stavesmo76006);
smo77880.setContext(context);
smo77880.draw();
smo77881.setContext(context);
smo77881.draw();
smo77882.setContext(context);
smo77882.draw();
smo77883.setContext(context);
smo77883.draw();
smo77884.setContext(context);
smo77884.draw();
smo77885.setContext(context);
smo77885.draw();
const stavesmo76450 = new VF.Stave(103, 1149.0000000000002, 1174);
stavesmo76450.setAttribute('id', 'stavesmo76450');
stavesmo76450.setBegBarType(1);
stavesmo76450.addClef('bass');
stavesmo76450.setContext(context);
stavesmo76450.draw();
smo76450v0.draw(context, stavesmo76450);
smo76450v1.draw(context, stavesmo76450);
const leftsmo76498stavesmo760061 = new VF.StaveConnector(stavesmo76006, stavesmo76450).setType(3);
leftsmo76498stavesmo760061.setContext(context).draw();
const fmtsmo7605410 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo76054v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76054v0ar = [];
const smo76007 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo76007.setAttribute('id', 'smo76007');
smo76054v0ar.push(smo76007);
const smo76008 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo76008.setAttribute('id', 'smo76008');
smo76054v0ar.push(smo76008);
const smo76009 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/5/n"]}'))
smo76009.setAttribute('id', 'smo76009');
const smo760090acc = new VF.Accidental('#');
smo76009.addModifier(smo760090acc, 0);
smo76054v0ar.push(smo76009);
const smo76010 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/5/n"]}'))
smo76010.setAttribute('id', 'smo76010');
smo76054v0ar.push(smo76010);
const smo76011 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/5/n"]}'))
smo76011.setAttribute('id', 'smo76011');
const smo760110acc = new VF.Accidental('#');
smo76011.addModifier(smo760110acc, 0);
smo76054v0ar.push(smo76011);
const smo76012 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/5/n"]}'))
smo76012.setAttribute('id', 'smo76012');
smo76054v0ar.push(smo76012);
const smo76013 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/5/n"]}'))
smo76013.setAttribute('id', 'smo76013');
smo76054v0ar.push(smo76013);
const smo76014 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo76014.setAttribute('id', 'smo76014');
smo76054v0ar.push(smo76014);
const smo76015 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo76015.setAttribute('id', 'smo76015');
smo76054v0ar.push(smo76015);
const smo76016 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo76016.setAttribute('id', 'smo76016');
smo76054v0ar.push(smo76016);
const smo76017 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/5/n"]}'))
smo76017.setAttribute('id', 'smo76017');
smo76054v0ar.push(smo76017);
const smo76018 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/5/n"]}'))
smo76018.setAttribute('id', 'smo76018');
smo76054v0ar.push(smo76018);
const smo76019 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo76019.setAttribute('id', 'smo76019');
smo76054v0ar.push(smo76019);
const smo76020 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo76020.setAttribute('id', 'smo76020');
smo76054v0ar.push(smo76020);
const smo76021 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo76021.setAttribute('id', 'smo76021');
smo76054v0ar.push(smo76021);
const smo76022 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo76022.setAttribute('id', 'smo76022');
smo76054v0ar.push(smo76022);
const smo76023 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo76023.setAttribute('id', 'smo76023');
smo76054v0ar.push(smo76023);
const smo76024 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo76024.setAttribute('id', 'smo76024');
smo76054v0ar.push(smo76024);
const smo76025 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo76025.setAttribute('id', 'smo76025');
smo76054v0ar.push(smo76025);
const smo76026 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo76026.setAttribute('id', 'smo76026');
smo76054v0ar.push(smo76026);
const smo76027 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo76027.setAttribute('id', 'smo76027');
smo76054v0ar.push(smo76027);
const smo76028 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo76028.setAttribute('id', 'smo76028');
smo76054v0ar.push(smo76028);
const smo76029 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo76029.setAttribute('id', 'smo76029');
smo76054v0ar.push(smo76029);
const smo76030 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo76030.setAttribute('id', 'smo76030');
smo76054v0ar.push(smo76030);
const smo76031 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo76031.setAttribute('id', 'smo76031');
smo76054v0ar.push(smo76031);
smo76054v0.addTickables(smo76054v0ar)
fmtsmo7605410.joinVoices([smo76054v0]);
const smo76054v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76054v1ar = [];
const smo76032 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo76032.setAttribute('id', 'smo76032');
smo76032.setStyle({ fillStyle: '#aaaaaa7f' });
smo76054v1ar.push(smo76032);
const smo76033 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo76033.setAttribute('id', 'smo76033');
smo76033.setStyle({ fillStyle: "#115511" });
smo76054v1ar.push(smo76033);
const smo76034 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo76034.setAttribute('id', 'smo76034');
smo76034.setStyle({ fillStyle: "#115511" });
smo76054v1ar.push(smo76034);
const smo76035 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo76035.setAttribute('id', 'smo76035');
smo76035.setStyle({ fillStyle: '#aaaaaa7f' });
smo76054v1ar.push(smo76035);
const smo76036 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo76036.setAttribute('id', 'smo76036');
smo76036.setStyle({ fillStyle: "#115511" });
smo76054v1ar.push(smo76036);
const smo76037 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo76037.setAttribute('id', 'smo76037');
smo76037.setStyle({ fillStyle: "#115511" });
smo76054v1ar.push(smo76037);
const smo76038 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1/2d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo76038.setAttribute('id', 'smo76038');
smo76038.setStyle({ fillStyle: "#115511" });
smo76038.addModifier(new VF.Dot(), 0);
smo76054v1ar.push(smo76038);
smo76054v1.addTickables(smo76054v1ar)
fmtsmo7605410.joinVoices([smo76054v1]);
const fmtsmo7648410 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo76484v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76484v0ar = [];
const smo76451 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76451.setAttribute('id', 'smo76451');
smo76484v0ar.push(smo76451);
const smo76452 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76452.setAttribute('id', 'smo76452');
smo76452.setStyle({ fillStyle: '#aaaaaa7f' });
smo76452.addModifier(new VF.Dot(), 0);
smo76484v0ar.push(smo76452);
const smo76453 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76453.setAttribute('id', 'smo76453');
smo76484v0ar.push(smo76453);
const smo76454 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76454.setAttribute('id', 'smo76454');
smo76454.setStyle({ fillStyle: '#aaaaaa7f' });
smo76454.addModifier(new VF.Dot(), 0);
smo76484v0ar.push(smo76454);
const smo76455 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76455.setAttribute('id', 'smo76455');
smo76484v0ar.push(smo76455);
const smo76456 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo76456.setAttribute('id', 'smo76456');
smo76484v0ar.push(smo76456);
const smo76457 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo76457.setAttribute('id', 'smo76457');
smo76484v0ar.push(smo76457);
const smo76458 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76458.setAttribute('id', 'smo76458');
smo76484v0ar.push(smo76458);
const smo76459 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo76459.setAttribute('id', 'smo76459');
smo76484v0ar.push(smo76459);
const smo76460 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo76460.setAttribute('id', 'smo76460');
smo76484v0ar.push(smo76460);
const smo76461 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76461.setAttribute('id', 'smo76461');
smo76484v0ar.push(smo76461);
const smo76462 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo76462.setAttribute('id', 'smo76462');
smo76484v0ar.push(smo76462);
const smo76463 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo76463.setAttribute('id', 'smo76463');
smo76484v0ar.push(smo76463);
smo76484v0.addTickables(smo76484v0ar)
fmtsmo7648410.joinVoices([smo76484v0]);
const smo76484v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76484v1ar = [];
const smo76464 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo76464.setAttribute('id', 'smo76464');
smo76464.setStyle({ fillStyle: "#115511" });
smo76484v1ar.push(smo76464);
const smo76465 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo76465.setAttribute('id', 'smo76465');
smo76465.setStyle({ fillStyle: "#115511" });
smo76484v1ar.push(smo76465);
const smo76466 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo76466.setAttribute('id', 'smo76466');
smo76466.setStyle({ fillStyle: "#115511" });
smo76484v1ar.push(smo76466);
const smo76467 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/1/n"]}'))
smo76467.setAttribute('id', 'smo76467');
smo76467.setStyle({ fillStyle: "#115511" });
smo76484v1ar.push(smo76467);
const smo76468 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo76468.setAttribute('id', 'smo76468');
smo76468.setStyle({ fillStyle: "#115511" });
smo76484v1ar.push(smo76468);
smo76484v1.addTickables(smo76484v1ar)
fmtsmo7648410.joinVoices([smo76484v1]);
// create beam groups and tuplets for format grp smo76498 before formatting
const dirsmo77899 = smo76007.getStemDirection();
smo76007.setStemDirection(dirsmo77899);
smo76008.setStemDirection(dirsmo77899);
smo76009.setStemDirection(dirsmo77899);
smo76010.setStemDirection(dirsmo77899);
const smo77899 = new VF.Beam([smo76007,smo76008,smo76009,smo76010]);
const dirsmo77900 = smo76011.getStemDirection();
smo76011.setStemDirection(dirsmo77900);
smo76012.setStemDirection(dirsmo77900);
const smo77900 = new VF.Beam([smo76011,smo76012]);
const dirsmo77901 = smo76015.getStemDirection();
smo76015.setStemDirection(dirsmo77901);
smo76016.setStemDirection(dirsmo77901);
const smo77901 = new VF.Beam([smo76015,smo76016]);
const dirsmo77902 = smo76017.getStemDirection();
smo76017.setStemDirection(dirsmo77902);
smo76018.setStemDirection(dirsmo77902);
smo76019.setStemDirection(dirsmo77902);
smo76020.setStemDirection(dirsmo77902);
const smo77902 = new VF.Beam([smo76017,smo76018,smo76019,smo76020]);
const dirsmo77903 = smo76021.getStemDirection();
smo76021.setStemDirection(dirsmo77903);
smo76022.setStemDirection(dirsmo77903);
const smo77903 = new VF.Beam([smo76021,smo76022]);
const dirsmo77904 = smo76025.getStemDirection();
smo76025.setStemDirection(dirsmo77904);
smo76026.setStemDirection(dirsmo77904);
const smo77904 = new VF.Beam([smo76025,smo76026]);
const dirsmo77905 = smo76027.getStemDirection();
smo76027.setStemDirection(dirsmo77905);
smo76028.setStemDirection(dirsmo77905);
const smo77905 = new VF.Beam([smo76027,smo76028]);
 
// formatting measures in staff group smo76498
fmtsmo7605410.format([smo76054v0,smo76054v1,smo76484v0,smo76484v1], 789);
const stavesmo76054 = new VF.Stave(103, 1323.0000000000002, 848);
stavesmo76054.setAttribute('id', 'stavesmo76054');
stavesmo76054.setBegBarType(1);
stavesmo76054.setEndBarType(3);
stavesmo76054.addClef('treble');
stavesmo76054.setContext(context);
stavesmo76054.draw();
smo76054v0.draw(context, stavesmo76054);
smo76054v1.draw(context, stavesmo76054);
smo77899.setContext(context);
smo77899.draw();
smo77900.setContext(context);
smo77900.draw();
smo77901.setContext(context);
smo77901.draw();
smo77902.setContext(context);
smo77902.draw();
smo77903.setContext(context);
smo77903.draw();
smo77904.setContext(context);
smo77904.draw();
smo77905.setContext(context);
smo77905.draw();
const stavesmo76484 = new VF.Stave(103, 1466.0000000000002, 848);
stavesmo76484.setAttribute('id', 'stavesmo76484');
stavesmo76484.setBegBarType(1);
stavesmo76484.setEndBarType(3);
stavesmo76484.addClef('bass');
stavesmo76484.setContext(context);
stavesmo76484.draw();
smo76484v0.draw(context, stavesmo76484);
smo76484v1.draw(context, stavesmo76484);
const leftsmo76498stavesmo760541 = new VF.StaveConnector(stavesmo76054, stavesmo76484).setType(3);
leftsmo76498stavesmo760541.setContext(context).draw();
// modifier from 0-7-0-9 to 0-7-0-10
const smo78046 = new VF.StaveTie({ first_note: smo75891, last_note: smo75892, 
          firstNote: smo75891, lastNote: smo75892, first_indices: [0], last_indices: [0]});
smo78046.setContext(context).draw();
// modifier from 0-7-0-12 to 0-7-0-13
const smo78047 = new VF.StaveTie({ first_note: smo75894, last_note: smo75896, 
          firstNote: smo75894, lastNote: smo75896, first_indices: [0], last_indices: [0]});
smo78047.setContext(context).draw();
// modifier from 0-7-0-15 to 0-7-0-16
const smo78048 = new VF.StaveTie({ first_note: smo75898, last_note: smo75900, 
          firstNote: smo75898, lastNote: smo75900, first_indices: [0], last_indices: [0]});
smo78048.setContext(context).draw();
// modifier from 0-8-0-9 to 0-8-0-10
const smo78049 = new VF.StaveTie({ first_note: smo75927, last_note: smo75928, 
          firstNote: smo75927, lastNote: smo75928, first_indices: [0], last_indices: [0]});
smo78049.setContext(context).draw();
// modifier from 0-8-0-12 to 0-8-0-13
const smo78050 = new VF.StaveTie({ first_note: smo75930, last_note: smo75932, 
          firstNote: smo75930, lastNote: smo75932, first_indices: [0], last_indices: [0]});
smo78050.setContext(context).draw();
// modifier from 0-9-0-1 to 0-9-0-2
const smo78051 = new VF.StaveTie({ first_note: smo75959, last_note: smo75960, 
          firstNote: smo75959, lastNote: smo75960, first_indices: [0], last_indices: [0]});
smo78051.setContext(context).draw();
// modifier from 0-9-0-10 to 0-9-0-11
const smo78052 = new VF.StaveTie({ first_note: smo75969, last_note: smo75970, 
          firstNote: smo75969, lastNote: smo75970, first_indices: [0], last_indices: [0]});
smo78052.setContext(context).draw();
// modifier from 0-9-0-20 to 0-9-0-21
const smo78053 = new VF.StaveTie({ first_note: smo75979, last_note: smo75980, 
          firstNote: smo75979, lastNote: smo75980, first_indices: [0], last_indices: [0]});
smo78053.setContext(context).draw();
// modifier from 0-10-0-5 to 0-10-0-6
const smo78054 = new VF.StaveTie({ first_note: smo76012, last_note: smo76013, 
          firstNote: smo76012, lastNote: smo76013, first_indices: [0], last_indices: [0]});
smo78054.setContext(context).draw();
// modifier from 0-10-0-15 to 0-10-0-16
const smo78055 = new VF.StaveTie({ first_note: smo76022, last_note: smo76023, 
          firstNote: smo76022, lastNote: smo76023, first_indices: [0], last_indices: [0]});
smo78055.setContext(context).draw();
// modifier from 0-10-0-21 to 0-10-0-22
const smo78056 = new VF.StaveTie({ first_note: smo76028, last_note: smo76029, 
          firstNote: smo76028, lastNote: smo76029, first_indices: [0], last_indices: [0]});
smo78056.setContext(context).draw();
// modifier from 0-6-0-1 to 0-7-0-10
const smo78057 = new VF.Curve(smo75842, null, JSON.parse('{"thickness":2,"xShift":-5,"yShift":20,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":2,"positionEnd":1}'));
smo78057.setContext(context).draw();
// modifier from 0-6-0-1 to 0-7-0-10
const smo78058 = new VF.Curve(null, smo75892, JSON.parse('{"thickness":2,"xShift":-5,"yShift":20,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":2,"positionEnd":1}'));
smo78058.setContext(context).draw();
// modifier from 0-8-0-0 to 0-8-0-10
const smo78059 = new VF.Curve(smo75918, smo75928, JSON.parse('{"thickness":2,"xShift":0,"yShift":10,"cps":[{"x":0,"y":45},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo78059.setContext(context).draw();
// modifier from 0-8-0-15 to 0-9-0-2
const smo78060 = new VF.Curve(smo75934, null, JSON.parse('{"thickness":2,"xShift":-5,"yShift":10,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":1,"positionEnd":1}'));
smo78060.setContext(context).draw();
// modifier from 0-8-0-15 to 0-9-0-2
const smo78061 = new VF.Curve(null, smo75960, JSON.parse('{"thickness":2,"xShift":-5,"yShift":10,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":1,"positionEnd":1}'));
smo78061.setContext(context).draw();
// modifier from 0-9-0-5 to 0-9-0-11
const smo78062 = new VF.Curve(smo75964, smo75970, JSON.parse('{"thickness":2,"xShift":0,"yShift":20,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":2,"positionEnd":2}'));
smo78062.setContext(context).draw();
// modifier from 0-9-0-13 to 0-9-0-21
const smo78063 = new VF.Curve(smo75972, smo75980, JSON.parse('{"thickness":2,"xShift":0,"yShift":13,"cps":[{"x":0,"y":30},{"x":0,"y":30}],"invert":true,"position":2,"positionEnd":2}'));
smo78063.setContext(context).draw();
}