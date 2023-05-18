import { useImage } from "../hooks";
import { StarAnimate, Sun, WomenPics, Aricraft, Buildings, Moons, Interiors, SquareBuildings } from '../../animation/index';


const StarArray = () => {
  const [S1, S1S] = useImage(StarAnimate[1]);
  const [S2, S2S] = useImage(StarAnimate[2]);
  const [S3, S3S] = useImage(StarAnimate[3]);
  const [S4, S4S] = useImage(StarAnimate[4]);
  const [S5, S5S] = useImage(StarAnimate[5]);
  const [S6, S6S] = useImage(StarAnimate[6]);
  const [S7, S7S] = useImage(StarAnimate[7]);

  const newImages = new Array(
    [S1, S1S],
    [S2, S2S],
    [S3, S3S],
    [S4, S4S],
    [S5, S5S],
    [S6, S6S],
    [S7, S7S],
  )
  return newImages;

}

const SunArray = () => {
  const [S1, S1S] = useImage(Sun[1]);
  const [S2, S2S] = useImage(Sun[2]);
  const [S3, S3S] = useImage(Sun[3]);
  const [S4, S4S] = useImage(Sun[4]);
  const [S5, S5S] = useImage(Sun[5]);
  const [S6, S6S] = useImage(Sun[6]);
  const [S7, S7S] = useImage(Sun[7]);
  const [S8, S8S] = useImage(Sun[8]);
  const [S9, S9S] = useImage(Sun[9]);
  const [S10, S10S] = useImage(Sun[10]);

  const [S11, S11S] = useImage(Sun[10]);
  const [S12, S12S] = useImage(Sun[10]);
  const [S13, S13S] = useImage(Sun[10]);
  const [S14, S14S] = useImage(Sun[10]);
  const [S15, S15S] = useImage(Sun[10]);
  const [S16, S16S] = useImage(Sun[10]);
  const [S17, S17S] = useImage(Sun[10]);
  const [S18, S18S] = useImage(Sun[10]);
  const [S19, S19S] = useImage(Sun[10]);
  const [S20, S20S] = useImage(Sun[10]);

  const [S21, S21S] = useImage(Sun[10]);
  const [S22, S22S] = useImage(Sun[10]);
  const [S23, S23S] = useImage(Sun[10]);
  const [S24, S24S] = useImage(Sun[10]);
  const [S25, S25S] = useImage(Sun[10]);


  const newImages = new Array(
    [S1, S1S],
    [S2, S2S],
    [S3, S3S],
    [S4, S4S],
    [S5, S5S],
    [S6, S6S],
    [S7, S7S],
    [S8, S8S],
    [S9, S9S],
    [S10, S10S],

    [S11, S11S],
    [S12, S12S],
    [S13, S13S],
    [S14, S14S],
    [S15, S15S],
    [S16, S16S],
    [S17, S17S],
    [S18, S18S],
    [S19, S19S],
    [S20, S20S],

    [S21, S21S],
    [S22, S22S],
    [S23, S23S],
    [S24, S24S],
    [S25, S25S],
  );
  return newImages;
};

const WomenPicsArray = () => {
  const [S1, S1S] = useImage(WomenPics[1]);
  const [S2, S2S] = useImage(WomenPics[2]);
  const [S3, S3S] = useImage(WomenPics[3]);
  const [S4, S4S] = useImage(WomenPics[4]);
  const [S5, S5S] = useImage(WomenPics[5]);
  const [S6, S6S] = useImage(WomenPics[5]);
  const [S7, S7S] = useImage(WomenPics[5]);
  const [S8, S8S] = useImage(WomenPics[5]);
  const [S9, S9S] = useImage(WomenPics[5]);
  const [S10, S10S] = useImage(WomenPics[5]);

  const newImages = new Array(
    [S1, S1S],
    [S2, S2S],
    [S3, S3S],
    [S4, S4S],
    [S5, S5S],
    [S6, S6S],
    [S7, S7S],
    [S8, S8S],
    [S9, S9S],
    [S10, S10S],
  );

  return newImages;
};

