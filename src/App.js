import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Card>
        <div
          className="app"
          style={{
            backgroundImage:
              "linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)",
            minHeight: "250px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: "-2px"
          }}
        >
          <div
            style={{
              padding: "3px",
              marginLeft: "5px",
              borderRadius: "50%",
              overflow: "hidden",
              borderRadius: "50%",
              display: "flex",
              minWidth: "200px",
              border: "1px solid #fff",
              backgroundColor: "#fff"
            }}
            className="card"
          >
            <img
              width="100%"
              src="https://media-exp1.licdn.com/dms/image/C5103AQEi3KpjbkX4rQ/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=qn3zl9A8MQC1hkNTgaXBvO6rkgZSJT3FeOrh1SvAlYU"
              height="200"
              alt="Edit photo"
              id="ember726"
              style={{
                borderRadius: "50%"
              }}
            />
          </div>
          <div
            className="d-flex flex-column justify-content-between fs-white"
            style={{
              padding: "10px",
              height: "220px"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                color: "white",
                width: "100%",
                marginBottom: "20px"
              }}
            >
              <div className="fs-22">{"Ram Swarup Mishra"}</div>
              <div className="fs-14">
                {"https://www.linkedin.com/in/ram-swarup-mishra-97960b120/"}
              </div>
              <div className="fs-14">{"https://github.com/idropmybrain"}</div>
              <div className="fs-14">{"emailofswarup@gmail.com"}</div>
            </div>
            <div
              className="fs-16"
              style={{
                textAlign: "end"
              }}
            >
              {
                "In this fast moving webapps world, seeking for a platfom to contribute towards the better User interaction with a team of similar minded people, which will make me more passionate about Front-end Technologies than what I am today."
              }
            </div>
          </div>
        </div>
      </Card>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "80%"
          }}
        >
          {renderSkills()}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "20%"
          }}
        >
          {rating.map(data => (
            <Card noBackground={false}>
              <div
                style={{
                  minHeight: "100px",
                  minWidth: "30%",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <div className="fs-18 ">{data.title}</div>
                <Hr />
                {data.data.map(item => (
                  <>
                    <div className="fs-14 mb-2">{item.title}</div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row"
                      }}
                    >
                      {(item.rating &&
                        typeof item.rating === "number" &&
                        renderStar(item.rating)) ||
                        (item.rating && (
                          <div className="fs-14 mb-2">{item.rating}</div>
                        ))}
                    </div>
                  </>
                ))}
              </div>
            </Card>
          ))}
        </div>
        {/* </div> */}
      </div>
    </Fragment>
  );
}

const rating = [
  {
    title: "Hard Skills",
    data: [
      { title: "Coding", rating: 4 },
      { title: "Debugging", rating: 5 },
      { title: "Database", rating: 2 }
    ]
  },
  {
    title: "Soft Skills",
    data: [
      { title: "Leadership", rating: 3.5 },
      { title: "Co-ordination", rating: 5 },
      { title: "Problem solving", rating: 4.5 }
    ]
  },
  {
    title: "Language",
    data: [
      { title: "Hindi", rating: 4 },
      { title: "English", rating: 4 },
      { title: "Odia", rating: 5 }
    ]
  },
  {
    title: "Personal Info",
    data: [
      { title: "Phone", rating: "+91-7349369800" },
      { title: "E-mail ID", rating: "emailofswarup@gmail.com" },
      { title: "Skype", rating: "emailofswarup@gmail.com" },
      { title: "GitHub", rating: "github.com/idropmybrain" }
    ]
  },
  // {
  //   title: "Hobby",
  //   data: [{ title: "Football" }, { title: "Music" }, { title: "Adventure" }]
  // },
  {
    title: "Courses",
    data: [
      { title: "Java core and Advanced", rating: "from JSpider" },
      { title: "Data Warehouse", rating: "Office training on DW,ETL" },
      { title: "SAP BI/BO", rating: "Had exposure to SAP BI/BO" },
      { title: "Time Management" },
      { title: "Training on Git" }
    ]
  },
  {
    title: "Loking forward to",
    data: [
      { title: "elm", rating: "virtual DoM" },
      { title: "GraphQL" },
      { title: "CypressJS", rating: "End-to-end Testing" },
      { title: "Storybook" },
      { title: "More into Hooks & ref" }
    ]
  },
  {
    title: "Personal Interest",
    data: [
      { title: "Egghead.io" },
      { title: "Medium" },
      { title: "Overreact.io" },
      { title: "Linkedin React groups" },
      { title: "VueJS - in future" }
    ]
  }
];

