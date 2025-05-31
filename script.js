// Experience data
const experiences = [
    {
        title: "Growth & Product – POI",
        company: "Zomato",
        location: "Gurgaon",
        duration: "Dec'24 – Apr'25",
        description: [
            "Conducted user research, benchmarked it with 15+ apps across the globe, wrote 4 PRDs, and pitched 'Food Profile'",
            "Ideated 4+ growth initiatives (N2C, affordable meals, influencer program), driving repeat OV by 23% & first-time orders by 15%",
            "Launched 'Quick', leading supply expansion and hygiene (ORS, breach), while formulating strategies to optimize KPT across Zomato"
        ]
    },
    {
        title: "Product Management Intern",
        company: "Reway",
        location: "DTU - IIF startup",
        duration: "Sept'24 – Nov'24",
        description: [
            "Led 0→1 design of Reway's e-waste marketplace - ran 10+ user interviews to define personas, journeys & prioritized MVP features",
            "Grew DAUs 2x in 15 days via rapid rollout of in-app news & insights feature, boosting engagement among early adopters",
            "Drove end-to-end launch of NLP chatbot using Dialogflow, led roadmap, & automated 60%+ of support queries",
            "Improved document upload rate by 29% by introducing drag-and-drop and bulk upload on the seller portal"
        ]
    },
    {
        title: "Summer Analyst – Lead Advisory",
        company: "Grant Thornton",
        location: "New Delhi",
        duration: "May'24 – July'24",
        description: [
            "Prepared an in-depth analysis of 370+ mainboard IPOs over the past 12 years using Chittorgarh, S&P Capital IQ, and Private Circle",
            "Conducted company profiling & segmentation to identify business development opportunities worth ₹10 Cr",
            "Uncovered a 3% higher potential for IPO subscription in green chemistry-focused companies by analyzing 22+ chemical industry IPOs"
        ]
    },
    {
        title: "Business Consulting – C&O Intern",
        company: "KPMG India",
        location: "Hyderabad",
        duration: "Dec'23 – Jan'24",
        description: [
            "Proposed a reduction of INR 50 lakh yearly cost through competitive benchmarking on 15+ Top SKUs by supervising 6 market visits",
            "Performed a comprehensive work content analysis across 24 manufacturing lines in 3 plants, revealing potential cost saving of 1.3 Cr",
            "Collaborated in a team of 2 for sugar procurement, using 4+ strategic initiatives resulting in validated savings worth 1.35 Cr"
        ]
    }
];

const achievements = [
    {
        title: "Pre-Finalist (Top 1%)",
        description: "BrAINWARS 2024 - a prestigious case competition by Bain & Company (BCN)"
    },
    {
        title: "Campus Winner",
        description: "ZS Campus Beats 2024 – secured top spot in a business case challenge conducted by ZS Associates"
    },
    {
        title: "National Finalist (Top 10)",
        description: "IIM Lucknow's Marketing Case Competition – shortlisted among 950+ teams across India"
    },
    {
        title: "United Nations Millennium Fellow 2023",
        description: "International fellowship by the United Nations, for social-impact driven innovation"
    }
];

// Fetch GitHub profile and related data
async function fetchGitHubData() {
    try {
        const response = await fetch('https://api.github.com/users/harshagg257');
        if (!response.ok) {
            throw new Error('Failed to fetch GitHub profile');
        }
        const data = await response.json();
        updateProfile(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

function updateProfile(data) {
    // Update profile image
    const profileImage = document.getElementById('profile-image');
    profileImage.src = data.avatar_url;
    
    // Update GitHub link
    const githubLink = document.getElementById('github-link');
    githubLink.href = data.html_url;
}

function updateExperience() {
    const experienceContainer = document.getElementById('experience-container');
    experienceContainer.innerHTML = experiences.map(exp => `
        <div class="experience-item">
            <h3>${exp.title} - ${exp.company}</h3>
            <h4>${exp.location} | ${exp.duration}</h4>
            <ul>
                ${exp.description.map(desc => `<li>${desc}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

function updateAchievements() {
    const achievementsContainer = document.getElementById('achievements-container');
    achievementsContainer.innerHTML = achievements.map(achievement => `
        <div class="achievement-item">
            <h3>${achievement.title}</h3>
            <p>${achievement.description}</p>
        </div>
    `).join('');
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', () => {
    fetchGitHubData();
    updateExperience();
    updateAchievements();
});
