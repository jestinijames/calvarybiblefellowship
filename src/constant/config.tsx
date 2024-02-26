import Link from 'next/link';

import Apple from '~/svg/Apple.svg';
import Spotify from '~/svg/Spotify.svg';
import Youtube from '~/svg/Youtube.svg';

export const siteConfig = {
  title: 'Calvary Bible Fellowship',
  description: 'Salt And Light',
  url: 'https://cbf-church.org',
  email: 'reachout@cbf-church.org',
  questions: 'Have Questions? Please reach us at',
};

export const homepageHero = {
  header: 'WELCOME TO',
  title: 'Calvary Bible Fellowship',
  description:
    'To whoever will come - all who are spiritually weary; all who mourn, all who struggle, all who sin, all who are lonely - this church opens wide her doors and offers them welcome in the name of the Lord and Savior Jesus Christ',
  video: '/videos/hero.mp4',
};

export const homepageLatestSermon = {
  title: 'Watch the latest sermon',
  subtitle: 'Check it out',
  description:
    'Dive into our latest sermon experience. Watch below and explore more series on our YouTube channel. Join us on this spiritual journey of faith and inspiration.',
  link: '/sermons#latest-sermon',
};

export const homepageChurchLocation = {
  title: 'Sunday Gathering Location',
  subtitle: 'Join us every Sunday at 8:45 AM IST',
  description:
    ' World Cassette Outreach of India (WCOI)90, Osborne Rd, near Lake Side Hospital, Hermit Colony, Sivanchetti Gardens, Bengaluru, Karnataka 560042',
  link: '/contact-us',
  image: '/images/chair.jpg',
  linkText: 'Learn more',
};

export const homepageTrendingPodcasts = {
  title: 'Trending Podcasts',
  subtitle1: 'PODCAST',
  subtitle2: 'Explore',
  description:
    ' Explore our trending podcast series! Click on any to listen and dive into captivating stories, insightful discussions, and engaging content.',
};

export const sermonPageHero = {
  header: 'Sermons',
  title: 'Watch. Learn.',
  subtitle: 'Apply.',
  description:
    'Welcome to our Sermons page, where you`ll find insightful teachings and inspiring messages to guide your spiritual journey and nourish your soul. Dive in today!',
  image: '/images/sermons.jpg',
  latestSermonTitle: 'Watch the latest Sermon',
  latestSermonDescription:
    'Join us for our latest Sunday Sermon, where we dive deep into the Word of God. Tune in for spiritual nourishment, uplifting messages, and a deeper understanding of biblical truths.',
  sermonSeriesTitle: 'Sermon Series',
  sermonSeriesDescription:
    ' Delve into Our Sermon Series on Finding Meaning, Purpose,and Connection in Everyday Life.',
  sermonAPITitle: 'Explore the Series',
  sermonAPIDescription:
    ' Check back here to see if there`s any new content added.',
};

export const podcastPageHero = {
  header: 'Podcasts',
  title: 'Listen. Learn.',
  subtitle: 'Apply.',
  description:
    'Welcome to our Podcast page, your gateway to captivating conversations and thought-provoking discussions. Tune in for insightful insights and inspiring stories, enriching your mind and fueling your curiosity. Start exploring today!',
  image: '/images/podcasts.jpg',
  podcastSeriesTitle: 'Podcast Series',
  podcastSeriesDescription:
    'Engage and Enlighten: Tune into Our Podcast Series for Insightful Conversations on Faith, Life, and Community Connections.',
  podcastAPITitle: 'Explore the Series',
  podcastAPIDescription:
    ' Check back here to see if there`s any new content added.',
};

export const whoWeAreHero = {
  header: 'Who We Are',
  title: 'Our',
  subtitle: 'Story.',
  description:
    'Calvary Bible Fellowship was started by a few like-minded families who wanted to build a space for young people to follow Jesus, serve their city, and invite others to do the same.',
  image: '/images/aboutus.jpg',
  timelineHeader: 'Our Church Timeline',
  timelineDescription:
    'Our church has evolved significantly since 2002, with growth in membership, community engagement, and technological integration. Today, we stand as a beacon of faith and service, guided by our enduring commitment to spiritual growth and social impact.',
};

export const whatWeBelieveHero = {
  header: 'What We Believe',
  title: 'Our Core',
  subtitle: 'Beliefs.',
  description:
    'We are a gospel-centered community that celebrates the life, death, resurrection and teachings of Jesus.',
  image: '/images/what.jpg',
  whatWeDoTitle: 'What We Do',
  whatWeDoDescription:
    'We are committed to being a family made up of different generations, backgrounds, ethnicities and abilities. Unity in the midst of diversity is a big part of God`s Kingdom, and one we celebrate.',
  whatWeBelieveTitle: 'Mission Statement',
  whatWeBelieveDescription:
    'This is our mission statement from when Calvary Bible Fellowship was formed. It still represents what we think matters most.',
  careGroupTitle: 'Care Group Schedule',
  careGroupDescription:
    'Care groups provide a sense of family, deepen prayer life, offer support in crisis, facilitate sharing the faith, develop leadership, and enhance worship, aligning with the New Testament model of Christian community.',
};

