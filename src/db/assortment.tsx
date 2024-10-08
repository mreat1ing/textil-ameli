import AssortmentAccessories from 'src/components/AssortmentAccessories';
import AssortmentRimskie from 'src/components/AssortmentRimskie';
import AssortmentElectro from 'src/components/AssortmentElectro';
import AssortmentKovanie from 'src/components/AssortmentKovanie';
import IAssortment from 'src/interfaces/assortment.interface';
import { hostImages } from 'src/constants/hosting';

const kovanieColors1 = `${hostImages}/assormentCards/cornices/kovanie/colors/vista-serebro-matovoe.jpg`;
const kovanieColors2 = `${hostImages}/assormentCards/cornices/kovanie/colors/vista-zoloto-matovoe.jpg`;
const kovanieColors3 = `${hostImages}/assormentCards/cornices/kovanie/colors/swan-shtanga--1-.jpg`;
const kovanieColors4 = `${hostImages}/assormentCards/cornices/kovanie/colors/dyv-16--hrom-1.jpg`;
const kovanieColors5 = `${hostImages}/assormentCards/cornices/kovanie/colors/dyv-16--satin-1.jpg`;
const kovanieColors6 = `${hostImages}/assormentCards/cornices/kovanie/colors/dyv-16--zoloto-antichnoe-5.jpg`;
const kovanieColors7 = `${hostImages}/assormentCards/cornices/kovanie/colors/dyv-16--zoloto-glyanets.jpg`;
const kovanieColors8 = `${hostImages}/assormentCards/cornices/kovanie/colors/dyv-16-beloe-zoloto-1.jpg`;
const kovanieColors9 = `${hostImages}/assormentCards/cornices/kovanie/colors/dyv-16-hrom-2-1.jpg`;
const kovanieColors10 = `${hostImages}/assormentCards/cornices/kovanie/colors/dyv-16-satin-2-1.jpg`;
const kovanieColors11 = `${hostImages}/assormentCards/cornices/kovanie/colors/dyv-16--zoloto-antichnoe-6-2.jpg`;
const KovanieVidi1 = `${hostImages}/assormentCards/cornices/kovanie/vidi/dyv-16-gladkaya-shtanga.jpg`;
const KovanieVidi2 = `${hostImages}/assormentCards/cornices/kovanie/vidi/dyv-16-vitaya-shtanga.jpg`;
const kovanieNakonechniki1 = `${hostImages}/assormentCards/cornices/kovanie/nakonechniki/dyv-16-nacon-afina-satin-diy16-1.jpg`;
const kovanieNakonechniki2 = `${hostImages}/assormentCards/cornices/kovanie/nakonechniki/dyv-16-nacon-listochki-satin-1.png`;
const kovanieNakonechniki3 = `${hostImages}/assormentCards/cornices/kovanie/nakonechniki/dyv-16-nacon-modul-diy16-satin-1.jpg`;
const kovanieNakonechniki4 = `${hostImages}/assormentCards/cornices/kovanie/nakonechniki/dyv-16-nacon-satin-11.jpg`;
const kovanieNakonechniki5 = `${hostImages}/assormentCards/cornices/kovanie/nakonechniki/dyv-16-nacon-satin-13.jpg`;
const kovanieNakonechniki6 = `${hostImages}/assormentCards/cornices/kovanie/nakonechniki/dyv-16-nacon-satin-15.jpg`;
const kovanieNakonechniki7 = `${hostImages}/assormentCards/cornices/kovanie/nakonechniki/dyv-16-nacon-satin-16.jpg`;
const kovanieNakonechniki9 = `${hostImages}/assormentCards/cornices/kovanie/nakonechniki/dyv-16-nacon-satin-17.jpg`;
const kovanieNakonechniki10 = `${hostImages}/assormentCards/cornices/kovanie/nakonechniki/dyv-16-nacon-satin-18.jpg`;
const kovanieNakonechniki11 = `${hostImages}/assormentCards/cornices/kovanie/nakonechniki/dyv-16-nacon-satin-2.png`;
const kovanieNakonechniki12 = `${hostImages}/assormentCards/cornices/kovanie/nakonechniki/dyv-16-nacon-satin-20.jpg`;
const kovanieNakonechniki13 = `${hostImages}/assormentCards/cornices/kovanie/nakonechniki/dyv-16-nacon-satin-21.jpg`;
const kovanieNakonechniki14 = `${hostImages}/assormentCards/cornices/kovanie/nakonechniki/dyv-16-nacon-satin-22.jpg`;
const kovanieNakonechniki15 = `${hostImages}/assormentCards/cornices/kovanie/nakonechniki/dyv-16-nacon-satin-23.jpg`;
const kovanieNakonechniki16 = `${hostImages}/assormentCards/cornices/kovanie/nakonechniki/dyv-16-nacon-satin-25.jpg`;
const kovanieNakonechniki17 = `${hostImages}/assormentCards/cornices/kovanie/nakonechniki/dyv-16-nacon-satin-27.jpg`;
const kovanieNakonechniki18 = `${hostImages}/assormentCards/cornices/kovanie/nakonechniki/dyv-16-nacon-satin-3.jpg`;
const kovanieNakonechniki19 = `${hostImages}/assormentCards/cornices/kovanie/nakonechniki/dyv-16-nacon-satin-30.jpg`;
const kovanieNakonechniki20 = `${hostImages}/assormentCards/cornices/kovanie/nakonechniki/dyv-16-nacon-satin-32.jpg`;
const kovanieNakonechniki21 = `${hostImages}/assormentCards/cornices/kovanie/nakonechniki/dyv-16-nacon-satin-33.jpg`;
const kovanieNakonechniki22 = `${hostImages}/assormentCards/cornices/kovanie/nakonechniki/dyv-16-nacon-satin-5.jpg`;
const kovanieNakonechniki23 = `${hostImages}/assormentCards/cornices/kovanie/nakonechniki/dyv-16-nacon-satin-zaglushka.jpg`;
const kovanieNakonechniki24 = `${hostImages}/assormentCards/cornices/kovanie/nakonechniki/dyv-16-nacon-shar-riflennyj-diy16-satin.jpg`;
const kovanieColors12 = `${hostImages}/assormentCards/cornices/kovanie/colors/diy28-beloe-zoloto.jpg`;
const kovanieColors13 = `${hostImages}/assormentCards/cornices/kovanie/colors/diy28-hrom.jpg`;
const kovanieColors14 = `${hostImages}/assormentCards/cornices/kovanie/colors/diy28-satin.jpg`;
const kovanieColors15 = `${hostImages}/assormentCards/cornices/kovanie/colors/diy28-zoloto-antik.jpg`;
const kovanieNakonechniki25 = `${hostImages}/assormentCards/cornices/kovanie/nakonechniki/diy28/diy28-satin-10.jpg`;
const kovanieNakonechniki26 = `${hostImages}/assormentCards/cornices/kovanie/nakonechniki/diy28/diy28-satin-37.jpg`;
const kovanieNakonechniki27 = `${hostImages}/assormentCards/cornices/kovanie/nakonechniki/diy28/diy28-satin-38.jpg`;
const kovanieNakonechniki28 = `${hostImages}/assormentCards/cornices/kovanie/nakonechniki/diy28/diy28-satin-39.jpg`;
const kovanieNakonechniki29 = `${hostImages}/assormentCards/cornices/kovanie/nakonechniki/diy28/diy28-satin-41.jpg`;
const kovanieNakonechniki30 = `${hostImages}/assormentCards/cornices/kovanie/nakonechniki/diy28/diy28-satin-42.jpg`;
const kovanieNakonechniki31 = `${hostImages}/assormentCards/cornices/kovanie/nakonechniki/diy28/diy28-satin-43.jpg`;
const kovanieNakonechniki32 = `${hostImages}/assormentCards/cornices/kovanie/nakonechniki/diy28/diy28-satin-45.jpg`;
const kovanieNakonechniki33 = `${hostImages}/assormentCards/cornices/kovanie/nakonechniki/diy28/diy28-satin-47.jpg`;
const kovanieNakonechniki34 = `${hostImages}/assormentCards/cornices/kovanie/nakonechniki/diy28/diy28-satin-7.jpg`;
const kovanieNakonechniki35 = `${hostImages}/assormentCards/cornices/kovanie/nakonechniki/diy28/diy28-satin-8.jpg`;
const kovanieNakonechniki36 = `${hostImages}/assormentCards/cornices/kovanie/nakonechniki/diy28/diy28-sirius-satin-diy28.jpg`;
const kovanieColorsSintra = `${hostImages}/assormentCards/cornices/kovanie/colors/sintra/top-dekor_str-25--1-.jpg`;
const kovanieKomplektacia1 = `${hostImages}/assormentCards/cornices/kovanie/komplektacia/sintra/12-top-dekor-sintra_2018-2--1-.jpg`;
const kovanieKomplektacia2 = `${hostImages}/assormentCards/cornices/kovanie/komplektacia/sintra/12-top-dekor-sintra_2018-4--1-.jpg`;
const kovanieKomplektacia3 = `${hostImages}/assormentCards/cornices/kovanie/komplektacia/ampir/5-ampir_2018-10.jpg`;
const kovanieKomplektacia4 = `${hostImages}/assormentCards/cornices/kovanie/komplektacia/ampir/5-ampir_2018-12.jpg`;
const kovanieKomplektacia5 = `${hostImages}/assormentCards/cornices/kovanie/komplektacia/ampir/5-ampir_2018-13.jpg`;
const kovanieKomplektacia6 = `${hostImages}/assormentCards/cornices/kovanie/komplektacia/ampir/5-ampir_2018-14.jpg`;
const kovanieKomplektacia7 = `${hostImages}/assormentCards/cornices/kovanie/komplektacia/ampir/5-ampir_2018-2.jpg`;
const kovanieKomplektacia8 = `${hostImages}/assormentCards/cornices/kovanie/komplektacia/ampir/5-ampir_2018-4.jpg`;
const kovanieKomplektacia9 = `${hostImages}/assormentCards/cornices/kovanie/komplektacia/ampir/5-ampir_2018-6.jpg`;
const kovanieKomplektacia10 = `${hostImages}/assormentCards/cornices/kovanie/komplektacia/ampir/5-ampir_2018-8.jpg`;
const kovanieRozetki1 = `${hostImages}/assormentCards/cornices/kovanie/rozetki/ampir-rozetka-1.jpg`;
const kovanieRozetki2 = `${hostImages}/assormentCards/cornices/kovanie/rozetki/ampir-rozetka-10.jpg`;
const kovanieRozetki3 = `${hostImages}/assormentCards/cornices/kovanie/rozetki/ampir-rozetka-11.jpg`;
const kovanieRozetki4 = `${hostImages}/assormentCards/cornices/kovanie/rozetki/ampir-rozetka-12.jpg`;
const kovanieRozetki5 = `${hostImages}/assormentCards/cornices/kovanie/rozetki/ampir-rozetka-2.jpg`;
const kovanieRozetki6 = `${hostImages}/assormentCards/cornices/kovanie/rozetki/ampir-rozetka-3.jpg`;
const kovanieRozetki7 = `${hostImages}/assormentCards/cornices/kovanie/rozetki/ampir-rozetka-4.jpg`;
const kovanieRozetki8 = `${hostImages}/assormentCards/cornices/kovanie/rozetki/ampir-rozetka-5.jpg`;
const kovanieRozetki9 = `${hostImages}/assormentCards/cornices/kovanie/rozetki/ampir-rozetka-6.jpg`;
const kovanieRozetki10 = `${hostImages}/assormentCards/cornices/kovanie/rozetki/ampir-rozetka-7.jpg`;
const kovanieRozetki11 = `${hostImages}/assormentCards/cornices/kovanie/rozetki/ampir-rozetka-8.jpg`;
const kovanieRozetki12 = `${hostImages}/assormentCards/cornices/kovanie/rozetki/ampir-rozetka-9.jpg`;
const kovanieDerzhateli1 = `${hostImages}/assormentCards/cornices/kovanie/derzhateli/ampir-derzhatel-1.jpg`;
const kovanieDerzhateli2 = `${hostImages}/assormentCards/cornices/kovanie/derzhateli/ampir-derzhatel-2.jpg`;
const kovanieDerzhateli3 = `${hostImages}/assormentCards/cornices/kovanie/derzhateli/ampir-derzhatel-3.jpg`;
const kovanieDerzhateli4 = `${hostImages}/assormentCards/cornices/kovanie/derzhateli/ampir-derzhatel-4.jpg`;
const kovanieColorsOst = `${hostImages}/assormentCards/cornices/kovanie/colors/ost/ost-tsveta.png`;
const kovanieKomplektacia11 = `${hostImages}/assormentCards/cornices/kovanie/komplektacia/ost/ost_str-11.jpg`;
const kovanieKomplektacia12 = `${hostImages}/assormentCards/cornices/kovanie/komplektacia/ost/ost_str-13.jpg`;
const kovanieKomplektacia13 = `${hostImages}/assormentCards/cornices/kovanie/komplektacia/ost/ost_str-15.jpg`;
const kovanieKomplektacia14 = `${hostImages}/assormentCards/cornices/kovanie/komplektacia/ost/ost_str-16.jpg`;
const kovanieKomplektacia15 = `${hostImages}/assormentCards/cornices/kovanie/komplektacia/ost/ost_str-3.jpg`;
const kovanieKomplektacia16 = `${hostImages}/assormentCards/cornices/kovanie/komplektacia/ost/ost_str-5.jpg`;
const kovanieKomplektacia17 = `${hostImages}/assormentCards/cornices/kovanie/komplektacia/ost/ost_str-7.jpg`;
const kovanieKomplektacia18 = `${hostImages}/assormentCards/cornices/kovanie/komplektacia/ost/ost_str-9.jpg`;
const kovanieDerzhateli5 = `${hostImages}/assormentCards/cornices/kovanie/derzhateli/gotika/gotika-derzhatel-1.jpg`;
const kovanieDerzhateli6 = `${hostImages}/assormentCards/cornices/kovanie/derzhateli/gotika/gotika-derzhatel-2.jpg`;
const kovanieDerzhateli7 = `${hostImages}/assormentCards/cornices/kovanie/derzhateli/gotika/gotika-derzhatel-3.jpg`;
const kovanieDerzhateli8 = `${hostImages}/assormentCards/cornices/kovanie/derzhateli/gotika/gotika-derzhatel-4.jpg`;
const kovanieKomplektacia19 = `${hostImages}/assormentCards/cornices/kovanie/komplektacia/gotika/gotika_stranitsa_3.jpg`;
const kovanieKomplektacia20 = `${hostImages}/assormentCards/cornices/kovanie/komplektacia/gotika/gotika_stranitsa_5.jpg`;
const kovanieKomplektacia21 = `${hostImages}/assormentCards/cornices/kovanie/komplektacia/gotika/gotika_stranitsa_7.jpg`;
const kovanieKomplektacia22 = `${hostImages}/assormentCards/cornices/kovanie/komplektacia/gotika/gotika_stranitsa_8.jpg`;
const derevyannieColors1 = `${hostImages}/assormentCards/cornices/derevyannie/colors/binario-tsvet-profiley.png`;
const derevyannieKomplektaciya1 = `${hostImages}/assormentCards/cornices/derevyannie/komplektaciya/17-binario_2018-2--1-.jpg`;
const derevyannieKomplektaciya2 = `${hostImages}/assormentCards/cornices/derevyannie/komplektaciya/17-binario_2018-4--1-.jpg`;
const derevyannieKomplektaciya3 = `${hostImages}/assormentCards/cornices/derevyannie/komplektaciya/17-binario_2018-6--1-.jpg`;
const derevyannieColors2 = `${hostImages}/assormentCards/cornices/derevyannie/colors/tsveta-vintazh.png`;
const derevyannieKomplektaciya4 = `${hostImages}/assormentCards/cornices/derevyannie/komplektaciya/vintazh/vintazh_stranitsa_3--1-.jpg`;
const derevyannieKomplektaciya5 = `${hostImages}/assormentCards/cornices/derevyannie/komplektaciya/vintazh/vintazh_stranitsa_5--1-.jpg`;
const derevyannieKomplektaciya6 = `${hostImages}/assormentCards/cornices/derevyannie/komplektaciya/renessans/renessans_stranitsa_3--1-.jpg`;
const derevyannieKomplektaciya7 = `${hostImages}/assormentCards/cornices/derevyannie/komplektaciya/renessans/renessans_stranitsa_5--1-.jpg`;
const derevyannieKomplektaciya8 = `${hostImages}/assormentCards/cornices/derevyannie/komplektaciya/renessans/renessans_stranitsa_6--1-.jpg`;
const exclusuveColors1 = `${hostImages}/assormentCards/cornices/exclusive/renome19/colors/liana-2-h-ryadnyj-antik.jpg`;
const exclusuveColors2 = `${hostImages}/assormentCards/cornices/exclusive/renome19/colors/liana-2-h-ryadnyj-bel--1-.jpg`;
const exclusuveColors3 = `${hostImages}/assormentCards/cornices/exclusive/renome19/colors/liana-2-h-ryadnyj-satin.jpg`;
const exclusuveColors4 = `${hostImages}/assormentCards/cornices/exclusive/Selebrity/colors/royal-2-h-ryadnyj.jpg`;
const exclusuveColors5 = `${hostImages}/assormentCards/cornices/exclusive/Selebrity/colors/royal-2-ryadnyj-1.jpg`;
const exclusuveColors6 = `${hostImages}/assormentCards/cornices/exclusive/Selebrity/colors/royal-2-ryadnyj-serebro-1.jpg`;
const exclusuveColors7 = `${hostImages}/assormentCards/cornices/exclusive/Selebrity/colors/selebrity-bone-2-royal.jpg`;
const exclusuveColors8 = `${hostImages}/assormentCards/cornices/exclusive/Emily/colors/emily-roza-2-h-ryadnyj-kor.jpg`;
const exclusuveColors9 = `${hostImages}/assormentCards/cornices/exclusive/Emily/colors/emily-roza-2-ryadnyj-antik.jpg`;
const exclusuveColors10 = `${hostImages}/assormentCards/cornices/exclusive/Emily/colors/emily-roza-2-ryadnyj-serebro.jpg`;
const exclusuveColors11 = `${hostImages}/assormentCards/cornices/exclusive/Emily/colors/emily-roza-2-ryadnyj-slonovaya-kost.jpg`;
const exclusuveColors12 = `${hostImages}/assormentCards/cornices/exclusive/Kupel/colors/walda2_img_product2_big.png`;
const exclusuveColors13 = `${hostImages}/assormentCards/cornices/exclusive/Kupel/colors/walda2_img_product3_big.png`;
const exclusuveColors14 = `${hostImages}/assormentCards/cornices/exclusive/Kupel/colors/walda2_img_product_big.png`;
const exclusuveNakonechniki1 = `${hostImages}/assormentCards/cornices/exclusive/renome19/nakonechniki/liana-2-h-ryadnyj-bel--1-.jpg`;
const exclusuveNakonechniki2 = `${hostImages}/assormentCards/cornices/exclusive/renome19/nakonechniki/shar-malyj-2-h-ryadnyj-bel--1-.jpg`;
const exclusuveNakonechniki3 = `${hostImages}/assormentCards/cornices/exclusive/renome19/nakonechniki/shar-riflenyj-2-h-ryadnyj-bel.jpg`;
const exclusuveNakonechniki4 = `${hostImages}/assormentCards/cornices/exclusive/renome19/nakonechniki/trapetsiya-2-h-ryadnyj-bel.jpg`;
const exclusuveNakonechniki5 = `${hostImages}/assormentCards/cornices/exclusive/Selebrity/komp/selebrity-bone-2-kedr.jpg`;
const exclusuveNakonechniki6 = `${hostImages}/assormentCards/cornices/exclusive/Selebrity/komp/selebrity-bone-2-lanterna.jpg`;
const exclusuveNakonechniki7 = `${hostImages}/assormentCards/cornices/exclusive/Selebrity/komp/selebrity-bone-2-rose.jpg`;
const exclusuveNakonechniki8 = `${hostImages}/assormentCards/cornices/exclusive/Selebrity/komp/selebrity-bone-2-royal.jpg`;
const exclusuveNakonechniki9 = `${hostImages}/assormentCards/cornices/exclusive/Selebrity/komp/selebrity-bone-2-twist.jpg`;
const exclusuveNakonechniki10 = `${hostImages}/assormentCards/cornices/exclusive/Selebrity/komp/selebrity-bone-2-zagl.jpg`;
const exclusuveNakonechniki11 = `${hostImages}/assormentCards/cornices/exclusive/Emily/nakon/emily-roza-2-ryadnyj-serebro.jpg`;
const exclusuveNakonechniki12 = `${hostImages}/assormentCards/cornices/exclusive/Emily/nakon/filigran-2-ryadnyj-serebro.jpg`;
const exclusuveNakonechniki13 = `${hostImages}/assormentCards/cornices/exclusive/Emily/nakon/giostra-2-ryadnyj-serebro.jpg`;
const exclusuveNakonechniki14 = `${hostImages}/assormentCards/cornices/exclusive/Emily/nakon/rikamo-2-ryadnyj-serebro.jpg`;
const exclusuveNakonechniki15 = `${hostImages}/assormentCards/cornices/exclusive/Kupel/nakon/ursula2_img_product_big.png`;
const exclusuveNakonechniki16 = `${hostImages}/assormentCards/cornices/exclusive/Kupel/nakon/vanesa2_img_product_big.png`;
const exclusuveNakonechniki17 = `${hostImages}/assormentCards/cornices/exclusive/Kupel/nakon/walda2_img_product_big.png`;
const electro = `${hostImages}/assormentCards/cornices/electro.png`;
const alluminum = `${hostImages}/assormentCards/cornices/alluminum.jpg`;
const kovannii = `${hostImages}/assormentCards/cornices/kovannii.webp`;
const wood = `${hostImages}/assormentCards/cornices/wood.jpg`;
const exclusive = `${hostImages}/assormentCards/cornices/exclusive.png`;
const kist = `${hostImages}/assormentCards/accesories/kist.jpg`;
const podhvat = `${hostImages}/assormentCards/accesories/podhvat.jpg`;
const magnet = `${hostImages}/assormentCards/accesories/magnet.jpg`;
const somfy40 = `${hostImages}/assormentCards/cornices/electro/rim-1.jpg`;
const somfy = `${hostImages}/assormentCards/cornices/electro/kompakt-s-elektroprivodami-somfy--1-.jpg`;
const compact60electro = `${hostImages}/assormentCards/cornices/electro/karniz-rimskih-shtor-kompakt-60-s-elektroprivodom-sonesse-ultra-30-wf-rts--1-.jpg`;
const karniz = `${hostImages}/assormentCards/cornices/electro/elektro-dlya-shtor.png`;
const s1 = `${hostImages}/assormentCards/cornices/alluminium/profilnyj-karniz-s-1-1.jpg`;
const s2 = `${hostImages}/assormentCards/cornices/alluminium/profilnyj-karniz-s-2.jpg`;
const l1 = `${hostImages}/assormentCards/cornices/alluminium/profilnyj-karniz-l-1.jpg`;
const t1 = `${hostImages}/assormentCards/cornices/alluminium/profilnyj-karniz-t-1.jpg`;
const st2 = `${hostImages}/assormentCards/cornices/alluminium/profilnyj-karniz-st-2.jpg`;
const st3 = `${hostImages}/assormentCards/cornices/alluminium/profilnyj-karniz-st-3-1.jpg`;
const glide1 = `${hostImages}/assormentCards/cornices/alluminium/profilnyj-karniz-glide-1_s-2-2--1-.jpg`;
const glide2 = `${hostImages}/assormentCards/cornices/alluminium/profilnyj-karniz-glide-2_st-2-1--1-.jpg`;
const glide3 = `${hostImages}/assormentCards/cornices/alluminium/profilnyj-karniz-glide-3_st-3-1--1-.jpg`;
const vista16 = `${hostImages}/assormentCards/cornices/kovanie/vista--1-.jpg`;
const swan22 = `${hostImages}/assormentCards/cornices/kovanie/swan-glavnaya-3--1-.jpg`;
const diy16 = `${hostImages}/assormentCards/cornices/kovanie/dyv-16-gladkaya-shtanga.jpg`;
const diy28 = `${hostImages}/assormentCards/cornices/kovanie/diy28.png`;
const sintra = `${hostImages}/assormentCards/cornices/kovanie/korich-zoloto.jpg`;
const ampir = `${hostImages}/assormentCards/cornices/kovanie/ampir-1.jpg`;
const gotika = `${hostImages}/assormentCards/cornices/kovanie/gotika-1.jpg`;
const ost = `${hostImages}/assormentCards/cornices/kovanie/ost-13.jpg`;
const binario = `${hostImages}/assormentCards/cornices/derevyannie/temnaya-vishnya.jpg`;
const vintage = `${hostImages}/assormentCards/cornices/derevyannie/shar-korichneviy-med.jpg`;
const renessans = `${hostImages}/assormentCards/cornices/derevyannie/temno-zelen---zoloto.jpg`;
const renome19 = `${hostImages}/assormentCards/cornices/exclusive/liana-2-h-ryadnyj-antik.jpg`;
const selebrity33 = `${hostImages}/assormentCards/cornices/exclusive/royal-2-h-ryadnyj.jpg`;
const emily19 = `${hostImages}/assormentCards/cornices/exclusive/emily-roza-2-ryadnyj-antik.jpg`;
const kupel35 = `${hostImages}/assormentCards/cornices/exclusive/ursula2_img_product_big.png`;
const compactM = `${hostImages}/assormentCards/rimskie/kompakt-m-erker.jpg`;
const compactLuxe = `${hostImages}/assormentCards/rimskie/kompakt-lyuks.jpg`;
const compactLip = `${hostImages}/assormentCards/rimskie/kompakt-lip.jpg`;
const compact60 = `${hostImages}/assormentCards/rimskie/kompakt-60.jpg`;
const podhvat509 = `${hostImages}/assormentCards/accesories/podhvati/podhvat-537509-1.jpg`;
const podhvat510 = `${hostImages}/assormentCards/accesories/podhvati/podhvat-537510-2.jpg`;
const podhvat511 = `${hostImages}/assormentCards/accesories/podhvati/podhvat-537511-1.jpg`;
const podhvat506 = `${hostImages}/assormentCards/accesories/podhvati/podhvat-537506-6.jpg`;
const podhvat196 = `${hostImages}/assormentCards/accesories/podhvati/podhvat-537196-1.jpg`;
const kist800 = `${hostImages}/assormentCards/accesories/kisti/kist-535800-1.jpg`;
const kist411 = `${hostImages}/assormentCards/accesories/kisti/kist-537411-1.jpg`;
const kist410 = `${hostImages}/assormentCards/accesories/kisti/kist-537410-1.jpg`;
const kist233 = `${hostImages}/assormentCards/accesories/kisti/kist-536233-2.jpg`;
const kist191 = `${hostImages}/assormentCards/accesories/kisti/kist-536191-1.jpg`;
const magnet463 = `${hostImages}/assormentCards/accesories/magnets/magnit-537463.jpg`;
const magnet642 = `${hostImages}/assormentCards/accesories/magnets/magnit-537642.jpg`;
const magnet117 = `${hostImages}/assormentCards/accesories/magnets/magniti-537117-1.jpg`;
const magnet116 = `${hostImages}/assormentCards/accesories/magnets/magniti-537116-5.jpg`;
const magnet329 = `${hostImages}/assormentCards/accesories/magnets/magniti-537329-5.jpg`;
const magnet052 = `${hostImages}/assormentCards/accesories/magnets/magniti-537052-1.jpg`;
const compactMImg1 = `${hostImages}/assormentCards/rimskie/compact-m/kompakt-m-1.jpg`;
const compactMImg2 = `${hostImages}/assormentCards/rimskie/compact-m/kompakt-m-2.jpg`;
const compactMImg3 = `${hostImages}/assormentCards/rimskie/compact-m/kompakt-m-3.jpg`;
const compactLuxeImg1 = `${hostImages}/assormentCards/rimskie/compact-luxe/kompakt-lyuks-1.jpg`;
const compactLuxeImg2 = `${hostImages}/assormentCards/rimskie/compact-luxe/kompakt-lyuks-2.jpg`;
const compactLuxeImg3 = `${hostImages}/assormentCards/rimskie/compact-luxe/kompakt-lyuks-3.jpg`;
const compactLuxeImg4 = `${hostImages}/assormentCards/rimskie/compact-luxe/kompakt-lyuks-4.jpg`;
const compactLipImg1 = `${hostImages}/assormentCards/rimskie/compact-lip/kompakt-lip-1.jpg`;
const compactLipImg2 = `${hostImages}/assormentCards/rimskie/compact-lip/kompakt-lip-2.jpg`;
const compactLipImg3 = `${hostImages}/assormentCards/rimskie/compact-lip/kompakt-lip-3.jpg`;
const compact60Img1 = `${hostImages}/assormentCards/rimskie/compact-60/kompakt-60-1.jpg`;
const compact60Img2 = `${hostImages}/assormentCards/rimskie/compact-60/kompakt-60-2.jpg`;
const podhvat537509img1 = `${hostImages}/assormentCards/accesories/podhvati/537509/podhvat-537509-1.jpg`;
const podhvat537509img2 = `${hostImages}/assormentCards/accesories/podhvati/537509/podhvat-537509-2.jpg`;
const podhvat537509img3 = `${hostImages}/assormentCards/accesories/podhvati/537509/podhvat-537509-3.jpg`;
const podhvat537509img4 = `${hostImages}/assormentCards/accesories/podhvati/537509/podhvat-537509-4.jpg`;
const podhvat537510img1 = `${hostImages}/assormentCards/accesories/podhvati/537510/podhvat-537510-1.jpg`;
const podhvat537510img2 = `${hostImages}/assormentCards/accesories/podhvati/537510/podhvat-537510-2.jpg`;
const podhvat537510img3 = `${hostImages}/assormentCards/accesories/podhvati/537510/podhvat-537510-3.jpg`;
const podhvat537510img4 = `${hostImages}/assormentCards/accesories/podhvati/537510/podhvat-537510-4.jpg`;
const podhvat537511img1 = `${hostImages}/assormentCards/accesories/podhvati/537511/podhvat-537511-1.jpg`;
const podhvat537511img2 = `${hostImages}/assormentCards/accesories/podhvati/537511/podhvat-537511-2.jpg`;
const podhvat537511img3 = `${hostImages}/assormentCards/accesories/podhvati/537511/podhvat-537511-3.jpg`;
const podhvat537511img4 = `${hostImages}/assormentCards/accesories/podhvati/537511/podhvat-537511-4.jpg`;
const podhvat537506img1 = `${hostImages}/assormentCards/accesories/podhvati/537506/podhvat-537506-1.jpg`;
const podhvat537506img2 = `${hostImages}/assormentCards/accesories/podhvati/537506/podhvat-537506-2.jpg`;
const podhvat537506img3 = `${hostImages}/assormentCards/accesories/podhvati/537506/podhvat-537506-3.jpg`;
const podhvat537506img4 = `${hostImages}/assormentCards/accesories/podhvati/537506/podhvat-537506-4.jpg`;
const podhvat537506img5 = `${hostImages}/assormentCards/accesories/podhvati/537506/podhvat-537506-5.jpg`;
const podhvat537506img6 = `${hostImages}/assormentCards/accesories/podhvati/537506/podhvat-537506-6.jpg`;
const podhvat537196img1 = `${hostImages}/assormentCards/accesories/podhvati/537196/podhvat-537196-1.jpg`;
const podhvat537196img2 = `${hostImages}/assormentCards/accesories/podhvati/537196/podhvat-537196-2.jpg`;
const podhvat537196img3 = `${hostImages}/assormentCards/accesories/podhvati/537196/podhvat-537196-3.jpg`;
const podhvat537196img4 = `${hostImages}/assormentCards/accesories/podhvati/537196/podhvat-537196-4.jpg`;
const podhvat537196img5 = `${hostImages}/assormentCards/accesories/podhvati/537196/podhvat-537196-5.jpg`;
const kist535800img1 = `${hostImages}/assormentCards/accesories/kisti/535800/kist-535800-1.jpg`;
const kist535800img2 = `${hostImages}/assormentCards/accesories/kisti/535800/kist-535800-2.jpg`;
const kist535800img3 = `${hostImages}/assormentCards/accesories/kisti/535800/kist-535800-3.jpg`;
const kist535800img4 = `${hostImages}/assormentCards/accesories/kisti/535800/kist-535800-4.jpg`;
const kist535800img5 = `${hostImages}/assormentCards/accesories/kisti/535800/kist-535800-5.jpg`;
const kist535800img6 = `${hostImages}/assormentCards/accesories/kisti/535800/kist-535800-6.jpg`;
const kist535800img7 = `${hostImages}/assormentCards/accesories/kisti/535800/kist-535800-7.jpg`;
const kist535800img8 = `${hostImages}/assormentCards/accesories/kisti/535800/kist-535800-8.jpg`;
const kist535800img9 = `${hostImages}/assormentCards/accesories/kisti/535800/kist-535800-9.jpg`;
const kist535800img10 = `${hostImages}/assormentCards/accesories/kisti/535800/kist-535800-10.jpg`;
const kist535800img11 = `${hostImages}/assormentCards/accesories/kisti/535800/kist-535800-11.jpg`;
const kist535800img12 = `${hostImages}/assormentCards/accesories/kisti/535800/kist-535800-12.jpg`;
const kist535800img13 = `${hostImages}/assormentCards/accesories/kisti/535800/kist-535800-13.jpg`;
const kist535800img14 = `${hostImages}/assormentCards/accesories/kisti/535800/kist-535800-14.jpg`;
const kist535800img15 = `${hostImages}/assormentCards/accesories/kisti/535800/kist-535800-15.jpg`;
const kist535800img16 = `${hostImages}/assormentCards/accesories/kisti/535800/kist-535800-16.jpg`;
const kist537411img1 = `${hostImages}/assormentCards/accesories/kisti/537411/kist-537411-1.jpg`;
const kist537411img2 = `${hostImages}/assormentCards/accesories/kisti/537411/kist-537411-2.jpg`;
const kist537411img3 = `${hostImages}/assormentCards/accesories/kisti/537411/kist-537411-3.jpg`;
const kist537411img4 = `${hostImages}/assormentCards/accesories/kisti/537411/kist-537411-4.jpg`;
const kist537411img5 = `${hostImages}/assormentCards/accesories/kisti/537411/kist-537411-5.jpg`;
const kist537411img6 = `${hostImages}/assormentCards/accesories/kisti/537411/kist-537411-6.jpg`;
const kist537411img7 = `${hostImages}/assormentCards/accesories/kisti/537411/kist-537411-7.jpg`;
const kist537410img1 = `${hostImages}/assormentCards/accesories/kisti/537410/kist-537410-1.jpg`;
const kist537410img2 = `${hostImages}/assormentCards/accesories/kisti/537410/kist-537410-2.jpg`;
const kist537410img3 = `${hostImages}/assormentCards/accesories/kisti/537410/kist-537410-3.jpg`;
const kist537410img4 = `${hostImages}/assormentCards/accesories/kisti/537410/kist-537410-4.jpg`;
const kist537410img5 = `${hostImages}/assormentCards/accesories/kisti/537410/kist-537410-5.jpg`;
const kist537410img6 = `${hostImages}/assormentCards/accesories/kisti/537410/kist-537410-6.jpg`;
const kist536233img1 = `${hostImages}/assormentCards/accesories/kisti/536233/kist-536233-1.jpg`;
const kist536233img2 = `${hostImages}/assormentCards/accesories/kisti/536233/kist-536233-2.jpg`;
const kist536233img3 = `${hostImages}/assormentCards/accesories/kisti/536233/kist-536233-3.jpg`;
const kist536233img4 = `${hostImages}/assormentCards/accesories/kisti/536233/kist-536233-4.jpg`;
const kist536233img5 = `${hostImages}/assormentCards/accesories/kisti/536233/kist-536233-5.jpg`;
const kist536233img6 = `${hostImages}/assormentCards/accesories/kisti/536233/kist-536233-6.jpg`;
const kist536233img7 = `${hostImages}/assormentCards/accesories/kisti/536233/kist-536233-7.jpg`;
const kist536233img8 = `${hostImages}/assormentCards/accesories/kisti/536233/kist-536233-8.jpg`;
const kist536233img9 = `${hostImages}/assormentCards/accesories/kisti/536233/kist-536233-9.jpg`;
const kist536191img1 = `${hostImages}/assormentCards/accesories/kisti/536191/kist-536191-1.jpg`;
const kist536191img2 = `${hostImages}/assormentCards/accesories/kisti/536191/kist-536191-2.jpg`;
const kist536191img3 = `${hostImages}/assormentCards/accesories/kisti/536191/kist-536191-3.jpg`;
const kist536191img4 = `${hostImages}/assormentCards/accesories/kisti/536191/kist-536191-4.jpg`;
const kist536191img5 = `${hostImages}/assormentCards/accesories/kisti/536191/kist-536191-5.jpg`;
const kist536191img6 = `${hostImages}/assormentCards/accesories/kisti/536191/kist-536191-6.jpg`;
const kist536191img7 = `${hostImages}/assormentCards/accesories/kisti/536191/kist-536191-7.jpg`;
const kist536191img8 = `${hostImages}/assormentCards/accesories/kisti/536191/kist-536191-8.jpg`;
const kist536191img9 = `${hostImages}/assormentCards/accesories/kisti/536191/kist-536191-9.jpg`;
const magnet537117img1 = `${hostImages}/assormentCards/accesories/magnets/537117/magniti-537117-1.jpg`;
const magnet537117img2 = `${hostImages}/assormentCards/accesories/magnets/537117/magniti-537117-2.jpg`;
const magnet537117img3 = `${hostImages}/assormentCards/accesories/magnets/537117/magniti-537117-3.jpg`;
const magnet537117img4 = `${hostImages}/assormentCards/accesories/magnets/537117/magniti-537117-4.jpg`;
const magnet537117img5 = `${hostImages}/assormentCards/accesories/magnets/537117/magniti-537117-5.jpg`;
const magnet537117img6 = `${hostImages}/assormentCards/accesories/magnets/537117/magniti-537117-6.jpg`;
const magnet537116img1 = `${hostImages}/assormentCards/accesories/magnets/537116/magniti-537116-1.jpg`;
const magnet537116img2 = `${hostImages}/assormentCards/accesories/magnets/537116/magniti-537116-2.jpg`;
const magnet537116img3 = `${hostImages}/assormentCards/accesories/magnets/537116/magniti-537116-3.jpg`;
const magnet537116img4 = `${hostImages}/assormentCards/accesories/magnets/537116/magniti-537116-4.jpg`;
const magnet537116img5 = `${hostImages}/assormentCards/accesories/magnets/537116/magniti-537116-5.jpg`;
const magnet537329img1 = `${hostImages}/assormentCards/accesories/magnets/537329/magniti-537329-1.jpg`;
const magnet537329img2 = `${hostImages}/assormentCards/accesories/magnets/537329/magniti-537329-2.jpg`;
const magnet537329img3 = `${hostImages}/assormentCards/accesories/magnets/537329/magniti-537329-3.jpg`;
const magnet537329img4 = `${hostImages}/assormentCards/accesories/magnets/537329/magniti-537329-4.jpg`;
const magnet537329img5 = `${hostImages}/assormentCards/accesories/magnets/537329/magniti-537329-5.jpg`;
const magnet537052img1 = `${hostImages}/assormentCards/accesories/magnets/537052/magniti-537052-1.jpg`;
const magnet537052img2 = `${hostImages}/assormentCards/accesories/magnets/537052/magniti-537052-2.jpg`;
const magnet537052img3 = `${hostImages}/assormentCards/accesories/magnets/537052/magniti-537052-3.jpg`;
const magnet537052img4 = `${hostImages}/assormentCards/accesories/magnets/537052/magniti-537052-4.jpg`;
const magnet537052img5 = `${hostImages}/assormentCards/accesories/magnets/537052/magniti-537052-5.jpg`;
const electroSomfy40Image1 = `${hostImages}/assormentCards/cornices/electro/images/kompakt-60-s-elektroprivodom-somfy-sonesse-401.png`;
const electroKarniziImage = `${hostImages}/assormentCards/cornices/electro/images/sravnenie.png`;
const profilyaS1variantIzgiba1 = `${hostImages}/assormentCards/cornices/profilya/variant-izgiba-1.jpg`;
const profilyaS1variantIzgiba2 = `${hostImages}/assormentCards/cornices/profilya/variant-izgiba-2-3.jpg`;
const profilyaS1variantIzgiba3 = `${hostImages}/assormentCards/cornices/profilya/variant-izgiba-3-3.jpg`;
const profilyaS1variantIzgiba4 = `${hostImages}/assormentCards/cornices/profilya/variant-izgiba-4-4.jpg`;
const profilyaS1variantIzgiba5 = `${hostImages}/assormentCards/cornices/profilya/variant-izgiba-5-2.jpg`;
const profilyaS1variantIzgiba6 = `${hostImages}/assormentCards/cornices/profilya/variant-izgiba-6-2.jpg`;
const profilyaS1variantIzgiba7 = `${hostImages}/assormentCards/cornices/profilya/variant-izgiba-7-3.jpg`;
const profilyaS1chertezh1 = `${hostImages}/assormentCards/cornices/profilya/s1/chertezh-profilya.jpg`;
const profilyaS1chertezh2 = `${hostImages}/assormentCards/cornices/profilya/s1/blok-s-nagruzkoj.jpg`;
const profilyaS2chertezh1 = `${hostImages}/assormentCards/cornices/profilya/s2/chertezh-2.jpg`;
const profilyaL1chertezh1 = `${hostImages}/assormentCards/cornices/profilya/l1/chertezh.jpg`;
const profilyaL1chertezh2 = `${hostImages}/assormentCards/cornices/profilya/l1/blok-s-nagruzkoj-1-.png`;
const profilyaT1chertezh1 = `${hostImages}/assormentCards/cornices/profilya/t1/chertezh-3.jpg`;
const profilyaT1chertezh2 = `${hostImages}/assormentCards/cornices/profilya/t1/blok-s-nagruzkoj-7.jpg`;
const profilyaSt2chertezh1 = `${hostImages}/assormentCards/cornices/profilya/st2/shema.jpg`;
const profilyaSt2chertezh2 = `${hostImages}/assormentCards/cornices/profilya/st2/blok-s-nagruzkoj.jpg`;
const profilyaSt3chertezh1 = `${hostImages}/assormentCards/cornices/profilya/st3/shema.jpg`;
const profilyaSt3chertezh2 = `${hostImages}/assormentCards/cornices/profilya/st3/blok-s-nagruzkoj-8.jpg`;
const headerSomfy401 = `${hostImages}/assormentCards/cornices/electro/header/somfy40/1.jpg`;
const headerSomfy402 = `${hostImages}/assormentCards/cornices/electro/header/somfy40/2.png`;
const headerSomfy1 = `${hostImages}/assormentCards/cornices/electro/header/somfy/kompakt-s-elektroprivodami-somfy-1.jpg`;
const headerSomfy2 = `${hostImages}/assormentCards/cornices/electro/header/somfy/kompakt-s-elektroprivodami-somfy-2.jpg`;
const headerCompact601 = `${hostImages}/assormentCards/cornices/electro/header/compact60/1.jpg`;
const headerCompact602 = `${hostImages}/assormentCards/cornices/electro/header/compact60/2.png`;
const headerElectro1 = `${hostImages}/assormentCards/cornices/electro/header/electro/1.png`;
const headerElectro2 = `${hostImages}/assormentCards/cornices/electro/header/electro/2.jpg`;
const headerElectro3 = `${hostImages}/assormentCards/cornices/electro/header/electro/3.jpg`;
const headerElectro4 = `${hostImages}/assormentCards/cornices/electro/header/electro/4.jpg`;
const headerElectro5 = `${hostImages}/assormentCards/cornices/electro/header/electro/5.jpg`;
const headerElectro6 = `${hostImages}/assormentCards/cornices/electro/header/electro/6.jpg`;
const headerSintra1 = `${hostImages}/assormentCards/cornices/kovanie/header/sintra/1.jpg`;
const headerSintra2 = `${hostImages}/assormentCards/cornices/kovanie/header/sintra/2.jpg`;
const headerSintra3 = `${hostImages}/assormentCards/cornices/kovanie/header/sintra/3.jpg`;
const headerSintra4 = `${hostImages}/assormentCards/cornices/kovanie/header/sintra/4.jpg`;
const headerSintra5 = `${hostImages}/assormentCards/cornices/kovanie/header/sintra/5.jpg`;
const headerSintra6 = `${hostImages}/assormentCards/cornices/kovanie/header/sintra/6.jpg`;
const headerSintra7 = `${hostImages}/assormentCards/cornices/kovanie/header/sintra/7.jpg`;
const headerSintra8 = `${hostImages}/assormentCards/cornices/kovanie/header/sintra/8.jpg`;
const headerAmpir1 = `${hostImages}/assormentCards/cornices/kovanie/header/ampir/ampir-1.jpg`;
const headerAmpir2 = `${hostImages}/assormentCards/cornices/kovanie/header/ampir/ampir-2.jpg`;
const headerAmpir3 = `${hostImages}/assormentCards/cornices/kovanie/header/ampir/ampir-3.jpg`;
const headerAmpir4 = `${hostImages}/assormentCards/cornices/kovanie/header/ampir/ampir-4.jpg`;
const headerAmpir5 = `${hostImages}/assormentCards/cornices/kovanie/header/ampir/ampir-5.jpg`;
const headerAmpir6 = `${hostImages}/assormentCards/cornices/kovanie/header/ampir/ampir-6.jpg`;
const headerAmpir7 = `${hostImages}/assormentCards/cornices/kovanie/header/ampir/ampir-7.jpg`;
const headerAmpir8 = `${hostImages}/assormentCards/cornices/kovanie/header/ampir/ampir-8.jpg`;
const headerAmpir9 = `${hostImages}/assormentCards/cornices/kovanie/header/ampir/ampir-9.jpg`;
const headerAmpir10 = `${hostImages}/assormentCards/cornices/kovanie/header/ampir/ampir-10.jpg`;
const headerAmpir11 = `${hostImages}/assormentCards/cornices/kovanie/header/ampir/ampir-11.jpg`;
const headerAmpir12 = `${hostImages}/assormentCards/cornices/kovanie/header/ampir/ampir-12.jpg`;
const headerOst1 = `${hostImages}/assormentCards/cornices/kovanie/header/ost/ost-1.jpg`;
const headerOst2 = `${hostImages}/assormentCards/cornices/kovanie/header/ost/ost-2.jpg`;
const headerOst3 = `${hostImages}/assormentCards/cornices/kovanie/header/ost/ost-3.jpg`;
const headerOst4 = `${hostImages}/assormentCards/cornices/kovanie/header/ost/ost-4.jpg`;
const headerOst5 = `${hostImages}/assormentCards/cornices/kovanie/header/ost/ost-5.jpg`;
const headerOst6 = `${hostImages}/assormentCards/cornices/kovanie/header/ost/ost-6.jpg`;
const headerOst7 = `${hostImages}/assormentCards/cornices/kovanie/header/ost/ost-7.jpg`;
const headerOst8 = `${hostImages}/assormentCards/cornices/kovanie/header/ost/ost-8.jpg`;
const headerOst9 = `${hostImages}/assormentCards/cornices/kovanie/header/ost/ost-9.jpg`;
const headerOst10 = `${hostImages}/assormentCards/cornices/kovanie/header/ost/ost-10.jpg`;
const headerOst11 = `${hostImages}/assormentCards/cornices/kovanie/header/ost/ost-11.jpg`;
const headerOst12 = `${hostImages}/assormentCards/cornices/kovanie/header/ost/ost-12.jpg`;
const headerOst13 = `${hostImages}/assormentCards/cornices/kovanie/header/ost/ost-13.jpg`;
const headerOst14 = `${hostImages}/assormentCards/cornices/kovanie/header/ost/ost-14.jpg`;
const headerGotika1 = `${hostImages}/assormentCards/cornices/kovanie/header/gotika/gotika-1.jpg`;
const headerGotika2 = `${hostImages}/assormentCards/cornices/kovanie/header/gotika/gotika-2.jpg`;
const headerGotika3 = `${hostImages}/assormentCards/cornices/kovanie/header/gotika/gotika-3.jpg`;
const headerGotika4 = `${hostImages}/assormentCards/cornices/kovanie/header/gotika/gotika-4.jpg`;
const headerGotika5 = `${hostImages}/assormentCards/cornices/kovanie/header/gotika/gotika-5.jpg`;
const headerGotika6 = `${hostImages}/assormentCards/cornices/kovanie/header/gotika/gotika-6.jpg`;
const headerGotika7 = `${hostImages}/assormentCards/cornices/kovanie/header/gotika/gotika-7.jpg`;
const headerGotika8 = `${hostImages}/assormentCards/cornices/kovanie/header/gotika/vanil-zoloto.jpg`;
const headerBinario1 = `${hostImages}/assormentCards/cornices/derevyannie/header/binario/1.jpg`;
const headerBinario2 = `${hostImages}/assormentCards/cornices/derevyannie/header/binario/2.jpg`;
const headerBinario3 = `${hostImages}/assormentCards/cornices/derevyannie/header/binario/3.jpg`;
const headerBinario4 = `${hostImages}/assormentCards/cornices/derevyannie/header/binario/4.jpg`;
const headerBinario5 = `${hostImages}/assormentCards/cornices/derevyannie/header/binario/5.jpg`;
const headerBinario6 = `${hostImages}/assormentCards/cornices/derevyannie/header/binario/6.jpg`;
const headerBinario7 = `${hostImages}/assormentCards/cornices/derevyannie/header/binario/7.jpg`;
const headerBinario8 = `${hostImages}/assormentCards/cornices/derevyannie/header/binario/8.jpg`;
const headerRenessans1 = `${hostImages}/assormentCards/cornices/derevyannie/header/renessans/1.jpg`;
const headerRenessans2 = `${hostImages}/assormentCards/cornices/derevyannie/header/renessans/2.jpg`;
const headerRenessans3 = `${hostImages}/assormentCards/cornices/derevyannie/header/renessans/3.jpg`;
const headerRenessans4 = `${hostImages}/assormentCards/cornices/derevyannie/header/renessans/4.jpg`;
const headerRenessans5 = `${hostImages}/assormentCards/cornices/derevyannie/header/renessans/5.jpg`;
const headerRenessans6 = `${hostImages}/assormentCards/cornices/derevyannie/header/renessans/6.jpg`;
const headerRenessans7 = `${hostImages}/assormentCards/cornices/derevyannie/header/renessans/7.jpg`;
const headerRenessans8 = `${hostImages}/assormentCards/cornices/derevyannie/header/renessans/8.jpg`;
const headerVintage1 = `${hostImages}/assormentCards/cornices/derevyannie/header/vintage/1.jpg`;
const headerVintage2 = `${hostImages}/assormentCards/cornices/derevyannie/header/vintage/2.jpg`;
const headerVintage3 = `${hostImages}/assormentCards/cornices/derevyannie/header/vintage/3.jpg`;
const headerVintage4 = `${hostImages}/assormentCards/cornices/derevyannie/header/vintage/4.jpg`;
const headerVintage5 = `${hostImages}/assormentCards/cornices/derevyannie/header/vintage/5.jpg`;
const headerVintage6 = `${hostImages}/assormentCards/cornices/derevyannie/header/vintage/6.jpg`;

