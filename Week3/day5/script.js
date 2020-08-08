// body
let main = document.body
main.setAttribute('style','align-content:center;padding-left:200px;padding-right:200px;margin-top:50px;')


// header
let container = document.createElement('div')
container.setAttribute('style','height:100%;')

let header_div = document.createElement('div')
header_div.setAttribute('style','height:400px;width:100%;background-color:grey;align-content:center;')

let image_div = document.createElement('div')
image_div.setAttribute('style','width:190px;height:190px;position:relative;left:410px;top:150px;')

let profile_pic = document.createElement('img')
profile_pic.setAttribute('src','1.jpg')
profile_pic.setAttribute('style','width:100%;height:100%;border-radius:50%;border:5px dotted yellow;position:relative')

let header_bar = document.createElement('div')
header_bar.setAttribute('style','background-color:white;height:45px;position:relative;top:130px;')

let header_name = document.createElement('div')
header_name.setAttribute('style','background-color:#F3B02A;width:500px;height:80px;font-size:50px;text-align:center;padding-top:20px;margin-left:255px;margin-top:60px;position:relative;font-family:monospace;')
header_name.innerText = "Siddhant Singh"


image_div.appendChild(profile_pic)
header_div.appendChild(image_div)
header_div.appendChild(header_bar)
header_div.appendChild(header_name)
container.appendChild(header_div)

// contact address
let address_div = document.createElement('div')
address_div.setAttribute('style','background-color:white;text-align:center;font-family:monospace;height:25px;font-size:15px;padding-top:10px;border-bottom:2px solid black;')
address_div.innerText = "Varanasi India | +919140780963 | siddhantk.singh.phe14@iitbhu.ac.in | www.sid10on10.info | "

container.appendChild(address_div)



// main content
let main_div = document.createElement('div')
main_div.setAttribute('style','display:flex;margin-top:15px;height:600px;')


// left side of main div

let first_column = document.createElement('div')
first_column.setAttribute('style','flex:50%;border-right:2px solid black;')

let profile = document.createElement('div')
profile.setAttribute('style','background-color:white;')

// profile icon
let profile_span = document.createElement('span')
let profile_icon = document.createElement('img')
profile_icon.setAttribute('src', 'profile.png')
profile_icon.setAttribute('style','width:50px;height:50px;margin-left:60px;')

profile_span.appendChild(profile_icon)

// profile header
let profile_header = document.createElement('span')
profile_header.setAttribute('style', 'font-size:25px;padding-bottom:30px;font-family:monospace;padding-left:10px;')
profile_header.innerText = "Profile"


//profile contents
 let profile_content = document.createElement('p')
 profile_content.setAttribute('style', 'text-align:center;font-family:monospace;')
 profile_content.innerText = "I am a full stack developer with strong fundamentals of Python and JS with hands on experience on Django, Bootstrap and MERN."

profile.appendChild(profile_span)
profile.appendChild(profile_header)
profile.appendChild(profile_content)

// skills
let skills = document.createElement('div')
skills.setAttribute('style','background-color:white;')

// skills icon
let skills_span = document.createElement('span')
let skills_icon = document.createElement('img')
skills_icon.setAttribute('src', '2.png')
skills_icon.setAttribute('style','width:50px;height:50px;margin-left:60px;')

skills_span.appendChild(skills_icon)

// skills header
let skills_header = document.createElement('span')
skills_header.setAttribute('style', 'font-size:25px;padding-bottom:30px;font-family:monospace;padding-left:10px;')
skills_header.innerText = "Skills"

// skills content
let skills_skill_header = document.createElement('p')
skills_skill_header.innerText = "Technical Skills"
skills_skill_header.setAttribute('style','text-align:center;font-size:20px;font-family:monospace;')

// skills each skill
let skill_1 = document.createElement('div')

let skill_1_name = document.createElement('span')
skill_1_name.innerText = "Javascript"
skill_1_name.setAttribute('style','display:inline-block;float:left;')


let skill_1_percent = document.createElement('span')
skill_1_percent.setAttribute('style','display:inline-block;float:right;')

let skill_1_range = document.createElement('input')
skill_1_range.setAttribute('type','range')
skill_1_percent.appendChild(skill_1_range)