export const leadershipPageHero = {
  header: 'Leadership',
  title: 'Meet Our',
  subtitle: 'Leaders.',
  description:
    'Welcome to our church leadership page. Here, you`ll find a dedicated team committed to serving our congregation, fostering spiritual growth, and supporting our community. Join us!',
  image: '/images/leadership.jpg',
  eldersTitle: 'Meet Our Elders',
  eldersDescription:
    'Elders oversee the life, teaching, and mission of Calvary Bible Fellowship, and work to keep everything we do focused on our vision to be the church and reach the city.',
  deaconsTitle: 'Meet Our Deacons',
  deaconsDescription:
    'Deacons use their gifts to serve the Elders by providing  perspective, wisdom and counsel, and encouragement on church-wide theological or strategic matters',
};

export const leadershipElders = [
  {
    name: 'Revanth T',
    title: 'ELDER',
    bio: 'Revanth came to know the Lord when he was 10 years old. Ever since, he has always desired to know the Lord more and make Him known. After a brief stint in the IT industry, he answered God’s call to step into full-time ministry. He is passionate about preaching, teaching God`s Word and theology. His vision is to equip churches by training Christians to study and teach the Word effectively. He also enjoys one-on-one conversation about Christian life. Revanth and his wife Angela have two boys, Asher and Zacharias. Their home is open for people to share good food and conversations about life, faith and cricket.',
    image: '/images/revanth.jpg',
  },
  {
    name: 'Charles Mathew',
    title: 'ELDER',
    bio: 'Charlie has been with Calvary Bible Fellowship since its inception. Along with his secular profession as a technology marketeer, he is involved in teaching and personally encouraging individuals to emulate Christ. He is particularly passionate about Biblical history and how God’s plan of salvation for mankind has been orchestrated through the ages. His other interests include people, places, cultures, music and football. A dad of two boys, he has been married to his wife Deema since 2005.',
    image: '/images/charles.jpg',
  },
  {
    name: 'Pradeep Daniel',
    title: 'ELDER',
    bio: 'Pradeep grew up in Chennai and has been part of Calvary Bible Fellowship from its start. He serves through church administration, service, group studies and by connecting with people one-on-one. He is an automobile enthusiast, which has opened many doors for him to reach out to young people. Serving the church and the Lord`s people behind the scenes gives him the greatest joy. He is married to Litty and the father of two boys. As a family, they desire to bless the church through their lives and home.',
    image: '/images/pradeep.jpg',
  },
  {
    name: 'Benjamin Mathew',
    title: 'ELDER',
    bio: 'Benjamin (Benji) was born in the UAE and came to know Christ during the first Gulf War. After a brief corporate stint, he felt the Lord`s leading to step into missions. He loves connecting with people from different cultures and seeing how the gospel breaks through all barriers. He has a burden for Bible translation, desiring to see God`s Word available to all people groups. He finds missions exciting and adventurous, and loves studying how creation, history and archaeology concur with Scripture. Benji enjoys sports, good jokes, unique cuisines, coffee and meaningful conversation. He and his wife, Preethi, have the joy of raising four daughters and desire to build a discipleship-centric home.',
    image: '/images/benjamin.jpg',
  },
];

export const leadershipDeacons = [
  {
    name: 'John Paul',
    title: 'DEACON',
    image: '/images/john.jpg',
  },
  {
    name: 'Jaison George',
    title: 'DEACON',
    image: '/images/jaison.jpg',
  },
  {
    name: 'Siji George',
    title: 'DEACON',
    image: '/images/siji.jpg',
  },
  {
    name: 'Job Sam Koshy',
    title: 'DEACON',
    image: '/images/job.jpg',
  },
  {
    name: 'Pisty Mathew',
    title: 'DEACON',
    image: '/images/pisty.jpg',
  },
  {
    name: 'Kishor Hegde',
    title: 'DEACON',
    image: '/images/kishor.jpg',
  },
  {
    name: 'Prithvi G',
    title: 'DEACON',
    image: '/images/prithvi.jpg',
  },
];

export const contactUsContent = {
  header: 'Contact Us',
  title: 'Connect With',
  subtitle: 'Us.',
  description:
    'Our Contact Us page is a dedicated platform for users to reach out and connect with us. Whether you have questions, feedback, or need support, we`re here to listen and assist you.',
  image: '/images/contact.jpg',
  location: 'https://maps.app.goo.gl/sLkPBuLvFUi3DKVv6',
  addressHeading: 'Sunday Gathering Location',
  addressTitle: 'World Cassette Outreach Of India (WCOI)',
  address:
    ' 90, Osborne Rd, near Lake Side Hospital, Hermit Colony, Sivanchetti Gardens, Bengaluru, Karnataka 560042',
  addressImage: '/images/map.jpg',
  disclaimer:
    'When filling out this form, we kindly request that you respect the content provided. Once your information is received, we will promptly respond to your request. Your message is valuable to us, and we appreciate your cooperation and understanding.',
};