export const getItems = (where: string, search: string) => {
  let searchedObject;
  const listObjects = [assortment, cornicesAssortment, accessoriesAssortment];
  for (const array of listObjects) {
    if (searchedObject) break;
    for (const object of array) {
      if (object.url === where) {
        searchedObject = object;
        break;
      }
    }
  }
  return searchedObject?.items.find((el) => el.src === search);
};

const rimskieMekhanizmi = {
  'compact-m': {
    descriptionList: [
      'Минимальная длина карниза для римских штор - 21 см (2 рабочих блока).',
      'Минимальная длина карниза (без экрера, торцевая часть) для французских штор - 28 см (3 рабочих блока).',
      'Минимальная длина карниза  (средняя часть карниза) для французских штор - 14 см (1 рабочий блок)',
      'Максимальная длина карниза (суммарная длина всех частей карниза) - 400 см',
      'Максимальная высота карнизасо шторой - 500 см',
      'Максимальное количество эркерных соединителей - 4',
      'Угол поворота эркерного соединителя - 90-180 градусов',
      'Максимально возможная нагрузка на механизм (вес шторы с утяжелителями) независимо от количества секций - 4 кг',
    ],
    images: [compactMImg1, compactMImg2, compactMImg3],
  },
  'compact-luxe': {
    descriptionList: [
      'Минимальная длина карниза для римских штор - 30 см (2 рабочих блока).',
      'Минимальная длина карниза для французских штор - 55 см (3 рабочих блока).',
      'Максимальная длина карниза (суммарная длина всех частей карниза) - 400 см',
      'Максимальная высота карниза со шторой - 3,2 м',
    ],
    images: [
      compactLuxeImg1,
      compactLuxeImg2,
      compactLuxeImg3,
      compactLuxeImg4,
    ],
  },
  'compact-lip': {
    descriptionList: [
      'Минимальная длина карниза для римских штор - 30 см (2 рабочих блока).',
      'Минимальная длина карниза для французских штор - 55 см (3 рабочих блока).',
      'Максимальная длина карниза (суммарная длина всех частей карниза) - 400 см',
      'Максимальная высота карниза со шторой - 3,2 м',
    ],
    images: [compactLipImg1, compactLipImg2, compactLipImg3],
  },
  'compact-60': {
    descriptionList: [
      'Минимальная длина карниза: зависит от минимального допустимого количества используемых рабочих блоков: для римских штор - 35 см (минимум 2 рабочих блока); для французских штор - 55 см (минимум 3 рабочих блока).',
      'Максимальная ширина карниза со шторой - 4 м',
      'Максимальная высота карниза со шторой - 5,5 м',
      'Минимальная высота карниза со шторой - 0,3 м',
      'Максимально возможная нагрузка на механизм (вес шторы с утяжелителями на один карниз) независимо от длины карниза - 15 кг',
    ],
    images: [compact60Img1, compact60Img2],
  },
};

