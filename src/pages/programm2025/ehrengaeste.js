import styled from "styled-components";

//Components
import ReturnButton from "@/components/menu/ReturnButton";
import ContentCard from "@/components/elements/ContentCard";

//Images
import CelloticDuetImage from "/public/assets/images/yumekai2025/25_Cellotic_Duet.jpg";
import andyKnoteImage from "/public/assets/images/yumekai2025/Andy_Knote.jpg";
import angeliqueImage from "/public/assets/images/yumekai2025/Angelique.jpg";
import cosplayVersteigerung1Image from "/public/assets/images/yumekai2025/Cosplay_Versteigerung_1.jpg";
import dominikAuerImage from "/public/assets/images/yumekai2025/Dominik_Auer.jpg";
import echoAneImage from "/public/assets/images/yumekai2025/Echo_Ane.png";
import juliaMeynenImage from "/public/assets/images/yumekai2025/Julia_Meynen_collage.jpg";
import junihuhnShinkaiImage from "/public/assets/images/yumekai2025/Junihuhn_Shinkai.png";
import lyriaIdolsignature2Image from "/public/assets/images/yumekai2025/Lyria_idolsignature_2.png";
import mionHHeartImage from "/public/assets/images/yumekai2025/MION_H_Heart.jpg";
import nerdDaddysImage from "/public/assets/images/yumekai2025/nerd_Daddys.jpg";
import petraScheeserImage from "/public/assets/images/yumekai2025/Petra_Scheeser.jpg";
import sebastianFitznerImage from "/public/assets/images/yumekai2025/Sebastian_Fitzner.jpg";
import stellariaYumekaiPromobild2025Image from "/public/assets/images/yumekai2025/Stellaria_YumeKai_Promobild_2025.png";
import HiruCosplay from "/public/assets/hirus/Hiru_Cosplay.png";
import HiruWorkshop from "/public/assets/hirus/Hiru_Workshop.png";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch; // wichtig: sorgt dafür, dass Cards gleich hoch werden
  gap: 30px;
