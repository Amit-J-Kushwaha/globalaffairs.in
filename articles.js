// Sample articles array with 4 articles on random topics
const articles = [
    {
        title:"ISRO's Life in Space ExperimentLife Sprouts in Space: ISRO's Breakthrough with Cowpea Seeds",
        image: "https://images.indianexpress.com/2025/01/pea-ISRO-4cols.jpg?w=640",
        description: "ISRO reported a breakthrough in space farming as cowpea seeds germinated under microgravity. This experiment demonstrates the possibility of growing food in space, supporting future long-duration missions. It’s a significant step toward creating sustainable space habitats and advancing humanity’s exploration of the Moon, Mars, and beyond.",
        fullArticle: "ISRO recently announced a groundbreaking achievement in space science: cowpea seeds successfully germinated under microgravity conditions. This experiment, part of ISRO’s life in space research, demonstrates the potential for growing food in space, a critical step for long-term human missions. Conducted aboard a spaceflight simulation, the study tested the seeds' ability to sprout and adapt to the absence of gravity. Scientists observed healthy root and shoot growth, highlighting the viability of cultivating crops in extraterrestrial environments. This milestone has significant implications for sustainable food production during space missions to the Moon, Mars, and beyond. ISRO’s success brings humanity closer to achieving self-sufficient space habitats, marking a new era in space exploration."
    },
    {
        title:"South Korean President Faces Impeachment and Arrest",
        image: "https://c.ndtvimg.com/2024-12/lm4muqug_yoon-suk-yeol-afp_625x300_29_December_24.jpeg?im=FeatureCrop,algorithm=dnn,width=773,height=435",
        description: "South Korea’s president faces impeachment amid corruption allegations, triggering public protests and political turmoil. Lawmakers pursue legal action, while citizens demand transparency. The unfolding crisis risks destabilizing the country and damaging its international reputation.",
        fullArticle: "South Korea is witnessing a political crisis as its president faces impeachment and potential arrest. The controversy stems from allegations of corruption and abuse of power, sparking widespread protests. Lawmakers initiated impeachment proceedings following evidence of financial misconduct and ties to high-profile scandals. Citizens demand transparency and accountability, leading to growing public pressure. Meanwhile, opposition parties and civil society groups have united to push for justice. The situation has deeply divided the nation, raising concerns over political stability and the country’s global standing."
    },
    {
        title:"China Sanctions Canadian Institutions Over Uyghur and Tibet Issues",
        image: "https://www.hindustantimes.com/ht-img/img/2024/12/22/550x309/Chinese-President-Xi-Jinping-gestures-as-he-talks-_1734622859786_1734864401956.jpg",
        description: "China sanctioned Canadian institutions and individuals over their criticism of human rights violations in Xinjiang and Tibet. The sanctions escalate tensions between the two nations, highlighting ongoing disputes about the treatment of Uyghurs and Tibetans and further complicating their diplomatic relationship.",
        fullArticle: "China has imposed sanctions on several Canadian institutions and individuals in response to their criticism of its human rights record in Xinjiang and Tibet. The targeted entities reportedly supported efforts to hold China accountable for alleged abuses against Uyghur Muslims and Tibetan communities. Beijing condemned these actions as interference in its internal affairs and accused Canada of spreading misinformation. The sanctions include travel bans and restrictions on business dealings with Chinese entities. Canada, alongside its allies, has consistently raised concerns over China's treatment of ethnic minorities, calling for greater accountability. The move further strains China-Canada relations, which have been tense due to previous diplomatic disputes."
    },
   
    {
        title: "Austrian Chancellor Karl Nehammer Resigns After Failed Government Formation Talks",
        image: "https://www.aljazeera.com/wp-content/uploads/2022/04/2022-04-11T162412Z_1845002589_RC24LT9BOMIF_RTRMADP_3_UKRAINE-CRISIS-RUSSIA-AUSTRIA.jpg?resize=770%2C513&quality=80",
        description: "Austrian Chancellor Karl Nehammer resigned on January 4, 2025, after failed coalition talks. His departure leaves Austria facing political uncertainty, with early elections or leadership changes possible in the near future.",
        fullArticle: "Austrian Chancellor Karl Nehammer resigned on January 4, 2025, after unsuccessful attempts to form a new government. His resignation followed months of stalled coalition talks, which left the country without a stable governing coalition. Nehammer, leader of the Austrian People’s Party (ÖVP), faced significant public dissatisfaction due to the political gridlock. His departure has raised questions about the future of Austria's political landscape, with the possibility of early elections or a leadership change within the ÖVP. The resignation marks a pivotal moment in Austria’s political history, as the country grapples with uncertainty and potential shifts in power.",
    },
    {
        title: "Hamas Releases Hostage Video Amid Ceasefire Talks",
        image: "https://media.cnn.com/api/v1/images/stellar/prod/ap23287554409163.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp",
        description: "Hamas releases a video of Israeli hostage Liri Albag during critical ceasefire negotiations, drawing global attention to the ongoing conflict. Explore the implications for peace talks, international responses, and the humanitarian crisis in Gaza.",
        fullArticle: "Hamas has released a video of Liri Albag, an Israeli civilian reportedly held hostage since the October 7 attack, intensifying global scrutiny of the ongoing Israel-Hamas conflict. The video, which aired on Hamas-affiliated channels, shows Albag appealing for her release. This comes as ceasefire negotiations, mediated by regional and international powers, seek to pause hostilities and address humanitarian concerns in Gaza.Israeli officials condemned the video as psychological warfare, emphasizing the need for the safe return of all hostages. Meanwhile, the situation in Gaza remains dire, with intensified Israeli airstrikes targeting Hamas strongholds, resulting in significant civilian casualties. The international community continues to call for de-escalation and a path toward a sustainable resolution. However, with trust between the parties at an all-time low, the prospects for a lasting ceasefire remain uncertain.",
    },
    {
        title:"U.S. Economy Grows at 3.1% Pace: A Strong Performance Amid Global Challenges",
        image: "https://img.etimg.com/thumb/msid-116477188,width-300,height-225,imgsize-561374,resizemode-75/u-s-economy-grows-at-3-1-pace-in-third-quartaer-an-upgrade-from-previous-estimate.jpg",
        description: "The U.S. economy grew at 3.1% in Q3 2024, driven by strong consumer spending and business investments. Despite challenges like global trade tensions and inflation, the economy remains resilient, supported by cautious Federal Reserve policies.",
        fullArticle: "The U.S. economy expanded at a rate of 3.1% in the third quarter of 2024, reflecting a solid recovery despite global economic uncertainties. The growth was primarily fueled by robust consumer spending, which accounts for a significant portion of U.S. economic activity. Increased business investments in technology, infrastructure, and renewable energy also contributed to the positive performance. While the U.S. continues to experience supply chain disruptions and rising energy prices, strong consumer demand and business confidence have supported this growth trajectory. Federal Reserve policies, including cautious interest rate cuts, have helped maintain economic stability. However, challenges such as ongoing global trade tensions and inflationary pressures remain. Economists are hopeful that the U.S. economy will maintain its resilience, though external risks and domestic inflation could pose hurdles to long-term growth."
    },
    {
        title: "Pakistan Begins Tenure as Non-Permanent Member of UN Security Council",
        image: "https://th-i.thgim.com/public/news/national/iqsy7z/article32485933.ece/alternates/LANDSCAPE_1200/PAKISTANFLAG",
        description: "Pakistan begins its two-year term as a non-permanent member of the United Nations Security Council, marking its eighth tenure. Committed to promoting global peace and addressing critical challenges like conflict resolution and climate change, Pakistan aims to advocate for the rights of developing nations and contribute to sustainable international stability during this pivotal period.",
        fullArticle: "On January 1, 2025, Pakistan officially began its two-year tenure as a non-permanent member of the United Nations Security Council (UNSC). This marks the country's eighth time serving on the council, highlighting its commitment to global peace and security.Pakistan's delegation has pledged to play an active role in addressing pressing international challenges, including conflict resolution, counterterrorism, climate change, and the promotion of human rights. Ambassador Munir Akram, Pakistan's Permanent Representative to the UN, emphasized the need for dialogue and multilateralism to tackle global crises. The tenure comes at a critical time, with escalating geopolitical tensions and humanitarian crises worldwide. Pakistan has vowed to use its posit ion to advocate for the rights of developing nations and to contribute to efforts for sustainable peace. As a key player in the region, its stance on issues like Kashmir and Palestine will also draw significant attention during its term.",
    },
    {
        title:"Bank of England Maintains Interest Rates: A Cautious Approach Amid Economic Uncertainty",
        image: "https://i.guim.co.uk/img/media/37f215702b89a389834134bd88fd59e0440114ec/0_0_8130_4881/master/8130.jpg?width=620&dpr=2&s=none&crop=none",
        description: "The Bank of England has maintained interest rates, taking a cautious stance amidst global uncertainties. This decision aims to balance inflation control with economic stability, as the UK navigates potential risks like geopolitical tensions and energy price volatility.",
        fullArticle: "The Bank of England has decided to keep interest rates unchanged, opting for a cautious approach as it navigates a volatile global economic environment. This decision comes after a series of rate hikes earlier in 2024, which were aimed at curbing inflation. With inflation showing signs of moderation, the central bank is now focusing on maintaining economic stability while avoiding the risks of over-tightening. While the decision to hold rates steady reflects a more balanced outlook, the Bank remains vigilant about the potential impact of global factors such as geopolitical tensions and energy price fluctuations. The UK economy is expected to experience modest growth, and the central bank’s decision reflects its desire to provide more time for the economy to adjust before taking further action."
    },
    {
        title:"Small Plane Crash in Brazil",
        image: "https://media.cnn.com/api/v1/images/stellar/prod/ap24357784272875.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp",
        description: "A small plane crash in Brazil’s Gramado region killed at least 10 people. The aircraft, used for sightseeing, went down shortly after takeoff, and no survivors were found. Investigations are underway, with mechanical failure or weather issues considered possible causes. The tragedy has shocked both locals and tourists.",
        fullArticle: "A small plane crashed in Brazil’s Gramado region, killing at least 10 people, including both passengers and crew members. The aircraft, a light sightseeing plane, went down in a densely forested area shortly after taking off from a nearby airport. Rescue teams rushed to the scene but found no survivors. Local authorities are investigating the incident, with early reports suggesting mechanical failure or unfavorable weather conditions as possible causes. The crash has shocked the community in Gramado, a popular tourist destination known for its picturesque landscapes. The tragedy has raised concerns about the safety of small aircraft operations in busy tourist regions."
    },
    {
        title:"U.S. Stock Market Experiences Volatility Amid Economic Concerns",
        image: "https://www.investopedia.com/thmb/1czdbmxf446PZqRIgtUNwBES80o=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-2164068362-7e47088e2e0d47a78fe20b44145cfb3b.jpg",
        description: "The U.S. stock market has faced increased volatility due to concerns over inflation, interest rates, and global economic risks. Investors remain cautious, with fluctuations in major indices influenced by economic data and external uncertainties.",
        fullArticle: "The U.S. stock market has experienced significant volatility in recent days, with major indices fluctuating dramatically due to mixed economic data and investor uncertainty. While strong corporate earnings reports initially provided optimism, concerns over inflation, interest rate hikes, and global economic risks have led to sharp sell-offs in certain sectors. The Federal Reserve’s tightening policies, aimed at controlling inflation, have added pressure on stock prices, as investors fear that higher interest rates could dampen economic growth. The market’s volatility has been exacerbated by global events, such as trade tensions and geopolitical uncertainties, which further contribute to investor hesitation. Analysts caution that while the market may experience periods of recovery, the overall outlook remains uncertain, with investors closely watching economic indicators for signals of stabilization or potential downturns."
    },
    {
        title:"China's Retail Sales Slow Amid Economic Concerns",
        image: "https://image.cnbcfm.com/api/v1/image/108076093-1734255864910-gettyimages-2175353526-CHINA_RETAIL.jpeg?v=1734321284&w=1480&h=833&ffmt=webp&vtcrop=y",
        description: "China’s retail sales growth has slowed amid economic concerns, reflecting weaker consumer demand. The slowdown in sectors like electronics and automobiles signals challenges in sustaining recovery, despite government efforts to stimulate the economy.",
        fullArticle: "China's retail sales growth has slowed, raising concerns about the sustainability of the country's economic recovery. In recent months, consumer spending has weakened as rising inflation, uncertainty, and reduced purchasing power have dampened demand for goods. The slowdown comes at a time when China is also grappling with a property sector slump and broader economic challenges. Retail sectors such as electronics, apparel, and automobiles, once driving the recovery, have seen a significant decline in sales, signaling that many consumers are holding back on big-ticket purchases. Despite the government’s efforts to stimulate the economy through stimulus measures, the broader economic outlook remains uncertain. The slowdown in retail sales could impact overall growth, signaling that China’s recovery remains fragile, requiring further policy support to boost consumer confidence and spending."
    },
    {
        title:"U.S. Dollar Starts 2025 Strong Amid Interest Rate Expectations",
        image: "https://cloudfront-us-east-1.images.arcpublishing.com/morningstar/GFQWZSZ4CRFVFBFQU3L2YNRH7E.png",
        description: "The U.S. dollar starts 2025 strong, driven by expectations of sustained interest rate hikes by the Federal Reserve. This has bolstered investor confidence in the U.S. economy, allowing the dollar to outperform major currencies like the yen and euro. The article explores how the dollar's strength may continue throughout the year, influencing global trade and financial markets.",
        fullArticle: "The U.S. dollar has kicked off 2025 with notable strength, continuing its upward trajectory from 2024. The currency's robust performance is largely driven by expectations that the U.S. Federal Reserve will maintain a higher interest rate policy throughout the year. This outlook has helped the dollar outperform major currencies, including the yen and euro, with the dollar index rising sharply. Economic data, such as strong job reports and inflation readings, have reinforced investor confidence in the U.S. economy, prompting further demand for the dollar as a safe-haven asset. The market anticipates that these rate hikes could persist longer than expected, giving the dollar an edge over other global currencies. As the year progresses, analysts predict that the dollar’s strength may continue, supported by the Fed’s stance and the ongoing resilience of the U.S. economy. This will likely have significant implications for international trade, investment flows, and the global financial system."
    }
];

// Function to create articles and load them on the page
function loadArticles() {
    const articlesList = document.getElementById('articles-list');
    
    // Loop through each article and display it
    articles.forEach((article, index) => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('article');
        
        articleElement.innerHTML = `
            <h1 class="title">${article.title}</h1>
            <img src="${article.image}" alt="Article Image">
            <p>${article.description}</p>
            <button class="read-more" onclick="toggleArticle(${index})">Read More</button>
            <div class="full-article" id="full-article-${index}">
                <p>${article.fullArticle}</p>
            </div>
        `;
        
        articlesList.appendChild(articleElement);
    });
}

// Function to toggle full article visibility
function toggleArticle(index) {
    const fullArticle = document.getElementById(`full-article-${index}`);
    
    // Toggle the visibility of the full article
    if (fullArticle.style.display === "none" || fullArticle.style.display === "") {
        fullArticle.style.display = "block";
    } else {
        fullArticle.style.display = "none";
    }
}

// Load articles when the page is ready
window.onload = loadArticles;
