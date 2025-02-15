// Sample articles array with 4 articles on random topics
/*
{
        title:"",
        image: "",
        description: "",
        fullArticle: ""
    }
        
    */
const articles = [
    
    {
        title:"China's Economic Growth Exceeds Expectations",
        image: "https://image.cnbcfm.com/api/v1/image/107275254-1690166741957-gettyimages-1171298060-AFP_1KN77P.jpeg?v=1692081835&w=1480&h=833&ffmt=webp&vtcrop=y",
        description: "China’s economy grew by 4.6% in the third quarter of 2024, exceeding expectations and surpassing the government’s 5% target. Strong consumer spending and increased business investments, supported by government stimulus, fueled this growth. However, challenges like global trade tensions, a struggling property sector, and an aging population remain, requiring careful policy management for sustained progress.",
        fullArticle: "China’s economy has outperformed expectations, growing by 4.6% in the third quarter of 2024, surpassing the government's 5% annual target. This unexpected growth is driven by strong consumer spending, particularly in luxury goods and electronics, along with increased business investments in sectors like technology and infrastructure. The government’s fiscal and monetary stimulus measures, including tax cuts and lower interest rates, have provided further support. Despite the positive performance, challenges remain, such as global trade tensions and domestic issues like a struggling property sector and an aging population. Nonetheless, China’s resilience in navigating these challenges offers cautious optimism for future growth, though sustained progress will depend on effective policy management and addressing long-term demographic and economic concerns."
    },
    {
        title:"U.S. Economy Grows at 3.1% Pace: A Strong Performance Amid Global Challenges",
        image: "https://img.etimg.com/thumb/msid-116477188,width-300,height-225,imgsize-561374,resizemode-75/u-s-economy-grows-at-3-1-pace-in-third-quartaer-an-upgrade-from-previous-estimate.jpg",
        description: "The U.S. economy grew at 3.1% in Q3 2024, driven by strong consumer spending and business investments. Despite challenges like global trade tensions and inflation, the economy remains resilient, supported by cautious Federal Reserve policies.",
        fullArticle: "The U.S. economy expanded at a rate of 3.1% in the third quarter of 2024, reflecting a solid recovery despite global economic uncertainties. The growth was primarily fueled by robust consumer spending, which accounts for a significant portion of U.S. economic activity. Increased business investments in technology, infrastructure, and renewable energy also contributed to the positive performance. While the U.S. continues to experience supply chain disruptions and rising energy prices, strong consumer demand and business confidence have supported this growth trajectory. Federal Reserve policies, including cautious interest rate cuts, have helped maintain economic stability. However, challenges such as ongoing global trade tensions and inflationary pressures remain. Economists are hopeful that the U.S. economy will maintain its resilience, though external risks and domestic inflation could pose hurdles to long-term growth."
    },
    {
        title:"Bank of England Maintains Interest Rates: A Cautious Approach Amid Economic Uncertainty",
        image: "https://i.guim.co.uk/img/media/37f215702b89a389834134bd88fd59e0440114ec/0_0_8130_4881/master/8130.jpg?width=620&dpr=2&s=none&crop=none",
        description: "The Bank of England has maintained interest rates, taking a cautious stance amidst global uncertainties. This decision aims to balance inflation control with economic stability, as the UK navigates potential risks like geopolitical tensions and energy price volatility.",
        fullArticle: "The Bank of England has decided to keep interest rates unchanged, opting for a cautious approach as it navigates a volatile global economic environment. This decision comes after a series of rate hikes earlier in 2024, which were aimed at curbing inflation. With inflation showing signs of moderation, the central bank is now focusing on maintaining economic stability while avoiding the risks of over-tightening. While the decision to hold rates steady reflects a more balanced outlook, the Bank remains vigilant about the potential impact of global factors such as geopolitical tensions and energy price fluctuations. The UK economy is expected to experience modest growth, and the central bank’s decision reflects its desire to provide more time for the economy to adjust before taking further action."
    },
    {
        title:"China's Retail Sales Slow Amid Economic Concerns",
        image: "https://image.cnbcfm.com/api/v1/image/108076093-1734255864910-gettyimages-2175353526-CHINA_RETAIL.jpeg?v=1734321284&w=1480&h=833&ffmt=webp&vtcrop=y",
        description: "China’s retail sales growth has slowed amid economic concerns, reflecting weaker consumer demand. The slowdown in sectors like electronics and automobiles signals challenges in sustaining recovery, despite government efforts to stimulate the economy.",
        fullArticle: "China's retail sales growth has slowed, raising concerns about the sustainability of the country's economic recovery. In recent months, consumer spending has weakened as rising inflation, uncertainty, and reduced purchasing power have dampened demand for goods. The slowdown comes at a time when China is also grappling with a property sector slump and broader economic challenges. Retail sectors such as electronics, apparel, and automobiles, once driving the recovery, have seen a significant decline in sales, signaling that many consumers are holding back on big-ticket purchases. Despite the government’s efforts to stimulate the economy through stimulus measures, the broader economic outlook remains uncertain. The slowdown in retail sales could impact overall growth, signaling that China’s recovery remains fragile, requiring further policy support to boost consumer confidence and spending."
    },
    {
        title:"U.S. Stock Market Experiences Volatility Amid Economic Concerns",
        image: "https://www.investopedia.com/thmb/1czdbmxf446PZqRIgtUNwBES80o=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-2164068362-7e47088e2e0d47a78fe20b44145cfb3b.jpg",
        description: "The U.S. stock market has faced increased volatility due to concerns over inflation, interest rates, and global economic risks. Investors remain cautious, with fluctuations in major indices influenced by economic data and external uncertainties.",
        fullArticle: "The U.S. stock market has experienced significant volatility in recent days, with major indices fluctuating dramatically due to mixed economic data and investor uncertainty. While strong corporate earnings reports initially provided optimism, concerns over inflation, interest rate hikes, and global economic risks have led to sharp sell-offs in certain sectors. The Federal Reserve’s tightening policies, aimed at controlling inflation, have added pressure on stock prices, as investors fear that higher interest rates could dampen economic growth. The market’s volatility has been exacerbated by global events, such as trade tensions and geopolitical uncertainties, which further contribute to investor hesitation. Analysts caution that while the market may experience periods of recovery, the overall outlook remains uncertain, with investors closely watching economic indicators for signals of stabilization or potential downturns."
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