skill_1.appendChild(skill_1_name)
skill_1.appendChild(skill_1_percent)



skills.appendChild(skills_icon)
skills.appendChild(skills_header)
skills.appendChild(skills_skill_header)
skills.appendChild(skill_1)

let work = document.createElement('div')
work.setAttribute('style','background-color:white;margin-top:60px;')

// work icon
let work_span = document.createElement('span')
let work_icon = document.createElement('img')
work_icon.setAttribute('src', '3.png')
work_icon.setAttribute('style','width:50px;height:50px;margin-left:30px;')

work_span.appendChild(work_icon)

// work header
let work_header = document.createElement('span')
work_header.setAttribute('style', 'font-size:25px;padding-bottom:30px;font-family:monospace;padding-left:10px;')
work_header.innerText = "Work Experience"


//work contents
 let work_content = document.createElement('p')
 work_content.setAttribute('style', 'text-align:center;font-family:monospace;margin-top:30px;padding-right:10px;')
 work_content.innerText = "I have 3 years of experience as a freelance on codementor where i have worked on python assignments on a regular basis. I have 5 star rating from clients all across the globe.I have worked as a full time role for Tessact mumbai and Notatee kuwait."

 let work_content2 = document.createElement('h2')
 work_content2.setAttribute('style', 'text-align:center;font-family:monospace;margin-top:5px;')
 work_content2.innerText = "Codementor"

 let work_content3 = document.createElement('p')
 work_content3.setAttribute('style', 'text-align:center;font-family:monospace;margin-top:15px;padding-right:10px;')
 work_content3.innerText = "I have worked as a professional freelancer at codementor where i worked on Python assignments on a regular basis. I have 5 star rating there.I have worked on 59 projects."

 


work.appendChild(work_span)
work.appendChild(work_header)
work.appendChild(work_content)
work.appendChild(work_content2)
work.appendChild(work_content3)



first_column.appendChild(profile)
first_column.appendChild(skills)
first_column.appendChild(work)







//  right side of the main div

let second_column = document.createElement('div')
second_column.setAttribute('style','flex:50%;')

let work_content4 = document.createElement('h2')
work_content4.setAttribute('style', 'text-align:center;font-family:monospace;margin-top:5px;')
work_content4.innerText = "Tessact"

let work_content5 = document.createElement('p')
work_content5.setAttribute('style', 'text-align:center;font-family:monospace;margin-top:15px;padding-left:10px;')
work_content5.innerText = "I have worked as a back end engineer at Tessact where i worked on Python based REST API on Django framework.Work was mostly focused on the video analytics simplified using machine learning and AI so that it can reduce efforts."

let work_content6 = document.createElement('h2')
work_content6.setAttribute('style', 'text-align:center;font-family:monospace;margin-top:25px;')
work_content6.innerText = "Notatee"

let work_content7 = document.createElement('p')
work_content7.setAttribute('style', 'text-align:center;font-family:monospace;margin-top:15px;padding-left:10px;')
work_content7.innerText = "I have worked as a back end developer at Notatee where i worked on Python based Website on top of Django framework.Work was mostly focused on the back end logics and front end development using vue.js."

let education = document.createElement('h1')
education.innerText = "Education"
education.setAttribute('style', 'font-size:25px;font-family:monospace;text-align:center;margin-top:50px;')

let education1 = document.createElement('h2')
education1.innerText = "IIT-BHU"
education1.setAttribute('style', 'font-size:25px;font-family:monospace;text-align:center;margin-top:15px;')

let education2 = document.createElement('p')
education2.innerText = "I have qualified the IIT JEE Entrance Exam in 2014. I got admitted into IIT BHU for a IDD (B.tech & M.tech) course Pharmaceutical Engineering. I have started as a front end developer in 1st year of my college. Then i started with Python and django and then i got into institute web development team and we built placement portal from scratch which was built on top of Django framework. "
education2.setAttribute('style','font-family:monospace;text-align:center;padding-left:10px;')

second_column.append(work_content4,work_content5,work_content6,work_content7,education,education1,education2)



main_div.appendChild(first_column)
main_div.appendChild(second_column)

container.appendChild(main_div)




main.appendChild(container)