export const contactUsFAQ = [
  {
    question1: 'What are the core beliefs of the church?',
    answer1: (
      <>
        <p>
          We are a gospel-centered community that celebrates the life, death,
          resurrection and teachings of Jesus. To know more, please go through
          the{' '}
          <Link className='underline hover:text-coral' href='/what-we-believe'>
            'Our Beliefs'
          </Link>{' '}
          and the{' '}
          <Link className='underline hover:text-coral' href='/who-we-are'>
            'Who We Are'
          </Link>{' '}
          pages.
        </p>
      </>
    ),
    question2: 'Who leads the church?',
    answer2: (
      <>
        <p>
          At Calvary Bible Fellowship, a team of{' '}
          <Link className='underline hover:text-coral' href='/elders'>
            'Elders'
          </Link>{' '}
          carry the responsibility of overseeing the mission, vision, life and
          doctrine of the church. They do this largely by empowering and caring
          for the men and women who serve the church to lead ministries, take
          bible studies, and care for the flock.
        </p>
      </>
    ),
  },
  {
    question1: 'I`m skeptical about Christianity, am I still welcome?',
    answer1: (
      <>
        <p>
          Yes. Calvary Bible Fellowship was started with you in mind. Please
          bring your doubts, your brain, and your baggage — they are all welcome
          here. You will have the opportunity to learn more, ask questions,
          share hurts from past experiences, all at your own pace. In fact, you
          can reach out to any of the elders with your big questions any time —
          even right now. We will always be eager to hear from you.
        </p>
      </>
    ),
    question2: 'What does the church believe about marriage?',
    answer2: (
      <>
        <p>
          The Bible consistently defines marriage as a covenant relationship
          instituted by God with 3 parties involved — a woman, a man, and God
          himself. Scripture is also clear that sex is a gift — one meant to be
          enjoyed within a life-long, covenantal, monogamous, heterosexual
          marriage.
        </p>
      </>
    ),
  },
  {
    question1: 'What is the Gospel?',
    answer1: (
      <>
        <p>
          We all recognize the brokenness of our world. We see it everywhere and
          we know it all too well: it’s in the corrupt failing of human systems,
          in the hurt we’ve known from others, and even in the selfish leanings
          of our own hearts. But where is the beauty? Where can we find hope?{' '}
        </p>
        <p>
          We believe hope is found in the person of Jesus Christ. He was a real
          human that existed in history and also the one true God who’d come to
          save the world. God is personal and powerful. He came in Jesus — not
          to condemn the world, but to save it. He is good, and is known by his
          love.
        </p>
        <p>
          {' '}
          He is the initiator. He personally invites the world to hope,
          belonging and purpose. That invitation extends to you. The God who
          created the universe loves you, died for you, and more than anything,
          he wants you to know him.
        </p>
        <p>
          {' '}
          We want you to trust Jesus with your everything. You don’t have to
          come to church first, and you don’t have to have it all figured out. A
          relationship with God starts with trust. Trust that he is good. Trust
          that his way of life will mean more good for you than your own desires
          or opinions.
        </p>
        <p>
          {' '}
          You can talk to him right now. That’s where it starts. Tell him you
          trust him with your whole heart. Tell him you’re turning your whole
          life over to him. He hears you.
        </p>
      </>
    ),
  },
];

export const NotFoundContent = {
  title: 'Page Not Found',
  description:
    'The page you requested does not exist, or there may have been an error. Please check the URL or contact support if you believe this is an error.',
  link: 'Go Home',
};

export const ErrorContent = {
  title: 'Oops, something went wrong!',
  description:
    'Oops! Something went wrong. We`re working to fix it. Please try again later. If the problem persists, contact our support team for assistance.',
  link: ' Try again',
};

export const otherPages = [
  {
    title: 'Who We Are',
    desc: 'Where We Started: Learning about our origin.',
    link: '/who-we-are',
  },
  {
    title: 'What We Believe',
    desc: 'Our Core Beliefs: Understanding Our Faith.',
    link: '/what-we-believe',
  },
  {
    title: 'Leadership',
    desc: 'Get to know the leadership.',
    link: '/leadership',
  },
  {
    title: 'More Sermons?',
    desc: 'Discover transformative sermons for spiritual growth.',
    link: '/sermons',
  },
  {
    title: 'More Podcasts?',
    desc: 'Discover transformative podcasts for spiritual growth.',
    link: '/podcasts',
  },
];

export const footerQuickLinks = [
  {
    title: 'Be Transformed',
    link: '/sermon/be-transformed',
  },
  {
    title: 'Marks of A Healthy Church',
    link: '/sermon/marks-of-a-healthy-church',
  },
  {
    title: 'Living With Hope in Light of His Coming',
    link: '/sermon/living-with-hope-in-light-of-his-coming',
  },
  {
    title: 'Abide In Christ',
    link: '/sermon/abide-in-christ',
  },
  {
    title: 'Victory In Christ',
    link: '/sermon/victory-in-christ',
  },
];

export const footerAboutLinks = [
  {
    title: 'Who We Are',
    link: '/who-we-are',
  },
  {
    title: 'What We Believe',
    link: '/what-we-believe',
  },
  {
    title: 'Leadership',
    link: '/leadership',
  },
  {
    title: 'Care Groups',
    link: '/care-groups',
  },
];

export const footerSocialLinks = [
  {
    link: 'https://www.youtube.com/channel/UCE0ODfrD_TjdTySfNv9ggeQ',
    component: <Youtube />,
  },
  {
    link: 'https://open.spotify.com/show/07dGkNxqaELnimZKlfqtBY',
    component: <Spotify />,
  },
  {
    link: 'https://podcasts.apple.com/in/podcast/calvary-bible-fellowship-bangalore/id1528884061',
    component: <Apple />,
  },
];

