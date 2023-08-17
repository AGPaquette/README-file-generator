// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(badge) {
if (badge == "N/A") {
  return ""
}
else {
  return `[![License](https://img.shields.io/badge/License-${badge}-blue.svg)](https://opensource.org/licenses/${badge})`
};
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "") {
    return ""
  }
  else {
    return `## License
    ${license}`
  };

}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, installation, usage, license, contribution, tests, username, email}) {
  return `# ${title}
  ${description}

  ## Table of Context
  - [${title}](#title)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [License](#license)
  - [Test](#test)
  - [Questions](#questions)

  ## Instalation
  ${installation}

  ## Usage
  ${usage}

  ## Contribution
  ${contribution}

  ${renderLicenseSection(renderLicenseBadge(license))}

  ## Test
  ${tests}

  ## Questions
  GitHub Profile for ${username}:
  https://github.com/${username}

  Email:
  ${email}
`;
}

module.exports = generateMarkdown;
