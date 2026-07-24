import styled from "styled-components";
import Head from "next/head";
import Script from "next/script";
import Banner from "@/components/shop/Banner";
import { StyledLink } from "@/components/styledComponents";
import SEO from "@/components/elements/SEO";

export default function Shop() {
  return (
    <>
      <SEO
        title="Ticketshop"
        description="Sichere dir jetzt deine Tickets für die YumeKai 2026 in Memmingen im offiziellen Ticketshop."
        path="/shop"
      />
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://pretix.eu/Dreamfly-Events/yumekai-25/widget/v1.css"
          crossOrigin="anonymous"
        />
      </Head>
      <Script
        src="https://pretix.eu/widget/v1.de.js"
        strategy="lazyOnload"
        crossOrigin="anonymous"
      />

      <h1>YumeKai 2026</h1>
      <p>
        <br />
        Falls das Widget nicht lädt kannst du den Ticketshop unter{" "}
        <StyledLink href="https://pretix.eu/Dreamfly-Events/yumekai-26/" target="_blank">
          pretix.eu/Dreamfly-Events/yumekai-26/
        </StyledLink>{" "}
        erreichen.
      </p>
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <pretix-widget event="https://pretix.eu/Dreamfly-Events/yumekai-26/" single-item-select="button"></pretix-widget>
            <noscript>
                <div class="pretix-widget">
                    <div class="pretix-widget-info-message">
                        JavaScript ist in Ihrem Browser deaktiviert. Um unseren Ticketshop ohne JavaScript aufzurufen, klicken Sie bitte <a target="_blank" rel="noopener" href="https://pretix.eu/Dreamfly-Events/yumekai-26/">hier</a>.
                    </div>
                </div>
            </noscript>
            `,
        }}
      />

      <Banner />
    </>
  );
}
