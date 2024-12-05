import styled from "styled-components";
import Script from "next/script";
import Banner from "@/components/shop/Banner";

export default function Shop() {
  return (
    <>
      <Script
        src="https://pretix.eu/widget/v1.de.js"
        strategy="lazyOnload"
        crossOrigin="anonymous"
      />

      <h1>Ticketshop</h1>
      <p></p>
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <pretix-widget event="https://pretix.eu/Dreamfly-Events/yumekai-25/" single-item-select="button"></pretix-widget>
            <noscript>
                <div class="pretix-widget">
                    <div class="pretix-widget-info-message">
                        JavaScript ist in Ihrem Browser deaktiviert. Um unseren Ticketshop ohne JavaScript aufzurufen, klicken Sie bitte <a target="_blank" rel="noopener" href="https://pretix.eu/Dreamfly-Events/yumekai-25/">hier</a>.
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