const AricraftArray = () => {
  const [S1, S1S] = useImage(Aricraft[1]);
  const [S2, S2S] = useImage(Aricraft[2]);
  const [S3, S3S] = useImage(Aricraft[3]);
  const [S4, S4S] = useImage(Aricraft[4]);
  const [S5, S5S] = useImage(Aricraft[5]);
  const [S6, S6S] = useImage(Aricraft[6]);
  const [S7, S7S] = useImage(Aricraft[6]);
  const [S8, S8S] = useImage(Aricraft[6]);
  const [S9, S9S] = useImage(Aricraft[6]);
  const [S10, S10S] = useImage(Aricraft[16]);


  const newImages = new Array(
    [S1, S1S],
    [S2, S2S],
    [S3, S3S],
    [S4, S4S],
    [S5, S5S],
    [S6, S6S],
    [S7, S7S],
    [S8, S8S],
    [S9, S9S],
    [S10, S10S],
  );

  return newImages;
};

const BuildingsArray = () => {
  const [S1, S1S] = useImage(Buildings[1]);
  const [S2, S2S] = useImage(Buildings[2]);
  const [S3, S3S] = useImage(Buildings[3]);
  const [S4, S4S] = useImage(Buildings[4]);
  const [S5, S5S] = useImage(Buildings[5]);
  const [S6, S6S] = useImage(Buildings[6]);
  const [S7, S7S] = useImage(Buildings[7]);
  const [S8, S8S] = useImage(Buildings[8]);
  const [S9, S9S] = useImage(Buildings[9]);
  const [S10, S10S] = useImage(Buildings[10]);
  const [S11, S11S] = useImage(Buildings[11]);

  const newImg = new Array(
    [S1, S1S], [S2, S2S], [S3, S3S], [S4, S4S], [S5, S5S], [S6, S6S], [S7, S7S],
    [S8, S8S], [S9, S9S], [S10, S10S], [S11, S11S]
  );

  return newImg;
}


const MoonsArray = () => {
  const [S1, S1S] = useImage(Moons[1]);
  const [S2, S2S] = useImage(Moons[2]);
  const [S3, S3S] = useImage(Moons[3]);
  const [S4, S4S] = useImage(Moons[4]);
  const [S5, S5S] = useImage(Moons[5]);
  const [S6, S6S] = useImage(Moons[5]);
  const [S7, S7S] = useImage(Moons[5]);
  const [S8, S8S] = useImage(Moons[5]);
  const [S9, S9S] = useImage(Moons[5]);
  const [S10, S10S] = useImage(Moons[5]);

  const newImg = new Array(
    [S1, S1S], [S2, S2S], [S3, S3S], [S4, S4S], [S5, S5S], [S6, S6S],
    [S7, S7S], [S8, S8S], [S9, S9S], [S10, S10S]
  );

  return newImg;
}


const InteriorArray = () => {
  const [S1, S1S] = useImage(Interiors[1]);
  const [S2, S2S] = useImage(Interiors[2]);
  const [S3, S3S] = useImage(Interiors[3]);
  const [S4, S4S] = useImage(Interiors[4]);
  const [S5, S5S] = useImage(Interiors[5]);
  const [S6, S6S] = useImage(Interiors[6]);
  const [S7, S7S] = useImage(Interiors[7]);
  const [S8, S8S] = useImage(Interiors[8]);
  const [S9, S9S] = useImage(Interiors[9]);
  const [S10, S10S] = useImage(Interiors[10]);

  const newImg = new Array(
    [S1, S1S], [S2, S2S], [S3, S3S], [S4, S4S], [S5, S5S], [S6, S6S], [S7, S7S],
    [S8, S8S], [S9, S9S], [S10, S10S]
  );

  return newImg;
}
const SquareBuildingArray = () => {
  const [S1, S1S] = useImage(SquareBuildings[1]);
  const [S2, S2S] = useImage(SquareBuildings[2]);
  const [S3, S3S] = useImage(SquareBuildings[3]);
  const [S4, S4S] = useImage(SquareBuildings[4]);
  const [S5, S5S] = useImage(SquareBuildings[5]);
  const [S6, S6S] = useImage(SquareBuildings[5]);
  const [S7, S7S] = useImage(SquareBuildings[5]);

  const newImg = new Array(
    [S1, S1S], [S2, S2S], [S3, S3S], [S4, S4S], [S5, S5S], [S6, S6S], [S7, S7S]
  );

  return newImg;
}

export { StarArray, SunArray, WomenPicsArray, AricraftArray, BuildingsArray, MoonsArray, InteriorArray, SquareBuildingArray };

