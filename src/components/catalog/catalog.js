import React, {Component} from 'react';

import CatalogGenre from './catalogGenre';
import ImgAndTable from './imgAndTable';
import ImgGallery from './imgGallery';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';




class Catalog extends Component {




state = {
    // jaber: this.props.location.pathname,
    //
    // catalogData:this.props.productData,

    subLinkClass: 1

};

    isActive = index => {
        return this.state.subLinkClass === index;
    };
    setActiveTab = index => {
        this.setState({ subLinkClass:index });
    };
    componentWillMount (){
    let rightIndex = this.props.location.pathname.charAt(1);

        this.setState({
            // CatSpec: this.props.productData[this.state.subLinkClass]
            prodData: this.props.mainOfMain[rightIndex],
            ProdSpec: this.props.mainOfMain[rightIndex][1]
        });

    };

    subGenreView = chosen => {

        this.setState({

            ProdSpec: this.state.prodData[chosen]
        });



    };




render(){


      let galleryType = this.state.ProdSpec.genreEn !== 'kafpoosh'?

        <ImgAndTable key={this.state.ProdSpec.genreId} img={this.state.ProdSpec.img}
                                     imageAlt={this.state.ProdSpec.type}
                                     tableSizes={this.state.ProdSpec.sizes}
          />
          :

          <ImgGallery key={this.state.ProdSpec.genreId} passData={this.state.ProdSpec.sizes}/>;



    return (
        <div className="container main">

            <div id="genre" key={this.state.ProdSpec.genreFarsi}>
                <div><h1 className="sub-title">{this.state.prodData[0].genreFarsi}</h1></div>


            </div>

            <ul   className="genres">
                {this.state.prodData.map((arr,index)=>
                    <CatalogGenre
                        key={index}
                        productEn={arr.genreEn}
                        productSub={arr.type}
                        productId={arr.genreId}
                        correctGallery={()=> this.subGenreView(index)}
                        subtag={this.props.match.url}
                        isActive={ this.isActive(index) }
                        onActiveTab={()=> this.setActiveTab(index) }
                    />
                )}
            </ul>

            <div className="wrapper">
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                component="div">

                    {galleryType}
                </ReactCSSTransitionGroup>


            </div>


      </div>
    );
}

}
export default Catalog;