export const assortment: IAssortment[] = [
  {
    url: 'karnisy',
    title: 'Карнизы',
    items: [
      {
        name: 'Электрокарнизы',
        src: 'elektrokarnisy',
        image: electro,
        key: 'Электрокарнизы',
      },
      {
        name: 'Алюминиевые профиля',
        src: 'alyuminievye-profilya',
        image: alluminum,
        key: 'Алюминиевые профиля',
      },
      {
        name: 'Кованые',
        src: 'kovanie',
        image: kovannii,
        key: 'Кованые',
      },
      {
        name: 'Деревянные',
        src: 'derevyannie',
        image: wood,
        key: 'Деревянные',
      },
      {
        name: 'Эксклюзив',
        src: 'exclusive',
        image: exclusive,
        key: 'Эксклюзив',
      },
    ],
  },
  {
    url: 'rimskie-mekhanizmy',
    title: 'Римские механизмы',
    items: [
      {
        name: 'Компакт-M',
        key: 'Компакт-M',
        src: 'compact-m',
        image: compactM,
        component: (
          <AssortmentRimskie
            description={rimskieMekhanizmi['compact-m'].descriptionList}
            images={rimskieMekhanizmi['compact-m'].images}
            headerImage={[compactM]}
          />
        ),
      },
      {
        name: 'Компакт-Люкс',
        key: 'Компакт-Люкс',
        src: 'compact-luxe',
        image: compactLuxe,
        component: (
          <AssortmentRimskie
            description={rimskieMekhanizmi['compact-luxe'].descriptionList}
            images={rimskieMekhanizmi['compact-luxe'].images}
            headerImage={[compactLuxe]}
          />
        ),
      },
      {
        name: 'Компакт-Лип',
        key: 'Компакт-Лип',
        src: 'compact-lip',
        image: compactLip,
        component: (
          <AssortmentRimskie
            description={rimskieMekhanizmi['compact-lip'].descriptionList}
            images={rimskieMekhanizmi['compact-lip'].images}
            headerImage={[compactLip]}
          />
        ),
      },
      {
        name: 'Компакт-60',
        key: 'Компакт-60',
        src: 'compact-60',
        image: compact60,
        component: (
          <AssortmentRimskie
            description={rimskieMekhanizmi['compact-60'].descriptionList}
            images={rimskieMekhanizmi['compact-60'].images}
            headerImage={[compact60]}
          />
        ),
      },
    ],
  },
  {
    url: 'porternye-tkani',
    title: 'Портьерные и тюлевые ткани',
    items: [],
  },
  {
    url: 'accessories',
    title: 'Аксессуары',
    items: [
      {
        image: podhvat,
        key: 'Подхваты',
        name: 'Подхваты',
        src: 'podhvati',
      },
      {
        image: kist,
        key: 'Кисти',
        name: 'Кисти',
        src: 'kisti',
      },
      {
        image: magnet,
        key: 'Магниты',
        name: 'Магниты',
        src: 'magnets',
      },
    ],
  },
  {
    url: 'pokrivala',
    title: 'Покрывала',
    items: [],
  },
];
const electroKarnizi = {
  'somfy-40': {
    descriptionList: [
      'Максимальная высота – 5,50 м',
      'Максимальная ширина – 4,00 м',
      'Минимальная ширина – 0,60 м',
      'Максимальная площадь – 10,00 м.кв.',
    ],
    privods: [
      {
        title: 'Sonesse40 RTS с радиоприёмником',
        items: [],
      },
      {
        title: 'Sonesse40 без радиоприёмника',
        items: [],
      },
    ],
    variants: ['индивидуальное', 'групповое', 'индивидуальное и групповое'],
    variantsText: [
      'Происхождение Франция',
      'Широкие возможности модернизации',
      'Возможность индивидуального и группового управления',
      'Возможность интегрировать в систему «Умный дом»',
      'Большой выбор радиоуправления (1, 2, 4, 6, 16-канальные передатчики), выбор дизайна позволит подобрать к вашему интерьеру более подходящий радиопульт',
      'Характерна бесшумная работа электропривода',
      'Запоминание Вашего любимого положения - функция «My» в устройствах дистанционного, радиоуправления',
      'Срок службы электропривода не менее 15 лет, 5-летняя международная гарантия соответствие международным стандартам',
    ],
    images: [electroSomfy40Image1],
  },
  somfy: {
    descriptionList: [
      'Минимальная ширина – 0,65 м',
      'Максимальная высота – 3,20 м',
      'Максимальная ширина – 3,00 м',
      'Максимальный вес шторы – 2,30 кг',
      'Максимальная площадь - 5,5 м2',
    ],
    privods: [
      {
        title: 'Tilt&Lift 25 WireFree RTS c радиоприёмником',
        items: [
          'Встроенный радиоприёмник RTS',
          'Электронные концевые положения',
          'Сниженный уровень шума',
          'Возможность интеграции в системы беспроводной домашней автоматизации',
          'Удобное беспроводное решение',
          'Центральное расположение в карнизе',
        ],
      },
      {
        title: 'Электропривод LW 25',
        items: [
          'Центральное расположение в карнизе',
          'Остановка привода по усилию',
          'Возможность интеграции в систему "Умный дом"',
        ],
      },
      {
        title: 'Беспроводная версия WireFree',
        items: [
          'Без прокладки кабеля электропитания',
          'Без проводов между приводом и пультом',
          'Без повреждения стен',
          'Привод рассчитан на эксплуатацию более 10 лет',
          'Патент низкого энергопотребления Somfy',
        ],
      },
    ],
  },
  compact60electro: {
    descriptionText:
      'Создать Уют ещё никогда не было так просто, как с новым приводом из линейки бесшумных моторов Somfy Sonesse®. Он оснащен встроенной перезаряжаемой литиево-ионной батареей для минимизации усилий по установке, а высокая мощность 2 Нм открывает перед Вами возможности моторизовать различные типы штор и жалюзи даже больших размеров. И никаких проводов!',
    descriptionList: [
      'Минимальная ширина – 80см',
      'Максимальная ширина – 300см',
      'Максимальная высота – 400см',
      'Максимальная площадь – 5м2',
    ],
    privods: [{ title: 'Sonesse Ultra WireFree RTS', items: [] }],
    variants: ['индивидуальное', 'групповое', 'индивидуальное и групповое'],
    variantsText: [
      'Не требуется устанавливать и заменять батареи',
      'Возможность поднимать тяжелые шторы',
      'Регулируемая скорость движения штор и жалюзи',
      'Возможность интеграции в системы беспроводной домашней автоматизации',
      'Совместимость с пультом Telis Modulis RTS, обеспечивающим точный контроль положения ламелей жалюзи',
      'Тонкая голова привода светлого цвета сливается с большинством стандартных креплений',
      'Плавный старт и остановка. Плавность работы конструкции',
      'Настройка промежуточного положения «My». Вызов одним нажатием на пульте управления',
      'Светодиод, сигнализирующий о низком заряде аккумулятора',
      'Отсутствие внешнего контейнера для батареек',
    ],
    pluses: [
      {
        title: 'Просто следить.',
        text: 'Светодиодные индикаторы помогут настроить оборудование и отслеживать уровень заряда батареи',
      },
      {
        title: 'Просто установить.',
        text: 'Программируемая кнопка позволяет управлять оборудованием вручную, упрощая процесс установки',
      },
      {
        title: 'Просто эксплуатировать.',
        text: 'Встроенная перезаряжаемая литий-ионная батарея',
      },
      {
        title: 'Удобно.',
        text: 'Беспроводная технология, не нужно беспокоиться о проводке',
      },
      {
        title: 'Тихо.',
        text: 'Создан быть бесшумным и дарить пользователю комфорт',
      },
      { title: 'Надёжно. ', text: 'Каждый привод проходит контроль качества' },
    ],
    images: [electroSomfy40Image1],
  },
  karniz: {
    descriptionText:
      'Инновационные решения SOMFY для автоматизации шторных карнизов и штор весом до 100 кг',
    descriptionList: [
      'Надежный, стильный и тихий электропривод',
      'Пригодны для удаленного управления - и подключения к системе "умный дом"',
      'Плавное и равномерное движение',
      'Запоминание вашего предпочтительного положения - функция «my» в устройствах дистанционного управления',
      'Автоматическое включение при ручном перемещении шторы',
      'Электрокарниз glydea с регулируемой скоростью',
    ],
    variants: [
      'Glydea Ultra',
      'Irismo WireFree',
      'Movelite',
      'Movelite WireFree',
    ],
    privods: [
      {
        title: 'Универсальность',
        items: [
          'Подходит для всех типов штор',
          'Электрокарниз различной формы: прямой, изогнутый или дугообразный',
          'Возможность перемещения шторы даже в случае отключения электричества',
        ],
      },
      {
        title: 'Простота',
        items: [
          'Легко установить. Не требует обслуживания',
          'Возможны различные варианты монтажа привода: классический или скрытая установка под подвесным потолком',
          'Одностороннее, двустороннее, асимметричное или классическое (с перекрытием) открытие',
          'Подключение к обычной электросети 220 В',
        ],
      },
      {
        title: 'Дизайн',
        items: [
          'Конструкция со скрытым кабелем',
          'Высококачественный корпус электропривода',
          'Регулировка конечных положений позволяет всегда сохранять безупречную форму Вашей портьеры',
          'Функция «Обратное движение» позволяет выровнять верх и низ шторы, когда низ стелется по полу',
        ],
      },
      {
        title: 'Комфорт',
        items: [
          'Плавное автоматическое открытие и закрытие штор',
          'Регулировка скорости движения штор',
          'Настройка крайних положений штор',
          'Функция TOUCH MOTION позволяет перемещать полотно шторы вручную без повреждения конструкции',
          'Бесшумная работа электропривода',
          'Выбор устройств управления: с помощью сенсорного радиовыключателя; с помощью радиопульта; через систему «Умный дом» от Somfy',
        ],
      },
    ],
    imagesTitle:
      'Сравнительная таблица электроприводов для моторизации шторных карнизов:',
    images: [electroKarniziImage],
  },
};

