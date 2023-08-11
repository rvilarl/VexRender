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
const fmtsmo24729760 = new VF.Formatter();
//
// voices and notes for stave 0 60
const smo247297v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247297v0ar = [];
const smo247276 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo247276'] = smo247276;
smo247276.setAttribute('id', 'smo247276');
const smo2472760acc = new VF.Accidental('n');
smo247276.addModifier(smo2472760acc, 0);
smo247297v0ar.push(smo247276);
const smo247277 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/5/n"]}'))
noteHash['smo247277'] = smo247277;
smo247277.setAttribute('id', 'smo247277');
const smo2472770acc = new VF.Accidental('b');
smo247277.addModifier(smo2472770acc, 0);
smo247297v0ar.push(smo247277);
const smo247278 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
noteHash['smo247278'] = smo247278;
smo247278.setAttribute('id', 'smo247278');
const smo2472780acc = new VF.Accidental('n');
smo247278.addModifier(smo2472780acc, 0);
smo247297v0ar.push(smo247278);
const smo247279 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/6/n"]}'))
noteHash['smo247279'] = smo247279;
smo247279.setAttribute('id', 'smo247279');
const smo2472790acc = new VF.Accidental('n');
smo247279.addModifier(smo2472790acc, 0);
smo247297v0ar.push(smo247279);
const smo247280 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/6/n"]}'))
noteHash['smo247280'] = smo247280;
smo247280.setAttribute('id', 'smo247280');
smo247297v0ar.push(smo247280);
const smo247281 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/6/n"]}'))
noteHash['smo247281'] = smo247281;
smo247281.setAttribute('id', 'smo247281');
smo247297v0ar.push(smo247281);
const smo247282 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
noteHash['smo247282'] = smo247282;
smo247282.setAttribute('id', 'smo247282');
smo247297v0ar.push(smo247282);
const smo247283 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/6/n"]}'))
noteHash['smo247283'] = smo247283;
smo247283.setAttribute('id', 'smo247283');
smo247297v0ar.push(smo247283);
smo247297v0.addTickables(smo247297v0ar)
fmtsmo24729760.joinVoices([smo247297v0]);
const fmtsmo25004360 = new VF.Formatter();
//
// voices and notes for stave 1 60
const smo250043v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250043v0ar = [];
const smo250026 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo250026'] = smo250026;
smo250026.setAttribute('id', 'smo250026');
const smo2500260acc = new VF.Accidental('n');
smo250026.addModifier(smo2500260acc, 0);
smo250043v0ar.push(smo250026);
const smo250027 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n","dn/4/n","en/4/n"]}'))
noteHash['smo250027'] = smo250027;
smo250027.setAttribute('id', 'smo250027');
const smo2500270acc = new VF.Accidental('n');
smo250027.addModifier(smo2500270acc, 0);
const smo2500272acc = new VF.Accidental('n');
smo250027.addModifier(smo2500272acc, 2);
smo250043v0ar.push(smo250027);
const smo250028 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/3/n"]}'))
noteHash['smo250028'] = smo250028;
smo250028.setAttribute('id', 'smo250028');
const smo2500280acc = new VF.Accidental('b');
smo250028.addModifier(smo2500280acc, 0);
smo250043v0ar.push(smo250028);
const smo250029 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n","dn/4/n","en/4/n"]}'))
noteHash['smo250029'] = smo250029;
smo250029.setAttribute('id', 'smo250029');
smo250043v0ar.push(smo250029);
smo250043v0.addTickables(smo250043v0ar)
fmtsmo25004360.joinVoices([smo250043v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251491 = smo247276.getStemDirection();
smo247276.setStemDirection(dirsmo251491);
smo247277.setStemDirection(dirsmo251491);
smo247278.setStemDirection(dirsmo251491);
smo247279.setStemDirection(dirsmo251491);
const smo251491 = new VF.Beam([smo247276,smo247277,smo247278,smo247279]);
const dirsmo251492 = smo247280.getStemDirection();
smo247280.setStemDirection(dirsmo251492);
smo247281.setStemDirection(dirsmo251492);
smo247282.setStemDirection(dirsmo251492);
smo247283.setStemDirection(dirsmo251492);
const smo251492 = new VF.Beam([smo247280,smo247281,smo247282,smo247283]);
const dirsmo251495 = smo250026.getStemDirection();
smo250026.setStemDirection(dirsmo251495);
smo250027.setStemDirection(dirsmo251495);
const smo251495 = new VF.Beam([smo250026,smo250027]);
const dirsmo251496 = smo250028.getStemDirection();
smo250028.setStemDirection(dirsmo251496);
smo250029.setStemDirection(dirsmo251496);
const smo251496 = new VF.Beam([smo250028,smo250029]);
 
// formatting measures in staff group smo245304
fmtsmo24729760.format([smo247297v0,smo250043v0], 242);
const stavesmo247297 = new VF.Stave(73, 396, 328);
stavesmo247297.setAttribute('id', 'stavesmo247297');
stavesmo247297.setBegBarType(1);
stavesmo247297.addClef('treble');
const keysmo247297 = new VF.KeySignature('Bb');
keysmo247297.addToStave(stavesmo247297);
stavesmo247297.setContext(context);
stavesmo247297.draw();
smo247297v0.draw(context, stavesmo247297);
smo251491.setContext(context);
smo251491.draw();
smo251492.setContext(context);
smo251492.draw();
const stavesmo250043 = new VF.Stave(73, 556, 328);
stavesmo250043.setAttribute('id', 'stavesmo250043');
stavesmo250043.setBegBarType(1);
stavesmo250043.addClef('bass');
const keysmo250043 = new VF.KeySignature('Bb');
keysmo250043.addToStave(stavesmo250043);
stavesmo250043.setContext(context);
stavesmo250043.draw();
smo250043v0.draw(context, stavesmo250043);
smo251495.setContext(context);
smo251495.draw();
smo251496.setContext(context);
smo251496.draw();
const leftsmo245304stavesmo2472971 = new VF.StaveConnector(stavesmo247297, stavesmo250043).setType(3);
leftsmo245304stavesmo2472971.setContext(context).draw();
const fmtsmo24731361 = new VF.Formatter();
//
// voices and notes for stave 0 61
const smo247313v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247313v0ar = [];
const smo247298 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo247298'] = smo247298;
smo247298.setAttribute('id', 'smo247298');
smo247313v0ar.push(smo247298);
const smo247299 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
noteHash['smo247299'] = smo247299;
smo247299.setAttribute('id', 'smo247299');
smo247313v0ar.push(smo247299);
smo247313v0.addTickables(smo247313v0ar)
fmtsmo24731361.joinVoices([smo247313v0]);
const fmtsmo25006061 = new VF.Formatter();
//
// voices and notes for stave 1 61
const smo250060v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250060v0ar = [];
const smo250044 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo250044'] = smo250044;
smo250044.setAttribute('id', 'smo250044');
const smo2500442acc = new VF.Accidental('n');
smo250044.addModifier(smo2500442acc, 2);
smo250060v0ar.push(smo250044);
const smo250045 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo250045'] = smo250045;
smo250045.setAttribute('id', 'smo250045');
smo250060v0ar.push(smo250045);
const smo250046 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo250046'] = smo250046;
smo250046.setAttribute('id', 'smo250046');
smo250060v0ar.push(smo250046);
smo250060v0.addTickables(smo250060v0ar)
fmtsmo25006061.joinVoices([smo250060v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251501 = smo250045.getStemDirection();
smo250045.setStemDirection(dirsmo251501);
smo250046.setStemDirection(dirsmo251501);
const smo251501 = new VF.Beam([smo250045,smo250046]);
 
// formatting measures in staff group smo245304
fmtsmo24731361.format([smo247313v0,smo250060v0], 274);
const stavesmo247313 = new VF.Stave(401, 396, 288);
stavesmo247313.setAttribute('id', 'stavesmo247313');
stavesmo247313.setBegBarType(VF.Barline.type.NONE);
stavesmo247313.setContext(context);
stavesmo247313.draw();
smo247313v0.draw(context, stavesmo247313);
const stavesmo250060 = new VF.Stave(401, 556, 288);
stavesmo250060.setAttribute('id', 'stavesmo250060');
stavesmo250060.setBegBarType(VF.Barline.type.NONE);
stavesmo250060.setContext(context);
stavesmo250060.draw();
smo250060v0.draw(context, stavesmo250060);
smo251501.setContext(context);
smo251501.draw();
const fmtsmo24733262 = new VF.Formatter();
//
// voices and notes for stave 0 62
const smo247332v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247332v0ar = [];
const smo247314 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n"]}'))
noteHash['smo247314'] = smo247314;
smo247314.setAttribute('id', 'smo247314');
smo247332v0ar.push(smo247314);
const smo247315 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/5/n"]}'))
noteHash['smo247315'] = smo247315;
smo247315.setAttribute('id', 'smo247315');
const smo2473150acc = new VF.Accidental('b');
smo247315.addModifier(smo2473150acc, 0);
smo247332v0ar.push(smo247315);
const smo247316 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n"]}'))
noteHash['smo247316'] = smo247316;
smo247316.setAttribute('id', 'smo247316');
const smo2473161acc = new VF.Accidental('n');
smo247316.addModifier(smo2473161acc, 1);
smo247332v0ar.push(smo247316);
const smo247317 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n"]}'))
noteHash['smo247317'] = smo247317;
smo247317.setAttribute('id', 'smo247317');
smo247332v0ar.push(smo247317);
const smo247318 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n","cn/6/n"]}'))
noteHash['smo247318'] = smo247318;
smo247318.setAttribute('id', 'smo247318');
smo247332v0ar.push(smo247318);
smo247332v0.addTickables(smo247332v0ar)
fmtsmo24733262.joinVoices([smo247332v0]);
const fmtsmo25007862 = new VF.Formatter();
//
// voices and notes for stave 1 62
const smo250078v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250078v0ar = [];
const smo250061 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
noteHash['smo250061'] = smo250061;
smo250061.setAttribute('id', 'smo250061');
smo250078v0ar.push(smo250061);
const smo250062 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo250062'] = smo250062;
smo250062.setAttribute('id', 'smo250062');
smo250078v0ar.push(smo250062);
const smo250063 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo250063'] = smo250063;
smo250063.setAttribute('id', 'smo250063');
smo250078v0ar.push(smo250063);
const smo250064 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo250064'] = smo250064;
smo250064.setAttribute('id', 'smo250064');
smo250078v0ar.push(smo250064);
smo250078v0.addTickables(smo250078v0ar)
fmtsmo25007862.joinVoices([smo250078v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251504 = smo247314.getStemDirection();
smo247314.setStemDirection(dirsmo251504);
smo247315.setStemDirection(dirsmo251504);
smo247316.setStemDirection(dirsmo251504);
const smo251504 = new VF.Beam([smo247314,smo247315,smo247316]);
const dirsmo251505 = smo247317.getStemDirection();
smo247317.setStemDirection(dirsmo251505);
smo247318.setStemDirection(dirsmo251505);
const smo251505 = new VF.Beam([smo247317,smo247318]);
const dirsmo251508 = smo250061.getStemDirection();
smo250061.setStemDirection(dirsmo251508);
smo250062.setStemDirection(dirsmo251508);
const smo251508 = new VF.Beam([smo250061,smo250062]);
const dirsmo251509 = smo250063.getStemDirection();
smo250063.setStemDirection(dirsmo251509);
smo250064.setStemDirection(dirsmo251509);
const smo251509 = new VF.Beam([smo250063,smo250064]);
 
// formatting measures in staff group smo245304
fmtsmo24733262.format([smo247332v0,smo250078v0], 274);
const stavesmo247332 = new VF.Stave(689, 396, 288);
stavesmo247332.setAttribute('id', 'stavesmo247332');
stavesmo247332.setBegBarType(VF.Barline.type.NONE);
stavesmo247332.setContext(context);
stavesmo247332.draw();
smo247332v0.draw(context, stavesmo247332);
smo251504.setContext(context);
smo251504.draw();
smo251505.setContext(context);
smo251505.draw();
const stavesmo250078 = new VF.Stave(689, 556, 288);
stavesmo250078.setAttribute('id', 'stavesmo250078');
stavesmo250078.setBegBarType(VF.Barline.type.NONE);
stavesmo250078.setContext(context);
stavesmo250078.draw();
smo250078v0.draw(context, stavesmo250078);
smo251508.setContext(context);
smo251508.draw();
smo251509.setContext(context);
smo251509.draw();
const fmtsmo24735363 = new VF.Formatter();
//
// voices and notes for stave 0 63
const smo247353v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247353v0ar = [];
const smo247333 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","bb/5/n","dn/6/n"]}'))
noteHash['smo247333'] = smo247333;
smo247333.setAttribute('id', 'smo247333');
smo247353v0ar.push(smo247333);
smo247353v0.addTickables(smo247353v0ar)
fmtsmo24735363.joinVoices([smo247353v0]);
const smo247353v1 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247353v1ar = [];
const smo247334 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo247334'] = smo247334;
smo247334.setAttribute('id', 'smo247334');
smo247334.setStyle({ fillStyle: "#115511" });
smo247353v1ar.push(smo247334);
const smo247335 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo247335'] = smo247335;
smo247335.setAttribute('id', 'smo247335');
smo247335.setStyle({ fillStyle: "#115511" });
smo247353v1ar.push(smo247335);
const smo247336 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo247336'] = smo247336;
smo247336.setAttribute('id', 'smo247336');
smo247336.setStyle({ fillStyle: "#115511" });
smo247353v1ar.push(smo247336);
const smo247337 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo247337'] = smo247337;
smo247337.setAttribute('id', 'smo247337');
smo247337.setStyle({ fillStyle: "#115511" });
smo247353v1ar.push(smo247337);
const smo247338 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo247338'] = smo247338;
smo247338.setAttribute('id', 'smo247338');
smo247338.setStyle({ fillStyle: "#115511" });
smo247353v1ar.push(smo247338);
const smo247339 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo247339'] = smo247339;
smo247339.setAttribute('id', 'smo247339');
smo247339.setStyle({ fillStyle: "#115511" });
smo247353v1ar.push(smo247339);
smo247353v1.addTickables(smo247353v1ar)
fmtsmo24735363.joinVoices([smo247353v1]);
const fmtsmo25009663 = new VF.Formatter();
//
// voices and notes for stave 1 63
const smo250096v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250096v0ar = [];
const smo250079 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n"]}'))
noteHash['smo250079'] = smo250079;
smo250079.setAttribute('id', 'smo250079');
smo250096v0ar.push(smo250079);
const smo250080 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo250080'] = smo250080;
smo250080.setAttribute('id', 'smo250080');
smo250096v0ar.push(smo250080);
const smo250081 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo250081'] = smo250081;
smo250081.setAttribute('id', 'smo250081');
smo250096v0ar.push(smo250081);
const smo250082 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo250082'] = smo250082;
smo250082.setAttribute('id', 'smo250082');
smo250096v0ar.push(smo250082);
smo250096v0.addTickables(smo250096v0ar)
fmtsmo25009663.joinVoices([smo250096v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251512 = smo247335.getStemDirection();
smo247335.setStemDirection(dirsmo251512);
smo247336.setStemDirection(dirsmo251512);
const smo251512 = new VF.Beam([smo247335,smo247336]);
const dirsmo251513 = smo247337.getStemDirection();
smo247337.setStemDirection(dirsmo251513);
smo247338.setStemDirection(dirsmo251513);
smo247339.setStemDirection(dirsmo251513);
const smo251513 = new VF.Beam([smo247337,smo247338,smo247339]);
const dirsmo251516 = smo250079.getStemDirection();
smo250079.setStemDirection(dirsmo251516);
smo250080.setStemDirection(dirsmo251516);
const smo251516 = new VF.Beam([smo250079,smo250080]);
const dirsmo251517 = smo250081.getStemDirection();
smo250081.setStemDirection(dirsmo251517);
smo250082.setStemDirection(dirsmo251517);
const smo251517 = new VF.Beam([smo250081,smo250082]);
 
// formatting measures in staff group smo245304
fmtsmo24735363.format([smo247353v0,smo247353v1,smo250096v0], 274);
const stavesmo247353 = new VF.Stave(977, 396, 288);
stavesmo247353.setAttribute('id', 'stavesmo247353');
stavesmo247353.setBegBarType(VF.Barline.type.NONE);
stavesmo247353.setContext(context);
stavesmo247353.draw();
smo247353v0.draw(context, stavesmo247353);
smo247353v1.draw(context, stavesmo247353);
smo251512.setContext(context);
smo251512.draw();
smo251513.setContext(context);
smo251513.draw();
const stavesmo250096 = new VF.Stave(977, 556, 288);
stavesmo250096.setAttribute('id', 'stavesmo250096');
stavesmo250096.setBegBarType(VF.Barline.type.NONE);
stavesmo250096.setContext(context);
stavesmo250096.draw();
smo250096v0.draw(context, stavesmo250096);
smo251516.setContext(context);
smo251516.draw();
smo251517.setContext(context);
smo251517.draw();
const fmtsmo24737264 = new VF.Formatter();
//
// voices and notes for stave 0 64
const smo247372v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247372v0ar = [];
const smo247354 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n"]}'))
noteHash['smo247354'] = smo247354;
smo247354.setAttribute('id', 'smo247354');
smo247372v0ar.push(smo247354);
const smo247355 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo247355'] = smo247355;
smo247355.setAttribute('id', 'smo247355');
const smo2473550acc = new VF.Accidental('n');
smo247355.addModifier(smo2473550acc, 0);
smo247372v0ar.push(smo247355);
const smo247356 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n"]}'))
noteHash['smo247356'] = smo247356;
smo247356.setAttribute('id', 'smo247356');
smo247372v0ar.push(smo247356);
const smo247357 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n"]}'))
noteHash['smo247357'] = smo247357;
smo247357.setAttribute('id', 'smo247357');
smo247372v0ar.push(smo247357);
const smo247358 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","an/5/n"]}'))
noteHash['smo247358'] = smo247358;
smo247358.setAttribute('id', 'smo247358');
smo247372v0ar.push(smo247358);
smo247372v0.addTickables(smo247372v0ar)
fmtsmo24737264.joinVoices([smo247372v0]);
const fmtsmo25011464 = new VF.Formatter();
//
// voices and notes for stave 1 64
const smo250114v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250114v0ar = [];
const smo250097 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
noteHash['smo250097'] = smo250097;
smo250097.setAttribute('id', 'smo250097');
smo250114v0ar.push(smo250097);
const smo250098 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo250098'] = smo250098;
smo250098.setAttribute('id', 'smo250098');
smo250114v0ar.push(smo250098);
const smo250099 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo250099'] = smo250099;
smo250099.setAttribute('id', 'smo250099');
smo250114v0ar.push(smo250099);
const smo250100 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo250100'] = smo250100;
smo250100.setAttribute('id', 'smo250100');
smo250114v0ar.push(smo250100);
smo250114v0.addTickables(smo250114v0ar)
fmtsmo25011464.joinVoices([smo250114v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251520 = smo247354.getStemDirection();
smo247354.setStemDirection(dirsmo251520);
smo247355.setStemDirection(dirsmo251520);
smo247356.setStemDirection(dirsmo251520);
const smo251520 = new VF.Beam([smo247354,smo247355,smo247356]);
const dirsmo251521 = smo247357.getStemDirection();
smo247357.setStemDirection(dirsmo251521);
smo247358.setStemDirection(dirsmo251521);
const smo251521 = new VF.Beam([smo247357,smo247358]);
const dirsmo251524 = smo250097.getStemDirection();
smo250097.setStemDirection(dirsmo251524);
smo250098.setStemDirection(dirsmo251524);
const smo251524 = new VF.Beam([smo250097,smo250098]);
const dirsmo251525 = smo250099.getStemDirection();
smo250099.setStemDirection(dirsmo251525);
smo250100.setStemDirection(dirsmo251525);
const smo251525 = new VF.Beam([smo250099,smo250100]);
 
// formatting measures in staff group smo245304
fmtsmo24737264.format([smo247372v0,smo250114v0], 274);
const stavesmo247372 = new VF.Stave(1265, 396, 288);
stavesmo247372.setAttribute('id', 'stavesmo247372');
stavesmo247372.setBegBarType(VF.Barline.type.NONE);
stavesmo247372.setContext(context);
stavesmo247372.draw();
smo247372v0.draw(context, stavesmo247372);
smo251520.setContext(context);
smo251520.draw();
smo251521.setContext(context);
smo251521.draw();
const stavesmo250114 = new VF.Stave(1265, 556, 288);
stavesmo250114.setAttribute('id', 'stavesmo250114');
stavesmo250114.setBegBarType(VF.Barline.type.NONE);
stavesmo250114.setContext(context);
stavesmo250114.draw();
smo250114v0.draw(context, stavesmo250114);
smo251524.setContext(context);
smo251524.draw();
smo251525.setContext(context);
smo251525.draw();
const fmtsmo24739565 = new VF.Formatter();
//
// voices and notes for stave 0 65
const smo247395v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247395v0ar = [];
const smo247373 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","gn/5/n","bb/5/n"]}'))
noteHash['smo247373'] = smo247373;
smo247373.setAttribute('id', 'smo247373');
smo247395v0ar.push(smo247373);
const smo247374 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n","gn/5/n","bb/5/n"]}'))
noteHash['smo247374'] = smo247374;
smo247374.setAttribute('id', 'smo247374');
smo247374.addModifier(new VF.Dot(), 0);
smo247374.addModifier(new VF.Dot(), 1);
smo247374.addModifier(new VF.Dot(), 2);
smo247395v0ar.push(smo247374);
const smo247375 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo247375'] = smo247375;
smo247375.setAttribute('id', 'smo247375');
smo247395v0ar.push(smo247375);
smo247395v0.addTickables(smo247395v0ar)
fmtsmo24739565.joinVoices([smo247395v0]);
const smo247395v1 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247395v1ar = [];
const smo247376 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo247376'] = smo247376;
smo247376.setAttribute('id', 'smo247376');
smo247376.setStyle({ fillStyle: "#115511" });
smo247395v1ar.push(smo247376);
const smo247377 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo247377'] = smo247377;
smo247377.setAttribute('id', 'smo247377');
smo247377.setStyle({ fillStyle: "#115511" });
smo247395v1ar.push(smo247377);
const smo247378 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n"]}'))
noteHash['smo247378'] = smo247378;
smo247378.setAttribute('id', 'smo247378');
smo247378.setStyle({ fillStyle: "#115511" });
const smo2473780acc = new VF.Accidental('b');
smo247378.addModifier(smo2473780acc, 0);
smo247395v1ar.push(smo247378);
const smo247379 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo247379'] = smo247379;
smo247379.setAttribute('id', 'smo247379');
smo247379.setStyle({ fillStyle: "#115511" });
const smo2473790acc = new VF.Accidental('n');
smo247379.addModifier(smo2473790acc, 0);
smo247395v1ar.push(smo247379);
const smo247380 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo247380'] = smo247380;
smo247380.setAttribute('id', 'smo247380');
smo247380.setStyle({ fillStyle: "#115511" });
smo247395v1ar.push(smo247380);
const smo247381 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo247381'] = smo247381;
smo247381.setAttribute('id', 'smo247381');
smo247381.setStyle({ fillStyle: "#115511" });
smo247395v1ar.push(smo247381);
smo247395v1.addTickables(smo247395v1ar)
fmtsmo24739565.joinVoices([smo247395v1]);
const fmtsmo25013265 = new VF.Formatter();
//
// voices and notes for stave 1 65
const smo250132v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250132v0ar = [];
const smo250115 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo250115'] = smo250115;
smo250115.setAttribute('id', 'smo250115');
smo250132v0ar.push(smo250115);
const smo250116 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n"]}'))
noteHash['smo250116'] = smo250116;
smo250116.setAttribute('id', 'smo250116');
smo250132v0ar.push(smo250116);
const smo250117 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo250117'] = smo250117;
smo250117.setAttribute('id', 'smo250117');
smo250132v0ar.push(smo250117);
const smo250118 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n"]}'))
noteHash['smo250118'] = smo250118;
smo250118.setAttribute('id', 'smo250118');
smo250132v0ar.push(smo250118);
smo250132v0.addTickables(smo250132v0ar)
fmtsmo25013265.joinVoices([smo250132v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251528 = smo247374.getStemDirection();
smo247374.setStemDirection(dirsmo251528);
smo247375.setStemDirection(dirsmo251528);
const smo251528 = new VF.Beam([smo247374,smo247375]);
const dirsmo251529 = smo247377.getStemDirection();
smo247377.setStemDirection(dirsmo251529);
smo247378.setStemDirection(dirsmo251529);
const smo251529 = new VF.Beam([smo247377,smo247378]);
const dirsmo251530 = smo247379.getStemDirection();
smo247379.setStemDirection(dirsmo251530);
smo247380.setStemDirection(dirsmo251530);
smo247381.setStemDirection(dirsmo251530);
const smo251530 = new VF.Beam([smo247379,smo247380,smo247381]);
const dirsmo251533 = smo250115.getStemDirection();
smo250115.setStemDirection(dirsmo251533);
smo250116.setStemDirection(dirsmo251533);
const smo251533 = new VF.Beam([smo250115,smo250116]);
const dirsmo251534 = smo250117.getStemDirection();
smo250117.setStemDirection(dirsmo251534);
smo250118.setStemDirection(dirsmo251534);
const smo251534 = new VF.Beam([smo250117,smo250118]);
 
// formatting measures in staff group smo245304
fmtsmo24739565.format([smo247395v0,smo247395v1,smo250132v0], 274);
const stavesmo247395 = new VF.Stave(1553, 396, 288);
stavesmo247395.setAttribute('id', 'stavesmo247395');
stavesmo247395.setBegBarType(VF.Barline.type.NONE);
stavesmo247395.setContext(context);
stavesmo247395.draw();
smo247395v0.draw(context, stavesmo247395);
smo247395v1.draw(context, stavesmo247395);
smo251528.setContext(context);
smo251528.draw();
smo251529.setContext(context);
smo251529.draw();
smo251530.setContext(context);
smo251530.draw();
const stavesmo250132 = new VF.Stave(1553, 556, 288);
stavesmo250132.setAttribute('id', 'stavesmo250132');
stavesmo250132.setBegBarType(VF.Barline.type.NONE);
stavesmo250132.setContext(context);
stavesmo250132.draw();
smo250132v0.draw(context, stavesmo250132);
smo251533.setContext(context);
smo251533.draw();
smo251534.setContext(context);
smo251534.draw();
const rightsmo245304stavesmo2473951 = new VF.StaveConnector(stavesmo247395, stavesmo250132).setType(0);
rightsmo245304stavesmo2473951.setContext(context).draw();
const fmtsmo24741566 = new VF.Formatter();
//
// voices and notes for stave 0 66
const smo247415v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247415v0ar = [];
const smo247396 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo247396'] = smo247396;
smo247396.setAttribute('id', 'smo247396');
smo247415v0ar.push(smo247396);
const smo247397 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo247397'] = smo247397;
smo247397.setAttribute('id', 'smo247397');
smo247415v0ar.push(smo247397);
const smo247398 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo247398'] = smo247398;
smo247398.setAttribute('id', 'smo247398');
smo247415v0ar.push(smo247398);
const smo247399 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo247399'] = smo247399;
smo247399.setAttribute('id', 'smo247399');
smo247415v0ar.push(smo247399);
const smo247400 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo247400'] = smo247400;
smo247400.setAttribute('id', 'smo247400');
smo247415v0ar.push(smo247400);
const smo247401 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo247401'] = smo247401;
smo247401.setAttribute('id', 'smo247401');
smo247415v0ar.push(smo247401);
smo247415v0.addTickables(smo247415v0ar)
fmtsmo24741566.joinVoices([smo247415v0]);
const fmtsmo25015066 = new VF.Formatter();
//
// voices and notes for stave 1 66
const smo250150v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250150v0ar = [];
const smo250133 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","bb/3/n"]}'))
noteHash['smo250133'] = smo250133;
smo250133.setAttribute('id', 'smo250133');
smo250150v0ar.push(smo250133);
const smo250134 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n"]}'))
noteHash['smo250134'] = smo250134;
smo250134.setAttribute('id', 'smo250134');
smo250150v0ar.push(smo250134);
const smo250135 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
noteHash['smo250135'] = smo250135;
smo250135.setAttribute('id', 'smo250135');
smo250150v0ar.push(smo250135);
const smo250136 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/2/n","ab/3/n"]}'))
noteHash['smo250136'] = smo250136;
smo250136.setAttribute('id', 'smo250136');
const smo2501360acc = new VF.Accidental('b');
smo250136.addModifier(smo2501360acc, 0);
const smo2501361acc = new VF.Accidental('b');
smo250136.addModifier(smo2501361acc, 1);
smo250150v0ar.push(smo250136);
smo250150v0.addTickables(smo250150v0ar)
fmtsmo25015066.joinVoices([smo250150v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251546 = smo247396.getStemDirection();
smo247396.setStemDirection(dirsmo251546);
smo247397.setStemDirection(dirsmo251546);
smo247398.setStemDirection(dirsmo251546);
const smo251546 = new VF.Beam([smo247396,smo247397,smo247398]);
const dirsmo251547 = smo247399.getStemDirection();
smo247399.setStemDirection(dirsmo251547);
smo247400.setStemDirection(dirsmo251547);
smo247401.setStemDirection(dirsmo251547);
const smo251547 = new VF.Beam([smo247399,smo247400,smo247401]);
const dirsmo251550 = smo250133.getStemDirection();
smo250133.setStemDirection(dirsmo251550);
smo250134.setStemDirection(dirsmo251550);
const smo251550 = new VF.Beam([smo250133,smo250134]);
const dirsmo251551 = smo250135.getStemDirection();
smo250135.setStemDirection(dirsmo251551);
smo250136.setStemDirection(dirsmo251551);
const smo251551 = new VF.Beam([smo250135,smo250136]);
 
// formatting measures in staff group smo245304
fmtsmo24741566.format([smo247415v0,smo250150v0], 209);
const stavesmo247415 = new VF.Stave(73, 763, 295);
stavesmo247415.setAttribute('id', 'stavesmo247415');
stavesmo247415.setBegBarType(1);
stavesmo247415.addClef('treble');
const keysmo247415 = new VF.KeySignature('Bb');
keysmo247415.addToStave(stavesmo247415);
stavesmo247415.setContext(context);
stavesmo247415.draw();
smo247415v0.draw(context, stavesmo247415);
smo251546.setContext(context);
smo251546.draw();
smo251547.setContext(context);
smo251547.draw();
const stavesmo250150 = new VF.Stave(73, 934, 295);
stavesmo250150.setAttribute('id', 'stavesmo250150');
stavesmo250150.setBegBarType(1);
stavesmo250150.addClef('bass');
const keysmo250150 = new VF.KeySignature('Bb');
keysmo250150.addToStave(stavesmo250150);
stavesmo250150.setContext(context);
stavesmo250150.draw();
smo250150v0.draw(context, stavesmo250150);
smo251550.setContext(context);
smo251550.draw();
smo251551.setContext(context);
smo251551.draw();
const leftsmo245304stavesmo2474151 = new VF.StaveConnector(stavesmo247415, stavesmo250150).setType(3);
leftsmo245304stavesmo2474151.setContext(context).draw();
const fmtsmo24743367 = new VF.Formatter();
//
// voices and notes for stave 0 67
const smo247433v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247433v0ar = [];
const smo247416 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo247416'] = smo247416;
smo247416.setAttribute('id', 'smo247416');
smo247433v0ar.push(smo247416);
const smo247417 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["ab/4/n","bn/4/n","fn/5/n"]}'))
noteHash['smo247417'] = smo247417;
smo247417.setAttribute('id', 'smo247417');
const smo2474170acc = new VF.Accidental('b');
smo247417.addModifier(smo2474170acc, 0);
const smo2474171acc = new VF.Accidental('n');
smo247417.addModifier(smo2474171acc, 1);
smo247417.addModifier(new VF.Dot(), 0);
smo247417.addModifier(new VF.Dot(), 1);
smo247417.addModifier(new VF.Dot(), 2);
smo247433v0ar.push(smo247417);
const smo247419 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo247419'] = smo247419;
smo247419.setAttribute('id', 'smo247419');
smo247433v0ar.push(smo247419);
smo247433v0.addTickables(smo247433v0ar)
fmtsmo24743367.joinVoices([smo247433v0]);
const fmtsmo25016967 = new VF.Formatter();
//
// voices and notes for stave 1 67
const smo250169v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250169v0ar = [];
const smo250151 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n","an/3/n"]}'))
noteHash['smo250151'] = smo250151;
smo250151.setAttribute('id', 'smo250151');
smo250169v0ar.push(smo250151);
const smo250152 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
noteHash['smo250152'] = smo250152;
smo250152.setAttribute('id', 'smo250152');
smo250169v0ar.push(smo250152);
const smo250153 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
noteHash['smo250153'] = smo250153;
smo250153.setAttribute('id', 'smo250153');
const smo2501530acc = new VF.Accidental('n');
smo250153.addModifier(smo2501530acc, 0);
const smo2501531acc = new VF.Accidental('n');
smo250153.addModifier(smo2501531acc, 1);
smo250169v0ar.push(smo250153);
const smo250154 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n","dn/3/n"]}'))
noteHash['smo250154'] = smo250154;
smo250154.setAttribute('id', 'smo250154');
smo250169v0ar.push(smo250154);
const smo250155 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["db/2/n","db/3/n"]}'))
noteHash['smo250155'] = smo250155;
smo250155.setAttribute('id', 'smo250155');
const smo2501550acc = new VF.Accidental('b');
smo250155.addModifier(smo2501550acc, 0);
const smo2501551acc = new VF.Accidental('b');
smo250155.addModifier(smo2501551acc, 1);
smo250169v0ar.push(smo250155);
smo250169v0.addTickables(smo250169v0ar)
fmtsmo25016967.joinVoices([smo250169v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251554 = smo247417.getStemDirection();
smo247417.setStemDirection(dirsmo251554);
smo247419.setStemDirection(dirsmo251554);
const smo251554 = new VF.Beam([smo247417,smo247419]);
const dirsmo251557 = smo250151.getStemDirection();
smo250151.setStemDirection(dirsmo251557);
smo250152.setStemDirection(dirsmo251557);
smo250153.setStemDirection(dirsmo251557);
smo250154.setStemDirection(dirsmo251557);
const smo251557 = new VF.Beam([smo250151,smo250152,smo250153,smo250154]);
 
// formatting measures in staff group smo245304
fmtsmo24743367.format([smo247433v0,smo250169v0], 281);
const stavesmo247433 = new VF.Stave(368, 763, 295);
stavesmo247433.setAttribute('id', 'stavesmo247433');
stavesmo247433.setBegBarType(VF.Barline.type.NONE);
stavesmo247433.setContext(context);
stavesmo247433.draw();
smo247433v0.draw(context, stavesmo247433);
smo251554.setContext(context);
smo251554.draw();
const stavesmo250169 = new VF.Stave(368, 934, 295);
stavesmo250169.setAttribute('id', 'stavesmo250169');
stavesmo250169.setBegBarType(VF.Barline.type.NONE);
stavesmo250169.setContext(context);
stavesmo250169.draw();
smo250169v0.draw(context, stavesmo250169);
smo251557.setContext(context);
smo251557.draw();
const fmtsmo24745568 = new VF.Formatter();
//
// voices and notes for stave 0 68
const smo247455v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247455v0ar = [];
const smo247434 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","cn/5/n","an/5/n"]}'))
noteHash['smo247434'] = smo247434;
smo247434.setAttribute('id', 'smo247434');
smo247455v0ar.push(smo247434);
const smo247436 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo247436'] = smo247436;
smo247436.setAttribute('id', 'smo247436');
smo247455v0ar.push(smo247436);
const smo247437 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n","gn/5/n"]}'))
noteHash['smo247437'] = smo247437;
smo247437.setAttribute('id', 'smo247437');
smo247455v0ar.push(smo247437);
const smo247438 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n","gn/5/n"]}'))
noteHash['smo247438'] = smo247438;
smo247438.setAttribute('id', 'smo247438');
smo247455v0ar.push(smo247438);
const smo247439 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo247439'] = smo247439;
smo247439.setAttribute('id', 'smo247439');
smo247455v0ar.push(smo247439);
const smo247440 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n","dn/5/n"]}'))
noteHash['smo247440'] = smo247440;
smo247440.setAttribute('id', 'smo247440');
smo247455v0ar.push(smo247440);
const smo247441 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo247441'] = smo247441;
smo247441.setAttribute('id', 'smo247441');
const smo2474410acc = new VF.Accidental('n');
smo247441.addModifier(smo2474410acc, 0);
smo247455v0ar.push(smo247441);
smo247455v0.addTickables(smo247455v0ar)
fmtsmo24745568.joinVoices([smo247455v0]);
const fmtsmo25018768 = new VF.Formatter();
//
// voices and notes for stave 1 68
const smo250187v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250187v0ar = [];
const smo250170 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
noteHash['smo250170'] = smo250170;
smo250170.setAttribute('id', 'smo250170');
smo250187v0ar.push(smo250170);
const smo250171 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo250171'] = smo250171;
smo250171.setAttribute('id', 'smo250171');
smo250187v0ar.push(smo250171);
const smo250172 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
noteHash['smo250172'] = smo250172;
smo250172.setAttribute('id', 'smo250172');
smo250187v0ar.push(smo250172);
const smo250173 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
noteHash['smo250173'] = smo250173;
smo250173.setAttribute('id', 'smo250173');
smo250187v0ar.push(smo250173);
smo250187v0.addTickables(smo250187v0ar)
fmtsmo25018768.joinVoices([smo250187v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251560 = smo247434.getStemDirection();
smo247434.setStemDirection(dirsmo251560);
smo247436.setStemDirection(dirsmo251560);
smo247437.setStemDirection(dirsmo251560);
const smo251560 = new VF.Beam([smo247434,smo247436,smo247437]);
const dirsmo251561 = smo247438.getStemDirection();
smo247438.setStemDirection(dirsmo251561);
smo247439.setStemDirection(dirsmo251561);
smo247440.setStemDirection(dirsmo251561);
smo247441.setStemDirection(dirsmo251561);
const smo251561 = new VF.Beam([smo247438,smo247439,smo247440,smo247441]);
const dirsmo251564 = smo250170.getStemDirection();
smo250170.setStemDirection(dirsmo251564);
smo250171.setStemDirection(dirsmo251564);
const smo251564 = new VF.Beam([smo250170,smo250171]);
const dirsmo251565 = smo250172.getStemDirection();
smo250172.setStemDirection(dirsmo251565);
smo250173.setStemDirection(dirsmo251565);
const smo251565 = new VF.Beam([smo250172,smo250173]);
 
// formatting measures in staff group smo245304
fmtsmo24745568.format([smo247455v0,smo250187v0], 281);
const stavesmo247455 = new VF.Stave(663, 763, 295);
stavesmo247455.setAttribute('id', 'stavesmo247455');
stavesmo247455.setBegBarType(VF.Barline.type.NONE);
stavesmo247455.setContext(context);
stavesmo247455.draw();
smo247455v0.draw(context, stavesmo247455);
smo251560.setContext(context);
smo251560.draw();
smo251561.setContext(context);
smo251561.draw();
const stavesmo250187 = new VF.Stave(663, 934, 295);
stavesmo250187.setAttribute('id', 'stavesmo250187');
stavesmo250187.setBegBarType(VF.Barline.type.NONE);
stavesmo250187.setContext(context);
stavesmo250187.draw();
smo250187v0.draw(context, stavesmo250187);
smo251564.setContext(context);
smo251564.draw();
smo251565.setContext(context);
smo251565.draw();
const fmtsmo24747769 = new VF.Formatter();
//
// voices and notes for stave 0 69
const smo247477v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247477v0ar = [];
const smo247456 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","fn/5/n"]}'))
noteHash['smo247456'] = smo247456;
smo247456.setAttribute('id', 'smo247456');
smo247477v0ar.push(smo247456);
const smo247457 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo247457'] = smo247457;
smo247457.setAttribute('id', 'smo247457');
const smo2474570acc = new VF.Accidental('n');
smo247457.addModifier(smo2474570acc, 0);
smo247477v0ar.push(smo247457);
const smo247458 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo247458'] = smo247458;
smo247458.setAttribute('id', 'smo247458');
smo247477v0ar.push(smo247458);
const smo247459 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo247459'] = smo247459;
smo247459.setAttribute('id', 'smo247459');
smo247477v0ar.push(smo247459);
const smo247460 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo247460'] = smo247460;
smo247460.setAttribute('id', 'smo247460');
const smo2474600acc = new VF.Accidental('n');
smo247460.addModifier(smo2474600acc, 0);
smo247477v0ar.push(smo247460);
const smo247461 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo247461'] = smo247461;
smo247461.setAttribute('id', 'smo247461');
smo247477v0ar.push(smo247461);
const smo247462 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo247462'] = smo247462;
smo247462.setAttribute('id', 'smo247462');
smo247477v0ar.push(smo247462);
smo247477v0.addTickables(smo247477v0ar)
fmtsmo24747769.joinVoices([smo247477v0]);
const fmtsmo25020569 = new VF.Formatter();
//
// voices and notes for stave 1 69
const smo250205v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250205v0ar = [];
const smo250188 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
noteHash['smo250188'] = smo250188;
smo250188.setAttribute('id', 'smo250188');
smo250205v0ar.push(smo250188);
const smo250189 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo250189'] = smo250189;
smo250189.setAttribute('id', 'smo250189');
smo250205v0ar.push(smo250189);
const smo250190 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo250190'] = smo250190;
smo250190.setAttribute('id', 'smo250190');
smo250205v0ar.push(smo250190);
smo250205v0.addTickables(smo250205v0ar)
fmtsmo25020569.joinVoices([smo250205v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251568 = smo247456.getStemDirection();
smo247456.setStemDirection(dirsmo251568);
smo247457.setStemDirection(dirsmo251568);
smo247458.setStemDirection(dirsmo251568);
const smo251568 = new VF.Beam([smo247456,smo247457,smo247458]);
const dirsmo251569 = smo247459.getStemDirection();
smo247459.setStemDirection(dirsmo251569);
smo247460.setStemDirection(dirsmo251569);
smo247461.setStemDirection(dirsmo251569);
smo247462.setStemDirection(dirsmo251569);
const smo251569 = new VF.Beam([smo247459,smo247460,smo247461,smo247462]);
 
// formatting measures in staff group smo245304
fmtsmo24747769.format([smo247477v0,smo250205v0], 277);
const stavesmo247477 = new VF.Stave(958, 763, 295);
stavesmo247477.setAttribute('id', 'stavesmo247477');
stavesmo247477.setBegBarType(VF.Barline.type.NONE);
stavesmo247477.setEndBarType(5);
stavesmo247477.setContext(context);
stavesmo247477.draw();
smo247477v0.draw(context, stavesmo247477);
smo251568.setContext(context);
smo251568.draw();
smo251569.setContext(context);
smo251569.draw();
const stavesmo250205 = new VF.Stave(958, 934, 295);
stavesmo250205.setAttribute('id', 'stavesmo250205');
stavesmo250205.setBegBarType(VF.Barline.type.NONE);
stavesmo250205.setEndBarType(5);
stavesmo250205.setContext(context);
stavesmo250205.draw();
smo250205v0.draw(context, stavesmo250205);
const fmtsmo24749670 = new VF.Formatter();
//
// voices and notes for stave 0 70
const smo247496v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247496v0ar = [];
const smo247478 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","fn/5/n"]}'))
noteHash['smo247478'] = smo247478;
smo247478.setAttribute('id', 'smo247478');
smo247496v0ar.push(smo247478);
const smo247479 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo247479'] = smo247479;
smo247479.setAttribute('id', 'smo247479');
smo247496v0ar.push(smo247479);
const smo247480 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n","cn/6/n","fn/6/n"]}'))
noteHash['smo247480'] = smo247480;
smo247480.setAttribute('id', 'smo247480');
smo247496v0ar.push(smo247480);
const smo247481 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo247481'] = smo247481;
smo247481.setAttribute('id', 'smo247481');
smo247496v0ar.push(smo247481);
smo247496v0.addTickables(smo247496v0ar)
fmtsmo24749670.joinVoices([smo247496v0]);
const fmtsmo25022470 = new VF.Formatter();
//
// voices and notes for stave 1 70
const smo250224v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250224v0ar = [];
const smo250206 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
noteHash['smo250206'] = smo250206;
smo250206.setAttribute('id', 'smo250206');
smo250224v0ar.push(smo250206);
const smo250207 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo250207'] = smo250207;
smo250207.setAttribute('id', 'smo250207');
smo250224v0ar.push(smo250207);
const smo250208 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/1/n","fn/2/n"]}'))
noteHash['smo250208'] = smo250208;
smo250208.setAttribute('id', 'smo250208');
smo250224v0ar.push(smo250208);
const smo250209 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo250209'] = smo250209;
smo250209.setAttribute('id', 'smo250209');
smo250224v0ar.push(smo250209);
smo250224v0.addTickables(smo250224v0ar)
fmtsmo25022470.joinVoices([smo250224v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
 
// formatting measures in staff group smo245304
fmtsmo24749670.format([smo247496v0,smo250224v0], 281);
const stavesmo247496 = new VF.Stave(1253, 763, 295);
stavesmo247496.setAttribute('id', 'stavesmo247496');
stavesmo247496.setBegBarType(VF.Barline.type.NONE);
stavesmo247496.setContext(context);
stavesmo247496.draw();
smo247496v0.draw(context, stavesmo247496);
const stavesmo250224 = new VF.Stave(1253, 934, 295);
stavesmo250224.setAttribute('id', 'stavesmo250224');
stavesmo250224.setBegBarType(VF.Barline.type.NONE);
stavesmo250224.setContext(context);
stavesmo250224.draw();
smo250224v0.draw(context, stavesmo250224);
const fmtsmo24751771 = new VF.Formatter();
//
// voices and notes for stave 0 71
const smo247517v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247517v0ar = [];
const smo247497 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo247497'] = smo247497;
smo247497.setAttribute('id', 'smo247497');
smo247517v0ar.push(smo247497);
const smo247498 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo247498'] = smo247498;
smo247498.setAttribute('id', 'smo247498');
smo247517v0ar.push(smo247498);
const smo247499 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo247499'] = smo247499;
smo247499.setAttribute('id', 'smo247499');
smo247517v0ar.push(smo247499);
const smo247500 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo247500'] = smo247500;
smo247500.setAttribute('id', 'smo247500');
smo247517v0ar.push(smo247500);
const smo247501 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo247501'] = smo247501;
smo247501.setAttribute('id', 'smo247501');
smo247517v0ar.push(smo247501);
const smo247502 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo247502'] = smo247502;
smo247502.setAttribute('id', 'smo247502');
smo247517v0ar.push(smo247502);
const smo247503 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo247503'] = smo247503;
smo247503.setAttribute('id', 'smo247503');
smo247517v0ar.push(smo247503);
smo247517v0.addTickables(smo247517v0ar)
fmtsmo24751771.joinVoices([smo247517v0]);
const fmtsmo25024271 = new VF.Formatter();
//
// voices and notes for stave 1 71
const smo250242v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250242v0ar = [];
const smo250225 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo250225'] = smo250225;
smo250225.setAttribute('id', 'smo250225');
smo250242v0ar.push(smo250225);
const smo250226 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo250226'] = smo250226;
smo250226.setAttribute('id', 'smo250226');
smo250242v0ar.push(smo250226);
const smo250227 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/3/n","an/3/n","cn/4/n","eb/4/n"]}'))
noteHash['smo250227'] = smo250227;
smo250227.setAttribute('id', 'smo250227');
const smo2502270acc = new VF.Accidental('b');
smo250227.addModifier(smo2502270acc, 0);
const smo2502273acc = new VF.Accidental('b');
smo250227.addModifier(smo2502273acc, 3);
smo250242v0ar.push(smo250227);
const smo250228 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/3/n","an/3/n","cn/4/n","eb/4/n"]}'))
noteHash['smo250228'] = smo250228;
smo250228.setAttribute('id', 'smo250228');
smo250242v0ar.push(smo250228);
smo250242v0.addTickables(smo250242v0ar)
fmtsmo25024271.joinVoices([smo250242v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251576 = smo247497.getStemDirection();
smo247497.setStemDirection(dirsmo251576);
smo247498.setStemDirection(dirsmo251576);
smo247499.setStemDirection(dirsmo251576);
const smo251576 = new VF.Beam([smo247497,smo247498,smo247499]);
const dirsmo251577 = smo247500.getStemDirection();
smo247500.setStemDirection(dirsmo251577);
smo247501.setStemDirection(dirsmo251577);
smo247502.setStemDirection(dirsmo251577);
smo247503.setStemDirection(dirsmo251577);
const smo251577 = new VF.Beam([smo247500,smo247501,smo247502,smo247503]);
const dirsmo251580 = smo250225.getStemDirection();
smo250225.setStemDirection(dirsmo251580);
smo250226.setStemDirection(dirsmo251580);
const smo251580 = new VF.Beam([smo250225,smo250226]);
const dirsmo251581 = smo250227.getStemDirection();
smo250227.setStemDirection(dirsmo251581);
smo250228.setStemDirection(dirsmo251581);
const smo251581 = new VF.Beam([smo250227,smo250228]);
 
// formatting measures in staff group smo245304
fmtsmo24751771.format([smo247517v0,smo250242v0], 248);
const stavesmo247517 = new VF.Stave(1548, 763, 295);
stavesmo247517.setAttribute('id', 'stavesmo247517');
stavesmo247517.setBegBarType(VF.Barline.type.NONE);
const keysmo247517 = new VF.KeySignature('C');
keysmo247517.cancelKey('Bb');
keysmo247517.addToStave(stavesmo247517);
stavesmo247517.setContext(context);
stavesmo247517.draw();
smo247517v0.draw(context, stavesmo247517);
smo251576.setContext(context);
smo251576.draw();
smo251577.setContext(context);
smo251577.draw();
const stavesmo250242 = new VF.Stave(1548, 934, 295);
stavesmo250242.setAttribute('id', 'stavesmo250242');
stavesmo250242.setBegBarType(VF.Barline.type.NONE);
const keysmo250242 = new VF.KeySignature('C');
keysmo250242.cancelKey('Bb');
keysmo250242.addToStave(stavesmo250242);
stavesmo250242.setContext(context);
stavesmo250242.draw();
smo250242v0.draw(context, stavesmo250242);
smo251580.setContext(context);
smo251580.draw();
smo251581.setContext(context);
smo251581.draw();
const rightsmo245304stavesmo2475171 = new VF.StaveConnector(stavesmo247517, stavesmo250242).setType(0);
rightsmo245304stavesmo2475171.setContext(context).draw();
const fmtsmo24753972 = new VF.Formatter();
//
// voices and notes for stave 0 72
const smo247539v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247539v0ar = [];
const smo247518 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo247518'] = smo247518;
smo247518.setAttribute('id', 'smo247518');
smo247539v0ar.push(smo247518);
const smo247519 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo247519'] = smo247519;
smo247519.setAttribute('id', 'smo247519');
smo247539v0ar.push(smo247519);
const smo247520 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo247520'] = smo247520;
smo247520.setAttribute('id', 'smo247520');
smo247539v0ar.push(smo247520);
const smo247521 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo247521'] = smo247521;
smo247521.setAttribute('id', 'smo247521');
smo247539v0ar.push(smo247521);
const smo247522 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo247522'] = smo247522;
smo247522.setAttribute('id', 'smo247522');
smo247539v0ar.push(smo247522);
const smo247523 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo247523'] = smo247523;
smo247523.setAttribute('id', 'smo247523');
smo247539v0ar.push(smo247523);
const smo247524 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo247524'] = smo247524;
smo247524.setAttribute('id', 'smo247524');
smo247539v0ar.push(smo247524);
const smo247525 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo247525'] = smo247525;
smo247525.setAttribute('id', 'smo247525');
smo247539v0ar.push(smo247525);
smo247539v0.addTickables(smo247539v0ar)
fmtsmo24753972.joinVoices([smo247539v0]);
const fmtsmo25026072 = new VF.Formatter();
//
// voices and notes for stave 1 72
const smo250260v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250260v0ar = [];
const smo250243 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo250243'] = smo250243;
smo250243.setAttribute('id', 'smo250243');
smo250260v0ar.push(smo250243);
const smo250244 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo250244'] = smo250244;
smo250244.setAttribute('id', 'smo250244');
smo250260v0ar.push(smo250244);
const smo250245 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo250245'] = smo250245;
smo250245.setAttribute('id', 'smo250245');
smo250260v0ar.push(smo250245);
const smo250246 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo250246'] = smo250246;
smo250246.setAttribute('id', 'smo250246');
smo250260v0ar.push(smo250246);
smo250260v0.addTickables(smo250260v0ar)
fmtsmo25026072.joinVoices([smo250260v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251592 = smo247518.getStemDirection();
smo247518.setStemDirection(dirsmo251592);
smo247519.setStemDirection(dirsmo251592);
smo247520.setStemDirection(dirsmo251592);
smo247521.setStemDirection(dirsmo251592);
const smo251592 = new VF.Beam([smo247518,smo247519,smo247520,smo247521]);
const dirsmo251593 = smo247522.getStemDirection();
smo247522.setStemDirection(dirsmo251593);
smo247523.setStemDirection(dirsmo251593);
smo247524.setStemDirection(dirsmo251593);
smo247525.setStemDirection(dirsmo251593);
const smo251593 = new VF.Beam([smo247522,smo247523,smo247524,smo247525]);
const dirsmo251596 = smo250243.getStemDirection();
smo250243.setStemDirection(dirsmo251596);
smo250244.setStemDirection(dirsmo251596);
const smo251596 = new VF.Beam([smo250243,smo250244]);
const dirsmo251597 = smo250245.getStemDirection();
smo250245.setStemDirection(dirsmo251597);
smo250246.setStemDirection(dirsmo251597);
const smo251597 = new VF.Beam([smo250245,smo250246]);
 
// formatting measures in staff group smo245304
fmtsmo24753972.format([smo247539v0,smo250260v0], 237);
const stavesmo247539 = new VF.Stave(73, 1147, 295);
stavesmo247539.setAttribute('id', 'stavesmo247539');
stavesmo247539.setBegBarType(1);
stavesmo247539.addClef('treble');
stavesmo247539.setContext(context);
stavesmo247539.draw();
smo247539v0.draw(context, stavesmo247539);
smo251592.setContext(context);
smo251592.draw();
smo251593.setContext(context);
smo251593.draw();
const stavesmo250260 = new VF.Stave(73, 1271, 295);
stavesmo250260.setAttribute('id', 'stavesmo250260');
stavesmo250260.setBegBarType(1);
stavesmo250260.addClef('bass');
stavesmo250260.setContext(context);
stavesmo250260.draw();
smo250260v0.draw(context, stavesmo250260);
smo251596.setContext(context);
smo251596.draw();
smo251597.setContext(context);
smo251597.draw();
const leftsmo245304stavesmo2475391 = new VF.StaveConnector(stavesmo247539, stavesmo250260).setType(3);
leftsmo245304stavesmo2475391.setContext(context).draw();
const fmtsmo24755873 = new VF.Formatter();
//
// voices and notes for stave 0 73
const smo247558v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247558v0ar = [];
const smo247540 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","an/4/n"]}'))
noteHash['smo247540'] = smo247540;
smo247540.setAttribute('id', 'smo247540');
const smo2475400acc = new VF.Accidental('b');
smo247540.addModifier(smo2475400acc, 0);
smo247558v0ar.push(smo247540);
const smo247541 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","gb/5/n"]}'))
noteHash['smo247541'] = smo247541;
smo247541.setAttribute('id', 'smo247541');
const smo2475411acc = new VF.Accidental('b');
smo247541.addModifier(smo2475411acc, 1);
smo247558v0ar.push(smo247541);
const smo247542 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","en/5/n"]}'))
noteHash['smo247542'] = smo247542;
smo247542.setAttribute('id', 'smo247542');
smo247558v0ar.push(smo247542);
const smo247543 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n"]}'))
noteHash['smo247543'] = smo247543;
smo247543.setAttribute('id', 'smo247543');
smo247558v0ar.push(smo247543);
const smo247544 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
noteHash['smo247544'] = smo247544;
smo247544.setAttribute('id', 'smo247544');
smo247558v0ar.push(smo247544);
smo247558v0.addTickables(smo247558v0ar)
fmtsmo24755873.joinVoices([smo247558v0]);
const fmtsmo25027873 = new VF.Formatter();
//
// voices and notes for stave 1 73
const smo250278v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250278v0ar = [];
const smo250261 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","cn/4/n"]}'))
noteHash['smo250261'] = smo250261;
smo250261.setAttribute('id', 'smo250261');
smo250278v0ar.push(smo250261);
const smo250262 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","an/3/n"]}'))
noteHash['smo250262'] = smo250262;
smo250262.setAttribute('id', 'smo250262');
smo250278v0ar.push(smo250262);
const smo250263 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
noteHash['smo250263'] = smo250263;
smo250263.setAttribute('id', 'smo250263');
smo250278v0ar.push(smo250263);
const smo250264 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
noteHash['smo250264'] = smo250264;
smo250264.setAttribute('id', 'smo250264');
smo250278v0ar.push(smo250264);
smo250278v0.addTickables(smo250278v0ar)
fmtsmo25027873.joinVoices([smo250278v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251600 = smo247540.getStemDirection();
smo247540.setStemDirection(dirsmo251600);
smo247541.setStemDirection(dirsmo251600);
const smo251600 = new VF.Beam([smo247540,smo247541]);
const dirsmo251601 = smo247542.getStemDirection();
smo247542.setStemDirection(dirsmo251601);
smo247543.setStemDirection(dirsmo251601);
smo247544.setStemDirection(dirsmo251601);
const smo251601 = new VF.Beam([smo247542,smo247543,smo247544]);
const dirsmo251604 = smo250261.getStemDirection();
smo250261.setStemDirection(dirsmo251604);
smo250262.setStemDirection(dirsmo251604);
const smo251604 = new VF.Beam([smo250261,smo250262]);
const dirsmo251605 = smo250263.getStemDirection();
smo250263.setStemDirection(dirsmo251605);
smo250264.setStemDirection(dirsmo251605);
const smo251605 = new VF.Beam([smo250263,smo250264]);
 
// formatting measures in staff group smo245304
fmtsmo24755873.format([smo247558v0,smo250278v0], 281);
const stavesmo247558 = new VF.Stave(368, 1147, 295);
stavesmo247558.setAttribute('id', 'stavesmo247558');
stavesmo247558.setBegBarType(VF.Barline.type.NONE);
stavesmo247558.setContext(context);
stavesmo247558.draw();
smo247558v0.draw(context, stavesmo247558);
smo251600.setContext(context);
smo251600.draw();
smo251601.setContext(context);
smo251601.draw();
const stavesmo250278 = new VF.Stave(368, 1271, 295);
stavesmo250278.setAttribute('id', 'stavesmo250278');
stavesmo250278.setBegBarType(VF.Barline.type.NONE);
stavesmo250278.setContext(context);
stavesmo250278.draw();
smo250278v0.draw(context, stavesmo250278);
smo251604.setContext(context);
smo251604.draw();
smo251605.setContext(context);
smo251605.draw();
const fmtsmo24757574 = new VF.Formatter();
//
// voices and notes for stave 0 74
const smo247575v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247575v0ar = [];
const smo247559 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
noteHash['smo247559'] = smo247559;
smo247559.setAttribute('id', 'smo247559');
smo247575v0ar.push(smo247559);
const smo247560 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","gn/5/n","cn/6/n"]}'))
noteHash['smo247560'] = smo247560;
smo247560.setAttribute('id', 'smo247560');
smo247575v0ar.push(smo247560);
const smo247561 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo247561'] = smo247561;
smo247561.setAttribute('id', 'smo247561');
smo247575v0ar.push(smo247561);
smo247575v0.addTickables(smo247575v0ar)
fmtsmo24757574.joinVoices([smo247575v0]);
const fmtsmo25029574 = new VF.Formatter();
//
// voices and notes for stave 1 74
const smo250295v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250295v0ar = [];
const smo250279 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
noteHash['smo250279'] = smo250279;
smo250279.setAttribute('id', 'smo250279');
smo250295v0ar.push(smo250279);
const smo250280 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
noteHash['smo250280'] = smo250280;
smo250280.setAttribute('id', 'smo250280');
smo250295v0ar.push(smo250280);
const smo250281 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo250281'] = smo250281;
smo250281.setAttribute('id', 'smo250281');
smo250295v0ar.push(smo250281);
smo250295v0.addTickables(smo250295v0ar)
fmtsmo25029574.joinVoices([smo250295v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
 
// formatting measures in staff group smo245304
fmtsmo24757574.format([smo247575v0,smo250295v0], 281);
const stavesmo247575 = new VF.Stave(663, 1147, 295);
stavesmo247575.setAttribute('id', 'stavesmo247575');
stavesmo247575.setBegBarType(VF.Barline.type.NONE);
stavesmo247575.setContext(context);
stavesmo247575.draw();
smo247575v0.draw(context, stavesmo247575);
const stavesmo250295 = new VF.Stave(663, 1271, 295);
stavesmo250295.setAttribute('id', 'stavesmo250295');
stavesmo250295.setBegBarType(VF.Barline.type.NONE);
stavesmo250295.setContext(context);
stavesmo250295.draw();
smo250295v0.draw(context, stavesmo250295);
const fmtsmo24759575 = new VF.Formatter();
//
// voices and notes for stave 0 75
const smo247595v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247595v0ar = [];
const smo247576 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
noteHash['smo247576'] = smo247576;
smo247576.setAttribute('id', 'smo247576');
smo247595v0ar.push(smo247576);
const smo247577 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/4/n","en/4/n"]}'))
noteHash['smo247577'] = smo247577;
smo247577.setAttribute('id', 'smo247577');
const smo2475770acc = new VF.Accidental('b');
smo247577.addModifier(smo2475770acc, 0);
smo247595v0ar.push(smo247577);
const smo247578 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
noteHash['smo247578'] = smo247578;
smo247578.setAttribute('id', 'smo247578');
const smo2475780acc = new VF.Accidental('n');
smo247578.addModifier(smo2475780acc, 0);
smo247595v0ar.push(smo247578);
const smo247579 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
noteHash['smo247579'] = smo247579;
smo247579.setAttribute('id', 'smo247579');
smo247595v0ar.push(smo247579);
const smo247580 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/4/n","en/4/n"]}'))
noteHash['smo247580'] = smo247580;
smo247580.setAttribute('id', 'smo247580');
const smo2475800acc = new VF.Accidental('b');
smo247580.addModifier(smo2475800acc, 0);
smo247595v0ar.push(smo247580);
const smo247581 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
noteHash['smo247581'] = smo247581;
smo247581.setAttribute('id', 'smo247581');
const smo2475810acc = new VF.Accidental('n');
smo247581.addModifier(smo2475810acc, 0);
smo247595v0ar.push(smo247581);
smo247595v0.addTickables(smo247595v0ar)
fmtsmo24759575.joinVoices([smo247595v0]);
const fmtsmo25031375 = new VF.Formatter();
//
// voices and notes for stave 1 75
const smo250313v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250313v0ar = [];
const smo250296 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
noteHash['smo250296'] = smo250296;
smo250296.setAttribute('id', 'smo250296');
smo250313v0ar.push(smo250296);
const smo250297 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
noteHash['smo250297'] = smo250297;
smo250297.setAttribute('id', 'smo250297');
smo250313v0ar.push(smo250297);
const smo250298 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo250298'] = smo250298;
smo250298.setAttribute('id', 'smo250298');
smo250313v0ar.push(smo250298);
const smo250299 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
noteHash['smo250299'] = smo250299;
smo250299.setAttribute('id', 'smo250299');
smo250313v0ar.push(smo250299);
smo250313v0.addTickables(smo250313v0ar)
fmtsmo25031375.joinVoices([smo250313v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251612 = smo247576.getStemDirection();
smo247576.setStemDirection(dirsmo251612);
smo247577.setStemDirection(dirsmo251612);
smo247578.setStemDirection(dirsmo251612);
const smo251612 = new VF.Beam([smo247576,smo247577,smo247578]);
const dirsmo251613 = smo247579.getStemDirection();
smo247579.setStemDirection(dirsmo251613);
smo247580.setStemDirection(dirsmo251613);
smo247581.setStemDirection(dirsmo251613);
const smo251613 = new VF.Beam([smo247579,smo247580,smo247581]);
const dirsmo251615 = smo250296.getStemDirection();
smo250296.setStemDirection(dirsmo251615);
smo250297.setStemDirection(dirsmo251615);
const smo251615 = new VF.Beam([smo250296,smo250297]);
const dirsmo251616 = smo250298.getStemDirection();
smo250298.setStemDirection(dirsmo251616);
smo250299.setStemDirection(dirsmo251616);
const smo251616 = new VF.Beam([smo250298,smo250299]);
 
// formatting measures in staff group smo245304
fmtsmo24759575.format([smo247595v0,smo250313v0], 272);
const stavesmo247595 = new VF.Stave(958, 1147, 295);
stavesmo247595.setAttribute('id', 'stavesmo247595');
stavesmo247595.setBegBarType(4);
stavesmo247595.setContext(context);
stavesmo247595.draw();
smo247595v0.draw(context, stavesmo247595);
smo251612.setContext(context);
smo251612.draw();
smo251613.setContext(context);
smo251613.draw();
const stavesmo250313 = new VF.Stave(958, 1271, 295);
stavesmo250313.setAttribute('id', 'stavesmo250313');
stavesmo250313.setBegBarType(4);
stavesmo250313.setContext(context);
stavesmo250313.draw();
smo250313v0.draw(context, stavesmo250313);
smo251615.setContext(context);
smo251615.draw();
smo251616.setContext(context);
smo251616.draw();
const fmtsmo24761776 = new VF.Formatter();
//
// voices and notes for stave 0 76
const smo247617v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247617v0ar = [];
const smo247596 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo247596'] = smo247596;
smo247596.setAttribute('id', 'smo247596');
smo247617v0ar.push(smo247596);
const smo247597 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo247597'] = smo247597;
smo247597.setAttribute('id', 'smo247597');
smo247617v0ar.push(smo247597);
const smo247598 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n"]}'))
noteHash['smo247598'] = smo247598;
smo247598.setAttribute('id', 'smo247598');
smo247617v0ar.push(smo247598);
const smo247599 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo247599'] = smo247599;
smo247599.setAttribute('id', 'smo247599');
smo247617v0ar.push(smo247599);
const smo247600 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo247600'] = smo247600;
smo247600.setAttribute('id', 'smo247600');
smo247617v0ar.push(smo247600);
const smo247601 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo247601'] = smo247601;
smo247601.setAttribute('id', 'smo247601');
smo247617v0ar.push(smo247601);
const smo247602 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo247602'] = smo247602;
smo247602.setAttribute('id', 'smo247602');
smo247617v0ar.push(smo247602);
const smo247603 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo247603'] = smo247603;
smo247603.setAttribute('id', 'smo247603');
smo247617v0ar.push(smo247603);
smo247617v0.addTickables(smo247617v0ar)
fmtsmo24761776.joinVoices([smo247617v0]);
const fmtsmo25033176 = new VF.Formatter();
//
// voices and notes for stave 1 76
const smo250331v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250331v0ar = [];
const smo250314 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
noteHash['smo250314'] = smo250314;
smo250314.setAttribute('id', 'smo250314');
smo250331v0ar.push(smo250314);
const smo250315 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
noteHash['smo250315'] = smo250315;
smo250315.setAttribute('id', 'smo250315');
smo250331v0ar.push(smo250315);
const smo250316 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo250316'] = smo250316;
smo250316.setAttribute('id', 'smo250316');
smo250331v0ar.push(smo250316);
const smo250317 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
noteHash['smo250317'] = smo250317;
smo250317.setAttribute('id', 'smo250317');
smo250331v0ar.push(smo250317);
smo250331v0.addTickables(smo250331v0ar)
fmtsmo25033176.joinVoices([smo250331v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251618 = smo247597.getStemDirection();
smo247597.setStemDirection(dirsmo251618);
smo247598.setStemDirection(dirsmo251618);
smo247599.setStemDirection(dirsmo251618);
const smo251618 = new VF.Beam([smo247597,smo247598,smo247599]);
const dirsmo251619 = smo247600.getStemDirection();
smo247600.setStemDirection(dirsmo251619);
smo247601.setStemDirection(dirsmo251619);
smo247602.setStemDirection(dirsmo251619);
smo247603.setStemDirection(dirsmo251619);
const smo251619 = new VF.Beam([smo247600,smo247601,smo247602,smo247603]);
const dirsmo251622 = smo250314.getStemDirection();
smo250314.setStemDirection(dirsmo251622);
smo250315.setStemDirection(dirsmo251622);
const smo251622 = new VF.Beam([smo250314,smo250315]);
const dirsmo251623 = smo250316.getStemDirection();
smo250316.setStemDirection(dirsmo251623);
smo250317.setStemDirection(dirsmo251623);
const smo251623 = new VF.Beam([smo250316,smo250317]);
 
// formatting measures in staff group smo245304
fmtsmo24761776.format([smo247617v0,smo250331v0], 281);
const stavesmo247617 = new VF.Stave(1253, 1147, 295);
stavesmo247617.setAttribute('id', 'stavesmo247617');
stavesmo247617.setBegBarType(VF.Barline.type.NONE);
stavesmo247617.setContext(context);
stavesmo247617.draw();
smo247617v0.draw(context, stavesmo247617);
smo251618.setContext(context);
smo251618.draw();
smo251619.setContext(context);
smo251619.draw();
const stavesmo250331 = new VF.Stave(1253, 1271, 295);
stavesmo250331.setAttribute('id', 'stavesmo250331');
stavesmo250331.setBegBarType(VF.Barline.type.NONE);
stavesmo250331.setContext(context);
stavesmo250331.draw();
smo250331v0.draw(context, stavesmo250331);
smo251622.setContext(context);
smo251622.draw();
smo251623.setContext(context);
smo251623.draw();
const fmtsmo24763777 = new VF.Formatter();
//
// voices and notes for stave 0 77
const smo247637v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247637v0ar = [];
const smo247618 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
noteHash['smo247618'] = smo247618;
smo247618.setAttribute('id', 'smo247618');
smo247637v0ar.push(smo247618);
const smo247619 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n","gb/4/n"]}'))
noteHash['smo247619'] = smo247619;
smo247619.setAttribute('id', 'smo247619');
const smo2476190acc = new VF.Accidental('b');
smo247619.addModifier(smo2476190acc, 0);
const smo2476191acc = new VF.Accidental('b');
smo247619.addModifier(smo2476191acc, 1);
smo247637v0ar.push(smo247619);
const smo247620 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
noteHash['smo247620'] = smo247620;
smo247620.setAttribute('id', 'smo247620');
const smo2476200acc = new VF.Accidental('n');
smo247620.addModifier(smo2476200acc, 0);
const smo2476201acc = new VF.Accidental('n');
smo247620.addModifier(smo2476201acc, 1);
smo247637v0ar.push(smo247620);
const smo247621 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
noteHash['smo247621'] = smo247621;
smo247621.setAttribute('id', 'smo247621');
smo247637v0ar.push(smo247621);
const smo247622 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n","gb/4/n"]}'))
noteHash['smo247622'] = smo247622;
smo247622.setAttribute('id', 'smo247622');
const smo2476220acc = new VF.Accidental('b');
smo247622.addModifier(smo2476220acc, 0);
const smo2476221acc = new VF.Accidental('b');
smo247622.addModifier(smo2476221acc, 1);
smo247637v0ar.push(smo247622);
const smo247623 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
noteHash['smo247623'] = smo247623;
smo247623.setAttribute('id', 'smo247623');
const smo2476230acc = new VF.Accidental('n');
smo247623.addModifier(smo2476230acc, 0);
const smo2476231acc = new VF.Accidental('n');
smo247623.addModifier(smo2476231acc, 1);
smo247637v0ar.push(smo247623);
smo247637v0.addTickables(smo247637v0ar)
fmtsmo24763777.joinVoices([smo247637v0]);
const fmtsmo25034977 = new VF.Formatter();
//
// voices and notes for stave 1 77
const smo250349v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250349v0ar = [];
const smo250332 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo250332'] = smo250332;
smo250332.setAttribute('id', 'smo250332');
smo250349v0ar.push(smo250332);
const smo250333 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo250333'] = smo250333;
smo250333.setAttribute('id', 'smo250333');
smo250349v0ar.push(smo250333);
const smo250334 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo250334'] = smo250334;
smo250334.setAttribute('id', 'smo250334');
smo250349v0ar.push(smo250334);
const smo250335 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo250335'] = smo250335;
smo250335.setAttribute('id', 'smo250335');
smo250349v0ar.push(smo250335);
smo250349v0.addTickables(smo250349v0ar)
fmtsmo25034977.joinVoices([smo250349v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251626 = smo247618.getStemDirection();
smo247618.setStemDirection(dirsmo251626);
smo247619.setStemDirection(dirsmo251626);
smo247620.setStemDirection(dirsmo251626);
const smo251626 = new VF.Beam([smo247618,smo247619,smo247620]);
const dirsmo251627 = smo247621.getStemDirection();
smo247621.setStemDirection(dirsmo251627);
smo247622.setStemDirection(dirsmo251627);
smo247623.setStemDirection(dirsmo251627);
const smo251627 = new VF.Beam([smo247621,smo247622,smo247623]);
const dirsmo251630 = smo250332.getStemDirection();
smo250332.setStemDirection(dirsmo251630);
smo250333.setStemDirection(dirsmo251630);
const smo251630 = new VF.Beam([smo250332,smo250333]);
const dirsmo251631 = smo250334.getStemDirection();
smo250334.setStemDirection(dirsmo251631);
smo250335.setStemDirection(dirsmo251631);
const smo251631 = new VF.Beam([smo250334,smo250335]);
 
// formatting measures in staff group smo245304
fmtsmo24763777.format([smo247637v0,smo250349v0], 281);
const stavesmo247637 = new VF.Stave(1548, 1147, 295);
stavesmo247637.setAttribute('id', 'stavesmo247637');
stavesmo247637.setBegBarType(VF.Barline.type.NONE);
stavesmo247637.setContext(context);
stavesmo247637.draw();
smo247637v0.draw(context, stavesmo247637);
smo251626.setContext(context);
smo251626.draw();
smo251627.setContext(context);
smo251627.draw();
const stavesmo250349 = new VF.Stave(1548, 1271, 295);
stavesmo250349.setAttribute('id', 'stavesmo250349');
stavesmo250349.setBegBarType(VF.Barline.type.NONE);
stavesmo250349.setContext(context);
stavesmo250349.draw();
smo250349v0.draw(context, stavesmo250349);
smo251630.setContext(context);
smo251630.draw();
smo251631.setContext(context);
smo251631.draw();
const rightsmo245304stavesmo2476371 = new VF.StaveConnector(stavesmo247637, stavesmo250349).setType(0);
rightsmo245304stavesmo2476371.setContext(context).draw();
const fmtsmo24765978 = new VF.Formatter();
//
// voices and notes for stave 0 78
const smo247659v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247659v0ar = [];
const smo247638 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo247638'] = smo247638;
smo247638.setAttribute('id', 'smo247638');
smo247659v0ar.push(smo247638);
const smo247639 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo247639'] = smo247639;
smo247639.setAttribute('id', 'smo247639');
smo247659v0ar.push(smo247639);
const smo247640 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n"]}'))
noteHash['smo247640'] = smo247640;
smo247640.setAttribute('id', 'smo247640');
smo247659v0ar.push(smo247640);
const smo247641 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo247641'] = smo247641;
smo247641.setAttribute('id', 'smo247641');
smo247659v0ar.push(smo247641);
const smo247642 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo247642'] = smo247642;
smo247642.setAttribute('id', 'smo247642');
smo247659v0ar.push(smo247642);
const smo247643 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo247643'] = smo247643;
smo247643.setAttribute('id', 'smo247643');
smo247659v0ar.push(smo247643);
const smo247644 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo247644'] = smo247644;
smo247644.setAttribute('id', 'smo247644');
smo247659v0ar.push(smo247644);
const smo247645 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo247645'] = smo247645;
smo247645.setAttribute('id', 'smo247645');
smo247659v0ar.push(smo247645);
smo247659v0.addTickables(smo247659v0ar)
fmtsmo24765978.joinVoices([smo247659v0]);
const fmtsmo25036778 = new VF.Formatter();
//
// voices and notes for stave 1 78
const smo250367v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250367v0ar = [];
const smo250350 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo250350'] = smo250350;
smo250350.setAttribute('id', 'smo250350');
smo250367v0ar.push(smo250350);
const smo250351 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo250351'] = smo250351;
smo250351.setAttribute('id', 'smo250351');
smo250367v0ar.push(smo250351);
const smo250352 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo250352'] = smo250352;
smo250352.setAttribute('id', 'smo250352');
smo250367v0ar.push(smo250352);
const smo250353 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo250353'] = smo250353;
smo250353.setAttribute('id', 'smo250353');
smo250367v0ar.push(smo250353);
smo250367v0.addTickables(smo250367v0ar)
fmtsmo25036778.joinVoices([smo250367v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251642 = smo247639.getStemDirection();
smo247639.setStemDirection(dirsmo251642);
smo247640.setStemDirection(dirsmo251642);
smo247641.setStemDirection(dirsmo251642);
const smo251642 = new VF.Beam([smo247639,smo247640,smo247641]);
const dirsmo251643 = smo247642.getStemDirection();
smo247642.setStemDirection(dirsmo251643);
smo247643.setStemDirection(dirsmo251643);
smo247644.setStemDirection(dirsmo251643);
smo247645.setStemDirection(dirsmo251643);
const smo251643 = new VF.Beam([smo247642,smo247643,smo247644,smo247645]);
const dirsmo251646 = smo250350.getStemDirection();
smo250350.setStemDirection(dirsmo251646);
smo250351.setStemDirection(dirsmo251646);
const smo251646 = new VF.Beam([smo250350,smo250351]);
const dirsmo251647 = smo250352.getStemDirection();
smo250352.setStemDirection(dirsmo251647);
smo250353.setStemDirection(dirsmo251647);
const smo251647 = new VF.Beam([smo250352,smo250353]);
 
// formatting measures in staff group smo245304
fmtsmo24765978.format([smo247659v0,smo250367v0], 237);
const stavesmo247659 = new VF.Stave(73, 1444, 295);
stavesmo247659.setAttribute('id', 'stavesmo247659');
stavesmo247659.setBegBarType(1);
stavesmo247659.addClef('treble');
stavesmo247659.setContext(context);
stavesmo247659.draw();
smo247659v0.draw(context, stavesmo247659);
smo251642.setContext(context);
smo251642.draw();
smo251643.setContext(context);
smo251643.draw();
const stavesmo250367 = new VF.Stave(73, 1574, 295);
stavesmo250367.setAttribute('id', 'stavesmo250367');
stavesmo250367.setBegBarType(1);
stavesmo250367.addClef('bass');
stavesmo250367.setContext(context);
stavesmo250367.draw();
smo250367v0.draw(context, stavesmo250367);
smo251646.setContext(context);
smo251646.draw();
smo251647.setContext(context);
smo251647.draw();
const leftsmo245304stavesmo2476591 = new VF.StaveConnector(stavesmo247659, stavesmo250367).setType(3);
leftsmo245304stavesmo2476591.setContext(context).draw();
const fmtsmo24767979 = new VF.Formatter();
//
// voices and notes for stave 0 79
const smo247679v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247679v0ar = [];
const smo247660 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n"]}'))
noteHash['smo247660'] = smo247660;
smo247660.setAttribute('id', 'smo247660');
smo247679v0ar.push(smo247660);
const smo247661 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n","db/5/n"]}'))
noteHash['smo247661'] = smo247661;
smo247661.setAttribute('id', 'smo247661');
const smo2476610acc = new VF.Accidental('b');
smo247661.addModifier(smo2476610acc, 0);
const smo2476611acc = new VF.Accidental('b');
smo247661.addModifier(smo2476611acc, 1);
smo247679v0ar.push(smo247661);
const smo247662 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n"]}'))
noteHash['smo247662'] = smo247662;
smo247662.setAttribute('id', 'smo247662');
const smo2476620acc = new VF.Accidental('n');
smo247662.addModifier(smo2476620acc, 0);
const smo2476621acc = new VF.Accidental('n');
smo247662.addModifier(smo2476621acc, 1);
smo247679v0ar.push(smo247662);
const smo247663 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n"]}'))
noteHash['smo247663'] = smo247663;
smo247663.setAttribute('id', 'smo247663');
smo247679v0ar.push(smo247663);
const smo247664 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n","db/5/n"]}'))
noteHash['smo247664'] = smo247664;
smo247664.setAttribute('id', 'smo247664');
const smo2476640acc = new VF.Accidental('b');
smo247664.addModifier(smo2476640acc, 0);
const smo2476641acc = new VF.Accidental('b');
smo247664.addModifier(smo2476641acc, 1);
smo247679v0ar.push(smo247664);
const smo247665 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n"]}'))
noteHash['smo247665'] = smo247665;
smo247665.setAttribute('id', 'smo247665');
const smo2476650acc = new VF.Accidental('n');
smo247665.addModifier(smo2476650acc, 0);
const smo2476651acc = new VF.Accidental('n');
smo247665.addModifier(smo2476651acc, 1);
smo247679v0ar.push(smo247665);
smo247679v0.addTickables(smo247679v0ar)
fmtsmo24767979.joinVoices([smo247679v0]);
const fmtsmo25038579 = new VF.Formatter();
//
// voices and notes for stave 1 79
const smo250385v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250385v0ar = [];
const smo250368 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo250368'] = smo250368;
smo250368.setAttribute('id', 'smo250368');
smo250385v0ar.push(smo250368);
const smo250369 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
noteHash['smo250369'] = smo250369;
smo250369.setAttribute('id', 'smo250369');
smo250385v0ar.push(smo250369);
const smo250370 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
noteHash['smo250370'] = smo250370;
smo250370.setAttribute('id', 'smo250370');
smo250385v0ar.push(smo250370);
const smo250371 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
noteHash['smo250371'] = smo250371;
smo250371.setAttribute('id', 'smo250371');
smo250385v0ar.push(smo250371);
smo250385v0.addTickables(smo250385v0ar)
fmtsmo25038579.joinVoices([smo250385v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251650 = smo247660.getStemDirection();
smo247660.setStemDirection(dirsmo251650);
smo247661.setStemDirection(dirsmo251650);
smo247662.setStemDirection(dirsmo251650);
const smo251650 = new VF.Beam([smo247660,smo247661,smo247662]);
const dirsmo251651 = smo247663.getStemDirection();
smo247663.setStemDirection(dirsmo251651);
smo247664.setStemDirection(dirsmo251651);
smo247665.setStemDirection(dirsmo251651);
const smo251651 = new VF.Beam([smo247663,smo247664,smo247665]);
const dirsmo251654 = smo250368.getStemDirection();
smo250368.setStemDirection(dirsmo251654);
smo250369.setStemDirection(dirsmo251654);
const smo251654 = new VF.Beam([smo250368,smo250369]);
const dirsmo251655 = smo250370.getStemDirection();
smo250370.setStemDirection(dirsmo251655);
smo250371.setStemDirection(dirsmo251655);
const smo251655 = new VF.Beam([smo250370,smo250371]);
 
// formatting measures in staff group smo245304
fmtsmo24767979.format([smo247679v0,smo250385v0], 281);
const stavesmo247679 = new VF.Stave(368, 1444, 295);
stavesmo247679.setAttribute('id', 'stavesmo247679');
stavesmo247679.setBegBarType(VF.Barline.type.NONE);
stavesmo247679.setContext(context);
stavesmo247679.draw();
smo247679v0.draw(context, stavesmo247679);
smo251650.setContext(context);
smo251650.draw();
smo251651.setContext(context);
smo251651.draw();
const stavesmo250385 = new VF.Stave(368, 1574, 295);
stavesmo250385.setAttribute('id', 'stavesmo250385');
stavesmo250385.setBegBarType(VF.Barline.type.NONE);
stavesmo250385.setContext(context);
stavesmo250385.draw();
smo250385v0.draw(context, stavesmo250385);
smo251654.setContext(context);
smo251654.draw();
smo251655.setContext(context);
smo251655.draw();
const fmtsmo24770180 = new VF.Formatter();
//
// voices and notes for stave 0 80
const smo247701v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247701v0ar = [];
const smo247680 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo247680'] = smo247680;
smo247680.setAttribute('id', 'smo247680');
smo247701v0ar.push(smo247680);
const smo247681 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo247681'] = smo247681;
smo247681.setAttribute('id', 'smo247681');
smo247701v0ar.push(smo247681);
const smo247682 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","an/5/n"]}'))
noteHash['smo247682'] = smo247682;
smo247682.setAttribute('id', 'smo247682');
smo247701v0ar.push(smo247682);
const smo247683 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo247683'] = smo247683;
smo247683.setAttribute('id', 'smo247683');
smo247701v0ar.push(smo247683);
const smo247684 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo247684'] = smo247684;
smo247684.setAttribute('id', 'smo247684');
smo247701v0ar.push(smo247684);
const smo247685 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo247685'] = smo247685;
smo247685.setAttribute('id', 'smo247685');
smo247701v0ar.push(smo247685);
const smo247686 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo247686'] = smo247686;
smo247686.setAttribute('id', 'smo247686');
smo247701v0ar.push(smo247686);
const smo247687 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo247687'] = smo247687;
smo247687.setAttribute('id', 'smo247687');
smo247701v0ar.push(smo247687);
smo247701v0.addTickables(smo247701v0ar)
fmtsmo24770180.joinVoices([smo247701v0]);
const fmtsmo25040380 = new VF.Formatter();
//
// voices and notes for stave 1 80
const smo250403v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250403v0ar = [];
const smo250386 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo250386'] = smo250386;
smo250386.setAttribute('id', 'smo250386');
smo250403v0ar.push(smo250386);
const smo250387 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
noteHash['smo250387'] = smo250387;
smo250387.setAttribute('id', 'smo250387');
smo250403v0ar.push(smo250387);
const smo250388 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo250388'] = smo250388;
smo250388.setAttribute('id', 'smo250388');
smo250403v0ar.push(smo250388);
const smo250389 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
noteHash['smo250389'] = smo250389;
smo250389.setAttribute('id', 'smo250389');
smo250403v0ar.push(smo250389);
smo250403v0.addTickables(smo250403v0ar)
fmtsmo25040380.joinVoices([smo250403v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251658 = smo247681.getStemDirection();
smo247681.setStemDirection(dirsmo251658);
smo247682.setStemDirection(dirsmo251658);
smo247683.setStemDirection(dirsmo251658);
const smo251658 = new VF.Beam([smo247681,smo247682,smo247683]);
const dirsmo251659 = smo247684.getStemDirection();
smo247684.setStemDirection(dirsmo251659);
smo247685.setStemDirection(dirsmo251659);
smo247686.setStemDirection(dirsmo251659);
smo247687.setStemDirection(dirsmo251659);
const smo251659 = new VF.Beam([smo247684,smo247685,smo247686,smo247687]);
const dirsmo251662 = smo250386.getStemDirection();
smo250386.setStemDirection(dirsmo251662);
smo250387.setStemDirection(dirsmo251662);
const smo251662 = new VF.Beam([smo250386,smo250387]);
const dirsmo251663 = smo250388.getStemDirection();
smo250388.setStemDirection(dirsmo251663);
smo250389.setStemDirection(dirsmo251663);
const smo251663 = new VF.Beam([smo250388,smo250389]);
 
// formatting measures in staff group smo245304
fmtsmo24770180.format([smo247701v0,smo250403v0], 281);
const stavesmo247701 = new VF.Stave(663, 1444, 295);
stavesmo247701.setAttribute('id', 'stavesmo247701');
stavesmo247701.setBegBarType(VF.Barline.type.NONE);
stavesmo247701.setContext(context);
stavesmo247701.draw();
smo247701v0.draw(context, stavesmo247701);
smo251658.setContext(context);
smo251658.draw();
smo251659.setContext(context);
smo251659.draw();
const stavesmo250403 = new VF.Stave(663, 1574, 295);
stavesmo250403.setAttribute('id', 'stavesmo250403');
stavesmo250403.setBegBarType(VF.Barline.type.NONE);
stavesmo250403.setContext(context);
stavesmo250403.draw();
smo250403v0.draw(context, stavesmo250403);
smo251662.setContext(context);
smo251662.draw();
smo251663.setContext(context);
smo251663.draw();
const fmtsmo24771981 = new VF.Formatter();
//
// voices and notes for stave 0 81
const smo247719v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247719v0ar = [];
const smo247702 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo247702'] = smo247702;
smo247702.setAttribute('id', 'smo247702');
smo247719v0ar.push(smo247702);
const smo247703 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo247703'] = smo247703;
smo247703.setAttribute('id', 'smo247703');
smo247719v0ar.push(smo247703);
const smo247704 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo247704'] = smo247704;
smo247704.setAttribute('id', 'smo247704');
smo247719v0ar.push(smo247704);
const smo247705 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","an/5/n"]}'))
noteHash['smo247705'] = smo247705;
smo247705.setAttribute('id', 'smo247705');
smo247719v0ar.push(smo247705);
smo247719v0.addTickables(smo247719v0ar)
fmtsmo24771981.joinVoices([smo247719v0]);
const fmtsmo25042081 = new VF.Formatter();
//
// voices and notes for stave 1 81
const smo250420v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250420v0ar = [];
const smo250404 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/3/n","gb/3/n","cn/4/n"]}'))
noteHash['smo250404'] = smo250404;
smo250404.setAttribute('id', 'smo250404');
const smo2504040acc = new VF.Accidental('b');
smo250404.addModifier(smo2504040acc, 0);
const smo2504041acc = new VF.Accidental('b');
smo250404.addModifier(smo2504041acc, 1);
smo250420v0ar.push(smo250404);
const smo250405 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["eb/3/n","gb/3/n","cn/4/n"]}'))
noteHash['smo250405'] = smo250405;
smo250405.setAttribute('id', 'smo250405');
smo250420v0ar.push(smo250405);
const smo250406 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/3/n","gb/3/n","cn/4/n"]}'))
noteHash['smo250406'] = smo250406;
smo250406.setAttribute('id', 'smo250406');
smo250420v0ar.push(smo250406);
smo250420v0.addTickables(smo250420v0ar)
fmtsmo25042081.joinVoices([smo250420v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251666 = smo247702.getStemDirection();
smo247702.setStemDirection(dirsmo251666);
smo247703.setStemDirection(dirsmo251666);
const smo251666 = new VF.Beam([smo247702,smo247703]);
 
// formatting measures in staff group smo245304
fmtsmo24771981.format([smo247719v0,smo250420v0], 281);
const stavesmo247719 = new VF.Stave(958, 1444, 295);
stavesmo247719.setAttribute('id', 'stavesmo247719');
stavesmo247719.setBegBarType(VF.Barline.type.NONE);
stavesmo247719.setContext(context);
stavesmo247719.draw();
smo247719v0.draw(context, stavesmo247719);
smo251666.setContext(context);
smo251666.draw();
const stavesmo250420 = new VF.Stave(958, 1574, 295);
stavesmo250420.setAttribute('id', 'stavesmo250420');
stavesmo250420.setBegBarType(VF.Barline.type.NONE);
stavesmo250420.setContext(context);
stavesmo250420.draw();
smo250420v0.draw(context, stavesmo250420);
const fmtsmo24773882 = new VF.Formatter();
//
// voices and notes for stave 0 82
const smo247738v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247738v0ar = [];
const smo247720 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","gn/5/n"]}'))
noteHash['smo247720'] = smo247720;
smo247720.setAttribute('id', 'smo247720');
smo247738v0ar.push(smo247720);
const smo247721 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
noteHash['smo247721'] = smo247721;
smo247721.setAttribute('id', 'smo247721');
smo247738v0ar.push(smo247721);
const smo247722 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
noteHash['smo247722'] = smo247722;
smo247722.setAttribute('id', 'smo247722');
smo247738v0ar.push(smo247722);
const smo247723 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
noteHash['smo247723'] = smo247723;
smo247723.setAttribute('id', 'smo247723');
smo247738v0ar.push(smo247723);
const smo247724 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
noteHash['smo247724'] = smo247724;
smo247724.setAttribute('id', 'smo247724');
smo247738v0ar.push(smo247724);
smo247738v0.addTickables(smo247738v0ar)
fmtsmo24773882.joinVoices([smo247738v0]);
const fmtsmo25043782 = new VF.Formatter();
//
// voices and notes for stave 1 82
const smo250437v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250437v0ar = [];
const smo250421 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo250421'] = smo250421;
smo250421.setAttribute('id', 'smo250421');
smo250437v0ar.push(smo250421);
const smo250422 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo250422'] = smo250422;
smo250422.setAttribute('id', 'smo250422');
smo250437v0ar.push(smo250422);
const smo250423 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo250423'] = smo250423;
smo250423.setAttribute('id', 'smo250423');
smo250437v0ar.push(smo250423);
smo250437v0.addTickables(smo250437v0ar)
fmtsmo25043782.joinVoices([smo250437v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251671 = smo247720.getStemDirection();
smo247720.setStemDirection(dirsmo251671);
smo247721.setStemDirection(dirsmo251671);
smo247722.setStemDirection(dirsmo251671);
const smo251671 = new VF.Beam([smo247720,smo247721,smo247722]);
const dirsmo251672 = smo247723.getStemDirection();
smo247723.setStemDirection(dirsmo251672);
smo247724.setStemDirection(dirsmo251672);
const smo251672 = new VF.Beam([smo247723,smo247724]);
 
// formatting measures in staff group smo245304
fmtsmo24773882.format([smo247738v0,smo250437v0], 281);
const stavesmo247738 = new VF.Stave(1253, 1444, 295);
stavesmo247738.setAttribute('id', 'stavesmo247738');
stavesmo247738.setBegBarType(VF.Barline.type.NONE);
stavesmo247738.setContext(context);
stavesmo247738.draw();
smo247738v0.draw(context, stavesmo247738);
smo251671.setContext(context);
smo251671.draw();
smo251672.setContext(context);
smo251672.draw();
const stavesmo250437 = new VF.Stave(1253, 1574, 295);
stavesmo250437.setAttribute('id', 'stavesmo250437');
stavesmo250437.setBegBarType(VF.Barline.type.NONE);
stavesmo250437.setContext(context);
stavesmo250437.draw();
smo250437v0.draw(context, stavesmo250437);
const fmtsmo24775883 = new VF.Formatter();
//
// voices and notes for stave 0 83
const smo247758v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247758v0ar = [];
const smo247739 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
noteHash['smo247739'] = smo247739;
smo247739.setAttribute('id', 'smo247739');
smo247758v0ar.push(smo247739);
const smo247740 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/4/n","en/4/n"]}'))
noteHash['smo247740'] = smo247740;
smo247740.setAttribute('id', 'smo247740');
const smo2477400acc = new VF.Accidental('b');
smo247740.addModifier(smo2477400acc, 0);
smo247758v0ar.push(smo247740);
const smo247741 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
noteHash['smo247741'] = smo247741;
smo247741.setAttribute('id', 'smo247741');
const smo2477410acc = new VF.Accidental('n');
smo247741.addModifier(smo2477410acc, 0);
smo247758v0ar.push(smo247741);
const smo247742 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
noteHash['smo247742'] = smo247742;
smo247742.setAttribute('id', 'smo247742');
smo247758v0ar.push(smo247742);
const smo247743 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/4/n","en/4/n"]}'))
noteHash['smo247743'] = smo247743;
smo247743.setAttribute('id', 'smo247743');
const smo2477430acc = new VF.Accidental('b');
smo247743.addModifier(smo2477430acc, 0);
smo247758v0ar.push(smo247743);
const smo247744 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
noteHash['smo247744'] = smo247744;
smo247744.setAttribute('id', 'smo247744');
const smo2477440acc = new VF.Accidental('n');
smo247744.addModifier(smo2477440acc, 0);
smo247758v0ar.push(smo247744);
smo247758v0.addTickables(smo247758v0ar)
fmtsmo24775883.joinVoices([smo247758v0]);
const fmtsmo25045583 = new VF.Formatter();
//
// voices and notes for stave 1 83
const smo250455v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250455v0ar = [];
const smo250438 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
noteHash['smo250438'] = smo250438;
smo250438.setAttribute('id', 'smo250438');
smo250455v0ar.push(smo250438);
const smo250439 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
noteHash['smo250439'] = smo250439;
smo250439.setAttribute('id', 'smo250439');
smo250455v0ar.push(smo250439);
const smo250440 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo250440'] = smo250440;
smo250440.setAttribute('id', 'smo250440');
smo250455v0ar.push(smo250440);
const smo250441 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
noteHash['smo250441'] = smo250441;
smo250441.setAttribute('id', 'smo250441');
smo250455v0ar.push(smo250441);
smo250455v0.addTickables(smo250455v0ar)
fmtsmo25045583.joinVoices([smo250455v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251677 = smo247739.getStemDirection();
smo247739.setStemDirection(dirsmo251677);
smo247740.setStemDirection(dirsmo251677);
smo247741.setStemDirection(dirsmo251677);
const smo251677 = new VF.Beam([smo247739,smo247740,smo247741]);
const dirsmo251678 = smo247742.getStemDirection();
smo247742.setStemDirection(dirsmo251678);
smo247743.setStemDirection(dirsmo251678);
smo247744.setStemDirection(dirsmo251678);
const smo251678 = new VF.Beam([smo247742,smo247743,smo247744]);
const dirsmo251681 = smo250438.getStemDirection();
smo250438.setStemDirection(dirsmo251681);
smo250439.setStemDirection(dirsmo251681);
const smo251681 = new VF.Beam([smo250438,smo250439]);
const dirsmo251682 = smo250440.getStemDirection();
smo250440.setStemDirection(dirsmo251682);
smo250441.setStemDirection(dirsmo251682);
const smo251682 = new VF.Beam([smo250440,smo250441]);
 
// formatting measures in staff group smo245304
fmtsmo24775883.format([smo247758v0,smo250455v0], 281);
const stavesmo247758 = new VF.Stave(1548, 1444, 295);
stavesmo247758.setAttribute('id', 'stavesmo247758');
stavesmo247758.setBegBarType(VF.Barline.type.NONE);
stavesmo247758.setContext(context);
stavesmo247758.draw();
smo247758v0.draw(context, stavesmo247758);
smo251677.setContext(context);
smo251677.draw();
smo251678.setContext(context);
smo251678.draw();
const stavesmo250455 = new VF.Stave(1548, 1574, 295);
stavesmo250455.setAttribute('id', 'stavesmo250455');
stavesmo250455.setBegBarType(VF.Barline.type.NONE);
stavesmo250455.setContext(context);
stavesmo250455.draw();
smo250455v0.draw(context, stavesmo250455);
smo251681.setContext(context);
smo251681.draw();
smo251682.setContext(context);
smo251682.draw();
const rightsmo245304stavesmo2477581 = new VF.StaveConnector(stavesmo247758, stavesmo250455).setType(0);
rightsmo245304stavesmo2477581.setContext(context).draw();
const fmtsmo24778084 = new VF.Formatter();
//
// voices and notes for stave 0 84
const smo247780v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247780v0ar = [];
const smo247759 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo247759'] = smo247759;
smo247759.setAttribute('id', 'smo247759');
smo247780v0ar.push(smo247759);
const smo247760 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo247760'] = smo247760;
smo247760.setAttribute('id', 'smo247760');
smo247780v0ar.push(smo247760);
const smo247761 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n"]}'))
noteHash['smo247761'] = smo247761;
smo247761.setAttribute('id', 'smo247761');
smo247780v0ar.push(smo247761);
const smo247762 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo247762'] = smo247762;
smo247762.setAttribute('id', 'smo247762');
smo247780v0ar.push(smo247762);
const smo247763 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo247763'] = smo247763;
smo247763.setAttribute('id', 'smo247763');
smo247780v0ar.push(smo247763);
const smo247764 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo247764'] = smo247764;
smo247764.setAttribute('id', 'smo247764');
smo247780v0ar.push(smo247764);
const smo247765 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo247765'] = smo247765;
smo247765.setAttribute('id', 'smo247765');
smo247780v0ar.push(smo247765);
const smo247766 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo247766'] = smo247766;
smo247766.setAttribute('id', 'smo247766');
smo247780v0ar.push(smo247766);
smo247780v0.addTickables(smo247780v0ar)
fmtsmo24778084.joinVoices([smo247780v0]);
const fmtsmo25047384 = new VF.Formatter();
//
// voices and notes for stave 1 84
const smo250473v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250473v0ar = [];
const smo250456 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
noteHash['smo250456'] = smo250456;
smo250456.setAttribute('id', 'smo250456');
smo250473v0ar.push(smo250456);
const smo250457 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
noteHash['smo250457'] = smo250457;
smo250457.setAttribute('id', 'smo250457');
smo250473v0ar.push(smo250457);
const smo250458 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo250458'] = smo250458;
smo250458.setAttribute('id', 'smo250458');
smo250473v0ar.push(smo250458);
const smo250459 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
noteHash['smo250459'] = smo250459;
smo250459.setAttribute('id', 'smo250459');
smo250473v0ar.push(smo250459);
smo250473v0.addTickables(smo250473v0ar)
fmtsmo25047384.joinVoices([smo250473v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251693 = smo247760.getStemDirection();
smo247760.setStemDirection(dirsmo251693);
smo247761.setStemDirection(dirsmo251693);
smo247762.setStemDirection(dirsmo251693);
const smo251693 = new VF.Beam([smo247760,smo247761,smo247762]);
const dirsmo251694 = smo247763.getStemDirection();
smo247763.setStemDirection(dirsmo251694);
smo247764.setStemDirection(dirsmo251694);
smo247765.setStemDirection(dirsmo251694);
smo247766.setStemDirection(dirsmo251694);
const smo251694 = new VF.Beam([smo247763,smo247764,smo247765,smo247766]);
const dirsmo251697 = smo250456.getStemDirection();
smo250456.setStemDirection(dirsmo251697);
smo250457.setStemDirection(dirsmo251697);
const smo251697 = new VF.Beam([smo250456,smo250457]);
const dirsmo251698 = smo250458.getStemDirection();
smo250458.setStemDirection(dirsmo251698);
smo250459.setStemDirection(dirsmo251698);
const smo251698 = new VF.Beam([smo250458,smo250459]);
 
// formatting measures in staff group smo245304
fmtsmo24778084.format([smo247780v0,smo250473v0], 237);
const stavesmo247780 = new VF.Stave(73, 1777, 295);
stavesmo247780.setAttribute('id', 'stavesmo247780');
stavesmo247780.setBegBarType(1);
stavesmo247780.addClef('treble');
stavesmo247780.setContext(context);
stavesmo247780.draw();
smo247780v0.draw(context, stavesmo247780);
smo251693.setContext(context);
smo251693.draw();
smo251694.setContext(context);
smo251694.draw();
const stavesmo250473 = new VF.Stave(73, 1921, 295);
stavesmo250473.setAttribute('id', 'stavesmo250473');
stavesmo250473.setBegBarType(1);
stavesmo250473.addClef('bass');
stavesmo250473.setContext(context);
stavesmo250473.draw();
smo250473v0.draw(context, stavesmo250473);
smo251697.setContext(context);
smo251697.draw();
smo251698.setContext(context);
smo251698.draw();
const leftsmo245304stavesmo2477801 = new VF.StaveConnector(stavesmo247780, stavesmo250473).setType(3);
leftsmo245304stavesmo2477801.setContext(context).draw();
const fmtsmo24780085 = new VF.Formatter();
//
// voices and notes for stave 0 85
const smo247800v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247800v0ar = [];
const smo247781 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
noteHash['smo247781'] = smo247781;
smo247781.setAttribute('id', 'smo247781');
smo247800v0ar.push(smo247781);
const smo247782 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n","gb/4/n"]}'))
noteHash['smo247782'] = smo247782;
smo247782.setAttribute('id', 'smo247782');
const smo2477820acc = new VF.Accidental('b');
smo247782.addModifier(smo2477820acc, 0);
const smo2477821acc = new VF.Accidental('b');
smo247782.addModifier(smo2477821acc, 1);
smo247800v0ar.push(smo247782);
const smo247783 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
noteHash['smo247783'] = smo247783;
smo247783.setAttribute('id', 'smo247783');
const smo2477830acc = new VF.Accidental('n');
smo247783.addModifier(smo2477830acc, 0);
const smo2477831acc = new VF.Accidental('n');
smo247783.addModifier(smo2477831acc, 1);
smo247800v0ar.push(smo247783);
const smo247784 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
noteHash['smo247784'] = smo247784;
smo247784.setAttribute('id', 'smo247784');
smo247800v0ar.push(smo247784);
const smo247785 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n","gb/4/n"]}'))
noteHash['smo247785'] = smo247785;
smo247785.setAttribute('id', 'smo247785');
const smo2477850acc = new VF.Accidental('b');
smo247785.addModifier(smo2477850acc, 0);
const smo2477851acc = new VF.Accidental('b');
smo247785.addModifier(smo2477851acc, 1);
smo247800v0ar.push(smo247785);
const smo247786 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
noteHash['smo247786'] = smo247786;
smo247786.setAttribute('id', 'smo247786');
const smo2477860acc = new VF.Accidental('n');
smo247786.addModifier(smo2477860acc, 0);
const smo2477861acc = new VF.Accidental('n');
smo247786.addModifier(smo2477861acc, 1);
smo247800v0ar.push(smo247786);
smo247800v0.addTickables(smo247800v0ar)
fmtsmo24780085.joinVoices([smo247800v0]);
const fmtsmo25049185 = new VF.Formatter();
//
// voices and notes for stave 1 85
const smo250491v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250491v0ar = [];
const smo250474 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo250474'] = smo250474;
smo250474.setAttribute('id', 'smo250474');
smo250491v0ar.push(smo250474);
const smo250475 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo250475'] = smo250475;
smo250475.setAttribute('id', 'smo250475');
smo250491v0ar.push(smo250475);
const smo250476 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo250476'] = smo250476;
smo250476.setAttribute('id', 'smo250476');
smo250491v0ar.push(smo250476);
const smo250477 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo250477'] = smo250477;
smo250477.setAttribute('id', 'smo250477');
smo250491v0ar.push(smo250477);
smo250491v0.addTickables(smo250491v0ar)
fmtsmo25049185.joinVoices([smo250491v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251701 = smo247781.getStemDirection();
smo247781.setStemDirection(dirsmo251701);
smo247782.setStemDirection(dirsmo251701);
smo247783.setStemDirection(dirsmo251701);
const smo251701 = new VF.Beam([smo247781,smo247782,smo247783]);
const dirsmo251702 = smo247784.getStemDirection();
smo247784.setStemDirection(dirsmo251702);
smo247785.setStemDirection(dirsmo251702);
smo247786.setStemDirection(dirsmo251702);
const smo251702 = new VF.Beam([smo247784,smo247785,smo247786]);
const dirsmo251705 = smo250474.getStemDirection();
smo250474.setStemDirection(dirsmo251705);
smo250475.setStemDirection(dirsmo251705);
const smo251705 = new VF.Beam([smo250474,smo250475]);
const dirsmo251706 = smo250476.getStemDirection();
smo250476.setStemDirection(dirsmo251706);
smo250477.setStemDirection(dirsmo251706);
const smo251706 = new VF.Beam([smo250476,smo250477]);
 
// formatting measures in staff group smo245304
fmtsmo24780085.format([smo247800v0,smo250491v0], 281);
const stavesmo247800 = new VF.Stave(368, 1777, 295);
stavesmo247800.setAttribute('id', 'stavesmo247800');
stavesmo247800.setBegBarType(VF.Barline.type.NONE);
stavesmo247800.setContext(context);
stavesmo247800.draw();
smo247800v0.draw(context, stavesmo247800);
smo251701.setContext(context);
smo251701.draw();
smo251702.setContext(context);
smo251702.draw();
const stavesmo250491 = new VF.Stave(368, 1921, 295);
stavesmo250491.setAttribute('id', 'stavesmo250491');
stavesmo250491.setBegBarType(VF.Barline.type.NONE);
stavesmo250491.setContext(context);
stavesmo250491.draw();
smo250491v0.draw(context, stavesmo250491);
smo251705.setContext(context);
smo251705.draw();
smo251706.setContext(context);
smo251706.draw();
const fmtsmo24782286 = new VF.Formatter();
//
// voices and notes for stave 0 86
const smo247822v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247822v0ar = [];
const smo247801 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo247801'] = smo247801;
smo247801.setAttribute('id', 'smo247801');
smo247822v0ar.push(smo247801);
const smo247802 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo247802'] = smo247802;
smo247802.setAttribute('id', 'smo247802');
smo247822v0ar.push(smo247802);
const smo247803 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n"]}'))
noteHash['smo247803'] = smo247803;
smo247803.setAttribute('id', 'smo247803');
smo247822v0ar.push(smo247803);
const smo247804 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo247804'] = smo247804;
smo247804.setAttribute('id', 'smo247804');
smo247822v0ar.push(smo247804);
const smo247805 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo247805'] = smo247805;
smo247805.setAttribute('id', 'smo247805');
smo247822v0ar.push(smo247805);
const smo247806 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo247806'] = smo247806;
smo247806.setAttribute('id', 'smo247806');
smo247822v0ar.push(smo247806);
const smo247807 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo247807'] = smo247807;
smo247807.setAttribute('id', 'smo247807');
smo247822v0ar.push(smo247807);
const smo247808 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo247808'] = smo247808;
smo247808.setAttribute('id', 'smo247808');
smo247822v0ar.push(smo247808);
smo247822v0.addTickables(smo247822v0ar)
fmtsmo24782286.joinVoices([smo247822v0]);
const fmtsmo25050986 = new VF.Formatter();
//
// voices and notes for stave 1 86
const smo250509v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250509v0ar = [];
const smo250492 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo250492'] = smo250492;
smo250492.setAttribute('id', 'smo250492');
smo250509v0ar.push(smo250492);
const smo250493 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo250493'] = smo250493;
smo250493.setAttribute('id', 'smo250493');
smo250509v0ar.push(smo250493);
const smo250494 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo250494'] = smo250494;
smo250494.setAttribute('id', 'smo250494');
smo250509v0ar.push(smo250494);
const smo250495 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo250495'] = smo250495;
smo250495.setAttribute('id', 'smo250495');
smo250509v0ar.push(smo250495);
smo250509v0.addTickables(smo250509v0ar)
fmtsmo25050986.joinVoices([smo250509v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251709 = smo247802.getStemDirection();
smo247802.setStemDirection(dirsmo251709);
smo247803.setStemDirection(dirsmo251709);
smo247804.setStemDirection(dirsmo251709);
const smo251709 = new VF.Beam([smo247802,smo247803,smo247804]);
const dirsmo251710 = smo247805.getStemDirection();
smo247805.setStemDirection(dirsmo251710);
smo247806.setStemDirection(dirsmo251710);
smo247807.setStemDirection(dirsmo251710);
smo247808.setStemDirection(dirsmo251710);
const smo251710 = new VF.Beam([smo247805,smo247806,smo247807,smo247808]);
const dirsmo251713 = smo250492.getStemDirection();
smo250492.setStemDirection(dirsmo251713);
smo250493.setStemDirection(dirsmo251713);
const smo251713 = new VF.Beam([smo250492,smo250493]);
const dirsmo251714 = smo250494.getStemDirection();
smo250494.setStemDirection(dirsmo251714);
smo250495.setStemDirection(dirsmo251714);
const smo251714 = new VF.Beam([smo250494,smo250495]);
 
// formatting measures in staff group smo245304
fmtsmo24782286.format([smo247822v0,smo250509v0], 281);
const stavesmo247822 = new VF.Stave(663, 1777, 295);
stavesmo247822.setAttribute('id', 'stavesmo247822');
stavesmo247822.setBegBarType(VF.Barline.type.NONE);
stavesmo247822.setContext(context);
stavesmo247822.draw();
smo247822v0.draw(context, stavesmo247822);
smo251709.setContext(context);
smo251709.draw();
smo251710.setContext(context);
smo251710.draw();
const stavesmo250509 = new VF.Stave(663, 1921, 295);
stavesmo250509.setAttribute('id', 'stavesmo250509');
stavesmo250509.setBegBarType(VF.Barline.type.NONE);
stavesmo250509.setContext(context);
stavesmo250509.draw();
smo250509v0.draw(context, stavesmo250509);
smo251713.setContext(context);
smo251713.draw();
smo251714.setContext(context);
smo251714.draw();
const fmtsmo24784387 = new VF.Formatter();
//
// voices and notes for stave 0 87
const smo247843v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247843v0ar = [];
const smo247823 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo247823'] = smo247823;
smo247823.setAttribute('id', 'smo247823');
smo247843v0ar.push(smo247823);
const smo247824 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/4/n"]}'))
noteHash['smo247824'] = smo247824;
smo247824.setAttribute('id', 'smo247824');
const smo2478240acc = new VF.Accidental('b');
smo247824.addModifier(smo2478240acc, 0);
smo247843v0ar.push(smo247824);
const smo247825 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo247825'] = smo247825;
smo247825.setAttribute('id', 'smo247825');
const smo2478250acc = new VF.Accidental('n');
smo247825.addModifier(smo2478250acc, 0);
smo247843v0ar.push(smo247825);
const smo247826 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","gn/5/n"]}'))
noteHash['smo247826'] = smo247826;
smo247826.setAttribute('id', 'smo247826');
smo247843v0ar.push(smo247826);
const smo247827 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","gn/5/n"]}'))
noteHash['smo247827'] = smo247827;
smo247827.setAttribute('id', 'smo247827');
smo247843v0ar.push(smo247827);
const smo247828 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","fn/5/n"]}'))
noteHash['smo247828'] = smo247828;
smo247828.setAttribute('id', 'smo247828');
smo247843v0ar.push(smo247828);
const smo247829 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","cn/5/n"]}'))
noteHash['smo247829'] = smo247829;
smo247829.setAttribute('id', 'smo247829');
smo247843v0ar.push(smo247829);
smo247843v0.addTickables(smo247843v0ar)
fmtsmo24784387.joinVoices([smo247843v0]);
const fmtsmo25052787 = new VF.Formatter();
//
// voices and notes for stave 1 87
const smo250527v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250527v0ar = [];
const smo250510 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
noteHash['smo250510'] = smo250510;
smo250510.setAttribute('id', 'smo250510');
smo250527v0ar.push(smo250510);
const smo250511 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n","dn/3/n"]}'))
noteHash['smo250511'] = smo250511;
smo250511.setAttribute('id', 'smo250511');
smo250527v0ar.push(smo250511);
const smo250512 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
noteHash['smo250512'] = smo250512;
smo250512.setAttribute('id', 'smo250512');
smo250527v0ar.push(smo250512);
const smo250513 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
noteHash['smo250513'] = smo250513;
smo250513.setAttribute('id', 'smo250513');
smo250527v0ar.push(smo250513);
smo250527v0.addTickables(smo250527v0ar)
fmtsmo25052787.joinVoices([smo250527v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251717 = smo247823.getStemDirection();
smo247823.setStemDirection(dirsmo251717);
smo247824.setStemDirection(dirsmo251717);
smo247825.setStemDirection(dirsmo251717);
smo247826.setStemDirection(dirsmo251717);
const smo251717 = new VF.Beam([smo247823,smo247824,smo247825,smo247826]);
const dirsmo251718 = smo247827.getStemDirection();
smo247827.setStemDirection(dirsmo251718);
smo247828.setStemDirection(dirsmo251718);
smo247829.setStemDirection(dirsmo251718);
const smo251718 = new VF.Beam([smo247827,smo247828,smo247829]);
const dirsmo251721 = smo250510.getStemDirection();
smo250510.setStemDirection(dirsmo251721);
smo250511.setStemDirection(dirsmo251721);
const smo251721 = new VF.Beam([smo250510,smo250511]);
const dirsmo251722 = smo250512.getStemDirection();
smo250512.setStemDirection(dirsmo251722);
smo250513.setStemDirection(dirsmo251722);
const smo251722 = new VF.Beam([smo250512,smo250513]);
 
// formatting measures in staff group smo245304
fmtsmo24784387.format([smo247843v0,smo250527v0], 281);
const stavesmo247843 = new VF.Stave(958, 1777, 295);
stavesmo247843.setAttribute('id', 'stavesmo247843');
stavesmo247843.setBegBarType(VF.Barline.type.NONE);
stavesmo247843.setContext(context);
stavesmo247843.draw();
smo247843v0.draw(context, stavesmo247843);
smo251717.setContext(context);
smo251717.draw();
smo251718.setContext(context);
smo251718.draw();
const stavesmo250527 = new VF.Stave(958, 1921, 295);
stavesmo250527.setAttribute('id', 'stavesmo250527');
stavesmo250527.setBegBarType(VF.Barline.type.NONE);
stavesmo250527.setContext(context);
stavesmo250527.draw();
smo250527v0.draw(context, stavesmo250527);
smo251721.setContext(context);
smo251721.draw();
smo251722.setContext(context);
smo251722.draw();
const fmtsmo24786588 = new VF.Formatter();
//
// voices and notes for stave 0 88
const smo247865v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247865v0ar = [];
const smo247844 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n"]}'))
noteHash['smo247844'] = smo247844;
smo247844.setAttribute('id', 'smo247844');
smo247865v0ar.push(smo247844);
const smo247845 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n"]}'))
noteHash['smo247845'] = smo247845;
smo247845.setAttribute('id', 'smo247845');
const smo2478450acc = new VF.Accidental('b');
smo247845.addModifier(smo2478450acc, 0);
smo247865v0ar.push(smo247845);
const smo247846 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo247846'] = smo247846;
smo247846.setAttribute('id', 'smo247846');
const smo2478460acc = new VF.Accidental('n');
smo247846.addModifier(smo2478460acc, 0);
smo247865v0ar.push(smo247846);
const smo247847 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo247847'] = smo247847;
smo247847.setAttribute('id', 'smo247847');
smo247865v0ar.push(smo247847);
const smo247848 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo247848'] = smo247848;
smo247848.setAttribute('id', 'smo247848');
smo247865v0ar.push(smo247848);
const smo247849 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/6/n"]}'))
noteHash['smo247849'] = smo247849;
smo247849.setAttribute('id', 'smo247849');
smo247865v0ar.push(smo247849);
const smo247850 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo247850'] = smo247850;
smo247850.setAttribute('id', 'smo247850');
smo247865v0ar.push(smo247850);
const smo247851 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo247851'] = smo247851;
smo247851.setAttribute('id', 'smo247851');
smo247865v0ar.push(smo247851);
smo247865v0.addTickables(smo247865v0ar)
fmtsmo24786588.joinVoices([smo247865v0]);
const fmtsmo25054588 = new VF.Formatter();
//
// voices and notes for stave 1 88
const smo250545v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250545v0ar = [];
const smo250528 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
noteHash['smo250528'] = smo250528;
smo250528.setAttribute('id', 'smo250528');
smo250545v0ar.push(smo250528);
const smo250529 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo250529'] = smo250529;
smo250529.setAttribute('id', 'smo250529');
smo250545v0ar.push(smo250529);
const smo250530 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/3/n","cn/4/n","eb/4/n"]}'))
noteHash['smo250530'] = smo250530;
smo250530.setAttribute('id', 'smo250530');
const smo2505300acc = new VF.Accidental('b');
smo250530.addModifier(smo2505300acc, 0);
const smo2505302acc = new VF.Accidental('b');
smo250530.addModifier(smo2505302acc, 2);
smo250545v0ar.push(smo250530);
const smo250531 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo250531'] = smo250531;
smo250531.setAttribute('id', 'smo250531');
const smo2505310acc = new VF.Accidental('n');
smo250531.addModifier(smo2505310acc, 0);
const smo2505312acc = new VF.Accidental('n');
smo250531.addModifier(smo2505312acc, 2);
smo250545v0ar.push(smo250531);
smo250545v0.addTickables(smo250545v0ar)
fmtsmo25054588.joinVoices([smo250545v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251725 = smo247844.getStemDirection();
smo247844.setStemDirection(dirsmo251725);
smo247845.setStemDirection(dirsmo251725);
smo247846.setStemDirection(dirsmo251725);
smo247847.setStemDirection(dirsmo251725);
const smo251725 = new VF.Beam([smo247844,smo247845,smo247846,smo247847]);
const dirsmo251726 = smo247848.getStemDirection();
smo247848.setStemDirection(dirsmo251726);
smo247849.setStemDirection(dirsmo251726);
smo247850.setStemDirection(dirsmo251726);
smo247851.setStemDirection(dirsmo251726);
const smo251726 = new VF.Beam([smo247848,smo247849,smo247850,smo247851]);
const dirsmo251729 = smo250528.getStemDirection();
smo250528.setStemDirection(dirsmo251729);
smo250529.setStemDirection(dirsmo251729);
const smo251729 = new VF.Beam([smo250528,smo250529]);
const dirsmo251730 = smo250530.getStemDirection();
smo250530.setStemDirection(dirsmo251730);
smo250531.setStemDirection(dirsmo251730);
const smo251730 = new VF.Beam([smo250530,smo250531]);
 
// formatting measures in staff group smo245304
fmtsmo24786588.format([smo247865v0,smo250545v0], 281);
const stavesmo247865 = new VF.Stave(1253, 1777, 295);
stavesmo247865.setAttribute('id', 'stavesmo247865');
stavesmo247865.setBegBarType(VF.Barline.type.NONE);
stavesmo247865.setContext(context);
stavesmo247865.draw();
smo247865v0.draw(context, stavesmo247865);
smo251725.setContext(context);
smo251725.draw();
smo251726.setContext(context);
smo251726.draw();
const stavesmo250545 = new VF.Stave(1253, 1921, 295);
stavesmo250545.setAttribute('id', 'stavesmo250545');
stavesmo250545.setBegBarType(VF.Barline.type.NONE);
stavesmo250545.setContext(context);
stavesmo250545.draw();
smo250545v0.draw(context, stavesmo250545);
smo251729.setContext(context);
smo251729.draw();
smo251730.setContext(context);
smo251730.draw();
const fmtsmo24788489 = new VF.Formatter();
//
// voices and notes for stave 0 89
const smo247884v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247884v0ar = [];
const smo247866 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","cn/5/n"]}'))
noteHash['smo247866'] = smo247866;
smo247866.setAttribute('id', 'smo247866');
const smo2478660acc = new VF.Accidental('b');
smo247866.addModifier(smo2478660acc, 0);
smo247884v0ar.push(smo247866);
const smo247867 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","cn/5/n"]}'))
noteHash['smo247867'] = smo247867;
smo247867.setAttribute('id', 'smo247867');
smo247884v0ar.push(smo247867);
const smo247868 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","bn/4/n","en/5/n"]}'))
noteHash['smo247868'] = smo247868;
smo247868.setAttribute('id', 'smo247868');
smo247884v0ar.push(smo247868);
const smo247869 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","bn/4/n","dn/5/n"]}'))
noteHash['smo247869'] = smo247869;
smo247869.setAttribute('id', 'smo247869');
smo247884v0ar.push(smo247869);
const smo247870 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n","cn/5/n"]}'))
noteHash['smo247870'] = smo247870;
smo247870.setAttribute('id', 'smo247870');
const smo2478701acc = new VF.Accidental('n');
smo247870.addModifier(smo2478701acc, 1);
smo247884v0ar.push(smo247870);
smo247884v0.addTickables(smo247884v0ar)
fmtsmo24788489.joinVoices([smo247884v0]);
const fmtsmo25056389 = new VF.Formatter();
//
// voices and notes for stave 1 89
const smo250563v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250563v0ar = [];
const smo250546 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n","an/3/n"]}'))
noteHash['smo250546'] = smo250546;
smo250546.setAttribute('id', 'smo250546');
smo250563v0ar.push(smo250546);
const smo250547 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n","dn/3/n"]}'))
noteHash['smo250547'] = smo250547;
smo250547.setAttribute('id', 'smo250547');
smo250563v0ar.push(smo250547);
const smo250548 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
noteHash['smo250548'] = smo250548;
smo250548.setAttribute('id', 'smo250548');
smo250563v0ar.push(smo250548);
const smo250549 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n","bn/3/n"]}'))
noteHash['smo250549'] = smo250549;
smo250549.setAttribute('id', 'smo250549');
smo250563v0ar.push(smo250549);
smo250563v0.addTickables(smo250563v0ar)
fmtsmo25056389.joinVoices([smo250563v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251733 = smo247866.getStemDirection();
smo247866.setStemDirection(dirsmo251733);
smo247867.setStemDirection(dirsmo251733);
const smo251733 = new VF.Beam([smo247866,smo247867]);
const dirsmo251734 = smo247868.getStemDirection();
smo247868.setStemDirection(dirsmo251734);
smo247869.setStemDirection(dirsmo251734);
smo247870.setStemDirection(dirsmo251734);
const smo251734 = new VF.Beam([smo247868,smo247869,smo247870]);
const dirsmo251737 = smo250546.getStemDirection();
smo250546.setStemDirection(dirsmo251737);
smo250547.setStemDirection(dirsmo251737);
const smo251737 = new VF.Beam([smo250546,smo250547]);
const dirsmo251738 = smo250548.getStemDirection();
smo250548.setStemDirection(dirsmo251738);
smo250549.setStemDirection(dirsmo251738);
const smo251738 = new VF.Beam([smo250548,smo250549]);
 
// formatting measures in staff group smo245304
fmtsmo24788489.format([smo247884v0,smo250563v0], 281);
const stavesmo247884 = new VF.Stave(1548, 1777, 295);
stavesmo247884.setAttribute('id', 'stavesmo247884');
stavesmo247884.setBegBarType(VF.Barline.type.NONE);
stavesmo247884.setContext(context);
stavesmo247884.draw();
smo247884v0.draw(context, stavesmo247884);
smo251733.setContext(context);
smo251733.draw();
smo251734.setContext(context);
smo251734.draw();
const stavesmo250563 = new VF.Stave(1548, 1921, 295);
stavesmo250563.setAttribute('id', 'stavesmo250563');
stavesmo250563.setBegBarType(VF.Barline.type.NONE);
stavesmo250563.setContext(context);
stavesmo250563.draw();
smo250563v0.draw(context, stavesmo250563);
smo251737.setContext(context);
smo251737.draw();
smo251738.setContext(context);
smo251738.draw();
const rightsmo245304stavesmo2478841 = new VF.StaveConnector(stavesmo247884, stavesmo250563).setType(0);
rightsmo245304stavesmo2478841.setContext(context).draw();
const fmtsmo24790490 = new VF.Formatter();
//
// voices and notes for stave 0 90
const smo247904v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247904v0ar = [];
const smo247885 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n","cn/5/n"]}'))
noteHash['smo247885'] = smo247885;
smo247885.setAttribute('id', 'smo247885');
smo247904v0ar.push(smo247885);
const smo247886 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
noteHash['smo247886'] = smo247886;
smo247886.setAttribute('id', 'smo247886');
smo247904v0ar.push(smo247886);
const smo247887 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
noteHash['smo247887'] = smo247887;
smo247887.setAttribute('id', 'smo247887');
smo247904v0ar.push(smo247887);
const smo247888 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
noteHash['smo247888'] = smo247888;
smo247888.setAttribute('id', 'smo247888');
smo247904v0ar.push(smo247888);
const smo247889 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
noteHash['smo247889'] = smo247889;
smo247889.setAttribute('id', 'smo247889');
smo247904v0ar.push(smo247889);
smo247904v0.addTickables(smo247904v0ar)
fmtsmo24790490.joinVoices([smo247904v0]);
const fmtsmo25058190 = new VF.Formatter();
//
// voices and notes for stave 1 90
const smo250581v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250581v0ar = [];
const smo250564 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
noteHash['smo250564'] = smo250564;
smo250564.setAttribute('id', 'smo250564');
smo250581v0ar.push(smo250564);
const smo250565 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo250565'] = smo250565;
smo250565.setAttribute('id', 'smo250565');
smo250581v0ar.push(smo250565);
const smo250566 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo250566'] = smo250566;
smo250566.setAttribute('id', 'smo250566');
smo250581v0ar.push(smo250566);
smo250581v0.addTickables(smo250581v0ar)
fmtsmo25058190.joinVoices([smo250581v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251745 = smo247885.getStemDirection();
smo247885.setStemDirection(dirsmo251745);
smo247886.setStemDirection(dirsmo251745);
smo247887.setStemDirection(dirsmo251745);
const smo251745 = new VF.Beam([smo247885,smo247886,smo247887]);
const dirsmo251746 = smo247888.getStemDirection();
smo247888.setStemDirection(dirsmo251746);
smo247889.setStemDirection(dirsmo251746);
const smo251746 = new VF.Beam([smo247888,smo247889]);
 
// formatting measures in staff group smo245304
fmtsmo24790490.format([smo247904v0,smo250581v0], 233);
const stavesmo247904 = new VF.Stave(73, 2089, 295);
stavesmo247904.setAttribute('id', 'stavesmo247904');
stavesmo247904.setBegBarType(1);
stavesmo247904.setEndBarType(5);
stavesmo247904.addClef('treble');
stavesmo247904.setContext(context);
stavesmo247904.draw();
smo247904v0.draw(context, stavesmo247904);
smo251745.setContext(context);
smo251745.draw();
smo251746.setContext(context);
smo251746.draw();
const stavesmo250581 = new VF.Stave(73, 2234, 295);
stavesmo250581.setAttribute('id', 'stavesmo250581');
stavesmo250581.setBegBarType(1);
stavesmo250581.setEndBarType(5);
stavesmo250581.addClef('bass');
stavesmo250581.setContext(context);
stavesmo250581.draw();
smo250581v0.draw(context, stavesmo250581);
const leftsmo245304stavesmo2479041 = new VF.StaveConnector(stavesmo247904, stavesmo250581).setType(3);
leftsmo245304stavesmo2479041.setContext(context).draw();
const fmtsmo24792291 = new VF.Formatter();
//
// voices and notes for stave 0 91
const smo247922v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247922v0ar = [];
const smo247905 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n","cn/5/n"]}'))
noteHash['smo247905'] = smo247905;
smo247905.setAttribute('id', 'smo247905');
smo247922v0ar.push(smo247905);
const smo247906 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","gn/5/n","cn/6/n"]}'))
noteHash['smo247906'] = smo247906;
smo247906.setAttribute('id', 'smo247906');
smo247922v0ar.push(smo247906);
const smo247907 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo247907'] = smo247907;
smo247907.setAttribute('id', 'smo247907');
smo247922v0ar.push(smo247907);
smo247922v0.addTickables(smo247922v0ar)
fmtsmo24792291.joinVoices([smo247922v0]);
const fmtsmo25060091 = new VF.Formatter();
//
// voices and notes for stave 1 91
const smo250600v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250600v0ar = [];
const smo250582 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
noteHash['smo250582'] = smo250582;
smo250582.setAttribute('id', 'smo250582');
smo250600v0ar.push(smo250582);
const smo250583 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
noteHash['smo250583'] = smo250583;
smo250583.setAttribute('id', 'smo250583');
smo250600v0ar.push(smo250583);
const smo250584 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
noteHash['smo250584'] = smo250584;
smo250584.setAttribute('id', 'smo250584');
smo250600v0ar.push(smo250584);
const smo250585 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo250585'] = smo250585;
smo250585.setAttribute('id', 'smo250585');
smo250600v0ar.push(smo250585);
smo250600v0.addTickables(smo250600v0ar)
fmtsmo25060091.joinVoices([smo250600v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251751 = smo250582.getStemDirection();
smo250582.setStemDirection(dirsmo251751);
smo250583.setStemDirection(dirsmo251751);
const smo251751 = new VF.Beam([smo250582,smo250583]);
 
// formatting measures in staff group smo245304
fmtsmo24792291.format([smo247922v0,smo250600v0], 281);
const stavesmo247922 = new VF.Stave(368, 2089, 295);
stavesmo247922.setAttribute('id', 'stavesmo247922');
stavesmo247922.setBegBarType(VF.Barline.type.NONE);
stavesmo247922.setContext(context);
stavesmo247922.draw();
smo247922v0.draw(context, stavesmo247922);
const stavesmo250600 = new VF.Stave(368, 2234, 295);
stavesmo250600.setAttribute('id', 'stavesmo250600');
stavesmo250600.setBegBarType(VF.Barline.type.NONE);
stavesmo250600.setEndBarType(3);
stavesmo250600.setContext(context);
stavesmo250600.draw();
smo250600v0.draw(context, stavesmo250600);
smo251751.setContext(context);
smo251751.draw();
const smo252695 = new VF.StaveHairpin({ first_note: smo247416, last_note: smo247416,
       firstNote: smo247416, lastNote: smo247416 });
smo252695.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -10,right_shift_px: 10 });
smo252695.setContext(context).setPosition(4).draw();
const smo252696 = new VF.StaveHairpin({ first_note: smo247417, last_note: smo247417,
       firstNote: smo247417, lastNote: smo247417 });
smo252696.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo252696.setContext(context).setPosition(4).draw();
const smo252697 = new VF.StaveTie({ first_note: smo247279, last_note: smo247280, 
          firstNote: smo247279, lastNote: smo247280, first_indices: [0], last_indices: [0]});
smo252697.setContext(context).draw();
const smo252698 = new VF.StaveTie({ first_note: smo247316, last_note: smo247317, 
          firstNote: smo247316, lastNote: smo247317, first_indices: [0,1], last_indices: [0,1]});
smo252698.setContext(context).draw();
const smo252699 = new VF.StaveTie({ first_note: smo247356, last_note: smo247357, 
          firstNote: smo247356, lastNote: smo247357, first_indices: [0,1], last_indices: [0,1]});
smo252699.setContext(context).draw();
const smo252700 = new VF.StaveTie({ first_note: smo247373, last_note: smo247374, 
          firstNote: smo247373, lastNote: smo247374, first_indices: [0,1,2], last_indices: [0,1,2]});
smo252700.setContext(context).draw();
const smo252701 = new VF.StaveTie({ first_note: smo247398, last_note: smo247399, 
          firstNote: smo247398, lastNote: smo247399, first_indices: [0], last_indices: [0]});
smo252701.setContext(context).draw();
const smo252702 = new VF.StaveTie({ first_note: smo247437, last_note: smo247438, 
          firstNote: smo247437, lastNote: smo247438, first_indices: [0,1], last_indices: [0,1]});
smo252702.setContext(context).draw();
const smo252703 = new VF.StaveTie({ first_note: smo247499, last_note: smo247500, 
          firstNote: smo247499, lastNote: smo247500, first_indices: [0], last_indices: [0]});
smo252703.setContext(context).draw();
const smo252704 = new VF.StaveTie({ first_note: smo247521, last_note: smo247522, 
          firstNote: smo247521, lastNote: smo247522, first_indices: [0], last_indices: [0]});
smo252704.setContext(context).draw();
const smo252705 = new VF.StaveTie({ first_note: smo247544, last_note: smo247559, 
          firstNote: smo247544, lastNote: smo247559, first_indices: [0,1], last_indices: [0,1]});
smo252705.setContext(context).draw();
const smo252706 = new VF.StaveTie({ first_note: smo247578, last_note: smo247579, 
          firstNote: smo247578, lastNote: smo247579, first_indices: [0,1], last_indices: [0,1]});
smo252706.setContext(context).draw();
const smo252707 = new VF.StaveTie({ first_note: smo247620, last_note: smo247621, 
          firstNote: smo247620, lastNote: smo247621, first_indices: [0,1], last_indices: [0,1]});
smo252707.setContext(context).draw();
const smo252708 = new VF.StaveTie({ first_note: smo247662, last_note: smo247663, 
          firstNote: smo247662, lastNote: smo247663, first_indices: [0,1], last_indices: [0,1]});
smo252708.setContext(context).draw();
const smo252709 = new VF.StaveTie({ first_note: smo247741, last_note: smo247742, 
          firstNote: smo247741, lastNote: smo247742, first_indices: [0,1], last_indices: [0,1]});
smo252709.setContext(context).draw();
const smo252710 = new VF.StaveTie({ first_note: smo247783, last_note: smo247784, 
          firstNote: smo247783, lastNote: smo247784, first_indices: [0,1], last_indices: [0,1]});
smo252710.setContext(context).draw();
const smo252711 = new VF.StaveTie({ first_note: smo247826, last_note: smo247827, 
          firstNote: smo247826, lastNote: smo247827, first_indices: [0,1], last_indices: [0,1]});
smo252711.setContext(context).draw();
const smo252712 = new VF.StaveTie({ first_note: smo247847, last_note: smo247848, 
          firstNote: smo247847, lastNote: smo247848, first_indices: [0], last_indices: [0]});
smo252712.setContext(context).draw();
const smo252713 = new VF.StaveTie({ first_note: smo247870, last_note: null, 
          firstNote: smo247870, lastNote: null, first_indices: [0,1,2], last_indices: [0,1,2]});
smo252713.setContext(context).draw();
const smo252714 = new VF.StaveTie({ first_note: null, last_note: smo247885, 
          firstNote: null, lastNote: smo247885, first_indices: [0,1,2], last_indices: [0,1,2]});
smo252714.setContext(context).draw();
const smo247464smo247477 = new VF.Volta(5, '1', 958, 20);
smo247464smo247477.setContext(context).draw(stavesmo247477, -1 * 0);
const smo247482smo247496 = new VF.Volta(5, '2', 1253, 20);
smo247482smo247496.setContext(context).draw(stavesmo247496, -1 * 0);
const smo247891smo247904 = new VF.Volta(5, '1', 73, 20);
smo247891smo247904.setContext(context).draw(stavesmo247904, -1 * 0);
const smo247908smo247922 = new VF.Volta(5, '2', 368, 20);
smo247908smo247922.setContext(context).draw(stavesmo247922, -1 * 0);
}