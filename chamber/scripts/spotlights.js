const spotlightContainer = document.getElementById("spotlight-container");
const membersURL = "../data/members.json"; // go up from chambers/ to data/

async function loadSpotlights() {
  try {
    const response = await fetch(membersURL);
    if (!response.ok) throw Error("Failed to fetch members.json");

    const data = await response.json(); // Define 'data' BEFORE using it
    if (!data.members) throw Error("No members array in JSON");

    // Filter qualified members
    const qualifiedMembers = data.members.filter(member =>
      member.membershipLevel === "Gold" || member.membershipLevel === "Silver"
    );

    if (qualifiedMembers.length === 0) {
      spotlightContainer.innerHTML = "<p>No featured members at this time.</p>";
      return;
    }

    // Randomly select 2-3 members
    const shuffled = qualifiedMembers.sort(() => 0.5 - Math.random());
    const selectedCount = Math.min(Math.floor(Math.random() * 2) + 2, qualifiedMembers.length);
    const selected = shuffled.slice(0, selectedCount);

    displaySpotlights(selected);

  } catch (error) {
    console.error("Spotlight error:", error);
    spotlightContainer.innerHTML = "<p>Error loading spotlights.</p>";
  }
}

function displaySpotlights(members) {
  spotlightContainer.innerHTML = ""; // Clear container first

  members.forEach(member => {
    const card = document.createElement("section");
    card.classList.add("spotlight-card");

    card.innerHTML = `
      <h4>${member.name}</h4>
      <img src="${member.logo}" alt="${member.name} logo" loading="lazy" />
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <p><strong>${member.membershipLevel} Member</strong></p>
      <a href="${member.website}" target="_blank" rel="noopener">Visit Website</a>
    `;

    spotlightContainer.appendChild(card);
  });
}

// Update last modified
document.getElementById("lastModified").textContent = document.lastModified;

// Load the spotlights
loadSpotlights();