const profilya = {
  s1: {
    descriptionText:
      'С-1 - профильный алюминиевый карниз для ламбрекенов, воланов и бандо',
    description: [
      'Возможность совмещения различных профилей на одном окне',
      'Цвет профиля - белый, RAL 9016',
      'Цвет комплектующих - белый',
      'Длина карниза (max) - без ограничений',
      'Изготовление карнизов без стыковочных элементов - до 6 м',
    ],
    images: [
      profilyaS1variantIzgiba1,
      profilyaS1variantIzgiba2,
      profilyaS1variantIzgiba3,
      profilyaS1variantIzgiba4,
      profilyaS1variantIzgiba5,
      profilyaS1variantIzgiba6,
      profilyaS1variantIzgiba7,
    ],
    images2: [profilyaS1chertezh1, profilyaS1chertezh2],
  },
  s2: {
    descriptionText:
      'С-2 - профильный алюминиевый карниз для среднего веса штор',
    description: [
      'Возможность совмещения различных профилей на одном окне',
      'Цвет профиля - белый, RAL 9016',
      'Цвет комплектующих - белый',
      'Длина карниза (max) - без ограничений',
      'Изготовление карнизов без стыковочных элементов - до 6 м',
    ],
    images: [
      profilyaS1variantIzgiba1,
      profilyaS1variantIzgiba2,
      profilyaS1variantIzgiba3,
      profilyaS1variantIzgiba4,
      profilyaS1variantIzgiba5,
      profilyaS1variantIzgiba6,
      profilyaS1variantIzgiba7,
    ],
    images2: [profilyaS2chertezh1, profilyaS1chertezh2],
  },
  l1: {
    descriptionText:
      'Л-1 - профильный алюминиевый карниз для легкого веса штор и тюля',
    description: [
      'Возможность совмещения различных профилей на одном окне',
      'Цвет профиля - белый, RAL 9016',
      'Цвет комплектующих - белый',
      'Длина карниза (max) - без ограничений',
      'Изготовление карнизов без стыковочных элементов - до 6 м',
    ],
    images: [
      profilyaS1variantIzgiba2,
      profilyaS1variantIzgiba3,
      profilyaS1variantIzgiba4,
      profilyaS1variantIzgiba5,
      profilyaS1variantIzgiba6,
      profilyaS1variantIzgiba7,
    ],
    images2: [profilyaL1chertezh1, profilyaL1chertezh2],
  },
  t1: {
    descriptionText:
      'Т1 - профильный алюминиевый карниз для среднего и тяжелого веса штор',
    description: [
      'Возможность совмещения различных профилей на одном окне',
      'Цвет профиля - белый, RAL 9016',
      'Цвет комплектующих - белый',
      'Длина карниза (max) - без ограничений',
      'Изготовление карнизов без стыковочных элементов - до 6 м',
    ],
    images: [
      profilyaS1variantIzgiba2,
      profilyaS1variantIzgiba3,
      profilyaS1variantIzgiba4,
      profilyaS1variantIzgiba5,
      profilyaS1variantIzgiba6,
      profilyaS1variantIzgiba7,
    ],
    images2: [profilyaT1chertezh1, profilyaT1chertezh2],
  },
  st2: {
    descriptionText:
      'СТ-2 - 2-х рядный профильный алюминиевый карниз для среднего веса штор. конфигураций декора окна в кухне, детской, гостиной, спальне',
    description: [
      'Возможность совмещения различных профилей на одном окне',
      'Цвет профиля - белый, RAL 9016',
      'Цвет комплектующих - белый',
      'Длина карниза (max) - без ограничений',
      'Изготовление карнизов без стыковочных элементов - до 6 м',
    ],
    images2: [profilyaSt2chertezh1, profilyaSt2chertezh2],
  },
  st3: {
    descriptionText:
      'СТ-3 - 3-х рядный профильный алюминиевый карниз для тяжелого веса штор. конфигураций декора окна в кухне, детской, гостиной, спальне',
    description: [
      'Возможность совмещения различных профилей на одном окне',
      'Цвет профиля - белый, RAL 9016',
      'Цвет комплектующих - белый',
      'Длина карниза (max) - без ограничений',
      'Изготовление карнизов без стыковочных элементов - до 6 м',
    ],
    images2: [profilyaSt3chertezh1, profilyaSt3chertezh2],
  },
  glide1: {
    descriptionText:
      'Однорядный алюминиевый карниз используется для легкого и среднего веса штор, прямой',
    descriptionList: [
      { title: 'Размеры', items: ['Цельные штанги:   2,0  |  2,4  |  3,0'] },
      { title: 'Количество рядов', items: ['Однорядные'] },
    ],
  },
  glide2: {
    descriptionText:
      'Двухрядный алюминиевый карниз используется для среднего веса штор, прямой',
    descriptionList: [
      {
        title: 'Размеры',
        items: ['Цельные штанги:   2,0  |  2,4  |  3,0  |  3,5'],
      },
      { title: 'Количество рядов', items: ['Двухрядные'] },
    ],
  },
  glide3: {
    descriptionText:
      'Трехрядный алюминиевый карниз используется для средних и тяжелых штор, прямой',
    descriptionList: [
      {
        title: 'Размеры',
        items: ['Цельные штанги:   2,0  |  2,4  |  3,0  |  3,5'],
      },
      { title: 'Количество рядов', items: ['Трехрядные'] },
    ],
  },
};
const kovanieKarnizi = {
  vista16: {
    descriptionText:
      'Виста - металлопластиковые карнизы Ø16 мм. Карниз поставляется полностью в готовой комплектации, наконечники входят в комплект. Упаковка - термоусадочная пленка',
    descriptionList: [
      {
        title: 'Размеры',
        items: ['Цельные штанги:  1,6  |  1,8  |  2,0  |  2,4  |  3,0'],
      },
      {
        title: 'Количество рядов',
        items: ['Однорядные Ø 16 мм', 'Двухрядные Ø 16/16 мм'],
      },
    ],
    imagesTitle: 'Цвета:',
    images: [kovanieColors1, kovanieColors2],
  },
  swan22: {
    descriptionText:
      'Swan — металлический карниз Ø22мм. Карниз поставляется в готовой комплектации с наконечниками. Упаковка - термоусадочная пленка',
    descriptionList: [
      {
        title: 'Размеры',
        items: ['Цельные штанги:  1,6  |  2,0  |  2,4  |  3,0'],
      },
      {
        title: 'Количество рядов',
        items: ['Однорядные Ø 22 мм', 'Двухрядные Ø 22/22 мм'],
      },
    ],
    imagesTitle: 'Цвета:',
    images: [kovanieColors3],
  },
  diy16: {
    descriptionText:
      'DIY 16 мм — карнизы Ø16мм, с гальваническим покрытием, бесшумными кольцами, усиленными кронштейнами 21см',
    descriptionList: [
      {
        title: 'Размеры',
        items: [
          'Цельные штанги: 1,4  |  1,6  |  1,8  |  2,0  |  2,4  |  3,0',
          'Составные по центру: 2,8  |  3,0  |  3,2  |  3,6  |  4,0',
        ],
      },
      {
        title: 'Количество рядов',
        items: ['Однорядные Ø 16 мм', 'Двухрядные Ø 16/16 мм'],
      },
    ],
    imagesTitle: 'Цвета:',
    images: [
      kovanieColors4,
      kovanieColors5,
      kovanieColors6,
      kovanieColors7,
      kovanieColors8,
      kovanieColors9,
      kovanieColors10,
      kovanieColors11,
    ],
    images2Title: 'Виды карнизов:',
    images2: [KovanieVidi1, KovanieVidi2],
    images3Title: 'Наконечники:',
    images3: [
      kovanieNakonechniki1,
      kovanieNakonechniki2,
      kovanieNakonechniki3,
      kovanieNakonechniki4,
      kovanieNakonechniki5,
      kovanieNakonechniki6,
      kovanieNakonechniki7,
      kovanieNakonechniki9,
      kovanieNakonechniki10,
      kovanieNakonechniki11,
      kovanieNakonechniki12,
      kovanieNakonechniki13,
      kovanieNakonechniki14,
      kovanieNakonechniki15,
      kovanieNakonechniki16,
      kovanieNakonechniki17,
      kovanieNakonechniki18,
      kovanieNakonechniki19,
      kovanieNakonechniki20,
      kovanieNakonechniki21,
      kovanieNakonechniki22,
      kovanieNakonechniki23,
      kovanieNakonechniki24,
    ],
  },
  diy28: {
    descriptionText:
      'Коллекция DIY Ø28 мм — металлические карнизы с гальваническим покрытием',
    descriptionList: [
      {
        title: 'Размеры',
        items: [
          'Цельные штанги: 1,4  |  1,6  |  1,8  |  2,0  |  2,4  |  3,0',
          'Составные по центру: 2,8  |  3,0  |  3,2  |  3,6',
        ],
      },
      {
        title: 'Количество рядов',
        items: ['Однорядные Ø 28 мм', 'Двухрядные Ø 28/16 мм'],
      },
    ],
    imagesTitle: 'Цвета:',
    images: [
      kovanieColors12,
      kovanieColors13,
      kovanieColors14,
      kovanieColors15,
    ],
    images3Title: 'Наконечники:',
    images3: [
      kovanieNakonechniki25,
      kovanieNakonechniki26,
      kovanieNakonechniki27,
      kovanieNakonechniki28,
      kovanieNakonechniki29,
      kovanieNakonechniki30,
      kovanieNakonechniki31,
      kovanieNakonechniki32,
      kovanieNakonechniki33,
      kovanieNakonechniki34,
      kovanieNakonechniki35,
      kovanieNakonechniki36,
    ],
  },
  sintra: {
    descriptionText:
      'Коллекция Синтра - это стальные, латунные наконечники сложных эллипсоидных форм; кронштейны коллекции, также как и наконечники, имеют плавные линии. Идея отсутствия в данной коллекции острых углов и граней с компьютерной точностью воплощается в жизнь на высокотехнологичных станках с программным управлением',
    descriptionList: [
      {
        title: 'Окраска',
        items: [
          'Все изделия коллекции Синтра могут быть выполнены по таблице цвета Топ-Декор. Возможна окраска по каталогу Tikkurila и RAL',
          'Достойное предложение для взыскательных клиентов',
        ],
      },
    ],
    imagesTitle: 'Возможные цвета:',
    images: [kovanieColorsSintra],
    images3Title: 'Комплектация:',
    images3: [kovanieKomplektacia1, kovanieKomplektacia2],
  },
  ampir: {
    descriptionText:
      'Коллекция латунных карнизов Ампир - одна из эксклюзивных коллекций круглых карнизов - это легкость, изящество, надежность, долговечность! Богатство форм и тонкая обрабртка латунных элементов карниза: наконечников, кронштейнов, колец, держателей, подхватов для штор, художественное литье',
    descriptionList: [
      {
        title: 'Особенности',
        items: [
          'В коллекции представлены латунные кольца со вставкой для обеспечения бесшумного скольжения по штанге и пластмассовые кольца. Классическая красота в гармонии с современной функциональностью - это коллекция Ампир',
        ],
      },
    ],
    imagesTitle: 'Держатели:',
    images: [
      kovanieDerzhateli1,
      kovanieDerzhateli2,
      kovanieDerzhateli3,
      kovanieDerzhateli4,
    ],
    images2Title: 'Розетки:',
    images2: [
      kovanieRozetki1,
      kovanieRozetki2,
      kovanieRozetki3,
      kovanieRozetki4,
      kovanieRozetki5,
      kovanieRozetki6,
      kovanieRozetki7,
      kovanieRozetki8,
      kovanieRozetki9,
      kovanieRozetki10,
      kovanieRozetki11,
      kovanieRozetki12,
    ],
    images3Title: 'Комплектация:',
    images3: [
      kovanieKomplektacia3,
      kovanieKomplektacia4,
      kovanieKomplektacia5,
      kovanieKomplektacia6,
      kovanieKomplektacia7,
      kovanieKomplektacia8,
      kovanieKomplektacia9,
      kovanieKomplektacia10,
    ],
  },
  ost: {
    descriptionText:
      'Коллекция круглых металлических карнизов Ост: D16мм, D20мм, D25мм, D35мм. Держатели штор, подхваты, декоративные розетки, крючки. Эркерные соединители штанг. настенные, в том числе консольные кронштейны, потолочные кронштейны, кронштейны эконом. Возможность комбинирования штанг различных диаметров в одном карнизе. Однорядные и двухрядные открытые кронштейны обеспечивают дополнительное удобство при установке',
    descriptionList: [
      {
        title: 'О коллекции',
        items: [
          'Наконечники выполнены в разнообразных стилях: строгие геометрические формы, растительные мотивы, имитация ковки, использование страз и художественного стекла в декоре наконечников, а также возможность выбора диаметра и декора штанг (витые, рифленые и гладкие) обеспечивает популярность коллекции',
          'Широкая цветовая палитра',
        ],
      },
    ],
    imagesTitle: 'Цвета:',
    images: [kovanieColorsOst],
    images3Title: 'Комплектация:',
    images3: [
      kovanieKomplektacia11,
      kovanieKomplektacia12,
      kovanieKomplektacia13,
      kovanieKomplektacia14,
      kovanieKomplektacia15,
      kovanieKomplektacia16,
      kovanieKomplektacia17,
      kovanieKomplektacia18,
    ],
  },
  gotika: {
    descriptionText:
      'Готика - коллекция круглых металлических литых карнизов с элементами ковки. Диаметр штанги 20 мм',
    descriptionList: [
      {
        title: 'Цвета',
        items: [
          'При желании заказчика возможна окраска элементов коллекции по таблицам цвета, а также по каталогу Tikkurila RAL',
        ],
      },
      {
        title: 'Особенности',
        items: [
          'Сдержанная цветовая палитра. Строгие формы наконечников и кронштейнов: коллекция содержит более десяти видов наконечников, кронштейны разнообразных форм и конструкций, в том числе кронштейн Камелот для второй направляющей',
        ],
      },
    ],
    images2Title: 'Держатели:',
    images2: [
      kovanieDerzhateli5,
      kovanieDerzhateli6,
      kovanieDerzhateli7,
      kovanieDerzhateli8,
    ],
    images3Title: 'Комплектация:',
    images3: [
      kovanieKomplektacia19,
      kovanieKomplektacia20,
      kovanieKomplektacia21,
      kovanieKomplektacia22,
    ],
  },
};
const karniziDerevyannie = {
  binario: {
    descriptionText:
      'Широкая цветовая палитра деревянного профиля. Металлические заглушки-наконечники и кронштейны из высококачественной нержавеющей стали завершают респектабельный образ',
    descriptionList: [
      {
        title: 'Бинарио',
        items: [
          'Алюминиевый профиль-рельс (один или два) вмонтирован в декоративный деревянный профиль и составляет с ним единое целое',
        ],
      },
      {
        title: 'Бинерио-Кросс',
        items: [
          'Карнизы Бинарио-Кросс используются для создания панельных штор. Алюминиевый профиль Кросс (трёх- или четырёхрядный) вмонтирован в декоративный деревянный профиль. Направляющие кросс устанавливаются в многорядный профиль',
        ],
      },
    ],
    images: [derevyannieColors1],
    images3Title: 'Комплектация:',
    images3: [
      derevyannieKomplektaciya1,
      derevyannieKomplektaciya2,
      derevyannieKomplektaciya3,
    ],
  },
  vintage: {
    descriptionText:
      'Эксклюзивная коллекция классических деревянных карнизов с наконечниками изысканных классических форм - Савона двухрядные 35/28, однорядные 35, а также кронштейн D35, дающий возможность формировать карниз как с одной штангой, так и в сочетании штанги и второй направляющей',
    descriptionList: [
      {
        title: 'Окраска',
        items: [
          'В коллекции использованы специальные технологии окраски элементов по таблице цвета Винтаж, в том числе с эффектом старения: кракелюр, патина',
        ],
      },
      {
        title: 'Декор',
        items: [
          'Предусмотрена возможность декорирования стразами наконечников и кронштейнов по желанию заказчика',
        ],
      },
    ],
    images: [derevyannieColors2],
    images3Title: 'Комплектация:',
    images3: [derevyannieKomplektaciya4, derevyannieKomplektaciya5],
  },
  renessans: {
    descriptionText:
      'Коллекция Ренессанс - декоративные карнизы со штангой большого диаметра (50 мм)',
    descriptionList: [
      {
        title: 'Абсолютная классика декора',
        items: [
          'Крупные наконечники, пропорциональные размеру штанги, повторяют линии элементов декора. Около 10 видов самых разнообразных по форме наконечников, однорядные и двухрядные кронштейны, эркеры',
          'Специальные высокотехнологичные приемы обработки элементов карниза, в том числе с эффектом старения, патины, кракелюра, нестандартные цвета позволяют создать неповторимый образ в интерьерах любого цветового решения',
        ],
      },
    ],
    images: [derevyannieColors2],
    images3Title: 'Комплектация:',
    images3: [
      derevyannieKomplektaciya6,
      derevyannieKomplektaciya7,
      derevyannieKomplektaciya8,
    ],
  },
};
const karniziExclusive = {
  renome19: {
    descriptionText:
      'Карнизы Renome несут важную функциональную и эстетическую нагрузку. Правильно подобранная модель карниза не только гармонично впишется в пространство, но и визуально скорректирует высоту потолков, размеры помещения',
    descriptionList: [
      {
        title: 'Размеры',
        items: ['Цельные штанги:  1,6  |  1,8  |  2,0  |  2,4  |  3,0'],
      },
      {
        title: 'Количество рядов',
        items: ['Однорядные Ø 19 мм', 'Двухрядные Ø 19/19 мм'],
      },
    ],
    imagesTitle: 'Цвета:',
    images: [exclusuveColors1, exclusuveColors2, exclusuveColors3],
    images3Title: 'Наконечники:',
    images3: [
      exclusuveNakonechniki1,
      exclusuveNakonechniki2,
      exclusuveNakonechniki3,
      exclusuveNakonechniki4,
    ],
  },
  selebrity33: {
    descriptionText:
      'Дайте волю своей творческой фантазии, составьте неповторимое оформление окна! Цветовая гамма и формы наконечников придадут индивидуальность интерьеру и оживят пространство',
    descriptionList: [
      {
        title: 'Размеры',
        items: ['Цельные штанги:  1,6  |  1,8  |  2,0  |  2,4  |  3,0'],
      },
      {
        title: 'Количество рядов',
        items: ['Однорядные Ø 33 мм', 'Двухрядные Ø 33/19 мм'],
      },
    ],
    imagesTitle: 'Цвета:',
    images: [
      exclusuveColors4,
      exclusuveColors5,
      exclusuveColors6,
      exclusuveColors7,
    ],
    images3Title: 'Наконечники:',
    images3: [
      exclusuveNakonechniki5,
      exclusuveNakonechniki6,
      exclusuveNakonechniki7,
      exclusuveNakonechniki8,
      exclusuveNakonechniki9,
      exclusuveNakonechniki10,
    ],
  },
  emily19: {
    descriptionText:
      'Интерьеры, с одной стороны, должны быть яркими, а с другой — изящными и эстетичными. Этим требованиям на 100% отвечает стилистика металлических карнизов коллекции Emily',
    descriptionList: [
      {
        title: 'Размеры',
        items: ['Цельные штанги:  1,6  |  1,8  |  2,0  |  2,4  |  3,0'],
      },
      {
        title: 'Количество рядов',
        items: ['Однорядные Ø 19 мм', 'Двухрядные Ø 19/19 мм'],
      },
    ],
    imagesTitle: 'Цвета:',
    images: [
      exclusuveColors8,
      exclusuveColors9,
      exclusuveColors10,
      exclusuveColors11,
    ],
    images3Title: 'Наконечники:',
    images3: [
      exclusuveNakonechniki11,
      exclusuveNakonechniki12,
      exclusuveNakonechniki13,
      exclusuveNakonechniki14,
    ],
  },
  kupel35: {
    descriptionText:
      'Природные материалы и формы купола используются в различных интерьерах. Особый стиль деревянной архитектуры, тонко сочетает купольную гармонию с древесной мягкостью и природностью исполнения. Благородные породы дерева, ценившиеся во все времена, это всегда приятные для глаз детали, которые могут внести большую значимость и строгость в художественное оформление пространства',
    descriptionList: [
      {
        title: 'Количество рядов',
        items: ['Однорядные Ø 35 мм', 'Двухрядные Ø 35/20 мм'],
      },
    ],
    imagesTitle: 'Цвета:',
    images: [exclusuveColors12, exclusuveColors13, exclusuveColors14],
    images3Title: 'Наконечники:',
    images3: [
      exclusuveNakonechniki15,
      exclusuveNakonechniki16,
      exclusuveNakonechniki17,
    ],
  },
};

