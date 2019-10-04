import React, { Component } from 'react';

export default class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    let { suggestionOptions, results, query, location, suggestionClick, destinationClick } = this.props
    if (query.length === 0) {
      return (
        <div className="suggestions-box">
          <div className="trending full-topbar">
            <div className="trendings">
              <span className="trend" onClick={() => suggestionClick("japanese")} >Japanese</span>
              <span className="trend" onClick={() => suggestionClick("mexican")} >Mexican</span>
              <span className="trend" onClick={() => suggestionClick("korean")}  >Korean</span>
            </div>
            <div className="trendings">
              <span className="trend" onClick={() => suggestionClick("mediterranean")} >Mediterranean</span>
              <span className="trend" onClick={() => suggestionClick("chinese")} >Chinese</span>
            </div>
          </div>
          <h3 className="popular-h">Popular Destinations</h3>
          <div className="all-imgs">
            <div className="img-container">
              <img className="img-sugg" src={'./images/NYCSquare.jpeg'} onClick={() => destinationClick("New York, NY")}  ></img>
              <div className="title-container">
                <div className="sugg-title">New York, NY</div>
              </div>
            </div>
            <div className="img-container">
              <img className="img-sugg" src={'./images/FranceSquare.jpeg'} onClick={() => destinationClick("Paris, France")}  ></img>
              <div className="title-container">
                <div className="sugg-title">Paris, France</div>
              </div>
            </div>
            <div className="img-container">
              <img className="img-sugg" src={'./images/TokyoSquare.jpeg'} onClick={() => destinationClick("Tokyo, Japan")}  ></img>
              <div className="title-container">
                <div className="sugg-title">Tokyo, Japan</div>
              </div>
            </div>
            <div className="img-container">
              <img className="img-sugg" src={'./images/RomeSquare.jpeg'} onClick={() => destinationClick("Rome, Italy")}  ></img>
              <div className="title-container">
                <div className="sugg-title">Rome, Italy</div>
              </div>
            </div>
            {/* <div className="popular" onClick={() => destinationClick("New York, NY")}  ><img className="result-img" src={'./images/NYCSquare.jpeg'}></img>
              <div className="pop-title"></div></div>
            <div className="popular" onClick={() => destinationClick("Paris, France")} ><img className="result-img" src={'./images/FranceSquare.jpeg'}></img>
              <div className="pop-title">Paris, France</div></div>
            <div className="popular" onClick={() => destinationClick("Tokyo, Japan")} ><img className="result-img" src={'./images/TokyoSquare.jpeg'}></img>
              <div className="pop-title">Tokyo, Japan</div></div>
            <div className="popular" onClick={() => destinationClick("Rome, Italy")} ><img className="result-img" src={'./images/RomeSquare.jpeg'}></img>
              <div className="pop-title">Rome, Italy</div></div> */}
          </div>
        </div >
      )
    }
    else if (query.length > 0 && results.length === 0) {
      return (
        <div className="suggestions-box-searched">
          <div id="results-container full-topbar">
            {suggestionOptions.map(suggest => (
              <p className="suggestion" onClick={() => suggestionClick(suggest)}>{suggest}</p>
            ))}
          </div>
          <h3 className="popular-h">Popular Destinations</h3>
          <div className="all-imgs">
            <div className="img-container">
              <img className="img-sugg" src={'./images/NYCSquare.jpeg'} onClick={() => destinationClick("New York, NY")}  ></img>
              <div className="title-container">
                <div className="sugg-title">New York, NY</div>
              </div>
            </div>
            <div className="img-container">
              <img className="img-sugg" src={'./images/FranceSquare.jpeg'} onClick={() => destinationClick("Paris, France")}  ></img>
              <div className="title-container">
                <div className="sugg-title">Paris, France</div>
              </div>
            </div>
            <div className="img-container">
              <img className="img-sugg" src={'./images/TokyoSquare.jpeg'} onClick={() => destinationClick("Tokyo, Japan")}  ></img>
              <div className="title-container">
                <div className="sugg-title">Tokyo, Japan</div>
              </div>
            </div>
            <div className="img-container">
              <img className="img-sugg" src={'./images/RomeSquare.jpeg'} onClick={() => destinationClick("Rome, Italy")}  ></img>
              <div className="title-container">
                <div className="sugg-title">Rome, Italy</div>
              </div>
            </div>
          </div>
        </div>
      )
    } else if (results.length > 0) {
      return (
        <div className="suggestions-box-searched">
          <div id="results-container full-topbar">
            {suggestionOptions.map(suggest => (
              <p className="suggestion" onClick={() => suggestionClick(suggest)}>{suggest} </p>
            ))}
            {/* <div className="trending-searched">
                {trending.map(trend => (
                <span className="trend">{trend}</span>
              ))}
            </div> */}
          </div>
          <div className="popular-products">
            <h3 className="popular-h">Explore {location}</h3>
            <div className="popular" onClick={destinationClick} name="New York" ><img className="result-img" src={'./images/NYCSquare.jpeg'}></img>
              <div className="pop-title">New York, NY</div></div>
            <div className="popular" onClick={destinationClick} name="Paris" ><img className="result-img" src={'./images/FranceSquare.jpeg'}></img>
              <div className="pop-title">Paris, France</div></div>
            <div className="popular" onClick={destinationClick} name="Tokyo" ><img className="result-img" src={'./images/TokyoSquare.jpeg'}></img>
              <div className="pop-title">Tokyo, Japan</div></div>
            <div className="popular" onClick={destinationClick} name="Tokyo" ><img className="result-img" src={'./images/RomeSquare.jpeg'}></img>
              <div className="pop-title">Rome, Italy</div></div>
          </div>
        </div>
      )
    } else {
      return null;
    }
  }
}
