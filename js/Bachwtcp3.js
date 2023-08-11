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
const fmtsmo6172546 = new VF.Formatter();
//
// voices and notes for stave 0 46
const smo61725v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61725v0ar = [];
const smo61686 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo61686'] = smo61686;
smo61686.setAttribute('id', 'smo61686');
smo61725v0ar.push(smo61686);
const smo61687 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo61687'] = smo61687;
smo61687.setAttribute('id', 'smo61687');
smo61725v0ar.push(smo61687);
const smo61688 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo61688'] = smo61688;
smo61688.setAttribute('id', 'smo61688');
smo61725v0ar.push(smo61688);
const smo61689 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo61689'] = smo61689;
smo61689.setAttribute('id', 'smo61689');
smo61725v0ar.push(smo61689);
const smo61690 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/4/n"]}'))
noteHash['smo61690'] = smo61690;
smo61690.setAttribute('id', 'smo61690');
smo61725v0ar.push(smo61690);
const smo61691 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo61691'] = smo61691;
smo61691.setAttribute('id', 'smo61691');
smo61725v0ar.push(smo61691);
const smo61692 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo61692'] = smo61692;
smo61692.setAttribute('id', 'smo61692');
smo61725v0ar.push(smo61692);
const smo61693 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo61693'] = smo61693;
smo61693.setAttribute('id', 'smo61693');
smo61725v0ar.push(smo61693);
const smo61694 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo61694'] = smo61694;
smo61694.setAttribute('id', 'smo61694');
const smo616940acc = new VF.Accidental('#');
smo61694.addModifier(smo616940acc, 0);
smo61725v0ar.push(smo61694);
const smo61695 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/4/n"]}'))
noteHash['smo61695'] = smo61695;
smo61695.setAttribute('id', 'smo61695');
smo61725v0ar.push(smo61695);
const smo61696 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo61696'] = smo61696;
smo61696.setAttribute('id', 'smo61696');
smo61725v0ar.push(smo61696);
const smo61697 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo61697'] = smo61697;
smo61697.setAttribute('id', 'smo61697');
smo61725v0ar.push(smo61697);
const smo61698 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo61698'] = smo61698;
smo61698.setAttribute('id', 'smo61698');
smo61725v0ar.push(smo61698);
const smo61699 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo61699'] = smo61699;
smo61699.setAttribute('id', 'smo61699');
smo61725v0ar.push(smo61699);
smo61725v0.addTickables(smo61725v0ar)
fmtsmo6172546.joinVoices([smo61725v0]);
const smo61725v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61725v1ar = [];
const smo61700 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo61700'] = smo61700;
smo61700.setAttribute('id', 'smo61700');
smo61700.setStyle({ fillStyle: "#115511" });
smo61725v1ar.push(smo61700);
const smo61701 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo61701'] = smo61701;
smo61701.setAttribute('id', 'smo61701');
smo61701.setStyle({ fillStyle: "#115511" });
smo61725v1ar.push(smo61701);
const smo61702 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo61702'] = smo61702;
smo61702.setAttribute('id', 'smo61702');
smo61702.setStyle({ fillStyle: "#115511" });
smo61725v1ar.push(smo61702);
const smo61703 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/4/n"]}'))
noteHash['smo61703'] = smo61703;
smo61703.setAttribute('id', 'smo61703');
smo61703.setStyle({ fillStyle: "#115511" });
const smo617030acc = new VF.Accidental('#');
smo61703.addModifier(smo617030acc, 0);
smo61725v1ar.push(smo61703);
const smo61704 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo61704'] = smo61704;
smo61704.setAttribute('id', 'smo61704');
smo61704.setStyle({ fillStyle: "#115511" });
const smo617040acc = new VF.Accidental('#');
smo61704.addModifier(smo617040acc, 0);
smo61725v1ar.push(smo61704);
const smo61705 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo61705'] = smo61705;
smo61705.setAttribute('id', 'smo61705');
smo61705.setStyle({ fillStyle: "#115511" });
const smo617050acc = new VF.Accidental('n');
smo61705.addModifier(smo617050acc, 0);
smo61725v1ar.push(smo61705);
const smo61706 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo61706'] = smo61706;
smo61706.setAttribute('id', 'smo61706');
smo61706.setStyle({ fillStyle: "#115511" });
smo61725v1ar.push(smo61706);
const smo61707 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo61707'] = smo61707;
smo61707.setAttribute('id', 'smo61707');
smo61707.setStyle({ fillStyle: "#115511" });
smo61725v1ar.push(smo61707);
const smo61708 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo61708'] = smo61708;
smo61708.setAttribute('id', 'smo61708');
smo61708.setStyle({ fillStyle: "#115511" });
smo61725v1ar.push(smo61708);
const smo61709 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo61709'] = smo61709;
smo61709.setAttribute('id', 'smo61709');
smo61709.setStyle({ fillStyle: "#115511" });
smo61725v1ar.push(smo61709);
const smo61710 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo61710'] = smo61710;
smo61710.setAttribute('id', 'smo61710');
smo61710.setStyle({ fillStyle: "#115511" });
smo61725v1ar.push(smo61710);
const smo61711 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/4/n"]}'))
noteHash['smo61711'] = smo61711;
smo61711.setAttribute('id', 'smo61711');
smo61711.setStyle({ fillStyle: "#115511" });
smo61725v1ar.push(smo61711);
smo61725v1.addTickables(smo61725v1ar)
fmtsmo6172546.joinVoices([smo61725v1]);
const fmtsmo6677846 = new VF.Formatter();
//
// voices and notes for stave 1 46
const smo66778v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66778v0ar = [];
const smo66750 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo66750'] = smo66750;
smo66750.setAttribute('id', 'smo66750');
smo66778v0ar.push(smo66750);
const smo66751 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo66751'] = smo66751;
smo66751.setAttribute('id', 'smo66751');
smo66778v0ar.push(smo66751);
const smo66752 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo66752'] = smo66752;
smo66752.setAttribute('id', 'smo66752');
const smo667520acc = new VF.Accidental('#');
smo66752.addModifier(smo667520acc, 0);
smo66778v0ar.push(smo66752);
const smo66753 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/3/n"]}'))
noteHash['smo66753'] = smo66753;
smo66753.setAttribute('id', 'smo66753');
const smo667530acc = new VF.Accidental('#');
smo66753.addModifier(smo667530acc, 0);
smo66778v0ar.push(smo66753);
const smo66754 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo66754'] = smo66754;
smo66754.setAttribute('id', 'smo66754');
smo66754.addModifier(new VF.Dot(), 0);
smo66778v0ar.push(smo66754);
const smo66755 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo66755'] = smo66755;
smo66755.setAttribute('id', 'smo66755');
smo66778v0ar.push(smo66755);
const smo66756 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo66756'] = smo66756;
smo66756.setAttribute('id', 'smo66756');
smo66778v0ar.push(smo66756);
const smo66757 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/3/n"]}'))
noteHash['smo66757'] = smo66757;
smo66757.setAttribute('id', 'smo66757');
smo66778v0ar.push(smo66757);
const smo66758 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo66758'] = smo66758;
smo66758.setAttribute('id', 'smo66758');
smo66778v0ar.push(smo66758);
smo66778v0.addTickables(smo66778v0ar)
fmtsmo6677846.joinVoices([smo66778v0]);
const smo66778v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66778v1ar = [];
const smo66759 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/2/n"]}'))
noteHash['smo66759'] = smo66759;
smo66759.setAttribute('id', 'smo66759');
smo66759.setStyle({ fillStyle: "#115511" });
smo66778v1ar.push(smo66759);
const smo66760 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo66760'] = smo66760;
smo66760.setAttribute('id', 'smo66760');
smo66760.setStyle({ fillStyle: "#115511" });
smo66778v1ar.push(smo66760);
const smo66761 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo66761'] = smo66761;
smo66761.setAttribute('id', 'smo66761');
smo66761.setStyle({ fillStyle: "#115511" });
smo66778v1ar.push(smo66761);
const smo66762 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo66762'] = smo66762;
smo66762.setAttribute('id', 'smo66762');
smo66762.setStyle({ fillStyle: "#115511" });
smo66778v1ar.push(smo66762);
const smo66763 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo66763'] = smo66763;
smo66763.setAttribute('id', 'smo66763');
smo66763.setStyle({ fillStyle: "#115511" });
const smo667630acc = new VF.Accidental('n');
smo66763.addModifier(smo667630acc, 0);
smo66778v1ar.push(smo66763);
const smo66764 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo66764'] = smo66764;
smo66764.setAttribute('id', 'smo66764');
smo66764.setStyle({ fillStyle: "#115511" });
smo66778v1ar.push(smo66764);
smo66778v1.addTickables(smo66778v1ar)
fmtsmo6677846.joinVoices([smo66778v1]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo70172 = smo61686.getStemDirection();
smo61686.setStemDirection(dirsmo70172);
smo61687.setStemDirection(dirsmo70172);
smo61688.setStemDirection(dirsmo70172);
const smo70172 = new VF.Beam([smo61686,smo61687,smo61688]);
const dirsmo70173 = smo61689.getStemDirection();
smo61689.setStemDirection(dirsmo70173);
smo61690.setStemDirection(dirsmo70173);
smo61691.setStemDirection(dirsmo70173);
smo61692.setStemDirection(dirsmo70173);
const smo70173 = new VF.Beam([smo61689,smo61690,smo61691,smo61692]);
const dirsmo70174 = smo61693.getStemDirection();
smo61693.setStemDirection(dirsmo70174);
smo61694.setStemDirection(dirsmo70174);
smo61695.setStemDirection(dirsmo70174);
smo61696.setStemDirection(dirsmo70174);
const smo70174 = new VF.Beam([smo61693,smo61694,smo61695,smo61696]);
const dirsmo70175 = smo61697.getStemDirection();
smo61697.setStemDirection(dirsmo70175);
smo61698.setStemDirection(dirsmo70175);
smo61699.setStemDirection(dirsmo70175);
const smo70175 = new VF.Beam([smo61697,smo61698,smo61699]);
const dirsmo70176 = smo61700.getStemDirection();
smo61700.setStemDirection(dirsmo70176);
smo61701.setStemDirection(dirsmo70176);
smo61702.setStemDirection(dirsmo70176);
smo61703.setStemDirection(dirsmo70176);
const smo70176 = new VF.Beam([smo61700,smo61701,smo61702,smo61703]);
const dirsmo70177 = smo61704.getStemDirection();
smo61704.setStemDirection(dirsmo70177);
smo61705.setStemDirection(dirsmo70177);
const smo70177 = new VF.Beam([smo61704,smo61705]);
const dirsmo70178 = smo61706.getStemDirection();
smo61706.setStemDirection(dirsmo70178);
smo61707.setStemDirection(dirsmo70178);
const smo70178 = new VF.Beam([smo61706,smo61707]);
const dirsmo70179 = smo61708.getStemDirection();
smo61708.setStemDirection(dirsmo70179);
smo61709.setStemDirection(dirsmo70179);
smo61710.setStemDirection(dirsmo70179);
smo61711.setStemDirection(dirsmo70179);
const smo70179 = new VF.Beam([smo61708,smo61709,smo61710,smo61711]);
const dirsmo70182 = smo66751.getStemDirection();
smo66751.setStemDirection(dirsmo70182);
smo66752.setStemDirection(dirsmo70182);
smo66753.setStemDirection(dirsmo70182);
const smo70182 = new VF.Beam([smo66751,smo66752,smo66753]);
const dirsmo70183 = smo66754.getStemDirection();
smo66754.setStemDirection(dirsmo70183);
smo66755.setStemDirection(dirsmo70183);
smo66756.setStemDirection(dirsmo70183);
const smo70183 = new VF.Beam([smo66754,smo66755,smo66756]);
const dirsmo70184 = smo66757.getStemDirection();
smo66757.setStemDirection(dirsmo70184);
smo66758.setStemDirection(dirsmo70184);
const smo70184 = new VF.Beam([smo66757,smo66758]);
const dirsmo70185 = smo66761.getStemDirection();
smo66761.setStemDirection(dirsmo70185);
smo66762.setStemDirection(dirsmo70185);
const smo70185 = new VF.Beam([smo66761,smo66762]);
 
// formatting measures in staff group smo59060
fmtsmo6172546.format([smo61725v0,smo61725v1,smo66778v0,smo66778v1], 518);
const stavesmo61725 = new VF.Stave(90, 304, 576);
stavesmo61725.setAttribute('id', 'stavesmo61725');
stavesmo61725.setBegBarType(1);
stavesmo61725.addClef('treble');
stavesmo61725.setContext(context);
stavesmo61725.draw();
smo61725v0.draw(context, stavesmo61725);
smo61725v1.draw(context, stavesmo61725);
smo70172.setContext(context);
smo70172.draw();
smo70173.setContext(context);
smo70173.draw();
smo70174.setContext(context);
smo70174.draw();
smo70175.setContext(context);
smo70175.draw();
smo70176.setContext(context);
smo70176.draw();
smo70177.setContext(context);
smo70177.draw();
smo70178.setContext(context);
smo70178.draw();
smo70179.setContext(context);
smo70179.draw();
const stavesmo66778 = new VF.Stave(90, 438, 576);
stavesmo66778.setAttribute('id', 'stavesmo66778');
stavesmo66778.setBegBarType(1);
stavesmo66778.addClef('bass');
stavesmo66778.setContext(context);
stavesmo66778.draw();
smo66778v0.draw(context, stavesmo66778);
smo66778v1.draw(context, stavesmo66778);
smo70182.setContext(context);
smo70182.draw();
smo70183.setContext(context);
smo70183.draw();
smo70184.setContext(context);
smo70184.draw();
smo70185.setContext(context);
smo70185.draw();
const leftsmo59060stavesmo617251 = new VF.StaveConnector(stavesmo61725, stavesmo66778).setType(3);
leftsmo59060stavesmo617251.setContext(context).draw();
const fmtsmo6176047 = new VF.Formatter();
//
// voices and notes for stave 0 47
const smo61760v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61760v0ar = [];
const smo61726 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo61726'] = smo61726;
smo61726.setAttribute('id', 'smo61726');
smo61760v0ar.push(smo61726);
const smo61727 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo61727'] = smo61727;
smo61727.setAttribute('id', 'smo61727');
smo61760v0ar.push(smo61727);
const smo61728 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo61728'] = smo61728;
smo61728.setAttribute('id', 'smo61728');
smo61760v0ar.push(smo61728);
const smo61729 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo61729'] = smo61729;
smo61729.setAttribute('id', 'smo61729');
smo61760v0ar.push(smo61729);
const smo61730 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo61730'] = smo61730;
smo61730.setAttribute('id', 'smo61730');
smo61760v0ar.push(smo61730);
const smo61731 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo61731'] = smo61731;
smo61731.setAttribute('id', 'smo61731');
smo61760v0ar.push(smo61731);
const smo61732 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo61732'] = smo61732;
smo61732.setAttribute('id', 'smo61732');
smo61760v0ar.push(smo61732);
const smo61733 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo61733'] = smo61733;
smo61733.setAttribute('id', 'smo61733');
smo61733.addModifier(new VF.Dot(), 0);
const smo61734 = new VF.Ornament('mordent_inverted');
smo61733.addModifier(smo61734, 0);
smo61760v0ar.push(smo61733);
const smo61735 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo61735'] = smo61735;
smo61735.setAttribute('id', 'smo61735');
smo61760v0ar.push(smo61735);
smo61760v0.addTickables(smo61760v0ar)
fmtsmo6176047.joinVoices([smo61760v0]);
const smo61760v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61760v1ar = [];
const smo61736 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo61736'] = smo61736;
smo61736.setAttribute('id', 'smo61736');
smo61736.setStyle({ fillStyle: "#115511" });
smo61760v1ar.push(smo61736);
const smo61737 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/4/n"]}'))
noteHash['smo61737'] = smo61737;
smo61737.setAttribute('id', 'smo61737');
smo61737.setStyle({ fillStyle: "#115511" });
const smo617370acc = new VF.Accidental('#');
smo61737.addModifier(smo617370acc, 0);
smo61760v1ar.push(smo61737);
const smo61738 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo61738'] = smo61738;
smo61738.setAttribute('id', 'smo61738');
smo61738.setStyle({ fillStyle: "#115511" });
smo61760v1ar.push(smo61738);
const smo61739 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo61739'] = smo61739;
smo61739.setAttribute('id', 'smo61739');
smo61739.setStyle({ fillStyle: "#115511" });
smo61760v1ar.push(smo61739);
const smo61740 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/4/n"]}'))
noteHash['smo61740'] = smo61740;
smo61740.setAttribute('id', 'smo61740');
smo61740.setStyle({ fillStyle: "#115511" });
smo61760v1ar.push(smo61740);
const smo61741 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo61741'] = smo61741;
smo61741.setAttribute('id', 'smo61741');
smo61741.setStyle({ fillStyle: "#115511" });
const smo617410acc = new VF.Accidental('#');
smo61741.addModifier(smo617410acc, 0);
smo61760v1ar.push(smo61741);
const smo61742 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/4/n"]}'))
noteHash['smo61742'] = smo61742;
smo61742.setAttribute('id', 'smo61742');
smo61742.setStyle({ fillStyle: "#115511" });
smo61760v1ar.push(smo61742);
const smo61743 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo61743'] = smo61743;
smo61743.setAttribute('id', 'smo61743');
smo61743.setStyle({ fillStyle: "#115511" });
smo61760v1ar.push(smo61743);
const smo61744 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo61744'] = smo61744;
smo61744.setAttribute('id', 'smo61744');
smo61744.setStyle({ fillStyle: "#115511" });
smo61760v1ar.push(smo61744);
const smo61745 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["gn/4/r"]}'))
noteHash['smo61745'] = smo61745;
smo61745.setAttribute('id', 'smo61745');
smo61745.setStyle({ fillStyle: "#115511" });
smo61760v1ar.push(smo61745);
const smo61746 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["en/4/r"]}'))
noteHash['smo61746'] = smo61746;
smo61746.setAttribute('id', 'smo61746');
smo61746.setStyle({ fillStyle: "#115511" });
smo61760v1ar.push(smo61746);
smo61760v1.addTickables(smo61760v1ar)
fmtsmo6176047.joinVoices([smo61760v1]);
const fmtsmo6680847 = new VF.Formatter();
//
// voices and notes for stave 1 47
const smo66808v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66808v0ar = [];
const smo66779 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo66779'] = smo66779;
smo66779.setAttribute('id', 'smo66779');
const smo667790acc = new VF.Accidental('#');
smo66779.addModifier(smo667790acc, 0);
smo66808v0ar.push(smo66779);
const smo66780 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo66780'] = smo66780;
smo66780.setAttribute('id', 'smo66780');
smo66808v0ar.push(smo66780);
const smo66781 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo66781'] = smo66781;
smo66781.setAttribute('id', 'smo66781');
smo66808v0ar.push(smo66781);
const smo66782 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo66782'] = smo66782;
smo66782.setAttribute('id', 'smo66782');
smo66808v0ar.push(smo66782);
const smo66783 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo66783'] = smo66783;
smo66783.setAttribute('id', 'smo66783');
smo66808v0ar.push(smo66783);
const smo66784 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo66784'] = smo66784;
smo66784.setAttribute('id', 'smo66784');
smo66808v0ar.push(smo66784);
const smo66785 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/3/n"]}'))
noteHash['smo66785'] = smo66785;
smo66785.setAttribute('id', 'smo66785');
const smo667850acc = new VF.Accidental('#');
smo66785.addModifier(smo667850acc, 0);
smo66808v0ar.push(smo66785);
const smo66786 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo66786'] = smo66786;
smo66786.setAttribute('id', 'smo66786');
smo66808v0ar.push(smo66786);
const smo66787 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/3/n"]}'))
noteHash['smo66787'] = smo66787;
smo66787.setAttribute('id', 'smo66787');
smo66808v0ar.push(smo66787);
smo66808v0.addTickables(smo66808v0ar)
fmtsmo6680847.joinVoices([smo66808v0]);
const smo66808v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66808v1ar = [];
const smo66788 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo66788'] = smo66788;
smo66788.setAttribute('id', 'smo66788');
smo66788.setStyle({ fillStyle: "#115511" });
smo66808v1ar.push(smo66788);
const smo66789 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo66789'] = smo66789;
smo66789.setAttribute('id', 'smo66789');
smo66789.setStyle({ fillStyle: "#115511" });
smo66808v1ar.push(smo66789);
const smo66790 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo66790'] = smo66790;
smo66790.setAttribute('id', 'smo66790');
smo66790.setStyle({ fillStyle: "#115511" });
smo66808v1ar.push(smo66790);
const smo66791 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo66791'] = smo66791;
smo66791.setAttribute('id', 'smo66791');
smo66791.setStyle({ fillStyle: "#115511" });
const smo667910acc = new VF.Accidental('n');
smo66791.addModifier(smo667910acc, 0);
smo66808v1ar.push(smo66791);
const smo66792 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo66792'] = smo66792;
smo66792.setAttribute('id', 'smo66792');
smo66792.setStyle({ fillStyle: "#115511" });
smo66808v1ar.push(smo66792);
const smo66793 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo66793'] = smo66793;
smo66793.setAttribute('id', 'smo66793');
smo66793.setStyle({ fillStyle: "#115511" });
smo66808v1ar.push(smo66793);
const smo66794 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo66794'] = smo66794;
smo66794.setAttribute('id', 'smo66794');
smo66794.setStyle({ fillStyle: "#115511" });
smo66808v1ar.push(smo66794);
smo66808v1.addTickables(smo66808v1ar)
fmtsmo6680847.joinVoices([smo66808v1]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo70188 = smo61726.getStemDirection();
smo61726.setStemDirection(dirsmo70188);
smo61727.setStemDirection(dirsmo70188);
smo61728.setStemDirection(dirsmo70188);
smo61729.setStemDirection(dirsmo70188);
const smo70188 = new VF.Beam([smo61726,smo61727,smo61728,smo61729]);
const dirsmo70189 = smo61730.getStemDirection();
smo61730.setStemDirection(dirsmo70189);
smo61731.setStemDirection(dirsmo70189);
smo61732.setStemDirection(dirsmo70189);
const smo70189 = new VF.Beam([smo61730,smo61731,smo61732]);
const dirsmo70190 = smo61733.getStemDirection();
smo61733.setStemDirection(dirsmo70190);
smo61735.setStemDirection(dirsmo70190);
const smo70190 = new VF.Beam([smo61733,smo61735]);
const dirsmo70191 = smo61736.getStemDirection();
smo61736.setStemDirection(dirsmo70191);
smo61737.setStemDirection(dirsmo70191);
smo61738.setStemDirection(dirsmo70191);
smo61739.setStemDirection(dirsmo70191);
const smo70191 = new VF.Beam([smo61736,smo61737,smo61738,smo61739]);
const dirsmo70192 = smo61740.getStemDirection();
smo61740.setStemDirection(dirsmo70192);
smo61741.setStemDirection(dirsmo70192);
smo61742.setStemDirection(dirsmo70192);
smo61743.setStemDirection(dirsmo70192);
const smo70192 = new VF.Beam([smo61740,smo61741,smo61742,smo61743]);
const dirsmo70195 = smo66779.getStemDirection();
smo66779.setStemDirection(dirsmo70195);
smo66780.setStemDirection(dirsmo70195);
const smo70195 = new VF.Beam([smo66779,smo66780]);
const dirsmo70196 = smo66781.getStemDirection();
smo66781.setStemDirection(dirsmo70196);
smo66782.setStemDirection(dirsmo70196);
smo66783.setStemDirection(dirsmo70196);
smo66784.setStemDirection(dirsmo70196);
const smo70196 = new VF.Beam([smo66781,smo66782,smo66783,smo66784]);
const dirsmo70197 = smo66790.getStemDirection();
smo66790.setStemDirection(dirsmo70197);
smo66791.setStemDirection(dirsmo70197);
const smo70197 = new VF.Beam([smo66790,smo66791]);
const dirsmo70198 = smo66792.getStemDirection();
smo66792.setStemDirection(dirsmo70198);
smo66793.setStemDirection(dirsmo70198);
const smo70198 = new VF.Beam([smo66792,smo66793]);
 
// formatting measures in staff group smo59060
fmtsmo6176047.format([smo61760v0,smo61760v1,smo66808v0,smo66808v1], 419);
const stavesmo61760 = new VF.Stave(666, 304, 433);
stavesmo61760.setAttribute('id', 'stavesmo61760');
stavesmo61760.setBegBarType(VF.Barline.type.NONE);
stavesmo61760.setContext(context);
stavesmo61760.draw();
smo61760v0.draw(context, stavesmo61760);
smo61760v1.draw(context, stavesmo61760);
smo70188.setContext(context);
smo70188.draw();
smo70189.setContext(context);
smo70189.draw();
smo70190.setContext(context);
smo70190.draw();
smo70191.setContext(context);
smo70191.draw();
smo70192.setContext(context);
smo70192.draw();
const stavesmo66808 = new VF.Stave(666, 438, 433);
stavesmo66808.setAttribute('id', 'stavesmo66808');
stavesmo66808.setBegBarType(VF.Barline.type.NONE);
stavesmo66808.setContext(context);
stavesmo66808.draw();
smo66808v0.draw(context, stavesmo66808);
smo66808v1.draw(context, stavesmo66808);
smo70195.setContext(context);
smo70195.draw();
smo70196.setContext(context);
smo70196.draw();
smo70197.setContext(context);
smo70197.draw();
smo70198.setContext(context);
smo70198.draw();
const fmtsmo6179048 = new VF.Formatter();
//
// voices and notes for stave 0 48
const smo61790v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61790v0ar = [];
const smo61761 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo61761'] = smo61761;
smo61761.setAttribute('id', 'smo61761');
smo61790v0ar.push(smo61761);
const smo61762 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61762'] = smo61762;
smo61762.setAttribute('id', 'smo61762');
smo61790v0ar.push(smo61762);
const smo61763 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61763'] = smo61763;
smo61763.setAttribute('id', 'smo61763');
smo61790v0ar.push(smo61763);
smo61790v0.addTickables(smo61790v0ar)
fmtsmo6179048.joinVoices([smo61790v0]);
const smo61790v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61790v1ar = [];
const smo61764 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/3/r"]}'))
noteHash['smo61764'] = smo61764;
smo61764.setAttribute('id', 'smo61764');
smo61764.setStyle({ fillStyle: "#115511" });
smo61790v1ar.push(smo61764);
const smo61765 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo61765'] = smo61765;
smo61765.setAttribute('id', 'smo61765');
smo61765.setStyle({ fillStyle: "#115511" });
smo61790v1ar.push(smo61765);
const smo61766 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo61766'] = smo61766;
smo61766.setAttribute('id', 'smo61766');
smo61766.setStyle({ fillStyle: "#115511" });
smo61790v1ar.push(smo61766);
const smo61767 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo61767'] = smo61767;
smo61767.setAttribute('id', 'smo61767');
smo61767.setStyle({ fillStyle: "#115511" });
smo61790v1ar.push(smo61767);
const smo61768 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo61768'] = smo61768;
smo61768.setAttribute('id', 'smo61768');
smo61768.setStyle({ fillStyle: "#115511" });
smo61768.addModifier(new VF.Dot(), 0);
smo61790v1ar.push(smo61768);
const smo61769 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo61769'] = smo61769;
smo61769.setAttribute('id', 'smo61769');
smo61769.setStyle({ fillStyle: "#115511" });
smo61790v1ar.push(smo61769);
const smo61770 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo61770'] = smo61770;
smo61770.setAttribute('id', 'smo61770');
smo61770.setStyle({ fillStyle: "#115511" });
smo61790v1ar.push(smo61770);
const smo61771 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo61771'] = smo61771;
smo61771.setAttribute('id', 'smo61771');
smo61771.setStyle({ fillStyle: "#115511" });
smo61790v1ar.push(smo61771);
const smo61772 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo61772'] = smo61772;
smo61772.setAttribute('id', 'smo61772');
smo61772.setStyle({ fillStyle: "#115511" });
smo61790v1ar.push(smo61772);
smo61790v1.addTickables(smo61790v1ar)
fmtsmo6179048.joinVoices([smo61790v1]);
const smo61790v2 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61790v2ar = [];
const smo61773 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61773'] = smo61773;
smo61773.setAttribute('id', 'smo61773');
smo61773.setStyle({ fillStyle: '#aaaaaa7f' });
smo61773.addModifier(new VF.Dot(), 0);
smo61790v2ar.push(smo61773);
const smo61774 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo61774'] = smo61774;
smo61774.setAttribute('id', 'smo61774');
smo61774.setStyle({ fillStyle: "#115511" });
smo61774.addModifier(new VF.Dot(), 0);
smo61790v2ar.push(smo61774);
const smo61775 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo61775'] = smo61775;
smo61775.setAttribute('id', 'smo61775');
smo61775.setStyle({ fillStyle: "#115511" });
smo61790v2ar.push(smo61775);
const smo61776 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo61776'] = smo61776;
smo61776.setAttribute('id', 'smo61776');
smo61776.setStyle({ fillStyle: "#115511" });
smo61790v2ar.push(smo61776);
smo61790v2.addTickables(smo61790v2ar)
fmtsmo6179048.joinVoices([smo61790v2]);
const fmtsmo6683148 = new VF.Formatter();
//
// voices and notes for stave 1 48
const smo66831v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66831v0ar = [];
const smo66809 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo66809'] = smo66809;
smo66809.setAttribute('id', 'smo66809');
smo66831v0ar.push(smo66809);
const smo66810 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo66810'] = smo66810;
smo66810.setAttribute('id', 'smo66810');
smo66831v0ar.push(smo66810);
const smo66811 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo66811'] = smo66811;
smo66811.setAttribute('id', 'smo66811');
smo66831v0ar.push(smo66811);
const smo66812 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo66812'] = smo66812;
smo66812.setAttribute('id', 'smo66812');
smo66831v0ar.push(smo66812);
const smo66813 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo66813'] = smo66813;
smo66813.setAttribute('id', 'smo66813');
smo66831v0ar.push(smo66813);
const smo66814 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo66814'] = smo66814;
smo66814.setAttribute('id', 'smo66814');
smo66814.setStyle({ fillStyle: '#aaaaaa7f' });
smo66831v0ar.push(smo66814);
smo66831v0.addTickables(smo66831v0ar)
fmtsmo6683148.joinVoices([smo66831v0]);
const smo66831v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66831v1ar = [];
const smo66815 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
noteHash['smo66815'] = smo66815;
smo66815.setAttribute('id', 'smo66815');
smo66815.setStyle({ fillStyle: "#115511" });
smo66831v1ar.push(smo66815);
const smo66816 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo66816'] = smo66816;
smo66816.setAttribute('id', 'smo66816');
smo66816.setStyle({ fillStyle: "#115511" });
smo66831v1ar.push(smo66816);
const smo66817 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo66817'] = smo66817;
smo66817.setAttribute('id', 'smo66817');
smo66817.setStyle({ fillStyle: "#115511" });
smo66831v1ar.push(smo66817);
smo66831v1.addTickables(smo66831v1ar)
fmtsmo6683148.joinVoices([smo66831v1]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo70201 = smo61765.getStemDirection();
smo61765.setStemDirection(dirsmo70201);
smo61766.setStemDirection(dirsmo70201);
smo61767.setStemDirection(dirsmo70201);
const smo70201 = new VF.Beam([smo61765,smo61766,smo61767]);
const dirsmo70202 = smo61768.getStemDirection();
smo61768.setStemDirection(dirsmo70202);
smo61769.setStemDirection(dirsmo70202);
smo61770.setStemDirection(dirsmo70202);
const smo70202 = new VF.Beam([smo61768,smo61769,smo61770]);
const dirsmo70203 = smo61771.getStemDirection();
smo61771.setStemDirection(dirsmo70203);
smo61772.setStemDirection(dirsmo70203);
const smo70203 = new VF.Beam([smo61771,smo61772]);
const dirsmo70204 = smo61774.getStemDirection();
smo61774.setStemDirection(dirsmo70204);
smo61775.setStemDirection(dirsmo70204);
smo61776.setStemDirection(dirsmo70204);
const smo70204 = new VF.Beam([smo61774,smo61775,smo61776]);
const dirsmo70207 = smo66811.getStemDirection();
smo66811.setStemDirection(dirsmo70207);
smo66812.setStemDirection(dirsmo70207);
const smo70207 = new VF.Beam([smo66811,smo66812]);
 
// formatting measures in staff group smo59060
fmtsmo6179048.format([smo61790v0,smo61790v1,smo61790v2,smo66831v0,smo66831v1], 332);
const stavesmo61790 = new VF.Stave(1099, 304, 346);
stavesmo61790.setAttribute('id', 'stavesmo61790');
stavesmo61790.setBegBarType(VF.Barline.type.NONE);
stavesmo61790.setContext(context);
stavesmo61790.draw();
smo61790v0.draw(context, stavesmo61790);
smo61790v1.draw(context, stavesmo61790);
smo61790v2.draw(context, stavesmo61790);
smo70201.setContext(context);
smo70201.draw();
smo70202.setContext(context);
smo70202.draw();
smo70203.setContext(context);
smo70203.draw();
smo70204.setContext(context);
smo70204.draw();
const stavesmo66831 = new VF.Stave(1099, 438, 346);
stavesmo66831.setAttribute('id', 'stavesmo66831');
stavesmo66831.setBegBarType(VF.Barline.type.NONE);
stavesmo66831.setContext(context);
stavesmo66831.draw();
smo66831v0.draw(context, stavesmo66831);
smo66831v1.draw(context, stavesmo66831);
smo70207.setContext(context);
smo70207.draw();
const fmtsmo6181949 = new VF.Formatter();
//
// voices and notes for stave 0 49
const smo61819v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61819v0ar = [];
const smo61791 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61791'] = smo61791;
smo61791.setAttribute('id', 'smo61791');
smo61819v0ar.push(smo61791);
const smo61792 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61792'] = smo61792;
smo61792.setAttribute('id', 'smo61792');
smo61819v0ar.push(smo61792);
const smo61793 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo61793'] = smo61793;
smo61793.setAttribute('id', 'smo61793');
smo61819v0ar.push(smo61793);
const smo61794 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo61794'] = smo61794;
smo61794.setAttribute('id', 'smo61794');
smo61819v0ar.push(smo61794);
const smo61795 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo61795'] = smo61795;
smo61795.setAttribute('id', 'smo61795');
smo61819v0ar.push(smo61795);
smo61819v0.addTickables(smo61819v0ar)
fmtsmo6181949.joinVoices([smo61819v0]);
const smo61819v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61819v1ar = [];
const smo61796 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo61796'] = smo61796;
smo61796.setAttribute('id', 'smo61796');
smo61796.setStyle({ fillStyle: "#115511" });
smo61819v1ar.push(smo61796);
const smo61797 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo61797'] = smo61797;
smo61797.setAttribute('id', 'smo61797');
smo61797.setStyle({ fillStyle: "#115511" });
smo61819v1ar.push(smo61797);
const smo61798 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo61798'] = smo61798;
smo61798.setAttribute('id', 'smo61798');
smo61798.setStyle({ fillStyle: "#115511" });
smo61819v1ar.push(smo61798);
const smo61799 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo61799'] = smo61799;
smo61799.setAttribute('id', 'smo61799');
smo61799.setStyle({ fillStyle: "#115511" });
smo61819v1ar.push(smo61799);
const smo61800 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo61800'] = smo61800;
smo61800.setAttribute('id', 'smo61800');
smo61800.setStyle({ fillStyle: "#115511" });
smo61819v1ar.push(smo61800);
const smo61801 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo61801'] = smo61801;
smo61801.setAttribute('id', 'smo61801');
smo61801.setStyle({ fillStyle: "#115511" });
smo61819v1ar.push(smo61801);
const smo61802 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo61802'] = smo61802;
smo61802.setAttribute('id', 'smo61802');
smo61802.setStyle({ fillStyle: "#115511" });
smo61819v1ar.push(smo61802);
const smo61803 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo61803'] = smo61803;
smo61803.setAttribute('id', 'smo61803');
smo61803.setStyle({ fillStyle: "#115511" });
smo61819v1ar.push(smo61803);
const smo61804 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo61804'] = smo61804;
smo61804.setAttribute('id', 'smo61804');
smo61804.setStyle({ fillStyle: "#115511" });
const smo618040acc = new VF.Accidental('#');
smo61804.addModifier(smo618040acc, 0);
smo61819v1ar.push(smo61804);
const smo61805 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo61805'] = smo61805;
smo61805.setAttribute('id', 'smo61805');
smo61805.setStyle({ fillStyle: "#115511" });
smo61819v1ar.push(smo61805);
smo61819v1.addTickables(smo61819v1ar)
fmtsmo6181949.joinVoices([smo61819v1]);
const fmtsmo6686149 = new VF.Formatter();
//
// voices and notes for stave 1 49
const smo66861v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66861v0ar = [];
const smo66832 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo66832'] = smo66832;
smo66832.setAttribute('id', 'smo66832');
smo66861v0ar.push(smo66832);
const smo66833 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo66833'] = smo66833;
smo66833.setAttribute('id', 'smo66833');
smo66861v0ar.push(smo66833);
const smo66834 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo66834'] = smo66834;
smo66834.setAttribute('id', 'smo66834');
smo66861v0ar.push(smo66834);
const smo66835 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo66835'] = smo66835;
smo66835.setAttribute('id', 'smo66835');
smo66861v0ar.push(smo66835);
const smo66836 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo66836'] = smo66836;
smo66836.setAttribute('id', 'smo66836');
smo66861v0ar.push(smo66836);
const smo66837 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo66837'] = smo66837;
smo66837.setAttribute('id', 'smo66837');
smo66861v0ar.push(smo66837);
const smo66838 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo66838'] = smo66838;
smo66838.setAttribute('id', 'smo66838');
smo66861v0ar.push(smo66838);
smo66861v0.addTickables(smo66861v0ar)
fmtsmo6686149.joinVoices([smo66861v0]);
const smo66861v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66861v1ar = [];
const smo66839 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo66839'] = smo66839;
smo66839.setAttribute('id', 'smo66839');
smo66839.setStyle({ fillStyle: "#115511" });
smo66861v1ar.push(smo66839);
const smo66840 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
noteHash['smo66840'] = smo66840;
smo66840.setAttribute('id', 'smo66840');
smo66840.setStyle({ fillStyle: "#115511" });
smo66861v1ar.push(smo66840);
const smo66841 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
noteHash['smo66841'] = smo66841;
smo66841.setAttribute('id', 'smo66841');
smo66841.setStyle({ fillStyle: "#115511" });
smo66861v1ar.push(smo66841);
const smo66842 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/2/n"]}'))
noteHash['smo66842'] = smo66842;
smo66842.setAttribute('id', 'smo66842');
smo66842.setStyle({ fillStyle: "#115511" });
smo66861v1ar.push(smo66842);
const smo66843 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo66843'] = smo66843;
smo66843.setAttribute('id', 'smo66843');
smo66843.setStyle({ fillStyle: "#115511" });
smo66843.addModifier(new VF.Dot(), 0);
smo66861v1ar.push(smo66843);
const smo66844 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo66844'] = smo66844;
smo66844.setAttribute('id', 'smo66844');
smo66844.setStyle({ fillStyle: "#115511" });
smo66861v1ar.push(smo66844);
const smo66845 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo66845'] = smo66845;
smo66845.setAttribute('id', 'smo66845');
smo66845.setStyle({ fillStyle: "#115511" });
smo66861v1ar.push(smo66845);
const smo66846 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/2/n"]}'))
noteHash['smo66846'] = smo66846;
smo66846.setAttribute('id', 'smo66846');
smo66846.setStyle({ fillStyle: "#115511" });
smo66861v1ar.push(smo66846);
const smo66847 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo66847'] = smo66847;
smo66847.setAttribute('id', 'smo66847');
smo66847.setStyle({ fillStyle: "#115511" });
smo66861v1ar.push(smo66847);
smo66861v1.addTickables(smo66861v1ar)
fmtsmo6686149.joinVoices([smo66861v1]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo70210 = smo61793.getStemDirection();
smo61793.setStemDirection(dirsmo70210);
smo61794.setStemDirection(dirsmo70210);
smo61795.setStemDirection(dirsmo70210);
const smo70210 = new VF.Beam([smo61793,smo61794,smo61795]);
const dirsmo70211 = smo61796.getStemDirection();
smo61796.setStemDirection(dirsmo70211);
smo61797.setStemDirection(dirsmo70211);
const smo70211 = new VF.Beam([smo61796,smo61797]);
const dirsmo70212 = smo61798.getStemDirection();
smo61798.setStemDirection(dirsmo70212);
smo61799.setStemDirection(dirsmo70212);
smo61800.setStemDirection(dirsmo70212);
smo61801.setStemDirection(dirsmo70212);
const smo70212 = new VF.Beam([smo61798,smo61799,smo61800,smo61801]);
const dirsmo70213 = smo61802.getStemDirection();
smo61802.setStemDirection(dirsmo70213);
smo61803.setStemDirection(dirsmo70213);
smo61804.setStemDirection(dirsmo70213);
smo61805.setStemDirection(dirsmo70213);
const smo70213 = new VF.Beam([smo61802,smo61803,smo61804,smo61805]);
const dirsmo70216 = smo66832.getStemDirection();
smo66832.setStemDirection(dirsmo70216);
smo66833.setStemDirection(dirsmo70216);
const smo70216 = new VF.Beam([smo66832,smo66833]);
const dirsmo70217 = smo66834.getStemDirection();
smo66834.setStemDirection(dirsmo70217);
smo66835.setStemDirection(dirsmo70217);
const smo70217 = new VF.Beam([smo66834,smo66835]);
const dirsmo70218 = smo66836.getStemDirection();
smo66836.setStemDirection(dirsmo70218);
smo66837.setStemDirection(dirsmo70218);
const smo70218 = new VF.Beam([smo66836,smo66837]);
const dirsmo70219 = smo66840.getStemDirection();
smo66840.setStemDirection(dirsmo70219);
smo66841.setStemDirection(dirsmo70219);
smo66842.setStemDirection(dirsmo70219);
const smo70219 = new VF.Beam([smo66840,smo66841,smo66842]);
const dirsmo70220 = smo66843.getStemDirection();
smo66843.setStemDirection(dirsmo70220);
smo66844.setStemDirection(dirsmo70220);
smo66845.setStemDirection(dirsmo70220);
const smo70220 = new VF.Beam([smo66843,smo66844,smo66845]);
const dirsmo70221 = smo66846.getStemDirection();
smo66846.setStemDirection(dirsmo70221);
smo66847.setStemDirection(dirsmo70221);
const smo70221 = new VF.Beam([smo66846,smo66847]);
 
// formatting measures in staff group smo59060
fmtsmo6181949.format([smo61819v0,smo61819v1,smo66861v0,smo66861v1], 315);
const stavesmo61819 = new VF.Stave(1445, 304, 363);
stavesmo61819.setAttribute('id', 'stavesmo61819');
stavesmo61819.setBegBarType(VF.Barline.type.NONE);
stavesmo61819.setContext(context);
stavesmo61819.draw();
smo61819v0.draw(context, stavesmo61819);
smo61819v1.draw(context, stavesmo61819);
smo70210.setContext(context);
smo70210.draw();
smo70211.setContext(context);
smo70211.draw();
smo70212.setContext(context);
smo70212.draw();
smo70213.setContext(context);
smo70213.draw();
const stavesmo66861 = new VF.Stave(1445, 438, 363);
stavesmo66861.setAttribute('id', 'stavesmo66861');
stavesmo66861.setBegBarType(VF.Barline.type.NONE);
stavesmo66861.addClef('treble');
stavesmo66861.setContext(context);
stavesmo66861.draw();
smo66861v0.draw(context, stavesmo66861);
smo66861v1.draw(context, stavesmo66861);
smo70216.setContext(context);
smo70216.draw();
smo70217.setContext(context);
smo70217.draw();
smo70218.setContext(context);
smo70218.draw();
smo70219.setContext(context);
smo70219.draw();
smo70220.setContext(context);
smo70220.draw();
smo70221.setContext(context);
smo70221.draw();
const rightsmo59060stavesmo618191 = new VF.StaveConnector(stavesmo61819, stavesmo66861).setType(0);
rightsmo59060stavesmo618191.setContext(context).draw();
const fmtsmo6185150 = new VF.Formatter();
//
// voices and notes for stave 0 50
const smo61851v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61851v0ar = [];
const smo61820 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo61820'] = smo61820;
smo61820.setAttribute('id', 'smo61820');
smo61820.addModifier(new VF.Dot(), 0);
smo61851v0ar.push(smo61820);
const smo61821 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo61821'] = smo61821;
smo61821.setAttribute('id', 'smo61821');
smo61851v0ar.push(smo61821);
const smo61822 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo61822'] = smo61822;
smo61822.setAttribute('id', 'smo61822');
smo61851v0ar.push(smo61822);
const smo61823 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo61823'] = smo61823;
smo61823.setAttribute('id', 'smo61823');
smo61851v0ar.push(smo61823);
const smo61824 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo61824'] = smo61824;
smo61824.setAttribute('id', 'smo61824');
smo61851v0ar.push(smo61824);
const smo61825 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo61825'] = smo61825;
smo61825.setAttribute('id', 'smo61825');
smo61851v0ar.push(smo61825);
const smo61826 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo61826'] = smo61826;
smo61826.setAttribute('id', 'smo61826');
smo61851v0ar.push(smo61826);
const smo61827 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo61827'] = smo61827;
smo61827.setAttribute('id', 'smo61827');
smo61827.addModifier(new VF.Dot(), 0);
smo61851v0ar.push(smo61827);
const smo61828 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo61828'] = smo61828;
smo61828.setAttribute('id', 'smo61828');
smo61851v0ar.push(smo61828);
const smo61829 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo61829'] = smo61829;
smo61829.setAttribute('id', 'smo61829');
smo61851v0ar.push(smo61829);
smo61851v0.addTickables(smo61851v0ar)
fmtsmo6185150.joinVoices([smo61851v0]);
const smo61851v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61851v1ar = [];
const smo61830 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo61830'] = smo61830;
smo61830.setAttribute('id', 'smo61830');
smo61830.setStyle({ fillStyle: "#115511" });
smo61851v1ar.push(smo61830);
const smo61831 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo61831'] = smo61831;
smo61831.setAttribute('id', 'smo61831');
smo61831.setStyle({ fillStyle: "#115511" });
const smo618310acc = new VF.Accidental('#');
smo61831.addModifier(smo618310acc, 0);
smo61851v1ar.push(smo61831);
const smo61832 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/4/n"]}'))
noteHash['smo61832'] = smo61832;
smo61832.setAttribute('id', 'smo61832');
smo61832.setStyle({ fillStyle: "#115511" });
const smo618320acc = new VF.Accidental('#');
smo61832.addModifier(smo618320acc, 0);
smo61851v1ar.push(smo61832);
const smo61833 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo61833'] = smo61833;
smo61833.setAttribute('id', 'smo61833');
smo61833.setStyle({ fillStyle: "#115511" });
smo61851v1ar.push(smo61833);
const smo61834 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo61834'] = smo61834;
smo61834.setAttribute('id', 'smo61834');
smo61834.setStyle({ fillStyle: "#115511" });
smo61851v1ar.push(smo61834);
const smo61835 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo61835'] = smo61835;
smo61835.setAttribute('id', 'smo61835');
smo61835.setStyle({ fillStyle: "#115511" });
const smo618350acc = new VF.Accidental('n');
smo61835.addModifier(smo618350acc, 0);
smo61851v1ar.push(smo61835);
const smo61836 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo61836'] = smo61836;
smo61836.setAttribute('id', 'smo61836');
smo61836.setStyle({ fillStyle: "#115511" });
smo61851v1ar.push(smo61836);
const smo61837 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo61837'] = smo61837;
smo61837.setAttribute('id', 'smo61837');
smo61837.setStyle({ fillStyle: "#115511" });
smo61851v1ar.push(smo61837);
smo61851v1.addTickables(smo61851v1ar)
fmtsmo6185150.joinVoices([smo61851v1]);
const fmtsmo6689150 = new VF.Formatter();
//
// voices and notes for stave 1 50
const smo66891v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66891v0ar = [];
const smo66862 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo66862'] = smo66862;
smo66862.setAttribute('id', 'smo66862');
smo66891v0ar.push(smo66862);
const smo66863 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo66863'] = smo66863;
smo66863.setAttribute('id', 'smo66863');
smo66891v0ar.push(smo66863);
const smo66864 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo66864'] = smo66864;
smo66864.setAttribute('id', 'smo66864');
smo66891v0ar.push(smo66864);
const smo66865 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo66865'] = smo66865;
smo66865.setAttribute('id', 'smo66865');
smo66891v0ar.push(smo66865);
const smo66866 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo66866'] = smo66866;
smo66866.setAttribute('id', 'smo66866');
smo66891v0ar.push(smo66866);
const smo66867 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo66867'] = smo66867;
smo66867.setAttribute('id', 'smo66867');
smo66891v0ar.push(smo66867);
smo66891v0.addTickables(smo66891v0ar)
fmtsmo6689150.joinVoices([smo66891v0]);
const smo66891v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66891v1ar = [];
const smo66868 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
noteHash['smo66868'] = smo66868;
smo66868.setAttribute('id', 'smo66868');
smo66868.setStyle({ fillStyle: "#115511" });
smo66891v1ar.push(smo66868);
const smo66869 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo66869'] = smo66869;
smo66869.setAttribute('id', 'smo66869');
smo66869.setStyle({ fillStyle: "#115511" });
smo66891v1ar.push(smo66869);
const smo66870 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo66870'] = smo66870;
smo66870.setAttribute('id', 'smo66870');
smo66870.setStyle({ fillStyle: "#115511" });
smo66891v1ar.push(smo66870);
const smo66871 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo66871'] = smo66871;
smo66871.setAttribute('id', 'smo66871');
smo66871.setStyle({ fillStyle: "#115511" });
smo66891v1ar.push(smo66871);
const smo66872 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo66872'] = smo66872;
smo66872.setAttribute('id', 'smo66872');
smo66872.setStyle({ fillStyle: "#115511" });
smo66891v1ar.push(smo66872);
const smo66873 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo66873'] = smo66873;
smo66873.setAttribute('id', 'smo66873');
smo66873.setStyle({ fillStyle: "#115511" });
smo66891v1ar.push(smo66873);
const smo66874 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/2/n"]}'))
noteHash['smo66874'] = smo66874;
smo66874.setAttribute('id', 'smo66874');
smo66874.setStyle({ fillStyle: "#115511" });
smo66891v1ar.push(smo66874);
const smo66875 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["a#/2/n"]}'))
noteHash['smo66875'] = smo66875;
smo66875.setAttribute('id', 'smo66875');
smo66875.setStyle({ fillStyle: "#115511" });
const smo668750acc = new VF.Accidental('#');
smo66875.addModifier(smo668750acc, 0);
smo66891v1ar.push(smo66875);
const smo66876 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
noteHash['smo66876'] = smo66876;
smo66876.setAttribute('id', 'smo66876');
smo66876.setStyle({ fillStyle: "#115511" });
const smo668760acc = new VF.Accidental('n');
smo66876.addModifier(smo668760acc, 0);
smo66891v1ar.push(smo66876);
const smo66877 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
noteHash['smo66877'] = smo66877;
smo66877.setAttribute('id', 'smo66877');
smo66877.setStyle({ fillStyle: "#115511" });
smo66891v1ar.push(smo66877);
smo66891v1.addTickables(smo66891v1ar)
fmtsmo6689150.joinVoices([smo66891v1]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo70240 = smo61820.getStemDirection();
smo61820.setStemDirection(dirsmo70240);
smo61821.setStemDirection(dirsmo70240);
smo61822.setStemDirection(dirsmo70240);
const smo70240 = new VF.Beam([smo61820,smo61821,smo61822]);
const dirsmo70241 = smo61823.getStemDirection();
smo61823.setStemDirection(dirsmo70241);
smo61824.setStemDirection(dirsmo70241);
const smo70241 = new VF.Beam([smo61823,smo61824]);
const dirsmo70242 = smo61825.getStemDirection();
smo61825.setStemDirection(dirsmo70242);
smo61826.setStemDirection(dirsmo70242);
const smo70242 = new VF.Beam([smo61825,smo61826]);
const dirsmo70243 = smo61827.getStemDirection();
smo61827.setStemDirection(dirsmo70243);
smo61828.setStemDirection(dirsmo70243);
smo61829.setStemDirection(dirsmo70243);
const smo70243 = new VF.Beam([smo61827,smo61828,smo61829]);
const dirsmo70244 = smo61830.getStemDirection();
smo61830.setStemDirection(dirsmo70244);
smo61831.setStemDirection(dirsmo70244);
const smo70244 = new VF.Beam([smo61830,smo61831]);
const dirsmo70245 = smo61832.getStemDirection();
smo61832.setStemDirection(dirsmo70245);
smo61833.setStemDirection(dirsmo70245);
const smo70245 = new VF.Beam([smo61832,smo61833]);
const dirsmo70246 = smo61834.getStemDirection();
smo61834.setStemDirection(dirsmo70246);
smo61835.setStemDirection(dirsmo70246);
smo61836.setStemDirection(dirsmo70246);
smo61837.setStemDirection(dirsmo70246);
const smo70246 = new VF.Beam([smo61834,smo61835,smo61836,smo61837]);
const dirsmo70249 = smo66862.getStemDirection();
smo66862.setStemDirection(dirsmo70249);
smo66863.setStemDirection(dirsmo70249);
const smo70249 = new VF.Beam([smo66862,smo66863]);
const dirsmo70250 = smo66868.getStemDirection();
smo66868.setStemDirection(dirsmo70250);
smo66869.setStemDirection(dirsmo70250);
const smo70250 = new VF.Beam([smo66868,smo66869]);
const dirsmo70251 = smo66870.getStemDirection();
smo66870.setStemDirection(dirsmo70251);
smo66871.setStemDirection(dirsmo70251);
smo66872.setStemDirection(dirsmo70251);
smo66873.setStemDirection(dirsmo70251);
const smo70251 = new VF.Beam([smo66870,smo66871,smo66872,smo66873]);
const dirsmo70252 = smo66874.getStemDirection();
smo66874.setStemDirection(dirsmo70252);
smo66875.setStemDirection(dirsmo70252);
smo66876.setStemDirection(dirsmo70252);
smo66877.setStemDirection(dirsmo70252);
const smo70252 = new VF.Beam([smo66874,smo66875,smo66876,smo66877]);
 
// formatting measures in staff group smo59060
fmtsmo6185150.format([smo61851v0,smo61851v1,smo66891v0,smo66891v1], 498);
const stavesmo61851 = new VF.Stave(90, 662, 556);
stavesmo61851.setAttribute('id', 'stavesmo61851');
stavesmo61851.setBegBarType(1);
stavesmo61851.addClef('treble');
stavesmo61851.setContext(context);
stavesmo61851.draw();
smo61851v0.draw(context, stavesmo61851);
smo61851v1.draw(context, stavesmo61851);
smo70240.setContext(context);
smo70240.draw();
smo70241.setContext(context);
smo70241.draw();
smo70242.setContext(context);
smo70242.draw();
smo70243.setContext(context);
smo70243.draw();
smo70244.setContext(context);
smo70244.draw();
smo70245.setContext(context);
smo70245.draw();
smo70246.setContext(context);
smo70246.draw();
const stavesmo66891 = new VF.Stave(90, 801, 556);
stavesmo66891.setAttribute('id', 'stavesmo66891');
stavesmo66891.setBegBarType(1);
stavesmo66891.addClef('treble');
stavesmo66891.setContext(context);
stavesmo66891.draw();
smo66891v0.draw(context, stavesmo66891);
smo66891v1.draw(context, stavesmo66891);
smo70249.setContext(context);
smo70249.draw();
smo70250.setContext(context);
smo70250.draw();
smo70251.setContext(context);
smo70251.draw();
smo70252.setContext(context);
smo70252.draw();
const leftsmo59060stavesmo618511 = new VF.StaveConnector(stavesmo61851, stavesmo66891).setType(3);
leftsmo59060stavesmo618511.setContext(context).draw();
const fmtsmo6188651 = new VF.Formatter();
//
// voices and notes for stave 0 51
const smo61886v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61886v0ar = [];
const smo61852 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo61852'] = smo61852;
smo61852.setAttribute('id', 'smo61852');
smo61886v0ar.push(smo61852);
const smo61853 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
noteHash['smo61853'] = smo61853;
smo61853.setAttribute('id', 'smo61853');
smo61886v0ar.push(smo61853);
const smo61854 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo61854'] = smo61854;
smo61854.setAttribute('id', 'smo61854');
smo61886v0ar.push(smo61854);
const smo61855 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo61855'] = smo61855;
smo61855.setAttribute('id', 'smo61855');
smo61886v0ar.push(smo61855);
const smo61856 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo61856'] = smo61856;
smo61856.setAttribute('id', 'smo61856');
smo61886v0ar.push(smo61856);
const smo61857 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
noteHash['smo61857'] = smo61857;
smo61857.setAttribute('id', 'smo61857');
smo61886v0ar.push(smo61857);
const smo61858 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo61858'] = smo61858;
smo61858.setAttribute('id', 'smo61858');
smo61886v0ar.push(smo61858);
const smo61859 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo61859'] = smo61859;
smo61859.setAttribute('id', 'smo61859');
smo61886v0ar.push(smo61859);
const smo61860 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo61860'] = smo61860;
smo61860.setAttribute('id', 'smo61860');
smo61886v0ar.push(smo61860);
const smo61861 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
noteHash['smo61861'] = smo61861;
smo61861.setAttribute('id', 'smo61861');
smo61886v0ar.push(smo61861);
smo61886v0.addTickables(smo61886v0ar)
fmtsmo6188651.joinVoices([smo61886v0]);
const smo61886v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61886v1ar = [];
const smo61862 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo61862'] = smo61862;
smo61862.setAttribute('id', 'smo61862');
smo61862.setStyle({ fillStyle: "#115511" });
smo61862.addModifier(new VF.Dot(), 0);
smo61886v1ar.push(smo61862);
const smo61863 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo61863'] = smo61863;
smo61863.setAttribute('id', 'smo61863');
smo61863.setStyle({ fillStyle: "#115511" });
smo61886v1ar.push(smo61863);
const smo61864 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo61864'] = smo61864;
smo61864.setAttribute('id', 'smo61864');
smo61864.setStyle({ fillStyle: "#115511" });
smo61886v1ar.push(smo61864);
const smo61865 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo61865'] = smo61865;
smo61865.setAttribute('id', 'smo61865');
smo61865.setStyle({ fillStyle: "#115511" });
smo61886v1ar.push(smo61865);
const smo61866 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo61866'] = smo61866;
smo61866.setAttribute('id', 'smo61866');
smo61866.setStyle({ fillStyle: "#115511" });
smo61886v1ar.push(smo61866);
const smo61867 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo61867'] = smo61867;
smo61867.setAttribute('id', 'smo61867');
smo61867.setStyle({ fillStyle: "#115511" });
smo61886v1ar.push(smo61867);
const smo61868 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo61868'] = smo61868;
smo61868.setAttribute('id', 'smo61868');
smo61868.setStyle({ fillStyle: "#115511" });
smo61886v1ar.push(smo61868);
const smo61869 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo61869'] = smo61869;
smo61869.setAttribute('id', 'smo61869');
smo61869.setStyle({ fillStyle: "#115511" });
smo61886v1ar.push(smo61869);
const smo61870 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo61870'] = smo61870;
smo61870.setAttribute('id', 'smo61870');
smo61870.setStyle({ fillStyle: "#115511" });
smo61886v1ar.push(smo61870);
const smo61871 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo61871'] = smo61871;
smo61871.setAttribute('id', 'smo61871');
smo61871.setStyle({ fillStyle: "#115511" });
smo61886v1ar.push(smo61871);
const smo61872 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo61872'] = smo61872;
smo61872.setAttribute('id', 'smo61872');
smo61872.setStyle({ fillStyle: "#115511" });
smo61886v1ar.push(smo61872);
smo61886v1.addTickables(smo61886v1ar)
fmtsmo6188651.joinVoices([smo61886v1]);
const fmtsmo6692151 = new VF.Formatter();
//
// voices and notes for stave 1 51
const smo66921v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66921v0ar = [];
const smo66892 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/4/r"]}'))
noteHash['smo66892'] = smo66892;
smo66892.setAttribute('id', 'smo66892');
smo66921v0ar.push(smo66892);
const smo66893 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo66893'] = smo66893;
smo66893.setAttribute('id', 'smo66893');
smo66921v0ar.push(smo66893);
const smo66894 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo66894'] = smo66894;
smo66894.setAttribute('id', 'smo66894');
smo66921v0ar.push(smo66894);
const smo66895 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
noteHash['smo66895'] = smo66895;
smo66895.setAttribute('id', 'smo66895');
const smo668950acc = new VF.Accidental('#');
smo66895.addModifier(smo668950acc, 0);
smo66921v0ar.push(smo66895);
const smo66896 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo66896'] = smo66896;
smo66896.setAttribute('id', 'smo66896');
smo66896.addModifier(new VF.Dot(), 0);
smo66921v0ar.push(smo66896);
const smo66897 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo66897'] = smo66897;
smo66897.setAttribute('id', 'smo66897');
smo66921v0ar.push(smo66897);
const smo66898 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo66898'] = smo66898;
smo66898.setAttribute('id', 'smo66898');
smo66921v0ar.push(smo66898);
const smo66899 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo66899'] = smo66899;
smo66899.setAttribute('id', 'smo66899');
const smo668990acc = new VF.Accidental('n');
smo66899.addModifier(smo668990acc, 0);
smo66921v0ar.push(smo66899);
const smo66900 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo66900'] = smo66900;
smo66900.setAttribute('id', 'smo66900');
smo66921v0ar.push(smo66900);
smo66921v0.addTickables(smo66921v0ar)
fmtsmo6692151.joinVoices([smo66921v0]);
const smo66921v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66921v1ar = [];
const smo66901 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
noteHash['smo66901'] = smo66901;
smo66901.setAttribute('id', 'smo66901');
smo66901.setStyle({ fillStyle: "#115511" });
smo66921v1ar.push(smo66901);
const smo66902 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo66902'] = smo66902;
smo66902.setAttribute('id', 'smo66902');
smo66902.setStyle({ fillStyle: "#115511" });
const smo669020acc = new VF.Accidental('#');
smo66902.addModifier(smo669020acc, 0);
smo66921v1ar.push(smo66902);
const smo66903 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo66903'] = smo66903;
smo66903.setAttribute('id', 'smo66903');
smo66903.setStyle({ fillStyle: "#115511" });
smo66921v1ar.push(smo66903);
const smo66904 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo66904'] = smo66904;
smo66904.setAttribute('id', 'smo66904');
smo66904.setStyle({ fillStyle: "#115511" });
smo66921v1ar.push(smo66904);
const smo66905 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo66905'] = smo66905;
smo66905.setAttribute('id', 'smo66905');
smo66905.setStyle({ fillStyle: "#115511" });
smo66921v1ar.push(smo66905);
const smo66906 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo66906'] = smo66906;
smo66906.setAttribute('id', 'smo66906');
smo66906.setStyle({ fillStyle: "#115511" });
smo66921v1ar.push(smo66906);
const smo66907 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo66907'] = smo66907;
smo66907.setAttribute('id', 'smo66907');
smo66907.setStyle({ fillStyle: "#115511" });
const smo669070acc = new VF.Accidental('n');
smo66907.addModifier(smo669070acc, 0);
smo66921v1ar.push(smo66907);
smo66921v1.addTickables(smo66921v1ar)
fmtsmo6692151.joinVoices([smo66921v1]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo70255 = smo61852.getStemDirection();
smo61852.setStemDirection(dirsmo70255);
smo61853.setStemDirection(dirsmo70255);
smo61854.setStemDirection(dirsmo70255);
smo61855.setStemDirection(dirsmo70255);
const smo70255 = new VF.Beam([smo61852,smo61853,smo61854,smo61855]);
const dirsmo70256 = smo61856.getStemDirection();
smo61856.setStemDirection(dirsmo70256);
smo61857.setStemDirection(dirsmo70256);
smo61858.setStemDirection(dirsmo70256);
smo61859.setStemDirection(dirsmo70256);
const smo70256 = new VF.Beam([smo61856,smo61857,smo61858,smo61859]);
const dirsmo70257 = smo61860.getStemDirection();
smo61860.setStemDirection(dirsmo70257);
smo61861.setStemDirection(dirsmo70257);
const smo70257 = new VF.Beam([smo61860,smo61861]);
const dirsmo70258 = smo61862.getStemDirection();
smo61862.setStemDirection(dirsmo70258);
smo61863.setStemDirection(dirsmo70258);
smo61864.setStemDirection(dirsmo70258);
smo61865.setStemDirection(dirsmo70258);
smo61866.setStemDirection(dirsmo70258);
const smo70258 = new VF.Beam([smo61862,smo61863,smo61864,smo61865,smo61866]);
const dirsmo70259 = smo61867.getStemDirection();
smo61867.setStemDirection(dirsmo70259);
smo61868.setStemDirection(dirsmo70259);
const smo70259 = new VF.Beam([smo61867,smo61868]);
const dirsmo70260 = smo61869.getStemDirection();
smo61869.setStemDirection(dirsmo70260);
smo61870.setStemDirection(dirsmo70260);
smo61871.setStemDirection(dirsmo70260);
smo61872.setStemDirection(dirsmo70260);
const smo70260 = new VF.Beam([smo61869,smo61870,smo61871,smo61872]);
const dirsmo70263 = smo66893.getStemDirection();
smo66893.setStemDirection(dirsmo70263);
smo66894.setStemDirection(dirsmo70263);
smo66895.setStemDirection(dirsmo70263);
const smo70263 = new VF.Beam([smo66893,smo66894,smo66895]);
const dirsmo70264 = smo66896.getStemDirection();
smo66896.setStemDirection(dirsmo70264);
smo66897.setStemDirection(dirsmo70264);
smo66898.setStemDirection(dirsmo70264);
const smo70264 = new VF.Beam([smo66896,smo66897,smo66898]);
const dirsmo70265 = smo66899.getStemDirection();
smo66899.setStemDirection(dirsmo70265);
smo66900.setStemDirection(dirsmo70265);
const smo70265 = new VF.Beam([smo66899,smo66900]);
const dirsmo70266 = smo66901.getStemDirection();
smo66901.setStemDirection(dirsmo70266);
smo66902.setStemDirection(dirsmo70266);
smo66903.setStemDirection(dirsmo70266);
smo66904.setStemDirection(dirsmo70266);
const smo70266 = new VF.Beam([smo66901,smo66902,smo66903,smo66904]);
const dirsmo70267 = smo66906.getStemDirection();
smo66906.setStemDirection(dirsmo70267);
smo66907.setStemDirection(dirsmo70267);
const smo70267 = new VF.Beam([smo66906,smo66907]);
 
// formatting measures in staff group smo59060
fmtsmo6188651.format([smo61886v0,smo61886v1,smo66921v0,smo66921v1], 515);
const stavesmo61886 = new VF.Stave(646, 662, 563);
stavesmo61886.setAttribute('id', 'stavesmo61886');
stavesmo61886.setBegBarType(VF.Barline.type.NONE);
stavesmo61886.setContext(context);
stavesmo61886.draw();
smo61886v0.draw(context, stavesmo61886);
smo61886v1.draw(context, stavesmo61886);
smo70255.setContext(context);
smo70255.draw();
smo70256.setContext(context);
smo70256.draw();
smo70257.setContext(context);
smo70257.draw();
smo70258.setContext(context);
smo70258.draw();
smo70259.setContext(context);
smo70259.draw();
smo70260.setContext(context);
smo70260.draw();
const stavesmo66921 = new VF.Stave(646, 801, 563);
stavesmo66921.setAttribute('id', 'stavesmo66921');
stavesmo66921.setBegBarType(VF.Barline.type.NONE);
stavesmo66921.addClef('bass');
stavesmo66921.setContext(context);
stavesmo66921.draw();
smo66921v0.draw(context, stavesmo66921);
smo66921v1.draw(context, stavesmo66921);
smo70263.setContext(context);
smo70263.draw();
smo70264.setContext(context);
smo70264.draw();
smo70265.setContext(context);
smo70265.draw();
smo70266.setContext(context);
smo70266.draw();
smo70267.setContext(context);
smo70267.draw();
const fmtsmo6192352 = new VF.Formatter();
//
// voices and notes for stave 0 52
const smo61923v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61923v0ar = [];
const smo61887 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo61887'] = smo61887;
smo61887.setAttribute('id', 'smo61887');
smo61923v0ar.push(smo61887);
const smo61888 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/5/n"]}'))
noteHash['smo61888'] = smo61888;
smo61888.setAttribute('id', 'smo61888');
const smo618880acc = new VF.Accidental('b');
smo61888.addModifier(smo618880acc, 0);
smo61923v0ar.push(smo61888);
const smo61889 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
noteHash['smo61889'] = smo61889;
smo61889.setAttribute('id', 'smo61889');
smo61923v0ar.push(smo61889);
const smo61890 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo61890'] = smo61890;
smo61890.setAttribute('id', 'smo61890');
smo61923v0ar.push(smo61890);
const smo61891 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo61891'] = smo61891;
smo61891.setAttribute('id', 'smo61891');
smo61923v0ar.push(smo61891);
const smo61892 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo61892'] = smo61892;
smo61892.setAttribute('id', 'smo61892');
smo61923v0ar.push(smo61892);
const smo61893 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo61893'] = smo61893;
smo61893.setAttribute('id', 'smo61893');
smo61923v0ar.push(smo61893);
const smo61894 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo61894'] = smo61894;
smo61894.setAttribute('id', 'smo61894');
smo61923v0ar.push(smo61894);
const smo61895 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo61895'] = smo61895;
smo61895.setAttribute('id', 'smo61895');
smo61923v0ar.push(smo61895);
const smo61896 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo61896'] = smo61896;
smo61896.setAttribute('id', 'smo61896');
smo61923v0ar.push(smo61896);
const smo61897 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo61897'] = smo61897;
smo61897.setAttribute('id', 'smo61897');
smo61923v0ar.push(smo61897);
const smo61898 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo61898'] = smo61898;
smo61898.setAttribute('id', 'smo61898');
const smo61899 = new VF.Ornament('mordent_inverted');
smo61898.addModifier(smo61899, 0);
smo61923v0ar.push(smo61898);
const smo61900 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo61900'] = smo61900;
smo61900.setAttribute('id', 'smo61900');
smo61923v0ar.push(smo61900);
const smo61901 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo61901'] = smo61901;
smo61901.setAttribute('id', 'smo61901');
smo61923v0ar.push(smo61901);
smo61923v0.addTickables(smo61923v0ar)
fmtsmo6192352.joinVoices([smo61923v0]);
const smo61923v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61923v1ar = [];
const smo61902 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo61902'] = smo61902;
smo61902.setAttribute('id', 'smo61902');
smo61902.setStyle({ fillStyle: "#115511" });
smo61923v1ar.push(smo61902);
const smo61903 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo61903'] = smo61903;
smo61903.setAttribute('id', 'smo61903');
smo61903.setStyle({ fillStyle: "#115511" });
smo61923v1ar.push(smo61903);
const smo61904 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo61904'] = smo61904;
smo61904.setAttribute('id', 'smo61904');
smo61904.setStyle({ fillStyle: "#115511" });
const smo619040acc = new VF.Accidental('#');
smo61904.addModifier(smo619040acc, 0);
smo61923v1ar.push(smo61904);
const smo61905 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo61905'] = smo61905;
smo61905.setAttribute('id', 'smo61905');
smo61905.setStyle({ fillStyle: "#115511" });
smo61923v1ar.push(smo61905);
const smo61906 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo61906'] = smo61906;
smo61906.setAttribute('id', 'smo61906');
smo61906.setStyle({ fillStyle: "#115511" });
smo61923v1ar.push(smo61906);
const smo61907 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo61907'] = smo61907;
smo61907.setAttribute('id', 'smo61907');
smo61907.setStyle({ fillStyle: "#115511" });
smo61923v1ar.push(smo61907);
const smo61908 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo61908'] = smo61908;
smo61908.setAttribute('id', 'smo61908');
smo61908.setStyle({ fillStyle: "#115511" });
smo61923v1ar.push(smo61908);
const smo61909 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo61909'] = smo61909;
smo61909.setAttribute('id', 'smo61909');
smo61909.setStyle({ fillStyle: "#115511" });
smo61923v1ar.push(smo61909);
smo61923v1.addTickables(smo61923v1ar)
fmtsmo6192352.joinVoices([smo61923v1]);
const fmtsmo6695552 = new VF.Formatter();
//
// voices and notes for stave 1 52
const smo66955v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66955v0ar = [];
const smo66922 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo66922'] = smo66922;
smo66922.setAttribute('id', 'smo66922');
smo66955v0ar.push(smo66922);
const smo66923 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo66923'] = smo66923;
smo66923.setAttribute('id', 'smo66923');
smo66955v0ar.push(smo66923);
const smo66924 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo66924'] = smo66924;
smo66924.setAttribute('id', 'smo66924');
smo66955v0ar.push(smo66924);
const smo66925 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo66925'] = smo66925;
smo66925.setAttribute('id', 'smo66925');
smo66955v0ar.push(smo66925);
const smo66926 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo66926'] = smo66926;
smo66926.setAttribute('id', 'smo66926');
smo66955v0ar.push(smo66926);
const smo66927 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo66927'] = smo66927;
smo66927.setAttribute('id', 'smo66927');
smo66955v0ar.push(smo66927);
const smo66928 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
noteHash['smo66928'] = smo66928;
smo66928.setAttribute('id', 'smo66928');
const smo669280acc = new VF.Accidental('#');
smo66928.addModifier(smo669280acc, 0);
smo66955v0ar.push(smo66928);
const smo66929 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["en/4/r"]}'))
noteHash['smo66929'] = smo66929;
smo66929.setAttribute('id', 'smo66929');
smo66955v0ar.push(smo66929);
const smo66930 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["en/4/r"]}'))
noteHash['smo66930'] = smo66930;
smo66930.setAttribute('id', 'smo66930');
smo66955v0ar.push(smo66930);
smo66955v0.addTickables(smo66955v0ar)
fmtsmo6695552.joinVoices([smo66955v0]);
const smo66955v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66955v1ar = [];
const smo66931 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo66931'] = smo66931;
smo66931.setAttribute('id', 'smo66931');
smo66931.setStyle({ fillStyle: "#115511" });
smo66931.addModifier(new VF.Dot(), 0);
smo66955v1ar.push(smo66931);
const smo66932 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo66932'] = smo66932;
smo66932.setAttribute('id', 'smo66932');
smo66932.setStyle({ fillStyle: "#115511" });
smo66955v1ar.push(smo66932);
const smo66933 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo66933'] = smo66933;
smo66933.setAttribute('id', 'smo66933');
smo66933.setStyle({ fillStyle: "#115511" });
smo66955v1ar.push(smo66933);
const smo66934 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo66934'] = smo66934;
smo66934.setAttribute('id', 'smo66934');
smo66934.setStyle({ fillStyle: "#115511" });
smo66955v1ar.push(smo66934);
const smo66935 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
noteHash['smo66935'] = smo66935;
smo66935.setAttribute('id', 'smo66935');
smo66935.setStyle({ fillStyle: "#115511" });
const smo669350acc = new VF.Accidental('b');
smo66935.addModifier(smo669350acc, 0);
smo66955v1ar.push(smo66935);
const smo66936 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo66936'] = smo66936;
smo66936.setAttribute('id', 'smo66936');
smo66936.setStyle({ fillStyle: "#115511" });
smo66955v1ar.push(smo66936);
const smo66937 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo66937'] = smo66937;
smo66937.setAttribute('id', 'smo66937');
smo66937.setStyle({ fillStyle: "#115511" });
smo66955v1ar.push(smo66937);
const smo66938 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo66938'] = smo66938;
smo66938.setAttribute('id', 'smo66938');
smo66938.setStyle({ fillStyle: "#115511" });
smo66955v1ar.push(smo66938);
const smo66939 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
noteHash['smo66939'] = smo66939;
smo66939.setAttribute('id', 'smo66939');
smo66939.setStyle({ fillStyle: "#115511" });
smo66955v1ar.push(smo66939);
const smo66940 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo66940'] = smo66940;
smo66940.setAttribute('id', 'smo66940');
smo66940.setStyle({ fillStyle: "#115511" });
smo66955v1ar.push(smo66940);
const smo66941 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo66941'] = smo66941;
smo66941.setAttribute('id', 'smo66941');
smo66941.setStyle({ fillStyle: "#115511" });
smo66955v1ar.push(smo66941);
smo66955v1.addTickables(smo66955v1ar)
fmtsmo6695552.joinVoices([smo66955v1]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo70270 = smo61887.getStemDirection();
smo61887.setStemDirection(dirsmo70270);
smo61888.setStemDirection(dirsmo70270);
const smo70270 = new VF.Beam([smo61887,smo61888]);
const dirsmo70271 = smo61889.getStemDirection();
smo61889.setStemDirection(dirsmo70271);
smo61890.setStemDirection(dirsmo70271);
smo61891.setStemDirection(dirsmo70271);
const smo70271 = new VF.Beam([smo61889,smo61890,smo61891]);
const dirsmo70272 = smo61892.getStemDirection();
smo61892.setStemDirection(dirsmo70272);
smo61893.setStemDirection(dirsmo70272);
smo61894.setStemDirection(dirsmo70272);
smo61895.setStemDirection(dirsmo70272);
const smo70272 = new VF.Beam([smo61892,smo61893,smo61894,smo61895]);
const dirsmo70273 = smo61896.getStemDirection();
smo61896.setStemDirection(dirsmo70273);
smo61897.setStemDirection(dirsmo70273);
smo61898.setStemDirection(dirsmo70273);
smo61900.setStemDirection(dirsmo70273);
smo61901.setStemDirection(dirsmo70273);
const smo70273 = new VF.Beam([smo61896,smo61897,smo61898,smo61900,smo61901]);
const dirsmo70274 = smo61902.getStemDirection();
smo61902.setStemDirection(dirsmo70274);
smo61903.setStemDirection(dirsmo70274);
smo61904.setStemDirection(dirsmo70274);
smo61905.setStemDirection(dirsmo70274);
const smo70274 = new VF.Beam([smo61902,smo61903,smo61904,smo61905]);
const dirsmo70275 = smo61906.getStemDirection();
smo61906.setStemDirection(dirsmo70275);
smo61907.setStemDirection(dirsmo70275);
smo61908.setStemDirection(dirsmo70275);
smo61909.setStemDirection(dirsmo70275);
const smo70275 = new VF.Beam([smo61906,smo61907,smo61908,smo61909]);
const dirsmo70278 = smo66922.getStemDirection();
smo66922.setStemDirection(dirsmo70278);
smo66923.setStemDirection(dirsmo70278);
const smo70278 = new VF.Beam([smo66922,smo66923]);
const dirsmo70279 = smo66924.getStemDirection();
smo66924.setStemDirection(dirsmo70279);
smo66925.setStemDirection(dirsmo70279);
smo66926.setStemDirection(dirsmo70279);
smo66927.setStemDirection(dirsmo70279);
const smo70279 = new VF.Beam([smo66924,smo66925,smo66926,smo66927]);
const dirsmo70280 = smo66931.getStemDirection();
smo66931.setStemDirection(dirsmo70280);
smo66932.setStemDirection(dirsmo70280);
smo66933.setStemDirection(dirsmo70280);
smo66934.setStemDirection(dirsmo70280);
smo66935.setStemDirection(dirsmo70280);
const smo70280 = new VF.Beam([smo66931,smo66932,smo66933,smo66934,smo66935]);
const dirsmo70281 = smo66936.getStemDirection();
smo66936.setStemDirection(dirsmo70281);
smo66937.setStemDirection(dirsmo70281);
const smo70281 = new VF.Beam([smo66936,smo66937]);
const dirsmo70282 = smo66938.getStemDirection();
smo66938.setStemDirection(dirsmo70282);
smo66939.setStemDirection(dirsmo70282);
smo66940.setStemDirection(dirsmo70282);
smo66941.setStemDirection(dirsmo70282);
const smo70282 = new VF.Beam([smo66938,smo66939,smo66940,smo66941]);
 
// formatting measures in staff group smo59060
fmtsmo6192352.format([smo61923v0,smo61923v1,smo66955v0,smo66955v1], 585);
const stavesmo61923 = new VF.Stave(1209, 662, 599);
stavesmo61923.setAttribute('id', 'stavesmo61923');
stavesmo61923.setBegBarType(VF.Barline.type.NONE);
stavesmo61923.setContext(context);
stavesmo61923.draw();
smo61923v0.draw(context, stavesmo61923);
smo61923v1.draw(context, stavesmo61923);
smo70270.setContext(context);
smo70270.draw();
smo70271.setContext(context);
smo70271.draw();
smo70272.setContext(context);
smo70272.draw();
smo70273.setContext(context);
smo70273.draw();
smo70274.setContext(context);
smo70274.draw();
smo70275.setContext(context);
smo70275.draw();
const stavesmo66955 = new VF.Stave(1209, 801, 599);
stavesmo66955.setAttribute('id', 'stavesmo66955');
stavesmo66955.setBegBarType(VF.Barline.type.NONE);
stavesmo66955.setContext(context);
stavesmo66955.draw();
smo66955v0.draw(context, stavesmo66955);
smo66955v1.draw(context, stavesmo66955);
smo70278.setContext(context);
smo70278.draw();
smo70279.setContext(context);
smo70279.draw();
smo70280.setContext(context);
smo70280.draw();
smo70281.setContext(context);
smo70281.draw();
smo70282.setContext(context);
smo70282.draw();
const rightsmo59060stavesmo619231 = new VF.StaveConnector(stavesmo61923, stavesmo66955).setType(0);
rightsmo59060stavesmo619231.setContext(context).draw();
const fmtsmo6195553 = new VF.Formatter();
//
// voices and notes for stave 0 53
const smo61955v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61955v0ar = [];
const smo61924 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
noteHash['smo61924'] = smo61924;
smo61924.setAttribute('id', 'smo61924');
smo61955v0ar.push(smo61924);
const smo61925 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo61925'] = smo61925;
smo61925.setAttribute('id', 'smo61925');
const smo619250acc = new VF.Accidental('#');
smo61925.addModifier(smo619250acc, 0);
smo61955v0ar.push(smo61925);
const smo61926 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo61926'] = smo61926;
smo61926.setAttribute('id', 'smo61926');
smo61955v0ar.push(smo61926);
const smo61927 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo61927'] = smo61927;
smo61927.setAttribute('id', 'smo61927');
smo61955v0ar.push(smo61927);
const smo61928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo61928'] = smo61928;
smo61928.setAttribute('id', 'smo61928');
smo61928.addModifier(new VF.Dot(), 0);
smo61955v0ar.push(smo61928);
const smo61929 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo61929'] = smo61929;
smo61929.setAttribute('id', 'smo61929');
smo61955v0ar.push(smo61929);
const smo61930 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo61930'] = smo61930;
smo61930.setAttribute('id', 'smo61930');
smo61955v0ar.push(smo61930);
const smo61931 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/5/r"]}'))
noteHash['smo61931'] = smo61931;
smo61931.setAttribute('id', 'smo61931');
smo61955v0ar.push(smo61931);
const smo61932 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/5/r"]}'))
noteHash['smo61932'] = smo61932;
smo61932.setAttribute('id', 'smo61932');
smo61955v0ar.push(smo61932);
smo61955v0.addTickables(smo61955v0ar)
fmtsmo6195553.joinVoices([smo61955v0]);
const smo61955v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61955v1ar = [];
const smo61933 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo61933'] = smo61933;
smo61933.setAttribute('id', 'smo61933');
smo61933.setStyle({ fillStyle: "#115511" });
smo61955v1ar.push(smo61933);
const smo61934 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["gn/4/r"]}'))
noteHash['smo61934'] = smo61934;
smo61934.setAttribute('id', 'smo61934');
smo61934.setStyle({ fillStyle: "#115511" });
smo61955v1ar.push(smo61934);
const smo61935 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["gn/4/r"]}'))
noteHash['smo61935'] = smo61935;
smo61935.setAttribute('id', 'smo61935');
smo61935.setStyle({ fillStyle: "#115511" });
smo61955v1ar.push(smo61935);
const smo61936 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo61936'] = smo61936;
smo61936.setAttribute('id', 'smo61936');
smo61936.setStyle({ fillStyle: "#115511" });
smo61955v1ar.push(smo61936);
const smo61937 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo61937'] = smo61937;
smo61937.setAttribute('id', 'smo61937');
smo61937.setStyle({ fillStyle: "#115511" });
const smo619370acc = new VF.Accidental('#');
smo61937.addModifier(smo619370acc, 0);
smo61955v1ar.push(smo61937);
const smo61938 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo61938'] = smo61938;
smo61938.setAttribute('id', 'smo61938');
smo61938.setStyle({ fillStyle: "#115511" });
smo61955v1ar.push(smo61938);
const smo61939 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo61939'] = smo61939;
smo61939.setAttribute('id', 'smo61939');
smo61939.setStyle({ fillStyle: "#115511" });
smo61939.addModifier(new VF.Dot(), 0);
smo61955v1ar.push(smo61939);
const smo61940 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo61940'] = smo61940;
smo61940.setAttribute('id', 'smo61940');
smo61940.setStyle({ fillStyle: "#115511" });
smo61955v1ar.push(smo61940);
const smo61941 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo61941'] = smo61941;
smo61941.setAttribute('id', 'smo61941');
smo61941.setStyle({ fillStyle: "#115511" });
smo61955v1ar.push(smo61941);
smo61955v1.addTickables(smo61955v1ar)
fmtsmo6195553.joinVoices([smo61955v1]);
const fmtsmo6698553 = new VF.Formatter();
//
// voices and notes for stave 1 53
const smo66985v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66985v0ar = [];
const smo66956 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo66956'] = smo66956;
smo66956.setAttribute('id', 'smo66956');
smo66985v0ar.push(smo66956);
const smo66957 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo66957'] = smo66957;
smo66957.setAttribute('id', 'smo66957');
smo66985v0ar.push(smo66957);
const smo66958 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo66958'] = smo66958;
smo66958.setAttribute('id', 'smo66958');
smo66985v0ar.push(smo66958);
const smo66959 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
noteHash['smo66959'] = smo66959;
smo66959.setAttribute('id', 'smo66959');
const smo669590acc = new VF.Accidental('#');
smo66959.addModifier(smo669590acc, 0);
smo66985v0ar.push(smo66959);
const smo66960 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo66960'] = smo66960;
smo66960.setAttribute('id', 'smo66960');
smo66960.addModifier(new VF.Dot(), 0);
smo66985v0ar.push(smo66960);
const smo66961 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo66961'] = smo66961;
smo66961.setAttribute('id', 'smo66961');
smo66985v0ar.push(smo66961);
const smo66962 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo66962'] = smo66962;
smo66962.setAttribute('id', 'smo66962');
smo66985v0ar.push(smo66962);
const smo66963 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo66963'] = smo66963;
smo66963.setAttribute('id', 'smo66963');
const smo669630acc = new VF.Accidental('n');
smo66963.addModifier(smo669630acc, 0);
smo66985v0ar.push(smo66963);
const smo66964 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo66964'] = smo66964;
smo66964.setAttribute('id', 'smo66964');
const smo669640acc = new VF.Accidental('#');
smo66964.addModifier(smo669640acc, 0);
smo66985v0ar.push(smo66964);
smo66985v0.addTickables(smo66985v0ar)
fmtsmo6698553.joinVoices([smo66985v0]);
const smo66985v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66985v1ar = [];
const smo66965 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo66965'] = smo66965;
smo66965.setAttribute('id', 'smo66965');
smo66965.setStyle({ fillStyle: "#115511" });
smo66985v1ar.push(smo66965);
const smo66966 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo66966'] = smo66966;
smo66966.setAttribute('id', 'smo66966');
smo66966.setStyle({ fillStyle: "#115511" });
smo66985v1ar.push(smo66966);
const smo66967 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo66967'] = smo66967;
smo66967.setAttribute('id', 'smo66967');
smo66967.setStyle({ fillStyle: "#115511" });
smo66985v1ar.push(smo66967);
const smo66968 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo66968'] = smo66968;
smo66968.setAttribute('id', 'smo66968');
smo66968.setStyle({ fillStyle: "#115511" });
smo66985v1ar.push(smo66968);
const smo66969 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo66969'] = smo66969;
smo66969.setAttribute('id', 'smo66969');
smo66969.setStyle({ fillStyle: "#115511" });
smo66985v1ar.push(smo66969);
const smo66970 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo66970'] = smo66970;
smo66970.setAttribute('id', 'smo66970');
smo66970.setStyle({ fillStyle: "#115511" });
smo66985v1ar.push(smo66970);
const smo66971 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo66971'] = smo66971;
smo66971.setAttribute('id', 'smo66971');
smo66971.setStyle({ fillStyle: "#115511" });
smo66985v1ar.push(smo66971);
smo66985v1.addTickables(smo66985v1ar)
fmtsmo6698553.joinVoices([smo66985v1]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo70297 = smo61924.getStemDirection();
smo61924.setStemDirection(dirsmo70297);
smo61925.setStemDirection(dirsmo70297);
smo61926.setStemDirection(dirsmo70297);
smo61927.setStemDirection(dirsmo70297);
const smo70297 = new VF.Beam([smo61924,smo61925,smo61926,smo61927]);
const dirsmo70298 = smo61928.getStemDirection();
smo61928.setStemDirection(dirsmo70298);
smo61929.setStemDirection(dirsmo70298);
const smo70298 = new VF.Beam([smo61928,smo61929]);
const dirsmo70299 = smo61937.getStemDirection();
smo61937.setStemDirection(dirsmo70299);
smo61938.setStemDirection(dirsmo70299);
const smo70299 = new VF.Beam([smo61937,smo61938]);
const dirsmo70300 = smo61939.getStemDirection();
smo61939.setStemDirection(dirsmo70300);
smo61940.setStemDirection(dirsmo70300);
smo61941.setStemDirection(dirsmo70300);
const smo70300 = new VF.Beam([smo61939,smo61940,smo61941]);
const dirsmo70303 = smo66957.getStemDirection();
smo66957.setStemDirection(dirsmo70303);
smo66958.setStemDirection(dirsmo70303);
smo66959.setStemDirection(dirsmo70303);
const smo70303 = new VF.Beam([smo66957,smo66958,smo66959]);
const dirsmo70304 = smo66960.getStemDirection();
smo66960.setStemDirection(dirsmo70304);
smo66961.setStemDirection(dirsmo70304);
smo66962.setStemDirection(dirsmo70304);
const smo70304 = new VF.Beam([smo66960,smo66961,smo66962]);
const dirsmo70305 = smo66963.getStemDirection();
smo66963.setStemDirection(dirsmo70305);
smo66964.setStemDirection(dirsmo70305);
const smo70305 = new VF.Beam([smo66963,smo66964]);
const dirsmo70306 = smo66965.getStemDirection();
smo66965.setStemDirection(dirsmo70306);
smo66966.setStemDirection(dirsmo70306);
smo66967.setStemDirection(dirsmo70306);
smo66968.setStemDirection(dirsmo70306);
smo66969.setStemDirection(dirsmo70306);
smo66970.setStemDirection(dirsmo70306);
const smo70306 = new VF.Beam([smo66965,smo66966,smo66967,smo66968,smo66969,smo66970]);
 
// formatting measures in staff group smo59060
fmtsmo6195553.format([smo61955v0,smo61955v1,smo66985v0,smo66985v1], 496);
const stavesmo61955 = new VF.Stave(90, 1010, 554);
stavesmo61955.setAttribute('id', 'stavesmo61955');
stavesmo61955.setBegBarType(1);
stavesmo61955.addClef('treble');
stavesmo61955.setContext(context);
stavesmo61955.draw();
smo61955v0.draw(context, stavesmo61955);
smo61955v1.draw(context, stavesmo61955);
smo70297.setContext(context);
smo70297.draw();
smo70298.setContext(context);
smo70298.draw();
smo70299.setContext(context);
smo70299.draw();
smo70300.setContext(context);
smo70300.draw();
const stavesmo66985 = new VF.Stave(90, 1107, 554);
stavesmo66985.setAttribute('id', 'stavesmo66985');
stavesmo66985.setBegBarType(1);
stavesmo66985.addClef('treble');
stavesmo66985.setContext(context);
stavesmo66985.draw();
smo66985v0.draw(context, stavesmo66985);
smo66985v1.draw(context, stavesmo66985);
smo70303.setContext(context);
smo70303.draw();
smo70304.setContext(context);
smo70304.draw();
smo70305.setContext(context);
smo70305.draw();
smo70306.setContext(context);
smo70306.draw();
const leftsmo59060stavesmo619551 = new VF.StaveConnector(stavesmo61955, stavesmo66985).setType(3);
leftsmo59060stavesmo619551.setContext(context).draw();
const fmtsmo6198254 = new VF.Formatter();
//
// voices and notes for stave 0 54
const smo61982v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61982v0ar = [];
const smo61956 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61956'] = smo61956;
smo61956.setAttribute('id', 'smo61956');
smo61956.setStyle({ fillStyle: '#aaaaaa7f' });
smo61982v0ar.push(smo61956);
smo61982v0.addTickables(smo61982v0ar)
fmtsmo6198254.joinVoices([smo61982v0]);
const smo61982v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61982v1ar = [];
const smo61957 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo61957'] = smo61957;
smo61957.setAttribute('id', 'smo61957');
smo61957.setStyle({ fillStyle: "#115511" });
smo61982v1ar.push(smo61957);
const smo61958 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo61958'] = smo61958;
smo61958.setAttribute('id', 'smo61958');
smo61958.setStyle({ fillStyle: "#115511" });
smo61982v1ar.push(smo61958);
const smo61959 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo61959'] = smo61959;
smo61959.setAttribute('id', 'smo61959');
smo61959.setStyle({ fillStyle: "#115511" });
const smo619590acc = new VF.Accidental('#');
smo61959.addModifier(smo619590acc, 0);
smo61982v1ar.push(smo61959);
const smo61960 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo61960'] = smo61960;
smo61960.setAttribute('id', 'smo61960');
smo61960.setStyle({ fillStyle: "#115511" });
smo61982v1ar.push(smo61960);
const smo61961 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo61961'] = smo61961;
smo61961.setAttribute('id', 'smo61961');
smo61961.setStyle({ fillStyle: "#115511" });
smo61982v1ar.push(smo61961);
const smo61962 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo61962'] = smo61962;
smo61962.setAttribute('id', 'smo61962');
smo61962.setStyle({ fillStyle: "#115511" });
smo61982v1ar.push(smo61962);
const smo61963 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo61963'] = smo61963;
smo61963.setAttribute('id', 'smo61963');
smo61963.setStyle({ fillStyle: "#115511" });
smo61982v1ar.push(smo61963);
const smo61964 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo61964'] = smo61964;
smo61964.setAttribute('id', 'smo61964');
smo61964.setStyle({ fillStyle: "#115511" });
smo61982v1ar.push(smo61964);
const smo61965 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo61965'] = smo61965;
smo61965.setAttribute('id', 'smo61965');
smo61965.setStyle({ fillStyle: "#115511" });
smo61982v1ar.push(smo61965);
const smo61966 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo61966'] = smo61966;
smo61966.setAttribute('id', 'smo61966');
smo61966.setStyle({ fillStyle: "#115511" });
smo61982v1ar.push(smo61966);
const smo61967 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo61967'] = smo61967;
smo61967.setAttribute('id', 'smo61967');
smo61967.setStyle({ fillStyle: "#115511" });
smo61982v1ar.push(smo61967);
const smo61968 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo61968'] = smo61968;
smo61968.setAttribute('id', 'smo61968');
smo61968.setStyle({ fillStyle: "#115511" });
smo61982v1ar.push(smo61968);
smo61982v1.addTickables(smo61982v1ar)
fmtsmo6198254.joinVoices([smo61982v1]);
const fmtsmo6701854 = new VF.Formatter();
//
// voices and notes for stave 1 54
const smo67018v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67018v0ar = [];
const smo66986 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo66986'] = smo66986;
smo66986.setAttribute('id', 'smo66986');
smo67018v0ar.push(smo66986);
const smo66987 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo66987'] = smo66987;
smo66987.setAttribute('id', 'smo66987');
smo67018v0ar.push(smo66987);
const smo66988 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo66988'] = smo66988;
smo66988.setAttribute('id', 'smo66988');
smo67018v0ar.push(smo66988);
const smo66989 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo66989'] = smo66989;
smo66989.setAttribute('id', 'smo66989');
smo67018v0ar.push(smo66989);
const smo66990 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/2/n"]}'))
noteHash['smo66990'] = smo66990;
smo66990.setAttribute('id', 'smo66990');
smo67018v0ar.push(smo66990);
const smo66991 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
noteHash['smo66991'] = smo66991;
smo66991.setAttribute('id', 'smo66991');
smo67018v0ar.push(smo66991);
const smo66992 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
noteHash['smo66992'] = smo66992;
smo66992.setAttribute('id', 'smo66992');
smo67018v0ar.push(smo66992);
const smo66993 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/2/n"]}'))
noteHash['smo66993'] = smo66993;
smo66993.setAttribute('id', 'smo66993');
const smo669930acc = new VF.Accidental('#');
smo66993.addModifier(smo669930acc, 0);
smo67018v0ar.push(smo66993);
const smo66994 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/2/n"]}'))
noteHash['smo66994'] = smo66994;
smo66994.setAttribute('id', 'smo66994');
smo67018v0ar.push(smo66994);
const smo66995 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo66995'] = smo66995;
smo66995.setAttribute('id', 'smo66995');
smo67018v0ar.push(smo66995);
const smo66996 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo66996'] = smo66996;
smo66996.setAttribute('id', 'smo66996');
const smo669960acc = new VF.Accidental('#');
smo66996.addModifier(smo669960acc, 0);
smo67018v0ar.push(smo66996);
const smo66997 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo66997'] = smo66997;
smo66997.setAttribute('id', 'smo66997');
smo67018v0ar.push(smo66997);
smo67018v0.addTickables(smo67018v0ar)
fmtsmo6701854.joinVoices([smo67018v0]);
const smo67018v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67018v1ar = [];
const smo66998 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo66998'] = smo66998;
smo66998.setAttribute('id', 'smo66998');
smo66998.setStyle({ fillStyle: "#115511" });
smo67018v1ar.push(smo66998);
const smo66999 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo66999'] = smo66999;
smo66999.setAttribute('id', 'smo66999');
smo66999.setStyle({ fillStyle: "#115511" });
smo67018v1ar.push(smo66999);
const smo67000 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo67000'] = smo67000;
smo67000.setAttribute('id', 'smo67000');
smo67000.setStyle({ fillStyle: "#115511" });
smo67018v1ar.push(smo67000);
const smo67001 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo67001'] = smo67001;
smo67001.setAttribute('id', 'smo67001');
smo67001.setStyle({ fillStyle: "#115511" });
const smo670010acc = new VF.Accidental('#');
smo67001.addModifier(smo670010acc, 0);
smo67018v1ar.push(smo67001);
const smo67002 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo67002'] = smo67002;
smo67002.setAttribute('id', 'smo67002');
smo67002.setStyle({ fillStyle: "#115511" });
smo67018v1ar.push(smo67002);
const smo67003 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo67003'] = smo67003;
smo67003.setAttribute('id', 'smo67003');
smo67003.setStyle({ fillStyle: "#115511" });
smo67018v1ar.push(smo67003);
const smo67004 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo67004'] = smo67004;
smo67004.setAttribute('id', 'smo67004');
smo67004.setStyle({ fillStyle: "#115511" });
smo67018v1ar.push(smo67004);
smo67018v1.addTickables(smo67018v1ar)
fmtsmo6701854.joinVoices([smo67018v1]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo70309 = smo61957.getStemDirection();
smo61957.setStemDirection(dirsmo70309);
smo61958.setStemDirection(dirsmo70309);
smo61959.setStemDirection(dirsmo70309);
smo61960.setStemDirection(dirsmo70309);
const smo70309 = new VF.Beam([smo61957,smo61958,smo61959,smo61960]);
const dirsmo70310 = smo61961.getStemDirection();
smo61961.setStemDirection(dirsmo70310);
smo61962.setStemDirection(dirsmo70310);
smo61963.setStemDirection(dirsmo70310);
smo61964.setStemDirection(dirsmo70310);
const smo70310 = new VF.Beam([smo61961,smo61962,smo61963,smo61964]);
const dirsmo70311 = smo61965.getStemDirection();
smo61965.setStemDirection(dirsmo70311);
smo61966.setStemDirection(dirsmo70311);
smo61967.setStemDirection(dirsmo70311);
smo61968.setStemDirection(dirsmo70311);
const smo70311 = new VF.Beam([smo61965,smo61966,smo61967,smo61968]);
const dirsmo70314 = smo66986.getStemDirection();
smo66986.setStemDirection(dirsmo70314);
smo66987.setStemDirection(dirsmo70314);
smo66988.setStemDirection(dirsmo70314);
smo66989.setStemDirection(dirsmo70314);
const smo70314 = new VF.Beam([smo66986,smo66987,smo66988,smo66989]);
const dirsmo70315 = smo66990.getStemDirection();
smo66990.setStemDirection(dirsmo70315);
smo66991.setStemDirection(dirsmo70315);
smo66992.setStemDirection(dirsmo70315);
smo66993.setStemDirection(dirsmo70315);
const smo70315 = new VF.Beam([smo66990,smo66991,smo66992,smo66993]);
const dirsmo70316 = smo66994.getStemDirection();
smo66994.setStemDirection(dirsmo70316);
smo66995.setStemDirection(dirsmo70316);
smo66996.setStemDirection(dirsmo70316);
smo66997.setStemDirection(dirsmo70316);
const smo70316 = new VF.Beam([smo66994,smo66995,smo66996,smo66997]);
const dirsmo70317 = smo66998.getStemDirection();
smo66998.setStemDirection(dirsmo70317);
smo66999.setStemDirection(dirsmo70317);
const smo70317 = new VF.Beam([smo66998,smo66999]);
const dirsmo70318 = smo67000.getStemDirection();
smo67000.setStemDirection(dirsmo70318);
smo67001.setStemDirection(dirsmo70318);
smo67002.setStemDirection(dirsmo70318);
smo67003.setStemDirection(dirsmo70318);
const smo70318 = new VF.Beam([smo67000,smo67001,smo67002,smo67003]);
 
// formatting measures in staff group smo59060
fmtsmo6198254.format([smo61982v0,smo61982v1,smo67018v0,smo67018v1], 564);
const stavesmo61982 = new VF.Stave(644, 1010, 612);
stavesmo61982.setAttribute('id', 'stavesmo61982');
stavesmo61982.setBegBarType(VF.Barline.type.NONE);
stavesmo61982.setContext(context);
stavesmo61982.draw();
smo61982v0.draw(context, stavesmo61982);
smo61982v1.draw(context, stavesmo61982);
smo70309.setContext(context);
smo70309.draw();
smo70310.setContext(context);
smo70310.draw();
smo70311.setContext(context);
smo70311.draw();
const stavesmo67018 = new VF.Stave(644, 1107, 612);
stavesmo67018.setAttribute('id', 'stavesmo67018');
stavesmo67018.setBegBarType(VF.Barline.type.NONE);
stavesmo67018.addClef('bass');
stavesmo67018.setContext(context);
stavesmo67018.draw();
smo67018v0.draw(context, stavesmo67018);
smo67018v1.draw(context, stavesmo67018);
smo70314.setContext(context);
smo70314.draw();
smo70315.setContext(context);
smo70315.draw();
smo70316.setContext(context);
smo70316.draw();
smo70317.setContext(context);
smo70317.draw();
smo70318.setContext(context);
smo70318.draw();
const fmtsmo6201555 = new VF.Formatter();
//
// voices and notes for stave 0 55
const smo62015v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62015v0ar = [];
const smo61983 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo61983'] = smo61983;
smo61983.setAttribute('id', 'smo61983');
smo62015v0ar.push(smo61983);
const smo61984 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo61984'] = smo61984;
smo61984.setAttribute('id', 'smo61984');
smo62015v0ar.push(smo61984);
const smo61985 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo61985'] = smo61985;
smo61985.setAttribute('id', 'smo61985');
smo61985.addModifier(new VF.Dot(), 0);
smo62015v0ar.push(smo61985);
const smo61986 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo61986'] = smo61986;
smo61986.setAttribute('id', 'smo61986');
smo62015v0ar.push(smo61986);
const smo61987 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo61987'] = smo61987;
smo61987.setAttribute('id', 'smo61987');
smo62015v0ar.push(smo61987);
const smo61988 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo61988'] = smo61988;
smo61988.setAttribute('id', 'smo61988');
smo62015v0ar.push(smo61988);
const smo61989 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo61989'] = smo61989;
smo61989.setAttribute('id', 'smo61989');
smo62015v0ar.push(smo61989);
const smo61990 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo61990'] = smo61990;
smo61990.setAttribute('id', 'smo61990');
smo62015v0ar.push(smo61990);
const smo61991 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo61991'] = smo61991;
smo61991.setAttribute('id', 'smo61991');
smo62015v0ar.push(smo61991);
smo62015v0.addTickables(smo62015v0ar)
fmtsmo6201555.joinVoices([smo62015v0]);
const smo62015v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62015v1ar = [];
const smo61992 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo61992'] = smo61992;
smo61992.setAttribute('id', 'smo61992');
smo61992.setStyle({ fillStyle: "#115511" });
smo62015v1ar.push(smo61992);
const smo61993 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo61993'] = smo61993;
smo61993.setAttribute('id', 'smo61993');
smo61993.setStyle({ fillStyle: "#115511" });
smo62015v1ar.push(smo61993);
const smo61994 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo61994'] = smo61994;
smo61994.setAttribute('id', 'smo61994');
smo61994.setStyle({ fillStyle: "#115511" });
smo62015v1ar.push(smo61994);
const smo61995 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo61995'] = smo61995;
smo61995.setAttribute('id', 'smo61995');
smo61995.setStyle({ fillStyle: "#115511" });
smo62015v1ar.push(smo61995);
const smo61996 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo61996'] = smo61996;
smo61996.setAttribute('id', 'smo61996');
smo61996.setStyle({ fillStyle: "#115511" });
smo62015v1ar.push(smo61996);
const smo61997 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo61997'] = smo61997;
smo61997.setAttribute('id', 'smo61997');
smo61997.setStyle({ fillStyle: "#115511" });
smo62015v1ar.push(smo61997);
const smo61998 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo61998'] = smo61998;
smo61998.setAttribute('id', 'smo61998');
smo61998.setStyle({ fillStyle: "#115511" });
smo62015v1ar.push(smo61998);
const smo61999 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo61999'] = smo61999;
smo61999.setAttribute('id', 'smo61999');
smo61999.setStyle({ fillStyle: "#115511" });
smo62015v1ar.push(smo61999);
const smo62000 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo62000'] = smo62000;
smo62000.setAttribute('id', 'smo62000');
smo62000.setStyle({ fillStyle: "#115511" });
smo62015v1ar.push(smo62000);
const smo62001 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo62001'] = smo62001;
smo62001.setAttribute('id', 'smo62001');
smo62001.setStyle({ fillStyle: "#115511" });
smo62015v1ar.push(smo62001);
smo62015v1.addTickables(smo62015v1ar)
fmtsmo6201555.joinVoices([smo62015v1]);
const fmtsmo6705055 = new VF.Formatter();
//
// voices and notes for stave 1 55
const smo67050v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67050v0ar = [];
const smo67019 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo67019'] = smo67019;
smo67019.setAttribute('id', 'smo67019');
smo67050v0ar.push(smo67019);
const smo67020 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo67020'] = smo67020;
smo67020.setAttribute('id', 'smo67020');
smo67050v0ar.push(smo67020);
const smo67021 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo67021'] = smo67021;
smo67021.setAttribute('id', 'smo67021');
smo67050v0ar.push(smo67021);
const smo67022 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo67022'] = smo67022;
smo67022.setAttribute('id', 'smo67022');
smo67050v0ar.push(smo67022);
const smo67023 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo67023'] = smo67023;
smo67023.setAttribute('id', 'smo67023');
smo67050v0ar.push(smo67023);
const smo67024 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67024'] = smo67024;
smo67024.setAttribute('id', 'smo67024');
smo67050v0ar.push(smo67024);
const smo67025 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo67025'] = smo67025;
smo67025.setAttribute('id', 'smo67025');
smo67050v0ar.push(smo67025);
const smo67026 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo67026'] = smo67026;
smo67026.setAttribute('id', 'smo67026');
smo67050v0ar.push(smo67026);
const smo67027 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67027'] = smo67027;
smo67027.setAttribute('id', 'smo67027');
smo67050v0ar.push(smo67027);
const smo67028 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo67028'] = smo67028;
smo67028.setAttribute('id', 'smo67028');
smo67050v0ar.push(smo67028);
const smo67029 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo67029'] = smo67029;
smo67029.setAttribute('id', 'smo67029');
smo67050v0ar.push(smo67029);
const smo67030 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo67030'] = smo67030;
smo67030.setAttribute('id', 'smo67030');
smo67050v0ar.push(smo67030);
smo67050v0.addTickables(smo67050v0ar)
fmtsmo6705055.joinVoices([smo67050v0]);
const smo67050v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67050v1ar = [];
const smo67031 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67031'] = smo67031;
smo67031.setAttribute('id', 'smo67031');
smo67031.setStyle({ fillStyle: "#115511" });
smo67050v1ar.push(smo67031);
const smo67032 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo67032'] = smo67032;
smo67032.setAttribute('id', 'smo67032');
smo67032.setStyle({ fillStyle: "#115511" });
smo67050v1ar.push(smo67032);
const smo67033 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67033'] = smo67033;
smo67033.setAttribute('id', 'smo67033');
smo67033.setStyle({ fillStyle: "#115511" });
smo67050v1ar.push(smo67033);
const smo67034 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo67034'] = smo67034;
smo67034.setAttribute('id', 'smo67034');
smo67034.setStyle({ fillStyle: "#115511" });
const smo670340acc = new VF.Accidental('#');
smo67034.addModifier(smo670340acc, 0);
smo67050v1ar.push(smo67034);
const smo67035 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo67035'] = smo67035;
smo67035.setAttribute('id', 'smo67035');
smo67035.setStyle({ fillStyle: "#115511" });
smo67050v1ar.push(smo67035);
const smo67036 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67036'] = smo67036;
smo67036.setAttribute('id', 'smo67036');
smo67036.setStyle({ fillStyle: "#115511" });
smo67050v1ar.push(smo67036);
smo67050v1.addTickables(smo67050v1ar)
fmtsmo6705055.joinVoices([smo67050v1]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo70321 = smo61983.getStemDirection();
smo61983.setStemDirection(dirsmo70321);
smo61984.setStemDirection(dirsmo70321);
const smo70321 = new VF.Beam([smo61983,smo61984]);
const dirsmo70322 = smo61985.getStemDirection();
smo61985.setStemDirection(dirsmo70322);
smo61986.setStemDirection(dirsmo70322);
smo61987.setStemDirection(dirsmo70322);
const smo70322 = new VF.Beam([smo61985,smo61986,smo61987]);
const dirsmo70323 = smo61988.getStemDirection();
smo61988.setStemDirection(dirsmo70323);
smo61989.setStemDirection(dirsmo70323);
smo61990.setStemDirection(dirsmo70323);
smo61991.setStemDirection(dirsmo70323);
const smo70323 = new VF.Beam([smo61988,smo61989,smo61990,smo61991]);
const dirsmo70324 = smo61994.getStemDirection();
smo61994.setStemDirection(dirsmo70324);
smo61995.setStemDirection(dirsmo70324);
smo61996.setStemDirection(dirsmo70324);
smo61997.setStemDirection(dirsmo70324);
const smo70324 = new VF.Beam([smo61994,smo61995,smo61996,smo61997]);
const dirsmo70325 = smo61998.getStemDirection();
smo61998.setStemDirection(dirsmo70325);
smo61999.setStemDirection(dirsmo70325);
smo62000.setStemDirection(dirsmo70325);
smo62001.setStemDirection(dirsmo70325);
const smo70325 = new VF.Beam([smo61998,smo61999,smo62000,smo62001]);
const dirsmo70328 = smo67019.getStemDirection();
smo67019.setStemDirection(dirsmo70328);
smo67020.setStemDirection(dirsmo70328);
smo67021.setStemDirection(dirsmo70328);
smo67022.setStemDirection(dirsmo70328);
const smo70328 = new VF.Beam([smo67019,smo67020,smo67021,smo67022]);
const dirsmo70329 = smo67023.getStemDirection();
smo67023.setStemDirection(dirsmo70329);
smo67024.setStemDirection(dirsmo70329);
smo67025.setStemDirection(dirsmo70329);
smo67026.setStemDirection(dirsmo70329);
const smo70329 = new VF.Beam([smo67023,smo67024,smo67025,smo67026]);
const dirsmo70330 = smo67027.getStemDirection();
smo67027.setStemDirection(dirsmo70330);
smo67028.setStemDirection(dirsmo70330);
smo67029.setStemDirection(dirsmo70330);
smo67030.setStemDirection(dirsmo70330);
const smo70330 = new VF.Beam([smo67027,smo67028,smo67029,smo67030]);
const dirsmo70331 = smo67031.getStemDirection();
smo67031.setStemDirection(dirsmo70331);
smo67032.setStemDirection(dirsmo70331);
smo67033.setStemDirection(dirsmo70331);
const smo70331 = new VF.Beam([smo67031,smo67032,smo67033]);
const dirsmo70332 = smo67034.getStemDirection();
smo67034.setStemDirection(dirsmo70332);
smo67035.setStemDirection(dirsmo70332);
const smo70332 = new VF.Beam([smo67034,smo67035]);
 
// formatting measures in staff group smo59060
fmtsmo6201555.format([smo62015v0,smo62015v1,smo67050v0,smo67050v1], 504);
const stavesmo62015 = new VF.Stave(1256, 1010, 552);
stavesmo62015.setAttribute('id', 'stavesmo62015');
stavesmo62015.setBegBarType(VF.Barline.type.NONE);
stavesmo62015.setContext(context);
stavesmo62015.draw();
smo62015v0.draw(context, stavesmo62015);
smo62015v1.draw(context, stavesmo62015);
smo70321.setContext(context);
smo70321.draw();
smo70322.setContext(context);
smo70322.draw();
smo70323.setContext(context);
smo70323.draw();
smo70324.setContext(context);
smo70324.draw();
smo70325.setContext(context);
smo70325.draw();
const stavesmo67050 = new VF.Stave(1256, 1107, 552);
stavesmo67050.setAttribute('id', 'stavesmo67050');
stavesmo67050.setBegBarType(VF.Barline.type.NONE);
stavesmo67050.addClef('treble');
stavesmo67050.setContext(context);
stavesmo67050.draw();
smo67050v0.draw(context, stavesmo67050);
smo67050v1.draw(context, stavesmo67050);
smo70328.setContext(context);
smo70328.draw();
smo70329.setContext(context);
smo70329.draw();
smo70330.setContext(context);
smo70330.draw();
smo70331.setContext(context);
smo70331.draw();
smo70332.setContext(context);
smo70332.draw();
const rightsmo59060stavesmo620151 = new VF.StaveConnector(stavesmo62015, stavesmo67050).setType(0);
rightsmo59060stavesmo620151.setContext(context).draw();
const fmtsmo6205256 = new VF.Formatter();
//
// voices and notes for stave 0 56
const smo62052v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62052v0ar = [];
const smo62016 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo62016'] = smo62016;
smo62016.setAttribute('id', 'smo62016');
smo62052v0ar.push(smo62016);
const smo62017 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo62017'] = smo62017;
smo62017.setAttribute('id', 'smo62017');
smo62052v0ar.push(smo62017);
const smo62018 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo62018'] = smo62018;
smo62018.setAttribute('id', 'smo62018');
smo62052v0ar.push(smo62018);
const smo62019 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo62019'] = smo62019;
smo62019.setAttribute('id', 'smo62019');
smo62052v0ar.push(smo62019);
const smo62020 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo62020'] = smo62020;
smo62020.setAttribute('id', 'smo62020');
smo62052v0ar.push(smo62020);
const smo62021 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo62021'] = smo62021;
smo62021.setAttribute('id', 'smo62021');
smo62052v0ar.push(smo62021);
const smo62022 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo62022'] = smo62022;
smo62022.setAttribute('id', 'smo62022');
smo62052v0ar.push(smo62022);
const smo62023 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo62023'] = smo62023;
smo62023.setAttribute('id', 'smo62023');
smo62052v0ar.push(smo62023);
const smo62024 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo62024'] = smo62024;
smo62024.setAttribute('id', 'smo62024');
smo62052v0ar.push(smo62024);
const smo62025 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo62025'] = smo62025;
smo62025.setAttribute('id', 'smo62025');
smo62052v0ar.push(smo62025);
const smo62026 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
noteHash['smo62026'] = smo62026;
smo62026.setAttribute('id', 'smo62026');
smo62052v0ar.push(smo62026);
const smo62027 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo62027'] = smo62027;
smo62027.setAttribute('id', 'smo62027');
smo62052v0ar.push(smo62027);
const smo62028 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo62028'] = smo62028;
smo62028.setAttribute('id', 'smo62028');
smo62052v0ar.push(smo62028);
const smo62029 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo62029'] = smo62029;
smo62029.setAttribute('id', 'smo62029');
smo62052v0ar.push(smo62029);
const smo62030 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo62030'] = smo62030;
smo62030.setAttribute('id', 'smo62030');
smo62052v0ar.push(smo62030);
const smo62031 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo62031'] = smo62031;
smo62031.setAttribute('id', 'smo62031');
smo62052v0ar.push(smo62031);
smo62052v0.addTickables(smo62052v0ar)
fmtsmo6205256.joinVoices([smo62052v0]);
const smo62052v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62052v1ar = [];
const smo62032 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo62032'] = smo62032;
smo62032.setAttribute('id', 'smo62032');
smo62032.setStyle({ fillStyle: "#115511" });
smo62052v1ar.push(smo62032);
const smo62033 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo62033'] = smo62033;
smo62033.setAttribute('id', 'smo62033');
smo62033.setStyle({ fillStyle: "#115511" });
smo62052v1ar.push(smo62033);
const smo62034 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo62034'] = smo62034;
smo62034.setAttribute('id', 'smo62034');
smo62034.setStyle({ fillStyle: "#115511" });
smo62052v1ar.push(smo62034);
const smo62035 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/4/n"]}'))
noteHash['smo62035'] = smo62035;
smo62035.setAttribute('id', 'smo62035');
smo62035.setStyle({ fillStyle: "#115511" });
const smo620350acc = new VF.Accidental('b');
smo62035.addModifier(smo620350acc, 0);
smo62052v1ar.push(smo62035);
const smo62036 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo62036'] = smo62036;
smo62036.setAttribute('id', 'smo62036');
smo62036.setStyle({ fillStyle: "#115511" });
smo62052v1ar.push(smo62036);
const smo62037 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo62037'] = smo62037;
smo62037.setAttribute('id', 'smo62037');
smo62037.setStyle({ fillStyle: "#115511" });
smo62052v1ar.push(smo62037);
const smo62038 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo62038'] = smo62038;
smo62038.setAttribute('id', 'smo62038');
smo62038.setStyle({ fillStyle: "#115511" });
smo62052v1ar.push(smo62038);
smo62052v1.addTickables(smo62052v1ar)
fmtsmo6205256.joinVoices([smo62052v1]);
const fmtsmo6707956 = new VF.Formatter();
//
// voices and notes for stave 1 56
const smo67079v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67079v0ar = [];
const smo67051 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo67051'] = smo67051;
smo67051.setAttribute('id', 'smo67051');
smo67051.addModifier(new VF.Dot(), 0);
smo67079v0ar.push(smo67051);
const smo67052 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo67052'] = smo67052;
smo67052.setAttribute('id', 'smo67052');
smo67079v0ar.push(smo67052);
const smo67053 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo67053'] = smo67053;
smo67053.setAttribute('id', 'smo67053');
smo67079v0ar.push(smo67053);
const smo67054 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo67054'] = smo67054;
smo67054.setAttribute('id', 'smo67054');
smo67079v0ar.push(smo67054);
const smo67055 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo67055'] = smo67055;
smo67055.setAttribute('id', 'smo67055');
smo67079v0ar.push(smo67055);
const smo67056 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo67056'] = smo67056;
smo67056.setAttribute('id', 'smo67056');
smo67079v0ar.push(smo67056);
const smo67057 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo67057'] = smo67057;
smo67057.setAttribute('id', 'smo67057');
smo67079v0ar.push(smo67057);
const smo67058 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo67058'] = smo67058;
smo67058.setAttribute('id', 'smo67058');
smo67079v0ar.push(smo67058);
const smo67059 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo67059'] = smo67059;
smo67059.setAttribute('id', 'smo67059');
smo67079v0ar.push(smo67059);
const smo67060 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo67060'] = smo67060;
smo67060.setAttribute('id', 'smo67060');
smo67079v0ar.push(smo67060);
const smo67061 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo67061'] = smo67061;
smo67061.setAttribute('id', 'smo67061');
smo67079v0ar.push(smo67061);
smo67079v0.addTickables(smo67079v0ar)
fmtsmo6707956.joinVoices([smo67079v0]);
const smo67079v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67079v1ar = [];
const smo67062 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67062'] = smo67062;
smo67062.setAttribute('id', 'smo67062');
smo67062.setStyle({ fillStyle: "#115511" });
smo67079v1ar.push(smo67062);
const smo67063 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo67063'] = smo67063;
smo67063.setAttribute('id', 'smo67063');
smo67063.setStyle({ fillStyle: "#115511" });
smo67079v1ar.push(smo67063);
const smo67064 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo67064'] = smo67064;
smo67064.setAttribute('id', 'smo67064');
smo67064.setStyle({ fillStyle: "#115511" });
smo67079v1ar.push(smo67064);
const smo67065 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo67065'] = smo67065;
smo67065.setAttribute('id', 'smo67065');
smo67065.setStyle({ fillStyle: "#115511" });
smo67079v1ar.push(smo67065);
smo67079v1.addTickables(smo67079v1ar)
fmtsmo6707956.joinVoices([smo67079v1]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo70350 = smo62016.getStemDirection();
smo62016.setStemDirection(dirsmo70350);
smo62017.setStemDirection(dirsmo70350);
smo62018.setStemDirection(dirsmo70350);
smo62019.setStemDirection(dirsmo70350);
const smo70350 = new VF.Beam([smo62016,smo62017,smo62018,smo62019]);
const dirsmo70351 = smo62020.getStemDirection();
smo62020.setStemDirection(dirsmo70351);
smo62021.setStemDirection(dirsmo70351);
smo62022.setStemDirection(dirsmo70351);
smo62023.setStemDirection(dirsmo70351);
const smo70351 = new VF.Beam([smo62020,smo62021,smo62022,smo62023]);
const dirsmo70352 = smo62024.getStemDirection();
smo62024.setStemDirection(dirsmo70352);
smo62025.setStemDirection(dirsmo70352);
smo62026.setStemDirection(dirsmo70352);
smo62027.setStemDirection(dirsmo70352);
const smo70352 = new VF.Beam([smo62024,smo62025,smo62026,smo62027]);
const dirsmo70353 = smo62028.getStemDirection();
smo62028.setStemDirection(dirsmo70353);
smo62029.setStemDirection(dirsmo70353);
smo62030.setStemDirection(dirsmo70353);
smo62031.setStemDirection(dirsmo70353);
const smo70353 = new VF.Beam([smo62028,smo62029,smo62030,smo62031]);
const dirsmo70354 = smo62033.getStemDirection();
smo62033.setStemDirection(dirsmo70354);
smo62034.setStemDirection(dirsmo70354);
smo62035.setStemDirection(dirsmo70354);
const smo70354 = new VF.Beam([smo62033,smo62034,smo62035]);
const dirsmo70355 = smo62037.getStemDirection();
smo62037.setStemDirection(dirsmo70355);
smo62038.setStemDirection(dirsmo70355);
const smo70355 = new VF.Beam([smo62037,smo62038]);
const dirsmo70358 = smo67051.getStemDirection();
smo67051.setStemDirection(dirsmo70358);
smo67052.setStemDirection(dirsmo70358);
smo67053.setStemDirection(dirsmo70358);
const smo70358 = new VF.Beam([smo67051,smo67052,smo67053]);
const dirsmo70359 = smo67054.getStemDirection();
smo67054.setStemDirection(dirsmo70359);
smo67055.setStemDirection(dirsmo70359);
const smo70359 = new VF.Beam([smo67054,smo67055]);
const dirsmo70360 = smo67056.getStemDirection();
smo67056.setStemDirection(dirsmo70360);
smo67057.setStemDirection(dirsmo70360);
const smo70360 = new VF.Beam([smo67056,smo67057]);
const dirsmo70361 = smo67058.getStemDirection();
smo67058.setStemDirection(dirsmo70361);
smo67059.setStemDirection(dirsmo70361);
smo67060.setStemDirection(dirsmo70361);
smo67061.setStemDirection(dirsmo70361);
const smo70361 = new VF.Beam([smo67058,smo67059,smo67060,smo67061]);
const dirsmo70362 = smo67064.getStemDirection();
smo67064.setStemDirection(dirsmo70362);
smo67065.setStemDirection(dirsmo70362);
const smo70362 = new VF.Beam([smo67064,smo67065]);
 
// formatting measures in staff group smo59060
fmtsmo6205256.format([smo62052v0,smo62052v1,smo67079v0,smo67079v1], 435);
const stavesmo62052 = new VF.Stave(90, 1331, 493);
stavesmo62052.setAttribute('id', 'stavesmo62052');
stavesmo62052.setBegBarType(1);
stavesmo62052.addClef('treble');
stavesmo62052.setContext(context);
stavesmo62052.draw();
smo62052v0.draw(context, stavesmo62052);
smo62052v1.draw(context, stavesmo62052);
smo70350.setContext(context);
smo70350.draw();
smo70351.setContext(context);
smo70351.draw();
smo70352.setContext(context);
smo70352.draw();
smo70353.setContext(context);
smo70353.draw();
smo70354.setContext(context);
smo70354.draw();
smo70355.setContext(context);
smo70355.draw();
const stavesmo67079 = new VF.Stave(90, 1450, 493);
stavesmo67079.setAttribute('id', 'stavesmo67079');
stavesmo67079.setBegBarType(1);
stavesmo67079.addClef('treble');
stavesmo67079.setContext(context);
stavesmo67079.draw();
smo67079v0.draw(context, stavesmo67079);
smo67079v1.draw(context, stavesmo67079);
smo70358.setContext(context);
smo70358.draw();
smo70359.setContext(context);
smo70359.draw();
smo70360.setContext(context);
smo70360.draw();
smo70361.setContext(context);
smo70361.draw();
smo70362.setContext(context);
smo70362.draw();
const leftsmo59060stavesmo620521 = new VF.StaveConnector(stavesmo62052, stavesmo67079).setType(3);
leftsmo59060stavesmo620521.setContext(context).draw();
const fmtsmo6207757 = new VF.Formatter();
//
// voices and notes for stave 0 57
const smo62077v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62077v0ar = [];
const smo62053 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo62053'] = smo62053;
smo62053.setAttribute('id', 'smo62053');
smo62077v0ar.push(smo62053);
const smo62054 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo62054'] = smo62054;
smo62054.setAttribute('id', 'smo62054');
smo62077v0ar.push(smo62054);
const smo62055 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo62055'] = smo62055;
smo62055.setAttribute('id', 'smo62055');
smo62077v0ar.push(smo62055);
const smo62056 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo62056'] = smo62056;
smo62056.setAttribute('id', 'smo62056');
smo62077v0ar.push(smo62056);
const smo62057 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo62057'] = smo62057;
smo62057.setAttribute('id', 'smo62057');
smo62077v0ar.push(smo62057);
const smo62058 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo62058'] = smo62058;
smo62058.setAttribute('id', 'smo62058');
smo62077v0ar.push(smo62058);
smo62077v0.addTickables(smo62077v0ar)
fmtsmo6207757.joinVoices([smo62077v0]);
const smo62077v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62077v1ar = [];
const smo62059 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo62059'] = smo62059;
smo62059.setAttribute('id', 'smo62059');
smo62059.setStyle({ fillStyle: "#115511" });
smo62059.addModifier(new VF.Dot(), 0);
smo62077v1ar.push(smo62059);
const smo62060 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo62060'] = smo62060;
smo62060.setAttribute('id', 'smo62060');
smo62060.setStyle({ fillStyle: "#115511" });
smo62077v1ar.push(smo62060);
const smo62061 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo62061'] = smo62061;
smo62061.setAttribute('id', 'smo62061');
smo62061.setStyle({ fillStyle: "#115511" });
smo62077v1ar.push(smo62061);
const smo62062 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo62062'] = smo62062;
smo62062.setAttribute('id', 'smo62062');
smo62062.setStyle({ fillStyle: "#115511" });
smo62077v1ar.push(smo62062);
const smo62063 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo62063'] = smo62063;
smo62063.setAttribute('id', 'smo62063');
smo62063.setStyle({ fillStyle: "#115511" });
smo62077v1ar.push(smo62063);
smo62077v1.addTickables(smo62077v1ar)
fmtsmo6207757.joinVoices([smo62077v1]);
const fmtsmo6711357 = new VF.Formatter();
//
// voices and notes for stave 1 57
const smo67113v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67113v0ar = [];
const smo67080 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo67080'] = smo67080;
smo67080.setAttribute('id', 'smo67080');
smo67113v0ar.push(smo67080);
const smo67081 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo67081'] = smo67081;
smo67081.setAttribute('id', 'smo67081');
smo67113v0ar.push(smo67081);
const smo67082 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo67082'] = smo67082;
smo67082.setAttribute('id', 'smo67082');
smo67113v0ar.push(smo67082);
const smo67083 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo67083'] = smo67083;
smo67083.setAttribute('id', 'smo67083');
smo67113v0ar.push(smo67083);
const smo67084 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67084'] = smo67084;
smo67084.setAttribute('id', 'smo67084');
smo67113v0ar.push(smo67084);
const smo67085 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67085'] = smo67085;
smo67085.setAttribute('id', 'smo67085');
smo67113v0ar.push(smo67085);
smo67113v0.addTickables(smo67113v0ar)
fmtsmo6711357.joinVoices([smo67113v0]);
const smo67113v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67113v1ar = [];
const smo67086 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo67086'] = smo67086;
smo67086.setAttribute('id', 'smo67086');
smo67086.setStyle({ fillStyle: "#115511" });
smo67113v1ar.push(smo67086);
const smo67087 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo67087'] = smo67087;
smo67087.setAttribute('id', 'smo67087');
smo67087.setStyle({ fillStyle: "#115511" });
smo67113v1ar.push(smo67087);
const smo67088 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67088'] = smo67088;
smo67088.setAttribute('id', 'smo67088');
smo67088.setStyle({ fillStyle: "#115511" });
smo67113v1ar.push(smo67088);
const smo67089 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo67089'] = smo67089;
smo67089.setAttribute('id', 'smo67089');
smo67089.setStyle({ fillStyle: "#115511" });
smo67113v1ar.push(smo67089);
const smo67090 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo67090'] = smo67090;
smo67090.setAttribute('id', 'smo67090');
smo67090.setStyle({ fillStyle: "#115511" });
smo67113v1ar.push(smo67090);
const smo67091 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo67091'] = smo67091;
smo67091.setAttribute('id', 'smo67091');
smo67091.setStyle({ fillStyle: "#115511" });
smo67113v1ar.push(smo67091);
const smo67092 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo67092'] = smo67092;
smo67092.setAttribute('id', 'smo67092');
smo67092.setStyle({ fillStyle: "#115511" });
smo67113v1ar.push(smo67092);
const smo67093 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/2/n"]}'))
noteHash['smo67093'] = smo67093;
smo67093.setAttribute('id', 'smo67093');
smo67093.setStyle({ fillStyle: "#115511" });
smo67113v1ar.push(smo67093);
const smo67094 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo67094'] = smo67094;
smo67094.setAttribute('id', 'smo67094');
smo67094.setStyle({ fillStyle: "#115511" });
smo67113v1ar.push(smo67094);
const smo67095 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo67095'] = smo67095;
smo67095.setAttribute('id', 'smo67095');
smo67095.setStyle({ fillStyle: "#115511" });
smo67113v1ar.push(smo67095);
const smo67096 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo67096'] = smo67096;
smo67096.setAttribute('id', 'smo67096');
smo67096.setStyle({ fillStyle: "#115511" });
smo67113v1ar.push(smo67096);
const smo67097 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo67097'] = smo67097;
smo67097.setAttribute('id', 'smo67097');
smo67097.setStyle({ fillStyle: "#115511" });
smo67113v1ar.push(smo67097);
const smo67098 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67098'] = smo67098;
smo67098.setAttribute('id', 'smo67098');
smo67098.setStyle({ fillStyle: "#115511" });
smo67113v1ar.push(smo67098);
const smo67099 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
noteHash['smo67099'] = smo67099;
smo67099.setAttribute('id', 'smo67099');
smo67099.setStyle({ fillStyle: "#115511" });
smo67113v1ar.push(smo67099);
smo67113v1.addTickables(smo67113v1ar)
fmtsmo6711357.joinVoices([smo67113v1]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo70365 = smo62054.getStemDirection();
smo62054.setStemDirection(dirsmo70365);
smo62055.setStemDirection(dirsmo70365);
const smo70365 = new VF.Beam([smo62054,smo62055]);
const dirsmo70366 = smo62061.getStemDirection();
smo62061.setStemDirection(dirsmo70366);
smo62062.setStemDirection(dirsmo70366);
const smo70366 = new VF.Beam([smo62061,smo62062]);
const dirsmo70369 = smo67081.getStemDirection();
smo67081.setStemDirection(dirsmo70369);
smo67082.setStemDirection(dirsmo70369);
const smo70369 = new VF.Beam([smo67081,smo67082]);
const dirsmo70370 = smo67083.getStemDirection();
smo67083.setStemDirection(dirsmo70370);
smo67084.setStemDirection(dirsmo70370);
const smo70370 = new VF.Beam([smo67083,smo67084]);
const dirsmo70371 = smo67086.getStemDirection();
smo67086.setStemDirection(dirsmo70371);
smo67087.setStemDirection(dirsmo70371);
smo67088.setStemDirection(dirsmo70371);
smo67089.setStemDirection(dirsmo70371);
const smo70371 = new VF.Beam([smo67086,smo67087,smo67088,smo67089]);
const dirsmo70372 = smo67090.getStemDirection();
smo67090.setStemDirection(dirsmo70372);
smo67091.setStemDirection(dirsmo70372);
smo67092.setStemDirection(dirsmo70372);
smo67093.setStemDirection(dirsmo70372);
const smo70372 = new VF.Beam([smo67090,smo67091,smo67092,smo67093]);
const dirsmo70373 = smo67094.getStemDirection();
smo67094.setStemDirection(dirsmo70373);
smo67095.setStemDirection(dirsmo70373);
smo67096.setStemDirection(dirsmo70373);
smo67097.setStemDirection(dirsmo70373);
const smo70373 = new VF.Beam([smo67094,smo67095,smo67096,smo67097]);
const dirsmo70374 = smo67098.getStemDirection();
smo67098.setStemDirection(dirsmo70374);
smo67099.setStemDirection(dirsmo70374);
const smo70374 = new VF.Beam([smo67098,smo67099]);
 
// formatting measures in staff group smo59060
fmtsmo6207757.format([smo62077v0,smo62077v1,smo67113v0,smo67113v1], 346);
const stavesmo62077 = new VF.Stave(583, 1331, 360);
stavesmo62077.setAttribute('id', 'stavesmo62077');
stavesmo62077.setBegBarType(VF.Barline.type.NONE);
stavesmo62077.setContext(context);
stavesmo62077.draw();
smo62077v0.draw(context, stavesmo62077);
smo62077v1.draw(context, stavesmo62077);
smo70365.setContext(context);
smo70365.draw();
smo70366.setContext(context);
smo70366.draw();
const stavesmo67113 = new VF.Stave(583, 1450, 360);
stavesmo67113.setAttribute('id', 'stavesmo67113');
stavesmo67113.setBegBarType(VF.Barline.type.NONE);
stavesmo67113.setContext(context);
stavesmo67113.draw();
smo67113v0.draw(context, stavesmo67113);
smo67113v1.draw(context, stavesmo67113);
smo70369.setContext(context);
smo70369.draw();
smo70370.setContext(context);
smo70370.draw();
smo70371.setContext(context);
smo70371.draw();
smo70372.setContext(context);
smo70372.draw();
smo70373.setContext(context);
smo70373.draw();
smo70374.setContext(context);
smo70374.draw();
const fmtsmo6210458 = new VF.Formatter();
//
// voices and notes for stave 0 58
const smo62104v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62104v0ar = [];
const smo62078 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo62078'] = smo62078;
smo62078.setAttribute('id', 'smo62078');
smo62104v0ar.push(smo62078);
const smo62079 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo62079'] = smo62079;
smo62079.setAttribute('id', 'smo62079');
smo62104v0ar.push(smo62079);
const smo62080 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/4/n"]}'))
noteHash['smo62080'] = smo62080;
smo62080.setAttribute('id', 'smo62080');
const smo620800acc = new VF.Accidental('b');
smo62080.addModifier(smo620800acc, 0);
smo62104v0ar.push(smo62080);
const smo62081 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo62081'] = smo62081;
smo62081.setAttribute('id', 'smo62081');
smo62104v0ar.push(smo62081);
const smo62082 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo62082'] = smo62082;
smo62082.setAttribute('id', 'smo62082');
smo62104v0ar.push(smo62082);
const smo62083 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo62083'] = smo62083;
smo62083.setAttribute('id', 'smo62083');
smo62104v0ar.push(smo62083);
smo62104v0.addTickables(smo62104v0ar)
fmtsmo6210458.joinVoices([smo62104v0]);
const smo62104v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62104v1ar = [];
const smo62084 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo62084'] = smo62084;
smo62084.setAttribute('id', 'smo62084');
smo62084.setStyle({ fillStyle: "#115511" });
smo62104v1ar.push(smo62084);
const smo62085 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo62085'] = smo62085;
smo62085.setAttribute('id', 'smo62085');
smo62085.setStyle({ fillStyle: "#115511" });
smo62104v1ar.push(smo62085);
const smo62086 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo62086'] = smo62086;
smo62086.setAttribute('id', 'smo62086');
smo62086.setStyle({ fillStyle: "#115511" });
smo62104v1ar.push(smo62086);
const smo62087 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo62087'] = smo62087;
smo62087.setAttribute('id', 'smo62087');
smo62087.setStyle({ fillStyle: "#115511" });
smo62104v1ar.push(smo62087);
const smo62088 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo62088'] = smo62088;
smo62088.setAttribute('id', 'smo62088');
smo62088.setStyle({ fillStyle: "#115511" });
smo62104v1ar.push(smo62088);
const smo62089 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo62089'] = smo62089;
smo62089.setAttribute('id', 'smo62089');
smo62089.setStyle({ fillStyle: "#115511" });
smo62104v1ar.push(smo62089);
const smo62090 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo62090'] = smo62090;
smo62090.setAttribute('id', 'smo62090');
smo62090.setStyle({ fillStyle: "#115511" });
smo62104v1ar.push(smo62090);
smo62104v1.addTickables(smo62104v1ar)
fmtsmo6210458.joinVoices([smo62104v1]);
const fmtsmo6713758 = new VF.Formatter();
//
// voices and notes for stave 1 58
const smo67137v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67137v0ar = [];
const smo67114 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67114'] = smo67114;
smo67114.setAttribute('id', 'smo67114');
smo67137v0ar.push(smo67114);
const smo67115 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo67115'] = smo67115;
smo67115.setAttribute('id', 'smo67115');
smo67137v0ar.push(smo67115);
const smo67116 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo67116'] = smo67116;
smo67116.setAttribute('id', 'smo67116');
smo67137v0ar.push(smo67116);
const smo67117 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo67117'] = smo67117;
smo67117.setAttribute('id', 'smo67117');
smo67137v0ar.push(smo67117);
const smo67118 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo67118'] = smo67118;
smo67118.setAttribute('id', 'smo67118');
smo67118.addModifier(new VF.Dot(), 0);
smo67137v0ar.push(smo67118);
const smo67119 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67119'] = smo67119;
smo67119.setAttribute('id', 'smo67119');
smo67137v0ar.push(smo67119);
const smo67120 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo67120'] = smo67120;
smo67120.setAttribute('id', 'smo67120');
smo67137v0ar.push(smo67120);
const smo67121 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo67121'] = smo67121;
smo67121.setAttribute('id', 'smo67121');
smo67137v0ar.push(smo67121);
const smo67122 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo67122'] = smo67122;
smo67122.setAttribute('id', 'smo67122');
smo67137v0ar.push(smo67122);
smo67137v0.addTickables(smo67137v0ar)
fmtsmo6713758.joinVoices([smo67137v0]);
const smo67137v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67137v1ar = [];
const smo67123 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo67123'] = smo67123;
smo67123.setAttribute('id', 'smo67123');
smo67123.setStyle({ fillStyle: "#115511" });
smo67137v1ar.push(smo67123);
smo67137v1.addTickables(smo67137v1ar)
fmtsmo6713758.joinVoices([smo67137v1]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo70377 = smo62079.getStemDirection();
smo62079.setStemDirection(dirsmo70377);
smo62080.setStemDirection(dirsmo70377);
const smo70377 = new VF.Beam([smo62079,smo62080]);
const dirsmo70378 = smo62087.getStemDirection();
smo62087.setStemDirection(dirsmo70378);
smo62088.setStemDirection(dirsmo70378);
const smo70378 = new VF.Beam([smo62087,smo62088]);
const dirsmo70379 = smo62089.getStemDirection();
smo62089.setStemDirection(dirsmo70379);
smo62090.setStemDirection(dirsmo70379);
const smo70379 = new VF.Beam([smo62089,smo62090]);
const dirsmo70382 = smo67114.getStemDirection();
smo67114.setStemDirection(dirsmo70382);
smo67115.setStemDirection(dirsmo70382);
smo67116.setStemDirection(dirsmo70382);
smo67117.setStemDirection(dirsmo70382);
const smo70382 = new VF.Beam([smo67114,smo67115,smo67116,smo67117]);
const dirsmo70383 = smo67118.getStemDirection();
smo67118.setStemDirection(dirsmo70383);
smo67119.setStemDirection(dirsmo70383);
smo67120.setStemDirection(dirsmo70383);
const smo70383 = new VF.Beam([smo67118,smo67119,smo67120]);
const dirsmo70384 = smo67121.getStemDirection();
smo67121.setStemDirection(dirsmo70384);
smo67122.setStemDirection(dirsmo70384);
const smo70384 = new VF.Beam([smo67121,smo67122]);
 
// formatting measures in staff group smo59060
fmtsmo6210458.format([smo62104v0,smo62104v1,smo67137v0,smo67137v1], 309);
const stavesmo62104 = new VF.Stave(943, 1331, 357);
stavesmo62104.setAttribute('id', 'stavesmo62104');
stavesmo62104.setBegBarType(VF.Barline.type.NONE);
stavesmo62104.setContext(context);
stavesmo62104.draw();
smo62104v0.draw(context, stavesmo62104);
smo62104v1.draw(context, stavesmo62104);
smo70377.setContext(context);
smo70377.draw();
smo70378.setContext(context);
smo70378.draw();
smo70379.setContext(context);
smo70379.draw();
const stavesmo67137 = new VF.Stave(943, 1450, 357);
stavesmo67137.setAttribute('id', 'stavesmo67137');
stavesmo67137.setBegBarType(VF.Barline.type.NONE);
stavesmo67137.addClef('bass');
stavesmo67137.setContext(context);
stavesmo67137.draw();
smo67137v0.draw(context, stavesmo67137);
smo67137v1.draw(context, stavesmo67137);
smo70382.setContext(context);
smo70382.draw();
smo70383.setContext(context);
smo70383.draw();
smo70384.setContext(context);
smo70384.draw();
const fmtsmo6214059 = new VF.Formatter();
//
// voices and notes for stave 0 59
const smo62140v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62140v0ar = [];
const smo62105 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo62105'] = smo62105;
smo62105.setAttribute('id', 'smo62105');
smo62140v0ar.push(smo62105);
const smo62106 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo62106'] = smo62106;
smo62106.setAttribute('id', 'smo62106');
smo62140v0ar.push(smo62106);
const smo62107 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo62107'] = smo62107;
smo62107.setAttribute('id', 'smo62107');
smo62140v0ar.push(smo62107);
const smo62108 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo62108'] = smo62108;
smo62108.setAttribute('id', 'smo62108');
smo62140v0ar.push(smo62108);
const smo62109 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
noteHash['smo62109'] = smo62109;
smo62109.setAttribute('id', 'smo62109');
smo62140v0ar.push(smo62109);
const smo62110 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo62110'] = smo62110;
smo62110.setAttribute('id', 'smo62110');
smo62140v0ar.push(smo62110);
const smo62111 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo62111'] = smo62111;
smo62111.setAttribute('id', 'smo62111');
smo62140v0ar.push(smo62111);
const smo62112 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo62112'] = smo62112;
smo62112.setAttribute('id', 'smo62112');
smo62140v0ar.push(smo62112);
const smo62113 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo62113'] = smo62113;
smo62113.setAttribute('id', 'smo62113');
smo62140v0ar.push(smo62113);
const smo62114 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo62114'] = smo62114;
smo62114.setAttribute('id', 'smo62114');
smo62140v0ar.push(smo62114);
const smo62115 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo62115'] = smo62115;
smo62115.setAttribute('id', 'smo62115');
smo62140v0ar.push(smo62115);
smo62140v0.addTickables(smo62140v0ar)
fmtsmo6214059.joinVoices([smo62140v0]);
const smo62140v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62140v1ar = [];
const smo62116 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/4/n"]}'))
noteHash['smo62116'] = smo62116;
smo62116.setAttribute('id', 'smo62116');
smo62116.setStyle({ fillStyle: "#115511" });
const smo621160acc = new VF.Accidental('b');
smo62116.addModifier(smo621160acc, 0);
smo62116.addModifier(new VF.Dot(), 0);
smo62140v1ar.push(smo62116);
const smo62117 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo62117'] = smo62117;
smo62117.setAttribute('id', 'smo62117');
smo62117.setStyle({ fillStyle: "#115511" });
smo62140v1ar.push(smo62117);
const smo62118 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/4/n"]}'))
noteHash['smo62118'] = smo62118;
smo62118.setAttribute('id', 'smo62118');
smo62118.setStyle({ fillStyle: "#115511" });
smo62140v1ar.push(smo62118);
const smo62119 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo62119'] = smo62119;
smo62119.setAttribute('id', 'smo62119');
smo62119.setStyle({ fillStyle: "#115511" });
smo62140v1ar.push(smo62119);
const smo62120 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo62120'] = smo62120;
smo62120.setAttribute('id', 'smo62120');
smo62120.setStyle({ fillStyle: "#115511" });
smo62140v1ar.push(smo62120);
const smo62121 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo62121'] = smo62121;
smo62121.setAttribute('id', 'smo62121');
smo62121.setStyle({ fillStyle: "#115511" });
smo62140v1ar.push(smo62121);
const smo62122 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo62122'] = smo62122;
smo62122.setAttribute('id', 'smo62122');
smo62122.setStyle({ fillStyle: "#115511" });
smo62140v1ar.push(smo62122);
const smo62123 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo62123'] = smo62123;
smo62123.setAttribute('id', 'smo62123');
smo62123.setStyle({ fillStyle: "#115511" });
smo62140v1ar.push(smo62123);
const smo62124 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo62124'] = smo62124;
smo62124.setAttribute('id', 'smo62124');
smo62124.setStyle({ fillStyle: "#115511" });
smo62140v1ar.push(smo62124);
const smo62125 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo62125'] = smo62125;
smo62125.setAttribute('id', 'smo62125');
smo62125.setStyle({ fillStyle: "#115511" });
smo62140v1ar.push(smo62125);
const smo62126 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/4/n"]}'))
noteHash['smo62126'] = smo62126;
smo62126.setAttribute('id', 'smo62126');
smo62126.setStyle({ fillStyle: "#115511" });
smo62140v1ar.push(smo62126);
smo62140v1.addTickables(smo62140v1ar)
fmtsmo6214059.joinVoices([smo62140v1]);
const fmtsmo6716659 = new VF.Formatter();
//
// voices and notes for stave 1 59
const smo67166v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67166v0ar = [];
const smo67138 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo67138'] = smo67138;
smo67138.setAttribute('id', 'smo67138');
smo67166v0ar.push(smo67138);
const smo67139 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67139'] = smo67139;
smo67139.setAttribute('id', 'smo67139');
smo67166v0ar.push(smo67139);
const smo67140 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67140'] = smo67140;
smo67140.setAttribute('id', 'smo67140');
smo67166v0ar.push(smo67140);
const smo67141 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo67141'] = smo67141;
smo67141.setAttribute('id', 'smo67141');
smo67166v0ar.push(smo67141);
const smo67142 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67142'] = smo67142;
smo67142.setAttribute('id', 'smo67142');
smo67166v0ar.push(smo67142);
const smo67143 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo67143'] = smo67143;
smo67143.setAttribute('id', 'smo67143');
smo67166v0ar.push(smo67143);
const smo67144 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo67144'] = smo67144;
smo67144.setAttribute('id', 'smo67144');
smo67166v0ar.push(smo67144);
const smo67145 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo67145'] = smo67145;
smo67145.setAttribute('id', 'smo67145');
smo67166v0ar.push(smo67145);
const smo67146 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo67146'] = smo67146;
smo67146.setAttribute('id', 'smo67146');
smo67166v0ar.push(smo67146);
const smo67147 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo67147'] = smo67147;
smo67147.setAttribute('id', 'smo67147');
smo67166v0ar.push(smo67147);
const smo67148 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67148'] = smo67148;
smo67148.setAttribute('id', 'smo67148');
smo67166v0ar.push(smo67148);
const smo67149 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo67149'] = smo67149;
smo67149.setAttribute('id', 'smo67149');
smo67166v0ar.push(smo67149);
const smo67150 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/3/n"]}'))
noteHash['smo67150'] = smo67150;
smo67150.setAttribute('id', 'smo67150');
const smo671500acc = new VF.Accidental('b');
smo67150.addModifier(smo671500acc, 0);
smo67166v0ar.push(smo67150);
const smo67151 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67151'] = smo67151;
smo67151.setAttribute('id', 'smo67151');
smo67166v0ar.push(smo67151);
smo67166v0.addTickables(smo67166v0ar)
fmtsmo6716659.joinVoices([smo67166v0]);
const smo67166v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67166v1ar = [];
const smo67152 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo67152'] = smo67152;
smo67152.setAttribute('id', 'smo67152');
smo67152.setStyle({ fillStyle: "#115511" });
smo67166v1ar.push(smo67152);
smo67166v1.addTickables(smo67166v1ar)
fmtsmo6716659.joinVoices([smo67166v1]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo70387 = smo62105.getStemDirection();
smo62105.setStemDirection(dirsmo70387);
smo62106.setStemDirection(dirsmo70387);
const smo70387 = new VF.Beam([smo62105,smo62106]);
const dirsmo70388 = smo62108.getStemDirection();
smo62108.setStemDirection(dirsmo70388);
smo62109.setStemDirection(dirsmo70388);
smo62110.setStemDirection(dirsmo70388);
smo62111.setStemDirection(dirsmo70388);
const smo70388 = new VF.Beam([smo62108,smo62109,smo62110,smo62111]);
const dirsmo70389 = smo62112.getStemDirection();
smo62112.setStemDirection(dirsmo70389);
smo62113.setStemDirection(dirsmo70389);
smo62114.setStemDirection(dirsmo70389);
smo62115.setStemDirection(dirsmo70389);
const smo70389 = new VF.Beam([smo62112,smo62113,smo62114,smo62115]);
const dirsmo70390 = smo62116.getStemDirection();
smo62116.setStemDirection(dirsmo70390);
smo62117.setStemDirection(dirsmo70390);
smo62118.setStemDirection(dirsmo70390);
const smo70390 = new VF.Beam([smo62116,smo62117,smo62118]);
const dirsmo70391 = smo62119.getStemDirection();
smo62119.setStemDirection(dirsmo70391);
smo62120.setStemDirection(dirsmo70391);
const smo70391 = new VF.Beam([smo62119,smo62120]);
const dirsmo70392 = smo62121.getStemDirection();
smo62121.setStemDirection(dirsmo70392);
smo62122.setStemDirection(dirsmo70392);
const smo70392 = new VF.Beam([smo62121,smo62122]);
const dirsmo70393 = smo62123.getStemDirection();
smo62123.setStemDirection(dirsmo70393);
smo62124.setStemDirection(dirsmo70393);
smo62125.setStemDirection(dirsmo70393);
smo62126.setStemDirection(dirsmo70393);
const smo70393 = new VF.Beam([smo62123,smo62124,smo62125,smo62126]);
const dirsmo70396 = smo67138.getStemDirection();
smo67138.setStemDirection(dirsmo70396);
smo67139.setStemDirection(dirsmo70396);
const smo70396 = new VF.Beam([smo67138,smo67139]);
const dirsmo70397 = smo67140.getStemDirection();
smo67140.setStemDirection(dirsmo70397);
smo67141.setStemDirection(dirsmo70397);
smo67142.setStemDirection(dirsmo70397);
smo67143.setStemDirection(dirsmo70397);
const smo70397 = new VF.Beam([smo67140,smo67141,smo67142,smo67143]);
const dirsmo70398 = smo67144.getStemDirection();
smo67144.setStemDirection(dirsmo70398);
smo67145.setStemDirection(dirsmo70398);
smo67146.setStemDirection(dirsmo70398);
smo67147.setStemDirection(dirsmo70398);
const smo70398 = new VF.Beam([smo67144,smo67145,smo67146,smo67147]);
const dirsmo70399 = smo67148.getStemDirection();
smo67148.setStemDirection(dirsmo70399);
smo67149.setStemDirection(dirsmo70399);
smo67150.setStemDirection(dirsmo70399);
smo67151.setStemDirection(dirsmo70399);
const smo70399 = new VF.Beam([smo67148,smo67149,smo67150,smo67151]);
 
// formatting measures in staff group smo59060
fmtsmo6214059.format([smo62140v0,smo62140v1,smo67166v0,smo67166v1], 495);
const stavesmo62140 = new VF.Stave(1300, 1331, 509);
stavesmo62140.setAttribute('id', 'stavesmo62140');
stavesmo62140.setBegBarType(VF.Barline.type.NONE);
stavesmo62140.setContext(context);
stavesmo62140.draw();
smo62140v0.draw(context, stavesmo62140);
smo62140v1.draw(context, stavesmo62140);
smo70387.setContext(context);
smo70387.draw();
smo70388.setContext(context);
smo70388.draw();
smo70389.setContext(context);
smo70389.draw();
smo70390.setContext(context);
smo70390.draw();
smo70391.setContext(context);
smo70391.draw();
smo70392.setContext(context);
smo70392.draw();
smo70393.setContext(context);
smo70393.draw();
const stavesmo67166 = new VF.Stave(1300, 1450, 509);
stavesmo67166.setAttribute('id', 'stavesmo67166');
stavesmo67166.setBegBarType(VF.Barline.type.NONE);
stavesmo67166.setContext(context);
stavesmo67166.draw();
smo67166v0.draw(context, stavesmo67166);
smo67166v1.draw(context, stavesmo67166);
smo70396.setContext(context);
smo70396.draw();
smo70397.setContext(context);
smo70397.draw();
smo70398.setContext(context);
smo70398.draw();
smo70399.setContext(context);
smo70399.draw();
const rightsmo59060stavesmo621401 = new VF.StaveConnector(stavesmo62140, stavesmo67166).setType(0);
rightsmo59060stavesmo621401.setContext(context).draw();
const fmtsmo6217460 = new VF.Formatter();
//
// voices and notes for stave 0 60
const smo62174v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62174v0ar = [];
const smo62141 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo62141'] = smo62141;
smo62141.setAttribute('id', 'smo62141');
smo62174v0ar.push(smo62141);
const smo62142 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62142'] = smo62142;
smo62142.setAttribute('id', 'smo62142');
smo62174v0ar.push(smo62142);
const smo62143 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo62143'] = smo62143;
smo62143.setAttribute('id', 'smo62143');
smo62174v0ar.push(smo62143);
const smo62144 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo62144'] = smo62144;
smo62144.setAttribute('id', 'smo62144');
smo62174v0ar.push(smo62144);
const smo62145 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo62145'] = smo62145;
smo62145.setAttribute('id', 'smo62145');
const smo621450acc = new VF.Accidental('n');
smo62145.addModifier(smo621450acc, 0);
smo62174v0ar.push(smo62145);
const smo62146 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo62146'] = smo62146;
smo62146.setAttribute('id', 'smo62146');
smo62174v0ar.push(smo62146);
const smo62147 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo62147'] = smo62147;
smo62147.setAttribute('id', 'smo62147');
smo62174v0ar.push(smo62147);
const smo62148 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo62148'] = smo62148;
smo62148.setAttribute('id', 'smo62148');
smo62174v0ar.push(smo62148);
const smo62149 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo62149'] = smo62149;
smo62149.setAttribute('id', 'smo62149');
smo62174v0ar.push(smo62149);
smo62174v0.addTickables(smo62174v0ar)
fmtsmo6217460.joinVoices([smo62174v0]);
const smo62174v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62174v1ar = [];
const smo62150 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo62150'] = smo62150;
smo62150.setAttribute('id', 'smo62150');
smo62150.setStyle({ fillStyle: "#115511" });
smo62174v1ar.push(smo62150);
const smo62151 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/4/n"]}'))
noteHash['smo62151'] = smo62151;
smo62151.setAttribute('id', 'smo62151');
smo62151.setStyle({ fillStyle: "#115511" });
const smo621510acc = new VF.Accidental('b');
smo62151.addModifier(smo621510acc, 0);
smo62174v1ar.push(smo62151);
const smo62152 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo62152'] = smo62152;
smo62152.setAttribute('id', 'smo62152');
smo62152.setStyle({ fillStyle: "#115511" });
smo62174v1ar.push(smo62152);
const smo62153 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo62153'] = smo62153;
smo62153.setAttribute('id', 'smo62153');
smo62153.setStyle({ fillStyle: "#115511" });
smo62174v1ar.push(smo62153);
const smo62154 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo62154'] = smo62154;
smo62154.setAttribute('id', 'smo62154');
smo62154.setStyle({ fillStyle: "#115511" });
smo62174v1ar.push(smo62154);
const smo62155 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo62155'] = smo62155;
smo62155.setAttribute('id', 'smo62155');
smo62155.setStyle({ fillStyle: "#115511" });
smo62174v1ar.push(smo62155);
const smo62156 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo62156'] = smo62156;
smo62156.setAttribute('id', 'smo62156');
smo62156.setStyle({ fillStyle: "#115511" });
smo62174v1ar.push(smo62156);
const smo62157 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo62157'] = smo62157;
smo62157.setAttribute('id', 'smo62157');
smo62157.setStyle({ fillStyle: "#115511" });
smo62174v1ar.push(smo62157);
const smo62158 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo62158'] = smo62158;
smo62158.setAttribute('id', 'smo62158');
smo62158.setStyle({ fillStyle: "#115511" });
smo62174v1ar.push(smo62158);
const smo62159 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo62159'] = smo62159;
smo62159.setAttribute('id', 'smo62159');
smo62159.setStyle({ fillStyle: "#115511" });
smo62159.addModifier(new VF.Dot(), 0);
smo62174v1ar.push(smo62159);
const smo62160 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo62160'] = smo62160;
smo62160.setAttribute('id', 'smo62160');
smo62160.setStyle({ fillStyle: "#115511" });
smo62174v1ar.push(smo62160);
smo62174v1.addTickables(smo62174v1ar)
fmtsmo6217460.joinVoices([smo62174v1]);
const fmtsmo6719060 = new VF.Formatter();
//
// voices and notes for stave 1 60
const smo67190v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67190v0ar = [];
const smo67167 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo67167'] = smo67167;
smo67167.setAttribute('id', 'smo67167');
smo67190v0ar.push(smo67167);
const smo67168 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo67168'] = smo67168;
smo67168.setAttribute('id', 'smo67168');
smo67190v0ar.push(smo67168);
const smo67169 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo67169'] = smo67169;
smo67169.setAttribute('id', 'smo67169');
smo67190v0ar.push(smo67169);
const smo67170 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67170'] = smo67170;
smo67170.setAttribute('id', 'smo67170');
smo67190v0ar.push(smo67170);
const smo67171 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo67171'] = smo67171;
smo67171.setAttribute('id', 'smo67171');
smo67190v0ar.push(smo67171);
const smo67172 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo67172'] = smo67172;
smo67172.setAttribute('id', 'smo67172');
smo67190v0ar.push(smo67172);
const smo67173 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo67173'] = smo67173;
smo67173.setAttribute('id', 'smo67173');
smo67190v0ar.push(smo67173);
const smo67174 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo67174'] = smo67174;
smo67174.setAttribute('id', 'smo67174');
smo67190v0ar.push(smo67174);
const smo67175 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo67175'] = smo67175;
smo67175.setAttribute('id', 'smo67175');
smo67190v0ar.push(smo67175);
smo67190v0.addTickables(smo67190v0ar)
fmtsmo6719060.joinVoices([smo67190v0]);
const smo67190v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67190v1ar = [];
const smo67176 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo67176'] = smo67176;
smo67176.setAttribute('id', 'smo67176');
smo67176.setStyle({ fillStyle: "#115511" });
smo67190v1ar.push(smo67176);
smo67190v1.addTickables(smo67190v1ar)
fmtsmo6719060.joinVoices([smo67190v1]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo70413 = smo62143.getStemDirection();
smo62143.setStemDirection(dirsmo70413);
smo62144.setStemDirection(dirsmo70413);
smo62145.setStemDirection(dirsmo70413);
smo62146.setStemDirection(dirsmo70413);
const smo70413 = new VF.Beam([smo62143,smo62144,smo62145,smo62146]);
const dirsmo70414 = smo62147.getStemDirection();
smo62147.setStemDirection(dirsmo70414);
smo62148.setStemDirection(dirsmo70414);
smo62149.setStemDirection(dirsmo70414);
const smo70414 = new VF.Beam([smo62147,smo62148,smo62149]);
const dirsmo70415 = smo62150.getStemDirection();
smo62150.setStemDirection(dirsmo70415);
smo62151.setStemDirection(dirsmo70415);
smo62152.setStemDirection(dirsmo70415);
smo62153.setStemDirection(dirsmo70415);
const smo70415 = new VF.Beam([smo62150,smo62151,smo62152,smo62153]);
const dirsmo70416 = smo62154.getStemDirection();
smo62154.setStemDirection(dirsmo70416);
smo62155.setStemDirection(dirsmo70416);
smo62156.setStemDirection(dirsmo70416);
smo62157.setStemDirection(dirsmo70416);
const smo70416 = new VF.Beam([smo62154,smo62155,smo62156,smo62157]);
const dirsmo70417 = smo62159.getStemDirection();
smo62159.setStemDirection(dirsmo70417);
smo62160.setStemDirection(dirsmo70417);
const smo70417 = new VF.Beam([smo62159,smo62160]);
const dirsmo70420 = smo67167.getStemDirection();
smo67167.setStemDirection(dirsmo70420);
smo67168.setStemDirection(dirsmo70420);
smo67169.setStemDirection(dirsmo70420);
smo67170.setStemDirection(dirsmo70420);
const smo70420 = new VF.Beam([smo67167,smo67168,smo67169,smo67170]);
const dirsmo70421 = smo67171.getStemDirection();
smo67171.setStemDirection(dirsmo70421);
smo67172.setStemDirection(dirsmo70421);
smo67173.setStemDirection(dirsmo70421);
smo67174.setStemDirection(dirsmo70421);
const smo70421 = new VF.Beam([smo67171,smo67172,smo67173,smo67174]);
 
// formatting measures in staff group smo59060
fmtsmo6217460.format([smo62174v0,smo62174v1,smo67190v0,smo67190v1], 521);
const stavesmo62174 = new VF.Stave(90, 1679, 579);
stavesmo62174.setAttribute('id', 'stavesmo62174');
stavesmo62174.setBegBarType(1);
stavesmo62174.addClef('treble');
stavesmo62174.setContext(context);
stavesmo62174.draw();
smo62174v0.draw(context, stavesmo62174);
smo62174v1.draw(context, stavesmo62174);
smo70413.setContext(context);
smo70413.draw();
smo70414.setContext(context);
smo70414.draw();
smo70415.setContext(context);
smo70415.draw();
smo70416.setContext(context);
smo70416.draw();
smo70417.setContext(context);
smo70417.draw();
const stavesmo67190 = new VF.Stave(90, 1808, 579);
stavesmo67190.setAttribute('id', 'stavesmo67190');
stavesmo67190.setBegBarType(1);
stavesmo67190.addClef('bass');
stavesmo67190.setContext(context);
stavesmo67190.draw();
smo67190v0.draw(context, stavesmo67190);
smo67190v1.draw(context, stavesmo67190);
smo70420.setContext(context);
smo70420.draw();
smo70421.setContext(context);
smo70421.draw();
const leftsmo59060stavesmo621741 = new VF.StaveConnector(stavesmo62174, stavesmo67190).setType(3);
leftsmo59060stavesmo621741.setContext(context).draw();
const fmtsmo6220361 = new VF.Formatter();
//
// voices and notes for stave 0 61
const smo62203v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62203v0ar = [];
const smo62175 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo62175'] = smo62175;
smo62175.setAttribute('id', 'smo62175');
smo62203v0ar.push(smo62175);
const smo62176 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo62176'] = smo62176;
smo62176.setAttribute('id', 'smo62176');
smo62203v0ar.push(smo62176);
const smo62177 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo62177'] = smo62177;
smo62177.setAttribute('id', 'smo62177');
smo62203v0ar.push(smo62177);
const smo62178 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo62178'] = smo62178;
smo62178.setAttribute('id', 'smo62178');
smo62203v0ar.push(smo62178);
const smo62179 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo62179'] = smo62179;
smo62179.setAttribute('id', 'smo62179');
smo62203v0ar.push(smo62179);
const smo62180 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo62180'] = smo62180;
smo62180.setAttribute('id', 'smo62180');
smo62203v0ar.push(smo62180);
const smo62181 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
noteHash['smo62181'] = smo62181;
smo62181.setAttribute('id', 'smo62181');
smo62181.addModifier(new VF.Dot(), 0);
smo62203v0ar.push(smo62181);
const smo62182 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/5/n"]}'))
noteHash['smo62182'] = smo62182;
smo62182.setAttribute('id', 'smo62182');
smo62203v0ar.push(smo62182);
const smo62183 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/6/n"]}'))
noteHash['smo62183'] = smo62183;
smo62183.setAttribute('id', 'smo62183');
const  smo72177 = new VF.Articulation('a@a').setPosition(3);
smo62183.addModifier(smo72177, 0);
smo62203v0ar.push(smo62183);
smo62203v0.addTickables(smo62203v0ar)
fmtsmo6220361.joinVoices([smo62203v0]);
const smo62203v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62203v1ar = [];
const smo62185 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo62185'] = smo62185;
smo62185.setAttribute('id', 'smo62185');
smo62185.setStyle({ fillStyle: "#115511" });
smo62203v1ar.push(smo62185);
const smo62186 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62186'] = smo62186;
smo62186.setAttribute('id', 'smo62186');
smo62186.setStyle({ fillStyle: "#115511" });
smo62203v1ar.push(smo62186);
const smo62187 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo62187'] = smo62187;
smo62187.setAttribute('id', 'smo62187');
smo62187.setStyle({ fillStyle: "#115511" });
smo62203v1ar.push(smo62187);
const smo62188 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo62188'] = smo62188;
smo62188.setAttribute('id', 'smo62188');
smo62188.setStyle({ fillStyle: "#115511" });
smo62203v1ar.push(smo62188);
const smo62189 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n","gn/5/n"]}'))
noteHash['smo62189'] = smo62189;
smo62189.setAttribute('id', 'smo62189');
smo62189.setStyle({ fillStyle: "#115511" });
smo62203v1ar.push(smo62189);
smo62203v1.addTickables(smo62203v1ar)
fmtsmo6220361.joinVoices([smo62203v1]);
const fmtsmo6720661 = new VF.Formatter();
//
// voices and notes for stave 1 61
const smo67206v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67206v0ar = [];
const smo67191 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo67191'] = smo67191;
smo67191.setAttribute('id', 'smo67191');
smo67206v0ar.push(smo67191);
smo67206v0.addTickables(smo67206v0ar)
fmtsmo6720661.joinVoices([smo67206v0]);
const smo67206v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67206v1ar = [];
const smo67192 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo67192'] = smo67192;
smo67192.setAttribute('id', 'smo67192');
smo67192.setStyle({ fillStyle: "#115511" });
smo67206v1ar.push(smo67192);
smo67206v1.addTickables(smo67206v1ar)
fmtsmo6720661.joinVoices([smo67206v1]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo70424 = smo62175.getStemDirection();
smo62175.setStemDirection(dirsmo70424);
smo62176.setStemDirection(dirsmo70424);
smo62177.setStemDirection(dirsmo70424);
smo62178.setStemDirection(dirsmo70424);
smo62179.setStemDirection(dirsmo70424);
smo62180.setStemDirection(dirsmo70424);
const smo70424 = new VF.Beam([smo62175,smo62176,smo62177,smo62178,smo62179,smo62180]);
const dirsmo70425 = smo62181.getStemDirection();
smo62181.setStemDirection(dirsmo70425);
smo62182.setStemDirection(dirsmo70425);
const smo70425 = new VF.Beam([smo62181,smo62182]);
const dirsmo70426 = smo62187.getStemDirection();
smo62187.setStemDirection(dirsmo70426);
smo62188.setStemDirection(dirsmo70426);
const smo70426 = new VF.Beam([smo62187,smo62188]);
 
// formatting measures in staff group smo59060
fmtsmo6220361.format([smo62203v0,smo62203v1,smo67206v0,smo67206v1], 329);
const stavesmo62203 = new VF.Stave(669, 1679, 351);
stavesmo62203.setAttribute('id', 'stavesmo62203');
stavesmo62203.setBegBarType(VF.Barline.type.NONE);
stavesmo62203.setEndBarType(3);
stavesmo62203.setContext(context);
stavesmo62203.draw();
smo62203v0.draw(context, stavesmo62203);
smo62203v1.draw(context, stavesmo62203);
smo70424.setContext(context);
smo70424.draw();
smo70425.setContext(context);
smo70425.draw();
smo70426.setContext(context);
smo70426.draw();
const stavesmo67206 = new VF.Stave(669, 1808, 351);
stavesmo67206.setAttribute('id', 'stavesmo67206');
stavesmo67206.setBegBarType(VF.Barline.type.NONE);
stavesmo67206.setEndBarType(3);
stavesmo67206.setContext(context);
stavesmo67206.draw();
smo67206v0.draw(context, stavesmo67206);
smo67206v1.draw(context, stavesmo67206);
const fmtsmo6223362 = new VF.Formatter();
//
// voices and notes for stave 0 62
const smo62233v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62233v0ar = [];
const smo62204 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo62204'] = smo62204;
smo62204.setAttribute('id', 'smo62204');
smo62233v0ar.push(smo62204);
const smo62205 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
noteHash['smo62205'] = smo62205;
smo62205.setAttribute('id', 'smo62205');
smo62233v0ar.push(smo62205);
const smo62206 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo62206'] = smo62206;
smo62206.setAttribute('id', 'smo62206');
smo62233v0ar.push(smo62206);
const smo62207 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
noteHash['smo62207'] = smo62207;
smo62207.setAttribute('id', 'smo62207');
smo62233v0ar.push(smo62207);
const smo62208 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo62208'] = smo62208;
smo62208.setAttribute('id', 'smo62208');
smo62233v0ar.push(smo62208);
const smo62209 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
noteHash['smo62209'] = smo62209;
smo62209.setAttribute('id', 'smo62209');
smo62233v0ar.push(smo62209);
const smo62210 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo62210'] = smo62210;
smo62210.setAttribute('id', 'smo62210');
smo62233v0ar.push(smo62210);
const smo62211 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
noteHash['smo62211'] = smo62211;
smo62211.setAttribute('id', 'smo62211');
smo62233v0ar.push(smo62211);
const smo62212 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo62212'] = smo62212;
smo62212.setAttribute('id', 'smo62212');
smo62233v0ar.push(smo62212);
const smo62213 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
noteHash['smo62213'] = smo62213;
smo62213.setAttribute('id', 'smo62213');
smo62233v0ar.push(smo62213);
const smo62214 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo62214'] = smo62214;
smo62214.setAttribute('id', 'smo62214');
smo62233v0ar.push(smo62214);
const smo62215 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
noteHash['smo62215'] = smo62215;
smo62215.setAttribute('id', 'smo62215');
smo62233v0ar.push(smo62215);
const smo62216 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo62216'] = smo62216;
smo62216.setAttribute('id', 'smo62216');
smo62233v0ar.push(smo62216);
const smo62217 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
noteHash['smo62217'] = smo62217;
smo62217.setAttribute('id', 'smo62217');
smo62233v0ar.push(smo62217);
const smo62218 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo62218'] = smo62218;
smo62218.setAttribute('id', 'smo62218');
smo62233v0ar.push(smo62218);
const smo62219 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
noteHash['smo62219'] = smo62219;
smo62219.setAttribute('id', 'smo62219');
smo62233v0ar.push(smo62219);
smo62233v0.addTickables(smo62233v0ar)
fmtsmo6223362.joinVoices([smo62233v0]);
const fmtsmo6723662 = new VF.Formatter();
//
// voices and notes for stave 1 62
const smo67236v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67236v0ar = [];
const smo67207 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo67207'] = smo67207;
smo67207.setAttribute('id', 'smo67207');
smo67236v0ar.push(smo67207);
const smo67208 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67208'] = smo67208;
smo67208.setAttribute('id', 'smo67208');
smo67236v0ar.push(smo67208);
const smo67209 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo67209'] = smo67209;
smo67209.setAttribute('id', 'smo67209');
smo67236v0ar.push(smo67209);
const smo67210 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67210'] = smo67210;
smo67210.setAttribute('id', 'smo67210');
smo67236v0ar.push(smo67210);
const smo67211 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
noteHash['smo67211'] = smo67211;
smo67211.setAttribute('id', 'smo67211');
smo67236v0ar.push(smo67211);
const smo67212 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67212'] = smo67212;
smo67212.setAttribute('id', 'smo67212');
smo67236v0ar.push(smo67212);
const smo67213 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo67213'] = smo67213;
smo67213.setAttribute('id', 'smo67213');
smo67236v0ar.push(smo67213);
const smo67214 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67214'] = smo67214;
smo67214.setAttribute('id', 'smo67214');
smo67236v0ar.push(smo67214);
const smo67215 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo67215'] = smo67215;
smo67215.setAttribute('id', 'smo67215');
smo67236v0ar.push(smo67215);
const smo67216 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67216'] = smo67216;
smo67216.setAttribute('id', 'smo67216');
smo67236v0ar.push(smo67216);
const smo67217 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo67217'] = smo67217;
smo67217.setAttribute('id', 'smo67217');
smo67236v0ar.push(smo67217);
const smo67218 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67218'] = smo67218;
smo67218.setAttribute('id', 'smo67218');
smo67236v0ar.push(smo67218);
const smo67219 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
noteHash['smo67219'] = smo67219;
smo67219.setAttribute('id', 'smo67219');
smo67236v0ar.push(smo67219);
const smo67220 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67220'] = smo67220;
smo67220.setAttribute('id', 'smo67220');
smo67236v0ar.push(smo67220);
const smo67221 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo67221'] = smo67221;
smo67221.setAttribute('id', 'smo67221');
smo67236v0ar.push(smo67221);
const smo67222 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67222'] = smo67222;
smo67222.setAttribute('id', 'smo67222');
smo67236v0ar.push(smo67222);
smo67236v0.addTickables(smo67236v0ar)
fmtsmo6723662.joinVoices([smo67236v0]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo70429 = smo62204.getStemDirection();
smo62204.setStemDirection(dirsmo70429);
smo62205.setStemDirection(dirsmo70429);
smo62206.setStemDirection(dirsmo70429);
smo62207.setStemDirection(dirsmo70429);
const smo70429 = new VF.Beam([smo62204,smo62205,smo62206,smo62207]);
const dirsmo70430 = smo62208.getStemDirection();
smo62208.setStemDirection(dirsmo70430);
smo62209.setStemDirection(dirsmo70430);
smo62210.setStemDirection(dirsmo70430);
smo62211.setStemDirection(dirsmo70430);
const smo70430 = new VF.Beam([smo62208,smo62209,smo62210,smo62211]);
const dirsmo70431 = smo62212.getStemDirection();
smo62212.setStemDirection(dirsmo70431);
smo62213.setStemDirection(dirsmo70431);
smo62214.setStemDirection(dirsmo70431);
smo62215.setStemDirection(dirsmo70431);
const smo70431 = new VF.Beam([smo62212,smo62213,smo62214,smo62215]);
const dirsmo70432 = smo62216.getStemDirection();
smo62216.setStemDirection(dirsmo70432);
smo62217.setStemDirection(dirsmo70432);
smo62218.setStemDirection(dirsmo70432);
smo62219.setStemDirection(dirsmo70432);
const smo70432 = new VF.Beam([smo62216,smo62217,smo62218,smo62219]);
const dirsmo70435 = smo67207.getStemDirection();
smo67207.setStemDirection(dirsmo70435);
smo67208.setStemDirection(dirsmo70435);
smo67209.setStemDirection(dirsmo70435);
smo67210.setStemDirection(dirsmo70435);
const smo70435 = new VF.Beam([smo67207,smo67208,smo67209,smo67210]);
const dirsmo70436 = smo67211.getStemDirection();
smo67211.setStemDirection(dirsmo70436);
smo67212.setStemDirection(dirsmo70436);
smo67213.setStemDirection(dirsmo70436);
smo67214.setStemDirection(dirsmo70436);
const smo70436 = new VF.Beam([smo67211,smo67212,smo67213,smo67214]);
const dirsmo70437 = smo67215.getStemDirection();
smo67215.setStemDirection(dirsmo70437);
smo67216.setStemDirection(dirsmo70437);
smo67217.setStemDirection(dirsmo70437);
smo67218.setStemDirection(dirsmo70437);
const smo70437 = new VF.Beam([smo67215,smo67216,smo67217,smo67218]);
const dirsmo70438 = smo67219.getStemDirection();
smo67219.setStemDirection(dirsmo70438);
smo67220.setStemDirection(dirsmo70438);
smo67221.setStemDirection(dirsmo70438);
smo67222.setStemDirection(dirsmo70438);
const smo70438 = new VF.Beam([smo67219,smo67220,smo67221,smo67222]);
 
// formatting measures in staff group smo59060
fmtsmo6223362.format([smo62233v0,smo67236v0], 335);
const stavesmo62233 = new VF.Stave(1020, 1679, 394);
stavesmo62233.setAttribute('id', 'stavesmo62233');
stavesmo62233.setBegBarType(VF.Barline.type.NONE);
stavesmo62233.setTempo(JSON.parse('{"duration":"4","dots":0,"bpm":144,"name":"Allegro Vivace"}'), -1 * 6);
const keysmo62233 = new VF.KeySignature('Eb');
keysmo62233.cancelKey('C');
keysmo62233.addToStave(stavesmo62233);
stavesmo62233.setContext(context);
stavesmo62233.draw();
smo62233v0.draw(context, stavesmo62233);
smo70429.setContext(context);
smo70429.draw();
smo70430.setContext(context);
smo70430.draw();
smo70431.setContext(context);
smo70431.draw();
smo70432.setContext(context);
smo70432.draw();
const stavesmo67236 = new VF.Stave(1020, 1808, 394);
stavesmo67236.setAttribute('id', 'stavesmo67236');
stavesmo67236.setBegBarType(VF.Barline.type.NONE);
const keysmo67236 = new VF.KeySignature('Eb');
keysmo67236.cancelKey('C');
keysmo67236.addToStave(stavesmo67236);
stavesmo67236.setContext(context);
stavesmo67236.draw();
smo67236v0.draw(context, stavesmo67236);
smo70435.setContext(context);
smo70435.draw();
smo70436.setContext(context);
smo70436.draw();
smo70437.setContext(context);
smo70437.draw();
smo70438.setContext(context);
smo70438.draw();
const fmtsmo6226363 = new VF.Formatter();
//
// voices and notes for stave 0 63
const smo62263v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62263v0ar = [];
const smo62234 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
noteHash['smo62234'] = smo62234;
smo62234.setAttribute('id', 'smo62234');
smo62263v0ar.push(smo62234);
const smo62235 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo62235'] = smo62235;
smo62235.setAttribute('id', 'smo62235');
smo62263v0ar.push(smo62235);
const smo62236 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo62236'] = smo62236;
smo62236.setAttribute('id', 'smo62236');
const smo622360acc = new VF.Accidental('n');
smo62236.addModifier(smo622360acc, 0);
smo62263v0ar.push(smo62236);
const smo62237 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo62237'] = smo62237;
smo62237.setAttribute('id', 'smo62237');
smo62263v0ar.push(smo62237);
const smo62238 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo62238'] = smo62238;
smo62238.setAttribute('id', 'smo62238');
smo62263v0ar.push(smo62238);
const smo62239 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo62239'] = smo62239;
smo62239.setAttribute('id', 'smo62239');
smo62263v0ar.push(smo62239);
const smo62240 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo62240'] = smo62240;
smo62240.setAttribute('id', 'smo62240');
smo62263v0ar.push(smo62240);
const smo62241 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo62241'] = smo62241;
smo62241.setAttribute('id', 'smo62241');
smo62263v0ar.push(smo62241);
const smo62242 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
noteHash['smo62242'] = smo62242;
smo62242.setAttribute('id', 'smo62242');
smo62263v0ar.push(smo62242);
const smo62243 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo62243'] = smo62243;
smo62243.setAttribute('id', 'smo62243');
smo62263v0ar.push(smo62243);
const smo62244 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo62244'] = smo62244;
smo62244.setAttribute('id', 'smo62244');
smo62263v0ar.push(smo62244);
const smo62245 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo62245'] = smo62245;
smo62245.setAttribute('id', 'smo62245');
smo62263v0ar.push(smo62245);
const smo62246 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo62246'] = smo62246;
smo62246.setAttribute('id', 'smo62246');
smo62263v0ar.push(smo62246);
const smo62247 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo62247'] = smo62247;
smo62247.setAttribute('id', 'smo62247');
smo62263v0ar.push(smo62247);
const smo62248 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo62248'] = smo62248;
smo62248.setAttribute('id', 'smo62248');
smo62263v0ar.push(smo62248);
const smo62249 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo62249'] = smo62249;
smo62249.setAttribute('id', 'smo62249');
smo62263v0ar.push(smo62249);
smo62263v0.addTickables(smo62263v0ar)
fmtsmo6226363.joinVoices([smo62263v0]);
const fmtsmo6726663 = new VF.Formatter();
//
// voices and notes for stave 1 63
const smo67266v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67266v0ar = [];
const smo67237 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo67237'] = smo67237;
smo67237.setAttribute('id', 'smo67237');
smo67266v0ar.push(smo67237);
const smo67238 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo67238'] = smo67238;
smo67238.setAttribute('id', 'smo67238');
smo67266v0ar.push(smo67238);
const smo67239 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67239'] = smo67239;
smo67239.setAttribute('id', 'smo67239');
smo67266v0ar.push(smo67239);
const smo67240 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo67240'] = smo67240;
smo67240.setAttribute('id', 'smo67240');
smo67266v0ar.push(smo67240);
const smo67241 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo67241'] = smo67241;
smo67241.setAttribute('id', 'smo67241');
smo67266v0ar.push(smo67241);
const smo67242 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo67242'] = smo67242;
smo67242.setAttribute('id', 'smo67242');
smo67266v0ar.push(smo67242);
const smo67243 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67243'] = smo67243;
smo67243.setAttribute('id', 'smo67243');
smo67266v0ar.push(smo67243);
const smo67244 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo67244'] = smo67244;
smo67244.setAttribute('id', 'smo67244');
smo67266v0ar.push(smo67244);
const smo67245 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo67245'] = smo67245;
smo67245.setAttribute('id', 'smo67245');
smo67266v0ar.push(smo67245);
const smo67246 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo67246'] = smo67246;
smo67246.setAttribute('id', 'smo67246');
smo67266v0ar.push(smo67246);
const smo67247 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67247'] = smo67247;
smo67247.setAttribute('id', 'smo67247');
smo67266v0ar.push(smo67247);
const smo67248 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo67248'] = smo67248;
smo67248.setAttribute('id', 'smo67248');
smo67266v0ar.push(smo67248);
const smo67249 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo67249'] = smo67249;
smo67249.setAttribute('id', 'smo67249');
smo67266v0ar.push(smo67249);
const smo67250 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo67250'] = smo67250;
smo67250.setAttribute('id', 'smo67250');
smo67266v0ar.push(smo67250);
const smo67251 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67251'] = smo67251;
smo67251.setAttribute('id', 'smo67251');
smo67266v0ar.push(smo67251);
const smo67252 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo67252'] = smo67252;
smo67252.setAttribute('id', 'smo67252');
smo67266v0ar.push(smo67252);
smo67266v0.addTickables(smo67266v0ar)
fmtsmo6726663.joinVoices([smo67266v0]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo70441 = smo62234.getStemDirection();
smo62234.setStemDirection(dirsmo70441);
smo62235.setStemDirection(dirsmo70441);
smo62236.setStemDirection(dirsmo70441);
smo62237.setStemDirection(dirsmo70441);
const smo70441 = new VF.Beam([smo62234,smo62235,smo62236,smo62237]);
const dirsmo70442 = smo62238.getStemDirection();
smo62238.setStemDirection(dirsmo70442);
smo62239.setStemDirection(dirsmo70442);
smo62240.setStemDirection(dirsmo70442);
smo62241.setStemDirection(dirsmo70442);
const smo70442 = new VF.Beam([smo62238,smo62239,smo62240,smo62241]);
const dirsmo70443 = smo62242.getStemDirection();
smo62242.setStemDirection(dirsmo70443);
smo62243.setStemDirection(dirsmo70443);
smo62244.setStemDirection(dirsmo70443);
smo62245.setStemDirection(dirsmo70443);
const smo70443 = new VF.Beam([smo62242,smo62243,smo62244,smo62245]);
const dirsmo70444 = smo62246.getStemDirection();
smo62246.setStemDirection(dirsmo70444);
smo62247.setStemDirection(dirsmo70444);
smo62248.setStemDirection(dirsmo70444);
smo62249.setStemDirection(dirsmo70444);
const smo70444 = new VF.Beam([smo62246,smo62247,smo62248,smo62249]);
const dirsmo70447 = smo67237.getStemDirection();
smo67237.setStemDirection(dirsmo70447);
smo67238.setStemDirection(dirsmo70447);
smo67239.setStemDirection(dirsmo70447);
smo67240.setStemDirection(dirsmo70447);
const smo70447 = new VF.Beam([smo67237,smo67238,smo67239,smo67240]);
const dirsmo70448 = smo67241.getStemDirection();
smo67241.setStemDirection(dirsmo70448);
smo67242.setStemDirection(dirsmo70448);
smo67243.setStemDirection(dirsmo70448);
smo67244.setStemDirection(dirsmo70448);
const smo70448 = new VF.Beam([smo67241,smo67242,smo67243,smo67244]);
const dirsmo70449 = smo67245.getStemDirection();
smo67245.setStemDirection(dirsmo70449);
smo67246.setStemDirection(dirsmo70449);
smo67247.setStemDirection(dirsmo70449);
smo67248.setStemDirection(dirsmo70449);
const smo70449 = new VF.Beam([smo67245,smo67246,smo67247,smo67248]);
const dirsmo70450 = smo67249.getStemDirection();
smo67249.setStemDirection(dirsmo70450);
smo67250.setStemDirection(dirsmo70450);
smo67251.setStemDirection(dirsmo70450);
smo67252.setStemDirection(dirsmo70450);
const smo70450 = new VF.Beam([smo67249,smo67250,smo67251,smo67252]);
 
// formatting measures in staff group smo59060
fmtsmo6226363.format([smo62263v0,smo67266v0], 379);
const stavesmo62263 = new VF.Stave(1414, 1679, 393);
stavesmo62263.setAttribute('id', 'stavesmo62263');
stavesmo62263.setBegBarType(VF.Barline.type.NONE);
stavesmo62263.setContext(context);
stavesmo62263.draw();
smo62263v0.draw(context, stavesmo62263);
smo70441.setContext(context);
smo70441.draw();
smo70442.setContext(context);
smo70442.draw();
smo70443.setContext(context);
smo70443.draw();
smo70444.setContext(context);
smo70444.draw();
const stavesmo67266 = new VF.Stave(1414, 1808, 393);
stavesmo67266.setAttribute('id', 'stavesmo67266');
stavesmo67266.setBegBarType(VF.Barline.type.NONE);
stavesmo67266.setContext(context);
stavesmo67266.draw();
smo67266v0.draw(context, stavesmo67266);
smo70447.setContext(context);
smo70447.draw();
smo70448.setContext(context);
smo70448.draw();
smo70449.setContext(context);
smo70449.draw();
smo70450.setContext(context);
smo70450.draw();
const rightsmo59060stavesmo622631 = new VF.StaveConnector(stavesmo62263, stavesmo67266).setType(0);
rightsmo59060stavesmo622631.setContext(context).draw();
const fmtsmo6229364 = new VF.Formatter();
//
// voices and notes for stave 0 64
const smo62293v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62293v0ar = [];
const smo62264 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo62264'] = smo62264;
smo62264.setAttribute('id', 'smo62264');
const smo622640acc = new VF.Accidental('n');
smo62264.addModifier(smo622640acc, 0);
smo62293v0ar.push(smo62264);
const smo62265 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo62265'] = smo62265;
smo62265.setAttribute('id', 'smo62265');
smo62293v0ar.push(smo62265);
const smo62266 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
noteHash['smo62266'] = smo62266;
smo62266.setAttribute('id', 'smo62266');
smo62293v0ar.push(smo62266);
const smo62267 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo62267'] = smo62267;
smo62267.setAttribute('id', 'smo62267');
smo62293v0ar.push(smo62267);
const smo62268 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo62268'] = smo62268;
smo62268.setAttribute('id', 'smo62268');
smo62293v0ar.push(smo62268);
const smo62269 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo62269'] = smo62269;
smo62269.setAttribute('id', 'smo62269');
smo62293v0ar.push(smo62269);
const smo62270 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
noteHash['smo62270'] = smo62270;
smo62270.setAttribute('id', 'smo62270');
smo62293v0ar.push(smo62270);
const smo62271 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo62271'] = smo62271;
smo62271.setAttribute('id', 'smo62271');
smo62293v0ar.push(smo62271);
const smo62272 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo62272'] = smo62272;
smo62272.setAttribute('id', 'smo62272');
smo62293v0ar.push(smo62272);
const smo62273 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo62273'] = smo62273;
smo62273.setAttribute('id', 'smo62273');
smo62293v0ar.push(smo62273);
const smo62274 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
noteHash['smo62274'] = smo62274;
smo62274.setAttribute('id', 'smo62274');
smo62293v0ar.push(smo62274);
const smo62275 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo62275'] = smo62275;
smo62275.setAttribute('id', 'smo62275');
smo62293v0ar.push(smo62275);
const smo62276 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo62276'] = smo62276;
smo62276.setAttribute('id', 'smo62276');
smo62293v0ar.push(smo62276);
const smo62277 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo62277'] = smo62277;
smo62277.setAttribute('id', 'smo62277');
smo62293v0ar.push(smo62277);
const smo62278 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
noteHash['smo62278'] = smo62278;
smo62278.setAttribute('id', 'smo62278');
smo62293v0ar.push(smo62278);
const smo62279 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo62279'] = smo62279;
smo62279.setAttribute('id', 'smo62279');
smo62293v0ar.push(smo62279);
smo62293v0.addTickables(smo62293v0ar)
fmtsmo6229364.joinVoices([smo62293v0]);
const fmtsmo6729664 = new VF.Formatter();
//
// voices and notes for stave 1 64
const smo67296v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67296v0ar = [];
const smo67267 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo67267'] = smo67267;
smo67267.setAttribute('id', 'smo67267');
smo67296v0ar.push(smo67267);
const smo67268 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo67268'] = smo67268;
smo67268.setAttribute('id', 'smo67268');
smo67296v0ar.push(smo67268);
const smo67269 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67269'] = smo67269;
smo67269.setAttribute('id', 'smo67269');
smo67296v0ar.push(smo67269);
const smo67270 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo67270'] = smo67270;
smo67270.setAttribute('id', 'smo67270');
smo67296v0ar.push(smo67270);
const smo67271 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo67271'] = smo67271;
smo67271.setAttribute('id', 'smo67271');
smo67296v0ar.push(smo67271);
const smo67272 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo67272'] = smo67272;
smo67272.setAttribute('id', 'smo67272');
smo67296v0ar.push(smo67272);
const smo67273 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67273'] = smo67273;
smo67273.setAttribute('id', 'smo67273');
smo67296v0ar.push(smo67273);
const smo67274 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo67274'] = smo67274;
smo67274.setAttribute('id', 'smo67274');
smo67296v0ar.push(smo67274);
const smo67275 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo67275'] = smo67275;
smo67275.setAttribute('id', 'smo67275');
smo67296v0ar.push(smo67275);
const smo67276 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo67276'] = smo67276;
smo67276.setAttribute('id', 'smo67276');
smo67296v0ar.push(smo67276);
const smo67277 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67277'] = smo67277;
smo67277.setAttribute('id', 'smo67277');
smo67296v0ar.push(smo67277);
const smo67278 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo67278'] = smo67278;
smo67278.setAttribute('id', 'smo67278');
smo67296v0ar.push(smo67278);
const smo67279 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo67279'] = smo67279;
smo67279.setAttribute('id', 'smo67279');
smo67296v0ar.push(smo67279);
const smo67280 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo67280'] = smo67280;
smo67280.setAttribute('id', 'smo67280');
smo67296v0ar.push(smo67280);
const smo67281 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67281'] = smo67281;
smo67281.setAttribute('id', 'smo67281');
smo67296v0ar.push(smo67281);
const smo67282 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo67282'] = smo67282;
smo67282.setAttribute('id', 'smo67282');
smo67296v0ar.push(smo67282);
smo67296v0.addTickables(smo67296v0ar)
fmtsmo6729664.joinVoices([smo67296v0]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo70465 = smo62264.getStemDirection();
smo62264.setStemDirection(dirsmo70465);
smo62265.setStemDirection(dirsmo70465);
smo62266.setStemDirection(dirsmo70465);
smo62267.setStemDirection(dirsmo70465);
const smo70465 = new VF.Beam([smo62264,smo62265,smo62266,smo62267]);
const dirsmo70466 = smo62268.getStemDirection();
smo62268.setStemDirection(dirsmo70466);
smo62269.setStemDirection(dirsmo70466);
smo62270.setStemDirection(dirsmo70466);
smo62271.setStemDirection(dirsmo70466);
const smo70466 = new VF.Beam([smo62268,smo62269,smo62270,smo62271]);
const dirsmo70467 = smo62272.getStemDirection();
smo62272.setStemDirection(dirsmo70467);
smo62273.setStemDirection(dirsmo70467);
smo62274.setStemDirection(dirsmo70467);
smo62275.setStemDirection(dirsmo70467);
const smo70467 = new VF.Beam([smo62272,smo62273,smo62274,smo62275]);
const dirsmo70468 = smo62276.getStemDirection();
smo62276.setStemDirection(dirsmo70468);
smo62277.setStemDirection(dirsmo70468);
smo62278.setStemDirection(dirsmo70468);
smo62279.setStemDirection(dirsmo70468);
const smo70468 = new VF.Beam([smo62276,smo62277,smo62278,smo62279]);
const dirsmo70471 = smo67267.getStemDirection();
smo67267.setStemDirection(dirsmo70471);
smo67268.setStemDirection(dirsmo70471);
smo67269.setStemDirection(dirsmo70471);
smo67270.setStemDirection(dirsmo70471);
const smo70471 = new VF.Beam([smo67267,smo67268,smo67269,smo67270]);
const dirsmo70472 = smo67271.getStemDirection();
smo67271.setStemDirection(dirsmo70472);
smo67272.setStemDirection(dirsmo70472);
smo67273.setStemDirection(dirsmo70472);
smo67274.setStemDirection(dirsmo70472);
const smo70472 = new VF.Beam([smo67271,smo67272,smo67273,smo67274]);
const dirsmo70473 = smo67275.getStemDirection();
smo67275.setStemDirection(dirsmo70473);
smo67276.setStemDirection(dirsmo70473);
smo67277.setStemDirection(dirsmo70473);
smo67278.setStemDirection(dirsmo70473);
const smo70473 = new VF.Beam([smo67275,smo67276,smo67277,smo67278]);
const dirsmo70474 = smo67279.getStemDirection();
smo67279.setStemDirection(dirsmo70474);
smo67280.setStemDirection(dirsmo70474);
smo67281.setStemDirection(dirsmo70474);
smo67282.setStemDirection(dirsmo70474);
const smo70474 = new VF.Beam([smo67279,smo67280,smo67281,smo67282]);
 
// formatting measures in staff group smo59060
fmtsmo6229364.format([smo62293v0,smo67296v0], 370);
const stavesmo62293 = new VF.Stave(90, 1962, 467);
stavesmo62293.setAttribute('id', 'stavesmo62293');
stavesmo62293.setBegBarType(1);
stavesmo62293.addClef('treble');
const keysmo62293 = new VF.KeySignature('Eb');
keysmo62293.addToStave(stavesmo62293);
stavesmo62293.setContext(context);
stavesmo62293.draw();
smo62293v0.draw(context, stavesmo62293);
smo70465.setContext(context);
smo70465.draw();
smo70466.setContext(context);
smo70466.draw();
smo70467.setContext(context);
smo70467.draw();
smo70468.setContext(context);
smo70468.draw();
const stavesmo67296 = new VF.Stave(90, 2051, 467);
stavesmo67296.setAttribute('id', 'stavesmo67296');
stavesmo67296.setBegBarType(1);
stavesmo67296.addClef('bass');
const keysmo67296 = new VF.KeySignature('Eb');
keysmo67296.addToStave(stavesmo67296);
stavesmo67296.setContext(context);
stavesmo67296.draw();
smo67296v0.draw(context, stavesmo67296);
smo70471.setContext(context);
smo70471.draw();
smo70472.setContext(context);
smo70472.draw();
smo70473.setContext(context);
smo70473.draw();
smo70474.setContext(context);
smo70474.draw();
const leftsmo59060stavesmo622931 = new VF.StaveConnector(stavesmo62293, stavesmo67296).setType(3);
leftsmo59060stavesmo622931.setContext(context).draw();
const fmtsmo6232365 = new VF.Formatter();
//
// voices and notes for stave 0 65
const smo62323v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62323v0ar = [];
const smo62294 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo62294'] = smo62294;
smo62294.setAttribute('id', 'smo62294');
smo62323v0ar.push(smo62294);
const smo62295 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo62295'] = smo62295;
smo62295.setAttribute('id', 'smo62295');
smo62323v0ar.push(smo62295);
const smo62296 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo62296'] = smo62296;
smo62296.setAttribute('id', 'smo62296');
smo62323v0ar.push(smo62296);
const smo62297 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo62297'] = smo62297;
smo62297.setAttribute('id', 'smo62297');
smo62323v0ar.push(smo62297);
const smo62298 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
noteHash['smo62298'] = smo62298;
smo62298.setAttribute('id', 'smo62298');
smo62323v0ar.push(smo62298);
const smo62299 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo62299'] = smo62299;
smo62299.setAttribute('id', 'smo62299');
smo62323v0ar.push(smo62299);
const smo62300 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo62300'] = smo62300;
smo62300.setAttribute('id', 'smo62300');
smo62323v0ar.push(smo62300);
const smo62301 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo62301'] = smo62301;
smo62301.setAttribute('id', 'smo62301');
smo62323v0ar.push(smo62301);
const smo62302 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo62302'] = smo62302;
smo62302.setAttribute('id', 'smo62302');
smo62323v0ar.push(smo62302);
const smo62303 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo62303'] = smo62303;
smo62303.setAttribute('id', 'smo62303');
smo62323v0ar.push(smo62303);
const smo62304 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo62304'] = smo62304;
smo62304.setAttribute('id', 'smo62304');
smo62323v0ar.push(smo62304);
const smo62305 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo62305'] = smo62305;
smo62305.setAttribute('id', 'smo62305');
smo62323v0ar.push(smo62305);
const smo62306 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
noteHash['smo62306'] = smo62306;
smo62306.setAttribute('id', 'smo62306');
smo62323v0ar.push(smo62306);
const smo62307 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo62307'] = smo62307;
smo62307.setAttribute('id', 'smo62307');
smo62323v0ar.push(smo62307);
const smo62308 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo62308'] = smo62308;
smo62308.setAttribute('id', 'smo62308');
smo62323v0ar.push(smo62308);
const smo62309 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo62309'] = smo62309;
smo62309.setAttribute('id', 'smo62309');
smo62323v0ar.push(smo62309);
smo62323v0.addTickables(smo62323v0ar)
fmtsmo6232365.joinVoices([smo62323v0]);
const fmtsmo6732665 = new VF.Formatter();
//
// voices and notes for stave 1 65
const smo67326v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67326v0ar = [];
const smo67297 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo67297'] = smo67297;
smo67297.setAttribute('id', 'smo67297');
smo67326v0ar.push(smo67297);
const smo67298 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
noteHash['smo67298'] = smo67298;
smo67298.setAttribute('id', 'smo67298');
smo67326v0ar.push(smo67298);
const smo67299 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo67299'] = smo67299;
smo67299.setAttribute('id', 'smo67299');
smo67326v0ar.push(smo67299);
const smo67300 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
noteHash['smo67300'] = smo67300;
smo67300.setAttribute('id', 'smo67300');
smo67326v0ar.push(smo67300);
const smo67301 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67301'] = smo67301;
smo67301.setAttribute('id', 'smo67301');
smo67326v0ar.push(smo67301);
const smo67302 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
noteHash['smo67302'] = smo67302;
smo67302.setAttribute('id', 'smo67302');
smo67326v0ar.push(smo67302);
const smo67303 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo67303'] = smo67303;
smo67303.setAttribute('id', 'smo67303');
smo67326v0ar.push(smo67303);
const smo67304 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
noteHash['smo67304'] = smo67304;
smo67304.setAttribute('id', 'smo67304');
smo67326v0ar.push(smo67304);
const smo67305 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo67305'] = smo67305;
smo67305.setAttribute('id', 'smo67305');
smo67326v0ar.push(smo67305);
const smo67306 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
noteHash['smo67306'] = smo67306;
smo67306.setAttribute('id', 'smo67306');
smo67326v0ar.push(smo67306);
const smo67307 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo67307'] = smo67307;
smo67307.setAttribute('id', 'smo67307');
smo67326v0ar.push(smo67307);
const smo67308 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
noteHash['smo67308'] = smo67308;
smo67308.setAttribute('id', 'smo67308');
smo67326v0ar.push(smo67308);
const smo67309 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67309'] = smo67309;
smo67309.setAttribute('id', 'smo67309');
smo67326v0ar.push(smo67309);
const smo67310 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
noteHash['smo67310'] = smo67310;
smo67310.setAttribute('id', 'smo67310');
smo67326v0ar.push(smo67310);
const smo67311 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo67311'] = smo67311;
smo67311.setAttribute('id', 'smo67311');
smo67326v0ar.push(smo67311);
const smo67312 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
noteHash['smo67312'] = smo67312;
smo67312.setAttribute('id', 'smo67312');
smo67326v0ar.push(smo67312);
smo67326v0.addTickables(smo67326v0ar)
fmtsmo6732665.joinVoices([smo67326v0]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo70477 = smo62294.getStemDirection();
smo62294.setStemDirection(dirsmo70477);
smo62295.setStemDirection(dirsmo70477);
smo62296.setStemDirection(dirsmo70477);
smo62297.setStemDirection(dirsmo70477);
const smo70477 = new VF.Beam([smo62294,smo62295,smo62296,smo62297]);
const dirsmo70478 = smo62298.getStemDirection();
smo62298.setStemDirection(dirsmo70478);
smo62299.setStemDirection(dirsmo70478);
smo62300.setStemDirection(dirsmo70478);
smo62301.setStemDirection(dirsmo70478);
const smo70478 = new VF.Beam([smo62298,smo62299,smo62300,smo62301]);
const dirsmo70479 = smo62302.getStemDirection();
smo62302.setStemDirection(dirsmo70479);
smo62303.setStemDirection(dirsmo70479);
smo62304.setStemDirection(dirsmo70479);
smo62305.setStemDirection(dirsmo70479);
const smo70479 = new VF.Beam([smo62302,smo62303,smo62304,smo62305]);
const dirsmo70480 = smo62306.getStemDirection();
smo62306.setStemDirection(dirsmo70480);
smo62307.setStemDirection(dirsmo70480);
smo62308.setStemDirection(dirsmo70480);
smo62309.setStemDirection(dirsmo70480);
const smo70480 = new VF.Beam([smo62306,smo62307,smo62308,smo62309]);
const dirsmo70483 = smo67297.getStemDirection();
smo67297.setStemDirection(dirsmo70483);
smo67298.setStemDirection(dirsmo70483);
smo67299.setStemDirection(dirsmo70483);
smo67300.setStemDirection(dirsmo70483);
const smo70483 = new VF.Beam([smo67297,smo67298,smo67299,smo67300]);
const dirsmo70484 = smo67301.getStemDirection();
smo67301.setStemDirection(dirsmo70484);
smo67302.setStemDirection(dirsmo70484);
smo67303.setStemDirection(dirsmo70484);
smo67304.setStemDirection(dirsmo70484);
const smo70484 = new VF.Beam([smo67301,smo67302,smo67303,smo67304]);
const dirsmo70485 = smo67305.getStemDirection();
smo67305.setStemDirection(dirsmo70485);
smo67306.setStemDirection(dirsmo70485);
smo67307.setStemDirection(dirsmo70485);
smo67308.setStemDirection(dirsmo70485);
const smo70485 = new VF.Beam([smo67305,smo67306,smo67307,smo67308]);
const dirsmo70486 = smo67309.getStemDirection();
smo67309.setStemDirection(dirsmo70486);
smo67310.setStemDirection(dirsmo70486);
smo67311.setStemDirection(dirsmo70486);
smo67312.setStemDirection(dirsmo70486);
const smo70486 = new VF.Beam([smo67309,smo67310,smo67311,smo67312]);
 
// formatting measures in staff group smo59060
fmtsmo6232365.format([smo62323v0,smo67326v0], 345);
const stavesmo62323 = new VF.Stave(557, 1962, 359);
stavesmo62323.setAttribute('id', 'stavesmo62323');
stavesmo62323.setBegBarType(VF.Barline.type.NONE);
stavesmo62323.setContext(context);
stavesmo62323.draw();
smo62323v0.draw(context, stavesmo62323);
smo70477.setContext(context);
smo70477.draw();
smo70478.setContext(context);
smo70478.draw();
smo70479.setContext(context);
smo70479.draw();
smo70480.setContext(context);
smo70480.draw();
const stavesmo67326 = new VF.Stave(557, 2051, 359);
stavesmo67326.setAttribute('id', 'stavesmo67326');
stavesmo67326.setBegBarType(VF.Barline.type.NONE);
stavesmo67326.setContext(context);
stavesmo67326.draw();
smo67326v0.draw(context, stavesmo67326);
smo70483.setContext(context);
smo70483.draw();
smo70484.setContext(context);
smo70484.draw();
smo70485.setContext(context);
smo70485.draw();
smo70486.setContext(context);
smo70486.draw();
const fmtsmo6235366 = new VF.Formatter();
//
// voices and notes for stave 0 66
const smo62353v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62353v0ar = [];
const smo62324 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/5/n"]}'))
noteHash['smo62324'] = smo62324;
smo62324.setAttribute('id', 'smo62324');
smo62353v0ar.push(smo62324);
const smo62325 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
noteHash['smo62325'] = smo62325;
smo62325.setAttribute('id', 'smo62325');
smo62353v0ar.push(smo62325);
const smo62326 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo62326'] = smo62326;
smo62326.setAttribute('id', 'smo62326');
smo62353v0ar.push(smo62326);
const smo62327 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
noteHash['smo62327'] = smo62327;
smo62327.setAttribute('id', 'smo62327');
smo62353v0ar.push(smo62327);
const smo62328 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
noteHash['smo62328'] = smo62328;
smo62328.setAttribute('id', 'smo62328');
smo62353v0ar.push(smo62328);
const smo62329 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
noteHash['smo62329'] = smo62329;
smo62329.setAttribute('id', 'smo62329');
smo62353v0ar.push(smo62329);
const smo62330 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo62330'] = smo62330;
smo62330.setAttribute('id', 'smo62330');
smo62353v0ar.push(smo62330);
const smo62331 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
noteHash['smo62331'] = smo62331;
smo62331.setAttribute('id', 'smo62331');
smo62353v0ar.push(smo62331);
const smo62332 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/5/n"]}'))
noteHash['smo62332'] = smo62332;
smo62332.setAttribute('id', 'smo62332');
smo62353v0ar.push(smo62332);
const smo62333 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
noteHash['smo62333'] = smo62333;
smo62333.setAttribute('id', 'smo62333');
smo62353v0ar.push(smo62333);
const smo62334 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo62334'] = smo62334;
smo62334.setAttribute('id', 'smo62334');
smo62353v0ar.push(smo62334);
const smo62335 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
noteHash['smo62335'] = smo62335;
smo62335.setAttribute('id', 'smo62335');
smo62353v0ar.push(smo62335);
const smo62336 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
noteHash['smo62336'] = smo62336;
smo62336.setAttribute('id', 'smo62336');
smo62353v0ar.push(smo62336);
const smo62337 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
noteHash['smo62337'] = smo62337;
smo62337.setAttribute('id', 'smo62337');
smo62353v0ar.push(smo62337);
const smo62338 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo62338'] = smo62338;
smo62338.setAttribute('id', 'smo62338');
smo62353v0ar.push(smo62338);
const smo62339 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
noteHash['smo62339'] = smo62339;
smo62339.setAttribute('id', 'smo62339');
smo62353v0ar.push(smo62339);
smo62353v0.addTickables(smo62353v0ar)
fmtsmo6235366.joinVoices([smo62353v0]);
const fmtsmo6735666 = new VF.Formatter();
//
// voices and notes for stave 1 66
const smo67356v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67356v0ar = [];
const smo67327 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo67327'] = smo67327;
smo67327.setAttribute('id', 'smo67327');
smo67356v0ar.push(smo67327);
const smo67328 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo67328'] = smo67328;
smo67328.setAttribute('id', 'smo67328');
smo67356v0ar.push(smo67328);
const smo67329 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
noteHash['smo67329'] = smo67329;
smo67329.setAttribute('id', 'smo67329');
smo67356v0ar.push(smo67329);
const smo67330 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo67330'] = smo67330;
smo67330.setAttribute('id', 'smo67330');
smo67356v0ar.push(smo67330);
const smo67331 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo67331'] = smo67331;
smo67331.setAttribute('id', 'smo67331');
smo67356v0ar.push(smo67331);
const smo67332 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo67332'] = smo67332;
smo67332.setAttribute('id', 'smo67332');
smo67356v0ar.push(smo67332);
const smo67333 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
noteHash['smo67333'] = smo67333;
smo67333.setAttribute('id', 'smo67333');
smo67356v0ar.push(smo67333);
const smo67334 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo67334'] = smo67334;
smo67334.setAttribute('id', 'smo67334');
smo67356v0ar.push(smo67334);
const smo67335 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo67335'] = smo67335;
smo67335.setAttribute('id', 'smo67335');
smo67356v0ar.push(smo67335);
const smo67336 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo67336'] = smo67336;
smo67336.setAttribute('id', 'smo67336');
smo67356v0ar.push(smo67336);
const smo67337 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
noteHash['smo67337'] = smo67337;
smo67337.setAttribute('id', 'smo67337');
smo67356v0ar.push(smo67337);
const smo67338 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo67338'] = smo67338;
smo67338.setAttribute('id', 'smo67338');
smo67356v0ar.push(smo67338);
const smo67339 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo67339'] = smo67339;
smo67339.setAttribute('id', 'smo67339');
smo67356v0ar.push(smo67339);
const smo67340 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo67340'] = smo67340;
smo67340.setAttribute('id', 'smo67340');
smo67356v0ar.push(smo67340);
const smo67341 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
noteHash['smo67341'] = smo67341;
smo67341.setAttribute('id', 'smo67341');
smo67356v0ar.push(smo67341);
const smo67342 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo67342'] = smo67342;
smo67342.setAttribute('id', 'smo67342');
smo67356v0ar.push(smo67342);
smo67356v0.addTickables(smo67356v0ar)
fmtsmo6735666.joinVoices([smo67356v0]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo70489 = smo62324.getStemDirection();
smo62324.setStemDirection(dirsmo70489);
smo62325.setStemDirection(dirsmo70489);
smo62326.setStemDirection(dirsmo70489);
smo62327.setStemDirection(dirsmo70489);
const smo70489 = new VF.Beam([smo62324,smo62325,smo62326,smo62327]);
const dirsmo70490 = smo62328.getStemDirection();
smo62328.setStemDirection(dirsmo70490);
smo62329.setStemDirection(dirsmo70490);
smo62330.setStemDirection(dirsmo70490);
smo62331.setStemDirection(dirsmo70490);
const smo70490 = new VF.Beam([smo62328,smo62329,smo62330,smo62331]);
const dirsmo70491 = smo62332.getStemDirection();
smo62332.setStemDirection(dirsmo70491);
smo62333.setStemDirection(dirsmo70491);
smo62334.setStemDirection(dirsmo70491);
smo62335.setStemDirection(dirsmo70491);
const smo70491 = new VF.Beam([smo62332,smo62333,smo62334,smo62335]);
const dirsmo70492 = smo62336.getStemDirection();
smo62336.setStemDirection(dirsmo70492);
smo62337.setStemDirection(dirsmo70492);
smo62338.setStemDirection(dirsmo70492);
smo62339.setStemDirection(dirsmo70492);
const smo70492 = new VF.Beam([smo62336,smo62337,smo62338,smo62339]);
const dirsmo70495 = smo67327.getStemDirection();
smo67327.setStemDirection(dirsmo70495);
smo67328.setStemDirection(dirsmo70495);
smo67329.setStemDirection(dirsmo70495);
smo67330.setStemDirection(dirsmo70495);
const smo70495 = new VF.Beam([smo67327,smo67328,smo67329,smo67330]);
const dirsmo70496 = smo67331.getStemDirection();
smo67331.setStemDirection(dirsmo70496);
smo67332.setStemDirection(dirsmo70496);
smo67333.setStemDirection(dirsmo70496);
smo67334.setStemDirection(dirsmo70496);
const smo70496 = new VF.Beam([smo67331,smo67332,smo67333,smo67334]);
const dirsmo70497 = smo67335.getStemDirection();
smo67335.setStemDirection(dirsmo70497);
smo67336.setStemDirection(dirsmo70497);
smo67337.setStemDirection(dirsmo70497);
smo67338.setStemDirection(dirsmo70497);
const smo70497 = new VF.Beam([smo67335,smo67336,smo67337,smo67338]);
const dirsmo70498 = smo67339.getStemDirection();
smo67339.setStemDirection(dirsmo70498);
smo67340.setStemDirection(dirsmo70498);
smo67341.setStemDirection(dirsmo70498);
smo67342.setStemDirection(dirsmo70498);
const smo70498 = new VF.Beam([smo67339,smo67340,smo67341,smo67342]);
 
// formatting measures in staff group smo59060
fmtsmo6235366.format([smo62353v0,smo67356v0], 345);
const stavesmo62353 = new VF.Stave(916, 1962, 359);
stavesmo62353.setAttribute('id', 'stavesmo62353');
stavesmo62353.setBegBarType(VF.Barline.type.NONE);
stavesmo62353.setContext(context);
stavesmo62353.draw();
smo62353v0.draw(context, stavesmo62353);
smo70489.setContext(context);
smo70489.draw();
smo70490.setContext(context);
smo70490.draw();
smo70491.setContext(context);
smo70491.draw();
smo70492.setContext(context);
smo70492.draw();
const stavesmo67356 = new VF.Stave(916, 2051, 359);
stavesmo67356.setAttribute('id', 'stavesmo67356');
stavesmo67356.setBegBarType(VF.Barline.type.NONE);
stavesmo67356.setContext(context);
stavesmo67356.draw();
smo67356v0.draw(context, stavesmo67356);
smo70495.setContext(context);
smo70495.draw();
smo70496.setContext(context);
smo70496.draw();
smo70497.setContext(context);
smo70497.draw();
smo70498.setContext(context);
smo70498.draw();
const fmtsmo6238367 = new VF.Formatter();
//
// voices and notes for stave 0 67
const smo62383v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62383v0ar = [];
const smo62354 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo62354'] = smo62354;
smo62354.setAttribute('id', 'smo62354');
smo62383v0ar.push(smo62354);
const smo62355 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo62355'] = smo62355;
smo62355.setAttribute('id', 'smo62355');
const smo623550acc = new VF.Accidental('#');
smo62355.addModifier(smo623550acc, 0);
smo62383v0ar.push(smo62355);
const smo62356 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo62356'] = smo62356;
smo62356.setAttribute('id', 'smo62356');
const smo623560acc = new VF.Accidental('n');
smo62356.addModifier(smo623560acc, 0);
smo62383v0ar.push(smo62356);
const smo62357 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo62357'] = smo62357;
smo62357.setAttribute('id', 'smo62357');
smo62383v0ar.push(smo62357);
const smo62358 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo62358'] = smo62358;
smo62358.setAttribute('id', 'smo62358');
smo62383v0ar.push(smo62358);
const smo62359 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo62359'] = smo62359;
smo62359.setAttribute('id', 'smo62359');
smo62383v0ar.push(smo62359);
const smo62360 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo62360'] = smo62360;
smo62360.setAttribute('id', 'smo62360');
smo62383v0ar.push(smo62360);
const smo62361 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo62361'] = smo62361;
smo62361.setAttribute('id', 'smo62361');
smo62383v0ar.push(smo62361);
const smo62362 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo62362'] = smo62362;
smo62362.setAttribute('id', 'smo62362');
smo62383v0ar.push(smo62362);
const smo62363 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo62363'] = smo62363;
smo62363.setAttribute('id', 'smo62363');
smo62383v0ar.push(smo62363);
const smo62364 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo62364'] = smo62364;
smo62364.setAttribute('id', 'smo62364');
smo62383v0ar.push(smo62364);
const smo62365 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo62365'] = smo62365;
smo62365.setAttribute('id', 'smo62365');
smo62383v0ar.push(smo62365);
const smo62366 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo62366'] = smo62366;
smo62366.setAttribute('id', 'smo62366');
smo62383v0ar.push(smo62366);
const smo62367 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo62367'] = smo62367;
smo62367.setAttribute('id', 'smo62367');
smo62383v0ar.push(smo62367);
const smo62368 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo62368'] = smo62368;
smo62368.setAttribute('id', 'smo62368');
smo62383v0ar.push(smo62368);
const smo62369 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo62369'] = smo62369;
smo62369.setAttribute('id', 'smo62369');
smo62383v0ar.push(smo62369);
smo62383v0.addTickables(smo62383v0ar)
fmtsmo6238367.joinVoices([smo62383v0]);
const fmtsmo6738667 = new VF.Formatter();
//
// voices and notes for stave 1 67
const smo67386v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67386v0ar = [];
const smo67357 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo67357'] = smo67357;
smo67357.setAttribute('id', 'smo67357');
smo67386v0ar.push(smo67357);
const smo67358 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo67358'] = smo67358;
smo67358.setAttribute('id', 'smo67358');
const smo673580acc = new VF.Accidental('n');
smo67358.addModifier(smo673580acc, 0);
smo67386v0ar.push(smo67358);
const smo67359 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67359'] = smo67359;
smo67359.setAttribute('id', 'smo67359');
smo67386v0ar.push(smo67359);
const smo67360 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo67360'] = smo67360;
smo67360.setAttribute('id', 'smo67360');
smo67386v0ar.push(smo67360);
const smo67361 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo67361'] = smo67361;
smo67361.setAttribute('id', 'smo67361');
const smo673610acc = new VF.Accidental('#');
smo67361.addModifier(smo673610acc, 0);
smo67386v0ar.push(smo67361);
const smo67362 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo67362'] = smo67362;
smo67362.setAttribute('id', 'smo67362');
smo67386v0ar.push(smo67362);
const smo67363 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67363'] = smo67363;
smo67363.setAttribute('id', 'smo67363');
smo67386v0ar.push(smo67363);
const smo67364 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo67364'] = smo67364;
smo67364.setAttribute('id', 'smo67364');
smo67386v0ar.push(smo67364);
const smo67365 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo67365'] = smo67365;
smo67365.setAttribute('id', 'smo67365');
smo67386v0ar.push(smo67365);
const smo67366 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo67366'] = smo67366;
smo67366.setAttribute('id', 'smo67366');
smo67386v0ar.push(smo67366);
const smo67367 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67367'] = smo67367;
smo67367.setAttribute('id', 'smo67367');
smo67386v0ar.push(smo67367);
const smo67368 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo67368'] = smo67368;
smo67368.setAttribute('id', 'smo67368');
smo67386v0ar.push(smo67368);
const smo67369 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo67369'] = smo67369;
smo67369.setAttribute('id', 'smo67369');
smo67386v0ar.push(smo67369);
const smo67370 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo67370'] = smo67370;
smo67370.setAttribute('id', 'smo67370');
smo67386v0ar.push(smo67370);
const smo67371 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67371'] = smo67371;
smo67371.setAttribute('id', 'smo67371');
smo67386v0ar.push(smo67371);
const smo67372 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo67372'] = smo67372;
smo67372.setAttribute('id', 'smo67372');
smo67386v0ar.push(smo67372);
smo67386v0.addTickables(smo67386v0ar)
fmtsmo6738667.joinVoices([smo67386v0]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo70501 = smo62354.getStemDirection();
smo62354.setStemDirection(dirsmo70501);
smo62355.setStemDirection(dirsmo70501);
smo62356.setStemDirection(dirsmo70501);
smo62357.setStemDirection(dirsmo70501);
const smo70501 = new VF.Beam([smo62354,smo62355,smo62356,smo62357]);
const dirsmo70502 = smo62358.getStemDirection();
smo62358.setStemDirection(dirsmo70502);
smo62359.setStemDirection(dirsmo70502);
smo62360.setStemDirection(dirsmo70502);
smo62361.setStemDirection(dirsmo70502);
const smo70502 = new VF.Beam([smo62358,smo62359,smo62360,smo62361]);
const dirsmo70503 = smo62362.getStemDirection();
smo62362.setStemDirection(dirsmo70503);
smo62363.setStemDirection(dirsmo70503);
smo62364.setStemDirection(dirsmo70503);
smo62365.setStemDirection(dirsmo70503);
const smo70503 = new VF.Beam([smo62362,smo62363,smo62364,smo62365]);
const dirsmo70504 = smo62366.getStemDirection();
smo62366.setStemDirection(dirsmo70504);
smo62367.setStemDirection(dirsmo70504);
smo62368.setStemDirection(dirsmo70504);
smo62369.setStemDirection(dirsmo70504);
const smo70504 = new VF.Beam([smo62366,smo62367,smo62368,smo62369]);
const dirsmo70507 = smo67357.getStemDirection();
smo67357.setStemDirection(dirsmo70507);
smo67358.setStemDirection(dirsmo70507);
smo67359.setStemDirection(dirsmo70507);
smo67360.setStemDirection(dirsmo70507);
const smo70507 = new VF.Beam([smo67357,smo67358,smo67359,smo67360]);
const dirsmo70508 = smo67361.getStemDirection();
smo67361.setStemDirection(dirsmo70508);
smo67362.setStemDirection(dirsmo70508);
smo67363.setStemDirection(dirsmo70508);
smo67364.setStemDirection(dirsmo70508);
const smo70508 = new VF.Beam([smo67361,smo67362,smo67363,smo67364]);
const dirsmo70509 = smo67365.getStemDirection();
smo67365.setStemDirection(dirsmo70509);
smo67366.setStemDirection(dirsmo70509);
smo67367.setStemDirection(dirsmo70509);
smo67368.setStemDirection(dirsmo70509);
const smo70509 = new VF.Beam([smo67365,smo67366,smo67367,smo67368]);
const dirsmo70510 = smo67369.getStemDirection();
smo67369.setStemDirection(dirsmo70510);
smo67370.setStemDirection(dirsmo70510);
smo67371.setStemDirection(dirsmo70510);
smo67372.setStemDirection(dirsmo70510);
const smo70510 = new VF.Beam([smo67369,smo67370,smo67371,smo67372]);
 
// formatting measures in staff group smo59060
fmtsmo6238367.format([smo62383v0,smo67386v0], 519);
const stavesmo62383 = new VF.Stave(1275, 1962, 533);
stavesmo62383.setAttribute('id', 'stavesmo62383');
stavesmo62383.setBegBarType(VF.Barline.type.NONE);
stavesmo62383.setContext(context);
stavesmo62383.draw();
smo62383v0.draw(context, stavesmo62383);
smo70501.setContext(context);
smo70501.draw();
smo70502.setContext(context);
smo70502.draw();
smo70503.setContext(context);
smo70503.draw();
smo70504.setContext(context);
smo70504.draw();
const stavesmo67386 = new VF.Stave(1275, 2051, 533);
stavesmo67386.setAttribute('id', 'stavesmo67386');
stavesmo67386.setBegBarType(VF.Barline.type.NONE);
stavesmo67386.setContext(context);
stavesmo67386.draw();
smo67386v0.draw(context, stavesmo67386);
smo70507.setContext(context);
smo70507.draw();
smo70508.setContext(context);
smo70508.draw();
smo70509.setContext(context);
smo70509.draw();
smo70510.setContext(context);
smo70510.draw();
const rightsmo59060stavesmo623831 = new VF.StaveConnector(stavesmo62383, stavesmo67386).setType(0);
rightsmo59060stavesmo623831.setContext(context).draw();
const fmtsmo6241368 = new VF.Formatter();
//
// voices and notes for stave 0 68
const smo62413v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62413v0ar = [];
const smo62384 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo62384'] = smo62384;
smo62384.setAttribute('id', 'smo62384');
smo62413v0ar.push(smo62384);
const smo62385 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo62385'] = smo62385;
smo62385.setAttribute('id', 'smo62385');
smo62413v0ar.push(smo62385);
const smo62386 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo62386'] = smo62386;
smo62386.setAttribute('id', 'smo62386');
const smo623860acc = new VF.Accidental('#');
smo62386.addModifier(smo623860acc, 0);
smo62413v0ar.push(smo62386);
const smo62387 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo62387'] = smo62387;
smo62387.setAttribute('id', 'smo62387');
smo62413v0ar.push(smo62387);
const smo62388 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo62388'] = smo62388;
smo62388.setAttribute('id', 'smo62388');
smo62413v0ar.push(smo62388);
const smo62389 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo62389'] = smo62389;
smo62389.setAttribute('id', 'smo62389');
smo62413v0ar.push(smo62389);
const smo62390 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo62390'] = smo62390;
smo62390.setAttribute('id', 'smo62390');
smo62413v0ar.push(smo62390);
const smo62391 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo62391'] = smo62391;
smo62391.setAttribute('id', 'smo62391');
smo62413v0ar.push(smo62391);
const smo62392 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo62392'] = smo62392;
smo62392.setAttribute('id', 'smo62392');
smo62413v0ar.push(smo62392);
const smo62393 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo62393'] = smo62393;
smo62393.setAttribute('id', 'smo62393');
smo62413v0ar.push(smo62393);
const smo62394 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo62394'] = smo62394;
smo62394.setAttribute('id', 'smo62394');
smo62413v0ar.push(smo62394);
const smo62395 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo62395'] = smo62395;
smo62395.setAttribute('id', 'smo62395');
smo62413v0ar.push(smo62395);
const smo62396 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo62396'] = smo62396;
smo62396.setAttribute('id', 'smo62396');
smo62413v0ar.push(smo62396);
const smo62397 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo62397'] = smo62397;
smo62397.setAttribute('id', 'smo62397');
smo62413v0ar.push(smo62397);
const smo62398 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo62398'] = smo62398;
smo62398.setAttribute('id', 'smo62398');
smo62413v0ar.push(smo62398);
const smo62399 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo62399'] = smo62399;
smo62399.setAttribute('id', 'smo62399');
smo62413v0ar.push(smo62399);
smo62413v0.addTickables(smo62413v0ar)
fmtsmo6241368.joinVoices([smo62413v0]);
const fmtsmo6741668 = new VF.Formatter();
//
// voices and notes for stave 1 68
const smo67416v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67416v0ar = [];
const smo67387 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/2/n"]}'))
noteHash['smo67387'] = smo67387;
smo67387.setAttribute('id', 'smo67387');
smo67416v0ar.push(smo67387);
const smo67388 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
noteHash['smo67388'] = smo67388;
smo67388.setAttribute('id', 'smo67388');
smo67416v0ar.push(smo67388);
const smo67389 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo67389'] = smo67389;
smo67389.setAttribute('id', 'smo67389');
const smo673890acc = new VF.Accidental('n');
smo67389.addModifier(smo673890acc, 0);
smo67416v0ar.push(smo67389);
const smo67390 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
noteHash['smo67390'] = smo67390;
smo67390.setAttribute('id', 'smo67390');
smo67416v0ar.push(smo67390);
const smo67391 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67391'] = smo67391;
smo67391.setAttribute('id', 'smo67391');
smo67416v0ar.push(smo67391);
const smo67392 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
noteHash['smo67392'] = smo67392;
smo67392.setAttribute('id', 'smo67392');
smo67416v0ar.push(smo67392);
const smo67393 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo67393'] = smo67393;
smo67393.setAttribute('id', 'smo67393');
smo67416v0ar.push(smo67393);
const smo67394 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
noteHash['smo67394'] = smo67394;
smo67394.setAttribute('id', 'smo67394');
smo67416v0ar.push(smo67394);
const smo67395 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/2/n"]}'))
noteHash['smo67395'] = smo67395;
smo67395.setAttribute('id', 'smo67395');
smo67416v0ar.push(smo67395);
const smo67396 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
noteHash['smo67396'] = smo67396;
smo67396.setAttribute('id', 'smo67396');
smo67416v0ar.push(smo67396);
const smo67397 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo67397'] = smo67397;
smo67397.setAttribute('id', 'smo67397');
smo67416v0ar.push(smo67397);
const smo67398 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
noteHash['smo67398'] = smo67398;
smo67398.setAttribute('id', 'smo67398');
smo67416v0ar.push(smo67398);
const smo67399 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67399'] = smo67399;
smo67399.setAttribute('id', 'smo67399');
smo67416v0ar.push(smo67399);
const smo67400 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
noteHash['smo67400'] = smo67400;
smo67400.setAttribute('id', 'smo67400');
smo67416v0ar.push(smo67400);
const smo67401 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo67401'] = smo67401;
smo67401.setAttribute('id', 'smo67401');
smo67416v0ar.push(smo67401);
const smo67402 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
noteHash['smo67402'] = smo67402;
smo67402.setAttribute('id', 'smo67402');
smo67416v0ar.push(smo67402);
smo67416v0.addTickables(smo67416v0ar)
fmtsmo6741668.joinVoices([smo67416v0]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo70525 = smo62384.getStemDirection();
smo62384.setStemDirection(dirsmo70525);
smo62385.setStemDirection(dirsmo70525);
smo62386.setStemDirection(dirsmo70525);
smo62387.setStemDirection(dirsmo70525);
const smo70525 = new VF.Beam([smo62384,smo62385,smo62386,smo62387]);
const dirsmo70526 = smo62388.getStemDirection();
smo62388.setStemDirection(dirsmo70526);
smo62389.setStemDirection(dirsmo70526);
smo62390.setStemDirection(dirsmo70526);
smo62391.setStemDirection(dirsmo70526);
const smo70526 = new VF.Beam([smo62388,smo62389,smo62390,smo62391]);
const dirsmo70527 = smo62392.getStemDirection();
smo62392.setStemDirection(dirsmo70527);
smo62393.setStemDirection(dirsmo70527);
smo62394.setStemDirection(dirsmo70527);
smo62395.setStemDirection(dirsmo70527);
const smo70527 = new VF.Beam([smo62392,smo62393,smo62394,smo62395]);
const dirsmo70528 = smo62396.getStemDirection();
smo62396.setStemDirection(dirsmo70528);
smo62397.setStemDirection(dirsmo70528);
smo62398.setStemDirection(dirsmo70528);
smo62399.setStemDirection(dirsmo70528);
const smo70528 = new VF.Beam([smo62396,smo62397,smo62398,smo62399]);
const dirsmo70531 = smo67387.getStemDirection();
smo67387.setStemDirection(dirsmo70531);
smo67388.setStemDirection(dirsmo70531);
smo67389.setStemDirection(dirsmo70531);
smo67390.setStemDirection(dirsmo70531);
const smo70531 = new VF.Beam([smo67387,smo67388,smo67389,smo67390]);
const dirsmo70532 = smo67391.getStemDirection();
smo67391.setStemDirection(dirsmo70532);
smo67392.setStemDirection(dirsmo70532);
smo67393.setStemDirection(dirsmo70532);
smo67394.setStemDirection(dirsmo70532);
const smo70532 = new VF.Beam([smo67391,smo67392,smo67393,smo67394]);
const dirsmo70533 = smo67395.getStemDirection();
smo67395.setStemDirection(dirsmo70533);
smo67396.setStemDirection(dirsmo70533);
smo67397.setStemDirection(dirsmo70533);
smo67398.setStemDirection(dirsmo70533);
const smo70533 = new VF.Beam([smo67395,smo67396,smo67397,smo67398]);
const dirsmo70534 = smo67399.getStemDirection();
smo67399.setStemDirection(dirsmo70534);
smo67400.setStemDirection(dirsmo70534);
smo67401.setStemDirection(dirsmo70534);
smo67402.setStemDirection(dirsmo70534);
const smo70534 = new VF.Beam([smo67399,smo67400,smo67401,smo67402]);
 
// formatting measures in staff group smo59060
fmtsmo6241368.format([smo62413v0,smo67416v0], 409);
const stavesmo62413 = new VF.Stave(90, 2180, 506);
stavesmo62413.setAttribute('id', 'stavesmo62413');
stavesmo62413.setBegBarType(1);
stavesmo62413.addClef('treble');
const keysmo62413 = new VF.KeySignature('Eb');
keysmo62413.addToStave(stavesmo62413);
stavesmo62413.setContext(context);
stavesmo62413.draw();
smo62413v0.draw(context, stavesmo62413);
smo70525.setContext(context);
smo70525.draw();
smo70526.setContext(context);
smo70526.draw();
smo70527.setContext(context);
smo70527.draw();
smo70528.setContext(context);
smo70528.draw();
const stavesmo67416 = new VF.Stave(90, 2270, 506);
stavesmo67416.setAttribute('id', 'stavesmo67416');
stavesmo67416.setBegBarType(1);
stavesmo67416.addClef('bass');
const keysmo67416 = new VF.KeySignature('Eb');
keysmo67416.addToStave(stavesmo67416);
stavesmo67416.setContext(context);
stavesmo67416.draw();
smo67416v0.draw(context, stavesmo67416);
smo70531.setContext(context);
smo70531.draw();
smo70532.setContext(context);
smo70532.draw();
smo70533.setContext(context);
smo70533.draw();
smo70534.setContext(context);
smo70534.draw();
const leftsmo59060stavesmo624131 = new VF.StaveConnector(stavesmo62413, stavesmo67416).setType(3);
leftsmo59060stavesmo624131.setContext(context).draw();
const fmtsmo6244369 = new VF.Formatter();
//
// voices and notes for stave 0 69
const smo62443v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62443v0ar = [];
const smo62414 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo62414'] = smo62414;
smo62414.setAttribute('id', 'smo62414');
smo62443v0ar.push(smo62414);
const smo62415 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo62415'] = smo62415;
smo62415.setAttribute('id', 'smo62415');
const smo624150acc = new VF.Accidental('n');
smo62415.addModifier(smo624150acc, 0);
smo62443v0ar.push(smo62415);
const smo62416 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo62416'] = smo62416;
smo62416.setAttribute('id', 'smo62416');
smo62443v0ar.push(smo62416);
const smo62417 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo62417'] = smo62417;
smo62417.setAttribute('id', 'smo62417');
smo62443v0ar.push(smo62417);
const smo62418 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo62418'] = smo62418;
smo62418.setAttribute('id', 'smo62418');
smo62443v0ar.push(smo62418);
const smo62419 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo62419'] = smo62419;
smo62419.setAttribute('id', 'smo62419');
smo62443v0ar.push(smo62419);
const smo62420 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo62420'] = smo62420;
smo62420.setAttribute('id', 'smo62420');
smo62443v0ar.push(smo62420);
const smo62421 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo62421'] = smo62421;
smo62421.setAttribute('id', 'smo62421');
smo62443v0ar.push(smo62421);
const smo62422 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo62422'] = smo62422;
smo62422.setAttribute('id', 'smo62422');
smo62443v0ar.push(smo62422);
const smo62423 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo62423'] = smo62423;
smo62423.setAttribute('id', 'smo62423');
smo62443v0ar.push(smo62423);
const smo62424 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo62424'] = smo62424;
smo62424.setAttribute('id', 'smo62424');
smo62443v0ar.push(smo62424);
const smo62425 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo62425'] = smo62425;
smo62425.setAttribute('id', 'smo62425');
smo62443v0ar.push(smo62425);
const smo62426 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo62426'] = smo62426;
smo62426.setAttribute('id', 'smo62426');
smo62443v0ar.push(smo62426);
const smo62427 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo62427'] = smo62427;
smo62427.setAttribute('id', 'smo62427');
smo62443v0ar.push(smo62427);
const smo62428 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo62428'] = smo62428;
smo62428.setAttribute('id', 'smo62428');
smo62443v0ar.push(smo62428);
const smo62429 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo62429'] = smo62429;
smo62429.setAttribute('id', 'smo62429');
smo62443v0ar.push(smo62429);
smo62443v0.addTickables(smo62443v0ar)
fmtsmo6244369.joinVoices([smo62443v0]);
const fmtsmo6744669 = new VF.Formatter();
//
// voices and notes for stave 1 69
const smo67446v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67446v0ar = [];
const smo67417 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/2/n"]}'))
noteHash['smo67417'] = smo67417;
smo67417.setAttribute('id', 'smo67417');
smo67446v0ar.push(smo67417);
const smo67418 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67418'] = smo67418;
smo67418.setAttribute('id', 'smo67418');
smo67446v0ar.push(smo67418);
const smo67419 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo67419'] = smo67419;
smo67419.setAttribute('id', 'smo67419');
smo67446v0ar.push(smo67419);
const smo67420 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67420'] = smo67420;
smo67420.setAttribute('id', 'smo67420');
smo67446v0ar.push(smo67420);
const smo67421 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo67421'] = smo67421;
smo67421.setAttribute('id', 'smo67421');
const smo674210acc = new VF.Accidental('n');
smo67421.addModifier(smo674210acc, 0);
smo67446v0ar.push(smo67421);
const smo67422 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67422'] = smo67422;
smo67422.setAttribute('id', 'smo67422');
smo67446v0ar.push(smo67422);
const smo67423 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo67423'] = smo67423;
smo67423.setAttribute('id', 'smo67423');
smo67446v0ar.push(smo67423);
const smo67424 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67424'] = smo67424;
smo67424.setAttribute('id', 'smo67424');
smo67446v0ar.push(smo67424);
const smo67425 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/2/n"]}'))
noteHash['smo67425'] = smo67425;
smo67425.setAttribute('id', 'smo67425');
smo67446v0ar.push(smo67425);
const smo67426 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67426'] = smo67426;
smo67426.setAttribute('id', 'smo67426');
smo67446v0ar.push(smo67426);
const smo67427 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo67427'] = smo67427;
smo67427.setAttribute('id', 'smo67427');
smo67446v0ar.push(smo67427);
const smo67428 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67428'] = smo67428;
smo67428.setAttribute('id', 'smo67428');
smo67446v0ar.push(smo67428);
const smo67429 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo67429'] = smo67429;
smo67429.setAttribute('id', 'smo67429');
smo67446v0ar.push(smo67429);
const smo67430 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67430'] = smo67430;
smo67430.setAttribute('id', 'smo67430');
smo67446v0ar.push(smo67430);
const smo67431 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo67431'] = smo67431;
smo67431.setAttribute('id', 'smo67431');
smo67446v0ar.push(smo67431);
const smo67432 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67432'] = smo67432;
smo67432.setAttribute('id', 'smo67432');
smo67446v0ar.push(smo67432);
smo67446v0.addTickables(smo67446v0ar)
fmtsmo6744669.joinVoices([smo67446v0]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo70537 = smo62414.getStemDirection();
smo62414.setStemDirection(dirsmo70537);
smo62415.setStemDirection(dirsmo70537);
smo62416.setStemDirection(dirsmo70537);
smo62417.setStemDirection(dirsmo70537);
const smo70537 = new VF.Beam([smo62414,smo62415,smo62416,smo62417]);
const dirsmo70538 = smo62418.getStemDirection();
smo62418.setStemDirection(dirsmo70538);
smo62419.setStemDirection(dirsmo70538);
smo62420.setStemDirection(dirsmo70538);
smo62421.setStemDirection(dirsmo70538);
const smo70538 = new VF.Beam([smo62418,smo62419,smo62420,smo62421]);
const dirsmo70539 = smo62422.getStemDirection();
smo62422.setStemDirection(dirsmo70539);
smo62423.setStemDirection(dirsmo70539);
smo62424.setStemDirection(dirsmo70539);
smo62425.setStemDirection(dirsmo70539);
const smo70539 = new VF.Beam([smo62422,smo62423,smo62424,smo62425]);
const dirsmo70540 = smo62426.getStemDirection();
smo62426.setStemDirection(dirsmo70540);
smo62427.setStemDirection(dirsmo70540);
smo62428.setStemDirection(dirsmo70540);
smo62429.setStemDirection(dirsmo70540);
const smo70540 = new VF.Beam([smo62426,smo62427,smo62428,smo62429]);
const dirsmo70543 = smo67417.getStemDirection();
smo67417.setStemDirection(dirsmo70543);
smo67418.setStemDirection(dirsmo70543);
smo67419.setStemDirection(dirsmo70543);
smo67420.setStemDirection(dirsmo70543);
const smo70543 = new VF.Beam([smo67417,smo67418,smo67419,smo67420]);
const dirsmo70544 = smo67421.getStemDirection();
smo67421.setStemDirection(dirsmo70544);
smo67422.setStemDirection(dirsmo70544);
smo67423.setStemDirection(dirsmo70544);
smo67424.setStemDirection(dirsmo70544);
const smo70544 = new VF.Beam([smo67421,smo67422,smo67423,smo67424]);
const dirsmo70545 = smo67425.getStemDirection();
smo67425.setStemDirection(dirsmo70545);
smo67426.setStemDirection(dirsmo70545);
smo67427.setStemDirection(dirsmo70545);
smo67428.setStemDirection(dirsmo70545);
const smo70545 = new VF.Beam([smo67425,smo67426,smo67427,smo67428]);
const dirsmo70546 = smo67429.getStemDirection();
smo67429.setStemDirection(dirsmo70546);
smo67430.setStemDirection(dirsmo70546);
smo67431.setStemDirection(dirsmo70546);
smo67432.setStemDirection(dirsmo70546);
const smo70546 = new VF.Beam([smo67429,smo67430,smo67431,smo67432]);
 
// formatting measures in staff group smo59060
fmtsmo6244369.format([smo62443v0,smo67446v0], 440);
const stavesmo62443 = new VF.Stave(596, 2180, 454);
stavesmo62443.setAttribute('id', 'stavesmo62443');
stavesmo62443.setBegBarType(VF.Barline.type.NONE);
stavesmo62443.setContext(context);
stavesmo62443.draw();
smo62443v0.draw(context, stavesmo62443);
smo70537.setContext(context);
smo70537.draw();
smo70538.setContext(context);
smo70538.draw();
smo70539.setContext(context);
smo70539.draw();
smo70540.setContext(context);
smo70540.draw();
const stavesmo67446 = new VF.Stave(596, 2270, 454);
stavesmo67446.setAttribute('id', 'stavesmo67446');
stavesmo67446.setBegBarType(VF.Barline.type.NONE);
stavesmo67446.setContext(context);
stavesmo67446.draw();
smo67446v0.draw(context, stavesmo67446);
smo70543.setContext(context);
smo70543.draw();
smo70544.setContext(context);
smo70544.draw();
smo70545.setContext(context);
smo70545.draw();
smo70546.setContext(context);
smo70546.draw();
const fmtsmo6247370 = new VF.Formatter();
//
// voices and notes for stave 0 70
const smo62473v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62473v0ar = [];
const smo62444 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo62444'] = smo62444;
smo62444.setAttribute('id', 'smo62444');
smo62473v0ar.push(smo62444);
const smo62445 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo62445'] = smo62445;
smo62445.setAttribute('id', 'smo62445');
smo62473v0ar.push(smo62445);
const smo62446 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo62446'] = smo62446;
smo62446.setAttribute('id', 'smo62446');
const smo624460acc = new VF.Accidental('n');
smo62446.addModifier(smo624460acc, 0);
smo62473v0ar.push(smo62446);
const smo62447 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo62447'] = smo62447;
smo62447.setAttribute('id', 'smo62447');
smo62473v0ar.push(smo62447);
const smo62448 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo62448'] = smo62448;
smo62448.setAttribute('id', 'smo62448');
smo62473v0ar.push(smo62448);
const smo62449 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo62449'] = smo62449;
smo62449.setAttribute('id', 'smo62449');
smo62473v0ar.push(smo62449);
const smo62450 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo62450'] = smo62450;
smo62450.setAttribute('id', 'smo62450');
smo62473v0ar.push(smo62450);
const smo62451 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo62451'] = smo62451;
smo62451.setAttribute('id', 'smo62451');
smo62473v0ar.push(smo62451);
const smo62452 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo62452'] = smo62452;
smo62452.setAttribute('id', 'smo62452');
smo62473v0ar.push(smo62452);
const smo62453 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo62453'] = smo62453;
smo62453.setAttribute('id', 'smo62453');
smo62473v0ar.push(smo62453);
const smo62454 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo62454'] = smo62454;
smo62454.setAttribute('id', 'smo62454');
smo62473v0ar.push(smo62454);
const smo62455 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo62455'] = smo62455;
smo62455.setAttribute('id', 'smo62455');
smo62473v0ar.push(smo62455);
const smo62456 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo62456'] = smo62456;
smo62456.setAttribute('id', 'smo62456');
smo62473v0ar.push(smo62456);
const smo62457 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo62457'] = smo62457;
smo62457.setAttribute('id', 'smo62457');
smo62473v0ar.push(smo62457);
const smo62458 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo62458'] = smo62458;
smo62458.setAttribute('id', 'smo62458');
smo62473v0ar.push(smo62458);
const smo62459 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo62459'] = smo62459;
smo62459.setAttribute('id', 'smo62459');
smo62473v0ar.push(smo62459);
smo62473v0.addTickables(smo62473v0ar)
fmtsmo6247370.joinVoices([smo62473v0]);
const fmtsmo6747670 = new VF.Formatter();
//
// voices and notes for stave 1 70
const smo67476v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67476v0ar = [];
const smo67447 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/2/n"]}'))
noteHash['smo67447'] = smo67447;
smo67447.setAttribute('id', 'smo67447');
smo67476v0ar.push(smo67447);
const smo67448 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo67448'] = smo67448;
smo67448.setAttribute('id', 'smo67448');
smo67476v0ar.push(smo67448);
const smo67449 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67449'] = smo67449;
smo67449.setAttribute('id', 'smo67449');
smo67476v0ar.push(smo67449);
const smo67450 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo67450'] = smo67450;
smo67450.setAttribute('id', 'smo67450');
smo67476v0ar.push(smo67450);
const smo67451 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo67451'] = smo67451;
smo67451.setAttribute('id', 'smo67451');
smo67476v0ar.push(smo67451);
const smo67452 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo67452'] = smo67452;
smo67452.setAttribute('id', 'smo67452');
smo67476v0ar.push(smo67452);
const smo67453 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67453'] = smo67453;
smo67453.setAttribute('id', 'smo67453');
smo67476v0ar.push(smo67453);
const smo67454 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo67454'] = smo67454;
smo67454.setAttribute('id', 'smo67454');
smo67476v0ar.push(smo67454);
const smo67455 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/2/n"]}'))
noteHash['smo67455'] = smo67455;
smo67455.setAttribute('id', 'smo67455');
smo67476v0ar.push(smo67455);
const smo67456 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo67456'] = smo67456;
smo67456.setAttribute('id', 'smo67456');
smo67476v0ar.push(smo67456);
const smo67457 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67457'] = smo67457;
smo67457.setAttribute('id', 'smo67457');
smo67476v0ar.push(smo67457);
const smo67458 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo67458'] = smo67458;
smo67458.setAttribute('id', 'smo67458');
smo67476v0ar.push(smo67458);
const smo67459 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo67459'] = smo67459;
smo67459.setAttribute('id', 'smo67459');
smo67476v0ar.push(smo67459);
const smo67460 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo67460'] = smo67460;
smo67460.setAttribute('id', 'smo67460');
smo67476v0ar.push(smo67460);
const smo67461 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo67461'] = smo67461;
smo67461.setAttribute('id', 'smo67461');
smo67476v0ar.push(smo67461);
const smo67462 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo67462'] = smo67462;
smo67462.setAttribute('id', 'smo67462');
smo67476v0ar.push(smo67462);
smo67476v0.addTickables(smo67476v0ar)
fmtsmo6747670.joinVoices([smo67476v0]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo70549 = smo62444.getStemDirection();
smo62444.setStemDirection(dirsmo70549);
smo62445.setStemDirection(dirsmo70549);
smo62446.setStemDirection(dirsmo70549);
smo62447.setStemDirection(dirsmo70549);
const smo70549 = new VF.Beam([smo62444,smo62445,smo62446,smo62447]);
const dirsmo70550 = smo62448.getStemDirection();
smo62448.setStemDirection(dirsmo70550);
smo62449.setStemDirection(dirsmo70550);
smo62450.setStemDirection(dirsmo70550);
smo62451.setStemDirection(dirsmo70550);
const smo70550 = new VF.Beam([smo62448,smo62449,smo62450,smo62451]);
const dirsmo70551 = smo62452.getStemDirection();
smo62452.setStemDirection(dirsmo70551);
smo62453.setStemDirection(dirsmo70551);
smo62454.setStemDirection(dirsmo70551);
smo62455.setStemDirection(dirsmo70551);
const smo70551 = new VF.Beam([smo62452,smo62453,smo62454,smo62455]);
const dirsmo70552 = smo62456.getStemDirection();
smo62456.setStemDirection(dirsmo70552);
smo62457.setStemDirection(dirsmo70552);
smo62458.setStemDirection(dirsmo70552);
smo62459.setStemDirection(dirsmo70552);
const smo70552 = new VF.Beam([smo62456,smo62457,smo62458,smo62459]);
const dirsmo70555 = smo67447.getStemDirection();
smo67447.setStemDirection(dirsmo70555);
smo67448.setStemDirection(dirsmo70555);
smo67449.setStemDirection(dirsmo70555);
smo67450.setStemDirection(dirsmo70555);
const smo70555 = new VF.Beam([smo67447,smo67448,smo67449,smo67450]);
const dirsmo70556 = smo67451.getStemDirection();
smo67451.setStemDirection(dirsmo70556);
smo67452.setStemDirection(dirsmo70556);
smo67453.setStemDirection(dirsmo70556);
smo67454.setStemDirection(dirsmo70556);
const smo70556 = new VF.Beam([smo67451,smo67452,smo67453,smo67454]);
const dirsmo70557 = smo67455.getStemDirection();
smo67455.setStemDirection(dirsmo70557);
smo67456.setStemDirection(dirsmo70557);
smo67457.setStemDirection(dirsmo70557);
smo67458.setStemDirection(dirsmo70557);
const smo70557 = new VF.Beam([smo67455,smo67456,smo67457,smo67458]);
const dirsmo70558 = smo67459.getStemDirection();
smo67459.setStemDirection(dirsmo70558);
smo67460.setStemDirection(dirsmo70558);
smo67461.setStemDirection(dirsmo70558);
smo67462.setStemDirection(dirsmo70558);
const smo70558 = new VF.Beam([smo67459,smo67460,smo67461,smo67462]);
 
// formatting measures in staff group smo59060
fmtsmo6247370.format([smo62473v0,smo67476v0], 386);
const stavesmo62473 = new VF.Stave(1050, 2180, 400);
stavesmo62473.setAttribute('id', 'stavesmo62473');
stavesmo62473.setBegBarType(VF.Barline.type.NONE);
stavesmo62473.setContext(context);
stavesmo62473.draw();
smo62473v0.draw(context, stavesmo62473);
smo70549.setContext(context);
smo70549.draw();
smo70550.setContext(context);
smo70550.draw();
smo70551.setContext(context);
smo70551.draw();
smo70552.setContext(context);
smo70552.draw();
const stavesmo67476 = new VF.Stave(1050, 2270, 400);
stavesmo67476.setAttribute('id', 'stavesmo67476');
stavesmo67476.setBegBarType(VF.Barline.type.NONE);
stavesmo67476.setContext(context);
stavesmo67476.draw();
smo67476v0.draw(context, stavesmo67476);
smo70555.setContext(context);
smo70555.draw();
smo70556.setContext(context);
smo70556.draw();
smo70557.setContext(context);
smo70557.draw();
smo70558.setContext(context);
smo70558.draw();
const fmtsmo6250371 = new VF.Formatter();
//
// voices and notes for stave 0 71
const smo62503v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62503v0ar = [];
const smo62474 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/4/n"]}'))
noteHash['smo62474'] = smo62474;
smo62474.setAttribute('id', 'smo62474');
smo62503v0ar.push(smo62474);
const smo62475 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo62475'] = smo62475;
smo62475.setAttribute('id', 'smo62475');
smo62503v0ar.push(smo62475);
const smo62476 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
noteHash['smo62476'] = smo62476;
smo62476.setAttribute('id', 'smo62476');
smo62503v0ar.push(smo62476);
const smo62477 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo62477'] = smo62477;
smo62477.setAttribute('id', 'smo62477');
smo62503v0ar.push(smo62477);
const smo62478 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo62478'] = smo62478;
smo62478.setAttribute('id', 'smo62478');
smo62503v0ar.push(smo62478);
const smo62479 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo62479'] = smo62479;
smo62479.setAttribute('id', 'smo62479');
smo62503v0ar.push(smo62479);
const smo62480 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
noteHash['smo62480'] = smo62480;
smo62480.setAttribute('id', 'smo62480');
smo62503v0ar.push(smo62480);
const smo62481 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo62481'] = smo62481;
smo62481.setAttribute('id', 'smo62481');
smo62503v0ar.push(smo62481);
const smo62482 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/4/n"]}'))
noteHash['smo62482'] = smo62482;
smo62482.setAttribute('id', 'smo62482');
smo62503v0ar.push(smo62482);
const smo62483 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo62483'] = smo62483;
smo62483.setAttribute('id', 'smo62483');
smo62503v0ar.push(smo62483);
const smo62484 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
noteHash['smo62484'] = smo62484;
smo62484.setAttribute('id', 'smo62484');
smo62503v0ar.push(smo62484);
const smo62485 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo62485'] = smo62485;
smo62485.setAttribute('id', 'smo62485');
smo62503v0ar.push(smo62485);
const smo62486 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo62486'] = smo62486;
smo62486.setAttribute('id', 'smo62486');
smo62503v0ar.push(smo62486);
const smo62487 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo62487'] = smo62487;
smo62487.setAttribute('id', 'smo62487');
smo62503v0ar.push(smo62487);
const smo62488 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
noteHash['smo62488'] = smo62488;
smo62488.setAttribute('id', 'smo62488');
smo62503v0ar.push(smo62488);
const smo62489 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo62489'] = smo62489;
smo62489.setAttribute('id', 'smo62489');
smo62503v0ar.push(smo62489);
smo62503v0.addTickables(smo62503v0ar)
fmtsmo6250371.joinVoices([smo62503v0]);
const fmtsmo6750671 = new VF.Formatter();
//
// voices and notes for stave 1 71
const smo67506v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67506v0ar = [];
const smo67477 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/2/n"]}'))
noteHash['smo67477'] = smo67477;
smo67477.setAttribute('id', 'smo67477');
smo67506v0ar.push(smo67477);
const smo67478 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo67478'] = smo67478;
smo67478.setAttribute('id', 'smo67478');
smo67506v0ar.push(smo67478);
const smo67479 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo67479'] = smo67479;
smo67479.setAttribute('id', 'smo67479');
smo67506v0ar.push(smo67479);
const smo67480 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo67480'] = smo67480;
smo67480.setAttribute('id', 'smo67480');
smo67506v0ar.push(smo67480);
const smo67481 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo67481'] = smo67481;
smo67481.setAttribute('id', 'smo67481');
smo67506v0ar.push(smo67481);
const smo67482 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo67482'] = smo67482;
smo67482.setAttribute('id', 'smo67482');
smo67506v0ar.push(smo67482);
const smo67483 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo67483'] = smo67483;
smo67483.setAttribute('id', 'smo67483');
smo67506v0ar.push(smo67483);
const smo67484 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo67484'] = smo67484;
smo67484.setAttribute('id', 'smo67484');
smo67506v0ar.push(smo67484);
const smo67485 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/2/n"]}'))
noteHash['smo67485'] = smo67485;
smo67485.setAttribute('id', 'smo67485');
smo67506v0ar.push(smo67485);
const smo67486 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo67486'] = smo67486;
smo67486.setAttribute('id', 'smo67486');
smo67506v0ar.push(smo67486);
const smo67487 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo67487'] = smo67487;
smo67487.setAttribute('id', 'smo67487');
smo67506v0ar.push(smo67487);
const smo67488 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo67488'] = smo67488;
smo67488.setAttribute('id', 'smo67488');
smo67506v0ar.push(smo67488);
const smo67489 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo67489'] = smo67489;
smo67489.setAttribute('id', 'smo67489');
smo67506v0ar.push(smo67489);
const smo67490 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo67490'] = smo67490;
smo67490.setAttribute('id', 'smo67490');
smo67506v0ar.push(smo67490);
const smo67491 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo67491'] = smo67491;
smo67491.setAttribute('id', 'smo67491');
smo67506v0ar.push(smo67491);
const smo67492 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo67492'] = smo67492;
smo67492.setAttribute('id', 'smo67492');
smo67506v0ar.push(smo67492);
smo67506v0.addTickables(smo67506v0ar)
fmtsmo6750671.joinVoices([smo67506v0]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo70561 = smo62474.getStemDirection();
smo62474.setStemDirection(dirsmo70561);
smo62475.setStemDirection(dirsmo70561);
smo62476.setStemDirection(dirsmo70561);
smo62477.setStemDirection(dirsmo70561);
const smo70561 = new VF.Beam([smo62474,smo62475,smo62476,smo62477]);
const dirsmo70562 = smo62478.getStemDirection();
smo62478.setStemDirection(dirsmo70562);
smo62479.setStemDirection(dirsmo70562);
smo62480.setStemDirection(dirsmo70562);
smo62481.setStemDirection(dirsmo70562);
const smo70562 = new VF.Beam([smo62478,smo62479,smo62480,smo62481]);
const dirsmo70563 = smo62482.getStemDirection();
smo62482.setStemDirection(dirsmo70563);
smo62483.setStemDirection(dirsmo70563);
smo62484.setStemDirection(dirsmo70563);
smo62485.setStemDirection(dirsmo70563);
const smo70563 = new VF.Beam([smo62482,smo62483,smo62484,smo62485]);
const dirsmo70564 = smo62486.getStemDirection();
smo62486.setStemDirection(dirsmo70564);
smo62487.setStemDirection(dirsmo70564);
smo62488.setStemDirection(dirsmo70564);
smo62489.setStemDirection(dirsmo70564);
const smo70564 = new VF.Beam([smo62486,smo62487,smo62488,smo62489]);
const dirsmo70567 = smo67477.getStemDirection();
smo67477.setStemDirection(dirsmo70567);
smo67478.setStemDirection(dirsmo70567);
smo67479.setStemDirection(dirsmo70567);
smo67480.setStemDirection(dirsmo70567);
const smo70567 = new VF.Beam([smo67477,smo67478,smo67479,smo67480]);
const dirsmo70568 = smo67481.getStemDirection();
smo67481.setStemDirection(dirsmo70568);
smo67482.setStemDirection(dirsmo70568);
smo67483.setStemDirection(dirsmo70568);
smo67484.setStemDirection(dirsmo70568);
const smo70568 = new VF.Beam([smo67481,smo67482,smo67483,smo67484]);
const dirsmo70569 = smo67485.getStemDirection();
smo67485.setStemDirection(dirsmo70569);
smo67486.setStemDirection(dirsmo70569);
smo67487.setStemDirection(dirsmo70569);
smo67488.setStemDirection(dirsmo70569);
const smo70569 = new VF.Beam([smo67485,smo67486,smo67487,smo67488]);
const dirsmo70570 = smo67489.getStemDirection();
smo67489.setStemDirection(dirsmo70570);
smo67490.setStemDirection(dirsmo70570);
smo67491.setStemDirection(dirsmo70570);
smo67492.setStemDirection(dirsmo70570);
const smo70570 = new VF.Beam([smo67489,smo67490,smo67491,smo67492]);
 
// formatting measures in staff group smo59060
fmtsmo6250371.format([smo62503v0,smo67506v0], 342);
const stavesmo62503 = new VF.Stave(1450, 2180, 356);
stavesmo62503.setAttribute('id', 'stavesmo62503');
stavesmo62503.setBegBarType(VF.Barline.type.NONE);
stavesmo62503.setContext(context);
stavesmo62503.draw();
smo62503v0.draw(context, stavesmo62503);
smo70561.setContext(context);
smo70561.draw();
smo70562.setContext(context);
smo70562.draw();
smo70563.setContext(context);
smo70563.draw();
smo70564.setContext(context);
smo70564.draw();
const stavesmo67506 = new VF.Stave(1450, 2270, 356);
stavesmo67506.setAttribute('id', 'stavesmo67506');
stavesmo67506.setBegBarType(VF.Barline.type.NONE);
stavesmo67506.setContext(context);
stavesmo67506.draw();
smo67506v0.draw(context, stavesmo67506);
smo70567.setContext(context);
smo70567.draw();
smo70568.setContext(context);
smo70568.draw();
smo70569.setContext(context);
smo70569.draw();
smo70570.setContext(context);
smo70570.draw();
const rightsmo59060stavesmo625031 = new VF.StaveConnector(stavesmo62503, stavesmo67506).setType(0);
rightsmo59060stavesmo625031.setContext(context).draw();
const smo72220 = new VF.StaveTie({ first_note: smo61707, last_note: smo61708, 
          firstNote: smo61707, lastNote: smo61708, first_indices: [0], last_indices: [0]});
smo72220.setContext(context).draw();
const smo72221 = new VF.StaveTie({ first_note: smo61729, last_note: smo61730, 
          firstNote: smo61729, lastNote: smo61730, first_indices: [0], last_indices: [0]});
smo72221.setContext(context).draw();
const smo72222 = new VF.StaveTie({ first_note: smo61797, last_note: smo61798, 
          firstNote: smo61797, lastNote: smo61798, first_indices: [0], last_indices: [0]});
smo72222.setContext(context).draw();
const smo72223 = new VF.StaveTie({ first_note: smo61805, last_note: null, 
          firstNote: smo61805, lastNote: null, first_indices: [0], last_indices: [0]});
smo72223.setContext(context).draw();
const smo72224 = new VF.StaveTie({ first_note: null, last_note: smo61830, 
          firstNote: null, lastNote: smo61830, first_indices: [0], last_indices: [0]});
smo72224.setContext(context).draw();
const smo72225 = new VF.StaveTie({ first_note: smo61833, last_note: smo61834, 
          firstNote: smo61833, lastNote: smo61834, first_indices: [0], last_indices: [0]});
smo72225.setContext(context).draw();
const smo72226 = new VF.StaveTie({ first_note: smo61855, last_note: smo61856, 
          firstNote: smo61855, lastNote: smo61856, first_indices: [0], last_indices: [0]});
smo72226.setContext(context).draw();
const smo72227 = new VF.StaveTie({ first_note: smo61868, last_note: smo61869, 
          firstNote: smo61868, lastNote: smo61869, first_indices: [0], last_indices: [0]});
smo72227.setContext(context).draw();
const smo72228 = new VF.StaveTie({ first_note: smo61960, last_note: smo61961, 
          firstNote: smo61960, lastNote: smo61961, first_indices: [0], last_indices: [0]});
smo72228.setContext(context).draw();
const smo72229 = new VF.StaveTie({ first_note: smo61991, last_note: null, 
          firstNote: smo61991, lastNote: null, first_indices: [0], last_indices: [0]});
smo72229.setContext(context).draw();
const smo72230 = new VF.StaveTie({ first_note: null, last_note: smo62016, 
          firstNote: null, lastNote: smo62016, first_indices: [0], last_indices: [0]});
smo72230.setContext(context).draw();
const smo72231 = new VF.StaveTie({ first_note: smo61993, last_note: smo61994, 
          firstNote: smo61993, lastNote: smo61994, first_indices: [0], last_indices: [0]});
smo72231.setContext(context).draw();
const smo72232 = new VF.StaveTie({ first_note: smo62032, last_note: smo62033, 
          firstNote: smo62032, lastNote: smo62033, first_indices: [0], last_indices: [0]});
smo72232.setContext(context).draw();
const smo72233 = new VF.StaveTie({ first_note: smo62060, last_note: smo62061, 
          firstNote: smo62060, lastNote: smo62061, first_indices: [0], last_indices: [0]});
smo72233.setContext(context).draw();
const smo72234 = new VF.StaveTie({ first_note: smo62107, last_note: smo62108, 
          firstNote: smo62107, lastNote: smo62108, first_indices: [0], last_indices: [0]});
smo72234.setContext(context).draw();
const smo72235 = new VF.StaveTie({ first_note: smo62149, last_note: smo62175, 
          firstNote: smo62149, lastNote: smo62175, first_indices: [0], last_indices: [0]});
smo72235.setContext(context).draw();
const smo72236 = new VF.StaveTie({ first_note: smo62158, last_note: smo62159, 
          firstNote: smo62158, lastNote: smo62159, first_indices: [0], last_indices: [0]});
smo72236.setContext(context).draw();
const smo72237 = new VF.StaveTie({ first_note: smo62086, last_note: smo62087, 
          firstNote: smo62086, lastNote: smo62087, first_indices: [0], last_indices: [0]});
smo72237.setContext(context).draw();
const smo72238 = new VF.StaveTie({ first_note: smo66835, last_note: smo66836, 
          firstNote: smo66835, lastNote: smo66836, first_indices: [0], last_indices: [0]});
smo72238.setContext(context).draw();
const smo72239 = new VF.StaveTie({ first_note: smo67082, last_note: smo67083, 
          firstNote: smo67082, lastNote: smo67083, first_indices: [0], last_indices: [0]});
smo72239.setContext(context).draw();
const smo72240 = new VF.StaveTie({ first_note: smo67085, last_note: smo67114, 
          firstNote: smo67085, lastNote: smo67114, first_indices: [0], last_indices: [0]});
smo72240.setContext(context).draw();
}