export const homepagePodcasts = [
  {
    id: 'PL8jyQKbc-svJGg7uyGJd717PM5aF9yeBt',
    title: 'Shepherding A Child`s Heart',
    description:
      'Today`s parents are frustrated and confused.Children don`t act like they should and parents don`t understand why. Many have concluded the job is impossible. Some simply turn away in frustration. Meanwhile, a generation of children is being wasted.',
    image: '/images/parent.jpg',
    link: '/podcast/shepherding-a-childs-heart',
  },
  {
    id: 'PL8jyQKbc-svISz-aFjU6Pi5C8YJrMOaLq',
    title: 'Handling Money Biblically',
    description:
      'It`s no secret that the Bible teaches us to live our lives a little bit differently than the world does. And that`s especially true when it comes to money. What does the Bible say about managing money? The answer can be summarized with a single word—wisdom. We are to be wise with our money.',
    image: '/images/money.jpg',
    link: '/podcast/handling-money-biblically',
  },
  {
    id: 'PL8jyQKbc-svKWGgZsWTvtlt0PdIvmjGyH',
    title: 'Understanding and Using Your Spiritual Gifts',
    description:
      'A spiritual gift is something God has chosen specifically for you so that you can help with the advancement of the church on earth by serving and using your special ability. As we seek to follow and be used by Jesus Christ, we need to utilize all that he has made available to us. ',
    image: '/images/gifts.jpg',
    link: '/podcast/understanding-and-using-your-spiritual-gifts',
  },

  {
    id: 'PL8jyQKbc-svJOdrn2J_urP7-3g9FskKSs',
    title: 'How to Study The Bible',
    description:
      'The study of the Bible is absolutely necessary to the development of the Christian life. The facts which the Scriptures present are basis of faith in the Christ and in the whole series of providential events which prepared the way for his final disclosure of the life and purposes of God.',
    image: '/images/hisb.jpg',
    link: '/podcast/how-to-study-the-bible',
  },
  {
    id: 'PL8jyQKbc-svJMyJHDbV7bXIEUSGc_3ffc',
    title: 'The Path to Lasting Change',
    description:
      'A spiritual gift is something God has chosen specifically for you so that you can help with the advancement of the church on earth by serving and using your special ability. As we seek to follow and be used by Jesus Christ, we need to utilize all that he has made available to us. ',
    image: '/images/ptlc.jpg',
    link: '/podcast/the-path-to-lasting-change',
  },
  {
    id: 'PL8jyQKbc-svI4Qwlc9klpGXDqcsrCPVbH',
    title: 'Purity',
    description:
      'Ever wonder why our attempts to change, after one is born again, seems frustrating? Is it possible to experience lasting change?',
    image: '/images/pur.jpg',
    link: '/podcast/purity',
  },
  {
    id: 'PL8jyQKbc-svIRcvCFQrk7UONZ6oj-bRBy',
    title: 'Church and Politics',
    description:
      'Should pastors and congregations seek to transcend politics or is that an impossible or even illegitimate goal? Is there a difference between being political and being partisan? What is the call of God`s church in the world of politics?',
    image: '/images/church.jpg',
    link: '/podcast/church-and-politics',
  },
  {
    id: 'PL8jyQKbc-svLRyPL_5GjYvwGHeodIavHy',
    title: 'Theology Basics',
    description:
      'Does the word doctrine intimidate you? How would you define doctrine? Doctrine is defined as biblical truths that are taught, believed, and practiced.',
    image: '/images/tb.jpg',
    link: '/podcast/theology-basics',
  },
  {
    id: 'PL8jyQKbc-svJCGQOOlRrVWfspaRJhyyUQ',
    title: 'Inductive and Journaling',
    description:
      'Are you someone who is struggling to read the bible everyday? Are you wondering, how to learn or interpret scripture the right way? Are you someone struggling to apply these truths that you are learning from the bible?',
    image: '/images/iaj.jpg',
    link: '/podcast/inductive-and-journaling',
  },
  {
    id: 'PL8jyQKbc-svKPWkaWH4eUa_82M9WnsAvk',
    title: 'Mental Health',
    description:
      'Approximately 1 in 5 adults, or 18.5 percent experiences mental illness in a given year. Many of these individuals turn to their church and their faith for spiritual guidance in times of emotional distress. ',
    image: '/images/mh.jpg',
    link: '/podcast/mental-health',
  },
  {
    id: 'PL8jyQKbc-svKsKSI9sUKmwnI9iMHrSX7O',
    title: 'Why I Believe in The Bible',
    description:
      'While the Bible is the best-selling, most widely distributed book of all time, there are also many skeptics who raise objections to its veracity. With most historical accounts, we tend to accept them without question, unless they seem highly improbable. Then additional evidence is usually expected.',
    image: '/images/wib.jpg',
    link: '/podcast/why-i-believe-in-the-bible',
  },
  {
    id: 'PL8jyQKbc-svJXCmC5qggwxKG4Zyn3CRgG',
    title: 'Don`t be Gullible',
    description:
      'This word may sound cute or adorable to some, but honestly the word gullible is not a good word, especially not in the times we live in today. Gullible means to be easily deceived, over-trusting or easily taken in. These times are not safe to be gullible.',
    image: '/images/dbg.jpg',
    link: '/podcast/dont-be-gullible',
  },
];

export const aboutMenuSection = {
  title: 'About us',
  description:
    'Explore the heart of our values. Learn about our identity, beliefs, and leadership. Click below to discover more about who we are, what we teach, and our dedicated leadership.',
};

export const connectMenuSection = {
  title: 'Listen, Learn, Apply',
  description:
    'Explore a plethora of sermon series that delve into various biblical themes, providing comprehensive insights into spiritual growth and understanding..',
};

