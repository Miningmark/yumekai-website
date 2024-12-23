//Imports

//Components
import ImageCarousel from "@/components/elements/ImageCarousel";
import { StyledLink } from "@/components/styledComponents";

//Images
import yumekaiNightImage1 from "/public/assets/images/yumekai-night-1-2024/YumeKai-Night-1.jpg";
import yumekaiNightImage2 from "/public/assets/images/yumekai-night-1-2024/YumeKai-Night-2.jpg";
import yumekaiNightImage3 from "/public/assets/images/yumekai-night-1-2024/YumeKai-Night-3.jpg";
import yumekaiNightImage4 from "/public/assets/images/yumekai-night-1-2024/YumeKai-Night-4.jpg";
import yumekaiNightImage5 from "/public/assets/images/yumekai-night-1-2024/YumeKai-Night-5.jpg";
import yumekaiNightImage6 from "/public/assets/images/yumekai-night-1-2024/YumeKai-Night-6.jpg";
import yumekaiNightImage7 from "/public/assets/images/yumekai-night-1-2024/YumeKai-Night-7.jpg";
import yumekaiNightImage8 from "/public/assets/images/yumekai-night-1-2024/YumeKai-Night-8.jpg";
import yumekaiNightImage9 from "/public/assets/images/yumekai-night-1-2024/YumeKai-Night-9.jpg";
import yumekaiNightImage10 from "/public/assets/images/yumekai-night-1-2024/YumeKai-Night-10.jpg";
import yumekaiNightImage11 from "/public/assets/images/yumekai-night-1-2024/YumeKai-Night-11.jpg";
import yumekaiNightImage12 from "/public/assets/images/yumekai-night-1-2024/YumeKai-Night-12.jpg";
import yumekaiNightImage13 from "/public/assets/images/yumekai-night-1-2024/YumeKai-Night-13.jpg";
import yumekaiNightImage14 from "/public/assets/images/yumekai-night-1-2024/YumeKai-Night-14.jpg";

const yumeKaiNightImages = [
  { image: yumekaiNightImage1, alt: "YumeKai - Night Bild 1", link: "" },
  { image: yumekaiNightImage2, alt: "YumeKai - Night Bild 2", link: "" },
  { image: yumekaiNightImage3, alt: "YumeKai - Night Bild 3", link: "" },
  { image: yumekaiNightImage4, alt: "YumeKai - Night Bild 4", link: "" },
  { image: yumekaiNightImage5, alt: "YumeKai - Night Bild 5", link: "" },
  { image: yumekaiNightImage6, alt: "YumeKai - Night Bild 6", link: "" },
  { image: yumekaiNightImage7, alt: "YumeKai - Night Bild 7", link: "" },
  { image: yumekaiNightImage8, alt: "YumeKai - Night Bild 8", link: "" },
  { image: yumekaiNightImage9, alt: "YumeKai - Night Bild 9", link: "" },
  { image: yumekaiNightImage10, alt: "YumeKai - Night Bild 10", link: "" },
  { image: yumekaiNightImage11, alt: "YumeKai - Night Bild 11", link: "" },
  { image: yumekaiNightImage12, alt: "YumeKai - Night Bild 12", link: "" },
  { image: yumekaiNightImage13, alt: "YumeKai - Night Bild 13", link: "" },
  { image: yumekaiNightImage14, alt: "YumeKai - Night Bild 14", link: "" },
];

export default function YumeKaiNightInBildern() {
  return (
    <>
      <div>
        <h2>YumeKai - Night in Bildern</h2>
        <p>
          Hier sind ein paar Schnappschüsse von der YumeKai-Night am 17. Februar 2024! Die Bilder
          geben einen kleinen Einblick in die aufregende Atmosphäre und den Spaß, den wir zusammen
          hatten. Es war eine Nacht voller Lachen, guter Vibes und unvergesslicher Momente. Lehnt
          euch zurück und lasst euch von den Eindrücken mitreißen – diese Fotos fangen den Spirit
          der YumeKai – Night perfekt ein!
        </p>
        <p>
          Fotografen:{" "}
          <StyledLink href={"https://www.instagram.com/bokehbarden/"} target="_blank">
            bokehbarden
          </StyledLink>{" "}
          &{" "}
          <StyledLink href={"https://www.instagram.com/vanity_art_photography/"} target="_blank">
            vanity_art_photography
          </StyledLink>
        </p>
        <ImageCarousel visibleCount={3.2} duration={2.5} images={yumeKaiNightImages} />
      </div>
    </>
  );
}
