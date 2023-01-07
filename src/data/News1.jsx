import Image from "../Components/Image";
import LinkWord from "../Components/LinkWord";
import TextSection from "../Components/TextSections";
const News = ({ title }) => {
  const makeValueWord = (type, value) => {
    return (
      <h1 className="font-semibold inline">
        {" "}
        <span>{type}</span> <span className="text-green-600">{value}</span>
      </h1>
    );
  };

  return (
    <>
      <TextSection>
        The move comes after nearly two years since PayPal enabled users to buy
        and sell crypto on its platform.
      </TextSection>
      <Image title={title} />
      <TextSection>
        After rolling out the ability to buy and sell crypto on its platform in
        October 2020, PayPal is finally allowing users the ability to natively
        transfer, send and receive digital assets between PayPal and other
        wallets and exchanges. As of Tuesday, the feature is available to select
        U.S. users, with the feature expanding to all eligible U.S. users in the
        coming weeks. The first batch of supported coins consists of Bitcoin
        <LinkWord
          word={makeValueWord("BTC", "$16,704")}
          link="https://cointelegraph.com/bitcoin-price"
        />
        , Ether
        <LinkWord
          word={makeValueWord("ETH", "$1,217")}
          link="https://cointelegraph.com/ethereum-price"
        />
        , Bitcoin Cash
        <LinkWord
          word={makeValueWord("BCH", "$100")}
          link="https://cointelegraph.com/bitcoin-cash-price-index"
        />
        , and Litecoin
        <LinkWord
          word={makeValueWord("LTC", "$74.58")}
          link="https://cointelegraph.com/ltc-price-index"
        />
        . In addition, customers who transfer their crypto onto PayPal can spend
        it via Checkout at millions of merchant terminals. The company has been
        granted a full Bitlicense by the New York Department of Financial
        Services for the conduct. Users would simply need to log in to their
        accounts and enter the crypto section of the application to start
        transferring coins. Users are generally required to complete a one-time
        ID verification before the procedure.
      </TextSection>
      <TextSection>
        Crypto transfers to recipients outside of PayPal would incur a network
        fee based on their respective blockchains, but transfers between PayPal
        users will not incur such fees. To protect users' privacy, the firm
        generates a new recipient address for each transaction into one's PayPal
        account. PayPal will also not charge fees for incoming transfers.
      </TextSection>
      <TextSection>
        The company is also working to integrate other forms of cryptocurrency
        services, such as central bank digital currencies, to boost its digital
        footprint. It is also exploring the possibility of launching its own
        stablecoin, dubbed "PayPal Coin." The discovery came after a developer
        found evidence of such a stablecoin within the source code of the
        company's iPhone app.
      </TextSection>
    </>
  );
};

export default News;