const renderSkills = () => {
  return skill.map(item => (
    <Card>
      <div className="d-flex">
        <div className="px-2 fs-18">{item.title}</div>
      </div>
      <Hr />
      {item.data.map((data, num) => (
        <>
          <div className="d-flex flex-row mb-2 mt-2 align-items-stretch">
            <div
              className="d-flex flex-column justify-content-center p-2"
              style={{ minWidth: "20%", maxWidth: "20%" }}
            >
              <div className="fs-16">{data.title}</div>
              {data.subTitle.map(subTitle => (
                <div className="fs-14">{subTitle}</div>
              ))}
            </div>
            {/* <div
              className="d-flex flex-column"
              style={{
                minWidth: "4px",
                backgroundImage:
              "linear-gradient(-90deg, rgb(157 185 174) 0%, rgb(107 191 192) 75%)"
              }}
            ></div> */}
            <div
              className="d-flex flex-column px-2 bg-white justify-content-center"
              style={{
                // height: "100%",
                width: "100%",
                borderWidth: 0,
                borderLeft: "4px solid",
                borderImage:
                  "linear-gradient(rgb(157 184 173), rgb(106 191 192)) 0 100% / 1 / 0 stretch"
              }}
            >
              {data.description &&
                data.description.map((desc, index) => (
                  <div className="fs-14">{desc}</div>
                ))}
            </div>
          </div>
          {data.techUsed && renderChipSectipn(data.techUsed)}
          {num !== item.data.length - 1 && <Hr />}
        </>
      ))}
    </Card>
  ));
};

const renderChipSectipn = props => {
  return (
    <div
      style={{
        width: "100%",
        backgroundImage:
          "linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)",
        // minHeight: "50px",
        borderRadius: "4px",
        padding: "5px",
        marginBottom: "10px"
      }}
      className="card"
    >
      <div
        // className="bg-white"
        className="d-flex flex-row flex-wrap"
        style={{ width: "100%", borderRadius: "6px" }}
      >
        {props.map((data, index) => (
          <>
            {data.map(item => (
              <div
                className="fs-white  fs-14"
                style={{
                  margin: "0 8px 5px 8px"
                }}
              >
                {item}
              </div>
            ))}
            {index !== props.length - 1 && <Hr isWhite={true} />}
          </>
        ))}
      </div>
    </div>
  );
};

const Chip = props => {
  return <div></div>;
};

