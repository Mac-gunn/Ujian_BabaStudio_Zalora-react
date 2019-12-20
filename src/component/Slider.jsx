import React, { Component } from "react";


class Slider extends Component{
    render(){
        return(
          <div class="wrapper_slider">
            <div className="container slide">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <a href="#">
                <img class="d-block w-100" src={require('../images/slider.gif')} alt="First slide" width="400px"/>
                </a>
              </div>
              <div class="carousel-item">
                <a href="#">
                <img class="d-block w-100" src={require('../images/slider.gif')} alt="Second slide"/>
                </a>
              </div>
              <div class="carousel-item">
                <a href="#">
                <img class="d-block w-100" src={require('../images/slider.gif')} alt="Third slide"/>
                </a>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          </div>
          </div>
        
        );
    }
}

export default Slider;