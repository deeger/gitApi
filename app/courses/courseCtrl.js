angular.module("courseCtrl", ['CompBrowser.services'])

.controller("CourseCtrl", function($scope) {

	$scope.courses = [

    {
      "number": "DGM 1061",
      "name": "Motion Picture Editing",
      "credits": 3,
      "lecture": 3,
      "lab": 1,
      "catalog_offered": "Fall, Spring",
      "past_offered": [
        {
          "crn": "23430",
          "section": "001",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "MW",
              "start_time": "10:00 am",
              "end_time": "11:50 am",
              "room": "CS 715B"
            }
          ],
          "instructor": "Trim, Robert Louie",
          "enrolled": 21,
          "max_enrollment": 28
        }
      ],
      "description": "Introduces interface, fundamental set of tools, techniques and operations of Non- Linear Editing. Provides experience with basic editing functions, post production workflow and exporting a finished project for various distribution channels."
    },
    {
      "number": "DGM 1062",
      "name": "Animation for the Internet",
      "credits": 2,
      "lecture": 1,
      "lab": 3,
      "catalog_offered": "On Sufficient Demand",
      "past_offered": [
        {
          "crn": "",
          "section": "",
          "start_date": "",
          "end_date": "",
          "scheduled": [
            {
              "days": "",
              "start_time": "",
              "end_time": "",
              "room": ""
            }
          ],
          "instructor": "",
          "enrollment": 0,
          "max_enrollment": 0
        }
      ],
      "description": "Introduces the interface, tool set, tweening techniques, and operations of an animation software package for online use. Requires creation of an interactive project with sound, video, and motion. Introduces basic scripting."
    },
    {
      "number": "DGM 1063",
      "name": "Image Editing",
      "credits": 2,
      "lecture": 1,
      "lab": 3,
      "catalog_offered": "Fall, Spring",
      "past_offered": [
        {
          "crn": "20157",
          "section": "001",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "TR",
              "start_time": "11:00 am",
              "end_time": "12:40 pm",
              "room": "CS 716"
            }
          ],
          "instructor": "Brown, Kim P",
          "enrollment": 28,
          "max_enrollment": 30
        }
      ],
      "description": "Introduces students to the interface, fundamental set of tools, techniques and operations of Photoshop. Requires creation and modification of digital images."
    },
    {
      "number": "DGM 1110",
      "name": "Digital Media Essentials I",
      "credits": 0,
      "lecture": 0,
      "lab": 0,
      "catalog_offered": "Fall, Spring, Summer",
      "past_offered": [
        {
          "crn": "10687",
          "section": "001",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "MW",
              "start_time": "08:00 am",
              "end_time": "09:50 am",
              "room": "CS 716"
            }
          ],
          "instructor": "Loughmiller, Cory Dee",
          "enrollment": 28,
          "max_enrollment": 30
        },
        {
          "crn": "21407",
          "section": "002",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "TR",
              "start_time": "08:00 am",
              "end_time": "09:50 am",
              "room": "CS 716"
            }
          ],
          "instructor": "Loughmiller, Cory Dee",
          "enrollment": 28,
          "max_enrollment": 30
        },
        {
          "crn": "17849",
          "section": "003",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "MW",
              "start_time": "11:00 am",
              "end_time": "12:50 pm",
              "room": "CS 716"
            }
          ],
          "instructor": "Brown, Kim P",
          "enrollment": 30,
          "max_enrollment": 30
        },
        {
          "crn": "10690",
          "section": "004",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "MW",
              "start_time": "01:00 pm",
              "end_time": "02:50 pm",
              "room": "CS 716"
            }
          ],
          "instructor": "Brown, Kim P",
          "enrollment": 28,
          "max_enrollment": 30
        }
      ],
      "description": "Beginning course designed to give students an in-depth introduction and well-grounded understanding of the digital media way of thinking, opportunities in the field, various tools, and introduction to development techniques. Topics include: audience assessment, digital imaging, compression algorithms, ethical dilemmas, message design through text, audio, images, animation, and digital video."
    },
    {
      "number": "DGM 2120",
      "name": "Web Essentials",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "prerequisites": [
        "DGM 1110"
      ],
      "past_offered": [
        {
          "crn": "21406",
          "section": "001",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "MW",
              "start_time": "10:00 am",
              "end_time": "10:50 am",
              "room": "CS 617"
            }
          ],
          "instructor": "Cheney, Paul W",
          "enrollment": 31,
          "max_enrollment": 32
        },
        {
          "crn": "20654",
          "section": "601",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "T",
              "start_time": "05:30 pm",
              "end_time": "08:00 pm",
              "room": "CS 715B"
            }
          ],
          "instructor": "Knell, Joshua C",
          "enrollment": 22,
          "max_enrollment": 24
        },
        {
          "crn": "14070",
          "section": "X01",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "TBA",
              "start_time": "TBA",
              "end_time": "TBA",
              "room": "TBA"
            }
          ],
          "instructor": "Cheney, Paul W",
          "enrollment": 45,
          "max_enrollment": 50
        },
        {
          "crn": "25020",
          "section": "X02",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "TBA",
              "start_time": "TBA",
              "end_time": "TBA",
              "room": "TBA"
            }
          ],
          "instructor": "Cheney, Paul W",
          "enrollment": 33,
          "max_enrollment": 50
        }
      ],
      "description": "Designed to provide students with the fundamentals necessary to plan, design, develop, deploy, and critique a web site which includes images, sound, video, forms, and separates content from presentation. Requires students to demonstrate the fundamentals of web programming languages including XHTML, CSS, and JavaScript. Examines various ways to build an accessible web page. Utilizes collaborative document sharing as they work in a group to research and present on server technologies. Culminates in a final project in which students will design and deploy a working site."
    },
    {
      "number": "DGM 2130",
      "name": "Digital Audio Essentials",
      "credits": 3,
      "lecture": 2,
      "lab": 3,
      "offered": [
        "Fall",
        "Spring",
        "Summer"
      ],
      "prerequisites": [
        "DGM 1110",
        "MAT 1010"
      ],
      "past_offered": [
        {
          "crn": "10696",
          "section": "001",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "MW",
              "start_time": "10:00 am",
              "end_time": "12:30 pm",
              "room": "CS 623"
            }
          ],
          "instructor": "Sansom, Bryan G",
          "enrollment": 28,
          "max_enrollment": 28
        },
        {
          "crn": "20155",
          "section": "002",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "MW",
              "start_time": "01:00 pm",
              "end_time": "03:15 pm",
              "room": "CS 623"
            }
          ],
          "instructor": "Wisland, Michael Garner",
          "enrollment": 28,
          "max_enrollment": 28
        },
        {
          "crn": "10697",
          "section": "003",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "MW",
              "start_time": "04:00 pm",
              "end_time": "06:15 pm",
              "room": "CS 623"
            }
          ],
          "instructor": "Wisland, Michael Garner",
          "enrollment": 27,
          "max_enrollment": 28
        }
      ],
      "description": "Reviews basic sound principles, cable types, microphone types and basic techniques of use. Teaches recording of basic sounds and musical instruments into a Digital Audio Workstation. Introduces multi-track audio, editing, EQing, mixing and mastering a 3-minute piece with voice and music. Includes a final project consisting of a multi-track music project designed for use in film, commercial radio, or other multimedia applications."
    },
    {
      "number": "DGM 2140",
      "name": "Electronics for Media",
      "credits": 3,
      "lecture": 2,
      "lab": 3,
      "offered": [
        "Fall"
      ],
      "past_offered": [
        {
          "crn": "",
          "section": "",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "",
              "start_time": "",
              "end_time": "",
              "room": ""
            }
          ],
          "instructor": "",
          "enrollment": 0,
          "max_enrollment": 0
        }
      ],
      "description": "Covers connectors and cable wiring standards and soldering techniques used in this field. Emphasizes electronic equipment and circuits used with electrical safety in media. Includes basic DC/AC theory such as voltage, current, resistance, power dissipation, batteries, and magnetism. Introduces the basic construction and theory of operation of circuits used in media containing electronic components, resistors, capacitors, inductors, transformers, diodes, transistors, electron tubes, operational amplifiers, and linear ICs. Designed for Digital Media students."
    },
    {
      "number": "DGM 220R",
      "name": "Special Topics in Digital Design",
      "variable": {},
      "catalog_offered": "On Sufficient Demand",
      "past_offered": [
        {
          "crn": "",
          "section": "",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "",
              "start_time": "",
              "end_time": "",
              "room": ""
            }
          ],
          "instructor": "",
          "enrollment": 0,
          "max_enrollment": 0
        }
      ],
      "description": "Designed for students interested in specific authoring tools and concepts used in digital media processes. Includes relevant and changing topics and tools used in digital authoring. Emphasizes hands-on experience along with lectures and demonstrations. Curriculum may vary from one semester to another. May be repeated for a maximum of nine credits toward graduation."
    },
    {
      "number": "DGM 2210",
      "name": "3D Modeling and Animation Essentials",
      "credits": 4,
      "lecture": 3,
      "lab": 3,
      "offered": [
        "Fall",
        "Spring",
        "Summer"
      ],
      "prerequisites": [
        "DGM 1110 or DGM 2620"
      ],
      "past_offered": [
        {
          "crn": "20711",
          "section": "001",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "MTWR",
              "start_time": "09:00 am",
              "end_time": "09:50 am",
              "room": "CS 514"
            },
            {
              "days": "F",
              "start_time": "09:00 am",
              "end_time": "10:50 am",
              "room": "CS 514"
            }
          ],
          "instructor": "McCully, David Alexander",
          "enrollment": 15,
          "max_enrollment": 24
        },
        {
          "crn": "21511",
          "section": "380",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "S",
              "start_time": "08:00 am",
              "end_time": "01:15 pm",
              "room": "CS 514"
            }
          ],
          "instructor": "McCully, David Alexander",
          "enrollment": 16,
          "max_enrollment": 20
        },
        {
          "crn": "10717",
          "section": "601",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "MW",
              "start_time": "05:30 pm",
              "end_time": "08:15 pm",
              "room": "CS 514"
            }
          ],
          "instructor": "Powell, Preston A",
          "enrollment": 21,
          "max_enrollment": 24
        }
      ],
      "description": "Addresses the basics of 3D modeling, rigging, texturing, animation, and rendering. Demonstrates how to utilize these techniques in a production pipeline for games and animation. Includes basic techniques and theories used in a 3D animation pipeline."
    },
    {
      "number": "DGM 2240",
      "name": "Interaction Design",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "catalog_offered": "Fall, Spring",
      "prerequisites": [
        "DGM 1110 or CS 1400 or INFO 1200"
      ],
      "past_offered": [
        {
          "crn": "15539",
          "section": "001",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "TR",
              "start_time": "02:30 pm",
              "end_time": "03:45 pm",
              "room": "CS 604"
            }
          ],
          "instructor": "Christensen, Trudy Kowallis",
          "enrollment": 26,
          "max_enrollment": 28
        },
        {
          "crn": "26478",
          "section": "601",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "TR",
              "start_time": "05:30 pm",
              "end_time": "06:45 pm",
              "room": "CS 708"
            }
          ],
          "instructor": "Youngquist, Mark Ryan",
          "enrollment": 25,
          "max_enrollment": 30
        }
      ],
      "description": "Focuses on strategies and principles used in digital media development to enhance the user experience. Teaches how to understand stakeholder goals, identify and specify user needs and requirements through user research and design documentation, engage in interactions with target audiences through interviews, observation, and discussion, as well as create and test prototypes. This course is highly project based and deals with solving real-world problems faced by consumers using products in the market."
    },
    {
      "number": "DGM 2250",
      "name": "Principles of Digital Design",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "catalog_offered": "Fall, Spring",
      "prerequisites": [
        "DGM 1110"
      ],
      "past_offered": [
        {
          "crn": "20398",
          "section": "601",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "TR",
              "start_time": "05:30 pm",
              "end_time": "06:45 pm",
              "room": "CS 514"
            }
          ],
          "instructor": "Powell, Preston A",
          "enrollment": 24,
          "max_enrollment": 24
        },
        {
          "crn": "25154",
          "section": "X01",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "TBA",
              "start_time": "TBA",
              "end_time": "TBA",
              "room": "TBA"
            }
          ],
          "instructor": "Romrell, Anthony J",
          "enrollment": 82,
          "max_enrollment": 100
        }
      ],
      "description": "Teaches principles of visual design, how to properly create engaging interfaces for digital media, and practice good integration with industry development tools. Addresses the complexity of designing rich media experiences around digital devices ranging from computer screens to personal information devices."
    },
    {
      "number": "DGM 2260",
      "name": "Immersive Authoring I",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "catalog_offered": "Fall",
      "prerequisites": [
        "DGM 1110"
      ],
      "past_offered": [
        {
          "crn": "",
          "section": "",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "",
              "start_time": "",
              "end_time": "",
              "room": ""
            }
          ],
          "instructor": "",
          "enrollment": 0,
          "max_enrollment": 0
        }
      ],
      "description": "Focuses on the application of media technologies that possess the ability to create rich immersive experiences for distribution on optical media such as CD, DVD-ROM, and over the Internet. Introduces participants to a variety of authoring systems and development techniques when creating Digital Media experiences. *Laptop Required"
    },
    {
      "number": "DGM 2270",
      "name": "DVD Authoring I",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "catalog_offered": "On Sufficient Demand",
      "prerequisites": [
        "DGM 1110"
      ],
      "past_offered": [
        {
          "crn": "",
          "section": "",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "",
              "start_time": "",
              "end_time": "",
              "room": ""
            }
          ],
          "instructor": "",
          "enrollment": 0,
          "max_enrollment": 0
        }
      ],
      "description": "Focuses on the development of DVD-Video products at the basic building block level. Participants are introduced to production workflow processes, still menu design, overlays, navigation logic and usability, encoding schemas, authoring techniques, and building and formatting DVD's. *Laptop Required"
    },
    {
      "number": "DGM 1620",
      "name": "Survey of Animation",
      "credits": 3,
      "lecture": 2,
      "lab": 3,
      "catalog_offered": "Fall, Spring",
      "past_offered": [
        {
          "crn": "22812",
          "section": "001",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "M",
              "start_time": "09:00 am",
              "end_time": "09:50 am",
              "room": "CS 518"
            },
            {
              "days": "TWRF",
              "start_time": "09:00 am",
              "end_time": "09:50 am",
              "room": "CS 512"
            }
          ],
          "instructor": "Coppieters, Michael R",
          "enrollment": 26,
          "max_enrollment": 28
        },
        {
          "crn": "22813",
          "section": "002",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "MF",
              "start_time": "10:00 am",
              "end_time": "11:25 am",
              "room": "CS 512"
            },
            {
              "days": "W",
              "start_time": "10:00 am",
              "end_time": "11:25 am",
              "room": "CS 518"
            }
          ],
          "instructor": "Esmay, Larry Rodayne",
          "enrollment": 27,
          "max_enrollment": 28
        }
      ],
      "description": "Introduces animation principles and studio processes used in the contemporary animation industry. Emphasizes the synthesis of technology and aesthetics in the production of an animated title. Includes an introduction to animation milestones and personalities."
    },
    {
      "number": "DGM 210R",
      "name": "Special Topics in Digital Media",
      "variable": {},
      "catalog_offered": "On Sufficient Demand",
      "past_offered": [
        {
          "crn": "",
          "section": "",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "",
              "start_time": "",
              "end_time": "",
              "room": ""
            }
          ],
          "instructor": "",
          "enrollment": 0,
          "max_enrollment": 0
        }
      ],
      "description": "Designed for students interested in specific digital media tools and concepts. Includes relevant and changing topics and tools used in production. Emphasizes hands-on experience along with lectures and demonstrations. This class may be taken for a total of nine credits, but curriculum may vary from one semester to another."
    },
    {
      "number": "DGM 2110",
      "name": "Digital Motion Picture Essentials",
      "credits": 3,
      "lecture": 2,
      "lab": 3,
      "offered": [
        "Fall",
        "Spring",
        "Summer"
      ],
      "prerequisites": [
        "DGM 1110 or COMM 1130"
      ],
      "past_offered": [
        {
          "crn": "10713",
          "section": "001",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "MW",
              "start_time": "08:00 am",
              "end_time": "10:15 am",
              "room": "CS 613"
            }
          ],
          "instructor": "Lisonbee, Dennis R",
          "enrollment": 14,
          "max_enrollment": 25
        },
        {
          "crn": "10714",
          "section": "002",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "TR",
              "start_time": "10:00 am",
              "end_time": "12:15 pm",
              "room": "CS 613"
            }
          ],
          "instructor": "Trim, Robert Louie",
          "enrollment": 26,
          "max_enrollment": 28
        },
        {
          "crn": "18227",
          "section": "003",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "MW",
              "start_time": "11:00 am",
              "end_time": "01:15 pm",
              "room": "CS 613"
            }
          ],
          "instructor": "Andersen, Duane Ronald",
          "enrollment": 24,
          "max_enrollment": 25
        },
        {
          "crn": "25814",
          "section": "004",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "MW",
              "start_time": "02:00 pm",
              "end_time": "04:15 pm",
              "room": "CS 613"
            }
          ],
          "instructor": "Andersen, Duane Ronald",
          "enrollment": 21,
          "max_enrollment": 25
        },
        {
          "crn": "10796",
          "section": "005",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "MW",
              "start_time": "05:30 pm",
              "end_time": "07:45 pm",
              "room": "CS 613"
            }
          ],
          "instructor": "Farr, Tyler M",
          "enrollment": 17,
          "max_enrollment": 25
        }
      ],
      "description": "Presents professional digital film production techniques used in feature films, documentaries and corporate video. Covers production processes such as story structure and script development, camera techniques, basic lighting techniques, production management and basic non-linear editing techniques. Addresses problem solving issues related to pre-production, production and post production. Each student will participate in a high-quality semester project that will take a story through the entire digital film pre-production, production and post-production process."
    },
    {
      "number": "DGM 2271",
      "name": "Principles of Web Design",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "catalog_offered": "Fall, Spring",
      "prerequisites": [
        "DGM 2120"
      ],
      "past_offered": [
        {
          "crn": "23662",
          "section": "001",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "TR",
              "start_time": "10:00 am",
              "end_time": "11:15 am",
              "room": "CS 518"
            }
          ],
          "instructor": "Rigby, Martin L",
          "enrollment": 19,
          "max_enrollment": 28
        },
        {
          "crn": "25519",
          "section": "X01",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {},
            {
              "days": "TBA",
              "start_time": "TBA",
              "end_time": "TBA",
              "room": "TBA"
            }
          ],
          "instructor": "Rigby, Martin L",
          "enrollment": 14,
          "max_enrollment": 40
        }
      ],
      "description": "Introduces the underlying principles that create favorable circumstances for user-centered Web design. Introduces topics such as responsive design, color and font selection, grids and layout patterns, and content inventory to name a few. Offers a greater appreciation for good design and the basic skills necessary to produce world- class Web experiences."
    },
    {
      "number": "DGM 2440",
      "name": "Sound for Film and Television",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "catalog_offered": "Spring",
      "prerequisites": [
        "DGM 2110",
        "DGM 2130"
      ],
      "past_offered": [
        {
          "crn": "10723",
          "section": "001",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "TR",
              "start_time": "11:30 am",
              "end_time": "12:45 pm",
              "room": "CS 623"
            }
          ],
          "instructor": "Card, Arlen L",
          "enrollment": 27,
          "max_enrollment": 27
        },
        {
          "crn": "25658",
          "section": "601",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "TR",
              "start_time": "05:30 pm",
              "end_time": "06:45 pm",
              "room": "CS 623"
            }
          ],
          "instructor": "Adamic, David",
          "enrollment": 18,
          "max_enrollment": 27
        }
      ],
      "description": "Teaches the basics of gathering sound for use in film and video productions. Covers proper boom miking and wireless mic techniques, and acoustics preparation to record dialogue and sound effects on location and on sound stages. Examines the processes utilized in editing audio of multimedia productions, including the balancing of artistic relationships, mixing and mastering of music, sound effects tracks and Foley. Offers practical experience in audio-only productions as well as audio-video relationships. Culminates in a digital cinema mixing session. Primarily a lab class, may couple with another video class to gather the sound for a cohesive project."
    },
    {
      "number": "DGM 2460 (Cross-listed with: COMM 2560)",
      "name": "Radio Production",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "catalog_offered": "Fall",
      "past_offered": [
        {
          "crn": "",
          "section": "",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "",
              "start_time": "",
              "end_time": "",
              "room": ""
            }
          ],
          "instructor": "",
          "enrollment": 0,
          "max_enrollment": 0
        }
      ],
      "description": "Teaches the history of radio, and the structure of typical radio stations, from management to programming and sales, and production and promotion. Covers method of producing radio promos, radio shows, commercials and news segments, as well as features and interviews. Examines the use of Digital Audio Workstations to produce several radio segments of the student's choosing. Includes lectures, demonstrations, and guest lecturers from radio stations in the community."
    },
    {
      "number": "DGM 2481",
      "name": "Introduction to Digital Audio Restoration",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "catalog_offered": "Fall",
      "prerequisites": [
        "DGM 2130"
      ],
      "past_offered": [
        {
          "crn": "",
          "section": "",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "",
              "start_time": "",
              "end_time": "",
              "room": ""
            }
          ],
          "instructor": "",
          "enrollment": 0,
          "max_enrollment": 0
        }
      ],
      "description": "Teaches the value and use of various tools to restore, preserve, and archive audio from a variety of sources, including vinyl records, tapes, film soundtracks, etc. Additional topics include removal of ambient noise (fans, AC, etc) from class film projects, impulsive noise (clicks and pops), periodic noise (hum and buzz), and random noise (spectral subtraction of ambient noise). In addition, some attention will be given to the subject of audio forensics, or restoring audio for intelligence or law enforcement applications."
    },
    {
      "number": "DGM 250R",
      "name": "Special Topics in Digital Motion Picture Production",
      "variable": {},
      "prerequisites": [
        "DGM 2110"
      ],
      "past_offered": [
        {
          "crn": "",
          "section": "",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "",
              "start_time": "",
              "end_time": "",
              "room": ""
            }
          ],
          "instructor": "",
          "enrollment": 0,
          "max_enrollment": 0
        }
      ],
      "description": "Designed for students interested in specific video tools and concepts currently used in digital media processes. Includes relevant and changing topics and tools used in industry. Emphasizes hands-on experience along with lectures and demonstrations. Curriculum may vary from one semester to another. May be repeated for a maximum of nine credits toward graduation."
    },
    {
      "number": "DGM 2520",
      "name": "Film Production Analysis",
      "credits": 3,
      "lecture": 1,
      "lab": 6,
      "offered": [
        "Fall"
      ],
      "prerequisites": [
        "ENGL 1010"
      ],
      "past_offered": [
        {
          "crn": "26407",
          "section": "601",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "MW",
              "start_time": "05:00 pm",
              "end_time": "08:00 pm",
              "room": "LA 101"
            }
          ],
          "instructor": "Nibley, Paul Sloan",
          "enrollment": 49,
          "max_enrollment": 100
        }
      ],
      "description": "Film Production Analysis is a foundation class for those interested in the digital media and motion picture business. Analyzes the various technologies and production techniques that make up motion picture communication. Involves viewing a motion picture each week of class and analyzing how the producer and director incorporated production and structural techniques to produce a compelling story. Covers the eight sequence structural elements of motion picture storytelling, how each crew member of the production team contributes to the overall impact, how scripting is used to direct the team to create a strong cinematic effect, and how the three act eight sequence structure guides the entire team through the pre-production, production and post-production process."
    },
    {
      "number": "DGM 2540",
      "name": "Cinematography I",
      "credits": 3,
      "lecture": 1,
      "lab": 5,
      "offered": [
        "Fall",
        "Spring"
      ],
      "prerequisites": [
        "DGM 2520"
      ],
      "past_offered": [
        {
          "crn": "18023",
          "section": "002",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "TR",
              "start_time": "02:30 pm",
              "end_time": "05:00 pm",
              "room": "LC 311B"
            }
          ],
          "instructor": "Roberts, Laird",
          "enrollment": 14,
          "max_enrollment": 15
        },
        {
          "crn": "24311",
          "section": "601",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "TR",
              "start_time": "05:30 pm",
              "end_time": "08:00 pm",
              "room": "LC 311B"
            }
          ],
          "instructor": "Roberts, Laird",
          "enrollment": 11,
          "max_enrollment": 15
        }
      ],
      "description": "Introduces the role of the Gaffer and the Grip in broadcast television and digital cinematography. Teaches full understanding of lighting instruments, power distribution, lighting support, rigging, dollies and production equipment. Teaches how to work as a member of a team/department applying on-set protocols to meet the needs of production objectives."
    },
    {
      "number": "DGM 2600",
      "name": "The Animated Image",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "offered": [
        "Fall"
      ],
      "prerequisites": [
        "ENGL 1010"
      ],
      "past_offered": [
        {
          "crn": "",
          "section": "",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": []
        }
      ],
      "days": "",
      "description": "Chronicles the development of animation as a medium dependent on both aesthetics and technology from its inception in the late 19th century through contemporary scientific and entertainment venues. Introduces key international personalities and industry benchmarks. Discusses animation both as a means of self-expression and as a commercial enterprise. Includes film screenings and research assignments."
    },
    {
      "number": "DGM 260R",
      "name": "Special Topics in 2D/3D Animation",
      "variable": {},
      "past_offered": [
        {
          "crn": "25407",
          "section": "001",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "TR",
              "start_time": "04:00",
              "end_time": "05:15",
              "room": "CS 514"
            }
          ],
          "instructor": "Badger, Joshua T",
          "enrollment": 15,
          "max_enrollment": 24
        }
      ],
      "description": "Designed for students interested in specific animation tools and concepts currently used in digital animation production. Includes relevant and changing topics and tools. Emphasizes hands-on experience along with lectures and demonstrations. Curriculum may vary from one semester to another. May be repeated for a maximum of nine credits."
    },
    {
      "number": "DGM 230R",
      "name": "Special Topics in Digital Graphics",
      "variable": {},
      "catalog_offered": "On Sufficient Demand",
      "past_offered": [
        {
          "crn": "",
          "section": "",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "",
          "instructor": "",
          "enrollment": 0,
          "max_enrollment": 0
        }
      ],
      "description": "Designed for students interested in specific graphic tools and concepts currently used in digital media production. Includes relevant and changing topics and tools. Emphasizes hands-on experience along with lectures and demonstrations. This class may be taken for a total of nine credits, but curriculum may vary from one semester to another."
    },
    {
      "number": "DGM 2320",
      "name": "Digital Photography and Compositing I",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "catalog_offered": "Fall, Spring",
      "past_offered": [
        {},
        {
          "crn": "24442",
          "section": "002",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "TR",
              "start_time": "01:00 pm",
              "end_time": "02:15 pm",
              "room": "CS 613"
            }
          ],
          "instructor": "Christensen, Reese M",
          "enrollment": 29,
          "max_enrollment": 30
        }
      ],
      "description": "Introduces digital image acquisition and manipulation. Teaches the mechanics of the digital camera, and introduces lighting, white balance, color temperature, digital ISO and electronic image stabilization. Discusses image compositing, EXIF data analysis and archiving."
    },
    {
      "number": "DGM 2340",
      "name": "Digital Output",
      "credits": 3,
      "lecture": 3,
      "lab": 1,
      "offered": [
        "Spring"
      ],
      "prerequisites": [
        "DGM 2540 or instructor approval"
      ],
      "past_offered": [
        {
          "crn": "",
          "section": "",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "",
          "instructor": "",
          "enrollment": 0,
          "max_enrollment": 0
        }
      ],
      "description": "Focuses on the digital workflow management of digital still and cinema camera assets. Addresses codecs, asset backup, management, light color grading, transcoding, preparation of assets for the NLE workflow and final asset output for various digital distribution channels."
    },
    {
      "number": "DGM 240R",
      "name": "Special Topics in Digital Audio",
      "variable": {
        "past_offered": [],
        "crn": "25606",
        "section": "001",
        "start_date": "05-JAN-15",
        "end_date": "30-APR-15",
        "scheduled": [
          {
            "days": "MW",
            "start_time": "11:30 am",
            "end_time": "12:45 pm",
            "room": "CS 721"
          }
        ],
        "instructor": "Card, Arlen L",
        "enrollment": 11,
        "max_enrollment": 28
      },
      "past_offered": [
        {},
        {
          "crn": "26806",
          "section": "601",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "TR",
              "start_time": "07:00 pm",
              "end_time": "08:15 pm",
              "room": "CS 623"
            }
          ],
          "instructor": "Spencer, Dane J",
          "enrollment": 6,
          "max_enrollment": 27
        },
        {
          "crn": "24306",
          "section": "002",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            {
              "days": "TR",
              "start_time": "02:30 pm",
              "end_time": "03:45 pm",
              "room": "CS 623"
            }
          ],
          "instructor": "Sansom, Bryan G",
          "enrollment": 10,
          "max_enrollment": 15
        }
      ],
      "description": "Designed for students interested in specific audio tools and concepts currently used in digital audio production. Includes relevant and changing topics and tools. Emphasizes hands-on experience along with lectures and demonstrations. Curriculum may vary from one semester to another. May be repeated for a maximum of nine credits."
    },
    {
      "number": "DGM 2620",
      "name": "Principles of Animation I",
      "credits": 4,
      "lecture": 2,
      "lab": 6,
      "offered": [
        "Fall"
      ],
      "prerequisites": [
        "DGM 1620 with a grade of B- or higher"
      ],
      "days": "",
      "description": "Explores and applies animation principles including: timing and spacing, story keys, straight ahead, pose-to-pose, walks, runs, and flexibility. Emphasizes the study of objects in motion and the communication of key ideas."
    },
    {
      "number": "DGM 2630",
      "name": "Principles of Animation II",
      "credits": 4,
      "lecture": 3,
      "lab": 3,
      "offered": [
        "Spring"
      ],
      "prerequisites": [
        "DGM 2620"
      ],
      "past_offered": [
        {
          "crn": "23664",
          "section": "001",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "MWF",
          "instructor": "Esmay, Larry Rodayne",
          "enrollment": 25,
          "max_enrollment": 28
        }
      ],
      "description": "Continued study of animation principles and concepts from DGM 2620. Includes an introduction to effects animation. Emphasizes character motion, and performance in a team- based project."
    },
    {
      "number": "DGM 2640",
      "name": "Character Development",
      "credits": 3,
      "lecture": 2,
      "lab": 3,
      "offered": [],
      "prerequisites": [
        "(DGM 2210 and DGM 2620) or instructor approval"
      ],
      "past_offered": [
        {
          "crn": "23665",
          "section": "001",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "TR",
          "instructor": "Clayton, Marty J",
          "enrollment": 24,
          "max_enrollment": 24
        },
        {
          "crn": "25898",
          "section": "I01",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "TBA",
          "instructor": "Esmay, Larry Rodayne",
          "enrollment": 4,
          "max_enrollment": 6
        }
      ],
      "description": "In-depth study and application of 3D character development for animation and games. Requires a firm understanding of 3D modeling, basic rigging, basic texturing, and principles of animation. Students will design, model, rig, and animate 3D characters following industry processes."
    },
    {
      "number": "DGM 2670",
      "name": "Scripting for Animation and Games",
      "credits": 3,
      "lecture": 2,
      "lab": 3,
      "offered": [
        "Spring"
      ],
      "prerequisites": [
        "DGM 2210"
      ],
      "past_offered": [
        {
          "crn": "23482",
          "section": "001",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "TR",
          "instructor": "Liu, Li",
          "enrollment": 26,
          "max_enrollment": 26
        }
      ],
      "description": "Focuses on the basic elements of scripting languages in modern 3D applications. Develops a firm understanding of basic scripting concepts in a 3D environment, including: libraries, expressions, arrays, conditionals, loops, and functions. Simplification of complex user operations, and the development of basic user interfaces will also be discussed. Utilizes Industry standard applications, such as Maya, Houdini, and Unity3D."
    },
    {
      "number": "DGM 270R",
      "name": "Special Topics in Internet Development",
      "variable": {
        "past_offered": [],
        "crn": "",
        "section": "",
        "start_date": "05-JAN-15",
        "end_date": "30-APR-15",
        "scheduled": []
      },
      "days": "",
      "description": "Designed for students interested in specific web design tools and concepts currently used in multimedia creation. Includes relevant and changing topics and tools used in multimedia. Emphasizes hands-on experience along with lectures and demonstrations. Completers should be able to use the web design tools to create a typical multimedia project. Curriculum may vary from one semester to another. May be repeated for a maximum of nine credits"
    },
    {
      "number": "DGM 2740",
      "name": "Principles of Web Languages",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "catalog_offered": {},
      "prerequisites": [
        "DGM 2120",
        "DGM 2271"
      ],
      "past_offered": [
        {
          "crn": "25221",
          "section": "X01",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "TBA",
          "instructor": "Cheney, Paul W",
          "enrollment": 18,
          "max_enrollment": 40
        }
      ],
      "description": "Participants will solve various Web design and coding problems using current Internet technologies. Emphasis will be given to solving unique coding problems using HTML, CSS, and jQuery that arise when implementing a Web design."
    },
    {
      "number": "DGM 2760",
      "name": "Web Languages I",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "catalog_offered": "Fall",
      "prerequisites": [
        "DGM 2120"
      ],
      "past_offered": [
        {
          "crn": "16476",
          "section": "001",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "TR",
          "instructor": "Liu, Li",
          "enrollment": 18,
          "max_enrollment": 20
        },
        {
          "crn": "25446",
          "section": "X01",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "TBA",
          "instructor": "Liu, Li",
          "enrollment": 12,
          "max_enrollment": 40
        }
      ],
      "description": "Considers the creation of websites using current client-side technologies, including: DHTML, or the combination of XHTML, JavaScript and Cascading Style Sheets. Covers advanced techniques for multimedia production and development in detail. Examines client-side technologies that allow viewers to interact with the content of Web pages. Extensively uses methods for creating highly interactive web sites without the use of authoring technologies. Teaches how to make the static content within a typical webpage more dynamic, interesting, and most importantly, useful. Culminates with a final project during which each student will design and create materials for use in a well-designed interactive web site."
    },
    {
      "number": "DGM 2780",
      "name": "Authoring for the Internet I",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "catalog_offered": "Fall",
      "prerequisites": [
        "DGM 2120 or INFO 2420"
      ],
      "past_offered": [
        {
          "crn": "26637",
          "section": "001",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "TR",
          "instructor": "Liu, Li",
          "enrollment": 12,
          "max_enrollment": 27
        }
      ],
      "description": "Participants learn the fundamentals of Flash and a variety of other tools to create engaging Internet enabled experiences. Participants learn the basics of design, animation, scripting, workflow, and delivery techniques."
    },
    {
      "number": "DGM 296R",
      "name": "Seminar",
      "catalog_offered": "On Sufficient Demand",
      "variable": {},
      "past_offered": [
        {
          "crn": "",
          "section": "",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "",
          "instructor": "",
          "enrollment": 0,
          "max_enrollment": 0
        }
      ],
      "description": "Provides short courses, workshops, and special programs in information management or current administrative topics. Curriculum may vary from one semester to another. May be repeated for a maximum of nine credits."
    },
    {
      "number": "DGM 3110",
      "name": "Corporate Issues in Digital Media",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "catalog_offered": "Fall, Spring, Summer",
      "prerequisites": [
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "past_offered": [
        {
          "crn": "20595",
          "section": "001",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "MW",
          "instructor": "Card, Arlen L",
          "enrollment": 15,
          "max_enrollment": 24
        },
        {
          "crn": "10781",
          "section": "601",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "TR",
          "instructor": "Card, Arlen L",
          "enrollment": 13,
          "max_enrollment": 24
        }
      ],
      "description": "Covers business and legal issues in multimedia. Reviews good business practices for the multimedia industry. Studies universal marketing and sales principles and mastery, as well as e-commerce fundamentals. Teaches copyright laws and procedures, obtaining permissions, creating and using contracts, protecting corporate assets, standards, security and privacy issues, and other legal issues regarding multimedia communication."
    },
    {
      "number": "DGM 312G",
      "name": "Digital Media for Intercultural Communication",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "catalog_offered": "Fall, Spring, Summer",
      "prerequisites": [
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "past_offered": [
        {
          "crn": "17846",
          "section": "001",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "MW",
          "instructor": "Christensen, Trudy Kowallis",
          "enrollment": 10,
          "max_enrollment": 25
        },
        {
          "crn": "26468",
          "section": "X01",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "TBA",
          "instructor": "Christensen, Trudy Kowallis",
          "enrollment": 25,
          "max_enrollment": 30
        }
      ],
      "description": "Explores issues, concepts, and practices for making digital media accessible to people from diverse cultures and people with disabilities. Covers design considerations and techniques for the Web and other digital technologies. Presents methods for understanding and comparing different cultures and ways of approaching and enhancing intercultural interactions. Addresses accessibility standards, guidelines, and laws important for digital media developers to know and implement."
    },
    {
      "number": "DGM 3130",
      "name": "Digital Storyboarding",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "catalog_offered": "Fall, Spring",
      "prerequisites": [
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "past_offered": [
        {
          "crn": "10767",
          "section": "001",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "TR",
          "instructor": "Clayton, Marty J",
          "enrollment": 22,
          "max_enrollment": 24
        }
      ],
      "description": "Introduces students to contemporary storyboarding practices, both linear and non- linear, key to communicating information clearly, and consistently in a cost effective manner. *Laptop Required"
    },
    {
      "number": "DGM 320R",
      "name": "Advanced Topics in Digital Media Design",
      "variable": {},
      "offered": [
        "On Sufficient Demand"
      ],
      "prerequisites": [
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "days": "",
      "description": "Intended for advanced students with an interest in digital design and authoring. Includes relevant and changing topics and tools. Emphasizes hands-on experience along with lectures and demonstrations. Curriculum may vary from one semester to another. May be repeated for a maximum of 9 credits toward graduation."
    },
    {
      "number": "DGM 281R",
      "name": "Internship",
      "variable": {},
      "catalog_offered": "Fall, Spring, Summer",
      "prerequisites": [
        "Departmental Approval",
        "Internship Orientation"
      ],
      "past_offered": [
        {
          "crn": "10758",
          "section": "002",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "TBA",
          "instructor": "Orchard, Fred G",
          "enrollment": 3,
          "max_enrollment": 10
        },
        {
          "crn": "10759",
          "section": "003",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "TBA",
          "instructor": "Orchard, Fred G",
          "enrollment": 1,
          "max_enrollment": 10
        },
        {
          "crn": "15836",
          "section": "004",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "TBA",
          "instructor": "Orchard, Fred G",
          "enrollment": 1,
          "max_enrollment": 10
        }
      ],
      "description": "For Digital Media majors only. Provides a transition from school to-work where learned theory is applied to actual practice through a meaningful on-the-job experience. Includes student, employer and coordinator evaluations, on-site work visits, and written assignments. Completers should obtain experience in establishing and accomplishing individualized work objectives that improve work performance. Internship is intended for entry level DGM students who are working at that level. Credit is determined by the number of hours a student works during the semester and completion of individually set goals. May be repeated for a maximum of 16 credits towards graduation. Graded Credit/No-Credit."
    },
    {
      "number": "DGM 3220",
      "name": "Digital Media Project Management",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "catalog_offered": "Fall, Spring",
      "prerequisites": [
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "past_offered": [
        {
          "crn": "10800",
          "section": "001",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "TR",
          "instructor": "Christensen, Trudy Kowallis",
          "enrollment": 9,
          "max_enrollment": 25
        },
        {
          "crn": "26477",
          "section": "001",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "TR",
          "instructor": "Hansen II, Edwin Peter",
          "enrollment": 21,
          "max_enrollment": 30
        }
      ],
      "description": "Teaches the foundational management principles that contribute to both the quality and profitability of digital media products. Introduces technical project management skills to help with budgeting and scheduling as well as critical soft skills, such as how to manage product design, make good decisions, communicate effectively, and build productive work relationships. Also, teaches about different types of project documents that enable and support effective, successful projects."
    },
    {
      "number": "DGM 3240",
      "name": "Interaction Design Colloquium",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "prerequisites": [
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "days": "",
      "description": "Provides advanced students with unique and current industry perspectives on interaction design through seminar discussions, workshops, and industry on-site experiences."
    },
    {
      "number": "DGM 3260",
      "name": "Immersive Authoring II",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "catalog_offered": "Spring",
      "prerequisites": [
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "past_offered": [
        {
          "crn": "23794",
          "section": "001",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "T",
          "instructor": "Harper, Michael Forrest",
          "enrollment": 5,
          "max_enrollment": 24
        }
      ],
      "description": "Focuses on advanced application of media technologies and design paradigms when creating rich immersive experiences for distribution as a net-based desktop or mobile application. This course is designed to be highly adaptable to enable infusion of unique and emerging technologies that are critical for digital media majors to understand. Laptop required."
    },
    {
      "number": "DGM 3261",
      "name": "Authoring for Virtual Reality Experiences",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "catalog_offered": "Fall",
      "prerequisites": [
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "days": "",
      "description": "Explores Virtual Reality as a technology for photographing locations and then allowing users to navigate through these spaces using QuickTime, Flash, or Java in a web browser. A virtual environment allows viewers to choose their own experience and make decisions as if they were actually on location. Virtual Reality environments are used to tour college campuses, museums, shops, sports venues, plan events at locations without visiting them in person; show real estate, entice viewers to travel to vacation getaways; and create historical documentation."
    },
    {
      "number": "DGM 3270",
      "name": "DVD Authoring II",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "prerequisites": [
        "DGM 2270",
        "University Advanced Standing"
      ],
      "days": "",
      "description": "Focuses on advanced development techniques of DVD-Video media technologies. Covers advanced characteristics of visual design, motion menus, unique programming aspects of DVD functionality, and ROM capabilities. *Laptop Required"
    },
    {
      "number": "DGM 3271",
      "name": "Adaptive Interface Design",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "catalog_offered": "Spring",
      "prerequisites": [
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "past_offered": [
        {
          "crn": "23666",
          "section": "",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "TR",
          "instructor": "Rigby, Martin L",
          "enrollment": 16,
          "max_enrollment": 28
        }
      ],
      "description": "Teaches advanced adaptive development techniques of User Interface Design, which can create more robust experiences, through problem solving and effective communication. Focuses heavily on how designers can influence the user experience, and participatory outcomes of such experiences, through well-planned interactions, digital layout, and adaptation to the physical hardware."
    },
    {
      "number": "DGM 3280",
      "name": "Authoring for Digital Devices",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "catalog_offered": "Spring",
      "prerequisites": [
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "past_offered": [
        {
          "crn": "15779",
          "section": "601",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "T",
          "instructor": "Hedrick, Emily Francine",
          "enrollment": 16,
          "max_enrollment": 20
        }
      ],
      "description": "Focuses on the application of media technologies that possess the ability to create rich immersive experiences for distribution on digital devices beyond the computer that can include iPods, personal information managers, mobile phones, home appliances or home entertainment systems. *Laptop Required"
    },
    {
      "number": "DGM 3290",
      "name": "Developing Digital Media for Instruction and Training",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "catalog_offered": "Fall",
      "prerequisites": [
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "days": "",
      "description": "Teaches the lifecycle of training and development in a business setting. Uses the Instructional System Design (ISD) process, which includes identifying performance deficiencies and appropriate interventions, developing objectives, selecting appropriate learning technologies, developing course content, selecting effective instructional aids, delivering training, and evaluating training effectiveness. Reviews basic educational principles in teaching adult learners and managing classroom dynamics. Examines legal issues, cross-cultural preparation, and workforce diversity as they relate to training and development. Provides hands-on training experiences. Completers should be prepared to apply basic principles to training and development opportunities."
    },
    {
      "number": "DGM 330R",
      "name": "Advanced Topics in Digital Media Graphics",
      "variable": {},
      "catalog_offered": "On Sufficient Demand",
      "prerequisites": [
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "days": "",
      "description": "Intended for advanced students with an interest in digital graphics and design. Includes relevant and changing topics and tools. Emphasizes hands-on experience along with lectures and demonstrations. Curriculum may vary from one semester to another. May be repeated for a maximum of 9 credits toward graduation."
    },
    {
      "number": "DGM 3320",
      "name": "Digital Photography and Compositing II",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "catalog_offered": "Fall, Spring",
      "prerequisites": [
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "past_offered": [
        {
          "crn": "20577",
          "section": "001",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "F",
          "instructor": "Christensen, Reese M",
          "enrollment": 9,
          "max_enrollment": 25
        }
      ],
      "description": "Builds on skills acquired in Digital Photography and Imaging I. Uses photo imaging tools like Photoshop, Light Table, and Aperture in the creation and manipulation of digital images for use in a broad range of output specific formats. Teaches advanced image manipulation, and compositing and asset management to deliver finished digital image deliverables for such things as the web, DVD media, print, billboard, and wrap advertising media."
    },
    {
      "number": "DGM 340R",
      "name": "Advanced Topics in Digital Audio",
      "variable": {},
      "prerequisites": [
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "past_offered": [
        {
          "crn": "22230",
          "section": "I01",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "TBA",
          "instructor": "Wisland, Michael Garner",
          "enrollment": 1,
          "max_enrollment": 9
        }
      ],
      "description": "Intended for advanced students with an interest in digital audio. Includes relevant and changing topics and tools. Emphasizes hands-on experience along with lectures and demonstrations. Curriculum may vary from one semester to another. May be repeated for a maximum of 9 credits toward graduation."
    },
    {
      "number": "DGM 3410",
      "name": "Audio Engineering for the Studio I",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "catalog_offered": "Fall",
      "prerequisites": [
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "days": "",
      "description": "Reviews basic sound principles (standing waves, studio acoustics, psycho-acoustics), microphone types and techniques of use. Covers theory and application of mixers, signal processors, and effects. Outlines proper construction and grounding of a recording studio. Introduces one or more digital audio workstations, which will be used to record a band or classical project. Requires the completion of a mixdown of a multi-track project."
    },
    {
      "number": "DGM 3420",
      "name": "Audio Engineering for the Studio II",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "catalog_offered": "Spring",
      "prerequisites": [
        "DGM 3410",
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "past_offered": [
        {
          "crn": "16969",
          "section": "001",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "TR",
          "instructor": "Card, Arlen L",
          "enrollment": 6,
          "max_enrollment": 27
        }
      ],
      "description": "Reviews principles of good audio engineering covered in the introductory class, but in greater depth, including, cable types, microphone types, mixers, and techniques of use. Emphasis will be on miking techniques for each individual instrument involved in the recording. Covers in- depth theory and application of mixers, signal processors, and effects. Addresses advanced stereo miking techniques and focuses on several key instruments, including piano and drums. Continues further in-depth topics on impedance matching, power requirements, and use of the decibel. Includes acoustic properties and sound transmission loss of common studio surface materials."
    },
    {
      "number": "DGM 3430",
      "name": "Recording Studio Design Principles and Practices",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "catalog_offered": "On Sufficient Demand",
      "prerequisites": [
        "DGM 3410",
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "days": "",
      "description": "Addresses many issues found in the design, construction and maintenance of a recording studio. Explores the physics, mathematics, electronics, and practical issues to properly design and build a successful recording studio."
    },
    {
      "number": "DGM 3460",
      "name": "Live Sound Reinforcement",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "prerequisites": [
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "past_offered": [
        {
          "crn": "10770",
          "section": "601",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            null,
            {}
          ],
          "days": "M",
          "instructor": "Kopp, Aaron W",
          "enrollment": 8,
          "max_enrollment": 12
        }
      ],
      "description": "Teaches fundamental sound concepts: propagation, absorption, reflection, transmission, frequency response, effective manipulation of the decibel in calculations of loudness, power, and voltages. Covers intelligent use of microphone patterns, and loudspeaker and monitor placement. Investigates indoor sound vs. outdoor sound. Teaches proper cabling and connections, speaker crossovers, and theory of bi- amplification. Covers mixer diagrams and basic electronics. Incorporates practical experience acquired in giving technical support to UVU theater, music department, or public relations functions."
    },
    {
      "number": "DGM 3481",
      "name": "Advanced Audio Restoration and Forensics",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "catalog_offered": "Fall",
      "prerequisites": [
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "past_offered": [
        {
          "crn": "25063",
          "section": "001",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "TR",
          "instructor": "Wisland, Michael Garner",
          "enrollment": 13,
          "max_enrollment": 27
        }
      ],
      "description": "Covers advanced principles and practices for digitally restoring difficult audio specimens, and includes forensic audio restorative and reconstructive techniques important to historical, investigative, and criminological fields as well. Also covers, in more depth, the cylinder recording period at the turn of the century."
    },
    {
      "number": "DGM 350R",
      "name": "Advanced Topics in Digital Motion Picture Production",
      "variable": {},
      "prerequisites": [
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "past_offered": [
        {
          "crn": "26403",
          "section": "002",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "MW",
          "instructor": "Nibley, Paul Sloan",
          "enrollment": 4,
          "max_enrollment": 15
        },
        {
          "crn": "26895",
          "section": "003",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "TR",
          "instructor": "Nibley, Alex",
          "enrollment": 16,
          "max_enrollment": 16
        },
        {
          "crn": "10771",
          "section": "I01",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "TBA",
          "instructor": "Lisonbee, Dennis R",
          "enrollment": 1,
          "max_enrollment": 9
        }
      ],
      "description": "Includes relevant and changing topics and tools used in digital motion picture industry. Emphasizes hands-on experience. Uses digital cinema and production management and development tools to create a typical digital media project. Curriculum may vary from one semester to another. May be repeated for a maximum of 9 credits toward graduation."
    },
    {
      "number": "DGM 3540",
      "name": "Cinematography II",
      "credits": 3,
      "lecture": 1,
      "lab": 5,
      "offered": [
        "Fall",
        "Spring"
      ],
      "prerequisites": [
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "past_offered": [
        {
          "crn": "15475",
          "section": "001",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "MW",
          "instructor": "Trim, Robert Louie",
          "enrollment": 13,
          "max_enrollment": 15
        }
      ],
      "description": "A \"hands-on\" class that covers the role of the Director of Photography (DP) and Gaffer in drama-based broadcast television and digital cinematography. Teaches continuity of lighting, visual story telling, implied script subtext though light quality and color, continuity in direction, use of lenses and shot blocking for fixed and moving camera. Covers advanced grip and lighting equipment use and setups. Covers working with a producer, director, production designer, set decorator, boom operator and editor and on-set protocol."
    },
    {
      "number": "DGM 3560",
      "name": "Post Production",
      "credits": 3,
      "lecture": 3,
      "lab": 1,
      "offered": [
        "Spring"
      ],
      "prerequisites": [
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "past_offered": [
        {
          "crn": "20156",
          "section": "601",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "R",
          "instructor": "Andersen, Duane Ronald",
          "enrollment": 24,
          "max_enrollment": 25
        }
      ],
      "description": "Teaches the professional post production process used to complete video tape, digital cinema, and multimedia productions. Covers workflow, dialogue cutting, montage cutting, music cutting, multi-camera editing, multi-layer compositing, audio mixing, special effects editing, animation editing, fine cutting and color correcting."
    },
    {
      "number": "DGM 3570",
      "name": "Digital Story Telling Workshop",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "catalog_offered": "Fall, Spring",
      "prerequisites": [
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "past_offered": [
        {
          "crn": "17162",
          "section": "601",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "T",
          "instructor": "Nibley, Alex",
          "enrollment": 17,
          "max_enrollment": 17
        }
      ],
      "description": "Teaches advanced writing for digital media and digital cinema. Covers professional script structure based around the 8 sequence motion picture structure. Includes writing assignments each week that will be read and analyzed according to structure and execution of a goal. Discusses, a specific scriptwriting subject each week such as finding the idea, research, outlining and rewriting."
    },
    {
      "number": "DGM 3580",
      "name": "Digital Cinema Production Workshop",
      "credits": 3,
      "lecture": 2,
      "lab": 3,
      "offered": [
        "Fall",
        "Spring"
      ],
      "prerequisites": [
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "past_offered": [
        {
          "crn": "24310",
          "section": "001",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "MW",
          "instructor": "Lisonbee, Dennis R",
          "enrollment": 14,
          "max_enrollment": 15
        }
      ],
      "description": "Offers an advanced workshop format class structure. Requires a short script or concept to be polished and produced during the semester. Utilizes project-based opportunities to apply and hone skills in digital cinema direction, editing scripts, casting, rehearsing and performing a scene, cinematography and post production. Includes polishing concept for shooting, then shooting and editing for presentation and critique."
    },
    {
      "number": "DGM 351R",
      "name": "Digital Broadcasting",
      "credits": 3,
      "lecture": 2,
      "lab": 3,
      "offered": [
        "Fall",
        "Spring"
      ],
      "prerequisites": [
        "DGM 2110",
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "past_offered": [
        {
          "crn": "20985",
          "section": "001",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "R",
          "instructor": "Lisonbee, Dennis R",
          "enrollment": 14,
          "max_enrollment": 15
        }
      ],
      "description": "Teaches planning, management and execution of live video productions integrating multiple cameras. Teaches the roles of the broadcast production team. Studies various types of digital standards and broadcast equipment. Includes hand-on broadcast lab where students produce and direct short productions. May be repeated for a maximum of 12 credits toward graduation."
    },
    {
      "number": "DGM 3520",
      "name": "Digital Motion Picture Production",
      "credits": 3,
      "lecture": 2,
      "lab": 3,
      "offered": [
        "Spring"
      ],
      "prerequisites": [
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "past_offered": [
        {
          "crn": "14299",
          "section": "001",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "TR",
          "instructor": "Andersen, Duane Ronald",
          "enrollment": 22,
          "max_enrollment": 22
        }
      ],
      "description": "Teaches advanced digital cinema storytelling production techniques for CD-ROM, DVD, World Wide Web and theatrical distribution. Includes instruction in the different positions that comprise the entire production team, including the roles of the team and how they evolve through the pre-production, production and post production process. Stresses narrative film based on structurally sound three act eight sequence scripts. Involves dividing the class into production teams and producing short three act narrative films that include dialogue, sound effects and music."
    },
    {
      "number": "DGM 3530",
      "name": "Digital Film Production Management",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "catalog_offered": "Fall",
      "prerequisites": [
        "(Portfolio review acceptance or consent of instructor)",
        "University Advanced Standing"
      ],
      "past_offered": [
        {
          "crn": "26405",
          "section": "601",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "T",
          "instructor": "Conder, Robert N",
          "enrollment": 14,
          "max_enrollment": 30
        }
      ],
      "description": "Teaches the foundational principles which contribute to both quality and profitability in digital motion picture projects that range from micro to mega budgets. Reviews team dynamics such as the relationship between producer and other production team members. Introduces industry standard Entertainment Partners budgeting and scheduling software tools, which can be used as management tools to guide multiple projects. Focuses on video/film workflow, from development and budgeting to pre-production, production and post-production. Requires the submission of an industry standard production book at the end of the semester."
    },
    {
      "number": "DGM 360R",
      "name": "Advanced Topics in 2D/3D Animation",
      "variable": {},
      "prerequisites": [
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "past_offered": [
        {
          "crn": "26660",
          "section": "001",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "MWF",
          "instructor": "Romrell, Anthony J",
          "enrollment": 9,
          "max_enrollment": 28
        }
      ],
      "description": "Intended for advanced students with an interest in digital animation. Includes relevant and changing topics and tools. Emphasizes hands-on experience along with lectures and demonstrations. Curriculum may vary from one semester to another. May be repeated for a maximum of 9 credits toward graduation."
    },
    {
      "number": "DGM 3611",
      "name": "Game Design I",
      "credits": 3,
      "lecture": 2,
      "lab": 3,
      "offered": [
        "Fall"
      ],
      "prerequisites": [
        "Portfolio Acceptance Review",
        "University Advanced Standing"
      ],
      "days": "",
      "description": "Explores video and computer gaming from historic, economic and production perspectives. Introduction to game theory, analysis, design documentation, and development."
    },
    {
      "number": "DGM 3621",
      "name": "Hard Surface Modeling",
      "credits": 3,
      "lecture": 2,
      "lab": 3,
      "offered": [
        "On Sufficient Demand"
      ],
      "prerequisites": [
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "days": "",
      "description": "Teaches theories, tools, and principles of current industry modeling trends, specifically for video games and short animated films."
    },
    {
      "number": "DGM 3650",
      "name": "3D Production Pipeline and Rendering",
      "credits": 3,
      "lecture": 2,
      "lab": 3,
      "offered": [
        "Fall"
      ],
      "prerequisites": [
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "days": "",
      "description": "Emphasizes industry pipeline processes. Covers the application of lighting and rendering in 3D animation and game environments. Includes composition, technical lighting, layer- based rendering, and texture baking. A junior- level group project will be completed in the course of the semester."
    },
    {
      "number": "DGM 3660",
      "name": "Advanced Rigging and Animation",
      "credits": 3,
      "lecture": 2,
      "lab": 3,
      "offered": [
        "Spring"
      ],
      "prerequisites": [
        "DGM 3650",
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "days": "",
      "description": "Studies the process of rigging, and the motion of characters and objects in games and animation. Includes full character, muscle, facial, and dynamic rigs. Reinforces principles of animation."
    },
    {
      "number": "DGM 3680",
      "name": "Animation Project",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "catalog_offered": "Spring",
      "prerequisites": [
        "(Portfolio Review Acceptance or Departmental Approval)",
        "University Advanced Standing"
      ],
      "past_offered": [
        {
          "crn": "20166",
          "section": "001",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [
            null,
            {}
          ],
          "days": "M",
          "instructor": "Esmay, Larry Rodayne",
          "enrollment": 21,
          "max_enrollment": 24
        }
      ],
      "description": "Devoted to the pre-production of a multi- semester team project for gaming and animation students. Includes research, writing, scripting, designing, storyboarding and pre- visualization of a client-driven project."
    },
    {
      "number": "DGM 370R",
      "name": "Advanced Topics in Internet Development",
      "variable": {},
      "prerequisites": [
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "past_offered": [
        {
          "crn": "26897",
          "section": "001",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "R",
          "instructor": "Harper, Michael Forrest",
          "enrollment": 3,
          "max_enrollment": 6
        },
        {
          "crn": "26406",
          "section": "I02",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "TBA",
          "instructor": "Anderson, Thor Andrew",
          "enrollment": 4,
          "max_enrollment": 9
        }
      ],
      "description": "Intended for advanced students with an interest in Internet authoring. Includes relevant and changing topics and tools. Emphasizes hands-on experience along with lectures and demonstrations. Curriculum may vary from one semester to another. May be repeated for a maximum of 9 credits toward graduation."
    },
    {
      "number": "DGM 3740",
      "name": "Web Content Management",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "catalog_offered": "Spring",
      "prerequisites": [
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "past_offered": [
        {
          "crn": "15244",
          "section": "001",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "MW",
          "instructor": "Cheney, Paul W",
          "enrollment": 21,
          "max_enrollment": 24
        }
      ],
      "description": "Instructs students on how to create a site that in content rich, dynamic, and meaningful to site visitors. Teaches participants how to effectively plan, develop, and arrange content through the use of information design principles, content management systems, and analysis tools. Culminates with students building a live site for a real-world client where students must solve real design, development, and delivery issues."
    },
    {
      "number": "DGM 3750",
      "name": "Media Traffic and Analytics",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "catalog_offered": "Fall",
      "prerequisites": [
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "past_offered": [
        {
          "crn": "24425",
          "section": "001",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "TR",
          "instructor": "Card, Arlen L",
          "enrollment": 13,
          "max_enrollment": 24
        }
      ],
      "description": "Provides students access to all the leading and most effective traffic techniques, ranging from organic search traffic and all aspects of SEO, through paid traffic of all kinds, and on to free, direct traffic methods. Includes Web and Mobile traffic techniques and analytical tools. Covers all the concepts involved in these areas of traffic and analytics, and will have experience actually generating traffic to a real web page (and may even make money), and using analytical tools to evaluate their results."
    },
    {
      "number": "DGM 3760",
      "name": "Web Languages II",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "catalog_offered": "Spring",
      "prerequisites": [
        "Portfolio Review Acceptance",
        "University Advanced Standing",
        "DGM 1110",
        "DGM 2120"
      ],
      "past_offered": [
        {
          "crn": "21408",
          "section": "001",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "T",
          "instructor": "Cheney, Paul W",
          "enrollment": 18,
          "max_enrollment": 24
        }
      ],
      "description": "Covers server-side web development and database interaction. Offers the skills and knowledge necessary to produce web sites in a professional environment. Covers current technology and design standards for websites that are database driven using current languages and platforms. Demonstrates how database interaction can enhance a multimedia website. Includes lectures, demonstrations, and weekly projects. Culminates with a final project during which each student will design and create materials for use in a well-designed database driven web site."
    },
    {
      "number": "DGM 3780",
      "name": "Authoring for the Internet II",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "catalog_offered": "Spring",
      "prerequisites": [
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "past_offered": [
        {
          "crn": "10778",
          "section": "001",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "TR",
          "instructor": "Romrell, Anthony J",
          "enrollment": 5,
          "max_enrollment": 28
        }
      ],
      "description": "Participants learn advanced techniques for delivering exceptional Flash based Internet applications. Teaches advanced scripting fundamentals, how to deliver content through server-side database connectivity, and engaging the audience through highly interactive experiences."
    },
    {
      "number": "DGM 3790",
      "name": "Rich Internet Application Development I",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "catalog_offered": "Fall",
      "prerequisites": [
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "days": "",
      "description": "Instructs students in various Rich Internet Application development technologies. Investigates RIA development and delivery technologies such as Flash, Flex, and ActionScript, with a special emphasis on the integration of Digital Media into Internet applications. Teaches the design and development workflow for interactive, media- rich applications delivered via networked browser, computer desktops, and mobile devices."
    },
    {
      "number": "DGM 4000",
      "name": "Writing for Digital Media",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "catalog_offered": "Fall, Spring",
      "prerequisites": [
        "ENGL 2010 or ENGL 2020",
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "days": "",
      "description": "Teaches the role of the written word in the digital arena and the writing skills for students to become effective communicators within the various forms of multimedia including web pages, digital animation, audio, video and cinema."
    },
    {
      "number": "DGM 4310",
      "name": "Senior Projects I",
      "credits": 3,
      "lecture": 1,
      "lab": 6,
      "offered": [
        "Fall"
      ],
      "prerequisites": [
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "days": "",
      "description": "For senior Digital Media students. Provides a capstone experience working in digital media. Develops individual real world projects in consultation with a faculty advisor. Encourages team work."
    },
    {
      "number": "DGM 4410",
      "name": "Senior Projects II",
      "credits": 3,
      "lecture": 1,
      "lab": 6,
      "offered": [
        "Spring"
      ],
      "prerequisites": [
        "DGM 4310",
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "past_offered": [
        {
          "crn": "23507",
          "section": "001",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "T",
          "instructor": "Lisonbee, Dennis R",
          "enrollment": 23,
          "max_enrollment": 25
        },
        {
          "crn": "23506",
          "section": "002",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "W",
          "instructor": "Christensen, Trudy Kowallis",
          "enrollment": 16,
          "max_enrollment": 25
        },
        {
          "crn": "21412",
          "section": "003",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "MWF",
          "instructor": "Romrell, Anthony J",
          "enrollment": 18,
          "max_enrollment": 20
        },
        {
          "crn": "23505",
          "section": "601",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "W",
          "instructor": "Harper, Michael Forrest",
          "enrollment": 21,
          "max_enrollment": 28
        }
      ],
      "description": "Conclusion of DGM 4310. Concludes the capstone experience for digital media students. Addresses post production issues such as testing, packaging, and documentation. Offers the opportunity to present projects to students, faculty, sponsors, and potential employers or clients."
    },
    {
      "number": "DGM 4420",
      "name": "Applied Digital Media Technology",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "catalog_offered": "On Sufficient Demand",
      "prerequisites": [
        "University Advanced Standing"
      ],
      "days": "",
      "description": "For educators and general public interested in technology integration. Examines the ever- expanding array of options available to educators, business personnel and government agencies for creating and distributing rich media based materials. Explores what new technologies and creative practices are available and how to implement them into their present workflow. Focuses on getting the most out of Digital Media technology."
    },
    {
      "number": "DGM 4611",
      "name": "Game Design II",
      "credits": 3,
      "lecture": 2,
      "lab": 3,
      "offered": [
        "Spring"
      ],
      "prerequisites": [
        "DGM 3611",
        "University Advanced Standing"
      ],
      "past_offered": [
        {
          "crn": "25064",
          "section": "001",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "MWF",
          "instructor": "Clayton, Marty J",
          "enrollment": 8,
          "max_enrollment": 27
        }
      ],
      "description": "Follows DGM 3611 Game Design I. Continues study of game theory, analysis, design documentation. Emphasis on game development using a gaming engine. A laptop computer is required for this course."
    },
    {
      "number": "DGM 4620",
      "name": "Producing Technology-based Training",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "catalog_offered": "On Sufficient Demand",
      "prerequisites": [
        "DGM 4610",
        "University Advanced Standing"
      ],
      "days": "",
      "description": "Builds on information taught in DGM 3290 and DGM 4610. Generates story boards from a computer design tool into an authoring tool. Teaches basic principles of building and editing frames with text and multimedia elements. Provides practice and feedback, remediation as needed. Addresses individual learner needs and evaluation of program effectiveness. Uses program objectives to evaluate final program product."
    },
    {
      "number": "DGM 4621",
      "name": "Performance Animation",
      "credits": 3,
      "lecture": 2,
      "lab": 3,
      "offered": [
        "On Sufficient Demand"
      ],
      "prerequisites": [
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "days": "",
      "description": "Teaches basic animation principles, such as: flexibility, timing and spacing, overlapping action, the successive-breaking- of-joints, and overlapping action. Covers theatrical performance animation, emotional facial, phoneme, and dialoged animation. Explores expressive character enactment, representative of life."
    },
    {
      "number": "DGM 4630",
      "name": "Visual Effects and Compositing I",
      "credits": 4,
      "lecture": 4,
      "lab": 0,
      "offered": [
        "Fall"
      ],
      "prerequisites": [
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "days": "",
      "description": "Focuses on the production of digital special effects and compositing in 2D and 3D environments. Includes multi-layer effects, green screen, digital mattes, and grading. Tools may include visual effects editing and particle generation software."
    },
    {
      "number": "DGM 4640",
      "name": "Visual Effects and Compositing II",
      "credits": 3,
      "lecture": 2,
      "lab": 3,
      "offered": [
        "Spring"
      ],
      "prerequisites": [
        "DGM 4630",
        "Portfolio Review Acceptance",
        "and University Advanced Standing"
      ],
      "past_offered": [
        {
          "crn": "20167",
          "section": "001",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "MWF",
          "instructor": "Romrell, Anthony J",
          "enrollment": 17,
          "max_enrollment": 24
        }
      ],
      "description": "Focuses on the use of digital special effects in a three-dimensional environment including high-end particle effects, digital fluids, and advanced simulation. Tools include industry standard Maya and Houdini."
    },
    {
      "number": "DGM 4790",
      "name": "Rich Internet Application Development II",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "catalog_offered": "Spring",
      "prerequisites": [
        "DGM 3790",
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "past_offered": [
        {
          "crn": "23134",
          "section": "001",
          "start_date": "05-JAN-15",
          "end_date": "30-APR-15",
          "scheduled": [],
          "days": "TR",
          "instructor": "Anderson, Thor Andrew",
          "enrollment": 10,
          "max_enrollment": 24
        }
      ],
      "description": "Instructs students in various Rich Internet Application development technologies with a focus on utilizing server-side resources. Investigates a wide variety of RIA technologies including media servers, messaging, and web services. Teaches how to design and develop RIAs using a variety of tools, code frameworks, and delivery clients. Requires creation of interactive and useful media-rich web experiences for end users."
    },
    {
      "number": "DGM 4430",
      "name": "Audio Mastering",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "catalog_offered": "On Sufficient Demand",
      "prerequisites": [
        "DGM 3420",
        "Portfolio Review Acceptance",
        "and University Advanced Standing"
      ],
      "days": "",
      "description": "Deals with the final step in any audio production--Mastering. Covers the art of final EQ and Compression. Explores the issues of bit depth, sampling rates, dither, jitter, EQ techniques, and Dynamic Range manipulation (expanders and compressors). Looks into analog and digital signal processors, including reverb, and the final step of putting an album together with a brief discussion on vinyl pre- mastering. Teaches the use no fewer than 15 different compressors, both analog and digital for comparative listening tests."
    },
    {
      "number": "DGM 4560",
      "name": "Post Production Finishing",
      "credits": 3,
      "lecture": 2,
      "lab": 3,
      "offered": [
        "On Sufficient Demand"
      ],
      "prerequisites": [
        "DGM 3560",
        "Portfolio Review Acceptance",
        "and University Advanced Standing"
      ],
      "days": "",
      "description": "Focuses on digital post production workflow and color grading, digital output for digital motion picture production."
    },
    {
      "number": "DGM 4610",
      "name": "Designing Technology-based Training",
      "credits": 3,
      "lecture": 3,
      "lab": 0,
      "catalog_offered": "On Sufficient Demand",
      "prerequisites": [
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "days": "",
      "description": "Provides shadowing opportunities in an educational or business setting where students can see basic principles of training and development in action and gain insights into training design, development, implementation, and evaluation. Uses the course map content from the DGM 3290 course to pre-author a technology-based training program, which includes creating a course navigation map (flowchart) to determine course sequence and navigational paths, designing storyboard frames with multimedia elements, and generating the navigation map and storyboards into an authoring tool. Completers should be prepared to apply shadowing experiences, discussion insights, and pre- authoring computer skills to future training opportunities."
    },
    {
      "number": "DGM 481R",
      "name": "Internship",
      "variable": {},
      "catalog_offered": "Fall, Spring, Summer",
      "prerequisites": [
        "Portfolio Review Acceptance",
        "Internship Orientation",
        "University Advanced Standing"
      ],
      "days": "",
      "description": "For Digital Media majors only. Provides a transition from school to-work where learned theory is applied to actual practice through a meaningful on-the-job experience. Includes student, employer and coordinator evaluations, on-site work visits, and written assignments. Completers should obtain experience in establishing and accomplishing individualized work objectives that improve work performance. Internship is intended for senior DGM students who are working at that level. Credit is determined by the number of hours a student works during the semester and completion of individually set goals. May be repeated for a maximum of 16 credits towards graduation. Graded credit/no-credit."
    },
    {
      "number": "DGM 497R",
      "name": "Independent Study",
      "variable": {},
      "prerequisites": [
        "Portfolio Review Acceptance",
        "University Advanced Standing"
      ],
      "days": "",
      "description": "For bachelor's degree students and other interested persons. Offers independent study as directed in reading or in individual projects; offered at the discretion and approval of the department chairperson. May be repeated for a maximum of 6 credits toward graduation."
    }
  ];
   $scope.courseSort = function(course) {
			if(isNaN(course[$scope.sortExpression]))
				return course[$scope.sortExpression];
			return parseInt(course[$scope.sortExpression]);
		} 
});
