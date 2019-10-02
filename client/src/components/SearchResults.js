import React, { Component } from 'react';

const popular = [
  {
    title: 'Slouched Trousers',
    image1: 'https://s7d5.scene7.com/is/image/Anthropologie/4123382010008_001_b?$a15-pdp-detail-shot$&hei=900&qlt=80&fit=constrain'
  },
  {
    title: 'Pilcro Patchwork Slim Boyfriend Jeans',
    image1: 'https://s7d5.scene7.com/is/image/Anthropologie/4122382010047_092_b?$a15-pdp-detail-shot$&hei=900&qlt=80&fit=constrain'
  },
  {
    title: 'Makura Faux Fur Pillow',
    image1: 'https://s7d5.scene7.com/is/image/Anthropologie/45455790AA_011_b10?$a15-pdp-detail-shot$&hei=900&qlt=80&fit=constrain',
    image2: 'https://s7d5.scene7.com/is/image/Anthropologie/45455790AA_011_b?$a15-pdp-detail-shot$&hei=900&qlt=80&fit=constrain'
  }
]

export default class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image1: false,
      image2: false,
      image3: false,
      popular1: false,
      popular2: false,
      popular3: false,
    }
    this.mouseOutImage = this.mouseOutImage.bind(this);
    this.mouseOverImage = this.mouseOverImage.bind(this);
  }

  mouseOutImage() {
    this.setState({ [event.target.name]: false });
  }

  mouseOverImage() {
    this.setState({ [event.target.name]: true });
  }

  render() {
    let { suggestionOptions, results, query, searchClicked, trending } = this.props
    if (!searchClicked) {
      return null;
    }
    if (searchClicked && query.length === 0) {
      return (
        <div className="suggestions-box">
          <div className="trending">
            <h3 className="trend-h">Trending</h3>
            <span className="trend"><img className="tiny" src={'./images/TinySearch.png'}></img>kimono</span>
            <span className="trend"><img className="tiny" src={'./images/TinySearch.png'}></img>planner</span>
            <span className="trend"><img className="tiny" src={'./images/TinySearch.png'}></img>jumpsuit</span>
            <span className="trend"><img className="tiny" src={'./images/TinySearch.png'}></img>candle</span>
            <span className="trend"><img className="tiny" src={'./images/TinySearch.png'}></img>shower curtain</span>
          </div>
          <div className="popular-products">
            <h3 className="popular-h">Popular Destinations</h3>
            <div className="popular">
              {this.state.popular1 ? <img className="result-img" name="popular1" src={'./images/popular4.webp'} onMouseOut={this.mouseOutImage} onMouseOver={this.mouseOverImage}></img> : <img className="result-img" name="popular1" src={'./images/popular3.webp'} onMouseOut={this.mouseOutImage} onMouseOver={this.mouseOverImage}></img>}
              <div className="title"></div>New York, NY</div>
            <div className="popular">
              {this.state.popular2 ? <img className="result-img" name="popular2" src={'./images/popular2.webp'} onMouseOut={this.mouseOutImage} onMouseOver={this.mouseOverImage}></img> : <img className="result-img" name="popular2" src={'./images/popular1.webp'} onMouseOut={this.mouseOutImage} onMouseOver={this.mouseOverImage}></img>}
              <div className="title">Paris, France</div></div>
            <div className="popular"><img className="result-img" src={'./images/popular5.webp'}></img>
              <div className="title">Tokyo, Japan</div></div>
          </div>
        </div>
      )
    }
    if (query.length > 0 && results.length > 0) {
      return (
        <div className="suggestions-box-searched">
          <div id="results-container">
            {suggestionOptions.map(suggest => (
              <p className="suggestion">{suggest}</p>
            ))}
            <div className="trending-searched">
              <h3 className="trend-h">Trending</h3>
              {trending.map(trend => (
                <span className="trend"><img className="tiny-searched" src={'./images/TinySearch.png'}></img>{trend}</span>
              ))}
            </div>
          </div>
          <div className="popular-products">
            <h3 className="popular-h">Search Results: {query}</h3>
            <div className="popular">
              {this.state.image1 ? <img className="result-img" name="image1" src={results[0].image2} onMouseOut={this.mouseOutImage} onMouseOver={this.mouseOverImage}></img> 
              : <img className="result-img" name="image1" src={results[0].image1} onMouseOut={this.mouseOutImage} onMouseOver={this.mouseOverImage}></img>}
              <div className="title"> {results[0].title}</div></div>
            <div className="popular">
              {this.state.image2 ? <img className="result-img" name="image2" src={results[1].image2} onMouseOut={this.mouseOutImage} onMouseOver={this.mouseOverImage}></img> : <img className="result-img" name="image2" src={results[1].image1} onMouseOut={this.mouseOutImage} onMouseOver={this.mouseOverImage}></img>}
              <div className="title"> {results[1].title}</div></div>
            <div className="popular">
              {this.state.image3 ? <img className="result-img" name="image3" src={results[2].image2} onMouseOut={this.mouseOutImage} onMouseOver={this.mouseOverImage}></img> : <img className="result-img" name="image3" src={results[2].image1} onMouseOut={this.mouseOutImage} onMouseOver={this.mouseOverImage}></img>}
              <div className="title"> {results[2].title}</div></div>
          </div>
        </div>
      )
    } else {
      return null;
    }
  }
}
