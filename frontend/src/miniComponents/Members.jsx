import React from "react";

const Members = () => {
  const members = [
    {
      id: 1,
      image: "/m1.jpg",
      title: "Alexa",
    },
    {
      id: 2,
      image: "/m2.jpg",
      title: "Jhon",
    },
    {
      id: 3,
      image: "/m3.jpg",
      title: "Michael",
    },
    {
      id: 4,
      image: "/m4.jpg",
      title: "Rober",
    },
    {
      id: 5,
      image: "/m5.jpg",
      title: "Siri",
    },
    {
      id: 6,
      image: "/m6.jpg",
      title: "Tobey",
    },
    {
      id: 7,
      image: "/m7.jpg",
      title: "Jhon Wick",
    },
  ];
  return (
    <>
      <section className="members">
        <div className="container">
          <div className="heading_section">
            <h2 className="heading">MEMBERS</h2>
            <p>
            Our dedicated volunteers are making a significant difference, driving positive change in our community through their time and efforts. Your donations help us support these impactful individuals by providing essential resources and training. Every contribution amplifies their ability to create meaningful outcomes and drive progress. Join us in empowering our volunteers—donate today and support their transformative work!
            </p>
          </div>
          <div className="members_container">
            {members.map((element) => (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Members;