export const cornicesAssortment: IAssortment[] = [
  {
    url: 'elektrokarnisy',
    title: 'Электрокарнизы',
    items: [
      {
        image: somfy40,
        key: 'Компакт 60 с электроприводом SOMFY Sonesse 40',
        name: 'Компакт 60 с электроприводом SOMFY Sonesse 40',
        src: 'kompakt-60-s-elektroprivodom-somfy-sonesse-40',
        component: (
          <AssortmentElectro
            description={electroKarnizi['somfy-40'].descriptionList}
            privods={electroKarnizi['somfy-40'].privods}
            images={electroKarnizi['somfy-40'].images}
            variantsText={electroKarnizi['somfy-40'].variantsText}
            variants={electroKarnizi['somfy-40'].variants}
            headerImage={[headerSomfy401, headerSomfy402]}
            showHarakteristics
          />
        ),
      },
      {
        image: somfy,
        key: 'Компакт с электроприводами Somfy',
        name: 'Компакт с электроприводами Somfy',
        src: 'kompakt-s-elektroprivodami-somfy',
        component: (
          <AssortmentElectro
            description={electroKarnizi['somfy'].descriptionList}
            privods={electroKarnizi['somfy'].privods}
            headerImage={[headerSomfy1, headerSomfy2]}
            showHarakteristics
          />
        ),
      },
      {
        image: compact60electro,
        key: 'Карниз римских штор Компакт 60 с электроприводом Sonesse Ultra 30 WF RTS',
        name: 'Карниз римских штор Компакт 60 с электроприводом Sonesse Ultra 30 WF RTS',
        src: 'karniz-rimskikh-shtor-kompakt-60-s-elektroprivodom-sonesse-ultra-30-wf-rts',
        component: (
          <AssortmentElectro
            descriptionText={electroKarnizi['compact60electro'].descriptionText}
            description={electroKarnizi['compact60electro'].descriptionList}
            privods={electroKarnizi['compact60electro'].privods}
            variants={electroKarnizi['compact60electro'].variants}
            variantsText={electroKarnizi['compact60electro'].variantsText}
            pluses={electroKarnizi['compact60electro'].pluses}
            images={electroKarnizi['compact60electro'].images}
            descrTitle={true}
            headerImage={[headerCompact601, headerCompact602]}
            showHarakteristics
          />
        ),
      },
      {
        image: karniz,
        key: 'Электрокарнизы для штор',
        name: 'Электрокарнизы для штор',
        src: 'elektrokarnizy-dlya-shtor',
        component: (
          <AssortmentElectro
            descriptionText={electroKarnizi['karniz'].descriptionText}
            description={electroKarnizi['karniz'].descriptionList}
            privods={electroKarnizi['karniz'].privods}
            variants={electroKarnizi['karniz'].variants}
            imagesTitle={electroKarnizi['karniz'].imagesTitle}
            images={electroKarnizi['karniz'].images}
            showPrivodsTitles
            showHarakteristics
            descrTitle
            headerImage={[
              headerElectro1,
              headerElectro2,
              headerElectro3,
              headerElectro4,
              headerElectro5,
              headerElectro6,
            ]}
          />
        ),
      },
    ],
  },
  {
    url: 'alyuminievye-profilya',
    title: 'Алюминиевые профиля',
    items: [
      {
        image: s1,
        key: 'Профиль С-1',
        name: 'Профиль С-1',
        src: 'profil-s-1',
        component: (
          <AssortmentRimskie
            descriptionText={profilya['s1'].descriptionText}
            description={profilya['s1'].description}
            images={profilya['s1'].images}
            images2={profilya['s1'].images2}
            headerImage={[s1]}
            isProfiles
          />
        ),
      },
      {
        image: s2,
        key: 'Профиль С-2',
        name: 'Профиль С-2',
        src: 'profil-s-2',
        component: (
          <AssortmentRimskie
            descriptionText={profilya['s2'].descriptionText}
            description={profilya['s2'].description}
            images={profilya['s2'].images}
            images2={profilya['s2'].images2}
            headerImage={[s2]}
            isProfiles={true}
          />
        ),
      },
      {
        image: l1,
        key: 'Профиль Л-1',
        name: 'Профиль Л-1',
        src: 'profil-l-1',
        component: (
          <AssortmentRimskie
            descriptionText={profilya['l1'].descriptionText}
            description={profilya['l1'].description}
            images={profilya['l1'].images}
            images2={profilya['l1'].images2}
            headerImage={[l1]}
            isProfiles={true}
          />
        ),
      },
      {
        image: t1,
        key: 'Профиль T-1',
        name: 'Профиль T-1',
        src: 'profil-t-1',
        component: (
          <AssortmentRimskie
            descriptionText={profilya['t1'].descriptionText}
            description={profilya['t1'].description}
            images={profilya['t1'].images}
            images2={profilya['t1'].images2}
            headerImage={[t1]}
            isProfiles={true}
          />
        ),
      },
      {
        image: st2,
        key: 'Профиль CT-2',
        name: 'Профиль CT-2',
        src: 'profil-st-2',
        component: (
          <AssortmentRimskie
            descriptionText={profilya['st2'].descriptionText}
            description={profilya['st2'].description}
            images2={profilya['st2'].images2}
            headerImage={[st2]}
            isProfiles={true}
          />
        ),
      },
      {
        image: st3,
        key: 'Профиль CT-3',
        name: 'Профиль CT-3',
        src: 'profil-st-3',
        component: (
          <AssortmentRimskie
            descriptionText={profilya['st3'].descriptionText}
            description={profilya['st3'].description}
            images2={profilya['st3'].images2}
            headerImage={[st3]}
            isProfiles={true}
          />
        ),
      },
      {
        image: glide1,
        key: 'GLIDE 1 (Профиль С-2)',
        name: 'GLIDE 1 (Профиль С-2)',
        src: 'glide-1-profil-s-2',
        component: (
          <AssortmentRimskie
            descriptionText={profilya['glide1'].descriptionText}
            desctriptionList={profilya['glide1'].descriptionList}
            headerImage={[glide1]}
            isProfiles={true}
          />
        ),
      },
      {
        image: glide2,
        key: 'GLIDE 2 (Профиль СТ-2)',
        name: 'GLIDE 2 (Профиль СТ-2)',
        src: 'glide-2-profil-st-2',
        component: (
          <AssortmentRimskie
            descriptionText={profilya['glide2'].descriptionText}
            desctriptionList={profilya['glide2'].descriptionList}
            headerImage={[glide2]}
            isProfiles={true}
          />
        ),
      },
      {
        image: glide3,
        key: 'GLIDE 3 (Профиль СТ-3)',
        name: 'GLIDE 3 (Профиль СТ-3)',
        src: 'glide-3-profil-st-3',
        component: (
          <AssortmentRimskie
            descriptionText={profilya['glide3'].descriptionText}
            desctriptionList={profilya['glide3'].descriptionList}
            headerImage={[glide3]}
            isProfiles={true}
          />
        ),
      },
    ],
  },
  {
    url: 'kovanie',
    title: 'Кованые',
    items: [
      {
        image: vista16,
        key: 'Виста Ø16 мм',
        name: 'Виста Ø16 мм',
        src: 'vista-16-mm',
        component: (
          <AssortmentKovanie
            descriptionText={kovanieKarnizi['vista16'].descriptionText}
            desctriptionList={kovanieKarnizi['vista16'].descriptionList}
            images={kovanieKarnizi['vista16'].images}
            imagesTitle={kovanieKarnizi['vista16'].imagesTitle}
            headerImage={[vista16, somfy40]}
            multicolor={false}
          />
        ),
      },
      {
        image: swan22,
        key: 'Swan Ø22 мм',
        name: 'Swan Ø22 мм',
        src: 'swan-22-mm',
        component: (
          <AssortmentKovanie
            descriptionText={kovanieKarnizi['swan22'].descriptionText}
            desctriptionList={kovanieKarnizi['swan22'].descriptionList}
            images={kovanieKarnizi['swan22'].images}
            imagesTitle={kovanieKarnizi['swan22'].imagesTitle}
            headerImage={[swan22]}
            multicolor={false}
          />
        ),
      },
      {
        image: diy16,
        key: 'DIY Ø16 мм',
        name: 'DIY Ø16 мм',
        src: 'diy-16-mm',
        component: (
          <AssortmentKovanie
            descriptionText={kovanieKarnizi['diy16'].descriptionText}
            desctriptionList={kovanieKarnizi['diy16'].descriptionList}
            images={kovanieKarnizi['diy16'].images}
            imagesTitle={kovanieKarnizi['diy16'].imagesTitle}
            images2={kovanieKarnizi['diy16'].images2}
            images2Title={kovanieKarnizi['diy16'].images2Title}
            images3={kovanieKarnizi['diy16'].images3}
            images3Title={kovanieKarnizi['diy16'].images3Title}
            headerImage={[diy16]}
            multicolor={false}
          />
        ),
      },
      {
        image: diy28,
        key: 'DIY Ø28 мм',
        name: 'DIY Ø28 мм',
        src: 'diy-28-mm',
        component: (
          <AssortmentKovanie
            descriptionText={kovanieKarnizi['diy28'].descriptionText}
            desctriptionList={kovanieKarnizi['diy28'].descriptionList}
            images={kovanieKarnizi['diy28'].images}
            imagesTitle={kovanieKarnizi['diy28'].imagesTitle}
            images3={kovanieKarnizi['diy28'].images3}
            images3Title={kovanieKarnizi['diy28'].images3Title}
            headerImage={[diy28]}
            multicolor={false}
          />
        ),
      },
      {
        image: sintra,
        key: 'Синтра',
        name: 'Синтра',
        src: 'sintra',
        component: (
          <AssortmentKovanie
            descriptionText={kovanieKarnizi['sintra'].descriptionText}
            desctriptionList={kovanieKarnizi['sintra'].descriptionList}
            images={kovanieKarnizi['sintra'].images}
            imagesTitle={kovanieKarnizi['sintra'].imagesTitle}
            images3={kovanieKarnizi['sintra'].images3}
            images3Title={kovanieKarnizi['sintra'].images3Title}
            headerImage={[
              headerSintra1,
              headerSintra2,
              headerSintra3,
              headerSintra4,
              headerSintra5,
              headerSintra6,
              headerSintra7,
              headerSintra8,
            ]}
            multicolor={true}
          />
        ),
      },
      {
        image: ampir,
        key: 'Ампир',
        name: 'Ампир',
        src: 'ampir',
        component: (
          <AssortmentKovanie
            descriptionText={kovanieKarnizi['ampir'].descriptionText}
            desctriptionList={kovanieKarnizi['ampir'].descriptionList}
            images={kovanieKarnizi['ampir'].images}
            imagesTitle={kovanieKarnizi['ampir'].imagesTitle}
            images2={kovanieKarnizi['ampir'].images2}
            images2Title={kovanieKarnizi['ampir'].images2Title}
            images3={kovanieKarnizi['ampir'].images3}
            images3Title={kovanieKarnizi['ampir'].images3Title}
            headerImage={[
              headerAmpir1,
              headerAmpir2,
              headerAmpir3,
              headerAmpir4,
              headerAmpir5,
              headerAmpir6,
              headerAmpir7,
              headerAmpir8,
              headerAmpir9,
              headerAmpir10,
              headerAmpir11,
              headerAmpir12,
            ]}
            multicolor={false}
          />
        ),
      },
      {
        image: ost,
        key: 'ОСТ',
        name: 'ОСТ',
        src: 'ost',
        component: (
          <AssortmentKovanie
            descriptionText={kovanieKarnizi['ost'].descriptionText}
            desctriptionList={kovanieKarnizi['ost'].descriptionList}
            images={kovanieKarnizi['ost'].images}
            imagesTitle={kovanieKarnizi['ost'].imagesTitle}
            images3={kovanieKarnizi['ost'].images3}
            images3Title={kovanieKarnizi['ost'].images3Title}
            headerImage={[
              headerOst1,
              headerOst2,
              headerOst3,
              headerOst4,
              headerOst5,
              headerOst6,
              headerOst7,
              headerOst8,
              headerOst9,
              headerOst10,
              headerOst11,
              headerOst12,
              headerOst13,
              headerOst14,
            ]}
            multicolor={true}
          />
        ),
      },
      {
        image: gotika,
        key: 'Готика',
        name: 'Готика',
        src: 'gotika',
        component: (
          <AssortmentKovanie
            descriptionText={kovanieKarnizi['gotika'].descriptionText}
            desctriptionList={kovanieKarnizi['gotika'].descriptionList}
            images2={kovanieKarnizi['gotika'].images2}
            images2Title={kovanieKarnizi['gotika'].images2Title}
            images3={kovanieKarnizi['gotika'].images3}
            images3Title={kovanieKarnizi['gotika'].images3Title}
            headerImage={[
              headerGotika1,
              headerGotika2,
              headerGotika3,
              headerGotika4,
              headerGotika5,
              headerGotika6,
              headerGotika7,
              headerGotika8,
            ]}
            multicolor={false}
          />
        ),
      },
    ],
  },
  {
    url: 'derevyannie',
    title: 'Деревянные',
    items: [
      {
        image: binario,
        key: 'Бинарио, Бинарио-Кросс',
        name: 'Бинарио, Бинарио-Кросс',
        src: 'binario-kross',
        component: (
          <AssortmentKovanie
            descriptionText={karniziDerevyannie['binario'].descriptionText}
            desctriptionList={karniziDerevyannie['binario'].descriptionList}
            images={karniziDerevyannie['binario'].images}
            images3={karniziDerevyannie['binario'].images3}
            images3Title={karniziDerevyannie['binario'].images3Title}
            headerImage={[
              headerBinario1,
              headerBinario2,
              headerBinario3,
              headerBinario4,
              headerBinario5,
              headerBinario6,
              headerBinario7,
              headerBinario8,
            ]}
            multicolor={true}
          />
        ),
      },
      {
        image: vintage,
        key: 'Винтаж',
        name: 'Винтаж',
        src: 'vintage',
        component: (
          <AssortmentKovanie
            descriptionText={karniziDerevyannie['vintage'].descriptionText}
            desctriptionList={karniziDerevyannie['vintage'].descriptionList}
            images={karniziDerevyannie['vintage'].images}
            images3={karniziDerevyannie['vintage'].images3}
            images3Title={karniziDerevyannie['vintage'].images3Title}
            headerImage={[
              headerVintage1,
              headerVintage2,
              headerVintage3,
              headerVintage4,
              headerVintage5,
              headerVintage6,
            ]}
            multicolor={true}
          />
        ),
      },
      {
        image: renessans,
        key: 'Ренессанс',
        name: 'Ренессанс',
        src: 'renessans',
        component: (
          <AssortmentKovanie
            descriptionText={karniziDerevyannie['renessans'].descriptionText}
            desctriptionList={karniziDerevyannie['renessans'].descriptionList}
            images={karniziDerevyannie['renessans'].images}
            images3={karniziDerevyannie['renessans'].images3}
            images3Title={karniziDerevyannie['renessans'].images3Title}
            headerImage={[
              headerRenessans1,
              headerRenessans2,
              headerRenessans3,
              headerRenessans4,
              headerRenessans5,
              headerRenessans6,
              headerRenessans7,
              headerRenessans8,
            ]}
            multicolor={true}
          />
        ),
      },
    ],
  },
  {
    url: 'exclusive',
    title: 'Эксклюзив',
    items: [
      {
        image: renome19,
        key: 'Renome Ø19 мм',
        name: 'Renome Ø19 мм',
        src: 'renome-19-mm',
        component: (
          <AssortmentKovanie
            descriptionText={karniziExclusive['renome19'].descriptionText}
            desctriptionList={karniziExclusive['renome19'].descriptionList}
            images={karniziExclusive['renome19'].images}
            imagesTitle={karniziExclusive['renome19'].imagesTitle}
            images3={karniziExclusive['renome19'].images3}
            images3Title={karniziExclusive['renome19'].images3Title}
            headerImage={[renome19]}
            multicolor={false}
          />
        ),
      },
      {
        image: selebrity33,
        key: 'Selebrity Ø33 мм',
        name: 'Selebrity Ø33 мм',
        src: 'selebrity-33-mm',
        component: (
          <AssortmentKovanie
            descriptionText={karniziExclusive['selebrity33'].descriptionText}
            desctriptionList={karniziExclusive['selebrity33'].descriptionList}
            images={karniziExclusive['selebrity33'].images}
            imagesTitle={karniziExclusive['selebrity33'].imagesTitle}
            images3={karniziExclusive['selebrity33'].images3}
            images3Title={karniziExclusive['selebrity33'].images3Title}
            headerImage={[selebrity33]}
            multicolor={false}
          />
        ),
      },
      {
        image: emily19,
        key: 'Emily Ø19 мм',
        name: 'Emily Ø19 мм',
        src: 'emily-19-mm',
        component: (
          <AssortmentKovanie
            descriptionText={karniziExclusive['emily19'].descriptionText}
            desctriptionList={karniziExclusive['emily19'].descriptionList}
            images={karniziExclusive['emily19'].images}
            imagesTitle={karniziExclusive['emily19'].imagesTitle}
            images3={karniziExclusive['emily19'].images3}
            images3Title={karniziExclusive['emily19'].images3Title}
            headerImage={[emily19]}
            multicolor={false}
          />
        ),
      },
      {
        image: kupel35,
        key: 'Kupel Ø35 мм',
        name: 'Kupel Ø35 мм',
        src: 'kupel-35-mm',
        component: (
          <AssortmentKovanie
            descriptionText={karniziExclusive['kupel35'].descriptionText}
            desctriptionList={karniziExclusive['kupel35'].descriptionList}
            images={karniziExclusive['kupel35'].images}
            imagesTitle={karniziExclusive['kupel35'].imagesTitle}
            images3={karniziExclusive['kupel35'].images3}
            images3Title={karniziExclusive['kupel35'].images3Title}
            headerImage={[kupel35]}
            multicolor={false}
          />
        ),
      },
    ],
  },
];

