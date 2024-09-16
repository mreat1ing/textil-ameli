import { PayloadAction } from '@reduxjs/toolkit';

import { hostImages } from 'src/constants/hosting';

const balcony1 = `${hostImages}/ourWorksCards/balcony/1.jpeg`;
const balcony2 = `${hostImages}/ourWorksCards/balcony/2.jpeg`;
const balcony3 = `${hostImages}/ourWorksCards/balcony/3.jpeg`;
const bathroom1 = `${hostImages}/ourWorksCards/bathroom/1.jpeg`;
const bathroom2 = `${hostImages}/ourWorksCards/bathroom/2.jpeg`;
const accessories1 = `${hostImages}/ourWorksCards/accessories/1.jpeg`;
const accessories2 = `${hostImages}/ourWorksCards/accessories/2.jpeg`;
const accessories3 = `${hostImages}/ourWorksCards/accessories/3.jpeg`;
const accessories4 = `${hostImages}/ourWorksCards/accessories/4.jpeg`;
const accessories5 = `${hostImages}/ourWorksCards/accessories/5.jpeg`;
const accessories6 = `${hostImages}/ourWorksCards/accessories/6.jpeg`;
const accessories7 = `${hostImages}/ourWorksCards/accessories/7.jpeg`;
const accessories8 = `${hostImages}/ourWorksCards/accessories/8.jpeg`;
const accessories9 = `${hostImages}/ourWorksCards/accessories/9.jpeg`;
const accessories10 = `${hostImages}/ourWorksCards/accessories/10.jpeg`;
const accessories11 = `${hostImages}/ourWorksCards/accessories/11.jpeg`;
const accessories12 = `${hostImages}/ourWorksCards/accessories/12.jpeg`;
const accessories13 = `${hostImages}/ourWorksCards/accessories/13.jpeg`;
const accessories14 = `${hostImages}/ourWorksCards/accessories/14.jpeg`;
const accessories15 = `${hostImages}/ourWorksCards/accessories/15.jpeg`;
const accessories16 = `${hostImages}/ourWorksCards/accessories/16.jpeg`;
const arcWindows1 = `${hostImages}/ourWorksCards/arcWindows/1.jpeg`;
const arcWindows2 = `${hostImages}/ourWorksCards/arcWindows/2.jpeg`;
const arcWindows3 = `${hostImages}/ourWorksCards/arcWindows/3.jpeg`;
const arcWindows4 = `${hostImages}/ourWorksCards/arcWindows/4.jpeg`;
const arcWindows5 = `${hostImages}/ourWorksCards/arcWindows/5.jpeg`;
const arcWindows6 = `${hostImages}/ourWorksCards/arcWindows/6.jpeg`;
const arcWindows7 = `${hostImages}/ourWorksCards/arcWindows/7.jpeg`;
const arcWindows8 = `${hostImages}/ourWorksCards/arcWindows/8.jpeg`;
const arcWindows9 = `${hostImages}/ourWorksCards/arcWindows/9.jpeg`;
const arcWindows10 = `${hostImages}/ourWorksCards/arcWindows/10.jpeg`;
const arcWindows11 = `${hostImages}/ourWorksCards/arcWindows/11.jpeg`;
const arcWindows12 = `${hostImages}/ourWorksCards/arcWindows/12.jpeg`;
const arcWindows13 = `${hostImages}/ourWorksCards/arcWindows/13.jpeg`;
const alcoves1 = `${hostImages}/ourWorksCards/alcoves/1.jpeg`;
const alcoves2 = `${hostImages}/ourWorksCards/alcoves/2.jpeg`;
const alcoves3 = `${hostImages}/ourWorksCards/alcoves/3.jpeg`;
const alcoves4 = `${hostImages}/ourWorksCards/alcoves/4.jpeg`;
const alcoves5 = `${hostImages}/ourWorksCards/alcoves/5.jpeg`;
const alcoves6 = `${hostImages}/ourWorksCards/alcoves/6.jpeg`;
const alcoves7 = `${hostImages}/ourWorksCards/alcoves/7.jpeg`;
const alcoves8 = `${hostImages}/ourWorksCards/alcoves/8.jpeg`;
const alcoves9 = `${hostImages}/ourWorksCards/alcoves/9.jpeg`;
const childrenRoom1 = `${hostImages}/ourWorksCards/childrenRoom/1.jpeg`;
const childrenRoom2 = `${hostImages}/ourWorksCards/childrenRoom/2.jpeg`;
const childrenRoom3 = `${hostImages}/ourWorksCards/childrenRoom/3.jpeg`;
const childrenRoom4 = `${hostImages}/ourWorksCards/childrenRoom/4.jpeg`;
const childrenRoom5 = `${hostImages}/ourWorksCards/childrenRoom/5.jpeg`;
const childrenRoom6 = `${hostImages}/ourWorksCards/childrenRoom/6.jpeg`;
const childrenRoom7 = `${hostImages}/ourWorksCards/childrenRoom/7.jpeg`;
const childrenRoom8 = `${hostImages}/ourWorksCards/childrenRoom/8.jpeg`;
const childrenRoom9 = `${hostImages}/ourWorksCards/childrenRoom/9.jpeg`;
const childrenRoom10 = `${hostImages}/ourWorksCards/childrenRoom/10.jpeg`;
const childrenRoom11 = `${hostImages}/ourWorksCards/childrenRoom/11.jpeg`;
const childrenRoom12 = `${hostImages}/ourWorksCards/childrenRoom/12.jpeg`;
const childrenRoom13 = `${hostImages}/ourWorksCards/childrenRoom/13.jpeg`;
const childrenRoom14 = `${hostImages}/ourWorksCards/childrenRoom/14.jpeg`;
const childrenRoom15 = `${hostImages}/ourWorksCards/childrenRoom/15.jpeg`;
const childrenRoom16 = `${hostImages}/ourWorksCards/childrenRoom/16.jpeg`;
const childrenRoom17 = `${hostImages}/ourWorksCards/childrenRoom/17.jpeg`;
const childrenRoom18 = `${hostImages}/ourWorksCards/childrenRoom/18.jpeg`;
const childrenRoom19 = `${hostImages}/ourWorksCards/childrenRoom/19.jpeg`;
const childrenRoom20 = `${hostImages}/ourWorksCards/childrenRoom/20.jpeg`;
const childrenRoom21 = `${hostImages}/ourWorksCards/childrenRoom/21.jpeg`;
const zoning1 = `${hostImages}/ourWorksCards/zoning/1.jpeg`;
const zoning2 = `${hostImages}/ourWorksCards/zoning/2.jpeg`;
const zoning3 = `${hostImages}/ourWorksCards/zoning/3.jpeg`;
const zoning4 = `${hostImages}/ourWorksCards/zoning/4.jpeg`;
const zoning5 = `${hostImages}/ourWorksCards/zoning/5.jpeg`;
const covers1 = `${hostImages}/ourWorksCards/covers/1.jpeg`;
const covers2 = `${hostImages}/ourWorksCards/covers/2.jpeg`;
const covers3 = `${hostImages}/ourWorksCards/covers/3.jpeg`;
const covers4 = `${hostImages}/ourWorksCards/covers/4.jpeg`;
const covers5 = `${hostImages}/ourWorksCards/covers/5.jpeg`;
const covers6 = `${hostImages}/ourWorksCards/covers/6.jpeg`;
const covers7 = `${hostImages}/ourWorksCards/covers/7.jpeg`;
const covers8 = `${hostImages}/ourWorksCards/covers/8.jpeg`;
const covers9 = `${hostImages}/ourWorksCards/covers/9.jpeg`;
const covers10 = `${hostImages}/ourWorksCards/covers/10.jpeg`;
const bedspreads1 = `${hostImages}/ourWorksCards/bedspreads/1.jpeg`;
const bedspreads2 = `${hostImages}/ourWorksCards/bedspreads/2.jpeg`;
const bedspreads3 = `${hostImages}/ourWorksCards/bedspreads/3.jpeg`;
const bedspreads4 = `${hostImages}/ourWorksCards/bedspreads/4.jpeg`;
const bedspreads5 = `${hostImages}/ourWorksCards/bedspreads/5.jpeg`;
const bedspreads6 = `${hostImages}/ourWorksCards/bedspreads/6.jpeg`;
const bedspreads7 = `${hostImages}/ourWorksCards/bedspreads/7.jpeg`;
const bedspreads8 = `${hostImages}/ourWorksCards/bedspreads/8.jpeg`;
const bedspreads9 = `${hostImages}/ourWorksCards/bedspreads/9.jpeg`;
const bedspreads10 = `${hostImages}/ourWorksCards/bedspreads/10.jpeg`;
const bedspreads11 = `${hostImages}/ourWorksCards/bedspreads/11.jpeg`;
const bedspreads12 = `${hostImages}/ourWorksCards/bedspreads/12.jpeg`;
const bedspreads13 = `${hostImages}/ourWorksCards/bedspreads/13.jpeg`;
const bedspreads14 = `${hostImages}/ourWorksCards/bedspreads/14.jpeg`;
const bedspreads15 = `${hostImages}/ourWorksCards/bedspreads/15.jpeg`;
const bedspreads16 = `${hostImages}/ourWorksCards/bedspreads/16.jpeg`;
const bedspreads17 = `${hostImages}/ourWorksCards/bedspreads/17.jpeg`;
const bedspreads18 = `${hostImages}/ourWorksCards/bedspreads/18.jpeg`;
const bedspreads19 = `${hostImages}/ourWorksCards/bedspreads/19.jpeg`;
const bedspreads20 = `${hostImages}/ourWorksCards/bedspreads/20.jpeg`;
const bedspreads21 = `${hostImages}/ourWorksCards/bedspreads/21.jpeg`;
const bedspreads22 = `${hostImages}/ourWorksCards/bedspreads/22.jpeg`;
const bedspreads23 = `${hostImages}/ourWorksCards/bedspreads/23.jpeg`;
const bedspreads24 = `${hostImages}/ourWorksCards/bedspreads/24.jpeg`;
const bedspreads25 = `${hostImages}/ourWorksCards/bedspreads/25.jpeg`;
const bedspreads26 = `${hostImages}/ourWorksCards/bedspreads/26.jpeg`;
const bedspreads27 = `${hostImages}/ourWorksCards/bedspreads/27.jpeg`;
const rimCurtains1 = `${hostImages}/ourWorksCards/rimskie/1.jpeg`;
const rimCurtains2 = `${hostImages}/ourWorksCards/rimskie/2.jpeg`;
const rimCurtains3 = `${hostImages}/ourWorksCards/rimskie/3.jpeg`;
const rimCurtains4 = `${hostImages}/ourWorksCards/rimskie/4.jpeg`;
const rimCurtains5 = `${hostImages}/ourWorksCards/rimskie/5.jpeg`;
const rimCurtains6 = `${hostImages}/ourWorksCards/rimskie/6.jpeg`;
const rimCurtains7 = `${hostImages}/ourWorksCards/rimskie/7.jpeg`;
const rimCurtains8 = `${hostImages}/ourWorksCards/rimskie/8.jpeg`;
const rimCurtains9 = `${hostImages}/ourWorksCards/rimskie/9.jpeg`;
const rimCurtains10 = `${hostImages}/ourWorksCards/rimskie/10.jpeg`;
const rimCurtains11 = `${hostImages}/ourWorksCards/rimskie/11.jpeg`;
const rimCurtains12 = `${hostImages}/ourWorksCards/rimskie/12.jpeg`;
const plisCurtains1 = `${hostImages}/ourWorksCards/plisse/1.jpeg`;
const plisCurtains2 = `${hostImages}/ourWorksCards/plisse/2.jpeg`;
const plisCurtains3 = `${hostImages}/ourWorksCards/plisse/3.jpeg`;
const plisCurtains4 = `${hostImages}/ourWorksCards/plisse/4.jpeg`;
const plisCurtains5 = `${hostImages}/ourWorksCards/plisse/5.jpeg`;
const plisCurtains6 = `${hostImages}/ourWorksCards/plisse/6.jpeg`;
const plisCurtains7 = `${hostImages}/ourWorksCards/plisse/7.jpeg`;
const plisCurtains8 = `${hostImages}/ourWorksCards/plisse/8.jpeg`;
const plisCurtains9 = `${hostImages}/ourWorksCards/plisse/9.jpeg`;
const plisCurtains10 = `${hostImages}/ourWorksCards/plisse/10.jpeg`;
const plisCurtains11 = `${hostImages}/ourWorksCards/plisse/11.jpeg`;
const plisCurtains12 = `${hostImages}/ourWorksCards/plisse/12.jpeg`;
const plisCurtains13 = `${hostImages}/ourWorksCards/plisse/13.jpeg`;
const plisCurtains14 = `${hostImages}/ourWorksCards/plisse/14.jpeg`;
const plisCurtains15 = `${hostImages}/ourWorksCards/plisse/15.jpeg`;
const plisCurtains16 = `${hostImages}/ourWorksCards/plisse/16.jpeg`;
const plisCurtains17 = `${hostImages}/ourWorksCards/plisse/17.jpeg`;
const curtains1 = `${hostImages}/ourWorksCards/curtains/1.jpeg`;
const curtains2 = `${hostImages}/ourWorksCards/curtains/2.jpeg`;
const curtains3 = `${hostImages}/ourWorksCards/curtains/3.jpeg`;
const curtains4 = `${hostImages}/ourWorksCards/curtains/4.jpeg`;
const curtains5 = `${hostImages}/ourWorksCards/curtains/5.jpeg`;
const curtains6 = `${hostImages}/ourWorksCards/curtains/6.jpeg`;
const curtains7 = `${hostImages}/ourWorksCards/curtains/7.jpeg`;
const curtains8 = `${hostImages}/ourWorksCards/curtains/8.jpeg`;
const curtains9 = `${hostImages}/ourWorksCards/curtains/9.jpeg`;
const curtains10 = `${hostImages}/ourWorksCards/curtains/10.jpeg`;
const curtains11 = `${hostImages}/ourWorksCards/curtains/11.jpeg`;
const curtains12 = `${hostImages}/ourWorksCards/curtains/12.jpeg`;
const curtains13 = `${hostImages}/ourWorksCards/curtains/13.jpeg`;
const curtains14 = `${hostImages}/ourWorksCards/curtains/14.jpeg`;
const curtains15 = `${hostImages}/ourWorksCards/curtains/15.jpeg`;
const curtains16 = `${hostImages}/ourWorksCards/curtains/16.jpeg`;
const curtains17 = `${hostImages}/ourWorksCards/curtains/17.jpeg`;
const curtains18 = `${hostImages}/ourWorksCards/curtains/18.jpeg`;
const curtains19 = `${hostImages}/ourWorksCards/curtains/19.jpeg`;
const curtains20 = `${hostImages}/ourWorksCards/curtains/20.jpeg`;
const curtains21 = `${hostImages}/ourWorksCards/curtains/21.jpeg`;
const curtains22 = `${hostImages}/ourWorksCards/curtains/22.jpeg`;
const curtains23 = `${hostImages}/ourWorksCards/curtains/23.jpeg`;
const curtains24 = `${hostImages}/ourWorksCards/curtains/24.jpeg`;
const curtains25 = `${hostImages}/ourWorksCards/curtains/25.jpeg`;
const curtains26 = `${hostImages}/ourWorksCards/curtains/26.jpeg`;
const curtains27 = `${hostImages}/ourWorksCards/curtains/27.jpeg`;
const curtains28 = `${hostImages}/ourWorksCards/curtains/28.jpeg`;
const curtains29 = `${hostImages}/ourWorksCards/curtains/29.jpeg`;
const curtains30 = `${hostImages}/ourWorksCards/curtains/30.jpeg`;
const curtains31 = `${hostImages}/ourWorksCards/curtains/31.jpeg`;
const curtains32 = `${hostImages}/ourWorksCards/curtains/32.jpeg`;
const curtains33 = `${hostImages}/ourWorksCards/curtains/33.jpeg`;
const curtains34 = `${hostImages}/ourWorksCards/curtains/34.jpeg`;
const curtains35 = `${hostImages}/ourWorksCards/curtains/35.jpeg`;
const curtains36 = `${hostImages}/ourWorksCards/curtains/36.jpeg`;
const curtains37 = `${hostImages}/ourWorksCards/curtains/37.jpeg`;
const curtains38 = `${hostImages}/ourWorksCards/curtains/38.jpeg`;
const curtains39 = `${hostImages}/ourWorksCards/curtains/39.jpeg`;
const curtains40 = `${hostImages}/ourWorksCards/curtains/40.jpeg`;
const curtains41 = `${hostImages}/ourWorksCards/curtains/41.jpeg`;
const curtains42 = `${hostImages}/ourWorksCards/curtains/42.jpeg`;
const curtains43 = `${hostImages}/ourWorksCards/curtains/43.jpeg`;
const curtains44 = `${hostImages}/ourWorksCards/curtains/44.jpeg`;
const curtains45 = `${hostImages}/ourWorksCards/curtains/45.jpeg`;
const curtains46 = `${hostImages}/ourWorksCards/curtains/46.jpeg`;
const curtains47 = `${hostImages}/ourWorksCards/curtains/47.jpeg`;
const curtains48 = `${hostImages}/ourWorksCards/curtains/48.jpeg`;
const curtains49 = `${hostImages}/ourWorksCards/curtains/49.jpeg`;
const curtains50 = `${hostImages}/ourWorksCards/curtains/50.jpeg`;
const curtains51 = `${hostImages}/ourWorksCards/curtains/51.jpeg`;
const curtains52 = `${hostImages}/ourWorksCards/curtains/52.jpeg`;
const curtains53 = `${hostImages}/ourWorksCards/curtains/53.jpeg`;
const curtains54 = `${hostImages}/ourWorksCards/curtains/54.jpeg`;
const curtains55 = `${hostImages}/ourWorksCards/curtains/55.jpeg`;
const curtains56 = `${hostImages}/ourWorksCards/curtains/56.jpeg`;
const curtains57 = `${hostImages}/ourWorksCards/curtains/57.jpeg`;
const curtains58 = `${hostImages}/ourWorksCards/curtains/58.jpeg`;
const curtains59 = `${hostImages}/ourWorksCards/curtains/59.jpeg`;
const curtains60 = `${hostImages}/ourWorksCards/curtains/60.jpeg`;
const curtains61 = `${hostImages}/ourWorksCards/curtains/61.jpeg`;
const curtains62 = `${hostImages}/ourWorksCards/curtains/62.jpeg`;
const curtains63 = `${hostImages}/ourWorksCards/curtains/63.jpeg`;
const curtains64 = `${hostImages}/ourWorksCards/curtains/64.jpeg`;
const curtains65 = `${hostImages}/ourWorksCards/curtains/65.jpeg`;
const curtains66 = `${hostImages}/ourWorksCards/curtains/66.jpeg`;
const curtains67 = `${hostImages}/ourWorksCards/curtains/67.jpeg`;
// import curtains68 from `${hostImages}/ourWorksCards/curtains/68.jpeg`;
// import curtains69 from `${hostImages}/ourWorksCards/curtains/69.MOV';