const Card = props => {
  return (
    <div
      className="card p-2"
      style={{
        margin: "10px",
        // backgroundImage:
        // "linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)",
        padding: "2px"
        // boxShadow: "0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19)"
      }}
    >
      <div
        style={{
          background: props.noBackground ? "inherit" : "#fff",
          padding: "2px",
          // boxShadow:
          //   "0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19)"
          "-webkit-print-color-adjust": "exact",
          "-webkit-filter": "opacity(1)"
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

const renderStar = rating => {
  let arr = [];
  // for (let i = 0; i < rating; i++) {
  arr.push(
    <div className="fs-16  fs-white ratingBase mb-2">
      <div
        className="showRating"
        style={{ width: `${(rating / 5) * 100}%` }}
      ></div>
    </div>
  );
  // }
  return arr;
};

const Hr = props => {
  return (
    <div
      style={{
        width: "100%",
        height: "2px",
        margin: "4px 0 8px 0",
        backgroundImage: props.isWhite
          ? "linear-gradient(141deg, #9fb8ad 0%, #ffffff 51%, #ffffff 75%)"
          : "linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)"
      }}
    ></div>
  );
};

const skill = [
  {
    title: "Skills",
    data: [
      {
        title: "React JS",
        subTitle: ["(0.14.6 - 16.9.0)"],
        description: [
          "Life-cyle, Functional Components, Design Patterns, SPA, PWA, React-Native, React-VR",
          "Hooks, Custom Hooks, Context",
          "Great understding of breaking down of components to perform better (both UI and function component)",
          "More reusable code/ custom components (such as carousel)"
        ],
        techUsed: [
          [
            "Hooks",
            "Custom Hooks",
            "Flux",
            "Redux",
            "Render-Props",
            "Design patterns in React",
            "Redux-saga/thunk",
            "React-Loadable",
            "Code-Splitting",
            "React-Router",
            "React-Select",
            "Promise",
            "Fetch",
            "Axios",
            "Superagent",
            "Fetch",
            "Webpack",
            "Babel",
            "Emotion JS",
            "Material UI",
            "Deep-Linking"
          ]
        ]
      },
      {
        title: "Web Technologies",
        subTitle: [""],
        description: [
          "HTML, CSS",
          "JSON & JavaScript",
          "Webpack, pre-loaders, babel"
        ],
        techUsed: [
          [
            "Webpack",
            "Babel",
            "HTML5",
            "CSS3",
            "SASS",
            "Flex Layout",
            "Grid Layout",
            "Resposive Web Design",
            "Pixel Perfect Design",
            "ES6",
            "Generator Function",
            "Uglify JS",
            "JSON",
            "JWT Token",
            "SPA",
            "Key-Cloak Integration",
            "MFA",
            "Request Header",
            "Network Operations",
            "Bootstrap"
          ]
        ]
      }
    ]
  },
  {
    title: "Work Experience",
    data: [
      {
        title: "Nagravision Pvt. Ltd",
        subTitle: ["july 2019 - July 2020"],
        designation: ["Software Developer"],
        description: [
          "Got exposed to more manged workflow with varios tools",
          "Different work culture as teams were across the globe, UK, Swizerland etc",
          "Planning for PIPE before hand, getting information on feature way ahead to plan things",
          "More of Managerial managed development"
        ],
        techUsed: [
          [
            "Version One",
            "Perforce",
            "Jira",
            "Dynamics",
            "Microsoft Family",
            "Figma",
            "inVision",
            "Confluence",
            "ERP",
            "Kubernetes",
            "Jenkins",
            "CI-CD",
            "Cypress JS"
          ],
          ["PROJECT:     OpCon: Operator Console"]
        ]
      },
      {
        title: "Sakhatech Information Pvt. Ltd.",
        subTitle: ["Feb 2017 - July 2019"],
        designation: ["Senior Software Developer", "Software Developer"],
        description: [
          "From being a Java developer to Full Stack developer and now as a Front‑end Web Developer",
          "Experienced in creating more Interactive Webapps",
          "Gathering Information from clients(US Clients too) to completing the required features in‑time",
          "Much more focus onto Coding/development",
          "Co-ordinating to much faster requirement changes and still manage to pull things in time."
        ],
        techUsed: [
          [
            "HTML5",
            "CSS3",
            "Bootstrap",
            "React JS",
            "Redux",
            "Gmail Family",
            "Jira",
            "Excel",
            "RabbitMQ",
            "SVN",
            "GIT & it's flavours"
          ],
          [
            "PROJECTS:     Knowledge Podium: Educational Platfrom",
            "Amrut: Graphycaal representation for sales data",
            "Quantilus"
          ]
        ]
      }
    ]
  },
  {
    title: "Projects",
    data: [
      {
        title: "OpCon",
        subTitle: ["Software Developer", "Team size: 12"],
        designation: ["Software Developer"],
        description: [
          "A Product that helps admin to controll on what an user is going to experience",
          "OTT platform admin panel where most things can be organised, scheduled ( as it has both Live and recorded)",
          "Designed Complicated Routes (Public, Private, Error & Not Found), deeplinking and shared components for most screens",
          "Implemented Multi Factor AUthentication Login and flow",
          "Exposre to backend development."
        ],
        techUsed: [
          [
            "React JS v16.9.0",
            "React-Router",
            "Redx-saga & generator function",
            "i18 for localization",
            "Material UI",
            "Emotion JS",
            "Storybook",
            "Java",
            "Micro services",
            "Mongo DB, Neo4j, Elastic DB, Rabbit MQ",
            "Cypress JS"
          ]
        ]
      }
    ]
  },
  {
    title: "Projects",
    data: [
      {
        title: "Knowledge Podium",
        subTitle: ["Senior Software Developer", "Team size: 27"],
        designation: ["Senior Software Developer", "Software Developer"],
        description: [
          "PoD based classroom learning experience.",
          "Assignment for users and certificate.",
          "Designed seeder project to help everyone to maintain and fast development.",
          "An side web for psycometric assesment to help student.",
          "Shared components and css preloader."
        ],
        techUsed: [
          [
            "React JS v0.14",
            "CSS3",
            "Bootstrap 4",
            "Redux",
            "Redux Middleware",
            "Superagent",
            "Jira",
            "Java 7",
            "Mongo DB, SQL, NoSQL",
            "GIT"
          ]
        ]
      },
      {
        title: "Amrut",
        subTitle: ["Software Developer", "Team size: 4"],
        designation: ["Senior Software Developer", "Software Developer"],
        description: [
          "Sales details along with Map drilldown to navigate from country to individual shop",
          "Cumilative data of self vs competitors for different products",
          "Varios graphs to represent the sales figure and comparisons.",
          "Trending line, average line with excel and pdf print out options from UI.",
          "Challenges: Using Both Leaflet JS and d3 JS as they manipulate HTML DoM directly with react."
        ],
        techUsed: [
          [
            "Leaflet JS",
            "React JS",
            "Redux",
            "d3 Chart",
            "Axios",
            "Jira",
            "Java 7",
            "Reddis",
            "MySQL",
            "GIT"
          ]
        ]
      },
      {
        title: "Quantilus",
        subTitle: ["Software Developer", "Team size: 7"],
        designation: ["Software Developer"],
        description: [
          "Newsletter service for Customers",
          "Integrated Payment Gateway and Cart facility.",
          "Merging Cart products and showing, as cart can be accessed without user login.",
          "Challenges: Different prices base on timezone and user category"
        ],
        techUsed: [["JavaScript", "jQuery", "Bootstrap", "CSS", "Axios", "SVN"]]
      }
    ]
  },
  {
    title: "Education",
    data: [
      {
        title: "Schooling",
        subTitle: ["1997 - 2009"],
        description: [
          "Saraswati Shishu Vidya Mandir, Sunabeda, Koraput, Odihsa"
        ]
        // techUsed: [["Webpack", "Babel"]]
      },
      {
        title: "PUC",
        subTitle: ["2009 - 2011"],
        description: ["A.C. & A. College, Sunabeda, Koraput, Odisha"]
        // techUsed: [["Bootstrap"]]
      },
      {
        title: "Graduation",
        subTitle: ["2011 - 2015"],
        description: [
          "Centurion Institute of Technology & Management, Bhubaneswar, Odisha"
        ]
        // techUsed: [["Webpack", "Bootstrap"]]
      }
    ]
  }
];

const exp = [
  {
    companyName: "Sakhatech Information Pvt. Ltd.",
    skill: false,
    timePeriod: "Feb 2017 - July 2019",
    designation: ["Software Developer", "Senior Software Developer"],
    projects: [
      {
        title: "knowledge Podium",
        description: "Blah blah blah",
        techUsed: ["React", "Redux", "React-loadable"]
      }
    ]
  }
];

export default App;
