import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Scoll from './Scoll'


import PropTypes from 'prop-types'

import InfiniteScroll from "react-infinite-scroll-component";
import {
    BrowserRouter as Router,
    Routes,
    Route,
  
  } from "react-router-dom";




export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: '6',


    }
    static propsProps = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: this.prototype.string

    }
    articles = [
        {
            "source": {
                "id": null,
                "name": "Krebs on Security"
            },
            "author": null,
            "title": "Your Phone May Soon Replace Many of Your Passwords – Krebs on Security - Krebs on Security",
            "description": "Apple, Google and Microsoft announced this week they will soon support an approach to authentication that avoids passwords altogether, and instead requires users to merely unlock their smartphones to sign in to websites or online services. Experts say the cha…",
            "url": "https://krebsonsecurity.com/2022/05/your-phone-may-soon-replace-many-of-your-passwords/",
            "urlToImage": "https://krebsonsecurity.com/wp-content/uploads/2022/05/googlefidoeg.png",
            "publishedAt": "2022-05-07T16:28:11Z",
            "content": "Apple, Google and Microsoft announced this week they will soon support an approach to authentication that avoids passwords altogether, and instead requires users to merely unlock their smartphones to… [+6131 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hollywood Reporter"
            },
            "author": "Pamela McClintock",
            "title": "Box Office: ‘Doctor Strange 2’ Flies to Sensational $90M Friday - Hollywood Reporter",
            "description": "Logo text Game on. Marvel Studios and Disney’s Doctor Strange in the Multiverse of Madness is on course to score $185 million to $200 million in its domestic debut and land one of the biggest openings of all time domestically after grossing an enormous $90 mi…",
            "url": "https://www.hollywoodreporter.com/movies/movie-news/doctor-strange-sequel-box-office-opening-1235141845/",
            "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2022/04/SSD1080_comp_v198.1074-H-2022.jpg?w=1024",
            "publishedAt": "2022-05-07T15:33:45Z",
            "content": "Game on.\r\nMarvel Studios and Disney’s Doctor Strange in the Multiverse of Madness is on course to score $185 million to $200 million in its domestic debut and land one of the biggest openings of all … [+3316 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Taliban order Afghan women to cover faces again - Reuters.com",
            "description": "Afghanistan's Taliban government ordered women on Saturday to cover their faces in public, a return to a signature policy of their past hardline rule and an escalation of restrictions that are causing anger at home and abroad.",
            "url": "https://www.reuters.com/world/asia-pacific/taliban-announce-women-must-cover-faces-public-say-burqa-is-best-2022-05-07/",
            "urlToImage": "https://www.reuters.com/resizer/AcyoNPl0S_TxAQFQMdu7WGVpca0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PJDSRLF23VPDTB3ECRBTV3TJJM.jpg",
            "publishedAt": "2022-05-07T15:15:00Z",
            "content": "KABUL, May 7 (Reuters) - Afghanistan's Taliban government ordered women on Saturday to cover their faces in public, a return to a signature policy of their past hardline rule and an escalation of res… [+2122 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "North Korea fires likely submarine-launched ballistic missile, South Korea says - Reuters.com",
            "description": "North Korea fired a ballistic missile from a submarine on Saturday, South Korea said, an escalation just before the inauguration of a South Korean president who has vowed to take a hard line against the North and the visit of the U.S. president.",
            "url": "https://www.reuters.com/world/asia-pacific/nkorea-fires-unidentified-projectile-off-its-east-coast-skorea-military-2022-05-07/",
            "urlToImage": "https://www.reuters.com/resizer/tVYzoLRbOvO0ui_62OuVF13EqaI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/MUQDDNYB3FI5JD7WKSML4LTVFU.jpg",
            "publishedAt": "2022-05-07T15:06:00Z",
            "content": "SEOUL/TOKYO, May 7 (Reuters) - North Korea fired a ballistic missile from a submarine on Saturday, South Korea said, an escalation just before the inauguration of a South Korean president who has vow… [+4990 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Caitlin McFall",
            "title": "Ukraine says drone destroyed Russian landing ship near Snake Island - Fox News",
            "description": "Ukraine's defense ministry on Saturday claimed it had sunk a Russian Serna-class landing boat off of the now-famous Snake Island which has stood as a symbol of resistance since the beginning of the war.",
            "url": "https://www.foxnews.com/world/ukrainian-drone-destroyed-russian-landing-ship-snake-island",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/Ukrainian-Drone-Russian-Landing-Ship.jpg",
            "publishedAt": "2022-05-07T14:53:03Z",
            "content": "Ukraine's defense ministry on Saturday claimed it had sunk a Russian Serna-class landing boat off of the now-famous Snake Island which has stood as a symbol of resistance since the beginning of the w… [+2319 chars]"
        },
        {
            "source": {
                "id": "politico",
                "name": "Politico"
            },
            "author": null,
            "title": "What Ohio's GOP primary tells us about Trump in 2024 - POLITICO",
            "description": "The Senate contest provided important clues about the size and shape of a key group of voters.",
            "url": "https://www.politico.com/news/2022/05/07/ohio-gop-primary-trump-2024-00030807",
            "urlToImage": "https://static.politico.com/f1/cc/6d60181d4634be6c343e0fec441e/20220507-trumpvance-getty-773.jpg",
            "publishedAt": "2022-05-07T14:51:54Z",
            "content": "State Sen. Matt Dolan, a conservative who accused Trump of perpetuat[ing] lies about the outcome of the 2020 election yet declined to be characterized as a Never Trumper, managed to exceed expectatio… [+8196 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Beast"
            },
            "author": "Mathew Murphy",
            "title": "Fred Savage Fired From The Wonder Years Reboot After Misconduct Investigation - The Daily Beast",
            "description": "Reports allege Fred Savage exhibited inappropriate behavior and had verbal outbursts throughout production.",
            "url": "https://www.thedailybeast.com/fred-savage-fired-from-the-wonder-years-reboot-after-misconduct-investigation",
            "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1688,w_3000,x_0,y_78/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1651928386/GettyImages-1157647595_mkfly5",
            "publishedAt": "2022-05-07T14:40:00Z",
            "content": "Fred Savage has been fired from The Wonder Years reboot following an investigation into multiple complaints of misconduct in his role as executive producer and director.\r\nRecently, we were made aware… [+2164 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Jonathan Weisman",
            "title": "Republicans Recast Abortion Stance, Wary of Voter Backlash - The New York Times",
            "description": "While Democrats decry a draft opinion that would eliminate the constitutional right to an abortion, Republicans who worked decades for this moment have been largely silent.",
            "url": "https://www.nytimes.com/2022/05/06/us/politics/republicans-abortion.html",
            "urlToImage": "https://static01.nyt.com/images/2022/05/06/us/politics/06dc-abortion-gop-mcconnell/06dc-abortion-gop-mcconnell-facebookJumbo.jpg",
            "publishedAt": "2022-05-07T14:30:00Z",
            "content": "Republicans say their restraint on the issue makes sense. A near-total abortion ban has been in place in Texas for eight months, and seemingly no political price has been paid so far.\r\nState Represen… [+1682 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": null,
            "title": "Sinn Fein set for first win in Northern Ireland election - The Associated Press - en Español",
            "description": "BELFAST, Northern Ireland (AP) — Irish nationalist party Sinn Fein was widely expected to become the largest group in the Northern Ireland Assembly for the first time, giving it the right to the post of first minister in Belfast, as vote-counting in this week…",
            "url": "https://apnews.com/article/business-europe-ireland-northern-belfast-ab45c4ca47a3258d807b33449bff01c2",
            "urlToImage": "https://storage.googleapis.com/afs-prod/media/e2963ae39f78488baa7cbc8d49fe1b65/3000.jpeg",
            "publishedAt": "2022-05-07T14:08:53Z",
            "content": "BELFAST, Northern Ireland (AP) Irish nationalist party Sinn Fein was widely expected to become the largest group in the Northern Ireland Assembly for the first time, giving it the right to the post o… [+3919 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Christina Maxouris",
            "title": "Authorities made a key discovery in their search for the missing Alabama officer and inmate. It led to more questions - CNN",
            "description": "In their search for a missing former corrections official and an inmate facing murder charges, authorities announced a key discovery Friday: they located the car they previously believed the pair was traveling in.",
            "url": "https://www.cnn.com/2022/05/07/us/vicky-white-casey-white-alabama-manhunt-saturday/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220506213052-0506-casey-white-vicky-white-split.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2022-05-07T14:00:00Z",
            "content": "In their search for a missing former corrections official and an inmate facing murder charges, authorities announced a key discovery Friday: they located the car they previously believed the pair was… [+4690 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": null,
            "title": "2022 Kentucky Derby horses, contenders, odds, date: Expert who nailed 9 Derby-Oaks Doubles reveals picks - CBS Sports",
            "description": "The 148th Kentucky Derby from Churchill Downs takes place on Saturday, May 7 at 6:57 p.m. ET",
            "url": "https://www.cbssports.com/general/news/2022-kentucky-derby-horses-contenders-odds-date-expert-who-nailed-9-derby-oaks-doubles-reveals-picks/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/05/02/7c6a1c80-5457-4ff8-9c18-09ee843590f4/thumbnail/1200x675/754c1d9488569f39862204b15a0293e7/kentucky-derby-usatsi-5.jpg",
            "publishedAt": "2022-05-07T13:09:13Z",
            "content": "The Kentucky Derby is much more than just a horse race, as it also has a party-like atmosphere for those in attendance at Churchill Downs. No party would be complete without the finest of delicacies,… [+4146 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Kate Dore, CFP®",
            "title": "Worried about a recession? Here’s how to prepare your portfolio - CNBC",
            "description": "Eight in ten small business owners expect a recession this year, according to a CNBC survey. Here's how to prepare your portfolio.",
            "url": "https://www.cnbc.com/2022/05/07/worried-about-a-recession-heres-how-to-prepare-your-portfolio.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/106860783-1617025331583-gettyimages-1307065666-fil02113.jpeg?v=1617025388&w=1920&h=1080",
            "publishedAt": "2022-05-07T13:00:01Z",
            "content": "More from FA Playbook:\r\nHere's a look at other stories impacting the financial advisor business.\r\n\"We all understand that markets go through cycles and recession is part of the cycle that we may be f… [+4268 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MMA Fighting"
            },
            "author": "Guilherme Cruz",
            "title": "Charles Oliveira not ‘frustrated’ over UFC 274 weight miss: ‘I had already made weight, so your head isn’t th… - MMA Fighting",
            "description": "Charles Oliveira won’t be the UFC champion on Sunday even with a win over Justin Gaethje at UFC 274.",
            "url": "https://www.mmafighting.com/2022/5/7/23061137/charles-oliveira-not-frustrated-ufc-274-weight-miss-already-made-weight-your-head-isnt-there-anymore",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/Ok8QWlBJqlPG2N0mxROPJ7TWpOk=/0x0:3660x1916/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23444417/1395806901.jpg",
            "publishedAt": "2022-05-07T12:30:00Z",
            "content": "Charles Oliveira is no longer the UFC lightweight champion, but vows to be as confident as ever going into his UFC 274 main event bout with Justin Gaethje. The UFC announced that the 155-pound title … [+3176 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Sam Meredith",
            "title": "Ukrainian forces pursue counteroffensive around Kharkiv; Russia rehearses 'Victory Day' parade - CNBC",
            "description": "The U.S.-based Institute for the Study of War says Ukrainian forces could soon free Kharkiv from the artillery range of Russian forces.",
            "url": "https://www.cnbc.com/2022/05/07/russia-ukraine-live-updates.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107057641-1651917773488-gettyimages-1240502128-AA_07052022_718121.jpeg?v=1651917809&w=1920&h=1080",
            "publishedAt": "2022-05-07T11:37:00Z",
            "content": "Pro-Russian forces said 50 more people were evacuated on Saturday from the besieged Azovstal steelworks in Mariupol, where scores of civilians have been trapped for weeks alongside Ukrainian fighters… [+949 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Timothy Nerozzi",
            "title": "Clarence Thomas references Roe v. Wade draft opinion leak, says Supreme Court can't be 'bullied' - Fox News",
            "description": "Supreme Court Justice Clarence Thomas dismissed the idea of pressuring the court for desirable outcomes at a judicial conference Friday.",
            "url": "https://www.foxnews.com/politics/clarence-thomas-roe-v-wade-draft-opinion-leak-supreme-court-cant-be-bullied",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/09/GettyImages-1282403966.jpg",
            "publishedAt": "2022-05-07T11:36:45Z",
            "content": "Supreme Court\r\n Justice Clarence Thomas dismissed the idea of pressuring the court for desirable outcomes at a judicial conference Friday.\r\nThomas spoke at the 11th Circuit judicial conference in Atl… [+1913 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "WLS-TV"
            },
            "author": "Maher Kawash",
            "title": "COVID rates Chicago: CDC, health experts urge caution for Mother's Day weekend gatherings as cases rise - WLS-TV",
            "description": "Anyone with COVID symptoms should stay home this Mother's Day weekend, the CDC and other health experts say.",
            "url": "https://abc7chicago.com/covid-rates-chicago-test-illinois-cases/11825683/",
            "urlToImage": "https://cdn.abcotvs.com/dip/images/11825712_050722-wls-kawash-covid-local-5a-vid.jpg?w=1600",
            "publishedAt": "2022-05-07T11:03:45Z",
            "content": "CHICAGO (WLS) -- The Centers for Disease Control and Prevention has said Chicago now falls in the medium transmission risk level just ahead of Mother's Day, warning experts of another possible surge.… [+3608 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Jackie Mader, The Hechinger Report",
            "title": "Taking away recess to punish kids doesn’t work, researchers say. But schools do it anyway. - Yahoo News",
            "description": "Taking away recess to discipline elementary school students doesn’t work. Experts say it’s time to stop.",
            "url": "https://news.yahoo.com/taking-away-recess-punish-kids-100111124.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/558Ka5TJmlFW7vZ.ni92Eg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02MDA-/https://s.yimg.com/uu/api/res/1.2/A0JTCY9cHBRXmWKOEtTAYw--~B/aD0xMjUwO3c9MjUwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/nbc_news_122/0fc0aec52c39cc8f77774558545f8f99",
            "publishedAt": "2022-05-07T10:01:11Z",
            "content": "This article about recess was produced by The Hechinger Report, a nonprofit, independent news organization focused on inequality and innovation in education. Sign up for Hechingers newsletter.\r\nIn Fl… [+14676 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "HuffPost"
            },
            "author": "Lee Moran",
            "title": "Sophie Turner Reveals Why She Shut Down Kendall Jenner At The Met Gala - HuffPost",
            "description": "“Why do I do this to myself?” the \"Game of Thrones\" alum joked to \"The Tonight Show\" host Jimmy Fallon.",
            "url": "https://www.huffpost.com/entry/sophie-turner-kendall-jenner-met-gala-2022_n_62763607e4b03ca83641dc4e",
            "urlToImage": "https://img.huffingtonpost.com/asset/62763bb62300009c2f13b4fb.jpeg?cache=nENK0bSNgy&ops=1778_1000",
            "publishedAt": "2022-05-07T09:36:12Z",
            "content": "Actor Sophie Turner revealed Friday that she shuts down fellow celebrities not because she doesnt like them, but because she likes them too much.\r\nIm really bad around celebrities. I cant quite fatho… [+820 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Dennis Overbye",
            "title": "Hear the Weird Sounds of a Black Hole Singing - The New York Times",
            "description": "As part of an effort to “sonify” the cosmos, researchers have converted the pressure waves from a black hole into an audible … something.",
            "url": "https://www.nytimes.com/2022/05/07/science/space/astronomy-black-hole-sound.html",
            "urlToImage": "https://static01.nyt.com/images/2022/05/06/autossell/00SCI-BLACKHOLE-SOUND-cover/00SCI-BLACKHOLE-SOUND-cover-facebookJumbo.jpg",
            "publishedAt": "2022-05-07T09:00:18Z",
            "content": "Yet another sonification project has been undertaken by a group led by Erin Kara, an astrophysicist at the Massachusetts Institute of Technology, as part of an effort to use light echoes from X-ray b… [+997 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Athletic"
            },
            "author": "Luke Brown",
            "title": "Chelsea: Todd Boehly consortium signs £4.25bn agreement to buy club - The Athletic",
            "description": "Chelsea have confirmed Todd Boehly’s consortium has agreed terms to buy the Premier League club from Roman Abramovich in a £4.25 billion takeover.Abramovich...",
            "url": "https://theathletic.com/news/chelsea-todd-boehly-consortium-signs-425bn-agreement-to-buy-club/ZRpOOUKhr3af/",
            "urlToImage": "https://cdn-media.theathletic.com/ZRpOOUKhr3af_ZRpOOUKhr3af_rBAI0kbbp3nq_original_1440x960.jpg",
            "publishedAt": "2022-05-07T07:33:01Z",
            "content": "Chelsea have confirmed Todd Boehlys consortium has agreed terms to buy the Premier League club from Roman Abramovich in a £4.25 billion takeover.\r\nAbramovich put the club up for sale in March and was… [+2085 chars]"
        }
    ]


    constructor(props) {
        super(props);
        console.log("hello i am class");
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults:0


        }
        document.title = `${this.props.category}-Romit's news`

    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eb05ba44d0034bf09723106a97318a9d&page=1&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let paresedData = await data.json();
        console.log(paresedData);
        this.setState({ articles: paresedData.articles ,
        totalResults:paresedData.totalResults
        })
       


    }
    handleonnext = async () => {
        console.log("next");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eb05ba44d0034bf09723106a97318a9d&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url);

        let paresedData = await data.json();
        console.log(paresedData);
        this.setState({ articles: paresedData.articles })


        this.setState({
            page: this.setState.page + 1,
            articles: paresedData.articles,
            loading: false
        })
    }
    handleonprevious = async () => {
        console.log("previous");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eb05ba44d0034bf09723106a97318a9d&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })

        let data = await fetch(url);
        let paresedData = await data.json();
        console.log(paresedData);
        this.setState({ articles: paresedData.articles })


        this.setState({
            page: this.setState.page - 1,
            articles: paresedData.articles,
            loading: false
        })
    }
    fetchMoreData= async()=>{
        this.setState({
            page:this.state.page+1,
           
        })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eb05ba44d0034bf09723106a97318a9d&page=1&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let paresedData = await data.json();
        console.log(paresedData);
        this.setState({ articles:this.state.articles.concat(paresedData.articles) ,
        totalResults:paresedData.totalResults
        })
    }

    render() {
        return (

            <div className="container my-3">
                <h2 className="text-center">Ronny news top headline ${this.props.category}</h2>
                {this.state.loading && <Scoll />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length!==this.state.totalResults}
                    loader={<Scoll/>}
                >


                <div className="row">
                    {this.state.articles.map((element) => {
                        
                        return <div className="col-md-4" key={element.url}>
                            <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
                    </InfiniteScroll>
                    <div className="container">
                    <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page === 1} type="button" className="btn btn-dark" onClick={this.handleonprevious} >previous</button>
                        <button type="button" className="btn btn-dark" onClick={this.handleonnext} >next</button>
                    </div>
                    </div>
            </div>
        )
    }
}

export default News