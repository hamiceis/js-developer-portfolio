function updateDataProfile(profileData){
  const photo = document.getElementById('profile.photo')
  photo.src = profileData.photo
  photo.alt = profileData.name

  const name = document.getElementById('profile.name')
  name.textContent = profileData.name

  const job = document.getElementById('profile.job')
  job.textContent = profileData.job

  const location = document.getElementById('profile.location')
  location.textContent = profileData.location

  const phone = document.getElementById('profile.phone')
  phone.parentElement.href = `tel:+55${profileData.phone}`
  phone.innerText = profileData.phone

  const mail = document.getElementById('profile.email')
  mail.parentElement.href = `mailto:${profileData.email}`
  mail.innerText = profileData.email
}

function updateSkills(profileData){
  const skills = document.getElementById('profile.skills.softskills')
  const skill = profileData.skills.softSkills?.reduce((acc, skill) => {
    return acc += `<li>${skill}</li>`
  },'')
  skills.innerHTML = skill
}

function updatePersonalSkill(profileData){
  const personalSkill = document.getElementById('profile.skills.hardSkills')
  const hardSkills = profileData?.skills.hardSkills.map(skill => {
    return ` <li><img src="${skill.logo}" alt="${skill.name}"></li>`
  }).join('')

  personalSkill.innerHTML = hardSkills
}

function updateLanguages(profileData){
  const languagesList = document.querySelector('#languages')
  profileData?.languages.forEach(skill => {
    languagesList.innerHTML += `<li>${skill}</li>`
  })
}

function updatePortfolio(profileData){
  const portfolio = document.querySelector('.portfolio')
  const projects = profileData?.portfolio?.reduce((acc, { name,url }) => {
    acc += `<li><h3 class="github">${name}</h3><a href="${url}" target="_blank">${name}</a></li>`
    return acc
  },'')

  portfolio.innerHTML = projects
}

function updateExperience(profileData){
  const experinces = document.querySelector('.experience')
  experinces.innerHTML = profileData?.professionalExperience?.map(experience => {
    return `<li>
    <h3 class="title">${experience.name}</h3>
    <p class="period">${experience.period}</p>
    <p>${experience.description}</p>
  </li>`
  }).join('')
}

(async () => {
  const profileData = await fetchProfileData()
  updateDataProfile(profileData)
  updateSkills(profileData)
  updatePersonalSkill(profileData)
  updateLanguages(profileData)
  updatePortfolio(profileData)
  updateExperience(profileData)
})()