import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    return Ember.A(sponsorList.slice());
  }
});


export var sponsorList =  [
  {
    "url": "http://www.skylight.io",
    "imageURL": "/images/sponsors/skylight.png",
    "description": "Skylight is a smart profiler that lets you quickly diagnose and resolve performance issues with your Rails apps where it matters: in production. It's built by the fine folks at <a href=\"http://www.tilde.io\">Tilde Inc</a>, who have spent the last few years building open source projects like Ember, Handlebars and Rails itself. Visit <a href=\"http://www.skylight.io\">skylight.io</a> to start your free trial.",
    "name": "Skylight"
  },
  {
    "url": "http://dockyard.com",
    "imageURL": "/images/sponsors/dockyard.png",
    "description": "DockYard is a full-stack development and design consultancy. Specialize in building beautifully designed Ember.js applications backed by Ruby on Rails, we've worked with startups as well as some of the largest companies in the world. We take  ownership of your project or work along side existing teams.",
    "name": "DockYard"
  },
  {
    "url": "http://www.ticketfly.com",
    "imageURL": "/images/sponsors/ticketfly.png",
    "description": "Ticketfly is a progressive ticketing company that makes it easy to discover events, buy tickets, and share events with your friends – all with world-class technology and customer support. We build applications used by millions musicians and fans, trusted by the best venues and festivals like <a href=\"http://burningman.org/\">Burning Man</a>.",
    "name": "Ticketfly"
  },
  {
    "url": "https://www.firebase.com/",
    "imageURL": "/images/sponsors/firebase.png",
    "description": "Firebase is a realtime API for building collaborative, modern applications. Using Firebase, you can easily wire up a backend for your Ember app with just frontend code. <a href=\"https://www.firebase.com/docs/web/libraries/ember/quickstart.html\"> EmberFire</a> is Firebase's officially supported adapter for using Firebase with Ember Data.",
    "name": "Firebase"
  },
  {
    "url": "http://www.bustle.com",
    "imageURL": "/images/sponsors/bustle.png",
    "description": "Showcasing Ember to a monthly audience of more than 25 million. We're a product and tech driven media company focused on building the best web, mobile, and CMS products in publishing.",
    "name": "Bustle"
  },
  {
    "url": "http://frontside.io/",
    "imageURL": "/images/sponsors/frontside.png",
    "description": "The Frontside is a consultancy that delivers beautiful, desktop-like experiences on the web using Ember. We believe that building great software starts by helping grow great software developers.",
    "name": "The Frontside"
  },
  {
    "url": "http://spiceworks.com",
    "imageURL": "/images/sponsors/spiceworks.png",
    "description": "Used by over 6 million IT pros and 3000 tech vendors, <a href=\"http://spiceworks.com\">Spiceworks</a> is the world’s first social business application for IT – and somethin’ that’s got the tech world all-a-buzz! IT pros use <a href=\"http://spiceworks.com\">Spiceworks</a> to do their jobs, talk-shop with each other and vendors and show off their IT projects. All in one place. All for free!",
    "name": "Spiceworks"
  },
  {
    "url": "http://www.zendesk.com",
    "imageURL": "/images/sponsors/zendesk.png",
    "description": "Zendesk provides a customer service platform designed to bring organizations and their customers closer together. With more than 45,000 customer accounts, Zendesk is used by organizations in 140 countries to provide support in more than 40 languages. Learn more at <a href=\"http://www.zendesk.com\">www.zendesk.com</a>.",
    "name": "Zendesk"
  },
  {
    "url": "https://addepar.com/",
    "imageURL": "/images/sponsors/addepar.png",
    "description": "Build something meaningful - Addepar unites an extraordinary team of engineers, product-thinkers and industry experts to shape the future of investment management. The team is reimagining how technology brings integrity, transparency, and impact to one of the world’s largest industries. <a href=\"https://addepar.com/careers/\"> Come build with us</a>.",
    "name": "Addepar"
  },
  {
    "url": "http://www.zenefits.com/",
    "imageURL": "/images/sponsors/zenefits.png",
    "description": "Manage all your HR—payroll, benefits, compliance, and more—online, in one beautiful dashboard. Zenefits is the fastest growing SaaS company EVER! We are experiencing explosive growth and are currently helping 10,000+ companies manage their employees better. Come join <a href=\"https://www.zenefits.com/\" '=\"\"> Zenefits</a>, and help us build an awesome product that improves people’s lives.",
    "name": "Zenefits"
  },
  {
    "url": "http://beatport.com",
    "imageURL": "/images/sponsors/beatport.png",
    "description": "<a href=\"http://beatport.com\">Beatport</a> is the home of electronic music. It serves the largest community of DJs, labels, and fans in the world by allowing them to connect and listen to music. The Beatport team consists of developers, designers, and architects who build products that cultivate a great electronic dance music experience year-round.",
    "name": "Beatport"
  },
  {
    "url": "http://customer.io/emberconf/",
    "imageURL": "/images/sponsors/customerio.png",
    "description": "<a href=\"http://customer.io/emberconf/\" '=\"\"> Customer.io </a> is a user-engagement platform built in Ember. A lightweight integration syncs real time data from your app. Mere mortals can create rules to send emails, A/B test content, and then see the results of their new superpowers in stats and charts.",
    "name": "Customer.io"
  },
  {
    "url": "http://www.mandrill.com",
    "imageURL": "/images/sponsors/mandrill.png",
    "description": "Mandrill is a reliable, scalable, and secure email infrastructure service trusted by more than 375,000 customers. Our easy setup will have you sending in minutes, and our detailed analytics offer all the insight you and your team need to measure email performance.",
    "name": "Mandrill"
  },
  {
    "url": "http://www.freshbooks.com",
    "imageURL": "/images/sponsors/freshbooks.png",
    "description": "FreshBooks is the #1 cloud accounting software designed exclusively for service-based small business owners, and offers easy-to-use time tracking, invoicing, online payments, and expense management. ‎Focused on empowering entrepreneurs to successfully run their businesses without having to learn accounting, FreshBooks is using Ember to make this a reality.",
    "name": "Freshbooks"
  },
  {
    "url": "http://www.opengov.com",
    "imageURL": "/images/sponsors/opengov.png",
    "description": "OpenGov is a civic-focused technology company transforming the way governments analyze and share financial data. More than 250 local governments across the country use the OpenGov Platform to collaborate and achieve greater transparency. With OpenGov, governments make smarter, data-driven decisions, respond more efficiently to citizens and foster a better-informed community.",
    "name": "OpenGov"
  },
  {
    "url": "http://locusenergy.com/",
    "imageURL": "/images/sponsors/locus.png",
    "description": "Locus Energy builds tools for the data monitoring and analytics of solar power systems. With some of the biggest names in solar as customers, our work has a tangible impact on the environment and economy. We use Ember for our data visualization tools and have big plans for more.",
    "name": "Locus Energy"
  },
  {
    "url": "https://engineering.groupon.com/",
    "imageURL": "/images/sponsors/groupon.png",
    "description": "Groupon is redefining how small businesses attract, retain, and interact with customers by providing merchants with a suite of products and services, including customizable marketing campaigns, credit card payment processing, and point-of-sale solutions that help businesses grow and operate more effectively.",
    "name": "Groupon"
  },
  {
    "url": "http://www.linkedin.com",
    "imageURL": "/images/sponsors/linkedin.png",
    "description": "<a href=\"https://www.linkedin.com\"> LinkedIn</a> is the world's largest professional network with 300 million members in over 200 countries and territories around the globe. Our mission is to connect the world's professionals to make them more productive and successful. <a href=\"https://www.linkedin.com\"> Join LinkedIn today</a>.",
    "name": "LinkedIn"
  },
  {
    "url": "http://yahoo.com",
    "imageURL": "/images/sponsors/yahoo.png",
    "description": "Yahoo! Inc. (Yahoo!) is a global technology company. Through the Company’s technology and insights, Yahoo! delivers digital content and experiences, across devices and globally.  Yahoo currently has over two dozen applications using ember, and counting.",
    "name": "Yahoo"
  },
  {
    "url": "http://madewithenvy.com",
    "imageURL": "/images/sponsors/envy.png",
    "description": "Envy is a web consultancy that helps transform ideas into successful products. We believe that great ideas can solve problems and improve lives — we work to solve those problems and improve the world around us through design and technology.",
    "name": "Envy"
  },
  {
    "url": "http://www.lootcrate.com",
    "imageURL": "/images/sponsors/lootcrate.png",
    "description": "Founded in 2012, Loot Crate ships monthly themed mystery boxes of the best geek, gaming, and pop culture gear over 300,000 subscribers. The team works hard to deliver a great experience, phenomenal support, awesome community, and epic exclusives from some of the most respected entertainment and consumer product companies in the world.",
    "name": "Loot Crate"
  },
  {
    "url": "http://www.dollarshaveclub.com/",
    "imageURL": "/images/sponsors/dollarshaveclub.png",
    "description": "Dollar Shave Club was founded in 2012 with the hopes of eliminating men’s shaving woes, and has amassed over $75 million in funding and 1.2 million users. Our engineering team uses Ember to build a fast, scalable, responsive, world-class experience at <a href=\"https://www.dollarshaveclub.com\"> dollarshaveclub.com</a>.",
    "name": "Dollar Shave Club"
  },
  {
    "url": "http://echobind.com/emberconf",
    "imageURL": "/images/sponsors/echobind.png",
    "description": "Echobind is a consultancy that uses Ember and Rails to build exceptional web applications. We help existing teams improve their products and bring new concepts to life across industries ranging from financial services to healthcare.",
    "name": "Echobind"
  },
  {
    "url": "http://www.stickermule.com/unlock?ref_id=3368978601",
    "imageURL": "/images/sponsors/stickermule.png",
    "description": "Sticker Mule is the fastest and easiest way to buy custom stickers. We offer free online proofs, 5 day turnaround and free UPS Ground shipping. With print runs starting at $49, we aim to be the Internet's favorite sticker printer.",
    "name": "Stickermule"
  },
  {
    "url": "http://www.201-created.com/",
    "imageURL": "/images/sponsors/201created.png",
    "description": "<a href=\"201-created.com\">201 Created</a> is a small consulting partnership with big app experience from NYC. We're adept at migrating traditional applications to Ember and at writing software from scratch. Our founders are startup engineers who know how to move fast, build in-house skills, and work with open source communities.",
    "name": "201 Created"
  },
  {
    "url": "http://www.puppetlabs.com",
    "imageURL": "/images/sponsors/puppet.png",
    "description": "Puppet Labs is the leader in IT automation. We're using Ember to build the next generation of our market-leading configuration management console, Puppet Enterprise.",
    "name": "Puppet Labs"
  },
  {
    "url": "http://www.kangacoders.com",
    "imageURL": "/images/sponsors/kanga.png",
    "description": "<a href=\"https://www.kangacoders.com\"> KangaCoders</a> is a team of qualified developers and true design artists. We are specialized in Mobile &amp; Web application development and also provide managed cloud-based services. To provide the highest possible quality we cover what we believe is the best selection of technologies out there, which obviously includes Ember.js!",
    "name": "Kanga Coders"
  }
];
