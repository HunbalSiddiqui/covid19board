import React, { Component } from 'react'
import './Home.css'
import p1 from '../imgs/p1.jpg'

export class Home extends Component {
    state={
        stats:null
      }
    
      componentDidMount() {
        this.stats()
      }
      stats=async()=>{
      var fetchedData = await fetch("https://covid-19-data.p.rapidapi.com/country?format=json&name=Pakistan", {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
          "x-rapidapi-key": "87db7fa801msh4aec195fb96d859p1db4ccjsn73bda7dad3bb"
        }
          })
          fetchedData.json()
          .then((data)=>
          {
            data.forEach(element => {
              this.setState((prevState)=>({
                stats:element
              }))
            });
          })
      
      }
      render() {
        var {stats} = this.state
        return (
          <div>
            {
              stats ?
                <div className="home_cont">
                    <div className="header flex"><h1>Dial 1166 health helpline</h1></div>
                    <div className="nav flex-col">
                        <h1>SEE REALTIME PAKISTAN COVID-19 SITUATION</h1>
                        <h3>The coronavirus, or COVID-19, is inciting panic for a number of reasons. It's a new virus, meaning no one has immunity, and there is no vaccine. Its novelty means that scientists aren't sure yet how it behaves they have little history to go on.</h3>
                        <p className='red'>*Dashboard numbers are updated as soon as authenticated test results are received from the laboratories.</p>
                    </div>
                    <div className="data flex">
                        <h1 className='flex black'>Confirmed : {stats.confirmed}</h1>
                        <h1 className='flex green'>Recovered : {stats.recovered}</h1>
                        <h1 className='flex orange'>Critical : {stats.critical}</h1>
                        <h1 className='flex red'>Deaths : {stats.deaths}</h1>
                    </div>
                    <div className="prevention">
                        {/* <img className='prev_box' src={p1} alt=""/> */}
                    </div>
                    <div className="footer">
                        <div className="footer1 flex">
                            <h3>For more info visit <a href="http://covid.gov.pk/">http://covid.gov.pk/</a> </h3>
                        </div>
                        <div className="footer2">
                            <h3>For Source Code Visit <a href="https://github.com/HunbalSiddiqui" target="_blank"><i class="fab fa-github"></i></a></h3>
                            <h3>@Developed By M.Hunbal Siddiqui</h3>
                        </div>
                    </div>
                </div>
              :
              <div>
              <h1>no no no</h1>
              </div>
    
            }
          </div>
        )
      }
}

export default Home
