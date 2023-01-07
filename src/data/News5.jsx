import Image from "../Components/Image";
import LinkWord from "../Components/LinkWord";
import TextSection from "../Components/TextSections";
const News = ({ title }) => {
  const color = "text-green-600";
  return (
    <>
      <TextSection>
        The investor drained $110 million in cryptocurrencies from the platform.
      </TextSection>
      <Image title={title} />
      <TextSection>
        Avraham Eisenberg, the crypto investor whose{" "}
        <LinkWord
          word={`“highly profitable trading”`}
          color={color}
          link="https://www.coindesk.com/markets/2022/11/22/mango-exploiter-gets-liquidated-after-roiling-aave-using-20m-of-borrowed-curve-tokens/"
        />{" "}
        drained DeFi trading platform Mango strategy” drained DeFi trading
        platform Mango Markets of crypto worth $110 million, was arrested Monday
        in Puerto Rico, court documents said.
      </TextSection>
      <TextSection>
        The self-described game theorist admitted his role in draining Mango
        Markets’ treasury shortly after the incident in mid-October, and may now
        be the first U.S. resident to face charges for his role in manipulating
        a{" "}
        <LinkWord
          word="decentralized-finance"
          color={color}
          link="https://www.coindesk.com/learn/what-is-defi/"
        />{" "}
        trading platform.
      </TextSection>
      <TextSection>
        Eisenberg faces charges of commodities fraud and commodities
        manipulation, according to a{" "}
        <LinkWord
          word="filing unsealed Tuesday"
          link="https://storage.courtlistener.com/recap/gov.uscourts.nysd.591629/gov.uscourts.nysd.591629.1.0.pdf"
        />
        . The charges could see punishments ranging from fines to prison time.{" "}
      </TextSection>
      <TextSection>
        A deposition signed by FBI Special Agent Brandon Racz alleges Eisenberg
        “willfully and knowingly” manipulated the sale of a commodity – namely
        futures contracts on Mango Markets.
      </TextSection>
      <TextSection>
        “Eisenberg engaged in a scheme involving the intentional and artificial
        manipulation of the price of perpetual futures contracts on a
        cryptocurrency exchange called Mango Markets, and other manipulative and
        deceptive devices and contrivances.”
      </TextSection>
    </>
  );
};

export default News;
