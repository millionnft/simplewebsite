// Imports
import Link from "next/link"; // Routing
import Layout from "@components/Layout"; // Layout wrapper
import styles from "@styles/pages/FAQ.module.scss"; // Page styles

// Types
import type { ReactElement } from "react";

// FAQ page
export default function FAQ(): ReactElement {
  return (
    <Layout>
      <div className={styles.faq}>
        <h2>Frequently Asked Questions</h2>

        {/* What is million ? */}
        <div className={styles.faq__item}>
          <h3>What is Million?</h3>
          <p>
            Million is a collection of 1,000,000 unique positions of pixel,
            originally released by{" "}
            <a
              href="https://twitter.com/MillionNFTApp/status/1441236441506336778"
              target="_blank"
              rel="noopener noreferrer"
            >
              MillionNFT Team
            </a>
            . At release, anyone could claim million pixel for just gas. Each pixel contains a coordinate (x, y).
          </p>
          <p>
            Million is an unaudited project. Pixels #200001 to #999999 were claimable by
            anyone and #0 to #200000 are currently reserved for the contract
            deployer.
          </p>
        </div>

        {/* Why is million special? */}
        <div className={styles.faq__item}>
          <h3>Why is million special?</h3>
          <p>
            Million is unique—the first project of its kind. 
          </p>
          <p>
          Million is the unfiltered, uncensorable building block for ads, games, and more, in the hands of the community, at no cost. Million pursues complete decentralization from day one.
          </p>
        </div>

        {/* Can I build with million? */}
        <div className={styles.faq__item}>
          <h3>Can I build with Million?</h3>
          <p>
            Yes, you are free to use Million in any way you want. 
          </p>
        </div>

        {/* How do I value million nft? */}
        <div className={styles.faq__item}>
          <h3>How do I value million nft?</h3>
          <p>
          They say that value is always in the eye of the beholder. Million is no different, with no explicit rarities specified at launch. How you value a million nft is up to you.
          </p>
          <p>
          Still, the community has begun to devise many mechanisms by which to assess the rarity of million and their items. Some of these include the position of pixel.
          </p>
          <p>Remember, use your own discretion when valuing a million nft.</p>
        </div>
      </div>
    </Layout>
  );
}
