import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, Button } from 'reactstrap';
import { nexusItems, bunkPollItems, portfolioDjangoItems, dataAnalysisItems, sureFitItems, covid19Items } from './ImagesArray.js'
import './Projects.css';
import Footer from './Footer.js';



export default class IndividualProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndexNexus: 0,
      activeIndexBunkPoll: 0,
      activeIndexDataAnalysis: 0,
      activeIndexPortfolioDjango: 0,
      activeIndexSureFit: 0,
      activeIndexCovid: 0
    };
    this.nextNexus = this.nextNexus.bind(this);
    this.previousNexus = this.previousNexus.bind(this);
    this.nextBunkPoll = this.nextBunkPoll.bind(this);
    this.previousBunkPoll = this.previousBunkPoll.bind(this);
    this.nextDataAnalysis = this.nextDataAnalysis.bind(this);
    this.previousDataAnalysis = this.previousDataAnalysis.bind(this);
    this.nextPortfolioDjango = this.nextPortfolioDjango.bind(this);
    this.previousPortfolioDjango = this.previousPortfolioDjango.bind(this);
    this.nextSureFit = this.nextSureFit.bind(this);
    this.previousSureFit = this.previousSureFit.bind(this);

    this.goToNexusIndex = this.goToNexusIndex.bind(this);
    this.goToBunkPollIndex = this.goToBunkPollIndex.bind(this);
    this.goToDataAnalysisIndex = this.goToDataAnalysisIndex.bind(this);
    this.goToPortfolioDjangoIndex = this.goToPortfolioDjangoIndex.bind(this);
    this.goToSureFitIndex = this.goToSureFitIndex.bind(this);

    this.onExitingNexus = this.onExitingNexus.bind(this);
    this.onExitedNexus = this.onExitedNexus.bind(this);
    this.onExitingBunkPoll = this.onExitingBunkPoll.bind(this);
    this.onExitedBunkPoll = this.onExitedBunkPoll.bind(this);
    this.onExitingDataAnalysis = this.onExitingDataAnalysis.bind(this);
    this.onExitedDataAnalysis = this.onExitedDataAnalysis.bind(this);
    this.onExitingPortfolioDjango = this.onExitingPortfolioDjango.bind(this);
    this.onExitedPortfolioDjango = this.onExitedPortfolioDjango.bind(this);
    this.onExitingSureFit = this.onExitingSureFit.bind(this);
    this.onExitedSureFit = this.onExitedSureFit.bind(this);
  }

  onExitingNexus() {
    this.animating = true;
  }

  onExitedNexus() {
    this.animating = false;
  }

  onExitingBunkPoll() {
    this.animating = true;
  }

  onExitedBunkPoll() {
    this.animating = false;
  }

  onExitingDataAnalysis() {
    this.animating = true;
  }

  onExitedDataAnalysis() {
    this.animating = false;
  }

  onExitingPortfolioDjango() {
    this.animating = true;
  }

  onExitedPortfolioDjango() {
    this.animating = false;
  }

  onExitingSureFit() {
    this.animating = true;
  }

  onExitedSureFit() {
    this.animating = false;
  }

  nextNexus() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndexNexus === nexusItems.length - 1 ? 0 : this.state.activeIndexNexus + 1;
    this.setState({ activeIndexNexus: nextIndex });
  }

  previousNexus() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndexNexus === 0 ? nexusItems.length - 1 : this.state.activeIndexNexus - 1;
    this.setState({ activeIndexNexus: nextIndex });
  }
  goToNexusIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndexNexus: newIndex });
  }
  nextBunkPoll() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndexBunkPoll === bunkPollItems.length - 1 ? 0 : this.state.activeIndexBunkPoll + 1;
    this.setState({ activeIndexBunkPoll: nextIndex });
  }

  previousBunkPoll() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndexBunkPoll === 0 ? bunkPollItems.length - 1 : this.state.activeIndexBunkPoll - 1;
    this.setState({ activeIndexBunkPoll: nextIndex });
  }
  goToBunkPollIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndexBunkPoll: newIndex });
  }

  nextDataAnalysis() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndexDataAnalysis === dataAnalysisItems.length - 1 ? 0 : this.state.activeIndexDataAnalysis + 1;
    this.setState({ activeIndexDataAnalysis: nextIndex });
  }

  previousDataAnalysis() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndexDataAnalysis === 0 ? dataAnalysisItems.length - 1 : this.state.activeIndexDataAnalysis - 1;
    this.setState({ activeIndexDataAnalysis: nextIndex });
  }
  goToDataAnalysisIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndexDataAnalysis: newIndex });
  }

  nextPortfolioDjango() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndexPortfolioDjango === portfolioDjangoItems.length - 1 ? 0 : this.state.activeIndexPortfolioDjango + 1;
    this.setState({ activeIndexPortfolioDjango: nextIndex });
  }

  previousPortfolioDjango() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndexPortfolioDjango === 0 ? portfolioDjangoItems.length - 1 : this.state.activeIndexPortfolioDjango - 1;
    this.setState({ activeIndexPortfolioDjango: nextIndex });
  }
  goToPortfolioDjangoIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndexPortfolioDjango: newIndex });
  }

  nextSureFit() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndexSureFit === sureFitItems.length - 1 ? 0 : this.state.activeIndexSureFit + 1;
    this.setState({ activeIndexSureFit: nextIndex });
  }

  previousSureFit() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndexSureFit === 0 ? sureFitItems.length - 1 : this.state.activeIndexSureFit - 1;
    this.setState({ activeIndexSureFit: nextIndex });
  }
  goToSureFitIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndexSureFit: newIndex });
  }
  render() {

    const nexusSlides = nexusItems.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExitingNexus}
          onExited={this.onExitedNexus}
          key={item.src}
        >
          <img src={item.src} />
        </CarouselItem>
      );
    });

    const bunkPollSlides = bunkPollItems.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExitingBunkPoll}
          onExited={this.onExitedBunkPoll}
          key={item.src}
        >
          <img src={item.src} />
        </CarouselItem>
      );
    });

    const portfolioDjangoSlides = portfolioDjangoItems.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExitingPortfolioDjango}
          onExited={this.onExitedPortfolioDjango}
          key={item.src}
        >
          <img className="django" src={item.src} />
        </CarouselItem>
      );
    });

    const dataAnalysisSlides = dataAnalysisItems.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExitingDataAnalysis}
          onExited={this.onExitedDataAnalysis}
          key={item.src}
        >
          <img className="data" src={item.src} />
        </CarouselItem>
      );
    });
    const sureFitSlides = sureFitItems.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExitingSureFit}
          onExited={this.onExitedSureFit}
          key={item.src}
        >
          <img className="data" src={item.src} />
        </CarouselItem>
      );
    });
    const covidSlides = covid19Items.map((item) => {
      return (
        <CarouselItem
          // onExiting={this.onExitingSureFit}
          // onExited={this.onExitedSureFit}
          key={item.src}
        >
          <img className="data" src={item.src} />
        </CarouselItem>
      );
    });
    if (this.props.match.params.id === 'nexus') {
      return (
        <div className="container">
          <h1 style={{ textAlign: 'center', paddingTop: 15 }}>Nexus</h1>
          {/* <p>Aliquam ut maximus libero, nec posuere libero. Nulla cursus quam tellus, et finibus arcu luctus ac. I</p> */}
          <div className="m">
            <Carousel
              activeIndex={this.state.activeIndexNexus}
              next={this.nextNexus}
              previous={this.previousNexus}>
              <CarouselIndicators
                items={nexusItems} activeIndex={this.state.activeIndexNexus} onClickHandler={this.goToNexusIndex} />
              {nexusSlides}
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previousNexus} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={this.nextNexus} />
            </Carousel>
            {/* <h3>ID: {this.props.match.params.id}</h3> */}
            <div>
              <div style={{ textAlign: 'center', marginBottom: 25, paddingTop: 20 }}>
                <div className="stackUsed"><p style={{ margin: 'auto' }}>JAVASCRIPT</p></div>
                <div className="stackUsed"><p style={{ margin: 'auto' }}>REACT NATIVE</p></div>
                <div className="stackUsed"><p style={{ margin: 'auto' }}>REST API</p></div>
                <div className="stackUsed"><p style={{ margin: 'auto' }}>NATIVE BASE</p></div>
                <div className="stackUsed"><p style={{ margin: 'auto' }}>PHP</p></div>
                <div className="stackUsed"><p style={{ margin: 'auto' }}>MYSQL</p></div>
              </div>
              <div className="description">
                <p style={{ paddingLeft: 10 }}>Nexus is a cloud based cross platform app which helps you to organize events
                effectively in your college. It also highlights interest of an individual for a particulart event.</p>
                <p style={{ paddingLeft: 10 }}>
                  Consider a scenario where you want to organize a guest lecture or seminar or any event in your college.
                  Rather than going from class to class to inform student about your event.
                  What if there is an app where you can post event like this. So that you dont have to go through all those
                  hectic tasks.
                </p>
                <p style={{ paddingLeft: 10 }}>Nexus does exactly that and more than that.</p>
                <p style={{ paddingLeft: 10 }}>
                  So after posting your event.This app organizes your event into specified category for fast look aheads.
                  And Other students who are viewing these events can highlights there interests to show if they are interested
                  or not in that particular event.
                </p>
                <p style={{ paddingLeft: 10 }}>So basically this is the whole idea behind this app.</p>
              </div>
              <div style={{ textAlign: 'center', marginBottom: 10 }}>
                <Button color="success" onClick={() => {window.open('https://github.com/varun1907/Nexus','_blank')}} size="lg">Github Repository</Button>
              </div>
            </div>
          </div>
          <div className="divStyle" style={{ marginBottom: 30 }}>
            <Footer color="#EF2F4F" />
          </div>
        </div>
      );
    } else if (this.props.match.params.id === 'bunkPoll') {
      return (
        <div className="container">
          <h1 style={{ textAlign: 'center', paddingTop: 15 }}>BunkPoll</h1>
          {/* <p>Aliquam ut maximus libero, nec posuere libero. Nulla cursus quam tellus, et finibus arcu luctus ac. I</p> */}
          <div className="m">
            <Carousel
              activeIndex={this.state.activeIndexBunkPoll}
              next={this.nextBunkPoll}
              previous={this.previousBunkPoll}
            >
              <CarouselIndicators items={bunkPollItems} activeIndex={this.state.activeIndexBunkPoll} onClickHandler={this.goToBunkPollIndex} />
              {bunkPollSlides}
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previousBunkPoll} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={this.nextBunkPoll} />
            </Carousel>
            <div>
              <div style={{ textAlign: 'center', marginBottom: 25, paddingTop: 20 }}>
                <div className="stackUsed"><p style={{ margin: 'auto' }}>JAVA</p></div>
                <div className="stackUsed"><p style={{ margin: 'auto' }}>MONGO DB</p></div>
              </div>
              <div className="description">
                <p style={{ paddingLeft: 10 }}>This app was the first app that I build when I got into this whole mobile app development.
                Well,this app dosen't do much.
                It just implements the connection of an android app to an external database.
                This app was just kind of an experiment so as to learn how these apps are made.
          </p>
              </div>
              <div style={{ textAlign: 'center', marginBottom: 10 }}>
                <Button color="success" onClick={() => {window.open('https://github.com/varun1907/Bunk-Poll','_blank')}} size="lg">Github Repository</Button>
              </div>
            </div>
          </div>
          <div className="divStyle" style={{ marginBottom: 30 }}>
            <Footer color="#EF2F4F" />
          </div>
        </div>

      );
    } else if (this.props.match.params.id === 'dataAnalysis') {
      return (
        <div className="container">
          <h2 style={{ textAlign: 'center', paddingTop: 15 }}>FIFA Data Analysis</h2>
          {/* <p>Aliquam ut maximus libero, nec posuere libero. Nulla cursus quam tellus, et finibus arcu luctus ac. I</p> */}
          <div className="m">
            <Carousel className="data"
              activeIndex={this.state.activeIndexDataAnalysis}
              next={this.nextDataAnalysis}
              previous={this.previousDataAnalysis}
            >
              <CarouselIndicators items={dataAnalysisItems} activeIndex={this.state.activeIndexDataAnalysis} onClickHandler={this.goToDataAnalysisIndex} />
              {dataAnalysisSlides}
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previousDataAnalysis} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={this.nextDataAnalysis} />
            </Carousel>
            <div>
              <div style={{ textAlign: 'center', marginBottom: 25, paddingTop: 20 }}>
                <div className="stackUsed"><p style={{ margin: 'auto' }}>PYTHON</p></div>
              </div>
              <div className="description">

                <p style={{ paddingLeft: 10 }}>In this project I performed Data Analysis on Dataset of fifa 2017 players taken from kaggle.
                Data was in csv format containing 50+ attributes of 17000+ players.
                Total of 7 analysis has been performed on the dataset.Following are:-
            <ul>
                    <li>Analytics on the best goal scores(groupedBy according to National Team) </li>
                    <li>Analytics on on-field behaviours of the players(groupedBy according to National Team)</li>
                    <li>Analytics of the best attributes of the players of a particular continents (for example say European
                players are better dribblers, African players have better stamina etc) </li>
                    <li>Analytics on what attributes the different club prefers </li>
                    <li>Analytics on contract period(Analysis on individual Player)</li>
                    <li>Analytics on which country has best goalkeeper </li>
                    <li>Analytics on Preffered_Foot(According To National Team)</li>
                  </ul>
                </p>
              </div>
              <div style={{ textAlign: 'center', marginBottom: 10 }}>
                <Button color="success" onClick={() => {window.open('https://github.com/varun1907/kaggleFifaDataAnalysis','_blank')}} size="lg">Github Repository</Button>
              </div>
            </div>
          </div>
          <div className="divStyle" style={{ marginBottom: 30 }}>
            <Footer color="#EF2F4F" />
          </div>
        </div>

      );
    } else if (this.props.match.params.id === 'portfolio') {
      return (
        <div className="container">
          <h1 style={{ textAlign: 'center', paddingTop: 15 }}>Portfolio</h1>
          {/* <p>Aliquam ut maximus libero, nec posuere libero. Nulla cursus quam tellus, et finibus arcu luctus ac. I</p> */}
          <div className="m">
            <Carousel className="django"
              activeIndex={this.state.activeIndexPortfolioDjango}
              next={this.nextPortfolioDjango}
              previous={this.previousPortfolioDjango}
            >
              <CarouselIndicators items={portfolioDjangoItems} activeIndex={this.state.activeIndexPortfolioDjango} onClickHandler={this.goToPortfolioDjangoIndex} />
              {portfolioDjangoSlides}
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previousPortfolioDjango} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={this.nextPortfolioDjango} />
            </Carousel>
            <div>
              <div style={{ textAlign: 'center', marginBottom: 25, paddingTop: 20 }}>
                <div className="stackUsed"><p style={{ margin: 'auto' }}>Python</p></div>
                <div className="stackUsed"><p style={{ margin: 'auto' }}>DJANGO</p></div>
                <div className="stackUsed"><p style={{ margin: 'auto' }}>SQLITE</p></div>
              </div>
              <div className="description">
                <p style={{ paddingLeft: 10 }}>This is yet another portfolio website.
                Well you all know what a portfolio website really is.
                So there is not really much to explain about it.
                But Still,
                This was created using django and python so that I could get to know the in and out of Django.
        </p>
              </div>
              <div style={{ textAlign: 'center', marginBottom: 10 }}>
                <Button color="success" onClick={() => {window.open('https://github.com/varun1907/aboutmeWebsite','_blank')}} size="lg">Github Repository</Button>
              </div>
            </div>
          </div>
          <div className="divStyle" style={{ marginBottom: 30 }}>
            <Footer color="#EF2F4F" />
          </div>
        </div>
      );
    } else if (this.props.match.params.id === 'projectXApp') {
      return (
        <div className="container">
          <h1 style={{ textAlign: 'center', paddingTop: 15 }}>ProjectXApp</h1>
          <div>
            <div style={{ textAlign: 'center', marginBottom: 25, paddingTop: 20 }}>
              <div className="stackUsed"><p style={{ margin: 'auto' }}>REACT NATIVE</p></div>
              <div className="stackUsed"><p style={{ margin: 'auto' }}>REDUX</p></div>
              <div className="stackUsed"><p style={{ margin: 'auto' }}>NODE</p></div>
              <div className="stackUsed"><p style={{ margin: 'auto' }}>MONGODB</p></div>
              <div className="stackUsed"><p style={{ margin: 'auto' }}>EXPRESS</p></div>
              <div className="stackUsed"><p style={{ margin: 'auto' }}>REST API</p></div>
              <div className="stackUsed"><p style={{ margin: 'auto' }}>SQLITE</p></div>
              <div className="stackUsed"><p style={{ margin: 'auto' }}>REACT NATIVE ELEMENTS</p></div>


            </div>
            <div className="divStyle">
              <h1 style={{ paddingTop: 15, paddingBottom: 15 }}>Coming Soon...!!</h1>
            </div>

          </div>
          <div className="divStyle" style={{ marginBottom: 30 }}>
            <Footer color="#EF2F4F" />
          </div>
        </div>
      );
    } else if (this.props.match.params.id === 'surefit') {
      return (
        <div className="container">
          <h2 style={{ textAlign: 'center', paddingTop: 15 }}>SureFit</h2>
          {/* <p>Aliquam ut maximus libero, nec posuere libero. Nulla cursus quam tellus, et finibus arcu luctus ac. I</p> */}
          <div className="m">
            <Carousel className="data"
              activeIndex={this.state.activeIndexSureFit}
              next={this.nextSureFit}
              previous={this.previousSureFit}
            >
              <CarouselIndicators items={sureFitItems} activeIndex={this.state.activeIndexSureFit} onClickHandler={this.goToSureFitIndex} />
              {sureFitSlides}
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previousSureFit} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={this.nextSureFit} />
            </Carousel>
            <div>
              <div style={{ textAlign: 'center', marginBottom: 25, paddingTop: 20 }}>
                <div className="stackUsed"><p style={{ margin: 'auto' }}>REACT JS</p></div>
                <div className="stackUsed"><p style={{ margin: 'auto' }}>REDUX</p></div>
                <div className="stackUsed"><p style={{ margin: 'auto' }}>TENSORFLOW JS</p></div>
                <div className="stackUsed"><p style={{ margin: 'auto' }}>ML5 JS</p></div>
                <div className="stackUsed"><p style={{ margin: 'auto' }}>CSS</p></div>

              </div>
              <div className="description">

                <p style={{ paddingLeft: 10 }}>
                  The project uses Tensorflow.js Tensorflow at its heart for classifying the food items
                  The classified image item is then fead to a nutrinix	API that generates per unit serve nutrient content for the food.
                  Users are provided to ways to get a nutrient content.
                  By clicking an image of the food item
                  By typing the name of that food item.
                  Users can also type in phrases like today I eat potatoes and rice in the text based system.
                  The nutrinix	API uses NLP to generated valid food names from vague/general phrase and returs result for all the matched food items
          </p>
              </div>
              <div style={{ textAlign: 'center', marginBottom: 10 }}>
                <Button color="success" onClick={() => {window.open('https://github.com/varun1907/surefit','_blank')}}  size="lg">Github Repository</Button>
              </div>
            </div>
          </div>
          <div className="divStyle" style={{ marginBottom: 30 }}>
            <Footer color="#EF2F4F" />
          </div>
        </div>

      );
    }else if (this.props.match.params.id === 'covid19tracker') {
      return (
        <div className="container">
          <h2 style={{ textAlign: 'center', paddingTop: 15 }}>Covid19Tracker</h2>
          <div className="m">
            <Carousel className="data"
              activeIndex={this.state.activeIndexCovid}
              // next={this.nextSureFit}
              // previous={this.previousSureFit}
            >
              <CarouselIndicators 
                items={covid19Items} 
                activeIndex={this.state.activeIndexCovid} 
                // onClickHandler={this.goToSureFitIndex} 
              />
              {covidSlides}
              {/* <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previousSureFit} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={this.nextSureFit} /> */}
            </Carousel>
            <div>
              <div style={{ textAlign: 'center', marginBottom: 25, paddingTop: 20 }}>
                <div className="stackUsed"><p style={{ margin: 'auto' }}>REACT JS</p></div>
                <div className="stackUsed"><p style={{ margin: 'auto' }}>Material UI</p></div>
                <div className="stackUsed"><p style={{ margin: 'auto' }}>Firebase</p></div>
                <div className="stackUsed"><p style={{ margin: 'auto' }}>Chart js</p></div>
                <div className="stackUsed"><p style={{ margin: 'auto' }}>Leaflet</p></div>
                <div className="stackUsed"><p style={{ margin: 'auto' }}>CSS</p></div>

              </div>
              <div className="description">

                <p style={{ paddingLeft: 10 }}>
                  This project is build using react hooks, functional components, material-ui and leaflet for maps.
                  It shows the visuals of covid19 pandemic all around the world.You can select any country and its data will be shown in form of total cases, deaths and recovery. This data is used from a thrid party public API from disease.sh.It also shows the daily increament in cases in the form of graph.Do checkout it on <span><a href="https://covid19tracker-188c1.web.app/" style={{color:'#007bff'}} target="_blank">https://covid19tracker-188c1.web.app/</a></span>
          </p>
              </div>
              <div style={{ textAlign: 'center', marginBottom: 10 }}>
                <Button color="success" onClick={() => {window.open('https://github.com/varun1907/covid19tracker','_blank')}} size="lg">Github Repository</Button>
              </div>
            </div>
          </div>
          <div className="divStyle" style={{ marginBottom: 30 }}>
            <Footer color="#EF2F4F" />
          </div>
        </div>

      );
    }
  }
}