export const sermonPageSermons = [
  {
    id: 'PL8jyQKbc-svJs9hlnseLzyjH2-jh3X4pF',
    title: 'Paul`s Prison Epistles',
    description:
      'Explore Paul`s Prison Epistles: timeless letters written from confinement, offering wisdom, encouragement, and profound insights into Christian faith and living.',
    image: '/images/ppe.png',
    link: '/sermon/pauls-prison-epistles',
  },
  {
    id: 'PL8jyQKbc-svKBiTGpgJsvrkpzG58OxgUu',
    title: 'The Acts of Christ And The Apostles',
    description:
      'Luke and Acts, addressed to Theophilus, compose a two-part narrative chronicling Jesus life and the acts of the apostles, offering profound insights.',
    image: '/images/aca.png',
    link: '/sermon/the-acts-of-christ-and-the-apostles',
  },
  {
    id: 'PL8jyQKbc-svLb_iUd3CzMBi4QrVz0TTiO',
    title: 'The Whole Counsel of God',
    description:
      'The whole counsel of God as contained in the Bible from Genesis to Revelation is necessary to equip saints for their walk with the Lord.',
    image: '/images/wcog.jpg',
    link: '/sermon/the-whole-counsel-of-god',
  },
  {
    id: 'PL8jyQKbc-svKKbp6qbTeQJErBx--svNzx',
    title: 'Be Transformed',
    description:
      'A spiritual gift is something God has chosen specifically for you so that you can help with the advancement of the church on earth by serving and using your special ability.',
    image: '/images/bt.jpg',
    link: '/sermon/be-transformed',
  },
  {
    id: 'PL8jyQKbc-svKWnCEkXtF8AELG1zOuJFtk',
    title: 'Marks of A Healthy Church',
    description:
      'Not every church is in good health. How can a sick church heal without first knowing in what direction health lies? What, after all, is a healthy church?',
    image: '/images/mohc.png',
    link: '/sermon/marks-of-a-healthy-church',
  },
  {
    id: 'PL8jyQKbc-svLczZA01ZtTJtQT-1B0rj1S',
    title: 'Living With Hope in Light of His Coming',
    description:
      'Titus highlights God`s grace, teaching us to live godly lives, while awaiting Christ`s return, our blessed hope, and the glory of our great God and Savior.',
    image: '/images/lwh.jpg',
    link: '/sermon/living-with-hope-in-light-of-his-coming',
  },
  {
    id: 'PL8jyQKbc-svIjnqwrPlnAKNkJIEkee1vB',
    title: 'Abide In Christ',
    description:
      'One of Jesus` most vivid and powerful illustrations for the believer`s relationship with him is the vine and branches. ',
    image: '/images/aic.jpg',
    link: '/sermon/abide-in-christ',
  },
  {
    id: 'PL8jyQKbc-svIv3mnEjcqh0YvjG3KUXwXF',
    title: 'Victory In Christ',
    description:
      'The imagery of 2 Corinthians 2:14-16 actually represents Paul`s theology of the cross in its most vivid and arresting form.',
    image: '/images/vic.jpg',
    link: '/sermon/victory-in-christ',
  },
  {
    id: 'PL8jyQKbc-svKqTGzyHjW0Kt6kFU2MQ7yE',
    title: 'Pressing Toward the Upward Goal',
    description:
      'Paul has used the analogy of a runner who focuses on the goal ahead of him. This prevents distractions and stumbling. This is a useful focus for believers today as well.',
    image: '/images/ptug.jpg',
    link: '/sermon/pressing-toward-the-upward-goal',
  },
  {
    id: 'PL8jyQKbc-svIXTeuJAFE6y6cY8Oqy2vfg',
    title: 'The Book of Daniel',
    description:
      'The main message of the book of Daniel is that just as the God of Israel saves Daniel from his enemies, so he would save all Israel in their present oppression.',
    image: '/images/bod.jpg',
    link: '/sermon/the-book-of-daniel',
  },
  {
    id: 'PL8jyQKbc-svLmuvdyJa_yYo_YqHeOO4W7',
    title: 'Following the Savior',
    description:
      'Discipleship is the process of learning to love and follow Jesus and becoming more like him in our attitudes and actions. It’s also seeking to make other disciples who want to do the same thing.',
    image: '/images/fts.jpg',
    link: '/sermon/following-the-savior',
  },
  {
    id: 'PL8jyQKbc-svJLnt2fQyDLXE6RiGHwUIq5',
    title: 'Topical Sermons',
    description:
      'Sermons preached every Sunday delivered by a member of the church or a guest speaker to the congregation.',
    image: '/images/ts.jpg',
    link: '/sermon/topical-sermons',
  },
];

export const whatWeDoContent = [
  {
    title: 'WORSHIP',
    description:
      'Every Sunday, we meet together to worship and remember the life, death and resurrection of our Lord Jesus Christ.',
    image: '/images/church.png',
  },
  {
    title: 'STUDY',
    description:
      'Together we study God`s word, preach and teach Christ crucified, and build each other up in sound doctrine.',
    image: '/images/bible.png',
  },
  {
    title: 'PRAYER',
    description:
      'As a church, we pray for each other, our leaders, and the needs of our communities, city, nation and the world.',
    image: '/images/pray.png',
  },
  {
    title: 'MISSION',
    description:
      'As Christ commanded, we go out and share the Gospel, both verbally and through our lives with those around us.',
    image: '/images/love.png',
  },
  {
    title: 'SERVICE',
    description:
      'We serve our community by helping to meet their physical and spiritual needs. ',
    image: '/images/heart.png',
  },
];

