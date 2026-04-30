import styled from "styled-components";

//Components
import ReturnButton from "@/components/menu/ReturnButton";
import ContentCard from "@/components/elements/ContentCard";

//Images
import HiruShowact from "/public/assets/hirus/Hiru_Showact.png";
import HiruCosplay from "/public/assets/hirus/Hiru_Cosplay.png";
import HiruWorkshop from "/public/assets/hirus/Hiru_Workshop.png";
import StellariaBild from "/public/assets/images/yumekai2026/Showact Stellaria - Stellaria Logo mit Aufschrift.png";
import YuriHiranoBild from "/public/assets/images/yumekai2026/Yuri Hirano.png";
import MionBild from "/public/assets/images/yumekai2026/MION.png";
import NiloBild from "/public/assets/images/yumekai2026/Nilo.jpg";
import LyriaBild from "/public/assets/images/yumekai2026/Lyria.png";
import CelloticDuetsBild from "/public/assets/images/yumekai2026/Cellotic Duets.png";
import Lucky13Bild from "/public/assets/images/yumekai2026/Lucky13.jpg";
import NicolleGonsiorBild from "/public/assets/images/yumekai2026/Nicolle Gonsior.jpeg";
import MarieJeanneWideraBild from "/public/assets/images/yumekai2026/Marie-Jeanne Widera.jpeg";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 30px;
`;

export default function Ehrengaeste() {
  return (
    <>
      <ReturnButton link="/programm2026" />

      <h1 style={{ textAlign: "center" }}>Showacts</h1>
      <ContentContainer>
        <ContentCard
          title="Yuri Hirano"
          subtitle="Samstag 13:15 Uhr &amp; Sonntag 15:30 Uhr"
          imageSrc={YuriHiranoBild}
          altText="Yuri Hirano"
          text={
            <p>
              Yuri Hirano, von ihren Fans liebevoll &bdquo;Yurimaru&rdquo; genannt, ist ein
              japanisches Idol aus Asahi, Chiba, bekannt für ihren vielseitigen Auftrittsstil – von
              klassischem japanischem Idol-Gesang und -Tanz bis hin zu Hip-Hop-Rap. Als Veteranin
              der japanischen Idol-Szene war sie Mitglied vieler verschiedener Idol-Gruppen und
              verfolgt gleichzeitig eine sehr erfolgreiche Solokarriere. Sie trat beim SUMMER SONIC
              2025 und der Anime Expo in Los Angeles auf. Ihr neuestes Album &bdquo;MagicBox&rdquo;
              mit 14 eigenen Titeln erschien im Dezember 2025. Dies ist ihr allererster Auftritt in
              Deutschland – nicht verpassen!
            </p>
          }
          instaLink="https://www.instagram.com/yuri_hirano_official/"
          instaLinkText="Yuri Hirano"
          maxWidth={550}
        />

        <ContentCard
          title="MION"
          subtitle="Samstag 17:15 Uhr &amp; Sonntag 14:30 Uhr"
          imageSrc={MionBild}
          altText="MION"
          text={
            <p>
              MION ist eine preisgekrönte japanische Singer-Songwriterin aus Nagoya, Aichi, die mit
              ihrer Hit-Single &bdquo;Summer Magic&rdquo; Platz 1 der Oricon Singles Charts
              erreicht hat. Als sie 16 Jahre alt war, gewann sie den Outstanding Performance Award
              beim Music Revolution Wettbewerb von YAMAHA. In Japan ist MION seit über zehn Jahren
              aktiv, hat 11 Solosingles veröffentlicht und vier nationale Tourneen absolviert. Im
              Jahr 2022 erhielt sie ein Global Talent Visa vom britischen Innenministerium. Bei
              ihrem Auftritt auf der YumeKai wird sie eine Mischung aus eigener Musik (J-Pop,
              J-Rock &amp; Ballade) und Covers bekannter Anime-Songs vortragen.
            </p>
          }
          instaLink="https://www.instagram.com/mion_official/"
          instaLinkText="MION"
          maxWidth={550}
        />

        <ContentCard
          title="NILO"
          subtitle="Samstag 15:00 Uhr"
          imageSrc={NiloBild}
          altText="NILO"
          text={
            <p>
              NILO ist eine in Japan geborene Sängerin, die in Japan als Bossa-Nova-Künstlerin
              debütierte. Seit sie in Deutschland lebt, hat sie ihre Liebe zu japanischem City Pop
              und Anime-Songs entdeckt. Heute schreibt und veröffentlicht sie eigene City-Pop-Songs
              und tritt auf Japan-Festivals und Anime-Conventions in ganz Europa auf – in
              Deutschland, Frankreich, Polen und Spanien. Main-Stage-Act beim Japan-Tag Düsseldorf
              2024 &amp; 2025 und die erste japanische Sängerin beim Dreamlight Anime Concert 2025.
            </p>
          }
          instaLink="https://www.instagram.com/nilo_music_official/"
          instaLinkText="NILO"
          maxWidth={550}
        />

        <ContentCard
          title="Stellaria: Palette of Dreams"
          subtitle="Samstag 16:00 Uhr"
          imageSrc={StellariaBild}
          altText="Stellaria: Palette of Dreams"
          text={
            <p>
              Mit ihrem neuen Konzept &bdquo;Stellaria: Palette of Dreams&rdquo; erschafft Stellaria
              einen zauberhaften Kosmos, in dem Magical-Girl-Ästhetik mit Idol-Performances
              verschmilzt. Selbstentworfene Idolsona-Kostüme, detailverliebte Visuals und ein
              präzises Zusammenspiel aus Licht und Bewegung formen eine Stage, die begeistert,
              berührt und zum Träumen einlädt. Von &bdquo;Clear&rdquo; aus Card Captor Sakura:
              Clear Card bis &bdquo;Umapyoi Legend&rdquo; aus Umamusume – bringt eure Lightsticks
              mit!
            </p>
          }
          instaLink="https://www.instagram.com/stellaria.idols/"
          instaLinkText="Stellaria"
          maxWidth={550}
        />

        <ContentCard
          title="Lyria"
          subtitle="Sonntag 13:10 Uhr"
          imageSrc={LyriaBild}
          altText="Lyria"
          text={
            <p>
              Lyria ist eine Idol Vtuberin, die virtuell, aber live auf der Bühne mit ihrem Gesang
              das Publikum verzaubert. In ihrer Setlist hat sie eine bunte Mischung aus beliebten
              Anime und Videogame Songs, die sowohl energiegeladen als auch beruhigend sein können!
              Lasst euch mit &bdquo;Ao no Sumika&rdquo; aus dem Anime &bdquo;Jujutsu Kaisen&rdquo;
              und &bdquo;Memento&rdquo; aus dem Anime &bdquo;Re:Zero&rdquo; in die bunte Welt der
              Anime Lieder entführen!
            </p>
          }
          instaLink="https://www.instagram.com/lyriavt/"
          instaLinkText="Lyria"
          maxWidth={550}
        />

        <ContentCard
          title="Cellotic Duets"
          subtitle="Sonntag 11:00 Uhr &amp; Cosplayball"
          imageSrc={CelloticDuetsBild}
          altText="Cellotic Duets"
          text={
            <p>
              Cellotic Duets präsentiert instrumentale Soundtrack-Musik aus Filmen, Serien und
              Games verschiedenster Genres. Mit Cello, Piano und Percussion interpretieren die
              Musiker eine ausgewählte Sammlung melodischer Filmmusik-Stücke – von
              &bdquo;Game of Thrones&rdquo; über Studio Ghibli bis hin zu Hans-Zimmer-Kompositionen
              wie dem Soundtrack zu &bdquo;Interstellar&rdquo;. Von &bdquo;Der Herr der
              Ringe&rdquo; bis &bdquo;Das letzte Einhorn&rdquo;, von &bdquo;Disney&rdquo; bis
              &bdquo;Star Wars&rdquo;.
            </p>
          }
          webLink="https://linktr.ee/cellotic"
          webLinkText="Cellotic Soundtrack Ensemble"
          maxWidth={550}
        />

        <ContentCard
          title="Lucky 13"
          subtitle="Samstag 11:10 Uhr"
          imageSrc={Lucky13Bild}
          altText="Lucky 13"
          text={
            <p>
              Lucky 13 präsentiert: &bdquo;A Midsummer Night&apos;s Dream!!! On Ice – A Case Study
              of Shakespeare&rdquo;. Rimuru Tempest lädt zum Fest ein – eigentlich ein großer Spaß,
              wäre da nicht eine Wette mit Lady Eboshi, die das Liebesleben von zwei Paaren auf den
              Kopf stellt. Shakespeare meets Anime mit Charakteren aus &bdquo;Meine Wiedergeburt
              als Schleim&rdquo;, Prinzessin Mononoke, Case Study of Vanitas, Yuri!! On Ice,
              Pokémon, Puella Magi Madoka Magica, Blue Exorcist und Fruits Basket. Drama, Tanz,
              Romantik und Comedy!
            </p>
          }
          maxWidth={550}
        />

        <ContentCard
          title="DJ Steve Heng"
          subtitle="Cosplayball ab 21:30 Uhr"
          imageSrc={HiruShowact}
          altText="DJ Steve Heng"
          text={
            <p>
              DJ und Content Creator aus München. Seine musikalischen Wurzeln liegen im Hip-Hop und
              in der Black Music, die er früh mit House und EDM kombinierte. Heute hat er seinen
              eigenen Signature-Sound entwickelt, der Anime-Openings, kreative Mashups und Geek
              Electro Techno vereint. Er ist regelmäßig auf Szene-Events vertreten, darunter das
              Geek Festival München, die Kaizoku-Eventreihe sowie die Vienna Con – und bereits zum
              dritten Mal bei den YumeKai Nights in Memmingen!
            </p>
          }
          instaLink="https://www.instagram.com/breakouttv/"
          instaLinkText="DJ Steve Heng"
          maxWidth={550}
        />

        <ContentCard
          title="Cosplay Performance Wettbewerb"
          subtitle="Samstag 14:00 Uhr"
          imageSrc={HiruCosplay}
          altText="Cosplay Performance Wettbewerb"
          text={
            <p>
              Beim YumeKai Cosplay Performance Wettbewerb könnt ihr fantastische Auftritte und
              Performances unserer Teilnehmer bestaunen! Nicht nur haben wir eine unglaublich
              talentierte Jury, sondern auch tolle Preise, die unsere Teilnehmer gewinnen können.
              Lasst euch von unseren Cosplayern verzaubern und erlebt Cosplays einmal ganz anders
              auf der großen Bühne! Die Siegerehrung findet am Sonntag bei der
              Abschlussveranstaltung statt.
            </p>
          }
          instaLink="https://www.instagram.com/yumekai.official/"
          instaLinkText="YumeKai"
          maxWidth={550}
        />

        <ContentCard
          title="Eröffnungsfeier &amp; Endveranstaltung"
          subtitle="Sa 10:50 Uhr | So 17:00 Uhr"
          imageSrc={HiruWorkshop}
          altText="YumeKai"
          text={
            <>
              <p>
                <strong>Eröffnungsfeier (Samstag 10:50 Uhr):</strong> Wir heißen euch herzlich auf
                unserer Convention willkommen und geben euch Einblicke auf die Programmpunkte des
                Wochenendes.
              </p>
              <p>
                <strong>Endveranstaltung (Sonntag 17:00 Uhr):</strong> Gemeinsam blicken wir auf
                das Convention-Wochenende zurück. Dank unserer großartigen Unterstützer und
                Sponsoren findet im Rahmen der Endveranstaltung die feierliche Siegerehrung der
                Wettbewerbe statt. Freut euch außerdem auf eine kleine Überraschung!
              </p>
            </>
          }
          instaLink="https://www.instagram.com/yumekai.official/"
          instaLinkText="YumeKai"
          maxWidth={550}
        />
      </ContentContainer>

      <h1 style={{ textAlign: "center", marginTop: "40px" }}>Synchronsprecher</h1>
      <ContentContainer>
        <ContentCard
          title="Nicolle Gonsior &amp; Marie-Jeanne Widera"
          subtitle="Sonntag Q&amp;A 12:05 Uhr"
          imageSrc={NicolleGonsiorBild}
          altText="Synchronsprecher"
          text={
            <>
              <p>
                Erlebt hautnah, wie es hinter den Kulissen der Synchronisation zugeht, und erfahrt
                aus erster Hand, wie bekannten Figuren ihre Stimmen verliehen werden. Nicolle
                Gonsior und Marie-Jeanne Widera erzählen euch zusammen mit PinkStarke aus ihrem
                Arbeitsleben.
              </p>
              <p>
                Präsentiert von PinkStarke, Synira und Mugiwara News Germany:{" "}
                <strong>Frauenpower-Duo: One Piece Special</strong>. Während Yamato für Freiheit,
                Mut und Entschlossenheit steht, verkörpert Charlotte Flambé Ruhe, Kontrolle und
                eine klare Präsenz.
              </p>
              <p>
                <em>
                  Duo Fotosession + Meet&amp;Greet (limitiert auf 12 Personen) verfügbar. Preis:
                  100 €.
                </em>
              </p>
            </>
          }
          maxWidth={550}
        />

        <ContentCard
          title="PinkStarke"
          subtitle="Sonntag Q&amp;A 12:05 Uhr"
          imageSrc={MarieJeanneWideraBild}
          altText="PinkStarke"
          text={
            <p>
              PinkStarke ist Teil des Q&amp;A-Panels mit Nicolle Gonsior und Marie-Jeanne Widera.
              Gemeinsam geben sie Einblicke in die Welt der Synchronsprecher und beantworten eure
              Fragen rund um das Thema Synchronisation.
            </p>
          }
          maxWidth={550}
        />
      </ContentContainer>
    </>
  );
}
