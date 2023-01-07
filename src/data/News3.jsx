import Image from "../Components/Image";
import LinkWord from "../Components/LinkWord";
import TextSection from "../Components/TextSections";
const News = ({ title }) => {
  const color = "text-blue-600";
  const BTC = () => {
    return (
      <LinkWord
        word="BTC"
        color={color}
        link="https://markets.bitcoin.com/crypto/BTC"
      />
    );
  };
  return (
    <>
      <Image title={title} />
      <TextSection>
        Microstrategy is now holding approximately 132,500 bitcoin following its
        most recent purchases. This year, the world’s largest cryptocurrency has
        emerged as “the institutional-grade digital asset,” said Microstrategy
        founder Michael Saylor.
      </TextSection>
      <TextSection heading="Microstrategy Acquires More Bitcoin">
        Nasdaq-listed Microstrategy Inc. announced Wednesday that it has
        purchased more bitcoin for its corporate treasury. Michael Saylor, the
        company’s founder and executive chairman, tweeted Wednesday:
      </TextSection>
      <TextSection>
        Microstrategy has increased its bitcoin holdings by ~2,500 <BTC />. As
        of 12/27/22 Microstrategy holds ~132,500 bitcoin acquired for ~$4.03
        billion at an average price of ~$30,397 per bitcoin.
      </TextSection>
      <TextSection>
        In its
        <LinkWord
          word="filing"
          color={color}
          link="https://markets.bitcoin.com/crypto/BTC"
        />{" "}
        with the U.S. Securities and Exchange Commission (SEC), Microstrategy
        clarified that the 2,500 coins were acquired between Nov. 1 and Dec. 24
        by its wholly owned subsidiary Macrostrategy.
      </TextSection>
      <TextSection>
        The bitcoin sale in December marked the first time Microstrategy sold
        its bitcoin since it began{" "}
        <LinkWord
          word="accumulating"
          color={color}
          link="https://news.bitcoin.com/billion-dollar-public-company-microstrategy-250-million-btc-bitcoin-superior-to-cash/"
        />{" "}
        the crypto for its corporate treasury in 2020. The company cited tax
        reasons for selling <BTC />. “Microstrategy plans to carry back the
        capital losses resulting from this transaction against previous capital
        gains, to the extent such carrybacks are available The subsidiary bought
        approximately 2,395 <BTC /> at an average price of $17,871 per coin
        between Nov. 1 and Dec. 21. It then sold about 704 <BTC /> at $16,776
        per coin on Dec. 22. Macrostrategy then bought about 810 more <BTC /> at
        $16,845 per coin on Dec. 24. At the time of writing, bitcoin is trading
        at $16,656.80.
      </TextSection>
      <TextSection>
        Under the federal income tax laws currently in effect, which may
        generate a tax benefit,” the SEC filing describes.
      </TextSection>
      <TextSection>
        Saylor said in an{" "}
        <LinkWord
          word="interview"
          color={color}
          link="https://youtu.be/BiTc3tkrcEw?t=2"
        />{" "}
        last week:
      </TextSection>
      <TextSection>
        The most positive thing of the year is the emergence of bitcoin as the
        institutional grade digital asset and the clarity that … there is one
        crypto asset that’s a digital commodity … Bitcoin is that commodity.
      </TextSection>
      <TextSection>
        The executive noted that both the{" "}
        <LinkWord
          word="chairman of the SEC"
          color={color}
          link="https://news.bitcoin.com/sec-chair-gensler-bitcoin-is-a-commodity/"
        />{" "}
        and the chair of the Commodity Futures Trading Commission (CFTC) have
        confirmed that{" "}
        <LinkWord
          word="bitcoin is a commodity"
          color={color}
          link="https://news.bitcoin.com/cftc-chairman-confirms-bitcoin-ether-are-commodities/"
        />
        . Saylor previously{" "}
        <LinkWord
          word="explained"
          color={color}
          link="https://news.bitcoin.com/microstrategy-ceo-expects-bitcoin-to-go-into-the-millions-despite-crypto-market-sell-off/"
        />{" "}
        that Microstrategy is investing in <BTC /> “for the long term.” He
        added: “Our strategy is to buy bitcoin and hold the bitcoin, so there’s
        no price target … I expect bitcoin is going to go into the millions. So,
        we’re very patient. We think it’s the future of money.”
      </TextSection>
    </>
  );
};

export default News;