export const careGroups = [
  {
    title: 'HORMAVU',
    content: (
      <>
        <div className='carousel-cell w-full'>
          <h3>Hormavu Cell Group</h3>
          <p className='subhead'>Time : 7:15PM</p>
          <div className='md:text-sm lg:text-base xl:text-lg'>
            <p>
              <strong>Spocs: Jaison George, Job Sam Koshy</strong>
            </p>
            <p>
              The Hormavu Care group gathers in the Hormavu area every Friday
              evening at 7:15 PM, rotating between different homes. They spend
              their time singing together, sharing, and learning from the Word
              of God.
            </p>
          </div>
        </div>
      </>
    ),
    image: '/images/hormavu.jpg',
  },
  {
    title: 'HENNUR',
    content: (
      <>
        <div className='carousel-cell w-full'>
          <h3>Hennur Care Group</h3>
          <p className='subhead'>Time : 7:30PM</p>
          <div className='md:text-sm lg:text-base xl:text-lg'>
            <p>
              <strong>Spocs: Siji George, Prithvi G</strong>
            </p>
            <p>
              The Hennur Care group convenes in the Hennur area every Friday at
              7:30 PM, rotating between different homes each week. During these
              gatherings, they participate in singing, sharing, and studying the
              Word of God together.
            </p>
          </div>
        </div>
      </>
    ),
    image: '/images/hennur.jpg',
  },
  {
    title: 'KOTHANUR',
    content: (
      <>
        <div className='carousel-cell w-full'>
          <h3>Kothanur Care Group</h3>
          <p className='subhead'>Time : 7:30PM</p>
          <div className='md:text-sm lg:text-base xl:text-lg'>
            <p>
              <strong>Spocs: Kishor Hegde, Jestin James</strong>
            </p>
            <p>
              The Kothanur Care group assembles in the Kothanur area every
              Friday at 7:30 PM, rotating among various homes. During these
              gatherings, they engage in singing, sharing, and reflecting on the
              teachings of the Word of God together.
            </p>
          </div>
        </div>
      </>
    ),
    image: '/images/kothanur.jpg',
  },
  {
    title: 'OLD MADRAS ROAD',
    content: (
      <>
        <div className='carousel-cell w-full'>
          <h3>Kothanur Care Group</h3>
          <p className='subhead'>Time : 7:30PM</p>
          <div className='md:text-sm lg:text-base xl:text-lg'>
            <p>
              <strong>Spocs: Prashant Raja, John Paul</strong>
            </p>
            <p>
              The Old Madras Road Care group convenes every Friday at 7:30 PM in
              the Old Madras Road area, rotating locations among different
              homes. During these gatherings, they come together to sing, share,
              and delve into the teachings of the Word of God.
            </p>
          </div>
        </div>
      </>
    ),
    image: '/images/omr.jpg',
  },
  {
    title: 'MALAYALAM',
    content: (
      <>
        <div className='carousel-cell w-full'>
          <h3>Malayalam Care Group</h3>
          <p className='subhead'>Time : 6:30PM</p>
          <div className='md:text-sm lg:text-base xl:text-lg'>
            <p>
              <strong>Spocs: Binny Abraham, George Joseph</strong>
            </p>
            <p>
              The Malayalam Care Group convenes every Tuesday at 6:30 PM in the
              Old Madras Road area, rotating locations among different homes and
              sometimes over Zoom. During these gatherings, they come together
              to sing, share, and delve into the teachings of the Word of God.
            </p>
          </div>
        </div>
      </>
    ),
    image: '/images/malayalam.jpg',
  },
];