export interface IImagesStore {
  [key: string]: { images: string[] };
}

const imagesStore: IImagesStore = {
  balcony: {
    images: [balcony1, balcony2, balcony3],
  },
  bathroom: {
    images: [bathroom1, bathroom2],
  },
  accessories: {
    images: [
      accessories1,
      accessories2,
      accessories3,
      accessories4,
      accessories5,
      accessories6,
      accessories7,
      accessories8,
      accessories9,
      accessories10,
      accessories11,
      accessories12,
      accessories13,
      accessories14,
      accessories15,
      accessories16,
    ],
  },
  arcWindows: {
    images: [
      arcWindows1,
      arcWindows2,
      arcWindows3,
      arcWindows4,
      arcWindows5,
      arcWindows6,
      arcWindows7,
      arcWindows8,
      arcWindows9,
      arcWindows10,
      arcWindows11,
      arcWindows12,
      arcWindows13,
    ],
  },
  alcoves: {
    images: [
      alcoves1,
      alcoves2,
      alcoves3,
      alcoves4,
      alcoves5,
      alcoves6,
      alcoves7,
      alcoves8,
      alcoves9,
    ],
  },
  childrenRoom: {
    images: [
      childrenRoom1,
      childrenRoom2,
      childrenRoom3,
      childrenRoom4,
      childrenRoom5,
      childrenRoom6,
      childrenRoom7,
      childrenRoom8,
      childrenRoom9,
      childrenRoom10,
      childrenRoom11,
      childrenRoom12,
      childrenRoom13,
      childrenRoom14,
      childrenRoom15,
      childrenRoom16,
      childrenRoom17,
      childrenRoom18,
      childrenRoom19,
      childrenRoom20,
      childrenRoom21,
    ],
  },
  zoning: {
    images: [zoning1, zoning2, zoning3, zoning4, zoning5],
  },
  covers: {
    images: [
      covers1,
      covers2,
      covers3,
      covers4,
      covers5,
      covers6,
      covers7,
      covers8,
      covers9,
      covers10,
    ],
  },
  bedspreads: {
    images: [
      bedspreads1,
      bedspreads2,
      bedspreads3,
      bedspreads4,
      bedspreads5,
      bedspreads6,
      bedspreads7,
      bedspreads8,
      bedspreads9,
      bedspreads10,
      bedspreads11,
      bedspreads12,
      bedspreads13,
      bedspreads14,
      bedspreads15,
      bedspreads16,
      bedspreads17,
      bedspreads18,
      bedspreads19,
      bedspreads20,
      bedspreads21,
      bedspreads22,
      bedspreads23,
      bedspreads24,
      bedspreads25,
      bedspreads26,
      bedspreads27,
    ],
  },
  rimCurtains: {
    images: [
      rimCurtains1,
      rimCurtains2,
      rimCurtains3,
      rimCurtains4,
      rimCurtains5,
      rimCurtains6,
      rimCurtains7,
      rimCurtains8,
      rimCurtains9,
      rimCurtains10,
      rimCurtains11,
      rimCurtains12,
    ],
  },
  plisCurtains: {
    images: [
      plisCurtains1,
      plisCurtains2,
      plisCurtains3,
      plisCurtains4,
      plisCurtains5,
      plisCurtains6,
      plisCurtains7,
      plisCurtains8,
      plisCurtains9,
      plisCurtains10,
      plisCurtains11,
      plisCurtains12,
      plisCurtains13,
      plisCurtains14,
      plisCurtains15,
      plisCurtains16,
      plisCurtains17,
    ],
  },
  curtains: {
    images: [
      curtains1,
      curtains2,
      curtains3,
      curtains4,
      curtains5,
      curtains6,
      curtains7,
      curtains8,
      curtains9,
      curtains10,
      curtains11,
      curtains12,
      curtains13,
      curtains14,
      curtains15,
      curtains16,
      curtains17,
      curtains18,
      curtains19,
      curtains20,
      curtains21,
      curtains22,
      curtains23,
      curtains24,
      curtains25,
      curtains26,
      curtains27,
      curtains28,
      curtains29,
      curtains30,
      curtains31,
      curtains32,
      curtains33,
      curtains34,
      curtains35,
      curtains36,
      curtains37,
      curtains38,
      curtains39,
      curtains40,
      curtains41,
      curtains42,
      curtains43,
      curtains44,
      curtains45,
      curtains46,
      curtains47,
      curtains48,
      curtains49,
      curtains50,
      curtains51,
      curtains52,
      curtains53,
      curtains54,
      curtains55,
      curtains56,
      curtains57,
      curtains58,
      curtains59,
      curtains60,
      curtains61,
      curtains62,
      curtains63,
      curtains64,
      curtains65,
      curtains66,
      curtains67,
      // curtains68,
    ],
  },
};

export const imagesReducer = (state = imagesStore, action: PayloadAction) => {
  switch (action.type) {
    default:
      return state;
  }
};
