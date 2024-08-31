import React from "react";

const Qualities = () => {
  const qualities = [
    {
      id: 1,
      image: "/community.jpg",
      title: "COMMUNITY DEVELOPMENT",
      description:
        "Committed to uplifting underserved communities, our volunteers foster growth and empowerment through various initiatives. They engage in hands-on projects that address local needs, providing essential resources and support. By building relationships and trust, our volunteers create a strong network of collaboration and support. ",
    },
    {
      id: 2,
      image: "/transparency.jpg",
      title: "TRANSPARENCY",
      description:
        "We prioritize open dialogue to foster a collaborative environment where volunteers feel empowered to share their ideas and concerns. By ensuring access to essential resources and training, we enhance the effectiveness of our programs and the overall volunteer experience.",
    },
    {
      id: 3,
      image: "/impact.jpg",
      title: "IMPACT MEASUREMENT",
      description:
        "Our volunteers are dedicated to delivering measurable results. They systematically track progress and analyze outcomes to celebrate successes and identify areas for improvement, ensuring that our initiatives are effective and continuously evolving to meet community needs.",
    },
  ];
  return (
    <>
      <div className="qualities">
        <h2>OUR QUALITIES</h2>
        <div className="container">
          {qualities.map((elememt) => {
            return (
              <div className="card" key={elememt.id}>
                <div className="img-wrapper">
                  <img src={elememt.image} alt={elememt.title} />
                </div>
                <div className="content">
                  <p className="title">{elememt.title}</p>
                  <p className="description">{elememt.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Qualities;