`;

export default function Ehrengaeste() {
  return (
    <>
      <ReturnButton link="/programm2025" />
      <h1 style={{ textAlign: "center" }}>Showacts</h1>
      <ContentContainer>
        <ContentCard
          title="Stellaria: Moonlight Melodies"
          imageSrc={stellariaYumekaiPromobild2025Image}
          altText="Bild von Stellaria: Moonlight Melodies"
          text={
            <p>
              Bist du bereit für eine unvergessliche Show? Mit &rdquo;Stellaria: Moonlight
              Melodies&rdquo; erlebst du atemberaubende Covertänze zu Songs mit traditionellen
              Elementen verschiedener asiatischer Kulturen. Lass dich von Highlights wie
              &rdquo;Kyouki Ranbu&rdquo; von GARNiDELiA oder &rdquo;Sakura Kiss&rdquo; von Ouran
              High School Host Club in den Bann ziehen! Von J-Pop und Vocaloid über K-Pop bis C-Pop,
              bei dieser Show ist für jeden etwas dabei. Eine aufwendige Lichtshow und zauberhafte
              Idolsona-Kostüme entführen dich in eine Welt voller Licht und Tanz. Schnapp dir deine
              Lightsticks und lasst den Saal wie im Mondlicht erstrahlen!
            </p>
          }
          instaLink="https://www.instagram.com/stellaria.idols/"
          instaLinkText="Stellaria"
          maxWidth={550}
        />

        <ContentCard
          title="MION"
          imageSrc={mionHHeartImage}
          altText="Bild von MION"
          text={
            <p>
              MION ist eine preisgekrönte japanische Singer-Songwriterin aus Nagoya, Aichi, die mit
              ihrer Hit-Single &bdquo;Summer Magic&rdquo; Platz 1 der Oricon Singles Charts erreicht
              hat. Als sie 16 Jahre alt war, gewann sie den Outstanding Performance Award beim Music
              Revolution Wettbewerb von YAMAHA, was ihr den Start ihrer professionellen Karriere
              ermöglichte. In Japan ist MION seit über zehn Jahren als Singer-Songwriterin aktiv,
              hat 11 Solosingles veröffentlicht und verfügt über umfangreiche Erfahrung als
              Live-Performerin. In ihrem Heimatland ist sie auf zahlreichen Musikfestivals und
              Konzerten aufgetreten und hat vier nationale Tourneen absolviert. Im Jahr 2022 erhielt
              MION ein Global Talent Visa vom britischen Innenministerium, nachdem sie eine
              Empfehlung des Arts Council England erhalten hatte. Sie ist bereits in über 20 Ländern
              weltweit aufgetreten und wir freuen uns sehr, dass sie auf der YumeKai in Memmingen
              auftretet! Bei ihrem Auftritt auf der YumeKai wird sie eine Mischung aus ihrer eigenen
              Musik (J-Pop, J-Rock & Ballade) und Covers bekannter Anime-Songs vortragen.
            </p>
          }
          instaLink="https://www.instagram.com/mion_official/"
          instaLinkText="MION"
          maxWidth={550}
        />
        <ContentCard
          title="Echo Ane"
          imageSrc={echoAneImage}
          altText="Bild von Echo Ane"
          text={
            <p>
              Hey - my name is Ane! Ich bin eine Künstlerin, Sängerin, Songwriterin und ein großer
              Fan von Anime, Cover und auch meiner eigenen Musik! Ich lade seit 2018 Cover auf
              YouTube hoch, aber ehrlich gesagt singe ich schon so lange ich denken kann. Musik ist
              meine Leidenschaft, und wenn du hier bist, wette ich, dass du auch Musik liebst - also
              lass es uns gemeinsam genießen und eine tolle Zeit haben!
            </p>
          }
          instaLink="https://www.instagram.com/echoane_music?igsh=MWk2Y2piODNkbnRqaw%3D%3D&utm_source=qr"
          instaLinkText="Echo Ane"
          maxWidth={550}
        />
        <ContentCard
          title="Cosplay Performance Wettbewerb"
          imageSrc={HiruCosplay}
          altText="Bild von Hiru"
          text={
            <p>
              Beim YumeKai Cosplay Performance Wettbewerb könnt ihr fantastische Auftritte und
              Performances unserer Teilnehmer bestaunen! Nicht nur haben wir eine unglaublich
              talentierte Jury, sondern auch tolle Preise, die unsere Teilnehmer gewinnen können.
              Lasst euch von unseren Cosplayern verzaubern und erlebt Cosplays einmal ganz anders
              auf der großen Bühne! Die Siegerehrung wird am Sonntag bei der Abschlussveranstaltung
              stattfinden.
            </p>
          }
          instaLink="https://www.instagram.com/yumekai.official/"
          instaLinkText="YumeKai"
          maxWidth={550}
        />
        <ContentCard
          title="Cosplayer Versteigerung"
          imageSrc={cosplayVersteigerung1Image}
          altText="Bild von Cosplayer Versteigerung"
          text={
            <p>
              Gemeinsam mit dem CoHeKi e.V. möchten wir euch zu etwas ganz Besonderem einladen:
              unserer Cosplayer-Versteigerung! Aber was ist eine Cosplayer-Versteigerung? Hier
              werden nicht einfach Kostüme versteigert, sondern Cosplayer*innen bieten sich selbst
              für den guten Zweck an. Wenn du dich auf der Bühne versteigern lassen möchtest, kannst du dich vor Ort am Infostand der YumeKai anmelden. Die Höchstbietende Person erhält eine Stunde Zeit, die sie mit
              der versteigerten Person auf der YumeKai verbringen kann, und dafür spendet der CoHeKi
              e.V. die Erlöse an ein Kinderhilfsprojekt. Das genaue Spendenziel könnt ihr entweder
              auf der YumeKai am Stand des CoHeKi e.V. erfahren oder direkt auf der Bühne. Was ihr
              in dieser Stunde macht, liegt ganz bei euch, aber eines sei gesagt: Wir haben die eine
              oder andere Überraschung für euch vorbereitet, die als kleiner Bonus dazukommt!
            </p>
          }
          instaLink="https://www.instagram.com/coheki_ev/"
          instaLinkText="CoHeKi e.V."
          maxWidth={550}
        />
        <ContentCard
          title="Junihuhn - Shinkai Piano Concert"
          imageSrc={junihuhnShinkaiImage}
          altText="Bild von Junihuhn"
          text={
            <p>
              Your Name - Weathering With You - Suzume. Zum Erfolg dieser Meisterwerke von Shinkai
              Makoto hat eine Musikgruppe maßgeblich beigetragen: RADWIMPS. Juni bringt euch eine
              Auswahl der Stücke auf dem Piano mit, bestehend aus berühmten Songs und seinen
              persönlichen Favoriten aus den drei Filmen. Zu den selbst arrangierten Klavierstücken
              werden passende Filmszenen abgespielt, um eure Erinnerungen an die Filme wachzurufen.
              Und wer diese nicht kennt, kann das Programm als Einstieg in das fantastische
              Shinkai-Universum wahrnehmen. Freut euch auf Soundtracks wie &bdquo;Sparkle&rdquo;,
              &bdquo;Grand Escape&rdquo; oder &bdquo;Sky over Tokyo&rdquo; bei Junihuhns
              Klavierkonzert!
            </p>
          }
          instaLink="https://www.instagram.com/juni.huhn/"
          instaLinkText="Junihuhn"
          maxWidth={550}
        />
        <ContentCard
          title="Petra Scheeser"
          imageSrc={petraScheeserImage}
          altText="Bild von Petra Scheeser"
          text={
            <p>
              Petra Scheeser, die bekannte und talentierte Stimme hinter zahlreichen Anime- und
              Serienintros, wird Teil der YumeKai 2025 sein und euch mit einem einzigartigen
              Auftritt verzaubern! Erlebt die Stimme hinter den Openings von Winx Club, Detective
              Conan, Digimon, Ranma ½ und vielen weiteren Klassikern. Lasst euch von diesen
              legendären Anime- und Serien-Openings in Gänsehaut- Momente versetzen! Freut euch auf
              spannende Einblicke in Petras beeindruckende Arbeit, eine Signierstunde und die
              Möglichkeit, sie live auf unserer Bühne zu erleben.
            </p>
          }
          instaLink="https://www.instagram.com/scheeserin/"
          instaLinkText="Petra Scheeser"
          maxWidth={550}
        />

        <ContentCard
          title="Cosplay Q&amp;A"
          imageSrc={HiruWorkshop}
          altText="Bild von Hiru"
          text={
            <p>
              Bei unserem Cosplay Q&A habt ihr die Chance, mehr über unsere Cosplay-Special-Guests
              zu erfahren. Zuerst könnt ihr unseren Moderatoren dabei lauschen, wie Sie einige
              Fragen an unsere Gäste aus Deutschland und Europa stellen. Anschließend habt ihr
              selbst die Möglichkeit, Fragen zu stellen, die euch interessieren.
            </p>
          }
          maxWidth={550}
        />

        <ContentCard
          title="Lyria"
          imageSrc={lyriaIdolsignature2Image}
          altText="Bild von Lyria"
          text={
            <p>
              Lyria ist eine Idol Vtuberin, die virtuell, aber live auf der Bühne mit ihrem Gesang
              das Publikum verzaubert. In ihrer Setlist hat sie eine bunte Mischung aus beliebten
              japanischen und englischen Songs, die sowohl energiegeladen als auch beruhigend sein
              können! Lasst euch mit &rdquo;Mephisto&rdquo; aus dem Anime &rdquo;Oshi no Ko&rdquo;
              und &rdquo;Hana ni natte&rdquo; aus dem Anime &rdquo;Die Tagebücher der
              Apothekerin&rdquo; in die bunte Welt der Anime Lieder entführen!
            </p>
          }
          instaLink="https://www.instagram.com/lyriavt/"
          instaLinkText="Lyria Stolllenwurm"
          maxWidth={550}
        />
        <ContentCard
          title="Cellotic Duets"
          imageSrc={CelloticDuetImage}
          altText="Bild von Cellotic Duets"
          text={
            <p>
              Cellotic Duets präsentiert instrumentale Soundtrack-Musik aus Filmen, Serien und Games
              verschiedenster Genres. Mit Cello, Piano, und Percussion interpretieren die Musiker
              eine ausgewählte Sammlung melodischer Filmmusik-Stücke. Die Cover basieren auf
              ikonischer Musik aus Fantasy Welten wie &bdquo;Game of Thrones&rdquo;, den
              Anime-Klassikern des &bdquo;Studio Ghibli&rdquo; oder auch Hans Zimmer Kompositionen,
              wie dem Soundtrack zu &bdquo;Interstellar&rdquo;. Dabei spannen sie den Bogen von tief
              melancholischen bis hin zu kraftvoll intensiven Darbietungen. Von &rdquo;Der Herr der
              Ringe&rdquo; bis &rdquo;Das letzte Einhorn&rdquo;, von &rdquo;Disney&rdquo; bis
              &rdquo;Star Wars&rdquo; - jedes Arrangement stammt aus eigener Feder und verleiht den
              Stücken einen frischen und einzigartigen Charakter. Cellotic Duets ist die
              &bdquo;kleine Variation&rdquo; des Cellotic Soundtrack Ensembles aus Berlin
            </p>
          }
          webLink="https://linktr.ee/cellotic"
          webLinkText="Celotic Soundtrack Ensemble"
          maxWidth={550}
        />
        <ContentCard
          title="Live on Stage: Angel_NG"
          imageSrc={angeliqueImage}
          altText="Bild von Angel"
          text={
            <p>
              Bereit für gute Laune und jede Menge Nostalgie? Angel_NG bringt auf der YumeKai die
              Songs auf die Bühne, die wirklich jeder kennt - von beliebten Anime-Openings bis zu
              unvergesslichen Disney&reg;-Hits. Keine 0815-Playlist, sondern echte
              Mitsing-Highlights, auf die alle Bock haben. Komm vorbei, sing mit und genieß den
              Moment!
            </p>
          }
          instaLink="https://www.instagram.com/angel_ng___?igsh=MW5uYzZ4YzNmYW5x&utm_source=qr"
          instaLinkText="Angel"
          maxWidth={550}
        />
        <ContentCard
          title="Cosplay Crafting Wettbewerb"
          imageSrc={HiruCosplay}
          altText="Bild von Hiru"
          text={
            <p>
              Beim YumeKai Cosplay Crafting Wettbewerb könnt ihr die fantastische Cosplays unserer
              Teilnehmer bestaunen! Nicht nur haben wir eine unglaublich talentierte Jury, sondern
              auch tolle Preise, die unsere Teilnehmer gewinnen können. Lasst euch von unseren
              Cosplayern bei ihrem kurzen Catwalk über die Bühne verzaubern. Die Siegerehrung wird
              bei der Abschlussveranstaltung stattfinden.
            </p>
          }
          instaLink="https://www.instagram.com/yumekai.official/"
          instaLinkText="YumeKai"
          maxWidth={550}
        />
        <ContentCard
          title="Nerd Daddy's - Anime, Manga & das Leben Ü30 - LIVE auf der Yumekai!"
          imageSrc={nerdDaddysImage}
          altText="Bild von Nerd Daddy's"
          text={
            <p>
              Steff & Tobi sind nicht nur Familienväter, sondern auch leidenschaftliche Nerds - und
              das schon seit den 90ern! In ihrem Podcast sprechen sie über Anime, Manga und wie es
              ist, dieses Hobby als Erwachsene mit Familie weiterzuleben. Wie reagieren ihre Kids
              auf ihren Nerd-Lifestyle? Welche Serien haben sie in ihrer Kindheit geprägt? Und wie
              bleibt man als Ü30-Fan up to date? Kommt vorbei, wenn sie LIVE auf der Bühne der
              Yumekai nostalgische Geschichten erzählen, Anekdoten aus dem Familienalltag teilen und
              mit euch in die Welt von Anime & Manga eintauchen! Hört rein, lacht mit und feiert das
              Nerdsein in jedem Alter!
            </p>
          }
          instaLink="https://www.instagram.com/nerddaddys.podcast/"
          instaLinkText="Nerd Daddy's"
          maxWidth={550}
        />
        <ContentCard
          title="Offener Catwalk"
          imageSrc={HiruCosplay}
          altText="Bild von Hiru"
          text={
            <p>
              Bei unserem Cosplay Catwalk könnt ihr in Kürze die tollsten Cosplays bewundern! Hier
              hat jeder die Chance, für ein paar Sekunden die Bühne zu erobern und sein Kostüm zu
              präsentieren. Dabei spielt es keine Rolle, was ihr cosplayt oder woher ihr kommt. Es
              geht vielmehr um eure Bühnenpräsenz. Jeder mit einem Cosplay ist eingeladen auf der
              Bühne teilzunehmen, kommt dafür einfach vor Beginn des Programmpunkts zur Bühne! Hier
              ist keine Anmeldung nötig.
            </p>
          }
          instaLink="https://www.instagram.com/yumekai.official/"
          instaLinkText="YumeKai"
          maxWidth={550}
        />
      </ContentContainer>

      <h1 style={{ textAlign: "center" }}>Synchronsprecher &amp; Musikproduzent</h1>
      <ContentContainer>
        <ContentCard
          title="Andy Knote"
          imageSrc={andyKnoteImage}
          altText="Bild von Andy Knote"
          text={
            <p>
              Als Produzent und Texter hinter den bekanntesten deutschen Anime-Openings hat Andy
              Knote zusammen mit den Anime Allstars zahlreiche unvergessliche Melodien für Serien
              wie &bdquo;One Piece&rdquo;, &bdquo;Digimon&rdquo; und viele mehr erschaffen. Mit über
              15 Jahren Erfahrung in der Anime-Musikszene hat er über 25 Alben für bekannte
              Anime-Serien produziert und unzählige Episoden-Songs beigesteuert. Lasst euch diese
              Gelegenheit nicht entgehen, den kreativen Kopf hinter euren Lieblings-Openings live zu
              erleben!
            </p>
          }
          instaLink="https://www.instagram.com/andy_knote/"
          instaLinkText="Andy Knote"
          maxWidth={550}
        />
        <ContentCard
          title="Dominik Auer"
          imageSrc={dominikAuerImage}
          altText="Bild von Dominik Auer"
          text={
            <p>
              Dominik Auer ist ein Synchronsprecher aus der Region und bekannt für seine
              vielseitigen Rollen, unter anderem als Inuyasha, Samwell Tarly aus Game of Thrones und
              Tuxedo Mask aus Sailor Moon. Außerdem leiht er auch Tsuchigomori aus Toilet-Bound
              Hanako-kun und vielen weiteren Charakteren seine Stimme.
            </p>
          }
          instaLink="https://www.instagram.com/dominikauer.official/"
          instaLinkText="Dominik Auer"
          maxWidth={550}
        />
        <ContentCard
          title="Julia Meynen"
          imageSrc={juliaMeynenImage}
          altText="Bild von Julia Meynen"
          text={
            <p>
              Julia Meynen ist unter anderem für ihre Rollen als Nezuko, Ayumi Yoshida und D.Va
              bekannt. Außerdem leiht sie auch Leafa aus Sword Art Online oder Yui Hirasawa aus K-ON
              ihre Stimme, und noch vielen mehr!
            </p>
          }
          instaLink="https://www.instagram.com/juliameynen/"
          instaLinkText="Julia Meynen"
          maxWidth={550}
        />
        <ContentCard
          title="Sebastian Fitzner"
          imageSrc={sebastianFitznerImage}
          altText="Bild von Sebastian Fitzner"
          text={
            <p>
              Sebastian ist die Stimme von vielen beliebten Anime- und Filmcharakteren. Ihr kennt
              ihn als Deku aus My Hero Academia, Laios aus Delicious in Dungeon, und Ciel
              Phantomhive aus Black Butler - um nur einige seiner vielen großartigen Rollen zu
              nennen! Außerdem leiht er seine Stimme Ned Leeds, dem besten Freund von Spider-Man,
              Ray aus The Promised Neverland, Hodaka Morishima aus Weathering With You, Bolin aus
              The Legend of Korra, Atsushi Nakajima aus Bungo Stray Dogs und noch viele viele
              weitere ikonische Charaktere!
            </p>
          }
          instaLink="https://www.instagram.com/fitzner.sebastian/"
          instaLinkText="Sebastian Fitzner"
          maxWidth={550}
        />
      </ContentContainer>
    </>
  );
}