export const ourBeliefs = [
  {
    title: 'THE SCRIPTURES',
    content: (
      <>
        <p>
          We believe that “all Scripture is inspired by God,” by which we
          understand that the sixty-six books of the Bible are a divine product.
          God used a process of dual authorship to provide His written
          revelation to mankind. The Holy Spirit exerted supernatural influence
          on the human authors that, using their own personalities and styles of
          writing, they wrote down precisely what God wanted to give to mankind
          as Scripture.
        </p>
        <p>
          {' '}
          We believe that the Bible is therefore without any error in the
          original documents, the supreme and complete revelation of God’s will
          for salvation, and the only infallible rule of faith and practice. (2
          Timothy 3:16-17; 2 Peter 1:21; John 16:13-14; 17:17; Numbers 23:19;
          Psalm 12:6; Hebrews 4:12; 6:18; Matthew 5:18; 24:35)
        </p>
      </>
    ),
    video: '/videos/scriptures.mp4',
  },
  {
    title: 'GOD',
    content: (
      <p>
        We believe in one true God, creator, and sustainer of all things, Holy,
        infinitely perfect in all His attributes, and eternally existing in
        three Persons – The Father, The Son, and The Holy Spirit. Each Person of
        the Godhead is therefore deserving of the same worship, confidence, and
        obedience. (Deuteronomy 6:4; Isaiah 45:5-7; 1 Corinthians 8:4; Matthew
        28:18-19; 2 Corinthians 13:14; John 1:14; Hebrews 1:1-4; Acts 5:3-4)
      </p>
    ),
    video: '/videos/god.mp4',
  },
  {
    title: 'MAN',
    content: (
      <>
        <p>
          We believe that man was created by God in His image and likeness,
          without sin, to enjoy God’s fellowship, live in His will, and glorify
          Him. Adam and Eve, the historical parents of the entire human race,
          chose to disobey God, and by this sin, lost their original innocence
          and communion with Him.{' '}
        </p>
        <p>
          We also believe that, as the head of the human race, Adam’s fall
          became the fall of all of humanity, so that corruption, guilt, death,
          and condemnation belong to everyone born into this world, the Lord
          Jesus Christ being the only exception. All men are thus corrupt by
          nature, enslaved to sin, and incapable of seeking God, apart from
          divine grace. (Genesis 1:27; 2:21-22; 3:1-19; Psalm 14:1-3; Jeremiah
          17:9; Romans 3:10-19; 23; 5:12-19; 8:6-8; Ephesians 2:1-3; 1 Timothy
          2:13-14; 1 John 1:8)
        </p>
      </>
    ),
    video: '/videos/man.mp4',
  },
  {
    title: 'JESUS CHRIST',
    content: (
      <>
        <p>
          We believe that in the fullness of time, God sent forth His eternal
          Son as Jesus the Messiah, conceived by the Holy Spirit, and born of
          the virgin Mary. In the incarnation, the Second Person of the Trinity
          took on a sinless human nature, so that the two distinct natures were
          joined together in one Person, without confusion, change, division or
          separation. The Lord Jesus Christ is thus truly God and truly man.{' '}
        </p>
        <p>
          {' '}
          We also believe that in fulfillment of God’s redemptive plan, Jesus
          Christ voluntarily suffered and died on a cross, was buried, rose from
          the dead on the third day, ascended into heaven, and is seated at the
          right hand of God the Father as our High Priest and Advocate.
          (Galatians 4:4; Luke 1:30-35; John 1:1-18; 29; 3:16; Philippians
          2:6-8; Hebrews 1:3; 4:15;7:25; 10:5-14; Romans 3:25–26; 1 Peter 3:18;
          Matthew 28:6; Acts 2:30-33; 1 John 2:1)
        </p>
      </>
    ),
    video: '/videos/jesus.mp4',
  },
  {
    title: 'SALVATION',
    content: (
      <>
        <p>
          We believe that Jesus Christ, in His perfect obedience to God the
          Father, died on the cross as our representative and substitute, and
          thus accomplished our redemption. As the all-sufficient sacrifice for
          our sins, He took our punishment, and satisfied the wrath of God
          against us.
        </p>
        <p>
          We believe that the resurrection of Jesus Christ from the dead is
          God’s vindication of His Person and claims, and a sure proof that His
          atoning work on the cross has been accepted.
        </p>
        <p>
          We also believe that on the basis of Jesus Christ’s work on the cross,
          anyone who believes in Him is freed from the punishment of sin,
          declared righteous, given eternal life, and adopted into the family of
          God. The believer, however, retains his sin nature, which cannot be
          expunged in this life. Thus, the believer is to grow in grace, and be
          transformed progressively into the likeness of the Son of God by the
          power of the Holy Spirit.{' '}
        </p>
        <p>
          We also believe that the believer will be made perfect when he
          receives the resurrection body at the coming of the Lord Jesus Christ.
          We believe that, because of God’s love for His children, because of
          the efficacy of the work of Christ on the cross, because of the
          unceasing intercession and advocacy of Christ in heaven, because of
          God’s faithfulness to His covenants, because of the indwelling
          presence of the Holy Spirit, all who are believers, once saved, shall
          be kept saved by God’s power, and are thus secure in Christ forever.
        </p>
        <p>
          We also believe that it is the privilege of every child of God to
          enjoy the assurance of their salvation based on the testimony of God
          in His word. The believer, however, is exhorted never to use his
          liberty in Christ as an occasion for sinful living and carnality.
          Rather, the believer is called to a life of separation unto Christ,
          one that exhibits obedience and pursues holiness. (Romans 3:21-25;
          5:9-10; 18-19; 6:15-22; 8:1; 29-30; 13:13-14; 1 Corinthians 15:3; 1
          Peter 1:5; 2:24; Colossians 2:13-14; Galatians 2:16; 3:13; 26;
          5:13;25-26; Ephesians 1:7; 2:3-6; 4:24; John 1:12; 3:16; 5:24; 2
          Corinthians 3:18;7:1; Philippians 3:20-21; Jude 24; Hebrews 7:25;
          12:14; Titus 2:11-14; 1 John3:1-10)
        </p>
      </>
    ),
    video: '/videos/salvation.mp4',
  },
  {
    title: 'THE HOLY SPIRIT',
    content: (
      <>
        <p>
          We believe that the Holy Spirit, the third Person of the Trinity,
          whose sovereign actions were seen in creation, the incarnation, the
          written revelation, and salvation, began His work in a new way on the
          day of Pentecost, marking the inauguration of a new era, in
          fulfillment of divine promises.
        </p>
        <p>
          We believe that, in this new age, the Spirit glorifies the crucified
          and risen Christ in all that He does. His ministries include
          convicting the world concerning sin, righteousness, and judgment,
          regenerating sinners, indwelling believers from the moment of
          regeneration, baptizing believers into the one body of Christ, filling
          those yielded to Christ for power and service, illuminating Scripture,
          guiding, equipping and empowering believers for Christ-like living and
          service, and dispensing spiritual gifts to believers for the
          upbuilding of the body of Christ.
        </p>
        <p>
          We also believe that certain gifts of the Holy Spirit such as speaking
          in tongues and miracles were temporary, and primarily intended for the
          initial days of the church. Their purpose was to direct attention to
          and validate the apostles as revealers of God’s word.{' '}
        </p>
        <p>
          {' '}
          We believe, however, that while the miraculous gifts were temporary,
          God does manifest Himself through the miraculous from time to time in
          accordance with His sovereign purposes.(Matthew 28:19; 2 Corinthians
          12:12; 13:14; Genesis 1:2; Matthew 1:18; 2 Peter 1:20-21; John 3:5-7;
          14:16-17; 15:26; 16:7-14; Acts 1:5; 2:4; 5:3-4; Jeremiah 31:31-34;
          Hebrews 2:1-4; 10:15-17; Romans 8:9; Ephesians 5:18; 1 John 2:20; 27;1
          Corinthians 12:4-11; 13:8-10)
        </p>
      </>
    ),
    video: '/videos/spirit.mp4',
  },
  {
    title: 'THE CHURCH',
    content: (
      <p>
        We believe in the one universal church, whose Head is the Lord Jesus
        Christ, and comprises all those who are united to Him by faith. This
        universal church finds its expression in local churches where believers
        are taught God’s word, engage in corporate worship, practice the
        ordinances of baptism and Lord’s supper, build each other’s faith
        through the use of spiritual gifts, hold each other accountable, submit
        to leadership, serve each other in love, and engage in local and world
        evangelization. (Matthew 16:16-18; 18:5-14; 28:19-20; Acts 2:38-47;
        20:28; Romans 12:5; 1 Corinthians 5:1-13; 11:28-32; 12:12-27; Ephesians
        1:20-23; 4:3-16; Colossians 1:18; 3:14-15; 1 Timothy 3:1-13; Titus
        1:5-9; 1 Peter 5:1-5; Hebrews 13:7; 17; 2 Thessalonians 3:6-15)
      </p>
    ),
    video: '/videos/church.mp4',
  },
  {
    title: 'THE RETURN OF CHRIST',
    content: (
      <p>
        We believe that, in the eschatological program of God, the next great
        event is the coming of our Lord Jesus Christ in the air, before the
        seven-year tribulation period, to receive into heaven all who belong to
        Him, both those who are alive at His coming and those who have fallen
        asleep in Him. This event is presented in Scripture as our blessed hope
        for which we should be constantly looking. We believe that at the end of
        the tribulation period, the Lord Jesus Christ will return with power and
        great glory to set up the millennial kingdom when God’s covenant
        promises will be realized for the nation of Israel as she is restored to
        her own land, and the whole world will be brought to the knowledge of
        God. This period of thousand years will be followed by the final
        judgment of all unbelievers at the great white throne of Christ. There
        they will be condemned to an eternal conscious punishment in the lake of
        fire. We also believe that the believers will enjoy eternal blessedness
        with the Lord in the new heaven and the new earth, to the praise of His
        glorious grace. (John 14:1-3; 1 Corinthians 15:51-52; Philippians 3:20;
        1 Thessalonians 4:13-18; Titus 2:11-14; Daniel 9:27; Revelation
        6:1-19:21; 20:1-3; 11-15; Matthew 24:15-25:46; Deuteronomy 30:1-10;
        Isaiah 11:9; Ezekiel 37:21-28)
      </p>
    ),
    video: '/videos/return.mp4',
  },
];

