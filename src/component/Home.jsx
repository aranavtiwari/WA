import React from 'react';
import {Link} from 'react-router-dom'


function Home() {

    /*======

        {   link:"",
            heading:"",
            description:"",
            date:"",
            country:"#World"
        }
    ========*/

    const data = [
        {   link:"/P3101",
            heading:"India to spend 1.3 LAKH CRORE Rupees more on New Fighter Jets",
            description:"Air Force chief Air Chief Marshal RKS Bhadauria had termed the Rafale as one of the strong contenders for the 114 fighter acquisition project.",
            date:"31-01-2021",
            country:"#India"
        },
        {   link:"/P3001",
            heading:"Independence Means WAR - China's threat to Taiwan",
            description:"China has warned Taiwan that any attempt to seek independence 'means war'.",
            date:"30-01-2021",
            country:"#China #Taiwan #USA"
        },
        {   link:"/P2801",
            heading:"Biden’s Shock to Saudi Arabia",
            description:"Biden Administration Pauses Controversial Arms Sales To Saudi Arabia And UAE",
            date:"28-01-2021",
            country:"#USA #Saudi Arabia #UAE"
        },
        {   link:"/P2701",
            heading:"Japan pushes back against UK plan to invite India, others to G-7 meeting",
            description:"Prime Minister Boris Johnson, who is hosting this year's G-7, has invited South Korea, India and Australia to attend the leaders' summit in Cornwall in June",
            date:"27-01-2021",
            country:"#World #India #UK #Japan #G7"
        }
        ,
        {   link:"/P26012",
            heading:"Padma Awards 2021",
            description:"Singer SP Balasubrahmanyam, Former Japan PM Shinzo Abe Awarded Padma Vibhushan",
            date:"26-01-2021",
            country:"#India #Japan"
        },
        {   link:"/P2601",
            heading:"Violence at Red Fort Republic Day 2021",
            description:"Farmers Tractor Rally: Thousands of farmers, who entered into Delhi with their tractors this morning, poured into the Red Fort complex by afternoon.",
            date:"26-01-2021",
            country:"#India"
        },
        {   link:"/P25012",
            heading:"AKASH NG Test Fired for the First time by DRDO",
            description:"Akash-NG is a new generation Surface-to-Air Missile meant for use by the Indian Air Force with an aim of intercepting high manoeuvring aerial threats, says DRDO.",
            date:"25-01-2021",
            country:"#India"
        },
        {   link:"/P2501",
            heading:"India pushes back China near Sikkim Fight near Naku La ",
            description:"The Indian Army foiled an attempt by the Chinese to intrude across the border in Sikkim, sources have told India Today. At least 20 PLA soldiers have been injured in the clash that reportedly took place on January 20. The Indian Army said the 'minor face-off' was resolved by local commanders.",
            date:"25-01-2021",
            country:"#India #China"
        },
        {   link:"/T241",
            heading:"Russia Protests 2021",
            description:"Putin fears Alexei Navalny Explained Putin's palace",
            date:"24-01-2021",
            country:"#World"
        },
        {   link:"/P2412",
            heading:"Multi-modal Logistic Park",
            description:"The country's largest multi-modal logistics park at Sanand with an estimated investment of Rs 50,000 crore.",
            date:"24-01-2021",
            country:"#India"
        },
        {   link:"/P2301",
            heading:"India Rejects Nuclear Treaty 2021",
            description:"As the first-ever treaty to ban nuclear weapons entered into force, India said on Friday that it does not support the treaty and shall not be bound by any of the obligations that may arise from it",
            date:"23-01-2021",
            country:"#India"
        },
        {   link:"P23012",
            heading:"India seeks action for attack on Hindu temple in Pakistan",
            description:"India has expressed “serious concerns” over the demolition of the Karak Hindu Temple by a mob in Pakistan’s Khyber Pakhtunkhwa province",
            date:"23-01-2021",
            country:"#World"
        },
        {   
            heading:"Global Firepower Index 2021",
            description:"Most Powerful Countries in the world 2021",
            date:"22-01-2021",
            country:"#World"
        },
        {   
            heading:"Major Fire at Serum Institute of India Lessons for India1",
            description:"Five people were killed as a massive fire fire broke out at an under-construction building at the Serum Institute of India's Manjari premises in Pune.",
            date:"22-01-2021",
            country:"#India"
        },
        {   
            heading:"Twitter Blocks Chinese Embassy Account",
            description:"The Chinese Embassy account, @ChineseEmbinUS, posted a tweet this month that said that Uighur women were no longer 'baby making machines' citing a study reported by state-backed newspaper China Daily.",
            date:"21-01-2021",
            country:"#World"
        },
        {   link:"/P2001",
            heading:"Biden to boost U.S Pakistan Military Relations Impact on India",
            description:"Washington: The objective of the incoming Joe Biden administration is to continue elevating the US’s defence partnership with India, the new defence secretary nominee told lawmakers",
            date:"20-01-2021",
            country:"#World"
        },  
        
        
    ]

    const dataShow = () => {
        return data.map((data) => {
            return (
                <div>
                <div className="box">
                    <Link to={data.link} className="link"><h1 className="box-heading">{data.heading}
                    <span className="border"></span>
                     </h1></Link>
                    <p className="box-description">{data.description}</p>
                    <p className="box-date">{data.date}<span>{data.country}</span></p> 
                </div>
                </div> 
            )
        })
    }



    return (<div>
                
                <div className="home">
                    {dataShow()}
                </div>
        </div>
                
    )
}

export default Home;