const podhvatiAssortment = {
  'Подхват 537509': {
    images: [
      podhvat537509img1,
      podhvat537509img2,
      podhvat537509img3,
      podhvat537509img4,
    ],
  },
  'Подхват 537510': {
    images: [
      podhvat537510img1,
      podhvat537510img2,
      podhvat537510img3,
      podhvat537510img4,
    ],
  },
  'Подхват 537511': {
    images: [
      podhvat537511img1,
      podhvat537511img2,
      podhvat537511img3,
      podhvat537511img4,
    ],
  },
  'Подхват 537506': {
    images: [
      podhvat537506img1,
      podhvat537506img2,
      podhvat537506img3,
      podhvat537506img4,
      podhvat537506img5,
      podhvat537506img6,
    ],
  },
  'Подхват 537196': {
    images: [
      podhvat537196img1,
      podhvat537196img2,
      podhvat537196img3,
      podhvat537196img4,
      podhvat537196img5,
    ],
  },
};

const kistiAssortment = {
  'Кисть 535800': {
    images: [
      kist535800img1,
      kist535800img2,
      kist535800img3,
      kist535800img4,
      kist535800img5,
      kist535800img6,
      kist535800img7,
      kist535800img8,
      kist535800img9,
      kist535800img10,
      kist535800img11,
      kist535800img12,
      kist535800img13,
      kist535800img14,
      kist535800img15,
      kist535800img16,
    ],
  },
  'Кисть 537411': {
    images: [
      kist537411img1,
      kist537411img2,
      kist537411img3,
      kist537411img4,
      kist537411img5,
      kist537411img6,
      kist537411img7,
    ],
  },
  'Кисть 537410': {
    images: [
      kist537410img1,
      kist537410img2,
      kist537410img3,
      kist537410img4,
      kist537410img5,
      kist537410img6,
    ],
  },
  'Кисть 536233': {
    images: [
      kist536233img1,
      kist536233img2,
      kist536233img3,
      kist536233img4,
      kist536233img5,
      kist536233img6,
      kist536233img7,
      kist536233img8,
      kist536233img9,
    ],
  },
  'Кисть 536191': {
    images: [
      kist536191img1,
      kist536191img2,
      kist536191img3,
      kist536191img4,
      kist536191img5,
      kist536191img6,
      kist536191img7,
      kist536191img8,
      kist536191img9,
    ],
  },
};

