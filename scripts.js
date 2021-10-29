const LinksSocialMedia ={
  github: 'caiocesaroliveira',
  youtube: '',
  facebook: 'caiojr91',
  instagram: 'caiojr91',
  twitter: 'caiojr91',
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()