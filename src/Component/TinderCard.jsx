import React from 'react'
import TinderCard from 'react-tinder-card'

export const TinderCards = () => {
    const array = [
        {
            name: "Steve Jobs",
            image: "https://www.biography.com/.image/t_share/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg"
        },
        {
            name: "Elon Musk",
            image: "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg"
        },
        {
            name: "Mark Zuckerberg",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMqBkTXbp2MO3PL5CEJZl3wlACk6wA6X9dMQ&usqp=CAU"
        },
        {
            name: "Sunder Pichai",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPyzU_oyZ8Nh5cJtZ0OSp7n0xrSbA79A36aA&usqp=CAU"
        }
    ]
    return (
        <div>
            <div>
                {
                    array.map((item, index) => {
                        return <TinderCard key={index} className="flex justify-center">
                            <div className=" w-3/4 h-96 md:w-1/4 bg-no-repeat bg-cover bg-center rounded-lg shadow-2xl absolute mt-20" style={{backgroundImage: `url(${item.image})`}}>
                                <p className="font-bold text-4xl relative top-80 text-purple-500">{item.name}</p>
                            </div>
                        </TinderCard>
                    })
                }
            </div>
        </div>
    )
}
