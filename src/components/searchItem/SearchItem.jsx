import "./searchItem.css";

export const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square200/73171931.webp?k=664cf5091db4d756d0d370efd6d559b1fd55e46b8d8fd562800faf36357fa410&o="
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Ramada Plaza By Wyndham Palm Grove</h1>
        <span className="siDistance">5.9 km from center</span>
        <span className="siTaxiOp">Free Airport Taxi</span>
        <span className="siSubtitle">Juhu, Mumbai | BeachFront</span>
        <span className="siFeatures">Deluxe Double Room | 1 full bed</span>
        <span className="siCancelOp">Free Cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>9.3</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPriceCancelled">₹̶ ̶1̶̶̶6̶̶̶,̶7̶̶̶5̶̶̶0̶̶̶</span>
          <span className="siPrice">₹ 15,075</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">Search Availability</button>
        </div>
      </div>
    </div>
  );
};
