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

(async () => {
  const profileData = await fetchProfileData()
  updateDataProfile(profileData)
  updateSkills(profileData)
  updatePersonalSkill(profileData)
})()