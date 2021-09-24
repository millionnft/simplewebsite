// Imports
import Link from "next/link"; // Local routing
import Layout from "@components/Layout"; // Layout wrapper
import { defaultBags } from "@utils/constants"; // Bags to render
import styles from "@styles/pages/Home.module.scss"; // Styles

// Types
import type { ReactElement } from "react";

export default function Home(): ReactElement {
  // Quicklinks to render
  const quicklinks: Record<string, string>[] = [
    { name: "OpenSea", url: "" },
    {
      name: "Twitter",
      url: "https://twitter.com/MillionNFTApp",
    },
    {
      name: "Contract",
      url: "",
    },
  ];

  /**
   * Selects x random bags from defaultBags
   * @returns {Record<string, string>[]} randomized bags
   */
  const getRandomBags = (x: number) => {
    const shuffled = defaultBags.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, x);
  };

  return (
    <Layout>
      <div>
        <div className={styles.home__cta}>
          {/* CTA title */}
          <h1>Million</h1>

          {/* Quicklinks */}
          <ul>
            {quicklinks.map(({ name, url }, i) => {
              return (
                <li key={i}>
                  {url.startsWith("/") ? (
                    // If link to local page use Link
                    <Link href={url}>
                      <a>{name}</a>
                    </Link>
                  ) : (
                    // Else, redirect in new tab
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {name}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>

          {/* CTA Description */}
          <p>
          Million is 1000x1000 pixels and stored on chain.
            <br /> Feel free to use Million in any
            way you want.
          </p>
        </div>

        {/* Rendering sample million nft */}
        <div className={styles.home__feature}>
          <span>Example:</span>
          {getRandomBags(5).map( ({ id, attributes }, i) => (
            // For each million nft, render item and link to OpenSea
            <a
              href={``}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              className={styles.home__bag}
            >
              <div className={styles.home__bag_attributes}>
                <span>#{id}</span>
                <ul>
                  <span>({Math.floor(id/1000)}, {id%1000})</span>
                </ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
}
