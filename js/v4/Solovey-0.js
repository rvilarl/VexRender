// @@ Solovey p 1/2 ((Op. 1)) by Folks
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = Vex.Flow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1483.6363636363635');
svg.setAttributeNS('', 'height', '1920');
svg.setAttributeNS('', 'viewBox', '0 0 1484 1920');
//
// create the musical objects
VF.setMusicFont("Bravura","Gonville","Custom");
const fmtsmo2418230 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo241823v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241823v0ar = [];
const smo241807 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo241807.setAttribute('id', 'smo241807');
smo241823v0ar.push(smo241807);
smo241823v0.addTickables(smo241823v0ar)
fmtsmo2418230.joinVoices([smo241823v0]);
const fmtsmo2428450 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo242845v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242845v0ar = [];
const smo242828 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo242828.setAttribute('id', 'smo242828');
smo242845v0ar.push(smo242828);
const smo242829 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo242829.setAttribute('id', 'smo242829');
smo242845v0ar.push(smo242829);
smo242845v0.addTickables(smo242845v0ar)
fmtsmo2428450.joinVoices([smo242845v0]);
const fmtsmo2438430 = new VF.Formatter();
//
// voices and notes for stave 2 0
const smo243843v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243843v0ar = [];
const smo243826 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo243826.setAttribute('id', 'smo243826');
smo243843v0ar.push(smo243826);
const smo243827 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo243827.setAttribute('id', 'smo243827');
smo243843v0ar.push(smo243827);
smo243843v0.addTickables(smo243843v0ar)
fmtsmo2438430.joinVoices([smo243843v0]);
const fmtsmo2447970 = new VF.Formatter();
//
// voices and notes for stave 3 0
const smo244797v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244797v0ar = [];
const smo244778 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo244778.setAttribute('id', 'smo244778');
smo244797v0ar.push(smo244778);
const smo244779 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo244779.setAttribute('id', 'smo244779');
smo244797v0ar.push(smo244779);
const smo244780 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo244780.setAttribute('id', 'smo244780');
smo244797v0ar.push(smo244780);
const smo244781 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo244781.setAttribute('id', 'smo244781');
smo244797v0ar.push(smo244781);
smo244797v0.addTickables(smo244797v0ar)
fmtsmo2447970.joinVoices([smo244797v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
 
// formatting measures in staff group smo245740
fmtsmo2418230.format([smo241823v0,smo242845v0,smo243843v0,smo244797v0], 85);
const stavesmo241823 = new VF.Stave(55, 219, 303);
stavesmo241823.setAttribute('id', 'stavesmo241823');
stavesmo241823.setBegBarType(1);
stavesmo241823.setTempo(JSON.parse('{"duration":"2","dots":0,"bpm":72}'), -1 * 0);
stavesmo241823.addClef('treble');
stavesmo241823.addTimeSignature('4/4');
const keysmo241823 = new VF.KeySignature('F');
keysmo241823.addToStave(stavesmo241823);
stavesmo241823.setContext(context);
stavesmo241823.draw();
smo241823v0.draw(context, stavesmo241823);
const stavesmo242845 = new VF.Stave(55, 312, 303);
stavesmo242845.setAttribute('id', 'stavesmo242845');
stavesmo242845.setBegBarType(1);
stavesmo242845.addClef('treble');
stavesmo242845.addTimeSignature('4/4');
const keysmo242845 = new VF.KeySignature('F');
keysmo242845.addToStave(stavesmo242845);
stavesmo242845.setContext(context);
stavesmo242845.draw();
smo242845v0.draw(context, stavesmo242845);
const stavesmo243843 = new VF.Stave(55, 391, 303);
stavesmo243843.setAttribute('id', 'stavesmo243843');
stavesmo243843.setBegBarType(1);
stavesmo243843.addClef('treble');
stavesmo243843.addTimeSignature('4/4');
const keysmo243843 = new VF.KeySignature('F');
keysmo243843.addToStave(stavesmo243843);
stavesmo243843.setContext(context);
stavesmo243843.draw();
smo243843v0.draw(context, stavesmo243843);
const stavesmo244797 = new VF.Stave(55, 468, 303);
stavesmo244797.setAttribute('id', 'stavesmo244797');
stavesmo244797.setBegBarType(1);
stavesmo244797.addClef('bass');
stavesmo244797.addTimeSignature('4/4');
const keysmo244797 = new VF.KeySignature('F');
keysmo244797.addToStave(stavesmo244797);
stavesmo244797.setContext(context);
stavesmo244797.draw();
smo244797v0.draw(context, stavesmo244797);
const leftsmo245740stavesmo2418233 = new VF.StaveConnector(stavesmo241823, stavesmo244797).setType(1);
leftsmo245740stavesmo2418233.setContext(context).draw();
const fmtsmo2418401 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo241840v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241840v0ar = [];
const smo241824 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo241824.setAttribute('id', 'smo241824');
smo241840v0ar.push(smo241824);
smo241840v0.addTickables(smo241840v0ar)
fmtsmo2418401.joinVoices([smo241840v0]);
const fmtsmo2428641 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo242864v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242864v0ar = [];
const smo242846 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo242846.setAttribute('id', 'smo242846');
smo242864v0ar.push(smo242846);
const smo242847 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo242847.setAttribute('id', 'smo242847');
smo242864v0ar.push(smo242847);
const smo242848 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo242848.setAttribute('id', 'smo242848');
smo242864v0ar.push(smo242848);
smo242864v0.addTickables(smo242864v0ar)
fmtsmo2428641.joinVoices([smo242864v0]);
const fmtsmo2438611 = new VF.Formatter();
//
// voices and notes for stave 2 1
const smo243861v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243861v0ar = [];
const smo243844 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo243844.setAttribute('id', 'smo243844');
smo243861v0ar.push(smo243844);
const smo243845 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo243845.setAttribute('id', 'smo243845');
smo243861v0ar.push(smo243845);
smo243861v0.addTickables(smo243861v0ar)
fmtsmo2438611.joinVoices([smo243861v0]);
const fmtsmo2448171 = new VF.Formatter();
//
// voices and notes for stave 3 1
const smo244817v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244817v0ar = [];
const smo244798 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo244798.setAttribute('id', 'smo244798');
smo244817v0ar.push(smo244798);
const smo244799 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo244799.setAttribute('id', 'smo244799');
smo244817v0ar.push(smo244799);
const smo244800 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo244800.setAttribute('id', 'smo244800');
smo244817v0ar.push(smo244800);
const smo244801 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo244801.setAttribute('id', 'smo244801');
smo244817v0ar.push(smo244801);
smo244817v0.addTickables(smo244817v0ar)
fmtsmo2448171.joinVoices([smo244817v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
 
// formatting measures in staff group smo245740
fmtsmo2418401.format([smo241840v0,smo242864v0,smo243861v0,smo244817v0], 106);
const stavesmo241840 = new VF.Stave(358, 219, 120);
stavesmo241840.setAttribute('id', 'stavesmo241840');
stavesmo241840.setBegBarType(VF.Barline.type.NONE);
stavesmo241840.setContext(context);
stavesmo241840.draw();
smo241840v0.draw(context, stavesmo241840);
const stavesmo242864 = new VF.Stave(358, 312, 120);
stavesmo242864.setAttribute('id', 'stavesmo242864');
stavesmo242864.setBegBarType(VF.Barline.type.NONE);
stavesmo242864.setContext(context);
stavesmo242864.draw();
smo242864v0.draw(context, stavesmo242864);
const stavesmo243861 = new VF.Stave(358, 391, 120);
stavesmo243861.setAttribute('id', 'stavesmo243861');
stavesmo243861.setBegBarType(VF.Barline.type.NONE);
stavesmo243861.setContext(context);
stavesmo243861.draw();
smo243861v0.draw(context, stavesmo243861);
const stavesmo244817 = new VF.Stave(358, 468, 120);
stavesmo244817.setAttribute('id', 'stavesmo244817');
stavesmo244817.setBegBarType(VF.Barline.type.NONE);
stavesmo244817.setContext(context);
stavesmo244817.draw();
smo244817v0.draw(context, stavesmo244817);
const fmtsmo2418572 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo241857v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241857v0ar = [];
const smo241841 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo241841.setAttribute('id', 'smo241841');
smo241857v0ar.push(smo241841);
smo241857v0.addTickables(smo241857v0ar)
fmtsmo2418572.joinVoices([smo241857v0]);
const fmtsmo2428832 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo242883v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242883v0ar = [];
const smo242865 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo242865.setAttribute('id', 'smo242865');
smo242883v0ar.push(smo242865);
const smo242866 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo242866.setAttribute('id', 'smo242866');
const smo2428660acc = new VF.Accidental('n');
smo242866.addModifier(smo2428660acc, 0);
smo242883v0ar.push(smo242866);
const smo242867 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
smo242867.setAttribute('id', 'smo242867');
const smo2428670acc = new VF.Accidental('#');
smo242867.addModifier(smo2428670acc, 0);
smo242883v0ar.push(smo242867);
smo242883v0.addTickables(smo242883v0ar)
fmtsmo2428832.joinVoices([smo242883v0]);
const fmtsmo2438792 = new VF.Formatter();
//
// voices and notes for stave 2 2
const smo243879v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243879v0ar = [];
const smo243862 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo243862.setAttribute('id', 'smo243862');
smo243879v0ar.push(smo243862);
const smo243863 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo243863.setAttribute('id', 'smo243863');
smo243879v0ar.push(smo243863);
smo243879v0.addTickables(smo243879v0ar)
fmtsmo2438792.joinVoices([smo243879v0]);
const fmtsmo2448372 = new VF.Formatter();
//
// voices and notes for stave 3 2
const smo244837v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244837v0ar = [];
const smo244818 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo244818.setAttribute('id', 'smo244818');
smo244837v0ar.push(smo244818);
const smo244819 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo244819.setAttribute('id', 'smo244819');
smo244837v0ar.push(smo244819);
const smo244820 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo244820.setAttribute('id', 'smo244820');
smo244837v0ar.push(smo244820);
const smo244821 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo244821.setAttribute('id', 'smo244821');
smo244837v0ar.push(smo244821);
smo244837v0.addTickables(smo244837v0ar)
fmtsmo2448372.joinVoices([smo244837v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
 
// formatting measures in staff group smo245740
fmtsmo2418572.format([smo241857v0,smo242883v0,smo243879v0,smo244837v0], 127);
const stavesmo241857 = new VF.Stave(478, 219, 141);
stavesmo241857.setAttribute('id', 'stavesmo241857');
stavesmo241857.setBegBarType(VF.Barline.type.NONE);
stavesmo241857.setContext(context);
stavesmo241857.draw();
smo241857v0.draw(context, stavesmo241857);
const stavesmo242883 = new VF.Stave(478, 312, 141);
stavesmo242883.setAttribute('id', 'stavesmo242883');
stavesmo242883.setBegBarType(VF.Barline.type.NONE);
stavesmo242883.setContext(context);
stavesmo242883.draw();
smo242883v0.draw(context, stavesmo242883);
const stavesmo243879 = new VF.Stave(478, 391, 141);
stavesmo243879.setAttribute('id', 'stavesmo243879');
stavesmo243879.setBegBarType(VF.Barline.type.NONE);
stavesmo243879.setContext(context);
stavesmo243879.draw();
smo243879v0.draw(context, stavesmo243879);
const stavesmo244837 = new VF.Stave(478, 468, 141);
stavesmo244837.setAttribute('id', 'stavesmo244837');
stavesmo244837.setBegBarType(VF.Barline.type.NONE);
stavesmo244837.setContext(context);
stavesmo244837.draw();
smo244837v0.draw(context, stavesmo244837);
const fmtsmo2418743 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo241874v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241874v0ar = [];
const smo241858 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo241858.setAttribute('id', 'smo241858');
smo241874v0ar.push(smo241858);
smo241874v0.addTickables(smo241874v0ar)
fmtsmo2418743.joinVoices([smo241874v0]);
const fmtsmo2429013 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo242901v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242901v0ar = [];
const smo242884 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo242884.setAttribute('id', 'smo242884');
smo242901v0ar.push(smo242884);
const smo242885 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo242885.setAttribute('id', 'smo242885');
smo242901v0ar.push(smo242885);
smo242901v0.addTickables(smo242901v0ar)
fmtsmo2429013.joinVoices([smo242901v0]);
const fmtsmo2438973 = new VF.Formatter();
//
// voices and notes for stave 2 3
const smo243897v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243897v0ar = [];
const smo243880 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo243880.setAttribute('id', 'smo243880');
smo243880.addModifier(new VF.Dot(), 0);
smo243897v0ar.push(smo243880);
const smo243881 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo243881.setAttribute('id', 'smo243881');
smo243897v0ar.push(smo243881);
smo243897v0.addTickables(smo243897v0ar)
fmtsmo2438973.joinVoices([smo243897v0]);
const fmtsmo2448573 = new VF.Formatter();
//
// voices and notes for stave 3 3
const smo244857v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244857v0ar = [];
const smo244838 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo244838.setAttribute('id', 'smo244838');
smo244857v0ar.push(smo244838);
const smo244839 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo244839.setAttribute('id', 'smo244839');
smo244857v0ar.push(smo244839);
const smo244840 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo244840.setAttribute('id', 'smo244840');
smo244857v0ar.push(smo244840);
const smo244841 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo244841.setAttribute('id', 'smo244841');
smo244857v0ar.push(smo244841);
smo244857v0.addTickables(smo244857v0ar)
fmtsmo2448573.joinVoices([smo244857v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
 
// formatting measures in staff group smo245740
fmtsmo2418743.format([smo241874v0,smo242901v0,smo243897v0,smo244857v0], 121);
const stavesmo241874 = new VF.Stave(619, 219, 135);
stavesmo241874.setAttribute('id', 'stavesmo241874');
stavesmo241874.setBegBarType(VF.Barline.type.NONE);
stavesmo241874.setContext(context);
stavesmo241874.draw();
smo241874v0.draw(context, stavesmo241874);
const stavesmo242901 = new VF.Stave(619, 312, 135);
stavesmo242901.setAttribute('id', 'stavesmo242901');
stavesmo242901.setBegBarType(VF.Barline.type.NONE);
stavesmo242901.setContext(context);
stavesmo242901.draw();
smo242901v0.draw(context, stavesmo242901);
const stavesmo243897 = new VF.Stave(619, 391, 135);
stavesmo243897.setAttribute('id', 'stavesmo243897');
stavesmo243897.setBegBarType(VF.Barline.type.NONE);
stavesmo243897.setContext(context);
stavesmo243897.draw();
smo243897v0.draw(context, stavesmo243897);
const stavesmo244857 = new VF.Stave(619, 468, 135);
stavesmo244857.setAttribute('id', 'stavesmo244857');
stavesmo244857.setBegBarType(VF.Barline.type.NONE);
stavesmo244857.setContext(context);
stavesmo244857.draw();
smo244857v0.draw(context, stavesmo244857);
const fmtsmo2418914 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo241891v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241891v0ar = [];
const smo241875 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo241875.setAttribute('id', 'smo241875');
smo241891v0ar.push(smo241875);
smo241891v0.addTickables(smo241891v0ar)
fmtsmo2418914.joinVoices([smo241891v0]);
const fmtsmo2429194 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo242919v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242919v0ar = [];
const smo242902 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo242902.setAttribute('id', 'smo242902');
smo242919v0ar.push(smo242902);
const smo242903 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo242903.setAttribute('id', 'smo242903');
smo242919v0ar.push(smo242903);
smo242919v0.addTickables(smo242919v0ar)
fmtsmo2429194.joinVoices([smo242919v0]);
const fmtsmo2439154 = new VF.Formatter();
//
// voices and notes for stave 2 4
const smo243915v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243915v0ar = [];
const smo243898 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo243898.setAttribute('id', 'smo243898');
smo243915v0ar.push(smo243898);
const smo243899 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo243899.setAttribute('id', 'smo243899');
smo243915v0ar.push(smo243899);
smo243915v0.addTickables(smo243915v0ar)
fmtsmo2439154.joinVoices([smo243915v0]);
const fmtsmo2448774 = new VF.Formatter();
//
// voices and notes for stave 3 4
const smo244877v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244877v0ar = [];
const smo244858 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo244858.setAttribute('id', 'smo244858');
smo244877v0ar.push(smo244858);
const smo244859 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo244859.setAttribute('id', 'smo244859');
smo244877v0ar.push(smo244859);
const smo244860 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo244860.setAttribute('id', 'smo244860');
smo244877v0ar.push(smo244860);
const smo244861 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/3/n"]}'))
smo244861.setAttribute('id', 'smo244861');
const smo2448610acc = new VF.Accidental('#');
smo244861.addModifier(smo2448610acc, 0);
smo244877v0ar.push(smo244861);
smo244877v0.addTickables(smo244877v0ar)
fmtsmo2448774.joinVoices([smo244877v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
 
// formatting measures in staff group smo245740
fmtsmo2418914.format([smo241891v0,smo242919v0,smo243915v0,smo244877v0], 118);
const stavesmo241891 = new VF.Stave(754, 219, 132);
stavesmo241891.setAttribute('id', 'stavesmo241891');
stavesmo241891.setBegBarType(VF.Barline.type.NONE);
stavesmo241891.setContext(context);
stavesmo241891.draw();
smo241891v0.draw(context, stavesmo241891);
const stavesmo242919 = new VF.Stave(754, 312, 132);
stavesmo242919.setAttribute('id', 'stavesmo242919');
stavesmo242919.setBegBarType(VF.Barline.type.NONE);
stavesmo242919.setContext(context);
stavesmo242919.draw();
smo242919v0.draw(context, stavesmo242919);
const stavesmo243915 = new VF.Stave(754, 391, 132);
stavesmo243915.setAttribute('id', 'stavesmo243915');
stavesmo243915.setBegBarType(VF.Barline.type.NONE);
stavesmo243915.setContext(context);
stavesmo243915.draw();
smo243915v0.draw(context, stavesmo243915);
const stavesmo244877 = new VF.Stave(754, 468, 132);
stavesmo244877.setAttribute('id', 'stavesmo244877');
stavesmo244877.setBegBarType(VF.Barline.type.NONE);
stavesmo244877.setContext(context);
stavesmo244877.draw();
smo244877v0.draw(context, stavesmo244877);
const fmtsmo2419085 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo241908v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241908v0ar = [];
const smo241892 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo241892.setAttribute('id', 'smo241892');
smo241908v0ar.push(smo241892);
smo241908v0.addTickables(smo241908v0ar)
fmtsmo2419085.joinVoices([smo241908v0]);
const fmtsmo2429385 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo242938v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242938v0ar = [];
const smo242920 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo242920.setAttribute('id', 'smo242920');
smo242938v0ar.push(smo242920);
const smo242921 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo242921.setAttribute('id', 'smo242921');
smo242938v0ar.push(smo242921);
const smo242922 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo242922.setAttribute('id', 'smo242922');
smo242938v0ar.push(smo242922);
smo242938v0.addTickables(smo242938v0ar)
fmtsmo2429385.joinVoices([smo242938v0]);
const fmtsmo2439345 = new VF.Formatter();
//
// voices and notes for stave 2 5
const smo243934v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243934v0ar = [];
const smo243916 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo243916.setAttribute('id', 'smo243916');
smo243934v0ar.push(smo243916);
const smo243917 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo243917.setAttribute('id', 'smo243917');
smo243934v0ar.push(smo243917);
const smo243918 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo243918.setAttribute('id', 'smo243918');
smo243934v0ar.push(smo243918);
smo243934v0.addTickables(smo243934v0ar)
fmtsmo2439345.joinVoices([smo243934v0]);
const fmtsmo2448975 = new VF.Formatter();
//
// voices and notes for stave 3 5
const smo244897v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244897v0ar = [];
const smo244878 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo244878.setAttribute('id', 'smo244878');
smo244897v0ar.push(smo244878);
const smo244879 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo244879.setAttribute('id', 'smo244879');
smo244897v0ar.push(smo244879);
const smo244880 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo244880.setAttribute('id', 'smo244880');
smo244897v0ar.push(smo244880);
const smo244881 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo244881.setAttribute('id', 'smo244881');
smo244897v0ar.push(smo244881);
smo244897v0.addTickables(smo244897v0ar)
fmtsmo2448975.joinVoices([smo244897v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
 
// formatting measures in staff group smo245740
fmtsmo2419085.format([smo241908v0,smo242938v0,smo243934v0,smo244897v0], 106);
const stavesmo241908 = new VF.Stave(886, 219, 120);
stavesmo241908.setAttribute('id', 'stavesmo241908');
stavesmo241908.setBegBarType(VF.Barline.type.NONE);
stavesmo241908.setContext(context);
stavesmo241908.draw();
smo241908v0.draw(context, stavesmo241908);
const stavesmo242938 = new VF.Stave(886, 312, 120);
stavesmo242938.setAttribute('id', 'stavesmo242938');
stavesmo242938.setBegBarType(VF.Barline.type.NONE);
stavesmo242938.setContext(context);
stavesmo242938.draw();
smo242938v0.draw(context, stavesmo242938);
const stavesmo243934 = new VF.Stave(886, 391, 120);
stavesmo243934.setAttribute('id', 'stavesmo243934');
stavesmo243934.setBegBarType(VF.Barline.type.NONE);
stavesmo243934.setContext(context);
stavesmo243934.draw();
smo243934v0.draw(context, stavesmo243934);
const stavesmo244897 = new VF.Stave(886, 468, 120);
stavesmo244897.setAttribute('id', 'stavesmo244897');
stavesmo244897.setBegBarType(VF.Barline.type.NONE);
stavesmo244897.setContext(context);
stavesmo244897.draw();
smo244897v0.draw(context, stavesmo244897);
const fmtsmo2419256 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo241925v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241925v0ar = [];
const smo241909 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo241909.setAttribute('id', 'smo241909');
smo241925v0ar.push(smo241909);
smo241925v0.addTickables(smo241925v0ar)
fmtsmo2419256.joinVoices([smo241925v0]);
const fmtsmo2429616 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo242961v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242961v0ar = [];
const smo242939 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo242939.setAttribute('id', 'smo242939');
smo242961v0ar.push(smo242939);
const smo242940 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo242940.setAttribute('id', 'smo242940');
smo242961v0ar.push(smo242940);
const smo242941 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo242941.setAttribute('id', 'smo242941');
smo242961v0ar.push(smo242941);
const smo242942 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["c#/4/n"]}'))
smo242942.setAttribute('id', 'smo242942');
const smo2429420acc = new VF.Accidental('#');
smo242942.addModifier(smo2429420acc, 0);
smo242961v0ar.push(smo242942);
const smo242943 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo242943.setAttribute('id', 'smo242943');
smo242961v0ar.push(smo242943);
const smo242944 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo242944.setAttribute('id', 'smo242944');
smo242961v0ar.push(smo242944);
const smo242945 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo242945.setAttribute('id', 'smo242945');
smo242961v0ar.push(smo242945);
smo242961v0.addTickables(smo242961v0ar)
fmtsmo2429616.joinVoices([smo242961v0]);
const fmtsmo2439546 = new VF.Formatter();
//
// voices and notes for stave 2 6
const smo243954v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243954v0ar = [];
const smo243935 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo243935.setAttribute('id', 'smo243935');
smo243954v0ar.push(smo243935);
const smo243936 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo243936.setAttribute('id', 'smo243936');
smo243954v0ar.push(smo243936);
const smo243937 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo243937.setAttribute('id', 'smo243937');
smo243954v0ar.push(smo243937);
const smo243938 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo243938.setAttribute('id', 'smo243938');
smo243954v0ar.push(smo243938);
smo243954v0.addTickables(smo243954v0ar)
fmtsmo2439546.joinVoices([smo243954v0]);
const fmtsmo2449176 = new VF.Formatter();
//
// voices and notes for stave 3 6
const smo244917v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244917v0ar = [];
const smo244898 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo244898.setAttribute('id', 'smo244898');
smo244917v0ar.push(smo244898);
const smo244899 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo244899.setAttribute('id', 'smo244899');
smo244917v0ar.push(smo244899);
const smo244900 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo244900.setAttribute('id', 'smo244900');
smo244917v0ar.push(smo244900);
const smo244901 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo244901.setAttribute('id', 'smo244901');
smo244917v0ar.push(smo244901);
smo244917v0.addTickables(smo244917v0ar)
fmtsmo2449176.joinVoices([smo244917v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
const dirsmo252059 = smo242940.getStemDirection();
smo242940.setStemDirection(dirsmo252059);
smo242941.setStemDirection(dirsmo252059);
smo242942.setStemDirection(dirsmo252059);
smo242943.setStemDirection(dirsmo252059);
const smo252059 = new VF.Beam([smo242940,smo242941,smo242942,smo242943]);
 
// formatting measures in staff group smo245740
fmtsmo2419256.format([smo241925v0,smo242961v0,smo243954v0,smo244917v0], 196);
const stavesmo241925 = new VF.Stave(1006, 219, 210);
stavesmo241925.setAttribute('id', 'stavesmo241925');
stavesmo241925.setBegBarType(VF.Barline.type.NONE);
stavesmo241925.setContext(context);
stavesmo241925.draw();
smo241925v0.draw(context, stavesmo241925);
const stavesmo242961 = new VF.Stave(1006, 312, 210);
stavesmo242961.setAttribute('id', 'stavesmo242961');
stavesmo242961.setBegBarType(VF.Barline.type.NONE);
stavesmo242961.setContext(context);
stavesmo242961.draw();
smo242961v0.draw(context, stavesmo242961);
smo252059.setContext(context);
smo252059.draw();
const stavesmo243954 = new VF.Stave(1006, 391, 210);
stavesmo243954.setAttribute('id', 'stavesmo243954');
stavesmo243954.setBegBarType(VF.Barline.type.NONE);
stavesmo243954.setContext(context);
stavesmo243954.draw();
smo243954v0.draw(context, stavesmo243954);
const stavesmo244917 = new VF.Stave(1006, 468, 210);
stavesmo244917.setAttribute('id', 'stavesmo244917');
stavesmo244917.setBegBarType(VF.Barline.type.NONE);
stavesmo244917.setContext(context);
stavesmo244917.draw();
smo244917v0.draw(context, stavesmo244917);
const fmtsmo2419427 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo241942v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241942v0ar = [];
const smo241926 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo241926.setAttribute('id', 'smo241926');
smo241942v0ar.push(smo241926);
smo241942v0.addTickables(smo241942v0ar)
fmtsmo2419427.joinVoices([smo241942v0]);
const fmtsmo2429827 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo242982v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242982v0ar = [];
const smo242962 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo242962.setAttribute('id', 'smo242962');
smo242962.addModifier(new VF.Dot(), 0);
smo242982v0ar.push(smo242962);
const smo242963 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo242963.setAttribute('id', 'smo242963');
smo242982v0ar.push(smo242963);
const smo242964 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo242964.setAttribute('id', 'smo242964');
smo242982v0ar.push(smo242964);
const smo242965 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo242965.setAttribute('id', 'smo242965');
smo242982v0ar.push(smo242965);
const smo242966 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo242966.setAttribute('id', 'smo242966');
smo242982v0ar.push(smo242966);
smo242982v0.addTickables(smo242982v0ar)
fmtsmo2429827.joinVoices([smo242982v0]);
const fmtsmo2439737 = new VF.Formatter();
//
// voices and notes for stave 2 7
const smo243973v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243973v0ar = [];
const smo243955 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo243955.setAttribute('id', 'smo243955');
smo243973v0ar.push(smo243955);
const smo243956 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo243956.setAttribute('id', 'smo243956');
smo243973v0ar.push(smo243956);
const smo243957 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo243957.setAttribute('id', 'smo243957');
smo243973v0ar.push(smo243957);
smo243973v0.addTickables(smo243973v0ar)
fmtsmo2439737.joinVoices([smo243973v0]);
const fmtsmo2449357 = new VF.Formatter();
//
// voices and notes for stave 3 7
const smo244935v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244935v0ar = [];
const smo244918 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo244918.setAttribute('id', 'smo244918');
smo244935v0ar.push(smo244918);
const smo244919 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo244919.setAttribute('id', 'smo244919');
smo244935v0ar.push(smo244919);
smo244935v0.addTickables(smo244935v0ar)
fmtsmo2449357.joinVoices([smo244935v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
const dirsmo252068 = smo242963.getStemDirection();
smo242963.setStemDirection(dirsmo252068);
smo242964.setStemDirection(dirsmo252068);
const smo252068 = new VF.Beam([smo242963,smo242964]);
 
// formatting measures in staff group smo245740
fmtsmo2419427.format([smo241942v0,smo242982v0,smo243973v0,smo244935v0], 147);
const stavesmo241942 = new VF.Stave(1216, 219, 161);
stavesmo241942.setAttribute('id', 'stavesmo241942');
stavesmo241942.setBegBarType(VF.Barline.type.NONE);
stavesmo241942.setContext(context);
stavesmo241942.draw();
smo241942v0.draw(context, stavesmo241942);
const stavesmo242982 = new VF.Stave(1216, 312, 161);
stavesmo242982.setAttribute('id', 'stavesmo242982');
stavesmo242982.setBegBarType(VF.Barline.type.NONE);
stavesmo242982.setContext(context);
stavesmo242982.draw();
smo242982v0.draw(context, stavesmo242982);
smo252068.setContext(context);
smo252068.draw();
const stavesmo243973 = new VF.Stave(1216, 391, 161);
stavesmo243973.setAttribute('id', 'stavesmo243973');
stavesmo243973.setBegBarType(VF.Barline.type.NONE);
stavesmo243973.setContext(context);
stavesmo243973.draw();
smo243973v0.draw(context, stavesmo243973);
const stavesmo244935 = new VF.Stave(1216, 468, 161);
stavesmo244935.setAttribute('id', 'stavesmo244935');
stavesmo244935.setBegBarType(VF.Barline.type.NONE);
stavesmo244935.setContext(context);
stavesmo244935.draw();
smo244935v0.draw(context, stavesmo244935);
const rightsmo245740stavesmo2419423 = new VF.StaveConnector(stavesmo241942, stavesmo244935).setType(0);
rightsmo245740stavesmo2419423.setContext(context).draw();
const fmtsmo2419628 = new VF.Formatter();
//
// voices and notes for stave 0 8
const smo241962v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241962v0ar = [];
const smo241943 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo241943.setAttribute('id', 'smo241943');
const smo241944 = new VF.Annotation('Со');
smo241944.setAttribute('id', 'smo241944');
smo241944.setFont('Merriweather', 12.1, 'normal');
smo241944.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo241943.addModifier(smo241944);
smo241944.addClass('lyric lyric-0 lyric-hyphen');
smo241962v0ar.push(smo241943);
const smo241945 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo241945.setAttribute('id', 'smo241945');
const smo241946 = new VF.Annotation('ло');
smo241946.setAttribute('id', 'smo241946');
smo241946.setFont('Merriweather', 12.1, 'normal');
smo241946.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo241945.addModifier(smo241946);
smo241946.addClass('lyric lyric-0');
smo241962v0ar.push(smo241945);
smo241962v0.addTickables(smo241962v0ar)
fmtsmo2419628.joinVoices([smo241962v0]);
const fmtsmo2430028 = new VF.Formatter();
//
// voices and notes for stave 1 8
const smo243002v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243002v0ar = [];
const smo242983 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo242983.setAttribute('id', 'smo242983');
smo243002v0ar.push(smo242983);
const smo242984 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo242984.setAttribute('id', 'smo242984');
smo243002v0ar.push(smo242984);
const smo242985 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo242985.setAttribute('id', 'smo242985');
smo243002v0ar.push(smo242985);
const smo242986 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo242986.setAttribute('id', 'smo242986');
smo243002v0ar.push(smo242986);
smo243002v0.addTickables(smo243002v0ar)
fmtsmo2430028.joinVoices([smo243002v0]);
const fmtsmo2439938 = new VF.Formatter();
//
// voices and notes for stave 2 8
const smo243993v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243993v0ar = [];
const smo243974 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo243974.setAttribute('id', 'smo243974');
smo243993v0ar.push(smo243974);
const smo243975 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo243975.setAttribute('id', 'smo243975');
smo243993v0ar.push(smo243975);
const smo243976 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo243976.setAttribute('id', 'smo243976');
smo243993v0ar.push(smo243976);
const smo243977 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo243977.setAttribute('id', 'smo243977');
smo243993v0ar.push(smo243977);
smo243993v0.addTickables(smo243993v0ar)
fmtsmo2439938.joinVoices([smo243993v0]);
const fmtsmo2449558 = new VF.Formatter();
//
// voices and notes for stave 3 8
const smo244955v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244955v0ar = [];
const smo244936 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo244936.setAttribute('id', 'smo244936');
smo244955v0ar.push(smo244936);
const smo244937 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo244937.setAttribute('id', 'smo244937');
smo244955v0ar.push(smo244937);
const smo244938 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo244938.setAttribute('id', 'smo244938');
smo244955v0ar.push(smo244938);
const smo244939 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo244939.setAttribute('id', 'smo244939');
smo244955v0ar.push(smo244939);
smo244955v0.addTickables(smo244955v0ar)
fmtsmo2449558.joinVoices([smo244955v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
 
// formatting measures in staff group smo245740
fmtsmo2419628.format([smo241962v0,smo243002v0,smo243993v0,smo244955v0], 161);
const stavesmo241962 = new VF.Stave(55, 598, 244);
stavesmo241962.setAttribute('id', 'stavesmo241962');
stavesmo241962.setBegBarType(4);
stavesmo241962.addClef('treble');
const keysmo241962 = new VF.KeySignature('F');
keysmo241962.addToStave(stavesmo241962);
stavesmo241962.setContext(context);
stavesmo241962.draw();
smo241962v0.draw(context, stavesmo241962);
const stavesmo243002 = new VF.Stave(55, 711, 244);
stavesmo243002.setAttribute('id', 'stavesmo243002');
stavesmo243002.setBegBarType(4);
stavesmo243002.addClef('treble');
const keysmo243002 = new VF.KeySignature('F');
keysmo243002.addToStave(stavesmo243002);
stavesmo243002.setContext(context);
stavesmo243002.draw();
smo243002v0.draw(context, stavesmo243002);
const stavesmo243993 = new VF.Stave(55, 794, 244);
stavesmo243993.setAttribute('id', 'stavesmo243993');
stavesmo243993.setBegBarType(4);
stavesmo243993.addClef('treble');
const keysmo243993 = new VF.KeySignature('F');
keysmo243993.addToStave(stavesmo243993);
stavesmo243993.setContext(context);
stavesmo243993.draw();
smo243993v0.draw(context, stavesmo243993);
const stavesmo244955 = new VF.Stave(55, 875, 244);
stavesmo244955.setAttribute('id', 'stavesmo244955');
stavesmo244955.setBegBarType(4);
stavesmo244955.addClef('bass');
const keysmo244955 = new VF.KeySignature('F');
keysmo244955.addToStave(stavesmo244955);
stavesmo244955.setContext(context);
stavesmo244955.draw();
smo244955v0.draw(context, stavesmo244955);
const leftsmo245740stavesmo2419623 = new VF.StaveConnector(stavesmo241962, stavesmo244955).setType(1);
leftsmo245740stavesmo2419623.setContext(context).draw();
const fmtsmo2419849 = new VF.Formatter();
//
// voices and notes for stave 0 9
const smo241984v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241984v0ar = [];
const smo241963 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo241963.setAttribute('id', 'smo241963');
const smo241964 = new VF.Annotation('вей,');
smo241964.setAttribute('id', 'smo241964');
smo241964.setFont('Merriweather', 12.1, 'normal');
smo241964.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo241963.addModifier(smo241964);
smo241964.addClass('lyric lyric-0');
smo241984v0ar.push(smo241963);
const smo241965 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo241965.setAttribute('id', 'smo241965');
const smo241966 = new VF.Annotation('мой');
smo241966.setAttribute('id', 'smo241966');
smo241966.setFont('Merriweather', 12.1, 'normal');
smo241966.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo241965.addModifier(smo241966);
smo241966.addClass('lyric lyric-0');
smo241984v0ar.push(smo241965);
const smo241967 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo241967.setAttribute('id', 'smo241967');
const smo241968 = new VF.Annotation('-');
smo241968.setAttribute('id', 'smo241968');
smo241968.setFont('Merriweather', 12.1, 'normal');
smo241968.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo241967.addModifier(smo241968);
smo241968.addClass('lyric lyric-0 lyric-hyphen');
smo241984v0ar.push(smo241967);
smo241984v0.addTickables(smo241984v0ar)
fmtsmo2419849.joinVoices([smo241984v0]);
const fmtsmo2430239 = new VF.Formatter();
//
// voices and notes for stave 1 9
const smo243023v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243023v0ar = [];
const smo243003 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo243003.setAttribute('id', 'smo243003');
smo243023v0ar.push(smo243003);
const smo243004 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo243004.setAttribute('id', 'smo243004');
smo243023v0ar.push(smo243004);
const smo243006 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo243006.setAttribute('id', 'smo243006');
smo243023v0ar.push(smo243006);
const smo243007 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo243007.setAttribute('id', 'smo243007');
smo243023v0ar.push(smo243007);
smo243023v0.addTickables(smo243023v0ar)
fmtsmo2430239.joinVoices([smo243023v0]);
const fmtsmo2440139 = new VF.Formatter();
//
// voices and notes for stave 2 9
const smo244013v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244013v0ar = [];
const smo243994 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo243994.setAttribute('id', 'smo243994');
smo244013v0ar.push(smo243994);
const smo243995 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo243995.setAttribute('id', 'smo243995');
smo244013v0ar.push(smo243995);
const smo243996 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo243996.setAttribute('id', 'smo243996');
smo244013v0ar.push(smo243996);
const smo243997 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo243997.setAttribute('id', 'smo243997');
smo244013v0ar.push(smo243997);
smo244013v0.addTickables(smo244013v0ar)
fmtsmo2440139.joinVoices([smo244013v0]);
const fmtsmo2449759 = new VF.Formatter();
//
// voices and notes for stave 3 9
const smo244975v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244975v0ar = [];
const smo244956 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo244956.setAttribute('id', 'smo244956');
smo244975v0ar.push(smo244956);
const smo244957 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo244957.setAttribute('id', 'smo244957');
smo244975v0ar.push(smo244957);
const smo244958 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo244958.setAttribute('id', 'smo244958');
smo244975v0ar.push(smo244958);
const smo244959 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo244959.setAttribute('id', 'smo244959');
smo244975v0ar.push(smo244959);
smo244975v0.addTickables(smo244975v0ar)
fmtsmo2449759.joinVoices([smo244975v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
 
// formatting measures in staff group smo245740
fmtsmo2419849.format([smo241984v0,smo243023v0,smo244013v0,smo244975v0], 191);
const stavesmo241984 = new VF.Stave(299, 598, 205);
stavesmo241984.setAttribute('id', 'stavesmo241984');
stavesmo241984.setBegBarType(VF.Barline.type.NONE);
stavesmo241984.setContext(context);
stavesmo241984.draw();
smo241984v0.draw(context, stavesmo241984);
const stavesmo243023 = new VF.Stave(299, 711, 205);
stavesmo243023.setAttribute('id', 'stavesmo243023');
stavesmo243023.setBegBarType(VF.Barline.type.NONE);
stavesmo243023.setContext(context);
stavesmo243023.draw();
smo243023v0.draw(context, stavesmo243023);
const stavesmo244013 = new VF.Stave(299, 794, 205);
stavesmo244013.setAttribute('id', 'stavesmo244013');
stavesmo244013.setBegBarType(VF.Barline.type.NONE);
stavesmo244013.setContext(context);
stavesmo244013.draw();
smo244013v0.draw(context, stavesmo244013);
const stavesmo244975 = new VF.Stave(299, 875, 205);
stavesmo244975.setAttribute('id', 'stavesmo244975');
stavesmo244975.setBegBarType(VF.Barline.type.NONE);
stavesmo244975.setContext(context);
stavesmo244975.draw();
smo244975v0.draw(context, stavesmo244975);
const fmtsmo24200610 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo242006v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242006v0ar = [];
const smo241985 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo241985.setAttribute('id', 'smo241985');
const smo241986 = new VF.Annotation('Со');
smo241986.setAttribute('id', 'smo241986');
smo241986.setFont('Merriweather', 12.1, 'normal');
smo241986.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo241985.addModifier(smo241986);
smo241986.addClass('lyric lyric-0 lyric-hyphen');
smo242006v0ar.push(smo241985);
const smo241987 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo241987.setAttribute('id', 'smo241987');
const smo2419870acc = new VF.Accidental('n');
smo241987.addModifier(smo2419870acc, 0);
const smo241988 = new VF.Annotation('ло');
smo241988.setAttribute('id', 'smo241988');
smo241988.setFont('Merriweather', 12.1, 'normal');
smo241988.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo241987.addModifier(smo241988);
smo241988.addClass('lyric lyric-0 lyric-hyphen');
smo242006v0ar.push(smo241987);
const smo241989 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
smo241989.setAttribute('id', 'smo241989');
const smo2419890acc = new VF.Accidental('#');
smo241989.addModifier(smo2419890acc, 0);
smo242006v0ar.push(smo241989);
smo242006v0.addTickables(smo242006v0ar)
fmtsmo24200610.joinVoices([smo242006v0]);
const fmtsmo24304310 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo243043v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243043v0ar = [];
const smo243024 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo243024.setAttribute('id', 'smo243024');
smo243043v0ar.push(smo243024);
const smo243025 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo243025.setAttribute('id', 'smo243025');
smo243043v0ar.push(smo243025);
const smo243026 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo243026.setAttribute('id', 'smo243026');
smo243043v0ar.push(smo243026);
const smo243027 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo243027.setAttribute('id', 'smo243027');
smo243043v0ar.push(smo243027);
smo243043v0.addTickables(smo243043v0ar)
fmtsmo24304310.joinVoices([smo243043v0]);
const fmtsmo24403310 = new VF.Formatter();
//
// voices and notes for stave 2 10
const smo244033v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244033v0ar = [];
const smo244014 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo244014.setAttribute('id', 'smo244014');
smo244033v0ar.push(smo244014);
const smo244015 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo244015.setAttribute('id', 'smo244015');
smo244033v0ar.push(smo244015);
const smo244016 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo244016.setAttribute('id', 'smo244016');
smo244033v0ar.push(smo244016);
const smo244017 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo244017.setAttribute('id', 'smo244017');
smo244033v0ar.push(smo244017);
smo244033v0.addTickables(smo244033v0ar)
fmtsmo24403310.joinVoices([smo244033v0]);
const fmtsmo24499510 = new VF.Formatter();
//
// voices and notes for stave 3 10
const smo244995v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244995v0ar = [];
const smo244976 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo244976.setAttribute('id', 'smo244976');
smo244995v0ar.push(smo244976);
const smo244977 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo244977.setAttribute('id', 'smo244977');
smo244995v0ar.push(smo244977);
const smo244978 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo244978.setAttribute('id', 'smo244978');
smo244995v0ar.push(smo244978);
const smo244979 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo244979.setAttribute('id', 'smo244979');
smo244995v0ar.push(smo244979);
smo244995v0.addTickables(smo244995v0ar)
fmtsmo24499510.joinVoices([smo244995v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
 
// formatting measures in staff group smo245740
fmtsmo24200610.format([smo242006v0,smo243043v0,smo244033v0,smo244995v0], 154);
const stavesmo242006 = new VF.Stave(504, 598, 168);
stavesmo242006.setAttribute('id', 'stavesmo242006');
stavesmo242006.setBegBarType(VF.Barline.type.NONE);
stavesmo242006.setContext(context);
stavesmo242006.draw();
smo242006v0.draw(context, stavesmo242006);
const stavesmo243043 = new VF.Stave(504, 711, 168);
stavesmo243043.setAttribute('id', 'stavesmo243043');
stavesmo243043.setBegBarType(VF.Barline.type.NONE);
stavesmo243043.setContext(context);
stavesmo243043.draw();
smo243043v0.draw(context, stavesmo243043);
const stavesmo244033 = new VF.Stave(504, 794, 168);
stavesmo244033.setAttribute('id', 'stavesmo244033');
stavesmo244033.setBegBarType(VF.Barline.type.NONE);
stavesmo244033.setContext(context);
stavesmo244033.draw();
smo244033v0.draw(context, stavesmo244033);
const stavesmo244995 = new VF.Stave(504, 875, 168);
stavesmo244995.setAttribute('id', 'stavesmo244995');
stavesmo244995.setBegBarType(VF.Barline.type.NONE);
stavesmo244995.setContext(context);
stavesmo244995.draw();
smo244995v0.draw(context, stavesmo244995);
const fmtsmo24202511 = new VF.Formatter();
//
// voices and notes for stave 0 11
const smo242025v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242025v0ar = [];
const smo242007 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo242007.setAttribute('id', 'smo242007');
const smo242008 = new VF.Annotation('вей');
smo242008.setAttribute('id', 'smo242008');
smo242008.setFont('Merriweather', 12.1, 'normal');
smo242008.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242007.addModifier(smo242008);
smo242008.addClass('lyric lyric-0');
smo242025v0ar.push(smo242007);
const smo242009 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo242009.setAttribute('id', 'smo242009');
smo242025v0ar.push(smo242009);
smo242025v0.addTickables(smo242025v0ar)
fmtsmo24202511.joinVoices([smo242025v0]);
const fmtsmo24306311 = new VF.Formatter();
//
// voices and notes for stave 1 11
const smo243063v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243063v0ar = [];
const smo243044 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo243044.setAttribute('id', 'smo243044');
smo243063v0ar.push(smo243044);
const smo243045 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo243045.setAttribute('id', 'smo243045');
smo243063v0ar.push(smo243045);
const smo243046 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo243046.setAttribute('id', 'smo243046');
smo243063v0ar.push(smo243046);
const smo243047 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo243047.setAttribute('id', 'smo243047');
smo243063v0ar.push(smo243047);
smo243063v0.addTickables(smo243063v0ar)
fmtsmo24306311.joinVoices([smo243063v0]);
const fmtsmo24405311 = new VF.Formatter();
//
// voices and notes for stave 2 11
const smo244053v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244053v0ar = [];
const smo244034 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo244034.setAttribute('id', 'smo244034');
smo244053v0ar.push(smo244034);
const smo244035 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo244035.setAttribute('id', 'smo244035');
smo244053v0ar.push(smo244035);
const smo244036 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo244036.setAttribute('id', 'smo244036');
smo244053v0ar.push(smo244036);
const smo244037 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo244037.setAttribute('id', 'smo244037');
smo244053v0ar.push(smo244037);
smo244053v0.addTickables(smo244053v0ar)
fmtsmo24405311.joinVoices([smo244053v0]);
const fmtsmo24501311 = new VF.Formatter();
//
// voices and notes for stave 3 11
const smo245013v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo245013v0ar = [];
const smo244996 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo244996.setAttribute('id', 'smo244996');
smo245013v0ar.push(smo244996);
const smo244997 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo244997.setAttribute('id', 'smo244997');
smo245013v0ar.push(smo244997);
smo245013v0.addTickables(smo245013v0ar)
fmtsmo24501311.joinVoices([smo245013v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
 
// formatting measures in staff group smo245740
fmtsmo24202511.format([smo242025v0,smo243063v0,smo244053v0,smo245013v0], 147);
const stavesmo242025 = new VF.Stave(672, 598, 161);
stavesmo242025.setAttribute('id', 'stavesmo242025');
stavesmo242025.setBegBarType(VF.Barline.type.NONE);
stavesmo242025.setContext(context);
stavesmo242025.draw();
smo242025v0.draw(context, stavesmo242025);
const stavesmo243063 = new VF.Stave(672, 711, 161);
stavesmo243063.setAttribute('id', 'stavesmo243063');
stavesmo243063.setBegBarType(VF.Barline.type.NONE);
stavesmo243063.setContext(context);
stavesmo243063.draw();
smo243063v0.draw(context, stavesmo243063);
const stavesmo244053 = new VF.Stave(672, 794, 161);
stavesmo244053.setAttribute('id', 'stavesmo244053');
stavesmo244053.setBegBarType(VF.Barline.type.NONE);
stavesmo244053.setContext(context);
stavesmo244053.draw();
smo244053v0.draw(context, stavesmo244053);
const stavesmo245013 = new VF.Stave(672, 875, 161);
stavesmo245013.setAttribute('id', 'stavesmo245013');
stavesmo245013.setBegBarType(VF.Barline.type.NONE);
stavesmo245013.setContext(context);
stavesmo245013.draw();
smo245013v0.draw(context, stavesmo245013);
const fmtsmo24204712 = new VF.Formatter();
//
// voices and notes for stave 0 12
const smo242047v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242047v0ar = [];
const smo242026 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo242026.setAttribute('id', 'smo242026');
const smo242027 = new VF.Annotation('го');
smo242027.setAttribute('id', 'smo242027');
smo242027.setFont('Merriweather', 12.1, 'normal');
smo242027.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242026.addModifier(smo242027);
smo242027.addClass('lyric lyric-0 lyric-hyphen');
smo242047v0ar.push(smo242026);
const smo242028 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo242028.setAttribute('id', 'smo242028');
const smo242029 = new VF.Annotation('пo');
smo242029.setAttribute('id', 'smo242029');
smo242029.setFont('Merriweather', 12.1, 'normal');
smo242029.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242028.addModifier(smo242029);
smo242029.addClass('lyric lyric-0');
smo242047v0ar.push(smo242028);
const smo242030 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo242030.setAttribute('id', 'smo242030');
const smo242031 = new VF.Annotation('-');
smo242031.setAttribute('id', 'smo242031');
smo242031.setFont('Merriweather', 12.1, 'normal');
smo242031.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242030.addModifier(smo242031);
smo242031.addClass('lyric lyric-0 lyric-hyphen');
smo242047v0ar.push(smo242030);
smo242047v0.addTickables(smo242047v0ar)
fmtsmo24204712.joinVoices([smo242047v0]);
const fmtsmo24308312 = new VF.Formatter();
//
// voices and notes for stave 1 12
const smo243083v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243083v0ar = [];
const smo243064 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo243064.setAttribute('id', 'smo243064');
smo243083v0ar.push(smo243064);
const smo243065 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo243065.setAttribute('id', 'smo243065');
smo243083v0ar.push(smo243065);
const smo243066 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo243066.setAttribute('id', 'smo243066');
smo243083v0ar.push(smo243066);
const smo243067 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo243067.setAttribute('id', 'smo243067');
smo243083v0ar.push(smo243067);
smo243083v0.addTickables(smo243083v0ar)
fmtsmo24308312.joinVoices([smo243083v0]);
const fmtsmo24407312 = new VF.Formatter();
//
// voices and notes for stave 2 12
const smo244073v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244073v0ar = [];
const smo244054 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo244054.setAttribute('id', 'smo244054');
smo244073v0ar.push(smo244054);
const smo244055 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo244055.setAttribute('id', 'smo244055');
smo244073v0ar.push(smo244055);
const smo244056 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo244056.setAttribute('id', 'smo244056');
smo244073v0ar.push(smo244056);
const smo244057 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo244057.setAttribute('id', 'smo244057');
smo244073v0ar.push(smo244057);
smo244073v0.addTickables(smo244073v0ar)
fmtsmo24407312.joinVoices([smo244073v0]);
const fmtsmo24503312 = new VF.Formatter();
//
// voices and notes for stave 3 12
const smo245033v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo245033v0ar = [];
const smo245014 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo245014.setAttribute('id', 'smo245014');
smo245033v0ar.push(smo245014);
const smo245015 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo245015.setAttribute('id', 'smo245015');
smo245033v0ar.push(smo245015);
const smo245016 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo245016.setAttribute('id', 'smo245016');
smo245033v0ar.push(smo245016);
const smo245017 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo245017.setAttribute('id', 'smo245017');
smo245033v0ar.push(smo245017);
smo245033v0.addTickables(smo245033v0ar)
fmtsmo24503312.joinVoices([smo245033v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
 
// formatting measures in staff group smo245740
fmtsmo24204712.format([smo242047v0,smo243083v0,smo244073v0,smo245033v0], 144);
const stavesmo242047 = new VF.Stave(833, 598, 158);
stavesmo242047.setAttribute('id', 'stavesmo242047');
stavesmo242047.setBegBarType(VF.Barline.type.NONE);
stavesmo242047.setContext(context);
stavesmo242047.draw();
smo242047v0.draw(context, stavesmo242047);
const stavesmo243083 = new VF.Stave(833, 711, 158);
stavesmo243083.setAttribute('id', 'stavesmo243083');
stavesmo243083.setBegBarType(VF.Barline.type.NONE);
stavesmo243083.setContext(context);
stavesmo243083.draw();
smo243083v0.draw(context, stavesmo243083);
const stavesmo244073 = new VF.Stave(833, 794, 158);
stavesmo244073.setAttribute('id', 'stavesmo244073');
stavesmo244073.setBegBarType(VF.Barline.type.NONE);
stavesmo244073.setContext(context);
stavesmo244073.draw();
smo244073v0.draw(context, stavesmo244073);
const stavesmo245033 = new VF.Stave(833, 875, 158);
stavesmo245033.setAttribute('id', 'stavesmo245033');
stavesmo245033.setBegBarType(VF.Barline.type.NONE);
stavesmo245033.setContext(context);
stavesmo245033.draw();
smo245033v0.draw(context, stavesmo245033);
const fmtsmo24206913 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo242069v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242069v0ar = [];
const smo242048 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo242048.setAttribute('id', 'smo242048');
const smo242049 = new VF.Annotation('си');
smo242049.setAttribute('id', 'smo242049');
smo242049.setFont('Merriweather', 12.1, 'normal');
smo242049.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242048.addModifier(smo242049);
smo242049.addClass('lyric lyric-0');
smo242069v0ar.push(smo242048);
const smo242050 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo242050.setAttribute('id', 'smo242050');
const smo242051 = new VF.Annotation('ст');
smo242051.setAttribute('id', 'smo242051');
smo242051.setFont('Merriweather', 12.1, 'normal');
smo242051.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242050.addModifier(smo242051);
smo242051.addClass('lyric lyric-0 lyric-hyphen');
smo242069v0ar.push(smo242050);
const smo242052 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo242052.setAttribute('id', 'smo242052');
const smo242053 = new VF.Annotation('ый');
smo242053.setAttribute('id', 'smo242053');
smo242053.setFont('Merriweather', 12.1, 'normal');
smo242053.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242052.addModifier(smo242053);
smo242053.addClass('lyric lyric-0');
smo242069v0ar.push(smo242052);
smo242069v0.addTickables(smo242069v0ar)
fmtsmo24206913.joinVoices([smo242069v0]);
const fmtsmo24310313 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo243103v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243103v0ar = [];
const smo243084 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo243084.setAttribute('id', 'smo243084');
smo243103v0ar.push(smo243084);
const smo243085 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo243085.setAttribute('id', 'smo243085');
smo243103v0ar.push(smo243085);
const smo243086 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo243086.setAttribute('id', 'smo243086');
smo243103v0ar.push(smo243086);
const smo243087 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo243087.setAttribute('id', 'smo243087');
smo243103v0ar.push(smo243087);
smo243103v0.addTickables(smo243103v0ar)
fmtsmo24310313.joinVoices([smo243103v0]);
const fmtsmo24409313 = new VF.Formatter();
//
// voices and notes for stave 2 13
const smo244093v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244093v0ar = [];
const smo244074 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo244074.setAttribute('id', 'smo244074');
smo244093v0ar.push(smo244074);
const smo244075 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo244075.setAttribute('id', 'smo244075');
smo244093v0ar.push(smo244075);
const smo244076 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo244076.setAttribute('id', 'smo244076');
smo244093v0ar.push(smo244076);
const smo244077 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo244077.setAttribute('id', 'smo244077');
smo244093v0ar.push(smo244077);
smo244093v0.addTickables(smo244093v0ar)
fmtsmo24409313.joinVoices([smo244093v0]);
const fmtsmo24505113 = new VF.Formatter();
//
// voices and notes for stave 3 13
const smo245051v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo245051v0ar = [];
const smo245034 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo245034.setAttribute('id', 'smo245034');
smo245051v0ar.push(smo245034);
const smo245035 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
smo245035.setAttribute('id', 'smo245035');
smo245051v0ar.push(smo245035);
smo245051v0.addTickables(smo245051v0ar)
fmtsmo24505113.joinVoices([smo245051v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
 
// formatting measures in staff group smo245740
fmtsmo24206913.format([smo242069v0,smo243103v0,smo244093v0,smo245051v0], 184);
const stavesmo242069 = new VF.Stave(991, 598, 198);
stavesmo242069.setAttribute('id', 'stavesmo242069');
stavesmo242069.setBegBarType(VF.Barline.type.NONE);
stavesmo242069.setContext(context);
stavesmo242069.draw();
smo242069v0.draw(context, stavesmo242069);
const stavesmo243103 = new VF.Stave(991, 711, 198);
stavesmo243103.setAttribute('id', 'stavesmo243103');
stavesmo243103.setBegBarType(VF.Barline.type.NONE);
stavesmo243103.setContext(context);
stavesmo243103.draw();
smo243103v0.draw(context, stavesmo243103);
const stavesmo244093 = new VF.Stave(991, 794, 198);
stavesmo244093.setAttribute('id', 'stavesmo244093');
stavesmo244093.setBegBarType(VF.Barline.type.NONE);
stavesmo244093.setContext(context);
stavesmo244093.draw();
smo244093v0.draw(context, stavesmo244093);
const stavesmo245051 = new VF.Stave(991, 875, 198);
stavesmo245051.setAttribute('id', 'stavesmo245051');
stavesmo245051.setBegBarType(VF.Barline.type.NONE);
stavesmo245051.setContext(context);
stavesmo245051.draw();
smo245051v0.draw(context, stavesmo245051);
const fmtsmo24209514 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo242095v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242095v0ar = [];
const smo242070 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo242070.setAttribute('id', 'smo242070');
const smo242071 = new VF.Annotation('co');
smo242071.setAttribute('id', 'smo242071');
smo242071.setFont('Merriweather', 12.1, 'normal');
smo242071.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242070.addModifier(smo242071);
smo242071.addClass('lyric lyric-0');
smo242095v0ar.push(smo242070);
const smo242072 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo242072.setAttribute('id', 'smo242072');
const smo242073 = new VF.Annotation('-');
smo242073.setAttribute('id', 'smo242073');
smo242073.setFont('Merriweather', 12.1, 'normal');
smo242073.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242072.addModifier(smo242073);
smo242073.addClass('lyric lyric-0 lyric-hyphen');
smo242095v0ar.push(smo242072);
const smo242074 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo242074.setAttribute('id', 'smo242074');
const smo242075 = new VF.Annotation('-');
smo242075.setAttribute('id', 'smo242075');
smo242075.setFont('Merriweather', 12.1, 'normal');
smo242075.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242074.addModifier(smo242075);
smo242075.addClass('lyric lyric-0 lyric-hyphen');
smo242095v0ar.push(smo242074);
const smo242076 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo242076.setAttribute('id', 'smo242076');
const smo242077 = new VF.Annotation('по');
smo242077.setAttribute('id', 'smo242077');
smo242077.setFont('Merriweather', 12.1, 'normal');
smo242077.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242076.addModifier(smo242077);
smo242077.addClass('lyric lyric-0');
smo242095v0ar.push(smo242076);
const smo242078 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo242078.setAttribute('id', 'smo242078');
const smo242079 = new VF.Annotation('-');
smo242079.setAttribute('id', 'smo242079');
smo242079.setFont('Merriweather', 12.1, 'normal');
smo242079.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242078.addModifier(smo242079);
smo242079.addClass('lyric lyric-0 lyric-hyphen');
smo242095v0ar.push(smo242078);
smo242095v0.addTickables(smo242095v0ar)
fmtsmo24209514.joinVoices([smo242095v0]);
const fmtsmo24312314 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo243123v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243123v0ar = [];
const smo243104 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo243104.setAttribute('id', 'smo243104');
smo243123v0ar.push(smo243104);
const smo243105 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo243105.setAttribute('id', 'smo243105');
smo243123v0ar.push(smo243105);
const smo243106 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo243106.setAttribute('id', 'smo243106');
smo243123v0ar.push(smo243106);
const smo243107 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo243107.setAttribute('id', 'smo243107');
smo243123v0ar.push(smo243107);
smo243123v0.addTickables(smo243123v0ar)
fmtsmo24312314.joinVoices([smo243123v0]);
const fmtsmo24411314 = new VF.Formatter();
//
// voices and notes for stave 2 14
const smo244113v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244113v0ar = [];
const smo244094 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo244094.setAttribute('id', 'smo244094');
smo244113v0ar.push(smo244094);
const smo244095 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo244095.setAttribute('id', 'smo244095');
smo244113v0ar.push(smo244095);
const smo244096 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo244096.setAttribute('id', 'smo244096');
smo244113v0ar.push(smo244096);
const smo244097 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo244097.setAttribute('id', 'smo244097');
smo244113v0ar.push(smo244097);
smo244113v0.addTickables(smo244113v0ar)
fmtsmo24411314.joinVoices([smo244113v0]);
const fmtsmo24507114 = new VF.Formatter();
//
// voices and notes for stave 3 14
const smo245071v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo245071v0ar = [];
const smo245052 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo245052.setAttribute('id', 'smo245052');
smo245071v0ar.push(smo245052);
const smo245053 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo245053.setAttribute('id', 'smo245053');
smo245071v0ar.push(smo245053);
const smo245054 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo245054.setAttribute('id', 'smo245054');
smo245071v0ar.push(smo245054);
const smo245055 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo245055.setAttribute('id', 'smo245055');
smo245071v0ar.push(smo245055);
smo245071v0.addTickables(smo245071v0ar)
fmtsmo24507114.joinVoices([smo245071v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
const dirsmo252123 = smo242072.getStemDirection();
smo242072.setStemDirection(dirsmo252123);
smo242074.setStemDirection(dirsmo252123);
const smo252123 = new VF.Beam([smo242072,smo242074]);
 
// formatting measures in staff group smo245740
fmtsmo24209514.format([smo242095v0,smo243123v0,smo244113v0,smo245071v0], 169);
const stavesmo242095 = new VF.Stave(1189, 598, 183);
stavesmo242095.setAttribute('id', 'stavesmo242095');
stavesmo242095.setBegBarType(VF.Barline.type.NONE);
stavesmo242095.setContext(context);
stavesmo242095.draw();
smo242095v0.draw(context, stavesmo242095);
smo252123.setContext(context);
smo252123.draw();
const stavesmo243123 = new VF.Stave(1189, 711, 183);
stavesmo243123.setAttribute('id', 'stavesmo243123');
stavesmo243123.setBegBarType(VF.Barline.type.NONE);
stavesmo243123.setContext(context);
stavesmo243123.draw();
smo243123v0.draw(context, stavesmo243123);
const stavesmo244113 = new VF.Stave(1189, 794, 183);
stavesmo244113.setAttribute('id', 'stavesmo244113');
stavesmo244113.setBegBarType(VF.Barline.type.NONE);
stavesmo244113.setContext(context);
stavesmo244113.draw();
smo244113v0.draw(context, stavesmo244113);
const stavesmo245071 = new VF.Stave(1189, 875, 183);
stavesmo245071.setAttribute('id', 'stavesmo245071');
stavesmo245071.setBegBarType(VF.Barline.type.NONE);
stavesmo245071.setContext(context);
stavesmo245071.draw();
smo245071v0.draw(context, stavesmo245071);
const rightsmo245740stavesmo2420953 = new VF.StaveConnector(stavesmo242095, stavesmo245071).setType(0);
rightsmo245740stavesmo2420953.setContext(context).draw();
const fmtsmo24211415 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo242114v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242114v0ar = [];
const smo242096 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo242096.setAttribute('id', 'smo242096');
smo242096.addModifier(new VF.Dot(), 0);
const smo242097 = new VF.Annotation('вей');
smo242097.setAttribute('id', 'smo242097');
smo242097.setFont('Merriweather', 12.1, 'normal');
smo242097.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242096.addModifier(smo242097);
smo242097.addClass('lyric lyric-0');
smo242114v0ar.push(smo242096);
const smo242098 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo242098.setAttribute('id', 'smo242098');
smo242114v0ar.push(smo242098);
smo242114v0.addTickables(smo242114v0ar)
fmtsmo24211415.joinVoices([smo242114v0]);
const fmtsmo24314315 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo243143v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243143v0ar = [];
const smo243124 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo243124.setAttribute('id', 'smo243124');
smo243143v0ar.push(smo243124);
const smo243125 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo243125.setAttribute('id', 'smo243125');
smo243143v0ar.push(smo243125);
const smo243126 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo243126.setAttribute('id', 'smo243126');
smo243143v0ar.push(smo243126);
const smo243127 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo243127.setAttribute('id', 'smo243127');
smo243143v0ar.push(smo243127);
smo243143v0.addTickables(smo243143v0ar)
fmtsmo24314315.joinVoices([smo243143v0]);
const fmtsmo24413315 = new VF.Formatter();
//
// voices and notes for stave 2 15
const smo244133v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244133v0ar = [];
const smo244114 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo244114.setAttribute('id', 'smo244114');
smo244133v0ar.push(smo244114);
const smo244115 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo244115.setAttribute('id', 'smo244115');
smo244133v0ar.push(smo244115);
const smo244116 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo244116.setAttribute('id', 'smo244116');
smo244133v0ar.push(smo244116);
const smo244117 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo244117.setAttribute('id', 'smo244117');
smo244133v0ar.push(smo244117);
smo244133v0.addTickables(smo244133v0ar)
fmtsmo24413315.joinVoices([smo244133v0]);
const fmtsmo24508915 = new VF.Formatter();
//
// voices and notes for stave 3 15
const smo245089v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo245089v0ar = [];
const smo245072 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo245072.setAttribute('id', 'smo245072');
smo245072.addModifier(new VF.Dot(), 0);
smo245089v0ar.push(smo245072);
const smo245073 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo245073.setAttribute('id', 'smo245073');
smo245089v0ar.push(smo245073);
smo245089v0.addTickables(smo245089v0ar)
fmtsmo24508915.joinVoices([smo245089v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
 
// formatting measures in staff group smo245740
fmtsmo24211415.format([smo242114v0,smo243143v0,smo244133v0,smo245089v0], 226);
const stavesmo242114 = new VF.Stave(55, 1005, 300);
stavesmo242114.setAttribute('id', 'stavesmo242114');
stavesmo242114.setBegBarType(1);
stavesmo242114.addClef('treble');
const keysmo242114 = new VF.KeySignature('F');
keysmo242114.addToStave(stavesmo242114);
stavesmo242114.setContext(context);
stavesmo242114.draw();
smo242114v0.draw(context, stavesmo242114);
const stavesmo243143 = new VF.Stave(55, 1120, 300);
stavesmo243143.setAttribute('id', 'stavesmo243143');
stavesmo243143.setBegBarType(1);
stavesmo243143.addClef('treble');
const keysmo243143 = new VF.KeySignature('F');
keysmo243143.addToStave(stavesmo243143);
stavesmo243143.setContext(context);
stavesmo243143.draw();
smo243143v0.draw(context, stavesmo243143);
const stavesmo244133 = new VF.Stave(55, 1215, 300);
stavesmo244133.setAttribute('id', 'stavesmo244133');
stavesmo244133.setBegBarType(1);
stavesmo244133.addClef('treble');
const keysmo244133 = new VF.KeySignature('F');
keysmo244133.addToStave(stavesmo244133);
stavesmo244133.setContext(context);
stavesmo244133.draw();
smo244133v0.draw(context, stavesmo244133);
const stavesmo245089 = new VF.Stave(55, 1293, 300);
stavesmo245089.setAttribute('id', 'stavesmo245089');
stavesmo245089.setBegBarType(1);
stavesmo245089.addClef('bass');
const keysmo245089 = new VF.KeySignature('F');
keysmo245089.addToStave(stavesmo245089);
stavesmo245089.setContext(context);
stavesmo245089.draw();
smo245089v0.draw(context, stavesmo245089);
const leftsmo245740stavesmo2421143 = new VF.StaveConnector(stavesmo242114, stavesmo245089).setType(1);
leftsmo245740stavesmo2421143.setContext(context).draw();
const fmtsmo24213616 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo242136v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242136v0ar = [];
const smo242115 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo242115.setAttribute('id', 'smo242115');
const smo242116 = new VF.Annotation('Tы');
smo242116.setAttribute('id', 'smo242116');
smo242116.setFont('Merriweather', 12.1, 'normal');
smo242116.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242115.addModifier(smo242116);
smo242116.addClass('lyric lyric-0');
smo242136v0ar.push(smo242115);
const smo242117 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo242117.setAttribute('id', 'smo242117');
const smo2421170acc = new VF.Accidental('n');
smo242117.addModifier(smo2421170acc, 0);
const smo242118 = new VF.Annotation('ку');
smo242118.setAttribute('id', 'smo242118');
smo242118.setFont('Merriweather', 12.1, 'normal');
smo242118.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242117.addModifier(smo242118);
smo242118.addClass('lyric lyric-0');
smo242136v0ar.push(smo242117);
const smo242119 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
smo242119.setAttribute('id', 'smo242119');
const smo2421190acc = new VF.Accidental('#');
smo242119.addModifier(smo2421190acc, 0);
const smo242120 = new VF.Annotation('-');
smo242120.setAttribute('id', 'smo242120');
smo242120.setFont('Merriweather', 12.1, 'normal');
smo242120.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242119.addModifier(smo242120);
smo242120.addClass('lyric lyric-0 lyric-hyphen');
smo242136v0ar.push(smo242119);
smo242136v0.addTickables(smo242136v0ar)
fmtsmo24213616.joinVoices([smo242136v0]);
const fmtsmo24316316 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo243163v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243163v0ar = [];
const smo243144 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo243144.setAttribute('id', 'smo243144');
smo243163v0ar.push(smo243144);
const smo243145 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo243145.setAttribute('id', 'smo243145');
smo243163v0ar.push(smo243145);
const smo243146 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo243146.setAttribute('id', 'smo243146');
smo243163v0ar.push(smo243146);
const smo243147 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo243147.setAttribute('id', 'smo243147');
smo243163v0ar.push(smo243147);
smo243163v0.addTickables(smo243163v0ar)
fmtsmo24316316.joinVoices([smo243163v0]);
const fmtsmo24415316 = new VF.Formatter();
//
// voices and notes for stave 2 16
const smo244153v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244153v0ar = [];
const smo244134 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo244134.setAttribute('id', 'smo244134');
smo244153v0ar.push(smo244134);
const smo244135 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
smo244135.setAttribute('id', 'smo244135');
const smo2441350acc = new VF.Accidental('#');
smo244135.addModifier(smo2441350acc, 0);
smo244153v0ar.push(smo244135);
const smo244136 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo244136.setAttribute('id', 'smo244136');
smo244153v0ar.push(smo244136);
const smo244137 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo244137.setAttribute('id', 'smo244137');
smo244153v0ar.push(smo244137);
smo244153v0.addTickables(smo244153v0ar)
fmtsmo24415316.joinVoices([smo244153v0]);
const fmtsmo24510716 = new VF.Formatter();
//
// voices and notes for stave 3 16
const smo245107v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo245107v0ar = [];
const smo245090 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo245090.setAttribute('id', 'smo245090');
smo245107v0ar.push(smo245090);
const smo245091 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo245091.setAttribute('id', 'smo245091');
smo245107v0ar.push(smo245091);
smo245107v0.addTickables(smo245107v0ar)
fmtsmo24510716.joinVoices([smo245107v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
 
// formatting measures in staff group smo245740
fmtsmo24213616.format([smo242136v0,smo243163v0,smo244153v0,smo245107v0], 258);
const stavesmo242136 = new VF.Stave(355, 1005, 272);
stavesmo242136.setAttribute('id', 'stavesmo242136');
stavesmo242136.setBegBarType(VF.Barline.type.NONE);
stavesmo242136.setContext(context);
stavesmo242136.draw();
smo242136v0.draw(context, stavesmo242136);
const stavesmo243163 = new VF.Stave(355, 1120, 272);
stavesmo243163.setAttribute('id', 'stavesmo243163');
stavesmo243163.setBegBarType(VF.Barline.type.NONE);
stavesmo243163.setContext(context);
stavesmo243163.draw();
smo243163v0.draw(context, stavesmo243163);
const stavesmo244153 = new VF.Stave(355, 1215, 272);
stavesmo244153.setAttribute('id', 'stavesmo244153');
stavesmo244153.setBegBarType(VF.Barline.type.NONE);
stavesmo244153.setContext(context);
stavesmo244153.draw();
smo244153v0.draw(context, stavesmo244153);
const stavesmo245107 = new VF.Stave(355, 1293, 272);
stavesmo245107.setAttribute('id', 'stavesmo245107');
stavesmo245107.setBegBarType(VF.Barline.type.NONE);
stavesmo245107.setContext(context);
stavesmo245107.draw();
smo245107v0.draw(context, stavesmo245107);
const fmtsmo24215817 = new VF.Formatter();
//
// voices and notes for stave 0 17
const smo242158v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242158v0ar = [];
const smo242137 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo242137.setAttribute('id', 'smo242137');
const smo242138 = new VF.Annotation('дa,');
smo242138.setAttribute('id', 'smo242138');
smo242138.setFont('Merriweather', 12.1, 'normal');
smo242138.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242137.addModifier(smo242138);
smo242138.addClass('lyric lyric-0');
smo242158v0ar.push(smo242137);
const smo242139 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo242139.setAttribute('id', 'smo242139');
const smo242140 = new VF.Annotation('ку');
smo242140.setAttribute('id', 'smo242140');
smo242140.setFont('Merriweather', 12.1, 'normal');
smo242140.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242139.addModifier(smo242140);
smo242140.addClass('lyric lyric-0');
smo242158v0ar.push(smo242139);
const smo242141 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo242141.setAttribute('id', 'smo242141');
const smo242142 = new VF.Annotation('-');
smo242142.setAttribute('id', 'smo242142');
smo242142.setFont('Merriweather', 12.1, 'normal');
smo242142.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242141.addModifier(smo242142);
smo242142.addClass('lyric lyric-0 lyric-hyphen');
smo242158v0ar.push(smo242141);
smo242158v0.addTickables(smo242158v0ar)
fmtsmo24215817.joinVoices([smo242158v0]);
const fmtsmo24318317 = new VF.Formatter();
//
// voices and notes for stave 1 17
const smo243183v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243183v0ar = [];
const smo243164 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo243164.setAttribute('id', 'smo243164');
smo243183v0ar.push(smo243164);
const smo243165 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo243165.setAttribute('id', 'smo243165');
smo243183v0ar.push(smo243165);
const smo243166 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo243166.setAttribute('id', 'smo243166');
smo243183v0ar.push(smo243166);
const smo243167 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo243167.setAttribute('id', 'smo243167');
smo243183v0ar.push(smo243167);
smo243183v0.addTickables(smo243183v0ar)
fmtsmo24318317.joinVoices([smo243183v0]);
const fmtsmo24417317 = new VF.Formatter();
//
// voices and notes for stave 2 17
const smo244173v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244173v0ar = [];
const smo244154 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo244154.setAttribute('id', 'smo244154');
smo244173v0ar.push(smo244154);
const smo244155 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo244155.setAttribute('id', 'smo244155');
smo244173v0ar.push(smo244155);
const smo244156 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo244156.setAttribute('id', 'smo244156');
smo244173v0ar.push(smo244156);
const smo244157 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo244157.setAttribute('id', 'smo244157');
smo244173v0ar.push(smo244157);
smo244173v0.addTickables(smo244173v0ar)
fmtsmo24417317.joinVoices([smo244173v0]);
const fmtsmo24512617 = new VF.Formatter();
//
// voices and notes for stave 3 17
const smo245126v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo245126v0ar = [];
const smo245108 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo245108.setAttribute('id', 'smo245108');
smo245126v0ar.push(smo245108);
const smo245109 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo245109.setAttribute('id', 'smo245109');
smo245126v0ar.push(smo245109);
const smo245110 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo245110.setAttribute('id', 'smo245110');
smo245126v0ar.push(smo245110);
smo245126v0.addTickables(smo245126v0ar)
fmtsmo24512617.joinVoices([smo245126v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
 
// formatting measures in staff group smo245740
fmtsmo24215817.format([smo242158v0,smo243183v0,smo244173v0,smo245126v0], 234);
const stavesmo242158 = new VF.Stave(627, 1005, 248);
stavesmo242158.setAttribute('id', 'stavesmo242158');
stavesmo242158.setBegBarType(VF.Barline.type.NONE);
stavesmo242158.setContext(context);
stavesmo242158.draw();
smo242158v0.draw(context, stavesmo242158);
const stavesmo243183 = new VF.Stave(627, 1120, 248);
stavesmo243183.setAttribute('id', 'stavesmo243183');
stavesmo243183.setBegBarType(VF.Barline.type.NONE);
stavesmo243183.setContext(context);
stavesmo243183.draw();
smo243183v0.draw(context, stavesmo243183);
const stavesmo244173 = new VF.Stave(627, 1215, 248);
stavesmo244173.setAttribute('id', 'stavesmo244173');
stavesmo244173.setBegBarType(VF.Barline.type.NONE);
stavesmo244173.setContext(context);
stavesmo244173.draw();
smo244173v0.draw(context, stavesmo244173);
const stavesmo245126 = new VF.Stave(627, 1293, 248);
stavesmo245126.setAttribute('id', 'stavesmo245126');
stavesmo245126.setBegBarType(VF.Barline.type.NONE);
stavesmo245126.setContext(context);
stavesmo245126.draw();
smo245126v0.draw(context, stavesmo245126);
const fmtsmo24218018 = new VF.Formatter();
//
// voices and notes for stave 0 18
const smo242180v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242180v0ar = [];
const smo242159 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo242159.setAttribute('id', 'smo242159');
const smo242160 = new VF.Annotation('да');
smo242160.setAttribute('id', 'smo242160');
smo242160.setFont('Merriweather', 12.1, 'normal');
smo242160.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242159.addModifier(smo242160);
smo242160.addClass('lyric lyric-0');
smo242180v0ar.push(smo242159);
const smo242161 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo242161.setAttribute('id', 'smo242161');
smo242180v0ar.push(smo242161);
const smo242162 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo242162.setAttribute('id', 'smo242162');
const smo242163 = new VF.Annotation('ле');
smo242163.setAttribute('id', 'smo242163');
smo242163.setFont('Merriweather', 12.1, 'normal');
smo242163.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242162.addModifier(smo242163);
smo242163.addClass('lyric lyric-0 lyric-hyphen');
smo242180v0ar.push(smo242162);
const smo242164 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo242164.setAttribute('id', 'smo242164');
smo242180v0ar.push(smo242164);
smo242180v0.addTickables(smo242180v0ar)
fmtsmo24218018.joinVoices([smo242180v0]);
const fmtsmo24320318 = new VF.Formatter();
//
// voices and notes for stave 1 18
const smo243203v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243203v0ar = [];
const smo243184 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo243184.setAttribute('id', 'smo243184');
smo243203v0ar.push(smo243184);
const smo243185 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo243185.setAttribute('id', 'smo243185');
smo243203v0ar.push(smo243185);
const smo243186 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo243186.setAttribute('id', 'smo243186');
smo243203v0ar.push(smo243186);
const smo243187 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo243187.setAttribute('id', 'smo243187');
smo243203v0ar.push(smo243187);
smo243203v0.addTickables(smo243203v0ar)
fmtsmo24320318.joinVoices([smo243203v0]);
const fmtsmo24419318 = new VF.Formatter();
//
// voices and notes for stave 2 18
const smo244193v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244193v0ar = [];
const smo244174 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo244174.setAttribute('id', 'smo244174');
smo244193v0ar.push(smo244174);
const smo244175 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo244175.setAttribute('id', 'smo244175');
smo244193v0ar.push(smo244175);
const smo244176 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo244176.setAttribute('id', 'smo244176');
smo244193v0ar.push(smo244176);
const smo244177 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo244177.setAttribute('id', 'smo244177');
smo244193v0ar.push(smo244177);
smo244193v0.addTickables(smo244193v0ar)
fmtsmo24419318.joinVoices([smo244193v0]);
const fmtsmo24514418 = new VF.Formatter();
//
// voices and notes for stave 3 18
const smo245144v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo245144v0ar = [];
const smo245127 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo245127.setAttribute('id', 'smo245127');
smo245144v0ar.push(smo245127);
const smo245128 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo245128.setAttribute('id', 'smo245128');
smo245144v0ar.push(smo245128);
smo245144v0.addTickables(smo245144v0ar)
fmtsmo24514418.joinVoices([smo245144v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
 
// formatting measures in staff group smo245740
fmtsmo24218018.format([smo242180v0,smo243203v0,smo244193v0,smo245144v0], 228);
const stavesmo242180 = new VF.Stave(875, 1005, 242);
stavesmo242180.setAttribute('id', 'stavesmo242180');
stavesmo242180.setBegBarType(VF.Barline.type.NONE);
stavesmo242180.setContext(context);
stavesmo242180.draw();
smo242180v0.draw(context, stavesmo242180);
const stavesmo243203 = new VF.Stave(875, 1120, 242);
stavesmo243203.setAttribute('id', 'stavesmo243203');
stavesmo243203.setBegBarType(VF.Barline.type.NONE);
stavesmo243203.setContext(context);
stavesmo243203.draw();
smo243203v0.draw(context, stavesmo243203);
const stavesmo244193 = new VF.Stave(875, 1215, 242);
stavesmo244193.setAttribute('id', 'stavesmo244193');
stavesmo244193.setBegBarType(VF.Barline.type.NONE);
stavesmo244193.setContext(context);
stavesmo244193.draw();
smo244193v0.draw(context, stavesmo244193);
const stavesmo245144 = new VF.Stave(875, 1293, 242);
stavesmo245144.setAttribute('id', 'stavesmo245144');
stavesmo245144.setBegBarType(VF.Barline.type.NONE);
stavesmo245144.setContext(context);
stavesmo245144.draw();
smo245144v0.draw(context, stavesmo245144);
const fmtsmo24220119 = new VF.Formatter();
//
// voices and notes for stave 0 19
const smo242201v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242201v0ar = [];
const smo242181 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo242181.setAttribute('id', 'smo242181');
const smo242182 = new VF.Annotation('тишь,');
smo242182.setAttribute('id', 'smo242182');
smo242182.setFont('Merriweather', 12.1, 'normal');
smo242182.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242181.addModifier(smo242182);
smo242182.addClass('lyric lyric-0');
smo242201v0ar.push(smo242181);
const smo242183 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo242183.setAttribute('id', 'smo242183');
const smo242184 = new VF.Annotation('-');
smo242184.setAttribute('id', 'smo242184');
smo242184.setFont('Merriweather', 12.1, 'normal');
smo242184.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242183.addModifier(smo242184);
smo242184.addClass('lyric lyric-0 lyric-hyphen');
smo242201v0ar.push(smo242183);
const smo242185 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo242185.setAttribute('id', 'smo242185');
smo242201v0ar.push(smo242185);
smo242201v0.addTickables(smo242201v0ar)
fmtsmo24220119.joinVoices([smo242201v0]);
const fmtsmo24322319 = new VF.Formatter();
//
// voices and notes for stave 1 19
const smo243223v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243223v0ar = [];
const smo243204 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo243204.setAttribute('id', 'smo243204');
smo243223v0ar.push(smo243204);
const smo243205 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo243205.setAttribute('id', 'smo243205');
smo243223v0ar.push(smo243205);
const smo243206 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo243206.setAttribute('id', 'smo243206');
smo243223v0ar.push(smo243206);
const smo243207 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo243207.setAttribute('id', 'smo243207');
smo243223v0ar.push(smo243207);
smo243223v0.addTickables(smo243223v0ar)
fmtsmo24322319.joinVoices([smo243223v0]);
const fmtsmo24421319 = new VF.Formatter();
//
// voices and notes for stave 2 19
const smo244213v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244213v0ar = [];
const smo244194 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo244194.setAttribute('id', 'smo244194');
smo244213v0ar.push(smo244194);
const smo244195 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo244195.setAttribute('id', 'smo244195');
smo244213v0ar.push(smo244195);
const smo244196 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo244196.setAttribute('id', 'smo244196');
smo244213v0ar.push(smo244196);
const smo244197 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo244197.setAttribute('id', 'smo244197');
smo244213v0ar.push(smo244197);
smo244213v0.addTickables(smo244213v0ar)
fmtsmo24421319.joinVoices([smo244213v0]);
const fmtsmo24516319 = new VF.Formatter();
//
// voices and notes for stave 3 19
const smo245163v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo245163v0ar = [];
const smo245145 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo245145.setAttribute('id', 'smo245145');
smo245163v0ar.push(smo245145);
const smo245146 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo245146.setAttribute('id', 'smo245146');
smo245163v0ar.push(smo245146);
const smo245147 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo245147.setAttribute('id', 'smo245147');
smo245163v0ar.push(smo245147);
smo245163v0.addTickables(smo245163v0ar)
fmtsmo24516319.joinVoices([smo245163v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
 
// formatting measures in staff group smo245740
fmtsmo24220119.format([smo242201v0,smo243223v0,smo244213v0,smo245163v0], 245);
const stavesmo242201 = new VF.Stave(1117, 1005, 259);
stavesmo242201.setAttribute('id', 'stavesmo242201');
stavesmo242201.setBegBarType(VF.Barline.type.NONE);
stavesmo242201.setContext(context);
stavesmo242201.draw();
smo242201v0.draw(context, stavesmo242201);
const stavesmo243223 = new VF.Stave(1117, 1120, 259);
stavesmo243223.setAttribute('id', 'stavesmo243223');
stavesmo243223.setBegBarType(VF.Barline.type.NONE);
stavesmo243223.setContext(context);
stavesmo243223.draw();
smo243223v0.draw(context, stavesmo243223);
const stavesmo244213 = new VF.Stave(1117, 1215, 259);
stavesmo244213.setAttribute('id', 'stavesmo244213');
stavesmo244213.setBegBarType(VF.Barline.type.NONE);
stavesmo244213.setContext(context);
stavesmo244213.draw();
smo244213v0.draw(context, stavesmo244213);
const stavesmo245163 = new VF.Stave(1117, 1293, 259);
stavesmo245163.setAttribute('id', 'stavesmo245163');
stavesmo245163.setBegBarType(VF.Barline.type.NONE);
stavesmo245163.setContext(context);
stavesmo245163.draw();
smo245163v0.draw(context, stavesmo245163);
const rightsmo245740stavesmo2422013 = new VF.StaveConnector(stavesmo242201, stavesmo245163).setType(0);
rightsmo245740stavesmo2422013.setContext(context).draw();
const fmtsmo24222620 = new VF.Formatter();
//
// voices and notes for stave 0 20
const smo242226v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242226v0ar = [];
const smo242202 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo242202.setAttribute('id', 'smo242202');
const smo2422020acc = new VF.Accidental('n');
smo242202.addModifier(smo2422020acc, 0);
smo242202.addModifier(new VF.Dot(), 0);
const smo242203 = new VF.Annotation('где');
smo242203.setAttribute('id', 'smo242203');
smo242203.setFont('Merriweather', 12.1, 'normal');
smo242203.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242202.addModifier(smo242203);
smo242203.addClass('lyric lyric-0');
smo242226v0ar.push(smo242202);
const smo242204 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo242204.setAttribute('id', 'smo242204');
const smo242205 = new VF.Annotation('-');
smo242205.setAttribute('id', 'smo242205');
smo242205.setFont('Merriweather', 12.1, 'normal');
smo242205.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242204.addModifier(smo242205);
smo242205.addClass('lyric lyric-0 lyric-hyphen');
smo242226v0ar.push(smo242204);
const smo242206 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo242206.setAttribute('id', 'smo242206');
smo242226v0ar.push(smo242206);
const smo242207 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo242207.setAttribute('id', 'smo242207');
const smo242208 = new VF.Annotation('вс');
smo242208.setAttribute('id', 'smo242208');
smo242208.setFont('Merriweather', 12.1, 'normal');
smo242208.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242207.addModifier(smo242208);
smo242208.addClass('lyric lyric-0 lyric-hyphen');
smo242226v0ar.push(smo242207);
const smo242209 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo242209.setAttribute('id', 'smo242209');
const smo242210 = new VF.Annotation('ю');
smo242210.setAttribute('id', 'smo242210');
smo242210.setFont('Merriweather', 12.1, 'normal');
smo242210.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242209.addModifier(smo242210);
smo242210.addClass('lyric lyric-0');
smo242226v0ar.push(smo242209);
smo242226v0.addTickables(smo242226v0ar)
fmtsmo24222620.joinVoices([smo242226v0]);
const fmtsmo24324320 = new VF.Formatter();
//
// voices and notes for stave 1 20
const smo243243v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243243v0ar = [];
const smo243224 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo243224.setAttribute('id', 'smo243224');
smo243243v0ar.push(smo243224);
const smo243225 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo243225.setAttribute('id', 'smo243225');
smo243243v0ar.push(smo243225);
const smo243226 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo243226.setAttribute('id', 'smo243226');
smo243243v0ar.push(smo243226);
const smo243227 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo243227.setAttribute('id', 'smo243227');
const smo2432270acc = new VF.Accidental('#');
smo243227.addModifier(smo2432270acc, 0);
smo243243v0ar.push(smo243227);
smo243243v0.addTickables(smo243243v0ar)
fmtsmo24324320.joinVoices([smo243243v0]);
const fmtsmo24423320 = new VF.Formatter();
//
// voices and notes for stave 2 20
const smo244233v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244233v0ar = [];
const smo244214 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo244214.setAttribute('id', 'smo244214');
smo244233v0ar.push(smo244214);
const smo244215 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo244215.setAttribute('id', 'smo244215');
smo244233v0ar.push(smo244215);
const smo244216 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo244216.setAttribute('id', 'smo244216');
smo244233v0ar.push(smo244216);
const smo244217 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo244217.setAttribute('id', 'smo244217');
smo244233v0ar.push(smo244217);
smo244233v0.addTickables(smo244233v0ar)
fmtsmo24423320.joinVoices([smo244233v0]);
const fmtsmo24518320 = new VF.Formatter();
//
// voices and notes for stave 3 20
const smo245183v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo245183v0ar = [];
const smo245164 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo245164.setAttribute('id', 'smo245164');
smo245183v0ar.push(smo245164);
const smo245165 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo245165.setAttribute('id', 'smo245165');
smo245183v0ar.push(smo245165);
const smo245166 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo245166.setAttribute('id', 'smo245166');
smo245183v0ar.push(smo245166);
const smo245167 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo245167.setAttribute('id', 'smo245167');
smo245183v0ar.push(smo245167);
smo245183v0.addTickables(smo245183v0ar)
fmtsmo24518320.joinVoices([smo245183v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
const dirsmo252189 = smo242204.getStemDirection();
smo242204.setStemDirection(dirsmo252189);
smo242206.setStemDirection(dirsmo252189);
const smo252189 = new VF.Beam([smo242204,smo242206]);
 
// formatting measures in staff group smo245740
fmtsmo24222620.format([smo242226v0,smo243243v0,smo244233v0,smo245183v0], 219);
const stavesmo242226 = new VF.Stave(55, 1423, 294);
stavesmo242226.setAttribute('id', 'stavesmo242226');
stavesmo242226.setBegBarType(1);
stavesmo242226.addClef('treble');
const keysmo242226 = new VF.KeySignature('F');
keysmo242226.addToStave(stavesmo242226);
stavesmo242226.setContext(context);
stavesmo242226.draw();
smo242226v0.draw(context, stavesmo242226);
smo252189.setContext(context);
smo252189.draw();
const stavesmo243243 = new VF.Stave(55, 1534, 294);
stavesmo243243.setAttribute('id', 'stavesmo243243');
stavesmo243243.setBegBarType(1);
stavesmo243243.addClef('treble');
const keysmo243243 = new VF.KeySignature('F');
keysmo243243.addToStave(stavesmo243243);
stavesmo243243.setContext(context);
stavesmo243243.draw();
smo243243v0.draw(context, stavesmo243243);
const stavesmo244233 = new VF.Stave(55, 1617, 294);
stavesmo244233.setAttribute('id', 'stavesmo244233');
stavesmo244233.setBegBarType(1);
stavesmo244233.addClef('treble');
const keysmo244233 = new VF.KeySignature('F');
keysmo244233.addToStave(stavesmo244233);
stavesmo244233.setContext(context);
stavesmo244233.draw();
smo244233v0.draw(context, stavesmo244233);
const stavesmo245183 = new VF.Stave(55, 1711, 294);
stavesmo245183.setAttribute('id', 'stavesmo245183');
stavesmo245183.setBegBarType(1);
stavesmo245183.addClef('bass');
const keysmo245183 = new VF.KeySignature('F');
keysmo245183.addToStave(stavesmo245183);
stavesmo245183.setContext(context);
stavesmo245183.draw();
smo245183v0.draw(context, stavesmo245183);
const leftsmo245740stavesmo2422263 = new VF.StaveConnector(stavesmo242226, stavesmo245183).setType(1);
leftsmo245740stavesmo2422263.setContext(context).draw();
const fmtsmo24224821 = new VF.Formatter();
//
// voices and notes for stave 0 21
const smo242248v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242248v0ar = [];
const smo242227 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo242227.setAttribute('id', 'smo242227');
const smo242228 = new VF.Annotation('ноч');
smo242228.setAttribute('id', 'smo242228');
smo242228.setFont('Merriweather', 12.1, 'normal');
smo242228.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242227.addModifier(smo242228);
smo242228.addClass('lyric lyric-0 lyric-hyphen');
smo242248v0ar.push(smo242227);
const smo242229 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo242229.setAttribute('id', 'smo242229');
const smo242230 = new VF.Annotation('ку');
smo242230.setAttribute('id', 'smo242230');
smo242230.setFont('Merriweather', 12.1, 'normal');
smo242230.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242229.addModifier(smo242230);
smo242230.addClass('lyric lyric-0');
smo242248v0ar.push(smo242229);
const smo242231 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo242231.setAttribute('id', 'smo242231');
const smo242232 = new VF.Annotation('про');
smo242232.setAttribute('id', 'smo242232');
smo242232.setFont('Merriweather', 12.1, 'normal');
smo242232.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242231.addModifier(smo242232);
smo242232.addClass('lyric lyric-0');
smo242248v0ar.push(smo242231);
smo242248v0.addTickables(smo242248v0ar)
fmtsmo24224821.joinVoices([smo242248v0]);
const fmtsmo24326321 = new VF.Formatter();
//
// voices and notes for stave 1 21
const smo243263v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243263v0ar = [];
const smo243244 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo243244.setAttribute('id', 'smo243244');
smo243263v0ar.push(smo243244);
const smo243245 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo243245.setAttribute('id', 'smo243245');
smo243263v0ar.push(smo243245);
const smo243246 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo243246.setAttribute('id', 'smo243246');
smo243263v0ar.push(smo243246);
const smo243247 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo243247.setAttribute('id', 'smo243247');
smo243263v0ar.push(smo243247);
smo243263v0.addTickables(smo243263v0ar)
fmtsmo24326321.joinVoices([smo243263v0]);
const fmtsmo24425321 = new VF.Formatter();
//
// voices and notes for stave 2 21
const smo244253v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244253v0ar = [];
const smo244234 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo244234.setAttribute('id', 'smo244234');
smo244253v0ar.push(smo244234);
const smo244235 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo244235.setAttribute('id', 'smo244235');
smo244253v0ar.push(smo244235);
const smo244236 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo244236.setAttribute('id', 'smo244236');
smo244253v0ar.push(smo244236);
const smo244237 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo244237.setAttribute('id', 'smo244237');
smo244253v0ar.push(smo244237);
smo244253v0.addTickables(smo244253v0ar)
fmtsmo24425321.joinVoices([smo244253v0]);
const fmtsmo24520321 = new VF.Formatter();
//
// voices and notes for stave 3 21
const smo245203v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo245203v0ar = [];
const smo245184 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo245184.setAttribute('id', 'smo245184');
smo245203v0ar.push(smo245184);
const smo245185 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo245185.setAttribute('id', 'smo245185');
smo245203v0ar.push(smo245185);
const smo245186 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo245186.setAttribute('id', 'smo245186');
smo245203v0ar.push(smo245186);
const smo245187 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo245187.setAttribute('id', 'smo245187');
smo245203v0ar.push(smo245187);
smo245203v0.addTickables(smo245203v0ar)
fmtsmo24520321.joinVoices([smo245203v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
 
// formatting measures in staff group smo245740
fmtsmo24224821.format([smo242248v0,smo243263v0,smo244253v0,smo245203v0], 198);
const stavesmo242248 = new VF.Stave(349, 1423, 212);
stavesmo242248.setAttribute('id', 'stavesmo242248');
stavesmo242248.setBegBarType(VF.Barline.type.NONE);
stavesmo242248.setContext(context);
stavesmo242248.draw();
smo242248v0.draw(context, stavesmo242248);
const stavesmo243263 = new VF.Stave(349, 1534, 212);
stavesmo243263.setAttribute('id', 'stavesmo243263');
stavesmo243263.setBegBarType(VF.Barline.type.NONE);
stavesmo243263.setContext(context);
stavesmo243263.draw();
smo243263v0.draw(context, stavesmo243263);
const stavesmo244253 = new VF.Stave(349, 1617, 212);
stavesmo244253.setAttribute('id', 'stavesmo244253');
stavesmo244253.setBegBarType(VF.Barline.type.NONE);
stavesmo244253.setContext(context);
stavesmo244253.draw();
smo244253v0.draw(context, stavesmo244253);
const stavesmo245203 = new VF.Stave(349, 1711, 212);
stavesmo245203.setAttribute('id', 'stavesmo245203');
stavesmo245203.setBegBarType(VF.Barline.type.NONE);
stavesmo245203.setContext(context);
stavesmo245203.draw();
smo245203v0.draw(context, stavesmo245203);
const fmtsmo24227822 = new VF.Formatter();
//
// voices and notes for stave 0 22
const smo242278v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242278v0ar = [];
const smo242249 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo242249.setAttribute('id', 'smo242249');
const smo242250 = new VF.Annotation('-');
smo242250.setAttribute('id', 'smo242250');
smo242250.setFont('Merriweather', 12.1, 'normal');
smo242250.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242249.addModifier(smo242250);
smo242250.addClass('lyric lyric-0 lyric-hyphen');
smo242278v0ar.push(smo242249);
const smo242251 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo242251.setAttribute('id', 'smo242251');
const smo242252 = new VF.Annotation('-');
smo242252.setAttribute('id', 'smo242252');
smo242252.setFont('Merriweather', 12.1, 'normal');
smo242252.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242251.addModifier(smo242252);
smo242252.addClass('lyric lyric-0 lyric-hyphen');
smo242278v0ar.push(smo242251);
const smo242253 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo242253.setAttribute('id', 'smo242253');
const smo242254 = new VF.Annotation('-');
smo242254.setAttribute('id', 'smo242254');
smo242254.setFont('Merriweather', 12.1, 'normal');
smo242254.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242253.addModifier(smo242254);
smo242254.addClass('lyric lyric-0 lyric-hyphen');
smo242278v0ar.push(smo242253);
const smo242255 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo242255.setAttribute('id', 'smo242255');
const smo2422550acc = new VF.Accidental('#');
smo242255.addModifier(smo2422550acc, 0);
const smo242256 = new VF.Annotation('-');
smo242256.setAttribute('id', 'smo242256');
smo242256.setFont('Merriweather', 12.1, 'normal');
smo242256.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242255.addModifier(smo242256);
smo242256.addClass('lyric lyric-0 lyric-hyphen');
smo242278v0ar.push(smo242255);
const smo242257 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo242257.setAttribute('id', 'smo242257');
const smo242258 = new VF.Annotation('-');
smo242258.setAttribute('id', 'smo242258');
smo242258.setFont('Merriweather', 12.1, 'normal');
smo242258.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242257.addModifier(smo242258);
smo242258.addClass('lyric lyric-0 lyric-hyphen');
smo242278v0ar.push(smo242257);
const smo242259 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo242259.setAttribute('id', 'smo242259');
const smo2422590acc = new VF.Accidental('n');
smo242259.addModifier(smo2422590acc, 0);
const smo242260 = new VF.Annotation('-');
smo242260.setAttribute('id', 'smo242260');
smo242260.setFont('Merriweather', 12.1, 'normal');
smo242260.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242259.addModifier(smo242260);
smo242260.addClass('lyric lyric-0 lyric-hyphen');
smo242278v0ar.push(smo242259);
const smo242261 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
smo242261.setAttribute('id', 'smo242261');
const smo2422610acc = new VF.Accidental('#');
smo242261.addModifier(smo2422610acc, 0);
const smo242262 = new VF.Annotation('по');
smo242262.setAttribute('id', 'smo242262');
smo242262.setFont('Merriweather', 12.1, 'normal');
smo242262.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242261.addModifier(smo242262);
smo242262.addClass('lyric lyric-0 lyric-hyphen');
smo242278v0ar.push(smo242261);
smo242278v0.addTickables(smo242278v0ar)
fmtsmo24227822.joinVoices([smo242278v0]);
const fmtsmo24328122 = new VF.Formatter();
//
// voices and notes for stave 1 22
const smo243281v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243281v0ar = [];
const smo243264 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo243264.setAttribute('id', 'smo243264');
smo243281v0ar.push(smo243264);
const smo243265 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
smo243265.setAttribute('id', 'smo243265');
const smo2432650acc = new VF.Accidental('#');
smo243265.addModifier(smo2432650acc, 0);
smo243265.addModifier(new VF.Dot(), 0);
smo243281v0ar.push(smo243265);
smo243281v0.addTickables(smo243281v0ar)
fmtsmo24328122.joinVoices([smo243281v0]);
const fmtsmo24427122 = new VF.Formatter();
//
// voices and notes for stave 2 22
const smo244271v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244271v0ar = [];
const smo244254 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo244254.setAttribute('id', 'smo244254');
smo244271v0ar.push(smo244254);
const smo244255 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo244255.setAttribute('id', 'smo244255');
smo244255.addModifier(new VF.Dot(), 0);
smo244271v0ar.push(smo244255);
smo244271v0.addTickables(smo244271v0ar)
fmtsmo24427122.joinVoices([smo244271v0]);
const fmtsmo24522022 = new VF.Formatter();
//
// voices and notes for stave 3 22
const smo245220v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo245220v0ar = [];
const smo245204 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo245204.setAttribute('id', 'smo245204');
smo245220v0ar.push(smo245204);
smo245220v0.addTickables(smo245220v0ar)
fmtsmo24522022.joinVoices([smo245220v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
const dirsmo252206 = smo242251.getStemDirection();
smo242251.setStemDirection(dirsmo252206);
smo242253.setStemDirection(dirsmo252206);
smo242255.setStemDirection(dirsmo252206);
smo242257.setStemDirection(dirsmo252206);
const smo252206 = new VF.Beam([smo242251,smo242253,smo242255,smo242257]);
 
// formatting measures in staff group smo245740
fmtsmo24227822.format([smo242278v0,smo243281v0,smo244271v0,smo245220v0], 255);
const stavesmo242278 = new VF.Stave(561, 1423, 269);
stavesmo242278.setAttribute('id', 'stavesmo242278');
stavesmo242278.setBegBarType(VF.Barline.type.NONE);
stavesmo242278.setContext(context);
stavesmo242278.draw();
smo242278v0.draw(context, stavesmo242278);
smo252206.setContext(context);
smo252206.draw();
const stavesmo243281 = new VF.Stave(561, 1534, 269);
stavesmo243281.setAttribute('id', 'stavesmo243281');
stavesmo243281.setBegBarType(VF.Barline.type.NONE);
stavesmo243281.setContext(context);
stavesmo243281.draw();
smo243281v0.draw(context, stavesmo243281);
const stavesmo244271 = new VF.Stave(561, 1617, 269);
stavesmo244271.setAttribute('id', 'stavesmo244271');
stavesmo244271.setBegBarType(VF.Barline.type.NONE);
stavesmo244271.setContext(context);
stavesmo244271.draw();
smo244271v0.draw(context, stavesmo244271);
const stavesmo245220 = new VF.Stave(561, 1711, 269);
stavesmo245220.setAttribute('id', 'stavesmo245220');
stavesmo245220.setBegBarType(VF.Barline.type.NONE);
stavesmo245220.setContext(context);
stavesmo245220.draw();
smo245220v0.draw(context, stavesmo245220);
const fmtsmo24229723 = new VF.Formatter();
//
// voices and notes for stave 0 23
const smo242297v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242297v0ar = [];
const smo242279 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo242279.setAttribute('id', 'smo242279');
smo242279.addModifier(new VF.Dot(), 0);
const smo242280 = new VF.Annotation('ешь');
smo242280.setAttribute('id', 'smo242280');
smo242280.setFont('Merriweather', 12.1, 'normal');
smo242280.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242279.addModifier(smo242280);
smo242280.addClass('lyric lyric-0');
smo242297v0ar.push(smo242279);
const smo242281 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo242281.setAttribute('id', 'smo242281');
smo242297v0ar.push(smo242281);
smo242297v0.addTickables(smo242297v0ar)
fmtsmo24229723.joinVoices([smo242297v0]);
const fmtsmo24329923 = new VF.Formatter();
//
// voices and notes for stave 1 23
const smo243299v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243299v0ar = [];
const smo243282 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo243282.setAttribute('id', 'smo243282');
smo243282.addModifier(new VF.Dot(), 0);
smo243299v0ar.push(smo243282);
const smo243283 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo243283.setAttribute('id', 'smo243283');
smo243299v0ar.push(smo243283);
smo243299v0.addTickables(smo243299v0ar)
fmtsmo24329923.joinVoices([smo243299v0]);
const fmtsmo24428923 = new VF.Formatter();
//
// voices and notes for stave 2 23
const smo244289v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244289v0ar = [];
const smo244272 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo244272.setAttribute('id', 'smo244272');
smo244272.addModifier(new VF.Dot(), 0);
smo244289v0ar.push(smo244272);
const smo244273 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo244273.setAttribute('id', 'smo244273');
smo244289v0ar.push(smo244273);
smo244289v0.addTickables(smo244289v0ar)
fmtsmo24428923.joinVoices([smo244289v0]);
const fmtsmo24523823 = new VF.Formatter();
//
// voices and notes for stave 3 23
const smo245238v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo245238v0ar = [];
const smo245221 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo245221.setAttribute('id', 'smo245221');
smo245221.addModifier(new VF.Dot(), 0);
smo245238v0ar.push(smo245221);
const smo245222 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo245222.setAttribute('id', 'smo245222');
smo245238v0ar.push(smo245222);
smo245238v0.addTickables(smo245238v0ar)
fmtsmo24523823.joinVoices([smo245238v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
 
// formatting measures in staff group smo245740
fmtsmo24229723.format([smo242297v0,smo243299v0,smo244289v0,smo245238v0], 88);
const stavesmo242297 = new VF.Stave(830, 1423, 102);
stavesmo242297.setAttribute('id', 'stavesmo242297');
stavesmo242297.setBegBarType(VF.Barline.type.NONE);
stavesmo242297.setContext(context);
stavesmo242297.draw();
smo242297v0.draw(context, stavesmo242297);
const stavesmo243299 = new VF.Stave(830, 1534, 102);
stavesmo243299.setAttribute('id', 'stavesmo243299');
stavesmo243299.setBegBarType(VF.Barline.type.NONE);
stavesmo243299.setContext(context);
stavesmo243299.draw();
smo243299v0.draw(context, stavesmo243299);
const stavesmo244289 = new VF.Stave(830, 1617, 102);
stavesmo244289.setAttribute('id', 'stavesmo244289');
stavesmo244289.setBegBarType(VF.Barline.type.NONE);
stavesmo244289.setContext(context);
stavesmo244289.draw();
smo244289v0.draw(context, stavesmo244289);
const stavesmo245238 = new VF.Stave(830, 1711, 102);
stavesmo245238.setAttribute('id', 'stavesmo245238');
stavesmo245238.setBegBarType(VF.Barline.type.NONE);
stavesmo245238.setContext(context);
stavesmo245238.draw();
smo245238v0.draw(context, stavesmo245238);
const fmtsmo24232724 = new VF.Formatter();
//
// voices and notes for stave 0 24
const smo242327v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242327v0ar = [];
const smo242298 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo242298.setAttribute('id', 'smo242298');
const smo242299 = new VF.Annotation('Со');
smo242299.setAttribute('id', 'smo242299');
smo242299.setFont('Merriweather', 12.1, 'normal');
smo242299.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242298.addModifier(smo242299);
smo242299.addClass('lyric lyric-0');
smo242327v0ar.push(smo242298);
const smo242300 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo242300.setAttribute('id', 'smo242300');
const smo242301 = new VF.Annotation('-');
smo242301.setAttribute('id', 'smo242301');
smo242301.setFont('Merriweather', 12.1, 'normal');
smo242301.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242300.addModifier(smo242301);
smo242301.addClass('lyric lyric-0 lyric-hyphen');
smo242327v0ar.push(smo242300);
const smo242302 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo242302.setAttribute('id', 'smo242302');
const smo242303 = new VF.Annotation('-');
smo242303.setAttribute('id', 'smo242303');
smo242303.setFont('Merriweather', 12.1, 'normal');
smo242303.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242302.addModifier(smo242303);
smo242303.addClass('lyric lyric-0 lyric-hyphen');
smo242327v0ar.push(smo242302);
const smo242304 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["d#/5/n"]}'))
smo242304.setAttribute('id', 'smo242304');
const smo2423040acc = new VF.Accidental('#');
smo242304.addModifier(smo2423040acc, 0);
const smo242305 = new VF.Annotation('-');
smo242305.setAttribute('id', 'smo242305');
smo242305.setFont('Merriweather', 12.1, 'normal');
smo242305.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242304.addModifier(smo242305);
smo242305.addClass('lyric lyric-0 lyric-hyphen');
smo242327v0ar.push(smo242304);
const smo242306 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo242306.setAttribute('id', 'smo242306');
const smo242307 = new VF.Annotation('-');
smo242307.setAttribute('id', 'smo242307');
smo242307.setFont('Merriweather', 12.1, 'normal');
smo242307.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242306.addModifier(smo242307);
smo242307.addClass('lyric lyric-0 lyric-hyphen');
smo242327v0ar.push(smo242306);
const smo242308 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo242308.setAttribute('id', 'smo242308');
const smo242309 = new VF.Annotation('лo');
smo242309.setAttribute('id', 'smo242309');
smo242309.setFont('Merriweather', 12.1, 'normal');
smo242309.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242308.addModifier(smo242309);
smo242309.addClass('lyric lyric-0');
smo242327v0ar.push(smo242308);
const smo242310 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo242310.setAttribute('id', 'smo242310');
const smo242311 = new VF.Annotation('-');
smo242311.setAttribute('id', 'smo242311');
smo242311.setFont('Merriweather', 12.1, 'normal');
smo242311.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242310.addModifier(smo242311);
smo242311.addClass('lyric lyric-0 lyric-hyphen');
smo242327v0ar.push(smo242310);
smo242327v0.addTickables(smo242327v0ar)
fmtsmo24232724.joinVoices([smo242327v0]);
const fmtsmo24332024 = new VF.Formatter();
//
// voices and notes for stave 1 24
const smo243320v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243320v0ar = [];
const smo243300 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo243300.setAttribute('id', 'smo243300');
smo243320v0ar.push(smo243300);
const smo243301 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo243301.setAttribute('id', 'smo243301');
const smo243302 = new VF.Ornament('mordent_inverted');
smo243301.addModifier(smo243302, 0);
smo243320v0ar.push(smo243301);
const smo243303 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
smo243303.setAttribute('id', 'smo243303');
const smo2433030acc = new VF.Accidental('#');
smo243303.addModifier(smo2433030acc, 0);
smo243320v0ar.push(smo243303);
const smo243304 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo243304.setAttribute('id', 'smo243304');
smo243320v0ar.push(smo243304);
smo243320v0.addTickables(smo243320v0ar)
fmtsmo24332024.joinVoices([smo243320v0]);
const fmtsmo24430624 = new VF.Formatter();
//
// voices and notes for stave 2 24
const smo244306v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244306v0ar = [];
const smo244290 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo244290.setAttribute('id', 'smo244290');
smo244306v0ar.push(smo244290);
smo244306v0.addTickables(smo244306v0ar)
fmtsmo24430624.joinVoices([smo244306v0]);
const fmtsmo24525824 = new VF.Formatter();
//
// voices and notes for stave 3 24
const smo245258v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo245258v0ar = [];
const smo245239 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo245239.setAttribute('id', 'smo245239');
smo245258v0ar.push(smo245239);
const smo245240 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo245240.setAttribute('id', 'smo245240');
smo245258v0ar.push(smo245240);
const smo245241 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo245241.setAttribute('id', 'smo245241');
smo245258v0ar.push(smo245241);
const smo245242 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo245242.setAttribute('id', 'smo245242');
smo245258v0ar.push(smo245242);
smo245258v0.addTickables(smo245258v0ar)
fmtsmo24525824.joinVoices([smo245258v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
const dirsmo252223 = smo242300.getStemDirection();
smo242300.setStemDirection(dirsmo252223);
smo242302.setStemDirection(dirsmo252223);
smo242304.setStemDirection(dirsmo252223);
smo242306.setStemDirection(dirsmo252223);
const smo252223 = new VF.Beam([smo242300,smo242302,smo242304,smo242306]);
 
// formatting measures in staff group smo245740
fmtsmo24232724.format([smo242327v0,smo243320v0,smo244306v0,smo245258v0], 237);
const stavesmo242327 = new VF.Stave(932, 1423, 251);
stavesmo242327.setAttribute('id', 'stavesmo242327');
stavesmo242327.setBegBarType(VF.Barline.type.NONE);
stavesmo242327.setContext(context);
stavesmo242327.draw();
smo242327v0.draw(context, stavesmo242327);
smo252223.setContext(context);
smo252223.draw();
const stavesmo243320 = new VF.Stave(932, 1534, 251);
stavesmo243320.setAttribute('id', 'stavesmo243320');
stavesmo243320.setBegBarType(VF.Barline.type.NONE);
stavesmo243320.setContext(context);
stavesmo243320.draw();
smo243320v0.draw(context, stavesmo243320);
const stavesmo244306 = new VF.Stave(932, 1617, 251);
stavesmo244306.setAttribute('id', 'stavesmo244306');
stavesmo244306.setBegBarType(VF.Barline.type.NONE);
stavesmo244306.setContext(context);
stavesmo244306.draw();
smo244306v0.draw(context, stavesmo244306);
const stavesmo245258 = new VF.Stave(932, 1711, 251);
stavesmo245258.setAttribute('id', 'stavesmo245258');
stavesmo245258.setBegBarType(VF.Barline.type.NONE);
stavesmo245258.setContext(context);
stavesmo245258.draw();
smo245258v0.draw(context, stavesmo245258);
const fmtsmo24234725 = new VF.Formatter();
//
// voices and notes for stave 0 25
const smo242347v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242347v0ar = [];
const smo242328 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo242328.setAttribute('id', 'smo242328');
const smo242329 = new VF.Annotation('вей');
smo242329.setAttribute('id', 'smo242329');
smo242329.setFont('Merriweather', 12.1, 'normal');
smo242329.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242328.addModifier(smo242329);
smo242329.addClass('lyric lyric-0');
smo242347v0ar.push(smo242328);
const smo242330 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo242330.setAttribute('id', 'smo242330');
const smo242331 = new VF.Annotation('мой');
smo242331.setAttribute('id', 'smo242331');
smo242331.setFont('Merriweather', 12.1, 'normal');
smo242331.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242330.addModifier(smo242331);
smo242331.addClass('lyric lyric-0');
smo242347v0ar.push(smo242330);
smo242347v0.addTickables(smo242347v0ar)
fmtsmo24234725.joinVoices([smo242347v0]);
const fmtsmo24334125 = new VF.Formatter();
//
// voices and notes for stave 1 25
const smo243341v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243341v0ar = [];
const smo243321 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo243321.setAttribute('id', 'smo243321');
smo243341v0ar.push(smo243321);
const smo243322 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo243322.setAttribute('id', 'smo243322');
const smo243323 = new VF.Ornament('mordent_inverted');
smo243322.addModifier(smo243323, 0);
smo243341v0ar.push(smo243322);
const smo243324 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo243324.setAttribute('id', 'smo243324');
smo243341v0ar.push(smo243324);
const smo243325 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo243325.setAttribute('id', 'smo243325');
smo243341v0ar.push(smo243325);
smo243341v0.addTickables(smo243341v0ar)
fmtsmo24334125.joinVoices([smo243341v0]);
const fmtsmo24432325 = new VF.Formatter();
//
// voices and notes for stave 2 25
const smo244323v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244323v0ar = [];
const smo244307 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo244307.setAttribute('id', 'smo244307');
smo244323v0ar.push(smo244307);
smo244323v0.addTickables(smo244323v0ar)
fmtsmo24432325.joinVoices([smo244323v0]);
const fmtsmo24527625 = new VF.Formatter();
//
// voices and notes for stave 3 25
const smo245276v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo245276v0ar = [];
const smo245259 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo245259.setAttribute('id', 'smo245259');
smo245276v0ar.push(smo245259);
const smo245260 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo245260.setAttribute('id', 'smo245260');
smo245276v0ar.push(smo245260);
smo245276v0.addTickables(smo245276v0ar)
fmtsmo24527625.joinVoices([smo245276v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
 
// formatting measures in staff group smo245740
fmtsmo24234725.format([smo242347v0,smo243341v0,smo244323v0,smo245276v0], 177);
const stavesmo242347 = new VF.Stave(1183, 1423, 191);
stavesmo242347.setAttribute('id', 'stavesmo242347');
stavesmo242347.setBegBarType(VF.Barline.type.NONE);
stavesmo242347.setContext(context);
stavesmo242347.draw();
smo242347v0.draw(context, stavesmo242347);
const stavesmo243341 = new VF.Stave(1183, 1534, 191);
stavesmo243341.setAttribute('id', 'stavesmo243341');
stavesmo243341.setBegBarType(VF.Barline.type.NONE);
stavesmo243341.setContext(context);
stavesmo243341.draw();
smo243341v0.draw(context, stavesmo243341);
const stavesmo244323 = new VF.Stave(1183, 1617, 191);
stavesmo244323.setAttribute('id', 'stavesmo244323');
stavesmo244323.setBegBarType(VF.Barline.type.NONE);
stavesmo244323.setContext(context);
stavesmo244323.draw();
smo244323v0.draw(context, stavesmo244323);
const stavesmo245276 = new VF.Stave(1183, 1711, 191);
stavesmo245276.setAttribute('id', 'stavesmo245276');
stavesmo245276.setBegBarType(VF.Barline.type.NONE);
stavesmo245276.setContext(context);
stavesmo245276.draw();
smo245276v0.draw(context, stavesmo245276);
const rightsmo245740stavesmo2423473 = new VF.StaveConnector(stavesmo242347, stavesmo245276).setType(0);
rightsmo245740stavesmo2423473.setContext(context).draw();
// modifier from 0-18-0-0 to 0-18-0-1
const smo253076 = new VF.Curve(smo242159, smo242161, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":45},{"x":0,"y":45}],"invert":false,"position":2,"position_end":1}'));
smo253076.setContext(context).draw();
// modifier from 0-22-0-0 to 0-23-0-0
const smo253077 = new VF.TextBracket({ start: smo242249, stop: smo242279, text: 'ritard', position: 1 });
smo253077.setLine(1).setContext(context).draw();
// modifier from 2-24-0-0 to 2-25-0-0
const smo253078 = new VF.StaveTie({ first_note: smo244290, last_note: smo244307, 
          firstNote: smo244290, lastNote: smo244307, first_indices: [0], last_indices: [0]});
smo253078.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo241944').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo241946').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo241964').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo241966').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo241968').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo241986').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo242008').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo242027').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo242029').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo242031').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo242049').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo242051').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo242053').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo242071').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo242073').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo242075').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo242077').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo242079').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo242097').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo242116').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo242120').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo242138').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo242140').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo242142').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo242160').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo242163').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo242182').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo242184').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo242203').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo242205').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo242208').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo242210').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo242228').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo242230').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo242232').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo242250').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo242252').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo242254').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo242258').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo242260').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo242262').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo242280').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo242299').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo242301').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo242303').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo242305').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo242307').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo242309').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo242311').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo242329').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo242331').setAttributeNS('', 'transform', 'translate(0 15)');
}