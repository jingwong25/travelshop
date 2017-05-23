import React from 'react';
import SampleImage from '../images/sample-product.jpg';

export default class Product extends React.Component {
    render() {
        return (
             <div class="col-sm-6 col-md-4">
                    <div class="thumbnail">
                        <img src={SampleImage} />
                        <div class="caption">
                            <h3>Thumbnail label</h3>
                            <p>Product Descriptions</p>
                            <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
                        </div>
                    </div>
                </div>
        );
    }
}