import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    return Ember.A(speakers.slice());
  }
});

var speakers = [
  {
    "id": "ykatz",
    "imageURL": "images/speakers/ykatz.jpeg",
    "twitterURL": "http://twitter.com/@wycats",
    "twitterHandler": "@wycats",
    "name": "Yehuda Katz",
    "bio": "Yehuda is a member of the Ember.js, Ruby on Rails and jQuery Core Teams; his 9-to-5 home is at the startup he founded, <a href=\"http://www.tilde.io\">Tilde Inc</a>, where he works on <a href=\"http://www.skylight.io\">Skylight</a>, the smart profiler for Rails. Yehuda spends most of his time hacking on open source—his main projects, along with others, like Thor, Handlebars and Janus—and traveling the world doing open source evangelism work.",
    "session": "Keynote"
  },
  {
    "id": "tdale",
    "imageURL": "images/speakers/tdale.jpg",
    "twitterURL": "http://twitter.com/@tomdale",
    "twitterHandler": "@tomdale",
    "name": "Tom Dale",
    "bio": "Tom is one of the creators of Ember.js, and a Co-founder at <a href=\"http://www.tilde.io\">Tilde</a>. He spends his days working on the open source projects Tilde supports, doing Ember consulting, and building their first developer product, <a href=\"http://www.skylight.io\">Skylight</a>. He's a former Apple engineer who first gained expert front-end JavaScript skills working on MobileMe and iCloud. He's a super hipster, and still isn't sure if it's serious or ironic.",
    "session": "Keynote"
  },
  {
    "id": "ltan",
    "imageURL": "images/speakers/ltan.jpg",
    "twitterURL": "http://twitter.com/@sugarpirate_",
    "twitterHandler": "@sugarpirate_",
    "name": "Lauren Tan",
    "bio": "Self-taught designer turned front end developer for @homelyau, co-founder @pricegeek. Co-founded @pricegeek after finishing a Finance degree.",
    "session": "Ambitious UX for Ambitious Apps"
  },
  {
    "id": "tbillups",
    "imageURL": "images/speakers/tbillups.jpeg",
    "twitterURL": "http://twitter.com/@toranb",
    "twitterHandler": "@toranb",
    "name": "Toran Billups",
    "bio": "Toran Billups is a software professional with a passion for all things javascript. When he isn't debating the tradeoffs of one-way vs two-way databinding you can find him teaching 5th grade students python!",
    "session": "Test Driven Development By Example"
  },
  {
    "id": "gchan",
    "imageURL": "images/speakers/gchan.jpeg",
    "twitterURL": "http://twitter.com/@chancancode",
    "twitterHandler": "@chancancode",
    "name": "Godfrey Chan",
    "bio": "Godfrey Chan is co-founder at Brewhouse Software in Vancouver, Canada. He helps run the #EmberYVR meetup and is a member of the Ruby on Rails core team. In his previous life, he was also an award-winning WordPress™ plugin author.",
    "session": "Hijacking Hacker News with Ember.js"
  },
  {
    "id": "efaulkner",
    "imageURL": "images/speakers/efaulkner.jpg",
    "twitterURL": "http://twitter.com/@eaf4",
    "twitterHandler": "@eaf4",
    "name": "Edward Faulkner",
    "bio": "Edward Faulkner is founder and CTO at BraveLeaf, a software startup that serves the long-term care industry. BraveLeaf's product is an Ember app, and may be one of the oldest continuously-updated Ember apps in the world (started on Sproutcore 1.6rc2! Get off my lawn!). He is also a research associate of the MIT Media Lab, and was previously a senior engineer at Akamai Technologies where he built internet-scale security and reliability infrastructure.",
    "session": "Physical Design"
  },
  {
    "id": "mbeale",
    "imageURL": "images/speakers/mbeale.png",
    "twitterURL": "http://twitter.com/@mixonic",
    "twitterHandler": "@mixonic",
    "name": "Matthew Beale",
    "bio": "Matthew has been developing with Ember.js for several years. He is the author of an early book on Ember, blogs at madhatted.com, and happily spends his spare time contributing code. Through a consulting partnership named 201 Created, he's worked with nearly two dozen companies to solve tough problems with Ember.",
    "session": "Aligning Ember with Web Standards"
  },
  {
    "id": "bstoroz",
    "imageURL": "images/speakers/bstoroz.png",
    "twitterURL": "http://twitter.com/@brittanystoroz",
    "twitterHandler": "@brittanystoroz",
    "name": "Brittany Storoz",
    "bio": "I believe in life, liberty and the pursuit of happiness and have been known to pick up pencils with my toes. Plus I write JavaScript at Mozilla.",
    "session": "Building Custom Apps with Ember CLI"
  },
  {
    "id": "jwhite",
    "imageURL": "images/speakers/jwhite.png",
    "twitterURL": "http://twitter.com/@jgwhite",
    "twitterHandler": "@jgwhite",
    "name": "Jamie White",
    "bio": "Developer at With Associates. Organiser of Ember London. Volunteer thanks to Code Club. Learning with London Computation Club. Did I say London enough already?",
    "session": "Growing the community, one Tomster at a time"
  },
  {
    "id": "spenner",
    "imageURL": "images/speakers/spenner.jpg",
    "twitterURL": "http://twitter.com/@stefanpenner",
    "twitterHandler": "@stefanpenner",
    "name": "Stef Penner",
    "bio": "Longboarding canadian, oss addict, ember.js core team member, living in manhattan and working at @yapp.",
    "session": "Ember.js Performance"
  },
  {
    "id": "sselikoff",
    "imageURL": "images/speakers/sselikoff.jpeg",
    "twitterURL": "http://twitter.com/@samselikoff",
    "twitterHandler": "@samselikoff",
    "name": "Sam Selikoff",
    "bio": "Sam Selikoff is a front-end engineer at TED. Formerly a graduate student of economics, he unexpectedly discovered his love of programming while doing data work for a consulting firm. He is passionate about JavaScript, data visualization and economics.",
    "session": "Bring Sanity to Frontend Infrastructure with Ember.js"
  },
  {
    "id": "dgebhardt",
    "imageURL": "images/speakers/dgebhardt.jpeg",
    "twitterURL": "http://twitter.com/@dgeb",
    "twitterHandler": "@dgeb",
    "name": "Dan Gebhardt",
    "bio": "Dan is a co-founder of the SaaS consultancy Cerebris and has been working as part of the Tilde team since 2012. He's been developing web applications for 15 years, with a recent focus on Rails-driven APIs and Ember UIs. Dan is an avid contributor to open source, the lead developer of Orbit.js, and a regular speaker. He loves hiking near his home in NH with his wife, two boys, and their ridiculously happy dog.",
    "session": "Fault Tolerant UX"
  },
  {
    "id": "lsilber",
    "imageURL": "images/speakers/lsilber.jpg",
    "twitterURL": "http://twitter.com/@wifelette",
    "twitterHandler": "@wifelette",
    "name": "Leah Silber",
    "bio": "Leah is an all-around open source advocate. During the day time, she's one of the founders at <a href=\"http://www.tilde.io\">Tilde Inc</a>, the open-source-centric company behind <a href=\"http://www.skylight.io\">Skylight</a>. In her spare time, in addition to running EmberConf, Leah works on GoGaRuCo, RailsConf, and a number of User Groups. She's a retired member of the jQuery Core Team, and a member of the Ember Core Team.<br><br>She previously worked as a consultant for clients in the tech sector, ran events for the jQuery Foundation and was employed managing the Community Marketing and Events department at Engine Yard. She is originally from Brooklyn, NY and now lives in Portland, OR with her husband.",
    "session": "EmberConf MiniTalks"
  },
  {
    "id": "lmelia",
    "imageURL": "images/speakers/lmelia.jpg",
    "twitterURL": "http://twitter.com/@lukemelia",
    "twitterHandler": "@lukemelia",
    "name": "Luke Melia",
    "bio": "Luke Melia is the organizer of the world-famous Ember.js NYC meetup. Luke helped launch one of the first commercial apps in Ember, Yapp, and is co-founder of Yapp Labs, a consultancy specializing in Ember.",
    "session": "The Art of Ember App Deployment"
  },
  {
    "id": "blangslet",
    "imageURL": "images/speakers/blangslet.jpeg",
    "twitterURL": "http://twitter.com/@blangslet",
    "twitterHandler": "@blangslet",
    "name": "Bryan Langslet",
    "bio": "Bryan is a Product Designer turned passionate Ember developer currently building design-centric apps at Envoy (@signwithenvoy).<br><br>Hobbies include: drinking the Web Component Kool-Aid and twisting his mind in strange and beautiful ways through international travel.",
    "session": "Interaction Design with Ember 2.0 and Polymer"
  },
  {
    "id": "strevathan",
    "imageURL": "images/speakers/strevathan.jpeg",
    "twitterURL": "http://twitter.com/@strevat",
    "twitterHandler": "@strevat",
    "name": "Steve Trevathan",
    "bio": "Partner, Creative Director at DockYard. Organizer of UX East, UX Happy Hour and UX Boston.",
    "session": "Designing for Ember Apps"
  },
  {
    "id": "skinney",
    "imageURL": "images/speakers/skinney.jpg",
    "twitterURL": "http://twitter.com/@stevekinney",
    "twitterHandler": "@stevekinney",
    "name": "Steve Kinney",
    "bio": "Steve is an instructor at the Turing School of Software and Design and a former New York City teacher.",
    "session": "Building Real-Time Applications with Ember"
  },
  {
    "id": "chenn",
    "imageURL": "images/speakers/chenn.jpg",
    "twitterURL": "http://twitter.com/@cjwhn",
    "twitterHandler": "@cjwhn",
    "name": "Chris Henn",
    "bio": "Chris Henn creates next-generation data visualizations for H2Ometrics, the collaborative water analytics platform. When he’s not working in Ember, Chris studies mathematics a Reed College in Portland, Oregon.",
    "session": "Dynamic Graphic Composition in Ember"
  },
  {
    "id": "ceppstein",
    "imageURL": "images/speakers/ceppstein.jpg",
    "twitterURL": "http://twitter.com/@chriseppstein",
    "twitterHandler": "@chriseppstein",
    "name": "Chris Eppstein",
    "bio": "Coming Soon!",
    "session": "Closing Keynote"
  }
];
