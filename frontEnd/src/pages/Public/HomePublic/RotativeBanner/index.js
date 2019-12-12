import React, { Component } from "react";

import { BoxBanner, ImageBanner } from "./styles"

import img04 from "../../../../assets/bannerImages/01.jpg"
import img03 from "../../../../assets/bannerImages/02.jpg"
import img02 from "../../../../assets/bannerImages/03.jpg"
import img01 from "../../../../assets/bannerImages/04.jpg"

import { Gallery } from "react-gesture-gallery";

const images = [
    img01, img02, img03, img04
];

class BannerRotativo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            indexImage: 0
        }
    }

    setImageIndex(event) {
        this.setState({ indexImage: event });
    }

    loopTimeChange(event) {
        this.setState({ indexImage: event });
    }

    componentDidMount() {
        setInterval(() => {
            return this.state.indexImage === images.length - 1 ?
                this.setState({ indexImage: 0 }) : this.setState({ indexImage: this.state.indexImage + 1 })
        }, 4000);
    }

    render() {
        return (
            <div>
                <BoxBanner>
                    <Gallery index={this.state.indexImage}
                        onRequestChange={index => { this.setImageIndex(index) }}>
                        {images.map(image => (
                            <ImageBanner src={image} />
                        ))}
                    </Gallery>
                </BoxBanner>
            </div>
        );
    };
}

export default BannerRotativo;