const magnetsAssortment = {
  'Магнит 537463': {
    images: [magnet463],
  },
  'Магнит 537642': {
    images: [magnet642],
  },
  'Магнит 537117': {
    images: [
      magnet537117img1,
      magnet537117img2,
      magnet537117img3,
      magnet537117img4,
      magnet537117img5,
      magnet537117img6,
    ],
  },
  'Магнит 537116': {
    images: [
      magnet537116img1,
      magnet537116img2,
      magnet537116img3,
      magnet537116img4,
      magnet537116img5,
    ],
  },
  'Магнит 537329': {
    images: [
      magnet537329img1,
      magnet537329img2,
      magnet537329img3,
      magnet537329img4,
      magnet537329img5,
    ],
  },
  'Магнит 537052': {
    images: [
      magnet537052img1,
      magnet537052img2,
      magnet537052img3,
      magnet537052img4,
      magnet537052img5,
    ],
  },
};

export const accessoriesAssortment: IAssortment[] = [
  {
    url: 'podhvati',
    title: 'Подхваты',
    items: [
      {
        name: 'Подхват 537509',
        key: 'Подхват 537509',
        src: 'podhvat-537509',
        image: podhvat509,
        component: (
          <AssortmentAccessories
            images={podhvatiAssortment['Подхват 537509'].images}
          />
        ),
      },
      {
        name: 'Подхват 537510',
        key: 'Подхват 537510',
        src: 'podhvat-537510',
        image: podhvat510,
        component: (
          <AssortmentAccessories
            images={podhvatiAssortment['Подхват 537510'].images}
          />
        ),
      },
      {
        name: 'Подхват 537511',
        key: 'Подхват 537511',
        src: 'podhvat-537511',
        image: podhvat511,
        component: (
          <AssortmentAccessories
            images={podhvatiAssortment['Подхват 537511'].images}
          />
        ),
      },
      {
        name: 'Подхват 537506',
        key: 'Подхват 537506',
        src: 'podhvat-537506',
        image: podhvat506,
        component: (
          <AssortmentAccessories
            images={podhvatiAssortment['Подхват 537506'].images}
          />
        ),
      },
      {
        name: 'Подхват 537196',
        key: 'Подхват 537196',
        src: 'podhvat-537196',
        image: podhvat196,
        component: (
          <AssortmentAccessories
            images={podhvatiAssortment['Подхват 537196'].images}
          />
        ),
      },
    ],
  },
  {
    url: 'kisti',
    title: 'Кисти',
    items: [
      {
        name: 'Кисть 535800',
        key: 'Кисть 535800',
        src: 'kist-535800',
        image: kist800,
        component: (
          <AssortmentAccessories
            images={kistiAssortment['Кисть 535800'].images}
          />
        ),
      },
      {
        name: 'Кисть 537411',
        key: 'Кисть 537411',
        src: 'kist-537411',
        image: kist411,
        component: (
          <AssortmentAccessories
            images={kistiAssortment['Кисть 537411'].images}
          />
        ),
      },
      {
        name: 'Кисть 537410',
        key: 'Кисть 537410',
        src: 'kist-537410',
        image: kist410,
        component: (
          <AssortmentAccessories
            images={kistiAssortment['Кисть 537410'].images}
          />
        ),
      },
      {
        name: 'Кисть 536233',
        key: 'Кисть 536233',
        src: 'kist-536233',
        image: kist233,
        component: (
          <AssortmentAccessories
            images={kistiAssortment['Кисть 536233'].images}
          />
        ),
      },
      {
        name: 'Кисть 536191',
        key: 'Кисть 536191',
        src: 'kist-536191',
        image: kist191,
        component: (
          <AssortmentAccessories
            images={kistiAssortment['Кисть 536191'].images}
          />
        ),
      },
    ],
  },
  {
    url: 'magnets',
    title: 'Магниты',
    items: [
      {
        name: 'Магнит 537463',
        key: 'Магнит 537463',
        src: 'magnet-537463',
        image: magnet463,
        component: (
          <AssortmentAccessories
            images={magnetsAssortment['Магнит 537463'].images}
          />
        ),
      },
      {
        name: 'Магнит 537642',
        key: 'Магнит 537642',
        src: 'magnet-537642',
        image: magnet642,
        component: (
          <AssortmentAccessories
            images={magnetsAssortment['Магнит 537642'].images}
          />
        ),
      },
      {
        name: 'Магнит 537117',
        key: 'Магнит 537117',
        src: 'magnet-537117',
        image: magnet117,
        component: (
          <AssortmentAccessories
            images={magnetsAssortment['Магнит 537117'].images}
          />
        ),
      },
      {
        name: 'Магнит 537116',
        key: 'Магнит 537116',
        src: 'magnet-537116',
        image: magnet116,
        component: (
          <AssortmentAccessories
            images={magnetsAssortment['Магнит 537116'].images}
          />
        ),
      },
      {
        name: 'Магнит 537329',
        key: 'Магнит 537329',
        src: 'magnet-537329',
        image: magnet329,
        component: (
          <AssortmentAccessories
            images={magnetsAssortment['Магнит 537329'].images}
          />
        ),
      },
      {
        name: 'Магнит 537052',
        key: 'Магнит 537052',
        src: 'magnet-537052',
        image: magnet052,
        component: (
          <AssortmentAccessories
            images={magnetsAssortment['Магнит 537052'].images}
          />
        ),
      },
    ],
  },
];
