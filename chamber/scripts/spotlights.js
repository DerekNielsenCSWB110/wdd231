const spotlightContainer = document.getElementById("spotlight-container");

const membersURL = "data/members.json"; // update path if needed

async function loadSpotlights() {
  try {
    const response = await fetch(membersURL);
    if (!response.ok) throw Error(await response.text());
    const data = await response.json();

    const qualifiedMembers = data.members.filter(member =>
      member.membershipLevel === "Gold" || member.membershipLevel === "Silver"
    );

    const shuffled = qualifiedMembers.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.floor(Math.random() * 2) + 2);

    displaySpotlights(selected);
  } catch (error) {
    console.error("Spotlight error:", error);
  }
}

function displaySpotlights(members) {
  members.forEach(member => {
    const card = document.createElement("section");
    card.classList.add("spotlight-card");

    card.innerHTML = `
      <h4>${member.name}</h4>
      <img src="${member.logo}" alt="${member.name} logo" loading="lazy" />
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <p><strong>${member.membershipLevel} Member</strong></p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;

    spotlightContainer.appendChild(card);
  });
}

document.getElementById("lastModified").textContent = document.lastModified;

loadSpotlights();
