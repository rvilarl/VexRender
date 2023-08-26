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
const fmtsmo5933921 = new VF.Formatter();
//
// voices and notes for stave 0 21
const smo59339v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59339v0ar = [];
const smo59308 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59308.setAttribute('id', 'smo59308');
smo59339v0ar.push(smo59308);
const smo59309 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo59309.setAttribute('id', 'smo59309');
smo59339v0ar.push(smo59309);
const smo59310 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59310.setAttribute('id', 'smo59310');
smo59339v0ar.push(smo59310);
const smo59311 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo59311.setAttribute('id', 'smo59311');
const smo593110acc = new VF.Accidental('b');
smo59311.addModifier(smo593110acc, 0);
smo59339v0ar.push(smo59311);
const smo59312 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo59312.setAttribute('id', 'smo59312');
smo59339v0ar.push(smo59312);
const smo59313 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59313.setAttribute('id', 'smo59313');
smo59339v0ar.push(smo59313);
const smo59314 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo59314.setAttribute('id', 'smo59314');
smo59339v0ar.push(smo59314);
const smo59315 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59315.setAttribute('id', 'smo59315');
smo59339v0ar.push(smo59315);
const smo59316 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo59316.setAttribute('id', 'smo59316');
smo59339v0ar.push(smo59316);
const smo59317 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59317.setAttribute('id', 'smo59317');
smo59339v0ar.push(smo59317);
const smo59318 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo59318.setAttribute('id', 'smo59318');
smo59339v0ar.push(smo59318);
const smo59319 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo59319.setAttribute('id', 'smo59319');
smo59339v0ar.push(smo59319);
const smo59320 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59320.setAttribute('id', 'smo59320');
smo59339v0ar.push(smo59320);
const smo59321 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo59321.setAttribute('id', 'smo59321');
smo59339v0ar.push(smo59321);
smo59339v0.addTickables(smo59339v0ar)
fmtsmo5933921.joinVoices([smo59339v0]);
const smo59339v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59339v1ar = [];
const smo59322 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59322.setAttribute('id', 'smo59322');
smo59322.setStyle({ fillStyle: '#aaaaaa7f' });
smo59339v1ar.push(smo59322);
const smo59323 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59323.setAttribute('id', 'smo59323');
smo59323.setStyle({ fillStyle: '#aaaaaa7f' });
smo59323.addModifier(new VF.Dot(), 0);
smo59323.addModifier(new VF.Dot(), 0);
smo59339v1ar.push(smo59323);
const smo59324 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59324.setAttribute('id', 'smo59324');
smo59324.setStyle({ fillStyle: '#aaaaaa7f' });
smo59339v1ar.push(smo59324);
const smo59325 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59325.setAttribute('id', 'smo59325');
smo59325.setStyle({ fillStyle: '#aaaaaa7f' });
smo59325.addModifier(new VF.Dot(), 0);
smo59325.addModifier(new VF.Dot(), 0);
smo59339v1ar.push(smo59325);
smo59339v1.addTickables(smo59339v1ar)
fmtsmo5933921.joinVoices([smo59339v1]);
const fmtsmo6457421 = new VF.Formatter();
//
// voices and notes for stave 1 21
const smo64574v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64574v0ar = [];
const smo64553 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo64553.setAttribute('id', 'smo64553');
smo64574v0ar.push(smo64553);
const smo64554 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/3/n"]}'))
smo64554.setAttribute('id', 'smo64554');
smo64554.addModifier(new VF.Dot(), 0);
smo64574v0ar.push(smo64554);
const smo64555 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/3/n"]}'))
smo64555.setAttribute('id', 'smo64555');
smo64574v0ar.push(smo64555);
const smo64556 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo64556.setAttribute('id', 'smo64556');
smo64574v0ar.push(smo64556);
const smo64557 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"r","stemDirection":1,"autoStem":false,"keys":["dn/3/r"]}'))
smo64557.setAttribute('id', 'smo64557');
smo64557.addModifier(new VF.Dot(), 0);
smo64574v0ar.push(smo64557);
const smo64558 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/3/n"]}'))
smo64558.setAttribute('id', 'smo64558');
smo64574v0ar.push(smo64558);
smo64574v0.addTickables(smo64574v0ar)
fmtsmo6457421.joinVoices([smo64574v0]);
const smo64574v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64574v1ar = [];
const smo64559 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/2/n"]}'))
smo64559.setAttribute('id', 'smo64559');
smo64559.setStyle({ fillStyle: "#115511" });
const smo645590acc = new VF.Accidental('#');
smo64559.addModifier(smo645590acc, 0);
smo64574v1ar.push(smo64559);
const smo64560 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/2/n"]}'))
smo64560.setAttribute('id', 'smo64560');
smo64560.setStyle({ fillStyle: "#115511" });
smo64574v1ar.push(smo64560);
smo64574v1.addTickables(smo64574v1ar)
fmtsmo6457421.joinVoices([smo64574v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68251 = smo59309.getStemDirection();
smo59309.setStemDirection(dirsmo68251);
smo59310.setStemDirection(dirsmo68251);
const smo68251 = new VF.Beam([smo59309,smo59310]);
const dirsmo68252 = smo59311.getStemDirection();
smo59311.setStemDirection(dirsmo68252);
smo59312.setStemDirection(dirsmo68252);
smo59313.setStemDirection(dirsmo68252);
smo59314.setStemDirection(dirsmo68252);
const smo68252 = new VF.Beam([smo59311,smo59312,smo59313,smo59314]);
const dirsmo68253 = smo59316.getStemDirection();
smo59316.setStemDirection(dirsmo68253);
smo59317.setStemDirection(dirsmo68253);
const smo68253 = new VF.Beam([smo59316,smo59317]);
const dirsmo68254 = smo59318.getStemDirection();
smo59318.setStemDirection(dirsmo68254);
smo59319.setStemDirection(dirsmo68254);
smo59320.setStemDirection(dirsmo68254);
smo59321.setStemDirection(dirsmo68254);
const smo68254 = new VF.Beam([smo59318,smo59319,smo59320,smo59321]);
 
// formatting measures in staff group smo57447
fmtsmo5933921.format([smo59339v0,smo59339v1,smo64574v0,smo64574v1], 584);
const stavesmo59339 = new VF.Stave(90, 247, 642);
stavesmo59339.setAttribute('id', 'stavesmo59339');
stavesmo59339.setBegBarType(1);
stavesmo59339.addClef('treble');
stavesmo59339.setContext(context);
stavesmo59339.draw();
smo59339v0.draw(context, stavesmo59339);
smo59339v1.draw(context, stavesmo59339);
smo68251.setContext(context);
smo68251.draw();
smo68252.setContext(context);
smo68252.draw();
smo68253.setContext(context);
smo68253.draw();
smo68254.setContext(context);
smo68254.draw();
const stavesmo64574 = new VF.Stave(90, 393, 642);
stavesmo64574.setAttribute('id', 'stavesmo64574');
stavesmo64574.setBegBarType(1);
stavesmo64574.addClef('bass');
stavesmo64574.setContext(context);
stavesmo64574.draw();
smo64574v0.draw(context, stavesmo64574);
smo64574v1.draw(context, stavesmo64574);
const leftsmo57447stavesmo593391 = new VF.StaveConnector(stavesmo59339, stavesmo64574).setType(3);
leftsmo57447stavesmo593391.setContext(context).draw();
const fmtsmo5937122 = new VF.Formatter();
//
// voices and notes for stave 0 22
const smo59371v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59371v0ar = [];
const smo59340 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59340.setAttribute('id', 'smo59340');
smo59371v0ar.push(smo59340);
const smo59341 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo59341.setAttribute('id', 'smo59341');
smo59371v0ar.push(smo59341);
const smo59342 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59342.setAttribute('id', 'smo59342');
smo59371v0ar.push(smo59342);
const smo59343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo59343.setAttribute('id', 'smo59343');
smo59371v0ar.push(smo59343);
const smo59344 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo59344.setAttribute('id', 'smo59344');
smo59371v0ar.push(smo59344);
const smo59345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59345.setAttribute('id', 'smo59345');
smo59371v0ar.push(smo59345);
const smo59346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo59346.setAttribute('id', 'smo59346');
smo59371v0ar.push(smo59346);
const smo59347 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59347.setAttribute('id', 'smo59347');
smo59371v0ar.push(smo59347);
const smo59348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo59348.setAttribute('id', 'smo59348');
smo59371v0ar.push(smo59348);
const smo59349 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59349.setAttribute('id', 'smo59349');
smo59371v0ar.push(smo59349);
const smo59350 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo59350.setAttribute('id', 'smo59350');
smo59371v0ar.push(smo59350);
const smo59351 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo59351.setAttribute('id', 'smo59351');
smo59371v0ar.push(smo59351);
const smo59352 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59352.setAttribute('id', 'smo59352');
smo59371v0ar.push(smo59352);
const smo59353 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo59353.setAttribute('id', 'smo59353');
smo59371v0ar.push(smo59353);
smo59371v0.addTickables(smo59371v0ar)
fmtsmo5937122.joinVoices([smo59371v0]);
const smo59371v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59371v1ar = [];
const smo59354 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59354.setAttribute('id', 'smo59354');
smo59354.setStyle({ fillStyle: '#aaaaaa7f' });
smo59371v1ar.push(smo59354);
const smo59355 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59355.setAttribute('id', 'smo59355');
smo59355.setStyle({ fillStyle: '#aaaaaa7f' });
smo59355.addModifier(new VF.Dot(), 0);
smo59355.addModifier(new VF.Dot(), 0);
smo59371v1ar.push(smo59355);
const smo59356 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59356.setAttribute('id', 'smo59356');
smo59356.setStyle({ fillStyle: '#aaaaaa7f' });
smo59371v1ar.push(smo59356);
const smo59357 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59357.setAttribute('id', 'smo59357');
smo59357.setStyle({ fillStyle: '#aaaaaa7f' });
smo59357.addModifier(new VF.Dot(), 0);
smo59357.addModifier(new VF.Dot(), 0);
smo59371v1ar.push(smo59357);
smo59371v1.addTickables(smo59371v1ar)
fmtsmo5937122.joinVoices([smo59371v1]);
const fmtsmo6459622 = new VF.Formatter();
//
// voices and notes for stave 1 22
const smo64596v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64596v0ar = [];
const smo64575 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo64575.setAttribute('id', 'smo64575');
smo64596v0ar.push(smo64575);
const smo64576 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo64576.setAttribute('id', 'smo64576');
smo64576.addModifier(new VF.Dot(), 0);
smo64596v0ar.push(smo64576);
const smo64577 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo64577.setAttribute('id', 'smo64577');
smo64596v0ar.push(smo64577);
const smo64578 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo64578.setAttribute('id', 'smo64578');
smo64596v0ar.push(smo64578);
const smo64579 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo64579.setAttribute('id', 'smo64579');
smo64579.addModifier(new VF.Dot(), 0);
smo64596v0ar.push(smo64579);
const smo64580 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo64580.setAttribute('id', 'smo64580');
smo64596v0ar.push(smo64580);
smo64596v0.addTickables(smo64596v0ar)
fmtsmo6459622.joinVoices([smo64596v0]);
const smo64596v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64596v1ar = [];
const smo64581 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/2/n"]}'))
smo64581.setAttribute('id', 'smo64581');
smo64581.setStyle({ fillStyle: "#115511" });
const smo645810acc = new VF.Accidental('b');
smo64581.addModifier(smo645810acc, 0);
smo64596v1ar.push(smo64581);
const smo64582 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/2/n"]}'))
smo64582.setAttribute('id', 'smo64582');
smo64582.setStyle({ fillStyle: "#115511" });
smo64596v1ar.push(smo64582);
smo64596v1.addTickables(smo64596v1ar)
fmtsmo6459622.joinVoices([smo64596v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68259 = smo59341.getStemDirection();
smo59341.setStemDirection(dirsmo68259);
smo59342.setStemDirection(dirsmo68259);
const smo68259 = new VF.Beam([smo59341,smo59342]);
const dirsmo68260 = smo59343.getStemDirection();
smo59343.setStemDirection(dirsmo68260);
smo59344.setStemDirection(dirsmo68260);
smo59345.setStemDirection(dirsmo68260);
smo59346.setStemDirection(dirsmo68260);
const smo68260 = new VF.Beam([smo59343,smo59344,smo59345,smo59346]);
const dirsmo68261 = smo59348.getStemDirection();
smo59348.setStemDirection(dirsmo68261);
smo59349.setStemDirection(dirsmo68261);
const smo68261 = new VF.Beam([smo59348,smo59349]);
const dirsmo68262 = smo59350.getStemDirection();
smo59350.setStemDirection(dirsmo68262);
smo59351.setStemDirection(dirsmo68262);
smo59352.setStemDirection(dirsmo68262);
smo59353.setStemDirection(dirsmo68262);
const smo68262 = new VF.Beam([smo59350,smo59351,smo59352,smo59353]);
 
// formatting measures in staff group smo57447
fmtsmo5937122.format([smo59371v0,smo59371v1,smo64596v0,smo64596v1], 535);
const stavesmo59371 = new VF.Stave(732, 247, 549);
stavesmo59371.setAttribute('id', 'stavesmo59371');
stavesmo59371.setBegBarType(VF.Barline.type.NONE);
stavesmo59371.setContext(context);
stavesmo59371.draw();
smo59371v0.draw(context, stavesmo59371);
smo59371v1.draw(context, stavesmo59371);
smo68259.setContext(context);
smo68259.draw();
smo68260.setContext(context);
smo68260.draw();
smo68261.setContext(context);
smo68261.draw();
smo68262.setContext(context);
smo68262.draw();
const stavesmo64596 = new VF.Stave(732, 393, 549);
stavesmo64596.setAttribute('id', 'stavesmo64596');
stavesmo64596.setBegBarType(VF.Barline.type.NONE);
stavesmo64596.setContext(context);
stavesmo64596.draw();
smo64596v0.draw(context, stavesmo64596);
smo64596v1.draw(context, stavesmo64596);
const fmtsmo5940323 = new VF.Formatter();
//
// voices and notes for stave 0 23
const smo59403v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59403v0ar = [];
const smo59372 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59372.setAttribute('id', 'smo59372');
smo59403v0ar.push(smo59372);
const smo59373 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo59373.setAttribute('id', 'smo59373');
smo59403v0ar.push(smo59373);
const smo59374 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo59374.setAttribute('id', 'smo59374');
smo59403v0ar.push(smo59374);
const smo59375 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo59375.setAttribute('id', 'smo59375');
smo59403v0ar.push(smo59375);
const smo59376 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo59376.setAttribute('id', 'smo59376');
smo59403v0ar.push(smo59376);
const smo59377 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo59377.setAttribute('id', 'smo59377');
smo59403v0ar.push(smo59377);
const smo59378 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo59378.setAttribute('id', 'smo59378');
smo59403v0ar.push(smo59378);
const smo59379 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59379.setAttribute('id', 'smo59379');
smo59403v0ar.push(smo59379);
const smo59380 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo59380.setAttribute('id', 'smo59380');
smo59403v0ar.push(smo59380);
const smo59381 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo59381.setAttribute('id', 'smo59381');
smo59403v0ar.push(smo59381);
const smo59382 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo59382.setAttribute('id', 'smo59382');
smo59403v0ar.push(smo59382);
const smo59383 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo59383.setAttribute('id', 'smo59383');
smo59403v0ar.push(smo59383);
const smo59384 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo59384.setAttribute('id', 'smo59384');
smo59403v0ar.push(smo59384);
const smo59385 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo59385.setAttribute('id', 'smo59385');
smo59403v0ar.push(smo59385);
smo59403v0.addTickables(smo59403v0ar)
fmtsmo5940323.joinVoices([smo59403v0]);
const smo59403v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59403v1ar = [];
const smo59386 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59386.setAttribute('id', 'smo59386');
smo59386.setStyle({ fillStyle: '#aaaaaa7f' });
smo59403v1ar.push(smo59386);
const smo59387 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59387.setAttribute('id', 'smo59387');
smo59387.setStyle({ fillStyle: '#aaaaaa7f' });
smo59387.addModifier(new VF.Dot(), 0);
smo59387.addModifier(new VF.Dot(), 0);
smo59403v1ar.push(smo59387);
const smo59388 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59388.setAttribute('id', 'smo59388');
smo59388.setStyle({ fillStyle: '#aaaaaa7f' });
smo59403v1ar.push(smo59388);
const smo59389 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59389.setAttribute('id', 'smo59389');
smo59389.setStyle({ fillStyle: '#aaaaaa7f' });
smo59389.addModifier(new VF.Dot(), 0);
smo59389.addModifier(new VF.Dot(), 0);
smo59403v1ar.push(smo59389);
smo59403v1.addTickables(smo59403v1ar)
fmtsmo5940323.joinVoices([smo59403v1]);
const fmtsmo6461823 = new VF.Formatter();
//
// voices and notes for stave 1 23
const smo64618v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64618v0ar = [];
const smo64597 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo64597.setAttribute('id', 'smo64597');
smo64618v0ar.push(smo64597);
const smo64598 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo64598.setAttribute('id', 'smo64598');
smo64598.addModifier(new VF.Dot(), 0);
smo64618v0ar.push(smo64598);
const smo64599 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo64599.setAttribute('id', 'smo64599');
smo64618v0ar.push(smo64599);
const smo64600 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo64600.setAttribute('id', 'smo64600');
smo64618v0ar.push(smo64600);
const smo64601 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo64601.setAttribute('id', 'smo64601');
smo64601.addModifier(new VF.Dot(), 0);
smo64618v0ar.push(smo64601);
const smo64602 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo64602.setAttribute('id', 'smo64602');
smo64618v0ar.push(smo64602);
smo64618v0.addTickables(smo64618v0ar)
fmtsmo6461823.joinVoices([smo64618v0]);
const smo64618v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64618v1ar = [];
const smo64603 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo64603.setAttribute('id', 'smo64603');
smo64603.setStyle({ fillStyle: "#115511" });
smo64618v1ar.push(smo64603);
const smo64604 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo64604.setAttribute('id', 'smo64604');
smo64604.setStyle({ fillStyle: "#115511" });
smo64618v1ar.push(smo64604);
smo64618v1.addTickables(smo64618v1ar)
fmtsmo6461823.joinVoices([smo64618v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68267 = smo59373.getStemDirection();
smo59373.setStemDirection(dirsmo68267);
smo59374.setStemDirection(dirsmo68267);
const smo68267 = new VF.Beam([smo59373,smo59374]);
const dirsmo68268 = smo59375.getStemDirection();
smo59375.setStemDirection(dirsmo68268);
smo59376.setStemDirection(dirsmo68268);
smo59377.setStemDirection(dirsmo68268);
smo59378.setStemDirection(dirsmo68268);
const smo68268 = new VF.Beam([smo59375,smo59376,smo59377,smo59378]);
const dirsmo68269 = smo59380.getStemDirection();
smo59380.setStemDirection(dirsmo68269);
smo59381.setStemDirection(dirsmo68269);
const smo68269 = new VF.Beam([smo59380,smo59381]);
const dirsmo68270 = smo59382.getStemDirection();
smo59382.setStemDirection(dirsmo68270);
smo59383.setStemDirection(dirsmo68270);
smo59384.setStemDirection(dirsmo68270);
smo59385.setStemDirection(dirsmo68270);
const smo68270 = new VF.Beam([smo59382,smo59383,smo59384,smo59385]);
 
// formatting measures in staff group smo57447
fmtsmo5940323.format([smo59403v0,smo59403v1,smo64618v0,smo64618v1], 512);
const stavesmo59403 = new VF.Stave(1281, 247, 526);
stavesmo59403.setAttribute('id', 'stavesmo59403');
stavesmo59403.setBegBarType(VF.Barline.type.NONE);
stavesmo59403.setContext(context);
stavesmo59403.draw();
smo59403v0.draw(context, stavesmo59403);
smo59403v1.draw(context, stavesmo59403);
smo68267.setContext(context);
smo68267.draw();
smo68268.setContext(context);
smo68268.draw();
smo68269.setContext(context);
smo68269.draw();
smo68270.setContext(context);
smo68270.draw();
const stavesmo64618 = new VF.Stave(1281, 393, 526);
stavesmo64618.setAttribute('id', 'stavesmo64618');
stavesmo64618.setBegBarType(VF.Barline.type.NONE);
stavesmo64618.setContext(context);
stavesmo64618.draw();
smo64618v0.draw(context, stavesmo64618);
smo64618v1.draw(context, stavesmo64618);
const rightsmo57447stavesmo594031 = new VF.StaveConnector(stavesmo59403, stavesmo64618).setType(0);
rightsmo57447stavesmo594031.setContext(context).draw();
const fmtsmo5943524 = new VF.Formatter();
//
// voices and notes for stave 0 24
const smo59435v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59435v0ar = [];
const smo59404 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59404.setAttribute('id', 'smo59404');
smo59435v0ar.push(smo59404);
const smo59405 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo59405.setAttribute('id', 'smo59405');
smo59435v0ar.push(smo59405);
const smo59406 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59406.setAttribute('id', 'smo59406');
smo59435v0ar.push(smo59406);
const smo59407 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo59407.setAttribute('id', 'smo59407');
smo59435v0ar.push(smo59407);
const smo59408 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo59408.setAttribute('id', 'smo59408');
smo59435v0ar.push(smo59408);
const smo59409 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59409.setAttribute('id', 'smo59409');
smo59435v0ar.push(smo59409);
const smo59410 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo59410.setAttribute('id', 'smo59410');
smo59435v0ar.push(smo59410);
const smo59411 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59411.setAttribute('id', 'smo59411');
smo59435v0ar.push(smo59411);
const smo59412 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo59412.setAttribute('id', 'smo59412');
smo59435v0ar.push(smo59412);
const smo59413 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59413.setAttribute('id', 'smo59413');
smo59435v0ar.push(smo59413);
const smo59414 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo59414.setAttribute('id', 'smo59414');
smo59435v0ar.push(smo59414);
const smo59415 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo59415.setAttribute('id', 'smo59415');
smo59435v0ar.push(smo59415);
const smo59416 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59416.setAttribute('id', 'smo59416');
smo59435v0ar.push(smo59416);
const smo59417 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo59417.setAttribute('id', 'smo59417');
smo59435v0ar.push(smo59417);
smo59435v0.addTickables(smo59435v0ar)
fmtsmo5943524.joinVoices([smo59435v0]);
const smo59435v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59435v1ar = [];
const smo59418 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59418.setAttribute('id', 'smo59418');
smo59418.setStyle({ fillStyle: '#aaaaaa7f' });
smo59435v1ar.push(smo59418);
const smo59419 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59419.setAttribute('id', 'smo59419');
smo59419.setStyle({ fillStyle: '#aaaaaa7f' });
smo59419.addModifier(new VF.Dot(), 0);
smo59419.addModifier(new VF.Dot(), 0);
smo59435v1ar.push(smo59419);
const smo59420 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59420.setAttribute('id', 'smo59420');
smo59420.setStyle({ fillStyle: '#aaaaaa7f' });
smo59435v1ar.push(smo59420);
const smo59421 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59421.setAttribute('id', 'smo59421');
smo59421.setStyle({ fillStyle: '#aaaaaa7f' });
smo59421.addModifier(new VF.Dot(), 0);
smo59421.addModifier(new VF.Dot(), 0);
smo59435v1ar.push(smo59421);
smo59435v1.addTickables(smo59435v1ar)
fmtsmo5943524.joinVoices([smo59435v1]);
const fmtsmo6464024 = new VF.Formatter();
//
// voices and notes for stave 1 24
const smo64640v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64640v0ar = [];
const smo64619 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo64619.setAttribute('id', 'smo64619');
smo64640v0ar.push(smo64619);
const smo64620 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo64620.setAttribute('id', 'smo64620');
smo64620.addModifier(new VF.Dot(), 0);
smo64640v0ar.push(smo64620);
const smo64621 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo64621.setAttribute('id', 'smo64621');
smo64640v0ar.push(smo64621);
const smo64622 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo64622.setAttribute('id', 'smo64622');
smo64640v0ar.push(smo64622);
const smo64623 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo64623.setAttribute('id', 'smo64623');
smo64623.addModifier(new VF.Dot(), 0);
smo64640v0ar.push(smo64623);
const smo64624 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo64624.setAttribute('id', 'smo64624');
smo64640v0ar.push(smo64624);
smo64640v0.addTickables(smo64640v0ar)
fmtsmo6464024.joinVoices([smo64640v0]);
const smo64640v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64640v1ar = [];
const smo64625 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo64625.setAttribute('id', 'smo64625');
smo64625.setStyle({ fillStyle: "#115511" });
smo64640v1ar.push(smo64625);
const smo64626 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo64626.setAttribute('id', 'smo64626');
smo64626.setStyle({ fillStyle: "#115511" });
smo64640v1ar.push(smo64626);
smo64640v1.addTickables(smo64640v1ar)
fmtsmo6464024.joinVoices([smo64640v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68284 = smo59405.getStemDirection();
smo59405.setStemDirection(dirsmo68284);
smo59406.setStemDirection(dirsmo68284);
const smo68284 = new VF.Beam([smo59405,smo59406]);
const dirsmo68285 = smo59407.getStemDirection();
smo59407.setStemDirection(dirsmo68285);
smo59408.setStemDirection(dirsmo68285);
smo59409.setStemDirection(dirsmo68285);
smo59410.setStemDirection(dirsmo68285);
const smo68285 = new VF.Beam([smo59407,smo59408,smo59409,smo59410]);
const dirsmo68286 = smo59412.getStemDirection();
smo59412.setStemDirection(dirsmo68286);
smo59413.setStemDirection(dirsmo68286);
const smo68286 = new VF.Beam([smo59412,smo59413]);
const dirsmo68287 = smo59414.getStemDirection();
smo59414.setStemDirection(dirsmo68287);
smo59415.setStemDirection(dirsmo68287);
smo59416.setStemDirection(dirsmo68287);
smo59417.setStemDirection(dirsmo68287);
const smo68287 = new VF.Beam([smo59414,smo59415,smo59416,smo59417]);
 
// formatting measures in staff group smo57447
fmtsmo5943524.format([smo59435v0,smo59435v1,smo64640v0,smo64640v1], 545);
const stavesmo59435 = new VF.Stave(90, 525, 603);
stavesmo59435.setAttribute('id', 'stavesmo59435');
stavesmo59435.setBegBarType(1);
stavesmo59435.addClef('treble');
stavesmo59435.setContext(context);
stavesmo59435.draw();
smo59435v0.draw(context, stavesmo59435);
smo59435v1.draw(context, stavesmo59435);
smo68284.setContext(context);
smo68284.draw();
smo68285.setContext(context);
smo68285.draw();
smo68286.setContext(context);
smo68286.draw();
smo68287.setContext(context);
smo68287.draw();
const stavesmo64640 = new VF.Stave(90, 674, 603);
stavesmo64640.setAttribute('id', 'stavesmo64640');
stavesmo64640.setBegBarType(1);
stavesmo64640.addClef('bass');
stavesmo64640.setContext(context);
stavesmo64640.draw();
smo64640v0.draw(context, stavesmo64640);
smo64640v1.draw(context, stavesmo64640);
const leftsmo57447stavesmo594351 = new VF.StaveConnector(stavesmo59435, stavesmo64640).setType(3);
leftsmo57447stavesmo594351.setContext(context).draw();
const fmtsmo5946725 = new VF.Formatter();
//
// voices and notes for stave 0 25
const smo59467v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59467v0ar = [];
const smo59436 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59436.setAttribute('id', 'smo59436');
smo59467v0ar.push(smo59436);
const smo59437 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo59437.setAttribute('id', 'smo59437');
smo59467v0ar.push(smo59437);
const smo59438 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59438.setAttribute('id', 'smo59438');
smo59467v0ar.push(smo59438);
const smo59439 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59439.setAttribute('id', 'smo59439');
smo59467v0ar.push(smo59439);
const smo59440 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo59440.setAttribute('id', 'smo59440');
smo59467v0ar.push(smo59440);
const smo59441 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59441.setAttribute('id', 'smo59441');
smo59467v0ar.push(smo59441);
const smo59442 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59442.setAttribute('id', 'smo59442');
smo59467v0ar.push(smo59442);
const smo59443 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59443.setAttribute('id', 'smo59443');
smo59467v0ar.push(smo59443);
const smo59444 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo59444.setAttribute('id', 'smo59444');
smo59467v0ar.push(smo59444);
const smo59445 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59445.setAttribute('id', 'smo59445');
smo59467v0ar.push(smo59445);
const smo59446 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59446.setAttribute('id', 'smo59446');
smo59467v0ar.push(smo59446);
const smo59447 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo59447.setAttribute('id', 'smo59447');
smo59467v0ar.push(smo59447);
const smo59448 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59448.setAttribute('id', 'smo59448');
smo59467v0ar.push(smo59448);
const smo59449 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59449.setAttribute('id', 'smo59449');
smo59467v0ar.push(smo59449);
smo59467v0.addTickables(smo59467v0ar)
fmtsmo5946725.joinVoices([smo59467v0]);
const smo59467v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59467v1ar = [];
const smo59450 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59450.setAttribute('id', 'smo59450');
smo59450.setStyle({ fillStyle: '#aaaaaa7f' });
smo59467v1ar.push(smo59450);
const smo59451 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59451.setAttribute('id', 'smo59451');
smo59451.setStyle({ fillStyle: '#aaaaaa7f' });
smo59451.addModifier(new VF.Dot(), 0);
smo59451.addModifier(new VF.Dot(), 0);
smo59467v1ar.push(smo59451);
const smo59452 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59452.setAttribute('id', 'smo59452');
smo59452.setStyle({ fillStyle: '#aaaaaa7f' });
smo59467v1ar.push(smo59452);
const smo59453 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59453.setAttribute('id', 'smo59453');
smo59453.setStyle({ fillStyle: '#aaaaaa7f' });
smo59453.addModifier(new VF.Dot(), 0);
smo59453.addModifier(new VF.Dot(), 0);
smo59467v1ar.push(smo59453);
smo59467v1.addTickables(smo59467v1ar)
fmtsmo5946725.joinVoices([smo59467v1]);
const fmtsmo6466225 = new VF.Formatter();
//
// voices and notes for stave 1 25
const smo64662v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64662v0ar = [];
const smo64641 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo64641.setAttribute('id', 'smo64641');
smo64662v0ar.push(smo64641);
const smo64642 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo64642.setAttribute('id', 'smo64642');
smo64642.addModifier(new VF.Dot(), 0);
smo64662v0ar.push(smo64642);
const smo64643 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo64643.setAttribute('id', 'smo64643');
smo64662v0ar.push(smo64643);
const smo64644 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo64644.setAttribute('id', 'smo64644');
smo64662v0ar.push(smo64644);
const smo64645 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo64645.setAttribute('id', 'smo64645');
smo64645.addModifier(new VF.Dot(), 0);
smo64662v0ar.push(smo64645);
const smo64646 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo64646.setAttribute('id', 'smo64646');
smo64662v0ar.push(smo64646);
smo64662v0.addTickables(smo64662v0ar)
fmtsmo6466225.joinVoices([smo64662v0]);
const smo64662v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64662v1ar = [];
const smo64647 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo64647.setAttribute('id', 'smo64647');
smo64647.setStyle({ fillStyle: "#115511" });
smo64662v1ar.push(smo64647);
const smo64648 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo64648.setAttribute('id', 'smo64648');
smo64648.setStyle({ fillStyle: "#115511" });
smo64662v1ar.push(smo64648);
smo64662v1.addTickables(smo64662v1ar)
fmtsmo6466225.joinVoices([smo64662v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68292 = smo59437.getStemDirection();
smo59437.setStemDirection(dirsmo68292);
smo59438.setStemDirection(dirsmo68292);
const smo68292 = new VF.Beam([smo59437,smo59438]);
const dirsmo68293 = smo59439.getStemDirection();
smo59439.setStemDirection(dirsmo68293);
smo59440.setStemDirection(dirsmo68293);
smo59441.setStemDirection(dirsmo68293);
smo59442.setStemDirection(dirsmo68293);
const smo68293 = new VF.Beam([smo59439,smo59440,smo59441,smo59442]);
const dirsmo68294 = smo59444.getStemDirection();
smo59444.setStemDirection(dirsmo68294);
smo59445.setStemDirection(dirsmo68294);
const smo68294 = new VF.Beam([smo59444,smo59445]);
const dirsmo68295 = smo59446.getStemDirection();
smo59446.setStemDirection(dirsmo68295);
smo59447.setStemDirection(dirsmo68295);
smo59448.setStemDirection(dirsmo68295);
smo59449.setStemDirection(dirsmo68295);
const smo68295 = new VF.Beam([smo59446,smo59447,smo59448,smo59449]);
 
// formatting measures in staff group smo57447
fmtsmo5946725.format([smo59467v0,smo59467v1,smo64662v0,smo64662v1], 544);
const stavesmo59467 = new VF.Stave(693, 525, 558);
stavesmo59467.setAttribute('id', 'stavesmo59467');
stavesmo59467.setBegBarType(VF.Barline.type.NONE);
stavesmo59467.setContext(context);
stavesmo59467.draw();
smo59467v0.draw(context, stavesmo59467);
smo59467v1.draw(context, stavesmo59467);
smo68292.setContext(context);
smo68292.draw();
smo68293.setContext(context);
smo68293.draw();
smo68294.setContext(context);
smo68294.draw();
smo68295.setContext(context);
smo68295.draw();
const stavesmo64662 = new VF.Stave(693, 674, 558);
stavesmo64662.setAttribute('id', 'stavesmo64662');
stavesmo64662.setBegBarType(VF.Barline.type.NONE);
stavesmo64662.setContext(context);
stavesmo64662.draw();
smo64662v0.draw(context, stavesmo64662);
smo64662v1.draw(context, stavesmo64662);
const fmtsmo5949926 = new VF.Formatter();
//
// voices and notes for stave 0 26
const smo59499v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59499v0ar = [];
const smo59468 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59468.setAttribute('id', 'smo59468');
smo59499v0ar.push(smo59468);
const smo59469 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo59469.setAttribute('id', 'smo59469');
smo59499v0ar.push(smo59469);
const smo59470 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo59470.setAttribute('id', 'smo59470');
smo59499v0ar.push(smo59470);
const smo59471 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59471.setAttribute('id', 'smo59471');
smo59499v0ar.push(smo59471);
const smo59472 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo59472.setAttribute('id', 'smo59472');
smo59499v0ar.push(smo59472);
const smo59473 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo59473.setAttribute('id', 'smo59473');
smo59499v0ar.push(smo59473);
const smo59474 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59474.setAttribute('id', 'smo59474');
smo59499v0ar.push(smo59474);
const smo59475 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59475.setAttribute('id', 'smo59475');
smo59499v0ar.push(smo59475);
const smo59476 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo59476.setAttribute('id', 'smo59476');
smo59499v0ar.push(smo59476);
const smo59477 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo59477.setAttribute('id', 'smo59477');
smo59499v0ar.push(smo59477);
const smo59478 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59478.setAttribute('id', 'smo59478');
smo59499v0ar.push(smo59478);
const smo59479 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo59479.setAttribute('id', 'smo59479');
smo59499v0ar.push(smo59479);
const smo59480 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo59480.setAttribute('id', 'smo59480');
smo59499v0ar.push(smo59480);
const smo59481 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59481.setAttribute('id', 'smo59481');
smo59499v0ar.push(smo59481);
smo59499v0.addTickables(smo59499v0ar)
fmtsmo5949926.joinVoices([smo59499v0]);
const smo59499v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59499v1ar = [];
const smo59482 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59482.setAttribute('id', 'smo59482');
smo59482.setStyle({ fillStyle: '#aaaaaa7f' });
smo59499v1ar.push(smo59482);
const smo59483 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59483.setAttribute('id', 'smo59483');
smo59483.setStyle({ fillStyle: '#aaaaaa7f' });
smo59483.addModifier(new VF.Dot(), 0);
smo59483.addModifier(new VF.Dot(), 0);
smo59499v1ar.push(smo59483);
const smo59484 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59484.setAttribute('id', 'smo59484');
smo59484.setStyle({ fillStyle: '#aaaaaa7f' });
smo59499v1ar.push(smo59484);
const smo59485 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59485.setAttribute('id', 'smo59485');
smo59485.setStyle({ fillStyle: '#aaaaaa7f' });
smo59485.addModifier(new VF.Dot(), 0);
smo59485.addModifier(new VF.Dot(), 0);
smo59499v1ar.push(smo59485);
smo59499v1.addTickables(smo59499v1ar)
fmtsmo5949926.joinVoices([smo59499v1]);
const fmtsmo6468426 = new VF.Formatter();
//
// voices and notes for stave 1 26
const smo64684v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64684v0ar = [];
const smo64663 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo64663.setAttribute('id', 'smo64663');
smo64684v0ar.push(smo64663);
const smo64664 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo64664.setAttribute('id', 'smo64664');
smo64664.addModifier(new VF.Dot(), 0);
smo64684v0ar.push(smo64664);
const smo64665 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo64665.setAttribute('id', 'smo64665');
smo64684v0ar.push(smo64665);
const smo64666 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo64666.setAttribute('id', 'smo64666');
smo64684v0ar.push(smo64666);
const smo64667 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo64667.setAttribute('id', 'smo64667');
smo64667.addModifier(new VF.Dot(), 0);
smo64684v0ar.push(smo64667);
const smo64668 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo64668.setAttribute('id', 'smo64668');
smo64684v0ar.push(smo64668);
smo64684v0.addTickables(smo64684v0ar)
fmtsmo6468426.joinVoices([smo64684v0]);
const smo64684v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64684v1ar = [];
const smo64669 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo64669.setAttribute('id', 'smo64669');
smo64669.setStyle({ fillStyle: "#115511" });
smo64684v1ar.push(smo64669);
const smo64670 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo64670.setAttribute('id', 'smo64670');
smo64670.setStyle({ fillStyle: "#115511" });
smo64684v1ar.push(smo64670);
smo64684v1.addTickables(smo64684v1ar)
fmtsmo6468426.joinVoices([smo64684v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68300 = smo59469.getStemDirection();
smo59469.setStemDirection(dirsmo68300);
smo59470.setStemDirection(dirsmo68300);
const smo68300 = new VF.Beam([smo59469,smo59470]);
const dirsmo68301 = smo59471.getStemDirection();
smo59471.setStemDirection(dirsmo68301);
smo59472.setStemDirection(dirsmo68301);
smo59473.setStemDirection(dirsmo68301);
smo59474.setStemDirection(dirsmo68301);
const smo68301 = new VF.Beam([smo59471,smo59472,smo59473,smo59474]);
const dirsmo68302 = smo59476.getStemDirection();
smo59476.setStemDirection(dirsmo68302);
smo59477.setStemDirection(dirsmo68302);
const smo68302 = new VF.Beam([smo59476,smo59477]);
const dirsmo68303 = smo59478.getStemDirection();
smo59478.setStemDirection(dirsmo68303);
smo59479.setStemDirection(dirsmo68303);
smo59480.setStemDirection(dirsmo68303);
smo59481.setStemDirection(dirsmo68303);
const smo68303 = new VF.Beam([smo59478,smo59479,smo59480,smo59481]);
 
// formatting measures in staff group smo57447
fmtsmo5949926.format([smo59499v0,smo59499v1,smo64684v0,smo64684v1], 544);
const stavesmo59499 = new VF.Stave(1251, 525, 558);
stavesmo59499.setAttribute('id', 'stavesmo59499');
stavesmo59499.setBegBarType(VF.Barline.type.NONE);
stavesmo59499.setContext(context);
stavesmo59499.draw();
smo59499v0.draw(context, stavesmo59499);
smo59499v1.draw(context, stavesmo59499);
smo68300.setContext(context);
smo68300.draw();
smo68301.setContext(context);
smo68301.draw();
smo68302.setContext(context);
smo68302.draw();
smo68303.setContext(context);
smo68303.draw();
const stavesmo64684 = new VF.Stave(1251, 674, 558);
stavesmo64684.setAttribute('id', 'stavesmo64684');
stavesmo64684.setBegBarType(VF.Barline.type.NONE);
stavesmo64684.setContext(context);
stavesmo64684.draw();
smo64684v0.draw(context, stavesmo64684);
smo64684v1.draw(context, stavesmo64684);
const rightsmo57447stavesmo594991 = new VF.StaveConnector(stavesmo59499, stavesmo64684).setType(0);
rightsmo57447stavesmo594991.setContext(context).draw();
const fmtsmo5953127 = new VF.Formatter();
//
// voices and notes for stave 0 27
const smo59531v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59531v0ar = [];
const smo59500 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59500.setAttribute('id', 'smo59500');
smo59531v0ar.push(smo59500);
const smo59501 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo59501.setAttribute('id', 'smo59501');
smo59531v0ar.push(smo59501);
const smo59502 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59502.setAttribute('id', 'smo59502');
smo59531v0ar.push(smo59502);
const smo59503 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo59503.setAttribute('id', 'smo59503');
const smo595030acc = new VF.Accidental('#');
smo59503.addModifier(smo595030acc, 0);
smo59531v0ar.push(smo59503);
const smo59504 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo59504.setAttribute('id', 'smo59504');
smo59531v0ar.push(smo59504);
const smo59505 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59505.setAttribute('id', 'smo59505');
smo59531v0ar.push(smo59505);
const smo59506 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo59506.setAttribute('id', 'smo59506');
smo59531v0ar.push(smo59506);
const smo59507 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59507.setAttribute('id', 'smo59507');
smo59531v0ar.push(smo59507);
const smo59508 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo59508.setAttribute('id', 'smo59508');
smo59531v0ar.push(smo59508);
const smo59509 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59509.setAttribute('id', 'smo59509');
smo59531v0ar.push(smo59509);
const smo59510 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo59510.setAttribute('id', 'smo59510');
smo59531v0ar.push(smo59510);
const smo59511 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo59511.setAttribute('id', 'smo59511');
smo59531v0ar.push(smo59511);
const smo59512 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59512.setAttribute('id', 'smo59512');
smo59531v0ar.push(smo59512);
const smo59513 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo59513.setAttribute('id', 'smo59513');
smo59531v0ar.push(smo59513);
smo59531v0.addTickables(smo59531v0ar)
fmtsmo5953127.joinVoices([smo59531v0]);
const smo59531v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59531v1ar = [];
const smo59514 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59514.setAttribute('id', 'smo59514');
smo59514.setStyle({ fillStyle: '#aaaaaa7f' });
smo59531v1ar.push(smo59514);
const smo59515 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59515.setAttribute('id', 'smo59515');
smo59515.setStyle({ fillStyle: '#aaaaaa7f' });
smo59515.addModifier(new VF.Dot(), 0);
smo59515.addModifier(new VF.Dot(), 0);
smo59531v1ar.push(smo59515);
const smo59516 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/3/r"]}'))
smo59516.setAttribute('id', 'smo59516');
smo59516.setStyle({ fillStyle: "#115511" });
smo59531v1ar.push(smo59516);
const smo59517 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59517.setAttribute('id', 'smo59517');
smo59517.setStyle({ fillStyle: '#aaaaaa7f' });
smo59517.addModifier(new VF.Dot(), 0);
smo59517.addModifier(new VF.Dot(), 0);
smo59531v1ar.push(smo59517);
smo59531v1.addTickables(smo59531v1ar)
fmtsmo5953127.joinVoices([smo59531v1]);
const fmtsmo6470627 = new VF.Formatter();
//
// voices and notes for stave 1 27
const smo64706v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64706v0ar = [];
const smo64685 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo64685.setAttribute('id', 'smo64685');
smo64706v0ar.push(smo64685);
const smo64686 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/3/n"]}'))
smo64686.setAttribute('id', 'smo64686');
const smo646860acc = new VF.Accidental('#');
smo64686.addModifier(smo646860acc, 0);
smo64686.addModifier(new VF.Dot(), 0);
smo64706v0ar.push(smo64686);
const smo64687 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/3/n"]}'))
smo64687.setAttribute('id', 'smo64687');
smo64706v0ar.push(smo64687);
const smo64688 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo64688.setAttribute('id', 'smo64688');
smo64706v0ar.push(smo64688);
const smo64689 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/3/n"]}'))
smo64689.setAttribute('id', 'smo64689');
smo64689.addModifier(new VF.Dot(), 0);
smo64706v0ar.push(smo64689);
const smo64690 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/3/n"]}'))
smo64690.setAttribute('id', 'smo64690');
smo64706v0ar.push(smo64690);
smo64706v0.addTickables(smo64706v0ar)
fmtsmo6470627.joinVoices([smo64706v0]);
const smo64706v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64706v1ar = [];
const smo64691 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo64691.setAttribute('id', 'smo64691');
smo64691.setStyle({ fillStyle: "#115511" });
smo64706v1ar.push(smo64691);
const smo64692 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo64692.setAttribute('id', 'smo64692');
smo64692.setStyle({ fillStyle: "#115511" });
smo64706v1ar.push(smo64692);
smo64706v1.addTickables(smo64706v1ar)
fmtsmo6470627.joinVoices([smo64706v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68316 = smo59501.getStemDirection();
smo59501.setStemDirection(dirsmo68316);
smo59502.setStemDirection(dirsmo68316);
const smo68316 = new VF.Beam([smo59501,smo59502]);
const dirsmo68317 = smo59503.getStemDirection();
smo59503.setStemDirection(dirsmo68317);
smo59504.setStemDirection(dirsmo68317);
smo59505.setStemDirection(dirsmo68317);
smo59506.setStemDirection(dirsmo68317);
const smo68317 = new VF.Beam([smo59503,smo59504,smo59505,smo59506]);
const dirsmo68318 = smo59508.getStemDirection();
smo59508.setStemDirection(dirsmo68318);
smo59509.setStemDirection(dirsmo68318);
const smo68318 = new VF.Beam([smo59508,smo59509]);
const dirsmo68319 = smo59510.getStemDirection();
smo59510.setStemDirection(dirsmo68319);
smo59511.setStemDirection(dirsmo68319);
smo59512.setStemDirection(dirsmo68319);
smo59513.setStemDirection(dirsmo68319);
const smo68319 = new VF.Beam([smo59510,smo59511,smo59512,smo59513]);
 
// formatting measures in staff group smo57447
fmtsmo5953127.format([smo59531v0,smo59531v1,smo64706v0,smo64706v1], 578);
const stavesmo59531 = new VF.Stave(90, 801, 636);
stavesmo59531.setAttribute('id', 'stavesmo59531');
stavesmo59531.setBegBarType(1);
stavesmo59531.addClef('treble');
stavesmo59531.setContext(context);
stavesmo59531.draw();
smo59531v0.draw(context, stavesmo59531);
smo59531v1.draw(context, stavesmo59531);
smo68316.setContext(context);
smo68316.draw();
smo68317.setContext(context);
smo68317.draw();
smo68318.setContext(context);
smo68318.draw();
smo68319.setContext(context);
smo68319.draw();
const stavesmo64706 = new VF.Stave(90, 947, 636);
stavesmo64706.setAttribute('id', 'stavesmo64706');
stavesmo64706.setBegBarType(1);
stavesmo64706.addClef('bass');
stavesmo64706.setContext(context);
stavesmo64706.draw();
smo64706v0.draw(context, stavesmo64706);
smo64706v1.draw(context, stavesmo64706);
const leftsmo57447stavesmo595311 = new VF.StaveConnector(stavesmo59531, stavesmo64706).setType(3);
leftsmo57447stavesmo595311.setContext(context).draw();
const fmtsmo5956328 = new VF.Formatter();
//
// voices and notes for stave 0 28
const smo59563v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59563v0ar = [];
const smo59532 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59532.setAttribute('id', 'smo59532');
smo59563v0ar.push(smo59532);
const smo59533 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo59533.setAttribute('id', 'smo59533');
smo59563v0ar.push(smo59533);
const smo59534 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59534.setAttribute('id', 'smo59534');
smo59563v0ar.push(smo59534);
const smo59535 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo59535.setAttribute('id', 'smo59535');
smo59563v0ar.push(smo59535);
const smo59536 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo59536.setAttribute('id', 'smo59536');
smo59563v0ar.push(smo59536);
const smo59537 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59537.setAttribute('id', 'smo59537');
smo59563v0ar.push(smo59537);
const smo59538 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo59538.setAttribute('id', 'smo59538');
smo59563v0ar.push(smo59538);
const smo59539 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59539.setAttribute('id', 'smo59539');
smo59563v0ar.push(smo59539);
const smo59540 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo59540.setAttribute('id', 'smo59540');
smo59563v0ar.push(smo59540);
const smo59541 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59541.setAttribute('id', 'smo59541');
smo59563v0ar.push(smo59541);
const smo59542 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo59542.setAttribute('id', 'smo59542');
smo59563v0ar.push(smo59542);
const smo59543 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo59543.setAttribute('id', 'smo59543');
smo59563v0ar.push(smo59543);
const smo59544 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59544.setAttribute('id', 'smo59544');
smo59563v0ar.push(smo59544);
const smo59545 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo59545.setAttribute('id', 'smo59545');
smo59563v0ar.push(smo59545);
smo59563v0.addTickables(smo59563v0ar)
fmtsmo5956328.joinVoices([smo59563v0]);
const smo59563v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59563v1ar = [];
const smo59546 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59546.setAttribute('id', 'smo59546');
smo59546.setStyle({ fillStyle: '#aaaaaa7f' });
smo59563v1ar.push(smo59546);
const smo59547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59547.setAttribute('id', 'smo59547');
smo59547.setStyle({ fillStyle: '#aaaaaa7f' });
smo59547.addModifier(new VF.Dot(), 0);
smo59547.addModifier(new VF.Dot(), 0);
smo59563v1ar.push(smo59547);
const smo59548 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59548.setAttribute('id', 'smo59548');
smo59548.setStyle({ fillStyle: '#aaaaaa7f' });
smo59563v1ar.push(smo59548);
const smo59549 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59549.setAttribute('id', 'smo59549');
smo59549.setStyle({ fillStyle: '#aaaaaa7f' });
smo59549.addModifier(new VF.Dot(), 0);
smo59549.addModifier(new VF.Dot(), 0);
smo59563v1ar.push(smo59549);
smo59563v1.addTickables(smo59563v1ar)
fmtsmo5956328.joinVoices([smo59563v1]);
const fmtsmo6472828 = new VF.Formatter();
//
// voices and notes for stave 1 28
const smo64728v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64728v0ar = [];
const smo64707 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo64707.setAttribute('id', 'smo64707');
smo64728v0ar.push(smo64707);
const smo64708 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo64708.setAttribute('id', 'smo64708');
smo64708.addModifier(new VF.Dot(), 0);
smo64728v0ar.push(smo64708);
const smo64709 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo64709.setAttribute('id', 'smo64709');
smo64728v0ar.push(smo64709);
const smo64710 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo64710.setAttribute('id', 'smo64710');
smo64728v0ar.push(smo64710);
const smo64711 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo64711.setAttribute('id', 'smo64711');
smo64711.addModifier(new VF.Dot(), 0);
smo64728v0ar.push(smo64711);
const smo64712 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo64712.setAttribute('id', 'smo64712');
smo64728v0ar.push(smo64712);
smo64728v0.addTickables(smo64728v0ar)
fmtsmo6472828.joinVoices([smo64728v0]);
const smo64728v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64728v1ar = [];
const smo64713 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo64713.setAttribute('id', 'smo64713');
smo64713.setStyle({ fillStyle: "#115511" });
smo64728v1ar.push(smo64713);
const smo64714 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo64714.setAttribute('id', 'smo64714');
smo64714.setStyle({ fillStyle: "#115511" });
smo64728v1ar.push(smo64714);
smo64728v1.addTickables(smo64728v1ar)
fmtsmo6472828.joinVoices([smo64728v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68324 = smo59533.getStemDirection();
smo59533.setStemDirection(dirsmo68324);
smo59534.setStemDirection(dirsmo68324);
const smo68324 = new VF.Beam([smo59533,smo59534]);
const dirsmo68325 = smo59535.getStemDirection();
smo59535.setStemDirection(dirsmo68325);
smo59536.setStemDirection(dirsmo68325);
smo59537.setStemDirection(dirsmo68325);
smo59538.setStemDirection(dirsmo68325);
const smo68325 = new VF.Beam([smo59535,smo59536,smo59537,smo59538]);
const dirsmo68326 = smo59540.getStemDirection();
smo59540.setStemDirection(dirsmo68326);
smo59541.setStemDirection(dirsmo68326);
const smo68326 = new VF.Beam([smo59540,smo59541]);
const dirsmo68327 = smo59542.getStemDirection();
smo59542.setStemDirection(dirsmo68327);
smo59543.setStemDirection(dirsmo68327);
smo59544.setStemDirection(dirsmo68327);
smo59545.setStemDirection(dirsmo68327);
const smo68327 = new VF.Beam([smo59542,smo59543,smo59544,smo59545]);
 
// formatting measures in staff group smo57447
fmtsmo5956328.format([smo59563v0,smo59563v1,smo64728v0,smo64728v1], 527);
const stavesmo59563 = new VF.Stave(726, 801, 541);
stavesmo59563.setAttribute('id', 'stavesmo59563');
stavesmo59563.setBegBarType(VF.Barline.type.NONE);
stavesmo59563.setContext(context);
stavesmo59563.draw();
smo59563v0.draw(context, stavesmo59563);
smo59563v1.draw(context, stavesmo59563);
smo68324.setContext(context);
smo68324.draw();
smo68325.setContext(context);
smo68325.draw();
smo68326.setContext(context);
smo68326.draw();
smo68327.setContext(context);
smo68327.draw();
const stavesmo64728 = new VF.Stave(726, 947, 541);
stavesmo64728.setAttribute('id', 'stavesmo64728');
stavesmo64728.setBegBarType(VF.Barline.type.NONE);
stavesmo64728.setContext(context);
stavesmo64728.draw();
smo64728v0.draw(context, stavesmo64728);
smo64728v1.draw(context, stavesmo64728);
const fmtsmo5959529 = new VF.Formatter();
//
// voices and notes for stave 0 29
const smo59595v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59595v0ar = [];
const smo59564 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59564.setAttribute('id', 'smo59564');
smo59595v0ar.push(smo59564);
const smo59565 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo59565.setAttribute('id', 'smo59565');
smo59595v0ar.push(smo59565);
const smo59566 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59566.setAttribute('id', 'smo59566');
smo59595v0ar.push(smo59566);
const smo59567 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59567.setAttribute('id', 'smo59567');
smo59595v0ar.push(smo59567);
const smo59568 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo59568.setAttribute('id', 'smo59568');
smo59595v0ar.push(smo59568);
const smo59569 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59569.setAttribute('id', 'smo59569');
smo59595v0ar.push(smo59569);
const smo59570 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59570.setAttribute('id', 'smo59570');
smo59595v0ar.push(smo59570);
const smo59571 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59571.setAttribute('id', 'smo59571');
smo59595v0ar.push(smo59571);
const smo59572 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo59572.setAttribute('id', 'smo59572');
smo59595v0ar.push(smo59572);
const smo59573 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59573.setAttribute('id', 'smo59573');
smo59595v0ar.push(smo59573);
const smo59574 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59574.setAttribute('id', 'smo59574');
smo59595v0ar.push(smo59574);
const smo59575 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo59575.setAttribute('id', 'smo59575');
smo59595v0ar.push(smo59575);
const smo59576 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59576.setAttribute('id', 'smo59576');
smo59595v0ar.push(smo59576);
const smo59577 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59577.setAttribute('id', 'smo59577');
smo59595v0ar.push(smo59577);
smo59595v0.addTickables(smo59595v0ar)
fmtsmo5959529.joinVoices([smo59595v0]);
const smo59595v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59595v1ar = [];
const smo59578 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59578.setAttribute('id', 'smo59578');
smo59578.setStyle({ fillStyle: '#aaaaaa7f' });
smo59595v1ar.push(smo59578);
const smo59579 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59579.setAttribute('id', 'smo59579');
smo59579.setStyle({ fillStyle: '#aaaaaa7f' });
smo59579.addModifier(new VF.Dot(), 0);
smo59579.addModifier(new VF.Dot(), 0);
smo59595v1ar.push(smo59579);
const smo59580 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59580.setAttribute('id', 'smo59580');
smo59580.setStyle({ fillStyle: '#aaaaaa7f' });
smo59595v1ar.push(smo59580);
const smo59581 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59581.setAttribute('id', 'smo59581');
smo59581.setStyle({ fillStyle: '#aaaaaa7f' });
smo59581.addModifier(new VF.Dot(), 0);
smo59581.addModifier(new VF.Dot(), 0);
smo59595v1ar.push(smo59581);
smo59595v1.addTickables(smo59595v1ar)
fmtsmo5959529.joinVoices([smo59595v1]);
const fmtsmo6475029 = new VF.Formatter();
//
// voices and notes for stave 1 29
const smo64750v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64750v0ar = [];
const smo64729 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo64729.setAttribute('id', 'smo64729');
smo64750v0ar.push(smo64729);
const smo64730 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo64730.setAttribute('id', 'smo64730');
smo64730.addModifier(new VF.Dot(), 0);
smo64750v0ar.push(smo64730);
const smo64731 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo64731.setAttribute('id', 'smo64731');
smo64750v0ar.push(smo64731);
const smo64732 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo64732.setAttribute('id', 'smo64732');
smo64750v0ar.push(smo64732);
const smo64733 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo64733.setAttribute('id', 'smo64733');
smo64733.addModifier(new VF.Dot(), 0);
smo64750v0ar.push(smo64733);
const smo64734 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo64734.setAttribute('id', 'smo64734');
smo64750v0ar.push(smo64734);
smo64750v0.addTickables(smo64750v0ar)
fmtsmo6475029.joinVoices([smo64750v0]);
const smo64750v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64750v1ar = [];
const smo64735 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo64735.setAttribute('id', 'smo64735');
smo64735.setStyle({ fillStyle: "#115511" });
smo64750v1ar.push(smo64735);
const smo64736 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo64736.setAttribute('id', 'smo64736');
smo64736.setStyle({ fillStyle: "#115511" });
smo64750v1ar.push(smo64736);
smo64750v1.addTickables(smo64750v1ar)
fmtsmo6475029.joinVoices([smo64750v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68332 = smo59565.getStemDirection();
smo59565.setStemDirection(dirsmo68332);
smo59566.setStemDirection(dirsmo68332);
const smo68332 = new VF.Beam([smo59565,smo59566]);
const dirsmo68333 = smo59567.getStemDirection();
smo59567.setStemDirection(dirsmo68333);
smo59568.setStemDirection(dirsmo68333);
smo59569.setStemDirection(dirsmo68333);
smo59570.setStemDirection(dirsmo68333);
const smo68333 = new VF.Beam([smo59567,smo59568,smo59569,smo59570]);
const dirsmo68334 = smo59572.getStemDirection();
smo59572.setStemDirection(dirsmo68334);
smo59573.setStemDirection(dirsmo68334);
const smo68334 = new VF.Beam([smo59572,smo59573]);
const dirsmo68335 = smo59574.getStemDirection();
smo59574.setStemDirection(dirsmo68335);
smo59575.setStemDirection(dirsmo68335);
smo59576.setStemDirection(dirsmo68335);
smo59577.setStemDirection(dirsmo68335);
const smo68335 = new VF.Beam([smo59574,smo59575,smo59576,smo59577]);
 
// formatting measures in staff group smo57447
fmtsmo5959529.format([smo59595v0,smo59595v1,smo64750v0,smo64750v1], 527);
const stavesmo59595 = new VF.Stave(1267, 801, 541);
stavesmo59595.setAttribute('id', 'stavesmo59595');
stavesmo59595.setBegBarType(VF.Barline.type.NONE);
stavesmo59595.setContext(context);
stavesmo59595.draw();
smo59595v0.draw(context, stavesmo59595);
smo59595v1.draw(context, stavesmo59595);
smo68332.setContext(context);
smo68332.draw();
smo68333.setContext(context);
smo68333.draw();
smo68334.setContext(context);
smo68334.draw();
smo68335.setContext(context);
smo68335.draw();
const stavesmo64750 = new VF.Stave(1267, 947, 541);
stavesmo64750.setAttribute('id', 'stavesmo64750');
stavesmo64750.setBegBarType(VF.Barline.type.NONE);
stavesmo64750.setContext(context);
stavesmo64750.draw();
smo64750v0.draw(context, stavesmo64750);
smo64750v1.draw(context, stavesmo64750);
const rightsmo57447stavesmo595951 = new VF.StaveConnector(stavesmo59595, stavesmo64750).setType(0);
rightsmo57447stavesmo595951.setContext(context).draw();
const fmtsmo5962730 = new VF.Formatter();
//
// voices and notes for stave 0 30
const smo59627v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59627v0ar = [];
const smo59596 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59596.setAttribute('id', 'smo59596');
smo59627v0ar.push(smo59596);
const smo59597 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo59597.setAttribute('id', 'smo59597');
smo59627v0ar.push(smo59597);
const smo59598 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo59598.setAttribute('id', 'smo59598');
smo59627v0ar.push(smo59598);
const smo59599 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59599.setAttribute('id', 'smo59599');
smo59627v0ar.push(smo59599);
const smo59600 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo59600.setAttribute('id', 'smo59600');
smo59627v0ar.push(smo59600);
const smo59601 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo59601.setAttribute('id', 'smo59601');
smo59627v0ar.push(smo59601);
const smo59602 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59602.setAttribute('id', 'smo59602');
smo59627v0ar.push(smo59602);
const smo59603 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59603.setAttribute('id', 'smo59603');
smo59627v0ar.push(smo59603);
const smo59604 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo59604.setAttribute('id', 'smo59604');
smo59627v0ar.push(smo59604);
const smo59605 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo59605.setAttribute('id', 'smo59605');
smo59627v0ar.push(smo59605);
const smo59606 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59606.setAttribute('id', 'smo59606');
smo59627v0ar.push(smo59606);
const smo59607 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo59607.setAttribute('id', 'smo59607');
smo59627v0ar.push(smo59607);
const smo59608 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo59608.setAttribute('id', 'smo59608');
smo59627v0ar.push(smo59608);
const smo59609 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59609.setAttribute('id', 'smo59609');
smo59627v0ar.push(smo59609);
smo59627v0.addTickables(smo59627v0ar)
fmtsmo5962730.joinVoices([smo59627v0]);
const smo59627v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59627v1ar = [];
const smo59610 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59610.setAttribute('id', 'smo59610');
smo59610.setStyle({ fillStyle: '#aaaaaa7f' });
smo59627v1ar.push(smo59610);
const smo59611 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59611.setAttribute('id', 'smo59611');
smo59611.setStyle({ fillStyle: '#aaaaaa7f' });
smo59611.addModifier(new VF.Dot(), 0);
smo59611.addModifier(new VF.Dot(), 0);
smo59627v1ar.push(smo59611);
const smo59612 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59612.setAttribute('id', 'smo59612');
smo59612.setStyle({ fillStyle: '#aaaaaa7f' });
smo59627v1ar.push(smo59612);
const smo59613 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59613.setAttribute('id', 'smo59613');
smo59613.setStyle({ fillStyle: '#aaaaaa7f' });
smo59613.addModifier(new VF.Dot(), 0);
smo59613.addModifier(new VF.Dot(), 0);
smo59627v1ar.push(smo59613);
smo59627v1.addTickables(smo59627v1ar)
fmtsmo5962730.joinVoices([smo59627v1]);
const fmtsmo6477230 = new VF.Formatter();
//
// voices and notes for stave 1 30
const smo64772v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64772v0ar = [];
const smo64751 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo64751.setAttribute('id', 'smo64751');
smo64772v0ar.push(smo64751);
const smo64752 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo64752.setAttribute('id', 'smo64752');
smo64752.addModifier(new VF.Dot(), 0);
smo64772v0ar.push(smo64752);
const smo64753 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo64753.setAttribute('id', 'smo64753');
smo64772v0ar.push(smo64753);
const smo64754 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo64754.setAttribute('id', 'smo64754');
smo64772v0ar.push(smo64754);
const smo64755 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo64755.setAttribute('id', 'smo64755');
smo64755.addModifier(new VF.Dot(), 0);
smo64772v0ar.push(smo64755);
const smo64756 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo64756.setAttribute('id', 'smo64756');
smo64772v0ar.push(smo64756);
smo64772v0.addTickables(smo64772v0ar)
fmtsmo6477230.joinVoices([smo64772v0]);
const smo64772v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64772v1ar = [];
const smo64757 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo64757.setAttribute('id', 'smo64757');
smo64757.setStyle({ fillStyle: "#115511" });
smo64772v1ar.push(smo64757);
const smo64758 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo64758.setAttribute('id', 'smo64758');
smo64758.setStyle({ fillStyle: "#115511" });
smo64772v1ar.push(smo64758);
smo64772v1.addTickables(smo64772v1ar)
fmtsmo6477230.joinVoices([smo64772v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68348 = smo59597.getStemDirection();
smo59597.setStemDirection(dirsmo68348);
smo59598.setStemDirection(dirsmo68348);
const smo68348 = new VF.Beam([smo59597,smo59598]);
const dirsmo68349 = smo59599.getStemDirection();
smo59599.setStemDirection(dirsmo68349);
smo59600.setStemDirection(dirsmo68349);
smo59601.setStemDirection(dirsmo68349);
smo59602.setStemDirection(dirsmo68349);
const smo68349 = new VF.Beam([smo59599,smo59600,smo59601,smo59602]);
const dirsmo68350 = smo59604.getStemDirection();
smo59604.setStemDirection(dirsmo68350);
smo59605.setStemDirection(dirsmo68350);
const smo68350 = new VF.Beam([smo59604,smo59605]);
const dirsmo68351 = smo59606.getStemDirection();
smo59606.setStemDirection(dirsmo68351);
smo59607.setStemDirection(dirsmo68351);
smo59608.setStemDirection(dirsmo68351);
smo59609.setStemDirection(dirsmo68351);
const smo68351 = new VF.Beam([smo59606,smo59607,smo59608,smo59609]);
 
// formatting measures in staff group smo57447
fmtsmo5962730.format([smo59627v0,smo59627v1,smo64772v0,smo64772v1], 526);
const stavesmo59627 = new VF.Stave(90, 1074, 584);
stavesmo59627.setAttribute('id', 'stavesmo59627');
stavesmo59627.setBegBarType(1);
stavesmo59627.addClef('treble');
stavesmo59627.setContext(context);
stavesmo59627.draw();
smo59627v0.draw(context, stavesmo59627);
smo59627v1.draw(context, stavesmo59627);
smo68348.setContext(context);
smo68348.draw();
smo68349.setContext(context);
smo68349.draw();
smo68350.setContext(context);
smo68350.draw();
smo68351.setContext(context);
smo68351.draw();
const stavesmo64772 = new VF.Stave(90, 1223, 584);
stavesmo64772.setAttribute('id', 'stavesmo64772');
stavesmo64772.setBegBarType(1);
stavesmo64772.addClef('bass');
stavesmo64772.setContext(context);
stavesmo64772.draw();
smo64772v0.draw(context, stavesmo64772);
smo64772v1.draw(context, stavesmo64772);
const leftsmo57447stavesmo596271 = new VF.StaveConnector(stavesmo59627, stavesmo64772).setType(3);
leftsmo57447stavesmo596271.setContext(context).draw();
const fmtsmo5965931 = new VF.Formatter();
//
// voices and notes for stave 0 31
const smo59659v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59659v0ar = [];
const smo59628 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59628.setAttribute('id', 'smo59628');
smo59659v0ar.push(smo59628);
const smo59629 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo59629.setAttribute('id', 'smo59629');
smo59659v0ar.push(smo59629);
const smo59630 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/3/n"]}'))
smo59630.setAttribute('id', 'smo59630');
const smo596300acc = new VF.Accidental('b');
smo59630.addModifier(smo596300acc, 0);
smo59659v0ar.push(smo59630);
const smo59631 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo59631.setAttribute('id', 'smo59631');
smo59659v0ar.push(smo59631);
const smo59632 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo59632.setAttribute('id', 'smo59632');
smo59659v0ar.push(smo59632);
const smo59633 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/3/n"]}'))
smo59633.setAttribute('id', 'smo59633');
smo59659v0ar.push(smo59633);
const smo59634 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo59634.setAttribute('id', 'smo59634');
smo59659v0ar.push(smo59634);
const smo59635 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59635.setAttribute('id', 'smo59635');
smo59659v0ar.push(smo59635);
const smo59636 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo59636.setAttribute('id', 'smo59636');
smo59659v0ar.push(smo59636);
const smo59637 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/3/n"]}'))
smo59637.setAttribute('id', 'smo59637');
smo59659v0ar.push(smo59637);
const smo59638 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo59638.setAttribute('id', 'smo59638');
smo59659v0ar.push(smo59638);
const smo59639 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo59639.setAttribute('id', 'smo59639');
smo59659v0ar.push(smo59639);
const smo59640 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/3/n"]}'))
smo59640.setAttribute('id', 'smo59640');
smo59659v0ar.push(smo59640);
const smo59641 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo59641.setAttribute('id', 'smo59641');
smo59659v0ar.push(smo59641);
smo59659v0.addTickables(smo59659v0ar)
fmtsmo5965931.joinVoices([smo59659v0]);
const smo59659v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59659v1ar = [];
const smo59642 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59642.setAttribute('id', 'smo59642');
smo59642.setStyle({ fillStyle: '#aaaaaa7f' });
smo59659v1ar.push(smo59642);
const smo59643 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59643.setAttribute('id', 'smo59643');
smo59643.setStyle({ fillStyle: '#aaaaaa7f' });
smo59643.addModifier(new VF.Dot(), 0);
smo59643.addModifier(new VF.Dot(), 0);
smo59659v1ar.push(smo59643);
const smo59644 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59644.setAttribute('id', 'smo59644');
smo59644.setStyle({ fillStyle: '#aaaaaa7f' });
smo59659v1ar.push(smo59644);
const smo59645 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59645.setAttribute('id', 'smo59645');
smo59645.setStyle({ fillStyle: '#aaaaaa7f' });
smo59645.addModifier(new VF.Dot(), 0);
smo59645.addModifier(new VF.Dot(), 0);
smo59659v1ar.push(smo59645);
smo59659v1.addTickables(smo59659v1ar)
fmtsmo5965931.joinVoices([smo59659v1]);
const fmtsmo6479431 = new VF.Formatter();
//
// voices and notes for stave 1 31
const smo64794v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64794v0ar = [];
const smo64773 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo64773.setAttribute('id', 'smo64773');
smo64794v0ar.push(smo64773);
const smo64774 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/3/n"]}'))
smo64774.setAttribute('id', 'smo64774');
smo64774.addModifier(new VF.Dot(), 0);
smo64794v0ar.push(smo64774);
const smo64775 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/3/n"]}'))
smo64775.setAttribute('id', 'smo64775');
smo64794v0ar.push(smo64775);
const smo64776 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo64776.setAttribute('id', 'smo64776');
smo64794v0ar.push(smo64776);
const smo64777 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/3/n"]}'))
smo64777.setAttribute('id', 'smo64777');
smo64777.addModifier(new VF.Dot(), 0);
smo64794v0ar.push(smo64777);
const smo64778 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/3/n"]}'))
smo64778.setAttribute('id', 'smo64778');
smo64794v0ar.push(smo64778);
smo64794v0.addTickables(smo64794v0ar)
fmtsmo6479431.joinVoices([smo64794v0]);
const smo64794v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64794v1ar = [];
const smo64779 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/2/n"]}'))
smo64779.setAttribute('id', 'smo64779');
smo64779.setStyle({ fillStyle: "#115511" });
smo64794v1ar.push(smo64779);
const smo64780 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/2/n"]}'))
smo64780.setAttribute('id', 'smo64780');
smo64780.setStyle({ fillStyle: "#115511" });
smo64794v1ar.push(smo64780);
smo64794v1.addTickables(smo64794v1ar)
fmtsmo6479431.joinVoices([smo64794v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68356 = smo59629.getStemDirection();
smo59629.setStemDirection(dirsmo68356);
smo59630.setStemDirection(dirsmo68356);
const smo68356 = new VF.Beam([smo59629,smo59630]);
const dirsmo68357 = smo59631.getStemDirection();
smo59631.setStemDirection(dirsmo68357);
smo59632.setStemDirection(dirsmo68357);
smo59633.setStemDirection(dirsmo68357);
smo59634.setStemDirection(dirsmo68357);
const smo68357 = new VF.Beam([smo59631,smo59632,smo59633,smo59634]);
const dirsmo68358 = smo59636.getStemDirection();
smo59636.setStemDirection(dirsmo68358);
smo59637.setStemDirection(dirsmo68358);
const smo68358 = new VF.Beam([smo59636,smo59637]);
const dirsmo68359 = smo59638.getStemDirection();
smo59638.setStemDirection(dirsmo68359);
smo59639.setStemDirection(dirsmo68359);
smo59640.setStemDirection(dirsmo68359);
smo59641.setStemDirection(dirsmo68359);
const smo68359 = new VF.Beam([smo59638,smo59639,smo59640,smo59641]);
 
// formatting measures in staff group smo57447
fmtsmo5965931.format([smo59659v0,smo59659v1,smo64794v0,smo64794v1], 571);
const stavesmo59659 = new VF.Stave(674, 1074, 585);
stavesmo59659.setAttribute('id', 'stavesmo59659');
stavesmo59659.setBegBarType(VF.Barline.type.NONE);
stavesmo59659.setContext(context);
stavesmo59659.draw();
smo59659v0.draw(context, stavesmo59659);
smo59659v1.draw(context, stavesmo59659);
smo68356.setContext(context);
smo68356.draw();
smo68357.setContext(context);
smo68357.draw();
smo68358.setContext(context);
smo68358.draw();
smo68359.setContext(context);
smo68359.draw();
const stavesmo64794 = new VF.Stave(674, 1223, 585);
stavesmo64794.setAttribute('id', 'stavesmo64794');
stavesmo64794.setBegBarType(VF.Barline.type.NONE);
stavesmo64794.setContext(context);
stavesmo64794.draw();
smo64794v0.draw(context, stavesmo64794);
smo64794v1.draw(context, stavesmo64794);
const fmtsmo5969032 = new VF.Formatter();
//
// voices and notes for stave 0 32
const smo59690v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59690v0ar = [];
const smo59660 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59660.setAttribute('id', 'smo59660');
smo59690v0ar.push(smo59660);
const smo59661 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo59661.setAttribute('id', 'smo59661');
smo59690v0ar.push(smo59661);
const smo59662 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo59662.setAttribute('id', 'smo59662');
smo59690v0ar.push(smo59662);
const smo59663 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59663.setAttribute('id', 'smo59663');
smo59690v0ar.push(smo59663);
const smo59664 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59664.setAttribute('id', 'smo59664');
smo59690v0ar.push(smo59664);
const smo59665 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59665.setAttribute('id', 'smo59665');
smo59690v0ar.push(smo59665);
const smo59666 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo59666.setAttribute('id', 'smo59666');
smo59690v0ar.push(smo59666);
const smo59667 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59667.setAttribute('id', 'smo59667');
smo59690v0ar.push(smo59667);
const smo59668 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo59668.setAttribute('id', 'smo59668');
smo59690v0ar.push(smo59668);
const smo59669 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo59669.setAttribute('id', 'smo59669');
smo59690v0ar.push(smo59669);
const smo59670 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo59670.setAttribute('id', 'smo59670');
smo59690v0ar.push(smo59670);
const smo59671 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo59671.setAttribute('id', 'smo59671');
smo59690v0ar.push(smo59671);
const smo59672 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo59672.setAttribute('id', 'smo59672');
smo59690v0ar.push(smo59672);
const smo59673 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo59673.setAttribute('id', 'smo59673');
smo59690v0ar.push(smo59673);
const smo59674 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo59674.setAttribute('id', 'smo59674');
smo59690v0ar.push(smo59674);
smo59690v0.addTickables(smo59690v0ar)
fmtsmo5969032.joinVoices([smo59690v0]);
const smo59690v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59690v1ar = [];
const smo59675 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59675.setAttribute('id', 'smo59675');
smo59675.setStyle({ fillStyle: '#aaaaaa7f' });
smo59690v1ar.push(smo59675);
const smo59676 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2ddd","dots":3,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59676.setAttribute('id', 'smo59676');
smo59676.setStyle({ fillStyle: '#aaaaaa7f' });
smo59676.addModifier(new VF.Dot(), 0);
smo59676.addModifier(new VF.Dot(), 0);
smo59676.addModifier(new VF.Dot(), 0);
smo59690v1ar.push(smo59676);
smo59690v1.addTickables(smo59690v1ar)
fmtsmo5969032.joinVoices([smo59690v1]);
const fmtsmo6481432 = new VF.Formatter();
//
// voices and notes for stave 1 32
const smo64814v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64814v0ar = [];
const smo64795 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["fn/3/r"]}'))
smo64795.setAttribute('id', 'smo64795');
smo64814v0ar.push(smo64795);
const smo64796 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo64796.setAttribute('id', 'smo64796');
smo64796.addModifier(new VF.Dot(), 0);
smo64814v0ar.push(smo64796);
const smo64797 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo64797.setAttribute('id', 'smo64797');
smo64814v0ar.push(smo64797);
const smo64798 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo64798.setAttribute('id', 'smo64798');
smo64814v0ar.push(smo64798);
smo64814v0.addTickables(smo64814v0ar)
fmtsmo6481432.joinVoices([smo64814v0]);
const smo64814v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64814v1ar = [];
const smo64799 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/2/n"]}'))
smo64799.setAttribute('id', 'smo64799');
smo64799.setStyle({ fillStyle: "#115511" });
smo64814v1ar.push(smo64799);
const smo64800 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/2/n"]}'))
smo64800.setAttribute('id', 'smo64800');
smo64800.setStyle({ fillStyle: "#115511" });
smo64814v1ar.push(smo64800);
smo64814v1.addTickables(smo64814v1ar)
fmtsmo6481432.joinVoices([smo64814v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68364 = smo59661.getStemDirection();
smo59661.setStemDirection(dirsmo68364);
smo59662.setStemDirection(dirsmo68364);
const smo68364 = new VF.Beam([smo59661,smo59662]);
const dirsmo68365 = smo59663.getStemDirection();
smo59663.setStemDirection(dirsmo68365);
smo59664.setStemDirection(dirsmo68365);
smo59665.setStemDirection(dirsmo68365);
smo59666.setStemDirection(dirsmo68365);
const smo68365 = new VF.Beam([smo59663,smo59664,smo59665,smo59666]);
const dirsmo68366 = smo59667.getStemDirection();
smo59667.setStemDirection(dirsmo68366);
smo59668.setStemDirection(dirsmo68366);
smo59669.setStemDirection(dirsmo68366);
smo59670.setStemDirection(dirsmo68366);
const smo68366 = new VF.Beam([smo59667,smo59668,smo59669,smo59670]);
const dirsmo68367 = smo59671.getStemDirection();
smo59671.setStemDirection(dirsmo68367);
smo59672.setStemDirection(dirsmo68367);
smo59673.setStemDirection(dirsmo68367);
smo59674.setStemDirection(dirsmo68367);
const smo68367 = new VF.Beam([smo59671,smo59672,smo59673,smo59674]);
 
// formatting measures in staff group smo57447
fmtsmo5969032.format([smo59690v0,smo59690v1,smo64814v0,smo64814v1], 535);
const stavesmo59690 = new VF.Stave(1259, 1074, 549);
stavesmo59690.setAttribute('id', 'stavesmo59690');
stavesmo59690.setBegBarType(VF.Barline.type.NONE);
stavesmo59690.setContext(context);
stavesmo59690.draw();
smo59690v0.draw(context, stavesmo59690);
smo59690v1.draw(context, stavesmo59690);
smo68364.setContext(context);
smo68364.draw();
smo68365.setContext(context);
smo68365.draw();
smo68366.setContext(context);
smo68366.draw();
smo68367.setContext(context);
smo68367.draw();
const stavesmo64814 = new VF.Stave(1259, 1223, 549);
stavesmo64814.setAttribute('id', 'stavesmo64814');
stavesmo64814.setBegBarType(VF.Barline.type.NONE);
stavesmo64814.setContext(context);
stavesmo64814.draw();
smo64814v0.draw(context, stavesmo64814);
smo64814v1.draw(context, stavesmo64814);
const rightsmo57447stavesmo596901 = new VF.StaveConnector(stavesmo59690, stavesmo64814).setType(0);
rightsmo57447stavesmo596901.setContext(context).draw();
const fmtsmo5972133 = new VF.Formatter();
//
// voices and notes for stave 0 33
const smo59721v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59721v0ar = [];
const smo59691 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59691.setAttribute('id', 'smo59691');
smo59721v0ar.push(smo59691);
const smo59692 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo59692.setAttribute('id', 'smo59692');
smo59721v0ar.push(smo59692);
const smo59693 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo59693.setAttribute('id', 'smo59693');
smo59721v0ar.push(smo59693);
const smo59694 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo59694.setAttribute('id', 'smo59694');
smo59721v0ar.push(smo59694);
const smo59695 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo59695.setAttribute('id', 'smo59695');
smo59721v0ar.push(smo59695);
const smo59696 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo59696.setAttribute('id', 'smo59696');
smo59721v0ar.push(smo59696);
const smo59697 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo59697.setAttribute('id', 'smo59697');
smo59721v0ar.push(smo59697);
const smo59698 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo59698.setAttribute('id', 'smo59698');
smo59721v0ar.push(smo59698);
const smo59699 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo59699.setAttribute('id', 'smo59699');
smo59721v0ar.push(smo59699);
const smo59700 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo59700.setAttribute('id', 'smo59700');
smo59721v0ar.push(smo59700);
const smo59701 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo59701.setAttribute('id', 'smo59701');
smo59721v0ar.push(smo59701);
const smo59702 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo59702.setAttribute('id', 'smo59702');
smo59721v0ar.push(smo59702);
const smo59703 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59703.setAttribute('id', 'smo59703');
smo59721v0ar.push(smo59703);
const smo59704 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo59704.setAttribute('id', 'smo59704');
smo59721v0ar.push(smo59704);
const smo59705 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo59705.setAttribute('id', 'smo59705');
smo59721v0ar.push(smo59705);
smo59721v0.addTickables(smo59721v0ar)
fmtsmo5972133.joinVoices([smo59721v0]);
const smo59721v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59721v1ar = [];
const smo59706 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/3/r"]}'))
smo59706.setAttribute('id', 'smo59706');
smo59706.setStyle({ fillStyle: "#115511" });
smo59721v1ar.push(smo59706);
const smo59707 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2ddd","dots":3,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59707.setAttribute('id', 'smo59707');
smo59707.setStyle({ fillStyle: '#aaaaaa7f' });
smo59707.addModifier(new VF.Dot(), 0);
smo59707.addModifier(new VF.Dot(), 0);
smo59707.addModifier(new VF.Dot(), 0);
smo59721v1ar.push(smo59707);
smo59721v1.addTickables(smo59721v1ar)
fmtsmo5972133.joinVoices([smo59721v1]);
const fmtsmo6483433 = new VF.Formatter();
//
// voices and notes for stave 1 33
const smo64834v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64834v0ar = [];
const smo64815 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo64815.setAttribute('id', 'smo64815');
smo64815.setStyle({ fillStyle: '#aaaaaa7f' });
smo64834v0ar.push(smo64815);
const smo64816 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/2/n"]}'))
smo64816.setAttribute('id', 'smo64816');
smo64816.addModifier(new VF.Dot(), 0);
smo64834v0ar.push(smo64816);
const smo64817 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/2/n"]}'))
smo64817.setAttribute('id', 'smo64817');
smo64834v0ar.push(smo64817);
const smo64818 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/2/n"]}'))
smo64818.setAttribute('id', 'smo64818');
smo64834v0ar.push(smo64818);
smo64834v0.addTickables(smo64834v0ar)
fmtsmo6483433.joinVoices([smo64834v0]);
const smo64834v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64834v1ar = [];
const smo64819 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/2/n"]}'))
smo64819.setAttribute('id', 'smo64819');
smo64819.setStyle({ fillStyle: "#115511" });
smo64834v1ar.push(smo64819);
const smo64820 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/2/n"]}'))
smo64820.setAttribute('id', 'smo64820');
smo64820.setStyle({ fillStyle: "#115511" });
smo64834v1ar.push(smo64820);
smo64834v1.addTickables(smo64834v1ar)
fmtsmo6483433.joinVoices([smo64834v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68380 = smo59692.getStemDirection();
smo59692.setStemDirection(dirsmo68380);
smo59693.setStemDirection(dirsmo68380);
const smo68380 = new VF.Beam([smo59692,smo59693]);
const dirsmo68381 = smo59694.getStemDirection();
smo59694.setStemDirection(dirsmo68381);
smo59695.setStemDirection(dirsmo68381);
smo59696.setStemDirection(dirsmo68381);
smo59697.setStemDirection(dirsmo68381);
const smo68381 = new VF.Beam([smo59694,smo59695,smo59696,smo59697]);
const dirsmo68382 = smo59698.getStemDirection();
smo59698.setStemDirection(dirsmo68382);
smo59699.setStemDirection(dirsmo68382);
smo59700.setStemDirection(dirsmo68382);
smo59701.setStemDirection(dirsmo68382);
const smo68382 = new VF.Beam([smo59698,smo59699,smo59700,smo59701]);
const dirsmo68383 = smo59702.getStemDirection();
smo59702.setStemDirection(dirsmo68383);
smo59703.setStemDirection(dirsmo68383);
smo59704.setStemDirection(dirsmo68383);
smo59705.setStemDirection(dirsmo68383);
const smo68383 = new VF.Beam([smo59702,smo59703,smo59704,smo59705]);
 
// formatting measures in staff group smo57447
fmtsmo5972133.format([smo59721v0,smo59721v1,smo64834v0,smo64834v1], 475);
const stavesmo59721 = new VF.Stave(90, 1422, 533);
stavesmo59721.setAttribute('id', 'stavesmo59721');
stavesmo59721.setBegBarType(1);
stavesmo59721.addClef('treble');
stavesmo59721.setContext(context);
stavesmo59721.draw();
smo59721v0.draw(context, stavesmo59721);
smo59721v1.draw(context, stavesmo59721);
smo68380.setContext(context);
smo68380.draw();
smo68381.setContext(context);
smo68381.draw();
smo68382.setContext(context);
smo68382.draw();
smo68383.setContext(context);
smo68383.draw();
const stavesmo64834 = new VF.Stave(90, 1508, 533);
stavesmo64834.setAttribute('id', 'stavesmo64834');
stavesmo64834.setBegBarType(1);
stavesmo64834.addClef('bass');
stavesmo64834.setContext(context);
stavesmo64834.draw();
smo64834v0.draw(context, stavesmo64834);
smo64834v1.draw(context, stavesmo64834);
const leftsmo57447stavesmo597211 = new VF.StaveConnector(stavesmo59721, stavesmo64834).setType(3);
leftsmo57447stavesmo597211.setContext(context).draw();
const fmtsmo5973634 = new VF.Formatter();
//
// voices and notes for stave 0 34
const smo59736v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59736v0ar = [];
const smo59722 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n","cn/5/n"]}'))
smo59722.setAttribute('id', 'smo59722');
smo59736v0ar.push(smo59722);
smo59736v0.addTickables(smo59736v0ar)
fmtsmo5973634.joinVoices([smo59736v0]);
const fmtsmo6484934 = new VF.Formatter();
//
// voices and notes for stave 1 34
const smo64849v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64849v0ar = [];
const smo64835 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo64835.setAttribute('id', 'smo64835');
smo64849v0ar.push(smo64835);
smo64849v0.addTickables(smo64849v0ar)
fmtsmo6484934.joinVoices([smo64849v0]);
// create beam groups and tuplets for format grp smo57447 before formatting
 
// formatting measures in staff group smo57447
fmtsmo5973634.format([smo59736v0,smo64849v0], 54);
const stavesmo59736 = new VF.Stave(623, 1422, 77);
stavesmo59736.setAttribute('id', 'stavesmo59736');
stavesmo59736.setBegBarType(VF.Barline.type.NONE);
stavesmo59736.setEndBarType(3);
stavesmo59736.setContext(context);
stavesmo59736.draw();
smo59736v0.draw(context, stavesmo59736);
const stavesmo64849 = new VF.Stave(623, 1508, 77);
stavesmo64849.setAttribute('id', 'stavesmo64849');
stavesmo64849.setBegBarType(VF.Barline.type.NONE);
stavesmo64849.setEndBarType(3);
stavesmo64849.setContext(context);
stavesmo64849.draw();
smo64849v0.draw(context, stavesmo64849);
const fmtsmo5976035 = new VF.Formatter();
//
// voices and notes for stave 0 35
const smo59760v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59760v0ar = [];
const smo59737 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59737.setAttribute('id', 'smo59737');
smo59760v0ar.push(smo59737);
smo59760v0.addTickables(smo59760v0ar)
fmtsmo5976035.joinVoices([smo59760v0]);
const smo59760v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59760v1ar = [];
const smo59738 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/3/r"]}'))
smo59738.setAttribute('id', 'smo59738');
smo59738.setStyle({ fillStyle: "#115511" });
smo59760v1ar.push(smo59738);
const smo59739 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59739.setAttribute('id', 'smo59739');
smo59739.setStyle({ fillStyle: "#115511" });
smo59760v1ar.push(smo59739);
const smo59740 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo59740.setAttribute('id', 'smo59740');
smo59740.setStyle({ fillStyle: "#115511" });
smo59760v1ar.push(smo59740);
const smo59741 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo59741.setAttribute('id', 'smo59741');
smo59741.setStyle({ fillStyle: "#115511" });
smo59760v1ar.push(smo59741);
const smo59742 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59742.setAttribute('id', 'smo59742');
smo59742.setStyle({ fillStyle: "#115511" });
smo59742.addModifier(new VF.Dot(), 0);
smo59760v1ar.push(smo59742);
const smo59743 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo59743.setAttribute('id', 'smo59743');
smo59743.setStyle({ fillStyle: "#115511" });
smo59760v1ar.push(smo59743);
const smo59744 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59744.setAttribute('id', 'smo59744');
smo59744.setStyle({ fillStyle: "#115511" });
smo59760v1ar.push(smo59744);
const smo59745 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo59745.setAttribute('id', 'smo59745');
smo59745.setStyle({ fillStyle: "#115511" });
smo59760v1ar.push(smo59745);
const smo59746 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo59746.setAttribute('id', 'smo59746');
smo59746.setStyle({ fillStyle: "#115511" });
smo59760v1ar.push(smo59746);
smo59760v1.addTickables(smo59760v1ar)
fmtsmo5976035.joinVoices([smo59760v1]);
const fmtsmo6486435 = new VF.Formatter();
//
// voices and notes for stave 1 35
const smo64864v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64864v0ar = [];
const smo64850 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo64850.setAttribute('id', 'smo64850');
smo64864v0ar.push(smo64850);
smo64864v0.addTickables(smo64864v0ar)
fmtsmo6486435.joinVoices([smo64864v0]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68390 = smo59739.getStemDirection();
smo59739.setStemDirection(dirsmo68390);
smo59740.setStemDirection(dirsmo68390);
smo59741.setStemDirection(dirsmo68390);
const smo68390 = new VF.Beam([smo59739,smo59740,smo59741]);
const dirsmo68391 = smo59742.getStemDirection();
smo59742.setStemDirection(dirsmo68391);
smo59743.setStemDirection(dirsmo68391);
smo59744.setStemDirection(dirsmo68391);
const smo68391 = new VF.Beam([smo59742,smo59743,smo59744]);
const dirsmo68392 = smo59745.getStemDirection();
smo59745.setStemDirection(dirsmo68392);
smo59746.setStemDirection(dirsmo68392);
const smo68392 = new VF.Beam([smo59745,smo59746]);
 
// formatting measures in staff group smo57447
fmtsmo5976035.format([smo59760v0,smo59760v1,smo64864v0], 264);
const stavesmo59760 = new VF.Stave(700, 1422, 278);
stavesmo59760.setAttribute('id', 'stavesmo59760');
stavesmo59760.setBegBarType(VF.Barline.type.NONE);
stavesmo59760.setTempo(JSON.parse('{"duration":"8","dots":0,"bpm":116,"name":"Moderato e maestoso"}'), -1 * 0);
stavesmo59760.setContext(context);
stavesmo59760.draw();
smo59760v0.draw(context, stavesmo59760);
smo59760v1.draw(context, stavesmo59760);
smo68390.setContext(context);
smo68390.draw();
smo68391.setContext(context);
smo68391.draw();
smo68392.setContext(context);
smo68392.draw();
const stavesmo64864 = new VF.Stave(700, 1508, 278);
stavesmo64864.setAttribute('id', 'stavesmo64864');
stavesmo64864.setBegBarType(VF.Barline.type.NONE);
stavesmo64864.setContext(context);
stavesmo64864.draw();
smo64864v0.draw(context, stavesmo64864);
const fmtsmo5979336 = new VF.Formatter();
//
// voices and notes for stave 0 36
const smo59793v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59793v0ar = [];
const smo59761 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59761.setAttribute('id', 'smo59761');
smo59793v0ar.push(smo59761);
const smo59762 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59762.setAttribute('id', 'smo59762');
smo59793v0ar.push(smo59762);
const smo59763 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo59763.setAttribute('id', 'smo59763');
smo59793v0ar.push(smo59763);
const smo59764 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo59764.setAttribute('id', 'smo59764');
smo59793v0ar.push(smo59764);
const smo59765 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo59765.setAttribute('id', 'smo59765');
smo59793v0ar.push(smo59765);
smo59793v0.addTickables(smo59793v0ar)
fmtsmo5979336.joinVoices([smo59793v0]);
const smo59793v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59793v1ar = [];
const smo59766 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo59766.setAttribute('id', 'smo59766');
smo59766.setStyle({ fillStyle: "#115511" });
smo59793v1ar.push(smo59766);
const smo59767 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo59767.setAttribute('id', 'smo59767');
smo59767.setStyle({ fillStyle: "#115511" });
smo59793v1ar.push(smo59767);
const smo59768 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo59768.setAttribute('id', 'smo59768');
smo59768.setStyle({ fillStyle: "#115511" });
smo59793v1ar.push(smo59768);
const smo59769 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo59769.setAttribute('id', 'smo59769');
smo59769.setStyle({ fillStyle: "#115511" });
smo59793v1ar.push(smo59769);
const smo59770 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo59770.setAttribute('id', 'smo59770');
smo59770.setStyle({ fillStyle: "#115511" });
smo59793v1ar.push(smo59770);
const smo59771 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59771.setAttribute('id', 'smo59771');
smo59771.setStyle({ fillStyle: "#115511" });
smo59793v1ar.push(smo59771);
const smo59772 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo59772.setAttribute('id', 'smo59772');
smo59772.setStyle({ fillStyle: "#115511" });
smo59793v1ar.push(smo59772);
const smo59773 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59773.setAttribute('id', 'smo59773');
smo59773.setStyle({ fillStyle: "#115511" });
smo59793v1ar.push(smo59773);
const smo59774 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo59774.setAttribute('id', 'smo59774');
smo59774.setStyle({ fillStyle: "#115511" });
smo59793v1ar.push(smo59774);
const smo59775 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo59775.setAttribute('id', 'smo59775');
smo59775.setStyle({ fillStyle: "#115511" });
smo59793v1ar.push(smo59775);
const smo59776 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59776.setAttribute('id', 'smo59776');
smo59776.setStyle({ fillStyle: "#115511" });
smo59793v1ar.push(smo59776);
const smo59777 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo59777.setAttribute('id', 'smo59777');
smo59777.setStyle({ fillStyle: "#115511" });
smo59793v1ar.push(smo59777);
const smo59778 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59778.setAttribute('id', 'smo59778');
smo59778.setStyle({ fillStyle: "#115511" });
smo59793v1ar.push(smo59778);
const smo59779 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/3/n"]}'))
smo59779.setAttribute('id', 'smo59779');
smo59779.setStyle({ fillStyle: "#115511" });
smo59793v1ar.push(smo59779);
smo59793v1.addTickables(smo59793v1ar)
fmtsmo5979336.joinVoices([smo59793v1]);
const fmtsmo6487936 = new VF.Formatter();
//
// voices and notes for stave 1 36
const smo64879v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64879v0ar = [];
const smo64865 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo64865.setAttribute('id', 'smo64865');
smo64879v0ar.push(smo64865);
smo64879v0.addTickables(smo64879v0ar)
fmtsmo6487936.joinVoices([smo64879v0]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68397 = smo59763.getStemDirection();
smo59763.setStemDirection(dirsmo68397);
smo59764.setStemDirection(dirsmo68397);
smo59765.setStemDirection(dirsmo68397);
const smo68397 = new VF.Beam([smo59763,smo59764,smo59765]);
const dirsmo68398 = smo59766.getStemDirection();
smo59766.setStemDirection(dirsmo68398);
smo59767.setStemDirection(dirsmo68398);
const smo68398 = new VF.Beam([smo59766,smo59767]);
const dirsmo68399 = smo59768.getStemDirection();
smo59768.setStemDirection(dirsmo68399);
smo59769.setStemDirection(dirsmo68399);
smo59770.setStemDirection(dirsmo68399);
smo59771.setStemDirection(dirsmo68399);
const smo68399 = new VF.Beam([smo59768,smo59769,smo59770,smo59771]);
const dirsmo68400 = smo59772.getStemDirection();
smo59772.setStemDirection(dirsmo68400);
smo59773.setStemDirection(dirsmo68400);
smo59774.setStemDirection(dirsmo68400);
smo59775.setStemDirection(dirsmo68400);
const smo68400 = new VF.Beam([smo59772,smo59773,smo59774,smo59775]);
const dirsmo68401 = smo59776.getStemDirection();
smo59776.setStemDirection(dirsmo68401);
smo59777.setStemDirection(dirsmo68401);
smo59778.setStemDirection(dirsmo68401);
smo59779.setStemDirection(dirsmo68401);
const smo68401 = new VF.Beam([smo59776,smo59777,smo59778,smo59779]);
 
// formatting measures in staff group smo57447
fmtsmo5979336.format([smo59793v0,smo59793v1,smo64879v0], 390);
const stavesmo59793 = new VF.Stave(978, 1422, 404);
stavesmo59793.setAttribute('id', 'stavesmo59793');
stavesmo59793.setBegBarType(VF.Barline.type.NONE);
stavesmo59793.setContext(context);
stavesmo59793.draw();
smo59793v0.draw(context, stavesmo59793);
smo59793v1.draw(context, stavesmo59793);
smo68397.setContext(context);
smo68397.draw();
smo68398.setContext(context);
smo68398.draw();
smo68399.setContext(context);
smo68399.draw();
smo68400.setContext(context);
smo68400.draw();
smo68401.setContext(context);
smo68401.draw();
const stavesmo64879 = new VF.Stave(978, 1508, 404);
stavesmo64879.setAttribute('id', 'stavesmo64879');
stavesmo64879.setBegBarType(VF.Barline.type.NONE);
stavesmo64879.setContext(context);
stavesmo64879.draw();
smo64879v0.draw(context, stavesmo64879);
const fmtsmo5982637 = new VF.Formatter();
//
// voices and notes for stave 0 37
const smo59826v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59826v0ar = [];
const smo59794 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo59794.setAttribute('id', 'smo59794');
smo59794.addModifier(new VF.Dot(), 0);
smo59826v0ar.push(smo59794);
const smo59795 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo59795.setAttribute('id', 'smo59795');
smo59826v0ar.push(smo59795);
const smo59796 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo59796.setAttribute('id', 'smo59796');
smo59826v0ar.push(smo59796);
const smo59797 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo59797.setAttribute('id', 'smo59797');
smo59826v0ar.push(smo59797);
const smo59798 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo59798.setAttribute('id', 'smo59798');
smo59826v0ar.push(smo59798);
const smo59799 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo59799.setAttribute('id', 'smo59799');
smo59826v0ar.push(smo59799);
const smo59800 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo59800.setAttribute('id', 'smo59800');
smo59826v0ar.push(smo59800);
const smo59801 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo59801.setAttribute('id', 'smo59801');
smo59826v0ar.push(smo59801);
const smo59802 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo59802.setAttribute('id', 'smo59802');
smo59826v0ar.push(smo59802);
const smo59803 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo59803.setAttribute('id', 'smo59803');
smo59826v0ar.push(smo59803);
const smo59804 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo59804.setAttribute('id', 'smo59804');
smo59826v0ar.push(smo59804);
smo59826v0.addTickables(smo59826v0ar)
fmtsmo5982637.joinVoices([smo59826v0]);
const smo59826v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59826v1ar = [];
const smo59805 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo59805.setAttribute('id', 'smo59805');
smo59805.setStyle({ fillStyle: "#115511" });
smo59826v1ar.push(smo59805);
const smo59806 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/4/n"]}'))
smo59806.setAttribute('id', 'smo59806');
smo59806.setStyle({ fillStyle: "#115511" });
const smo598060acc = new VF.Accidental('#');
smo59806.addModifier(smo598060acc, 0);
smo59826v1ar.push(smo59806);
const smo59807 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo59807.setAttribute('id', 'smo59807');
smo59807.setStyle({ fillStyle: "#115511" });
smo59826v1ar.push(smo59807);
const smo59808 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo59808.setAttribute('id', 'smo59808');
smo59808.setStyle({ fillStyle: "#115511" });
smo59826v1ar.push(smo59808);
const smo59809 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/4/n"]}'))
smo59809.setAttribute('id', 'smo59809');
smo59809.setStyle({ fillStyle: "#115511" });
smo59826v1ar.push(smo59809);
const smo59810 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo59810.setAttribute('id', 'smo59810');
smo59810.setStyle({ fillStyle: "#115511" });
smo59826v1ar.push(smo59810);
const smo59811 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/4/n"]}'))
smo59811.setAttribute('id', 'smo59811');
smo59811.setStyle({ fillStyle: "#115511" });
smo59826v1ar.push(smo59811);
const smo59812 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo59812.setAttribute('id', 'smo59812');
smo59812.setStyle({ fillStyle: "#115511" });
smo59826v1ar.push(smo59812);
smo59826v1.addTickables(smo59826v1ar)
fmtsmo5982637.joinVoices([smo59826v1]);
const fmtsmo6489437 = new VF.Formatter();
//
// voices and notes for stave 1 37
const smo64894v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64894v0ar = [];
const smo64880 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo64880.setAttribute('id', 'smo64880');
smo64894v0ar.push(smo64880);
smo64894v0.addTickables(smo64894v0ar)
fmtsmo6489437.joinVoices([smo64894v0]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68406 = smo59794.getStemDirection();
smo59794.setStemDirection(dirsmo68406);
smo59795.setStemDirection(dirsmo68406);
smo59796.setStemDirection(dirsmo68406);
const smo68406 = new VF.Beam([smo59794,smo59795,smo59796]);
const dirsmo68407 = smo59797.getStemDirection();
smo59797.setStemDirection(dirsmo68407);
smo59798.setStemDirection(dirsmo68407);
const smo68407 = new VF.Beam([smo59797,smo59798]);
const dirsmo68408 = smo59799.getStemDirection();
smo59799.setStemDirection(dirsmo68408);
smo59800.setStemDirection(dirsmo68408);
const smo68408 = new VF.Beam([smo59799,smo59800]);
const dirsmo68409 = smo59801.getStemDirection();
smo59801.setStemDirection(dirsmo68409);
smo59802.setStemDirection(dirsmo68409);
smo59803.setStemDirection(dirsmo68409);
smo59804.setStemDirection(dirsmo68409);
const smo68409 = new VF.Beam([smo59801,smo59802,smo59803,smo59804]);
const dirsmo68410 = smo59805.getStemDirection();
smo59805.setStemDirection(dirsmo68410);
smo59806.setStemDirection(dirsmo68410);
const smo68410 = new VF.Beam([smo59805,smo59806]);
const dirsmo68411 = smo59808.getStemDirection();
smo59808.setStemDirection(dirsmo68411);
smo59809.setStemDirection(dirsmo68411);
smo59810.setStemDirection(dirsmo68411);
const smo68411 = new VF.Beam([smo59808,smo59809,smo59810]);
const dirsmo68412 = smo59811.getStemDirection();
smo59811.setStemDirection(dirsmo68412);
smo59812.setStemDirection(dirsmo68412);
const smo68412 = new VF.Beam([smo59811,smo59812]);
 
// formatting measures in staff group smo57447
fmtsmo5982637.format([smo59826v0,smo59826v1,smo64894v0], 410);
const stavesmo59826 = new VF.Stave(1382, 1422, 424);
stavesmo59826.setAttribute('id', 'stavesmo59826');
stavesmo59826.setBegBarType(VF.Barline.type.NONE);
stavesmo59826.setContext(context);
stavesmo59826.draw();
smo59826v0.draw(context, stavesmo59826);
smo59826v1.draw(context, stavesmo59826);
smo68406.setContext(context);
smo68406.draw();
smo68407.setContext(context);
smo68407.draw();
smo68408.setContext(context);
smo68408.draw();
smo68409.setContext(context);
smo68409.draw();
smo68410.setContext(context);
smo68410.draw();
smo68411.setContext(context);
smo68411.draw();
smo68412.setContext(context);
smo68412.draw();
const stavesmo64894 = new VF.Stave(1382, 1508, 424);
stavesmo64894.setAttribute('id', 'stavesmo64894');
stavesmo64894.setBegBarType(VF.Barline.type.NONE);
stavesmo64894.setContext(context);
stavesmo64894.draw();
smo64894v0.draw(context, stavesmo64894);
const rightsmo57447stavesmo598261 = new VF.StaveConnector(stavesmo59826, stavesmo64894).setType(0);
rightsmo57447stavesmo598261.setContext(context).draw();
const fmtsmo5986238 = new VF.Formatter();
//
// voices and notes for stave 0 38
const smo59862v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59862v0ar = [];
const smo59827 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo59827.setAttribute('id', 'smo59827');
smo59862v0ar.push(smo59827);
const smo59828 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo59828.setAttribute('id', 'smo59828');
smo59862v0ar.push(smo59828);
const smo59829 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo59829.setAttribute('id', 'smo59829');
smo59862v0ar.push(smo59829);
const smo59830 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo59830.setAttribute('id', 'smo59830');
smo59862v0ar.push(smo59830);
const smo59831 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo59831.setAttribute('id', 'smo59831');
smo59862v0ar.push(smo59831);
const smo59832 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo59832.setAttribute('id', 'smo59832');
smo59862v0ar.push(smo59832);
const smo59833 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo59833.setAttribute('id', 'smo59833');
smo59862v0ar.push(smo59833);
const smo59834 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo59834.setAttribute('id', 'smo59834');
smo59862v0ar.push(smo59834);
const smo59835 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo59835.setAttribute('id', 'smo59835');
smo59862v0ar.push(smo59835);
const smo59836 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo59836.setAttribute('id', 'smo59836');
smo59862v0ar.push(smo59836);
const smo59837 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo59837.setAttribute('id', 'smo59837');
smo59862v0ar.push(smo59837);
const smo59838 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/5/n"]}'))
smo59838.setAttribute('id', 'smo59838');
const smo598380acc = new VF.Accidental('#');
smo59838.addModifier(smo598380acc, 0);
smo59862v0ar.push(smo59838);
const smo59839 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo59839.setAttribute('id', 'smo59839');
smo59862v0ar.push(smo59839);
const smo59840 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo59840.setAttribute('id', 'smo59840');
smo59862v0ar.push(smo59840);
smo59862v0.addTickables(smo59862v0ar)
fmtsmo5986238.joinVoices([smo59862v0]);
const smo59862v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59862v1ar = [];
const smo59841 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo59841.setAttribute('id', 'smo59841');
smo59841.setStyle({ fillStyle: "#115511" });
smo59862v1ar.push(smo59841);
const smo59842 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59842.setAttribute('id', 'smo59842');
smo59842.setStyle({ fillStyle: "#115511" });
smo59862v1ar.push(smo59842);
const smo59843 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo59843.setAttribute('id', 'smo59843');
smo59843.setStyle({ fillStyle: "#115511" });
smo59862v1ar.push(smo59843);
const smo59844 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo59844.setAttribute('id', 'smo59844');
smo59844.setStyle({ fillStyle: "#115511" });
smo59862v1ar.push(smo59844);
const smo59845 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59845.setAttribute('id', 'smo59845');
smo59845.setStyle({ fillStyle: "#115511" });
smo59862v1ar.push(smo59845);
const smo59846 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/3/r"]}'))
smo59846.setAttribute('id', 'smo59846');
smo59846.setStyle({ fillStyle: "#115511" });
smo59862v1ar.push(smo59846);
const smo59847 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/3/r"]}'))
smo59847.setAttribute('id', 'smo59847');
smo59847.setStyle({ fillStyle: "#115511" });
smo59862v1ar.push(smo59847);
const smo59848 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo59848.setAttribute('id', 'smo59848');
smo59848.setStyle({ fillStyle: "#115511" });
smo59862v1ar.push(smo59848);
smo59862v1.addTickables(smo59862v1ar)
fmtsmo5986238.joinVoices([smo59862v1]);
const fmtsmo6491738 = new VF.Formatter();
//
// voices and notes for stave 1 38
const smo64917v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64917v0ar = [];
const smo64895 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo64895.setAttribute('id', 'smo64895');
smo64917v0ar.push(smo64895);
const smo64896 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo64896.setAttribute('id', 'smo64896');
smo64917v0ar.push(smo64896);
const smo64897 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo64897.setAttribute('id', 'smo64897');
smo64917v0ar.push(smo64897);
const smo64898 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/3/n"]}'))
smo64898.setAttribute('id', 'smo64898');
smo64917v0ar.push(smo64898);
const smo64899 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo64899.setAttribute('id', 'smo64899');
smo64899.addModifier(new VF.Dot(), 0);
smo64917v0ar.push(smo64899);
const smo64900 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo64900.setAttribute('id', 'smo64900');
smo64917v0ar.push(smo64900);
const smo64901 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo64901.setAttribute('id', 'smo64901');
smo64917v0ar.push(smo64901);
const smo64902 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/3/n"]}'))
smo64902.setAttribute('id', 'smo64902');
smo64917v0ar.push(smo64902);
const smo64903 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo64903.setAttribute('id', 'smo64903');
smo64917v0ar.push(smo64903);
smo64917v0.addTickables(smo64917v0ar)
fmtsmo6491738.joinVoices([smo64917v0]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68428 = smo59827.getStemDirection();
smo59827.setStemDirection(dirsmo68428);
smo59828.setStemDirection(dirsmo68428);
smo59829.setStemDirection(dirsmo68428);
smo59830.setStemDirection(dirsmo68428);
const smo68428 = new VF.Beam([smo59827,smo59828,smo59829,smo59830]);
const dirsmo68429 = smo59831.getStemDirection();
smo59831.setStemDirection(dirsmo68429);
smo59832.setStemDirection(dirsmo68429);
smo59833.setStemDirection(dirsmo68429);
smo59834.setStemDirection(dirsmo68429);
const smo68429 = new VF.Beam([smo59831,smo59832,smo59833,smo59834]);
const dirsmo68430 = smo59835.getStemDirection();
smo59835.setStemDirection(dirsmo68430);
smo59836.setStemDirection(dirsmo68430);
smo59837.setStemDirection(dirsmo68430);
smo59838.setStemDirection(dirsmo68430);
const smo68430 = new VF.Beam([smo59835,smo59836,smo59837,smo59838]);
const dirsmo68431 = smo59839.getStemDirection();
smo59839.setStemDirection(dirsmo68431);
smo59840.setStemDirection(dirsmo68431);
const smo68431 = new VF.Beam([smo59839,smo59840]);
const dirsmo68432 = smo59841.getStemDirection();
smo59841.setStemDirection(dirsmo68432);
smo59842.setStemDirection(dirsmo68432);
smo59843.setStemDirection(dirsmo68432);
smo59844.setStemDirection(dirsmo68432);
const smo68432 = new VF.Beam([smo59841,smo59842,smo59843,smo59844]);
const dirsmo68435 = smo64896.getStemDirection();
smo64896.setStemDirection(dirsmo68435);
smo64897.setStemDirection(dirsmo68435);
smo64898.setStemDirection(dirsmo68435);
const smo68435 = new VF.Beam([smo64896,smo64897,smo64898]);
const dirsmo68436 = smo64899.getStemDirection();
smo64899.setStemDirection(dirsmo68436);
smo64900.setStemDirection(dirsmo68436);
smo64901.setStemDirection(dirsmo68436);
smo64902.setStemDirection(dirsmo68436);
smo64903.setStemDirection(dirsmo68436);
const smo68436 = new VF.Beam([smo64899,smo64900,smo64901,smo64902,smo64903]);
 
// formatting measures in staff group smo57447
fmtsmo5986238.format([smo59862v0,smo59862v1,smo64917v0], 372);
const stavesmo59862 = new VF.Stave(90, 1712, 430);
stavesmo59862.setAttribute('id', 'stavesmo59862');
stavesmo59862.setBegBarType(1);
stavesmo59862.addClef('treble');
stavesmo59862.setContext(context);
stavesmo59862.draw();
smo59862v0.draw(context, stavesmo59862);
smo59862v1.draw(context, stavesmo59862);
smo68428.setContext(context);
smo68428.draw();
smo68429.setContext(context);
smo68429.draw();
smo68430.setContext(context);
smo68430.draw();
smo68431.setContext(context);
smo68431.draw();
smo68432.setContext(context);
smo68432.draw();
const stavesmo64917 = new VF.Stave(90, 1861, 430);
stavesmo64917.setAttribute('id', 'stavesmo64917');
stavesmo64917.setBegBarType(1);
stavesmo64917.addClef('bass');
stavesmo64917.setContext(context);
stavesmo64917.draw();
smo64917v0.draw(context, stavesmo64917);
smo68435.setContext(context);
smo68435.draw();
smo68436.setContext(context);
smo68436.draw();
const leftsmo57447stavesmo598621 = new VF.StaveConnector(stavesmo59862, stavesmo64917).setType(3);
leftsmo57447stavesmo598621.setContext(context).draw();
const fmtsmo5989639 = new VF.Formatter();
//
// voices and notes for stave 0 39
const smo59896v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59896v0ar = [];
const smo59863 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo59863.setAttribute('id', 'smo59863');
smo59896v0ar.push(smo59863);
const smo59864 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo59864.setAttribute('id', 'smo59864');
smo59896v0ar.push(smo59864);
const smo59865 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo59865.setAttribute('id', 'smo59865');
smo59896v0ar.push(smo59865);
const smo59866 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo59866.setAttribute('id', 'smo59866');
smo59896v0ar.push(smo59866);
const smo59867 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo59867.setAttribute('id', 'smo59867');
smo59896v0ar.push(smo59867);
const smo59868 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo59868.setAttribute('id', 'smo59868');
smo59896v0ar.push(smo59868);
const smo59869 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo59869.setAttribute('id', 'smo59869');
smo59869.addModifier(new VF.Dot(), 0);
smo59896v0ar.push(smo59869);
const smo59870 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo59870.setAttribute('id', 'smo59870');
smo59896v0ar.push(smo59870);
const smo59871 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59871.setAttribute('id', 'smo59871');
smo59896v0ar.push(smo59871);
const smo59872 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo59872.setAttribute('id', 'smo59872');
smo59896v0ar.push(smo59872);
const smo59873 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59873.setAttribute('id', 'smo59873');
smo59896v0ar.push(smo59873);
const smo59874 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo59874.setAttribute('id', 'smo59874');
smo59896v0ar.push(smo59874);
smo59896v0.addTickables(smo59896v0ar)
fmtsmo5989639.joinVoices([smo59896v0]);
const smo59896v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59896v1ar = [];
const smo59875 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo59875.setAttribute('id', 'smo59875');
smo59875.setStyle({ fillStyle: "#115511" });
smo59896v1ar.push(smo59875);
const smo59876 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59876.setAttribute('id', 'smo59876');
smo59876.setStyle({ fillStyle: "#115511" });
smo59896v1ar.push(smo59876);
const smo59877 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo59877.setAttribute('id', 'smo59877');
smo59877.setStyle({ fillStyle: "#115511" });
smo59896v1ar.push(smo59877);
const smo59878 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59878.setAttribute('id', 'smo59878');
smo59878.setStyle({ fillStyle: "#115511" });
smo59896v1ar.push(smo59878);
const smo59879 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59879.setAttribute('id', 'smo59879');
smo59879.setStyle({ fillStyle: "#115511" });
smo59896v1ar.push(smo59879);
const smo59880 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59880.setAttribute('id', 'smo59880');
smo59880.setStyle({ fillStyle: "#115511" });
smo59896v1ar.push(smo59880);
const smo59881 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo59881.setAttribute('id', 'smo59881');
smo59881.setStyle({ fillStyle: "#115511" });
smo59896v1ar.push(smo59881);
const smo59882 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo59882.setAttribute('id', 'smo59882');
smo59882.setStyle({ fillStyle: "#115511" });
smo59896v1ar.push(smo59882);
smo59896v1.addTickables(smo59896v1ar)
fmtsmo5989639.joinVoices([smo59896v1]);
const fmtsmo6494639 = new VF.Formatter();
//
// voices and notes for stave 1 39
const smo64946v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64946v0ar = [];
const smo64918 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo64918.setAttribute('id', 'smo64918');
smo64946v0ar.push(smo64918);
const smo64919 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo64919.setAttribute('id', 'smo64919');
smo64946v0ar.push(smo64919);
const smo64920 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo64920.setAttribute('id', 'smo64920');
smo64946v0ar.push(smo64920);
const smo64921 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo64921.setAttribute('id', 'smo64921');
smo64946v0ar.push(smo64921);
const smo64922 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo64922.setAttribute('id', 'smo64922');
smo64946v0ar.push(smo64922);
const smo64923 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo64923.setAttribute('id', 'smo64923');
smo64946v0ar.push(smo64923);
const smo64924 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo64924.setAttribute('id', 'smo64924');
smo64946v0ar.push(smo64924);
const smo64925 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo64925.setAttribute('id', 'smo64925');
smo64946v0ar.push(smo64925);
const smo64926 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo64926.setAttribute('id', 'smo64926');
smo64946v0ar.push(smo64926);
const smo64927 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/3/n"]}'))
smo64927.setAttribute('id', 'smo64927');
const smo649270acc = new VF.Accidental('b');
smo64927.addModifier(smo649270acc, 0);
smo64946v0ar.push(smo64927);
smo64946v0.addTickables(smo64946v0ar)
fmtsmo6494639.joinVoices([smo64946v0]);
const smo64946v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64946v1ar = [];
const smo64928 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo64928.setAttribute('id', 'smo64928');
smo64928.setStyle({ fillStyle: "#115511" });
smo64946v1ar.push(smo64928);
const smo64929 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo64929.setAttribute('id', 'smo64929');
smo64929.setStyle({ fillStyle: "#115511" });
smo64946v1ar.push(smo64929);
const smo64930 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo64930.setAttribute('id', 'smo64930');
smo64930.setStyle({ fillStyle: "#115511" });
smo64946v1ar.push(smo64930);
const smo64931 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo64931.setAttribute('id', 'smo64931');
smo64931.setStyle({ fillStyle: "#115511" });
smo64946v1ar.push(smo64931);
const smo64932 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo64932.setAttribute('id', 'smo64932');
smo64932.setStyle({ fillStyle: "#115511" });
smo64946v1ar.push(smo64932);
smo64946v1.addTickables(smo64946v1ar)
fmtsmo6494639.joinVoices([smo64946v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68439 = smo59863.getStemDirection();
smo59863.setStemDirection(dirsmo68439);
smo59864.setStemDirection(dirsmo68439);
const smo68439 = new VF.Beam([smo59863,smo59864]);
const dirsmo68440 = smo59865.getStemDirection();
smo59865.setStemDirection(dirsmo68440);
smo59866.setStemDirection(dirsmo68440);
smo59867.setStemDirection(dirsmo68440);
smo59868.setStemDirection(dirsmo68440);
const smo68440 = new VF.Beam([smo59865,smo59866,smo59867,smo59868]);
const dirsmo68441 = smo59869.getStemDirection();
smo59869.setStemDirection(dirsmo68441);
smo59870.setStemDirection(dirsmo68441);
const smo68441 = new VF.Beam([smo59869,smo59870]);
const dirsmo68442 = smo59871.getStemDirection();
smo59871.setStemDirection(dirsmo68442);
smo59872.setStemDirection(dirsmo68442);
smo59873.setStemDirection(dirsmo68442);
smo59874.setStemDirection(dirsmo68442);
const smo68442 = new VF.Beam([smo59871,smo59872,smo59873,smo59874]);
const dirsmo68443 = smo59875.getStemDirection();
smo59875.setStemDirection(dirsmo68443);
smo59876.setStemDirection(dirsmo68443);
smo59877.setStemDirection(dirsmo68443);
const smo68443 = new VF.Beam([smo59875,smo59876,smo59877]);
const dirsmo68444 = smo59879.getStemDirection();
smo59879.setStemDirection(dirsmo68444);
smo59880.setStemDirection(dirsmo68444);
smo59881.setStemDirection(dirsmo68444);
const smo68444 = new VF.Beam([smo59879,smo59880,smo59881]);
const dirsmo68447 = smo64918.getStemDirection();
smo64918.setStemDirection(dirsmo68447);
smo64919.setStemDirection(dirsmo68447);
const smo68447 = new VF.Beam([smo64918,smo64919]);
const dirsmo68448 = smo64920.getStemDirection();
smo64920.setStemDirection(dirsmo68448);
smo64921.setStemDirection(dirsmo68448);
smo64922.setStemDirection(dirsmo68448);
smo64923.setStemDirection(dirsmo68448);
const smo68448 = new VF.Beam([smo64920,smo64921,smo64922,smo64923]);
const dirsmo68449 = smo64924.getStemDirection();
smo64924.setStemDirection(dirsmo68449);
smo64925.setStemDirection(dirsmo68449);
const smo68449 = new VF.Beam([smo64924,smo64925]);
const dirsmo68450 = smo64926.getStemDirection();
smo64926.setStemDirection(dirsmo68450);
smo64927.setStemDirection(dirsmo68450);
const smo68450 = new VF.Beam([smo64926,smo64927]);
const dirsmo68451 = smo64930.getStemDirection();
smo64930.setStemDirection(dirsmo68451);
smo64931.setStemDirection(dirsmo68451);
smo64932.setStemDirection(dirsmo68451);
const smo68451 = new VF.Beam([smo64930,smo64931,smo64932]);
 
// formatting measures in staff group smo57447
fmtsmo5989639.format([smo59896v0,smo59896v1,smo64946v0,smo64946v1], 390);
const stavesmo59896 = new VF.Stave(520, 1712, 404);
stavesmo59896.setAttribute('id', 'stavesmo59896');
stavesmo59896.setBegBarType(VF.Barline.type.NONE);
stavesmo59896.setContext(context);
stavesmo59896.draw();
smo59896v0.draw(context, stavesmo59896);
smo59896v1.draw(context, stavesmo59896);
smo68439.setContext(context);
smo68439.draw();
smo68440.setContext(context);
smo68440.draw();
smo68441.setContext(context);
smo68441.draw();
smo68442.setContext(context);
smo68442.draw();
smo68443.setContext(context);
smo68443.draw();
smo68444.setContext(context);
smo68444.draw();
const stavesmo64946 = new VF.Stave(520, 1861, 404);
stavesmo64946.setAttribute('id', 'stavesmo64946');
stavesmo64946.setBegBarType(VF.Barline.type.NONE);
stavesmo64946.setContext(context);
stavesmo64946.draw();
smo64946v0.draw(context, stavesmo64946);
smo64946v1.draw(context, stavesmo64946);
smo68447.setContext(context);
smo68447.draw();
smo68448.setContext(context);
smo68448.draw();
smo68449.setContext(context);
smo68449.draw();
smo68450.setContext(context);
smo68450.draw();
smo68451.setContext(context);
smo68451.draw();
const fmtsmo5992540 = new VF.Formatter();
//
// voices and notes for stave 0 40
const smo59925v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59925v0ar = [];
const smo59897 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo59897.setAttribute('id', 'smo59897');
smo59925v0ar.push(smo59897);
const smo59898 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo59898.setAttribute('id', 'smo59898');
smo59925v0ar.push(smo59898);
const smo59899 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo59899.setAttribute('id', 'smo59899');
smo59925v0ar.push(smo59899);
const smo59900 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo59900.setAttribute('id', 'smo59900');
smo59925v0ar.push(smo59900);
const smo59901 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo59901.setAttribute('id', 'smo59901');
smo59925v0ar.push(smo59901);
const smo59902 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo59902.setAttribute('id', 'smo59902');
smo59925v0ar.push(smo59902);
smo59925v0.addTickables(smo59925v0ar)
fmtsmo5992540.joinVoices([smo59925v0]);
const smo59925v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59925v1ar = [];
const smo59903 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59903.setAttribute('id', 'smo59903');
smo59903.setStyle({ fillStyle: "#115511" });
smo59925v1ar.push(smo59903);
const smo59904 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59904.setAttribute('id', 'smo59904');
smo59904.setStyle({ fillStyle: "#115511" });
smo59925v1ar.push(smo59904);
const smo59905 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59905.setAttribute('id', 'smo59905');
smo59905.setStyle({ fillStyle: "#115511" });
smo59925v1ar.push(smo59905);
const smo59906 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo59906.setAttribute('id', 'smo59906');
smo59906.setStyle({ fillStyle: "#115511" });
smo59925v1ar.push(smo59906);
const smo59907 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59907.setAttribute('id', 'smo59907');
smo59907.setStyle({ fillStyle: "#115511" });
smo59925v1ar.push(smo59907);
const smo59908 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo59908.setAttribute('id', 'smo59908');
smo59908.setStyle({ fillStyle: "#115511" });
smo59925v1ar.push(smo59908);
const smo59909 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59909.setAttribute('id', 'smo59909');
smo59909.setStyle({ fillStyle: "#115511" });
smo59925v1ar.push(smo59909);
const smo59910 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo59910.setAttribute('id', 'smo59910');
smo59910.setStyle({ fillStyle: "#115511" });
smo59925v1ar.push(smo59910);
const smo59911 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo59911.setAttribute('id', 'smo59911');
smo59911.setStyle({ fillStyle: "#115511" });
smo59925v1ar.push(smo59911);
smo59925v1.addTickables(smo59925v1ar)
fmtsmo5992540.joinVoices([smo59925v1]);
const fmtsmo6498040 = new VF.Formatter();
//
// voices and notes for stave 1 40
const smo64980v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64980v0ar = [];
const smo64947 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo64947.setAttribute('id', 'smo64947');
smo64980v0ar.push(smo64947);
const smo64948 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo64948.setAttribute('id', 'smo64948');
smo64980v0ar.push(smo64948);
const smo64949 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo64949.setAttribute('id', 'smo64949');
smo64980v0ar.push(smo64949);
const smo64950 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo64950.setAttribute('id', 'smo64950');
smo64980v0ar.push(smo64950);
const smo64951 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo64951.setAttribute('id', 'smo64951');
smo64980v0ar.push(smo64951);
const smo64952 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo64952.setAttribute('id', 'smo64952');
smo64980v0ar.push(smo64952);
const smo64953 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo64953.setAttribute('id', 'smo64953');
smo64980v0ar.push(smo64953);
const smo64954 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo64954.setAttribute('id', 'smo64954');
smo64980v0ar.push(smo64954);
const smo64955 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo64955.setAttribute('id', 'smo64955');
smo64980v0ar.push(smo64955);
smo64980v0.addTickables(smo64980v0ar)
fmtsmo6498040.joinVoices([smo64980v0]);
const smo64980v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64980v1ar = [];
const smo64956 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo64956.setAttribute('id', 'smo64956');
smo64956.setStyle({ fillStyle: "#115511" });
smo64956.addModifier(new VF.Dot(), 0);
smo64980v1ar.push(smo64956);
const smo64957 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo64957.setAttribute('id', 'smo64957');
smo64957.setStyle({ fillStyle: "#115511" });
smo64980v1ar.push(smo64957);
const smo64958 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo64958.setAttribute('id', 'smo64958');
smo64958.setStyle({ fillStyle: "#115511" });
smo64980v1ar.push(smo64958);
const smo64959 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo64959.setAttribute('id', 'smo64959');
smo64959.setStyle({ fillStyle: "#115511" });
smo64980v1ar.push(smo64959);
const smo64960 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo64960.setAttribute('id', 'smo64960');
smo64960.setStyle({ fillStyle: "#115511" });
smo64980v1ar.push(smo64960);
const smo64961 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo64961.setAttribute('id', 'smo64961');
smo64961.setStyle({ fillStyle: "#115511" });
smo64980v1ar.push(smo64961);
const smo64962 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo64962.setAttribute('id', 'smo64962');
smo64962.setStyle({ fillStyle: "#115511" });
smo64980v1ar.push(smo64962);
const smo64963 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo64963.setAttribute('id', 'smo64963');
smo64963.setStyle({ fillStyle: "#115511" });
smo64980v1ar.push(smo64963);
const smo64964 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo64964.setAttribute('id', 'smo64964');
smo64964.setStyle({ fillStyle: "#115511" });
smo64980v1ar.push(smo64964);
const smo64965 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo64965.setAttribute('id', 'smo64965');
smo64965.setStyle({ fillStyle: "#115511" });
smo64980v1ar.push(smo64965);
const smo64966 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo64966.setAttribute('id', 'smo64966');
smo64966.setStyle({ fillStyle: "#115511" });
smo64980v1ar.push(smo64966);
smo64980v1.addTickables(smo64980v1ar)
fmtsmo6498040.joinVoices([smo64980v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68454 = smo59897.getStemDirection();
smo59897.setStemDirection(dirsmo68454);
smo59898.setStemDirection(dirsmo68454);
smo59899.setStemDirection(dirsmo68454);
smo59900.setStemDirection(dirsmo68454);
const smo68454 = new VF.Beam([smo59897,smo59898,smo59899,smo59900]);
const dirsmo68455 = smo59903.getStemDirection();
smo59903.setStemDirection(dirsmo68455);
smo59904.setStemDirection(dirsmo68455);
const smo68455 = new VF.Beam([smo59903,smo59904]);
const dirsmo68456 = smo59906.getStemDirection();
smo59906.setStemDirection(dirsmo68456);
smo59907.setStemDirection(dirsmo68456);
smo59908.setStemDirection(dirsmo68456);
const smo68456 = new VF.Beam([smo59906,smo59907,smo59908]);
const dirsmo68457 = smo59909.getStemDirection();
smo59909.setStemDirection(dirsmo68457);
smo59910.setStemDirection(dirsmo68457);
const smo68457 = new VF.Beam([smo59909,smo59910]);
const dirsmo68460 = smo64947.getStemDirection();
smo64947.setStemDirection(dirsmo68460);
smo64948.setStemDirection(dirsmo68460);
smo64949.setStemDirection(dirsmo68460);
smo64950.setStemDirection(dirsmo68460);
const smo68460 = new VF.Beam([smo64947,smo64948,smo64949,smo64950]);
const dirsmo68461 = smo64952.getStemDirection();
smo64952.setStemDirection(dirsmo68461);
smo64953.setStemDirection(dirsmo68461);
smo64954.setStemDirection(dirsmo68461);
const smo68461 = new VF.Beam([smo64952,smo64953,smo64954]);
const dirsmo68462 = smo64956.getStemDirection();
smo64956.setStemDirection(dirsmo68462);
smo64957.setStemDirection(dirsmo68462);
smo64958.setStemDirection(dirsmo68462);
const smo68462 = new VF.Beam([smo64956,smo64957,smo64958]);
const dirsmo68463 = smo64959.getStemDirection();
smo64959.setStemDirection(dirsmo68463);
smo64960.setStemDirection(dirsmo68463);
const smo68463 = new VF.Beam([smo64959,smo64960]);
const dirsmo68464 = smo64961.getStemDirection();
smo64961.setStemDirection(dirsmo68464);
smo64962.setStemDirection(dirsmo68464);
const smo68464 = new VF.Beam([smo64961,smo64962]);
const dirsmo68465 = smo64963.getStemDirection();
smo64963.setStemDirection(dirsmo68465);
smo64964.setStemDirection(dirsmo68465);
smo64965.setStemDirection(dirsmo68465);
smo64966.setStemDirection(dirsmo68465);
const smo68465 = new VF.Beam([smo64963,smo64964,smo64965,smo64966]);
 
// formatting measures in staff group smo57447
fmtsmo5992540.format([smo59925v0,smo59925v1,smo64980v0,smo64980v1], 427);
const stavesmo59925 = new VF.Stave(924, 1712, 441);
stavesmo59925.setAttribute('id', 'stavesmo59925');
stavesmo59925.setBegBarType(VF.Barline.type.NONE);
stavesmo59925.setContext(context);
stavesmo59925.draw();
smo59925v0.draw(context, stavesmo59925);
smo59925v1.draw(context, stavesmo59925);
smo68454.setContext(context);
smo68454.draw();
smo68455.setContext(context);
smo68455.draw();
smo68456.setContext(context);
smo68456.draw();
smo68457.setContext(context);
smo68457.draw();
const stavesmo64980 = new VF.Stave(924, 1861, 441);
stavesmo64980.setAttribute('id', 'stavesmo64980');
stavesmo64980.setBegBarType(VF.Barline.type.NONE);
stavesmo64980.setContext(context);
stavesmo64980.draw();
smo64980v0.draw(context, stavesmo64980);
smo64980v1.draw(context, stavesmo64980);
smo68460.setContext(context);
smo68460.draw();
smo68461.setContext(context);
smo68461.draw();
smo68462.setContext(context);
smo68462.draw();
smo68463.setContext(context);
smo68463.draw();
smo68464.setContext(context);
smo68464.draw();
smo68465.setContext(context);
smo68465.draw();
const fmtsmo5995141 = new VF.Formatter();
//
// voices and notes for stave 0 41
const smo59951v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59951v0ar = [];
const smo59926 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59926.setAttribute('id', 'smo59926');
smo59951v0ar.push(smo59926);
const smo59927 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo59927.setAttribute('id', 'smo59927');
smo59951v0ar.push(smo59927);
const smo59928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo59928.setAttribute('id', 'smo59928');
smo59951v0ar.push(smo59928);
const smo59929 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo59929.setAttribute('id', 'smo59929');
smo59951v0ar.push(smo59929);
const smo59930 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo59930.setAttribute('id', 'smo59930');
smo59930.addModifier(new VF.Dot(), 0);
smo59951v0ar.push(smo59930);
const smo59931 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo59931.setAttribute('id', 'smo59931');
smo59951v0ar.push(smo59931);
const smo59932 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo59932.setAttribute('id', 'smo59932');
smo59951v0ar.push(smo59932);
const smo59933 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo59933.setAttribute('id', 'smo59933');
smo59951v0ar.push(smo59933);
const smo59934 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo59934.setAttribute('id', 'smo59934');
smo59951v0ar.push(smo59934);
smo59951v0.addTickables(smo59951v0ar)
fmtsmo5995141.joinVoices([smo59951v0]);
const smo59951v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59951v1ar = [];
const smo59935 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo59935.setAttribute('id', 'smo59935');
smo59935.setStyle({ fillStyle: "#115511" });
smo59951v1ar.push(smo59935);
const smo59936 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59936.setAttribute('id', 'smo59936');
smo59936.setStyle({ fillStyle: '#aaaaaa7f' });
smo59951v1ar.push(smo59936);
const smo59937 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59937.setAttribute('id', 'smo59937');
smo59937.setStyle({ fillStyle: '#aaaaaa7f' });
smo59951v1ar.push(smo59937);
smo59951v1.addTickables(smo59951v1ar)
fmtsmo5995141.joinVoices([smo59951v1]);
const fmtsmo6501441 = new VF.Formatter();
//
// voices and notes for stave 1 41
const smo65014v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65014v0ar = [];
const smo64981 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo64981.setAttribute('id', 'smo64981');
smo65014v0ar.push(smo64981);
const smo64982 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo64982.setAttribute('id', 'smo64982');
smo65014v0ar.push(smo64982);
const smo64983 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo64983.setAttribute('id', 'smo64983');
smo65014v0ar.push(smo64983);
const smo64984 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo64984.setAttribute('id', 'smo64984');
smo65014v0ar.push(smo64984);
const smo64985 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo64985.setAttribute('id', 'smo64985');
smo65014v0ar.push(smo64985);
const smo64986 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo64986.setAttribute('id', 'smo64986');
smo64986.addModifier(new VF.Dot(), 0);
smo65014v0ar.push(smo64986);
const smo64987 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo64987.setAttribute('id', 'smo64987');
smo65014v0ar.push(smo64987);
const smo64988 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo64988.setAttribute('id', 'smo64988');
smo65014v0ar.push(smo64988);
smo65014v0.addTickables(smo65014v0ar)
fmtsmo6501441.joinVoices([smo65014v0]);
const smo65014v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65014v1ar = [];
const smo64989 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo64989.setAttribute('id', 'smo64989');
smo64989.setStyle({ fillStyle: "#115511" });
smo65014v1ar.push(smo64989);
const smo64990 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo64990.setAttribute('id', 'smo64990');
smo64990.setStyle({ fillStyle: "#115511" });
smo65014v1ar.push(smo64990);
const smo64991 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo64991.setAttribute('id', 'smo64991');
smo64991.setStyle({ fillStyle: "#115511" });
smo65014v1ar.push(smo64991);
const smo64992 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo64992.setAttribute('id', 'smo64992');
smo64992.setStyle({ fillStyle: "#115511" });
smo65014v1ar.push(smo64992);
const smo64993 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo64993.setAttribute('id', 'smo64993');
smo64993.setStyle({ fillStyle: "#115511" });
smo65014v1ar.push(smo64993);
const smo64994 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo64994.setAttribute('id', 'smo64994');
smo64994.setStyle({ fillStyle: "#115511" });
smo65014v1ar.push(smo64994);
const smo64995 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo64995.setAttribute('id', 'smo64995');
smo64995.setStyle({ fillStyle: "#115511" });
smo65014v1ar.push(smo64995);
const smo64996 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/2/n"]}'))
smo64996.setAttribute('id', 'smo64996');
smo64996.setStyle({ fillStyle: "#115511" });
smo65014v1ar.push(smo64996);
const smo64997 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/2/n"]}'))
smo64997.setAttribute('id', 'smo64997');
smo64997.setStyle({ fillStyle: "#115511" });
smo65014v1ar.push(smo64997);
const smo64998 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo64998.setAttribute('id', 'smo64998');
smo64998.setStyle({ fillStyle: "#115511" });
smo65014v1ar.push(smo64998);
const smo64999 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo64999.setAttribute('id', 'smo64999');
smo64999.setStyle({ fillStyle: "#115511" });
smo65014v1ar.push(smo64999);
const smo65000 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo65000.setAttribute('id', 'smo65000');
smo65000.setStyle({ fillStyle: "#115511" });
const smo650000acc = new VF.Accidental('#');
smo65000.addModifier(smo650000acc, 0);
smo65014v1ar.push(smo65000);
smo65014v1.addTickables(smo65014v1ar)
fmtsmo6501441.joinVoices([smo65014v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68468 = smo59927.getStemDirection();
smo59927.setStemDirection(dirsmo68468);
smo59928.setStemDirection(dirsmo68468);
smo59929.setStemDirection(dirsmo68468);
const smo68468 = new VF.Beam([smo59927,smo59928,smo59929]);
const dirsmo68469 = smo59930.getStemDirection();
smo59930.setStemDirection(dirsmo68469);
smo59931.setStemDirection(dirsmo68469);
smo59932.setStemDirection(dirsmo68469);
const smo68469 = new VF.Beam([smo59930,smo59931,smo59932]);
const dirsmo68470 = smo59933.getStemDirection();
smo59933.setStemDirection(dirsmo68470);
smo59934.setStemDirection(dirsmo68470);
const smo68470 = new VF.Beam([smo59933,smo59934]);
const dirsmo68473 = smo64983.getStemDirection();
smo64983.setStemDirection(dirsmo68473);
smo64984.setStemDirection(dirsmo68473);
const smo68473 = new VF.Beam([smo64983,smo64984]);
const dirsmo68474 = smo64986.getStemDirection();
smo64986.setStemDirection(dirsmo68474);
smo64987.setStemDirection(dirsmo68474);
smo64988.setStemDirection(dirsmo68474);
const smo68474 = new VF.Beam([smo64986,smo64987,smo64988]);
const dirsmo68475 = smo64989.getStemDirection();
smo64989.setStemDirection(dirsmo68475);
smo64990.setStemDirection(dirsmo68475);
smo64991.setStemDirection(dirsmo68475);
smo64992.setStemDirection(dirsmo68475);
const smo68475 = new VF.Beam([smo64989,smo64990,smo64991,smo64992]);
const dirsmo68476 = smo64993.getStemDirection();
smo64993.setStemDirection(dirsmo68476);
smo64994.setStemDirection(dirsmo68476);
smo64995.setStemDirection(dirsmo68476);
smo64996.setStemDirection(dirsmo68476);
const smo68476 = new VF.Beam([smo64993,smo64994,smo64995,smo64996]);
const dirsmo68477 = smo64997.getStemDirection();
smo64997.setStemDirection(dirsmo68477);
smo64998.setStemDirection(dirsmo68477);
smo64999.setStemDirection(dirsmo68477);
smo65000.setStemDirection(dirsmo68477);
const smo68477 = new VF.Beam([smo64997,smo64998,smo64999,smo65000]);
 
// formatting measures in staff group smo57447
fmtsmo5995141.format([smo59951v0,smo59951v1,smo65014v0,smo65014v1], 430);
const stavesmo59951 = new VF.Stave(1365, 1712, 444);
stavesmo59951.setAttribute('id', 'stavesmo59951');
stavesmo59951.setBegBarType(VF.Barline.type.NONE);
stavesmo59951.setContext(context);
stavesmo59951.draw();
smo59951v0.draw(context, stavesmo59951);
smo59951v1.draw(context, stavesmo59951);
smo68468.setContext(context);
smo68468.draw();
smo68469.setContext(context);
smo68469.draw();
smo68470.setContext(context);
smo68470.draw();
const stavesmo65014 = new VF.Stave(1365, 1861, 444);
stavesmo65014.setAttribute('id', 'stavesmo65014');
stavesmo65014.setBegBarType(VF.Barline.type.NONE);
stavesmo65014.setContext(context);
stavesmo65014.draw();
smo65014v0.draw(context, stavesmo65014);
smo65014v1.draw(context, stavesmo65014);
smo68473.setContext(context);
smo68473.draw();
smo68474.setContext(context);
smo68474.draw();
smo68475.setContext(context);
smo68475.draw();
smo68476.setContext(context);
smo68476.draw();
smo68477.setContext(context);
smo68477.draw();
const rightsmo57447stavesmo599511 = new VF.StaveConnector(stavesmo59951, stavesmo65014).setType(0);
rightsmo57447stavesmo599511.setContext(context).draw();
const fmtsmo5997742 = new VF.Formatter();
//
// voices and notes for stave 0 42
const smo59977v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59977v0ar = [];
const smo59952 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo59952.setAttribute('id', 'smo59952');
smo59977v0ar.push(smo59952);
const smo59953 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/5/n"]}'))
smo59953.setAttribute('id', 'smo59953');
smo59977v0ar.push(smo59953);
const smo59954 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/5/n"]}'))
smo59954.setAttribute('id', 'smo59954');
smo59977v0ar.push(smo59954);
const smo59955 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/5/n"]}'))
smo59955.setAttribute('id', 'smo59955');
smo59977v0ar.push(smo59955);
const smo59956 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/5/n"]}'))
smo59956.setAttribute('id', 'smo59956');
smo59977v0ar.push(smo59956);
const smo59957 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/5/n"]}'))
smo59957.setAttribute('id', 'smo59957');
smo59977v0ar.push(smo59957);
const smo59958 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo59958.setAttribute('id', 'smo59958');
smo59977v0ar.push(smo59958);
const smo59959 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/5/n"]}'))
smo59959.setAttribute('id', 'smo59959');
smo59977v0ar.push(smo59959);
const smo59960 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/5/n"]}'))
smo59960.setAttribute('id', 'smo59960');
smo59977v0ar.push(smo59960);
const smo59961 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/5/n"]}'))
smo59961.setAttribute('id', 'smo59961');
smo59977v0ar.push(smo59961);
const smo59962 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/5/n"]}'))
smo59962.setAttribute('id', 'smo59962');
smo59977v0ar.push(smo59962);
const smo59963 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/5/n"]}'))
smo59963.setAttribute('id', 'smo59963');
smo59977v0ar.push(smo59963);
smo59977v0.addTickables(smo59977v0ar)
fmtsmo5997742.joinVoices([smo59977v0]);
const fmtsmo6504642 = new VF.Formatter();
//
// voices and notes for stave 1 42
const smo65046v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65046v0ar = [];
const smo65015 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo65015.setAttribute('id', 'smo65015');
smo65046v0ar.push(smo65015);
const smo65016 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo65016.setAttribute('id', 'smo65016');
smo65046v0ar.push(smo65016);
const smo65017 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo65017.setAttribute('id', 'smo65017');
smo65046v0ar.push(smo65017);
const smo65018 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo65018.setAttribute('id', 'smo65018');
smo65046v0ar.push(smo65018);
const smo65019 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo65019.setAttribute('id', 'smo65019');
smo65046v0ar.push(smo65019);
const smo65020 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo65020.setAttribute('id', 'smo65020');
smo65046v0ar.push(smo65020);
const smo65021 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo65021.setAttribute('id', 'smo65021');
smo65046v0ar.push(smo65021);
const smo65022 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65022.setAttribute('id', 'smo65022');
smo65046v0ar.push(smo65022);
const smo65023 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo65023.setAttribute('id', 'smo65023');
const smo650230acc = new VF.Accidental('n');
smo65023.addModifier(smo650230acc, 0);
smo65046v0ar.push(smo65023);
const smo65024 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo65024.setAttribute('id', 'smo65024');
smo65046v0ar.push(smo65024);
smo65046v0.addTickables(smo65046v0ar)
fmtsmo6504642.joinVoices([smo65046v0]);
const smo65046v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65046v1ar = [];
const smo65025 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65025.setAttribute('id', 'smo65025');
smo65025.setStyle({ fillStyle: "#115511" });
smo65046v1ar.push(smo65025);
const smo65026 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo65026.setAttribute('id', 'smo65026');
smo65026.setStyle({ fillStyle: "#115511" });
smo65046v1ar.push(smo65026);
const smo65027 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/3/n"]}'))
smo65027.setAttribute('id', 'smo65027');
smo65027.setStyle({ fillStyle: "#115511" });
const smo650270acc = new VF.Accidental('b');
smo65027.addModifier(smo650270acc, 0);
smo65046v1ar.push(smo65027);
const smo65028 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65028.setAttribute('id', 'smo65028');
smo65028.setStyle({ fillStyle: "#115511" });
smo65046v1ar.push(smo65028);
const smo65029 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/3/n"]}'))
smo65029.setAttribute('id', 'smo65029');
smo65029.setStyle({ fillStyle: "#115511" });
const smo650290acc = new VF.Accidental('#');
smo65029.addModifier(smo650290acc, 0);
smo65046v1ar.push(smo65029);
const smo65030 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65030.setAttribute('id', 'smo65030');
smo65030.setStyle({ fillStyle: "#115511" });
smo65046v1ar.push(smo65030);
const smo65031 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo65031.setAttribute('id', 'smo65031');
smo65031.setStyle({ fillStyle: "#115511" });
smo65046v1ar.push(smo65031);
const smo65032 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo65032.setAttribute('id', 'smo65032');
smo65032.setStyle({ fillStyle: "#115511" });
smo65046v1ar.push(smo65032);
smo65046v1.addTickables(smo65046v1ar)
fmtsmo6504642.joinVoices([smo65046v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68493 = smo59952.getStemDirection();
smo59952.setStemDirection(dirsmo68493);
smo59953.setStemDirection(dirsmo68493);
const smo68493 = new VF.Beam([smo59952,smo59953]);
const dirsmo68494 = smo59954.getStemDirection();
smo59954.setStemDirection(dirsmo68494);
smo59955.setStemDirection(dirsmo68494);
smo59956.setStemDirection(dirsmo68494);
smo59957.setStemDirection(dirsmo68494);
const smo68494 = new VF.Beam([smo59954,smo59955,smo59956,smo59957]);
const dirsmo68495 = smo59958.getStemDirection();
smo59958.setStemDirection(dirsmo68495);
smo59959.setStemDirection(dirsmo68495);
const smo68495 = new VF.Beam([smo59958,smo59959]);
const dirsmo68496 = smo59960.getStemDirection();
smo59960.setStemDirection(dirsmo68496);
smo59961.setStemDirection(dirsmo68496);
smo59962.setStemDirection(dirsmo68496);
smo59963.setStemDirection(dirsmo68496);
const smo68496 = new VF.Beam([smo59960,smo59961,smo59962,smo59963]);
const dirsmo68499 = smo65015.getStemDirection();
smo65015.setStemDirection(dirsmo68499);
smo65016.setStemDirection(dirsmo68499);
smo65017.setStemDirection(dirsmo68499);
smo65018.setStemDirection(dirsmo68499);
const smo68499 = new VF.Beam([smo65015,smo65016,smo65017,smo65018]);
const dirsmo68500 = smo65019.getStemDirection();
smo65019.setStemDirection(dirsmo68500);
smo65020.setStemDirection(dirsmo68500);
smo65021.setStemDirection(dirsmo68500);
smo65022.setStemDirection(dirsmo68500);
const smo68500 = new VF.Beam([smo65019,smo65020,smo65021,smo65022]);
const dirsmo68501 = smo65023.getStemDirection();
smo65023.setStemDirection(dirsmo68501);
smo65024.setStemDirection(dirsmo68501);
const smo68501 = new VF.Beam([smo65023,smo65024]);
const dirsmo68502 = smo65025.getStemDirection();
smo65025.setStemDirection(dirsmo68502);
smo65026.setStemDirection(dirsmo68502);
smo65027.setStemDirection(dirsmo68502);
smo65028.setStemDirection(dirsmo68502);
const smo68502 = new VF.Beam([smo65025,smo65026,smo65027,smo65028]);
const dirsmo68503 = smo65029.getStemDirection();
smo65029.setStemDirection(dirsmo68503);
smo65030.setStemDirection(dirsmo68503);
const smo68503 = new VF.Beam([smo65029,smo65030]);
 
// formatting measures in staff group smo57447
fmtsmo5997742.format([smo59977v0,smo65046v0,smo65046v1], 362);
const stavesmo59977 = new VF.Stave(90, 2020, 420);
stavesmo59977.setAttribute('id', 'stavesmo59977');
stavesmo59977.setBegBarType(1);
stavesmo59977.addClef('treble');
stavesmo59977.setContext(context);
stavesmo59977.draw();
smo59977v0.draw(context, stavesmo59977);
smo68493.setContext(context);
smo68493.draw();
smo68494.setContext(context);
smo68494.draw();
smo68495.setContext(context);
smo68495.draw();
smo68496.setContext(context);
smo68496.draw();
const stavesmo65046 = new VF.Stave(90, 2184, 420);
stavesmo65046.setAttribute('id', 'stavesmo65046');
stavesmo65046.setBegBarType(1);
stavesmo65046.addClef('bass');
stavesmo65046.setContext(context);
stavesmo65046.draw();
smo65046v0.draw(context, stavesmo65046);
smo65046v1.draw(context, stavesmo65046);
smo68499.setContext(context);
smo68499.draw();
smo68500.setContext(context);
smo68500.draw();
smo68501.setContext(context);
smo68501.draw();
smo68502.setContext(context);
smo68502.draw();
smo68503.setContext(context);
smo68503.draw();
const leftsmo57447stavesmo599771 = new VF.StaveConnector(stavesmo59977, stavesmo65046).setType(3);
leftsmo57447stavesmo599771.setContext(context).draw();
const fmtsmo6000443 = new VF.Formatter();
//
// voices and notes for stave 0 43
const smo60004v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60004v0ar = [];
const smo59978 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo59978.setAttribute('id', 'smo59978');
smo60004v0ar.push(smo59978);
const smo59979 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo59979.setAttribute('id', 'smo59979');
smo60004v0ar.push(smo59979);
const smo59980 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/5/n"]}'))
smo59980.setAttribute('id', 'smo59980');
const smo599800acc = new VF.Accidental('#');
smo59980.addModifier(smo599800acc, 0);
smo60004v0ar.push(smo59980);
const smo59981 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo59981.setAttribute('id', 'smo59981');
smo60004v0ar.push(smo59981);
smo60004v0.addTickables(smo60004v0ar)
fmtsmo6000443.joinVoices([smo60004v0]);
const smo60004v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60004v1ar = [];
const smo59982 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59982.setAttribute('id', 'smo59982');
smo59982.setStyle({ fillStyle: "#115511" });
smo60004v1ar.push(smo59982);
const smo59983 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo59983.setAttribute('id', 'smo59983');
smo59983.setStyle({ fillStyle: "#115511" });
smo60004v1ar.push(smo59983);
const smo59984 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo59984.setAttribute('id', 'smo59984');
smo59984.setStyle({ fillStyle: "#115511" });
smo60004v1ar.push(smo59984);
const smo59985 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo59985.setAttribute('id', 'smo59985');
smo59985.setStyle({ fillStyle: "#115511" });
smo60004v1ar.push(smo59985);
const smo59986 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo59986.setAttribute('id', 'smo59986');
smo59986.setStyle({ fillStyle: "#115511" });
smo59986.addModifier(new VF.Dot(), 0);
smo60004v1ar.push(smo59986);
const smo59987 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo59987.setAttribute('id', 'smo59987');
smo59987.setStyle({ fillStyle: "#115511" });
smo60004v1ar.push(smo59987);
const smo59988 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo59988.setAttribute('id', 'smo59988');
smo59988.setStyle({ fillStyle: "#115511" });
smo60004v1ar.push(smo59988);
const smo59989 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo59989.setAttribute('id', 'smo59989');
smo59989.setStyle({ fillStyle: "#115511" });
smo60004v1ar.push(smo59989);
const smo59990 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo59990.setAttribute('id', 'smo59990');
smo59990.setStyle({ fillStyle: "#115511" });
smo60004v1ar.push(smo59990);
smo60004v1.addTickables(smo60004v1ar)
fmtsmo6000443.joinVoices([smo60004v1]);
const fmtsmo6508143 = new VF.Formatter();
//
// voices and notes for stave 1 43
const smo65081v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65081v0ar = [];
const smo65047 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo65047.setAttribute('id', 'smo65047');
smo65081v0ar.push(smo65047);
const smo65048 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo65048.setAttribute('id', 'smo65048');
smo65081v0ar.push(smo65048);
const smo65049 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65049.setAttribute('id', 'smo65049');
smo65081v0ar.push(smo65049);
const smo65050 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo65050.setAttribute('id', 'smo65050');
smo65081v0ar.push(smo65050);
const smo65051 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65051.setAttribute('id', 'smo65051');
smo65081v0ar.push(smo65051);
const smo65052 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo65052.setAttribute('id', 'smo65052');
smo65081v0ar.push(smo65052);
const smo65053 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo65053.setAttribute('id', 'smo65053');
smo65081v0ar.push(smo65053);
const smo65054 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo65054.setAttribute('id', 'smo65054');
smo65081v0ar.push(smo65054);
const smo65055 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65055.setAttribute('id', 'smo65055');
smo65081v0ar.push(smo65055);
const smo65056 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo65056.setAttribute('id', 'smo65056');
smo65081v0ar.push(smo65056);
smo65081v0.addTickables(smo65081v0ar)
fmtsmo6508143.joinVoices([smo65081v0]);
const smo65081v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65081v1ar = [];
const smo65057 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo65057.setAttribute('id', 'smo65057');
smo65057.setStyle({ fillStyle: "#115511" });
smo65081v1ar.push(smo65057);
const smo65058 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/3/n"]}'))
smo65058.setAttribute('id', 'smo65058');
smo65058.setStyle({ fillStyle: "#115511" });
smo65081v1ar.push(smo65058);
const smo65059 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65059.setAttribute('id', 'smo65059');
smo65059.setStyle({ fillStyle: "#115511" });
smo65081v1ar.push(smo65059);
const smo65060 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo65060.setAttribute('id', 'smo65060');
smo65060.setStyle({ fillStyle: "#115511" });
smo65081v1ar.push(smo65060);
const smo65061 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65061.setAttribute('id', 'smo65061');
smo65061.setStyle({ fillStyle: "#115511" });
smo65081v1ar.push(smo65061);
const smo65062 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/3/n"]}'))
smo65062.setAttribute('id', 'smo65062');
smo65062.setStyle({ fillStyle: "#115511" });
smo65081v1ar.push(smo65062);
const smo65063 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo65063.setAttribute('id', 'smo65063');
smo65063.setStyle({ fillStyle: "#115511" });
smo65081v1ar.push(smo65063);
const smo65064 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65064.setAttribute('id', 'smo65064');
smo65064.setStyle({ fillStyle: "#115511" });
smo65081v1ar.push(smo65064);
const smo65065 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65065.setAttribute('id', 'smo65065');
smo65065.setStyle({ fillStyle: "#115511" });
smo65081v1ar.push(smo65065);
const smo65066 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo65066.setAttribute('id', 'smo65066');
smo65066.setStyle({ fillStyle: "#115511" });
smo65081v1ar.push(smo65066);
const smo65067 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo65067.setAttribute('id', 'smo65067');
smo65067.setStyle({ fillStyle: "#115511" });
smo65081v1ar.push(smo65067);
smo65081v1.addTickables(smo65081v1ar)
fmtsmo6508143.joinVoices([smo65081v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68506 = smo59979.getStemDirection();
smo59979.setStemDirection(dirsmo68506);
smo59980.setStemDirection(dirsmo68506);
const smo68506 = new VF.Beam([smo59979,smo59980]);
const dirsmo68507 = smo59983.getStemDirection();
smo59983.setStemDirection(dirsmo68507);
smo59984.setStemDirection(dirsmo68507);
smo59985.setStemDirection(dirsmo68507);
const smo68507 = new VF.Beam([smo59983,smo59984,smo59985]);
const dirsmo68508 = smo59986.getStemDirection();
smo59986.setStemDirection(dirsmo68508);
smo59987.setStemDirection(dirsmo68508);
smo59988.setStemDirection(dirsmo68508);
const smo68508 = new VF.Beam([smo59986,smo59987,smo59988]);
const dirsmo68509 = smo59989.getStemDirection();
smo59989.setStemDirection(dirsmo68509);
smo59990.setStemDirection(dirsmo68509);
const smo68509 = new VF.Beam([smo59989,smo59990]);
const dirsmo68512 = smo65049.getStemDirection();
smo65049.setStemDirection(dirsmo68512);
smo65050.setStemDirection(dirsmo68512);
smo65051.setStemDirection(dirsmo68512);
smo65052.setStemDirection(dirsmo68512);
const smo68512 = new VF.Beam([smo65049,smo65050,smo65051,smo65052]);
const dirsmo68513 = smo65053.getStemDirection();
smo65053.setStemDirection(dirsmo68513);
smo65054.setStemDirection(dirsmo68513);
smo65055.setStemDirection(dirsmo68513);
smo65056.setStemDirection(dirsmo68513);
const smo68513 = new VF.Beam([smo65053,smo65054,smo65055,smo65056]);
const dirsmo68514 = smo65057.getStemDirection();
smo65057.setStemDirection(dirsmo68514);
smo65058.setStemDirection(dirsmo68514);
smo65059.setStemDirection(dirsmo68514);
smo65060.setStemDirection(dirsmo68514);
const smo68514 = new VF.Beam([smo65057,smo65058,smo65059,smo65060]);
const dirsmo68515 = smo65061.getStemDirection();
smo65061.setStemDirection(dirsmo68515);
smo65062.setStemDirection(dirsmo68515);
smo65063.setStemDirection(dirsmo68515);
smo65064.setStemDirection(dirsmo68515);
const smo68515 = new VF.Beam([smo65061,smo65062,smo65063,smo65064]);
 
// formatting measures in staff group smo57447
fmtsmo6000443.format([smo60004v0,smo60004v1,smo65081v0,smo65081v1], 404);
const stavesmo60004 = new VF.Stave(510, 2020, 418);
stavesmo60004.setAttribute('id', 'stavesmo60004');
stavesmo60004.setBegBarType(VF.Barline.type.NONE);
stavesmo60004.setContext(context);
stavesmo60004.draw();
smo60004v0.draw(context, stavesmo60004);
smo60004v1.draw(context, stavesmo60004);
smo68506.setContext(context);
smo68506.draw();
smo68507.setContext(context);
smo68507.draw();
smo68508.setContext(context);
smo68508.draw();
smo68509.setContext(context);
smo68509.draw();
const stavesmo65081 = new VF.Stave(510, 2184, 418);
stavesmo65081.setAttribute('id', 'stavesmo65081');
stavesmo65081.setBegBarType(VF.Barline.type.NONE);
stavesmo65081.setContext(context);
stavesmo65081.draw();
smo65081v0.draw(context, stavesmo65081);
smo65081v1.draw(context, stavesmo65081);
smo68512.setContext(context);
smo68512.draw();
smo68513.setContext(context);
smo68513.draw();
smo68514.setContext(context);
smo68514.draw();
smo68515.setContext(context);
smo68515.draw();
const fmtsmo6003844 = new VF.Formatter();
//
// voices and notes for stave 0 44
const smo60038v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60038v0ar = [];
const smo60005 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo60005.setAttribute('id', 'smo60005');
smo60038v0ar.push(smo60005);
const smo60006 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/5/n"]}'))
smo60006.setAttribute('id', 'smo60006');
const smo600060acc = new VF.Accidental('#');
smo60006.addModifier(smo600060acc, 0);
smo60038v0ar.push(smo60006);
const smo60007 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo60007.setAttribute('id', 'smo60007');
smo60038v0ar.push(smo60007);
const smo60008 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo60008.setAttribute('id', 'smo60008');
const smo600080acc = new VF.Accidental('n');
smo60008.addModifier(smo600080acc, 0);
smo60038v0ar.push(smo60008);
const smo60009 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo60009.setAttribute('id', 'smo60009');
smo60038v0ar.push(smo60009);
const smo60010 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60010.setAttribute('id', 'smo60010');
smo60038v0ar.push(smo60010);
const smo60011 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60011.setAttribute('id', 'smo60011');
smo60038v0ar.push(smo60011);
const smo60012 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60012.setAttribute('id', 'smo60012');
smo60038v0ar.push(smo60012);
const smo60013 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60013.setAttribute('id', 'smo60013');
smo60038v0ar.push(smo60013);
const smo60014 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60014.setAttribute('id', 'smo60014');
smo60038v0ar.push(smo60014);
smo60038v0.addTickables(smo60038v0ar)
fmtsmo6003844.joinVoices([smo60038v0]);
const smo60038v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60038v1ar = [];
const smo60015 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo60015.setAttribute('id', 'smo60015');
smo60015.setStyle({ fillStyle: "#115511" });
smo60038v1ar.push(smo60015);
const smo60016 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60016.setAttribute('id', 'smo60016');
smo60016.setStyle({ fillStyle: "#115511" });
smo60038v1ar.push(smo60016);
const smo60017 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60017.setAttribute('id', 'smo60017');
smo60017.setStyle({ fillStyle: "#115511" });
smo60038v1ar.push(smo60017);
const smo60018 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo60018.setAttribute('id', 'smo60018');
smo60018.setStyle({ fillStyle: "#115511" });
smo60038v1ar.push(smo60018);
const smo60019 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60019.setAttribute('id', 'smo60019');
smo60019.setStyle({ fillStyle: "#115511" });
smo60038v1ar.push(smo60019);
const smo60020 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60020.setAttribute('id', 'smo60020');
smo60020.setStyle({ fillStyle: "#115511" });
smo60038v1ar.push(smo60020);
const smo60021 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60021.setAttribute('id', 'smo60021');
smo60021.setStyle({ fillStyle: "#115511" });
smo60038v1ar.push(smo60021);
const smo60022 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60022.setAttribute('id', 'smo60022');
smo60022.setStyle({ fillStyle: "#115511" });
smo60038v1ar.push(smo60022);
const smo60023 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60023.setAttribute('id', 'smo60023');
smo60023.setStyle({ fillStyle: "#115511" });
smo60038v1ar.push(smo60023);
const smo60024 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60024.setAttribute('id', 'smo60024');
smo60024.setStyle({ fillStyle: "#115511" });
smo60038v1ar.push(smo60024);
smo60038v1.addTickables(smo60038v1ar)
fmtsmo6003844.joinVoices([smo60038v1]);
const fmtsmo6511044 = new VF.Formatter();
//
// voices and notes for stave 1 44
const smo65110v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65110v0ar = [];
const smo65082 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65082.setAttribute('id', 'smo65082');
smo65110v0ar.push(smo65082);
const smo65083 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo65083.setAttribute('id', 'smo65083');
smo65110v0ar.push(smo65083);
const smo65084 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo65084.setAttribute('id', 'smo65084');
smo65110v0ar.push(smo65084);
const smo65085 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65085.setAttribute('id', 'smo65085');
smo65110v0ar.push(smo65085);
const smo65086 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo65086.setAttribute('id', 'smo65086');
smo65110v0ar.push(smo65086);
const smo65087 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65087.setAttribute('id', 'smo65087');
smo65110v0ar.push(smo65087);
const smo65088 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo65088.setAttribute('id', 'smo65088');
smo65110v0ar.push(smo65088);
const smo65089 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo65089.setAttribute('id', 'smo65089');
smo65110v0ar.push(smo65089);
const smo65090 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65090.setAttribute('id', 'smo65090');
smo65110v0ar.push(smo65090);
const smo65091 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["gn/3/r"]}'))
smo65091.setAttribute('id', 'smo65091');
smo65110v0ar.push(smo65091);
smo65110v0.addTickables(smo65110v0ar)
fmtsmo6511044.joinVoices([smo65110v0]);
const smo65110v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65110v1ar = [];
const smo65092 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo65092.setAttribute('id', 'smo65092');
smo65092.setStyle({ fillStyle: "#115511" });
smo65110v1ar.push(smo65092);
const smo65093 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo65093.setAttribute('id', 'smo65093');
smo65093.setStyle({ fillStyle: "#115511" });
smo65110v1ar.push(smo65093);
const smo65094 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo65094.setAttribute('id', 'smo65094');
smo65094.setStyle({ fillStyle: "#115511" });
smo65110v1ar.push(smo65094);
const smo65095 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/2/n"]}'))
smo65095.setAttribute('id', 'smo65095');
smo65095.setStyle({ fillStyle: "#115511" });
smo65110v1ar.push(smo65095);
const smo65096 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/2/n"]}'))
smo65096.setAttribute('id', 'smo65096');
smo65096.setStyle({ fillStyle: "#115511" });
smo65110v1ar.push(smo65096);
smo65110v1.addTickables(smo65110v1ar)
fmtsmo6511044.joinVoices([smo65110v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68518 = smo60007.getStemDirection();
smo60007.setStemDirection(dirsmo68518);
smo60008.setStemDirection(dirsmo68518);
smo60009.setStemDirection(dirsmo68518);
smo60010.setStemDirection(dirsmo68518);
const smo68518 = new VF.Beam([smo60007,smo60008,smo60009,smo60010]);
const dirsmo68519 = smo60011.getStemDirection();
smo60011.setStemDirection(dirsmo68519);
smo60012.setStemDirection(dirsmo68519);
smo60013.setStemDirection(dirsmo68519);
smo60014.setStemDirection(dirsmo68519);
const smo68519 = new VF.Beam([smo60011,smo60012,smo60013,smo60014]);
const dirsmo68520 = smo60015.getStemDirection();
smo60015.setStemDirection(dirsmo68520);
smo60016.setStemDirection(dirsmo68520);
const smo68520 = new VF.Beam([smo60015,smo60016]);
const dirsmo68521 = smo60017.getStemDirection();
smo60017.setStemDirection(dirsmo68521);
smo60018.setStemDirection(dirsmo68521);
smo60019.setStemDirection(dirsmo68521);
smo60020.setStemDirection(dirsmo68521);
const smo68521 = new VF.Beam([smo60017,smo60018,smo60019,smo60020]);
const dirsmo68524 = smo65082.getStemDirection();
smo65082.setStemDirection(dirsmo68524);
smo65083.setStemDirection(dirsmo68524);
smo65084.setStemDirection(dirsmo68524);
smo65085.setStemDirection(dirsmo68524);
const smo68524 = new VF.Beam([smo65082,smo65083,smo65084,smo65085]);
const dirsmo68525 = smo65086.getStemDirection();
smo65086.setStemDirection(dirsmo68525);
smo65087.setStemDirection(dirsmo68525);
smo65088.setStemDirection(dirsmo68525);
smo65089.setStemDirection(dirsmo68525);
const smo68525 = new VF.Beam([smo65086,smo65087,smo65088,smo65089]);
const dirsmo68526 = smo65094.getStemDirection();
smo65094.setStemDirection(dirsmo68526);
smo65095.setStemDirection(dirsmo68526);
smo65096.setStemDirection(dirsmo68526);
const smo68526 = new VF.Beam([smo65094,smo65095,smo65096]);
 
// formatting measures in staff group smo57447
fmtsmo6003844.format([smo60038v0,smo60038v1,smo65110v0,smo65110v1], 365);
const stavesmo60038 = new VF.Stave(928, 2020, 379);
stavesmo60038.setAttribute('id', 'stavesmo60038');
stavesmo60038.setBegBarType(VF.Barline.type.NONE);
stavesmo60038.setContext(context);
stavesmo60038.draw();
smo60038v0.draw(context, stavesmo60038);
smo60038v1.draw(context, stavesmo60038);
smo68518.setContext(context);
smo68518.draw();
smo68519.setContext(context);
smo68519.draw();
smo68520.setContext(context);
smo68520.draw();
smo68521.setContext(context);
smo68521.draw();
const stavesmo65110 = new VF.Stave(928, 2184, 379);
stavesmo65110.setAttribute('id', 'stavesmo65110');
stavesmo65110.setBegBarType(VF.Barline.type.NONE);
stavesmo65110.setContext(context);
stavesmo65110.draw();
smo65110v0.draw(context, stavesmo65110);
smo65110v1.draw(context, stavesmo65110);
smo68524.setContext(context);
smo68524.draw();
smo68525.setContext(context);
smo68525.draw();
smo68526.setContext(context);
smo68526.draw();
const fmtsmo6007245 = new VF.Formatter();
//
// voices and notes for stave 0 45
const smo60072v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60072v0ar = [];
const smo60039 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo60039.setAttribute('id', 'smo60039');
smo60072v0ar.push(smo60039);
const smo60040 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60040.setAttribute('id', 'smo60040');
smo60072v0ar.push(smo60040);
const smo60041 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60041.setAttribute('id', 'smo60041');
smo60072v0ar.push(smo60041);
const smo60042 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo60042.setAttribute('id', 'smo60042');
smo60072v0ar.push(smo60042);
const smo60043 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60043.setAttribute('id', 'smo60043');
smo60043.addModifier(new VF.Dot(), 0);
smo60072v0ar.push(smo60043);
const smo60044 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["gn/5/r"]}'))
smo60044.setAttribute('id', 'smo60044');
smo60072v0ar.push(smo60044);
const smo60045 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60045.setAttribute('id', 'smo60045');
smo60072v0ar.push(smo60045);
const smo60046 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60046.setAttribute('id', 'smo60046');
smo60072v0ar.push(smo60046);
const smo60047 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo60047.setAttribute('id', 'smo60047');
smo60072v0ar.push(smo60047);
const smo60048 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["g#/4/n"]}'))
smo60048.setAttribute('id', 'smo60048');
const smo600480acc = new VF.Accidental('#');
smo60048.addModifier(smo600480acc, 0);
smo60072v0ar.push(smo60048);
const smo60049 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo60049.setAttribute('id', 'smo60049');
smo60072v0ar.push(smo60049);
smo60072v0.addTickables(smo60072v0ar)
fmtsmo6007245.joinVoices([smo60072v0]);
const smo60072v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60072v1ar = [];
const smo60050 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo60050.setAttribute('id', 'smo60050');
smo60050.setStyle({ fillStyle: "#115511" });
smo60072v1ar.push(smo60050);
const smo60051 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/4/n"]}'))
smo60051.setAttribute('id', 'smo60051');
smo60051.setStyle({ fillStyle: "#115511" });
const smo600510acc = new VF.Accidental('#');
smo60051.addModifier(smo600510acc, 0);
smo60072v1ar.push(smo60051);
const smo60052 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60052.setAttribute('id', 'smo60052');
smo60052.setStyle({ fillStyle: "#115511" });
smo60052.addModifier(new VF.Dot(), 0);
smo60072v1ar.push(smo60052);
const smo60053 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo60053.setAttribute('id', 'smo60053');
smo60053.setStyle({ fillStyle: "#115511" });
smo60072v1ar.push(smo60053);
const smo60054 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60054.setAttribute('id', 'smo60054');
smo60054.setStyle({ fillStyle: "#115511" });
smo60072v1ar.push(smo60054);
const smo60055 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/4/n"]}'))
smo60055.setAttribute('id', 'smo60055');
smo60055.setStyle({ fillStyle: "#115511" });
smo60072v1ar.push(smo60055);
const smo60056 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60056.setAttribute('id', 'smo60056');
smo60056.setStyle({ fillStyle: "#115511" });
smo60072v1ar.push(smo60056);
const smo60057 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo60057.setAttribute('id', 'smo60057');
smo60057.setStyle({ fillStyle: "#115511" });
smo60072v1ar.push(smo60057);
const smo60058 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo60058.setAttribute('id', 'smo60058');
smo60058.setStyle({ fillStyle: "#115511" });
smo60072v1ar.push(smo60058);
smo60072v1.addTickables(smo60072v1ar)
fmtsmo6007245.joinVoices([smo60072v1]);
const fmtsmo6513645 = new VF.Formatter();
//
// voices and notes for stave 1 45
const smo65136v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65136v0ar = [];
const smo65111 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo65111.setAttribute('id', 'smo65111');
smo65111.setStyle({ fillStyle: '#aaaaaa7f' });
smo65136v0ar.push(smo65111);
smo65136v0.addTickables(smo65136v0ar)
fmtsmo6513645.joinVoices([smo65136v0]);
const smo65136v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65136v1ar = [];
const smo65112 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo65112.setAttribute('id', 'smo65112');
smo65112.setStyle({ fillStyle: "#115511" });
smo65112.addModifier(new VF.Dot(), 0);
smo65136v1ar.push(smo65112);
const smo65113 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65113.setAttribute('id', 'smo65113');
smo65113.setStyle({ fillStyle: "#115511" });
smo65136v1ar.push(smo65113);
const smo65114 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo65114.setAttribute('id', 'smo65114');
smo65114.setStyle({ fillStyle: "#115511" });
smo65136v1ar.push(smo65114);
const smo65115 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/2/n"]}'))
smo65115.setAttribute('id', 'smo65115');
smo65115.setStyle({ fillStyle: "#115511" });
smo65136v1ar.push(smo65115);
const smo65116 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo65116.setAttribute('id', 'smo65116');
smo65116.setStyle({ fillStyle: "#115511" });
smo65136v1ar.push(smo65116);
const smo65117 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/2/n"]}'))
smo65117.setAttribute('id', 'smo65117');
smo65117.setStyle({ fillStyle: "#115511" });
smo65136v1ar.push(smo65117);
const smo65118 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65118.setAttribute('id', 'smo65118');
smo65118.setStyle({ fillStyle: "#115511" });
smo65136v1ar.push(smo65118);
const smo65119 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65119.setAttribute('id', 'smo65119');
smo65119.setStyle({ fillStyle: "#115511" });
smo65136v1ar.push(smo65119);
const smo65120 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo65120.setAttribute('id', 'smo65120');
smo65120.setStyle({ fillStyle: "#115511" });
smo65136v1ar.push(smo65120);
const smo65121 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65121.setAttribute('id', 'smo65121');
smo65121.setStyle({ fillStyle: "#115511" });
smo65136v1ar.push(smo65121);
const smo65122 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo65122.setAttribute('id', 'smo65122');
smo65122.setStyle({ fillStyle: "#115511" });
smo65136v1ar.push(smo65122);
smo65136v1.addTickables(smo65136v1ar)
fmtsmo6513645.joinVoices([smo65136v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68529 = smo60039.getStemDirection();
smo60039.setStemDirection(dirsmo68529);
smo60040.setStemDirection(dirsmo68529);
smo60041.setStemDirection(dirsmo68529);
smo60042.setStemDirection(dirsmo68529);
const smo68529 = new VF.Beam([smo60039,smo60040,smo60041,smo60042]);
const dirsmo68530 = smo60045.getStemDirection();
smo60045.setStemDirection(dirsmo68530);
smo60046.setStemDirection(dirsmo68530);
smo60047.setStemDirection(dirsmo68530);
const smo68530 = new VF.Beam([smo60045,smo60046,smo60047]);
const dirsmo68531 = smo60048.getStemDirection();
smo60048.setStemDirection(dirsmo68531);
smo60049.setStemDirection(dirsmo68531);
const smo68531 = new VF.Beam([smo60048,smo60049]);
const dirsmo68532 = smo60050.getStemDirection();
smo60050.setStemDirection(dirsmo68532);
smo60051.setStemDirection(dirsmo68532);
const smo68532 = new VF.Beam([smo60050,smo60051]);
const dirsmo68533 = smo60052.getStemDirection();
smo60052.setStemDirection(dirsmo68533);
smo60053.setStemDirection(dirsmo68533);
smo60054.setStemDirection(dirsmo68533);
const smo68533 = new VF.Beam([smo60052,smo60053,smo60054]);
const dirsmo68534 = smo60055.getStemDirection();
smo60055.setStemDirection(dirsmo68534);
smo60056.setStemDirection(dirsmo68534);
smo60057.setStemDirection(dirsmo68534);
smo60058.setStemDirection(dirsmo68534);
const smo68534 = new VF.Beam([smo60055,smo60056,smo60057,smo60058]);
const dirsmo68537 = smo65112.getStemDirection();
smo65112.setStemDirection(dirsmo68537);
smo65113.setStemDirection(dirsmo68537);
smo65114.setStemDirection(dirsmo68537);
const smo68537 = new VF.Beam([smo65112,smo65113,smo65114]);
const dirsmo68538 = smo65115.getStemDirection();
smo65115.setStemDirection(dirsmo68538);
smo65116.setStemDirection(dirsmo68538);
const smo68538 = new VF.Beam([smo65115,smo65116]);
const dirsmo68539 = smo65117.getStemDirection();
smo65117.setStemDirection(dirsmo68539);
smo65118.setStemDirection(dirsmo68539);
const smo68539 = new VF.Beam([smo65117,smo65118]);
const dirsmo68540 = smo65119.getStemDirection();
smo65119.setStemDirection(dirsmo68540);
smo65120.setStemDirection(dirsmo68540);
smo65121.setStemDirection(dirsmo68540);
smo65122.setStemDirection(dirsmo68540);
const smo68540 = new VF.Beam([smo65119,smo65120,smo65121,smo65122]);
 
// formatting measures in staff group smo57447
fmtsmo6007245.format([smo60072v0,smo60072v1,smo65136v0,smo65136v1], 486);
const stavesmo60072 = new VF.Stave(1307, 2020, 500);
stavesmo60072.setAttribute('id', 'stavesmo60072');
stavesmo60072.setBegBarType(VF.Barline.type.NONE);
stavesmo60072.setContext(context);
stavesmo60072.draw();
smo60072v0.draw(context, stavesmo60072);
smo60072v1.draw(context, stavesmo60072);
smo68529.setContext(context);
smo68529.draw();
smo68530.setContext(context);
smo68530.draw();
smo68531.setContext(context);
smo68531.draw();
smo68532.setContext(context);
smo68532.draw();
smo68533.setContext(context);
smo68533.draw();
smo68534.setContext(context);
smo68534.draw();
const stavesmo65136 = new VF.Stave(1307, 2184, 500);
stavesmo65136.setAttribute('id', 'stavesmo65136');
stavesmo65136.setBegBarType(VF.Barline.type.NONE);
stavesmo65136.setContext(context);
stavesmo65136.draw();
smo65136v0.draw(context, stavesmo65136);
smo65136v1.draw(context, stavesmo65136);
smo68537.setContext(context);
smo68537.draw();
smo68538.setContext(context);
smo68538.draw();
smo68539.setContext(context);
smo68539.draw();
smo68540.setContext(context);
smo68540.draw();
const rightsmo57447stavesmo600721 = new VF.StaveConnector(stavesmo60072, stavesmo65136).setType(0);
rightsmo57447stavesmo600721.setContext(context).draw();
// modifier from 0-36-1-1 to 0-36-1-2
const smo70604 = new VF.StaveTie({ first_note: smo59767, last_note: smo59768, 
          firstNote: smo59767, lastNote: smo59768, first_indices: [0], last_indices: [0]});
smo70604.setContext(context).draw();
// modifier from 0-37-0-6 to 0-37-0-7
const smo70605 = new VF.StaveTie({ first_note: smo59800, last_note: smo59801, 
          firstNote: smo59800, lastNote: smo59801, first_indices: [0], last_indices: [0]});
smo70605.setContext(context).draw();
// modifier from 0-37-1-2 to 0-37-1-3
const smo70606 = new VF.StaveTie({ first_note: smo59807, last_note: smo59808, 
          firstNote: smo59807, lastNote: smo59808, first_indices: [0], last_indices: [0]});
smo70606.setContext(context).draw();
// modifier from 0-40-1-8 to 0-41-1-0
const smo70607 = new VF.StaveTie({ first_note: smo59911, last_note: smo59935, 
          firstNote: smo59911, lastNote: smo59935, first_indices: [0], last_indices: [0]});
smo70607.setContext(context).draw();
// modifier from 0-42-0-1 to 0-42-0-2
const smo70608 = new VF.StaveTie({ first_note: smo59953, last_note: smo59954, 
          firstNote: smo59953, lastNote: smo59954, first_indices: [0], last_indices: [0]});
smo70608.setContext(context).draw();
// modifier from 0-42-0-7 to 0-42-0-8
const smo70609 = new VF.StaveTie({ first_note: smo59959, last_note: smo59960, 
          firstNote: smo59959, lastNote: smo59960, first_indices: [0], last_indices: [0]});
smo70609.setContext(context).draw();
// modifier from 0-43-0-3 to 0-44-0-0
const smo70610 = new VF.StaveTie({ first_note: smo59981, last_note: smo60005, 
          firstNote: smo59981, lastNote: smo60005, first_indices: [0], last_indices: [0]});
smo70610.setContext(context).draw();
// modifier from 0-44-1-1 to 0-44-1-2
const smo70611 = new VF.StaveTie({ first_note: smo60016, last_note: smo60017, 
          firstNote: smo60016, lastNote: smo60017, first_indices: [0], last_indices: [0]});
smo70611.setContext(context).draw();
// modifier from 0-38-1-7 to 0-39-1-0
const smo70612 = new VF.StaveTie({ first_note: smo59848, last_note: smo59875, 
          firstNote: smo59848, lastNote: smo59875, first_indices: [0], last_indices: [0]});
smo70612.setContext(context).draw();
// modifier from 0-39-1-3 to 0-39-1-4
const smo70613 = new VF.StaveTie({ first_note: smo59878, last_note: smo59879, 
          firstNote: smo59878, lastNote: smo59879, first_indices: [0], last_indices: [0]});
smo70613.setContext(context).draw();
// modifier from 1-21-0-1 to 1-21-0-2
const smo70614 = new VF.StaveTie({ first_note: smo64554, last_note: smo64555, 
          firstNote: smo64554, lastNote: smo64555, first_indices: [0], last_indices: [0]});
smo70614.setContext(context).draw();
// modifier from 1-21-0-4 to 1-21-0-5
const smo70615 = new VF.StaveTie({ first_note: smo64557, last_note: smo64558, 
          firstNote: smo64557, lastNote: smo64558, first_indices: [0], last_indices: [0]});
smo70615.setContext(context).draw();
// modifier from 1-22-0-1 to 1-22-0-2
const smo70616 = new VF.StaveTie({ first_note: smo64576, last_note: smo64577, 
          firstNote: smo64576, lastNote: smo64577, first_indices: [0], last_indices: [0]});
smo70616.setContext(context).draw();
// modifier from 1-22-0-4 to 1-22-0-5
const smo70617 = new VF.StaveTie({ first_note: smo64579, last_note: smo64580, 
          firstNote: smo64579, lastNote: smo64580, first_indices: [0], last_indices: [0]});
smo70617.setContext(context).draw();
// modifier from 1-23-0-1 to 1-23-0-2
const smo70618 = new VF.StaveTie({ first_note: smo64598, last_note: smo64599, 
          firstNote: smo64598, lastNote: smo64599, first_indices: [0], last_indices: [0]});
smo70618.setContext(context).draw();
// modifier from 1-23-0-4 to 1-23-0-5
const smo70619 = new VF.StaveTie({ first_note: smo64601, last_note: smo64602, 
          firstNote: smo64601, lastNote: smo64602, first_indices: [0], last_indices: [0]});
smo70619.setContext(context).draw();
// modifier from 1-24-0-1 to 1-24-0-2
const smo70620 = new VF.StaveTie({ first_note: smo64620, last_note: smo64621, 
          firstNote: smo64620, lastNote: smo64621, first_indices: [0], last_indices: [0]});
smo70620.setContext(context).draw();
// modifier from 1-24-0-4 to 1-24-0-5
const smo70621 = new VF.StaveTie({ first_note: smo64623, last_note: smo64624, 
          firstNote: smo64623, lastNote: smo64624, first_indices: [0], last_indices: [0]});
smo70621.setContext(context).draw();
// modifier from 1-25-0-1 to 1-25-0-2
const smo70622 = new VF.StaveTie({ first_note: smo64642, last_note: smo64643, 
          firstNote: smo64642, lastNote: smo64643, first_indices: [0], last_indices: [0]});
smo70622.setContext(context).draw();
// modifier from 1-25-0-4 to 1-25-0-5
const smo70623 = new VF.StaveTie({ first_note: smo64645, last_note: smo64646, 
          firstNote: smo64645, lastNote: smo64646, first_indices: [0], last_indices: [0]});
smo70623.setContext(context).draw();
// modifier from 1-26-0-1 to 1-26-0-2
const smo70624 = new VF.StaveTie({ first_note: smo64664, last_note: smo64665, 
          firstNote: smo64664, lastNote: smo64665, first_indices: [0], last_indices: [0]});
smo70624.setContext(context).draw();
// modifier from 1-26-0-4 to 1-26-0-5
const smo70625 = new VF.StaveTie({ first_note: smo64667, last_note: smo64668, 
          firstNote: smo64667, lastNote: smo64668, first_indices: [0], last_indices: [0]});
smo70625.setContext(context).draw();
// modifier from 1-27-0-1 to 1-27-0-2
const smo70626 = new VF.StaveTie({ first_note: smo64686, last_note: smo64687, 
          firstNote: smo64686, lastNote: smo64687, first_indices: [0], last_indices: [0]});
smo70626.setContext(context).draw();
// modifier from 1-27-0-4 to 1-27-0-5
const smo70627 = new VF.StaveTie({ first_note: smo64689, last_note: smo64690, 
          firstNote: smo64689, lastNote: smo64690, first_indices: [0], last_indices: [0]});
smo70627.setContext(context).draw();
// modifier from 1-28-0-1 to 1-28-0-2
const smo70628 = new VF.StaveTie({ first_note: smo64708, last_note: smo64709, 
          firstNote: smo64708, lastNote: smo64709, first_indices: [0], last_indices: [0]});
smo70628.setContext(context).draw();
// modifier from 1-28-0-4 to 1-28-0-5
const smo70629 = new VF.StaveTie({ first_note: smo64711, last_note: smo64712, 
          firstNote: smo64711, lastNote: smo64712, first_indices: [0], last_indices: [0]});
smo70629.setContext(context).draw();
// modifier from 1-29-0-1 to 1-29-0-2
const smo70630 = new VF.StaveTie({ first_note: smo64730, last_note: smo64731, 
          firstNote: smo64730, lastNote: smo64731, first_indices: [0], last_indices: [0]});
smo70630.setContext(context).draw();
// modifier from 1-29-0-4 to 1-29-0-5
const smo70631 = new VF.StaveTie({ first_note: smo64733, last_note: smo64734, 
          firstNote: smo64733, lastNote: smo64734, first_indices: [0], last_indices: [0]});
smo70631.setContext(context).draw();
// modifier from 1-30-0-1 to 1-30-0-2
const smo70632 = new VF.StaveTie({ first_note: smo64752, last_note: smo64753, 
          firstNote: smo64752, lastNote: smo64753, first_indices: [0], last_indices: [0]});
smo70632.setContext(context).draw();
// modifier from 1-30-0-4 to 1-30-0-5
const smo70633 = new VF.StaveTie({ first_note: smo64755, last_note: smo64756, 
          firstNote: smo64755, lastNote: smo64756, first_indices: [0], last_indices: [0]});
smo70633.setContext(context).draw();
// modifier from 1-31-0-1 to 1-31-0-2
const smo70634 = new VF.StaveTie({ first_note: smo64774, last_note: smo64775, 
          firstNote: smo64774, lastNote: smo64775, first_indices: [0], last_indices: [0]});
smo70634.setContext(context).draw();
// modifier from 1-31-0-4 to 1-31-0-5
const smo70635 = new VF.StaveTie({ first_note: smo64777, last_note: smo64778, 
          firstNote: smo64777, lastNote: smo64778, first_indices: [0], last_indices: [0]});
smo70635.setContext(context).draw();
// modifier from 1-33-0-1 to 1-33-0-2
const smo70636 = new VF.StaveTie({ first_note: smo64816, last_note: smo64817, 
          firstNote: smo64816, lastNote: smo64817, first_indices: [0], last_indices: [0]});
smo70636.setContext(context).draw();
// modifier from 1-33-0-2 to 1-33-0-3
const smo70637 = new VF.StaveTie({ first_note: smo64817, last_note: smo64818, 
          firstNote: smo64817, lastNote: smo64818, first_indices: [0], last_indices: [0]});
smo70637.setContext(context).draw();
// modifier from 1-33-1-0 to 1-33-1-1
const smo70638 = new VF.StaveTie({ first_note: smo64819, last_note: smo64820, 
          firstNote: smo64819, lastNote: smo64820, first_indices: [0], last_indices: [0]});
smo70638.setContext(context).draw();
// modifier from 1-32-0-1 to 1-32-0-2
const smo70639 = new VF.StaveTie({ first_note: smo64796, last_note: smo64797, 
          firstNote: smo64796, lastNote: smo64797, first_indices: [0], last_indices: [0]});
smo70639.setContext(context).draw();
}