export const timelineItems = [
  {
    title: '2001',
    cardTitle: 'The Vision',
    media: {
      name: 'vision',
      source: {
        url: '/images/vision.jpg',
      },
      type: 'IMAGE',
    },

    cardDetailedText: `Our story began when a few believers were burdened for professionals and students coming to Bangalore who needed a church where they felt comfortable, a gathering open to those seeking answers regarding their faith, and where they felt secure bringing their friends.`,
  },
  {
    title: '2002',
    cardTitle: 'The First Step',
    media: {
      name: 'first-step',
      source: {
        url: '/images/second-step.jpg',
      },
      type: 'IMAGE',
    },

    cardDetailedText: `With this vision in mind, these believers began gathering in the aerobics room of a gym in Domlur on Airport Road. Eventually as the gathering grew, they named the church, appropriately, 'Airport Road Fellowship'. As the new church grew in the Lord and in numbers, God provided for their every need and blessed the young group.`,
  },
  {
    title: '2009',
    cardTitle: 'A Move And A New Name',
    media: {
      name: 'second-step',
      source: {
        url: '/images/third-step.jpg',
      },
      type: 'IMAGE',
    },

    cardDetailedText: `By April 2009, Airport Road Fellowship had outgrown the gymnasium. With extraordinary timing, the Ashirvad auditorium in St. Joseph’s Jesuit Seminary on St. Mark’s Road became available and the church moved their meetings there. With the name “Airport Road Fellowship” now out of date, the church was renamed 'Calvary Bible Fellowship' (CBF).`,
  },
  {
    title: '2017',
    cardTitle: 'And Another Move!',
    media: {
      name: 'third-step',
      source: {
        url: '/images/wcoi-step.jpg',
      },
      type: 'IMAGE',
    },

    cardDetailedText: `Eventually, CBF was blessed with more members and moved to WCOI on Osborne Road.`,
  },
  {
    title: '2022',
    cardTitle: 'Church Plant',
    media: {
      name: 'plant',
      source: {
        url: '/images/plant.jpg',
      },
      type: 'IMAGE',
    },

    cardDetailedText: `In 2022, the church had significantly grown in numbers. To meet the discipleship needs of it's members and to serve college-going students, Calvary Bible Fellowship prayerfully planted Grace Bible Fellowship within Christ University's Koramangala campus.`,
  },
  {
    title: '2024',
    cardTitle: 'Today',
    media: {
      name: 'fourth-step',
      source: {
        url: '/images/fourth-step.jpg',
      },
      type: 'IMAGE',
    },

    cardDetailedText: `Today, CBF is a growing and diverse congregation of all ages and backgrounds. In addition to Sunday worship meetings at WCOI, CBF conducts regular Bible studies, prayer meetings and a number of care cells throughout the week to help believers grow spiritually and build deep and lasting relationships with each other. The church is also involved with missions and social outreach in Bangalore and across India. The members of CBF continue to support the mission of the church as God adds chapter after chapter to our continuing story.`,
  },
];
