// update emojis
twemoji.parse(document.body, {
    folder: 'svg',
    ext: '.svg'
})

// set year
document.getElementById('year').innerHTML = new Date().getFullYear()

// toggle theme
const themeToggler = document.getElementById('themeToggle')
const body = document.body
let isDark = false
let localStorageIsDark = eval(localStorage.getItem('isDarkTheme'))
if (localStorageIsDark !== null) isDark = localStorageIsDark
if (isDark) {
    themeToggler.innerHTML = 'Dark Mode'
    body.classList.add("dark")
}
themeToggler.addEventListener("click", function() {
    body.style.transition = "0.1s ease all"
    isDark = !isDark
    if (isDark) {
        themeToggler.innerHTML = 'Dark Mode'
        body.classList.add("dark")
    } else {
        themeToggler.innerHTML = 'Light Mode'
        body.classList.remove("dark")
    }
    localStorage.setItem('isDarkTheme', isDark.toString())
})

// check if device is tablet
const userAgent = navigator.userAgent.toLowerCase()
const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent)

// turn project icon into gif on hover
if (!isTablet) {
    document.querySelectorAll('.scrollList__item__icon').forEach(item => {
        item.addEventListener('mouseenter', iconToGif)
        item.addEventListener('mouseleave', gifToIcon)
    })
}

// project items section

let showCode = false
const projectFilters = document.getElementById('projectFilters')
const projectContainer = document.getElementById('projectContainer')
const showCodeBtn = document.getElementById('projectShowCodeBtn')
populateFiltersDOM(projects)
populateProjectItemsDOM(projects)

projectFilters.addEventListener('click', function(ev) {
    if (ev.target.classList.contains('filterTag')) {
        const tag = ev.target.getAttribute('tag')
        updateFiltersActiveTag(tag)
        filterProjectItemsDOMByTag(tag)
    }
})

showCodeBtn.addEventListener('click', function() {
    showCode = !showCode
    if (showCode) showCodeBtn.classList.add('active')
    else showCodeBtn.classList.remove('active')
    updateProjectLinks()
})

if (!isTablet) {
    projectContainer.addEventListener('mouseover', function(ev) {
        const item = ev.target.closest('.projectItem')
        if (item != null) {
            iconToGif(item)
        }
    })

    projectContainer.addEventListener('mouseout', function(ev) {
        const item = ev.target.closest('.projectItem')
        if (item != null) {
            gifToIcon(item)
        }
    })
}

// scrollShow track items
scrollShow.addItems()

// get an array of the union of all the tags
function getAllTags(projects) {
    let tags = []
    projects.forEach(item => {
        item.tags.forEach(tag => {
            if (!tags.includes(tag)) tags.push(tag)
        })
    })
    tags.sort()
    return tags
}

// initial population of tag filtering buttons 
function populateFiltersDOM(projects) {
    const tags = getAllTags(projects)
    tags.forEach(tag => {
        projectFilters.insertAdjacentHTML('beforeend', 
            `<div class="filterTag" tag=${tag}>
                ${tag}
            </div>`
        )
    })
}

// highlight the selected tag filtering button
function updateFiltersActiveTag(tag) {
    projectFilters.getElementsByClassName('active')[0].classList.remove('active')
    if (tag == null) { // show all
        document.getElementById('filterShowAll').classList.add('active')
    } else { // make filter tag active
        const filterTag = projectFilters.getElementsByClassName('filterTag')
        for (let i=0; i < filterTag.length; i++) {
            const element = filterTag[i]
            if (element.getAttribute('tag') == tag) {
                element.classList.add('active')
            }
        }
    }
}

// initial population of project items DOM
function populateProjectItemsDOM(projects) {
    projectContainer.innerHTML = ''
    for (let i = 0; i < projects.length; i++) {
        const item = projects[i]
        const tagDOM = item.tags.map(tag => `<div class="projectTag" tag=${tag}>${tag}</div>`).join('')
        projectContainer.insertAdjacentHTML('beforeend',
            `
            <a href="" target="_blank" 
                class="projectLink scrollShow" 
                data-scroll-show-element-percent="0"
                hrefdemo="${item.link}" 
                hrefcode="${item.link_code}">
                <div class="projectItem">
                    <div class="projectThumbnailContainer">
                        <img class="projectThumbnail" 
                            src="${item.thumbnail_img}" 
                            srcgif="${item.thumbnail_gif}"
                            alt="" >
                        <div class="githubLinkStamp">GitHub Code</div>
                    </div>
                    <div>
                        <div class="projectName">${item.name}</div>
                        <div class="projectTagContainer">${tagDOM}</div>
                    </div>
                </div>
            </a>
            `
        )
    }
    updateProjectLinks()
}

// filter-out (hide) project items DOM if they don't have the selected tag
function filterProjectItemsDOMByTag(tag) {
    const projectItems = projectContainer.getElementsByClassName('projectLink')
    const hasMatchingTag = projects.map(p => tag==null ? true : p.tags.includes(tag))
    for (let i = 0; i < projectItems.length; i++) {
        const item = projectItems[i];
        if (hasMatchingTag[i]) {
            item.style.display = null
        } else {
            item.style.display = 'none'
        }
    }
    const projectTags = projectContainer.getElementsByClassName('projectTag')
    for (let i = 0; i < projectTags.length; i++) {
        const projectTag = projectTags[i]
        if (projectTag.getAttribute('tag') == tag) {
            projectTag.classList.add('active')
        } else {
            projectTag.classList.remove('active')
        }
    }
    scrollShow.onResize()
}

// "change" project items links between "Demo link" and "GitHub code link"
function updateProjectLinks() {
    const projectLink = projectContainer.getElementsByClassName('projectLink')
    const gitHubLinkStamp = projectContainer.getElementsByClassName('githubLinkStamp')
    for (let i = 0; i < projectLink.length; i++) {
        const atag = projectLink[i]
        const hrefCode = atag.getAttribute('hrefcode')
        const hrefDemo = atag.getAttribute('hrefdemo')
        let showCodeForThis = showCode
        if (hrefCode.length && !hrefDemo.length) {
            showCodeForThis = true
        } else if (!hrefCode.length && hrefDemo.length) {
            showCodeForThis = false
        }
        const href = showCodeForThis ? hrefCode : hrefDemo
        atag.href = href
        const stamp = gitHubLinkStamp[i]
        if (showCodeForThis) stamp.classList.add('active')
        else stamp.classList.remove('active')
    }
}

// turn project icon into gif on hover
function iconToGif(item) {
    const target = item.getElementsByClassName('projectThumbnail')[0]
    if (target.hasAttribute('srcgif') && target.getAttribute('srcgif').length) {
        target.setAttribute('srcicon', target.getAttribute('src'))
        target.setAttribute('src', target.getAttribute('srcgif'))
    }
}
function gifToIcon(item) {
    const target = item.getElementsByClassName('projectThumbnail')[0]
    if (target.hasAttribute('srcicon') && target.getAttribute('srcicon').length) {
        target.setAttribute('srcgif', target.getAttribute('src'))
        target.setAttribute('src', target.getAttribute('srcicon'))
    }
}
