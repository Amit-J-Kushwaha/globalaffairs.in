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
            title:"South Korean President Faces Impeachment and Arrest",
            image: "https://c.ndtvimg.com/2024-12/lm4muqug_yoon-suk-yeol-afp_625x300_29_December_24.jpeg?im=FeatureCrop,algorithm=dnn,width=773,height=435",
            description: "South Korea’s president faces impeachment amid corruption allegations, triggering public protests and political turmoil. Lawmakers pursue legal action, while citizens demand transparency. The unfolding crisis risks destabilizing the country and damaging its international reputation.",
            fullArticle: "South Korea is witnessing a political crisis as its president faces impeachment and potential arrest. The controversy stems from allegations of corruption and abuse of power, sparking widespread protests. Lawmakers initiated impeachment proceedings following evidence of financial misconduct and ties to high-profile scandals. Citizens demand transparency and accountability, leading to growing public pressure. Meanwhile, opposition parties and civil society groups have united to push for justice. The situation has deeply divided the nation, raising concerns over political stability and the country’s global standing."
        },
        {
            title:"Ukraine Initiates Offensive in Russia's Kursk Region",
            image: "https://img.republicworld.com/tr:w-800,h-450,q-75,f-auto/rimages/ru-169857723065416_9.webp",
            description: "Ukraine has launched an offensive in Russia's Kursk region, targeting critical infrastructure to disrupt supply lines. Russia condemned the attack and promised retaliation, intensifying tensions. The move underscores the escalating conflict, drawing international attention and raising concerns over potential regional instability.",
            fullArticle: "Tensions between Ukraine and Russia have escalated as Ukrainian forces reportedly launched an offensive in Russia's Kursk region. The attack targeted key infrastructure, including power facilities and railway lines, disrupting operations and sparking international concern. Ukrainian officials claim the move aims to counter Russian aggression and weaken supply routes supporting the ongoing conflict. Russia has condemned the offensive as a violation of its sovereignty, vowing retaliation. The situation has drawn mixed reactions globally, with some nations urging restraint while others reaffirm their support for Ukraine. The offensive highlights the intensifying nature of the conflict, raising fears of further escalation in the region."
        },
        {
            title:"Israeli Airstrikes in Gaza",
            image: "https://assets3.cbsnewsstatic.com/hub/i/r/2024/12/26/69a022b8-be3b-4e0a-b972-2356f45b1e60/thumbnail/620x413/312e934844a8b5511781ec21ec8dfea3/2024-12-26t143713z-1959505065-rc22xbam0cu0-rtrmadp-3-israel-palestinians-yemen-strikes.jpg?v=fa9977353833f46f40b07abcd9d5240b",
            description: "Israeli airstrikes in Gaza reportedly killed over 40 people, including a Hamas police chief. The strikes were in response to rocket attacks, escalating tensions with Hamas. Civilians suffered significant casualties, sparking international calls for de-escalation and renewed focus on resolving the ongoing conflict.",
            fullArticle: "Israeli forces conducted airstrikes in Gaza, reportedly killing over 40 people, including a senior Hamas police chief. The strikes came in response to ongoing rocket attacks from Gaza, as tensions between Israel and Hamas intensified. Civilians were among the casualties, raising concerns over the humanitarian impact. The Israeli government stated the operation targeted militant infrastructure to neutralize threats, while Hamas condemned the attacks as an unjustified escalation. The international community has called for immediate de-escalation to prevent further loss of life. This development marks yet another chapter in the long-standing Israeli-Palestinian conflict, highlighting the urgent need for diplomatic solutions."
        },
        {
            title:"China Sanctions Canadian Institutions Over Uyghur and Tibet Issues",
            image: "https://www.hindustantimes.com/ht-img/img/2024/12/22/550x309/Chinese-President-Xi-Jinping-gestures-as-he-talks-_1734622859786_1734864401956.jpg",
            description: "China sanctioned Canadian institutions and individuals over their criticism of human rights violations in Xinjiang and Tibet. The sanctions escalate tensions between the two nations, highlighting ongoing disputes about the treatment of Uyghurs and Tibetans and further complicating their diplomatic relationship.",
            fullArticle: "China has imposed sanctions on several Canadian institutions and individuals in response to their criticism of its human rights record in Xinjiang and Tibet. The targeted entities reportedly supported efforts to hold China accountable for alleged abuses against Uyghur Muslims and Tibetan communities. Beijing condemned these actions as interference in its internal affairs and accused Canada of spreading misinformation. The sanctions include travel bans and restrictions on business dealings with Chinese entities. Canada, alongside its allies, has consistently raised concerns over China's treatment of ethnic minorities, calling for greater accountability. The move further strains China-Canada relations, which have been tense due to previous diplomatic disputes."
        },
        {
            title:"Russia Captures Villages in Ukraine",
            image: "https://th-i.thgim.com/public/incoming/8e2aep/article69016989.ece/alternates/LANDSCAPE_1200/2024-12-02T130927Z_1810020303_RC2VGBAKYFH3_RTRMADP_3_UKRAINE-CRISIS-RUSSIA-TRAINING.JPG",
            description: "Russian forces captured two villages in Ukraine, advancing toward Sloviansk and Kramatorsk. The offensive intensifies the conflict, raising international concerns over escalating violence and worsening humanitarian conditions. Calls for diplomacy grow as the situation threatens further destabilization.",
            fullArticle: "Russian forces have reportedly captured two villages in eastern Ukraine, marking a strategic advance toward the key cities of Sloviansk and Kramatorsk. The move comes amid heavy fighting in the contested region, with Ukraine struggling to repel the offensive. Russian authorities claim the operation aims to secure liberated territories, while Ukrainian officials condemn it as another act of aggression. The capture of these villages allows Russia to strengthen its foothold and threatens further territorial gains. International observers have expressed concern over escalating violence, calling for renewed diplomatic efforts to end the conflict. The situation highlights the continued volatility in the region, with the humanitarian crisis worsening as civilians flee the affected areas."
        },
        {
            title:"Small Plane Crash in Brazil",
            image: "https://media.cnn.com/api/v1/images/stellar/prod/ap24357784272875.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp",
            description: "A small plane crash in Brazil’s Gramado region killed at least 10 people. The aircraft, used for sightseeing, went down shortly after takeoff, and no survivors were found. Investigations are underway, with mechanical failure or weather issues considered possible causes. The tragedy has shocked both locals and tourists.",
            fullArticle: "A small plane crashed in Brazil’s Gramado region, killing at least 10 people, including both passengers and crew members. The aircraft, a light sightseeing plane, went down in a densely forested area shortly after taking off from a nearby airport. Rescue teams rushed to the scene but found no survivors. Local authorities are investigating the incident, with early reports suggesting mechanical failure or unfavorable weather conditions as possible causes. The crash has shocked the community in Gramado, a popular tourist destination known for its picturesque landscapes. The tragedy has raised concerns about the safety of small aircraft operations in busy tourist regions."
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
    